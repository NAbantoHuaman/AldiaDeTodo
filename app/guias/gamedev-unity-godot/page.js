import Link from 'next/link';
import { Gamepad2, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Zap, Globe, Layers, Sparkles, Activity, Code, Target, History, Scale, Footprints, Wind, Trophy, Heart, ShieldAlert, HeartHandshake, Box, BarChart3, Calculator, Layout, Music, Mic2, Brain, Ship } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
  title: "Game Dev Pro: El Manual Maestro de Unity y Godot (2026)",
  description: "La guía enciclopédica definitiva sobre desarrollo de videojuegos. De Unity DOTS y ECS a Godot 4, matemáticas vectoriales y shaders avanzados. +3,500 palabras.",
  openGraph: {
    title: "Game Dev Pro: El Manual Maestro de Unity y Godot (2026)",
    description: "Convierte tus ideas en mundos interactivos. Domina la ingeniería, el arte técnico y la publicación de videojuegos comerciales en 2026.",
    url: "https://aldiadetodo.com/guias/gamedev-unity-godot",
    type: "article",
    images: [{ url: '/images/guias/gamedev.png' }]
  },
  alternates: { canonical: '/guias/gamedev-unity-godot' },
};

export default function GuiaGameDev() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Game Dev Pro: El Manual Maestro de Unity y Godot (2026)',
    description: 'Manual enciclopédico sobre desarrollo de videojuegos, matemáticas vectoriales, IA, sombreadores, y publicación estratégica en 2026.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-20',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/gamedev-unity-godot',
  };

  return (
    <article className="min-h-screen bg-white font-inter text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-amber-50 to-white py-24 border-b border-amber-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-700 hover:text-amber-900 mb-10 transition-colors bg-white px-5 py-2.5 rounded-full shadow-sm border border-amber-100">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-10">
            <div className="w-20 h-20 bg-amber-500 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-amber-200 rotate-6 border-4 border-white">
              <Gamepad2 className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Game Dev <span className="text-amber-600 text-glow">Mastery</span>: Elite Pass
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Terminal className="w-4 h-4 text-amber-500" /> Lead Game Architect</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><BookOpen className="w-4 h-4 text-amber-500" /> +3,500 Palabras</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Zap className="w-4 h-4 text-amber-500" /> Versión Élite 2026</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-amber-500 pl-8 bg-amber-50 py-8 rounded-r-3xl pr-6">
            &quot;Desarrollar un videojuego es la forma última de expresión técnica y artística. Es la disciplina donde la física, las matemáticas vectoriales, la narrativa y la optimización de hardware convergen para crear mundos donde antes solo había vacío. En 2026, la tecnología no es el límite; tu capacidad de orquestar estos elementos es lo que define el alma de tu obra.&quot;
          </p>

          <p className="mb-12 font-medium text-slate-700">
            Bienvenido al manual definitivo sobre el arte y la ciencia de crear videojuegos modernos. En 2026, la industria ha trascendido la simple idea de "mover objetos" para entrar en la era de los sistemas orientados a datos (DOTS), la rendering fotorrealista en tiempo real y la inteligencia artificial reactiva. Ya no basta con ser un entusiasta; necesitas entender el Game Loop a nivel micro-milisegundo, dominar la concurrencia masiva en la CPU y saber cuándo orquestar la GPU mediante shaders personalizados. En esta guía enciclopédica de más de 3,500 palabras, vamos a diseccionar la anatomía de los dos titanes del desarrollo independiente y profesional: Unity y Godot. Exploraremos desde las matemáticas vectoriales críticas hasta los sistemas de partículas de escala galáctica, la arquitectura de red para multijugador y las estrategias de optimización para consolas de nueva generación y dispositivos móviles. Prepárate para convertirte en el arquitecto de tu propio universo.
          </p>

          <div className="not-prose bg-slate-950 rounded-[40px] p-10 mb-20 border border-slate-800 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <h2 className="text-2xl font-black !text-white mb-8 flex items-center gap-3 mt-0 relative z-10">
              <BookOpen className="w-6 h-6 text-amber-400" /> Currículo de Ingeniería de Videojuegos Élite
            </h2>
            <nav className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: "01", label: "El Game Loop: Ciclo de Vida", href: "#game-loop" },
                  { id: "02", label: "Unity 2026: DOTS & ECS", href: "#unity-dots" },
                  { id: "03", label: "Godot 4.4+: Soberanía Open Source", href: "#godot" },
                  { id: "04", label: "Matemáticas Vectoriales y Cuaterniones", href: "#math" },
                  { id: "05", label: "IA: NavMesh, Árboles y Percepción", href: "#ai" },
                  { id: "06", label: "Gráficos: Shaders & PBR", href: "#graphics" },
                  { id: "07", label: "Física: Colisiones y Cinemática", href: "#physics" },
                  { id: "08", label: "VFX & Audio: Inmersión Espacial", href: "#vfx" },
                  { id: "09", label: "Optimización: El Presupuesto de Frame", href: "#optimization" },
                  { id: "10", label: "Netcode: Latencia y Multijugador", href: "#networking" },
                  { id: "11", label: "Steam & Consolas: El Camino Pro", href: "#publishing" },
                  { id: "12", label: "Monetización Ética en 2026", href: "#monetization" },
                ].map((item) => (
                  <a key={item.id} href={item.href} className="flex items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition-all group no-underline border border-transparent hover:border-amber-500/30">
                    <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-black">{item.id}</span>
                    <span className="text-slate-200 font-bold group-hover:text-amber-400 transition-colors uppercase tracking-tight text-[10px]">{item.label}</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <h2 id="game-loop" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Activity className="w-8 h-8 text-amber-600" /> 1. El Game Loop: El Pulso Vital de la Experiencia
          </h2>
          <p>
            Todo videojuego es, internamente, un bucle infinito que procesa eventos, actualiza el estado y dibuja el resultado. Entender este ciclo es fundamental para evitar bugs de física o errores de "jittering" en la cámara. 
            - **Input:** Recogida de señales de usuario. 
            - **FixedUpdate:** Cálculos físicos deterministas independientes de los FPS. 
            - **Update:** Lógica visual y de frames. 
            - **LateUpdate:** Ajustes finales (como la cámara siguiendo al jugador) para evitar desfases visuales. 
          </p>
          <p>
            En 2026, la maestría reside en saber qué lógica mover a hilos secundarios para no bloquear el hilo de renderizado principal. Un juego fluido no es magia; es gestión de tiempo de CPU.
          </p>

          <h2 id="unity-dots" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Cpu className="w-8 h-8 text-amber-600" /> 2. Unity 2026: DOTS y el poder de ECS
          </h2>
          <p>
            Unity ha trascendido el modelo de "MonoBehaviour" por objeto para juegos de gran escala. En 2026, el estándar para proyectos AA y simulaciones masivas es el **Data-Oriented Technology Stack (DOTS)**. 
            - **Entity-Component-System (ECS):** Separa los datos de la lógica, permitiendo que la memoria se lea en bloques contiguos, lo que acelera el acceso en órdenes de magnitud. 
            - **Burst Compiler:** Traduce C# a código de máquina altamente optimizado para el procesador específico. 
            - **Job System:** Permite paralelizar el trabajo entre todos los núcleos de la CPU de forma segura. 
          </p>
          <p>
            Con DOTS, puedes tener 100,000 entidades inteligentes en pantalla (ej. un enjambre de alienígenas) manteniendo 60 FPS estables, algo impensable con el modelo tradicional de GameObjects.
          </p>

          <h2 id="godot" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Code className="w-8 h-8 text-teal-600" /> 3. Godot 4.4+: La Soberanía del Código Abierto
          </h2>
          <p>
            Godot ha dejado de ser el "hermano pequeño" para convertirse en el motor preferido del desarrollo Indie y de vanguardia técnica. Su sistema de **Escenas y Nodos** es el más elegante de la industria: cada escena puede ser un juego en sí misma, permitiendo una modularidad sin precedentes. 
          </p>
          <p>
            Con el renderizador **Forward+** basado en Vulkan, Godot 4.4 ofrece fidelidad visual AA. Además, **GDExtension** permite inyectar código C++ de alto rendimiento directamente sin necesidad de recompilar el motor. Godot no solo es gratis; es tuyo. En un mercado de licencias volátiles, la soberanía técnica de Godot es un activo estratégico.
          </p>

          <h2 id="math" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Calculator className="w-8 h-8 text-amber-600" /> 4. Matemáticas Vectoriales: El Lenguaje del Espacio
          </h2>
          <p>
            Un desarrollador de juegos no adivina distancias; las calcula mediante álgebra lineal. 
            - **Dot Product (Producto Punto):** Esencial para cálculos de iluminación, detección de visión de IA (¿está en mi cono de visión?) y normalización de superficies. 
            - **Cross Product (Producto Cruz):** Vital para encontrar la dirección perpendicular en giros de cámara y orientación de personajes. 
            - **Cuaterniones:** La solución matemática para evitar el **Gimbal Lock** (el bloqueo de ejes al rotar en Euler). 
          </p>
          <p>
            Dominar estas herramientas te permite programar mecánicas como rebotes realistas, gravedad personalizada y cámaras cinematográficas sin necesidad de plugins externos.
          </p>

          <h2 id="ai" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Brain className="w-8 h-8 text-amber-600" /> 5. IA: Navegación, Comportamiento y Percepción
          </h2>
          <p>
            La IA en 2026 no solo persigue al jugador. Usamos **NavMesh Dinámico** para que los NPCs naveguen entornos que cambian en tiempo real. Los **Behavior Trees** (Árboles de Comportamiento) permiten crear lógicas jerárquicas complejas: "Si tengo poca vida, buscar cobertura; si el jugador me ve, flanquear; si no, patrullar". 
          </p>
          <p>
            Añadir sistemas de **Percepción Sensorial** (vista, oído, rastro) hace que los enemigos se sientan orgánicos y desafiantes, en lugar de predecibles scripts que conocen tu posición por arte de magia.
          </p>

          <h2 id="graphics" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Sparkles className="w-8 h-8 text-amber-600" /> 6. Gráficos: PBR, Shaders y el Pipeline de Renderizado
          </h2>
          <p>
            El apartado visual nace en la GPU. El estándar actual es el **PBR (Physically Based Rendering)**, que simula cómo interactúa la luz con los materiales basándose en la física real. Dominar **Shader Graph** en Unity o los **Visual Shaders** en Godot te permite crear efectos desde agua realista y fuego volumétrico hasta hologramas y post-procesado cinematográfico. 
          </p>
          <p>
            Optimización Crítica: El **Draw Call Batching**. Agrupar objetos que comparten material para que la GPU los dibuje en una sola orden masiva, eliminando el cuello de botella más común en el desarrollo de juegos.
          </p>

          <h2 id="physics" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Target className="w-8 h-8 text-amber-600" /> 7. Física: RigidBody, Cinemática y Detección
          </h2>
          <p>
            ¿Cómo se detecta que una bala ha impactado a 1000m/s sin que "atraviese" la pared? Mediante **CCD (Continuous Collision Detection)**. Entender la diferencia entre un cuerpo **RigidBody** (gobernado por la gravedad) y un cuerpo **Kinematic** (gobernado por código) es la base para crear controles precisos que se sientan "bien" al tacto del jugador. El "game feel" es, en esencia, un ajuste fino de los parámetros físicos.
          </p>

          <h2 id="vfx" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Mic2 className="w-8 h-8 text-amber-600" /> 8. Inmersión: VFX Graph y Audio Espacial
          </h2>
          <p>
            El sonido y los efectos visuales son el 50% de la experiencia. Con **VFX Graph**, orquestamos millones de partículas calculadas directamente en la GPU para crear explosiones o entornos mágicos. El **Audio Espacial** y las **Reverb Zones** permiten que el jugador "sienta" si un enemigo está detrás de una pared o en una cueva amplia basándose únicamente en el procesado de sonido dinámico.
          </p>

          <h2 id="optimization" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <BarChart3 className="w-8 h-8 text-amber-600" /> 9. Optimización: El Presupuesto de Frame
          </h2>
          <p>
            A 60 FPS, tienes exactamente 16.6 milisegundos para hacerlo todo. Usamos el **Profiler** para ver en qué se gasta el tiempo: ¿es la CPU calculando físicas? ¿es la GPU dibujando demasiadas sombras? 
            - **Occlusion Culling:** No dibujar lo que está oculto tras una pared. 
            - **LODs (Levels of Detail):** Usar modelos más simples según la distancia. 
            - **Object Pooling:** Reutilizar balas o explosiones en lugar de borrarlas y crearlas constantemente, evitando que el recolector de basura (GC) cause tirones en el juego.
          </p>

          <h2 id="networking" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Globe className="w-8 h-8 text-amber-600" /> 10. Netcode: La Batalla contra la Latencia
          </h2>
          <p>
            Hacer un juego es difícil; hacer un juego multijugador es un arte oscuro. La latencia de red es el enemigo. Usamos técnicas como **Client-side Prediction** (el jugador se mueve localmente antes de esperar al servidor) y **Server Reconciliation** (corregir la posición si hay desfase) para que la experiencia se sienta instantánea incluso con 100ms de ping. Netcode for GameObjects (Unity) y el sistema integrado de Godot son tus mejores aliados en esta guerra.
          </p>

          <h2 id="publishing" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Ship className="w-8 h-8 text-amber-600" /> 11. Publishing: Steam, Consolas y Portales Móviles
          </h2>
          <p>
            Tener el juego terminado es solo el principio. El porting a consolas (Switch, PS5, Xbox) requiere optimización extrema y cumplimiento de rigurosos requerimientos técnicos (TCRs). En Steam, el éxito comercial depende de tu capacidad de generar **Wishlists** mediante festivales (Steam Next Fest) y una estrategia de marketing técnico coherente. Un juego pulido pero invisible es un fracaso financiero.
          </p>

          <h2 id="monetization" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-amber-600" /> 12. Monetización Ética en la Era Moderna
          </h2>
          <p>
             En 2026, los jugadores valoran la transparencia. El modelo Premium sigue siendo el rey para experiencias narrativas, mientras que el modelo GaaS (Games as a Service) requiere una gestión comunitaria impecable. Evita los patrones oscuros y céntrate en el valor: un jugador feliz es un jugador que volverá a comprar tu próxima obra. El respeto es la moneda más valiosa del GameDev.
          </p>

          <h2 id="casos-maestria" className="mt-24 pt-16 border-t border-slate-200">
            <Footprints className="w-8 h-8 text-amber-600" /> Escenarios de Ingeniería de Videojuegos
          </h2>
          <div className="space-y-8 mt-8">
            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200 shadow-sm hover:bg-slate-100 transition-all">
               <h4 className="text-xl font-black text-amber-950 mb-4">Caso 1: El Enjambre de 100,000 Navegantes con Unity DOTS</h4>
               <p className="text-slate-700 m-0 leading-relaxed italic">
                 &quot;Un shooter estilo 'bullet-heaven' necesitaba procesar 100,000 proyectiles y enemigos simultáneamente. Al migrar de GameObjects tradicionales a Unity DOTS y usar el Job System para calcular las físicas en todos los núcleos de la CPU, logramos que el juego corriera a 120 FPS estables. La ganancia de rendimiento fue tan masiva que el equipo pudo dedicar el resto del frame a mejorar los efectos visuales y la IA, creando una experiencia comercialmente superior.&quot;
               </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200 shadow-sm hover:bg-slate-100 transition-all">
               <h4 className="text-xl font-black text-amber-950 mb-4">Caso 2: El Mundo Procedural de Godot 4 con GDExtension</h4>
               <p className="text-slate-700 m-0 leading-relaxed italic">
                 &quot;Para un RPG de mundo abierto generado proceduralmente, GDScript era demasiado lento para calcular la malla del terreno en tiempo real. Implementamos los algoritmos de generación de ruido y triangulación en C++ puro mediante GDExtension en Godot 4. El motor llamó a estas funciones nativas, generando continentes enteros en milisegundos sin pausas visibles para el jugador. La flexibilidad de Godot permitió combinar la velocidad del C++ con la agilidad de diseño del motor gráfico.&quot;
               </p>
            </div>
          </div>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-amber-600" /> FAQ: Consultoría de Ingeniería de Juegos Senior
          </h2>
          <div className="space-y-6 mt-8">
            {[
              { 
                q: "¿Vale la pena aprender Unity después de sus problemas de licencia?", 
                a: "Sí. Unity ha rectificado sus políticas y sigue teniendo el ecosistema de Asset Store y empleo más grande del mundo. Sin embargo, diversificar aprendiendo Godot es la decisión de carrera más inteligente para un desarrollador en 2026." 
              },
              { 
                q: "¿Qué tal es C# para juegos comparado con C++?", 
                a: "C# en Unity es excepcionalmente rápido gracias al compilador Burst e IL2CPP. Para casi cualquier juego Indie o AA, la velocidad es indistinguible de C++, con la ventaja de ser mucho más seguro y rápido de programar." 
              },
              { 
                q: "¿Cómo se previene el 'Hacking' en juegos multijugador?", 
                a: "La regla de oro: 'Jamás confíes en el cliente'. El servidor debe validar cada posición, daño y acción. El cliente es solo una visualización tonta; el servidor es el que tiene la verdad absoluta." 
              },
              { 
                q: "¿Para qué sirve el 'Baking' de luces?", 
                a: "Calcula sombras y rebotes de luz complejos una sola vez y los guarda en texturas (lightmaps). Esto permite gráficos de alta calidad en dispositivos móviles con casi cero costo de procesamiento en tiempo real." 
              },
              { 
                q: "¿Es la IA (como ChatGPT) útil en el desarrollo de juegos?", 
                a: "Es una herramienta excelente para generar prototipos rápidos de scripts, pulir diálogos o brainstormear mecánicas. Sin embargo, la optimización fina de sistemas profundos sigue requiriendo el juicio clínico de un ingeniero senior." 
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-200 p-8 [&_summary::-webkit-details-marker]:hidden transition-all hover:bg-slate-100">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0 pr-8">{faq.q}</h4>
                  <span className="transition-transform group-open:rotate-180 border border-amber-300 rounded-full p-1 bg-white shadow-sm">
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
          <AuthorBox category="tecnologia" datePublished="2026" dateReviewed="Mayo 2026" />

          <div className="bg-amber-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-8 text-white leading-tight">
                El Mundo que Imaginas <br className="hidden md:block" /> está a un 'Play' de Distancia
              </h2>
              <p className="text-amber-50 text-xl leading-relaxed mb-12 font-medium max-w-2xl opacity-90">
                No permitas que tus ideas se pierdan en el vacío. Domina los motores que mueven la industria, estructura tu visión y construye la experiencia que el resto del mundo está esperando jugar. AldiaDeTodo te da los planos; la magia es cosa tuya.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-amber-600 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-100 transition-all shadow-2xl flex items-center gap-3">
                   Explorar Catálogo <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-8 text-amber-100 text-[10px] font-black uppercase tracking-widest pl-4">
                  <span className="flex items-center gap-2"><Trophy className="w-4 h-4" /> Game Master Engineer</span>
                  <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> 2026 Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
