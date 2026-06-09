import React from 'react';
import { Sparkles, Moon, Sun, Heart, Briefcase, Activity, Star, BookOpen, Flame, Mountain, Wind, Droplets } from 'lucide-react';
import { getHoroscopeData } from "@/lib/externalData";
import prisma from "@/lib/prisma";
import ArticleCard from "@/components/ArticleCard";

export const metadata = {
  title: "Horóscopo Diario - AldiaDeTodo",
  description: "Tu predicción diaria astrológica: amor, salud y dinero para todos los signos. Además, guía completa de elementos zodiacales y compatibilidad entre signos.",
  robots: {
    index: false,
    follow: false,
  },
};

function getElementInfo(sign: string) {
  const elements: Record<string, {name: string, icon: React.ReactNode, color: string}> = {
    'Aries': { name: 'Fuego', icon: <Flame className="w-4 h-4" />, color: 'text-red-400' },
    'Leo': { name: 'Fuego', icon: <Flame className="w-4 h-4" />, color: 'text-red-400' },
    'Sagitario': { name: 'Fuego', icon: <Flame className="w-4 h-4" />, color: 'text-red-400' },
    'Tauro': { name: 'Tierra', icon: <Mountain className="w-4 h-4" />, color: 'text-emerald-400' },
    'Virgo': { name: 'Tierra', icon: <Mountain className="w-4 h-4" />, color: 'text-emerald-400' },
    'Capricornio': { name: 'Tierra', icon: <Mountain className="w-4 h-4" />, color: 'text-emerald-400' },
    'Géminis': { name: 'Aire', icon: <Wind className="w-4 h-4" />, color: 'text-sky-400' },
    'Libra': { name: 'Aire', icon: <Wind className="w-4 h-4" />, color: 'text-sky-400' },
    'Acuario': { name: 'Aire', icon: <Wind className="w-4 h-4" />, color: 'text-sky-400' },
    'Cáncer': { name: 'Agua', icon: <Droplets className="w-4 h-4" />, color: 'text-blue-400' },
    'Escorpio': { name: 'Agua', icon: <Droplets className="w-4 h-4" />, color: 'text-blue-400' },
    'Piscis': { name: 'Agua', icon: <Droplets className="w-4 h-4" />, color: 'text-blue-400' },
  };
  return elements[sign] || { name: 'Cósmico', icon: <Sparkles className="w-4 h-4" />, color: 'text-indigo-400' };
}

