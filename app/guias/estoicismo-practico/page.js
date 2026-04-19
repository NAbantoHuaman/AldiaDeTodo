import Link from 'next/link';
import { Anchor, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Zap, Globe, Layers, Shield } from 'lucide-react';

export const metadata = {
  title: "Estoicismo Práctico: Resiliencia y Enfoque en la Era Digital en 2026",
  description: "Guía completa sobre la filosofía estoica aplicada al siglo XXI. Aprende técnicas de Marco Aurelio, Séneca y Epicteto para mantener la calma, el enfoque y la fuerza mental.",
  openGraph: {
    title: "Estoicismo Práctico: Resiliencia y Enfoque en la Era Digital en 2026",
    description: "Domina tu mente, no el mundo. La guía definitiva para aplicar la sabiduría milenaria estoica a los retos de la tecnología y el estrés moderno.",
    url: "https://aldiadetodo.com/guias/estoicismo-practico",
    type: "article",
    images: [{ url: '/images/guias/estoicismo.png' }]
  },
  alternates: { canonical: '/guias/estoicismo-practico' },
};

export default function GuiaEstoicismo() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Estoicismo Práctico: Resiliencia y Enfoque en la Era Digital en 2026',
    description: 'Manual profundo sobre la filosofía estoica, enfocada en la gestión emocional, la productividad consciente y la fortaleza mental frente a la incertidumbre moderna.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/estoicismo-practico',
  };

  return (
    <article className="min-h-screen bg-white font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-stone-50 to-white py-24 border-b border-stone-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-stone-600 hover:text-stone-800 mb-10 transition-colors bg-white px-4 py-2 rounded-full shadow-sm">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-stone-800 rounded-3xl flex items-center justify-center shadow-xl shadow-stone-200 rotate-6 border-4 border-white">
              <Anchor className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Estoicismo: Tu Fortalece <span className="text-stone-600">Interna</span> en un mundo Caótico
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Tema:</span> Filosofía</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 24 min</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Meta:</span> Resiliencia</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-stone-500 pl-6">
            &quot;No es que tengamos poco tiempo, es que perdemos mucho. El estoicismo no trata de ser una estatua fría e insensible, sino de aprender a distinguir lo que podemos controlar de lo que no, para invertir nuestra energía allí donde realmente importa.&quot;
          </p>

          <p className="mb-8">
            Hace dos mil años, en el corazón de Roma y Grecia, hombres como el emperador Marco Aurelio, el ex-esclavo Epicteto y el consejero Séneca desarrollaron una caja de herramientas psicológicas para enfrentar el caos, la enfermedad y la incertidumbre. En 2026, atrapados entre las notificaciones constantes, la ansiedad por el futuro y la sobrecarga de información, el <strong>Estoicismo</strong> ha renacido no como una reliquia del pasado, sino como el sistema operativo mental definitivo para el ciudadano global. Esta guía te enseñará a aplicar estos principios milenarios para construir una vida de serenidad, propósito y fuerza invulnerable.
          </p>

          <div className="not-prose bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black !text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-stone-400" /> El Camino de la Virtud
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-stone-500/20 text-stone-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#control" className="text-slate-200 no-underline font-bold group-hover:text-stone-400 transition-colors">La Dicotomía del Control: El primer paso</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-stone-500/20 text-stone-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#practicas" className="text-slate-200 no-underline font-bold group-hover:text-stone-400 transition-colors">Premeditatio Malorum y Amor Fati: Amando el destino</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-stone-500/20 text-stone-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#virtudes" className="text-slate-200 no-underline font-bold group-hover:text-stone-400 transition-colors">Las 4 Virtudes Cardinales: Sabiduría, Justicia, Coraje y Templanza</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-stone-500/20 text-stone-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#digital" className="text-slate-200 no-underline font-bold group-hover:text-stone-400 transition-colors">Estoicismo Digital: Navegando la Web con Calma</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-stone-500/20 text-stone-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-stone-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          <h2 id="control" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Shield className="w-8 h-8 text-stone-600" /> 1. La Dicotomía del Control
          </h2>
          <p>
            Esta es la base fundamental del estoicismo. Epicteto lo dijo claramente: &quot;Hay cosas que dependen de nosotros y cosas que no&quot;. 
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 text-sm">
            <li><strong>En tu control:</strong> Tus juicios, tus intenciones, tus deseos y tus acciones.</li>
            <li><strong>Fuera de tu control:</strong> El clima, el tráfico, la opinión de los demás, el pasado y gran parte de los resultados finales.</li>
          </ul>
          <p className="mt-4">
            Sufrimos no por las cosas que nos pasan, sino por nuestro juicio sobre ellas. Cuando dejas de intentar controlar lo incontrolable, liberas una cantidad inmensa de energía mental para enfocarte exclusivamente en lo que sí puedes cambiar: tu propia actitud.
          </p>
          <div className="bg-stone-50 border border-stone-100 rounded-3xl p-8 my-10 flex gap-6 items-start shadow-sm">
             <Lightbulb className="w-8 h-8 text-stone-500 flex-shrink-0 mt-1" />
             <div>
                <h4 className="text-lg font-black text-stone-900 mb-2 mt-0">Eudaimonia:</h4>
                <p className="text-stone-800 m-0 text-sm leading-relaxed">
                  Para los estoicos, la felicidad no es un placer momentáneo, sino la floración del alma (Eudaimonia). Se alcanza viviendo en acuerdo con la naturaleza y la razón, cumpliendo nuestro propósito como seres sociales y racionales.
                </p>
             </div>
          </div>

          <h2 id="practicas" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-stone-600" /> 2. Ejercicios Mentales: El Gimnasio del Alma
          </h2>
          <p>
            El estoicismo no se lee, se practica. Aquí tienes dos de las técnicas más potentes para la resiliencia:
          </p>
          <ul className="space-y-4 m-0 p-0 list-none mb-12">
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-stone-900">Premeditatio Malorum:</span> Visualizar negativamente los posibles problemas antes de que ocurran. No para ser pesimista, sino para estar preparado. Si lo has ensayado mentalmente, el golpe de la realidad no te derribará.
            </li>
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-stone-900">Amor Fati:</span> Amar el destino. No solo aceptar lo que sucede, sino desear que suceda exactamente como lo hace, entendiéndolo como el material necesario para forjar tu carácter.
            </li>
          </ul>

          <h2 id="virtudes" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Anchor className="w-8 h-8 text-stone-600" /> 3. Las 4 Virtudes Cardinales
          </h2>
          <p>
            Vivir virtuosamente es vivir con excelencia. El estoicismo se rige por cuatro brújulas:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Sabiduría (Phronesis):</strong> Saber distinguir lo que es bueno, malo e indiferente. Ver las cosas como realmente son.</li>
            <li><strong>Justicia (Dikaiosyne):</strong> Tratar a los demás con equidad y cumplir con nuestro deber hacia la sociedad.</li>
            <li><strong>Coraje (Andreia):</strong> No la ausencia de miedo, sino la capacidad de actuar con integridad a pesar de él.</li>
            <li><strong>Templanza (Sophrosyne):</strong> Autocontrol y moderación. Saber decir &quot;no&quot; a los impulsos destructivos.</li>
          </ul>
          <div className="bg-slate-900 text-white rounded-[32px] p-8 my-10 border border-slate-800 shadow-xl overflow-hidden relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-stone-500/20 rounded-full blur-3xl"></div>
             <p className="text-stone-300 m-0 italic leading-relaxed text-sm">
                &quot;Si algo es humanamente posible, considérate capaz de hacerlo. El obstáculo es el camino.&quot; — Marco Aurelio.
             </p>
          </div>

          <h2 id="digital" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Globe className="w-8 h-8 text-stone-600" /> 4. Estoicismo en la Era Digital
          </h2>
          <p>
             En 2026, el mayor reto es la atención. Un estoico digital practica:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Ayuno de Dopamina:</strong> Desconexión voluntaria de las redes sociales para recuperar el foco.</li>
            <li><strong>FOMO (Fear Of Missing Out):</strong> Entender que no necesitas saberlo todo ni estar en todas partes para tener una vida plena.</li>
            <li><strong>Respuesta No Reaccionaria:</strong> Aprender a dejar un espacio entre un estímulo (un mensaje agresivo, una noticia mala) y tu respuesta. En ese espacio reside tu libertad.</li>
          </ul>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-stone-600" /> Preguntas Frecuentes
          </h2>
          <div className="space-y-6 mt-8">
            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Ser estoico significa no tener sentimientos?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Absolutamente no. Los estoicos sienten alegría, amor y pena como cualquier humano. La diferencia es que no se dejan esclavizar por las &quot;pasiones negativas&quot; (miedo, odio, ira). Buscan la serenidad (Ataraxia), no la insensibilidad.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Es compatible el estoicismo con la ambición?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Sí. De hecho, el estoicismo te hace más efectivo en tus metas. Sin embargo, un estoico ambicioso se desapega del resultado final (que no controla totalmente) y se enfoca en la excelencia del proceso (que sí controla). Es la ambición sin ansiedad.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Qué libro debo leer primero?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Las <strong>Meditaciones</strong> de Marco Aurelio son el punto de partida clásico. También las <strong>Cartas a Lucilio</strong> de Séneca ofrecen consejos increíblemente vigentes para la vida cotidiana.
              </p>
            </details>
          </div>

          <div className="bg-stone-800 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                Forja una Mente <br className="hidden md:block" /> Inquebrantable
              </h2>
              <p className="text-stone-300 text-lg leading-relaxed mb-10 font-medium max-w-2xl">
                No puedes controlar las tormentas de la vida, pero puedes aprender a navegar con maestría. Empieza hoy tu camino hacia una vida de mayor serenidad, enfoque y propósito. La verdadera libertad empieza dentro de ti.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-stone-900 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-stone-100 transition-all shadow-xl flex items-center gap-2">
                   Ver más Guías <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-stone-400 text-sm font-bold">
                  <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> Strong Focus</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Ancient Wisdom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
