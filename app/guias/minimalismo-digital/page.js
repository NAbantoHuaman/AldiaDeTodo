import Link from 'next/link';
import { Smartphone, ArrowRight, CheckCircle, Brain, Shield, Clock } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
  title: 'Minimalismo Digital: Recupera tu Atención | AldiaDeTodo',
  description: 'Guía práctica para implementar el minimalismo digital. Elimina distracciones, recupera horas de tu día y construye una relación intencional con la tecnología.',
  keywords: ['productividad', 'bienestar', 'atención', 'minimalismo digital'],
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
    description: 'Guía práctica para implementar el minimalismo digital.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-05-18', dateModified: '2026-05-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/minimalismo-digital',
  };

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
            En un mundo diseñado para secuestrar tu atención, el minimalismo digital no es un rechazo a la tecnología, sino una filosofía de uso intencional. Recupera tu tiempo y claridad mental.
          </p>
        </div>
      </header>

      <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="prose prose-lg prose-slate max-w-none">
          <section id="que-es" className="mb-12">
            <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><Brain className="w-7 h-7 text-slate-500" /> ¿Qué es el Minimalismo Digital?</h2>
            <p>Acuñado por el autor Cal Newport, el minimalismo digital es una filosofía de uso tecnológico en la cual enfocas tu tiempo en línea en un número pequeño y cuidadosamente seleccionado de actividades óptimas que apoyan fuertemente las cosas que valoras, y felizmente te pierdes de todo lo demás.</p>
            <p>No se trata de tirar tu smartphone a la basura o mudarte a una cabaña en el bosque. Se trata de pasar de ser un consumidor pasivo, manipulado por algoritmos diseñados para la adicción, a ser un usuario activo y soberano de tus herramientas digitales. El objetivo es que la tecnología trabaje para ti, no que tú trabajes para la tecnología proporcionando tu atención como producto.</p>
            <p>La economía de la atención gasta miles de millones de dólares al año empleando a los mejores ingenieros y psicólogos del comportamiento para mantener tus ojos en la pantalla. Frente a esta asimetría de poder, los "tips" y "trucos" (como desactivar las notificaciones) son insuficientes. Necesitas una filosofía robusta de resistencia.</p>
          </section>

          <section id="auditoria" className="mb-12">
            <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><CheckCircle className="w-7 h-7 text-slate-500" /> Auditoría de tu vida digital</h2>
            <p>El primer paso práctico es entender exactamente dónde estás perdiendo tu tiempo. La mayoría de las personas subestiman masivamente su tiempo en pantalla. Los datos revelan que el adulto promedio en 2026 pasa más de 6.5 horas diarias interactuando con pantallas fuera de sus obligaciones laborales estrictas.</p>
            <p>Para realizar una auditoría honesta, activa la función de "Tiempo en Pantalla" (iOS) o "Bienestar Digital" (Android) y obsérvate durante una semana sin juzgarte ni intentar cambiar tu comportamiento. Anota los picos de uso. ¿Cuándo abres las redes sociales? Generalmente es en momentos de aburrimiento leve, ansiedad o transición (esperando en una fila, en el baño, en el transporte).</p>
            <p>Identifica las aplicaciones que son "tecnologías opcionales". Si tu trabajo requiere usar WhatsApp, eso no es opcional. Pero TikTok, Instagram, Twitter y los videojuegos móviles son tecnologías opcionales. El minimalismo digital se enfoca en someter estas tecnologías opcionales a un escrutinio riguroso.</p>
          </section>

          <section id="limpieza" className="mb-12">
            <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><Shield className="w-7 h-7 text-slate-500" /> El detox de 30 días</h2>
            <p>La estrategia central del minimalismo digital es el "declutter" o la limpieza digital de 30 días. No puedes hacer cambios sutiles y esperar resultados radicales. Necesitas un reseteo de tu sistema de dopamina. Durante 30 días, eliminarás absolutamente todas las tecnologías opcionales de tu vida.</p>
            <p>Desinstala las redes sociales de tu teléfono (puedes usarlas en el navegador de tu PC si es de vida o muerte). Elimina las aplicaciones de noticias y entretenimiento infinito. Este mes será incómodo al principio. Sentirás el impulso fantasma de agarrar tu teléfono docenas de veces al día solo para encontrar una pantalla vacía. Ese es el síndrome de abstinencia de la dopamina, y es la prueba empírica de que necesitabas este detox.</p>
            <p>El propósito de estos 30 días no es solo el sufrimiento estoico, sino la <strong>exploración activa</strong>. Usa este tiempo recuperado (literalmente docenas de horas a la semana) para reconectar con actividades de alto valor en el mundo físico: lee libros enteros, aprende un instrumento, practica un deporte, repara cosas en casa o ten conversaciones en persona sin mirar una pantalla.</p>
          </section>

          <section id="reintroduccion" className="mb-12">
            <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><Clock className="w-7 h-7 text-slate-500" /> Reintroducción intencional</h2>
            <p>Después de los 30 días, tu cerebro estará re-calibrado. Ahora viene el paso crítico: la reintroducción. No vuelvas a instalar todo. Por cada herramienta tecnológica opcional que consideres traer de vuelta a tu vida, debes hacerle pasar una prueba brutal. Pregúntate:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>¿Esta herramienta apoya directamente algo que valoro profundamente?</li>
              <li>¿Es esta herramienta la <em>mejor</em> forma de apoyar este valor?</li>
              <li>¿Cómo y cuándo exactamente voy a usar esta herramienta para maximizar su valor y minimizar sus daños?</li>
            </ul>
            <p>Por ejemplo, si valoras "mantener el contacto con familiares lejanos", Facebook apoya ese valor. ¿Pero es la mejor forma? No. Una videollamada semanal o un grupo de chat familiar exclusivo es superior y menos propenso a la distracción algorítmica.</p>
          </section>
        </div>

        <AuthorBox category="crecimiento" datePublished="2026" dateReviewed="Mayo 2026" />

        <div className="bg-slate-900 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden">
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-8 text-white">Domina tu tecnología</h2>
            <p className="text-slate-300 text-xl leading-relaxed mb-12 font-medium max-w-2xl">Descubre más estrategias para proteger tu tiempo y enfoque en nuestras otras guías de productividad.</p>
            <Link href="/guias" className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-200 transition-all inline-flex items-center gap-3">
              Ver todas las guías <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
