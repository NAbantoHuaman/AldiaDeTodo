import Link from 'next/link';
import { Database, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Zap, Layers, Binary } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedGuides from '@/components/RelatedGuides';

export const metadata = {
  title: "SQL Moderno Avanzado: Dominando PostgreSQL en 2026",
  description: "Guía maestra de SQL y bases de datos relacionales. De consultas JOIN complejas a optimización de índices, Window Functions y diseño de esquemas escalables para 2026.",
  openGraph: {
    title: "SQL Moderno Avanzado: Dominando PostgreSQL en 2026",
    description: "Eleva tu nivel de bases de datos. Aprende a escribir consultas de alto rendimiento y a diseñar arquitecturas de datos de clase mundial.",
    url: "https://aldiadetodo.com/guias/sql-avanzado",
    type: "article",
    images: [{ url: '/images/guias/sql.png' }]
  },
  alternates: { canonical: '/guias/sql-avanzado' },
};

export default function GuiaSQL() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'SQL Moderno Avanzado: Dominando PostgreSQL en 2026',
      description: 'Guía técnica profunda sobre el lenguaje SQL, enfocada en PostgreSQL como el estándar de la industria para sistemas relacionales robustos.',
      author: { '@type': 'Organization', name: 'AldiaDeTodo' },
      publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
      datePublished: '2026-04-18',
      dateModified: '2026-04-18',
      mainEntityOfPage: 'https://aldiadetodo.com/guias/sql-avanzado',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿SQL o un ORM (como Prisma/Hibernate)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Los ORM son excelentes para la productividad, pero ocultar el SQL crudo puede llevar a problemas de rendimiento masivos (como el famoso N+1). Un desarrollador experto usa el ORM para las tareas simples, pero escribe SQL manual optimizado para las consultas complejas y críticas.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Cuándo debo usar Sharding o Particionado?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El particionado nativo de Postgres es excelente cuando tus tablas superan los cientos de millones de filas. Permite que el motor de búsqueda trabaje solo con la "partición" relevante (ej. por fecha), lo que acelera enormemente las lecturas y el mantenimiento de índices.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Postgres puede manejar IA y vectores?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, absolutamente. Gracias a la extensión pgvector, Postgres se ha convertido en una de las bases de datos de vectores más populares. Permite guardar embeddings de IA y realizar ránkings por similitud de coseno directamente con SQL.'
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
          <Breadcrumbs title="SQL Moderno Avanzado" />
          
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center shadow-xl shadow-blue-200 rotate-12 border-4 border-white">
                <Database className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
               SQL Moderno: <span className="text-blue-600">PostgreSQL</span> a Nivel Maestro
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Datos</span> Relacional</span>
              <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 22 min</span>
              <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Status:</span> Revisado 2026</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none text-slate-900">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-blue-500 pl-6">
            &quot;En un mundo obsesionado con lo nuevo, el SQL sigue siendo la herramienta más potente y estable para gestionar la verdad de los datos. No se trata solo de guardar filas; se trata de diseñar la estructura misma de la realidad de tu plataforma.&quot;
          </p>

          <p className="mb-8">
            A pesar del auge de las bases de datos NoSQL, el modelo relacional y el lenguaje SQL han demostrado ser increíblemente resistentes y evolutivos. En 2026, <strong>PostgreSQL</strong> se ha consolidado como el estándar de oro de la industria debido a su extensibilidad, fiabilidad y soporte para tipos de datos modernos como JSONB y vectores. Esta guía no te enseñará solo a hacer un <code>SELECT</code>; te enseñará a convertirte en un arquitecto de datos capaz de optimizar sistemas que manejan terabytes de información con latencias de milisegundos.
          </p>

          <div className="not-prose bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black !text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-blue-400" /> Índice de Datos
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#diseño" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Diseño de Esquemas: Normalización vs Desnormalización</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#indices" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">La Ciencia de los Índices: Más allá del B-Tree</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#window" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Window Functions: Análisis de datos avanzado</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#optimizacion" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Optimización de Consultas (EXPLAIN ANALYZE)</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          <h2 id="diseño" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Layers className="w-8 h-8 text-blue-600" /> 1. Arquitectura de Datos: El Arte del Esquema
          </h2>
          <p className="mb-8">
            Un mal diseño de base de datos perseguirá a tu proyecto por siempre. En 2026, la clave no es seguir ciegamente la 3ª Forma Normal, sino entender cuándo <strong>desnormalizar por rendimiento</strong>.
          </p>
          <p className="mb-8">
            <strong>Integridad sobre Todo:</strong> Usa las <code>Foreign Keys</code> y restricciones <code>CHECK</code> con orgullo. Es infinitamente más fácil corregir la lógica en la base de datos que arreglar datos corruptos en el futuro. Además, el uso de tipos <code>ENUM</code> y <code>DOMAIN</code> personalizados te permite mover la validación de negocio al nivel más bajo y seguro posible.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 my-10 flex gap-6 items-start shadow-sm">
             <Lightbulb className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
             <div>
                <h4 className="text-lg font-black text-blue-900 mb-2 mt-0">Postgres & JSONB:</h4>
                <p className="text-blue-800 m-0 text-sm leading-relaxed">
                   En 2026 ya no necesitas una base de datos de documentos por separado para datos semi-estructurados. El tipo <code>JSONB</code> de PostgreSQL permite guardar documentos JSON, indexarlos y consultarlos con la misma velocidad que las columnas tradicionales, dándote lo mejor de ambos mundos: la rigidez del esquema y la flexibilidad de los documentos.
                </p>
             </div>
          </div>

          <h2 id="indices" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Search className="w-8 h-8 text-blue-600" /> 2. Índices: El Acelerador de Consultas
          </h2>
          <p className="mb-8">
            No tener los índices adecuados es como intentar encontrar un libro en una biblioteca con los ojos vendados. Pero el exceso de índices también es perjudicial (ralentizan las inserciones).
          </p>
          <p className="mb-8">
            PostgreSQL ofrece tipos de índices que van mucho más allá del B-Tree:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 mb-8">
            <li><strong>BRIN:</strong> Para tablas gigantescas ordenadas por tiempo.</li>
            <li><strong>GIN:</strong> Perfecto para búsquedas de texto completo o dentro de arrays/JSONB.</li>
            <li><strong>Hstore:</strong> Para pares clave-valor dinámicos.</li>
          </ul>
          <p className="mt-4 mb-8">
            Un maestro de SQL sabe que un índice parcial (<code>WHERE active = true</code>) puede ahorrar espacio y tiempo de búsqueda de forma espectacular.
          </p>

          <h2 id="window" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Binary className="w-8 h-8 text-blue-600" /> 3. Window Functions: Análisis sin Agregados
          </h2>
          <p className="mb-8">
            Las <strong>Window Functions</strong> son el superpoder secreto del SQL moderno. Permiten realizar cálculos a través de un conjunto de filas que están relacionadas con la fila actual, sin tener que usar un <code>GROUP BY</code> que colapsa los resultados.
          </p>
          <p className="mb-8">
            Funciones como <code>ROW_NUMBER()</code>, <code>RANK()</code>, y <code>LAG/LEAD</code> son vitales para generar informes financieros complejos, ránkings de usuarios o análisis temporales (ej. &quot;comparar ventas de este mes con el mes anterior&quot;) en una sola consulta elegante y performante.
          </p>
          <pre className="bg-slate-950 text-blue-300 p-6 rounded-2xl overflow-x-auto text-sm my-8 border border-slate-800">
            <code>
{`/* Ejemplo de Window Function: Crecimiento Mensual */
SELECT 
    mes, 
    ventas,
    LAG(ventas) OVER (ORDER BY mes) as ventas_mes_anterior,
    (ventas - LAG(ventas) OVER (ORDER BY mes)) / LAG(ventas) OVER (ORDER BY mes) * 100 as crecimiento
FROM ventas_mensuales;`}
            </code>
          </pre>

          <h2 id="optimizacion" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-blue-600" /> 4. El Oráculo del Rendimiento
          </h2>
          <p className="mb-8">
            Nunca asumas que una consulta es rápida solo porque funciona. En 2026, el uso de <code>EXPLAIN (ANALYZE, BUFFERS)</code> es obligatorio para cualquier desarrollador senior. 
          </p>
          <p className="mb-8">
             Saber leer un plan de ejecución te permite identificar &quot;Sequential Scans&quot; innecesarios, cuellos de botella en los &quot;Nested Loops&quot; y problemas de memoria en los &quot;Hash Joins&quot;. A menudo, una consulta que tarda 10 segundos puede reducirse a 10 milisegundos simplemente cambiando el orden de un JOIN o añadiendo un índice compuesto.
          </p>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-blue-600" /> Preguntas Frecuentes de SQL
          </h2>
          <div className="space-y-6 mt-8">
            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿SQL o un ORM (como Prisma/Hibernate)?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Los ORM son excelentes para la productividad, pero ocultar el SQL crudo puede llevar a problemas de rendimiento masivos (como el famoso N+1). Un desarrollador experto usa el ORM para las tareas simples, pero escribe SQL manual optimizado para las consultas complejas y críticas.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Cuándo debo usar Sharding o Particionado?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                El particionado nativo de Postgres es excelente cuando tus tablas superan los cientos de millones de filas. Permite que el motor de búsqueda trabaje solo con la &quot;partición&quot; relevante (ej. por fecha), lo que acelera enormemente las lecturas y el mantenimiento de índices.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Postgres puede manejar IA y vectores?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Sí, absolutamente. Gracias a la extensión <code>pgvector</code>, Postgres se ha convertido en una de las bases de datos de vectores más populares. Permite guardar embeddings de IA y realizar ránkings por similitud de coseno directamente con SQL, permitiendo integrar IA generativa sin añadir complejidad adicional a tu infraestructura.
              </p>
            </details>
          </div>

          <RelatedGuides currentSlug="sql-avanzado" />

          <div className="bg-blue-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                Tus Datos merecen el <br className="hidden md:block" /> Mejor Arquitecto
              </h2>
              <p className="text-blue-50 text-lg leading-relaxed mb-10 font-medium max-w-2xl">
                Domina el lenguaje de la verdad. SQL te permitirá construir cimientos sólidos sobre los cuales cualquier negocio puede escalar con confianza hacia el futuro.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl flex items-center gap-2">
                   Explorar Recursos <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-blue-100 text-sm font-bold">
                  <span className="flex items-center gap-1"><Database className="w-4 h-4" /> ACID Compliant</span>
                  <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> High Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
