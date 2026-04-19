import Link from 'next/link';
import { Landmark, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Zap, Globe, Layers, Shield, TrendingUp } from 'lucide-react';

export const metadata = {
  title: "Inversión Inmobiliaria: Guía Maestra para la Libertad Financiera en 2026",
  description: "Aprende a invertir en bienes raíces. Del análisis de rentabilidad y apalancamiento hipotecario a la gestión de alquileres y fiscalidad inmobiliaria moderna.",
  openGraph: {
    title: "Inversión Inmobiliaria: Guía Maestra para la Libertad Financiera en 2026",
    description: "Construye tu patrimonio con ladrillos. La guía definitiva para inversores que buscan rentabilidad y seguridad a largo plazo.",
    url: "https://aldiadetodo.com/guias/inversion-inmobiliaria",
    type: "article",
    images: [{ url: '/images/guias/inmobiliaria.png' }]
  },
  alternates: { canonical: '/guias/inversion-inmobiliaria' },
};

export default function GuiaInversion() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Inversión Inmobiliaria: Guía Maestra para la Libertad Financiera en 2026',
    description: 'Manual exhaustivo sobre la inversión en bienes raíces, estrategias de cash flow, plusvalía e inteligencia financiera aplicada al mercado inmobiliario.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/inversion-inmobiliaria',
  };

  return (
    <article className="min-h-screen bg-white font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-emerald-50 to-white py-24 border-b border-emerald-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-700 hover:text-emerald-900 mb-10 transition-colors bg-white px-4 py-2 rounded-full shadow-sm">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-emerald-600 rounded-3xl flex items-center justify-center shadow-xl shadow-emerald-200 rotate-3 border-4 border-white">
              <Landmark className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Inversión Inmobiliaria: <span className="text-emerald-600">Patrimonio</span> Sólido como el Ladrillo
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Activo:</span> Bienes Raíces</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 26 min</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Nivel:</span> Financiero</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-emerald-500 pl-6">
            &quot;El alquiler se paga cada mes, la inflación sube cada año, pero el suelo es finito. Invertir en inmuebles no es una apuesta rápida, es el camino más probado para construir riqueza que dure generaciones.&quot;
          </p>

          <p className="mb-8">
            En un mundo de volatilidad criptográfica y mercados bursátiles impredecibles, el sector inmobiliario sigue siendo el puerto seguro preferido de los inversores más exitosos. Sin embargo, en 2026, el éxito inmobiliario no se basa en &quot;comprar y esperar&quot;. Requiere un análisis matemático riguroso, el dominio del apalancamiento financiero y la capacidad de identificar nichos de alta demanda (como el coliving o el alquiler de corta estancia gestionado por IA). Esta guía te enseñará a pensar como un profesional de los bienes raíces, desde la compra de tu primer estudio hasta la gestión de una cartera diversificada que trabaje para ti.
          </p>

          <div className="not-prose bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black !text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-emerald-400" /> Plan del Inversor
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#mentalidad" className="text-slate-200 no-underline font-bold group-hover:text-emerald-400 transition-colors">Activos vs Pasivos: Tu casa no es tu mejor inversión</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#analisis" className="text-slate-200 no-underline font-bold group-hover:text-emerald-400 transition-colors">Matemáticas del Inmueble: Rentabilidad y Cash Flow</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#apalancamiento" className="text-slate-200 no-underline font-bold group-hover:text-emerald-400 transition-colors">Apalancamiento: Cómo el banco paga tu libertad</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#estrategias" className="text-slate-200 no-underline font-bold group-hover:text-emerald-400 transition-colors">Estrategias Modernas: Flip, Buy & Hold y Coliving</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-emerald-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          <h2 id="mentalidad" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <TrendingUp className="w-8 h-8 text-emerald-600" /> 1. Invertir con Propósito
          </h2>
          <p>
            El primer error del principiante es confundir la compra de su vivienda habitual con una inversión. Según Robert Kiyosaki, una inversión es algo que pone dinero en tu bolsillo cada mes. Tu vivienda habitual, aunque sea un activo, a menudo saca dinero de tu bolsillo en forma de mantenimiento, impuestos e hipoteca.
          </p>
          <p>
            <strong>La Inteligencia del Ladrillo:</strong> Invertir para alquilar (Buy to Rent) te permite generar ingresos pasivos recurrentes. Esto protege tu capital contra la inflación y te permite aprovechar las deducciones fiscales que muchos gobiernos ofrecen para fomentar el mercado del alquiler.
          </p>
          <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 my-10 flex gap-6 items-start shadow-sm">
             <Lightbulb className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-1" />
             <div>
                <h4 className="text-lg font-black text-emerald-900 mb-2 mt-0">La Regla del 1%:</h4>
                <p className="text-emerald-800 m-0 text-sm leading-relaxed">
                  Una heurística rápida (no infalible) es que un inmueble es una buena oportunidad si el alquiler mensual que puedes obtener es cercano al 1% del precio de compra total. Si compras por 150,000€ y alquilas por 1,500€, tienes una joya. En 2026, encontrar esto requiere salir de las zonas súper-prime y buscar barrios en transformación.
                </p>
             </div>
          </div>

          <h2 id="analisis" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Search className="w-8 h-8 text-emerald-600" /> 2. El Cuadro de Mandos: Rentabilidad Real
          </h2>
          <p>
            No te dejes engañar por la rentabilidad bruta. Un inversor pro calcula la <strong>Rentabilidad Neta (ROA)</strong> y el <strong>Cash-on-Cash Return (RoE)</strong>.
          </p>
          <ul className="space-y-4 m-0 p-0 list-none mb-12">
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-emerald-900">Rentabilidad Bruta:</span> (Ingresos anuales / Precio compra) x 100.
            </li>
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-emerald-900">Rentabilidad Neta:</span> Resta gastos de comunidad, IBI, seguros y reparaciones de tus ingresos.
            </li>
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-emerald-900">Cash Flow:</span> Lo que sobra después de pagar todos los gastos Y la letra de la hipoteca. Si el Cash Flow es negativo, estás subvencionando el activo, no invirtiendo.
            </li>
          </ul>

          <h2 id="apalancamiento" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-emerald-600" /> 3. Apalancamiento: El Multiplicador de Riqueza
          </h2>
          <p>
            Inmuebles es el único activo donde el banco te presta el 80% (o más) del capital a un interés razonable. Esto permite que tu rentabilidad se multiplique. 
          </p>
          <p>
            Si compras un piso de 100,000€ al contado y sube un 5%, ganas 5,000€. Pero si pones 20,000€ y hipotecas el resto, y el piso sube el mismo 5%, has ganado 5,000€ sobre una inversión de 20,000€: ¡un 25% de rentabilidad sobre tu capital propio! Dominar el apalancamiento es lo que permite a las personas con ahorros modestos construir fortunas inmobiliarias.
          </p>

          <h2 id="estrategias" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Layers className="w-8 h-8 text-emerald-600" /> 4. Estrategias para 2026
          </h2>
          <p>
             El mercado ha cambiado. Aquí están los nichos ganadores:
          </p>
          <ul className="space-y-4 m-0 p-0 list-none">
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">Coliving</span>
              <p className="text-sm m-0">Alquilar habitaciones industriales en grandes ciudades. Dobla la rentabilidad del alquiler tradicional a cambio de más gestión.</p>
            </li>
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">Flipping</span>
              <p className="text-sm m-0">Comprar, reformar y vender rápido. Requiere un equipo de reformas de confianza y un ojo clínico para las gangas.</p>
            </li>
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">Tokenización</span>
              <p className="text-sm m-0">Invertir en &quot;trozos&quot; de edificios vía Blockchain. Permite entrar en el mercado con solo 1,000€.</p>
            </li>
          </ul>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-emerald-600" /> Preguntas Frecuentes
          </h2>
          <div className="space-y-6 mt-8">
            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Es un buen momento para comprar en 2026?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Siempre es un buen momento si los números salen. Un inversor no predice el mercado, analiza el activo. Si compras con margen de seguridad y cash flow positivo, el precio del mercado a corto plazo no te importa; te importa el valor a largo plazo.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Qué pasa si el inquilino no paga?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Es el mayor miedo del inversor. En 2026, los seguros de impago y las gestoras profesionales de alquileres filtran de forma excelente. Considera el coste del seguro como un gasto fijo más de tu inversión; la tranquilidad vale más que ese 4% adicional de rentabilidad.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Necesito mucho dinero para empezar?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                No necesariamente. Puedes empezar con el ahorro para una entrada pequeña, buscar socios inversores o utilizar el crowdfunding inmobiliario. Lo importante es empezar a entender el mercado lo antes posible.
              </p>
            </details>
          </div>

          <div className="bg-emerald-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                Construye un Imperio <br className="hidden md:block" /> de Activos Reales
              </h2>
              <p className="text-emerald-50 text-lg leading-relaxed mb-10 font-medium max-w-2xl">
                Deja de trabajar por el dinero y haz que el dinero trabaje por ti a través de los bienes raíces. En AldiaDeTodo te enseñamos a construir el patrimonio que te dará la libertad que siempre has soñado.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-50 transition-all shadow-xl flex items-center gap-2">
                   Explorar Recursos <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-emerald-100 text-sm font-bold">
                  <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> Asset Protected</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Infinite Scale</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
