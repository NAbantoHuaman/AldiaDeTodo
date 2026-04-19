import Link from 'next/link';
import { Utensils, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Zap, Globe, Layers, Shield } from 'lucide-react';

export const metadata = {
  title: "Batch Cooking & Nutrición Inteligente: Come Sano sin Perder Tiempo en 2026",
  description: "Guía maestra sobre Batch Cooking. Aprende a cocinar toda tu semana en 2 horas, optimizar la compra, conservar alimentos y nutrirte mejor con menos esfuerzo.",
  openGraph: {
    title: "Batch Cooking & Nutrición Inteligente: Come Sano sin Perder Tiempo en 2026",
    description: "Domina tu cocina y tu salud. La guía definitiva para alimentarte como un profesional sin pasar horas frente a los fogones todos los días.",
    url: "https://aldiadetodo.com/guias/cocina-nutricion-batch",
    type: "article",
    images: [{ url: '/images/guias/batch-cooking.png' }]
  },
  alternates: { canonical: '/guias/cocina-nutricion-batch' },
};

export default function GuiaCocina() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Batch Cooking & Nutrición Inteligente: Come Sano sin Perder Tiempo en 2026',
    description: 'Manual definitivo sobre el sistema de cocina por lotes (Batch Cooking), planificación nutricional y optimización de tiempo en el hogar.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/cocina-nutricion-batch',
  };

  return (
    <article className="min-h-screen bg-white font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-orange-50 to-white py-24 border-b border-orange-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-orange-700 hover:text-orange-900 mb-10 transition-colors bg-white px-4 py-2 rounded-full shadow-sm">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-orange-500 rounded-3xl flex items-center justify-center shadow-xl shadow-orange-200 -rotate-3 border-4 border-white">
              <Utensils className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Batch Cooking: El Arte de <span className="text-orange-600">Comer Bien</span> sin Esclavo de la Cocina
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Tema:</span> Nutrición</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 20 min</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Meta:</span> Eficiencia</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-orange-500 pl-6">
            &quot;La mayoría de la gente no come mal por falta de voluntad, sino por falta de sistema. En 2026, la cocina no es una tarea diaria de improvisación, sino un proceso de ingeniería de una vez por semana que libera tu tiempo y tu salud.&quot;
          </p>

          <p className="mb-8">
            Vivimos en la era de la inmediatez, pero la buena nutrición requiere tiempo... o al menos eso nos han hecho creer. El <strong>Batch Cooking</strong> es la técnica de cocinar grandes cantidades de ingredientes base de una sola vez para luego combinarlos en diferentes platos a lo largo de la semana. No se trata solo de hacer mucho de una sola cosa, sino de preparar los &quot;bloques de construcción&quot; biológicos que alimentarán tu cerebro y cuerpo. En esta guía, desglosaremos cómo puedes dominar tu cocina en solo 2-3 horas a la semana, ahorrando dinero, reduciendo el desperdicio y, sobre todo, comiendo mejor de lo que jamás imaginaste.
          </p>

          <div className="not-prose bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black !text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-orange-400" /> Plan de Cocina
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#filosofia" className="text-slate-200 no-underline font-bold group-hover:text-orange-400 transition-colors">La Metodología Batch: Cocinar por Bloques</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#organizacion" className="text-slate-200 no-underline font-bold group-hover:text-orange-400 transition-colors">Organización de la Despensa y Compra Inteligente</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#conservacion" className="text-slate-200 no-underline font-bold group-hover:text-orange-400 transition-colors">La Ciencia de la Conservación: Frío y Vacío</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#recetas" className="text-slate-200 no-underline font-bold group-hover:text-orange-400 transition-colors">Menú Base para 5 Días en 120 Minutos</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-orange-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          <h2 id="filosofia" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Layers className="w-8 h-8 text-orange-600" /> 1. Cocina por Bloques de Construcción
          </h2>
          <p>
            El error común en el Batch Cooking es cocinar 5 platos diferentes el domingo. Eso agota y requiere muchísima limpieza. El secreto profesional es cocinar <strong>componentes versátiles</strong>:
          </p>
          <ul className="space-y-4 m-0 p-0 list-none mb-12">
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-orange-900 text-lg">Proteínas Base:</span> Cocina 1kg de pechuga de pollo, legumbres o soja texturizada con una sazón neutra.
            </li>
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-orange-900 text-lg">Cereales y Tubérculos:</span> Una olla de arroz integral, quinoa o unas bandejas de patatas al horno.
            </li>
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-orange-900 text-lg">Verduras de Corte:</span> Hornea todas las verduras a la vez en bandejas separadas. Brócoli, zanahorias, pimientos... lo que sea de temporada.
            </li>
          </ul>

          <h2 id="organizacion" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Search className="w-8 h-8 text-orange-600" /> 2. La Compra: El 50% del Éxito
          </h2>
          <p>
            Nunca vayas al supermercado sin una lista basada en tu plan de Batch Cooking. En 2026, lo ideal es maximizar el uso de <strong>congelados de calidad</strong> (como espinacas o menestras) para ahorrar tiempo de picado y asegurarte de que tus verduras conserven todos los nutrientes al haber sido congeladas tras la cosecha. 
          </p>
          <div className="bg-orange-50 border border-orange-100 rounded-3xl p-8 my-10 flex gap-6 items-start shadow-sm">
             <Lightbulb className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
             <div>
                <h4 className="text-lg font-black text-orange-900 mb-2 mt-0">Salsas: El Alma de la Variedad</h4>
                <p className="text-orange-800 m-0 text-sm leading-relaxed">
                  Puedes comer arroz, pollo y brócoli tres días seguidos y que parezcan platos totalmente diferentes si preparas tres salsas distintas el domingo: una de tahini y limón, otra de curry y coco, y una vinagreta balsámica clásica. El sabor está en el aderezo.
                </p>
             </div>
          </div>

          <h2 id="conservacion" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Shield className="w-8 h-8 text-orange-600" /> 3. La Seguridad Alimentaria
          </h2>
          <p>
            Cocinar para 5 días requiere saber cómo guardar los alimentos para que se mantengan frescos y seguros.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Tupper de Cristal:</strong> Son mejores que el plástico para calentar y no absorben olores.</li>
            <li><strong>Enfriado Rápido:</strong> No dejes la comida fuera 3 horas. En cuanto deje de quemar, al frigo.</li>
            <li><strong>Regla del 3:</strong> Las proteínas aguantan bien 3-4 días. Si vas a comerlo el viernes, congela esa ración el domingo y bájala al frigo el miércoles por la noche.</li>
          </ul>

          <h2 id="recetas" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-orange-600" /> 4. Un Menú Real en 120 Minutos
          </h2>
          <p>
             Aquí tienes la coreografía básica para tu sesión de domingo:
          </p>
          <ul className="space-y-4 m-0 p-0 list-none">
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">0-15 min</span>
              <p className="text-sm m-0">Precalentar horno, poner agua a hervir para cereales y picar todas las verduras de una vez.</p>
            </li>
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">15-60 min</span>
              <p className="text-sm m-0">Verduras y proteínas al horno en bandejas. Arroz o pasta en el fuego. Preparar las salsas en botes pequeños.</p>
            </li>
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">60-120 min</span>
              <p className="text-sm m-0">Dejar enfriar, organizar en recipientes y limpiar (que será poco porque has usado el horno para casi todo).</p>
            </li>
          </ul>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-orange-600" /> Preguntas Frecuentes
          </h2>
          <div className="space-y-6 mt-8">
            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿No se cansa uno de comer &quot;sobras&quot;?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Si lo haces bien, no son sobras, son ingredientes frescos listos para montar. Al cambiar la salsa o el acompañamiento (ej. un día con ensalada fresca, otro día salteado rápido en la sartén), la experiencia de comer es siempre nueva.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Es más caro comer así?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Al contrario. Evitas las compras impulsivas, dejas de pedir comida a domicilio por cansancio y reduces el desperdicio de comida que se echa a perder en el frigo porque nunca llegaste a cocinarla. El ahorro medio es del 30-40% mensual.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Qué pasa con los nutrientes?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                La pérdida es mínima comparada con la alternativa de comer ultraprocesados o comida rápida. Guardar la comida cocinada en recipientes herméticos protege la mayoría de las vitaminas y minerales.
              </p>
            </details>
          </div>

          <div className="bg-orange-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                Recupera tu Salud y <br className="hidden md:block" /> tu Tiempo Libre
              </h2>
              <p className="text-orange-50 text-lg leading-relaxed mb-10 font-medium max-w-2xl">
                Deja de preguntarte &quot;qué ceno hoy&quot; a las 8 de la noche cuando estás agotado. Domina el Batch Cooking y empieza a vivir con la tranquilidad de que tu cuerpo está recibiendo la mejor gasolina posible sin robarte tus tardes.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-50 transition-all shadow-xl flex items-center gap-2">
                   Todas las Guías <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-orange-100 text-sm font-bold">
                  <span className="flex items-center gap-1"><Utensils className="w-4 h-4" /> Eco-Friendly</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Healthy Body</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