function StarRating({ count, className = "" }: { count: number; className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < count ? 'text-amber-400 fill-amber-400' : 'text-white/10'}`} />
      ))}
    </div>
  );
}

export default async function HoroscopePage() {
  const { date, signs: allSigns } = await getHoroscopeData();

  // Fetch related articles (Crecimiento Personal)
  const articles = await prisma.article.findMany({
    where: { categoryId: 16 }, // Crecimiento Personal
    take: 6,
    include: { category: true }
  });

  const formattedArticles = articles.map(a => ({
    ...a,
    category: a.category.name,
    excerpt: a.content.replace(/<[^>]+>/g, '').substring(0, 150) + "..."
  }));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-inter">
      {/* 🚀 Hero Section "Cosmos Oscuro" */}
      <div className="relative py-32 overflow-hidden border-b border-indigo-500/10">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/40 blur-[120px] mix-blend-screen opacity-60"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/30 blur-[130px] mix-blend-screen opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)]">
            <Sparkles className="w-8 h-8 text-indigo-300" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-outfit tracking-tighter mb-6 text-white text-gradient">
            Zona Astral
          </h1>
          <p className="text-slate-400 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Predicciones para hoy, <span className="text-indigo-300 border-b border-indigo-500/30 pb-1">{date}</span>. Descubre el mensaje cósmico reservado para ti.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* ✨ Tarjetas Zodiacales Interactivas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {allSigns.map((zodiac, i) => {
            const elementInfo = getElementInfo(zodiac.sign);
            return (
              <div key={i} className="group relative bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.2)] hover:border-indigo-500/30 transition-all duration-300 cursor-default flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center font-black text-2xl text-white shadow-inner shadow-white/20">
                      {zodiac.sign[0]}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-outfit text-white tracking-tight">{zodiac.sign}</h3>
                      <div className="flex gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map(star => (
                           <Star key={star} className={`w-3 h-3 ${star <= 4 ? 'text-amber-400 fill-amber-400 opacity-80' : 'text-slate-700'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 ${elementInfo.color} border border-slate-700`}>
                     {elementInfo.icon}
                  </div>
                </div>
  
                <blockquote className="flex-1 text-slate-300 text-[15px] italic mb-8 border-l-2 border-indigo-500 pl-5 leading-relaxed font-light">
                  {zodiac.text}
                </blockquote>
  
                <div className="space-y-4">
                   <div className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                     <div className="bg-rose-500/10 p-2.5 rounded-lg"><Heart className="w-4 h-4 text-rose-400" /></div>
                     <div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Amor</p>
                       <p className="text-sm text-slate-200 font-medium">{zodiac.love}</p>
                     </div>
                   </div>
  
                   <div className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                     <div className="bg-emerald-500/10 p-2.5 rounded-lg"><Briefcase className="w-4 h-4 text-emerald-400" /></div>
                     <div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Dinero</p>
                       <p className="text-sm text-slate-200 font-medium">{zodiac.money}</p>
                     </div>
                   </div>
  
                   <div className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                     <div className="bg-indigo-500/10 p-2.5 rounded-lg"><Activity className="w-4 h-4 text-indigo-400" /></div>
                     <div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Salud</p>
                       <p className="text-sm text-slate-200 font-medium">{zodiac.health}</p>
                     </div>
                   </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 🔮 Los Cuatro Elementos */}
        <section className="mb-32">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4 font-outfit tracking-tight">Los Cuatro Elementos</h2>
            <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
              Cada signo pertenece a uno de estos cuatro pilares cósmicos, definiendo su esencia, temperamento y forma de interactuar con el mundo terrenal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group bg-gradient-to-br from-slate-900 to-slate-900/80 border border-red-500/20 rounded-2xl p-8 overflow-hidden hover:border-red-500/50 transition-colors">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-red-600/10 blur-3xl rounded-full"></div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400 border border-red-500/20 group-hover:scale-110 transition-transform">
                   <Flame className="w-6 h-6"/>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-outfit text-white">Fuego</h3>
                  <p className="text-xs font-bold text-red-400 uppercase tracking-widest">Aries, Leo, Sagitario</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Apasionados e impulsivos. Líderes radiactivos que irradian energía. Su mayor virtud es la valentía, pero el constante desafío es aprender a controlar su temperamento reactivo y cultivar la paciencia.
              </p>
            </div>

            <div className="relative group bg-gradient-to-br from-slate-900 to-slate-900/80 border border-emerald-500/20 rounded-2xl p-8 overflow-hidden hover:border-emerald-500/50 transition-colors">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-600/10 blur-3xl rounded-full"></div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                   <Mountain className="w-6 h-6"/>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-outfit text-white">Tierra</h3>
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Tauro, Virgo, Capricornio</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Prácticos y extremadamente estables. Excelentes constructores de negocios y relaciones a largo plazo. Su desafío es flexibilizar su mente, soltar el control y evitar caer en el materialismo excesivo.
              </p>
            </div>

            <div className="relative group bg-gradient-to-br from-slate-900 to-slate-900/80 border border-sky-500/20 rounded-2xl p-8 overflow-hidden hover:border-sky-500/50 transition-colors">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-sky-600/10 blur-3xl rounded-full"></div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-400 border border-sky-500/20 group-hover:scale-110 transition-transform">
                   <Wind className="w-6 h-6"/>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-outfit text-white">Aire</h3>
                  <p className="text-xs font-bold text-sky-400 uppercase tracking-widest">Géminis, Libra, Acuario</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Intelectuales y magnéticos conversadores. Viven en el plano de las ideas y adoran su libertad. Su desafío es saber conectar con la raíz profunda de sus emociones sin asustarse de la vulnerabilidad.
              </p>
            </div>

            <div className="relative group bg-gradient-to-br from-slate-900 to-slate-900/80 border border-blue-500/20 rounded-2xl p-8 overflow-hidden hover:border-blue-500/50 transition-colors">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-600/10 blur-3xl rounded-full"></div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                   <Droplets className="w-6 h-6"/>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-outfit text-white">Agua</h3>
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Cáncer, Escorpio, Piscis</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Intuitivos y extremadamente empáticos. Sienten el mundo en su piel y son leales hasta el final. Necesitan aprender a colocar límites sanos para no dejarse arrastrar por las emociones ajenas.
              </p>
            </div>
          </div>
        </section>

        {/* ⚡ Compatibilidad Astral Evolucionada */}
        <section className="mb-32">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4 font-outfit tracking-tight">Compatibilidad Astral</h2>
            <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
              Descubre qué combinaciones místicas fluyen de forma electrizante y cuáles representan importantes desafíos kármicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/60 border border-slate-700/70 rounded-2xl p-5 flex flex-col xl:flex-row xl:items-center justify-between gap-4 hover:border-indigo-500/40 transition-colors">
               <div className="flex items-center gap-3">
                 <span className="px-3 py-1.5 bg-red-500/10 text-red-400 font-bold text-[11px] rounded-lg border border-red-500/20 tracking-wider">FUEGO</span>
                 <span className="text-slate-600 font-bold">+</span>
                 <span className="px-3 py-1.5 bg-sky-500/10 text-sky-400 font-bold text-[11px] rounded-lg border border-sky-500/20 tracking-wider">AIRE</span>
               </div>
               <div className="flex flex-col xl:items-end w-full xl:w-7/12">
                 <StarRating count={5} className="mb-1" />
                 <span className="text-[13px] text-slate-400 xl:text-right">Estimulante. El aire aviva constantemente el fuego.</span>
               </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-700/70 rounded-2xl p-5 flex flex-col xl:flex-row xl:items-center justify-between gap-4 hover:border-indigo-500/40 transition-colors">
               <div className="flex items-center gap-3">
                 <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 font-bold text-[11px] rounded-lg border border-emerald-500/20 tracking-wider">TIERRA</span>
                 <span className="text-slate-600 font-bold">+</span>
                 <span className="px-3 py-1.5 bg-blue-500/10 text-blue-400 font-bold text-[11px] rounded-lg border border-blue-500/20 tracking-wider">AGUA</span>
               </div>
               <div className="flex flex-col xl:items-end w-full xl:w-7/12">
                 <StarRating count={5} className="mb-1" />
                 <span className="text-[13px] text-slate-400 xl:text-right">Profunda. El agua hidrata mágicamente la tierra.</span>
               </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-700/70 rounded-2xl p-5 flex flex-col xl:flex-row xl:items-center justify-between gap-4 hover:border-indigo-500/40 transition-colors">
               <div className="flex items-center gap-3">
                 <span className="px-3 py-1.5 bg-red-500/10 text-red-400 font-bold text-[11px] rounded-lg border border-red-500/20 tracking-wider">FUEGO</span>
                 <span className="text-slate-600 font-bold">+</span>
                 <span className="px-3 py-1.5 bg-red-500/10 text-red-400 font-bold text-[11px] rounded-lg border border-red-500/20 tracking-wider">FUEGO</span>
               </div>
               <div className="flex flex-col xl:items-end w-full xl:w-7/12">
                 <StarRating count={4} className="mb-1" />
                 <span className="text-[13px] text-slate-400 xl:text-right">Mucha pasión, pero necesitan aprender a ceder espacio.</span>
               </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-700/70 rounded-2xl p-5 flex flex-col xl:flex-row xl:items-center justify-between gap-4 hover:border-indigo-500/40 transition-colors">
               <div className="flex items-center gap-3">
                 <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 font-bold text-[11px] rounded-lg border border-emerald-500/20 tracking-wider">TIERRA</span>
                 <span className="text-slate-600 font-bold">+</span>
                 <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 font-bold text-[11px] rounded-lg border border-emerald-500/20 tracking-wider">TIERRA</span>
               </div>
               <div className="flex flex-col xl:items-end w-full xl:w-7/12">
                 <StarRating count={4} className="mb-1" />
                 <span className="text-[13px] text-slate-400 xl:text-right">Extrema estabilidad vital, riesgo leve de aburrimiento.</span>
               </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-700/70 rounded-2xl p-5 flex flex-col xl:flex-row xl:items-center justify-between gap-4 hover:border-indigo-500/40 transition-colors">
               <div className="flex items-center gap-3">
                 <span className="px-3 py-1.5 bg-red-500/10 text-red-400 font-bold text-[11px] rounded-lg border border-red-500/20 tracking-wider">FUEGO</span>
                 <span className="text-slate-600 font-bold">+</span>
                 <span className="px-3 py-1.5 bg-blue-500/10 text-blue-400 font-bold text-[11px] rounded-lg border border-blue-500/20 tracking-wider">AGUA</span>
               </div>
               <div className="flex flex-col xl:items-end w-full xl:w-7/12">
                 <StarRating count={2} className="mb-1" />
                 <span className="text-[13px] text-slate-400 xl:text-right">Desafiante. El agua apaga la chispa si no hay cuidado.</span>
               </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-700/70 rounded-2xl p-5 flex flex-col xl:flex-row xl:items-center justify-between gap-4 hover:border-indigo-500/40 transition-colors">
               <div className="flex items-center gap-3">
                 <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 font-bold text-[11px] rounded-lg border border-emerald-500/20 tracking-wider">TIERRA</span>
                 <span className="text-slate-600 font-bold">+</span>
                 <span className="px-3 py-1.5 bg-sky-500/10 text-sky-400 font-bold text-[11px] rounded-lg border border-sky-500/20 tracking-wider">AIRE</span>
               </div>
               <div className="flex flex-col xl:items-end w-full xl:w-7/12">
                 <StarRating count={2} className="mb-1" />
                 <span className="text-[13px] text-slate-400 xl:text-right">Idealistas contra prácticos. Es complejo entenderse.</span>
               </div>
            </div>
          </div>
        </section>

        {/* Artículos Integrados */}
        <section className="mb-24">
           <div className="text-center md:text-left mb-10">
             <h2 className="text-3xl font-extrabold text-white mb-3 font-outfit flex items-center justify-center md:justify-start gap-4">
               <BookOpen className="w-8 h-8 text-indigo-400" />
               Energía y Bienestar
             </h2>
             <p className="text-slate-400 max-w-xl mx-auto md:mx-0 text-lg">Sigue cultivando el equilibrio interior leyendo estas guías seleccionadas.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {formattedArticles.map((article, index) => (
               <div key={article.id} className="bg-white rounded-2xl p-1 shadow-2xl hover:-translate-y-2 transition-transform duration-300">
                 <ArticleCard article={article} variant="default" priority={index < 3} />
               </div>
             ))}
           </div>
        </section>

        {/* Moon Phase - Dynamic Advice */}
        <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900/60 via-slate-800 to-slate-900 border border-indigo-500/30 rounded-2xl p-10 md:p-14 mb-24 flex flex-col md:flex-row items-center gap-10 shadow-2xl group">
            <div className="absolute right-0 top-0 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full group-hover:bg-indigo-500/20 transition-all duration-700"></div>
            <Sun className="w-24 h-24 text-indigo-300/20 flex-shrink-0 animate-pulse" />
            <div className="relative z-10">
              <h3 className="text-3xl font-extrabold mb-4 font-outfit text-white tracking-tight">Consejo Astral del Día</h3>
              <p className="text-slate-300 leading-relaxed text-lg border-l-4 border-indigo-500 pl-6 bg-slate-950/30 py-4 pr-4 rounded-r-xl">
                Los tránsitos planetarios favorecen la profunda reflexión interior. Evita a toda costa tomar decisiones financieras impulsivas y prioriza hoy tu autocuidado. La energía vibrante te invita a soltar definitivamente aquello que ya no suma para liberar tu vitalidad.
              </p>
            </div>
        </div>

        <section className="mb-10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4 font-outfit tracking-tight">Misterios Comunes</h2>
            <p className="text-slate-400 text-lg">Respuestas rápidas para comprender la mística astral.</p>
          </div>
          <div className="grid gap-4">
            {[
              {
                q: "¿La astrología tiene base científica?",
                a: "No es una ciencia empírica, sino un sofisticado sistema simbólico milenario basado en patrones. Sirve más como una fenomenal herramienta psicológica de autodescubrimiento."
              },
              {
                q: "¿Qué diferencia hay entre el signo solar y el ascendente?",
                a: "El solar es tu núcleo, tu poder innato vital; el ascendente representa el vehículo que usas, tu máscara pública y la forma en cómo abordas lo desconocido."
              },
              {
                q: "¿Por qué el pronóstico a veces no se siente exacto?",
                a: "Porque estas lecturas de portal examinan la superficie (únicamente tu signo solar). Tu personalidad completa depende de una compleja y minuciosa carta natal con múltiples astros."
              },
            ].map((faq, i) => (
              <div key={i} className="group bg-slate-900/40 border border-slate-700/50 rounded-2xl p-7 hover:bg-slate-800/80 hover:border-slate-600 transition-all duration-300 cursor-default">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors font-outfit">{faq.q}</h3>
                <p className="text-slate-400 text-[15px] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
