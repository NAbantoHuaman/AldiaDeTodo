import Link from 'next/link';
import { Globe, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Zap, Layers, Ship } from 'lucide-react';

export const metadata = {
  title: "Go (Golang): Construyendo Microservicios de Alto Rendimiento en 2026",
  description: "Guía completa de Go para la era de la nube. Aprende sobre Goroutines, Channels, interfaces y cómo diseñar arquitecturas de microservicios escalables.",
  openGraph: {
    title: "Go (Golang): Construyendo Microservicios de Alto Rendimiento en 2026",
    description: "Domina el lenguaje de la nube. De la sintaxis básica a la concurrencia avanzada y despliegue en Kubernetes.",
    url: "https://aldiadetodo.com/guias/go-microservicios",
    type: "article",
    images: [{ url: '/images/guias/go.png' }]
  },
  alternates: { canonical: '/guias/go-microservicios' },
};

export default function GuiaGo() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Go (Golang): Construyendo Microservicios de Alto Rendimiento en 2026',
    description: 'Manual definitivo sobre el lenguaje Go, diseñado para la eficiencia, la simplicidad y la concurrencia masiva en sistemas distribuidos.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/go-microservicios',
  };

  return (
    <article className="min-h-screen bg-white font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-teal-50 to-white py-24 border-b border-teal-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-teal-700 hover:text-teal-900 mb-10 transition-colors bg-white px-4 py-2 rounded-full shadow-sm">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-teal-500 rounded-3xl flex items-center justify-center shadow-xl shadow-teal-200 -rotate-3 border-4 border-white">
              <Globe className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Go: El Motor de la <span className="text-teal-600">Nube Moderna</span> y los Microservicios
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Backend</span> Cloud Native</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 24 min</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Enfoque:</span> Eficiencia</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-teal-500 pl-6">
            &quot;Go fue diseñado por ingenieros de Google para resolver problemas de Google: complejidad masiva, compilaciones lentas y concurrencia difícil. En 2026, si estás construyendo la base de una infraestructura distribuida, Go es, sencillamente, la elección pragmática.&quot;
          </p>

          <p className="mb-8">
            Go (o Golang) no intenta ser el lenguaje más complejo o elegante del planeta. Su superpoder reside en la <strong>simplicidad</strong>. Mientras otros lenguajes añaden características infinitas, Go se mantiene minimalista, lo que permite que equipos grandes lean y mantengan el código de los demás sin necesidad de manuales de estilo de 500 páginas. Esta filosofía, combinada con un sistema de concurrencia basado en CSP (Communicating Sequential Processes), lo ha convertido en el lenguaje oficial de la infraestructura moderna: Docker, Kubernetes y Terraform están escritos en Go.
          </p>

          <div className="not-prose bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black !text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-teal-400" /> Ruta del Gopher
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#filosofia" className="text-slate-200 no-underline font-bold group-hover:text-teal-400 transition-colors">La Filosofía de la Simplicidad Pragmática</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#concurrencia" className="text-slate-200 no-underline font-bold group-hover:text-teal-400 transition-colors">Goroutines y Channels: Concurrencia real</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#interfaces" className="text-slate-200 no-underline font-bold group-hover:text-teal-400 transition-colors">Interfaces Implícitas: Composición sobre Herencia</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#microservicios" className="text-slate-200 no-underline font-bold group-hover:text-teal-400 transition-colors">Estrategias para Microservicios Escalables</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-teal-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          <h2 id="filosofia" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-teal-600" /> 1. Menos es Más: La Regla de Go
          </h2>
          <p>
            Go no tiene clases (en el sentido tradicional), no tiene herencia de tipos, no tiene excepciones estructuradas (usa el famoso <code>if err != nil</code>) y, hasta hace poco, no tenía genéricos. ¿Por qué? Para forjarse como un lenguaje que cualquier desarrollador pueda entender en una tarde.
          </p>
          <p>
            <strong>Lectura sobre Escritura:</strong> En el software empresarial, el código se lee 100 veces más de lo que se escribe. Al limitar las formas en que se puede resolver un problema, Go reduce la carga cognitiva. Un programa en Go escrito por un junior se ve casi igual que uno escrito por un senior, lo que facilita enormemente las auditorías de código y la rotación en equipos grandes.
          </p>
          <div className="bg-teal-50 border border-teal-100 rounded-3xl p-8 my-10 flex gap-6 items-start shadow-sm">
             <Lightbulb className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
             <div>
                <h4 className="text-lg font-black text-teal-900 mb-2 mt-0">El Binario Estático:</h4>
                <p className="text-teal-800 m-0 text-sm leading-relaxed">
                  Go compila todo en un solo binario estático que incluye todas sus dependencias. No necesitas instalar un runtime (como Node.js o Python) en el servidor. Simplemente copias el archivo binario y lo ejecutas, lo que lo hace perfecto para contenedores Docker ultra ligeros y despliegues rápidos.
                </p>
             </div>
          </div>

          <h2 id="concurrencia" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Cpu className="w-8 h-8 text-teal-600" /> 2. Concurrencia: Goroutines y Canales
          </h2>
          <p>
            La concurrencia en Go es legendaria. Mientras que los hilos del sistema operativo (OS Threads) son pesados y costosos en memoria, las <strong>Goroutines</strong> son hilos ligeros manejados por el runtime de Go. Puedes lanzar millones de ellas en una sola máquina sin despeinarte.
          </p>
          <p>
            <strong>No compartas memoria para comunicarte:</strong> Go fomenta el uso de <strong>Channels</strong> (Canales) para pasar mensajes entre hilos de ejecución. En lugar de pelear con bloqueos (mutex) y variables compartidas, los canales actúan como tuberías seguras, eliminando por diseño gran parte de las condiciones de carrera que atormentan a otros sistemas.
          </p>
          <pre className="bg-slate-950 text-teal-300 p-6 rounded-2xl overflow-x-auto text-sm my-8 border border-slate-800">
            <code>
{`// Ejemplo de Concurrencia en Go
func fetch(url string, ch chan<- string) {
    // Simula una petición HTTP
    ch <- "Resultado de " + url
}

func main() {
    ch := make(chan string)
    go fetch("google.com", ch) // Lanza goroutine
    
    msg := <-ch // Recibe del canal (bloqueante)
    fmt.Println(msg)
}`}
            </code>
          </pre>

          <h2 id="interfaces" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Layers className="w-8 h-8 text-teal-600" /> 3. Interfaces Implícitas
          </h2>
          <p>
            En Go, las interfaces no se &quot;implementan&quot; explícitamente (no existe la palabra <code>implements</code>). Si una estructura define los métodos que una interfaz requiere, entonces <strong>ya es</strong> esa interfaz.
          </p>
          <p>
            Esto permite una <strong>composición</strong> increíblemente flexible. Puedes definir una interfaz pequeña en el lugar donde la usas (consumidor), no donde se define el objeto. Esto desacopla totalmente las piezas de tu software, permitiendo tests unitarios mucho más sencillos mediante el uso de mocks y facilitando la evolución del sistema sin romper contratos rígidos de herencia.
          </p>

          <h2 id="microservicios" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Ship className="w-8 h-8 text-teal-600" /> 4. Go en el Centro del Ecosistema Cloud
          </h2>
          <p>
            Go es el lenguaje de elección para microservicios por tres razones:
          </p>
          <ul className="space-y-4 m-0 p-0 list-none">
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="bg-teal-100 text-teal-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">Bajo Cold Start</span>
              <p className="text-sm m-0">Inicia en milisegundos, ideal para Serverless y Lambdas.</p>
            </li>
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="bg-teal-100 text-teal-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">Memoria Eficiente</span>
              <p className="text-sm m-0">Consume una fracción de lo que requiere una JVM (Java) o un runtime de Python.</p>
            </li>
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="bg-teal-100 text-teal-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">gRPC Native</span>
              <p className="text-sm m-0">Soporte de primera clase para gRPC, el estándar de comunicación entre microservicios.</p>
            </li>
          </ul>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-teal-600" /> Preguntas Frecuentes sobre Go
          </h2>
          <div className="space-y-6 mt-8">
            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Go tiene Garbage Collector (GC)?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Sí. A diferencia de Rust, Go tiene un recolector de basura. Sin embargo, el GC de Go está altamente optimizado para latencias bajas (menores a 1ms), lo que lo hace perfecto para servicios web en tiempo real donde la velocidad de respuesta es crítica.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Para qué NO sirve Go?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Go no es la mejor opción para Ciencia de Datos o IA pesada (donde Python domina) ni para desarrollo de interfaces de usuario complejas o videojuegos de alta gama (donde C++ o Rust son mejores). Go brilla en el &quot;plumbing&quot; de red, APIs y backend.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Qué es el manejo de errores &quot;verboso&quot; de Go?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Go no usa <code>try-catch</code>. Las funciones devuelven el error como un segundo valor. Al principio parece repetitivo, pero asegura que el programador maneje explícitamente cada posible fallo, resultando en software mucho más predecible y robusto.
              </p>
            </details>
          </div>

          <div className="bg-teal-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                Construye el Próximo <br className="hidden md:block" /> Unicornio de la Nube
              </h2>
              <p className="text-teal-50 text-lg leading-relaxed mb-10 font-medium max-w-2xl">
                Domina el lenguaje que mueve Kubernetes y Docker. Go te dará las herramientas para crear sistemas que escalan de cero a millones de usuarios con una simplicidad técnica inigualable.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-teal-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-teal-50 transition-all shadow-xl flex items-center gap-2">
                   Todas las Guías <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-teal-100 text-sm font-bold">
                  <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Gopher Style</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Cloud Proof</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
