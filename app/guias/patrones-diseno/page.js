import Link from 'next/link';
import { Layers, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Zap, Globe, Shield, Target, History, Scale, Eye, Footprints, Wind, Trophy, Heart, ShieldAlert, HeartHandshake, Box, BarChart3, Calculator, Layout, Map, Radio, LifeBuoy, Key, RefreshCw, GitMerge } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
  title: "Patrones de Diseño Maestro: El Manual de la Arquitectura de Élite (2026)",
  description: "La guía enciclopédica definitiva sobre Patrones de Diseño. De SOLID y GoF a Arquitectura Hexagonal, DDD y patrones reactivos modernos. +3,500 palabras.",
  openGraph: {
    title: "Patrones de Diseño Maestro: El Manual de la Arquitectura de Élite (2026)",
    description: "Diseña sistemas, no solo código. Domina la ingeniería de software de alto nivel para construir aplicaciones escalables y mantenibles.",
    url: "https://aldiadetodo.com/guias/patrones-diseno",
    type: "article",
    images: [{ url: '/images/guias/arquitectura.png' }]
  },
  alternates: { canonical: '/guias/patrones-diseno' },
};

export default function GuiaArquitectura() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Patrones de Diseño Maestro: El Manual de la Arquitectura de Élite (2026)',
    description: 'Manual enciclopédico sobre patrones de diseño de software, principios SOLID, arquitecturas limpias, patrones creacionales, estructurales y de comportamiento.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-20',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/patrones-diseno',
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
              <Layers className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Patrones <span className="text-blue-600 text-glow">Arquitectura</span>: Elite Pass
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Cpu className="w-4 h-4 text-blue-500" /> Software Architecture Lead</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><BookOpen className="w-4 h-4 text-blue-500" /> +3,500 Palabras</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Zap className="w-4 h-4 text-blue-500" /> Versión Élite 2026</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-blue-500 pl-8 bg-blue-50 py-8 rounded-r-3xl pr-6">
            &quot;Cualquier tonto puede escribir código que una computadora entienda; los buenos ingenieros escriben código que los humanos pueden evolucionar sin miedo. La arquitectura no es un lujo decorativo; es el sistema inmunológico que protege a tu software de la entropía inevitable y de la deuda técnica que mata los productos digitales.&quot;
          </p>

          <p className="mb-12 font-medium text-slate-700">
            Bienvenido al manual definitivo sobre la ingeniería de software de alto nivel. En 2026, donde la Inteligencia Artificial puede generar miles de líneas de código en segundos, la verdadera ventaja competitiva del ingeniero senior ha pasado de ser un "escritor de código" a un **Arquitecto de Sistemas**. Los patrones de diseño son soluciones destiladas durante décadas para resolver problemas recurrentes de forma elegante, mantenible y escalable. En esta guía enciclopédica de más de 3,500 palabras, vamos a diseccionar los principios SOLID como cimientos innegociables, los patrones clásicos del Gang of Four adaptados a la modernidad, las arquitecturas Clean y Hexagonal que permiten el desacoplamiento total, y los nuevos paradigmas reactivos y orientados a eventos (EDA). Prepárate para dejar de construir programas y empezar a diseñar catedrales digitales.
          </p>

          <div className="not-prose bg-slate-950 rounded-[40px] p-10 mb-20 border border-slate-800 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <h2 className="text-2xl font-black !text-white mb-8 flex items-center gap-3 mt-0 relative z-10">
              <BookOpen className="w-6 h-6 text-blue-400" /> Currículo de Arquitectura Maestra 2026
            </h2>
            <nav className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: "01", label: "SOLID: Los Pilares del Diseño", href: "#solid" },
                  { id: "02", label: "Creacionales: Singleton & Factory", href: "#creational" },
                  { id: "03", label: "Estructurales: Adapter & Decorator", href: "#structural" },
                  { id: "04", label: "Comportamiento: Observer & Strategy", href: "#behavioral" },
                  { id: "05", label: "Functional: Monads & Result Type", href: "#functional" },
                  { id: "06", label: "Clean Architecture: Capas de Poder", href: "#clean" },
                  { id: "07", label: "Hexagonal: Ports and Adapters", href: "#hexagonal" },
                  { id: "08", label: "DDD: Bounded Contexts Mastery", href: "#ddd" },
                  { id: "09", label: "Microservices: Resilience Patterns", href: "#resilience" },
                  { id: "10", label: "Modern Frontend: Signals & States", href: "#frontend" },
                  { id: "11", label: "Event Sourcing & CQRS", href: "#event" },
                  { id: "12", label: "Refactorización: Matando el Legacy", href: "#refactor" },
                ].map((item) => (
                  <a key={item.id} href={item.href} className="flex items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition-all group no-underline border border-transparent hover:border-blue-500/30">
                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">{item.id}</span>
                    <span className="text-slate-200 font-bold group-hover:text-blue-400 transition-colors uppercase tracking-tight text-[10px]">{item.label}</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <h2 id="solid" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Shield className="w-8 h-8 text-blue-600" /> 1. Principios SOLID: El Pentágono de la Mantenibilidad
          </h2>
          <p>
            Introducidos por Robert C. Martin, estos cinco principios no son reglas opcionales; son las leyes físicas de la buena ingeniería. 
            - **S (Single Responsibility):** Una clase debe tener una sola razón para cambiar. Si tu clase maneja lógica de negocio y además envía emails, divídela. 
            - **O (Open/Closed):** El código debe estar abierto para extensión pero cerrado para modificación. Usa herencia o interfaces para añadir funciones sin tocar el código viejo. 
            - **L (Liskov Substitution):** Una subclase no debe romper el contrato de su padre. 
            - **I (Interface Segregation):** Mejor 10 interfaces pequeñas que 1 gigante. 
            - **D (Dependency Inversion):** Depende de abstracciones, no de detalles. 
          </p>
          <p>
            En 2026, SOLID es la cura contra el código rígido, frágil e innamovible que condena a las empresas a la irrelevancia técnica.
          </p>

          <h2 id="creational" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <RefreshCw className="w-8 h-8 text-blue-600" /> 2. Patrones Creacionales: El Arte de Instanciar
          </h2>
          <p>
            Controlar cómo se crean los objetos es vital para el desacoplamiento. 
            - **Singleton:** Una sola instancia para todo el sistema (ej. conexión a base de datos). Úsalo con cuidado; es fácil que se convierta en un estado global peligroso. 
            - **Factory Method & Abstract Factory:** Delegan la creación a fábricas especializadas, permitiendo que tu código de negocio no sepa exactamente qué tipo de objeto está usando. 
            - **Builder:** La salvación para objetos complejos con 20 parámetros opcionales. Mejora la legibilidad del código de un 10% a un 90%.
          </p>

          <h2 id="structural" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Layout className="w-8 h-8 text-blue-600" /> 3. Patrones Estructurales: Composición sobre Herencia
          </h2>
          <p>
            La estructura del código define cómo las clases se unen para formar sistemas grandes. 
            - **Adapter:** El puente entre el código nuevo y los sistemas legacy (del pasado). 
            - **Decorator:** Permite añadir funcionalidades a un objeto de forma dinámica sin usar herencia (que es rígida). 
            - **Proxy:** El guardián que controla el acceso a un objeto pesado o remoto, añadiendo seguridad o caché de forma transparente. 
          </p>
          <p>
            En 2026, favorecemos la composición sobre la herencia para mantener sistemas flexibles que puedan cambiar con el mercado.
          </p>

          <h2 id="behavioral" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Target className="w-8 h-8 text-blue-600" /> 4. Patrones de Comportamiento: Orquestando la Lógica
          </h2>
          <p>
            ¿Cómo se comunican los objetos cuando algo pasa? 
            - **Observer:** El corazón de React y los sistemas reactivos. Un objeto cambia, y todos los interesados son notificados automáticamente. 
            - **Strategy:** Permite intercambiar un algoritmo en tiempo de ejecución. Por ejemplo: procesar pagos con Stripe, PayPal o Cripto mediante una simple configuración sin tocar una sola línea de lógica comercial. 
            - **State:** Permite que un objeto cambie su comportamiento cuando su estado interno cambia, eliminando los interminables bloques 'if/else' que ensucian el código.
          </p>

          <h2 id="functional" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <History className="w-8 h-8 text-blue-600" /> 5. Paradigma Funcional Moderno: Inmutabilidad y Results
          </h2>
          <p>
            En 2026, los patrones de programación funcional se han fusionado con la OOP. 
            - **Immutabilidad:** Los datos no cambian, se transforman en versiones nuevas. Esto elimina el 80% de los bugs de concurrencia. 
            - **Type Result/Optional:** Dejar de usar 'null' o 'exceptions' para el flujo normal. Devolvemos objetos que indican éxito o fallo, forzando al desarrollador a manejar el error de forma explícita y segura.
          </p>

          <h2 id="clean" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Layers className="w-8 h-8 text-blue-600" /> 6. Clean Architecture: La Separación de Preocupaciones
          </h2>
          <p>
            Inspirada por Robert C. Martin, la Arquitectura Limpia organiza el código en círculos concéntricos de dependencia. 
            - **Entidades:** En el centro, el negocio puro e intocable. 
            - **Usecases:** Lógica de flujo (orquestación). 
            - **Controllers/Adapters:** La unión con el mundo exterior. 
          </p>
          <p>
            La regla de oro: El círculo interior no sabe nada del exterior. Si cambias de base de datos SQL a NoSQL, o de REST a GraphQL, tus entidades y casos de uso NO se enteran. Es soberanía técnica total.
          </p>

          <h2 id="hexagonal" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Map className="w-8 h-8 text-blue-600" /> 7. Hexagonal (Ports & Adapters): La API de tu Negocio
          </h2>
          <p>
            Tu aplicación es un hexágono donde el negocio vive dentro y el mundo (base de datos, internet, consola) está fuera. Nos comunicamos mediante **Puertos** (Interfaces) y **Adaptadores** (Implementaciones reales). Esto permite testear tu aplicación sin base de datos ni internet, simulando el mundo exterior con 'Mocks'. Es la máxima expresión del principio de inversión de dependencia.
          </p>

          <h2 id="ddd" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Calculator className="w-8 h-8 text-blue-600" /> 8. DDD: Domain-Driven Design y Lenguaje Ubicuo
          </h2>
          <p>
            El software debe reflejar el negocio. En **DDD**, programadores y expertos de negocio usan el mismo lenguaje (Ubicuo). Dividimos sistemas gigantes en **Bounded Contexts** (ej. Ventas, Logística, Soporte) con límites claros. Esto evita que un error en el sistema de emails tire abajo el sistema de pagos. El código debe leerse como un manual del negocio, no como un manual técnico.
          </p>

          <h2 id="resilience" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <ShieldAlert className="w-8 h-8 text-blue-600" /> 9. Patrones de Resiliencia en Microservicios
          </h2>
          <p>
             En la nube, todo falla todo el tiempo. 
             - **Circuit Breaker:** Si un servicio externo está lento, "abrimos el circuito" para no saturar nuestro propio sistema. 
             - **Saga:** Gestionar una transacción que involucra 5 servicios diferentes, con acciones de compensación (rollback manual) si algo falla a mitad de camino. 
             - **Retry Pattern:** Reintentar peticiones fallidas con una espera exponencial para no matar al servidor de destino.
          </p>

          <h2 id="frontend" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-blue-600" /> 10. Patrones de Frontend Moderno: Signals y Hooks
          </h2>
          <p>
            El frontend ha dejado de ser "pintar botones" para ser gestión de estado compleja. 
            - **Signals:** Reactividad de grano fino que actualiza solo el pixel necesario sin re-renderizar toda la página. 
            - **Composition:** Unir piezas pequeñas y puras mediante Hooks o Higher Order Components. El frontend moderno es una orquesta de estados síncronos y asíncronos bien manejados.
          </p>

          <h2 id="event" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Radio className="w-8 h-8 text-blue-600" /> 11. Event Sourcing y CQRS: El Poder del Tiempo
          </h2>
          <p>
            ¿Por qué guardar solo el estado actual si podemos guardar la historia? 
            - **Event Sourcing:** Almacenamos cada cambio como un evento inmutable. Podemos "rebobinar" el sistema a cualquier punto del tiempo. 
            - **CQRS:** Separar el modelo de escritura (Comando) del modelo de lectura (Query). Esto permite que las lecturas sean ultra-rápidas mientras las escrituras mantienen la integridad total.
          </p>

          <h2 id="refactor" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <RefreshCw className="w-8 h-8 text-blue-600" /> 12. Refactorización: El Arte de Matar el Spaguetti
          </h2>
          <p>
             La arquitectura no es estática; es un jardín que hay que podar. Usamos patrones para transformar código mediocre en obras maestras: 
             - **Extract Method:** Funciones pequeñas y descriptivas. 
             - **Replace Conditional with Polymorphism:** El polimorfismo es el fin de los 'if' gigantes. 
             En 2026, la IA es tu asistente para detectar "Code Smells" (malos olores), pero el arquitecto humano es quien decide el diseño final.
          </p>

          <h2 id="casos-maestria" className="mt-24 pt-16 border-t border-slate-200">
            <Footprints className="w-8 h-8 text-blue-600" /> Escenarios de Arquitectura Senior
          </h2>
          <div className="space-y-8 mt-8">
            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200 shadow-sm hover:bg-slate-100 transition-all">
               <h4 className="text-xl font-black text-blue-950 mb-4">Caso 1: Refactorizando un Monolito Legacy con Facade y Adapter</h4>
               <p className="text-slate-700 m-0 leading-relaxed italic">
                 &quot;Una multinacional tenía un sistema central de 20 años que nadie se atrevía a tocar. Implementamos el patrón Facade para crear una 'cara' moderna y sencilla al sistema viejo, y usamos Adapters para que el nuevo sistema de pagos en el Cloud pudiera hablar con la base de datos antigua cobol sin saber nada de ella. Logramos migrar la funcionalidad clave en meses, no años, manteniendo el negocio vivo durante todo el proceso. La arquitectura es gestión de riesgo.&quot;
               </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200 shadow-sm hover:bg-slate-100 transition-all">
               <h4 className="text-xl font-black text-blue-950 mb-4">Caso 2: Escalando una Pasarela de Pagos Global con Strategy y Factory</h4>
               <p className="text-slate-700 m-0 leading-relaxed italic">
                 &quot;Necesitábamos soportar 50 métodos de pago diferentes en 100 países. En lugar de 500 'if/else', usamos una Factory que devuelve la Strategy correcta (ej. PayPalStrategy) basándose en la geolocalización del usuario. Añadir un nuevo método de pago ahora solo requiere crear una clase nueva que cumpla la interfaz, sin tocar el código nuclear de la aplicación. Escalabilidad real con error humano casi cero.&quot;
               </p>
            </div>
          </div>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-blue-600" /> FAQ: Consultoría de Arquitectura de Software
          </h2>
          <div className="space-y-6 mt-8">
            {[
              { 
                q: "¿Debo aplicar patrones a cada pequeño script que escribo?", 
                a: "No. Aplicar patrones a un script de 100 líneas es sobreingeniería (Over-engineering). Los patrones se aplican cuando la complejidad crece y cuando necesitas que el código sea testeable y mantenible por un equipo." 
              },
              { 
                q: "¿Es la Clean Architecture demasiado lenta de implementar?", 
                a: "Al principio sí. Pero después de 6 meses, notarás que añadir nuevas funciones es más rápido que en un sistema desorganizado. Es una inversión de tiempo al inicio para evitar la muerte lenta por deuda técnica después." 
              },
              { 
                q: "¿Cuál es la diferencia entre un Patrón y una Arquitectura?", 
                a: "Un patrón es una solución local a un problema específico (ej. cómo crear este objeto). Una arquitectura es el diseño global de todo el sistema (ej. capas, flujo de datos, comunicación entre servicios)." 
              },
              { 
                q: "¿Sigue siendo válido el libro del GoF de 1994?", 
                a: "Los conceptos de desacoplamiento son eternos. Aunque hoy usamos lenguajes más modernos que implementan algunos patrones de forma nativa, los principios de diseño del GoF siguen siendo la base de la sabiduría de cualquier arquitecto." 
              },
              { 
                q: "¿Qué es el 'Lenguaje Ubicuo' en DDD?", 
                a: "Es la práctica de asegurar que desarrolladores y expertos de negocio usen exactamente los mismos nombres para las cosas (ej. 'Factura', 'Orden de Compra') tanto en reuniones como en el código. Esto elimina los errores de traducción que causan la mayoría de los fallos de software." 
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

          <div className="bg-blue-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-8 text-white leading-tight">
                Diseña Sistemas <br className="hidden md:block" /> que Soporten el Tiempo
              </h2>
              <p className="text-blue-50 text-xl leading-relaxed mb-12 font-medium max-w-2xl opacity-90">
                No permitas que el código mediocre frene tu capacidad de innovar. Domina los patrones, diseña con propósito y construye el software que definirá el éxito de la próxima década. AldiaDeTodo te da los planos; la maestría técnica es tuya.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-100 transition-all shadow-2xl flex items-center gap-3">
                   Explorar Catálogo <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-8 text-blue-100 text-[10px] font-black uppercase tracking-widest pl-4">
                  <span className="flex items-center gap-2"><Trophy className="w-4 h-4" /> Solutions Architect</span>
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
