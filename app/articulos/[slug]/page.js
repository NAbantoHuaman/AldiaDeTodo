import Link from 'next/link';
import { ChevronRight, Facebook, Twitter, TrendingUp } from 'lucide-react';
import ArticleCard from '@/components/ArticleCard';
import AdsBanner from '@/components/AdsBanner';
import { transformNewsItem } from '@/lib/newsTransformer';
import { generateArticleAnalysis } from '@/lib/ai';
import { getCachedAnalysis, setCachedAnalysis } from '@/lib/cache';
import prisma from '@/lib/prisma';

export const revalidate = 60;
export const dynamicParams = true;

const parseDateToISO = (dateStr) => {
  if (!dateStr) return new Date().toISOString();
  const months = { 'Ene': 'Jan', 'Feb': 'Feb', 'Mar': 'Mar', 'Abr': 'Apr', 'May': 'May', 'Jun': 'Jun', 'Jul': 'Jul', 'Ago': 'Aug', 'Sep': 'Sep', 'Oct': 'Oct', 'Nov': 'Nov', 'Dic': 'Dec' };
  let normalized = dateStr;
  Object.entries(months).forEach(([es, en]) => {
    normalized = normalized.replace(es, en);
  });
  const d = new Date(normalized);
  return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  let dbArticle = await prisma.article.findUnique({
    where: { slug },
    include: { category: true }
  });
  
  let article = null;
  
  if (dbArticle) {
    article = {
      ...dbArticle,
      category: dbArticle.category.name,
      excerpt: dbArticle.content.replace(/<[^>]+>/g, '').substring(0, 150) + "..."
    };
  } else {
    const { getRSSNews } = await import('@/lib/rss');
    const news = await getRSSNews();
    const dynamicArticle = news.find((n) => n.slug === slug);
    if (dynamicArticle) {
        article = dynamicArticle;
    }
  }

  if (!article) {
    return {
      title: 'Artículo no encontrado',
      description: 'El artículo que buscas no existe o ha sido movido.'
    };
  }

  const isoDate = parseDateToISO(article.date);

  return {
    title: article.title,
    description: article.excerpt || `Lee el artículo completo sobre ${article.title} en AldiaDeTodo.`,
    openGraph: {
      title: article.title,
      description: article.excerpt || `Lee más sobre ${article.title}.`,
      url: `https://aldiadetodo.com/articulos/${article.slug}`,
      type: 'article',
      images: [
        {
          url: article.image || 'https://aldiadetodo.com/images/default-hero.jpg',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      authors: [article.author || 'AldiaDeTodo'],
      publishedTime: isoDate,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image || 'https://aldiadetodo.com/images/default-hero.jpg'],
    },
    alternates: {
      canonical: `https://aldiadetodo.com/articulos/${article.slug}`,
    },
  };
}

export default async function ArticleDetailPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  // 1. Try to find in Database Content
  let dbArticle = await prisma.article.findUnique({
    where: { slug },
    include: { category: true }
  });
  
  let article = null;
  let htmlContent = "";
  let isNews = false;

  if (dbArticle) {
    article = {
      ...dbArticle,
      category: dbArticle.category.name,
      excerpt: dbArticle.content.replace(/<[^>]+>/g, '').substring(0, 150) + "..."
    };
    htmlContent = dbArticle.content;
    isNews = dbArticle.isNews;
  } else {
    // 2. Try to find in Dynamic RSS Content
    const { getRSSNews } = await import('@/lib/rss');
    const news = await getRSSNews();
    const dynamicArticle = news.find((n) => n.slug === slug);
    
    if (dynamicArticle) {
      article = dynamicArticle;
      htmlContent = dynamicArticle.content || "";
      isNews = true;
    }
  }

  if (!article) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Artículo no encontrado</h2>
            <p className="text-gray-600 mb-6">Lo sentimos, la noticia que buscas puede haber expirado o no está disponible.</p>
            <Link href="/" className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                Volver al Inicio
            </Link>
        </div>
    );
  }

  // --- AGGREGATOR MODE (Safe for AdSense) ---
  // We do NOT extract full content for external news to avoid copyright/AdSense issues.
  // We strictly show the RSS summary and link to the source.
  const NEWS_CATEGORIES = ["Actualidad", "Política", "Mundo", "Noticias", "Tecnología", "Deportes", "Entretenimiento", "Economía", "Negocios"];
  
  // If not already flagged as news (from dynamic), check category
  // We rely on the source (Static vs RSS) to determine if it's news.
  // Static articles (written by us) should always show full content.
  // if (!isNews && article) {
  //     isNews = NEWS_CATEGORIES.includes(article.category);
  // }
  
  // If it's a news item, htmlContent should be the RSS summary/snippet
  if (isNews && !htmlContent && article.excerpt) {
      htmlContent = `<p>${article.excerpt}</p>`;
  }

  // JSON-LD Structured Data
  const isoDate = parseDateToISO(article.date);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': isNews ? 'NewsArticle' : 'Article',
    headline: article.title,
    image: [article.image || 'https://aldiadetodo.com/images/default-hero.jpg'],
    datePublished: isoDate,
    dateModified: isoDate,
    description: article.excerpt,
    author: [{
        '@type': 'Person',
        name: article.author || 'AldiaDeTodo',
        url: 'https://aldiadetodo.com'
    }],
    publisher: {
        '@type': 'Organization',
        name: 'AldiaDeTodo',
        logo: {
            '@type': 'ImageObject',
            url: 'https://aldiadetodo.com/logo.png' 
        }
    },
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://aldiadetodo.com/articulos/${article.slug}`
    }
  };

  // --------------------------------------------------------

  return (
    <article className="min-h-screen bg-white">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <div className="relative h-[400px] w-full bg-gray-900 overflow-hidden group">
        {/* 1. Blurred Background (Atmosphere) */}
        <div className="absolute inset-0">
             <img 
                src={article.image || "/images/default-hero.jpg"} 
                alt=""
                className="w-full h-full object-cover blur-xl opacity-50 scale-110" 
             />
        </div>

        {/* 2. Main Image (Sharp & Contained) */}
        <div className="relative h-full w-full flex justify-center items-center">
             <img 
               src={article.image || "/images/default-hero.jpg"} 
               alt={article.title}
               className="h-full w-auto object-contain max-w-full z-10 shadow-lg" 
             />
        </div>

        {/* 3. Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent flex items-end z-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-100 backdrop-blur-sm border border-indigo-500/30 mb-6">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight shadow-sm">
              {article.title}
            </h1>
            <div className="flex items-center text-gray-300 text-sm font-medium space-x-4">
                <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    {article.date || "Fecha desconocida"}
                </span>
                {article.author && (
                    <span className="flex items-center">
                        <span className="mx-2 text-gray-500">•</span>
                        <svg className="w-4 h-4 mr-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        {article.author}
                    </span>
                )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Author/Share Bar */}  
        <div className="flex justify-between items-center border-b border-gray-100 pb-8 mb-12">
            <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-lg">
                    {article.author ? article.author[0] : "A"}
                </div>
                <div>
                    <p className="text-sm font-bold text-gray-900">{article.author || "Redacción Aldia"}</p>
                    <p className="text-xs text-gray-500">{isNews ? "Fuente Externa" : "Editor Senior"}</p>
                </div>
            </div>
            <div className="flex space-x-3">
                 <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition"><Facebook className="w-5 h-5"/></button>
                 <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition"><Twitter className="w-5 h-5"/></button>
            </div>
        </div>

        {/* Dynamic Ad (Top) */}
        <div className="my-10">
           <AdsBanner slot="1122334455" format="article-top" label="Publicidad" />
        </div>

        {/* Content / Summary - Premium Editorial Design */}
        <div className="prose prose-lg prose-indigo max-w-none text-gray-800 leading-loose space-y-8">
            {/* If it's a News Item, show as a "Teaser" with high-end typography */}
            {isNews && (
                <div className="relative">
                    {/* Editorial Text */}
                    <div 
                        className="font-serif text-xl md:text-2xl leading-relaxed text-gray-700 first-letter:text-5xl first-letter:font-bold first-letter:text-gray-900 first-letter:mr-3 first-letter:float-left"
                        dangerouslySetInnerHTML={{ __html: htmlContent }} 
                    />
                    
                    {/* Gradient Fade to imply more content */}
                    <div className="h-24 w-full bg-linear-to-b from-transparent to-white absolute bottom-0"></div>
                </div>
            )}

            {/* If it's a Static Article, we just show the content normally */}
            {!isNews && <div dangerouslySetInnerHTML={{ __html: htmlContent }} />}
        </div>

        {/* "Read Full Article" Call-to-Action */}
        {isNews && article.link && (
            <div className="mt-8 p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center relative overflow-hidden group">
                {/* Background decorative pattern */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Continúa leyendo esta historia
                </h3>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                    Este artículo se encuentra completo en la página oficial de <strong>{article.source || "la fuente original"}</strong>.
                </p>

                <a 
                    href={article.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-8 py-4 bg-gray-900 text-white text-lg font-bold rounded-full hover:bg-indigo-600 transition-colors duration-300 shadow-xl shadow-indigo-500/20 group-hover:scale-105 transform"
                >
                    Leer artículo completo
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
                
                <p className="mt-6 text-xs text-gray-400 uppercase tracking-widest">
                    Fuente Externa • {article.source || "Noticias"}
                </p>
            </div>
        )}

        {/* Footer Ad */}
        <div className="mt-16 pt-8 border-t border-gray-100">
             <AdsBanner slot="5566778899" format="horizontal" label="Publicidad" />
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
            <Link href={isNews ? "/noticias" : "/articulos"} className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all">
                <svg className="h-5 w-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Volver a {isNews ? "Noticias" : "Artículos"}
            </Link>
        </div>
      </div>
    </article>
  );
}