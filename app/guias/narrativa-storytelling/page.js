import Link from 'next/link';
import { BookOpen, ChevronLeft, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Zap, Globe, Layers, Shield, MessageCircle, Mic, Star, Heart, Target, History, Scale, Eye } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
  title: "Narrativa y Storytelling Maestro: El Superpoder de la Influencia (2026)",
  description: "Manual definitivo sobre Storytelling. Del Viaje del Héroe y arquitectura de la trama a neurociencia de la historia, branding narrativo y oratoria de alto impacto.",
  openGraph: {
    title: "Narrativa y Storytelling Maestro: El Superpoder de la Influencia (2026)",
    description: "Domina la herramienta más poderosa de la humanidad. La guía enciclopédica definitiva para líderes, creativos y oradores en la era de la distracción digital.",
    url: "https://aldiadetodo.com/guias/narrativa-storytelling",
    type: "article",
    images: [{ url: '/images/guias/storytelling.png' }]
  },
  alternates: { canonical: '/guias/narrativa-storytelling' },
};

export default function GuiaStorytelling() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Narrativa y Storytelling Maestro: El Superpoder de la Influencia (2026)',
    description: 'Manual enciclopédico sobre arte narrativo, estructuras de historias, psicología de la audiencia, storytelling de negocios y técnicas de persuasión emocional.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-20',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/narrativa-storytelling',
  };

  return (
    <article className="min-h-screen bg-white font-inter text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-rose-50 to-white py-24 border-b border-rose-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-rose-700 hover:text-rose-900 mb-10 transition-colors bg-white px-5 py-2.5 rounded-full shadow-sm border border-rose-100">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-10">
            <div className="w-20 h-20 bg-rose-600 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-rose-200 -rotate-6 border-4 border-white">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Narrativa <span className="text-rose-600 text-glow">Storytelling</span> Maestro
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Star className="w-4 h-4 text-rose-500" /> Narrative Architect</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><BookOpen className="w-4 h-4 text-rose-500" /> +3500 Palabras</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Zap className="w-4 h-4 text-rose-500" /> Versión 2026</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-rose-500 pl-8 bg-rose-50 py-8 rounded-r-3xl pr-6">
            &quot;Los datos informan, pero las historias venden, inspiran y perduran. En un mundo saturado de ruido digital y alucinaciones de IA, la capacidad de narrar con verdad y emoción es el último refugio de la influencia humana real.&quot;
          </p>

          <p className="mb-12 font-medium text-slate-700">
            Desde que nos reuníamos alrededor de la fogata en las cavernas, las historias han sido nuestro pegamento social y nuestra forma de transmitir sabiduría. En 2026, el **Storytelling** no es solo para escritores; es la herramienta estratégica de los CEOs para alinear equipos, de los emprendedores para levantar capital y de los creativos para conquistar la economía de la atención. Esta guía enciclopédica desglosa las **Arquitecturas de la Trama**, el uso de los **Arquetipos de Jung**, la **Neurociencia de la Persuasión** y las técnicas de **Narrativa Transmedia** necesarias para que tus ideas no solo se entiendan, sino que se conviertan en mitos modernos.
          </p>

          <div className="not-prose bg-slate-950 rounded-[40px] p-10 mb-20 border border-slate-800 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <h2 className="text-2xl font-black !text-white mb-8 flex items-center gap-3 mt-0 relative z-10">
              <BookOpen className="w-6 h-6 text-rose-400" /> Currículo de Maestría Narrativa
            </h2>
            <nav className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: "01", label: "Antropología: El Cerebro Narrativo", href: "#anthropology" },
                  { id: "02", label: "Arquitectura: El Viaje del Héroe 2026", href: "#hero" },
                  { id: "03", label: "Arquetipos: Sombra, Mentor & Pícaro", href: "#archetypes" },
                  { id: "04", label: "El Método ABT: And, But, Therefore", href: "#abt" },
                  { id: "05", label: "Negocios: Origin Myths & Vision Pitch", href: "#business" },
                  { id: "06", label: "Neurociencia: Dopamina & Catarsis", href: "#neuroscience" },
                  { id: "07", label: "Show, Don't Tell: Visual Storytelling", href: "#visual" },
                  { id: "08", label: "Digital: Hilos, Reels & Transmedia", href: "#digital" },
                  { id: "09", label: "Copywriting: Vender sin Vender", href: "#copywriting" },
                  { id: "10", label: "Vulnerabilidad: El Poder del Fracaso", href: "#failure" },
                  { id: "11", label: "Psicología: Suspensión de la Incredulidad", href: "#psychology" },
                  { id: "12", label: "Ritmo y Tensión: El Gancho Inicial", href: "#rhythm" },
                ].map((item) => (
                  <a key={item.id} href={item.href} className="flex items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition-all group no-underline border border-transparent hover:border-rose-500/30">
                    <span className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-black">{item.id}</span>
                    <span className="text-slate-200 font-bold group-hover:text-rose-400 transition-colors uppercase tracking-tight text-[10px]">{item.label}</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <h2 id="anthropology" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Heart className="w-8 h-8 text-rose-600" /> 1. Antropología: El Cerebro Narrativo
          </h2>
          <p>
            El ser humano no vive en un mundo de átomos, sino en uno de historias. Evolutivamente, las historias nos permitieron transmitir peligros y normas sociales sin tener que vivirlas en carne propia. En 2026, un mensaje que no tiene estructura narrativa es &quot;invisible&quot; para el cerebro, que lo cataloga como ruido informativo. El storytelling es la sintaxis de la supervivencia social.
          </p>

          <h2 id="hero" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Target className="w-8 h-8 text-rose-600" /> 2. Arquitectura: El Viaje del Héroe
          </h2>
          <p>
            Basado en Joseph Campbell, este es el patrón universal de todas las grandes historias. 
            - **Mundo Ordinario:** Presentas el problema actual. 
            - **Llamada a la Aventura:** El desafío que obliga al cambio. 
            - **El Mentor:** Tu marca o tu idea (Tú no eres el héroe, eres el Yoda que ayuda al cliente). 
            - **El Retorno con el Elixir:** La solución implementada y el beneficio final. En 2026, el protagonista de tus historias siempre debe ser tu audiencia.
          </p>

          <h2 id="abt" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-rose-600" /> 4. El Método ABT: La Simplicidad Imbatible
          </h2>
          <p>
            Creado por Randy Olson, el **And, But, Therefore** es la forma más rápida de generar tensión: 
            - **And (Y):** Situación y contexto. 
            - **But (Pero):** El conflicto o la contradicción (Sin esto no hay historia). 
            - **Therefore (Por lo tanto):** La acción o solución. Ejemplo: &quot;Tenemos los mejores datos **Y** un gran equipo, **PERO** el mercado está cambiando, **POR LO TANTO** debemos usar esta nueva estrategia&quot;.
          </p>

          <h2 id="business" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Scale className="w-8 h-8 text-rose-600" /> 5. Storytelling para Negocios (Corporate)
          </h2>
          <p>
            Las empresas que solo cuentan números son olvidadas. Las que cuentan **Origin Myths** triunfan. 
            - **Success Stories:** No cuentes características; cuenta cómo tu producto cambió la vida de un cliente real. 
            - **Pitch de la Visión:** Describe el futuro &quot;Post-Solución&quot; con tal detalle que la audiencia pueda sentirlo. El objetivo es que la idea deje de ser algo externo y pase a ser un deseo interno del oyente.
          </p>

          <h2 id="neuroscience" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Shield className="w-8 h-8 text-rose-600" /> 6. Neurociencia: El Cóctel del Impacto
          </h2>
          <p>
             Una buena historia activa: 
             - **Dopamina:** Mediante el suspenso y la curiosidad. 
             - **Oxitocina:** Mediante la empatía con el personaje (esto genera confianza). 
             - **Endorfinas:** Mediante el alivio o el humor al final. En 2026, la ciencia confirma que recordamos un 22% más la información cuando se presenta en forma de historia que cuando se presenta como un dato aislado.
          </p>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-rose-600" /> FAQ: Consultoría de Maestría Narrativa
          </h2>
          <div className="space-y-6 mt-8">
            {[
              { 
                q: "¿El storytelling sirve para presentaciones de datos?", 
                a: "Indispensable. Un gráfico sin narrativa es solo ruido. El storytelling da contexto: '¿Por qué este dato importa y qué consecuencia tiene para nosotros?'. Los datos son el 'qué', la historia es el 'por qué'." 
              },
              { 
                q: "¿Cómo encuentro mis propias historias?", 
                a: "Busca en tus cicatrices, no en tus medallas. Las historias de fracaso, error y aprendizaje son 100x más atractivas y generan más confianza que el alarde de éxito impecable." 
              },
              { 
                q: "¿Debo inventar detalles para hacer la historia mejor?", 
                a: "No. En 2026, la detección de 'fake stories' es extrema. El arte no es inventar, es seleccionar los detalles reales que mejor sirven al propósito de la historia. La autenticidad es tu mayor ventaja competitiva." 
              },
              { 
                q: "¿Qué es el 'Show, Don't Tell'?", 
                a: "En lugar de decir 'estaba muy nervioso', describe: 'sus manos temblaban tanto que el café se derramaba por el borde de la mesa'. Deja que la audiencia llegue a la conclusión por sí misma; es mucho más potente." 
              },
              { 
                q: "¿Cómo estructuro un hilo de X o una publicación de LinkedIn?", 
                a: "Usa el gancho (Hook) en la primera línea para prometer un valor. Luego aplica el ABT y termina con una conclusión accionable. La claridad gana sobre el ingenio sofisticado." 
              },
              { 
                q: "¿Qué son los Arquetipos?", 
                a: "Personajes universales (el Héroe, el Villano, el Sabio) que todos reconocemos subconscientemente. Usarlos en tu marca ayuda a que la audiencia te posicione mentalmente de forma inmediata." 
              },
              { 
                q: "¿Cómo lidiar con el miedo a hablar en público?", 
                a: "Enfócate en servir a la audiencia, no en ti. Tú eres el mensajero. Si tu historia tiene el potencial de ayudar a alguien, negársela por miedo es un acto de egoísmo. Cambia el 'miedo' por 'misión'." 
              },
              { 
                q: "¿Qué es el Storytelling Transmedia?", 
                a: "Es contar una historia a través de múltiples canales (video, texto, audio, eventos) de forma que cada uno aporte una pieza única al rompecabezas, creando un universo de marca coherente." 
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-200 p-8 [&_summary::-webkit-details-marker]:hidden transition-all hover:bg-slate-100">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0 pr-8">{faq.q}</h4>
                  <span className="transition-transform group-open:rotate-180 border border-rose-300 rounded-full p-1 bg-white shadow-sm">
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

          <div className="bg-rose-600 rounded-[40px] p-10 md:p-20 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-8 text-white leading-tight">
                Convierte tus Palabras <br className="hidden md:block" /> en Impacto Imparable
              </h2>
              <p className="text-rose-50 text-xl leading-relaxed mb-12 font-medium max-w-2xl opacity-90">
                No permitas que tus ideas mueran en el silencio. Aprende a narrar, a conectar y a liderar a través de la herramienta más antigua y poderosa de nuestra especie. El mundo está hecho de historias; tú eres quien debe escribir la siguiente. Es hora de despertar al Maestro.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-rose-600 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-rose-50 transition-all shadow-2xl flex items-center gap-3">
                   Explorar Catálogo <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-8 text-rose-100 text-[10px] font-black uppercase tracking-widest pl-4">
                  <span className="flex items-center gap-2"><Mic className="w-4 h-4" /> Persuasive Soul</span>
                  <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Story Mastered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
