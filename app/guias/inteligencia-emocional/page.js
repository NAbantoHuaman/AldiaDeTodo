import Link from 'next/link';
import { Brain, ChevronLeft, CheckCircle, Users, MessageCircle, Lightbulb, HeartHandshake, Eye, Target, Zap, HelpCircle, ArrowRight, BookOpen, Shield } from 'lucide-react';

export const metadata = {
  title: "Cómo Desarrollar Tu Inteligencia Emocional: Guía Maestra",
  description: "Domina el arte de gestionar tus emociones y las de los demás. De la rueda de Plutchik a la regulación emocional avanzada. La habilidad definitiva para el éxito personal y profesional en 2026.",
  openGraph: {
    title: "Cómo Desarrollar Tu Inteligencia Emocional: Guía Maestra",
    description: "Manual práctico para cultivar la inteligencia emocional en el mundo real.",
    url: "https://aldiadetodo.com/guias/inteligencia-emocional",
    type: "article",
    images: [{ url: '/images/guias/inteligencia.png' }]
  },
  alternates: { canonical: '/guias/inteligencia-emocional' },
};

export default function GuiaInteligenciaEmocional() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Cómo Desarrollar Tu Inteligencia Emocional: Guía Maestra',
    description: 'Manual integral sobre neurociencia emocional, empatía y regulación afectiva.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/inteligencia-emocional',
  };

  return (
    <article className="min-h-screen bg-white font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-amber-50 to-white py-24 border-b border-amber-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-700 hover:text-amber-900 mb-10 transition-colors bg-white px-4 py-2 rounded-full shadow-sm">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-amber-500 rounded-3xl flex items-center justify-center shadow-xl shadow-amber-200 rotate-6 border-4 border-white">
              <Brain className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Inteligencia Emocional: <span className="text-amber-600">Dominio</span> del Yo Interior
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Soft Skills</span> Nivel Pro</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 24 min</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Tipo:</span> Guía Maestra</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-amber-500 pl-6">
            &quot;En una era gobernada por algoritmos y máquinas, lo único que nos hace insustituibles es nuestra capacidad de sentir, empatizar y gestionar el complejo tejido de las emociones humanas.&quot;
          </p>

          <p className="mb-8">
            La Inteligencia Emocional (IE) ha pasado de ser un concepto &quot;curioso&quot; a ser la competencia más demandada por las empresas Fortune 500 y la base de una vida personal plena. No se trata de reprimir lo que sentimos, sino de usar la emoción como una fuente de datos valiosa para navegar el mundo. En esta guía, profundizamos en la neurobiología de las emociones y te damos herramientas prácticas para entrenar tu mente.
          </p>

          <div className="not-prose bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black !text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-amber-400" /> Anatomía de la IE
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#biology" className="text-slate-200 no-underline font-bold group-hover:text-amber-400 transition-colors">Neurobiología: El Secuestro de la Amígdala</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#plutchik" className="text-slate-200 no-underline font-bold group-hover:text-amber-400 transition-colors">La Rueda de Plutchik: Nombrar para Dominar</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#regulation" className="text-slate-200 no-underline font-bold group-hover:text-amber-400 transition-colors">Regulación Avanzada: Reevaluación vs Supresión</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#leadership" className="text-slate-200 no-underline font-bold group-hover:text-amber-400 transition-colors">Empatía y Liderazgo de Impacto</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-amber-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Section 1 */}
          <h2 id="biology" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Target className="w-8 h-8 text-amber-600" /> 1. El Cerebro Triuno y el Secuestro
          </h2>
          <p>
            Para entender la IE, debemos entender cómo está construido nuestro cerebro. Tenemos un &quot;cerebro emocional&quot; (Sistema Límbico) que reacciona mucho más rápido que nuestro &quot;cerebro pensante&quot; (Neocórtex). 
          </p>
          <p>
            <strong>El Secuestro de la Amígdala:</strong> Ocurre cuando percibes una amenaza (real o imaginaria, como una crítica en el trabajo). La amígdala toma el control total de tus respuestas antes de que tu parte lógica pueda intervenir. ¿El resultado? Gritos, llanto o parálisis de los que luego te arrepientes. Desarrollar IE es, esencialmente, aprender a crear un &quot;espacio&quot; de 6 segundos para que el Neocórtex recupere el mando.
          </p>
          <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8 my-10 flex gap-6 items-start">
             <Zap className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
             <div>
                <h4 className="text-lg font-black text-amber-900 mb-2 mt-0">Dato de Supervivencia:</h4>
                <p className="text-amber-800 m-0 text-sm leading-relaxed">
                  Las emociones duran aproximadamente 90 segundos a nivel químico en tu torrente sanguíneo. Si la emoción persiste por más tiempo, es porque tus <strong>pensamientos</strong> la están alimentando. Cortar el flujo de pensamientos corta la emoción.
                </p>
             </div>
          </div>

          {/* Section 2 */}
          <h2 id="plutchik" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Eye className="w-8 h-8 text-amber-600" /> 2. La Rueda de las Emociones
          </h2>
          <p>
            No puedes gestionar lo que no sabes nombrar. La mayoría de las personas solo conocen tres emociones: &quot;bien&quot;, &quot;mal&quot; y &quot;estresado&quot;. Esto es como intentar pintar un cuadro usando solo tres colores primarios.
          </p>
          <p>
            <strong>Robert Plutchik</strong> diseñó una rueda que muestra cómo las emociones básicas (alegría, confianza, miedo, sorpresa, tristeza, asco, ira y anticipación) se combinan e intensifican. Por ejemplo, la molestia se convierte en ira, y la ira en furia. Aprender a identificar el matiz exacto de lo que sientes reduce inmediatamente la carga emocional y te permite buscar soluciones específicas.
          </p>

          {/* Section 3 */}
          <h2 id="regulation" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Shield className="w-8 h-8 text-amber-600" /> 3. Estrategias de Regulación Avanzada
          </h2>
          <p>
            Hay dos formas principales en que la gente maneja las emociones difíciles, pero solo una es saludable a largo plazo:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
               <h4 className="text-red-700 font-black mt-0 mb-3">Supresión (No Recomendado)</h4>
               <p className="text-xs text-slate-600 m-0">Tragar la emoción y fingir que no existe. Esto genera altos niveles de cortisol, problemas digestivos e inestabilidad a largo plazo.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
               <h4 className="text-green-700 font-black mt-0 mb-3">Reevaluación Cognitiva</h4>
               <p className="text-xs text-slate-600 m-0">Cambiar la interpretación de la situación. En lugar de &quot;Me ignora porque no le importo&quot;, pensar &quot;Quizás está teniendo un día difícil y no tiene energía&quot;.</p>
            </div>
          </div>

          {/* Section 4 */}
          <h2 id="leadership" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <HeartHandshake className="w-8 h-8 text-amber-600" /> 4. Empatía y Liderazgo de Impacto
          </h2>
          <p>
            La empatía no es sentir pena por alguien; es sentir <strong>con</strong> alguien. En el liderazgo moderno, la capacidad de detectar el estado emocional de tu equipo y responder adecuadamente es lo que diferencia a un jefe de un líder inspirador.
          </p>

          <h2 id="influence" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Users className="w-8 h-8 text-amber-600" /> 5. Influencia Social vs Manipulación
          </h2>
          <p>
            Una alta Inteligencia Emocional te otorga el poder de influir en los demás. La diferencia entre influencia y manipulación radica en la <strong>intención</strong>. La influencia busca un beneficio mutuo y respeta la autonomía del otro; la manipulación busca el beneficio propio a expensas de la otra persona.
          </p>
          <p>
            Los comunicadores emocionalmente inteligentes usan la validación para desarmar conflictos. Frases como &quot;Entiendo por qué te sientes así&quot; o &quot;Veo que esto es importante para ti&quot; no significan que estés de acuerdo, sino que reconoces la realidad emocional del otro. Este simple acto de reconocimiento abre canales de comunicación que de otro modo estarían cerrados por el ego y la defensividad.
          </p>
          <p>
            <strong>El Escaneo Empático:</strong> En cada conversación, intenta responderte internamente: &quot;¿Cómo se siente esta persona ahora?&quot; y &quot;¿Qué necesita que yo reconozca de su situación?&quot;. A menudo, la gente no busca soluciones, busca <strong>validación</strong>.
          </p>

          <div className="bg-slate-900 rounded-[32px] p-10 my-16 text-white overflow-hidden relative shadow-xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
             <h4 className="text-xl font-black mb-6 mt-0">Tu Entrenamiento Diario:</h4>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                   <p className="text-[10px] font-black uppercase text-amber-400 mb-2">Mañana</p>
                   <p className="text-sm font-bold m-0 italic">Identificar la emoción actual antes de mirar el móvil.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                   <p className="text-[10px] font-black uppercase text-amber-400 mb-2">Tarde</p>
                   <p className="text-sm font-bold m-0 italic">Pausa de 10 seg antes de responder a un estímulo negativo.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                   <p className="text-[10px] font-black uppercase text-amber-400 mb-2">Noche</p>
                   <p className="text-sm font-bold m-0 italic">Repaso: ¿Cuándo perdí el control y cómo lo haré mejor mañana?</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                   <p className="text-[10px] font-black uppercase text-amber-400 mb-2">Social</p>
                   <p className="text-sm font-bold m-0 italic">Escucha activa: no interrumpir hasta que el otro termine.</p>
                </div>
             </div>
          </div>

          {/* FAQ Section */}
          <div id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <h2 className="text-3xl font-black text-slate-950 font-outfit mb-12 flex items-center gap-3 underline decoration-amber-500 decoration-4 underline-offset-8">
              <HelpCircle className="w-8 h-8 text-amber-600" /> Preguntas Frecuentes (FAQ)
            </h2>
            
            <div className="space-y-6">
              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Se puede tener &quot;demasiada&quot; inteligencia emocional?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  No como tal, pero una empatía mal gestionada puede llevar al &quot;contagio emocional&quot;, donde sufres tanto por los demás que te inhabilitas para ayudar. La IE real incluye el límite saludable para proteger tu propia energía.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿La IE es algo con lo que se nace?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Tenemos una predisposición genética, pero a diferencia del CI, la IE es altamente plástica. Se puede entrenar en cualquier etapa de la vida mediante la práctica deliberada de la autoconciencia y la regulación.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Cómo ayuda la IE en el liderazgo técnico?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  En tecnología, los problemas suelen ser humanos (falta de comunicación, egos, miedo al error). Un líder con IE puede crear un entorno de seguridad psicológica que dispara la productividad del equipo mucho más que cualquier metodología ágil.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Qué es el &quot;contagio emocional&quot;?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Es la tendencia a imitar y sincronizar expresiones, posturas y movimientos con los de otra persona y, por tanto, converger emocionalmente. Si tu jefe está estresado, es probable que tú también empieces a sentirte así. La IE te ayuda a poner un &quot;escudo&quot; consciente para no absorber emociones ajenas que no te pertenecen.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿La IE es igual a la asertividad?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  La asertividad es una herramienta de la IE. Significa comunicar tus necesidades y sentimientos de forma clara y directa, pero respetuosa. Una persona con alta IE sabe cuándo ser asertiva y cuándo es mejor observar y escuchar antes de intervenir.
                </p>
              </details>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-amber-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                Emperador de tu <br className="hidden md:block" /> Propio Reino
              </h2>
              <p className="text-amber-50 text-lg leading-relaxed mb-10 font-medium max-w-xl">
                La Inteligencia Emocional es el puente entre lo que eres y lo que puedes llegar a ser. Al dominar tus emociones, dejas de ser un pasajero en tu propia vida para convertirte en el capitán de tu destino.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/guias" className="bg-white text-amber-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-amber-50 transition-all shadow-xl flex items-center gap-2">
                   Seguir Aprendiendo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
