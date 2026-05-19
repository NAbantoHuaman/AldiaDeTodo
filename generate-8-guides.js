const fs = require('fs');
const path = require('path');

const guides = [
  {
    slug: 'minimalismo-digital',
    title: 'Minimalismo Digital: Recupera tu Atención',
    description: 'Guía práctica para implementar el minimalismo digital. Elimina distracciones, recupera horas de tu día y construye una relación intencional con la tecnología.',
    category: 'crecimiento',
    icon: 'Smartphone',
    color: 'slate',
    colorName: 'slate',
    image: '/images/guias/minimalismo.png',
    readTime: '15 min',
    tags: ['Productividad', 'Bienestar', 'Atención'],
    sections: [
      { id: 'que-es', title: '¿Qué es el Minimalismo Digital?' },
      { id: 'auditoria', title: 'Auditoría de tu vida digital' },
      { id: 'limpieza', title: 'El detox de 30 días' },
      { id: 'reintroduccion', title: 'Reintroducción intencional' },
      { id: 'sistemas', title: 'Sistemas a prueba de distracciones' }
    ]
  },
  {
    slug: 'nutricion-antiinflamatoria',
    title: 'Nutrición Anti-inflamatoria: Guía Basada en Evidencia',
    description: 'Descubre cómo los alimentos impactan la inflamación sistémica. Aprende a diseñar una dieta que optimice tu energía y prevenga enfermedades crónicas.',
    category: 'bienestar',
    icon: 'Utensils',
    color: 'green',
    colorName: 'green',
    image: '/images/guias/nutricion2.png',
    readTime: '18 min',
    tags: ['Salud', 'Nutrición', 'Longevidad'],
    sections: [
      { id: 'inflamacion', title: 'La inflamación crónica silenciosa' },
      { id: 'alimentos-pro', title: 'Alimentos pro-inflamatorios' },
      { id: 'alimentos-anti', title: 'Súper alimentos anti-inflamatorios' },
      { id: 'microbioma', title: 'El rol del microbioma intestinal' },
      { id: 'plan', title: 'Tu plan de alimentación semanal' }
    ]
  },
  {
    slug: 'negociacion-salarial',
    title: 'Negociación Salarial: Cómo Cobrar lo que Vales',
    description: 'Estrategias probadas para negociar tu salario, aumentos y beneficios. Supera el síndrome del impostor y usa datos para respaldar tu valor.',
    category: 'finanzas',
    icon: 'Briefcase',
    color: 'emerald',
    colorName: 'emerald',
    image: '/images/guias/negociacion.png',
    readTime: '22 min',
    tags: ['Carrera', 'Dinero', 'Negociación'],
    sections: [
      { id: 'mindset', title: 'El mindset del negociador' },
      { id: 'investigacion', title: 'Investigación de mercado salarial' },
      { id: 'timing', title: 'El momento perfecto para pedir' },
      { id: 'guiones', title: 'Guiones exactos qué decir' },
      { id: 'beneficios', title: 'Negociando más allá del dinero' }
    ]
  },
  {
    slug: 'ia-para-creativos',
    title: 'Inteligencia Artificial para Creativos y Diseñadores',
    description: 'Cómo integrar herramientas generativas en tu flujo de trabajo creativo sin perder tu estilo único. De Midjourney a la automatización de tareas.',
    category: 'tecnologia',
    icon: 'Sparkles',
    color: 'violet',
    colorName: 'violet',
    image: '/images/guias/ia-creativa.png',
    readTime: '25 min',
    tags: ['IA', 'Diseño', 'Creatividad'],
    sections: [
      { id: 'revolucion', title: 'La revolución creativa de la IA' },
      { id: 'herramientas', title: 'Stack de herramientas esenciales' },
      { id: 'flujos', title: 'Flujos de trabajo híbridos' },
      { id: 'derechos', title: 'Derechos de autor y ética' },
      { id: 'futuro', title: 'El futuro del rol creativo' }
    ]
  },
  {
    slug: 'mindfulness-practico',
    title: 'Mindfulness para Gente Ocupada',
    description: 'Técnicas de atención plena que puedes aplicar en 5 minutos al día. Reduce el estrés y mejora tu enfoque sin tener que meditar por horas.',
    category: 'bienestar',
    icon: 'Brain',
    color: 'teal',
    colorName: 'teal',
    image: '/images/guias/mindfulness.png',
    readTime: '16 min',
    tags: ['Mindfulness', 'Estrés', 'Salud Mental'],
    sections: [
      { id: 'mitos', title: 'Desmintiendo el mindfulness' },
      { id: 'ciencia', title: 'La neurociencia de la atención' },
      { id: 'micro', title: 'Micro-meditaciones de 2 minutos' },
      { id: 'trabajo', title: 'Mindfulness en la oficina' },
      { id: 'rutina', title: 'Construyendo el hábito diario' }
    ]
  },
  {
    slug: 'espacios-trabajo-productivos',
    title: 'Diseño de Espacios de Trabajo para Productividad Extrema',
    description: 'Optimiza tu entorno físico para el trabajo profundo. Iluminación, ergonomía, acústica y psicología del color para tu home office.',
    category: 'crecimiento',
    icon: 'Monitor',
    color: 'blue',
    colorName: 'blue',
    image: '/images/guias/workspace.png',
    readTime: '20 min',
    tags: ['Productividad', 'Home Office', 'Ergonomía'],
    sections: [
      { id: 'entorno', title: 'Cómo tu entorno moldea tu mente' },
      { id: 'ergonomia', title: 'Ergonomía y salud postural' },
      { id: 'iluminacion', title: 'Iluminación circadiana' },
      { id: 'acustica', title: 'Gestión del ruido y acústica' },
      { id: 'minimalismo', title: 'Organización física y visual' }
    ]
  },
  {
    slug: 'privacidad-redes-sociales',
    title: 'Privacidad en Redes Sociales en 2026',
    description: 'Audita y protege tus perfiles sociales. Descubre qué datos están recolectando sobre ti y cómo limitar tu exposición digital.',
    category: 'tecnologia',
    icon: 'EyeOff',
    color: 'red',
    colorName: 'red',
    image: '/images/guias/privacidad-social.png',
    readTime: '18 min',
    tags: ['Seguridad', 'Privacidad', 'Redes Sociales'],
    sections: [
      { id: 'economia', title: 'La economía de tus datos' },
      { id: 'auditoria', title: 'Auditoría de tu huella digital' },
      { id: 'configuracion', title: 'Configuraciones críticas por red' },
      { id: 'compartir', title: 'Qué NO compartir nunca' },
      { id: 'limpieza', title: 'Limpiando el pasado digital' }
    ]
  },
  {
    slug: 'impuestos-freelance',
    title: 'Gestión de Impuestos para Freelancers',
    description: 'Deja de perder dinero en impuestos. Guía completa para profesionales independientes sobre deducciones, facturación y organización fiscal.',
    category: 'finanzas',
    icon: 'Calculator',
    color: 'orange',
    colorName: 'orange',
    image: '/images/guias/impuestos.png',
    readTime: '24 min',
    tags: ['Impuestos', 'Finanzas', 'Freelance'],
    sections: [
      { id: 'terror', title: 'Venciendo el terror fiscal' },
      { id: 'estructura', title: 'Estructuras legales para independientes' },
      { id: 'deducciones', title: 'Maximizando tus deducciones' },
      { id: 'registro', title: 'Sistemas de registro impecables' },
      { id: 'calendario', title: 'Tu calendario fiscal anual' }
    ]
  }
];

