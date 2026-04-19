import Link from 'next/link';
import { Shield, ChevronLeft, BookOpen, CheckCircle, Lightbulb, Lock, EyeOff, Terminal, Cpu, Globe, AlertTriangle, HelpCircle, ArrowRight, Fingerprint } from 'lucide-react';

export const metadata = {
  title: "Seguridad para Desarrolladores: De Código Abierto a Software Seguro",
  description: "Guía maestra de ciberseguridad para programadores en 2026. Protégete contra la inyección de prompts, ataques a la cadena de suministro y vulnerabilidades de la era de la IA.",
  openGraph: {
    title: "Seguridad para Desarrolladores: De Código Abierto a Software Seguro",
    description: "Manual completo de seguridad defensiva para el desarrollo de software moderno.",
    url: "https://aldiadetodo.com/guias/seguridad-desarrolladores",
    type: "article",
    images: [{ url: '/images/guias/seguridad.png' }]
  },
  alternates: { canonical: '/guias/seguridad-desarrolladores' },
};

export default function GuiaSeguridadDevs() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Seguridad para Desarrolladores: De Código Abierto a Software Seguro',
    description: 'Manual de defensa y seguridad proactiva para desarrolladores en 2026.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/seguridad-desarrolladores',
  };

  return (
    <article className="min-h-screen bg-white font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-24 border-b border-blue-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-700 hover:text-blue-900 mb-10 transition-colors bg-white px-4 py-2 rounded-full shadow-sm">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center shadow-xl shadow-blue-200 rotate-6 border-4 border-white">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Seguridad Defensiva: <span className="text-blue-600">Blindaje</span> total de código en 2026
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Tipo:</span> Guía Técnica Avanzada</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 24 min</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Estado:</span> Revisado Abr 2026</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-blue-500 pl-6">
            &quot;En una era donde la Inteligencia Artificial puede descubrir vulnerabilidades de día cero en nanosegundos, la seguridad proactiva ya no es un lujo, es la única forma de supervivencia digital.&quot;
          </p>

          <p className="mb-8">
            La ciberseguridad ha pasado de ser un departamento aislado a ser una responsabilidad central del desarrollador. En 2026, con el auge del <strong>DevSecOps</strong>, la seguridad se integra en cada línea de código desde el primer commit. Esta guía explora las fronteras del software seguro, desde la protección de modelos de lenguaje hasta el cifrado post-cuántico.
          </p>

          <div className="not-prose bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black !text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-blue-400" /> Tópicos Críticos
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#prompt-injection" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Seguridad en IA: Inyección de Prompt</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#supply-chain" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Seguridad de la Cadena de Suministro (SBOM)</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#secrets" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Gestión de Secretos Dinámica</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#post-quantum" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Criptografía Post-Cuántica (PQC)</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-blue-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Section 1 */}
          <h2 id="prompt-injection" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Cpu className="w-8 h-8 text-blue-600" /> 1. El Nuevo Enemigo: Inyección de Prompt
          </h2>
          <p>
            Si tu aplicación utiliza modelos de lenguaje (LLMs) para procesar entradas de usuario, ya no solo debes preocuparte por el SQL Injection. La <strong>Inyección de Prompt</strong> es el ataque de ciberseguridad más exitoso de 2026.
          </p>
          <p>
            Los atacantes diseñan instrucciones maliciosas que &quot;engañan&quot; al modelo para que ignore sus restricciones de seguridad. Por ejemplo, pidiendo a un bot de soporte que entregue las claves API del servidor o que actúe como un administrador.
          </p>
          <div className="bg-red-50 border border-red-100 rounded-3xl p-8 my-10 flex gap-6 items-start">
             <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
             <div>
                <h4 className="text-lg font-black text-red-900 mb-2 mt-0">Mitigación Crítica:</h4>
                <p className="text-red-800 m-0 text-sm leading-relaxed">
                  Nunca confíes en el input del usuario como parte de una instrucción de sistema. Utiliza <strong>Delimitadores de Contexto</strong> y capas de validación (Guardrails) que escaneen el input en busca de patrones de ataque antes de enviarlo al LLM.
                </p>
             </div>
          </div>

          {/* Section 2 */}
          <h2 id="supply-chain" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Globe className="w-8 h-8 text-blue-600" /> 2. Seguridad de la Cadena de Suministro
          </h2>
          <p>
            En 2026, el 90% del código de una aplicación moderna proviene de dependencias externas (npm, PyPI, Go Modules). Un solo paquete malicioso puede comprometer todo tu negocio.
          </p>
          <p>
            La solución estándar hoy es el <strong>SBOM (Software Bill of Materials)</strong>. Es una lista de ingredientes digital que permite rastrear cada librería y sub-librería que usas. Integrar herramientas que escaneen automáticamente estas dependencias en busca de vulnerabilidades (CVEs) en tu pipeline de CI/CD es imperativo para cualquier desarrollo profesional.
          </p>
          <div className="bg-slate-900 rounded-2xl p-6 my-8 font-mono text-sm shadow-xl border border-slate-800">
            <p className="text-slate-500 mb-2 border-b border-slate-800 pb-2"># Verificación de Integridad en CI/CD</p>
            <pre className="text-blue-400 overflow-x-auto">
{`$ audit-tool scan --policy strict
[INFO] Scanning SBOM components...
[WARN] vulnerable-lib@1.2.3 has 1 High CVE
[ERROR] Policy violation: Critical CVE found.
[FAIL] Build termined due to security risk.`}
            </pre>
          </div>

          {/* Section 3 */}
          <h2 id="secrets" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <EyeOff className="w-8 h-8 text-blue-600" /> 3. <strong>Gestión de Secretos Dinámica</strong>
          </h2>
          <p>
            Las variables de entorno estáticas son un riesgo de seguridad latente. Si un atacante accede a tu servidor, tiene las llaves de tu base de datos para siempre.
          </p>
          <p>
            En 2026, los mejores desarrolladores usan <strong>Secretos Dinámicos</strong> y <strong>Políticas de Tiempo de Vida (TTL)</strong>. Usando gestores como Vault o AWS Secrets Manager, tu aplicación solicita una clave temporal que se autodestruye en 5 minutos. Si una clave se filtra, el daño es nulo porque la clave ya habrá expirado cuando el atacante intente usarla.
          </p>

          {/* Section 4 */}
          <h2 id="mfa" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Fingerprint className="w-8 h-8 text-cyan-600" /> 4. MFA y Autenticación Moderna
          </h2>
          <p>
            Las contraseñas han muerto. En 2026, la autenticación multifactor (MFA) y las <strong>Passkeys</strong> son la única defensa real contra el robo de identidad. Como desarrollador, tu labor es facilitar que el usuario sea seguro sin sacrificar la experiencia de uso.
          </p>

          {/* Section 5 */}
          <h2 id="zero-trust" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Shield className="w-8 h-8 text-cyan-600" /> 5. Arquitectura Zero Trust (SCA)
          </h2>
          <p>
            El viejo modelo de seguridad basado en &quot;perímetros&quot; (donde todo lo que está dentro de la red es seguro) es historia. <strong>Zero Trust</strong> asume que la red ya está comprometida. Cada solicitud, cada API call, debe ser autenticada y autorizada de forma independiente.
          </p>
          <p>
            <strong>Software Composition Analysis (SCA):</strong> Tus dependencias son tu mayor superficie de ataque. Usar herramientas que escaneen vulnerabilidades en tiempo real en tu pipeline de CI/CD es obligatorio. Si una librería tiene una vulnerabilidad conocida, tu build debe fallar automáticamente. No heredes los problemas de seguridad de otros por pereza o falta de procesos.
          </p>

          {/* Section 6 */}
          <h2 id="csp" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Lock className="w-8 h-8 text-cyan-600" /> 6. Content Security Policy (CSP)
          </h2>
          <p>
            Muchos desarrolladores olvidan configurar una <strong>CSP</strong> robusta. Una buena política de seguridad de contenido puede prevenir el 90% de los ataques XSS exitosos al restringir qué scripts y recursos puede cargar y ejecutar el navegador. En 2026, el uso de <code>strict-dynamic</code> y hashes para scripts inline es la mejor práctica recomendada. Una cabecera HTTP bien configurada es una de las defensas más baratas y efectivas que puedes implementar hoy mismo.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 my-12 rounded-r-3xl shadow-sm">
             <p className="text-blue-900 font-bold mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-blue-600" /> Checklist de Oro para Seguridad:
             </p>
             <ul className="text-sm text-blue-800 space-y-2 m-0 p-0 list-none font-medium">
                <li>• No subas archivos <code>.env</code> a Git (nunca).</li>
                <li>• Usa autenticación multifactor (MFA) obligatoria para devs.</li>
                <li>• Firma tus commits de Git de forma criptográfica.</li>
                <li>• Aplica el Principio de Menor Privilegio (PoLP).</li>
                <li>• Escanea tu código contra &quot;Hardcoded Secrets&quot; antes de pushear.</li>
             </ul>
          </div>

          {/* FAQ Section */}
          <div id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <h2 className="text-3xl font-black text-slate-950 font-outfit mb-12 flex items-center gap-3 underline decoration-blue-500 decoration-4 underline-offset-8">
              <HelpCircle className="w-8 h-8 text-blue-600" /> Preguntas Frecuentes (FAQ)
            </h2>
            
            <div className="space-y-6">
              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Es suficiente usar HTTPS para proteger mi app?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  HTTPS protege los datos en tránsito, pero no protege tu aplicación contra ataques a nivel de lógica (CSRF, XSS), inyección de prompts o ataques a la base de datos si el atacante ya está dentro. HTTPS es el piso mínimo, no el techo de seguridad.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Debo preocuparme por la seguridad de la IA en apps pequeñas?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Absolutamente. Si tu app permite a los usuarios interactuar con un LLM, podrías ser víctima de &quot;Data Poisoning&quot; o exfiltración de datos. La seguridad en IA debe ser considerada desde el MVP (Producto Mínimo Viable).
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Qué herramientas gratuitas recomiendas para escanear código?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Depende del lenguaje. Para JS/TS, `npm audit` es básico pero necesario. `Snyk` tiene una capa gratuita excelente para vulnerabilidades de código y dependencias. Para secretos en Git, `gitleaks` es un estándar de la industria que puedes usar localmente.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Qué es el principio de &quot;Menor Privilegio&quot;?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Significa dar a cada proceso, usuario o microservicio solo los permisos mínimos necesarios para realizar su tarea. Si una función solo necesita leer de la DB, no le des permisos de escritura. Esto limita brutalmente el &quot;radio de explosión&quot; en caso de que ese componente sea comprometido.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿Cómo protejo las API Keys en el frontend?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Simple: no las pongas en el frontend. Cualquier cosa en el cliente es pública por definición. Usa un &quot;Backend-for-Frontend&quot; (BFF) o funciones Serverless que actúen de proxy, guardando las llaves en variables de entorno seguras en el servidor.
                </p>
              </details>

              <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0">¿La IA puede ayudar a detectar ataques en tiempo real?</h4>
                  <span className="transition-transform group-open:rotate-180">
                    <ChevronLeft className="w-5 h-5 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                  Absolutamente. En 2026, los firewalls de aplicación (WAF) usan modelos de aprendizaje profundo para detectar patrones de tráfico anómalos que los humanos tardarían horas en ver. Sin embargo, no dependas solo de la IA; la seguridad debe tener múltiples capas (defensa en profundidad).
                </p>
              </details>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-blue-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                La Seguridad es un <br className="hidden md:block" /> Proceso, No un Destino
              </h2>
              <p className="text-blue-50 text-lg leading-relaxed mb-10 font-medium max-w-xl">
                Convertirte en un desarrollador consciente de la seguridad te hace más valioso y profesional. No esperes a un incidente para auditar tu código. Construye muros digitales hoy y duerme tranquilo mañana.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/guias" className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl flex items-center gap-2">
                   Seguir Aprendiendo <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-blue-100 text-sm font-bold">
                  <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> Código Seguro</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Actualizado 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
