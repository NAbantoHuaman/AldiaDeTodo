import Link from 'next/link';
import FeaturedArticle from "../components/FeaturedArticle";
import ArticleCard from "../components/ArticleCard";
import AdsBanner from "../components/AdsBanner";
import prisma from "../lib/prisma";
import { parseSpanishDate } from "../lib/dateUtils";
import { getWeatherData, getHoroscopeData, getSportsData } from "../lib/externalData";
import WeatherWidget from "../components/WeatherWidget";
import HoroscopeWidget from "../components/HoroscopeWidget";
import SportsWidget from "../components/SportsWidget";
import { ArrowRight, ChevronRight, TrendingUp, Terminal, Heart, Sparkles, Code, Brain, BookOpen } from "lucide-react";

export const dynamic = 'force-dynamic';

export const revalidate = 60;

export const metadata = {
  title: "AldiaDeTodo - Crecimiento Personal, Finanzas y Productividad",
  description: "Tu fuente diaria de inspiración. Artículos originales sobre productividad, finanzas personales, salud mental y crecimiento personal en español.",
  openGraph: {
    title: "AldiaDeTodo - Crecimiento Personal, Finanzas y Productividad",
    description: "Tu fuente diaria de inspiración. Artículos originales sobre productividad, finanzas personales, salud mental y crecimiento personal en español.",
    url: "https://aldiadetodo.com",
    siteName: "AldiaDeTodo",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AldiaDeTodo - Crecimiento Personal y Finanzas",
    description: "Artículos originales sobre productividad, finanzas y bienestar en español.",
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

  const evergreenArticles = allStatic.filter((a: any) => a.category !== "Noticias" && !a.isNews);
  const featuredOriginal = evergreenArticles[0];
  const latestArticles = evergreenArticles.slice(1, 5);
  const sidebarOriginals = evergreenArticles.slice(5, 13);

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
              { title: "Ahorro e Inversión", slug: "como-ahorrar-dinero", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-50", desc: "Estrategias probadas para construir hábitos financieros saludables, crear un fondo de emergencia y dar tus primeros pasos en inversión." },
              { title: "Python Moderno 2026", slug: "python-moderno", icon: Terminal, color: "text-indigo-500", bg: "bg-indigo-50", desc: "Domina Python en la era de la IA: tipos estáticos, agentes autónomos, y las mejores prácticas del ecosistema actual." },
              { title: "Bienestar Mental", slug: "bienestar-mental", icon: Heart, color: "text-rose-500", bg: "bg-rose-50", desc: "Técnicas basadas en psicología para manejar el estrés diario, construir resiliencia emocional y mejorar tu salud mental." },
              { title: "Hábitos Productivos", slug: "habitos-productivos", icon: Sparkles, color: "text-amber-500", bg: "bg-amber-50", desc: "Rutinas y sistemas de las personas más exitosas del mundo. Frameworks para crear hábitos que perduren." }
            ].map(g => (
              <Link key={g.slug} href={`/guias/${g.slug}`} className="group bg-white p-8 rounded-[32px] border border-slate-100 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all">
                <div className={`w-12 h-12 ${g.bg} ${g.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <g.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2 font-outfit group-hover:text-indigo-600 transition-colors">{g.title}</h3>
                <p className="text-xs text-slate-500 font-medium mb-0 tracking-tight leading-relaxed line-clamp-2">{g.desc}</p>
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

          {/* Guías Destacadas — Contenido Original */}
          <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
            <h2 className="text-xl font-black text-slate-900 mb-8 flex justify-between items-center font-outfit">
              <span className="flex items-center gap-3">
                <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
                Guías Destacadas
              </span>
              <Link href="/guias" className="text-[10px] uppercase font-black text-indigo-600 hover:text-indigo-800 tracking-widest">Ver todas &rarr;</Link>
            </h2>
            <div className="space-y-6">
              {[
                { title: "Python Maestro 2026", slug: "python-moderno", tag: "Tecnología", icon: Terminal },
                { title: "Bienestar Mental", slug: "bienestar-mental", tag: "Salud", icon: Heart },
                { title: "Cómo Ahorrar Dinero", slug: "como-ahorrar-dinero", tag: "Finanzas", icon: TrendingUp },
                { title: "Hábitos Productivos", slug: "habitos-productivos", tag: "Crecimiento", icon: Sparkles },
                { title: "Inteligencia Emocional", slug: "inteligencia-emocional", tag: "Crecimiento", icon: Brain },
                { title: "Aprender a Programar", slug: "aprender-a-programar", tag: "Tecnología", icon: Code },
              ].map((guide) => (
                <Link key={guide.slug} href={`/guias/${guide.slug}`} className="group block">
                  <div className="flex items-start gap-4">
                     <div className="w-8 h-8 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all flex-shrink-0">
                       <guide.icon className="w-4 h-4" />
                     </div>
                     <div>
                        <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 line-clamp-2 leading-tight transition-colors font-inter">{guide.title}</h3>
                        <div className="flex items-center gap-2 mt-2">
                           <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">{guide.tag}</span>
                           <span className="text-slate-300">•</span>
                           <span className="text-[10px] font-medium text-slate-400">Guía completa</span>
                        </div>
                     </div>
                  </div>
                </Link>
              ))}
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
