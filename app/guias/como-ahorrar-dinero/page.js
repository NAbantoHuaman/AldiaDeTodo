import Link from 'next/link';
import { TrendingUp, ChevronLeft, BookOpen, CheckCircle, AlertTriangle, Lightbulb, Wallet, BarChart4, PiggyBank, HelpCircle, ArrowRight, ShieldCheck, Zap, Target } from 'lucide-react';

export const metadata = {
  title: "Ahorro e Inversión: Guía Maestra de Libertad Financiera",
  description: "Aprende a dominar tu dinero en 2026. De la regla 50/30/20 al interés compuesto y fondos indexados. Estrategias probadas para construir riqueza desde cero.",
  openGraph: {
    title: "Ahorro e Inversión: Guía Maestra de Libertad Financiera",
    description: "Manual integral de finanzas personales para ahorradores e inversores novatos.",
    url: "https://aldiadetodo.com/guias/como-ahorrar-dinero",
    type: "article",
    images: [{ url: '/images/guias/ahorro.png' }]
  },
  alternates: { canonical: '/guias/como-ahorrar-dinero' },
};

export default function GuiaAhorrar() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Ahorro e Inversión: Guía Maestra de Libertad Financiera',
    description: 'Manual profundo sobre finanzas personales, ahorro inteligente e inversión para principiantes.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/como-ahorrar-dinero',
  };

  return (
    <article className="min-h-screen bg-white font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-emerald-50 to-white py-24 border-b border-emerald-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-700 hover:text-emerald-900 mb-10 transition-colors bg-white px-4 py-2 rounded-full shadow-sm">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-emerald-600 rounded-3xl flex items-center justify-center shadow-xl shadow-emerald-200 -rotate-3 border-4 border-white">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Libertad Financiera: <span className="text-emerald-600">Domina</span> tu Dinero
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Tipo:</span> Guía de Riqueza</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 26 min</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Meta:</span> Ahorro Automatizado</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-emerald-500 pl-6">
            &quot;Ahorrar no es simplemente gastar menos; es comprar tu libertad futura. Cada moneda que guardas hoy es un trabajador que trabajará para ti mañana gracias al interés compuesto.&quot;
          </p>

          <p className="mb-8">
            En 2026, la inflación y la volatilidad económica hacen que el ahorro &quot;debajo del colchón&quot; sea una receta para perder dinero. Las finanzas personales modernas exigen que seas un gestor activo de tus recursos. Esta guía maestra te llevará desde los cimientos del ahorro hasta los primeros pasos en la inversión inteligente, diseñada para que tu dinero deje de ser un problema y se convierta en tu mejor aliado.
          </p>

          <div className="bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-emerald-400" /> Hoja de Ruta Financiera
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#psicologia" className="text-slate-200 no-underline font-bold group-hover:text-emerald-400 transition-colors">Psicología del Dinero: El Sesgo del Presente</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#metodo-ahorro" className="text-slate-200 no-underline font-bold group-hover:text-emerald-400 transition-colors">La Regla 50/30/20: Tu Sistema Base</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#inversion-intro" className="text-slate-200 no-underline font-bold group-hover:text-emerald-400 transition-colors">Introducción a la Inversión: Interés Compuesto</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#automatization" className="text-slate-200 no-underline font-bold group-hover:text-emerald-400 transition-colors">Automatización y Herramientas 2026</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-emerald-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Section 1 */}
          <h2 id="psicologia" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Wallet className="w-8 h-8 text-emerald-600" /> 1. La Psicología del Dinero
          </h2>
          <p>
            El ahorro es 10% matemáticas y 90% comportamiento. Nuestro cerebro está programado para la supervivencia instantánea, lo que nos empuja a gastar hoy lo que vemos hoy. Este es el <strong>Sesgo del Presente</strong>.
          </p>
          <p>
            Para vencerlo, debes dejar de ver el ahorro como una &quot;pérdida de disfrute&quot; y empezar a verlo como una <strong>transferencia de poder</strong>. Cada vez que ahorras, estás transfiriendo el poder de tu &quot;yo&quot; actual a tu &quot;yo&quot; futuro, quien tendrá la libertad de dejar un trabajo estresante o aprovechar una oportunidad de inversión única.
          </p>
          <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 my-10 flex gap-6 items-start shadow-sm text-emerald-900 font-medium">
             <AlertTriangle className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-1" />
             <div>
                <h4 className="text-lg font-black text-emerald-900 mb-2 mt-0">La Regla de las 72 Horas:</h4>
                <p className="text-emerald-800 m-0 text-sm leading-relaxed">
                  Antes de realizar cualquier compra no esencial (ropa, tecnología, caprichos), espera 72 horas. Si después de tres días todavía sientes que lo necesitas, cómpralo. El 90% de las veces, el impulso habrá desaparecido, ahorrándote miles al año.
                </p>
             </div>
          </div>

          {/* Section 2 */}
          <h2 id="metodo-ahorro" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <PiggyBank className="w-8 h-8 text-emerald-600" /> 2. El Presupuesto 50/30/20
          </h2>
          <p>
            No necesitas hojas de cálculo complejas. La regla de oro del ahorro moderno divide tus ingresos netos en tres categorías claras:
          </p>
          <div className="space-y-4 my-8">
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">50%</span>
              <p className="text-sm m-0"><strong>Necesidades:</strong> Alquiler, servicios, comida real, salud y deudas mínimas. Si esto supera el 50%, tu estilo de vida es insostenible.</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">30%</span>
              <p className="text-sm m-0"><strong>Deseos:</strong> Cine, cenas fuera, Netflix, hobbies. Es el presupuesto para disfrutar del presente.</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">20%</span>
              <p className="text-sm m-0"><strong>Futuro (Ahorro/Inversión):</strong> Fondo de emergencia e inversiones. Esto es lo primero que separas al recibir tu paga.</p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 my-10 text-white shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
             <h4 className="text-lg font-black text-emerald-400 mb-4 mt-0">Dato de Alto Impacto:</h4>
             <p className="text-slate-300 m-0 text-sm leading-relaxed italic">
                Ahorrar solo S/ 300 mensuales (~$80 USD) parece poco. Pero invertidos al 10% anual (promedio histórico de la bolsa), se convierten en <strong>S/ 1,300,000</strong> en 40 años. La verdadera riqueza no nace del sueldo alto, sino del <strong>tiempo</strong> y la <strong>consistencia</strong>.
             </p>
          </div>

          {/* Section 3 */}
          <h2 id="inversion-intro" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <BarChart4 className="w-8 h-8 text-emerald-600" /> 3. De Ahorrador a Inversor
          </h2>
          <p>
            Ahorrar es proteger tu dinero; invertir es hacer que tu dinero trabaje para ti. En 2026, la inversión se ha democratizado totalmente. Ya no necesitas un corredor de bolsa con traje.
          </p>
          <p>
            <strong>Fondos Indexados y ETFs:</strong> Son la forma más segura y rentable de empezar. En lugar de apostar a una sola acción (como Apple o Tesla), compras un &quot;paquete&quot; que contiene las 500 empresas más grandes del mundo (como el S&P 500). Si la economía crece, tú ganas. 
          </p>
          <p>
            <strong>Interés Compuesto:</strong> Es la octava maravilla del mundo. Es cuando los intereses que ganas hoy generan sus propios intereses mañana. Es una bola de nieve que empieza pequeña pero se vuelve imparable con las décadas.
          </p>

          {/* Section 4 */}
          <h2 id="automation" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <ShieldCheck className="w-8 h-8 text-emerald-600" /> 4. Automatización y Seguridad
          </h2>
          <p>
            La disciplina falla. Los sistemas no. La única forma garantizada de ahorrar es <strong>Pagar a tu &quot;yo&quot; del futuro primero</strong>. Configura una transferencia automática desde tu cuenta bancaria a tu cuenta de ahorros o broker de inversión el mismo día que recibes tu salario. Si no ves el dinero, no lo extrañas.
          </p>

          <h2 id="taxes" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <TrendingUp className="w-8 h-8 text-emerald-600" /> 5. Impuestos y Eficiencia Fiscal
          </h2>
          <p>
            No es solo cuánto ganas o cuánto ahorras; es cuánto te quedas después de impuestos. En 2026, entender las deducciones fiscales es una herramienta de ahorro masiva. 
          </p>
          <p>
            <strong>Optimización Legal:</strong> Investiga si tu país ofrece beneficios por aportes voluntarios a fondos de pensiones o cuentas de ahorro para vivienda. A menudo, el estado te devuelve una parte de lo que ahorras en forma de menor pago de impuestos al año siguiente. Ignorar esto es, literalmente, dejar dinero sobre la mesa. Además, ten en cuenta el &quot;Factor Latte&quot;: no se trata de dejar de tomar café, sino de ser consciente de cómo 5 unidades de moneda al día se convierten en miles a lo largo de décadas. El ahorro inteligente es la suma de micro-decisiones conscientes sumadas a una arquitectura macro de inversión.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8 my-12 rounded-r-3xl shadow-sm">
             <p className="text-yellow-900 font-bold mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-600" /> Pasos Acciónables Hoy:
             </p>
             <ul className="text-sm text-yellow-800 space-y-2 m-0 p-0 list-none font-medium">
                <li>• Abre una cuenta de ahorros de alto rendimiento (separada de tu cuenta principal).</li>
                <li>• Crea un fondo de emergencia de S/ 1,000 (o equivalente) como prioridad #1.</li>
                <li>• Identifica y elimina 3 suscripciones digitales que no uses.</li>
                <li>• Automatiza una transferencia de al menos el 5% de tu sueldo para empezar.</li>
             </ul>
          </div>

          {/* FAQ Section */}
          <div id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <h2 className="text-3xl font-black text-slate-950 font-outfit mb-12 flex items-center gap-3 underline decoration-emerald-500 decoration-4 underline-offset-8">
              <HelpCircle className="w-8 h-8 text-emerald-600" /> Preguntas Frecuentes
            </h2>
            
            <div className="space-y-6">
              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Debo ahorrar o pagar deudas primero?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Si tus deudas tienen un interés mayor al 10% (tarjetas de crédito), págalas agresivamente. Es la mejor &quot;inversión&quot; que puedes hacer. Si tienen interés bajo (hipoteca), puedes ahorrar e invertir simultáneamente.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Cuánto dinero necesito tener para empezar a invertir?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  En 2026, puedes empezar con S/ 50 (~$15 USD) gracias a las apps de inversión fraccionada. Lo más importante no es el monto inicial, sino el hábito de aportar todos los meses sin falta.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Es seguro invertir en Bolsa de Valores?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  A corto plazo, la bolsa sube y baja (volatilidad). A largo plazo (10+ años), históricamente siempre ha crecido superando a la inflación. La clave es la diversificación: no pongas todos tus huevos en una sola canasta.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Qué es el &quot;Lifestyle Creep&quot;?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Es la tendencia a aumentar tus gastos a medida que aumentan tus ingresos. Si ganas más pero gastas más, tu riqueza neta no crece. La clave para la libertad financiera es mantener tus gastos estables mientras tus ingresos (y tus inversiones) suben.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Debería comprar una casa o alquilar e invertir?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Es una decisión personal y matemática. Comprar protege contra la inflación del alquiler y da estabilidad, pero alquilar e invertir la diferencia en bolsa puede generar mayor patrimonio neto a largo plazo. Haz los números según los precios y tasas de interés de tu ciudad actual.
                </p>
              </details>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-emerald-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                Tu Futuro es una <br className="hidden md:block" /> Decisión de Hoy
              </h2>
              <p className="text-emerald-50 text-lg leading-relaxed mb-10 font-medium max-w-xl">
                La libertad financiera no es un destino al que se llega por suerte, sino por diseño. Empieza a construir tu fortaleza financiera hoy mismo.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/guias" className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-50 transition-all shadow-xl flex items-center gap-2">
                   Ver Todas las Guías <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-emerald-100 text-sm font-bold">
                  <span className="flex items-center gap-1"><Wallet className="w-4 h-4" /> Patrimonio</span>
                  <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Seguridad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
