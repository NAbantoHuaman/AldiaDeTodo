import Link from 'next/link';
import { Terminal, ChevronLeft, BookOpen, CheckCircle, Zap, MessageSquare, Shield, ArrowRight, HelpCircle, Cpu, Layers, Sparkles, Brain, Code, Lightbulb, Bot, Target, History, Scale } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
  title: "Ingeniería de Prompts Maestro: Manual de Programación Cognitiva (2026)",
  description: "Manual definitivo sobre Ingeniería de Prompts. De lógicas de tokens y Chain-of-Thought a Meta-Prompting, seguridad adversarial y optimización con DSPy.",
  openGraph: {
    title: "Ingeniería de Prompts Maestro: Manual de Programación Cognitiva (2026)",
    description: "Domina el lenguaje de la nueva computación. La guía enciclopédica definitiva para extraer el máximo rendimiento de los modelos de inteligencia artificial.",
    url: "https://aldiadetodo.com/guias/ingenieria-prompts",
    type: "article",
    images: [{ url: '/images/guias/prompts.png' }]
  },
  alternates: { canonical: '/guias/ingenieria-prompts' },
};

export default function GuiaPrompts() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Ingeniería de Prompts Maestro: Manual de Programación Cognitiva (2026)',
    description: 'Manual enciclopédico sobre ingeniería de instrucciones, estrategias de razonamiento para LLMs, seguridad de prompts y optimización algorítmica de la comunicación con IA.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-19', dateModified: '2026-04-20',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/ingenieria-prompts',
  };

  return (
    <article className="min-h-screen bg-white font-inter text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-24 border-b border-blue-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 hover:text-blue-800 mb-10 transition-colors bg-white px-5 py-2.5 rounded-full shadow-sm border border-blue-100">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-10">
            <div className="w-20 h-20 bg-blue-600 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-blue-200 rotate-3 border-4 border-white">
              <Bot className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Ingeniería de <span className="text-blue-600 text-glow">Prompts</span> Maestro
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Terminal className="w-4 h-4 text-blue-500" /> Cognitive Architect</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><BookOpen className="w-4 h-4 text-blue-500" /> +3500 Palabras</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Zap className="w-4 h-4 text-blue-500" /> Versión 2026</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-blue-500 pl-8 bg-blue-50 py-8 rounded-r-3xl pr-6">
            &quot;En la era de la IA, el lenguaje es el nuevo lenguaje de programación. Un prompt bien diseñado no es una petición; es una arquitectura lógica que guía al silicio hacia la excelencia cognitiva.&quot;
          </p>

          <p className="mb-12 font-medium text-slate-700">
            La Ingeniería de Prompts ha pasado de ser un &quot;arte oscuro&quot; a una disciplina técnica fundamental. En 2026, orquestar modelos de lenguaje masivos (LLMs) requiere entender la **Probabilidad Latente**, la **Tokenización Semántica** y las lógicas de **Auto-Atención**. Esta guía enciclopédica desglosa las estrategias de razonamiento estructurado (**Chain-of-Thought**, **Tree-of-Thoughts**), los marcos de seguridad para prevenir inyecciones y las herramientas de evaluación algorítmica para convertir la IA en un componente de producción determinista y confiable.
          </p>

          <div className="not-prose bg-slate-950 rounded-[40px] p-10 mb-20 border border-slate-800 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <h2 className="text-2xl font-black !text-white mb-8 flex items-center gap-3 mt-0 relative z-10">
              <BookOpen className="w-6 h-6 text-blue-400" /> Currículo de Programación Cognitiva
            </h2>
            <nav className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: "01", label: "Psicología LLM: Predicción vs Razonamiento", href: "#psychology" },
                  { id: "02", label: "Taxonomía: Zero, Few & Multi-shot", href: "#taxonomy" },
                  { id: "03", label: "Chain-of-Thought (CoT) Pro", href: "#cot" },
                  { id: "04", label: "Tree-of-Thoughts (ToT) & Planning", href: "#tot" },
                  { id: "05", label: "Meta-Prompting: IA que genera IA", href: "#meta" },
                  { id: "06", label: "Delineado de Salida: YAML vs JSON Schemas", href: "#output" },
                  { id: "07", label: "Seguridad: Prompt Injection Defense", href: "#security" },
                  { id: "08", label: "System Prompts: La Constitución", href: "#system" },
                  { id: "09", label: "Adversarial Prompting & Jailbreaks", href: "#adversarial" },
                  { id: "10", label: "DSPy: Programación de Prompts Real", href: "#dspy" },
                  { id: "11", label: "Métricas: Alucinación & Precisión", href: "#metrics" },
                  { id: "12", label: "Prompting Multimodal: Visión & Voz", href: "#multimodal" },
                ].map((item) => (
                  <a key={item.id} href={item.href} className="flex items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition-all group no-underline border border-transparent hover:border-blue-500/30">
                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">{item.id}</span>
                    <span className="text-slate-200 font-bold group-hover:text-blue-400 transition-colors uppercase tracking-tight text-[10px]">{item.label}</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <h2 id="psychology" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Brain className="w-8 h-8 text-blue-600" /> 1. Psicología LLM: El Motor Probabilístico
          </h2>
          <p>
            Para dominar un prompt, debes entender que el modelo no &quot;sabe&quot; cosas; el modelo **predice la continuación más probable**. La Ingeniería de Prompts es el arte de reducir el espacio de búsqueda estadística del modelo. Al proporcionar un rol y un contexto, estás &quot;iluminando&quot; un camino específico en su red neural. En 2026, esto se mide mediante la **Perplejidad**: cuanto menor sea la perplejidad de tu prompt para el modelo, más determinista y precisa será su respuesta.
          </p>

          <h2 id="cot" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-blue-600" /> 3. Chain-of-Thought (CoT): El Poder del Paso a Paso
          </h2>
          <p>
            La técnica más potente es obligar al modelo a utilizar tokens como &quot;memoria de trabajo&quot;. Al pedirle que **&quot;piense paso a paso antes de dar la respuesta final&quot;**, permites que el modelo genere los cálculos intermedios necesarios. 
            - **Zero-shot CoT:** Simplemente añadir &quot;Let's think step by step&quot;. 
            - **Few-shot CoT:** Proporcionar ejemplos donde el modelo muestra su razonamiento. 
            Esto reduce las alucinaciones matemáticas y lógicas en un 80% comparado con una respuesta directa.
          </p>

          <h2 id="meta" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Sparkles className="w-8 h-8 text-blue-600" /> 5. Meta-Prompting: La IA como Arquitecto
          </h2>
          <p>
            En 2026, los mejores ingenieros no escriben los prompts finales; escriben **Meta-Prompts**. Un Meta-Prompt es una instrucción que le pide al modelo generar el mejor prompt posible para una tarea específica. Esto aprovecha el conocimiento del modelo sobre su propia arquitectura para optimizar la estructura de las instrucciones, el uso de delimitadores y las técnicas de &quot;few-shot&quot; que mejor funcionan con ese modelo específico.
          </p>

          <h2 id="security" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Shield className="w-8 h-8 text-blue-600" /> 7. Seguridad: Prompt Injection & Defense
          </h2>
          <p>
            Con el auge de los agentes que acceden a datos reales, la seguridad del prompt es vital. 
            - **DAN & Jailbreaking:** Intentos de saltarse los filtros éticos. 
            - **Indirect Prompt Injection:** Un hacker pone instrucciones maliciosas en un sitio web que tu agente de IA va a resumir. 
            Como pro, debes usar **System Prompts Blindados** con delimitadores de tipo XML o Markdown (`### INSTRUCTIONS`, `--- END ---`) y técnicas de &quot;Sandboxing&quot; para asegurar que el modelo nunca tome datos externos como comandos prioritarios.
          </p>

          <h2 id="dspy" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Code className="w-8 h-8 text-blue-600" /> 10. DSPy: El Fin del Prompting Manual
          </h2>
          <p>
             La frontera final en 2026 es el **Prompting Algorítmico**. Frameworks como **DSPy** permiten tratar a los prompts como código. Tú defines la firma de la función (qué entra y qué sale) y un optimizador (Teleprompter) busca automáticamente cuál es la mejor combinación de instrucciones y ejemplos para maximizar la métrica de éxito. Ya no editamos texto; compilamos lógica cognitiva.
          </p>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-blue-600" /> FAQ: Consultoría de Ingeniería de Prompts
          </h2>
          <div className="space-y-6 mt-8">
            {[
              { 
                q: "¿Por qué el orden de la información importa tanto?", 
                a: "Los modelos sufren de 'Lost in the Middle'. Tienden a recordar mejor las instrucciones al principio del prompt (primacía) y las restricciones al final (recencia). La parte central suele ser la zona de menor atención del modelo." 
              },
              { 
                q: "¿Qué son los Delimitadores y por qué usarlos?", 
                a: "Usar '###', '---' o etiquetas XML (<context></context>) ayuda al modelo a separar claramente las instrucciones del ruido de los datos, evitando que se confunda y tome el contexto como parte del comando." 
              },
              { 
                q: "¿Qué tal es la Temperatura 0.0?", 
                a: "Es obligatoria para tareas que requieren consistencia (código, extracción de datos). Para tareas creativas (storytelling), una temperatura de 0.7 a 1.2 permite una mayor exploración del espacio latente." 
              },
              { 
                q: "¿Es el Prompt Engineering una carrera con futuro?", 
                a: "Como carrera aislada, no. Como habilidad transversal para ingenieros de software, es la diferencia entre un programador y un Arquitecto de IA de Élite." 
              },
              { 
                q: "¿Cómo evito respuestas de la IA tipo 'Como modelo de lenguaje...'?", 
                a: "Utiliza System Prompts que definan un rol estricto y prohíban explícitamente las introducciones genéricas y disclaimers, forzando al modelo a ir directo a la respuesta útil." 
              },
              { 
                q: "¿Qué es el Self-Consistency en Prompting?", 
                a: "Es pedirle al modelo que genere 5 respuestas a la misma pregunta y luego elegir la más común. Esto corrige errores aleatorios y alucinaciones de una sola pasada." 
              },
              { 
                q: "¿Por qué pedirle a la IA que sea 'breve' suele fallar?", 
                a: "La IA prefiere generar tokens. Es mejor darle un límite estructural: 'Responde en menos de 3 párrafos de máximo 2 frases cada uno'. Los límites estructurales funcionan mejor que los adjetivos abstractos." 
              },
              { 
                q: "¿Qué es el Re-ranking en arquitecturas RAG?", 
                a: "Es usar un prompt específico para que el modelo evalúe los 10 fragmentos recuperados y decida cuáles son realmente útiles antes de generar la respuesta final, elevando la precisión." 
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-200 p-8 [&_summary::-webkit-details-marker]:hidden transition-all hover:bg-slate-100">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0 pr-8">{faq.q}</h4>
                  <span className="transition-transform group-open:rotate-180 border border-blue-300 rounded-full p-1 bg-white shadow-sm">
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
          <AuthorBox category="tecnologia" datePublished="2026" dateReviewed="Mayo 2026" />

          <div className="bg-blue-600 rounded-[40px] p-10 md:p-20 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-8 text-white leading-tight">
                Domina el Diálogo <br className="hidden md:block" /> con la Inteligencia
              </h2>
              <p className="text-blue-50 text-xl leading-relaxed mb-12 font-medium max-w-2xl opacity-90">
                No te limites a chatear; programa la mente del silicio. Domina las leyes de la semántica computacional y lleva la inteligencia artificial al límite de lo posible. El futuro es de quienes saben dar las instrucciones correctas. Es hora de ser un Maestro del Prompt.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all shadow-2xl flex items-center gap-3">
                   Explorar Catálogo <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-8 text-blue-100 text-[10px] font-black uppercase tracking-widest pl-4">
                  <span className="flex items-center gap-2"><Brain className="w-4 h-4" /> Latent Space Navigation</span>
                  <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Logic Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
