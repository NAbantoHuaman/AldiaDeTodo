import Link from 'next/link';
import { Fingerprint, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Shield, Zap, Globe, Lock } from 'lucide-react';

export const metadata = {
  title: "Fundamentos de Hacking Ético y Ciberseguridad en 2026",
  description: "Guía maestra sobre ciberseguridad. Aprende Pentesting, análisis de vulnerabilidades, seguridad en redes y cómo proteger sistemas contra ataques modernos en 2026.",
  openGraph: {
    title: "Fundamentos de Hacking Ético y Ciberseguridad en 2026",
    description: "La seguridad es el desafío más grande de la era digital. Aprende a pensar como un atacante para defenderte como un profesional.",
    url: "https://aldiadetodo.com/guias/hacking-etico",
    type: "article",
    images: [{ url: '/images/guias/hacking.png' }]
  },
  alternates: { canonical: '/guias/hacking-etico' },
};

export default function GuiaHacking() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Fundamentos de Hacking Ético y Ciberseguridad en 2026',
    description: 'Manual profundo sobre la seguridad informática, técnicas de pentesting ético y estrategias de defensa para infraestructuras digitales modernas.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/hacking-etico',
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
            <div className="w-16 h-16 bg-slate-900 rounded-3xl flex items-center justify-center shadow-xl shadow-slate-200 -rotate-3 border-4 border-white">
              <Fingerprint className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Hacking Ético: <span className="text-slate-600">Defendiendo</span> el Mundo Digital
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Tipo:</span> Ciberseguridad</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 25 min</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Ética:</span> White Hat</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-slate-500 pl-6">
            &quot;Para ganar a un hacker, tienes que pensar como uno. La ciberseguridad en 2026 no es solo una defensa pasiva; es una caza constante de vulnerabilidades antes de que otros las encuentren. El hacking ético es el superpoder que permite que el internet siga siendo un lugar seguro.&quot;
          </p>

          <p className="mb-8">
            En un mundo donde cada dispositivo está conectado y nuestras vidas financieras, personales y profesionales viven en la nube, el riesgo es total. La ciberseguridad ha dejado de ser una preocupación solo para los bancos para convertirse en un pilar de cualquier negocio. El <strong>Hacking Ético</strong> (o Pentesting) es el uso legal de técnicas de hacking para identificar y mitigar vulnerabilidades. En esta guía, desmitificamos el proceso, exploramos las herramientas de las que disponen los profesionales de 2026 y te daremos los pasos para que inicies tu camino como un &quot;White Hat&quot;.
          </p>

          <div className="bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-slate-400" /> Manifiesto Hacker
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-slate-500/20 text-slate-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#fases" className="text-slate-200 no-underline font-bold group-hover:text-slate-400 transition-colors">Las 5 Etapas del Pentesting Profesional</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-slate-500/20 text-slate-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#vulnerabilidades" className="text-slate-200 no-underline font-bold group-hover:text-slate-400 transition-colors">Vulnerabilidades Web: Del Inyecciones a Prompt Hacks</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-slate-500/20 text-slate-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#herramientas" className="text-slate-200 no-underline font-bold group-hover:text-slate-400 transition-colors">Cerveza y Código: Kali Linux, Nmap y Burp Suite</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-slate-500/20 text-slate-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#social" className="text-slate-200 no-underline font-bold group-hover:text-slate-400 transition-colors">Ingeniería Social: El factor humano</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-slate-500/20 text-slate-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-slate-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          <h2 id="fases" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Search className="w-8 h-8 text-slate-600" /> 1. El Metodología: Las 5 Fases
          </h2>
          <p>
            Un hacker ético no lanza ataques al azar. Sigue una metodología rigurosa para asegurar que ningún rincón del sistema quede sin auditar:
          </p>
          <ul className="space-y-4 m-0 p-0 list-none mb-12">
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-slate-900">Reconocimiento:</span> Recolección pasiva y activa de información sobre el objetivo (OSINT).
            </li>
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-slate-900">Escaneo:</span> Identificación de servicios abiertos, versiones de software y topología de red.
            </li>
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-slate-900">Gaining Access:</span> La fase de explotación. Usar vulnerabilidades encontradas para entrar al sistema.
            </li>
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-slate-900">Mantener Acceso:</span> Asegurar la persistencia para demostrar el impacto real de la vulnerabilidad.
            </li>
            <li className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
               <span className="font-black text-slate-900">Borrado de Huellas:</span> En el hacking ético, esta fase se traduce en la creación de un informe detallado de remediación.
            </li>
          </ul>

          <h2 id="vulnerabilidades" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <AlertTriangle className="w-8 h-8 text-slate-600" /> 2. Amenazas Modernas en 2026
          </h2>
          <p>
            Las vulnerabilidades clásicas como SQL Injection todavía existen, pero en 2026 han surgido nuevas amenazas:
          </p>
          <p>
            <strong>Prompt Injection:</strong> Con la integración masiva de IA, los atacantes intentan engañar a los LLMs para que revelen datos privados o ejecuten comandos no autorizados. La seguridad de la IA se ha convertido en el campo de batalla más caliente de la ciberseguridad actual.
          </p>
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 my-10 flex gap-6 items-start shadow-sm">
             <Lightbulb className="w-8 h-8 text-slate-500 flex-shrink-0 mt-1" />
             <div>
                <h4 className="text-lg font-black text-slate-900 mb-2 mt-0">Zero Trust Architecture:</h4>
                <p className="text-slate-800 m-0 text-sm leading-relaxed">
                  En 2026, el perímetro ha muerto. Ya no confiamos en nadie, &quot;incluso si está dentro de la red&quot;. Cada petición debe ser autenticada y autorizada de forma independiente. Implementar Zero Trust es la defensa más efectiva contra el movimiento lateral de un atacante.
                </p>
             </div>
          </div>

          <h2 id="herramientas" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Terminal className="w-8 h-8 text-slate-600" /> 3. El Arsenal del Pentester
          </h2>
          <p>
            El software es tu arma de defensa. En 2026, estas herramientas son el estándar:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-white">
               <h4 className="text-blue-400 font-black mt-0 mb-3 text-lg">Kali Linux</h4>
               <p className="text-xs text-slate-400 m-0">La distribución definitiva que contiene cientos de herramientas preinstaladas para auditorías de seguridad.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-white">
               <h4 className="text-blue-400 font-black mt-0 mb-3 text-lg">Burp Suite</h4>
               <p className="text-xs text-slate-400 m-0">El proxy interceptor esencial para auditar la seguridad de aplicaciones web y APIs en tiempo real.</p>
            </div>
          </div>
          <pre className="bg-slate-950 text-slate-300 p-6 rounded-2xl overflow-x-auto text-sm my-8 border border-slate-800">
            <code>
{`# Escaneo básico de red con Nmap
nmap -sV -p 1-65535 -T4 target-site.com

# Resultado típico:
# PORT     STATE SERVICE  VERSION
# 80/tcp   open  http     nginx 1.25.0
# 443/tcp  open  ssl/http  nginx 1.25.0`}
            </code>
          </pre>

          <h2 id="social" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Cpu className="w-8 h-8 text-slate-600" /> 4. El Factor Humano: Ingeniería Social
          </h2>
          <p>
             Puedes tener el firewall más caro del mundo, pero si un empleado revela su contraseña por un correo de phishing bien diseñado, la seguridad cae. La ingeniería social sigue siendo el vector de ataque número uno en 2026. Educar a las personas es tan importante como parchear el software. 
          </p>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-slate-600" /> Preguntas Frecuentes
          </h2>
          <div className="space-y-6 mt-8">
            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Es legal practicar estas técnicas?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Solo si tienes permiso explícito y por escrito del dueño del sistema. Practicar en tus propias máquinas virtuales o en plataformas de laboratorio como <strong>HackTheBox</strong> o <strong>TryHackMe</strong> es totalmente legal y recomendable.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Necesito saber programar para ser hacker?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                No al principio, pero para ser un profesional de élite, sí. Saber Python para automatizar ataques o Bash para scripting en Linux te hará 10 veces más efectivo. Entender el código te permite entender por qué algo es vulnerable.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Cuál es la primera certificación que debo sacar?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Para principiantes, el <strong>CompTIA Security+</strong> es excelente. Para quienes quieren un enfoque práctico de hacking, el <strong>eJPT</strong> o directamente ir por el <strong>OSCP</strong> (Offensive Security Certified Professional) son los estándares de la industria.
              </p>
            </details>
          </div>

          <div className="bg-slate-950 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                Cruza la Línea: Conviértete <br className="hidden md:block" /> en Guardián Digital
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium max-w-2xl">
                El mundo necesita hackers éticos más que nunca. Desarrolla las habilidades técnicas necesarias para identificar peligros, proteger infraestructuras críticas y asegurar que el futuro digital sea un lugar donde el crimen no tenga cabida.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-700 hover:text-white transition-all shadow-xl flex items-center gap-2">
                   Explorar Guías <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-slate-400 text-sm font-bold">
                  <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> Hardened Systems</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Ethical Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
