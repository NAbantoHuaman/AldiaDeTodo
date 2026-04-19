import Link from 'next/link';
import { Apple, ChevronLeft, BookOpen, CheckCircle, AlertTriangle, Lightbulb, Brain, Heart, Grape, HelpCircle, ArrowRight, Salad } from 'lucide-react';

export const metadata = {
  title: "Alimentación Saludable: Guía Maestra de Nutrición Consciente",
  description: "Descubre cómo nutrir tu cuerpo con ciencia. Sin dietas de moda, sin restricciones extremas, solo principios nutricionales sólidos para una vida longeva y vibrante.",
  openGraph: {
    title: "Alimentación Saludable: Guía Maestra de Nutrición Consciente",
    description: "Ciencia nutricional aplicada para transformar tu salud de adentro hacia afuera.",
    url: "https://aldiadetodo.com/guias/alimentacion-saludable",
    type: "article",
    images: [{ url: '/images/guias/alimentacion.png' }]
  },
  alternates: { canonical: '/guias/alimentacion-saludable' },
};

export default function GuiaAlimentacion() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Alimentación Saludable: Guía Maestra de Nutrición Consciente',
    description: 'Manual integral sobre nutrición, microbiota y alimentación sostenible en 2026.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/alimentacion-saludable',
  };

  return (
    <article className="min-h-screen bg-white font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-green-50 to-white py-24 border-b border-green-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-green-700 hover:text-green-900 mb-10 transition-colors bg-white px-4 py-2 rounded-full shadow-sm">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-green-500 rounded-3xl flex items-center justify-center shadow-xl shadow-green-200 -rotate-3 border-4 border-white">
              <Apple className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Nutrición Consciente: <span className="text-green-600">Alimenta</span> tu mejor versión
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Salud</span> Bienestar Integral</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 25 min</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Estado:</span> Revisado 2026</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-green-500 pl-6">
            &quot;Tu cuerpo es la máquina más compleja del universo, y la comida es el combustible y la información que le das para funcionar. En 2026, nutrirse no es solo comer para saciarse; es optimizar tu biología para la longevidad.&quot;
          </p>

          <p className="mb-8">
            Estamos en la era de la nutrición de precisión. Ya no buscamos dietas que prometen milagros en una semana, sino una relación equilibrada con la comida basada en la ciencia nutricional moderna y la sostenibilidad. Esta guía técnica y práctica te enseñará a navegar los macronutrientes, entender tu microbiota y tomar decisiones informadas en un mundo lleno de ultraprocesados.
          </p>

          <div className="not-prose bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black !text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-green-400" /> Índice Nutricional
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#macro" className="text-slate-200 no-underline font-bold group-hover:text-green-400 transition-colors">Macronutrientes: La trinidad biológica</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#microbiota" className="text-slate-200 no-underline font-bold group-hover:text-green-400 transition-colors">Microbiota: Tu segundo cerebro</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#fasting" className="text-slate-200 no-underline font-bold group-hover:text-green-400 transition-colors">Ayuno Intermitente: Ciencia vs Mito</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#metodo-plato" className="text-slate-200 no-underline font-bold group-hover:text-green-400 transition-colors">El Método del Plato 2.0</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-green-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Section 1 */}
          <h2 id="macro" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Salad className="w-8 h-8 text-green-600" /> 1. La Trinidad Biológica
          </h2>
          <p>
            Todo lo que ingieres se traduce en tres bloques fundamentales. La clave en 2026 no es eliminar ninguno, sino optimizar la <strong>densidad nutricional</strong> de cada uno.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
             <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                <h4 className="font-black text-green-800 mt-0 mb-2">Proteínas</h4>
                <p className="text-xs text-slate-600 m-0">El material de construcción. Prioriza fuentes completas como huevo, pescado, legumbres y quinua.</p>
             </div>
             <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                <h4 className="font-black text-green-800 mt-0 mb-2">Grasas</h4>
                <p className="text-xs text-slate-600 m-0">El soporte hormonal. Busca el Omega-3 en pescados grasos, semillas de chía, nueces y aceite de oliva extra virgen.</p>
             </div>
             <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                <h4 className="font-black text-green-800 mt-0 mb-2">Carbohidratos</h4>
                <p className="text-xs text-slate-600 m-0">La energía celular. Enfócate en carbohidratos complejos de bajo índice glucémico como tubérculos, granos enteros y frutas.</p>
             </div>
          </div>

          {/* Section 2 */}
          <h2 id="microbiota" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Brain className="w-8 h-8 text-green-600" /> 2. Microbiota: Tu Segundo Cerebro
          </h2>
          <p>
            Investigaciones recientes han confirmado que tu intestino alberga billones de microorganismos que regulan desde tu sistema inmune hasta tu estado de ánimo (el eje intestino-cerebro). Una microbiota sana es el secreto de la longevidad.
          </p>
          <p>
            <strong>¿Cómo alimentarla?</strong> Fibra, fibra y más fibra. Los prebióticos (ajo, cebolla, plátano verde) actúan como &quot;comida&quot; para las bacterias buenas, mientras que los probióticos (yogur natural, kéfir, chucrut o kimchi) introducen nuevas cepas saludables en tu sistema.
          </p>
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 my-10 text-white shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-2xl"></div>
             <h4 className="text-lg font-black text-green-400 mb-4 mt-0">La Regla de los 30 Colores:</h4>
             <p className="text-slate-300 m-0 text-sm leading-relaxed italic">
                La ciencia sugiere que las personas que consumen más de 30 tipos diferentes de plantas a la semana tienen una microbiota significativamente más diversa y resistente. Esto incluye verduras, frutas, granos, nueces, semillas y especias.
             </p>
          </div>

          {/* Section 3 */}
          <h2 id="fasting" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Heart className="w-8 h-8 text-green-600" /> 3. Ayuno Intermitente: ¿Herramienta o Moda?
          </h2>
          <p>
            El ayuno intermitente (IF) no es una dieta, sino un protocolo de tiempos de ingesta. En 2026, la ciencia respalda la <strong>Autofagia</strong>: el proceso de recolección de basura celular que ocurre cuando el cuerpo no está ocupado procesando alimentos.
          </p>
          <p>
            <strong>El Protocolo 16:8:</strong> Es el más accesible. Consiste en 16 horas de ayuno (incluyendo el sueño) y una ventana de 8 horas para comer. Sin embargo, el IF no es para todos. Personas con historial de trastornos alimenticios, mujeres embarazadas o deportistas de alto rendimiento deben consultar siempre a un profesional.
          </p>

          {/* Section 4 */}
          <h2 id="metodo-plato" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Grape className="w-8 h-8 text-green-600" /> 4. El Método del Plato 2.0
          </h2>
          <p>
            Adoptado de Harvard y refinado por nutricionistas deportivos, el método del plato es la forma más rápida de comer bien sin contar calorías:
          </p>
          <div className="space-y-4 my-8">
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">50%</span>
              <p className="text-sm m-0"><strong>Vegetales:</strong> Crucíferos, hojas verdes, pimientos. Prioriza los de temporada.</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">25%</span>
              <p className="text-sm m-0"><strong>Proteína de Calidad:</strong> Que ocupe el tamaño de la palma de tu mano.</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">25%</span>
              <p className="text-sm m-0"><strong>Grasas & Carbs:</strong> Una porción moderada de grasas saludables y carbohidratos complejos.</p>
            </div>
          </div>

          <h2 id="mindful" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Heart className="w-8 h-8 text-green-600" /> 5. Mindful Eating: El Arte de Estar Presente
          </h2>
          <p>
            No eres solo lo que comes, sino <strong>cómo</strong> lo comes. En una sociedad que premia la rapidez, hemos olvidado el acto biológico de la digestión. Comer frente a una pantalla (teléfono, TV o PC) desconecta la comunicación entre tu estómago y tu cerebro.
          </p>
          <p>
            <strong>La Señal de Saciedad:</strong> Tu cerebro tarda unos 20 minutos en registrar que estás lleno. Si devoras tu almuerzo en 5 minutos mientras respondes correos, es casi seguro que comerás de más. El Mindful Eating propone masticar cada bocado al menos 20 veces y soltar los cubiertos entre bocados. Esto no solo mejora la absorción de nutrientes (la digestión empieza en la saliva), sino que reduce significativamente el estrés post-comida.
          </p>

          <h2 id="planetary" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Grape className="w-8 h-8 text-green-600" /> 6. Dieta de Salud Planetaria
          </h2>
          <p>
            En 2026, la nutrición ya no puede ignorar el impacto ambiental. La &quot;EAT-Lancet Commission&quot; recomienda una dieta que beneficie tanto al cuerpo como al planeta. Esto implica reducir drásticamente el consumo de carnes rojas y procesadas, no solo por tu corazón, sino por la huella de carbono.
          </p>
          <p>
            <strong>El futuro es vegetal:</strong> No necesitas ser 100% vegano, pero aumentar el consumo de legumbres, frutos secos y semillas como fuentes principales de proteína es el estándar de salud para esta década. Estos alimentos son densos en micronutrientes, fibra y tienen un impacto ambiental mínimo comparado con la ganadería intensiva.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8 my-12 rounded-r-3xl shadow-sm">
             <p className="text-yellow-900 font-bold mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-600" /> Cambios de Alto Impacto:
             </p>
             <ul className="text-sm text-yellow-800 space-y-2 m-0 p-0 list-none font-medium">
                <li>• Reemplaza aceites refinados por Coco o Oliva virgen.</li>
                <li>• Elimina el azúcar añadido en infusiones (el paladar se adapta en 2 semanas).</li>
                <li>• Prioriza la comida que no tenga etiqueta (fruta, carne, verdura).</li>
                <li>• Come despacio: la señal de saciedad tarda 20 min en llegar al cerebro.</li>
             </ul>
          </div>

          {/* FAQ Section */}
          <div id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <h2 className="text-3xl font-black text-slate-950 font-outfit mb-12 flex items-center gap-3 underline decoration-green-500 decoration-4 underline-offset-8">
              <HelpCircle className="w-8 h-8 text-green-600" /> Preguntas Frecuentes
            </h2>
            
            <div className="space-y-6">
              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Es malo comer fruta de noche por el azúcar?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  No. El azúcar de la fruta (fructosa) viene con fibra y agua, lo que ralentiza su absorción. Tu cuerpo no procesa las calorías de forma diferente según la hora del día. Lo que importa es el balance total diario.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Debo dejar los carbohidratos para bajar de peso?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  No es necesario. Los carbohidratos son la fuente favorita de energía de tu cerebro. La clave es elegir carbohidratos complejos y no refinados, y controlar la porción en relación a tu nivel de actividad física.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Qué son los antinutrientes? ¿Son peligrosos?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Son compuestos naturales en plantas (como legumbres y semillas) que pueden reducir la absorción de minerales. Sin embargo, al remojar y cocinar bien los alimentos, la mayoría se desactivan. Los beneficios de comer estas plantas superan con creces el pequeño efecto de los antinutrientes.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿El café es saludable o debería dejarlo?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  El café es una de las mayores fuentes de antioxidantes en la dieta occidental. Consumido con moderación (2-3 tazas al día) y sin azúcar añadido, se asocia con un menor riesgo de enfermedades neurodegenerativas. Sin embargo, evita consumirlo después de las 2 PM para no interferir con la calidad del sueño.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Es necesario comprar todo &quot;Orgánico&quot;?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  No necesariamente. Es mejor comer una manzana convencional que no comer ninguna fruta. Si tu presupuesto es limitado, prioriza lo orgánico en frutas de piel fina (como fresas o uvas). Para alimentos con piel gruesa (como palta o plátano), lo convencional es perfectamente seguro.
                </p>
              </details>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-green-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                La Salud es tu <br className="hidden md:block" /> Activo más Valioso
              </h2>
              <p className="text-green-50 text-lg leading-relaxed mb-10 font-medium max-w-xl">
                Eres lo que comes, pero también eres cómo lo comes y cuándo lo comes. No busques la perfección, busca la consistencia. Tu cuerpo te agradecerá cada decisión consciente que tomes hoy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/guias" className="bg-white text-green-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-green-50 transition-all shadow-xl flex items-center gap-2">
                   Seguir Aprendiendo <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-green-100 text-sm font-bold">
                  <span className="flex items-center gap-1"><Salad className="w-4 h-4" /> Microbiota</span>
                  <span className="flex items-center gap-1"><Heart className="w-4 h-4" /> Longevidad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
