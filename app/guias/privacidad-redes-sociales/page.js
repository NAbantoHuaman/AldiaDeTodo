import Link from 'next/link';
import { EyeOff, ArrowRight, ShieldAlert, Fingerprint, Database, UserX } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
 title: 'Privacidad en Redes Sociales en 2026 | AldiaDeTodo',
 description: 'Audita y protege tus perfiles sociales. Descubre qué datos están recolectando sobre ti y cómo limitar tu exposición digital frente a la IA.',
 keywords: ['privacidad', 'seguridad digital', 'redes sociales', 'datos personales', 'osint'],
 openGraph: {
 title: 'Privacidad Digital y Redes Sociales en 2026',
 description: 'Manual de defensa contra el rastreo masivo y la extracción de datos.',
 url: 'https://aldiadetodo.com/guias/privacidad-redes-sociales',
 type: 'article',
 },
 alternates: { canonical: '/guias/privacidad-redes-sociales' },
};

export default function Guia() {
 const jsonLd = {
 '@context': 'https://schema.org', '@type': 'Article',
 headline: 'Privacidad en Redes Sociales en 2026',
 description: 'Guía de defensa y privacidad en plataformas sociales.',
 author: { '@type': 'Person', name: 'Nestor Abanto Huaman' },
 publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
 datePublished: '2026-05-18', dateModified: '2026-05-18',
 mainEntityOfPage: 'https://aldiadetodo.com/guias/privacidad-redes-sociales',
 };

 return (
 <article className="min-h-screen bg-white font-inter text-slate-900">
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

 <header className="relative bg-slate-950 text-white overflow-hidden">
 <div className="container mx-auto max-w-4xl px-4 py-24 md:py-32 relative z-10">
 <div className="flex items-center gap-3 mb-8">
 <span className="bg-red-500/20 text-red-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-500/20">tecnologia</span>
 </div>
 <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-outfit leading-[0.9] tracking-tight mb-8">
 Privacidad en<br/><span className="text-red-400">Redes Sociales 2026</span>
 </h1>
 <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
 Tus datos ya no solo se usan para mostrarte anuncios de zapatillas. En la era de los modelos de lenguaje masivos, tu huella digital completa se usa para perfilarte. Es hora de cerrar las puertas.
 </p>
 </div>
 </header>

 <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
 <div className="prose prose-lg prose-slate max-w-none">
 <section id="economia" className="mb-12">
 <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><Database className="w-7 h-7 text-red-500" /> El Nuevo Paradigma de la Extracción de Datos</h2>
 <p>Durante años se popularizó el adagio: "Si el producto es gratis, tú eres el producto". En 2026, esta frase ha evolucionado. Ya no eres un simple "producto" empaquetado para anunciantes; tú eres el **conjunto de datos de entrenamiento crudo** (training dataset) que alimenta modelos algorítmicos predictivos sin tu consentimiento explícito. Meta, TikTok, X y otras plataformas gigantes no solo venden la atención de tus ojos, sino que utilizan el rastro completo de tu comportamiento, biometría, tono de voz y patrones de relaciones personales para entrenar sistemas de Inteligencia Artificial que luego comercializan o utilizan para fines estratégicos cerrados.</p>
 <p>La recolección de metadatos es invisible pero omnipresente. Una simple foto tuya subida a Instagram no es solo una imagen para la corporación. Contiene metadatos EXIF (coordenadas GPS exactas de tu hogar), revela tu nivel socioeconómico analizando las marcas en tu habitación con visión artificial, mapea tus relaciones evaluando quién te acompaña, e incluso infiere tu estado emocional general y orientación política basándose en las micro-interacciones (milisegundos) de retención en la pantalla al visualizar contenido polarizante.</p>
 </section>

 <section id="auditoria" className="mb-12">
 <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><Fingerprint className="w-7 h-7 text-red-500" /> Auditoría de tu Huella OSINT Personal</h2>
 <p>OSINT (Open Source Intelligence) es el término que usan los investigadores y hackers éticos para referirse a la recolección de datos públicos. Lo que los cibercriminales y estafadores necesitan para robar tu identidad o realizar ataques de *Spear Phishing* dirigidos contra tu empleador probablemente ya está disponible públicamente de forma gratuita debido a tu propio exceso de compartición (oversharing).</p>
 <p><strong>El ejercicio de auto-hackeo:</strong> Tómate una hora este fin de semana para buscar tu nombre completo entre comillas ("Nombre Apellido") en un navegador en modo incógnito usando un buscador enfocado en privacidad como DuckDuckGo o Brave Search. Revisa las imágenes asociadas a ti. ¿Es fácil deducir el nombre de tu mascota actual (frecuentemente usado como contraseña de recuperación)? ¿Es obvio cuál es el colegio de tus hijos por los escudos en las fotos escolares públicas? ¿Está visible públicamente en LinkedIn tu fecha y año de nacimiento exactos, la cual es una pieza clave para la ingeniería social bancaria?</p>
 <p>Si la respuesta a cualquiera de estas preguntas es sí, tu perímetro de exposición digital es críticamente vulnerable. La mitigación no consiste en borrar tu cuenta (lo cual es poco realista en el ámbito profesional actual), sino en reducir drásticamente el área de superficie de ataque de la información que ofreces voluntariamente.</p>
 </section>

 <section id="configuracion" className="mb-12">
 <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><ShieldAlert className="w-7 h-7 text-red-500" /> 5 Configuraciones de Seguridad Innegociables</h2>
 <p>La configuración por defecto (factory default) de casi toda red social moderna está diseñada maliciosamente para priorizar la recolección extrema de datos y el rastreo cruzado entre aplicaciones. Debes intervenir manualmente en los menús de privacidad de cada app, ocultos intencionalmente tras interfaces confusas (Dark Patterns):</p>
 <ol className="list-decimal pl-6 space-y-3 mb-6">
 <li><strong>Desactiva el rastreo de ubicación de fondo:</strong> Entra a la configuración de tu sistema operativo (iOS/Android) y cambia el permiso de ubicación de redes sociales de "Siempre" a "Nunca" o "Sólo al usar la app". Una app para ver fotos no necesita conocer tus recorridos viales 24/7.</li>
 <li><strong>Revoca la sincronización automática de contactos:</strong> Nunca permitas que una nueva app o red social cargue la libreta de direcciones de tu teléfono a sus servidores. Al hacerlo, estás rompiendo la privacidad de cientos de amigos y colegas tuyos que jamás consintieron darle sus números a esa empresa extranjera.</li>
 <li><strong>Desactiva el rastreo web cruzado y uso de datos de terceros:</strong> En Facebook/Instagram, desactiva la "Actividad fuera de Meta". Estas plataformas compran información a corredores de datos (Data Brokers) sobre qué compraste con tu tarjeta de crédito en tiendas físicas para cruzarlo con tu perfil online. Pon fin a ese conducto de datos.</li>
 <li><strong>Audita el inicio de sesión OAuth:</strong> Entra a Google, Facebook, Apple y revisa la pestaña "Aplicaciones conectadas" o "Sesiones de terceros". Elimina y revoca el acceso a ese test de personalidad que hiciste en 2018 y a la app de edición de fotos sospechosa que descargaste hace años, los cuales aún conservan un túnel de acceso permanente a tus datos.</li>
 <li><strong>Desactiva el reconocimiento facial y uso de contenido para IA:</strong> Donde esté disponible (dependiendo de la legislación de tu país, como la GDPR o regulaciones locales), busca las casillas ocultas en la política de privacidad de la plataforma y opt-out (exclúyete) formalmente de que tus fotos sean usadas para entrenar algoritmos de reconocimiento facial biométrico.</li>
 </ol>
 </section>

 <section id="compartir" className="mb-12">
 <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><UserX className="w-7 h-7 text-red-500" /> La Higiene del Compartir (Data Minimization)</h2>
 <p>La máxima defensa contra la invasión de la privacidad no es la tecnología, es el cambio de comportamiento: <strong>Minimización de Datos</strong>. Antes de presionar el botón "Publicar" en una historia o publicación de feed, aplica mentalmente el filtro de seguridad de 3 segundos:</p>
 <p><em>¿Muestra esto algún gafete de identificación corporativa, un monitor encendido en el fondo con código o emails, una placa de automóvil de un vecino, las llaves de mi casa con el patrón de dientes visible, un boarding pass de avión con el código de barras, o el frontis exterior de mi domicilio?</em> Si es así, recorta la imagen, desdibuja el área o simplemente no la publiques.</p>
 <p>La privacidad radical en el siglo XXI no se trata de tener algo oscuro que ocultar. Se trata del derecho humano inalienable de controlar y mantener la agencia y propiedad sobre la narrativa de tu propia identidad digital, eligiendo conscientemente qué revelar al mundo y qué guardar ferozmente para tus círculos de intimidad real.</p>
 </section>
 </div>

 <AuthorBox category="tecnologia" datePublished="2026" dateReviewed="Mayo 2026" />
 </div>
 </article>
 );
}
