import Link from 'next/link';
import { MessageSquare, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Users, Heart, Zap, HelpCircle, ArrowRight, Mic, MessageCircle } from 'lucide-react';

export const metadata = {
  title: "Comunicación Efectiva: Guía Maestra para el Siglo XXI",
  description: "Desarrolla habilidades de comunicación de alto impacto. Desde la escucha activa hasta la persuasión ética y la resolución de conflictos en entornos digitales.",
  openGraph: {
    title: "Comunicación Efectiva: Guía Maestra para el Siglo XXI",
    description: "Habilidades sociales y de comunicación para el mundo real, profesional y personal.",
    url: "https://aldiadetodo.com/guias/comunicacion-efectiva",
    type: "article",
    images: [{ url: '/images/guias/comunicacion.png' }]
  },
  alternates: { canonical: '/guias/comunicacion-efectiva' },
};

export default function GuiaComunicacion() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Comunicación Efectiva: Guía Maestra para el Siglo XXI',
    description: 'Manual profundo sobre habilidades sociales, escucha y persuasión.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/comunicacion-efectiva',
  };

  return (
    <article className="min-h-screen bg-white font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-24 border-b border-blue-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 hover:text-blue-800 mb-10 transition-colors bg-white px-4 py-2 rounded-full shadow-sm">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center shadow-xl shadow-blue-200 rotate-3 border-4 border-white">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             El Arte de la <span className="text-blue-600">Comunicación</span> de Alto Impacto
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Tipo:</span> Habilidades Blandas</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 20 min</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Aplicación:</span> Universal</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-blue-500 pl-6">
            &quot;Saber lo que dices es inteligencia; saber cómo decirlo es sabiduría; saber cuándo callar es maestría. En un mundo hiperconectado, la claridad es el nuevo superpoder.&quot;
          </p>

          <p className="mb-8">
            La comunicación no es simplemente intercambiar palabras. Es la capacidad de transferir un pensamiento, una emoción o una visión de una mente a otra con la menor distorsión posible. En el entorno actual, marcado por el trabajo remoto, la inteligencia artificial y la saturación de información, desarrollar una comunicación efectiva es el pilar de cualquier éxito personal y profesional.
          </p>

          <div className="not-prose bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black !text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-blue-400" /> Hoja de Ruta del Comunicador
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#escucha" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">La Escucha Activa: El 90% del secreto</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#cnv" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Comunicación No Violenta (CNV)</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#persuasion" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Persuadir con Ética y Storytelling</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#digital" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Comunicación en Entornos Digitales</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Section 1 */}
          <h2 id="escucha" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Heart className="w-8 h-8 text-blue-600" /> 1. La Escucha Activa: Más allá de oír
          </h2>
          <p>
            La mayoría de las personas no escuchan para entender, escuchan para preparar su respuesta. La verdadera escucha activa es un acto de generosidad intelectual. Implica suspender el juicio y sumergirse en el mapa mental de la otra persona.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 my-10 space-y-4">
             <h4 className="text-blue-900 font-black mt-0 mb-4">La Técnica de los Tres Niveles:</h4>
             <ul className="m-0 p-0 list-none space-y-4">
                <li className="flex gap-4">
                   <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
                   <span><strong>Contenido:</strong> ¿Qué palabras está usando exactamente? (Lo racional).</span>
                </li>
                <li className="flex gap-4">
                   <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
                   <span><strong>Emoción:</strong> ¿Cómo se siente mientras lo dice? (Lo subtextual).</span>
                </li>
                <li className="flex gap-4">
                   <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
                   <span><strong>Necesidad:</strong> ¿Qué está pidiendo realmente, incluso si no sabe expresarlo? (La intención).</span>
                </li>
             </ul>
             <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 font-black">3</span>
              <span><strong>Consistencia:</strong> Tu mensaje no debe contradecirse. Si dices que algo es urgente, actúa como si lo fuera.</span>
            </div>
          </div>

          {/* Section 2 */}
          <h2 id="cnv" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Users className="w-8 h-8 text-blue-600" /> 2. Comunicación No Violenta (CNV)
          </h2>
          <p>
            Introducida por Marshall Rosenberg, la CNV es la herramienta más poderosa para resolver conflictos sin herir relaciones. Se basa en hablar desde la vulnerabilidad y la claridad en lugar de la crítica.
          </p>
          <p>
            <strong>El Framework de los 4 Pasos:</strong>
            1. <strong>Observación:</strong> Describe lo que ves sin juzgar. (En lugar de &quot;Eres irresponsable&quot;, prueba con &quot;He visto que llegaste 10 minutos tarde hoy&quot;).
            2. <strong>Sentimiento:</strong> Identifica tu emoción. (&quot;Me siento frustrado&quot;).
            3. <strong>Necesidad:</strong> Identifica el valor que no se está cumpliendo. (&quot;Para mí es vital el respeto por el tiempo del equipo&quot;).
            4. <strong>Petición:</strong> Pide algo concreto y accionable. (&quot;¿Podrías avisarme si te retrasas más de 5 minutos mañana?&quot;).
          </p>

          {/* Section 3 */}
          <h2 id="persuasion" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Mic className="w-8 h-8 text-blue-600" /> 3. Persuasión Ética y Storytelling
          </h2>
          <p>
            Persuadir no es manipular. Es ayudar a otros a ver el valor de una idea que los beneficiará. La forma más efectiva de hacerlo es a través de historias. Los datos convencen al cerebro, pero las historias mueven el corazón.
          </p>
          <p>
            <strong>La Estructura de la Historia de Impacto:</strong>
            <br />
            <strong>El Gancho:</strong> Empieza con un problema que tu audiencia reconozca.
            <br />
            <strong>El Conflicto:</strong> Describe el obstáculo y las consecuencias de no actuar.
            <br />
            <strong>La Resolución:</strong> Presenta tu idea como la solución al conflicto.
            <br />
            <strong>El Llamado a la Acción (CTA):</strong> Sé específico sobre qué deben hacer a continuación.
          </p>
          <div className="bg-slate-900 text-white rounded-[32px] p-8 my-10 shadow-xl border border-blue-900/30">
             <p className="text-blue-400 font-black uppercase tracking-widest text-xs mb-4">Tip de Oratoria:</p>
             <p className="text-slate-300 m-0 leading-relaxed italic">
                &quot;No intentes sonar inteligente usando palabras complejas. El comunicador más inteligente es el que logra que una idea compleja sea entendida por un niño de 10 años.&quot;
             </p>
          </div>

          {/* Section 4 */}
          <h2 id="digital" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-blue-600" /> 4. Comunicación Digital: El reto del texto
          </h2>
          <p>
            En 2026, gran parte de nuestra comunicación es escrita y asíncrona (Slack, Teams, Email). El riesgo de malinterpretación es del 50%.
          </p>
          <ul>
             <li><strong>Claridad sobre Brevedad:</strong> No seas tan breve que parezcas borde. Añade contexto.</li>
             <li><strong>Uso de Emojis:</strong> En entornos profesionales, los emojis actúan como puntuación emocional, suavizando órdenes y aclarando intenciones.</li>
             <li><strong>La Regla de la Llamada:</strong> Si un intercambio de texto dura más de 3 mensajes sin resolución, pasa a una llamada de 2 minutos. Ahorrarás horas de malentendidos.</li>
          </ul>

          {/* Section 5 */}
          <h2 id="public-speaking" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Users className="w-8 h-8 text-indigo-600" /> 5. Oratoria para Introvertidos
          </h2>
          <p>
            Hablar en público no es un rasgo de personalidad; es una habilidad técnica. Muchos de los mejores comunicadores del mundo son introvertidos que han aprendido a &quot;actuar&quot; cuando el escenario lo requiere.
          </p>
          <p>
            <strong>La Regla de los Tres:</strong> El cerebro humano es experto en recordar patrones de tres. Si quieres que tu mensaje se quede grabado, estructúralo en tres puntos clave. No cinco, no diez. Tres. Esta simplicidad reduce la carga cognitiva de tu audiencia y hace que tu discurso sea mucho más persuasivo y fácil de seguir.
          </p>

          {/* Section 6 */}
          <h2 id="desc-model" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <MessageCircle className="w-8 h-8 text-indigo-600" /> 6. Resolución de Conflictos: El Modelo DESC
          </h2>
          <p>
            Comunicar bajo presión o en medio de un conflicto es la prueba de fuego de la IE. El modelo <strong>DESC</strong> es una herramienta infalible para expresar desacuerdos sin romper puentes:
          </p>
          <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-8 my-10 shadow-sm">
             <ul className="m-0 p-0 list-none space-y-3">
                <li className="flex gap-4">
                   <strong className="text-indigo-600 font-black shrink-0">D - Describir:</strong> Describe el comportamiento del otro de forma objetiva (sin juicios). &quot;Ayer llegaste 20 min tarde...&quot;
                </li>
                <li className="flex gap-4">
                   <strong className="text-indigo-600 font-black shrink-0">E - Expresar:</strong> Expresa cómo te hace sentir ese comportamiento. &quot;Me sentí frustrado porque...&quot;
                </li>
                <li className="flex gap-4">
                   <strong className="text-indigo-600 font-black shrink-0">S - Sugerir:</strong> Sugiere un cambio específico. &quot;Me gustaría que la próxima vez me avisaras...&quot;
                </li>
                <li className="flex gap-4">
                   <strong className="text-indigo-600 font-black shrink-0">C - Consecuencias:</strong> Indica el beneficio positivo de ese cambio. &quot;Así podré reorganizar mi agenda y no perderemos tiempo.&quot;
                </li>
             </ul>
          </div>
          <p>
            Este marco evita que el otro se ponga a la defensiva porque no estás atacando su identidad, sino señalando un hecho y proponiendo un camino hacia adelante. Es comunicación asertiva en su máxima expresión.
          </p>

          {/* FAQ Section */}
          <div id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <h2 className="text-3xl font-black text-slate-950 font-outfit mb-12 flex items-center gap-3 underline decoration-blue-500 decoration-4 underline-offset-8">
              <HelpCircle className="w-8 h-8 text-blue-600" /> Preguntas Frecuentes
            </h2>
            
            <div className="space-y-6">
              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Cómo manejo a una persona agresiva en una conversación?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  No intentes ganar. Baja el volumen de tu voz (esto fuerza a la otra persona a calmarse para oírte). Usa frases como &quot;Veo que esto es muy importante para ti, me gustaría hablarlo cuando ambos estemos más tranquilos para darte la atención que mereces&quot;.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">Soy introvertido, ¿puedo ser un gran comunicador?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Absolutamente. De hecho, los introvertidos suelen ser mejores escuchando, lo cual es la base de la comunicación efectiva. No necesitas ser el alma de la fiesta; solo necesitas ser claro, empático y auténtico.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Cómo mejorar mi lenguaje no verbal por Zoom o Meet?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Mira a la cámara, no a la pantalla. Al mirar a la cámara, simulas contacto visual con tu interlocutor. Además, asegúrate de que tus manos se vean ocasionalmente; los gestos abiertos generan confianza incluso a través de un píxel. Y no olvides la iluminación: una cara bien iluminada transmite transparencia.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿La asertividad puede confundirse con arrogancia?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Solo si olvidas la empatía. La asertividad es defender tus derechos *respetando los de los demás*. La arrogancia o agresividad defiende los tuyos *pisoteando* los ajenos. La clave está en el tono y en usar frases que empiecen con &quot;Yo siento&quot; en lugar de &quot;Tú eres&quot;.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Cómo dar feedback negativo sin desmotivar?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Usa el Método del Sándwich: algo positivo + el área de mejora + algo positivo/estimulante. Sin embargo, en entornos profesionales modernos de 2026, la claridad directa es más valorada. Sé específico sobre el error, explica el impacto que tuvo y pregunta: &quot;¿Cómo puedo ayudarte a que no vuelva a pasar?&quot;. El feedback debe ser un regalo de crecimiento, no un castigo.
                </p>
              </details>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-blue-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                Tus Palabras son <br className="hidden md:block" /> tu Legado
              </h2>
              <p className="text-blue-50 text-lg leading-relaxed mb-10 font-medium max-w-xl">
                La comunicación efectiva es la habilidad que cataliza todas las demás. No importa qué tan bueno seas técnicamente; si no puedes comunicarlo, no existe para el mundo. Practica la empatía, busca la claridad y deja una marca positiva en cada interacción.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/guias" className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl flex items-center gap-2">
                   Explorar otras Guías <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-blue-100 text-sm font-bold">
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Empatía</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Impacto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
