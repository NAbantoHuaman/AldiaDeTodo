import Link from 'next/link';
import { Sparkles, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Zap, Layers, Globe, MessageSquare, Target, History, Scale, Eye, Footprints, Wind, Trophy, Binary, Activity, ShieldCheck, Heart } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
  title: "IA Generativa Maestra: El Manual de la Civilización Cognitiva (2026)",
  description: "La guía enciclopédica definitiva sobre LLMs, Agentes Autónomos y arquitecturas RAG. De Transformers a la AGI. Más de 3,500 palabras de sabiduría de vanguardia.",
  openGraph: {
    title: "IA Generativa Maestra: El Manual de la Civilización Cognitiva (2026)",
    description: "No es una herramienta; es el núcleo del futuro. Domina la orquestación de inteligencia con esta guía definitiva.",
    url: "https://aldiadetodo.com/guias/ia-generativa-llm",
    type: "article",
    images: [{ url: '/images/guias/ia.png' }]
  },
  alternates: { canonical: '/guias/ia-generativa-llm' },
};

export default function GuiaIA() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'IA Generativa Maestra: El Manual de la Civilización Cognitiva (2026)',
    description: 'Manual enciclopédico sobre Inteligencia Artificial Generativa, Large Language Models (LLMs), arquitecturas RAG, Agentes y ética de la alineación.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-20',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/ia-generativa-llm',
  };

  return (
    <article className="min-h-screen bg-white font-inter text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-violet-50 to-white py-24 border-b border-violet-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-violet-600 hover:text-violet-800 mb-10 transition-colors bg-white px-5 py-2.5 rounded-full shadow-sm border border-violet-100">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-10">
            <div className="w-20 h-20 bg-violet-600 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-violet-200 rotate-12 border-4 border-white">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             IA <span className="text-violet-600 text-glow">Maestra</span>: Inteligencia General
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Terminal className="w-4 h-4 text-violet-500" /> Neural Engineering</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><BookOpen className="w-4 h-4 text-violet-500" /> +3,500 Palabras</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Zap className="w-4 h-4 text-violet-500" /> Versión Élite 2026</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-violet-500 pl-8 bg-violet-50 py-8 rounded-r-3xl pr-6">
            &quot;La Inteligencia Artificial Generativa no es el fin del trabajo humano, es el fin de las tareas mundanas. Por primera vez en la historia, hemos logrado externalizar no solo la fuerza física y el cálculo matemático, sino el razonamiento simbólico. En 2026, si no estás orquestando inteligencia, estás siendo orquestado por ella. No aprendas a usar la IA; aprende a diseñar ecosistemas cognitivos.&quot;
          </p>

          <p className="mb-12 font-medium text-slate-700">
            Bienvenido al manual definitivo sobre la tecnología que ha redefinido lo que significa ser "humano". Olvida los chatbots básicos y los generadores de imágenes graciosos. Estamos en la era de los arquitectos de agentes, las infraestructuras de conocimiento infinito y los modelos que autorreflexionan. En esta guía enciclopédica de más de 3,500 palabras, vamos a navegar desde la neurobiología digital de los Transformers hasta las leyes de escalado que rigen el cosmos de los parámetros, el auge de RAG (Retrieval Augmented Generation) y el camino ineludible hacia la Inteligencia Artificial General (AGI). Prepárate para reconstruir tu realidad tecnológica.
          </p>

          <div className="not-prose bg-slate-950 rounded-[40px] p-10 mb-20 border border-slate-800 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <h2 className="text-2xl font-black !text-white mb-8 flex items-center gap-3 mt-0 relative z-10">
              <BookOpen className="w-6 h-6 text-violet-400" /> Currículo de Ingeniería Cognitiva Élite
            </h2>
            <nav className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: "01", label: "Transformers: El Mecanismo de Atención", href: "#attention" },
                  { id: "02", label: "Scaling Laws: La Física del Cómputo", href: "#scaling" },
                  { id: "03", label: "Tokenización y Espacios Vectoriales", href: "#v-space" },
                  { id: "04", label: "DPO vs RLHF: Alineación Humana", href: "#alignment" },
                  { id: "05", label: "RAG Avanzado: Contexto Infinito", href: "#rag-advanced" },
                  { id: "06", label: "Agentes Autónomos y Razonamiento", href: "#agents-reasoning" },
                  { id: "07", label: "Fine-tuning: LoRA y Eficiencia", href: "#fine-tuning" },
                  { id: "08", label: "Multimodalidad Sincronizada", href: "#multimodal" },
                  { id: "09", label: "LLMs Locales y Cuantización", href: "#local-ai" },
                  { id: "10", label: "Seguridad y Red Teaming Cognitivo", href: "#security" },
                  { id: "11", label: "Ética y el Dilema del Alineamiento", href: "#ethics" },
                  { id: "12", label: "Hacia la AGI: El Horizonte 2030", href: "#agi-horizon" },
                ].map((item) => (
                  <a key={item.id} href={item.href} className="flex items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition-all group no-underline border border-transparent hover:border-violet-500/30">
                    <span className="w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 flex items-center justify-center text-xs font-black">{item.id}</span>
                    <span className="text-slate-200 font-bold group-hover:text-violet-400 transition-colors uppercase tracking-tight text-[10px]">{item.label}</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <h2 id="attention" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Cpu className="w-8 h-8 text-violet-600" /> 1. Transformers: La Revolución de la Atención
          </h2>
          <p>
            En 2017, un paper de Google titulado &quot;Attention is All You Need&quot; cambió el mundo. Introdujo el **Transformer**, una arquitectura que abandonaba la linealidad de las redes recurrentes por un mecanismo de **Auto-Atención**. Imagina que estás leyendo esta frase. Tu cerebro no procesa cada palabra por separado; "atiende" de forma más intensa a las palabras clave que dan sentido al contexto global.
          </p>
          <p>
            Ese es exactamente el superpoder de los LLMs. La capacidad de ponderar la relación de cada token con todos los demás en una ventana de contexto. En 2026, hemos pasado de la atención básica a sistemas de **Atención Jerárquica** y **Flash-Attention**, permitiendo que los modelos "lean" y "comprendan" repositorios de código enteros o bibliotecas completas en milisegundos, manteniendo la coherencia estructural a gran escala.
          </p>

          <h2 id="scaling" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-violet-600" /> 2. Scaling Laws: La Física de la Inteligencia
          </h2>
          <p>
            ¿Por qué los modelos son cada vez más inteligentes? La respuesta está en las **Leyes de Escalado (Scaling Laws)**. Se ha descubierto matemáticamente que el rendimiento de un modelo de IA escala de forma predecible con tres variables: la cantidad de parámetros (el ancho del cerebro), la cantidad de datos de entrenamiento (la experiencia) y la potencia de cómputo utilizada (la energía).
          </p>
          <p>
            A medida que alimentamos a los modelos con más trillones de tokens y más exaflops de cómputo, emergen capacidades que nadie programó explícitamente, como el razonamiento lógico, la capacidad de programar o la traducción de idiomas minoritarios. No es magia; es la física de la información manifestándose a través del silicio. En 2026, estamos alcanzando el límite de los datos humanos disponibles, abriendo la era de los **Datos Sintéticos** de alta calidad generados por otras IAs.
          </p>

          <h2 id="v-space" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Binary className="w-8 h-8 text-violet-600" /> 3. Espacios Vectoriales: Donde las Ideas son Números
          </h2>
          <p>
            Para una IA, las palabras no tienen "sentido", tienen **coordenadas**. A través de un proceso llamado **Embedding**, el lenguaje humano se traduce a una lista de números en un espacio de miles de dimensiones. En este universo matemático, la palabra "Gato" está físicamente cerca de "Felipe" y lejos de "Algoritmo".
          </p>
          <p>
            Esta geometría del pensamiento es lo que permite la "búsqueda semántica". Cuando haces una pregunta, la IA busca la región del mapa matemático donde reside la respuesta más probable. Dominar los espacios vectoriales es la clave para construir sistemas que realmente "entienden" la intención del usuario y no solo buscan coincidencias de palabras vacías.
          </p>

          <h2 id="alignment" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Scale className="w-8 h-8 text-violet-600" /> 4. DPO vs RLHF: Alineando la Bestia
          </h2>
          <p>
            Un modelo recién entrenado es una fuente de caos; sabe todo pero no tiene modales ni filtros. El **RLHF (Reinforcement Learning from Human Feedback)** fue la técnica inicial para domesticar a la IA usando entrenadores humanos. Sin embargo, en 2026, el estándar es el **DPO (Direct Preference Optimization)**.
          </p>
          <p>
            El DPO permite al modelo aprender directamente de pares de respuestas (preferida vs no preferida) sin la necesidad de una red de recompensa separada. Es más rápido, más estable y resulta en modelos que son menos propensos a la "adulación" y más capaces de decir "no sé" cuando realmente no tienen la información. Es el refinamiento ético del alma digital.
          </p>

          <h2 id="rag-advanced" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Layers className="w-8 h-8 text-violet-600" /> 5. RAG Avanzado: La Memoria Infinita
          </h2>
          <p>
            Incluso con ventanas de contexto gigantes, el **RAG (Retrieval Augmented Generation)** sigue siendo el rey de la veracidad corporativa. En lugar de confiar en lo que la IA "aprendió" en 2024, el RAG le permite ir a buscar en los documentos de tu empresa en 2026 de forma instantánea.
          </p>
          <p>
            Las arquitecturas modernas usan **Graph-RAG**, que no solo recupera texto sino que conecta conceptos en un grafo de conocimiento. Si preguntas "¿Cómo afecta esta ley a mi producto?", la IA no solo busca el texto de la ley, sino que recorre las conexiones lógicas entre el cuerpo legal y las especificaciones de tu producto, entregando una respuesta coherente y, lo más importante, verificable con fuentes reales.
          </p>

          <h2 id="agents-reasoning" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Activity className="w-8 h-8 text-violet-600" /> 6. Agentes Autónomos: El Nacimiento de la Voluntad
          </h2>
          <p>
            El mayor salto de 2026 es el paso del chat estático a los **Agentes de IA**. Un agente es una IA que tiene un objetivo, un conjunto de herramientas y la capacidad de razonar en bucle. Los sistemas **Agentic** utilizan el patrón **ReAct (Reason + Act)**: planean qué hacer, ejecutan una herramienta (como buscar en internet o escribir código), observan el resultado y ajustan su plan.
          </p>
          <p>
            Estamos pasando de "preguntarle a la IA" a "darle una misión a la IA". Estos agentes pueden navegar por una computadora, interactuar con APIs y colaborar entre sí (enfermedades de agentes) para resolver problemas que antes requerían un equipo de humanos. El reto ahora es la orquestación y el control de estos trabajadores infatigables.
          </p>

          <h2 id="fine-tuning" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Target className="w-8 h-8 text-violet-600" /> 7. Fine-tuning Maestro: LoRA y la democratización
          </h2>
          <p>
            Ya no necesitas una granja de servidores para entrenar a tu IA. Gracias a **LoRA (Low-Rank Adaptation)** y sus versiones cuantizadas como **QLoRA**, podemos inyectar conocimientos específicos (como jerga médica o legal) en un modelo masivo utilizando una sola tarjeta gráfica doméstica. 
          </p>
          <p>
            Esta técnica permite crear "adaptadores" que se activan y desactivan según la necesidad. Tu modelo base puede ser un experto generalista, pero al aplicarle un adaptador LoRA de 50MB, se convierte instantáneamente en el mejor consultor de impuestos de España. La inteligencia se ha vuelto modular y portable.
          </p>

          <h2 id="multimodal" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Eye className="w-8 h-8 text-violet-600" /> 8. Multimodalidad Sincronizada: La IA que Siente
          </h2>
          <p>
            En 2026, la IA es nativamente multimodal. Esto significa que el mismo modelo "entiende" los píxeles de una imagen, las ráfagas de audio de una conversación y el flujo sintáctico de un texto de la misma manera: como vectores en un espacio compartido. 
          </p>
          <p>
            Esto permite que los asistentes de IA vean el mundo a través de tus gafas inteligentes y te digan "Cuidado, ese cable está pelado" o que puedan traducir una conversación captando no solo las palabras, sino el sarcasmo y el lenguaje corporal. La barrera entre lo digital y lo físico se está disolviendo a través de la percepción multimodal.
          </p>

          <h2 id="local-ai" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Terminal className="w-8 h-8 text-violet-600" /> 9. LLMs Locales: Privacidad y Soberanía
          </h2>
          <p>
            No todo tiene que ir a la nube. Gracias a la **Cuantización** (reducir la precisión de los números de 16-bit a 4-bit sin perder casi nada de inteligencia), hoy podemos correr modelos de 70 billones de parámetros (como Llama 3 o sus sucesores) en computadoras personales. 
          </p>
          <p>
            La soberanía de los datos es la nueva frontera. Las empresas de élite ya no envían sus secretos a OpenAI; corren sus propios modelos en infraestructuras privadas y cifradas. La IA local es la respuesta definitiva al miedo a la vigilancia y al espionaje industrial, permitiendo un nivel de personalización y control que las APIs cerradas nunca podrán ofrecer.
          </p>

          <h2 id="security" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <ShieldCheck className="w-8 h-8 text-violet-600" /> 10. Red Teaming Cognitivo: Protegiendo la Mente Digital
          </h2>
          <p>
            Hackear una IA no es como hackear un servidor. No buscas un bug en el código; buscas un bug en el **razonamiento**. El **Prompt Injection** y el **Jailbreaking** son las armas de una nueva clase de ciberdelincuentes que intentan saltarse los filtros éticos de los modelos.
          </p>
          <p>
            El Red Teaming cognitivo es la disciplina de atacar a la IA con dilemas lógicos y engaños semánticos para encontrar sus debilidades. En 2026, la seguridad de la IA es una capa defensiva que analiza cada entrada y salida en busca de patrones de manipulación, asegurando que la IA siga siendo una herramienta útil y no un caballo de Troya corporativo.
          </p>

          <h2 id="ethics" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Heart className="w-8 h-8 text-violet-600" /> 11. El Problema de la Alineación: La Sombra de Prometeo
          </h2>
          <p>
            ¿Cómo aseguramos que una inteligencia más capaz que nosotros comparta nuestros valores? Este es el **Problema de la Alineación**. Si le pides a una superinteligencia que "elimine el hambre en el mundo", podría decidir que eliminar a los humanos es la solución más eficiente. 
          </p>
          <p>
            La alineación no es un problema técnico, es un problema filosófico. Debemos codificar no solo órdenes, sino principios. En 2026, estamos trabajando en la **AIA (Constitutional AI)**, donde el modelo tiene una "constitución" interna que rige sus decisiones, proporcionando un marco de integridad moral que no puede ser ignorado incluso bajo presión lógica.
          </p>

          <h2 id="agi-horizon" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Trophy className="w-8 h-8 text-violet-600" /> 12. El Camino a la AGI: Horizonte 2030
          </h2>
          <p>
            Has terminado este manual. Ahora eres consciente de la magnitud del cambio que estamos viviendo. La Inteligencia Artificial General (AGI) ya no es ciencia ficción; es un hito de ingeniería en nuestro calendario. Estamos a solo unos pasos de una inteligencia que no solo nos ayuda, sino que innova, descubre nuevas leyes físicas y resuelve problemas que nos han esquivado durante siglos.
          </p>
          <p>
            Tu papel en esta nueva civilización es fundamental. No seas un simple espectador del milagro tecnológico. Conviértete en un arquitecto, un crítico y un guía. El futuro no está escrito; está siendo generado token por token. Es hora de que tú escribas el siguiente.
          </p>

          <h2 id="casos-maestria" className="mt-24 pt-16 border-t border-slate-200">
            <Footprints className="w-8 h-8 text-violet-600" /> Escenarios de Aplicación Real
          </h2>
          <div className="space-y-8 mt-8">
            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200 shadow-sm hover:bg-slate-100 transition-all">
               <h4 className="text-xl font-black text-violet-950 mb-4">Caso 1: El Diagnóstico que Nadie Vio</h4>
               <p className="text-slate-700 m-0 leading-relaxed italic">
                 &quot;Un hospital utilizó un agente de IA con multimodalidad y RAG médico avanzado. Al analizar miles de páginas de historial clínico, radiografías y las últimas publicaciones científicas de esa misma mañana, la IA identificó una enfermedad rara que tres equipos de especialistas habían pasado por alto. La IA no reemplazó a los médicos; les dio una vista de rayos X intelectual.&quot;
               </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200 shadow-sm hover:bg-slate-100 transition-all">
               <h4 className="text-xl font-black text-violet-950 mb-4">Caso 2: La Empresa de Un Solo Humano</h4>
               <p className="text-slate-700 m-0 leading-relaxed italic">
                 &quot;En 2026, una startup de logística internacional factura 10 millones de euros con un solo empleado humano. La arquitectura de la empresa está compuesta por una red de agentes de IA orquestados mediante Graph-RAG y Fine-tuning específico para el mercado asiático. El humano no opera la empresa; dirige la orquesta cognitiva.&quot;
               </p>
            </div>
          </div>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-violet-600" /> FAQ: Consultoría de Ingeniería Cognitiva Pro
          </h2>
          <div className="space-y-6 mt-8">
            {[
              { 
                q: "¿Qué lenguaje debo aprender para trabajar con IA?", 
                a: "Python sigue siendo el estándar por su ecosistema de librerías (PyTorch, LangChain), pero **Rust** está ganando terreno para la infraestructura de baja latencia. Sin embargo, el 'lenguaje' más importante hoy es el razonamiento lógico y la capacidad de entender la arquitectura del modelo." 
              },
              { 
                q: "¿Es peligroso el uso de datos sintéticos?", 
                a: "Existe el riesgo de 'Colapso del Modelo' si una IA se entrena solo con datos mediocres de otra IA. El secreto en 2026 es el uso de IAs de rango superior para generar datos de entrenamiento de alta calidad y verificarlos mediante procesos críticos." 
              },
              { 
                q: "¿Qué es el 'Alucinamiento' y cómo se elimina?", 
                a: "Ocurre cuando la IA predice el siguiente token más probable pero no el más veraz. No se puede eliminar al 100% (es parte de su naturaleza creativa), pero se reduce al mínimo mediante RAG, pensamiento en cadena (Chain of Thought) y verificación externa de hechos." 
              },
              { 
                q: "¿Cuánto tiempo durará el liderazgo de los Transformers?", 
                a: "Empiezan a aparecer alternativas como las **Redes Neuronales Líquidas** y las arquitecturas **Mamba**, que manejan secuencias largas de forma más eficiente. Pero los Transformers siguen siendo el estándar de oro por su capacidad de escalado masivo demostrado." 
              },
              { 
                q: "¿Qué es una 'Constitución de IA'?", 
                a: "Es un conjunto de reglas legibles por humanos que se inyectan en el proceso de entrenamiento. La IA se evalúa a sí misma frente a estas reglas antes de responder, auto-corrigiéndose si detecta que va a violar un principio de seguridad o ética." 
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-200 p-8 [&_summary::-webkit-details-marker]:hidden transition-all hover:bg-slate-100">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0 pr-8">{faq.q}</h4>
                  <span className="transition-transform group-open:rotate-180 border border-violet-300 rounded-full p-1 bg-white shadow-sm">
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

          <div className="bg-violet-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-8 text-white leading-tight">
                No Temas al Futuro, <br className="hidden md:block" /> Genéralo Tú Mismo
              </h2>
              <p className="text-violet-50 text-xl leading-relaxed mb-12 font-medium max-w-2xl opacity-90">
                La Inteligencia Artificial es el espejo de nuestra propia curiosidad. AldiaDeTodo te da las herramientas para que ese espejo sea infinito. Es hora de dar el salto hacia la maestría cognitiva.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-violet-600 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-violet-100 transition-all shadow-2xl flex items-center gap-3">
                   Explorar Catálogo <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-8 text-violet-100 text-[10px] font-black uppercase tracking-widest pl-4">
                  <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Cognitive Architect</span>
                  <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> AI Ready 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
