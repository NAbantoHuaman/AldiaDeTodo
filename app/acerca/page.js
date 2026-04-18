import Link from 'next/link';
import { Compass, Eye, ShieldCheck, Users, BookOpen, CheckCircle, Newspaper, TrendingUp } from 'lucide-react';

export const metadata = {
  title: "Sobre Nosotros - AldiaDeTodo",
  description: "Conoce al equipo detrás de AldiaDeTodo, nuestra misión, visión, valores, línea editorial y metodología. Somos un medio digital en español enfocado en crecimiento personal, finanzas y bienestar.",
};

export default function AcercaPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl font-inter">

      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center shadow-lg shadow-indigo-200">
            <Newspaper className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 font-outfit tracking-tight">Sobre AldiaDeTodo</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Somos un refugio digital para mentes inquietas. Creemos que una buena idea, presentada con claridad, puede transformar una vida.
        </p>
      </div>

      {/* Mission, Vision, Values Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="relative p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600"></div>
          <Compass className="w-8 h-8 text-indigo-600 mb-5 mx-auto" strokeWidth={1.5} />
          <h3 className="font-bold text-xl mb-3 text-gray-900">Nuestra Misión</h3>
          <p className="text-gray-600 leading-relaxed">
            Democratizar el acceso al crecimiento personal, las finanzas prácticas y la salud mental a través de contenido gratuito, accesible y de alta calidad en español.
          </p>
        </div>
        <div className="relative p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
          <Eye className="w-8 h-8 text-amber-500 mb-5 mx-auto" strokeWidth={1.5} />
          <h3 className="font-bold text-xl mb-3 text-gray-900">Nuestra Visión</h3>
          <p className="text-gray-600 leading-relaxed">
            Convertirnos en la plataforma de referencia en habla hispana para quien busca mejorar su vida, sus finanzas y su bienestar emocional, un artículo a la vez.
          </p>
        </div>
        <div className="relative p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
          <ShieldCheck className="w-8 h-8 text-emerald-500 mb-5 mx-auto" strokeWidth={1.5} />
          <h3 className="font-bold text-xl mb-3 text-gray-900">Nuestros Valores</h3>
          <p className="text-gray-600 leading-relaxed">
            Verdad, utilidad, claridad y estética en cada palabra. No publicamos contenido vacío ni clickbait. Cada artículo busca aportar valor real a tu día.
          </p>
        </div>
      </div>

      {/* What we do */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 mb-16">
        <h2 className="text-3xl font-black text-gray-900 mb-6 font-outfit">¿Qué hacemos?</h2>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          <p>
            <strong>AldiaDeTodo</strong> nació con una idea simple: que la información que transforma vidas no debería estar detrás de un muro de pago ni escondida en libros que pocos leen.
          </p>
          <p>
            Cada día seleccionamos, creamos y curamos contenido sobre <strong>productividad</strong>, <strong>finanzas personales</strong>, <strong>salud mental</strong>, <strong>relaciones</strong> y <strong>crecimiento personal</strong>. Nuestros artículos son escritos por un equipo editorial apasionado que investiga, verifica y presenta la información de manera clara, práctica y directa.
          </p>
          <p>
            Además, ofrecemos una sección de noticias de actualidad curada de las mejores fuentes del mundo para que estés siempre informado sin tener que buscar en decenas de sitios.
          </p>
        </div>
      </div>

      {/* Editorial Team */}
      <div className="bg-slate-50 rounded-2xl border border-gray-200 p-8 md:p-12 mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Users className="w-7 h-7 text-indigo-600" />
          <h2 className="text-3xl font-black text-gray-900 font-outfit">Nuestro Equipo Editorial</h2>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Detrás de AldiaDeTodo hay un equipo multidisciplinario con experiencia en periodismo digital, psicología, educación financiera y desarrollo web. Cada pieza de contenido pasa por un proceso editorial riguroso.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
            <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-black text-indigo-600">RG</span>
            </div>
            <h4 className="font-bold text-gray-900">Redacción General</h4>
            <p className="text-sm text-gray-500 mt-1">Artículos originales de crecimiento personal, productividad y finanzas</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-black text-emerald-600">CE</span>
            </div>
            <h4 className="font-bold text-gray-900">Curaduría Editorial</h4>
            <p className="text-sm text-gray-500 mt-1">Selección y verificación de fuentes informativas internacionales</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-black text-amber-600">DT</span>
            </div>
            <h4 className="font-bold text-gray-900">Equipo Técnico</h4>
            <p className="text-sm text-gray-500 mt-1">Desarrollo, diseño y optimización de la plataforma digital</p>
          </div>
        </div>
      </div>

      {/* Editorial Methodology */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 mb-16">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-7 h-7 text-indigo-600" />
          <h2 className="text-3xl font-black text-gray-900 font-outfit">Nuestra Metodología Editorial</h2>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Cada artículo original publicado en AldiaDeTodo sigue un proceso editorial estricto para garantizar calidad, veracidad y utilidad práctica:
        </p>
        <div className="space-y-4">
          {[
            { step: "1", title: "Investigación", desc: "Consultamos fuentes académicas, libros especializados y estudios publicados en revistas científicas indexadas. No repetimos rumores ni tendencias sin verificar." },
            { step: "2", title: "Redacción Original", desc: "Cada artículo es escrito desde cero por nuestro equipo editorial. No copiamos, parafraseamos ni reescribimos contenido de otros sitios web." },
            { step: "3", title: "Revisión Interna", desc: "Antes de publicar, cada artículo pasa por revisión de estilo, verificación de datos y comprobación de que las recomendaciones sean seguras y prácticas." },
            { step: "4", title: "Optimización y Accesibilidad", desc: "Formateamos el contenido para que sea legible, escaneable y accesible en cualquier dispositivo. Usamos lenguaje claro sin tecnicismos innecesarios." },
            { step: "5", title: "Actualización Periódica", desc: "Revisamos y actualizamos nuestros artículos regularmente para mantener la información relevante y precisa." },
          ].map(item => (
            <div key={item.step} className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-black text-indigo-700">{item.step}</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ethical Line */}
      <div className="bg-indigo-50 rounded-2xl border border-indigo-100 p-8 md:p-12 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <CheckCircle className="w-7 h-7 text-indigo-600" />
          <h2 className="text-3xl font-black text-gray-900 font-outfit">Línea Ética</h2>
        </div>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            En AldiaDeTodo operamos bajo principios éticos claros que guían todo nuestro contenido:
          </p>
          <ul className="space-y-3 list-none pl-0">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
              <span><strong>Transparencia:</strong> Identificamos claramente las fuentes de nuestras noticias y distinguimos entre contenido original y contenido curado de fuentes externas.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
              <span><strong>No clickbait:</strong> Nuestros títulos reflejan fielmente el contenido del artículo. No exageramos ni sensacionalizamos.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
              <span><strong>Independencia:</strong> Nuestro contenido editorial no está influenciado por anunciantes. La publicidad se identifica claramente como tal.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
              <span><strong>Responsabilidad:</strong> El contenido sobre salud y finanzas incluye advertencias de que no reemplaza el consejo profesional.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
              <span><strong>Atribución:</strong> Siempre damos crédito a las fuentes originales y enlazamos al contenido de origen cuando curamos noticias externas.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div className="text-center p-6 bg-gray-50 rounded-xl">
          <p className="text-3xl font-bold text-indigo-600">40+</p>
          <p className="text-gray-600 text-sm mt-1">Artículos originales</p>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-xl">
          <p className="text-3xl font-bold text-indigo-600">4</p>
          <p className="text-gray-600 text-sm mt-1">Guías en profundidad</p>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-xl">
          <p className="text-3xl font-bold text-indigo-600">24/7</p>
          <p className="text-gray-600 text-sm mt-1">Noticias en vivo</p>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-xl">
          <p className="text-3xl font-bold text-indigo-600">100%</p>
          <p className="text-gray-600 text-sm mt-1">Gratuito</p>
        </div>
      </div>

      {/* History */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-7 h-7 text-indigo-600" />
          <h2 className="text-3xl font-black text-gray-900 font-outfit">Nuestra Historia</h2>
        </div>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          <p>
            AldiaDeTodo nació a principios de 2026 con una premisa clara: <strong>la información de calidad debe ser accesible para todos</strong>. Inspirados por la falta de contenido profundo y práctico en español sobre temas de crecimiento personal y finanzas, decidimos crear un espacio donde la excelencia editorial fuera la norma, no la excepción.
          </p>
          <p>
            Desde entonces, hemos publicado más de 40 artículos originales y 4 guías extensas sobre temas que impactan directamente la vida de nuestros lectores. Nuestro compromiso es seguir creciendo, publicando más contenido de valor y mejorando la experiencia de lectura cada día.
          </p>
          <p>
            Creemos que un artículo bien escrito puede cambiar la perspectiva de alguien en un momento difícil, motivar una decisión financiera inteligente o enseñar una técnica que mejore la salud mental de una persona durante años. Por eso nos tomamos tan en serio cada palabra que publicamos.
          </p>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center bg-indigo-900 text-white p-10 rounded-2xl">
        <h2 className="text-2xl font-bold mb-3 font-outfit">¿Tienes una historia o idea?</h2>
        <p className="text-indigo-200 mb-6 max-w-lg mx-auto">
          Nos encanta escuchar a nuestra comunidad. Si tienes sugerencias, colaboraciones o simplemente quieres saludar, escríbenos.
        </p>
        <Link href="/contacto" className="inline-block bg-white text-indigo-900 font-bold px-8 py-3 rounded-lg hover:bg-indigo-100 transition">
          Contáctanos
        </Link>
      </div>

    </div>
  );
}