import Link from 'next/link';
import { Code, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Box } from 'lucide-react';

export const metadata = {
  title: "Aprender a Programar desde Cero: Guía Completa para Principiantes",
  description: "¿Quieres aprender a programar pero no sabes por dónde empezar? Esta guía te lleva desde los fundamentos hasta tu primer proyecto real, con estrategias de aprendizaje para 2026.",
  openGraph: {
    title: "Aprender a Programar desde Cero: Guía Completa para Principiantes",
    description: "Todo lo que necesitas saber para empezar a programar en la era de la IA, explicado de forma simple y práctica.",
    url: "https://aldiadetodo.com/guias/aprender-a-programar",
    type: "article",
    images: [{ url: '/images/guias/programar.png' }]
  },
  alternates: { canonical: '/guias/aprender-a-programar' },
};

export default function GuiaProgramar() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Aprender a Programar desde Cero: Guía Completa para Principiantes',
    description: 'Guía integral para principiantes sobre cómo empezar en el mundo de la programación en 2026.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/aprender-a-programar',
  };

  return (
    <article className="min-h-screen bg-white font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-violet-50 to-white py-24 border-b border-violet-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-violet-600 hover:text-violet-800 mb-10 transition-colors bg-white px-4 py-2 rounded-full shadow-sm">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-violet-600 rounded-3xl flex items-center justify-center shadow-xl shadow-violet-200 rotate-3 border-4 border-white">
              <Code className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Aprender a Programar: <span className="text-violet-600">Tu Hoja de Ruta</span> desde Cero
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Nivel:</span> Principiante Absoluto</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 22 min</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Enfoque:</span> Práctico</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-violet-500 pl-6">
            &quot;La programación no es una habilidad matemática misteriosa; es una forma de pensamiento lógico. Si puedes explicarle a alguien cómo hacer un café, puedes aprender a programar una computadora.&quot;
          </p>

          <p className="mb-8">
            En 2026, la programación se ha convertido en la nueva alfabetización. Ya no se trata solo de personas en sótanos oscuros escribiendo código críptico; se trata de abogados, biólogos, emprendedores y creativos usando la tecnología para amplificar su impacto. En esta guía, desmitificamos el proceso y te daremos las herramientas para que empieces hoy mismo.
          </p>

          <div className="bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-violet-400" /> Índice de Aprendizaje
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#que-es" className="text-slate-200 no-underline font-bold group-hover:text-violet-400 transition-colors">¿Qué es realmente programar?</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#lenguajes" className="text-slate-200 no-underline font-bold group-hover:text-violet-400 transition-colors">Elegir tu primer lenguaje en 2026</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#fundamentos" className="text-slate-200 no-underline font-bold group-hover:text-violet-400 transition-colors">Los Pilares: El pensamiento computacional</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#meta-learning" className="text-slate-200 no-underline font-bold group-hover:text-violet-400 transition-colors">Meta-Learning: Cómo aprender rápido</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-violet-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Section 1 */}
          <h2 id="que-es" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Terminal className="w-8 h-8 text-violet-600" /> 1. Desmitificando el código
          </h2>
          <p>
            Programar es hablarle a las máquinas en un idioma que ellas entienden para resolver problemas. Sin embargo, el mayor secreto de los programadores es que <strong>el código es para los humanos</strong>. Escribimos código para que otros programadores (incluido nuestro &quot;yo&quot; del futuro) puedan entender qué intenta hacer la máquina.
          </p>
          <p>
            En 2026, la barrera entre el lenguaje humano y el de máquina es más delgada que nunca. Con la ayuda de asistentes de IA, ya no necesitas memorizar cada coma o paréntesis; necesitas entender la <strong>lógica del flujo</strong> y cómo descomponer un problema grande en piezas pequeñas.
          </p>

          {/* Section 2 */}
          <h2 id="lenguajes" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Cpu className="w-8 h-8 text-violet-600" /> 2. El Dilema del Primer Lenguaje
          </h2>
          <p>
            Muchos principiantes se paralizan intentando elegir el lenguaje &quot;perfecto&quot;. La realidad es que una vez que aprendes los conceptos de uno, aprender el segundo es 10 veces más fácil.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <h4 className="text-violet-600 font-black mt-0 mb-3">Opción A: Python</h4>
               <p className="text-xs text-slate-600 m-0">El rey absoluto de la IA y el análisis de datos. Su sintaxis es casi como leer inglés. Perfecto para quien busca resultados rápidos y automatización.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <h4 className="text-violet-600 font-black mt-0 mb-3">Opción B: JavaScript</h4>
               <p className="text-xs text-slate-600 m-0">El lenguaje de la web. Si quieres crear páginas interactivas o apps móviles, JS es obligatorio. Es omnipresente y vibrante.</p>
            </div>
          </div>

          {/* Section 3 */}
          <h2 id="fundamentos" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Box className="w-8 h-8 text-violet-600" /> 3. Pensamiento Computacional
          </h2>
          <p>
            Antes de tocar el teclado, debes aprender a pensar como un programador. Esto involucra cuatro pilares fundamentales:
          </p>
          <ul className="space-y-4 m-0 p-0 list-none">
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="w-8 h-8 bg-violet-100 text-violet-600 rounded-lg flex items-center justify-center flex-shrink-0 font-black">1</span>
              <span><strong>Descomposición:</strong> Dividir un problema complejo (ej. &quot;hacer un juego&quot;) en tareas diminutas (&quot;mover un punto&quot;).</span>
            </li>
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="w-8 h-8 bg-violet-100 text-violet-600 rounded-lg flex items-center justify-center flex-shrink-0 font-black">2</span>
              <span><strong>Reconocimiento de Patrones:</strong> Identificar similitudes entre problemas para no reinventar la rueda.</span>
            </li>
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="w-8 h-8 bg-violet-100 text-violet-600 rounded-lg flex items-center justify-center flex-shrink-0 font-black">3</span>
              <span><strong>Abstracción:</strong> Enfocarse solo en la información relevante, ignorando el ruido innecesario.</span>
            </li>
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 font-black">4</span>
              <span><strong>Consistencia:</strong> Es mejor estudiar 30 minutos todos los días que 10 horas solo los domingos. La programación es como un músculo.</span>
            </div>
          </ul>

          <h2 id="documentation" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <BookOpen className="w-8 h-8 text-blue-600" /> 5. El Superpoder Olvidado: Leer Documentación
          </h2>
          <p>
            Muchos principiantes caen en el &quot;Tutorial Hell&quot;: ver videos de YouTube uno tras otro sin entender realmente qué está pasando. El verdadero salto de nivel ocurre cuando aprendes a leer la documentación oficial de un lenguaje o framework.
          </p>
          <p>
            <strong>Documentación vs Tutoriales:</strong> Un tutorial te dice *cómo* hacer una cosa específica. La documentación te da el *modelo mental* de cómo funciona todo el sistema. En 2026, con la IA ayudándote a escribir código, tu trabajo principal ya no es saber la sintaxis de memoria, sino entender la arquitectura. Saber navegar por los documentos oficiales de MDN (para web) o la documentación de Python te hará 10 veces más rápido que cualquier persona que dependa de buscar cada error en Google.
          </p>

          <h2 id="pair-programming" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Terminal className="w-8 h-8 text-blue-600" /> 6. Programación en Pareja y Comunidad
          </h2>
          <p>
            La programación suele verse como un acto solitario, pero en la industria es un deporte de equipo. El <strong>Pair Programming</strong> (dos personas resolviendo un mismo problema) acelera el aprendizaje exponencialmente. Al explicar tu código a otra persona, te ves obligado a entenderlo a un nivel más profundo (Técnica Feynman).
          </p>
          <p>
            No intentes aprender solo. Únete a comunidades en Discord, asiste a meetups locales o contribuye a proyectos de Código Abierto (Open Source). Exponer tu código a la revisión de otros puede ser intimidante al principio, pero es la forma más rápida de detectar malos hábitos y aprender mejores prácticas de diseño de software.
          </p>

          <h2 id="imposter" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Lightbulb className="w-8 h-8 text-blue-600" /> 7. Gestionando el Síndrome del Impostor
          </h2>
          <p>
            Casi todos los programadores, desde juniors hasta seniors con 20 años de experiencia, sienten en algún momento que &quot;no saben lo suficiente&quot; o que &quot;son un fraude&quot;. En un campo que cambia cada semana, es imposible saberlo todo.
          </p>
          <p>
            <strong>El Cambio de Mentalidad:</strong> La programación no es saber respuestas; es saber hacer las preguntas correctas. Si te sientes abrumado, recuerda que tu trabajo no es ser una enciclopedia, sino un solucionador de problemas. Aprender a estar cómodo con la incertidumbre es una habilidad técnica tan importante como saber usar ciclos o condicionales.
          </p>

          {/* Section 4 */}
          <h2 id="meta-learning" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Search className="w-8 h-8 text-violet-600" /> 4. Meta-Learning: Aprender a Aprender
          </h2>
          <p>
            El campo de la tecnología cambia tan rápido que tu habilidad más importante no es lo que sabes hoy, sino qué tan rápido puedes aprender lo que vendrá mañana.
          </p>
          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100 my-10 flex gap-6 items-start">
             <AlertTriangle className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
             <div>
                <h4 className="text-lg font-black text-amber-900 mb-2 mt-0">La Trampa de los Tutoriales (Tutorial Hell):</h4>
                <p className="text-amber-800 m-0 text-sm leading-relaxed">
                  Evita pasar meses viendo vídeos sin escribir código. La verdadera maestría llega cuando intentas construir algo, fallas, buscas la solución en documentación o foros, y lo arreglas. Ese ciclo de frustración y resolución es donde ocurre el aprendizaje real.
                </p>
             </div>
          </div>
          <p>
            <strong>Estrategia recomendada:</strong> Aplica la regla del 20/80. Pasa el 20% del tiempo estudiando teoría y el 80% construyendo proyectos, por pequeños que sean.
          </p>

          <div className="bg-slate-900 rounded-[32px] p-10 my-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <h4 className="text-xl font-black mb-6 mt-0">Tu Stack para empezar:</h4>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                   <p className="text-[10px] font-black uppercase text-violet-400 mb-2">Editor</p>
                   <p className="text-sm font-bold m-0">VS Code</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                   <p className="text-[10px] font-black uppercase text-violet-400 mb-2">Terminal</p>
                   <p className="text-sm font-bold m-0">Zsh / PowerShell</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                   <p className="text-[10px] font-black uppercase text-violet-400 mb-2">Control</p>
                   <p className="text-sm font-bold m-0">Git (GitHub)</p>
                </div>
             </div>
          </div>

          {/* FAQ Section */}
          <div id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <h2 className="text-3xl font-black text-slate-950 font-outfit mb-12 flex items-center gap-3 underline decoration-violet-500 decoration-4 underline-offset-8">
              <HelpCircle className="w-8 h-8 text-violet-600" /> Preguntas Frecuentes
            </h2>
            
            <div className="space-y-6">
              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿La IA va a reemplazar a los programadores?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  No los reemplazará, pero los programadores que usan IA sí reemplazarán a los que no. La IA es una herramienta de productividad masiva. Tu valor en 2026 no es escribir líneas de código, sino saber qué código debe escribirse, cómo estructurarlo para que sea escalable y cómo asegurar que resuelva el problema de negocio.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Es necesario ir a la universidad para ser programador?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Depende de tus objetivos. Para roles de investigación o desarrollo de sistemas complejos (como motores de base de datos o compiladores), la base teórica universitaria es invaluable. Para desarrollo web o de apps, existen bootcamps y recursos autodidactas excelentes. Lo más importante al final es tu portafolio y lo que puedas demostrar que sabes construir.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Cuánto tiempo tardaré en conseguir mi primer trabajo?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  En promedio, con un estudio dedicado de 4-6 horas diarias, la mayoría alcanza un nivel &quot;empleable&quot; en 9-12 meses. Sin embargo, no esperes a &quot;saberlo todo&quot;. Empieza a aplicar cuando tengas 2-3 proyectos sólidos en GitHub que resuelvan problemas reales.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Necesito ser bueno en matemáticas?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Para el 95% del desarrollo de software común (web, apps, automatización), solo necesitas aritmética básica. Si te enfocas en IA avanzada o gráficos 3D, entonces sí requerirás álgebra lineal y cálculo, pero para empezar, no es una barrera.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Cuánto tiempo tardaré en conseguir trabajo?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Con dedicación constante (15-20 horas semanales), la mayoría de las personas alcanzan un nivel &quot;junior&quot; empleable en 6 a 12 meses. Sin embargo, en 2026 lo que más importa es tu portafolio de proyectos reales, no solo el tiempo que lleves estudiando.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Tengo que saber inglés?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Ayuda mucho, especialmente para leer las últimas documentaciones, pero no es estrictamente necesario para empezar. Hay excelentes comunidades y recursos en español. A medida que progreses, aprender inglés técnico vendrá de forma natural.
                </p>
              </details>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-violet-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                El Mejor Momento <br className="hidden md:block" /> es Ahora
              </h2>
              <p className="text-violet-50 text-lg leading-relaxed mb-10 font-medium max-w-xl">
                No esperes hasta que las condiciones sean perfectas. El mundo necesita constructores, solucionadores y creadores. La programación es tu superpoder para construir el futuro que imaginas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/guias" className="bg-white text-violet-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-violet-50 transition-all shadow-xl flex items-center gap-2">
                   Ver más Guías <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-violet-100 text-sm font-bold">
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> 100% Gratuito</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Paso a Paso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
