import Link from 'next/link';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Fingerprint, Wifi, ArrowRight, ShieldCheck, Smartphone } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
  title: 'Ciberseguridad Personal: Protege tu Vida Digital en 2026 | AldiaDeTodo',
  description: 'Guía completa y práctica de ciberseguridad para personas no técnicas. Aprende a proteger tus contraseñas, datos bancarios, privacidad y dispositivos contra las amenazas digitales más comunes de 2026.',
  keywords: ['ciberseguridad personal', 'proteger contraseñas', 'privacidad digital', 'seguridad en internet', 'phishing', 'estafas online'],
  openGraph: {
    title: 'Ciberseguridad Personal: Protege tu Vida Digital',
    description: 'Todo lo que necesitas saber para proteger tus datos, tu dinero y tu privacidad en internet.',
    url: 'https://aldiadetodo.com/guias/ciberseguridad-personal',
    type: 'article',
  },
  alternates: { canonical: '/guias/ciberseguridad-personal' },
};

export default function GuiaCiberseguridadPersonal() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Ciberseguridad Personal: Protege tu Vida Digital en 2026',
    description: 'Guía práctica de ciberseguridad para personas no técnicas. Contraseñas, phishing, VPN, autenticación y más.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-05-18', dateModified: '2026-05-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/ciberseguridad-personal',
  };

  const sections = [
    { id: 'amenazas', title: 'Las amenazas reales de 2026' },
    { id: 'contrasenas', title: 'Contraseñas a prueba de hackers' },
    { id: '2fa', title: 'Autenticación de dos factores (2FA)' },
    { id: 'phishing', title: 'Cómo detectar phishing y estafas' },
    { id: 'wifi', title: 'Redes Wi-Fi y VPN' },
    { id: 'movil', title: 'Seguridad en tu smartphone' },
    { id: 'privacidad', title: 'Privacidad y huella digital' },
    { id: 'plan', title: 'Tu plan de acción en 30 minutos' },
  ];

  return (
    <article className="min-h-screen bg-white font-inter text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <header className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.15),transparent_60%)]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="container mx-auto max-w-4xl px-4 py-24 md:py-32 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-red-500/20 text-red-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-500/20">Seguridad Digital</span>
            <span className="text-slate-500 text-xs font-medium">Actualizado Mayo 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-outfit leading-[0.9] tracking-tight mb-8">
            Ciberseguridad<br/>
            <span className="text-red-400">Personal</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
            No necesitas ser ingeniero para proteger tu vida digital. Esta guía te enseña todo lo que necesitas saber para blindar tus contraseñas, tu dinero y tu privacidad contra las amenazas más comunes de 2026.
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        {/* Table of Contents */}
        <nav className="bg-slate-50 rounded-3xl p-8 mb-16 border border-slate-100">
          <h2 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-3">
            <Shield className="w-5 h-5 text-red-500" /> Contenido de la Guía
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sections.map((s, i) => (
              <a key={s.id} href={`#${s.id}`} className="flex items-center gap-3 text-sm text-slate-600 hover:text-red-600 transition-colors group">
                <span className="w-7 h-7 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-[10px] font-black text-slate-400 group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500 transition-all">{i + 1}</span>
                {s.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="prose prose-lg prose-slate max-w-none">

          <section id="amenazas">
            <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><AlertTriangle className="w-7 h-7 text-red-500" /> Las amenazas reales de 2026</h2>
            <p>Olvídate de los hackers con capucha en sótanos oscuros. Las amenazas de 2026 son <strong>industriales, automatizadas y personalizadas</strong>. Los cibercriminales ya no necesitan saber programar: compran kits de phishing por $50, usan IA generativa para crear correos perfectos en cualquier idioma, y atacan a millones de personas simultáneamente con bots.</p>
            <p>El panorama actual de amenazas incluye:</p>
            <ul>
              <li><strong>Phishing con IA:</strong> Correos y mensajes generados por inteligencia artificial que imitan perfectamente el tono de tu banco, tu jefe o tu familiar. El 47% de los ataques exitosos en 2025 usaron IA generativa.</li>
              <li><strong>Robo de credenciales masivo:</strong> Bases de datos filtradas con miles de millones de contraseñas circulan en la dark web. Si usas la misma contraseña en varios sitios, es cuestión de tiempo.</li>
              <li><strong>SIM swapping:</strong> Criminales convencen a tu operador telefónico de transferir tu número a su SIM. Con tu número, acceden a tus cuentas bancarias vía SMS de verificación.</li>
              <li><strong>Ransomware personal:</strong> Ya no solo atacan empresas. El ransomware ahora apunta a individuos: cifra tus fotos, documentos y recuerdos digitales y pide rescate.</li>
              <li><strong>Deepfakes de voz:</strong> Con solo 3 segundos de audio (un clip de WhatsApp), la IA puede clonar tu voz y llamar a tus contactos pidiendo dinero.</li>
            </ul>
            <p>La buena noticia: el 95% de estos ataques se pueden prevenir con medidas básicas que no requieren conocimiento técnico.</p>
          </section>

          <section id="contrasenas">
            <h2 className="text-3xl font-black font-outfit flex items-center gap-3"><Lock className="w-7 h-7 text-red-500" /> Contraseñas a prueba de hackers</h2>
            <p>Tu contraseña es la cerradura de tu vida digital. Y la mayoría de personas usa el equivalente a una cerradura de juguete. Las contraseñas más comunes siguen siendo "123456", "password" y "qwerty". Si usas alguna de estas, cambiala <strong>ahora mismo</strong> antes de seguir leyendo.</p>
            
            <h3>Las reglas de oro</h3>
            <p><strong>Longitud sobre complejidad.</strong> "MiPerroComeTacos2026!" es infinitamente más segura que "X#9kL2". La primera tiene 21 caracteres y es fácil de recordar. La segunda tiene 6 y es imposible de memorizar. Los hackers modernos usan fuerza bruta: cada carácter adicional multiplica exponencialmente el tiempo de descifrado.</p>
            <p><strong>Una contraseña única por servicio.</strong> No negociable. Si tu contraseña de Netflix se filtra (y eventualmente lo hará), no debe abrir tu correo ni tu banco. ¿Cómo recordar 100 contraseñas diferentes? No las recuerdes: usa un gestor de contraseñas.</p>
            <p><strong>Gestores de contraseñas recomendados:</strong> Bitwarden (gratuito y de código abierto), 1Password (premium, excelente UX) o KeePassXC (local, máxima seguridad). Estos almacenan todas tus contraseñas cifradas detrás de UNA contraseña maestra que sí debes memorizar.</p>
            <p><strong>La contraseña maestra perfecta:</strong> Usa una frase de 5-6 palabras aleatorias: "caballo-batería-grapa-correcto" (el famoso método Diceware). Es larga, aleatoria y memorizable. No uses fechas de cumpleaños, nombres de mascotas ni nada que se pueda encontrar en tus redes sociales.</p>
          </section>

          <section id="2fa">
            <h2 className="text-3xl font-black font-outfit flex items-center gap-3"><Fingerprint className="w-7 h-7 text-red-500" /> Autenticación de dos factores (2FA)</h2>
            <p>Si las contraseñas son la cerradura, el 2FA es el candado adicional. Incluso si alguien obtiene tu contraseña, necesita un segundo factor para acceder. Es la medida de seguridad con mejor relación esfuerzo/protección que existe.</p>
            <p><strong>Jerarquía de métodos 2FA (de mejor a peor):</strong></p>
            <ol>
              <li><strong>Llaves físicas (YubiKey, Titan):</strong> Dispositivos USB que debes tocar físicamente. Imposibles de phishear remotamente. El estándar de oro.</li>
              <li><strong>Apps autenticadoras (Google Authenticator, Authy):</strong> Generan códigos de 6 dígitos que cambian cada 30 segundos. Muy seguras y gratuitas.</li>
              <li><strong>SMS/llamada telefónica:</strong> Mejor que nada, pero vulnerable a SIM swapping. Úsalo solo si no hay otra opción.</li>
            </ol>
            <p><strong>Acción inmediata:</strong> Activa 2FA en tu correo electrónico AHORA. Tu email es la llave maestra: con acceso a él, un atacante puede resetear la contraseña de cualquier otro servicio. Gmail, Outlook y Yahoo todos soportan apps autenticadoras.</p>
          </section>

          <section id="phishing">
            <h2 className="text-3xl font-black font-outfit flex items-center gap-3"><Eye className="w-7 h-7 text-red-500" /> Cómo detectar phishing y estafas</h2>
            <p>El phishing es el vector de ataque #1 en 2026. Ya no son los correos mal escritos del "príncipe nigeriano". Los ataques modernos son sofisticados, personalizados y convincentes. Aquí está cómo identificarlos:</p>
            <p><strong>Señales de alerta infalibles:</strong></p>
            <ul>
              <li><strong>Urgencia artificial:</strong> "Tu cuenta será suspendida en 24 horas". Los servicios legítimos NUNCA te presionan con amenazas de tiempo.</li>
              <li><strong>URL sospechosa:</strong> Antes de hacer clic, pasa el cursor sobre el enlace. ¿Dice "bancoseguro.com" o "bancoseguro-verificacion.xyz"? Un carácter de diferencia es todo lo que necesita un estafador.</li>
              <li><strong>Solicitud de datos sensibles:</strong> Ningún banco te pedirá tu contraseña, PIN o número completo de tarjeta por email. NUNCA.</li>
              <li><strong>Remitente falsificado:</strong> El nombre puede decir "Soporte de Apple" pero el email real es "soporte@apple-security-check.ru". Siempre verifica la dirección completa.</li>
            </ul>
            <p><strong>Regla de oro ante la duda:</strong> No hagas clic en el enlace del mensaje. Abre tu navegador, escribe manualmente la URL del servicio y verifica desde ahí. Los 30 segundos extra pueden ahorrarte miles de soles.</p>
          </section>

          <section id="wifi">
            <h2 className="text-3xl font-black font-outfit flex items-center gap-3"><Wifi className="w-7 h-7 text-red-500" /> Redes Wi-Fi y VPN</h2>
            <p><strong>Wi-Fi público = Wi-Fi peligroso.</strong> Cuando te conectas a la red de un café, aeropuerto o centro comercial, cualquier persona en esa misma red puede potencialmente interceptar tu tráfico. Esto incluye contraseñas, mensajes y datos bancarios si el sitio no usa HTTPS correctamente.</p>
            <p><strong>Reglas para Wi-Fi público:</strong></p>
            <ul>
              <li>Nunca accedas a tu banca en línea desde Wi-Fi público</li>
              <li>Usa una VPN siempre que te conectes a redes desconocidas</li>
              <li>Desactiva la conexión automática a redes Wi-Fi en tu dispositivo</li>
              <li>Prefiere usar tus datos móviles para operaciones sensibles</li>
            </ul>
            <p><strong>VPNs recomendadas:</strong> Mullvad (máxima privacidad, acepta pago en efectivo), ProtonVPN (versión gratuita decente) o NordVPN (buena relación calidad-precio). Evita VPNs gratuitas desconocidas: si el producto es gratis, tú eres el producto.</p>
          </section>

          <section id="movil">
            <h2 className="text-3xl font-black font-outfit flex items-center gap-3"><Smartphone className="w-7 h-7 text-red-500" /> Seguridad en tu smartphone</h2>
            <p>Tu smartphone contiene más información sensible que tu billetera, tu diario y tu oficina combinados. Protegerlo adecuadamente es crítico.</p>
            <p><strong>Checklist de seguridad móvil:</strong></p>
            <ul>
              <li>Usa PIN de 6 dígitos mínimo o biometría (huella/facial). Evita patrones de desbloqueo (son fáciles de observar).</li>
              <li>Mantén tu sistema operativo actualizado SIEMPRE. Las actualizaciones no son opcionales: contienen parches de seguridad críticos.</li>
              <li>Solo instala apps desde tiendas oficiales (Play Store, App Store). Revisa los permisos que solicitan.</li>
              <li>Activa "Encontrar mi dispositivo" (Android) o "Find My iPhone" (iOS) para poder borrar datos remotamente si lo pierdes.</li>
              <li>Cifra tu dispositivo (en la mayoría de teléfonos modernos viene activado por defecto, pero verifica en Configuración &gt; Seguridad).</li>
              <li>Revisa los permisos de tus apps instaladas. ¿Realmente esa app de linterna necesita acceso a tu cámara, micrófono y contactos?</li>
            </ul>
          </section>

          <section id="privacidad">
            <h2 className="text-3xl font-black font-outfit flex items-center gap-3"><ShieldCheck className="w-7 h-7 text-red-500" /> Privacidad y huella digital</h2>
            <p>Cada vez que usas internet, dejas rastros. Tus búsquedas, compras, ubicaciones y conexiones sociales forman un perfil detallado que empresas y potencialmente criminales pueden usar.</p>
            <p><strong>Medidas de privacidad esenciales:</strong></p>
            <ul>
              <li><strong>Navegador:</strong> Usa Firefox o Brave en lugar de Chrome. Activa las protecciones anti-rastreo.</li>
              <li><strong>Buscador:</strong> Prueba DuckDuckGo o Startpage para búsquedas que no quieras asociadas a tu perfil.</li>
              <li><strong>Redes sociales:</strong> Revisa tu configuración de privacidad cada 3 meses. Limita quién puede ver tus publicaciones, tu lista de amigos y tu información personal.</li>
              <li><strong>Email:</strong> Considera ProtonMail para comunicaciones sensibles.</li>
              <li><strong>Derecho al olvido:</strong> En muchos países puedes solicitar a Google que elimine resultados que contengan tu información personal. Ejercita este derecho.</li>
            </ul>
          </section>

          <section id="plan">
            <h2 className="text-3xl font-black font-outfit flex items-center gap-3"><CheckCircle className="w-7 h-7 text-emerald-500" /> Tu plan de acción en 30 minutos</h2>
            <p>No intentes hacer todo de golpe. Sigue este plan de 30 minutos y habrás mejorado tu seguridad digital más que el 90% de las personas:</p>
            <p><strong>Minutos 1-10:</strong> Instala un gestor de contraseñas (Bitwarden es gratuito). Crea una contraseña maestra fuerte. Cambia las contraseñas de tu email y tu banco.</p>
            <p><strong>Minutos 11-20:</strong> Activa 2FA en tu email principal usando Google Authenticator o Authy. Luego actívalo en tus redes sociales.</p>
            <p><strong>Minutos 21-30:</strong> Revisa los permisos de las apps de tu teléfono. Elimina las que no uses. Actualiza tu sistema operativo si hay actualizaciones pendientes.</p>
            <p>Felicidades. En 30 minutos has cerrado el 95% de los vectores de ataque más comunes. Repite esta revisión cada 3 meses y estarás más seguro que la mayoría de empresas pequeñas.</p>
          </section>

        </div>

        {/* Author E-E-A-T Section */}
        <AuthorBox category="tecnologia" datePublished="2026" dateReviewed="Mayo 2026" />

        {/* CTA */}
        <div className="bg-red-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-8 text-white">Tu seguridad digital<br/>empieza hoy</h2>
            <p className="text-red-100 text-xl leading-relaxed mb-12 font-medium max-w-2xl">No esperes a ser víctima. Los 30 minutos que inviertas hoy pueden ahorrarte meses de problemas. Protege lo que más importa.</p>
            <Link href="/guias" className="bg-white text-red-600 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-100 transition-all shadow-2xl inline-flex items-center gap-3">
              Explorar más guías <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
