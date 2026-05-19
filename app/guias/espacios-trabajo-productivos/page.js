import Link from 'next/link';
import { Monitor, ArrowRight, Sun, VolumeX, Sofa, Cpu } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
  title: 'Diseño de Espacios de Trabajo Productivos | AldiaDeTodo',
  description: 'Optimiza tu entorno físico para el trabajo profundo. Iluminación, ergonomía, acústica y psicología del color para tu home office.',
  keywords: ['productividad', 'home office', 'ergonomía', 'espacio de trabajo', 'arquitectura'],
  openGraph: {
    title: 'Diseño de Espacios de Trabajo para Productividad Extrema',
    description: 'Convierte tu home office en un motor de concentración profunda (Deep Work).',
    url: 'https://aldiadetodo.com/guias/espacios-trabajo-productivos',
    type: 'article',
  },
  alternates: { canonical: '/guias/espacios-trabajo-productivos' },
};

export default function Guia() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Diseño de Espacios de Trabajo para Productividad Extrema',
    description: 'Optimización ambiental para el trabajo.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-05-18', dateModified: '2026-05-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/espacios-trabajo-productivos',
  };

  return (
    <article className="min-h-screen bg-white font-inter text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="relative bg-slate-950 text-white overflow-hidden">
        <div className="container mx-auto max-w-4xl px-4 py-24 md:py-32 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-500/20">crecimiento</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-outfit leading-[0.9] tracking-tight mb-8">
            Espacios de Trabajo<br/><span className="text-blue-400">para Deep Work</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
            La fuerza de voluntad se agota rápidamente; el entorno persiste. Aprende a manipular la arquitectura, la acústica y la ergonomía de tu oficina en casa para que la concentración sea inevitable.
          </p>
        </div>
      </header>

      <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="prose prose-lg prose-slate max-w-none">
          <section id="entorno" className="mb-12">
            <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><Monitor className="w-7 h-7 text-blue-500" /> El Entorno como Arquitectura Cognitiva</h2>
            <p>Cometemos un grave error al pensar en la productividad únicamente en términos de software (apps de gestión del tiempo, pomodoros, to-do lists) ignorando por completo el hardware que nos rodea: la habitación física en la que nos sentamos 8 horas al día. Tu cerebro primitivo escanea constantemente tu entorno físico (iluminación, geometría visual, ruidos, comodidades) para adaptar tu estado neuroquímico. Si intentas forzar un estado de alto enfoque en un entorno biológicamente hostil o distractivo, gastarás el 50% de tu energía cognitiva simplemente resistiendo la fricción del entorno.</p>
            <p>La regla de oro del diseño ambiental para la productividad es la <strong>reducción radical de la fricción inicial</strong>. Si cada vez que te sientas a trabajar tienes que mover papeles, desenredar cables, ajustar una silla coja y buscar un bolígrafo, tu cerebro usará esas micro-fricciones como una excusa subconsciente perfecta para postergar (procrastinación). Tu estación de trabajo debe ser una "cabina de vuelo" preparada y lista: sentarte debe requerir cero fricción, y empezar la tarea debe ser la única opción lógica y evidente disponible.</p>
          </section>

          <section id="iluminacion" className="mb-12">
            <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><Sun className="w-7 h-7 text-blue-500" /> Iluminación Circadiana y Ángulos Visuales</h2>
            <p>De todos los factores ambientales, la luz es el vector más potente que influye sobre tu estado de vigilia y estado de ánimo (a través de la supresión o liberación de melatonina y cortisol). Un home office en un rincón oscuro iluminado por un foco amarillo mortecino en el techo garantiza letargo, fatiga visual y dolores de cabeza por la tarde.</p>
            <p><strong>Luz Natural Frontal:</strong> Idealmente, tu escritorio debería estar ubicado perpendicular a o frente a una ventana, nunca con la ventana directamente detrás de ti (lo cual crea un molesto contraste de silueta y deslumbra la pantalla). Si no tienes acceso a luz natural abundante, debes simularla. Invierte en bombillas LED de temperatura fría/neutra (4000K a 5000K) para las horas de la mañana y mediodía; esta longitud de onda imita la luz solar y activa biológicamente el estado de alerta.</p>
            <p><strong>Línea de visión profunda:</strong> Trabajar 8 horas frente a una pared en blanco a 30 centímetros de tu nariz causa fatiga del músculo ciliar del ojo y sensación psicológica de confinamiento. Siempre que sea posible, orienta tu escritorio para tener una "línea de visión profunda" hacia la puerta de la habitación o por una ventana. Permitir que tus ojos enfoquen un punto lejano (más de 6 metros) durante 20 segundos cada 20 minutos (la regla 20-20-20) es vital para la salud óptica y la regeneración cognitiva.</p>
          </section>

          <section id="acustica" className="mb-12">
            <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><VolumeX className="w-7 h-7 text-blue-500" /> Arquitectura Acústica del Silencio</h2>
            <p>El ruido intermitente y las conversaciones humanas ininteligibles son el veneno absoluto del trabajo profundo (Deep Work). Si trabajas en casa con familiares, mascotas, o vecinos ruidosos, necesitas un escudo acústico perimetral.</p>
            <p><strong>Audífonos de Cancelación Activa de Ruido (ANC):</strong> En la era moderna, esta no es una compra de lujo, es una herramienta de trabajo obligatoria. Audífonos de alta calidad (como Sony WH-1000XM o Apple AirPods Max) aíslan físicamente tu canal auditivo. El acto de ponértelos también sirve como una barrera psicológica pavloviana que le indica a tu cerebro: "hora de entrar al túnel de enfoque".</p>
            <p>Si la cancelación no es suficiente, emplea "ruido blanco" o "ruido marrón" continuo a volumen medio. El sonido de la lluvia fuerte, las frecuencias de ruido marrón o las listas de reproducción de música ambiental sin voces humanas (lo-fi hip hop o bandas sonoras de videojuegos ambientales) llenan el espectro auditivo y ahogan de forma efectiva las frecuencias molestas e intermitentes, permitiéndote mantener el estado de "flow" sin sobresaltos.</p>
          </section>

          <section id="ergonomia" className="mb-12">
            <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><Sofa className="w-7 h-7 text-blue-500" /> Ergonomía Radical y Movimiento</h2>
            <p>Si tu cuerpo experimenta dolor lumbar sordo o tensión en el cuello, tu cerebro desviará silenciosamente un porcentaje crítico de ancho de banda cognitivo para procesar ese dolor, reduciendo tu inteligencia operativa y paciencia. Tu postura no es una cuestión de estética, es de rendimiento puro.</p>
            <p><strong>La Silla y el Monitor:</strong> El error más común y destructivo es trabajar encorvado mirando hacia abajo a una laptop plana sobre la mesa. La parte superior de tu pantalla principal debe estar exactamente al nivel de tus ojos cuando estés sentado con la espalda recta. Esto obliga al uso de un soporte para laptop y teclado/mouse externos. Tu silla debe soportar sólidamente tu curva lumbar (baja espalda), y tus pies deben estar plantados firmemente en el suelo formando un ángulo de 90 grados en las rodillas. No ahorres dinero en la silla en la que pasas un tercio de tu vida; una buena silla ergonómica (Herman Miller, Steelcase o alternativas sólidas) es más importante que el procesador de tu computadora.</p>
            <p><strong>Postura Variable:</strong> Sentarse en la postura "perfecta" ininterrumpidamente durante 8 horas también es perjudicial. El cuerpo humano requiere variación de cargas. Si puedes acceder a un escritorio motorizado "Standing Desk" (escritorio de pie), úsalo. Alterna trabajando 45 minutos sentado y 15 a 20 minutos de pie para fomentar el retorno venoso, oxigenar el cerebro y descargar la tremenda presión continua que se ejerce sobre los discos de la columna lumbar al estar sentado.</p>
          </section>
        </div>

        <AuthorBox category="crecimiento" datePublished="2026" dateReviewed="Mayo 2026" />
      </div>
    </article>
  );
}
