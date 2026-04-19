import Link from 'next/link';
import { Gamepad2, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Zap, Globe, Layers, Sparkles } from 'lucide-react';

export const metadata = {
  title: "Desarrollo de Videojuegos 2D y 3D: Unity vs Godot en 2026",
  description: "Guía completa para aspirantes a Game Dev. Aprende las diferencias entre Unity y Godot, flujos de trabajo de diseño, programación en C# y GDScript, y cómo lanzar tu primer juego.",
  openGraph: {
    title: "Desarrollo de Videojuegos 2D y 3D: Unity vs Godot en 2026",
    description: "Convierte tus ideas en mundos interactivos. La guía definitiva para dominar los motores de juegos más populares del mundo.",
    url: "https://aldiadetodo.com/guias/gamedev-unity-godot",
    type: "article",
    images: [{ url: '/images/guias/gamedev.png' }]
  },
  alternates: { canonical: '/guias/gamedev-unity-godot' },
};

export default function GuiaGameDev() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Desarrollo de Videojuegos 2D y 3D: Unity vs Godot en 2026',
    description: 'Manual profundo sobre el desarrollo de videojuegos modernos, comparativa de motores, principios de diseño de juegos y programación creativa.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/gamedev-unity-godot',
  };

  return (
    <article className="min-h-screen bg-white font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-amber-50 to-white py-24 border-b border-amber-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-700 hover:text-amber-900 mb-10 transition-colors bg-white px-4 py-2 rounded-full shadow-sm">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-amber-500 rounded-3xl flex items-center justify-center shadow-xl shadow-amber-200 rotate-6 border-4 border-white">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Game Dev: <span className="text-amber-600">Creando Mundos</span> píxel a píxel
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Motores:</span> Unity & Godot</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 24 min</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Rol:</span> Indie Dev</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-amber-500 pl-6">
            &quot;Desarrollar un videojuego es la forma última de expresión técnica y artística. Es donde la física, las matemáticas, el arte visual, la música y la psicología se encuentran para crear una experiencia que solo existe cuando alguien decide jugar.&quot;
          </p>

          <p className="mb-8">
            El desarrollo de videojuegos ha dejado de ser una disciplina reservada para grandes corporaciones. Hoy, una sola persona con una idea brillante y las herramientas adecuadas puede crear un éxito global. Sin embargo, la primera gran barrera para cualquier aspirante a Game Dev en 2026 es la elección del motor de juego (Game Engine). ¿Vas por la potencia industrial de <strong>Unity</strong> o por la libertad de código abierto de <strong>Godot</strong>? En esta guía, comparamos ambos mundos y te damos el mapa de ruta definitivo para que pases de consumidor a creador.
          </p>

          <div className="not-prose bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black !text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-amber-400" /> Manual del Desarrollador
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#motores" className="text-slate-200 no-underline font-bold group-hover:text-amber-400 transition-colors">La Gran Batalla: Unity vs Godot en 2026</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#workflow" className="text-slate-200 no-underline font-bold group-hover:text-amber-400 transition-colors">Workflow Indie: De la Idea al Prototipo</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#art" className="text-slate-200 no-underline font-bold group-hover:text-amber-400 transition-colors">Arte y Sonido: El Alma del Juego</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#marketing" className="text-slate-200 no-underline font-bold group-hover:text-amber-400 transition-colors">Publición y Marketing en Steam y Consolas</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-amber-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          <h2 id="motores" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Layers className="w-8 h-8 text-amber-600" /> 1. La Elección del Motor
          </h2>
          <p>
            No existe el &quot;mejor&quot; motor, solo el que mejor se adapta a tu proyecto y estilo de programación.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
               <h4 className="text-amber-600 font-black mt-0 mb-4 text-xl">Unity</h4>
               <p className="text-sm text-slate-600 mb-4">El estándar de la industria. Usa C# y tiene el marketplace de recursos más grande del mundo.</p>
               <ul className="text-xs text-slate-500 space-y-2 p-0 list-none">
                 <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-500" /> Multis-plataforma impecable</li>
                 <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-500" /> Ideal para móviles</li>
                 <li className="flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-amber-500" /> Curva de aprendizaje más larga</li>
               </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
               <h4 className="text-blue-600 font-black mt-0 mb-4 text-xl">Godot</h4>
               <p className="text-sm text-slate-600 mb-4">La joya Open Source. Ligero, gratis para siempre y con un sistema de escenas basado en nodos único.</p>
               <ul className="text-xs text-slate-500 space-y-2 p-0 list-none">
                 <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-500" /> GDScript (como Python)</li>
                 <li className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-500" /> Cero royalties o costes</li>
                 <li className="flex items-center gap-2"><AlertTriangle className="w-3 h-3 text-amber-500" /> Menos potencia para 3D AAA</li>
               </ul>
            </div>
          </div>

          <h2 id="workflow" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-amber-600" /> 2. El Ciclo de Desarrollo Indie
          </h2>
          <p>
            Muchos juegos nunca ven la luz porque los desarrolladores se pierden en la &quot;trampa de la perfección&quot;. El flujo de trabajo en 2026 prioriza el <strong>MVP (Minimum Viable Product)</strong> o, en términos de juegos, el &quot;Vertical Slice&quot;.
          </p>
          <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8 my-10 flex gap-6 items-start shadow-sm">
             <Lightbulb className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
             <div>
                <h4 className="text-lg font-black text-amber-900 mb-2 mt-0">Encuentra el Diviértete:</h4>
                <p className="text-amber-800 m-0 text-sm leading-relaxed">
                  Antes de dibujar un solo píxel, prototipa tu mecánica principal con cuadrados blancos y negros. Si el juego no es divertido cuando solo son cajas moviéndose, no lo será con gráficos de última generación. La &quot;diversión&quot; debe ser el primer bug que resuelvas.
                </p>
             </div>
          </div>

          <h2 id="art" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Sparkles className="w-8 h-8 text-amber-600" /> 3. Arte y Narrativa en 2026
          </h2>
          <p>
            No necesitas ser Da Vinci para que tu juego se vea bien. La tendencia actual es buscar un <strong>Estilo Cohesivo</strong> por encima de la fidelidad realista. El Pixel Art, el Low-Poly 3D y el estilo cel-shaded permiten a los desarrolladores indie crear mundos visualmente impactantes sin presupuestos millonarios.
          </p>
          <p>
            <strong>La IA como Copiloto Artístico:</strong> En 2026, herramientas como Leonardo.ai o Stable Diffusion integrada permiten generar texturas, bocetos y diseños de personajes en segundos. Sin embargo, recuerda que el toque humano en el diseño de niveles (Level Design) y la narrativa es lo que crea una conexión emocional duradera con el jugador.
          </p>
          <pre className="bg-slate-950 text-amber-300 p-6 rounded-2xl overflow-x-auto text-sm my-8 border border-slate-800">
            <code>
{`// Ejemplo de lógica en C# para Unity
public class PlayerController : MonoBehaviour {
    void Update() {
        if (Input.GetButtonDown("Jump") && isGrounded) {
             GetComponent<Rigidbody>().AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
             PlayJumpSound();
        }
    }
}`}
            </code>
          </pre>

          <h2 id="marketing" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Globe className="w-8 h-8 text-amber-600" /> 4. Lanzamiento y Visibilidad
          </h2>
          <p>
             Terminar el juego es solo la mitad del trabajo. La otra mitad es que alguien sepa que existe. En 2026, el marketing empieza en el <strong>Día 1</strong>. Crear una comunidad en Discord, publicar &quot;Devlogs&quot; en YouTube y conseguir que tu juego sea &quot;wishlisted&quot; en Steam antes del lanzamiento es vital para el éxito comercial.
          </p>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-amber-600" /> Preguntas Frecuentes de GameDev
          </h2>
          <div className="space-y-6 mt-8">
            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Necesito ser bueno en matemáticas?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Ayuda mucho. No necesitas cálculo integral avanzado, pero sí álgebra lineal básica (vectores, producto punto) y saber un poco de trigonometría para manejar la física y el movimiento en un espacio 2D o 3D.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Cuánto tiempo se tarda en hacer un juego?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Desde un fin de semana para una &quot;Game Jam&quot; hasta años para un proyecto comercial serio. El consejo de oro para principiantes es: &quot;Termina algo pequeño&quot;. Haz un clon de Pong o Flappy Bird antes de intentar crear tu propio RPG masivo online.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Puedo vivir de hacer juegos indie?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Es difícil y arriesgado, similar a ser músico o actor. Sin embargo, con el auge de plataformas como Steam, la Epic Store y los servicios de suscripción de consolas, nunca ha habido tantas oportunidades si logras destacar con una idea original y una ejecución sólida.
              </p>
            </details>
          </div>

          <div className="bg-amber-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                Empieza tu Aventura <br className="hidden md:block" /> como Creador de Mundos
              </h2>
              <p className="text-amber-50 text-lg leading-relaxed mb-10 font-medium max-w-2xl">
                No hay sensación comparable a ver cómo alguien juega a algo que tú creaste. Los videojuegos son la magia moderna. Es hora de dejar de jugar y empezar a construir el universo que tienes en la cabeza.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-amber-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-amber-50 transition-all shadow-xl flex items-center gap-2">
                   Todas las Guías <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-amber-100 text-sm font-bold">
                  <span className="flex items-center gap-1"><Gamepad2 className="w-4 h-4" /> Unreal Impact</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Infinite Play</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
