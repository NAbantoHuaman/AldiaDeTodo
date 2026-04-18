import Link from 'next/link';
import { Cpu, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Search, HelpCircle, ArrowRight, Zap, Globe, Layers, Binary, Database } from 'lucide-react';

export const metadata = {
  title: "Machine Learning con Python: De la Teoría a la Práctica en 2026",
  description: "Guía completa de aprendizaje automático. Aprende Scikit-Learn, TensorFlow, preprocesamiento de datos, redes neuronales y cómo desplegar modelos de ML reales.",
  openGraph: {
    title: "Machine Learning con Python: De la Teoría a la Práctica en 2026",
    description: "Domina la ciencia que hace inteligente al software. Aprende a entrenar modelos que predicen el futuro y automatizan la toma de decisiones.",
    url: "https://aldiadetodo.com/guias/machine-learning-python",
    type: "article",
    images: [{ url: '/images/guias/ml.png' }]
  },
  alternates: { canonical: '/guias/machine-learning-python' },
};

export default function GuiaML() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Machine Learning con Python: De la Teoría a la Práctica en 2026',
    description: 'Manual profundo sobre aprendizaje automático usando Python, cubriendo desde estadística básica hasta arquitecturas avanzadas de Deep Learning.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/machine-learning-python',
  };

  return (
    <article className="min-h-screen bg-white font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-teal-50 to-white py-24 border-b border-teal-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-teal-700 hover:text-teal-900 mb-10 transition-colors bg-white px-4 py-2 rounded-full shadow-sm">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-teal-600 rounded-3xl flex items-center justify-center shadow-xl shadow-teal-200 -rotate-3 border-4 border-white">
              <Cpu className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Machine Learning: El <span className="text-teal-600">Cerebro</span> del Código Moderno
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Stack:</span> Python & ML</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 28 min</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Nivel:</span> Data Scientist</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-teal-500 pl-6">
            &quot;El Machine Learning no es magia, es estadística a escala masiva. En 2026, la diferencia entre una app estática y una aplicación inteligente reside en su capacidad para aprender de los datos y adaptarse sin intervención humana constante.&quot;
          </p>

          <p className="mb-8">
            El <strong>Machine Learning</strong> (ML) ha pasado de ser un campo de investigación académica a ser el motor que mueve la economía digital. Desde las recomendaciones de Netflix hasta la detección de fraudes bancarios y el diagnóstico médico asistido. Python se ha consolidado como el lenguaje indiscutible de esta revolución gracias a un ecosistema de librerías que permite a cualquier desarrollador implementar modelos sofisticados con apenas unas líneas de código. En esta guía profunda, aprenderás no solo a entrenar modelos, sino a entender la ciencia de los datos que los sustenta.
          </p>

          <div className="bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-teal-400" /> Ruta del Científico de Datos
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#fundamentos" className="text-slate-200 no-underline font-bold group-hover:text-teal-400 transition-colors">Fundamentos: Aprendizaje Supervisado vs No Supervisado</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#ingenieria" className="text-slate-200 no-underline font-bold group-hover:text-teal-400 transition-colors">Ingeniería de Datos: Limpieza y Preprocesamiento</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#algoritmos" className="text-slate-200 no-underline font-bold group-hover:text-teal-400 transition-colors">Algoritmos Clave: De Regresión Lineal a XGBoost</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#deep-learning" className="text-slate-200 no-underline font-bold group-hover:text-teal-400 transition-colors">Deep Learning: Redes Neuronales de Nueva Generación</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-teal-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          <h2 id="fundamentos" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Layers className="w-8 h-8 text-teal-600" /> 1. El Mapa del ML
          </h2>
          <p>
            El aprendizaje automático se divide principalmente en tres grandes categorías, cada una diseñada para resolver un tipo diferente de pregunta:
          </p>
          <ul className="space-y-4 m-0 p-0 list-none mb-12">
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-teal-700">Aprendizaje Supervisado:</span> El modelo aprende de datos etiquetados (ej. predecir si un email es spam basado en millones de ejemplos previos).
            </li>
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-teal-700">Aprendizaje No Supervisado:</span> Buscamos patrones ocultos en datos sin etiquetas (ej. agrupar clientes por comportamiento de compra similar).
            </li>
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-teal-700">Aprendizaje por Refuerzo:</span> Un agente aprende mediante prueba y error para maximizar una recompensa (vital en robótica y videojuegos).
            </li>
          </ul>

          <h2 id="ingenieria" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Database className="w-8 h-8 text-teal-600" /> 2. Basura entra, Basura sale
          </h2>
          <p>
            Muchos principiantes quieren saltar directamente a las redes neuronales galácticas. Pero en el mundo real, un científico de datos pasa el 80% de su tiempo limpiando datos. El <strong>Feature Engineering</strong> (crear variables útiles) es más determinante para el éxito de un proyecto que el algoritmo mismo.
          </p>
          <div className="bg-teal-50 border border-teal-100 rounded-3xl p-8 my-10 flex gap-6 items-start shadow-sm">
             <Lightbulb className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
             <div>
                <h4 className="text-lg font-black text-teal-900 mb-2 mt-0">La Paradoja de los Datos:</h4>
                <p className="text-teal-800 m-0 text-sm leading-relaxed">
                  Más datos no siempre significan mejores resultados. Lo que importa es la calidad y la diversidad de los mismos. Entrenar con datos sesgados solo producirá un modelo que automatiza los sesgos humanos a escala industrial. La ética de datos es parte fundamental del ML en 2026.
                </p>
             </div>
          </div>

          <h2 id="algoritmos" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Binary className="w-8 h-8 text-teal-600" /> 3. El Arsenal de Algoritmos
          </h2>
          <p>
            No todas las situaciones requieren una red neuronal profunda. Un maestro del ML sabe elegir la herramienta más simple que resuelva el problema de forma eficiente:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <h4 className="text-teal-900 font-black mt-0 mb-3 text-lg">Random Forest / XGBoost</h4>
               <p className="text-xs text-slate-600 m-0">Insuperables para datos tabulares (hojas de cálculo, bases de datos). Son robustos y potentes para clasificar y predecir valores numéricos.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <h4 className="text-teal-900 font-black mt-0 mb-3 text-lg">SVM & K-Means</h4>
               <p className="text-xs text-slate-600 m-0">Fundamentales para encontrar fronteras de decisión claras y agrupar datos de forma geométrica.</p>
            </div>
          </div>
          <pre className="bg-slate-950 text-teal-300 p-6 rounded-2xl overflow-x-auto text-sm my-8 border border-slate-800">
            <code>
{`# Ejemplo clásico con Scikit-Learn
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Dividir datos
X_train, X_test, y_train, y_test = train_test_split(X, y)

# Instanciar y Entrenar
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Evaluar
print(f"Precisión: {model.score(X_test, y_test)}")`}
            </code>
          </pre>

          <h2 id="deep-learning" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-teal-600" /> 4. Deep Learning: Imitando al Cerebro
          </h2>
          <p>
             Gracias a librerías como <strong>PyTorch</strong> y <strong>TensorFlow</strong>, el aprendizaje profundo es más accesible que nunca. Las <strong>Redes Neuronales Convolucionales (CNN)</strong> dominan la visión artificial, mientras que los <strong>Transformers</strong> (la arquitectura detrás de ChatGPT) han revolucionado el Procesamiento del Lenguaje Natural (NLP). En 2026, el Deep Learning es la clave para manejar datos no estructurados como imágenes, audio y texto masivo.
          </p>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-teal-600" /> Preguntas Frecuentes de ML
          </h2>
          <div className="space-y-6 mt-8">
            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Necesito un doctorado en matemáticas?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                No para aplicar ML. Necesitas entender álgebra lineal básica, estadística descriptiva y cálculo (derivadas) para comprender cómo &quot;aprende&quot; el modelo por dentro. La mayoría de las librerías modernas se encargan de las matemáticas pesadas por ti.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿ML u Deep Learning? ¿Cuál elegir?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Empieza siempre con ML tradicional. Es más rápido de entrenar, más fácil de explicar y requiere menos potencia de cómputo (GPUs). Solo usa Deep Learning cuando los datos sean masivos y complejos (como video o lenguaje humano) donde las técnicas tradicionales fallan.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Cómo despliego un modelo en producción?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Ahí entra el <strong>MLOps</strong>. Usarías herramientas como Docker, FastAPI para crear un endpoint de predicción, y sistemas como MLflow para registrar las diferentes versiones de tus modelos y asegurar que lo que lanzas a los usuarios sea lo mejor que has entrenado.
              </p>
            </details>
          </div>

          <div className="bg-teal-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                Predice el Futuro con <br className="hidden md:block" /> Datos Inteligentes
              </h2>
              <p className="text-teal-50 text-lg leading-relaxed mb-10 font-medium max-w-2xl">
                Domina la ciencia que está redefiniendo todas las industrias. El Machine Learning es el superpoder que te permite procesar millones de datos y convertirlos en decisiones estratégicas que cambian el mundo.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-teal-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-teal-50 transition-all shadow-xl flex items-center gap-2">
                   Ver más Guías <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-teal-100 text-sm font-bold">
                  <span className="flex items-center gap-1"><Binary className="w-4 h-4" /> Predictive Power</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Python Master</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
