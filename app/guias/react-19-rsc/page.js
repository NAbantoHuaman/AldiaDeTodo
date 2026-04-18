import Link from 'next/link';
import { Atom, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Zap, Layers, Globe } from 'lucide-react';

export const metadata = {
  title: "React 19 & Next.js 16: El Futuro del Front-end en 2026",
  description: "Guía maestra sobre React 19 y Next.js 16. Domina React Server Components (RSC), Server Actions, el compilador de React y arquitecturas híbridas avanzadas.",
  openGraph: {
    title: "React 19 & Next.js 16: El Futuro del Front-end en 2026",
    description: "Eleva tu nivel de desarrollo web. Aprende a construir aplicaciones ultrarrápidas con la tecnología más avanzada del ecosistema React.",
    url: "https://aldiadetodo.com/guias/react-19-rsc",
    type: "article",
    images: [{ url: '/images/guias/react.png' }]
  },
  alternates: { canonical: '/guias/react-19-rsc' },
};

export default function GuiaReact() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'React 19 & Next.js 16: El Futuro del Front-end en 2026',
    description: 'Guía exhaustiva sobre las últimas innovaciones en React y Next.js, centrada en el rendimiento, la experiencia del desarrollador y las arquitecturas de servidor.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/react-19-rsc',
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
            <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center shadow-xl shadow-indigo-200 -rotate-12 border-4 border-white">
              <Atom className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             React 19: La <span className="text-indigo-600">Revolución</span> del Lado del Servidor
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Framework</span> Next.js 16</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 25 min</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Tech:</span> RSC & Actions</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-indigo-500 pl-6">
            &quot;React 19 no es solo una actualización; es un cambio de modelo mental. Hemos pasado de manipular el DOM en el cliente a orquestar una sinfonía entre servidor y cliente donde el código vive donde es más eficiente. En 2026, si no estás usando RSC, no estás usando React.&quot;
          </p>

          <p className="mb-8">
            Desde su lanzamiento original, React ha evolucionado desde una simple librería de UI hasta convertirse en una plataforma de cómputo híbrido. Con la llegada de <strong>React 19</strong> y <strong>Next.js 16</strong>, las fronteras entre el front-end y el back-end se han difuminado definitivamente. Ya no enviamos megabytes de JavaScript al navegador; enviamos resultados de cómputo procesados en el servidor, manteniendo la interactividad fluida que hizo famoso a React. Esta guía desglosa cómo aprovechar estas innovaciones para construir sitios web que cargan instantáneamente y ofrecen una experiencia de usuario sin precedentes.
          </p>

          <div className="bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-indigo-400" /> Índice de Reactivo
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#rsc" className="text-slate-200 no-underline font-bold group-hover:text-indigo-400 transition-colors">React Server Components (RSC): El nuevo estándar</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#actions" className="text-slate-200 no-underline font-bold group-hover:text-indigo-400 transition-colors">Server Actions y el fin de los Endpoints de API</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#compiler" className="text-slate-200 no-underline font-bold group-hover:text-indigo-400 transition-colors">React Compiler (Forget): Despídete de useMemo</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#nextjs" className="text-slate-200 no-underline font-bold group-hover:text-indigo-400 transition-colors">Next.js 16: Optimizaciones y App Router avanzado</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-indigo-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          <h2 id="rsc" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Layers className="w-8 h-8 text-indigo-600" /> 1. Server Components: Cero Bundle Size
          </h2>
          <p>
            El mayor problema del desarrollo web moderno ha sido el &quot;Hydration Mismatch&quot; y el peso excesivo del JavaScript enviado al cliente. Los <strong>Server Components</strong> resuelven esto permitiendo que los componentes se ejecuten exclusivamente en el servidor.
          </p>
          <p>
            <strong>Beneficios Radicales:</strong> 
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Cero JS en el cliente:</strong> Las dependencias usadas en un RSC (como librerías de Markdown o bases de datos) no se envían al navegador.</li>
            <li><strong>Acceso Directo:</strong> Puedes hacer consultas a tu base de datos directamente dentro del componente, eliminando la necesidad de APIs intermedias para el renderizado inicial.</li>
            <li><strong>Streaming:</strong> Next.js puede enviar partes de la página al cliente mientras otras aún se están procesando en el servidor, mejorando el Time to First Byte (TTFB) de forma dramática.</li>
          </ul>
          <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-8 my-10 flex gap-6 items-start shadow-sm">
             <Lightbulb className="w-8 h-8 text-indigo-500 flex-shrink-0 mt-1" />
             <div>
                <h4 className="text-lg font-black text-indigo-900 mb-2 mt-0">Frontera Servidor-Cliente:</h4>
                <p className="text-indigo-800 m-0 text-sm leading-relaxed">
                  Aprender cuándo usar <code>&quot;use client&quot;</code> y <code>&quot;use server&quot;</code> es vital. En 2026, la regla de oro es mantener el estado y los eventos de usuario en &quot;hojas&quot; de cliente pequeñas, manteniendo toda la estructura y obtención de datos en el servidor.
                </p>
             </div>
          </div>

          <h2 id="actions" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-indigo-600" /> 2. Server Actions: Mutaciones Simplificadas
          </h2>
          <p>
            ¿Recuerdas escribir handlers de API, gestionar estados de carga manuales y llamar a <code>fetch</code> para cada formulario? Con las <strong>Server Actions</strong>, eso es cosa del pasado.
          </p>
          <p>
            Ahora puedes invocar funciones del servidor directamente desde tus componentes de React, incluso desde botones o formularios de cliente. React maneja automáticamente la serialización de los datos y la actualización de la UI tras la respuesta. Esto no solo reduce la cantidad de código que tienes que escribir, sino que mejora enormemente la seguridad al mantener la lógica sensible fuera del alcance del navegador.
          </p>
          <pre className="bg-slate-950 text-indigo-300 p-6 rounded-2xl overflow-x-auto text-sm my-8 border border-slate-800">
            <code>
{`// Ejemplo de Server Action en Next.js 16
async function createPost(formData) {
  'use server';
  const title = formData.get('title');
  await db.post.create({ data: { title } });
  revalidatePath('/blog');
}

export default function Form() {
  return (
    <form action={createPost}>
      <input name="title" />
      <button type="submit">Publicar</button>
    </form>
  );
}`}
            </code>
          </pre>

          <h2 id="compiler" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Cpu className="w-8 h-8 text-indigo-600" /> 3. React Compiler: La Muerte del Boilerplate
          </h2>
          <p>
            Históricamente, los desarrolladores de React sufrían optimizando el rendimiento manualmente con <code>useMemo</code>, <code>useCallback</code> y <code>memo</code>. React 19 introduce el <strong>React Compiler</strong> (anteriormente conocido como Forget).
          </p>
          <p>
            Este compilador analiza automáticamente tu código de JavaScript y añade la memorización donde es necesaria de forma automática. Esto significa que puedes escribir código React limpio e idiomático, y el compilador se encargará de que sea lo más eficiente posible. Es el mayor salto de productividad para los desarrolladores de React en años, eliminando miles de líneas de código de optimización innecesario.
          </p>

          <h2 id="nextjs" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Globe className="w-8 h-8 text-indigo-600" /> 4. Next.js 16: La Plataforma Definitiva
          </h2>
          <p>
             Next.js 16 lleva estas características al límite con optimizaciones específicas:
          </p>
          <ul className="space-y-4 m-0 p-0 list-none">
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">PPR</span>
              <p className="text-sm m-0"><strong>Partial Prerendering:</strong> Combina el renderizado estático y dinámico en la misma página de forma automática.</p>
            </li>
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">SEO</span>
              <p className="text-sm m-0">Manejo de Metadatos asíncronos mejorado para un SEO dinámico perfecto.</p>
            </li>
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">Turbo</span>
              <p className="text-sm m-0">Compilación incremental con Turbopack, haciendo que el tiempo de refresco en desarrollo sea instantáneo.</p>
            </li>
          </ul>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-indigo-600" /> Preguntas Frecuentes
          </h2>
          <div className="space-y-6 mt-8">
            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿React 19 rompe la compatibilidad?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                No. React 19 es mayoritariamente aditivo. Tus componentes clásicos (&quot;use client&quot;) seguirán funcionando perfectamente. El cambio es arquitectural: ahora tienes herramientas para mover gran parte de tu lógica al servidor si así lo deseas, pero el modelo tradicional de hooks sigue siendo válido.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Debo usar siempre Server Components?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Sí, por defecto. Empieza cualquier componente como un Server Component para ganar rendimiento. Solo añade <code>&quot;use client&quot;</code> cuando necesites interactividad del navegador (como <code>useState</code>, <code>useEffect</code> o APIs de eventos del navegador).
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Qué pasa con Redux o React Query en este nuevo mundo?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Siguen teniendo su lugar, pero su uso se ha reducido. Gran parte de lo que hacías con React Query (obtención de datos y caché) ahora lo hace Next.js de forma nativa en el servidor. Redux sigue siendo útil para estados globales de cliente complejos, pero para la mayoría de las apps el estado del servidor manejado por RSC es suficiente.
              </p>
            </details>
          </div>

          <div className="bg-indigo-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                Domina el Futuro de <br className="hidden md:block" /> la Web Reactiva
              </h2>
              <p className="text-indigo-50 text-lg leading-relaxed mb-10 font-medium max-w-2xl">
                La web está cambiando de nuevo. Con React 19 y Next.js 16 tienes el poder de construir aplicaciones que antes eran imposibles. No te quedes atrás y empieza a diseñar el futuro hoy mismo.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-xl flex items-center gap-2">
                   Todas las Guías <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-indigo-100 text-sm font-bold">
                  <span className="flex items-center gap-1"><Atom className="w-4 h-4" /> RSC Native</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Performance First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
