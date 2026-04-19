import Link from 'next/link';
import { Layers, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Zap, Globe, Shield } from 'lucide-react';

export const metadata = {
  title: "Arquitectura de Software: Patrones de Diseño y Código Limpio en 2026",
  description: "Guía definitiva sobre arquitectura de software. Domina los principios SOLID, patrones creacionales, estructurales y de comportamiento. Escribe código mantenible y escalable.",
  openGraph: {
    title: "Arquitectura de Software: Patrones de Diseño y Código Limpio en 2026",
    description: "Deja de escribir código y empieza a diseñar sistemas. La guía maestra para arquitectos de software modernos.",
    url: "https://aldiadetodo.com/guias/patrones-diseno",
    type: "article",
    images: [{ url: '/images/guias/arquitectura.png' }]
  },
  alternates: { canonical: '/guias/patrones-diseno' },
};

export default function GuiaArquitectura() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Arquitectura de Software: Patrones de Diseño y Código Limpio en 2026',
    description: 'Manual profundo sobre principios de diseño de software, patrones de arquitectura y mejores prácticas para el desarrollo de sistemas robustos.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/patrones-diseno',
  };

  return (
    <article className="min-h-screen bg-white font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-24 border-b border-blue-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 hover:text-blue-800 mb-10 transition-colors bg-white px-4 py-2 rounded-full shadow-sm">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center shadow-xl shadow-blue-200 -rotate-3 border-4 border-white">
              <Layers className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Arquitectura: El Arte de <span className="text-blue-600">Diseñar</span> Sistemas Duraderos
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Nivel:</span> Senior / Arquitecto</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 26 min</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Enfoque:</span> SOLID & Clean</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-blue-500 pl-6">
            &quot;Cualquier tonto puede escribir código que una computadora entienda. Los buenos programadores escriben código que los humanos entiendan. La arquitectura de software es el arte de gestionar la complejidad para que tu proyecto no muera bajo su propio peso en el segundo año.&quot;
          </p>

          <p className="mb-8">
            En un mundo que cambia cada semana, la habilidad más valiosa de un ingeniero no es conocer el último framework de moda, sino entender los principios fundamentales de diseño que han persistido durante décadas. La <strong>Arquitectura de Software</strong> es el mapa que guía tu desarrollo; es lo que permite que un equipo de 50 personas trabaje en el mismo código sin pisarse los pies y que una aplicación pueda evolucionar, cambiar de base de datos o escalar a millones de usuarios sin necesidad de una reescritura completa. En esta guía profunda, desglosaremos desde los principios SOLID hasta los patrones de diseño esenciales que definen el software de clase mundial en 2026.
          </p>

          <div className="not-prose bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black !text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-blue-400" /> Índice Estructural
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#solid" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Principios SOLID: Los 5 Cimientos del Código</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#patrones" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Patrones de Diseño: Soluciones Probadas a Problemas Comunes</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#clean" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Clean Code y la Regla del Boy Scout</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#arquitecturas" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Arquitectura Hexagonal y Domain-Driven Design (DDD)</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          <h2 id="solid" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Shield className="w-8 h-8 text-blue-600" /> 1. El Pentágono del Software: SOLID
          </h2>
          <p>
            Introducidos por Robert C. Martin (&quot;Uncle Bob&quot;), los principios SOLID son el estándar de oro para crear software orientado a objetos (u otros paradigmas modernos) que sea fácil de mantener y extender.
          </p>
          <ul className="space-y-4 m-0 p-0 list-none mb-12">
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-blue-600 text-xl">S</span> <strong> - Responsabilidad Única:</strong> Una clase o función debe tener una, y solo una, razón para cambiar. Si tu función hace logging, envía emails y guarda en BD, está rompiendo el SRP.
            </li>
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-blue-600 text-xl">O</span> <strong> - Abierto/Cerrado:</strong> Tu software debe estar abierto para extenderse, pero cerrado para modificarse. Usa la composición y las interfaces para añadir funciones sin tocar código antiguo.
            </li>
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-blue-600 text-xl">L</span> <strong> - Sustitución de Liskov:</strong> Las subclases deben ser sustituibles por sus clases base sin que el programa falle. Es el alma de la herencia correcta.
            </li>
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-blue-600 text-xl">I</span> <strong> - Segregación de Interfaces:</strong> Es mejor tener muchas interfaces pequeñas y específicas que una &quot;interfaz gorda&quot; que obligue a los clientes a implementar métodos que no usan.
            </li>
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-blue-600 text-xl">D</span> <strong> - Inversión de Dependencias:</strong> Depende de abstracciones (interfaces), no de implementaciones concretas. Esto es lo que permite que tu código de negocio no dependa de si usas MySQL o MongoDB.
            </li>
          </ul>

          <h2 id="patrones" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-blue-600" /> 2. Patrones de Diseño: El Vocabulario del Maestro
          </h2>
          <p>
            Los patrones de diseño son soluciones estandarizadas a problemas que los programadores enfrentan una y otra vez. Se dividen en tres categorías principales:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
               <h4 className="text-blue-900 font-black mt-0 mb-3 text-lg">Creacionales</h4>
               <p className="text-xs text-blue-800 m-0">Gestionan cómo se crean los objetos. Ejemplo: <strong>Factory</strong> (para crear familias de objetos) o <strong>Singleton</strong> (aunque úsalo con cuidado, ya que puede ser un anti-patrón).</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
               <h4 className="text-blue-900 font-black mt-0 mb-3 text-lg">Estructurales</h4>
               <p className="text-xs text-blue-800 m-0">Cómo se componen las clases y objetos. Ejemplo: <strong>Adapter</strong> (para conectar piezas que no encajan) o <strong>Proxy</strong> (para controlar el acceso a un objeto).</p>
            </div>
          </div>
          <p>
            <strong>El Patrón Observer:</strong> Vital en el desarrollo moderno de interfaces (React, Vue) y en sistemas de mensajería asíncrona. Permite que un objeto notifique a múltiples observadores cuando cambia su estado, facilitando un desacoplamiento total entre quien produce la información y quien la consume.
          </p>

          <h2 id="clean" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <CheckCircle className="w-8 h-8 text-blue-600" /> 3. Clean Code: La Higiene del Ingeniero
          </h2>
          <p>
            Escribir código limpio no es un lujo, es una necesidad de supervivencia. En 2026, con asistentes de IA que pueden generar miles de líneas de código en segundos, tu trabajo como arquitecto es asegurar que ese código sea legible.
          </p>
          <div className="bg-slate-50 border-l-4 border-blue-500 p-8 my-10 shadow-sm">
             <p className="text-slate-800 m-0 text-lg leading-relaxed font-medium italic">
                &quot;El código limpio es aquel que parece que fue escrito por alguien que se preocupa por ti.&quot;
             </p>
          </div>
          <p>
            <strong>Reglas de Oro:</strong> 
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-sm">
            <li><strong>Nombres con significado:</strong> Si necesitas un comentario para explicar qué hace una variable, el nombre de la variable no es lo suficientemente bueno.</li>
            <li><strong>Funciones pequeñas:</strong> Una función debe hacer una sola cosa y hacerla bien.</li>
            <li><strong>Evita efectos secundarios:</strong> Las funciones deben ser lo más &quot;puras&quot; posible; dado el mismo input, deben devolver el mismo output sin cambiar el estado global de la app.</li>
          </ul>

          <h2 id="arquitecturas" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Terminal className="w-8 h-8 text-blue-600" /> 4. Arquitectura Hexagonal y DDD
          </h2>
          <p>
             A nivel macro, en 2026 la tendencia es la <strong>Arquitectura Hexagonal (o de Puertos y Adaptadores)</strong>. Su premisa es simple: tu lógica de negocio (el &quot;Core&quot;) no debe saber nada sobre el mundo exterior. No sabe si los datos vienen de una API, una CLI o una DB. Toda la comunicación se hace a través de &quot;puertos&quot; y &quot;adaptadores&quot;. 
          </p>
          <p>
             Esto, combinado con <strong>Domain-Driven Design (DDD)</strong>, donde el código se organiza alrededor del lenguaje y los conceptos del negocio (y no de la tecnología), crea sistemas que son extremadamente fáciles de testear y que pueden sobrevivir a cambios radicales de infraestructura con un esfuerzo mínimo.
          </p>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-blue-600" /> Preguntas Frecuentes
          </h2>
          <div className="space-y-6 mt-8">
            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Debo aplicar SOLID en todos mis proyectos?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Usa el sentido común. Aplicar arquitectura hexagonal compleja a un script de automatización pequeño es una pérdida de tiempo (over-engineering). Sin embargo, a medida que un proyecto crece y más de dos personas tocan el código, estos principios se vuelven indispensables para evitar el caos.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Qué es un anti-patrón?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Es una solución común a un problema que parece efectiva a corto plazo pero que causa graves problemas a largo plazo. Ejemplos famosos: el <strong>God Object</strong> (una clase que lo hace todo) o el <strong>Spaghetti Code</strong> (flujos de control imposibles de seguir).
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿La IA escribirá la arquitectura por mí?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                La IA puede generar patrones conocidos, pero la arquitectura de software trata de tomar decisiones y compromisos (trade-offs) basados en el contexto específico de tu negocio. Eso sigue requiriendo el juicio clínico de un ingeniero humano que comprenda no solo el código, sino los objetivos de la empresa.
              </p>
            </details>
          </div>

          <div className="bg-blue-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                Crea Sistemas que <br className="hidden md:block" /> Superen la Prueba del Tiempo
              </h2>
              <p className="text-blue-50 text-lg leading-relaxed mb-10 font-medium max-w-2xl">
                La diferencia entre un programador y un ingeniero senior es la capacidad de diseñar estructuras que resistan el cambio. Domina estos principios y conviértete en el arquitecto de los sistemas digitales que moverán el mundo en la próxima década.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl flex items-center gap-2">
                   Explorar Catálogo <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-blue-100 text-sm font-bold">
                  <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> Scalable Core</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Clean Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
