import React from 'react';
import { Sparkles, Moon, Sun, Heart, Briefcase, Activity, Star, BookOpen } from 'lucide-react';
import { getHoroscopeData } from "@/lib/externalData";
import prisma from "@/lib/prisma";
import ArticleCard from "@/components/ArticleCard";

export const metadata = {
  title: "Horóscopo Diario - AldiaDeTodo",
  description: "Tu predicción diaria astrológica: amor, salud y dinero para todos los signos. Además, guía completa de elementos zodiacales y compatibilidad entre signos.",
};

function getElement(sign: string): string {
  const elements: Record<string, string> = {
    'Aries': 'Fuego 🔥', 'Leo': 'Fuego 🔥', 'Sagitario': 'Fuego 🔥',
    'Tauro': 'Tierra 🌍', 'Virgo': 'Tierra 🌍', 'Capricornio': 'Tierra 🌍',
    'Géminis': 'Aire 💨', 'Libra': 'Aire 💨', 'Acuario': 'Aire 💨',
    'Cáncer': 'Agua 🌊', 'Escorpio': 'Agua 🌊', 'Piscis': 'Agua 🌊',
  };
  return elements[sign] || 'Cósmico ✨';
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
    <div className="min-h-screen bg-[#050510] text-gray-200">
      {/* Mystical Header */}
      <div className="relative py-24 overflow-hidden border-b border-indigo-900/30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent opacity-50 blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-indigo-600/20 rounded-full flex items-center justify-center border border-indigo-500/30 animate-pulse">
              <Moon className="w-10 h-10 text-indigo-400 fill-indigo-400/20" />
            </div>
          </div>
          <h1 className="text-5xl font-black tracking-tight mb-4 bg-gradient-to-r from-indigo-200 via-white to-indigo-200 bg-clip-text text-transparent">
            Zona Astral
          </h1>
          <p className="text-indigo-300 font-medium text-lg max-w-xl mx-auto">
            Predicciones para hoy, <span className="text-white border-b border-indigo-500/50 pb-1">{date}</span>. Descubre lo que los astros tienen reservado para ti.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {allSigns.map((zodiac, i) => (
            <div key={i} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-indigo-500/50 transition-all cursor-pointer">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center font-black text-xl text-white shadow-lg shadow-indigo-900/50 group-hover:scale-110 transition-transform">
                  {zodiac.sign[0]}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{zodiac.sign}</h3>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(star => (
                       <Star key={star} className={`w-2.5 h-2.5 ${star <= 4 ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}`} />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-sm italic mb-8 border-l-2 border-indigo-500 pl-4">
                "{zodiac.text}"
              </p>

              <div className="space-y-6">
                 <div className="flex items-start gap-3">
                   <div className="bg-rose-500/10 p-2 rounded-lg"><Heart className="w-4 h-4 text-rose-400" /></div>
                   <div>
                     <p className="text-[10px] font-bold text-rose-300 uppercase tracking-widest mb-1">Amor</p>
                     <p className="text-xs text-gray-300 leading-relaxed">{zodiac.love}</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-3">
                   <div className="bg-emerald-500/10 p-2 rounded-lg"><Briefcase className="w-4 h-4 text-emerald-400" /></div>
                   <div>
                     <p className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest mb-1">Dinero</p>
                     <p className="text-xs text-gray-300 leading-relaxed">{zodiac.money}</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-3">
                   <div className="bg-indigo-500/10 p-2 rounded-lg"><Activity className="w-4 h-4 text-indigo-400" /></div>
                   <div>
                     <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest mb-1">Salud</p>
                     <p className="text-xs text-gray-300 leading-relaxed">{zodiac.health}</p>
                   </div>
                 </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] items-end font-bold text-indigo-400 uppercase tracking-widest">
                <span>Elemento: {getElement(zodiac.sign)}</span>
                <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* ORIGINAL CONTENT: Zodiac Elements Guide */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-4 font-outfit">Los Cuatro Elementos del Zodíaco</h2>
          <p className="text-gray-400 mb-10 max-w-3xl leading-relaxed">
            En la astrología occidental, los 12 signos se agrupan en cuatro elementos fundamentales. Cada elemento influye en la personalidad, la forma de relacionarse y la manera de enfrentar los desafíos de la vida.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-red-300 mb-2">🔥 Fuego — Aries, Leo, Sagitario</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Los signos de fuego son apasionados, dinámicos e impulsivos. Son líderes naturales que irradian energía y confianza. Su desafío es aprender a controlar su temperamento y desarrollar paciencia. En el amor, son intensos y directos; en el trabajo, ambiciosos y creativos.
              </p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-emerald-300 mb-2">🌍 Tierra — Tauro, Virgo, Capricornio</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Los signos de tierra son prácticos, estables y confiables. Valoran la seguridad material y emocional. Son excelentes para construir cosas duraderas — relaciones, negocios, patrimonio. Su desafío es no caer en la rigidez o el materialismo excesivo.
              </p>
            </div>
            <div className="bg-sky-500/10 border border-sky-500/20 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-sky-300 mb-2">💨 Aire — Géminis, Libra, Acuario</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Los signos de aire son intelectuales, comunicativos y sociales. Viven en el mundo de las ideas y la conexión humana. Son excelentes conversadores y mediadores. Su desafío es conectar con sus emociones profundas y no quedarse solo en lo superficial.
              </p>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-blue-300 mb-2">🌊 Agua — Cáncer, Escorpio, Piscis</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Los signos de agua son emocionales, intuitivos y empáticos. Sienten todo con profundidad y tienen una capacidad innata para comprender a los demás. Son extremadamente leales. Su desafío es no dejarse arrastrar por emociones abrumadoras y establecer límites saludables.
              </p>
            </div>
          </div>
        </section>

        {/* ORIGINAL CONTENT: Compatibility Quick Guide */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-4 font-outfit">Compatibilidad entre Elementos</h2>
          <p className="text-gray-400 mb-10 max-w-3xl leading-relaxed">
            La compatibilidad astrológica no es una ciencia exacta, pero los elementos nos dan pistas sobre qué combinaciones tienden a fluir naturalmente y cuáles requieren más trabajo.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-xs font-bold text-indigo-300 uppercase tracking-widest">Combinación</th>
                  <th className="px-6 py-4 text-xs font-bold text-indigo-300 uppercase tracking-widest">Afinidad</th>
                  <th className="px-6 py-4 text-xs font-bold text-indigo-300 uppercase tracking-widest hidden md:table-cell">Descripción</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-300">
                <tr className="border-b border-white/5">
                  <td className="px-6 py-3 font-medium">Fuego + Aire</td>
                  <td className="px-6 py-3 text-emerald-400 font-bold">⭐⭐⭐⭐⭐</td>
                  <td className="px-6 py-3 hidden md:table-cell">El aire aviva el fuego. Relación vibrante y estimulante.</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-3 font-medium">Tierra + Agua</td>
                  <td className="px-6 py-3 text-emerald-400 font-bold">⭐⭐⭐⭐⭐</td>
                  <td className="px-6 py-3 hidden md:table-cell">El agua nutre la tierra. Relación estable y profunda.</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-3 font-medium">Fuego + Fuego</td>
                  <td className="px-6 py-3 text-amber-400 font-bold">⭐⭐⭐⭐</td>
                  <td className="px-6 py-3 hidden md:table-cell">Mucha pasión pero necesitan aprender a ceder.</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-3 font-medium">Tierra + Tierra</td>
                  <td className="px-6 py-3 text-amber-400 font-bold">⭐⭐⭐⭐</td>
                  <td className="px-6 py-3 hidden md:table-cell">Muy estables juntos, pero pueden estancarse.</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-6 py-3 font-medium">Fuego + Agua</td>
                  <td className="px-6 py-3 text-rose-400 font-bold">⭐⭐</td>
                  <td className="px-6 py-3 hidden md:table-cell">El agua apaga al fuego. Relación desafiante pero transformadora.</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 font-medium">Tierra + Aire</td>
                  <td className="px-6 py-3 text-rose-400 font-bold">⭐⭐</td>
                  <td className="px-6 py-3 hidden md:table-cell">Práctico vs. idealista. Necesitan paciencia mutua.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Integrated Articles Section */}
        <section className="mb-20">
           <h2 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
             <BookOpen className="w-6 h-6 text-indigo-400" />
             Lecturas de Bienestar y Crecimiento
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {formattedArticles.map((article, index) => (
               <div key={article.id} className="bg-white rounded-2xl p-1">
                 <ArticleCard article={article} variant="default" priority={index < 3} />
               </div>
             ))}
           </div>
        </section>

        {/* Moon Phase - Dynamic based on calculation */}
        <div className="bg-gradient-to-r from-indigo-900/40 to-slate-900/40 border border-white/5 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 mb-20">
            <Sun className="w-20 h-20 text-indigo-100 opacity-20" />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Consejo Astral del Día</h3>
              <p className="text-gray-400 leading-relaxed">
                Los tránsitos planetarios de hoy favorecen la reflexión interior. Es un buen momento para revisar tus metas a largo plazo, escribir en un diario o tener conversaciones significativas con personas de confianza. Evita tomar decisiones financieras impulsivas y prioriza el autocuidado. La energía cósmica actual te invita a soltar aquello que ya no te sirve para abrir espacio a nuevas oportunidades.
              </p>
            </div>
        </div>

        {/* ORIGINAL: Astrology FAQ */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-white mb-10 font-outfit">Preguntas Frecuentes sobre Astrología</h2>
          <div className="space-y-4">
            {[
              {
                q: "¿La astrología tiene base científica?",
                a: "La astrología no es una ciencia en el sentido moderno del término. Sin embargo, es un sistema simbólico milenario que muchas personas encuentran útil como herramienta de autoconocimiento y reflexión. En AldiaDeTodo presentamos el horóscopo como entretenimiento y reflexión personal, no como predicción factual."
              },
              {
                q: "¿Qué diferencia hay entre el signo solar y el ascendente?",
                a: "Tu signo solar (el que conoces según tu fecha de nacimiento) representa tu esencia y personalidad central. Tu ascendente, determinado por la hora exacta de tu nacimiento, representa cómo te presentas ante el mundo y la primera impresión que das. Para una lectura más completa, necesitas conocer ambos."
              },
              {
                q: "¿Por qué mi horóscopo a veces no coincide conmigo?",
                a: "El horóscopo diario solo considera tu signo solar, que es uno de los muchos factores de tu carta astral. Tu carta completa incluye signo lunar, ascendente, posiciones de todos los planetas y las casas astrológicas. Es como leer solo una página de un libro de 300 páginas."
              },
              {
                q: "¿Cada cuánto se actualiza el horóscopo?",
                a: "Nuestro horóscopo se actualiza diariamente con predicciones nuevas para cada uno de los 12 signos del zodíaco. Las predicciones cubren las áreas de amor, dinero y salud."
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
