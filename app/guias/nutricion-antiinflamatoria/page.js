import Link from 'next/link';
import { Utensils, ArrowRight, HeartPulse, Activity, ShieldPlus, Apple } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
  title: 'Nutrición Anti-inflamatoria: Guía Completa | AldiaDeTodo',
  description: 'Descubre cómo los alimentos impactan la inflamación sistémica. Aprende a diseñar una dieta que optimice tu energía y prevenga enfermedades crónicas.',
  keywords: ['salud', 'nutrición', 'longevidad', 'anti-inflamatoria', 'dieta'],
  openGraph: {
    title: 'Nutrición Anti-inflamatoria: Guía Basada en Evidencia',
    description: 'Aprende a combatir la inflamación crónica a través de tu alimentación.',
    url: 'https://aldiadetodo.com/guias/nutricion-antiinflamatoria',
    type: 'article',
  },
  alternates: { canonical: '/guias/nutricion-antiinflamatoria' },
};

export default function Guia() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Nutrición Anti-inflamatoria: Guía Completa',
    description: 'Guía sobre nutrición y reducción de la inflamación sistémica.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-05-18', dateModified: '2026-05-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/nutricion-antiinflamatoria',
  };

  return (
    <article className="min-h-screen bg-white font-inter text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="relative bg-slate-950 text-white overflow-hidden">
        <div className="container mx-auto max-w-4xl px-4 py-24 md:py-32 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-500/20">bienestar</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-outfit leading-[0.9] tracking-tight mb-8">
            Nutrición <br/><span className="text-green-400">Anti-inflamatoria</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
            La inflamación crónica es el asesino silencioso detrás de la mayoría de las enfermedades modernas. Aprende cómo tu tenedor es la mejor arma para combatirla.
          </p>
        </div>
      </header>

      <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="prose prose-lg prose-slate max-w-none">
          <section id="inflamacion" className="mb-12">
            <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><Activity className="w-7 h-7 text-green-500" /> La inflamación crónica silenciosa</h2>
            <p>Cuando te tuerces un tobillo o te cortas, la zona se pone roja, caliente e hinchada. Esa es la inflamación aguda, una respuesta inmunitaria vital y saludable que salva tu vida aislando infecciones y reparando tejidos. Sin embargo, existe otro tipo de inflamación: la sistémica y de bajo grado.</p>
            <p>La inflamación crónica ocurre cuando tu sistema inmunológico se queda "encendido" permanentemente. Como un motor revolucionado en punto muerto, comienza a dañar lentamente las células sanas, los vasos sanguíneos y los tejidos. La ciencia médica de la última década ha establecido que esta inflamación crónica es el denominador común subyacente en la obesidad, la diabetes tipo 2, las enfermedades cardiovasculares, el Alzheimer y numerosos tipos de cáncer.</p>
            <p>¿Qué causa esta alerta constante? El estrés crónico, la falta de sueño, la contaminación y el sedentarismo juegan un papel clave. Pero el desencadenante más potente y continuo al que sometemos a nuestro cuerpo es, sin duda, la comida ultraprocesada que ingerimos tres o cuatro veces al día.</p>
          </section>

          <section id="alimentos-pro" className="mb-12">
            <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><ShieldPlus className="w-7 h-7 text-green-500" /> Los agentes pro-inflamatorios</h2>
            <p>Para apagar un incendio, lo primero que debes hacer es dejar de echarle gasolina. En la dieta moderna (conocida clínicamente como Dieta Occidental), existen tres categorías principales de ingredientes que disparan marcadores inflamatorios como la Proteína C Reactiva (PCR) en tu sangre.</p>
            <p>En primer lugar están los <strong>azúcares añadidos y carbohidratos refinados</strong>. Los picos masivos de glucosa e insulina generados por harinas blancas, refrescos y dulces causan glicación (daño a las proteínas celulares) y obligan al cuerpo a liberar citoquinas inflamatorias. El azúcar no solo aporta calorías vacías, es un agresor químico para tu endotelio vascular.</p>
            <p>En segundo lugar están las <strong>grasas trans y los aceites de semillas industriales</strong> (soja, maíz, canola, girasol). Estos aceites son inestables, se oxidan fácilmente bajo calor y contienen niveles astronómicos de ácidos grasos Omega-6. Históricamente, los humanos consumíamos un ratio de Omega-6 a Omega-3 de 1:1. Hoy, debido a los ultraprocesados y frituras, ese ratio supera el 20:1, lo cual fomenta un estado biológico inflamatorio perpetuo.</p>
          </section>

          <section id="alimentos-anti" className="mb-12">
            <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><Apple className="w-7 h-7 text-green-500" /> El arsenal anti-inflamatorio</h2>
            <p>La naturaleza nos provee de compuestos bioactivos diseñados para neutralizar radicales libres y apagar los genes inflamatorios. La dieta mediterránea es el paradigma clínico más estudiado y exitoso en este ámbito.</p>
            <p>Tus mejores aliados son los ácidos grasos <strong>Omega-3 EPA y DHA</strong>, que se encuentran de forma abundante en pescados grasos (salmón salvaje, sardinas, caballa), así como en nueces y semillas de chía o lino. Estos ácidos grasos no solo no inflaman, sino que el cuerpo los utiliza para sintetizar <em>resolvinas</em>, moléculas que literalmente ordenan al sistema inmune detener la inflamación.</p>
            <p>Además, debes priorizar alimentos ricos en polifenoles y antioxidantes. Las bayas (arándanos, moras, frambuesas) son potentes escudos celulares. Las verduras crucíferas (brócoli, coliflor, coles de Bruselas) contienen sulforafano, un compuesto que desintoxica y apaga los vías inflamatorias intracelulares. Por último, las especias ancestrales como la cúrcuma (con su principio activo, la curcumina) y el jengibre tienen efectos comparables en laboratorio a fármacos antiinflamatorios como el ibuprofeno, pero sin dañar tu estómago.</p>
          </section>

          <section id="microbioma" className="mb-12">
            <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><HeartPulse className="w-7 h-7 text-green-500" /> El eje intestino-cuerpo</h2>
            <p>Aproximadamente el 70% de tu sistema inmunológico reside físicamente en tu tracto gastrointestinal. Allí convive con billones de bacterias: tu microbioma. Una pared intestinal sana y una flora bacteriana diversa son tu principal barrera contra la inflamación sistémica.</p>
            <p>Cuando consumes dietas pobres en fibra y altas en emulsionantes y azúcares, alimentas bacterias patógenas y dañas la mucosa intestinal. Esto genera "permeabilidad intestinal" (leaky gut). Toxinas microscópicas (endotoxinas o LPS) se filtran a tu torrente sanguíneo, desencadenando una respuesta inmunitaria violenta a nivel sistémico que afecta incluso a tu cerebro (neuroinflamación), causando neblina mental y fatiga.</p>
            <p>Para sanar tu intestino, debes alimentarlo con <strong>fibra prebiótica</strong> (cebolla, ajo, espárragos, plátanos verdes, legumbres) que tus bacterias fermentarán para producir ácidos grasos de cadena corta (como el butirato), los cuales son profundamente antiinflamatorios y reparan la barrera intestinal. Combina esto con probióticos naturales fermentados como el kéfir, chucrut o kombucha para un ecosistema invencible.</p>
          </section>
        </div>

        <AuthorBox category="bienestar" datePublished="2026" dateReviewed="Mayo 2026" />
      </div>
    </article>
  );
}
