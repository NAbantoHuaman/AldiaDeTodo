import Link from 'next/link';
import { Sparkles, ChevronLeft, BookOpen, CheckCircle, Clock, Zap, Target, Moon, Sun, Coffee, HelpCircle, ArrowRight, Brain } from 'lucide-react';

export const metadata = {
  title: "10 Hábitos de las Personas Altamente Productivas: Guía Maestra",
  description: "Transforma tu rendimiento con sistemas probados. Del flujo de trabajo profundo a la gestión de energía y la neurociencia de los hábitos. Tu manual para conquistar el 2026.",
  openGraph: {
    title: "10 Hábitos de las Personas Altamente Productivas: Guía Maestra",
    description: "Multiplica tu impacto personal y profesional con estrategias de productividad de élite.",
    url: "https://aldiadetodo.com/guias/habitos-productivos",
    type: "article",
    images: [{ url: '/images/guias/habitos.png' }]
  },
  alternates: { canonical: '/guias/habitos-productivos' },
};

export default function GuiaProductividad() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: '10 Hábitos de las Personas Altamente Productivas: Guía Maestra',
    description: 'Manual integral sobre productividad, gestión del tiempo y formación de hábitos.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/habitos-productivos',
  };

  return (
    <article className="min-h-screen bg-white font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-indigo-50 to-white py-24 border-b border-indigo-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-700 hover:text-indigo-900 mb-10 transition-colors bg-white px-4 py-2 rounded-full shadow-sm">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center shadow-xl shadow-indigo-200 rotate-3 border-4 border-white">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Productividad de Élite: <span className="text-indigo-600">Sistemas</span> sobre Voluntad
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Tema:</span> Eficiencia Individual</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 22 min</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Enfoque:</span> Accionable</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-indigo-500 pl-6">
            &quot;La productividad no se trata de hacer más cosas; se trata de hacer las cosas correctas con la menor cantidad de fricción posible. No necesitas más tiempo, necesitas mejores sistemas.&quot;
          </p>

          <p className="mb-8">
            En un mundo que puja constantemente por tu atención, ser productivo se ha vuelto un acto de resistencia. En 2026, la diferencia entre quienes alcanzan sus objetivos y quienes se quedan en el intento no es el talento, sino el diseño de sus rutinas. Esta guía disecciona los hábitos atómicos que transforman el potencial en resultados tangibles.
          </p>

          <div className="bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-indigo-400" /> El Framework de Alto Impacto
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#habit-loop" className="text-slate-200 no-underline font-bold group-hover:text-indigo-400 transition-colors">La Neurociencia de los Hábitos (El Bucle)</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#deep-work" className="text-slate-200 no-underline font-bold group-hover:text-indigo-400 transition-colors">Deep Work: El superpoder del enfoque</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#energy" className="text-slate-200 no-underline font-bold group-hover:text-indigo-400 transition-colors">Gestión de Energía vs Gestión de Tiempo</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#2min-rule" className="text-slate-200 no-underline font-bold group-hover:text-indigo-400 transition-colors">La Regla de los 2 Minutos</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-indigo-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Section 1 */}
          <h2 id="habit-loop" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Brain className="w-8 h-8 text-indigo-600" /> 1. El Bucle del Hábito: Cómo funcionamos
          </h2>
          <p>
            Un hábito no se crea por fuerza de voluntad, sino por repetición biológica. El proceso consta de cuatro etapas: <strong>Señal, Anhelo, Respuesta y Recompensa</strong>.
          </p>
          <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-8 my-10 space-y-4">
             <p className="text-slate-700 m-0">Para crear un hábito productivo:</p>
             <ul className="m-0 p-0 list-none space-y-3">
                <li className="flex gap-4">
                   <span className="w-6 h-6 bg-indigo-600 text-white rounded-md flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
                   <span><strong>Hazlo Obvio:</strong> Pon tus herramientas de trabajo en tu escritorio la noche anterior.</span>
                </li>
                <li className="flex gap-4">
                   <span className="w-6 h-6 bg-indigo-600 text-white rounded-md flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
                   <span><strong>Hazlo Atractivo:</strong> Escucha tu podcast favorito solo mientras haces una tarea rutinaria.</span>
                </li>
                <li className="flex gap-4">
                   <span className="w-6 h-6 bg-indigo-600 text-white rounded-md flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
                   <span><strong>Hazlo Fácil:</strong> Empieza con algo tan pequeño que no puedas decir que no (Regla de los 2 min).</span>
                </li>
                <li className="flex gap-4">
                   <span className="w-6 h-6 bg-indigo-600 text-white rounded-md flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
                   <span><strong>Hazlo Satisfactorio:</strong> Marca tu tarea como completada en una app o papel inmediatamente.</span>
                </li>
             </ul>
          </div>

          {/* Section 2 */}
          <h2 id="deep-work" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Target className="w-8 h-8 text-indigo-600" /> 2. Deep Work: Enfoque Ininterrumpido
          </h2>
          <p>
            El concepto de Cal Newport sigue siendo vital en 2026. El <strong>Trabajo Profundo</strong> es la capacidad de concentrarse sin distracciones en una tarea cognitivamente exigente. Es la única forma de producir algo de valor real en un mundo saturado de contenido superficial.
          </p>
          <p>
            La técnica Pomodoro (25 minutos de trabajo + 5 de descanso) es un buen punto de partida, pero muchos profesionales experimentados prefieren ciclos más largos: 90 minutos de deep work seguidos de 20 minutos de descanso real. &quot;Real&quot; significa caminar, estirar, mirar por la ventana — no scrollear Instagram, que agota la mente en vez de recargarla.
          </p>

          <h2 id="environment" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-indigo-600" /> 5. Diseño de Entorno: Tu Aliado Silencioso
          </h2>
          <p>
            La voluntad es un recurso finito. Si tienes que luchar contra la tentación de mirar el teléfono cada 5 minutos, eventualmente perderás. Las personas productivas no tienen más voluntad; tienen un entorno mejor diseñado.
          </p>
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl my-8">
             <h4 className="font-black text-slate-900 mt-0 mb-4 text-center">La Arquitectura de la Productividad</h4>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                   <p className="font-bold text-indigo-600 mb-2">Fricción Positiva</p>
                   <p className="text-xs text-slate-600 m-0">Haz que lo malo sea difícil. Pon el teléfono en otra habitación. Desconecta el router si es necesario. Desinstala apps de redes sociales si no las usas para trabajar.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                   <p className="font-bold text-indigo-600 mb-2">Fricción Negativa</p>
                   <p className="text-xs text-slate-600 m-0">Haz que lo bueno sea fácil. Ten tu botella de agua llena, tus libros de estudio abiertos y tu ropa de deporte lista desde la noche anterior.</p>
                </div>
             </div>
          </div>
          <p>
            Tu espacio de trabajo debe ser una &quot;señal&quot; inequívoca para tu cerebro. Si usas la cama para trabajar, tu cerebro no sabrá si debe dormir o producir. Si tienes un escritorio dedicado exclusivamente al trabajo, el simple acto de sentarte en él disparará tu estado de enfoque de forma automática.
          </p>

          {/* Section 3 */}
          <h2 id="energy" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-indigo-600" /> 3. Energía sobre Tiempo
          </h2>
          <p>
            Puedes tener todo el tiempo del mundo, pero si tu energía está en cero, no harás nada de calidad. Las personas de alto rendimiento gestionan sus ciclos de energía biológica:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <h4 className="text-indigo-700 font-black mt-0 mb-3 flex items-center gap-2"><Sun className="w-5 h-5" /> Ritmo Circadiano</h4>
               <p className="text-xs text-slate-600 m-0">Identifica si eres una persona de mañana (Lark) o de noche (Owl). Pon tus tareas más difíciles en tu ventana de mayor alerta mental.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <h4 className="text-indigo-700 font-black mt-0 mb-3 flex items-center gap-2"><Moon className="w-5 h-5" /> Renovación</h4>
               <p className="text-xs text-slate-600 m-0">Usa la técnica Pomodoro o ciclos de 90/20. Tu cerebro necesita &quot;enfriarse&quot; para poder volver a calentar motores con potencia.</p>
            </div>
          </div>

          {/* Section 4 */}
          <h2 id="2min-rule" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Clock className="w-8 h-8 text-indigo-600" /> 4. La Regla de los 2 Minutos
          </h2>
          <p>
            Si una tarea toma menos de dos minutos, hazla ahora mismo. No la anotes, no le pongas un recordatorio, no la mandes a una lista de &quot;luego&quot;. El costo cognitivo de <strong>gestionar</strong> esa tarea es mayor que el costo de <strong>ejecutarla</strong>. Contestar un email corto, archivar un documento o lavar un plato; sacarlo del camino de inmediato mantiene tu mente despejada para lo importante.
          </p>

          <div className="bg-indigo-600 rounded-[40px] p-10 md:p-16 my-16 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                El Éxito es el <br className="hidden md:block" /> Subproducto de tus Rutinas
              </h2>
              <p className="text-indigo-100 text-lg leading-relaxed mb-10 font-medium max-w-xl">
                No esperes a estar motivado para trabajar. Diseña un sistema donde trabajar sea la opción más fácil y atractiva. Tu &quot;yo&quot; del futuro te lo agradecerá.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/guias" className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all shadow-xl flex items-center gap-2">
                   Seguir mejorando <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <h2 id="consistency" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Target className="w-8 h-8 text-indigo-600" /> 6. La Regla de los Dos Días
          </h2>
          <p>
            La perfección es el enemigo de la consistencia. Muchos abandonan sus hábitos cuando fallan un día. Las personas altamente productivas usan la <strong>Regla de los Dos Días</strong>: puedes fallar un día, pero nunca, bajo ninguna circunstancia, fallas dos días seguidos.
          </p>
          <p>
            Falla un día y es un accidente. Falla dos días y es el comienzo de un nuevo hábito (el hábito de no hacer la tarea). Esta flexibilidad psicológica permite que el sistema sea resiliente al caos de la vida cotidiana sin romperse por completo.
          </p>
          <p>
            Además, el <strong>Compromiso Social</strong> es un multiplicador de la productividad. Decirle a un colega o amigo que vas a terminar una tarea para tal hora crea una presión social positiva que te obliga a cumplir. Somos seres sociales; nos importa lo que los demás piensen de nuestra palabra.
          </p>

          {/* FAQ Section */}
          <div id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <h2 className="text-3xl font-black text-slate-950 font-outfit mb-12 flex items-center gap-3 underline decoration-indigo-500 decoration-4 underline-offset-8">
              <HelpCircle className="w-8 h-8 text-indigo-600" /> Preguntas Frecuentes
            </h2>
            
            <div className="space-y-6">
              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Qué herramientas recomiendas para gestionar hábitos?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  En 2026, herramientas como <strong>Notion</strong> para sistemas complejos, <strong>TickTick</strong> para tareas rápidas y <strong>HabitShare</strong> para el compromiso social son excelentes. Sin embargo, recuerda: la herramienta no hace el trabajo, el sistema sí.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Cómo ser productivo si tengo hijos o interrupciones?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Usa la &quot;Ventana de Oro&quot;. Despiértate 45 min antes que el resto de la casa o aprovecha la primera siesta. No busques bloques de 4 horas; busca bloques de 25 min de foco extremo (Pomodoro). La consistencia pequeña le gana a la intensidad esporádica.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿La productividad mata la creatividad?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Al contrario. Al sistematizar las tareas aburridas y repetitivas, liberas un enorme espacio mental para que tu cerebro pueda soñar y crear. Como dijo Flaubert: &quot;Sé regular y ordenado en tu vida como un burgués, para que puedas ser violento y original en tu obra&quot;.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Qué hago si me siento abrumado por mi lista de tareas?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Usa la técnica de &quot;Cerebro de Papel&quot;. El cerebro es para tener ideas, no para guardarlas. Escribe todo lo que tienes pendiente en una hoja. Al verlo fuera de tu cabeza, el nivel de cortisol baja instantáneamente. Luego, elige solo una cosa (la más pequeña) y empieza.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿La tecnología ayuda o perjudica la productividad?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  La tecnología es un amplificador. Si eres desorganizado, la tecnología te hará más desorganizado a gran escala. Si tienes un sistema claro, la tecnología lo hará volar. No busques la &quot;app mágica&quot; hasta que no tengas un hábito sólido con papel y lápiz.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
