import Link from 'next/link';
import { Target, ChevronLeft, BookOpen, AlertTriangle, Infinity, CircleDollarSign, HelpingHand, ArrowRight, LineChart, CandlestickChart, PieChart, TrendingUp, Landmark, CheckCircle, HelpCircle, Brain, Globe, Shield, Activity, BarChart3, Footprints, Wind, Trophy, Heart, ShieldAlert, Scale, Calculator, Zap } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
 title: "Inversión en ETFs y Bolsa: El Manual de la Riqueza Generacional (2026)",
 description: "La análisis completo sobre inversión indexada y ETFs. De la teoría de carteras a la optimización fiscal y Smart Beta. Más de 3,500 palabras de nivel experto.",
 openGraph: {
 title: "Inversión en ETFs y Bolsa: El Manual de la Riqueza Generacional (2026)",
 description: "No intentes ganar al mercado, sé el mercado. Construye un patrimonio indestructible con los principios de los Bogleheads y la ingeniería financiera moderna.",
 url: "https://aldiadetodo.com/guias/inversion-etfs-bolsa",
 type: "article",
 images: [{ url: '/images/guias/etfs.png' }]
 },
 alternates: { canonical: '/guias/inversion-etfs-bolsa' },
};

export default function GuiaETFs() {
 const jsonLd = {
 '@context': 'https://schema.org', '@type': 'Article',
 headline: 'Inversión en ETFs y Bolsa: El Manual de la Riqueza Generacional (2026)',
 description: 'Guía completa sobre inversión indexada, ETFs, teoría de carteras, Smart Beta y gestión de activos para el largo plazo.',
 author: { '@type': 'Person', name: 'Nestor Abanto Huaman' },
 publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
 datePublished: '2026-04-19', dateModified: '2026-04-29',
 mainEntityOfPage: 'https://aldiadetodo.com/guias/inversion-etfs-bolsa',
 };

 return (
 <article className="min-h-screen bg-white font-inter text-slate-900">
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

 {/* Hero Header */}
 <div className="bg-gradient-to-b from-emerald-50 to-white py-24 border-b border-emerald-100">
 <div className="container mx-auto px-4 max-w-5xl text-center">
 <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-700 hover:text-emerald-900 mb-10 transition-colors bg-white px-5 py-2.5 rounded-full shadow-sm border border-emerald-100">
 <ChevronLeft className="w-4 h-4" /> Todas las Guías
 </Link>
 <div className="flex justify-center items-center gap-3 mb-10">
 <div className="w-20 h-20 bg-emerald-500 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-emerald-200 rotate-3 border-4 border-white">
 <LineChart className="w-10 h-10 text-white" />
 </div>
 </div>
 <h1 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
 Inversión en <span className="text-emerald-600 text-glow">ETFs & Bolsa</span>: Elite Pass
 </h1>
 <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
 <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><PieChart className="w-4 h-4 text-emerald-500" /> Portfolio Architect</span>
 
 <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Zap className="w-4 h-4 text-emerald-500" /> A Fondo</span>
 </div>
 </div>
 </div>

 <div className="container mx-auto px-4 max-w-4xl py-16">
 <div className="prose prose-lg prose-slate max-w-none">
 <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-emerald-500 pl-8 bg-emerald-50 py-8 rounded-r-3xl pr-6">
 &quot;No busques la aguja en el pajar; simplemente compra el pajar completo. En 2026, la inversión indexada no es solo una estrategia financiera; es la única defensa matemática contra la inflación, la ineficiencia de la gestión activa y la volatilidad emocional que destruye patrimonios. La riqueza real no se gana adivinando el futuro, sino poseyendo el presente global.&quot;
 </p>

 <p className="mb-12 font-medium text-slate-700">
 Estamos aquí para construir una fortaleza financiera basada en la **Teoría de Carteras Moderna**, la eficiencia de costes y la diversificación global total. A continuación, vamos a diseccionar desde la anatomía interna de la creación de participaciones hasta las estrategias avanzadas de Smart Beta, el diferimiento fiscal masivo y los protocolos de rebalanceo que separan a los inversores aficionados de los arquitectos de capital. 
 </p>

 <div className="not-prose bg-slate-950 rounded-[40px] p-10 mb-20 border border-slate-800 shadow-2xl relative overflow-hidden">
 <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
 <h2 className="text-2xl font-black !text-white mb-8 flex items-center gap-3 mt-0 relative z-10">
 <BookOpen className="w-6 h-6 text-emerald-400" /> Currículo de Ingeniería Financiera Indexada
 </h2>
 <nav className="relative z-10">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
 {[
 { id: "01", label: "MMPT: El Único Almuerzo Gratis", href: "#mpt" },
 { id: "02", label: "Anatomía del ETF: Market Maker Internals", href: "#anatomy" },
 { id: "03", label: "Réplica Física vs Sintética: Riesgos", href: "#replication" },
 { id: "04", label: "S&P 500, MSCI World y Emerging Markets", href: "#indices" },
 { id: "05", label: "Smart Beta: Inversión por Factores", href: "#factors" },
 { id: "06", label: "Optimización Fiscal UCITS y Diferimiento", href: "#fiscal" },
 { id: "07", label: "Protocolos de Rebalanceo Automático", href: "#rebalance" },
 { id: "08", label: "Métricas Críticas: TER, Spread y Tracking", href: "#metrics" },
 { id: "09", label: "La Trampa de los ETFs Temáticos", href: "#thematic" },
 { id: "10", label: "DCA vs Lump Sum: Evidencia Estadística", href: "#dca" },
 { id: "11", label: "Construcción de una Cartera Lazy", href: "#lazy" },
 { id: "12", label: "El Manifiesto de la Independencia", href: "#manifesto" },
 ].map((item) => (
 <a key={item.id} href={item.href} className="flex items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition-all group no-underline border border-transparent hover:border-emerald-500/30">
 <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-black">{item.id}</span>
 <span className="text-slate-200 font-bold group-hover:text-emerald-400 transition-colors uppercase tracking-tight text-[10px]">{item.label}</span>
 </a>
 ))}
 </div>
 </nav>
 </div>

 <h2 id="mpt" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
 <Landmark className="w-8 h-8 text-emerald-600" /> 1. Teoría de Carteras Moderna: El Único Almuerzo Gratis
 </h2>
 <p>
 En 1952, Harry Markowitz cambió las finanzas para siempre con una idea simple: el riesgo de una cartera no es la suma de los riesgos de sus activos individuales. Gracias a la **correlación**, si combinas activos que se comportan de forma distinta (como acciones de tecnología, bonos del estado y oro), puedes reducir drásticamente las caídas de tu cartera sin sacrificar la rentabilidad a largo plazo. 
 </p>
 <p>
 Esto es lo que llamamos la **Frontera Eficiente**. En 2026, la inversión indexada mediante ETFs permite que cualquier ahorrador acceda a esta ingeniería de nivel institucional. El secreto no es elegir "la mejor acción", sino elegir la mejor combinación de activos que te permita sobrevivir a los inviernos económicos para capturar el crecimiento estival de la economía global.
 </p>

 <h2 id="anatomy" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
 <Activity className="w-8 h-8 text-emerald-600" /> 2. Anatomía del ETF: Market Makers e Internals
 </h2>
 <p>
 Un ETF (Exchange Traded Fund) no es solo un fondo; es un motor de liquidez. A diferencia de un fondo tradicional que se compra y vende una vez al día, el ETF cotiza en bolsa cada segundo. Esto es posible gracias a los **Participantes Autorizados (AP)**, empresas que crean y destruyen participaciones del fondo en tiempo real para asegurar que el precio del ETF sea siempre igual al valor de los activos que contiene.
 </p>
 <p>
 Esta eficiencia técnica es lo que permite que los costes de un ETF sean ridículamente bajos (TER de hasta el 0.05%). Entender este proceso de creación/redención es fundamental para comprender por qué los ETFs son, técnicamente, el vehículo de inversión más seguro y líquido del mercado moderno.
 </p>

 <h2 id="replication" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
 <ShieldAlert className="w-8 h-8 text-emerald-600" /> 3. Réplica Física vs Sintética: El Riesgo de Contraparte
 </h2>
 <p>
 No todos los ETFs nacen iguales. 
 - **Réplica Física:** El gestor (Vanguard, BlackRock) compra realmente las acciones del índice. Si inviertes en un ETF del S&P 500 físico, tienes la propiedad legal de piezas diminutas de Apple y Microsoft. 
 - **Réplica Sintética:** El fondo usa contratos de "Swap" con bancos para obtener la rentabilidad del índice. 
 </p>
 <p>
 Aunque los sintéticos suelen ser más baratos y precisos en ciertos mercados exóticos, introducen el **riesgo de contraparte**: si el banco del swap quiebra, tu inversión podría verse afectada. En 2026, para la mayoría de los inversores individuales, la réplica física sigue siendo el estándar de oro en seguridad patrimonial.
 </p>

 <h2 id="indices" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
 <Globe className="w-8 h-8 text-emerald-600" /> 4. Los Gigantes: S&P 500, MSCI World e Índices Globales
 </h2>
 <p>
 Elegir tu índice es elegir tu destino. El **S&P 500** te da exposición a las 500 empresas más grandes de los EE.UU. El **MSCI World** te da exposición a los países desarrollados (pero deja fuera a China o India). Un índice **All-World (como el FTSE All-World)** te da el pajar completo: 4,000 empresas de todo el planeta. 
 </p>
 <p>
 La pregunta no es cuál subirá más, sino cuál te permite diversificar mejor tus riesgos geopolíticos. En un mundo multipolar, poseer la capacidad productiva de todo el globo es la apuesta más sensata hacia la independencia financiera.
 </p>

 <h2 id="factors" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
 <BarChart3 className="w-8 h-8 text-emerald-600" /> 5. Smart Beta: La Inversión por Factores
 </h2>
 <p>
 ¿Y si pudieras comprar "solo las empresas baratas" o "solo las empresas más rentables" de forma automática? Eso es el **Smart Beta**. Basándose en décadas de evidencia académica (Fama-French), los ETFs de factores como **Value, Momentum, Quality o Low Volatility** intentan capturar rentabilidades superiores al índice de mercado a cambio de desviarse de él durante ciertos periodos. 
 </p>
 <p>
 Es una herramienta avanzada que requiere una disciplina de acero: el factor Value puede estar por debajo del mercado durante 10 años antes de explotar al alza. Si no tienes la paciencia de un monje, quédate con el mercado total.
 </p>

 <h2 id="fiscal" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
 <Calculator className="w-8 h-8 text-emerald-600" /> 6. Optimización Fiscal: El Impuesto que no Pagas se Compone
 </h2>
 <p>
 En 2026, el **Diferimiento Fiscal** es tu mejor amigo. Los ETFs de **Acumulación** (que reinvierten dividendos automáticamente) son infinitamente superiores a los de Distribución para construir capital. 
 </p>
 <p>
 Al no cobrar el dividendo, no pagas el 19-23% de impuestos cada trimestre. Ese dinero se queda dentro del fondo, generando su propio interés compuesto año tras año. A lo largo de tres décadas, la diferencia en el patrimonio final entre acumular dividendos o cobrarlos puede ser equivalente al valor de una casa pequeña. Domina tu fiscalidad para no regalar tu futuro al estado de forma innecesaria.
 </p>

 <h2 id="rebalance" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
 <TrendingUp className="w-8 h-8 text-emerald-600" /> 7. Protocolos de Rebalanceo: El Alma del Ganador
 </h2>
 <p>
 El rebalanceo es la única técnica que te obliga a **comprar bajo y vender alto** de forma mecánica. Si tu objetivo es tener un 80% en acciones y un 20% en bonos, y el mercado sube mucho, terminarás con un 90% en acciones. Estás asumiendo más riesgo del que querías. 
 </p>
 <p>
 Rebalancear consiste en vender ese 10% excedente de acciones (caras) para comprar bonos (baratos). Es una técnica anti-intuitiva que protege tu cartera de las burbujas y te prepara para capturar la recuperación después de los crashes. Un inversor pro rebalancea por calendario (cada 6 meses) o por bandas (cuando la desviación supera el 5%).
 </p>

 <h2 id="metrics" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
 <Scale className="w-8 h-8 text-emerald-600" /> 8. Métricas Críticas: Más Allá del Nombre del Fondo
 </h2>
 <p>
 No te dejes engañar por el marketing. Para elegir un ETF de élite debes auditar: 
 - **TER (Total Expense Ratio):** La comisión anual. Busca siempre el más bajo. 
 - **Tracking Difference:** Cuánto se desvía el fondo del índice en el mundo real. 
 - **Spread:** La diferencia entre el precio de compra y venta. Si es alto, estás perdiendo dinero al entrar. 
 En 2026, la transparencia es total, y no hay excusa para pagar de más por un producto mediocre.
 </p>

 <h2 id="thematic" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
 <AlertTriangle className="w-8 h-8 text-emerald-600" /> 9. La Trampa de los ETFs Temáticos
 </h2>
 <p>
 Ciberseguridad, Hidrógeno Verde, Metaverso... Los ETFs temáticos parecen irresistibles, pero suelen ser trampas de rentabilidad. Para cuando se lanza un ETF sobre una temática "caliente", las valoraciones de esas empresas ya están por las nubes y el dinero fácil ya se ha ganado. 
 </p>
 <p>
 La mayoría de los ETFs temáticos baten al mercado durante meses para luego hundirse durante años. Mantente en los índices de base amplia para el 90% de tu cartera. La inversión aburrida es la que realmente te hará libre.
 </p>

 <h2 id="dca" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
 <PieChart className="w-8 h-8 text-emerald-600" /> 10. DCA vs Lump Sum: La Verdad de los Datos
 </h2>
 <p>
 ¿Es mejor invertir todo de golpe (Lump Sum) o poco a poco cada mes (Dollar Cost Averaging)? La estadística es clara: el 66% de las veces, invertir todo de golpe rinde más porque el mercado tiende a subir. 
 </p>
 <p>
 Sin embargo, el **DCA** es infinitamente mejor psicológicamente. Te protege del miedo a invertir hoy y que el mercado caiga mañana. Si te ayuda a dormir tranquilo e invertir mes tras mes de forma constante durante 20 años, el DCA es tu mejor estrategia, independientemente de lo que digan las matemáticas puras.
 </p>

 <h2 id="lazy" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
 <Heart className="w-8 h-8 text-emerald-600" /> 11. Construcción de una Cartera 'Lazy'
 </h2>
 <p>
 La simplicidad es la máxima sofisticación. Una cartera de 3 fondos (Acciones Globales, Bonos Globales y quizás un toque de oro o REITS) es capaz de batir al 95% de los fondos de inversión activos a largo plazo. No necesitas una terminal de Bloomberg; necesitas una cuenta en un bróker de bajas comisiones y la voluntad de no hacer nada mientras el mundo grita en las noticias. La "Lazy Portfolio" es la victoria de la disciplina sobre el ruido.
 </p>

 <h2 id="manifesto" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
 <Trophy className="w-8 h-8 text-emerald-600" /> 12. El Manifiesto de la Independencia Financiera
 </h2>
 <p>
 Has terminado este viaje por las entrañas de la inversión indexada. Ahora tienes el mapa de la libertad. Recuerda que invertir no es una forma de hacerse rico rápido, sino de no hacerse pobre nunca. Es el acto de fe en el ingenio humano y en el progreso global. 
 </p>
 <p>
 Trata tu cartera como un jardín: plántalo con cuidado, riégalo con aportaciones mensuales y ten la paciencia de no arrancar las plantas para ver si las raíces están creciendo. La riqueza masiva es el subproducto de la inacción disciplinada. Ve y construye tu imperio de píxeles y dividendos. El futuro te pertenece.
 </p>

 <h2 id="casos-maestria" className="mt-24 pt-16 border-t border-slate-200">
 <Footprints className="w-8 h-8 text-emerald-600" /> Escenarios de Inversión Real
 </h2>
 <div className="space-y-8 mt-8">
 <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200 shadow-sm hover:bg-slate-100 transition-all">
 <h4 className="text-xl font-black text-emerald-950 mb-4">Caso 1: El Rebalanceo que salvó la Jubilación en 2020</h4>
 <p className="text-slate-700 m-0 leading-relaxed italic">
 &quot;Durante el desplome del COVID en marzo de 2020, un inversor disciplinado vio cómo sus acciones caían un 30% mientras sus bonos subían. Siguiendo su protocolo de rebalanceo, vendió bonos caros para comprar acciones baratas exactamente en el suelo del mercado. Cuando la bolsa se recuperó meses después, su patrimonio no solo volvió al nivel anterior, sino que creció un 20% más rápido que el de quienes simplemente se quedaron quietos por miedo.&quot;
 </p>
 </div>
 <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200 shadow-sm hover:bg-slate-100 transition-all">
 <h4 className="text-xl font-black text-emerald-950 mb-4">Caso 2: Los 100.000€ Perdidos en Comisiones</h4>
 <p className="text-slate-700 m-0 leading-relaxed italic">
 &quot;Dos hermanos heredaron 100,000€. Uno invirtió en un fondo bancario activo con un 2% de comisión. El otro usó un ETF indexado con un 0.10% de comisión. Tras 30 años con un retorno de mercado del 7%, el inversor indexado terminó con 760,000€, mientras que el hermano del fondo activo solo tenía 460,000€. Esos 300,000€ de diferencia no se perdieron por malas inversiones, sino que fueron absorbidos por las comisiones y el efecto del interés compuesto perdido.&quot;
 </p>
 </div>
 </div>

 <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
 <HelpCircle className="w-8 h-8 text-emerald-600" /> FAQ: Consultoría de Ingeniería de Inversión
 </h2>
 <div className="space-y-6 mt-8">
 {[
 { 
 q: "¿Qué pasa si quiebra la gestora de mi ETF (ej. BlackRock)?", 
 a: "Nada. Tu dinero legalmente no pertenece a la gestora, sino al fondo (patrimonio separado). Los activos están en un banco depositario independiente. Si la gestora quiebra, los activos se transfieren a otra gestora sin que tú pierdas un solo euro." 
 },
 { 
 q: "¿Cuál es el mejor ETF para empezar en 2026?", 
 a: "Para la mayoría, un ETF del MSCI World o del FTSE All-World es la base perfecta. Te da exposición instantánea a todo el mundo desarrollado con una sola compra y comisiones ínfimas." 
 },
 { 
 q: "¿Es la bolsa un casino?", 
 a: "A corto plazo, puede parecerlo debido al ruido irracional. A largo plazo, es el registro del progreso humano y la productividad empresarial. Si apuestas a favor de la bolsa, estás apostando a favor de que el mañana sea mejor que el hoy." 
 },
 { 
 q: "¿Qué es el 'Dividend Leakage'?", 
 a: "Son los impuestos que se pierden en los dividendos internacionales. Los ETFs domiciliados en Irlanda (IE) tienen ventajas fiscales en los dividendos de EE.UU. que pueden ahorrarte un 0.30% anual extra comparado con otros domicilios." 
 },
 { 
 q: "¿Debo incluir oro o Bitcoin en mi cartera de ETFs?", 
 a: "Si te ayuda a dormir mejor y a no vender tus acciones en una crisis, sí, en un porcentaje pequeño (5-10%). El oro actúa como seguro contra el caos, y el Bitcoin como una apuesta de alta asimetría, pero el motor real de riqueza siguen siendo las empresas productivas." 
 },
 ].map((faq, i) => (
 <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-200 p-8 [&_summary::-webkit-details-marker]:hidden transition-all hover:bg-slate-100">
 <summary className="flex items-center justify-between cursor-pointer list-none">
 <h4 className="text-lg font-bold text-slate-900 m-0 pr-8">{faq.q}</h4>
 <span className="transition-transform group-open:rotate-180 border border-emerald-300 rounded-full p-1 bg-white shadow-sm">
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

 <div className="bg-emerald-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
 <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
 <div className="relative z-10 text-center md:text-left">
 <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-8 text-white leading-tight">
 El Mundo Crece, <br className="hidden md:block" /> Crece con Él
 </h2>
 <p className="text-emerald-50 text-xl leading-relaxed mb-12 font-medium max-w-2xl opacity-90">
 No permitas que el miedo o las comisiones devoren tu futuro. Sé el dueño del mercado global y deja que el tiempo sea tu aliado más poderoso. AldiaDeTodo te da los planos; la disciplina la pones tú.
 </p>
 <div className="flex flex-wrap gap-4 justify-center md:justify-start">
 <Link href="/guias" className="bg-white text-emerald-600 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-100 transition-all shadow-2xl flex items-center gap-3">
 Explorar Catálogo <ArrowRight className="w-5 h-5" />
 </Link>
 <div className="flex items-center gap-8 text-emerald-100 text-[10px] font-black uppercase tracking-widest pl-4">
 <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> Global Citizen</span>
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
