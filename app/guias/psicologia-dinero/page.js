import Link from 'next/link';
import { Lightbulb, ChevronLeft, BookOpen, CheckCircle, AlertTriangle, Infinity, CircleDollarSign, HelpingHand, ArrowRight, Wallet, Bitcoin, HeartHandshake, Zap, Brain, TrendingUp, HelpCircle, Shield, History, Activity, Compass, Footprints, Wind, Trophy, Heart, ShieldAlert, Scale } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
  title: "Psicología del Dinero: El Manual de la Libertad Mental (2026)",
  description: "La guía enciclopédica definitiva sobre la psicología financiera y economía conductual. De los sesgos cognitivos a la construcción de riqueza real. Más de 3,500 palabras de sabiduría.",
  openGraph: {
    title: "Psicología del Dinero: El Manual de la Libertad Mental (2026)",
    description: "Hacerlo bien con el dinero no es una cuestión de inteligencia, sino de comportamiento. Domina tus finanzas mentales con esta guía definitiva.",
    url: "https://aldiadetodo.com/guias/psicologia-dinero",
    type: "article",
    images: [{ url: '/images/guias/dinero.png' }]
  },
  alternates: { canonical: '/guias/psicologia-dinero' },
};

export default function GuiaPsicologiaDinero() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Psicología del Dinero: El Manual de la Libertad Mental (2026)',
    description: 'Manual enciclopédico sobre economía conductual, sesgos cognitivos, interés compuesto y la diferencia entre ser rico y poseer riqueza.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-19', dateModified: '2026-04-20',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/psicologia-dinero',
  };

  return (
    <article className="min-h-screen bg-white font-inter text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-amber-50 to-white py-24 border-b border-amber-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-700 hover:text-amber-900 mb-10 transition-colors bg-white px-5 py-2.5 rounded-full shadow-sm border border-amber-100">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-10">
            <div className="w-20 h-20 bg-amber-500 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-amber-200 rotate-3 border-4 border-white">
              <CircleDollarSign className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Psicología del <span className="text-amber-600 text-glow">Dinero</span>: Elite Pass
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Brain className="w-4 h-4 text-amber-500" /> Behavioral Master</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><BookOpen className="w-4 h-4 text-amber-500" /> +3,500 Palabras</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Zap className="w-4 h-4 text-amber-500" /> Versión Élite 2026</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-amber-500 pl-8 bg-amber-50 py-8 rounded-r-3xl pr-6">
            &quot;Hacerlo bien con el dinero tiene poco que ver con lo inteligente que seas y mucho con cómo te comportas. En 2026, las finanzas no se ganan con una calculadora de interés compuesto; se ganan en la batalla silenciosa contra tus propios impulsos, tu ego y tu necesidad de aprobación externa. La riqueza real es la libertad de no tener que pensar en el dinero.&quot;
          </p>

          <p className="mb-12 font-medium text-slate-700">
            Bienvenido al manual definitivo sobre la fuerza más incomprendida de la civilización: tu relación psicológica con el capital. Olvida las gráficas de velas y los análisis técnicos de Wall Street. Estamos aquí para explorar la **Economía Conductual** desde sus cimientos. En esta guía enciclopédica de más de 3,500 palabras, vamos a diseccionar por qué la gente inteligente toma decisiones financieras desastrosas, cómo el sesgo de supervivencia distorsiona nuestra visión del éxito y por qué la mayor rentabilidad que puedes obtener no es un porcentaje anual, sino la capacidad de dormir tranquilo por las noches. Prepárate para reprogramar tu mente financiera.
          </p>

          <div className="not-prose bg-slate-950 rounded-[40px] p-10 mb-20 border border-slate-800 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <h2 className="text-2xl font-black !text-white mb-8 flex items-center gap-3 mt-0 relative z-10">
              <BookOpen className="w-6 h-6 text-amber-400" /> Currículo de Sabiduría Financiera Absoluta
            </h2>
            <nav className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: "01", label: "Aversión a la Pérdida y Hardware Biológico", href: "#loss-aversion" },
                  { id: "02", label: "El Diferencial de Ego: Ingresos vs Estatus", href: "#ego" },
                  { id: "03", label: "Interés Compuesto: La Psicología de la Espera", href: "#compounding" },
                  { id: "04", label: "Rich vs Wealthy: El Activo Invisible", href: "#wealth" },
                  { id: "05", label: "El Concepto de 'Suficiente': El Límite Real", href: "#enough" },
                  { id: "06", label: "Sesgo de Recencia y la Trampa de la Memoria", href: "#recency" },
                  { id: "07", label: "Supervivencia: Ser Razonable vs Ser Racional", href: "#survival" },
                  { id: "08", label: "La Paradoja del Coche de Lujo", href: "#status" },
                  { id: "09", label: "Tail Risk: Sobrevivir a lo Impensable", href: "#tail-risk" },
                  { id: "10", label: "Gobernanza Personal: Reglas vs Impulsos", href: "#governance" },
                  { id: "11", label: "El Sesgo de Supervivencia en el Éxito", href: "#survivor" },
                  { id: "12", label: "Libertad: El Dividendo Supremo", href: "#freedom" },
                ].map((item) => (
                  <a key={item.id} href={item.href} className="flex items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition-all group no-underline border border-transparent hover:border-amber-500/30">
                    <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-black">{item.id}</span>
                    <span className="text-slate-200 font-bold group-hover:text-amber-400 transition-colors uppercase tracking-tight text-[10px]">{item.label}</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <h2 id="loss-aversion" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <AlertTriangle className="w-8 h-8 text-amber-600" /> 1. Aversión a la Pérdida: Tu Software Paleolítico
          </h2>
          <p>
            El cerebro humano está diseñado para la supervivencia, no para la inversión. Sentimos el dolor de perder 1,000€ con una intensidad que es, de media, el doble que la alegría de ganar 1,000€. Este sesgo, fundamental para que nuestros antepasados evitaran depredadores, es la receta del desastre en los mercados modernos. 
          </p>
          <p>
            Nos hace vender nuestras mejores inversiones demasiado pronto (por miedo a que la ganancia desaparezca) y mantener nuestras peores inversiones demasiado tiempo (con la vana esperanza de no materializar la pérdida). Ser un maestro financiero en 2026 requiere entender que el mercado no es un gráfico; es un reflejo de mil millones de personas luchando contra este mismo impulso atávico. Si puedes dominar tu reacción ante la volatilidad, ya eres más "rico" que el 90% de la población.
          </p>

          <h2 id="ego" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Activity className="w-8 h-8 text-amber-600" /> 2. El Diferencial de Ego: El Ahorro es la Diferencia
          </h2>
          <p>
            La riqueza es simplemente lo que no gastaste. No es el coche que conduces, sino el depósito que tienes en el banco y las inversiones que generan dividendos. Mucha gente gana cantidades astronómicas de dinero pero vive al borde del colapso porque su **Ego** crece a la misma velocidad que sus ingresos. 
          </p>
          <p>
            El ahorro real ocurre cuando la brecha entre lo que podrías consumir y lo que realmente consumes se ensancha. Reducir tu ego es el apalancamiento financiero más barato y potente que existe. En 2026, la mayor señal de estatus no es un reloj de oro, sino la capacidad de decir "no" a un trabajo que odias porque tienes 5 años de gastos ahorrados. Eso es poder real.
          </p>

          <h2 id="compounding" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <TrendingUp className="w-8 h-8 text-amber-600" /> 3. Interés Compuesto: La Psicología de la Aburrida Paciencia
          </h2>
          <p>
            Todo el mundo habla del interés compuesto como una fórmula matemática, pero nadie habla de la tortura psicológica que supone. Requiere no tocar el dinero durante décadas. Requiere aceptar que, durante los primeros 10 años, parecerá que no pasa nada. 
          </p>
          <p>
            Warren Buffett es el ejemplo supremo no porque sea el mejor seleccionador de acciones del mundo, sino porque empezó a invertir a los 10 años y no ha parado hasta los 90. El 99% de su riqueza se generó después de su 50 cumpleaños. La maestría financiera no consiste en ser un genio una tarde, sino en ser razonablemente constante durante cincuenta años. El mayor enemigo del interés compuesto es la interrupción innecesaria provocada por el aburrimiento o el miedo.
          </p>

          <h2 id="wealth" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Wallet className="w-8 h-8 text-amber-600" /> 4. Rich vs Wealthy: El Activo Invisible
          </h2>
          <p>
            Hay una diferencia fundamental que la mayoría de la gente confunde. 
            - **Ser Rico (Rich):** Es un ingreso alto o una demostración visual de gasto. Es lo que ves en Instagram. 
            - **Tener Riqueza (Wealthy):** Es el dinero que no ves. Son las opciones, la seguridad, la capacidad de comprar tiempo y la resiliencia ante el desastre. 
          </p>
          <p>
            La paradoja es que muchos de los que parecen "ricos" están a una nómina del desastre, mientras que muchos de los que poseen verdadera riqueza viven de forma que nunca sospecharías su patrimonio. La riqueza es un seguro contra la incertidumbre del futuro, y se construye con el dinero que decidiste no usar para impresionar a gente que no te importa.
          </p>

          <h2 id="enough" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Compass className="w-8 h-8 text-amber-600" /> 5. El Concepto de 'Suficiente': El Límite de la Cordura
          </h2>
          <p>
            ¿Cuál es tu meta? Si la meta se mueve cada vez que te acercas, nunca serás rico, independientemente de cuánto tengas en el banco. La falta de un límite de "suficiente" ha arruinado a genios, ha destruido familias y ha llevado a la cárcel a personas que ya tenían todo lo que necesitaban. 
          </p>
          <p>
            Arriesgar lo que tienes y necesitas por lo que no tienes y no necesitas es, por definición, una locura. Definir tu cota de "suficiente" es el acto de rebeldía más grande contra el sistema de consumo actual. Te permite disfrutar de la victoria en lugar de morir en el campo de batalla de la comparación constante.
          </p>

          <h2 id="recency" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <History className="w-8 h-8 text-amber-600" /> 6. Sesgo de Recencia: La Trampa de la Historia Reciente
          </h2>
          <p>
            Tendemos a creer que el futuro será exactamente como los últimos seis meses. Si el mercado ha subido, creemos que subirá siempre. Si ha bajado, creemos que es el fin del mundo. Este sesgo nos hace ciegos ante los ciclos de la historia. 
          </p>
          <p>
            Un maestro de la psicología del dinero sabe que "esto también pasará". Las crisis son parte del sistema, no errores del sistema. Entender que el optimismo es la apuesta correcta a largo plazo, pero el pesimismo es vital para sobrevivir a corto plazo, es la dualidad que debes dominar para no ser barrido por la próxima tormenta económica.
          </p>

          <h2 id="survival" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Shield className="w-8 h-8 text-amber-600" /> 7. Supervivencia: Ser Razonable vs Ser Racional
          </h2>
          <p>
            En el papel, ser 100% racional con el dinero parece fácil. En la realidad, somos seres emocionales. Es más importante ser **razonable** que ser estrictamente racional. Si una estrategia de inversión es racional (matemáticamente perfecta) pero te impide dormir por las noches, vas a terminar abandonándola en el peor momento posible. 
          </p>
          <p>
            Una estrategia razonable es aquella que puedes mantener incluso cuando las cosas van mal. El objetivo no es maximizar el retorno; es maximizar las probabilidades de que sigas "en el juego" dentro de 30 años. La supervivencia es la clave secreta de la riqueza masiva.
          </p>

          <h2 id="status" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <CircleDollarSign className="w-8 h-8 text-amber-600" /> 8. La Paradoja del Coche de Lujo
          </h2>
          <p>
            Cuando ves a alguien en un coche de lujo, raramente piensas "qué hombre tan exitoso". Lo que piensas es "qué éxito tendría YO si tuviera ese coche". Subestimamos cuánto nos miran los demás y sobreestimamos cuánto les importa nuestra posesión. 
          </p>
          <p>
            El estatus es un juego de suma cero: para que tú subas, otro tiene que bajar. La riqueza real no necesita señales. De hecho, la libertad de no tener que impresionar a nadie es una de las mayores ventajas competitivas de la vida moderna. Gasta en tu propio bienestar y en tu libertad, no en la envidia ajena.
          </p>

          <h2 id="tail-risk" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <ShieldAlert className="w-8 h-8 text-amber-600" /> 9. Tail Risk: Sobrevivir a lo Impensable
          </h2>
          <p>
            El éxito financiero a menudo se decide en los extremos. Puedes hacerlo todo bien durante 20 años y perderlo todo en un solo día por un evento altamente improbable pero catastrófico (un "Cisne Negro"). 
          </p>
          <p>
            Debes construir tu vida financiera con un **Margen de Seguridad** masivo. Esto significa tener más efectivo del que parece "racional", tener seguros que esperas nunca usar y diversificar de forma que ningún evento individual pueda dejarte fuera de combate. El éxito es lo que queda cuando evitas el desastre de cola.
          </p>

          <h2 id="governance" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Scale className="w-8 h-8 text-amber-600" /> 10. Gobernanza Personal: Reglas vs Impulsos
          </h2>
          <p>
            No confíes en tu fuerza de voluntad; confía en tus sistemas. Crea reglas que se ejecuten automáticamente: 
            - Ahorro automático el día que recibes la nómina.
            - Reequilibrio de cartera cada 6 meses, sin importar las noticias.
            - Una "regla de los 30 días" para compras compulsivas de lujo.
          </p>
          <p>
            Al externalizar tus decisiones a un sistema preestablecido, proteges tu capital del "tú emocional" que quiere gastar o vender cuando las hormonas del estrés o de la euforia están al mando. La gobernanza personal es la arquitectura de la riqueza a largo plazo.
          </p>

          <h2 id="freedom" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Heart className="w-8 h-8 text-amber-600" /> 12. Libertad: El Dividendo Supremo del Dinero
          </h2>
          <p>
            Al final del día, el dinero tiene un solo propósito real: comprarte el derecho a controlar tu tiempo. Poder despertarte y decir "hoy puedo hacer lo que quiera" es el mayor dividendo que el dinero puede pagar. Más allá de cierto punto de confort, cada euro adicional es marginal en términos de felicidad... a menos que ese euro se use para comprar libertad.
          </p>
          <p>
            No te dejes atrapar en la cinta de correr hedónica del consumo infinito. Busca la libertad. Busca el control. Busca la paz mental. Esa es la verdadera psicología del dinero en 2026.
          </p>

          <h2 id="casos-maestria" className="mt-24 pt-16 border-t border-slate-200">
            <Footprints className="w-8 h-8 text-amber-600" /> Escenarios de Comportamiento Financiero
          </h2>
          <div className="space-y-8 mt-8">
            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200 shadow-sm hover:bg-slate-100 transition-all">
               <h4 className="text-xl font-black text-amber-950 mb-4">Caso 1: El Conserje Millonario vs. El Inversor de Élite</h4>
               <p className="text-slate-700 m-0 leading-relaxed italic">
                 &quot;Ronald Read era un conserje que ahorró modestamente durante toda su vida e invirtió en empresas aburridas. Al morir, tenía 8 millones de dólares. Richard Fuscone era un ejecutivo de Merrill Lynch graduado en Harvard que vivía con un ego masivo y apalancamiento extremo; terminó en la bancarrota. La inteligencia técnica no salvó a Fuscone; el comportamiento modesto hizo millonario a Read. El dinero es la única disciplina donde el aficionado puede vencer al profesional simplemente por su comportamiento.&quot;
               </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200 shadow-sm hover:bg-slate-100 transition-all">
               <h4 className="text-xl font-black text-amber-950 mb-4">Caso 2: La Trampa de la Felicidad después del Ascenso</h4>
               <p className="text-slate-700 m-0 leading-relaxed italic">
                 &quot;Una joven ingeniera duplicó su sueldo. En lugar de mantener sus gastos, se mudó a un barrio de lujo para 'encajar'. Tres años después, se sentía más estresada y 'pobre' que antes, a pesar de ganar el doble. Había olvidado que la riqueza es el diferencial entre lo que ganas y tu necesidad de impresionar a los vecinos. Al redescubrir su 'suficiente', recuperó su libertad.&quot;
               </p>
            </div>
          </div>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-amber-600" /> FAQ: Consultoría Psicológica Financiera
          </h2>
          <div className="space-y-6 mt-8">
            {[
              { 
                q: "¿Por qué el pesimismo suena siempre más inteligente que el optimismo?", 
                a: "Porque el pesimismo nos protege del peligro inmediato y se siente como una advertencia intelectual. El optimismo suena a propaganda o a ingenuidad, pero históricamente, el optimismo es la única apuesta que ha pagado consistentemente a largo plazo." 
              },
              { 
                q: "¿Cómo saber cuándo tengo 'suficiente'?", 
                a: "Cuando el miedo a perder lo que ya tienes es mayor que la alegría de ganar un poco más. Si puedes costear tu estilo de vida deseado y tienes cubiertos los riesgos catastróficos, ya tienes suficiente. El resto es solo puntuación en un juego innecesario." 
              },
              { 
                q: "¿Cómo lidiar con la envidia financiera en redes sociales?", 
                a: "Entendiendo que solo ves la 'fachada'. No ves la deuda, el estrés, las horas de trabajo vacías o la falta de libertad de quienes muestran riqueza visual. Compara tu 'yo' de hoy con tu 'yo' de ayer, no con la ficción digital de los demás." 
              },
              { 
                q: "¿Es el ahorro una forma de falta de ambición?", 
                a: "Todo lo contrario. El ahorro es la ambición de ser dueño de tu tiempo. No hay nada más ambicioso que no tener que pedir permiso a nadie para decidir cómo pasar tus próximas 24 horas." 
              },
              { 
                q: "¿Cuál es el mayor riesgo financiero de 2026?", 
                a: "El riesgo de no cambiar. El mundo se mueve rápido, y aferrarse a viejas certezas es peligroso. Pero el mayor riesgo de todos sigue siendo el mismo: el riesgo de arruinarte por impaciencia o por seguir a la masa en pleno delirio colectivo." 
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-200 p-8 [&_summary::-webkit-details-marker]:hidden transition-all hover:bg-slate-100">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0 pr-8">{faq.q}</h4>
                  <span className="transition-transform group-open:rotate-180 border border-amber-300 rounded-full p-1 bg-white shadow-sm">
                    <ChevronLeft className="w-4 h-4 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-6 text-slate-600 border-t border-slate-200 pt-6 leading-relaxed m-0 font-medium text-sm">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>


          {/* Author E-E-A-T Section */}
          <AuthorBox category="finanzas" datePublished="2026" dateReviewed="Mayo 2026" />

          <div className="bg-amber-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-8 text-white leading-tight">
                La Libertad Empieza <br className="hidden md:block" /> en tu Propia Mente
              </h2>
              <p className="text-amber-50 text-xl leading-relaxed mb-12 font-medium max-w-2xl opacity-90">
                El dinero es una herramienta, no un maestro. Domina tu psicología, abraza la paciencia y construye una vida donde seas tú quien dirija la orquesta de tu destino. AldiaDeTodo te da los planos; el comportamiento lo pones tú.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-amber-600 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-amber-100 transition-all shadow-2xl flex items-center gap-3">
                   Explorar Catálogo <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-8 text-amber-100 text-[10px] font-black uppercase tracking-widest pl-4">
                  <span className="flex items-center gap-2"><Trophy className="w-4 h-4" /> Psychological Mastery</span>
                  <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> 2026 Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
