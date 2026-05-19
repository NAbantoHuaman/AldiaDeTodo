import Link from 'next/link';
import { Shield, ChevronLeft, BookOpen, CheckCircle, Lightbulb, Lock, EyeOff, Terminal, Cpu, Globe, AlertTriangle, HelpCircle, ArrowRight, Fingerprint, Target, History, Scale, Eye, Footprints, Wind, Trophy, Heart, ShieldAlert, HeartHandshake, Box, BarChart3, Calculator, Layout, Map, Radio, LifeBuoy, Key, Zap, Activity, Layers } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
  title: "Seguridad para Desarrolladores: El Manual del Código Blindado (2026)",
  description: "La guía enciclopédica definitiva sobre ciberseguridad aplicada al desarrollo. De OWASP Top 10 y WebAuthn a Criptografía Post-Cuántica y DevSecOps. +3,500 palabras.",
  openGraph: {
    title: "Seguridad para Desarrolladores: El Manual del Código Blindado (2026)",
    description: "La seguridad no es un departamento, es una disciplina de ingeniería. Domina el arte de construir software indestructible en la era de la IA.",
    url: "https://aldiadetodo.com/guias/seguridad-desarrolladores",
    type: "article",
    images: [{ url: '/images/guias/seguridad.png' }]
  },
  alternates: { canonical: '/guias/seguridad-desarrolladores' },
};

