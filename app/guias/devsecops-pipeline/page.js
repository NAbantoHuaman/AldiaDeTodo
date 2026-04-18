import Link from 'next/link';
import { Infinity, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Shield, Zap, Layers, Globe } from 'lucide-react';

export const metadata = {
  title: "DevSecOps & CI/CD: El Pipeline de Desarrollo Moderno en 2026",
  description: "Guía definitiva sobre DevSecOps. Aprende a integrar seguridad en tu pipeline de CI/CD, automatizar despliegues y escalar infraestructuras con seguridad y velocidad.",
  openGraph: {
    title: "DevSecOps & CI/CD: El Pipeline de Desarrollo Moderno en 2026",
    description: "La seguridad ya no es el final del proceso, es el corazón del desarrollo. Domina las herramientas y cultura de DevSecOps.",
    url: "https://aldiadetodo.com/guias/devsecops-pipeline",
    type: "article",
    images: [{ url: '/images/guias/devsecops.png' }]
  },
  alternates: { canonical: '/guias/devsecops-pipeline' },
};

export default function GuiaDevSecOps() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'DevSecOps & CI/CD: El Pipeline de Desarrollo Moderno en 2026',
    description: 'Guía exhaustiva sobre la integración de seguridad en el ciclo de vida de desarrollo de software (SDLC) mediante automatización y cultura colaborativa.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/devsecops-pipeline',
  };

  return (
    <article className="min-h-screen bg-white font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-600 hover:text-slate-800 mb-10 transition-colors bg-white px-4 py-2 rounded-full shadow-sm">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-slate-800 rounded-3xl flex items-center justify-center shadow-xl shadow-slate-200 rotate-3 border-4 border-white">
              <Infinity className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             DevSecOps: <span className="text-slate-600">Seguridad</span> y Velocidad al Infinito
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Cultura:</span> DevSecOps</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 22 min</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Fichas:</span> CI/CD</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-slate-500 pl-6">
            &quot;En el pasado, la seguridad era una puerta que se cerraba al final del desarrollo. En 2026, la seguridad es el ingrediente que se mezcla desde el primer segundo. DevSecOps no trata de ir más lento, sino de ir lo más rápido posible sin estrellarse.&quot;
          </p>

          <p className="mb-8">
            La industria del software ha evolucionado de despliegues trimestrales a miles de despliegues por día. Esta velocidad ha creado un riesgo sin precedentes: ¿cómo aseguramos que cada una de esas actualizaciones no introduzca una vulnerabilidad crítica? La respuesta es <strong>DevSecOps</strong>. Al integrar la seguridad como una responsabilidad compartida y automatizar las pruebas de seguridad dentro del pipeline de <strong>Integración Continua y Despliegue Continuo (CI/CD)</strong>, permitimos que los equipos de ingeniería innoven a la velocidad del rayo con la confianza de una fortaleza digital.
          </p>

          <div className="bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-slate-400" /> Índice de Seguridad
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-slate-500/20 text-slate-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#shift-left" className="text-slate-200 no-underline font-bold group-hover:text-slate-400 transition-colors">Shift Left Security: Seguros desde el diseño</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-slate-500/20 text-slate-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#pipeline" className="text-slate-200 no-underline font-bold group-hover:text-slate-400 transition-colors">Anatomía de un Pipeline CI/CD Moderno</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-slate-500/20 text-slate-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#automation" className="text-slate-200 no-underline font-bold group-hover:text-slate-400 transition-colors">Automatización: SAST, DAST y SCA</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-slate-500/20 text-slate-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#monitoring" className="text-slate-200 no-underline font-bold group-hover:text-slate-400 transition-colors">Monitoreo y Respuesta en Tiempo Real</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-slate-500/20 text-slate-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-slate-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          <h2 id="shift-left" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Shield className="w-8 h-8 text-slate-600" /> 1. Shift Left: Mueve la Seguridad a la Izquierda
          </h2>
          <p>
            El concepto de &quot;Shift Left&quot; significa mover las pruebas y consideraciones de seguridad lo más temprano posible en el ciclo de vida del desarrollo. Si un error de seguridad se detecta en la fase de diseño, cuesta centavos arreglarlo. Si se detecta en producción, puede costar millones.
          </p>
          <p>
            <strong>Cultura sobre Herramientas:</strong> DevSecOps no se trata de comprar el software más caro, sino de cambiar la mentalidad de los desarrolladores. Cada ingeniero de software debe entender los riesgos de seguridad básicos (como OWASP Top 10) y ser responsable del código que produce. La seguridad ya no es el trabajo de un &quot;departamento de policías&quot; al final del pasillo, sino de todos en el equipo.
          </p>
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 my-10 flex gap-6 items-start shadow-sm">
             <Lightbulb className="w-8 h-8 text-slate-500 flex-shrink-0 mt-1" />
             <div>
                <h4 className="text-lg font-black text-slate-900 mb-2 mt-0">Dato Clave:</h4>
                <p className="text-slate-800 m-0 text-sm leading-relaxed">
                  En 2026, la mayoría de las brechas de seguridad ocurren por malas configuraciones o dependencias vulnerables, no por hackers genios rompiendo cifrados imposibles. Automatizar la revisión de configuraciones (IaC Scanning) es tu primera línea de defensa.
                </p>
             </div>
          </div>

          <h2 id="pipeline" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Layers className="w-8 h-8 text-slate-600" /> 2. El Pipeline Blindado
          </h2>
          <p>
            Un pipeline moderno automatiza el viaje del código desde la computadora del desarrollador hasta el usuario final. En un modelo DevSecOps, cada paso tiene un guardia de seguridad automatizado:
          </p>
          <ul className="space-y-4 m-0 p-0 list-none">
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">Commit</span>
              <p className="text-sm m-0">Pre-commit hooks evitan que se suban contraseñas o llaves API por error.</p>
            </li>
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">Build</span>
              <p className="text-sm m-0">Escaneo de vulnerabilidades en las dependencias (SCA) y análisis del código fuente (SAST).</p>
            </li>
            <li className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm flex gap-4">
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-xs font-black shrink-0">Deploy</span>
              <p className="text-sm m-0">Validación de la infraestructura como código y pruebas de penetración dinámicas (DAST).</p>
            </li>
          </ul>

          <h2 id="automation" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-slate-600" /> 3. Especialistas en Automatización
          </h2>
          <p>
            Para que DevSecOps funcione, necesitamos herramientas que hablen el idioma de los desarrolladores:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <h4 className="text-slate-900 font-black mt-0 mb-3">SAST (Static Analysis)</h4>
               <p className="text-xs text-slate-600 m-0">Analiza el código escrito en busca de fallos lógicos o malas prácticas. Ej: SonarQube, Snyk.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <h4 className="text-slate-900 font-black mt-0 mb-3">SCA (Comp. Analysis)</h4>
               <p className="text-xs text-slate-600 m-0">Analiza tus librerías externas. ¿Sabías que el 80% de tu app es código de terceros? Ej: GitHub Dependabot.</p>
            </div>
          </div>
          <p>
            La meta es generar <strong>feedback instantáneo</strong>. Si un desarrollador sube código inseguro, el pipeline falla inmediatamente y le explica por qué, permitiéndole aprender y corregir el error en el momento.
          </p>

          <h2 id="monitoring" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Globe className="w-8 h-8 text-slate-600" /> 4. Monitoreo: Ojos en Todas Partes
          </h2>
          <p>
             La seguridad no termina con el despliegue. En producción, necesitamos observabilidad total. Herramientas de <strong>SIEM</strong> (Security Information and Event Management) y registros de auditoría nos permiten detectar comportamientos anómalos. Si una IP inesperada intenta acceder a mil registros por segundo, nuestros sistemas automáticos deben ser capaces de bloquearla o alertar al equipo en milisegundos.
          </p>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-slate-600" /> Preguntas Frecuentes
          </h2>
          <div className="space-y-6 mt-8">
            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿DevSecOps me hará ir más lento?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                A corto plazo, configurar la automatización lleva tiempo. A largo plazo, te hace ir mucho más rápido porque eliminas el retrabajo de corregir fallos críticos después de que el código ya está en producción. Te da la &quot;libertad de fallar&quot; en entornos controlados antes de que afecte a los usuarios.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Es rentable para startups pequeñas?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Absolutamente. Startups con pocos ingenieros necesitan la automatización más que nadie. Una sola brecha de seguridad puede significar el fin de una pequeña empresa. Usar herramientas integradas (como las de GitLab o GitHub Actions) hace que implementar DevSecOps básico sea casi gratuito.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Qué es &quot;Security as Code&quot;?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Es la práctica de tratar tus políticas de seguridad, reglas de firewall y permisos como si fueran código de programación. Se guardan en Git, se revisan por pares y se despliegan automáticamente. Esto asegura que la seguridad sea repetible, auditable y coherente.
              </p>
            </details>
          </div>

          <div className="bg-slate-900 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                Construye Software <br className="hidden md:block" /> a Prueba de Balas
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium max-w-2xl">
                La seguridad no es un destino, es un viaje continuo. Domina la cultura DevSecOps y conviértete en el ingeniero que las empresas de 2026 necesitan para escalar sus plataformas globales con integridad total.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-700 hover:text-white transition-all shadow-xl flex items-center gap-2">
                   Ver más Guías <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-slate-400 text-sm font-bold">
                  <span className="flex items-center gap-1"><Infinity className="w-4 h-4" /> Continuous Power</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Zero Trust</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
