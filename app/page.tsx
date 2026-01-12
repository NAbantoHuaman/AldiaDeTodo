import FeaturedArticle from "../components/FeaturedArticle";
import ArticleCard from "../components/ArticleCard";
import AdsBanner from "../components/AdsBanner";
import { ARTICLES } from "../lib/articles";
import { transformNewsItem } from "../lib/newsTransformer";

// Function to fetch live news server-side
async function getDynamicArticles() {
  const apiKey = process.env.GNEWS_API_KEY?.trim(); // Using the existing env var name even though it's NewsData
  if (!apiKey) return [];

  try {
    // NewsData.io Endpoint
    // Fetches top news in Spanish, excluding specific categories if needed
    const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=es&category=top,technology,science,entertainment`;
    
    const res = await fetch(apiUrl, { next: { revalidate: 3600 } });
    
    if (!res.ok) {
      console.error("Failed to fetch dynamic news");
      return [];
    }
    
    const data = await res.json();
    
    if (data.results) {
      // Transform raw API news into our "Rewritten" format
      // filter(Boolean) removes the nulls returned by restricted articles
      return data.results
        .map((item: any) => transformNewsItem(item))
        .filter(Boolean)
        .map((item: any) => item.metadata);
    }
    return [];
  } catch (error) {
    console.error("Error getting dynamic articles:", error);
    return [];
  }
}

export default async function Home() {
  // 1. Get Static Articles (reversed to show newest first)
  const staticArticles = [...ARTICLES].reverse();
  
  // 2. Get Dynamic Articles (Live from API)
  const dynamicArticles = await getDynamicArticles();
  
  // 3. Merge: Put Dynamic news FIRST (breaking news), then Static
  const allArticles = [...dynamicArticles, ...staticArticles];

  // Featured is the very first one (Dynamic or Static)
  const featuredArticle = allArticles[0];
  // The rest for the grid: Show more articles! (API gives ~10, let's show 12 total in grid)
  const recentArticles = allArticles.slice(1, 13);

  return (
    <div className="container mx-auto px-4 py-8">
      
      {/* Featured Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-l-4 border-indigo-600 pl-4">
          Noticia Principal
        </h2>
        <FeaturedArticle article={featuredArticle} />
      </section>

      {/* Ad Banner */}
      <AdsBanner slot="1234567890" format="auto" />

      {/* Recent Articles Grid */}
      <section id="noticias" className="my-12">
        <h2 className="text-2xl font-bold mb-6 border-l-4 border-pink-500 pl-4">
          Lo Último
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Mid-page Ad */}
      <div className="my-16">
        <AdsBanner slot="456456456" format="horizontal" />
      </div>

      {/* Category Sections */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Crecimiento Personal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {staticArticles.filter(a => a.category === "Crecimiento Personal").slice(0, 4).map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
          </div>
        </div>
        
        <div className="lg:col-span-4 space-y-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Finanzas & Éxito</h2>
            {ARTICLES.filter(a => a.category === "Finanzas").slice(0, 3).map(article => (
              <ArticleCard key={article.id} article={article} variant="compact" />
            ))}
            <AdsBanner slot="sidebar-home" format="rectangle" />
        </div>
      </section>
    </div>
  );
}