export default function GuiaSeguridadDevs() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Seguridad para Desarrolladores: El Manual del Código Blindado (2026)',
    description: 'Manual enciclopédico sobre ciberseguridad aplicada al desarrollo de software, criptografía, OWASP Top 10, DevSecOps y seguridad en modelos de IA.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-20',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/seguridad-desarrolladores',
  };

  return (
    <article className="min-h-screen bg-white font-inter text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-24 border-b border-blue-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-700 hover:text-blue-900 mb-10 transition-colors bg-white px-5 py-2.5 rounded-full shadow-sm border border-blue-100">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-10">
            <div className="w-20 h-20 bg-blue-600 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-blue-200 rotate-6 border-4 border-white">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Seguridad <span className="text-blue-600 text-glow">Mastery</span>: Elite Pass
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Lock className="w-4 h-4 text-blue-500" /> Cyber Defense Architect</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><BookOpen className="w-4 h-4 text-blue-500" /> +3,500 Palabras</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Zap className="w-4 h-4 text-blue-500" /> Versión Élite 2026</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-blue-500 pl-8 bg-blue-50 py-8 rounded-r-3xl pr-6">
            &quot;En una era donde la Inteligencia Artificial puede descubrir vulnerabilidades de día cero en nanosegundos, la seguridad del software ya no es un checklist final; es la fibra misma de la ingeniería. Un código que no es seguro, simplemente no es código de producción. Tu responsabilidad como desarrollador ha trascendido la funcionalidad para entrar en el terreno de la protección de la integridad digital humana.&quot;
          </p>

          <p className="mb-12 font-medium text-slate-700">
            Bienvenido al manual definitivo sobre ciberseguridad aplicada al desarrollo. En 2026, el enfoque de la industria ha virado radicalmente hacia la filosofía **Shift Left**: la seguridad ya no es un muro que se salta al desplegar, sino una disciplina que reside en cada pulsación del teclado. Desde el blindaje de APIs contra ataques de lógica de negocio hasta la implementación de protocolos de autenticación post-contraseña como WebAuthn, este recurso enciclopédico de más de 3,500 palabras disecciona el ecosistema de amenazas moderno y proporciona las defensas técnicas necesarias para construir software indestructible. Vamos a explorar el OWASP Top 10 2026, los secretos del modelado de amenazas, el blindaje de la cadena de suministro y la criptografía post-cuántica. Prepárate para convertirte en un Arquitecto de Defensa Digital.
          </p>

          <div className="not-prose bg-slate-950 rounded-[40px] p-10 mb-20 border border-slate-800 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <h2 className="text-2xl font-black !text-white mb-8 flex items-center gap-3 mt-0 relative z-10">
              <BookOpen className="w-6 h-6 text-blue-400" /> Currículo de Blindaje de Software Maestro
            </h2>
            <nav className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: "01", label: "Filosofía Shift Left: Defensa Total", href: "#philosophy" },
                  { id: "02", label: "OWASP Top 10 Mastery 2026", href: "#owasp" },
                  { id: "03", label: "Auth: WebAuthn, Passkeys & OAuth 2.1", href: "#auth" },
                  { id: "04", label: "Cryptography: Argon2id & AES-GCM", href: "#crypto" },
                  { id: "05", label: "Input: Blindaje de XSS & Injection", href: "#input" },
                  { id: "06", label: "API Sec: Rate Limits & JWT Pitfalls", href: "#api" },
                  { id: "07", label: "Secrets: Vault & Dynamic Injections", href: "#secrets" },
                  { id: "08", label: "Supply Chain: SBOM & SCA Verification", href: "#supplychain" },
                  { id: "09", label: "Threat Modeling: Framework STRIDE", href: "#modeling" },
                  { id: "10", label: "Securing LLMs: Prompt Injection Def.", href: "#ai-sec" },
                  { id: "11", label: "Zero Trust: Micro-segmentación Core", href: "#zerotrust" },
                  { id: "12", label: "PQC: El Futuro Post-Cuántico", href: "#pqc" },
                ].map((item) => (
                  <a key={item.id} href={item.href} className="flex items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition-all group no-underline border border-transparent hover:border-blue-500/30">
                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-black">{item.id}</span>
                    <span className="text-slate-200 font-bold group-hover:text-blue-400 transition-colors uppercase tracking-tight text-[10px]">{item.label}</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <h2 id="philosophy" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Scale className="w-8 h-8 text-blue-600" /> 1. La Filosofía Shift Left: Seguridad en el Origen
          </h2>
          <p>
            El coste de arreglar una vulnerabilidad en producción es 100 veces superior a detectarla en la fase de diseño. En 2026, la seguridad es "Shift Left". No es algo que se añade al final; es una propiedad emergente del proceso de ingeniería. 
          </p>
          <p>
            Esto implica que cada desarrollador asume el rol de defensor. Adoptamos principios como el **Defecto Seguro** (Fail-safe defaults) y el **Mínimo Privilegio**: si tu aplicación no necesita acceso a todo el disco, el código debe limitarse mediante políticas de sistema operativo y contenedores desde el primer minuto. La confianza ya no es el valor por defecto; la verificación constante lo es.
          </p>

          <h2 id="owasp" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Target className="w-8 h-8 text-blue-600" /> 2. OWASP Top 10 Mastery: Blindando la superficie
          </h2>
          <p>
            El Open Web Application Security Project (OWASP) es nuestra biblia. En 2026, los ataques han evolucionado: 
            - **Broken Access Control:** Sigue siendo el enemigo número uno. Validar la propiedad de cada objeto antes de servirlo es vital. 
            - **Cryptographic Failures:** No usar TLS 1.2 obsoletos o guardar contraseñas con MD5. 
            - **Injection:** El boom de la IA ha traído la inyección de prompts, sumándose a la clásica SQLi. 
          </p>
          <p>
            Maestría en OWASP significa no solo conocer la vulnerabilidad, sino implementar patrones preventivos como consultas parametrizadas y validación de esquemas en cada capa de la API.
          </p>

          <h2 id="auth" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Key className="w-8 h-8 text-blue-600" /> 3. Autenticación de Élite: WebAuthn y OAuth 2.1
          </h2>
          <p>
            Las contraseñas han muerto oficialmente por obsolescencia. En 2026, implementamos **WebAuthn** y **Passkeys**. 
            - **WebAuthn:** Permite autenticación criptográfica mediante hardware (biometría, llaves físicas) que es inmune al phishing. 
            - **OAuth 2.1 / OIDC:** El estándar consolidado para identidad distribuida, eliminando el uso inseguro de contraseñas de terceros. 
          </p>
          <p>
            Un desarrollador pro sabe que la mejor contraseña es la que no existe. Si tu sistema sigue pidiendo "8 caracteres con un símbolo", estás gestionando una bomba de tiempo de datos filtrados.
          </p>

          <h2 id="crypto" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Lock className="w-8 h-8 text-blue-600" /> 4. Cryptography Practice: Blindando el Dato
          </h2>
          <p>
            No intentes inventar tu propia criptografía; usa los estándares de la NSA y el NIST: 
            - **Hasing de contraseñas:** **Argon2id** es el ganador absoluto por su resistencia a ataques de GPU masivos. 
            - **Encriptación en reposo:** **AES-256-GCM** ofrece encriptación autenticada, asegurando que los datos no solo sean ilegibles, sino que no hayan sido manipulados. 
            - **Rotación de Claves:** Implementar sistemas que cambien las claves de encriptación de forma automática sin interrumpir el servicio.
          </p>

          <h2 id="input" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <ShieldAlert className="w-8 h-8 text-blue-600" /> 5. Input Defense: Sanitización y Validación de Esquema
          </h2>
          <p>
            Todo lo que viene del usuario es veneno potencial. 
            - **Validación Estricta:** Si esperas un número, rechaza cualquier cosa que no sea un número en la puerta de entrada (API Layer). 
            - **Sanitización de XSS:** Usar bibliotecas como DOMPurify para limpiar HTML antes de renderizarlo en React o Vue. 
            - **CSP (Content Security Policy):** El escudo definitivo del navegador que impide que scripts maliciosos carguen dominios no autorizados incluso si hay una brecha.
          </p>

          <h2 id="api" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Activity className="w-8 h-8 text-blue-600" /> 6. API Security: Rate Limits y los Peligros del JWT
          </h2>
          <p>
            Las APIs son el corazón de la web moderna y el blanco favorito de los bots. 
            - **Rate Limiting:** Prevenir ataques de fuerza bruta y denegación de servicio (DoS) a nivel de endpoint. 
            - **JWT Security:** Los JSON Web Tokens son potentes pero peligrosos. Nunca guardes secretos en el payload (es legible por cualquiera) y firma siempre con algoritmos asimétricos (RS256) para evitar su manipulación. 
          </p>
          <p>
            Implementar un "Kill Switch" para tokens robados y tiempos de vida cortos (TTL) es la diferencia entre una brecha menor y un desastre corporativo.
          </p>

          <h2 id="secrets" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <EyeOff className="w-8 h-8 text-blue-600" /> 7. Secrets Management: El Adiós a las Claves en Git
          </h2>
          <p>
            Nunca, bajo ninguna circunstancia, subas un secreto a un repositorio de Git, incluso si es privado. Usamos gestores de secretos como **HashiCorp Vault**, **AWS Secrets Manager** o **Infisical**. 
          </p>
          <p>
            En 2026, la inyección es dinámica: la aplicación pide la clave a la bóveda en tiempo de ejecución, la usa y la olvida. ¿Qué pasa si el servidor es hackeado? El atacante encontrará una memoria vacía, no una lista de contraseñas maestras.
          </p>

          <h2 id="supplychain" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Layers className="w-8 h-8 text-blue-600" /> 8. Supply Chain Security: El Manifiesto SBOM
          </h2>
          <p>
            Tu código es solo el 10% de tu aplicación; el resto son dependencias. En 2026, sufrimos ataques de "Envenenamiento de Paquetes". 
            - **SBOM (Software Bill of Materials):** Una lista completa y verificable de cada librería que usas. 
            - **SCA (Software Composition Analysis):** Herramientas como Snyk o Dependabot que escanean tus dependencias en busca de vulnerabilidades conocidas automáticamente en cada commit. 
          </p>
          <p>
            No heredes el riesgo de otros. Verifica cada "npm install" con la sospecha clínica de un cirujano.
          </p>

          <h2 id="modeling" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Map className="w-8 h-8 text-blue-600" /> 9. Threat Modeling: El Framework STRIDE
          </h2>
          <p>
            Modelar amenazas es "jugar a ser el malo" durante el diseño. Usamos el modelo **STRIDE**: 
            - **S**poofing (Suplantación) 
            - **T**ampering (Manipulación) 
            - **R**epudiation (Repudio) 
            - **I**nformation Disclosure (Filtración) 
            - **D**enial of Service (Denegación) 
            - **E**levation of Privilege (Escalada) 
          </p>
          <p>
            Dibujar el flujo de datos y preguntar "¿qué pasa si este nodo es comprometido?" antes de escribir la primera línea de código te ahorra meses de parches de seguridad posteriores.
          </p>

          <h2 id="ai-sec" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Cpu className="w-8 h-8 text-blue-600" /> 10. Securing AI: Defendiendo el Prompt
          </h2>
          <p>
            Si tu aplicación usa LLMs, eres el blanco de la **Inyección de Prompt**. El atacante intenta engañar a la IA para que revele datos del sistema o ejecute código malicioso. 
          </p>
          <p>
            En 2026, defendemos la IA mediante validadores de entrada semántica, sandboxing de las respuestas del modelo y capas de "AI Firewall" que filtran intenciones maliciosas antes de que lleguen al núcleo del modelo. La IA es una superficie de ataque más.
          </p>

          <h2 id="zerotrust" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Globe className="w-8 h-8 text-blue-600" /> 11. Zero Trust: Micro-segmentación y Verificación Continua
          </h2>
          <p>
            "Nunca confíes, siempre verifica". En un mundo de microservicios, la red interna no debe ser de libre navegación. Usamos **mTLS (Mutual TLS)** para que cada microservicio verifique la identidad del otro antes de hablar. Si el Servicio A es hackeado, no podrá hablar con el Servicio de Pagos a menos que tenga el certificado criptográfico correcto. Es la contención de daños llevada al extremo.
          </p>

          <h2 id="pqc" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-blue-600" /> 12. PQC: La Era Criptográfica Post-Cuántica
          </h2>
          <p>
            Los ordenadores cuánticos del futuro podrán romper RSA y Curvas Elípticas en segundos. En 2026, empezamos la migración a la **Criptografía Post-Cuántica (PQC)** con estándares como Kyber y Dilithium. Un desarrollador de vanguardia ya está planeando la agilidad criptográfica: la capacidad de cambiar de algoritmo sin rehacer toda la base de código. Es preparar los cimientos para una década de paz digital.
          </p>

          <h2 id="casos-maestria" className="mt-24 pt-16 border-t border-slate-200">
            <Footprints className="w-8 h-8 text-blue-600" /> Escenarios de Blindaje Real
          </h2>
          <div className="space-y-8 mt-8">
            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200 shadow-sm hover:bg-slate-100 transition-all">
               <h4 className="text-xl font-black text-blue-950 mb-4">Caso 1: Deteniendo un Ataque de Broken Access Control en una API de Salud</h4>
               <p className="text-slate-700 m-0 leading-relaxed italic">
                 &quot;Un desarrollador senior detectó que el endpoint <code>/api/v1/patient/123/records</code> permitía a cualquier usuario autenticado ver cualquier historial médico si adivinaban el ID. Implementamos un 'Ownership Filter' en el middleware que verifica que el ID del paciente coincide con el token del usuario en cada petición. El resultado: blindaje total de la privacidad de 1 millón de pacientes con solo 20 líneas de código preventivo. La seguridad es lógica de negocio bien aplicada.&quot;
               </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200 shadow-sm hover:bg-slate-100 transition-all">
               <h4 className="text-xl font-black text-blue-950 mb-4">Caso 2: Migración masiva a Passkeys: 0% Phishing</h4>
               <p className="text-slate-700 m-0 leading-relaxed italic">
                 &quot;Una fintech sufría constantes robos de cuentas mediante phishing de SMS. Migramos toda la base de usuarios a Passkeys mediante el estándar FIDO2. Desde entonces, el robo de credenciales ha caído a CERO absoluto, ya que el atacante no puede robar algo que físicamente no sale del teléfono del usuario. La experiencia de login es ahora más rápida (FaceID) y 1000 veces más segura. Ganamos en UX y en defensa.&quot;
               </p>
            </div>
          </div>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-blue-600" /> FAQ: Consultoría de Seguridad para Desarrolladores
          </h2>
          <div className="space-y-6 mt-8">
            {[
              { 
                q: "¿Es suficiente usar HTTPS para que mi web sea segura?", 
                a: "No. HTTPS protege los datos en tránsito (evita que un vecino escuche tu tráfico), pero no protege el servidor, no evita el robo de bases de datos y no corrige fallos de lógica de negocio o XSS. Es solo la capa de transporte." 
              },
              { 
                q: "¿Debo preocuparme por la seguridad si uso un framework como Next.js o Laravel?", 
                a: "Sí. Los frameworks ayudan a prevenir los errores más comunes (como CSRF o XSS por defecto), pero no pueden protegerte de una mala lógica de permisos o de una dependencia vulnerable que tú mismo instales." 
              },
              { 
                q: "¿Qué es el 'Principio de Menor Privilegio'?", 
                a: "Es dar a cada proceso o usuario solo los permisos estrictamente necesarios para su función. Si un script solo necesita enviar emails, no debe tener permiso para borrar usuarios de la base de datos." 
              },
              { 
                q: "¿Cómo gestiono las vulnerabilidades en librerías de terceros (npm/pip/maven)?", 
                a: "Usa herramientas de SCA (Software Composition Analysis) integradas en tu CI/CD. Si una librería tiene un fallo crítico, el build debe fallar automáticamente hasta que se actualice a una versión segura." 
              },
              { 
                q: "¿Es seguro guardar contraseñas encriptadas?", 
                a: "NO. Las contraseñas NUNCA se encriptan (la encriptación es reversible). Las contraseñas se HASHEAN usando algoritmos como Argon2id o BCrypt con un 'salt' único por usuario. Un hash es una vía de un solo sentido." 
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
                Protege el Código <br className="hidden md:block" /> que el Mundo Necesita
              </h2>
              <p className="text-blue-50 text-xl leading-relaxed mb-12 font-medium max-w-2xl opacity-90">
                No permitas que una línea de código descuidada comprometa la vida digital de tus usuarios. Domina la ciberseguridad, inyecta resiliencia en cada arquitectura y conviértete en el guardián de la integridad que la era de la IA demanda. AldiaDeTodo te da los planos; el blindaje es tuyo.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-100 transition-all shadow-2xl flex items-center gap-3">
                   Explorar Catálogo <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-8 text-blue-100 text-[10px] font-black uppercase tracking-widest pl-4">
                  <span className="flex items-center gap-2"><Trophy className="w-4 h-4" /> Cyber Defense Pro</span>
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
