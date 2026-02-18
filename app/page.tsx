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

export const metadata = {
  title: "AldiaDeTodo - Crecimiento Personal, Noticias y Finanzas",
  description: "Tu fuente diaria de inspiración. Artículos sobre productividad, finanzas personales y las últimas noticias mundiales.",
  openGraph: {
    title: "AldiaDeTodo - Crecimiento Personal, Noticias y Finanzas",
    description: "Tu fuente diaria de inspiración. Artículos sobre productividad, finanzas personales y las últimas noticias mundiales.",
    url: "https://aldiadetodo.com",
    siteName: "AldiaDeTodo",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AldiaDeTodo - Crecimiento Personal y Finanzas",
    description: "Tu fuente diaria de inspiración y noticias.",
  },
};

export default async function Home() {
  // 1. Get Static Evergreen Articles (Original Content — the STAR of the site)
  const allStatic = [...ARTICLES];
  const evergreenArticles = allStatic.filter(a => !["Actualidad", "Política", "Mundo", "Noticias"].includes(a.category));
  const featuredOriginal = evergreenArticles[0];
  const topOriginals = evergreenArticles.slice(1, 7); // 6 original articles in main grid
  const sidebarOriginals = evergreenArticles.slice(7, 12); // 5 more for sidebar

  // 2. Get Dynamic News (secondary — sidebar feed)
  const newsArticles = await getDynamicArticles();
  const latestNews = newsArticles.slice(0, 6).filter(Boolean);



  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AldiaDeTodo',
    url: 'https://aldiadetodo.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://aldiadetodo.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* HERO: Featured Original Article (Full Width) */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
           <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
           <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Artículo Destacado</h2>
        </div>
        {featuredOriginal && <FeaturedArticle article={featuredOriginal} />}
      </section>

      {/* SECTION 1: Original Articles Grid (Full Width — THE MAIN CONTENT) */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-gray-900 pb-2 flex justify-between items-end">
          <span>Nuestros Artículos</span>
          <Link href="/articulos" className="text-sm font-normal text-indigo-600 hover:text-indigo-800">Ver todos &rarr;</Link>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topOriginals.map(article => (
            <ArticleCard key={article.id} article={article} variant="default" />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/articulos" className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition">
            Explorar todos los artículos
          </Link>
        </div>
      </section>

      {/* AD BANNER between sections */}
      <div className="mb-16">
        <AdsBanner slot="feed-mid" format="horizontal" />
      </div>

      {/* SECTION 2: Two Columns — More Originals + News Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: More Original Articles (8 cols) */}
        <div className="lg:col-span-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-gray-900 pb-2">
            Más para ti
          </h2>
          <div className="space-y-8">
            {sidebarOriginals.map(article => (
              <ArticleCard key={article.id} article={article} variant="horizontal" />
            ))}
          </div>
        </div>

        {/* Right: News + Widgets (4 cols) */}
        <aside className="lg:col-span-4 space-y-10">
          
          {/* Sidebar Ad */}
          <div className="bg-gray-50 p-4 border border-gray-100 rounded-lg">
            <span className="text-xs text-gray-400 block mb-2 text-center">Publicidad</span>
            <AdsBanner slot="sidebar-home" format="rectangle" />
          </div>

          {/* Latest News (SECONDARY) */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4 border-l-4 border-red-500 pl-4 flex justify-between items-center">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                Noticias al instante
              </span>
              <Link href="/noticias" className="text-xs font-normal text-gray-500 hover:text-indigo-600">Ver más &rarr;</Link>
            </h2>
            <div className="space-y-4">
              {latestNews.length > 0 ? (
                latestNews.map((article) => article && (
                  <a key={article.id} href={article.link || `/articulos/${article.slug}`} target={article.link ? "_blank" : "_self"} rel="noopener noreferrer"
                     className="block p-3 rounded-lg hover:bg-gray-50 transition border border-gray-100 group">
                    <h3 className="text-sm font-semibold text-gray-800 group-hover:text-indigo-600 line-clamp-2 leading-snug">{article.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{article.source || article.category} · {article.date}</p>
                  </a>
                ))
              ) : (
                <p className="text-gray-500 italic text-sm">Cargando noticias...</p>
              )}
            </div>
          </div>

          {/* Quote Widget */}
          <div className="bg-indigo-900 p-8 rounded-xl text-white text-center">
            <h3 className="font-serif text-xl italic mb-4">&quot;La mejor forma de predecir el futuro es crearlo.&quot;</h3>
            <p className="text-indigo-200 text-sm">- Peter Drucker</p>
          </div>

        </aside>
      </div>

      {/* Bottom Ad */}
      <div className="mt-12">
        <AdsBanner slot="feed-footer" format="horizontal" />
      </div>
    </div>
  );
}
