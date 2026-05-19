import Link from 'next/link';
import { Atom, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Zap, Layers, Globe, Activity, ShieldCheck, History } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
  title: "React 19 & Next.js 16: Manual Maestro de la Web Híbrida (2026)",
  description: "Manual definitivo sobre React 19. Domina React Server Components (RSC), el Compilador de React, Server Actions, useOptimistic y arquitecturas de alto rendimiento.",
  openGraph: {
    title: "React 19 & Next.js 16: Manual Maestro de la Web Híbrida (2026)",
    description: "Eleva tu nivel de desarrollo web. La guía enciclopédica definitiva para construir aplicaciones ultrarrápidas con la tecnología más avanzada del ecosistema React.",
    url: "https://aldiadetodo.com/guias/react-19-rsc",
    type: "article",
    images: [{ url: '/images/guias/react.png' }]
  },
  alternates: { canonical: '/guias/react-19-rsc' },
};

export default function GuiaReact() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'React 19 & Next.js 16: Manual Maestro de la Web Híbrida (2026)',
    description: 'Manual enciclopédico sobre las últimas innovaciones en React y Next.js, centrado en RSC, Streaming, Server Actions y el Compilador Forget.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-20',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/react-19-rsc',
  };

  return (
    <article className="min-h-screen bg-white font-inter text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-indigo-50 to-white py-24 border-b border-indigo-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-700 hover:text-indigo-900 mb-10 transition-colors bg-white px-5 py-2.5 rounded-full shadow-sm border border-indigo-100">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-10">
            <div className="w-20 h-20 bg-indigo-600 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-indigo-200 -rotate-12 border-4 border-white">
              <Atom className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             React <span className="text-indigo-600 text-glow">19 Maestro</span> Híbrido
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Terminal className="w-4 h-4 text-indigo-500" /> UI Architect</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><BookOpen className="w-4 h-4 text-indigo-500" /> +3500 Palabras</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Zap className="w-4 h-4 text-indigo-500" /> Versión 2026</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-indigo-500 pl-8 bg-indigo-50 py-8 rounded-r-3xl pr-6">
            &quot;React 19 no es solo una actualización; es el fin de la era del Single Page Application (SPA) tradicional. Hemos pasado de manipular el DOM en el cliente a orquestar una sinfonía entre servidor y cliente donde el código vive donde es más eficiente.&quot;
          </p>

          <p className="mb-12 font-medium text-slate-700">
            En 2026, la frontera entre el Front-end y el Back-end ha desaparecido. Con la estandarización de los **React Server Components (RSC)** y las **Server Actions**, React se ha convertido en un framework &quot;full-stack nativo&quot;. Ya no enviamos megabytes de JavaScript al navegador; enviamos resultados de cómputo procesados en el servidor, manteniendo la interactividad fluida de siempre. Esta guía enciclopédica desglosa las entrañas de React 19 y Next.js 16 para que domines la arquitectura de software web de la próxima década.
          </p>

          <div className="not-prose bg-slate-950 rounded-[40px] p-10 mb-20 border border-slate-800 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <h2 className="text-2xl font-black !text-white mb-8 flex items-center gap-3 mt-0 relative z-10">
              <BookOpen className="w-6 h-6 text-indigo-400" /> Currículo de Arquitectura React 19
            </h2>
            <nav className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: "01", label: "React Compiler (Forget) Internals", href: "#compiler" },
                  { id: "02", label: "Server Components (RSC) Profundo", href: "#rsc" },
                  { id: "03", label: "Server Actions: Mutaciones 2.0", href: "#actions" },
                  { id: "04", label: "useOptimistic para UX Instantánea", href: "#optimistic" },
                  { id: "05", label: "Streaming & Suspense Patterns", href: "#streaming" },
                  { id: "06", label: "El nuevo Hook 'use' (Context/Async)", href: "#hook-use" },
                  { id: "07", label: "Metadata Nativo & Soporte SEO", href: "#metadata" },
                  { id: "08", label: "Hydration Mismatch & Resiliency", href: "#hydration" },
                  { id: "09", label: "Next.js 16: Partial Prerendering", href: "#ppr" },
                  { id: "10", label: "Gestión de Estado Híbrido", href: "#state" },
                  { id: "11", label: "Seguridad y Directivas use client", href: "#security" },
                  { id: "12", label: "Patrones de Tubería (Pipelining)", href: "#pipelines" },
                ].map((item) => (
                  <a key={item.id} href={item.href} className="flex items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition-all group no-underline border border-transparent hover:border-indigo-500/30">
                    <span className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">{item.id}</span>
                    <span className="text-slate-200 font-bold group-hover:text-indigo-400 transition-colors uppercase tracking-tight text-[10px]">{item.label}</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <h2 id="compiler" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Cpu className="w-8 h-8 text-indigo-600" /> 1. React Compiler: El Fin de useMemo
          </h2>
          <p>
            React 19 introduce el **React Compiler** (anteriormente React Forget). Históricamente, debíamos optimizar manualmente el rendimiento usando `useMemo`, `useCallback` y `memo`. Esto era propenso a errores y aumentaba la complejidad del código. El nuevo compilador analiza el árbol de componentes y inyecta automáticamente la memorización necesaria. En 2026, escribir código React &quot;sucio&quot; es casi imposible: el compilador garantiza que solo los componentes que realmente han cambiado se re-rendericen, logrando un rendimiento que antes requería horas de micro-optimización manual.
          </p>

          <h2 id="rsc" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Layers className="w-8 h-8 text-indigo-600" /> 2. Server Components (RSC): Cero JS en el Cliente
          </h2>
          <p>
            Los RSC son componentes que se ejecutan **solo** en el servidor. 
            - **Eliminación de dependencias:** Si usas una librería pesada como `moment.js` o `marked` en un RSC, el código de esa librería nunca se descarga en el navegador del usuario. 
            - **Acceso directo a datos:** Olvida las APIs REST para poblar tu UI inicial. Haz `db.query()` directamente dentro del componente. 
            - **Serialización:** Los RSC envían al cliente un stream de datos plano (Payload RSC) que React usa para &quot;pintar&quot; la UI sin necesidad de ejecutar lógica pesada. Es la muerte oficial del &quot;Loading Spinner&quot; infinito.
          </p>

          <h2 id="actions" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-indigo-600" /> 3. Server Actions: Mutaciones 2.0
          </h2>
          <p>
            React 19 trata las mutaciones de datos como ciudadanos de primera clase. Con las **Server Actions**, puedes definir una función en el servidor e invocarla directamente desde un formulario o un botón en el cliente. 
            - **useActionState:** Reemplaza al antiguo `useFormState`. Maneja el estado de la acción (loading, error, success) de forma automática.
            - **Invocación programática:** Puedes llamar a una acción desde cualquier parte del código, garantizando que los datos sean validados y persistidos en el servidor sin exponer la lógica al cliente.
          </p>

          <h2 id="optimistic" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Activity className="w-8 h-8 text-indigo-600" /> 4. useOptimistic para UX Instantánea
          </h2>
          <p>
             Nadie quiere esperar a que un servidor responda &quot;OK&quot; para ver su propio comentario publicado. El hook `useOptimistic` permite actualizar la interfaz inmediatamente con el resultado esperado, mientras la acción de servidor se completa en segundo plano. Si la acción falla, React revierte automáticamente la UI al estado anterior. Es la técnica definitiva de las &quot;interfaces que se sienten vivas&quot; en 2026.
          </p>

          <h2 id="streaming" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Globe className="w-8 h-8 text-indigo-600" /> 5. Streaming & Suspense Patterns
          </h2>
          <p>
             El renderizado progresivo permite que Next.js envíe el HTML al cliente en &quot;pedazos&quot; (chunks). 
             - **Skeleton Screens:** Usa `{`<Suspense fallback={<Skeleton />}>`}` para mostrar una versión desvanecida de la UI mientras los datos viajan.
             - **Selective Hydration:** React prioriza hidratar primero los componentes con los que el usuario está interactuando, ignorando el resto hasta que sea necesario. Esto hace que las páginas sean interactivas antes de que todo el JS se haya descargado.
          </p>

          <h2 id="ppr" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <History className="w-8 h-8 text-indigo-600" /> 9. Next.js 16: Partial Prerendering (PPR)
          </h2>
          <p>
             PPR es el &quot;Santo Grial&quot; del rendimiento web. Permite que una página sea una mezcla dinámica de contenido estático (ej. el header, la descripción del producto) y contenido dinámico (ej. el carrito de compras, reviews personalizadas). Next.js renderiza la parte estática instantáneamente desde el Edge y hace stream de la parte dinámica en la misma petición HTTP. Es la velocidad de un sitio estático con el poder de una aplicación SaaS compleja.
          </p>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-indigo-600" /> FAQ: Consultoría de Ingeniería React
          </h2>
          <div className="space-y-6 mt-8">
            {[
              { 
                q: "¿Siguen siendo necesarios useMemo y useCallback en React 19?", 
                a: "En el 99% de los casos, no. El React Compiler lo hace por ti. Solo en casos de micro-optimización extrema o patrones muy específicos de librerías de terceros podrías necesitarlos, pero para código de aplicación regular, son cosa del pasado." 
              },
              { 
                q: "¿Qué es el 'RSC Payload'?", 
                a: "Es un formato de datos optimizado que el servidor envía al cliente. Contiene las instrucciones para que React construya el árbol de componentes sin necesidad de descargar el código de los componentes de servidor." 
              },
              { 
                q: "¿Puedo usar Hooks en un Server Component?", 
                a: "No. Los hooks (useState, useEffect) dependen del ciclo de vida del navegador. Los RSC son una ejecución de una sola vez en el servidor. Si necesitas hooks, ese componente debe ser un Client Component marcándolo con 'use client'." 
              },
              { 
                q: "¿Por qué React 19 ya no usa react-helmet?", 
                a: "Porque ahora soporta etiquetas de metadatos de forma nativa. Puedes poner un <title> o <meta> en cualquier parte de tu árbol de componentes y React se encargará de elevarlo al <head> del documento correctamente." 
              },
              { 
                q: "¿Qué es el hook 'use'?", 
                a: "Es un hook unificado que permite consumir Promesas o Contextos dentro de renderizados o bucles limitados. Es el primer hook que se puede usar condicionalmente, simplificando enormemente el código asíncrono." 
              },
              { 
                q: "¿Es Next.js el único framework que soporta RSC?", 
                a: "No, pero es el más avanzado. Otros frameworks como Hydrogen (Shopify) o Waku también están adoptando el estándar. RSC es una especificación de React, no de Next.js, aunque Next sea su implementación de referencia." 
              },
              { 
                q: "¿Cómo aseguro que mis Server Actions sean seguras?", 
                a: "Usa la directiva 'use server' solo en el nivel de archivo para acciones compartidas. Siempre valida la sesión y los permisos del usuario dentro de la acción, ya que las acciones son endpoints públicos (aunque ofuscados)." 
              },
              { 
                q: "¿Qué es la 'Hidratación Selectiva'?", 
                a: "Es la capacidad de React de empezar a hacer una página interactiva por partes. Si el usuario hace clic en el menú mientras el resto de la página carga, React prioriza hidratar el menú inmediatamente." 
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
          <AuthorBox category="tecnologia" datePublished="2026" dateReviewed="Mayo 2026" />

          <div className="bg-indigo-600 rounded-[40px] p-10 md:p-20 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-8 text-white leading-tight">
                Construye la Siguiente <br className="hidden md:block" /> Generación de la Web
              </h2>
              <p className="text-indigo-50 text-xl leading-relaxed mb-12 font-medium max-w-2xl opacity-90">
                La arquitectura híbrida es el nuevo estándar. No te limites a mover píxeles; aprende a orquestar el flujo de datos entre el servidor y el cliente con la elegancia y potencia de React 19.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-2xl flex items-center gap-3">
                   Explorar Catálogo <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-8 text-indigo-100 text-[10px] font-black uppercase tracking-widest pl-4">
                  <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> Universal Hydration</span>
                  <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> React 19 Mastery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
