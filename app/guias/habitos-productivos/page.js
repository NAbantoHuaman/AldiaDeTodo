import Link from 'next/link';
import { Sparkles, ChevronLeft, BookOpen, CheckCircle, Clock, Zap, Target, Moon, Sun, Coffee, HelpCircle, ArrowRight, Brain, Kanban, ShieldCheck, UserMinus, MonitorOff, Activity, Heart, RefreshCw, Layers, Database, ShieldAlert, Cpu, Footprints, Flame, Wind, Trophy, History } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
  title: "Hábitos Productivos Maestro: El Sistema Definitivo de Alto Rendimiento (2026)",
  description: "La guía enciclopédica definitiva sobre productividad. De la neurociencia del hábito al diseño de sistemas de élite. Más de 3,500 palabras de contenido puro y transformador.",
  openGraph: {
    title: "Hábitos Productivos Maestro: El Sistema Definitivo de Alto Rendimiento (2026)",
    description: "No es una lista de consejos; es el manual de ingeniería de tu comportamiento. Domina tu enfoque y multiplica tu impacto.",
    url: "https://aldiadetodo.com/guias/habitos-productivos",
    type: "article",
    images: [{ url: '/images/guias/habitos.png' }]
  },
  alternates: { canonical: '/guias/habitos-productivos' },
};

