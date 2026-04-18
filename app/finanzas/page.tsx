import React from 'react';
import { Landmark, ArrowRightLeft, TrendingUp, TrendingDown, Bitcoin, CreditCard } from 'lucide-react';
import { getFinanceData } from "@/lib/externalData";
import { getRSSNews } from "@/lib/rss";
import ArticleCard from "@/components/ArticleCard";

export const metadata = {
  title: "Dinero y Finanzas - AldiaDeTodo",
  description: "Tipo de cambio, criptomonedas y noticias económicas en tiempo real.",
};

export default async function FinancePage() {
  const data = await getFinanceData();

  // Fetch real-time economy news
  const allNews = await getRSSNews();
  const economyNews = allNews
    .filter((item): item is NonNullable<typeof item> => item != null && item.category === 'Economía')
    .slice(0, 6);

  const formattedArticles = economyNews;

  if (!data) return <div className="p-10 text-center text-slate-500">Cargando finanzas...</div>;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Finance Header */}
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <Landmark className="w-6 h-6 text-emerald-600" />
                <h1 className="text-3xl font-bold tracking-tight">Finanzas & Mercados</h1>
              </div>
              <p className="text-slate-500 font-medium">Actualización en tiempo real de divisas y activos digitales.</p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-2xl border border-slate-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">En Vivo: {data.updatedAt}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Currency Section */}
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
                <ArrowRightLeft className="w-5 h-5 text-indigo-600" />
                Tipo de Cambio en Perú (PEN)
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Dolar Card */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex justify-between items-center group hover:bg-white hover:shadow-md transition-all">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Dólar (USD)</p>
                    <p className="text-3xl font-black text-slate-900">S/ {data.usd.sell}</p>
                    <p className="text-[10px] text-slate-400 mt-1">Compra: S/ {data.usd.buy}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">24h Var.</p>
                    <div className={`flex items-center justify-end gap-1 font-bold ${data.usd.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                       {data.usd.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                       {data.usd.change}
                    </div>
                  </div>
                </div>

                {/* Euro Card */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex justify-between items-center group hover:bg-white hover:shadow-md transition-all">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Euro (EUR)</p>
                    <p className="text-3xl font-black text-slate-900">S/ {data.eur.sell}</p>
                    <p className="text-[10px] text-slate-400 mt-1">Compra: S/ {data.eur.buy}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">24h Var.</p>
                    <div className={`flex items-center justify-end gap-1 font-bold ${data.eur.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                       {data.eur.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                       {data.eur.change}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                 <div className="flex items-center gap-2 text-slate-400 text-sm">
                   <CreditCard className="w-4 h-4" />
                   Precios referenciales de SUNAT/SBS
                 </div>
                 <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition">
                   Ver Calculadora completa
                 </button>
              </div>
            </section>

            {/* News Section */}
            <section>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-slate-800">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
                Actualidad Económica
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {formattedArticles.map((article, index) => (
               <div key={article.id} className="bg-white rounded-2xl p-1">
                 <ArticleCard article={article} variant="default" priority={index < 3} />
               </div>
             ))}
           </div>
            </section>

            {/* Crypto Section */}
            <section className="bg-slate-900 rounded-3xl p-8 text-white">
              <h2 className="text-xl font-bold mb-8 flex items-center gap-2 text-indigo-300">
                <Bitcoin className="w-5 h-5" />
                Mercado de Criptomonedas
              </h2>
              <div className="space-y-4">
                {data.crypto.map((coin, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center font-bold text-indigo-300">
                        {coin.symbol[0]}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{coin.name}</p>
                        <p className="text-[10px] text-indigo-400 uppercase font-bold">{coin.symbol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-lg">${coin.price.toLocaleString()}</p>
                      <p className={`text-xs font-bold ${coin.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {coin.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-emerald-600 rounded-3xl p-8 text-white shadow-xl shadow-emerald-100">
              <h3 className="text-xl font-bold mb-4">Consejo Financiero</h3>
              <p className="text-emerald-100 text-sm leading-relaxed mb-6">
                El tipo de cambio ha mostrado volatilidad esta mañana. Si necesitas realizar operaciones grandes, considera esperar al cierre del mercado para una mejor referencia.
              </p>
              <ul className="space-y-3 text-xs font-medium text-emerald-50 text-left">
                <li className="flex items-center gap-2">✓ Diversifica tus activos</li>
                <li className="flex items-center gap-2">✓ Evita compras impulsivas</li>
                <li className="flex items-center gap-2">✓ Consulta fuentes oficiales</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
