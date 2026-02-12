import Link from 'next/link';
import FeaturedArticle from "../components/FeaturedArticle";
import ArticleCard from "../components/ArticleCard";
import AdsBanner from "../components/AdsBanner";
import { ARTICLES } from "../lib/articles";
import { getRSSNews } from "../lib/rss";

// Function to fetch live news server-side via RSS
async function getDynamicArticles() {
  try {
    return await getRSSNews();
  } catch (error) {
    console.error("Error getting dynamic articles:", error);
    return [];
  }
}

export default async function Home() {
  // 1. Get Static Evergreen Articles (For Sidebar/Recommendations)
  // We explicitly want "Artículos" (Evergreen) here, not News.
  const allStatic = [...ARTICLES];
  const evergreenArticles = allStatic.filter(a => ![ "Actualidad", "Política", "Mundo", "Noticias"].includes(a.category));
  const recommendedArticles = evergreenArticles.slice(0, 5); // Take 5 for sidebar

  // 2. Get Dynamic News (For Main Feed)
  const newsArticles = await getDynamicArticles();
  
  // Featured is the latest News
  const featuredArticle = newsArticles[0] || evergreenArticles[0]; 
  const mainFeedNews = newsArticles.slice(1, 10); // Show 9 more news items in main feed

  return (
    <div className="container mx-auto px-4 py-8">
      
      {/* Featured Section (Full Width) */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
           <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
           <h2 className="text-xs font-bold text-red-600 uppercase tracking-widest">Noticia Destacada</h2>
        </div>
        {featuredArticle && <FeaturedArticle article={featuredArticle} />}
      </section>

      {/* Main Layout: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Main News Feed (8 cols) */}
        <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-gray-900 pb-2 flex justify-between items-end">
                <span>Actualidad</span>
                <Link href="/noticias" className="text-sm font-normal text-indigo-600 hover:text-indigo-800">Ver todas las noticias &rarr;</Link>
            </h2>

            <div className="space-y-8">
                {mainFeedNews.length > 0 ? (
                    mainFeedNews.map((article) => (
                        <ArticleCard key={article.id} article={article} variant="horizontal" />
                    ))
                ) : (
                   <p className="text-gray-500 italic">Cargando noticias recientes...</p>
                )}
            </div>

            <div className="mt-12">
                <AdsBanner slot="feed-footer" format="horizontal" />
            </div>
        </div>

        {/* Right Column: Sidebar (4 cols) */}
        <aside className="lg:col-span-4 space-y-12">
            
            {/* Sidebar Ad */}
            <div className="bg-gray-50 p-4 border border-gray-100 rounded-lg">
                <span className="text-xs text-gray-400 block mb-2 text-center">Publicidad</span>
                <AdsBanner slot="sidebar-home" format="rectangle" />
            </div>

            {/* Recommended Articles (Evergreen) */}
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 border-l-4 border-indigo-500 pl-4">
                    Recomendados para ti
                </h2>
                <div className="space-y-6">
                     {recommendedArticles.map(article => (
                        <div key={article.id} className="group">
                            <ArticleCard article={article} variant="compact" />
                        </div>
                     ))}
                </div>
                <div className="mt-6 text-center">
                    <Link href="/articulos" className="inline-block px-4 py-2 border border-indigo-600 text-indigo-600 font-medium rounded hover:bg-indigo-50 transition">
                        Explorar más contenido
                    </Link>
                </div>
            </div>

            {/* Quote / Daily Tip Widget */}
            <div className="bg-indigo-900 p-8 rounded-xl text-white text-center">
                <h3 className="font-serif text-2xl italic mb-4">"La mejor forma de predecir el futuro es crearlo."</h3>
                <p className="text-indigo-200 text-sm">- Peter Drucker</p>
            </div>

        </aside>
      </div>
    </div>
  );
}
