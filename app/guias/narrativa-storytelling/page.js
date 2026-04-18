import Link from 'next/link';
import { BookOpen, ChevronLeft, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Zap, Globe, Layers, Shield, MessageCircle, Mic } from 'lucide-react';

export const metadata = {
  title: "El Arte del Storytelling y la Narrativa: Persuasión en 2026",
  description: "Guía maestra sobre narrativa y storytelling. Aprende a construir historias que enganchen, técnicas de oratoria moderna y cómo persuadir a través de la palabra en la era digital.",
  openGraph: {
    title: "El Arte del Storytelling y la Narrativa: Persuasión en 2026",
    description: "Domina la herramienta más antigua y poderosa de la humanidad: la historia. Aprende a comunicar con impacto y a liderar a través de la narrativa.",
    url: "https://aldiadetodo.com/guias/narrativa-storytelling",
    type: "article",
    images: [{ url: '/images/guias/storytelling.png' }]
  },
  alternates: { canonical: '/guias/narrativa-storytelling' },
};

export default function GuiaStorytelling() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'El Arte del Storytelling y la Narrativa: Persuasión en 2026',
    description: 'Manual profundo sobre las estructuras narrativas, psicología de la persuasión y técnicas de oratoria para el éxito profesional y personal.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/narrativa-storytelling',
  };

  return (
    <article className="min-h-screen bg-white font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-rose-50 to-white py-24 border-b border-rose-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-rose-700 hover:text-rose-900 mb-10 transition-colors bg-white px-4 py-2 rounded-full shadow-sm">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-rose-600 rounded-3xl flex items-center justify-center shadow-xl shadow-rose-200 -rotate-6 border-4 border-white">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Storytelling: El <span className="text-rose-600">Superpoder</span> de la Conexión Humana
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Tema:</span> Comunicación</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 25 min</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Efecto:</span> Persuasión</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-rose-500 pl-6">
            &quot;Los datos informan, pero las historias venden, inspiran y perduran. En un mundo saturado de ruido digital, quien cuenta la mejor historia es quien realmente se queda con la atención y el corazón de la audiencia.&quot;
          </p>

          <p className="mb-8">
            Desde que nos sentábamos alrededor de una fogata en cuevas prehistóricas, las historias han sido nuestro pegamento social y nuestra forma de transmitir conocimiento. En 2026, a pesar de los algoritmos y la inteligencia artificial, el <strong>Storytelling</strong> sigue siendo la competencia más valorada en líderes, emprendedores y creadores de contenido. No se trata de inventar cuentos; se trata de estructurar la verdad de manera que resuene con la psicología humana. En esta guía profunda, aprenderás los secretos de los grandes narradores para convertir datos áridos en viajes emocionales inolvidables.
          </p>

          <div className="bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-rose-400" /> Índice de Narrativa
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#estructuras" className="text-slate-200 no-underline font-bold group-hover:text-rose-400 transition-colors">Estructuras Maestras: El Viaje del Héroe y el Círculo de Story</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#psicologia" className="text-slate-200 no-underline font-bold group-hover:text-rose-400 transition-colors">Psicología de la Conexión: Oxitocina y Dopamina</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#oratoria" className="text-slate-200 no-underline font-bold group-hover:text-rose-400 transition-colors">Oratoria Pro: Tu Voz como Instrumento de Poder</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#marcas" className="text-slate-200 no-underline font-bold group-hover:text-rose-400 transition-colors">Storytelling de Marca: Vendiendo sin Vender</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-rose-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          <h2 id="estructuras" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Layers className="w-8 h-8 text-rose-600" /> 1. Estructuras que Funcionan
          </h2>
          <p>
            Una gran historia no es un accidente; es arquitectura. En 2026, seguimos usando los planos que Joseph Campbell identificó en el <strong>Viaje del Héroe</strong>:
          </p>
          <ul className="space-y-4 m-0 p-0 list-none mb-12">
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-rose-900 text-lg">El Mundo Ordinario:</span> Establece la zona de confort. ¿Cuál es el problema actual que tu audiencia enfrenta?
            </li>
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-rose-900 text-lg">El Incidente Incitador:</span> El momento en que todo cambia. El reto que obliga a la acción.
            </li>
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-rose-900 text-lg">La Resolución:</span> Cómo la herramienta (tu idea, tu producto) resuelve el conflicto y transforma al héroe (tu cliente).
            </li>
          </ul>
          <p>
            Recuerda siempre: En el storytelling de negocios, <strong>tú no eres el héroe</strong>. El cliente es el héroe. Tú eres el mentor (el Gandalf o el Yoda) que le da la espada láser para ganar la batalla.
          </p>

          <h2 id="psicologia" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-rose-600" /> 2. La Química de una Gran Historia
          </h2>
          <p>
            Cuando escuchamos una buena historia, nuestro cerebro libera cócteles químicos potentes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Cortisol:</strong> Se libera cuando hay tensión y conflicto, capturando nuestra atención total.</li>
            <li><strong>Dopamina:</strong> Nos mantiene enganchados, esperando el desenlace feliz.</li>
            <li><strong>Oxitocina:</strong> La hormona del vínculo. Se libera cuando empatizamos con los personajes, creando confianza hacia el narrador.</li>
          </ul>
          <div className="bg-rose-50 border border-rose-100 rounded-3xl p-8 my-10 flex gap-6 items-start shadow-sm">
             <Lightbulb className="w-8 h-8 text-rose-500 flex-shrink-0 mt-1" />
             <div>
                <h4 className="text-lg font-black text-rose-900 mb-2 mt-0">Muestra, no cuentes:</h4>
                <p className="text-rose-800 m-0 text-sm leading-relaxed">
                  No digas &quot;estábamos muy cansados&quot;. Di &quot;arrastrábamos los pies por el pasillo, incapaces de sostener la mirada mientras el café frío era nuestro único aliado&quot;. El cerebro humano recrea las imágenes sensoriales, lo que hace que la experiencia sea vivida, no solo oída.
                </p>
             </div>
          </div>

          <h2 id="oratoria" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Mic className="w-8 h-8 text-rose-600" /> 3. Oratoria Moderna: Tu Escenario Digital
          </h2>
          <p>
            En 2026, la oratoria ha saltado de los podios a las cámaras de Zoom y los Reels. 
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>La Regla de los 3 Segundos:</strong> Tienes ese tiempo para enganchar visual o verbalmente antes de que alguien haga scroll.</li>
            <li><strong>Lenguaje Corporal:</strong> En vídeo, tus manos y tu mirada a la lente son tus herramientas de credibilidad.</li>
            <li><strong>El Poder del Silencio:</strong> Las pausas dramáticas permiten que tu audiencia procese lo que acabas de decir y añaden autoridad a tu mensaje.</li>
          </ul>

          <h2 id="marcas" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Globe className="w-8 h-8 text-rose-600" /> 4. Storyselling: Vendiendo Valor
          </h2>
          <p>
             Las marcas que solo hablan de características mueren. Las marcas que hablan de valores y propósitos a través de historias sobreviven. El Storytelling de marca en 2026 se basa en la <strong>Vulnerabilidad Auténtica</strong>. Compartir los fracasos, los retos y los &quot;detrás de escena&quot; de forma honesta crea una lealtad de marca que ningún descuento puede igualar.
          </p>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-rose-600" /> Preguntas Frecuentes
          </h2>
          <div className="space-y-6 mt-8">
            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Se nace con el talento de contar historias o se aprende?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Es una habilidad entrenable. Aunque algunos tengan una facilidad natural, el storytelling es una técnica basada en estructuras. Una vez que aprendes a identificar los puntos de giro y a usar el lenguaje emocional, cualquiera puede convertirse en un narrador convincente.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Cómo cuento historias si vendo algo &quot;aburrido&quot; como software contable?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                No hables de la contabilidad. Habla de la madre emprendedora que por fin pudo ir a la función de teatro de su hijo porque tu software le ahorró 10 horas de trabajo al mes. Tu historia es sobre la liberación y la paz mental, no sobre los asientos contables.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Cuál es el error más común en Storytelling?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Extenderse demasiado sin llegar al punto (perder el foco) o hacer una historia donde el narrador es el centro de atención absoluto sin aportar valor a la audiencia. Una buena historia siempre tiene un regalo para quien la escucha.
              </p>
            </details>
          </div>

          <div className="bg-rose-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                Convierte tus Palabras <br className="hidden md:block" /> en Impacto Real
              </h2>
              <p className="text-rose-50 text-lg leading-relaxed mb-10 font-medium max-w-2xl">
                El mundo está esperando tu historia. Aprende las técnicas de los maestros de la persuasión y empieza a comunicar tus ideas de una forma que no solo se entienda, sino que se sienta. En AldiaDeTodo te damos la voz para que lideres el cambio.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-rose-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-rose-50 transition-all shadow-xl flex items-center gap-2">
                   Explorar Recursos <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-rose-100 text-sm font-bold">
                  <span className="flex items-center gap-1"><Mic className="w-4 h-4" /> Public Speaking</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Deep Connection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
