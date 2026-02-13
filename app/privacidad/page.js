export const metadata = {
  title: "Política de Privacidad - AldiaDeTodo",
  description: "Conoce cómo AldiaDeTodo recopila, usa y protege tu información personal.",
};

export default function PrivacidadPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Política de Privacidad</h1>
      <p className="text-sm text-gray-500 mb-10">Última actualización: 12 de febrero de 2026</p>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-8">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que recopilamos</h2>
          <p className="mb-4">
            En <strong>AldiaDeTodo</strong> respetamos tu privacidad. Cuando visitas nuestro sitio web, podemos recopilar automáticamente cierta información, incluyendo:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Dirección IP y ubicación geográfica aproximada.</li>
            <li>Tipo de navegador y sistema operativo.</li>
            <li>Páginas visitadas, tiempo de permanencia y patrones de navegación.</li>
            <li>Información proporcionada voluntariamente (como tu email al suscribirte al newsletter).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Uso de Cookies</h2>
          <p className="mb-4">
            Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario. Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.
          </p>
          <p className="mb-4">Utilizamos cookies para:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Analizar el tráfico web y el comportamiento de los usuarios (Google Analytics).</li>
            <li>Mostrar anuncios personalizados (Google AdSense).</li>
            <li>Recordar tus preferencias de navegación.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Google AdSense y la cookie DART</h2>
          <p className="mb-4">
            Google, como proveedor externo de publicidad, utiliza cookies para mostrar anuncios en nuestro sitio. El uso de la cookie DART por parte de Google le permite mostrar anuncios basados en las visitas del usuario a nuestro sitio y a otros sitios en Internet.
          </p>
          <p className="mb-4">
            Los usuarios pueden inhabilitar el uso de la cookie DART visitando la{" "}
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 underline">
              página de política de privacidad de la red de contenido y anuncios de Google
            </a>.
          </p>
          <p className="mb-4">
            Algunos de nuestros socios publicitarios pueden usar cookies y balizas web en nuestro sitio. Cada uno de estos socios publicitarios tiene su propia Política de Privacidad.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Google Analytics</h2>
          <p className="mb-4">
            Utilizamos Google Analytics para comprender cómo los visitantes interactúan con nuestro sitio. Google Analytics recopila información de forma anónima e informa sobre las tendencias del sitio web sin identificar a visitantes individuales. Puedes leer la{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 underline">
              Política de Privacidad de Google
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cómo usamos tu información</h2>
          <p className="mb-4">La información que recopilamos se utiliza para:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Personalizar y mejorar tu experiencia en el sitio.</li>
            <li>Analizar tendencias y administrar el sitio.</li>
            <li>Enviar correos periódicos si te suscribiste al newsletter (puedes cancelar en cualquier momento).</li>
            <li>Mostrar publicidad relevante a través de Google AdSense.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Protección de datos</h2>
          <p className="mb-4">
            Implementamos medidas de seguridad razonables para proteger tu información personal. Sin embargo, ningún método de transmisión por Internet es 100% seguro y no podemos garantizar la seguridad absoluta de tus datos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Tus derechos</h2>
          <p className="mb-4">Tienes derecho a:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Acceder a tus datos personales que tengamos almacenados.</li>
            <li>Solicitar la corrección o eliminación de tus datos.</li>
            <li>Optar por no recibir comunicaciones de marketing.</li>
            <li>Desactivar las cookies en la configuración de tu navegador.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Enlaces a terceros</h2>
          <p className="mb-4">
            Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad de dichos sitios. Te recomendamos leer las políticas de privacidad de cada sitio que visites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cambios en esta política</h2>
          <p className="mb-4">
            Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Te notificaremos de cualquier cambio publicando la nueva política en esta página con una fecha de actualización revisada.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contacto</h2>
          <p className="mb-4">
            Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos a través de nuestra{" "}
            <a href="/contacto" className="text-indigo-600 hover:text-indigo-800 underline">página de contacto</a>.
          </p>
        </section>

      </div>
    </div>
  );
}