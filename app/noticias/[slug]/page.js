import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Facebook, Twitter, TrendingUp, Calendar } from 'lucide-react';
import AdsBanner from '@/components/AdsBanner';
import ShareButtons from '@/components/ShareButtons';
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

  const dbArticle = await prisma.article.findUnique({
    where: { slug },
    include: { category: true }
  });

  if (!dbArticle) {
    return {
      title: 'Noticia no encontrada',
      description: 'La noticia que buscas no existe o ha sido movida.',
      robots: { index: false, follow: false },
    };
  }

  const article = {
    ...dbArticle,
    category: dbArticle.category?.name || 'Noticias',
    excerpt: dbArticle.content.replace(/<[^>]+>/g, '').substring(0, 150) + "..."
  };

  const isoDate = parseDateToISO(article.date);

  return {
    title: article.title,
    description: article.excerpt || `Lee el artículo completo sobre ${article.title} en AldiaDeTodo.`,
    openGraph: {
      title: article.title,
      description: article.excerpt || `Lee más sobre ${article.title}.`,
      url: `https://aldiadetodo.com/noticias/${article.slug}`,
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
      canonical: `https://aldiadetodo.com/noticias/${article.slug}`,
    },
  };
}

export default async function NewsDetailPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  const dbArticle = await prisma.article.findUnique({
    where: { slug },
    include: { category: true }
  });

  if (!dbArticle) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center font-inter">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 font-outfit">Noticia no encontrada</h2>
            <p className="text-slate-600 mb-6">Lo sentimos, la noticia que buscas no existe o ha sido movida.</p>
            <Link href="/noticias" className="px-8 py-3 bg-slate-900 text-white rounded-2xl hover:bg-indigo-600 transition shadow-xl">
                Ver todas las noticias
            </Link>
        </div>
    );
  }

  const article = {
    ...dbArticle,
    category: dbArticle.category?.name || 'Noticias',
    excerpt: dbArticle.content.replace(/<[^>]+>/g, '').substring(0, 150) + "..."
  };
  const htmlContent = dbArticle.content;

  const isoDate = parseDateToISO(article.date);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
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
        '@id': `https://aldiadetodo.com/noticias/${article.slug}`
    }
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://aldiadetodo.com' },
      { '@type': 'ListItem', position: 2, name: 'Noticias', item: 'https://aldiadetodo.com/noticias' },
      { '@type': 'ListItem', position: 3, name: article.title, item: `https://aldiadetodo.com/noticias/${article.slug}` }
    ]
  };

  return (
    <article className="min-h-screen bg-white font-inter">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero Section - Premium Magazine Style */}
      <div className="relative min-h-[100svh] lg:min-h-[65vh] w-full bg-slate-950 overflow-hidden flex flex-col justify-center">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
             <Image 
                src={article.image || "/images/default-hero.jpg"} 
                alt=""
                fill
                unoptimized
                priority
                className="object-cover blur-2xl opacity-40 scale-110" 
             />
        </div>

        {/* Content Container */}
        <div className="container mx-auto h-full relative z-30 flex flex-col lg:flex-row items-center justify-center lg:justify-between pt-32 lg:pt-24 pb-20 lg:pb-0 px-6 max-w-7xl gap-8 lg:gap-12">
            
            {/* Mobile/Tablet Image */}
            <div className="block lg:hidden w-full aspect-video relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 mb-4 animate-in zoom-in-95 duration-700">
               <Image 
                src={article.image || "/images/default-hero.jpg"} 
                alt={article.title}
                fill
                unoptimized
                priority
                className="object-cover" 
              />
            </div>

            {/* Column: Text Content */}
            <div className="max-w-4xl text-left flex-1 w-full">
              <div className="inline-flex items-center gap-3 mb-6 lg:mb-8 animate-in fade-in slide-in-from-left-4 duration-500">
                 <span className="h-px w-10 bg-indigo-500"></span>
                 <span className="text-[10px] font-black uppercase text-indigo-400 tracking-[0.3em] font-inter">
                    {article.category}
                 </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 lg:mb-10 leading-[1.1] tracking-tighter font-outfit animate-fade-in-up line-clamp-4">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 lg:gap-8 text-slate-600 text-[10px] font-black uppercase tracking-[0.15em] font-inter animate-in fade-in duration-700 delay-300">
                  <div className="flex items-center gap-2.5 bg-indigo-50 py-1.5 px-3 rounded-full border border-indigo-100">
                      <TrendingUp className="w-4 h-4 text-indigo-600" />
                      <span className="text-indigo-900 italic">Actualidad</span>
                  </div>
                  <span className="flex items-center gap-2.5 bg-slate-100 py-1.5 px-3 rounded-full border border-slate-200">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {article.date || "Hoy"}
                  </span>
                  {article.author && (
                      <span className="flex items-center gap-3 border-l border-slate-200 pl-6 lg:pl-8">
                          <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] text-white font-black shadow-lg shadow-indigo-500/20">
                            {article.author[0]}
                          </div>
                          <span className="text-slate-900">{article.author}</span>
                      </span>
                  )}
              </div>
            </div>

            {/* Desktop Image */}
            <div className="hidden lg:block w-[400px] h-[480px] relative rounded-[40px] overflow-hidden shadow-2xl border border-white/10 rotate-3 animate-in zoom-in-95 duration-1000">
              <Image 
                src={article.image || "/images/default-hero.jpg"} 
                alt={article.title}
                fill
                unoptimized
                priority
                className="object-cover" 
              />
            </div>
        </div>

        {/* Decorative mask for transition */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-20"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Author/Share Bar */}  
        <div className="flex justify-between items-center border-b border-slate-100 pb-10 mb-12">
            <div className="flex items-center space-x-5">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 font-black text-xl font-outfit shadow-sm">
                    {article.author ? article.author[0] : "N"}
                </div>
                <div>
                    <p className="text-sm font-black text-slate-900 uppercase tracking-widest font-inter">{article.author || "Nestor Abanto Huaman"}</p>
                    <p className="text-xs text-slate-400 font-medium">Redacción de Noticias</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hidden md:block">Compartir</span>
                <ShareButtons 
                    url={`https://aldiadetodo.com/noticias/${article.slug}`} 
                    title={article.title} 
                />
            </div>
        </div>

        {/* Content - Premium Editorial Design */}
        <div className="prose prose-lg prose-indigo max-w-none text-slate-800 leading-relaxed space-y-10 font-medium animate-in fade-in duration-1000">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center">
            <Link href="/articulos" className="group inline-flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 text-slate-600 text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm">
                <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                Volver a Artículos
            </Link>
        </div>
      </div>
    </article>
  );
}
