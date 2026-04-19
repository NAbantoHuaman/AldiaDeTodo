import Link from 'next/link';
import { ShieldCheck, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Code, Layers, Zap } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedGuides from '@/components/RelatedGuides';

export const metadata = {
  title: "TypeScript Maestro: Dominando el Tipado Estático en 2026",
  description: "Guía definitiva para dominar TypeScript. De tipos básicos a utilidades avanzadas, decoradores y patrones de diseño para aplicaciones escalables en 2026.",
  openGraph: {
    title: "TypeScript Maestro: Dominando el Tipado Estático en 2026",
    description: "Eleva tu nivel de JavaScript con TypeScript. Aprende a construir software robusto y libre de errores.",
    url: "https://aldiadetodo.com/guias/typescript-maestro",
    type: "article",
    images: [{ url: '/images/guias/typescript.png' }]
  },
  alternates: { canonical: '/guias/typescript-maestro' },
};

export default function GuiaTypeScript() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'TypeScript Maestro: Dominando el Tipado Estático en 2026',
      description: 'Guía exhaustiva sobre TypeScript para desarrolladores modernos, cubriendo desde fundamentos hasta patrones avanzados.',
      author: { '@type': 'Organization', name: 'AldiaDeTodo' },
      publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
      datePublished: '2026-04-18',
      dateModified: '2026-04-18',
      mainEntityOfPage: 'https://aldiadetodo.com/guias/typescript-maestro',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Debo usar Type o Interface?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Usa interface cuando necesites extensibilidad (declaration merging) para objetos de dominio. Usa type para uniones, tuplas y tipos complejos de utilidad. La mayoría de los equipos modernos prefieren type por su consistencia.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Cómo manejo tipos que vienen de una API dinámica?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Usa librerías de validación de esquemas como Zod. Zod te permite definir el esquema y luego inferir el tipo estático automáticamente, garantizando que si el backend cambia, tu frontend fallará de forma controlada.'
          }
        },
        {
          '@type': 'Question',
          name: '¿TypeScript es necesario para proyectos pequeños?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Incluso en un script pequeño, TypeScript te recordará si olvidaste manejar un nulo o si escribiste mal el nombre de una propiedad. El autocompletado y la prevención de errores compensan con creces el tiempo de configuración.'
          }
        }
      ]
    }
  ];

  return (
    <article className="min-h-screen bg-white font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-24 border-b border-blue-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs title="TypeScript Maestro" />
          
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center shadow-xl shadow-blue-200 -rotate-3 border-4 border-white">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
               TypeScript Maestro: <span className="text-blue-600">Software Robusto</span> a gran escala
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Nivel:</span> Intermedio - Avanzado</span>
              <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 25 min</span>
              <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Actualizado:</span> 2026</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none text-slate-900">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-blue-500 pl-6">
            &quot;TypeScript no es solo un compilador; es un sistema de documentación activa que protege tu código contra errores humanos antes de que lleguen a producción. En 2026, escribir JavaScript plano sin tipos es como construir un rascacielos sin planos estructurales.&quot;
          </p>

          <p className="mb-8">
            TypeScript ha dejado de ser una opción &quot;nice-to-have&quot; para convertirse en el estándar de facto de la industria. Lo que comenzó como un superconjunto de JavaScript para aplicaciones empresariales, hoy es la base de casi todos los frameworks modernos, desde Next.js hasta Deno. En esta guía profunda, exploraremos cómo aprovechar el sistema de tipos para no solo evitar errores, sino para diseñar arquitecturas de software que se expliquen por sí mismas.
          </p>

          <div className="not-prose bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black !text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-blue-400" /> Índice Maestro
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#filosofia" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">La Filosofía del Desarrollo Orientado a Tipos</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#avanzados" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Tipos Genéricos y Utilidades Avanzadas</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#arquitectura" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Arquitectura Limpia con TypeScript</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#performance" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Configuración y Rendimiento del Compilador</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          <h2 id="filosofia" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-blue-600" /> 1. El Salto Mental: Pensar en Tipos
          </h2>
          <p className="mb-8">
            Muchos desarrolladores cometen el error de ver a TypeScript simplemente como JavaScript con &quot;etiquetas&quot; de datos. Sin embargo, la verdadera maestría llega cuando empiezas a ver el tipado como una <strong>herramienta de modelado de dominio</strong>.
          </p>
          <p className="mb-8">
            <strong>La Verdad sobre el Any:</strong> En 2026, el uso de <code>any</code> es considerado una deuda técnica inmediata. Un maestro de TypeScript prefiere usar <code>unknown</code> para datos inciertos o <code>never</code> para flujos que no deben ocurrir. La meta es reducir la incertidumbre del runtime al mínimo posible, moviendo el costo del error al tiempo de compilación.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 my-10 flex gap-6 items-start shadow-sm">
             <Lightbulb className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
             <div>
                <h4 className="text-lg font-black text-blue-900 mb-2 mt-0">Tip: Tipado Nominal vs Estructural</h4>
                <p className="text-blue-800 m-0 text-sm leading-relaxed">
                  TypeScript usa un sistema de tipos estructural (si camina como pato y suena como pato...). Aprender a usar uniones discriminadas (Discriminated Unions) es la forma más potente de manejar estados complejos de la UI (como Loading, Success, Error) sin condiciones frágiles.
                </p>
             </div>
          </div>

          <h2 id="avanzados" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Code className="w-8 h-8 text-blue-600" /> 2. Magia Negra: Tipos Mapeados y Condicionales
          </h2>
          <p className="mb-8">
            Donde TypeScript realmente brilla es en su capacidad para transformar tipos existentes. Los genéricos (<code>Generics</code>) permiten crear componentes y funciones reutilizables que mantienen la integridad de los datos sin perder información.
          </p>
          <p className="mb-8">
            <strong>Template Literal Types:</strong> Una de las características más queridas introducidas recientemente. Permiten crear tipos basados en patrones de string, como <code>{'`on${Capitalize<EventName>}`'}</code>. Esto ha revolucionado la creación de librerías de componentes y sistemas de eventos, permitiendo que el IDE te sugiera exactamente qué props o eventos están disponibles.
          </p>
          <pre className="bg-slate-950 text-blue-300 p-6 rounded-2xl overflow-x-auto text-sm my-8 border border-slate-800">
            <code>
{`// Ejemplo de Tipo Condicional Avanzado
type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

interface User {
  address: {
    city: string;
    zipCode: number;
  };
}

const partialUser: DeepPartial<User> = {
  address: { city: "Madrid" }
};`}
            </code>
          </pre>

          <h2 id="arquitectura" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Layers className="w-8 h-8 text-blue-600" /> 3. Arquitectura Limpia y Contractual
          </h2>
          <p className="mb-8">
            En aplicaciones empresariales de 2026, TypeScript actúa como la capa de contrato entre el Frontend y el Backend. El uso de herramientas como Zod o Valibot para validar esquemas en tiempo de ejecución, sincronizados con tipos estáticos, asegura que los datos que vienen de una API externa sean exactamente lo que tu aplicación espera.
          </p>
          <p className="mb-8">
            <strong>Inversión de Dependencias:</strong> Gracias a las interfaces y tipos abstractos, puedes escribir código que dependa de contratos, no de implementaciones. Esto facilita enormemente el testing y permite cambiar proveedores de servicios (por ejemplo, cambiar de Firebase a Supabase) sin tocar la lógica de negocio central de tu aplicación.
          </p>
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 my-10 text-white shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
             <h4 className="text-lg font-black text-blue-400 mb-4 mt-0">La Regla de Oro del Maestro:</h4>
             <p className="text-slate-300 m-0 text-sm leading-relaxed italic">
                &quot;Si tu tipo se vuelve demasiado complejo de escribir, es probable que tu código sea demasiado complejo de mantener. Refactoriza la lógica antes de intentar domar un tipo imposible.&quot;
             </p>
          </div>

          <h2 id="performance" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Terminal className="w-8 h-8 text-blue-600" /> 4. Configurando para la Victoria
          </h2>
          <p className="mb-8">
            El archivo <code>tsconfig.json</code> es el corazón de tu proyecto. En 2026, habilitar <code>strict: true</code> es el requisito mínimo. Sin embargo, hay banderas menos conocidas como <code>noPropertyAccessFromIndexSignature</code> o <code>exactOptionalPropertyTypes</code> que pueden elevar la calidad de tu código a niveles de seguridad militar.
          </p>
          <p className="mb-8">
             Además, el rendimiento del compilador es vital. En monorepos gigantescos, el uso de <strong>Project References</strong> permite segmentar el proyecto, compilando solo las partes que han cambiado y reduciendo los tiempos de CI/CD de minutos a segundos.
          </p>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-blue-600" /> Preguntas Frecuentes (Master FAQ)
          </h2>
          <div className="space-y-6 mt-8">
            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Debo usar Type o Interface?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                En 2026, la distinción es mínima. Usa <code>interface</code> cuando necesites extensibilidad (declaration merging) para objetos de dominio. Usa <code>type</code> para uniones, tuplas y tipos complejos de utilidad. La mayoría de los equipos modernos prefieren <code>type</code> por su consistencia.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Cómo manejo tipos que vienen de una API dinámica?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Usa librerías de validación de esquemas como <strong>Zod</strong>. Zod te permite definir el esquema y luego inferir el tipo estático automáticamente: <code>type User = z.infer&lt;typeof UserSchema&gt;</code>. Esto garantiza que si el backend cambia, tu frontend fallará de forma controlada con un mensaje de error claro en lugar de un &quot;undefined is not a function&quot;.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿TypeScript afecta el rendimiento de mi sitio?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                No. TypeScript desaparece por completo después de la compilación. El navegador solo ejecuta JavaScript plano. De hecho, TypeScript puede *mejorar* el rendimiento indirectamente al ayudarte a evitar polyfills innecesarios o al facilitarte refactorizaciones para eliminar código muerto (dead code elimination).
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿TypeScript es necesario para proyectos pequeños?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Sí. Incluso en un script de 20 líneas, TypeScript te recordará si olvidaste manejar un nulo o si escribiste mal el nombre de una propiedad. La velocidad que ganas al tener el autocompletado perfecto compensa con creces el tiempo que tardas en configurar el compilador.
              </p>
            </details>
          </div>

          <RelatedGuides currentSlug="typescript-maestro" />

          <div className="bg-blue-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                Eleva tu Código al <br className="hidden md:block" /> Siguiente Nivel
              </h2>
              <p className="text-blue-50 text-lg leading-relaxed mb-10 font-medium max-w-2xl">
                Convertirse en un maestro de TypeScript no es cuestión de un día. Es un compromiso con la excelencia y la robustez. Empieza hoy a tipar tus proyectos y observa cómo tu confianza como desarrollador crece con cada compilación exitosa.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl flex items-center gap-2">
                   Seguir Aprendiendo <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-blue-100 text-sm font-bold">
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Type Safety</span>
                  <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Developer Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
