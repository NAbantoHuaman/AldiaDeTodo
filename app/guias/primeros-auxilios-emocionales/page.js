import Link from 'next/link';
import { Heart, Brain, Shield, Zap, Sun, Moon, Sparkles, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
 title: 'Primeros Auxilios Emocionales: Guía Práctica para Crisis Internas | AldiaDeTodo',
 description: 'Aprende técnicas basadas en evidencia para manejar ataques de ansiedad, episodios depresivos, crisis de pánico y sobrecarga emocional. Herramientas prácticas para cuando necesitas ayuda ahora.',
 keywords: ['primeros auxilios emocionales', 'crisis de ansiedad', 'ataque de pánico', 'manejo del estrés', 'salud mental', 'regulación emocional'],
 openGraph: {
 title: 'Primeros Auxilios Emocionales',
 description: 'Técnicas prácticas para manejar crisis emocionales: ansiedad, pánico, sobrecarga y más.',
 url: 'https://aldiadetodo.com/guias/primeros-auxilios-emocionales',
 type: 'article',
 },
 alternates: { canonical: '/guias/primeros-auxilios-emocionales' },
};

export default function GuiaPrimerosAuxiliosEmocionales() {
 const jsonLd = {
 '@context': 'https://schema.org', '@type': 'Article',
 headline: 'Primeros Auxilios Emocionales: Guía Práctica para Crisis Internas',
 description: 'Técnicas basadas en evidencia para manejar crisis emocionales de manera inmediata y efectiva.',
 author: { '@type': 'Person', name: 'Nestor Abanto Huaman' },
 publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
 datePublished: '2026-05-18', dateModified: '2026-05-18',
 mainEntityOfPage: 'https://aldiadetodo.com/guias/primeros-auxilios-emocionales',
 };

 const sections = [
 { id: 'que-son', title: '¿Qué son los primeros auxilios emocionales?' },
 { id: 'panico', title: 'Protocolo para ataques de pánico' },
 { id: 'ansiedad', title: 'Cuando la ansiedad no te deja funcionar' },
 { id: 'tristeza', title: 'Episodios de tristeza profunda' },
 { id: 'ira', title: 'Regulación de la ira explosiva' },
 { id: 'sobrecarga', title: 'Sobrecarga emocional y burnout' },
 { id: 'toolkit', title: 'Tu kit de emergencia emocional' },
 { id: 'profesional', title: 'Cuándo buscar ayuda profesional' },
 ];

 return (
 <article className="min-h-screen bg-white font-inter text-slate-900">
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

 {/* Hero */}
 <header className="relative bg-slate-950 text-white overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.15),transparent_60%)]"></div>
 <div className="container mx-auto max-w-4xl px-4 py-24 md:py-32 relative z-10">
 <div className="flex items-center gap-3 mb-8">
 <span className="bg-pink-500/20 text-pink-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-pink-500/20">Salud Mental</span>
 </div>
 <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-outfit leading-[0.9] tracking-tight mb-8">
 Primeros Auxilios<br/><span className="text-pink-400">Emocionales</span>
 </h1>
 <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
 Cuando tu mente grita y no sabes qué hacer. Protocolos prácticos, basados en evidencia, para las crisis que nadie te enseñó a manejar.
 </p>
 <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl">
 <p className="text-amber-300 text-sm flex items-start gap-2"><AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" /> <span>Esta guía no sustituye atención profesional. Si estás en crisis inmediata o tienes pensamientos de autolesión, llama a una línea de crisis de tu país o acude a urgencias.</span></p>
 </div>
 </div>
 </header>

 <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
 <nav className="bg-slate-50 rounded-3xl p-8 mb-16 border border-slate-100">
 <h2 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-3"><Heart className="w-5 h-5 text-pink-500" /> Contenido de la Guía</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
 {sections.map((s, i) => (
 <a key={s.id} href={`#${s.id}`} className="flex items-center gap-3 text-sm text-slate-600 hover:text-pink-600 transition-colors group">
 <span className="w-7 h-7 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-[10px] font-black text-slate-400 group-hover:bg-pink-500 group-hover:text-white transition-all">{i + 1}</span>
 {s.title}
 </a>
 ))}
 </div>
 </nav>

 <div className="prose prose-lg prose-slate max-w-none">

 <section id="que-son">
 <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><Heart className="w-7 h-7 text-pink-500" /> ¿Qué son los primeros auxilios emocionales?</h2>
 <p>Así como existe un protocolo para atender una herida física — limpiar, desinfectar, proteger — existen protocolos para atender heridas emocionales. La diferencia es que nadie nos los enseña. No los enseñan en la escuela, no aparecen en los manuales de trabajo, y la mayoría de familias simplemente dicen <em>"cálmate"</em> como si eso fuera una instrucción útil.</p>
 <p>Los primeros auxilios emocionales son <strong>técnicas de intervención inmediata</strong> diseñadas para reducir la intensidad de una crisis emocional, restaurar un mínimo de funcionalidad y prevenir que el episodio escale. No curan el problema de fondo (para eso existe la terapia), pero te permiten <strong>sobrevivir el momento</strong> con menor daño.</p>
 <p>Las técnicas que presentamos aquí provienen de la Terapia Dialéctico-Conductual (DBT) de Marsha Linehan, la Terapia Cognitivo-Conductual (TCC) y la investigación en neurociencia afectiva. Son las mismas herramientas que usan psicólogos en urgencias psiquiátricas, adaptadas para que cualquier persona pueda aplicarlas.</p>
 </section>

 <section id="panico">
 <h2 className="text-3xl font-black font-outfit flex items-center gap-3"><Zap className="w-7 h-7 text-pink-500" /> Protocolo para ataques de pánico</h2>
 <p>Un ataque de pánico se siente como morir. Tu corazón se acelera, no puedes respirar, sientes hormigueo, mareos, un terror absoluto sin causa aparente. Lo primero que debes saber: <strong>no vas a morir</strong>. Un ataque de pánico es extremadamente desagradable pero médicamente inofensivo. Dura entre 5 y 20 minutos y siempre termina.</p>
 <h3>El protocolo TIPP (Terapia Dialéctico-Conductual)</h3>
 <p><strong>T — Temperatura:</strong> Mete tu cara en un bowl de agua fría o ponle hielo en las mejillas y frente durante 30 segundos. Esto activa el reflejo de buceo, que reduce tu frecuencia cardíaca de forma involuntaria. Es la técnica más rápida que existe.</p>
 <p><strong>I — Intensidad de ejercicio:</strong> Si puedes moverte, haz ejercicio intenso por 5 minutos: salta, haz sentadillas, corre en el sitio. Esto quema la adrenalina que tu cuerpo está liberando.</p>
 <p><strong>P — Respiración Paced:</strong> Inhala por la nariz contando hasta 4. Sostén contando hasta 4. Exhala por la boca contando hasta 8. La exhalación larga activa el sistema nervioso parasimpático (el "freno" de tu cuerpo). Repite 5-10 veces.</p>
 <p><strong>P — Progressive relaxation:</strong> Tensa cada grupo muscular durante 5 segundos y luego suelta. Empieza por los pies y sube: pantorrillas, muslos, abdomen, puños, hombros, cara. La tensión-relajación engaña a tu cuerpo para que entre en modo descanso.</p>
 
 <h3>La técnica 5-4-3-2-1 (Grounding)</h3>
 <p>Cuando tu mente se desconecta de la realidad durante un ataque de pánico, reconéctala usando tus sentidos:</p>
 <ul>
 <li><strong>5</strong> cosas que puedes VER (nombra cada una en voz alta)</li>
 <li><strong>4</strong> cosas que puedes TOCAR (siente la textura)</li>
 <li><strong>3</strong> cosas que puedes OÍR (identifica cada sonido)</li>
 <li><strong>2</strong> cosas que puedes OLER</li>
 <li><strong>1</strong> cosa que puedes SABOREAR</li>
 </ul>
 <p>Esta técnica funciona porque tu cerebro no puede procesar información sensorial detallada Y mantener el pánico al mismo tiempo. Al forzar atención sensorial, literalmente interrumpes el circuito del pánico.</p>
 </section>

 <section id="ansiedad">
 <h2 className="text-3xl font-black font-outfit flex items-center gap-3"><Brain className="w-7 h-7 text-pink-500" /> Cuando la ansiedad no te deja funcionar</h2>
 <p>La ansiedad crónica es diferente del ataque de pánico. No es un pico intenso sino una <strong>niebla constante</strong> que dificulta concentrarte, tomar decisiones y disfrutar. Tu mente rumia obsesivamente sobre el futuro, generando escenarios catastróficos que probablemente nunca ocurrirán.</p>
 <h3>La técnica del "peor escenario realista"</h3>
 <p>Tu mente ansiosa genera monstruos. Enfrentarlos con lógica los reduce a su tamaño real:</p>
 <ol>
 <li>Escribe tu miedo concreto: "Tengo miedo de perder mi trabajo"</li>
 <li>¿Cuál es la probabilidad real? (no la emocional) — Sé honesto. ¿Tu jefe te ha dado señales? ¿Hay recortes planeados?</li>
 <li>Si ocurriera, ¿qué harías concretamente? Escribe 3 pasos de acción.</li>
 <li>¿Has sobrevivido a algo similar antes? Probablemente sí.</li>
 <li>¿Qué le dirías a un amigo en tu situación?</li>
 </ol>
 <p>Este ejercicio se llama <strong>reestructuración cognitiva</strong> y es la base de la TCC. No elimina la ansiedad, pero reduce su poder de parálisis al convertir una amenaza difusa en un problema concreto con soluciones concretas.</p>
 
 <h3>El "worry time" (tiempo de preocupación programado)</h3>
 <p>Paradójicamente, intentar NO preocuparte aumenta la preocupación. En lugar de eso, programa 15 minutos diarios dedicados exclusivamente a preocuparte. Cuando surja una preocupación fuera de ese horario, anótala y dile a tu mente: "Lo vemos a las 6 PM". Esto le da estructura a tu ansiedad y evita que invada cada momento del día.</p>
 </section>

 <section id="tristeza">
 <h2 className="text-3xl font-black font-outfit flex items-center gap-3"><Moon className="w-7 h-7 text-pink-500" /> Episodios de tristeza profunda</h2>
 <p>La tristeza no es depresión, aunque puede sentirse igual en el momento. Un episodio de tristeza profunda puede surgir por una pérdida, un rechazo, una decepción o a veces sin causa aparente. Lo que necesitas en ese momento no es "animarte" sino <strong>procesar</strong>.</p>
 <p><strong>La técnica RAIN (Tara Brach):</strong></p>
 <ul>
 <li><strong>R — Reconoce:</strong> "Estoy sintiendo tristeza profunda". Nombrar la emoción reduce su intensidad un 50% (datos de neuroimagen).</li>
 <li><strong>A — Permite (Allow):</strong> No luches contra ella. La emoción es una ola: si la resistes se hace más grande, si la surfeas pasa.</li>
 <li><strong>I — Investiga:</strong> ¿Dónde la sientes en tu cuerpo? ¿Pecho apretado? ¿Garganta cerrada? Observa sin juzgar.</li>
 <li><strong>N — No te identifiques:</strong> "Estoy SINTIENDO tristeza" es diferente de "SOY una persona triste". Tú no eres tus emociones; eres quien las observa.</li>
 </ul>
 <p><strong>Activación conductual:</strong> Cuando la tristeza te paraliza, no esperes a "tener ganas" de hacer algo. La acción genera motivación, no al revés. Haz UNA cosa pequeña: ducharte, caminar 5 minutos al sol, llamar a alguien. El movimiento rompe la inercia.</p>
 </section>

 <section id="ira">
 <h2 className="text-3xl font-black font-outfit flex items-center gap-3"><AlertTriangle className="w-7 h-7 text-pink-500" /> Regulación de la ira explosiva</h2>
 <p>La ira es la emoción más peligrosa porque te impulsa a actuar ANTES de pensar. Cosas dichas o hechas con ira causan daños irreversibles en relaciones. El objetivo no es eliminar la ira (es una emoción válida) sino <strong>crear espacio entre el estímulo y tu respuesta</strong>.</p>
 <p><strong>La regla de los 90 segundos:</strong> La neurociéntifica Jill Bolte Taylor descubrió que la respuesta química de cualquier emoción dura solo 90 segundos. Después de eso, lo que queda es tu elección de seguir alimentándola. Si puedes sobrevivir 90 segundos sin actuar, la bioquímica de la ira se disipa naturalmente.</p>
 <p><strong>Técnicas para esos 90 segundos:</strong></p>
 <ul>
 <li>Sal de la habitación. Físicamente. Di "necesito un momento" y vete.</li>
 <li>Agarra un hielo y apriétalo. El dolor frío interrumpe el circuito emocional.</li>
 <li>Cuenta hacia atrás desde 100 de 7 en 7: 100, 93, 86, 79... La complejidad matemática fuerza a tu cerebro a cambiar de modo emocional a modo racional.</li>
 </ul>
 </section>

 <section id="sobrecarga">
 <h2 className="text-3xl font-black font-outfit flex items-center gap-3"><Shield className="w-7 h-7 text-pink-500" /> Sobrecarga emocional y burnout</h2>
 <p>La sobrecarga no es un mal día: es el resultado de semanas o meses ignorando tus límites. Se siente como una batería que no carga ni al 10%. Todo te irrita, nada te motiva y las tareas más simples parecen montañas.</p>
 <p><strong>El protocolo de emergencia para sobrecarga:</strong></p>
 <ol>
 <li><strong>Para.</strong> Cancela todo lo no esencial de las próximas 24-48 horas. El mundo no se acaba.</li>
 <li><strong>Necesidades básicas primero:</strong> ¿Has dormido? ¿Has comido? ¿Has bebido agua? La sobrecarga agrava cualquier déficit fisiológico.</li>
 <li><strong>Contacto humano:</strong> Llama a una persona de confianza. No necesitas soluciones; necesitas sentirte acompañado.</li>
 <li><strong>Movimiento suave:</strong> No ejercicio intenso (estás agotado). Camina 20 minutos al aire libre. La combinación de movimiento, luz natural y aire fresco tiene efectos antidepresivos documentados.</li>
 <li><strong>Escribe:</strong> 10 minutos de escritura libre (journaling) descarga la presión mental. No censures, no edites, simplemente vuelca todo al papel.</li>
 </ol>
 </section>

 <section id="toolkit">
 <h2 className="text-3xl font-black font-outfit flex items-center gap-3"><Sparkles className="w-7 h-7 text-pink-500" /> Tu kit de emergencia emocional</h2>
 <p>Prepara esto ANTES de que lo necesites. Cuando estés en crisis no tendrás energía para buscarlo:</p>
 <ul>
 <li><strong>Físico:</strong> Una bolsa de hielo en el congelador, una pelota antiestrés, un cuaderno dedicado a journaling, audífonos.</li>
 <li><strong>Digital:</strong> Una playlist de canciones que te calmen (no tristes, calmantes). La app Insight Timer para meditaciones guiadas gratuitas. El contacto de tu terapeuta o línea de crisis guardado en favoritos.</li>
 <li><strong>Social:</strong> Identifica 2-3 personas a las que puedas llamar sin previo aviso. Diles con anticipación: "Si te llamo y solo necesito que escuches, ¿puedo contar contigo?"</li>
 <li><strong>Escrito:</strong> Una carta que te escribas a ti mismo cuando estés bien, recordándote que las crisis pasan, que ya has sobrevivido antes y que mereces cuidado.</li>
 </ul>
 </section>

 <section id="profesional">
 <h2 className="text-3xl font-black font-outfit flex items-center gap-3"><CheckCircle className="w-7 h-7 text-emerald-500" /> Cuándo buscar ayuda profesional</h2>
 <p>Los primeros auxilios emocionales son para momentos agudos. Si experimentas alguno de estos síntomas de forma recurrente, <strong>necesitas un profesional</strong>:</p>
 <ul>
 <li>Los episodios ocurren varias veces por semana</li>
 <li>Interfieren con tu trabajo, estudios o relaciones de manera consistente</li>
 <li>Tienes pensamientos de autolesión o suicidio</li>
 <li>Usas alcohol, drogas o comida para gestionar las emociones</li>
 <li>Llevas más de 2 semanas sin poder funcionar con normalidad</li>
 <li>Las técnicas de esta guía no logran reducir la intensidad</li>
 </ul>
 <p>Buscar ayuda profesional no es debilidad. Es la decisión más valiente y práctica que puedes tomar. Un psicólogo o psiquiatra tiene herramientas que van mucho más allá de lo que cualquier artículo puede ofrecer.</p>
 <p><strong>Tu salud mental no es un lujo. Es el cimiento sobre el que se construye todo lo demás.</strong></p>
 </section>

 </div>

 <AuthorBox category="bienestar" datePublished="2026" dateReviewed="Mayo 2026" />

 <div className="bg-pink-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden">
 <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
 <div className="relative z-10 text-center md:text-left">
 <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-8 text-white">Cuida tu mundo interior</h2>
 <p className="text-pink-100 text-xl leading-relaxed mb-12 font-medium max-w-2xl">Tu bienestar emocional es tan importante como tu salud física. Explora más recursos para construir una mente resiliente.</p>
 <Link href="/guias" className="bg-white text-pink-600 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-pink-100 transition-all shadow-2xl inline-flex items-center gap-3">
 Más guías <ArrowRight className="w-5 h-5" />
 </Link>
 </div>
 </div>
 </div>
 </article>
 );
}
