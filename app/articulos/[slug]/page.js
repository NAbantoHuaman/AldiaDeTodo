import Link from 'next/link';
import { ChevronRight, Facebook, Twitter, TrendingUp } from 'lucide-react';
import { ARTICLES, generateArticleContent } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import AdsBanner from '@/components/AdsBanner';
import { transformNewsItem } from '@/lib/newsTransformer';

export const dynamicParams = true;

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

// Helper to fetch dynamic news (Server Side)
async function getDynamicArticleBySlug(slug) {
  const apiKey = process.env.GNEWS_API_KEY?.trim();
  if (!apiKey) return null;

  try {
    // We fetch a batch of top news to increase chances of finding it.
    // In a real optimized system, we'd store these in a DB.
    // Here we fetch the same "feed" the homepage likely used.
    const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=es&category=top,technology,science,entertainment`;
    const res = await fetch(apiUrl, { next: { revalidate: 3600 } });
    const data = await res.json();

    if (data.results) {
      // Find the item that generates this slug
      for (const item of data.results) {
        const transformed = transformNewsItem(item);
        if (transformed && transformed.metadata.slug === slug) {
            return transformed;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Error fetching dynamic article:", error);
    return null;
  }
}

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params; 
  
  // 1. Try to find in Static Content
  let article = ARTICLES.find(a => a.slug === slug);
  let htmlContent = "";

  if (article) {
    htmlContent = generateArticleContent(article.id, article.title);
  } else {
    // 2. Try to find in Dynamic API Content
    const dynamicArticle = await getDynamicArticleBySlug(slug);
    if (dynamicArticle) {
      article = dynamicArticle.metadata;
      htmlContent = dynamicArticle.content;
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

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link href="/" className="cursor-pointer hover:text-indigo-600">Inicio</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/articulos" className="cursor-pointer hover:text-indigo-600">Artículos</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-indigo-600 font-medium">{article.category}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <article className="lg:col-span-8">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center justify-between border-y border-gray-100 py-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">A</div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Redacción Aldia</p>
                  <p className="text-xs text-gray-500">{article.date}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition"><Facebook className="w-5 h-5"/></button>
                <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition"><Twitter className="w-5 h-5"/></button>
              </div>
            </div>

            <img src={article.image} alt={article.title} className="w-full h-[400px] object-cover rounded-xl mb-10 shadow-lg" />

            <AdsBanner slot="1122334455" format="article-top" label="Publicidad" />

            {/* Article Body */}
            <div 
              className="prose prose-lg prose-indigo max-w-none text-gray-800 space-y-6 article-content"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            <div className="mt-12 pt-8 border-t border-gray-200">
               <h3 className="font-bold text-xl mb-4">¿Te gustó este artículo?</h3>
               <p className="text-gray-600 mb-6">Suscríbete para recibir más contenido como este.</p>
               <AdsBanner slot="5566778899" format="horizontal" label="Publicidad Footer Artículo" />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            
            {/* Ad Widget */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 sticky top-24">
              <AdsBanner slot="9988776655" format="rectangle" label="Publicidad Sidebar" />
            </div>

            {/* Trending Articles */}
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-2">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
                <h3 className="font-bold text-gray-900 uppercase tracking-wider text-sm">Populares</h3>
              </div>
              <div className="space-y-2">
                {ARTICLES.slice(0, 5).map(item => (
                  <ArticleCard key={item.id} article={item} variant="compact" />
                ))}
              </div>
            </div>

             {/* Newsletter Widget */}
             <div className="bg-indigo-600 p-8 rounded-xl text-white">
                <h3 className="font-bold text-xl mb-2">Únete al club</h3>
                <p className="text-indigo-100 text-sm mb-4">Recibe consejos de productividad cada lunes.</p>
                <input type="email" placeholder="email@ejemplo.com" className="w-full px-4 py-2 rounded text-gray-900 mb-2 focus:outline-none" />
                <button className="w-full bg-black text-white py-2 rounded font-bold hover:bg-gray-900">Suscribirse</button>
             </div>

          </aside>
        </div>
      </div>
    </div>
  );
}