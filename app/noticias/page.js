import Link from 'next/link';
import ArticleCard from '../../components/ArticleCard';
import AdsBanner from '../../components/AdsBanner';
import { getRSSNews } from '../../lib/rss';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Cache for 1 hour

async function getNews() {
  const allNews = await getRSSNews();
  return allNews.slice(0, 50); // Show top 50
}

export default async function NewsPage() {
  const news = await getNews();

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
       <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Últimas Noticias
            <span className="block text-sm font-normal text-gray-500 mt-1">Actualidad mundial en tiempo real</span>
          </h1>
          <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase rounded animate-pulse">En Vivo</span>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.length > 0 ? (
             news.map(article => (
                <ArticleCard key={article.id} article={article} />
             ))
          ) : (
             <p className="col-span-full text-center text-gray-500">Cargando noticias...</p>
          )}
       </div>

       <div className="mt-12">
          <AdsBanner slot="news-footer" format="horizontal" />
       </div>
    </div>
  );
}