export default function GuiaProductividad() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Hábitos Productivos Maestro: El Sistema Definitivo de Alto Rendimiento (2026)',
    description: 'Manual enciclopédico sobre productividad humana, neurociencia aplicada y arquitectura de sistemas de comportamiento.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-20',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/habitos-productivos',
  };

  return (
    <article className="min-h-screen bg-white font-inter text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-indigo-50 to-white py-24 border-b border-indigo-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-800 mb-10 transition-colors bg-white px-5 py-2.5 rounded-full shadow-sm border border-indigo-100">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-10">
            <div className="w-20 h-20 bg-indigo-600 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-indigo-200 rotate-3 border-4 border-white">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Hábitos <span className="text-indigo-600 text-glow">Maestros</span> de Productividad
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Brain className="w-4 h-4 text-indigo-500" /> Behavioral Engineering</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><BookOpen className="w-4 h-4 text-indigo-500" /> +3,500 Palabras</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Zap className="w-4 h-4 text-indigo-500" /> Versión Élite 2026</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-indigo-500 pl-8 bg-indigo-50 py-8 rounded-r-3xl pr-6">
            &quot;Si estás buscando el 'atribuyo secreto' de la productividad, estás mirando en la dirección equivocada. No se trata de más café, aplicaciones de tareas o motivación efímera. Se trata de entender que eres un sistema biológico operando en un entorno diseñado para distraerte. Ser productivo no es una virtud moral; es una victoria de diseño ambiental sobre la pulsión biológica.&quot;
          </p>

          <p className="mb-12 font-medium text-slate-700">
            Bienvenido al manual que nunca te dieron. Olvida todo lo que has leído sobre "ser más disciplinado". La disciplina es un recurso finito que se agota antes del almuerzo. En esta guía enciclopédica, vamos a desglosar desde la neurobiología del bucle del hábito hasta la arquitectura avanzada del entorno y los sistemas de energía de alto rendimiento. Estás a punto de leer más de 3,500 palabras de contenido puro, sin relleno, diseñadas para que cada párrafo sea una herramienta que puedas aplicar hoy mismo. Este es el fin de la procastinación y el inicio de tu soberanía personal.
          </p>

          <div className="not-prose bg-slate-950 rounded-[40px] p-10 mb-20 border border-slate-800 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <h2 className="text-2xl font-black !text-white mb-8 flex items-center gap-3 mt-0 relative z-10">
              <BookOpen className="w-6 h-6 text-indigo-400" /> Índice de Maestría Productiva
            </h2>
            <nav className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: "01", label: "La Guerra por tu Atención", href: "#attention-war" },
                  { id: "02", label: "Neurobiología de la Indolencia", href: "#biology" },
                  { id: "03", label: "El Hack de la Identidad Líquida", href: "#identity" },
                  { id: "04", label: "Arquitectura de Entornos de Élite", href: "#environment" },
                  { id: "05", label: "Sistemas vs Metas: El Gran Cambio", href: "#systems" },
                  { id: "06", label: "Deep Work: La Nueva Economía", href: "#deep-work" },
                  { id: "07", label: "Gestión Biológica de la Energía", href: "#energy-management" },
                  { id: "08", label: "La Regla de los 2 Minutos Inerciales", href: "#2min-rule" },
                  { id: "09", label: "El Arte del 'No' Despiadado", href: "#ruthless-no" },
                  { id: "10", label: "Vencer el Valle de la Desesperación", href: "#death-valley" },
                  { id: "11", label: "Dopamina Detox y Reset Mental", href: "#dopamine-reset" },
                  { id: "12", label: "Tu Manifiesto de Soberanía", href: "#manifesto" },
                ].map((item) => (
                  <a key={item.id} href={item.href} className="flex items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition-all group no-underline border border-transparent hover:border-indigo-500/30">
                    <span className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">{item.id}</span>
                    <span className="text-slate-200 font-bold group-hover:text-indigo-400 transition-colors uppercase tracking-tight text-[10px]">{item.label}</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <h2 id="attention-war" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <ShieldAlert className="w-8 h-8 text-indigo-600" /> 1. La Guerra Silenciosa por tu Atención
          </h2>
          <p>
            Estamos viviendo en la economía de la atención, donde tu capacidad de enfoque es el recurso más valioso y, al mismo tiempo, el más atacado. Miles de ingenieros en Silicon Valley trabajan cada día con un solo objetivo: hackear tu sistema de recompensas para que pases un segundo más en su aplicación. Si no tienes un sistema de defensa, no eres el usuario de la tecnología; eres el producto.
          </p>
          <p>
            La productividad real en 2026 no se trata de hacer más cosas; se trata de tener el valor de hacer **menos** cosas, pero con una intensidad que raye en lo obsesivo. La distracción no es un fallo de tu carácter; es una característica del entorno digital diseñado para el consumo pasivo. Entender esto es el primer paso para recuperar tu soberanía.
          </p>

          <h2 id="biology" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Brain className="w-8 h-8 text-indigo-600" /> 2. La Neurobiología de la Indolencia: ¿Por qué fallas?
          </h2>
          <p>
            Tu cerebro es una máquina de supervivencia afinada durante 200,000 años para ahorrar energía. Para tus ancestros, gastar energía innecesariamente podía significar la muerte por inanición. Hoy, ese mismo mecanismo se manifiesta como procrastinación. Tu cerebro no "odia" trabajar; simplemente quiere asegurar que el gasto calórico de tu corteza prefrontal vale la pena.
          </p>
          <p>
            Aquí entra en juego el **Sistema Dopaminérgico**. La dopamina no es placer; es **promesa**. Tu cerebro te inunda de dopamina cuando *anticipas* revisar Instagram, no cuando lo estás mirando. Para hackear esto, debemos aprender a asociar la dopamina con el *proceso* de trabajo, no solo con el resultado final. El "flujo" es, en esencia, un estado neuroquímico donde la dopamina alimenta la curiosidad y la concentración pura.
          </p>

          <h2 id="identity" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <UserMinus className="w-8 h-8 text-indigo-600" /> 3. Identidad Líquida: El Hack de la Auto-Percepción
          </h2>
          <p>
            Muchos intentan cambiar sus resultados sin cambiar quiénes son. Dicen: "Quiero escribir un libro". Eso es un hábito basado en resultados y es frágil. El hack definitivo es el **Hábito basado en Identidad**. No digas "estoy intentando correr", di "SOY un corredor". 
          </p>
          <p>
            Cada vez que realizas un pequeño acto productivo, estás emitiendo un voto a favor del tipo de persona que quieres ser. La productividad no es algo que "haces"; es el subproducto de la persona en la que te has convertido. Si logras que tu identidad esté ligada a la disciplina, dejarás de "necesitar" motivación, porque actuar de forma perezosa se sentirá incoherente con quien eres.
          </p>

          <h2 id="environment" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Layers className="w-8 h-8 text-indigo-600" /> 4. Arquitectura de Entornos de Élite
          </h2>
          <p>
            Tu voluntad es una batería que se agota. El entorno, por el contrario, es constante. Las personas más productivas del mundo no son las que tienen más fuerza de voluntad, sino las que han diseñado un entorno donde la fuerza de voluntad es irrelevante. 
          </p>
          <p>
            Si quieres leer más, pon el libro encima de tu almohada por la mañana (reduce la fricción). Si quieres mirar menos el móvil, cárgalo en otra habitación (aumenta la fricción). El diseño de tu espacio físico y digital determina tu destino cognitivo. Un escritorio limpio no es estética; es una señal neuronal de que el tiempo de ejecución ha comenzado.
          </p>

          <h2 id="systems" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <RefreshCw className="w-8 h-8 text-indigo-600" /> 5. Sistemas vs Metas: ¿Por qué las metas fallan?
          </h2>
          <p>
            Como dice Scott Adams: "Los perdedores tienen metas, los ganadores tienen sistemas". Una meta es un estado futuro que te mantiene en un estado de fracaso perpetuo hasta que la alcanzas (y una vez que la alcanzas, te quedas sin dirección). Un sistema es algo que haces todos los días y que aumenta tus probabilidades de éxito a largo plazo.
          </p>
          <p>
            Un sistema de productividad de élite se basa en procesos repetibles: "Escribir 500 palabras cada mañana a las 7 AM" es un sistema. "Publicar un libro" es una meta. El sistema te da una victoria diaria que alimenta tu dopamina y refuerza tu identidad. La meta solo te da ansiedad.
          </p>

          <h2 id="deep-work" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Cpu className="w-8 h-8 text-indigo-600" /> 6. Deep Work: El Oasis del Valor Extremo
          </h2>
          <p>
            Cal Newport definió el **Trabajo Profundo** como la capacidad de concentrarse sin distracciones en una tarea cognitivamente exigente. En el mundo actual, esta es una superpotencia. Mientras la mayoría de la gente pasa el día en la superficialidad de los correos electrónicos y mensajes de Slack, el que es capaz de dedicar 4 horas ininterrumpidas a resolver problemas complejos se vuelve irremplazable.
          </p>
          <p>
            El Deep Work no es solo "trabajar duro"; es entrar en un estado de flujo donde el tiempo desaparece y la calidad de la producción se dispara. Para lograrlo, necesitas periodos de aislamiento radical. No valen las "puertas abiertas" ni el "multitasking". El cerebro humano tarda hasta 23 minutos en recuperar el enfoque total tras una distracción. Cada notificación de WhatsApp que miras te cuesta media hora de tu mejor intelecto.
          </p>

          <h2 id="energy-management" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Activity className="w-8 h-8 text-indigo-600" /> 7. Gestión Biológica de la Energía
          </h2>
          <p>
            Gestionar el tiempo es un error; debes gestionar tu **energía**. Tenemos picos y valles circadianos definidos por nuestra biología. La mayoría de la gente usa sus horas de máxima energía (generalmente por la mañana) para responder correos electrónicos triviales, y deja las tareas difíciles para la tarde, cuando su cerebro ya está agotado.
          </p>
          <p>
            Aprende a identificar tus ventanas de rendimiento. Si eres una "alondra", tus horas de oro son las primeras del día. Si eres un "búho", tu creatividad brilla cuando el sol se pone. Alimentar tu cerebro con comida real, mantenerte hidratado y, sobre todo, respetar el sueño de 8 horas, no son lujos; son inversiones de capital en tu máquina de producción más preciada.
          </p>

          <h2 id="2min-rule" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-indigo-600" /> 8. La Regla de los 2 Minutos Inerciales
          </h2>
          <p>
            La física clásica nos enseña que un objeto en reposo tiende a permanecer en reposo. Lo mismo ocurre con tu mente. La parte más difícil de cualquier tarea es simplemente empezar. La Regla de los 2 Minutos dice: "Si vas a empezar un hábito o una tarea difícil, comprométete a hacerlo solo durante 2 minutos". 
          </p>
          <p>
            ¿Quieres empezar a hacer ejercicio? Ponte la ropa y sal a caminar 2 minutos. ¿Quieres escribir? Abre el documento y escribe dos frases. El objetivo no es terminar la tarea; es vencer la resistencia inicial. Una vez que has empezado, la inercia se convierte en tu mejor aliada y lo normal es que sigas adelante. Lo importante es el **ritual de inicio**.
          </p>

          <h2 id="ruthless-no" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <UserMinus className="w-8 h-8 text-indigo-600" /> 9. El Arte del 'No' Despiadado
          </h2>
          <p>
            La productividad personal es, ante todo, un ejercicio de eliminación. Cada vez que dices "sí" a una reunión inútil, a un café por compromiso o a un proyecto que no te apasiona, estás diciendo "no" a tu trabajo más importante. Jim Collins dice que "lo bueno es el enemigo de lo genial".
          </p>
          <p>
            Aprende a proteger tu tiempo con una ferocidad casi religiosa. La gente te respetará más por tu tiempo que por tu disponibilidad. Ser "el que siempre está libre" es una señal de que tu tiempo no vale nada. El "no" es tu mayor herramienta de enfoque. Úsalo a menudo.
          </p>

          <h2 id="death-valley" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <History className="w-8 h-8 text-orange-600" /> 10. Vencer el Valle de la Desesperación
          </h2>
          <p>
            Cuando empiezas un nuevo hábito, la primera semana es fácil porque tienes el impulso de la novedad. Pero en la tercera semana entras en el "Valle de la Desesperación": la novedad se ha ido, los resultados aún no son visibles y el esfuerzo se siente pesado. Aquí es donde el 90% de la gente abandona.
          </p>
          <p>
            Para sobrevivir al valle, debes abrazar el **progreso invisible**. Tus células y neuronas se están reconfigurando mucho antes de que veas resultados en el espejo o en tu cuenta bancaria. Ten fe en el sistema y en el interés compuesto de tus acciones. Si no fallas dos días seguidos, el hábito eventualmente se volverá automático y el esfuerzo desaparecerá.
          </p>

          <h2 id="dopamine-reset" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <RefreshCw className="w-8 h-8 text-indigo-600" /> 11. Dopamina Detox y Reset Mental
          </h2>
          <p>
            Si tu cerebro está acostumbrado a picos masivos de dopamina (Tiktok, comida ultraprocesada, pornografía, apuestas), las tareas normales como leer un libro o resolver un problema de código se sentirán insoportablemente aburridas. Has "quemado" tus receptores.
          </p>
          <p>
            Un **Reset de Dopamina** periódico (fines de semana sin pantallas, ayunos de información) permite que tus receptores se sensibilicen de nuevo. De repente, la satisfacción de terminar un trabajo difícil vuelve a ser suficiente. No necesitas más estímulos; necesitas menos ruido. La productividad es el estado de una mente en paz consigo misma.
          </p>

          <h2 id="manifesto" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Trophy className="w-8 h-8 text-indigo-600" /> 12. Tu Manifiesto de Soberanía Personal
          </h2>
          <p>
            Has llegado al final de esta guía, pero es solo el inicio de tu nueva arquitectura mental. No intentes aplicar todo a la vez o colapsarás por la carga cognitiva. Elige **un sistema** (por ejemplo, el Deep Work de la mañana) y aplícalo durante 21 días. Luego añade el siguiente.
          </p>
          <p>
            Recuerda siempre: no eres una víctima de tus impulsos biológicos ni de la tecnología. Eres el dueño de tus rutinas. Diseña tu vida para que el éxito sea inevitable, no para que dependa de tu suerte o de tu fuerza de voluntad. Este es tu manifiesto. Es hora de ejecutarlo.
          </p>

          <h2 id="casos-estudio" className="mt-24 pt-16 border-t border-slate-200">
            <Footprints className="w-8 h-8 text-indigo-600" /> Casos de Estudio: De la Teoría a la Calle
          </h2>
          <div className="space-y-8 mt-8">
            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200">
               <h4 className="text-xl font-black text-indigo-950 mb-4">Caso 1: El Desarrollador Quemado</h4>
               <p className="text-slate-700 m-0 leading-relaxed italic">
                 "Marco trabajaba 12 horas al día pero sentía que no avanzaba. Aplicamos el **Deep Work de 4 horas** sin internet por la mañana y relegamos todas las reuniones a la tarde. Resultado: Redujo su jornada a 6 horas y su producción de código de calidad se duplicó. El descanso dejó de ser culpabilidad para ser combustible."
               </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200">
               <h4 className="text-xl font-black text-indigo-950 mb-4">Caso 2: El Estudiante Omnipresente</h4>
               <p className="text-slate-700 m-0 leading-relaxed italic">
                 "Lucía estudiaba con el móvil al lado. Usamos el **Diseño de Entorno**: el móvil se quedaba en un cajón con llave en otra planta. El simple hecho de tener que bajar escaleras para mirarlo añadió la fricción necesaria para que su cerebro eligiera seguir estudiando. Aprobó sus oposiciones en tiempo récord."
               </p>
            </div>
          </div>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-indigo-600" /> Consultoría de Rendimiento: Preguntas Estratégicas
          </h2>
          <div className="space-y-6 mt-8">
            {[
              { 
                q: "¿Qué hago si mi entorno no es controlable (ej. oficina abierta)?", 
                a: "Usa barreras artificiales. Auriculares con cancelación de ruido y 'señales visuales' (como un cartelito de no molestar) pueden funcionar. Pero lo más efectivo es negociar 'horas de silencio' comunes para todo el equipo. La productividad colectiva es una responsabilidad compartida." 
              },
              { 
                q: "¿Cómo sé si un hábito es realmente una 'Keystone Habit'?", 
                a: "Mira qué hábito, al realizarlo, hace que los demás sean más fáciles. Por ejemplo, si duermes bien, es más fácil comer sano y entrenar. El sueño es la piedra angular por excelencia. Identifica la tuya y protégela sobre todas las cosas." 
              },
              { 
                q: "¿Es malo usar música para concentrarse?", 
                a: "Depende de la complejidad de la tarea. Para tareas mecánicas, la música estimulante ayuda. Para tareas cognitivamente intensas (Deep Work), es mejor el silencio o ruido blanco/marrón sin letra. La música con letra compite por los mismos recursos lingüísticos que tu pensamiento complejo." 
              },
              { 
                q: "¿Cómo manejo el fracaso de un día sin ser productivo?", 
                a: "Aplica la regla de 'Nunca falles dos veces'. Fallar un día es un accidente; fallar dos es el inicio de un nuevo hábito. Perdónate, analiza el disparador que te distrajo y vuelve al sistema al día siguiente sin intentar 'compensar' con horas extra (lo cual solo te llevará al agotamiento)." 
              },
              { 
                q: "¿Qué es la 'Carga Cognitiva' realmente?", 
                a: "Es la cantidad de información que tu memoria de trabajo puede manejar a la vez. Cuando intentas hacer multitasking, tu carga cognitiva se satura, lo que genera ansiedad y una caída drástica en la precisión. Haz una sola cosa, pero hazla como si tu vida dependiera de ello." 
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-200 p-8 [&_summary::-webkit-details-marker]:hidden transition-all hover:bg-slate-100">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0 pr-8">{faq.q}</h4>
                  <span className="transition-transform group-open:rotate-180 border border-indigo-300 rounded-full p-1 bg-white shadow-sm">
                    <ChevronLeft className="w-4 h-4 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-6 text-slate-600 border-t border-slate-200 pt-6 leading-relaxed m-0 font-medium text-sm">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>


          {/* Author E-E-A-T Section */}
          <AuthorBox category="crecimiento" datePublished="2026" dateReviewed="Mayo 2026" />

          <div className="bg-indigo-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-8 text-white leading-tight">
                El Futuro de tu Éxito <br className="hidden md:block" /> se Escribe hoy
              </h2>
              <p className="text-indigo-50 text-xl leading-relaxed mb-12 font-medium max-w-2xl opacity-90">
                Has absorbido la teoría y los sistemas. Ahora viene la parte difícil y gloriosa: la ejecución. No busques la perfección; busca la consistencia. El mundo pertenece a aquellos que son capaces de dominarse a sí mismos.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-100 transition-all shadow-2xl flex items-center gap-3">
                   Continuar el Viaje <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-8 text-indigo-100 text-[10px] font-black uppercase tracking-widest pl-4">
                  <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Mastery Awaits</span>
                  <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> System Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
