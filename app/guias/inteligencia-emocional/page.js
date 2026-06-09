import Link from 'next/link';
import { Brain, ChevronLeft, CheckCircle, Users, MessageCircle, Lightbulb, HeartHandshake, Eye, Target, Zap, HelpCircle, ArrowRight, BookOpen, Shield, Activity, Compass, Flame, Crown } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
 title: "Inteligencia Emocional y Arquitectura Afectiva: Manual Maestro (2026)",
 description: "Manual definitivo sobre inteligencia emocional basado en neurociencia. Domina la autorregulación, la empatía profunda y la comunicación no violenta.",
 openGraph: {
 title: "Inteligencia Emocional y Arquitectura Afectiva: Manual Maestro (2026)",
 description: "Domina el arte de gestionar tus emociones y las de los demás. La habilidad definitiva para el éxito personal y profesional.",
 url: "https://aldiadetodo.com/guias/inteligencia-emocional",
 type: "article",
 images: [{ url: '/images/guias/inteligencia.png' }]
 },
 alternates: { canonical: '/guias/inteligencia-emocional' },
};

export default function GuiaInteligencia() {
 const jsonLd = {
 '@context': 'https://schema.org', '@type': 'Article',
 headline: 'Inteligencia Emocional y Arquitectura Afectiva: Manual Maestro (2026)',
 description: 'Guía completa sobre inteligencia emocional, granularidad afectiva, comunicación no violenta y liderazgo resonante.',
 author: { '@type': 'Person', name: 'Nestor Abanto Huaman' },
 publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
 datePublished: '2026-05-23', dateModified: '2026-05-23',
 mainEntityOfPage: 'https://aldiadetodo.com/guias/inteligencia-emocional',
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
 <div className="w-20 h-20 bg-amber-500 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-amber-200 rotate-6 border-4 border-white">
 <Brain className="w-10 h-10 text-white" />
 </div>
 </div>
 <h1 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
 Inteligencia <span className="text-amber-600 text-glow">Emocional</span> Maestro
 </h1>
 <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
 <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Users className="w-4 h-4 text-amber-500" /> Human Relationship Expert</span>
 
 <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Zap className="w-4 h-4 text-amber-500" /> Versión 2026</span>
 </div>
 </div>
 </div>

 <div className="container mx-auto px-4 max-w-4xl py-16">
 <div className="prose prose-lg prose-slate max-w-none">
 <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-amber-500 pl-8 bg-amber-50 py-8 rounded-r-3xl pr-6">
 &quot;En un siglo dominado por la inteligencia artificial, tu única ventaja competitiva real es tu inteligencia humana: la capacidad de sentir, empatizar y orquestar el complejo flujo de las emociones sociales.&quot;
 </p>

 <p className="mb-12 font-medium text-slate-700">
 La Inteligencia Emocional (IE) no es &quot;ser amable&quot;; es la capacidad técnica de identificar, evaluar y gestionar las señales neuroquímicas que dictan el comportamiento humano. En 2026, la IE es la base de la salud mental, el liderazgo de alto impacto y la resiliencia en entornos de hiper-estrés. Esta guía enciclopédica disecciona los sistemas afectivos de la mente moderna para que pases de ser un esclavo de tus impulsos a ser el arquitecto de tu paisaje interior.
 </p>

 <div className="not-prose bg-slate-950 rounded-[40px] p-10 mb-20 border border-slate-800 shadow-2xl relative overflow-hidden">
 <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
 <h2 className="text-2xl font-black !text-white mb-8 flex items-center gap-3 mt-0 relative z-10">
 <BookOpen className="w-6 h-6 text-amber-400" /> Currículo de Maestría Emocional
 </h2>
 <nav className="relative z-10">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
 {[
 { id: "01", label: "Secuestro de la Amígdala", href: "#amygdala" },
 { id: "02", label: "Granularidad Emocional", href: "#granularity" },
 { id: "03", label: "Los 5 Pilares de Goleman", href: "#pillars" },
 { id: "04", label: "Comunicación No Violenta", href: "#nvc" },
 { id: "05", label: "Empatía vs Compasión", href: "#empathy" },
 { id: "06", label: "Autorregulación Progresiva", href: "#regulation" },
 { id: "07", label: "Vulnerabilidad como Coraje", href: "#vulnerability" },
 { id: "08", label: "Liderazgo Resonante", href: "#leadership" },
 { id: "09", label: "Sistemas de Paul Gilbert", href: "#gilbert" },
 { id: "10", label: "Validación y Escucha", href: "#listening" },
 { id: "11", label: "Narcisismo y Límites", href: "#boundaries" },
 { id: "12", label: "El Yo Compasivo 2026", href: "#compassionate" },
 ].map((item) => (
 <a key={item.id} href={item.href} className="flex items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition-all group no-underline border border-transparent hover:border-amber-500/30">
 <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-black">{item.id}</span>
 <span className="text-slate-200 font-bold group-hover:text-amber-400 transition-colors uppercase tracking-tight text-[10px]">{item.label}</span>
 </a>
 ))}
 </div>
 </nav>
 </div>

 <h2 id="amygdala" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
 <Target className="w-8 h-8 text-amber-600" /> 1. Amygdala Hijack: El Secuestro Límbico
 </h2>
 <p>
 Cuando alguien te critica o te insulta, la información llega a la amígdala antes que al neocórtex racional. Este &quot;atajo&quot; evolutivo produce el **Amygdala Hijack**: una respuesta de lucha o huida de segundos de duración que puede destruir reputaciones o relaciones. La maestría emocional comienza por reconocer la señal física del secuestro (corazón acelerado, calor en el cuello) y aplicar la pausa consciente de 6 segundos para dejar que la lógica retome el mando.
 </p>

 <h2 id="granularity" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
 <Eye className="w-8 h-8 text-amber-600" /> 2. Granularidad Emocional: Nombrar es Dominar
 </h2>
 <p>
 No estás &quot;mal&quot;; quizás estás melancólico, frustrado, ignorado o decepcionado. Según la neurocientífica Lisa Feldman Barrett, la **Granularidad Emocional** es la capacidad de distinguir entre emociones sutiles. Cuanto más preciso sea tu vocabulario emocional, más eficiente será tu cerebro para construir una respuesta adaptativa. Nombrar una emoción con precisión reduce inmediatamente la activación de la amígdala.
 </p>

 <h2 id="nvc" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
 <MessageCircle className="w-8 h-8 text-amber-600" /> 4. Comunicación No Violenta (Model Marshall)
 </h2>
 <p>
 La mayoría de las discusiones fallan porque atacamos en lugar de expresar necesidades. El framework CNV requiere:
 1. **Observación:** &quot;Veo que llegaste 20 min tarde&quot; (Hechos, no juicios).
 2. **Sentimiento:** &quot;Me siento ansioso y poco valorado&quot;.
 3. **Necesidad:** &quot;Porque necesito previsibilidad y respeto por mi tiempo&quot;.
 4. **Petición:** &quot;¿Podrías avisarme si vas a retrasarte más de 5 min?&quot;.
 Este sistema desarma la defensa del otro y abre la puerta a la resolución real.
 </p>

 <h2 id="empathy" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
 <HeartHandshake className="w-8 h-8 text-amber-600" /> 5. Empatía vs Compasión vs Distrés
 </h2>
 <p>
 La empatía pura puede llevar al **Burnout Empático**. Si sientes el dolor del otro como propio, te bloqueas. La **Compasión**, sin embargo, implica notar el dolor, sentir el deseo de ayudar y mantener un límite saludable. Un profesional con alta IE no se &quot;ahoga&quot; con el otro; le lanza un salvavidas desde la orilla firme de su propia estabilidad emocional.
 </p>

 <h2 id="gilbert" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
 <Compass className="w-8 h-8 text-amber-600" /> 9. Los 3 Sistemas de Paul Gilbert
 </h2>
 <p>
 Tu cerebro opera bajo tres sistemas que deben estar en equilibrio:
 - **Sistema de Amenaza (Rojo):** Enfoque en protección y seguridad (Cortisol).
 - **Sistema de Logro (Azul):** Enfoque en obtener recursos y estatus (Dopamina).
 - **Sistema de Calma (Verde):** Enfoque en conexión, paz y restauración (Oxitocina).
 La mayoría de los problemas de salud mental modernos vienen de un exceso de Rojo/Azul y una total ausencia de Verde.
 </p>

 <h2 id="vulnerability" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
 <Flame className="w-8 h-8 text-amber-600" /> 7. Vulnerabilidad Radical: La Medida del Coraje
 </h2>
 <p>
 Brené Brown demostró que la vulnerabilidad no es debilidad; es la medida más precisa del coraje. Admitir un error, decir &quot;No sé&quot; o pedir ayuda son actos de alta inteligencia emocional que generan **Seguridad Psicológica** en los equipos y permiten conexiones humanas reales que el perfeccionismo digital impide.
 </p>

 <h2 id="leadership" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
 <Crown className="w-8 h-8 text-amber-600" /> 8. Liderazgo Resonante vs Disonante
 </h2>
 <p>
 Un líder diconante crea una atmósfera de miedo y tensión (cortisol), lo que apaga la creatividad del equipo. Un líder **Resonante** sintoniza con las emociones del grupo, valida sus miedos y proyecta una calma contagiosa. El coeficiente intelectual te consigue el trabajo, pero tu coeficiente emocional decide qué tan alto llegarás y cuántas personas querrán seguirte por el camino.
 </p>

 <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
 <HelpCircle className="w-8 h-8 text-amber-600" /> FAQ: Consultoría de Inteligencia Humana
 </h2>
 <div className="space-y-6 mt-8">
 {[
 { 
 q: "¿Qué es la 'Validación' y por qué es tan potente?", 
 a: "Validar no es estar de acuerdo. Es decir: 'Veo lo que sientes y entiendo por qué lo sientes desde tu perspectiva'. Es la herramienta número uno para desactivar conflictos de forma instantánea porque satisface la necesidad humana básica de ser visto." 
 },
 { 
 q: "¿Cómo lidiar con un narcisista o alguien sin IE?", 
 a: "Usa la técnica de la 'Piedra Gris': vuélvete lo más aburrido y neutral posible para no darles el suministro emocional que buscan. Establece límites físicos y de tiempo claros. No intentes 'educar' emocionalmente a quien no quiere aprender." 
 },
 { 
 q: "¿Es la IE relevante para perfiles técnicos/ingenieros?", 
 a: "Es VITAL. El software se construye para humanos y por humanos. Un ingeniero genio con IE cero es un riesgo para el proyecto; uno con alta IE se convierte en el pegamento que hace que el equipo rinda al 200%." 
 },
 { 
 q: "¿Se puede entrenar la IE a cualquier edad?", 
 a: "Sí. A diferencia del CI que es estático, el CE (Cociente Emocional) es una habilidad. Mediante la meditación, el journaling y la terapia, puedes reprogramar tus respuestas automáticas de por vida." 
 },
 { 
 q: "¿Qué es la 'Represión' emocional?", 
 a: "Es ocultar la emoción para que nadie la vea, incluido tú mismo. Esto no la elimina; la empuja al cuerpo, manifestándose luego como estrés crónico, dolores inexplicables o explosiones de ira desproporcionadas." 
 },
 { 
 q: "¿Cómo mejorar mi empatía rápidamente?", 
 a: "Practica la 'Curiosidad Radical'. En lugar de juzgar la actitud de alguien, pregúntate constantemente: '¿Qué le habrá pasado hoy para actuar así?'. La curiosidad es el enemigo natural del juicio." 
 },
 { 
 q: "¿Qué son los 'Disparadores' (Triggers)?", 
 a: "Son eventos externos que resuenan con un trauma o herida del pasado, provocando una respuesta emocional desproporcionadamente fuerte. Identificarlos es el primer paso para desactivar su poder sobre ti." 
 },
 { 
 q: "¿Qué papel juega el cuerpo en la IE?", 
 a: "Central. Las emociones se sienten en el cuerpo primero. Aprender a escanear tu tensión muscular o tu ritmo respiratorio te permite detectar una emoción minutos antes de que el pensamiento la racionalice." 
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
 <AuthorBox category="crecimiento" datePublished="2026" dateReviewed="Mayo 2026" />

 <div className="bg-amber-600 rounded-[40px] p-10 md:p-20 mt-24 text-white relative shadow-2xl overflow-hidden group">
 <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
 <div className="relative z-10 text-center md:text-left">
 <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-8 text-white leading-tight">
 El Poder de la <br className="hidden md:block" /> Humanidad Consciente
 </h2>
 <p className="text-amber-50 text-xl leading-relaxed mb-12 font-medium max-w-2xl opacity-90">
 Al dominar tus emociones, dejas de ser un pasajero del azar para convertirte en el capitán de tu destino social y personal. En AldiaDeTodo te damos las llaves para que habites tu mente con plenitud y propósito.
 </p>
 <div className="flex flex-wrap gap-4 justify-center md:justify-start">
 <Link href="/guias" className="bg-white text-amber-600 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-amber-50 transition-all shadow-2xl flex items-center gap-3">
 Explorar Catálogo <ArrowRight className="w-5 h-5" />
 </Link>
 <div className="flex items-center gap-8 text-amber-100 text-[10px] font-black uppercase tracking-widest pl-4">
 <span className="flex items-center gap-2"><HeartHandshake className="w-4 h-4" /> Resonant Soul</span>
 <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> 2026 Skills</span>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </article>
 );
}
