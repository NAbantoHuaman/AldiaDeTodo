import Link from 'next/link';
import { Heart, ChevronLeft, BookOpen, CheckCircle, Shield, Wind, Eye, Smile, Moon, Zap, Brain, HelpCircle, ArrowRight, Users, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: "Guía de Bienestar Mental: Estrategias para una Mente Resiliente",
  description: "Descubre herramientas basadas en la neurociencia para manejar el estrés, mejorar tu enfoque y cultivar la paz mental en un mundo hiperconectado. De la desintoxicación de dopamina a la higiene del sueño.",
  openGraph: {
    title: "Guía de Bienestar Mental: Estrategias para una Mente Resiliente",
    description: "Herramientas prácticas para cultivar una mente sana y resistente en 2026.",
    url: "https://aldiadetodo.com/guias/bienestar-mental",
    type: "article",
    images: [{ url: '/images/guias/bienestar.png' }]
  },
  alternates: { canonical: '/guias/bienestar-mental' },
};

export default function GuiaBienestar() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Guía de Bienestar Mental: Estrategias para una Mente Resiliente',
    description: 'Manual profundo sobre salud mental, neurociencia del bienestar y gestión del estrés.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/bienestar-mental',
  };

  return (
    <article className="min-h-screen bg-white font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-rose-50 to-white py-24 border-b border-rose-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-rose-700 hover:text-rose-900 mb-10 transition-colors bg-white px-4 py-2 rounded-full shadow-sm">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-rose-500 rounded-3xl flex items-center justify-center shadow-xl shadow-rose-200 rotate-3 border-4 border-white">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Bienestar Mental: <span className="text-rose-600">Cultiva</span> tu Equilibrio Interior
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Salud</span> Bienestar Mental</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 22 min</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Estado:</span> Actualizado 2026</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-rose-500 pl-6">
            &quot;En 2026, la verdadera riqueza no es el dinero ni el estatus; es la capacidad de mantener la paz mental en un mundo diseñado para distraerte y estresarte. Tu mente es tu activo más valioso.&quot;
          </p>

          <p className="mb-8">
            Vivimos en una era de sobreestimulación constante. Notificaciones, expectativas sociales e incertidumbre global compiten por nuestro foco y nuestra estabilidad emocional. El bienestar mental ya no es &quot;no estar triste&quot;; es un proceso activo de mantenimiento biológico y psicológico. Esta guía explora técnicas desde la neurociencia aplicada hasta hábitos milenarios para que retomes el control de tu paz interior.
          </p>

          <div className="not-prose bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black !text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-rose-400" /> Tópicos de Resiliencia
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#dopamine" className="text-slate-200 no-underline font-bold group-hover:text-rose-400 transition-colors">Dopamine Detox: Recupera tu enfoque</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#digital-boundaries" className="text-slate-200 no-underline font-bold group-hover:text-rose-400 transition-colors">Límites Digitales en un Mundo Conectado</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#sleep" className="text-slate-200 no-underline font-bold group-hover:text-rose-400 transition-colors">Higiene del Sueño: Neuroplasticidad nocturna</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#techniques" className="text-slate-200 no-underline font-bold group-hover:text-rose-400 transition-colors">Técnicas de Calma Inmediata</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-rose-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Section 1 */}
          <h2 id="dopamine" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-rose-600" /> 1. Dopamine Detox: Reinicia tu Cerebro
          </h2>
          <p>
            En 2026, estamos expuestos a más dosis de dopamina barata en una tarde que nuestros ancestros en toda su vida. El &quot;scroll&quot; infinito, la comida ultraprocesada y las notificaciones instantáneas han agotado nuestro sistema de recompensa, dificultando el disfrute de placeres simples o el enfoque en tareas profundas.
          </p>
          <p>
            <strong>¿Cómo hacer un reset?</strong> El objetivo no es eliminar la dopamina (es esencial para vivir), sino reducir los estímulos artificiales. Intenta pasar 24 horas a la semana sin pantallas, música o comida altamente palatable. Esto permite que tus receptores de dopamina se regulen, devolviéndote la capacidad de concentrarte y la claridad mental que habías perdido.
          </p>
          <div className="bg-rose-50 border border-rose-100 rounded-3xl p-8 my-10 flex gap-6 items-start">
             <AlertTriangle className="w-8 h-8 text-rose-500 flex-shrink-0 mt-1" />
             <div>
                <h4 className="text-lg font-black text-rose-900 mb-2 mt-0">Signos de Sobrecarga:</h4>
                <p className="text-rose-800 m-0 text-sm leading-relaxed">
                  Si sientes ansiedad cuando no tienes el teléfono cerca, si te aburres después de 5 minutos de leer un libro, o si necesitas estimulación visual mientras comes, es probable que tu sistema de dopamina esté sobrecargado.
                </p>
             </div>
          </div>

          {/* Section 2 */}
          <h2 id="digital-boundaries" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Eye className="w-8 h-8 text-rose-600" /> 2. Minimalismo Digital y Límites
          </h2>
          <p>
            No puedes estar en paz si tu bolsillo vibra cada 30 segundos. El minimalismo digital no se trata de vivir en el bosque, sino de ser intencional con las herramientas que usas.
          </p>
          <ul className="space-y-4 m-0 p-0 list-none">
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="w-8 h-8 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center flex-shrink-0 font-black">1</span>
              <span><strong>Desactiva todo:</strong> Deja solo notificaciones de personas reales (no de APPS). Si es importante, te llamarán.</span>
            </li>
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="w-8 h-8 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center flex-shrink-0 font-black">2</span>
              <span><strong>Zonas Libres:</strong> El comedor y la cama deben ser zonas sagradas libres de tecnología.</span>
            </li>
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="w-8 h-8 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center flex-shrink-0 font-black">3</span>
              <span><strong>Regla de los 30 min:</strong> No toques el teléfono durante los primeros 30 minutos de tu día.</span>
            </li>
          </ul>

          {/* Section 3 */}
          <h2 id="sleep" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Moon className="w-8 h-8 text-rose-600" /> 3. Higiene del Sueño: El Pilar Olvidado
          </h2>
          <p>
            Dormir no es un periodo de inactividad; es el momento en que tu cerebro consolida memorias y limpia toxinas metabólicas (gracias al sistema glinfático). En 2026, la neurociencia es clara: <strong>quien no duerme, no puede ser resiliente</strong>.
          </p>
          <p>
            Una mala noche de sueño reduce la capacidad de tu corteza prefrontal para regular la amígdala (tu centro del miedo). Por eso, cuando duermes mal, todo te parece más estresante y eres más propenso a reacciones emocionales desproporcionadas.
          </p>

          <div className="bg-slate-900 rounded-[32px] p-10 my-16 text-white overflow-hidden relative shadow-xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
             <h4 className="text-xl font-black mb-6 mt-0">Checklist para el Sueño Profundo:</h4>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                   <p className="text-[10px] font-black uppercase text-rose-400 mb-2">Ambiente</p>
                   <p className="text-sm font-bold m-0 italic">Total Oscuridad + 18-20°C</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                   <p className="text-[10px] font-black uppercase text-rose-400 mb-2">Biología</p>
                   <p className="text-sm font-bold m-0 italic">Sin Café después de las 2 PM</p>
                </div>
             </div>
          </div>

          {/* Section 4 */}
          <h2 id="techniques" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Wind className="w-8 h-8 text-rose-600" /> 4. Técnicas de Calma Inmediata
          </h2>
          <p>
            Cuando el estrés se vuelve fisiológico (palpitaciones, sudoración), necesitas herramientas biológicas. La técnica <strong>5-4-3-2-1</strong> es el estándar de oro para el anclaje (grounding). Al forzar a tu cerebro a notar 5 cosas que puedes ver, 4 que puedes tocar, 3 que escuchas, 2 que hueles y 1 que saboreas, sacas el foco de la narrativa interna ansiosa y lo traes de vuelta a la realidad física.
          </p>

          <h2 id="social" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Users className="w-8 h-8 text-rose-600" /> 5. El Poder de la Conexión Social
          </h2>
          <p>
            El cerebro humano es un órgano social. El aislamiento crónico activa las mismas áreas cerebrales que el dolor físico. En 2026, a pesar de estar &quot;conectados&quot; digitalmente, los niveles de soledad son récord. 
          </p>
          <p>
            <strong>Vulnerabilidad y Salud:</strong> La salud mental no ocurre en el vacío. Necesitamos al menos una o dos relaciones donde podamos ser vulnerables y expresar nuestras sombras sin miedo al juicio. El apoyo social actúa como un amortiguador biológico contra el estrés, reduciendo los niveles de cortisol y fortaleciendo el sistema inmunológico. Si te sientes solo, busca comunidades basadas en valores compartidos; la conexión real es una necesidad biológica, no un lujo.
          </p>

          <div className="bg-rose-50 border-l-4 border-rose-500 p-8 my-12 rounded-r-3xl shadow-sm">
             <p className="text-rose-900 font-bold mb-3 flex items-center gap-2">
                <Brain className="w-5 h-5 text-rose-600" /> Micro-hábitos de Claridad:
             </p>
             <ul className="text-sm text-rose-800 space-y-2 m-0 p-0 list-none font-medium">
                <li>• Escribe 3 cosas por las que estés agradecido cada noche.</li>
                <li>• Camina al menos 15 min bajo la luz del sol cada mañana.</li>
                <li>• Practica la &quot;Respiración de Caja&quot; (4-4-4-4) en momentos de tensión.</li>
                <li>• Nombra tus emociones: &quot;Siento ansiedad&quot; en lugar de &quot;Soy ansioso&quot;.</li>
             </ul>
          </div>

          {/* FAQ Section */}
          <div id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <h2 className="text-3xl font-black text-slate-950 font-outfit mb-12 flex items-center gap-3 underline decoration-rose-500 decoration-4 underline-offset-8">
              <HelpCircle className="w-8 h-8 text-rose-600" /> Preguntas Frecuentes
            </h2>
            
            <div className="space-y-6">
              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿La meditación es la única forma de mejorar mi mente?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  No. Actividades como el ejercicio físico exigente, la jardinería, el arte o simplemente mantener relaciones sociales profundas también son medicina para la mente. La clave es encontrar una actividad que te permita entrar en estado de &quot;flujo&quot;.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Cómo sé si necesito terapia profesional?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Si tu malestar emocional interfiere con tu capacidad para trabajar, dormir, comer o mantener relaciones durante más de dos semanas, es momento de buscar ayuda. No esperes a que sea una crisis para ir a terapia.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿De verdad importan 15 min de sol para la mente?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Crucialmente. La luz solar matutina regula tu ritmo circadiano, facilitando la producción de melatonina por la noche y serotonina por el día. Es el regulador biológico más potente que tenemos disponible de forma gratuita.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Qué es el &quot;burnout&quot; y cómo lo identifico?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  El agotamiento crónico o burnout es un estado de agotamiento físico, emocional y mental causado por un estrés excesivo y prolongado. Los signos incluyen cinismo hacia el trabajo, sensación de ineficacia y agotamiento extremo que no mejora con el sueño de un fin de semana. Si lo sientes, es imperativo bajar el ritmo antes de que colapse tu sistema.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿La alimentación influye en mi salud mental?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Sí. El 90% de la serotonina (el neurotransmisor de la felicidad) se produce en el intestino. Una dieta alta en ultraprocesados y azúcares inflama el cerebro y se asocia con mayores tasas de depresión y ansiedad. Comer &quot;comida real&quot; es, literalmente, alimentar tu paz mental.
                </p>
              </details>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-rose-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                Cuidarte no es Egoísmo, <br className="hidden md:block" /> es Responsabilidad
              </h2>
              <p className="text-rose-50 text-lg leading-relaxed mb-10 font-medium max-w-xl">
                No puedes servir desde una taza vacía. Al cultivar tu bienestar mental, estás mejorando automáticamente la vida de todos los que te rodean. Empieza hoy con un solo cambio pequeño.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/guias" className="bg-white text-rose-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-rose-50 transition-all shadow-xl flex items-center gap-2">
                   Ver más Guías <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-rose-100 text-sm font-bold">
                  <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> Autocuidado</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Resiliencia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
