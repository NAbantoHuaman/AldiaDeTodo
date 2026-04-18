import Link from 'next/link';
import FeaturedArticle from "../components/FeaturedArticle";
import ArticleCard from "../components/ArticleCard";
import AdsBanner from "../components/AdsBanner";
import prisma from "../lib/prisma";
import { getRSSNews } from "../lib/rss";
import { parseSpanishDate } from "../lib/dateUtils";
import { getWeatherData, getHoroscopeData, getSportsData } from "../lib/externalData";
import WeatherWidget from "../components/WeatherWidget";
import HoroscopeWidget from "../components/HoroscopeWidget";
import SportsWidget from "../components/SportsWidget";
import { ArrowRight, ChevronRight, TrendingUp, Terminal, Heart, Sparkles, Code, Brain } from "lucide-react";

export const dynamic = 'force-dynamic';

// Function to fetch live news server-side via RSS
async function getDynamicArticles() {
  try {
    return await getRSSNews();
  } catch (error) {
    console.error("Error getting dynamic articles:", error);
    return [];
  }
}

export const revalidate = 60;

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
  // 1. Fetch Dynamic Widgets Data
  const weatherData = await getWeatherData("Cajamarca");
  const horoscopeData = await getHoroscopeData();
  const sportsData = await getSportsData();

  // 2. Fetch DB Articles
  const dbArticles = await prisma.article.findMany({
    include: { category: true }
  });

  const rawArticles = dbArticles.sort((a: any, b: any) => parseSpanishDate(b.date) - parseSpanishDate(a.date));

  // Map to the shape ArticleCard expects
  const allStatic = rawArticles.map((a: any) => ({
    ...a,
    category: a.category.name,
    excerpt: a.content.replace(/<[^>]+>/g, '').substring(0, 150) + "..."
  }));

  const evergreenArticles = allStatic.filter((a: any) => a.category !== "Noticias");
  const featuredOriginal = evergreenArticles[0];
  const latestArticles = evergreenArticles.slice(1, 5);
  const sidebarOriginals = evergreenArticles.slice(5, 13);

  // 3. Get Dynamic News (secondary — sidebar feed)
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
    <div className="container mx-auto px-4 py-12 font-inter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO: Featured Original Article (Full Width) */}
      <section className="mb-20 animate-in fade-in duration-1000">
        <div className="flex items-center gap-4 mb-8">
           <span className="h-px w-12 bg-indigo-600"></span>
           <h2 className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em] font-inter">Edición Especial</h2>
        </div>
        {featuredOriginal && <FeaturedArticle article={featuredOriginal} />}
      </section>

      {/* NEW: Lo Más Reciente — Latest Articles */}
      <section className="mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
           <div>
             <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse shadow-lg shadow-rose-300"></span>
                <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.2em]">Live Feed</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter font-outfit">
               Artículos de Hoy
             </h2>
           </div>
           <Link href="/articulos" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-600 hover:gap-4 transition-all">
             Ver Biblioteca completa <ArrowRight className="w-4 h-4" />
           </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {latestArticles.map((article: any, index: number) => (
            <ArticleCard key={article.id} article={article} variant="default" priority={index < 2} />
          ))}
        </div>
      </section>

      {/* SECTION: Featured Guides */}
      <section className="mb-24 bg-slate-50 -mx-4 px-4 py-20 rounded-[60px] border-y border-slate-100">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">Contenido Premium</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter font-outfit">
                Guías Maestras
              </h2>
            </div>
            <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-600 hover:gap-4 transition-all">
              Explorar todas las guías <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Ahorro e Inversión", slug: "como-ahorrar-dinero", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-50" },
              { title: "Python Moderno 2026", slug: "python-moderno", icon: Terminal, color: "text-indigo-500", bg: "bg-indigo-50" },
              { title: "Bienestar Mental", slug: "bienestar-mental", icon: Heart, color: "text-rose-500", bg: "bg-rose-50" },
              { title: "Hábitos Productivos", slug: "habitos-productivos", icon: Sparkles, color: "text-amber-500", bg: "bg-amber-50" }
            ].map(g => (
              <Link key={g.slug} href={`/guias/${g.slug}`} className="group bg-white p-8 rounded-[32px] border border-slate-100 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all">
                <div className={`w-12 h-12 ${g.bg} ${g.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <g.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2 font-outfit group-hover:text-indigo-600 transition-colors">{g.title}</h3>
                <p className="text-xs text-slate-500 font-medium mb-0 tracking-tight leading-relaxed line-clamp-2">Guía maestra de 1,200+ palabras con sistemas prácticos para dominar el tema.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing between sections */}
      <div className="mb-16"></div>

      {/* SECTION 2: Two Columns — More Originals + News Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left: More Original Articles (8 cols) */}
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 mb-10">
             <span className="h-px w-10 bg-slate-900"></span>
             <h2 className="text-3xl font-black text-slate-900 tracking-tighter font-outfit uppercase tracking-widest text-xs">
               Exploración Profunda
             </h2>
          </div>
          <div className="space-y-6">
            {sidebarOriginals.map(article => (
              <ArticleCard key={article.id} article={article} variant="horizontal" />
            ))}
          </div>
        </div>

        {/* Right: News + Widgets (4 cols) */}
        <aside className="lg:col-span-4 space-y-12">
          
          <div className="animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
            <WeatherWidget data={weatherData} />
          </div>

          <div className="animate-in fade-in slide-in-from-right-4 duration-700 delay-400">
            <SportsWidget data={sportsData} />
          </div>



          <div className="animate-in fade-in slide-in-from-right-4 duration-700 delay-600">
            <HoroscopeWidget data={horoscopeData} />
          </div>

          {/* Latest News (SECONDARY) */}
          <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
            <h2 className="text-xl font-black text-slate-900 mb-8 flex justify-between items-center font-outfit">
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
                Telegrafía
              </span>
              <Link href="/noticias" className="text-[10px] uppercase font-black text-indigo-600 hover:text-indigo-800 tracking-widest">Global &rarr;</Link>
            </h2>
            <div className="space-y-6">
              {latestNews.length > 0 ? (
                latestNews.map((article) => article && (
                  <a key={article.id} href={article.link || `/articulos/${article.slug}`} target={article.link ? "_blank" : "_self"} rel="noopener noreferrer"
                     className="group block">
                    <div className="flex items-start gap-4">
                       <div className="w-1.5 h-1.5 bg-slate-200 rounded-full mt-2 group-hover:bg-indigo-600 transition-colors"></div>
                       <div>
                          <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 line-clamp-2 leading-tight transition-colors font-inter">{article.title}</h3>
                          <div className="flex items-center gap-2 mt-2">
                             <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{article.source || "News"}</span>
                             <span className="text-slate-300">•</span>
                             <span className="text-[10px] font-medium text-slate-400">{article.date}</span>
                          </div>
                       </div>
                    </div>
                  </a>
                ))
              ) : (
                <div className="flex flex-col gap-4 animate-pulse">
                   {[1,2,3,4].map(i => <div key={i} className="h-10 bg-slate-50 rounded-lg"></div>)}
                </div>
              )}
            </div>
          </div>

          {/* Quote Widget */}
          <div className="bg-slate-950 p-10 rounded-[40px] text-white text-center shadow-2xl shadow-indigo-900/10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
            <h3 className="font-outfit text-2xl font-black mb-6 leading-tight italic">&quot;La mejor forma de predecir el futuro es crearlo.&quot;</h3>
            <p className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em]">- Peter Drucker</p>
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
