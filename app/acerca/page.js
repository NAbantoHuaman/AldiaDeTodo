import Link from 'next/link';
import { Compass, Eye, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: "Sobre Nosotros - AldiaDeTodo",
  description: "Conoce al equipo detrás de AldiaDeTodo, nuestra misión, visión y valores.",
};

export default function AcercaPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sobre AldiaDeTodo</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
        <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Qué hacemos?</h2>
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

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div className="text-center p-6 bg-gray-50 rounded-xl">
          <p className="text-3xl font-bold text-indigo-600">38+</p>
          <p className="text-gray-600 text-sm mt-1">Artículos originales</p>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-xl">
          <p className="text-3xl font-bold text-indigo-600">8</p>
          <p className="text-gray-600 text-sm mt-1">Categorías</p>
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

      {/* Contact CTA */}
      <div className="text-center bg-indigo-900 text-white p-10 rounded-2xl">
        <h2 className="text-2xl font-bold mb-3">¿Tienes una historia o idea?</h2>
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