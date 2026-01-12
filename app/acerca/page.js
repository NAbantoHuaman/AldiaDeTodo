
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Sobre AldiaDeTodo</h1>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        Somos un refugio digital para mentes inquietas. Buscamos inspirar, educar y motivar a través de contenido de alta calidad.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div className="p-6 bg-indigo-50 rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-indigo-900">Nuestra Misión</h3>
          <p className="text-gray-700">Democratizar el crecimiento personal y las finanzas prácticas.</p>
        </div>
        <div className="p-6 bg-indigo-50 rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-indigo-900">Nuestros Valores</h3>
          <p className="text-gray-700">Verdad, utilidad, claridad y estética en cada palabra.</p>
        </div>
        <div className="p-6 bg-indigo-50 rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-indigo-900">El Equipo</h3>
          <p className="text-gray-700">Editores apasionados por el desarrollo humano y la tecnología.</p>
        </div>
      </div>
    </div>
  );
}