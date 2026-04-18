import { Trophy, Zap, Calendar, ListChecks, ArrowRight, Rss } from 'lucide-react';
import { getSportsData } from "@/lib/externalData";
import { getRSSNews } from "@/lib/rss";
import prisma from "@/lib/prisma";
import ArticleCard from "@/components/ArticleCard";
import LiveMatchCard from "@/components/LiveMatchCard";

export const metadata = {
  title: "Deportes - AldiaDeTodo",
  description: "Resultados en vivo, calendarios y tablas de posiciones deportivas.",
};

export default async function SportsPage() {
  const data = await getSportsData();

  // Fetch real sports news from RSS instead of local articles
  const allNews = await getRSSNews();
  const sportsNews = allNews
    .filter((item): item is NonNullable<typeof item> => item != null && item.category === 'Deportes')
    .slice(0, 6);

  const formattedArticles = sportsNews;

  return (
    <div className="min-h-screen bg-white">
      {/* Sports Header */}
      <div className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h1 className="text-4xl font-black italic tracking-tighter uppercase flex items-center gap-3">
                <Trophy className="w-10 h-10 text-amber-400" />
                Centro de Deportes
              </h1>
              <p className="text-slate-400 mt-2 font-medium">Marcadores en vivo y resultados del mundo.</p>
            </div>
            <div className="flex items-center gap-2">
               <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
               <span className="text-red-500 font-bold uppercase text-xs tracking-widest">Live Updates</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Column: Matches & News */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Live Matches */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-tighter italic">
                <Zap className="w-5 h-5 text-red-500 fill-red-500" />
                Partidos en Vivo
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.live.map(match => (
                  <LiveMatchCard key={match.id} match={match} />
                ))}
              </div>
            </section>

            {/* Sports News Section */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                <Rss className="w-5 h-5 text-indigo-600" />
                Últimas Noticias de Deportes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {formattedArticles.length > 0 ? (
                  formattedArticles.map((article, index) => (
                    <ArticleCard key={article.id} article={article} variant="default" priority={index < 2} />
                  ))
                ) : (
                  <p className="text-slate-400 italic">No hay noticias deportivas recientes.</p>
                )}
              </div>
            </section>

            {/* Upcoming Matches */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                Próximos Encuentros
              </h2>
              <div className="space-y-3">
                {data.upcoming.map(match => (
                  <div key={match.id} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4 flex-1">
                      <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md uppercase">{match.league}</span>
                      <p className="text-sm font-bold text-slate-800">{match.home} vs {match.away}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-sm font-medium text-slate-500">{match.time}</span>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar Column: Standings */}
          <div className="lg:col-span-4">
            <div className="bg-slate-50 rounded-2xl p-6 sticky top-32">
              <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-200 pb-4">
                <ListChecks className="w-5 h-5 text-amber-500" />
                Tabla de Posiciones
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase px-2 mb-2">
                  <span>Equipo</span>
                  <span>Pts</span>
                </div>
                {data.standings.map((team: any, i: number) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100 italic">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-400">#{team.rank}</span>
                      <span className="text-sm font-bold text-slate-800">{team.team}</span>
                    </div>
                    <span className="text-sm font-black text-indigo-600">{team.pts}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">
                Ver Tabla Completa
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
