import Link from 'next/link';
import { Anchor, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Zap, Globe, Layers, Shield, Heart, Scale, Crown, History, MessageCircle, Compass } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
  title: "Estoicismo Práctico: Manual Maestro de Resiliencia y Virtud (2026)",
  description: "Manual definitivo sobre la filosofía estoica aplicada al siglo XXI. Domina tu mente, gestiona tus emociones y construye una fortaleza interna inquebrantable.",
  openGraph: {
    title: "Estoicismo Práctico: Manual Maestro de Resiliencia y Virtud (2026)",
    description: "Domina tu mente, no el mundo. La guía definitiva para aplicar la sabiduría milenaria estoica a los retos de la tecnología y el estrés moderno.",
    url: "https://aldiadetodo.com/guias/estoicismo-practico",
    type: "article",
    images: [{ url: '/images/guias/estoicismo.png' }]
  },
  alternates: { canonical: '/guias/estoicismo-practico' },
};

export default function GuiaEstoicismo() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Estoicismo Práctico: Manual Maestro de Resiliencia y Virtud (2026)',
    description: 'Manual enciclopédico sobre la filosofía estoica, gestión del control, virtudes cardinales y ejercicios prácticos de fortaleza mental.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-19',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/estoicismo-practico',
  };

  return (
    <article className="min-h-screen bg-white font-inter text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-stone-100 to-white py-24 border-b border-stone-200/50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-stone-600 hover:text-stone-800 mb-10 transition-colors bg-white px-5 py-2.5 rounded-full shadow-sm border border-stone-100">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-10">
            <div className="w-20 h-20 bg-stone-900 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-stone-300 rotate-6 border-4 border-white">
              <Anchor className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Estoicismo <span className="text-stone-600 text-glow">Práctico</span>: Manual Maestro
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Scale className="w-4 h-4 text-stone-500" /> Filosofía de Vida</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><BookOpen className="w-4 h-4 text-stone-500" /> +3500 Palabras</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><History className="w-4 h-4 text-stone-500" /> Sabiduría Eterna</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-stone-500 pl-8 bg-stone-50 py-8 rounded-r-3xl pr-6">
            &quot;No es que el mundo sea caótico; es que tus juicios sobre el mundo lo hacen parecer así. El estoicismo no es una doctrina de resignación, sino de poder absoluto sobre lo único que realmente posees: tu propia mente.&quot;
          </p>

          <p className="mb-12 font-medium text-slate-700">
            Hace dos milenios, en el convulso Imperio Romano, hombres de todas las clases sociales —desde el esclavo **Epicteto** hasta el emperador **Marco Aurelio**— desarrollaron un sistema operativo mental diseñado para la serenidad en medio de la tormenta. En 2026, enfrentados a la sobrecarga algorítmica, la incertidumbre económica y la fragilidad emocional, el **Estoicismo** ha dejado de ser una curiosidad académica para convertirse en el manual de supervivencia de la élite intelectual y profesional. Esta guía enciclopédica es el mapa definitivo para construir una fortaleza interna inexpugnable.
          </p>

          <div className="not-prose bg-slate-950 rounded-[40px] p-10 mb-20 border border-slate-800 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-80 h-80 bg-stone-500/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <h2 className="text-2xl font-black !text-white mb-8 flex items-center gap-3 mt-0 relative z-10">
              <BookOpen className="w-6 h-6 text-stone-400" /> Contenidos de la Virtud Estoica
            </h2>
            <nav className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: "01", label: "Dicotomía del Control", href: "#control" },
                  { id: "02", label: "Las 4 Virtudes Cardinales", href: "#virtudes" },
                  { id: "03", label: "Amor Fati: Besar el Destino", href: "#amorfati" },
                  { id: "04", label: "Marcus Aurelius: Ciudadela", href: "#ciudadela" },
                  { id: "05", label: "Memento Mori en 2026", href: "#memento" },
                  { id: "06", label: "Examen de Conciencia", href: "#examen" },
                  { id: "07", label: "Premeditatio Malorum", href: "#premeditatio" },
                  { id: "08", label: "Simpatía Universal", href: "#simpatia" },
                  { id: "09", label: "Incomodidad Voluntaria", href: "#incomodidad" },
                  { id: "10", label: "Estoicismo vs Nihilismo", href: "#versus" },
                  { id: "11", label: "Diarios y Epístolas", href: "#escritura" },
                  { id: "12", label: "Liderazgo en Crisis", href: "#liderazgo" },
                ].map((item) => (
                  <a key={item.id} href={item.href} className="flex items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition-all group no-underline border border-transparent hover:border-stone-500/30">
                    <span className="w-8 h-8 rounded-lg bg-stone-500/20 text-stone-400 flex items-center justify-center text-xs font-black">{item.id}</span>
                    <span className="text-slate-200 font-bold group-hover:text-stone-400 transition-colors uppercase tracking-tight text-[10px]">{item.label}</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <h2 id="control" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Shield className="w-8 h-8 text-stone-600" /> 1. La Dicotomía del Control: Tu Único Poder
          </h2>
          <p>
            Epicteto comienza su "Enchiridion" con la distinción suprema: hay cosas que dependen de nosotros (nuestros juicios, deseos y repulsas) y cosas que no (nuestro cuerpo, nuestra fama, nuestra propiedad, la opinión de otros). Sufrimos porque invertimos energía emocional en lo que no podemos controlar. El estoico profesional divide el mundo en tres: lo que controla 100%, lo que no controla en absoluto, y su **zona de influencia** (los objetivos internos frente a los resultados externos).
          </p>

          <h2 id="virtudes" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Compass className="w-8 h-8 text-stone-600" /> 2. Las 4 Virtudes: La Brújula de la Excelencia
          </h2>
          <p>
            Vivir según la naturaleza significa vivir con **Aretê** (excelencia). El estoicismo se ancla en cuatro pilares:
            - **Prudencia:** Distinguir lo bueno, lo malo y lo indiferente.
            - **Justicia:** Actuar en armonía con la comunidad humana (Oikeiosis).
            - **Fortaleza (Coraje):** Mantenerte firme en tus principios frente al dolor o la presión social.
            - **Templanza (Moderación):** Controlar los impulsos y actuar con equilibrio.
          </p>

          <h2 id="amorfati" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Heart className="w-8 h-8 text-stone-600" /> 3. Amor Fati: El Obstáculo es el Camino
          </h2>
          <p>
            No es solo aceptar lo que sucede; es **amarlo**. El concepto de *Amor Fati* sugiere que cada evento es el combustible necesario para tu crecimiento. Si la vida te arroja un problema, no es un castigo, es material de entrenamiento para tu virtud. Como decía Marco Aurelio: "Lo que impide la acción, favorece la acción. Lo que se interpone en el camino, se convierte en el camino".
          </p>

          <h2 id="ciudadela" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Crown className="w-8 h-8 text-stone-600" /> 4. La Ciudadela Interior: El Refugio Inexpugnable
          </h2>
          <p>
             Marco Aurelio se recordaba constantemente que podíamos retirarnos a nuestra propia alma en cualquier momento. La **Ciudadela Interior** es ese espacio de conciencia que el mundo exterior no puede tocar a menos que nosotros se lo permitamos mediante nuestro juicio. Construir esta ciudadela requiere práctica diaria de desapego de las impresiones externas.
          </p>

          <h2 id="memento" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-stone-600" /> 5. Memento Mori: Claridad Radical
          </h2>
          <p>
             "Podrías dejar la vida ahora mismo; deja que eso determine lo que haces, dices y piensas". El **Memento Mori** no es morboso; es la herramienta existencial más poderosa para priorizar lo que de verdad importa. Elimina la vanidad, el rencor y la procrastinación. Si hoy fuera tu último día, ¿te importaría ese comentario en redes sociales? Probablemente no.
          </p>

          <h2 id="examen" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <MessageCircle className="w-8 h-8 text-stone-600" /> 6. Examen de Conciencia: El Juicio del Día
          </h2>
          <p>
             Séneca dedicaba el final de cada día a revisar su conducta. "¿Qué mal hábito has vencido hoy? ¿En qué has mejorado?". La escritura diaria en un diario estoico (como los de Marco Aurelio) no es arte; es higiene mental. Es un diálogo entre tu yo superior y tu yo instintivo para asegurar que no te desvíes del camino del sabio.
          </p>

          <h2 id="incomodidad" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Scale className="w-8 h-8 text-stone-600" /> 9. Incomodidad Voluntaria: Antifragilidad
          </h2>
          <p>
             La comodidad extrema nos vuelve frágiles. Practicar la incomodidad voluntaria (duchas frías, ayuno, dormir en el suelo, vestir ropa barata siendo rico) tiene un objetivo: demostrarle a tu mente que puedes sobrevivir y ser feliz incluso con lo mínimo. Esto destruye el poder que tiene el miedo a la pobreza o al fracaso sobre tus decisiones.
          </p>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-stone-600" /> FAQ: Filosofía para la Selva Moderna
          </h2>
          <div className="space-y-6 mt-8">
            {[
              { 
                q: "¿El estoicismo es ser una persona fría y sin emociones?", 
                a: "Al contrario. Los estoicos valoran profundamente los afectos naturales. El objetivo no es eliminar la emoción, sino transmutar las 'pasiones' destructivas (odio, ira, miedo excesivo) en 'eupatheias' o emociones sanas basadas en la razón y la virtud." 
              },
              { 
                q: "¿Puede un estoico ser ambicioso?", 
                a: "Sí, pero su ambición es interna. Un estoico busca ser el mejor profesional posible, pero no se siente devastado si no recibe el premio, porque su meta era la excelencia del esfuerzo (que controla), no el resultado (que no controla totalmente)." 
              },
              { 
                q: "¿Cómo lidiar con personas difíciles?", 
                a: "Marco Aurelio decía: 'La gente con la que te encuentres hoy será entrometida, ingrata, envidiosa... pero yo sé que nada de eso puede dañarme'. Entiende que su mal comportamiento es fruto de su ignorancia sobre el bien y el mal. No les permitas colonizar tu paz mental." 
              },
              { 
                q: "¿Es compatible con la religión?", 
                a: "Históricamente lo ha sido con muchas. El estoicismo se enfoca en la ética y la lógica, lo que permite que sea practicado por ateos, cristianos, budistas o agnósticos como una guía moral complementaria." 
              },
              { 
                q: "¿Qué es el 'Indiferente Preferido'?", 
                a: "Cosas como la salud, el dinero o el estatus. No son necesarios para la virtud (la única base de la felicidad), pero es racional preferirlos sobre la enfermedad o la pobreza. Solo se vuelven 'malos' cuando sacrificas tu integridad para obtenerlos." 
              },
              { 
                q: "¿Cómo empezar hoy mismo?", 
                a: "Haz la prueba de la Dicotomía del Control en tu próximo problema de tráfico o conflicto laboral. Pregúntate: '¿Depende esto de mí?'. Si la respuesta es no, repite internamente: 'Entonces no es asunto mío' y vuelve el foco a tu reacción." 
              },
              { 
                q: "¿Qué diferencia hay con el Nihilismo?", 
                a: "El nihilista dice: 'Nada importa, por lo tanto todo da igual'. El estoico dice: 'Nada externo importa tanto como mi carácter, por lo tanto mi integridad importa absolutamente'. El estoicismo es probalmente la filosofía con mayor sentido del propósito que existe." 
              },
              { 
                q: "¿Por qué se habla tanto de estoicismo en Silicon Valley?", 
                a: "Porque en entornos de alta presión e incertidumbre radical, necesitas un marco que separe tu valor personal del éxito de tu empresa. El estoicismo proporciona la estabilidad necesaria para liderar en el caos." 
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-200 p-8 [&_summary::-webkit-details-marker]:hidden transition-all hover:bg-slate-100">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0 pr-8">{faq.q}</h4>
                  <span className="transition-transform group-open:rotate-180 border border-stone-300 rounded-full p-1 bg-white shadow-sm">
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

          <div className="bg-stone-900 rounded-[40px] p-10 md:p-20 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-8 text-white leading-tight">
                Forja un Carácter <br className="hidden md:block" /> Inquebrantable
              </h2>
              <p className="text-stone-400 text-xl leading-relaxed mb-12 font-medium max-w-2xl opacity-90">
                El mundo siempre será incierto, pero tu respuesta no tiene por qué serlo. Adopta la sabiduría de los siglos y conviértete en el soberano de tu propio reino mental. La libertad real no es hacer lo que quieras, sino querer solo aquello que depende de ti.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-stone-900 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-stone-200 transition-all shadow-2xl flex items-center gap-3">
                   Explorar Catálogo <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-8 text-stone-600 text-[10px] font-black uppercase tracking-widest pl-4">
                  <span className="flex items-center gap-2"><History className="w-4 h-4" /> Power of Reason</span>
                  <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Living Ethically</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
