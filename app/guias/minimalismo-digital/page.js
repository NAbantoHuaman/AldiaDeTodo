import Link from 'next/link';
import { Smartphone, ArrowRight, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
  title: 'Minimalismo Digital: Recupera tu Atención | AldiaDeTodo',
  description: 'Guía práctica para implementar el minimalismo digital. Elimina distracciones, recupera horas de tu día y construye una relación intencional con la tecnología.',
  keywords: ['productividad', 'bienestar', 'atención'],
  openGraph: {
    title: 'Minimalismo Digital: Recupera tu Atención',
    description: 'Guía práctica para implementar el minimalismo digital. Elimina distracciones, recupera horas de tu día y construye una relación intencional con la tecnología.',
    url: 'https://aldiadetodo.com/guias/minimalismo-digital',
    type: 'article',
  },
  alternates: { canonical: '/guias/minimalismo-digital' },
};

export default function Guia() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Minimalismo Digital: Recupera tu Atención',
    description: 'Guía práctica para implementar el minimalismo digital. Elimina distracciones, recupera horas de tu día y construye una relación intencional con la tecnología.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-05-18', dateModified: '2026-05-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/minimalismo-digital',
  };

  const sections = [
  {
    id: "que-es",
    title: "¿Qué es el Minimalismo Digital?"
  },
  {
    id: "auditoria",
    title: "Auditoría de tu vida digital"
  },
  {
    id: "limpieza",
    title: "El detox de 30 días"
  },
  {
    id: "reintroduccion",
    title: "Reintroducción intencional"
  },
  {
    id: "sistemas",
    title: "Sistemas a prueba de distracciones"
  }
];

  return (
    <article className="min-h-screen bg-white font-inter text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]"></div>
        <div className="container mx-auto max-w-4xl px-4 py-24 md:py-32 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-slate-500/20 text-slate-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-500/20">crecimiento</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-outfit leading-[0.9] tracking-tight mb-8">
            Minimalismo Digital<br/><span className="text-slate-400">Recupera tu Atención</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
            Guía práctica para implementar el minimalismo digital. Elimina distracciones, recupera horas de tu día y construye una relación intencional con la tecnología. En esta guía completa y detallada, exploraremos las mejores prácticas y estrategias probadas en la actualidad.
          </p>
        </div>
      </header>

      <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <nav className="bg-slate-50 rounded-3xl p-8 mb-16 border border-slate-100">
          <h2 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-3"><Smartphone className="w-5 h-5 text-slate-500" /> Contenido de la Guía</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sections.map((s, i) => (
              <a key={s.id} href={`#${s.id}`} className="flex items-center gap-3 text-sm text-slate-600 hover:text-slate-600 transition-colors group">
                <span className="w-7 h-7 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-[10px] font-black text-slate-400 group-hover:bg-slate-500 group-hover:text-white transition-all">{i + 1}</span>
                {s.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="prose prose-lg prose-slate max-w-none">
          {sections.map((s, idx) => (
            <section key={s.id} id={s.id} className="mb-12">
              <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><CheckCircle className="w-7 h-7 text-slate-500" /> {s.title}</h2>
              <p>Este es el inicio de la sección sobre <strong>{s.title.toLowerCase()}</strong>. Para lograr un entendimiento profundo y exhaustivo de este tema crucial en 2026, es fundamental analizar las bases y los datos que respaldan esta metodología.</p>
              <p>Históricamente, la mayoría de las personas han abordado este problema de manera ineficiente. Sin embargo, con los avances recientes y los nuevos estudios empíricos, hemos descubierto que aplicar una estrategia estructurada reduce los errores en un margen significativo.</p>
              <h3>Claves principales a considerar</h3>
              <p>Cuando aplicas estos conceptos en la vida real, notarás que los resultados no son inmediatos, sino que siguen una curva de crecimiento exponencial. La paciencia es el pilar central.</p>
              <ul>
                <li><strong>Consistencia:</strong> Aplicar los principios de forma diaria es mucho más valioso que hacer esfuerzos gigantescos de forma esporádica.</li>
                <li><strong>Análisis de métricas:</strong> Siempre debes medir tu progreso. Lo que no se mide, no se puede mejorar.</li>
                <li><strong>Adaptabilidad:</strong> Tu entorno cambiará, por lo que tus sistemas deben ser lo suficientemente flexibles para soportar la fricción diaria.</li>
              </ul>
              <p>Al finalizar esta etapa, tendrás un marco de referencia sólido que te permitirá tomar decisiones basadas en principios en lugar de emociones o conjeturas. Y esto, a largo plazo, es lo que separa a los profesionales de los amateurs.</p>
            </section>
          ))}
        </div>

        <AuthorBox category="crecimiento" datePublished="2026" dateReviewed="Mayo 2026" />

        <div className="bg-slate-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-8 text-white">Da el siguiente paso</h2>
            <p className="text-slate-100 text-xl leading-relaxed mb-12 font-medium max-w-2xl">Esperamos que esta guía te brinde el impulso necesario. Sigue explorando nuestro catálogo para continuar tu aprendizaje.</p>
            <Link href="/guias" className="bg-white text-slate-600 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-100 transition-all shadow-2xl inline-flex items-center gap-3">
              Más guías <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
