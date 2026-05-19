import Link from 'next/link';
import { Brain, ArrowRight, Wind, Timer, Zap, Anchor } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
  title: 'Mindfulness para Gente Ocupada | AldiaDeTodo',
  description: 'Técnicas de atención plena que puedes aplicar en 5 minutos al día. Reduce el estrés y mejora tu enfoque sin tener que meditar por horas.',
  keywords: ['mindfulness', 'meditación', 'estrés', 'bienestar', 'salud mental'],
  openGraph: {
    title: 'Mindfulness Práctico para la Vida Diaria',
    description: 'Reduce la ansiedad en 5 minutos diarios sin tener que aislarte en un monasterio.',
    url: 'https://aldiadetodo.com/guias/mindfulness-practico',
    type: 'article',
  },
  alternates: { canonical: '/guias/mindfulness-practico' },
};

export default function Guia() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Mindfulness para Gente Ocupada',
    description: 'Técnicas de atención plena en la vida diaria.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-05-18', dateModified: '2026-05-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/mindfulness-practico',
  };

  return (
    <article className="min-h-screen bg-white font-inter text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="relative bg-slate-950 text-white overflow-hidden">
        <div className="container mx-auto max-w-4xl px-4 py-24 md:py-32 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-teal-500/20 text-teal-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-teal-500/20">bienestar</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-outfit leading-[0.9] tracking-tight mb-8">
            Mindfulness<br/><span className="text-teal-400">para Gente Ocupada</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
            No necesitas incienso, ni cruzar las piernas en forma de loto, ni una hora libre. La verdadera atención plena se practica en medio del caos del mundo moderno.
          </p>
        </div>
      </header>

      <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="prose prose-lg prose-slate max-w-none">
          <section id="mitos" className="mb-12">
            <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><Wind className="w-7 h-7 text-teal-500" /> Desmintiendo la "Mente en Blanco"</h2>
            <p>El mayor obstáculo para las personas que intentan practicar mindfulness (atención plena) y fracasan es una expectativa completamente irreal instaurada por la cultura pop: la falsa idea de que debes "poner tu mente en blanco" o detener por completo el torrente de tus pensamientos. Si intentas esto, fracasarás a los 10 segundos, te sentirás frustrado y abandonarás diciendo "la meditación no es para mí, soy muy ansioso".</p>
            <p>Tu cerebro está diseñado evolutivamente para generar pensamientos constantemente. Es su función principal. Intentar detener los pensamientos es como intentar que el corazón deje de latir. El objetivo del mindfulness no es la supresión del pensamiento, sino cambiar la <strong>relación geométrica</strong> que tienes con ellos. Se trata de dar un paso atrás y observar tus pensamientos y emociones como nubes pasando por un cielo, en lugar de creer que tú eres la tormenta.</p>
            <p>Cuando te sientas a observar tu respiración y tu mente se distrae pensando en la lista de compras (lo cual ocurrirá inevitablemente), el momento de "éxito" no es el tiempo que pasaste sin pensar. El momento mágico y transformador del mindfulness ocurre <strong>exactamente en el instante en que te das cuenta</strong> de que estabas distraído y, con suavidad y sin juzgarte, traes tu atención de vuelta al presente. Esa flexión cognitiva es la flexión de un músculo. Cada vez que te distraes y regresas, estás fortaleciendo tu corteza prefrontal.</p>
          </section>

          <section id="micro" className="mb-12">
            <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><Timer className="w-7 h-7 text-teal-500" /> Micro-meditaciones de Anclaje Rápido</h2>
            <p>Si eres un profesional ocupado, un padre o estudiante a tiempo completo, separar 45 minutos diarios para meditar es una meta destinada al fracaso por falta de tiempo. La solución neurocientífica son las micro-prácticas de alta frecuencia. Introducir "anclajes" de atención plena de apenas 2 a 3 minutos a lo largo de tu día caótico.</p>
            <p><strong>El Anclaje Sensorial (Técnica 5-4-3-2-1):</strong> Perfecta para detener un ataque de ansiedad leve o la rumiación antes de una junta importante. Detente e identifica mentalmente: 5 cosas que puedes ver a tu alrededor (texturas, colores, sombras), 4 cosas que puedes sentir físicamente (la textura de tu ropa, la silla en tu espalda), 3 cosas que puedes escuchar (el zumbido del aire acondicionado, autos a lo lejos), 2 cosas que puedes oler, y 1 cosa que puedes saborear. Esto arranca bruscamente tu cerebro de la red neuronal por defecto (rumiación sobre el pasado/futuro) y lo fuerza a procesar datos sensoriales del tiempo real.</p>
            <p><strong>Respiración de Caja (Box Breathing):</strong> Utilizada por fuerzas de operaciones especiales (Navy SEALs) para calmar el sistema nervioso simpático bajo fuego cruzado. Inhala profundamente por 4 segundos, mantén el aire en tus pulmones por 4 segundos, exhala lentamente por 4 segundos, y mantén tus pulmones vacíos por 4 segundos. Repite este ciclo cuadrado durante 2 minutos. La alteración del ritmo de CO2 en sangre le enviará una señal química inmediata a tu nervio vago de que "estás a salvo", reduciendo radicalmente los picos de cortisol y la taquicardia.</p>
          </section>

          <section id="trabajo" className="mb-12">
            <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><Zap className="w-7 h-7 text-teal-500" /> Integración Asimétrica en el Entorno Laboral</h2>
            <p>El mindfulness más efectivo no ocurre en un cojín de meditación, sino en los espacios liminales (tiempos de transición) de tu vida ordinaria. Puedes transformar acciones robóticas e inconscientes en ejercicios profundos de presencia sin añadir un solo minuto extra a tu horario.</p>
            <p><strong>Mindfulness en la Ducha:</strong> La mayoría de nosotros usamos el tiempo de la ducha matutina para planificar discusiones imaginarias con nuestro jefe o estresarnos por la agenda del día. Mañana, comprométete a sentir solo el agua. Observa la temperatura, el sonido del agua golpeando los azulejos, el olor del jabón. Si tu mente viaja a la oficina, tráela de vuelta a la sensación física del agua. Es un reseteo mental impecable para empezar el día.</p>
            <p><strong>El Semáforo Rojo o la Espera:</strong> En la vida moderna odiamos esperar y sacamos el teléfono instantáneamente al primer segundo de aburrimiento. Usa los semáforos en rojo, la espera del ascensor o la fila del supermercado como tus "campanas de mindfulness". En lugar de hacer scroll, usa esos 45 segundos libres obligados para tomar tres respiraciones profundas y escanear la tensión en tus hombros y mandíbula, soltándola conscientemente. Has convertido una fuente de frustración urbana en un gatillo automático de paz mental.</p>
          </section>

          <section id="rutina" className="mb-12">
            <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><Anchor className="w-7 h-7 text-teal-500" /> El Arte de la Consistencia Imperfecta</h2>
            <p>Es preferible meditar mal y con muchas distracciones durante 5 minutos todos los días de la semana, que tener una sesión "perfecta" y profunda de 40 minutos una sola vez al mes. La neuroplasticidad (la capacidad de tu cerebro de recablear sus conexiones estructurales para ser más resiliente al estrés) depende estrictamente de la repetición constante y rítmica, no de la intensidad esporádica.</p>
            <p>Vincula tu micro-práctica a un hábito que ya esté incrustado como una roca en tu rutina de la mañana. Por ejemplo: "Después de encender la cafetera, me sentaré en la silla de la cocina, sin mirar el celular, y seguiré mis inhalaciones hasta que escuche que el café está listo". Esa simple ancla de 4 minutos diarios, acumulada durante meses, te otorgará un "amortiguador" entre un estímulo externo (un correo agresivo o una mala noticia) y tu reacción automática. Ese pequeño espacio de 2 segundos que ganarás entre el estímulo y tu reacción emocional, es el lugar exacto donde reside tu libertad y tu paz interior.</p>
          </section>
        </div>

        <AuthorBox category="bienestar" datePublished="2026" dateReviewed="Mayo 2026" />
      </div>
    </article>
  );
}
