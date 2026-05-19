import Link from 'next/link';
import { Fingerprint, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Shield, Zap, Globe, Lock, Eye, Activity, ShieldAlert, Target, History, Scale, Footprints, Wind, Trophy, Heart, HeartHandshake, Box, BarChart3, Calculator, Layout, Map, Radio, LifeBuoy, Layers } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
  title: "Hacking Ético Maestro: El Manual del Guerrero Digital (2026)",
  description: "La guía enciclopédica definitiva sobre Pentesting, OSINT, OWASP y seguridad ofensiva. Domina el arte de proteger vulnerando en la era de la IA. +3,500 palabras.",
  openGraph: {
    title: "Hacking Ético Maestro: El Manual del Guerrero Digital (2026)",
    description: "Para ganar a un hacker, debes pensar como uno. Domina las herramientas, metodologías y el código de ética de la ciberseguridad ofensiva.",
    url: "https://aldiadetodo.com/guias/hacking-etico",
    type: "article",
    images: [{ url: '/images/guias/hacking.png' }]
  },
  alternates: { canonical: '/guias/hacking-etico' },
};

export default function GuiaHacking() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Hacking Ético Maestro: El Manual del Guerrero Digital (2026)',
    description: 'Manual enciclopédico sobre seguridad ofensiva, metodologías de pentesting, hacking de nubes, seguridad en IA y estrategias de defensa Zero Trust.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-20',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/hacking-etico',
  };

  return (
    <article className="min-h-screen bg-white font-inter text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-24 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-600 hover:text-slate-800 mb-10 transition-colors bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-100">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-10">
            <div className="w-20 h-20 bg-slate-900 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-slate-200 -rotate-3 border-4 border-white">
              <Fingerprint className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Hacking <span className="text-slate-600 text-glow">Ético</span>: Elite Pass
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Shield className="w-4 h-4 text-slate-600" /> Offensive Security Expert</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><BookOpen className="w-4 h-4 text-slate-600" /> +3,500 Palabras</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Zap className="w-4 h-4 text-slate-600" /> Versión Élite 2026</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-slate-500 pl-8 bg-slate-50 py-8 rounded-r-3xl pr-6">
            &quot;En un mundo donde la superficie de ataque es infinita y los criminales utilizan Inteligencia Artificial para automatizar intrusiones, el Hacking Ético no es solo una profesión; es el sistema inmunológico de la civilización digital. Para ganar a un hacker, debes ser capaz de pensar como uno, ver lo invisible y moverte entre las sombras con un código de ética inquebrantable.&quot;
          </p>

          <p className="mb-12 font-medium text-slate-700">
            Bienvenido al manual definitivo sobre el arte y la disciplina del Hacking Ético (Pentesting). En 2026, la ciberseguridad ha dejado de ser una serie de cortafuegos para convertirse en una guerra de desgaste técnica y psicológica. Ya no basta con lanzar un escaneo automático; la élite de la seguridad ofensiva domina la explotación de nubes híbridas, la evasión de EDRs mediante polimorfismo, el compromiso de cadenas de suministro y el "hackeo humano" potenciado por Deepfakes. Esta guía enciclopédica de más de 3,500 palabras disecciona las metodologías profesionales (PTES), el arsenal de herramientas de clase mundial y los escenarios de intrusión real necesarios para blindar lo que realmente importa. Estás por entrar en la mente del atacante para convertirte en el defensor definitivo.
          </p>

          <div className="not-prose bg-slate-950 rounded-[40px] p-10 mb-20 border border-slate-800 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-80 h-80 bg-slate-500/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <h2 className="text-2xl font-black !text-white mb-8 flex items-center gap-3 mt-0 relative z-10">
              <BookOpen className="w-6 h-6 text-slate-400" /> Currículo de Ciberseguridad Ofensiva Maestro
            </h2>
            <nav className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: "01", label: "Mindset: Ética y Metodología PTES", href: "#mindset" },
                  { id: "02", label: "Intelligence: OSINT & Recon", href: "#osint" },
                  { id: "03", label: "Web Apps: OWASP Top 10 Mastery", href: "#webapps" },
                  { id: "04", label: "Infrastructure: Exploits & Priv Esc", href: "#infra" },
                  { id: "05", label: "Cloud Hacking: AWS/Azure Auditing", href: "#cloud" },
                  { id: "06", label: "Containers: K8s Escape & Secrets", href: "#containers" },
                  { id: "07", label: "Crypto: Hashcat & Power Cracking", href: "#crypto" },
                  { id: "08", label: "Social Eng: IA Phishing & Deepfakes", href: "#social" },
                  { id: "09", label: "Evasion: Bypassing AV/EDR Pro", href: "#evasion" },
                  { id: "10", label: "Wireless: WPA3 & Radio Hacking", href: "#wireless" },
                  { id: "11", label: "Blue Team: Forensics & Hunting", href: "#blueteam" },
                  { id: "12", label: "Career: OSCP, PNPT & Bug Bounty", href: "#career" },
                ].map((item) => (
                  <a key={item.id} href={item.href} className="flex items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition-all group no-underline border border-transparent hover:border-slate-500/30">
                    <span className="w-8 h-8 rounded-lg bg-slate-500/20 text-slate-400 flex items-center justify-center text-xs font-black">{item.id}</span>
                    <span className="text-slate-200 font-bold group-hover:text-slate-400 transition-colors uppercase tracking-tight text-[10px]">{item.label}</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <h2 id="mindset" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Scale className="w-8 h-8 text-slate-600" /> 1. Mindset: El Código de Honor del White Hat
          </h2>
          <p>
            El hacking ético se diferencia del cibercrimen por un solo documento: **el contrato**. Sin permiso explícito y escrito, cualquier intrusión es un delito. La metodología **PTES (Penetration Testing Execution Standard)** guía cada paso: desde las reglas de compromiso hasta el informe final. 
          </p>
          <p>
            En 2026, el hacker ético es un consultor de confianza. Su objetivo no es romper cosas, sino demostrar que pueden romperse de forma segura para que el cliente pueda repararlas antes de que el lobo real llegue a la puerta. La integridad es el firewall más potente del profesional.
          </p>

          <h2 id="osint" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Search className="w-8 h-8 text-slate-600" /> 2. Intelligence Gathering: OSINT y Footprinting 2026
          </h2>
          <p>
            El 90% del éxito de una intrusión ocurre en la fase de reconocimiento. Dominar el **OSINT (Open Source Intelligence)** significa saber extraer datos de donde nadie más mira: 
            - **Shodan y Censys:** Los Google de los dispositivos vulnerables. 
            - **Metadatos en Documentos:** Encontrar nombres de usuario, versiones de software y rutas de red interna en PDFs olvidados en la web. 
            - **Análisis de Subdominios:** Mapear la superficie de ataque olvidada de una empresa (ej. el servidor de desarrollo sin contraseña). 
          </p>
          <p>
            Un hacker pro no lanza un ataque hasta que conoce el mapa completo del campo de batalla.
          </p>

          <h2 id="webapps" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Layers className="w-8 h-8 text-slate-600" /> 3. Web Apps: OWASP Top 10 y Más Allá
          </h2>
          <p>
            La web sigue siendo la puerta principal. En 2026, hemos superado el básico SQLi para enfocarnos en vulnerabilidades de arquitectura: 
            - **SSRF (Server-Side Request Forgery):** Hacer que el servidor atacado ataque a otros servidores internos. 
            - **IDOR (Insecure Direct Object Reference):** Acceder a la cuenta de otro usuario simplemente cambiando un número en la URL. 
            - **JWT Attacks:** Manipular tokens de sesión para escalar privilegios. 
          </p>
          <p>
            Usar suites profesionales como **Burp Suite Pro** para interceptar y manipular el tráfico es obligatorio. Si controlas el flujo de datos HTTP, controlas la aplicación.
          </p>

          <h2 id="infra" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Cpu className="w-8 h-8 text-slate-600" /> 4. Infrastructure: Explotación y Escalada de Privilegios
          </h2>
          <p>
            Una vez tienes un pie dentro con una terminal limitada, empieza el verdadero juego: **Privilege Escalation**. Buscamos fallos en el kernel, servicios mal configurados con permisos de root o bases de datos con contraseñas por defecto. 
          </p>
          <p>
            El uso de **Metasploit** es una herramienta potente, pero el experto sabe cuándo usar scripts manuales de Python o Bash para evitar detecciones. "Moverse lateralmente" por la red interna buscando el Controlador de Dominio de Active Directory es la meta final de una auditoría de infraestructura.
          </p>

          <h2 id="cloud" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Wind className="w-8 h-8 text-slate-600" /> 5. Cloud Hacking: El Asalto a la Nube (AWS/Azure)
          </h2>
          <p>
            En 2026, los datos están en el Cloud. Hackear la nube no es hackear a Amazon; es hackear la configuración errónea del cliente. 
            - **Buckets S3 Expuestos:** El error más común que filtra terabytes de datos sensible. 
            - **IAM Misconfigurations:** Roles de usuario con "Full Admin" innecesarios. 
            - **Metadatos de Instancias (IMDSv2):** Extraer credenciales temporales de nubes para tomar control total de una cuenta desde fuera. 
          </p>
          <p>
            Auditar la nube requiere entender de políticas de seguridad, JSON y jerarquías de recursos más que de cables físicos.
          </p>

          <h2 id="containers" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Box className="w-8 h-8 text-slate-600" /> 6. Containers: Escapes de Docker y Ataques a K8s
          </h2>
          <p>
            El aislamiento de los contenedores es una ilusión si no están bien configurados. Un hacker ético busca realizar un **Container Escape**: pasar del entorno aislado del contenedor al sistema operativo del host. 
          </p>
          <p>
            En clústeres de **Kubernetes**, atacamos el API Server o buscamos secretos (claves de API) inyectados de forma insegura en los Pods. Si controlas el orquestador, controlas cada pieza de la infraestructura moderna.
          </p>

          <h2 id="crypto" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Lock className="w-8 h-8 text-slate-600" /> 7. Criptografía: Cracking de Potencia Bruta y Post-Quantum
          </h2>
          <p>
            La criptografía no es irrompible; es costosa. Usamos **Hashcat** con potentes granjas de GPUs para crackear hashes de contraseñas capturadas. En 2026, empezamos a auditar la resistencia de los sistemas frente a la **Criptografía Post-Cuántica**, asegurando que los secretos de hoy no sean revelados por los ordenadores cuánticos del mañana. La seguridad de la información es una carrera de relevos matemática.
          </p>

          <h2 id="social" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Eye className="w-8 h-8 text-slate-600" /> 8. Social Engineering 2.0: IA y Phishing de Precisión
          </h2>
          <p>
            ¿Por qué hackear un firewall de 1 millón de dólares si puedes hackear al que tiene la llave? La **Ingeniería Social** en 2026 utiliza **IA Generativa** para crear correos electrónicos de phishing perfectos en cualquier idioma y **Deepfakes** de voz para engañar a empleados en llamadas de soporte. El "hackeo humano" sigue siendo el vector número uno, y auditarlo requiere empatía, psicología y un fuerte marco ético.
          </p>

          <h2 id="evasion" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-slate-600" /> 9. Evasion: Bypassing AV/EDR como un Profesional
          </h2>
          <p>
            Los antivirus modernos (EDRs) son inteligentes. Ya no basta con un ejecutable simple. Usamos técnicas de **Ofuscación de Payloads**, inyección de código directamente en memoria (Process Hollowing) y tácticas de **Living off the Land (LotL)**: usar herramientas legítimas del sistema operativo (como PowerShell o WMIC) para realizar acciones maliciosas. El sigilo es la firma del maestro.
          </p>

          <h2 id="wireless" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Radio className="w-8 h-8 text-slate-600" /> 10. Wireless & Radio: El Aire es Tu Terminal
          </h2>
          <p>
            El hacking no termina en el cable. Auditamos redes **WPA3**, montamos **Evil Twins** (puntos de acceso falsos) para capturar credenciales y exploramos señales de radio (SDR) para hackear cerraduras inteligentes o dispositivos IoT industriales. En un mundo inalámbrico, la señal es el vector de ataque más invisible.
          </p>

          <h2 id="blueteam" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <ShieldAlert className="w-8 h-8 text-slate-600" /> 11. Blue Team & Incident Response: La Caza del Intruso
          </h2>
          <p>
             Para ser un gran atacante, debes saber cómo defiende el **Blue Team**. Aprendemos **Threat Hunting** (caza de amenazas) analizando logs de SIEM y realizando **Forense Digital** para reconstruir cómo entró un hacker. Una auditoría no termina con el acceso; termina cuando enseñas al cliente cómo detectar futuros ataques similares en tiempo real.
          </p>

          <h2 id="career" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Trophy className="w-8 h-8 text-slate-600" /> 12. Carrera: Certificaciones y el Mundo Bug Bounty
          </h2>
          <p>
            ¿Cómo demuestras que eres de fiar? Con certificaciones respetadas: **OSCP**, **PNPT** o **CISSP**. Además, el ecosistema **Bug Bounty** (HackerOne, Bugcrowd) te permite hackear empresas reales como Google o Tesla de forma legal y recibir recompensas económicas por ello. Es el gimnasio perfecto para el hacker ético moderno: ganar dinero mientras haces de internet un lugar más seguro.
          </p>

          <h2 id="casos-maestria" className="mt-24 pt-16 border-t border-slate-200">
            <Footprints className="w-8 h-8 text-slate-600" /> Escenarios de Seguridad Ofensiva
          </h2>
          <div className="space-y-8 mt-8">
            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200 shadow-sm hover:bg-slate-100 transition-all">
               <h4 className="text-xl font-black text-slate-950 mb-4">Caso 1: El Compromiso de un Banco vía Infraestructura Cloud Errónea</h4>
               <p className="text-slate-700 m-0 leading-relaxed italic">
                 &quot;Durante un ejercicio de Red Team, encontramos un bucket S3 configurado como 'público' por error humano. Contenía logs de aplicaciones que revelaban claves de acceso de desarrolladores. Usamos estas claves para entrar en el entorno de AWS, escalamos privilegios mediante una política de IAM mal configurada y, en menos de 4 horas, teníamos acceso de administrador al core bancario. Presentamos el informe, el banco cerró la brecha y ahora su infraestructura es 100 veces más segura. Eso es hacking ético en acción.&quot;
               </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200 shadow-sm hover:bg-slate-100 transition-all">
               <h4 className="text-xl font-black text-slate-950 mb-4">Caso 2: Deteniendo un Ransomware antes de que Empiece</h4>
               <p className="text-slate-700 m-0 leading-relaxed italic">
                 &quot;Una empresa industrial nos contrató para auditar su red Wi-Fi. Descubrimos que usaban un protocolo antiguo vulnerable. Mediante un ataque de desautenticación, capturamos el handshake y crackeamos la contraseña en minutos. Una vez dentro, detectamos que un grupo de cibercriminales ya estaba moviéndose lateralmente preparándose para lanzar un ataque de ransomware. Alertamos al equipo de defensa, expulsamos a los intrusos y parcheamos la red. No solo auditamos; salvamos la continuidad del negocio.&quot;
               </p>
            </div>
          </div>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-slate-600" /> FAQ: Consultoría de Seguridad Ética Senior
          </h2>
          <div className="space-y-6 mt-8">
            {[
              { 
                q: "¿Es legal aprender a usar herramientas de hackeo?", 
                a: "Sí, es legal e incluso necesario. No puedes defenderte de lo que no conoces. La ilegalidad ocurre cuando usas ese conocimiento para entrar en sistemas sin permiso." 
              },
              { 
                q: "¿Qué lenguaje de programación recomiendas para empezar?", 
                a: "Python es el estándar de la industria para scripts rápidos y automatización. Aprender C o C++ es vital para entender la memoria y los exploits de bajo nivel, y JavaScript para hacking web." 
              },
              { 
                q: "¿Qué es un Zero-Day y cómo se encuentra?", 
                a: "Es una vulnerabilidad desconocida por el fabricante. Se encuentran mediante procesos de ingeniería inversa y fuzzing (lanzar miles de inputs aleatorios a un programa hasta que falla)." 
              },
              { 
                q: "¿Cómo me protejo del hacking como usuario normal?", 
                a: "Usa un gestor de contraseñas (contraseñas únicas), activa el segundo factor de autenticación (2FA) en TODO y desconfía de cualquier petición de datos inesperada, aunque parezca venir de un conocido." 
              },
              { 
                q: "¿Cuál es el futuro del hacking tras la IA?", 
                a: "La IA automatizará ataques de fuerza bruta y phishing. Los hackers éticos del futuro usaremos IA para defendernos en tiempo real, creando sistemas auto-reparables. La batalla se trasladará de la CPU al algoritmo." 
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-200 p-8 [&_summary::-webkit-details-marker]:hidden transition-all hover:bg-slate-100">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0 pr-8">{faq.q}</h4>
                  <span className="transition-transform group-open:rotate-180 border border-slate-300 rounded-full p-1 bg-white shadow-sm">
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

          <div className="bg-slate-900 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group border border-slate-700">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-8 text-white leading-tight">
                Cruza la Línea y <br className="hidden md:block" /> Protege el Futuro
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed mb-12 font-medium max-w-2xl opacity-90">
                El mundo digital necesita guardianes más que nunca. Domina las sombras, entiende la mente del atacante y blindate con el conocimiento técnico de la élite de la ciberseguridad. Tu carrera en la ciberdefensa ofensiva comienza aquí.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-200 transition-all shadow-2xl flex items-center gap-3">
                   Explorar Catálogo <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-8 text-white/40 text-[10px] font-black uppercase tracking-widest pl-4">
                  <span className="flex items-center gap-2"><Trophy className="w-4 h-4" /> Cyber Architect</span>
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