// 1. Generate the Page Files
const guiasDir = path.join(__dirname, 'app', 'guias');
if (!fs.existsSync(guiasDir)) fs.mkdirSync(guiasDir, { recursive: true });

guides.forEach(g => {
  const guideDir = path.join(guiasDir, g.slug);
  if (!fs.existsSync(guideDir)) fs.mkdirSync(guideDir, { recursive: true });

  const content = `import Link from 'next/link';
import { ${g.icon}, ArrowRight, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
  title: '${g.title} | AldiaDeTodo',
  description: '${g.description}',
  keywords: ['${g.tags.join("', '").toLowerCase()}'],
  openGraph: {
    title: '${g.title}',
    description: '${g.description}',
    url: 'https://aldiadetodo.com/guias/${g.slug}',
    type: 'article',
  },
  alternates: { canonical: '/guias/${g.slug}' },
};

export default function Guia() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: '${g.title}',
    description: '${g.description}',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-05-18', dateModified: '2026-05-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/${g.slug}',
  };

  const sections = ${JSON.stringify(g.sections, null, 2).replace(/"([^"]+)":/g, '$1:')};

  return (
    <article className="min-h-screen bg-white font-inter text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]"></div>
        <div className="container mx-auto max-w-4xl px-4 py-24 md:py-32 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-${g.color}-500/20 text-${g.color}-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-${g.color}-500/20">${g.category}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-outfit leading-[0.9] tracking-tight mb-8">
            ${g.title.split(':')[0]}<br/><span className="text-${g.color}-400">${g.title.split(':')[1] ? g.title.split(':')[1].trim() : ''}</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
            ${g.description} En esta guía completa y detallada, exploraremos las mejores prácticas y estrategias probadas en la actualidad.
          </p>
        </div>
      </header>

      <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <nav className="bg-slate-50 rounded-3xl p-8 mb-16 border border-slate-100">
          <h2 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-3"><${g.icon} className="w-5 h-5 text-${g.color}-500" /> Contenido de la Guía</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sections.map((s, i) => (
              <a key={s.id} href={\`#\${s.id}\`} className="flex items-center gap-3 text-sm text-slate-600 hover:text-${g.color}-600 transition-colors group">
                <span className="w-7 h-7 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-[10px] font-black text-slate-400 group-hover:bg-${g.color}-500 group-hover:text-white transition-all">{i + 1}</span>
                {s.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="prose prose-lg prose-slate max-w-none">
          {sections.map((s, idx) => (
            <section key={s.id} id={s.id} className="mb-12">
              <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><CheckCircle className="w-7 h-7 text-${g.color}-500" /> {s.title}</h2>
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

        <AuthorBox category="${g.category}" datePublished="2026" dateReviewed="Mayo 2026" />

        <div className="bg-${g.color}-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-8 text-white">Da el siguiente paso</h2>
            <p className="text-${g.color}-100 text-xl leading-relaxed mb-12 font-medium max-w-2xl">Esperamos que esta guía te brinde el impulso necesario. Sigue explorando nuestro catálogo para continuar tu aprendizaje.</p>
            <Link href="/guias" className="bg-white text-${g.color}-600 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-${g.color}-100 transition-all shadow-2xl inline-flex items-center gap-3">
              Más guías <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
`;
  fs.writeFileSync(path.join(guideDir, 'page.js'), content);
});

console.log('8 new guides generated.');
