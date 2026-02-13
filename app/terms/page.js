export const metadata = {
  title: "Términos y Condiciones - AldiaDeTodo",
  description: "Términos y condiciones de uso del sitio web AldiaDeTodo.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Términos y Condiciones</h1>
      <p className="text-sm text-gray-500 mb-10">Última actualización: 12 de febrero de 2026</p>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-8">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de los términos</h2>
          <p className="mb-4">
            Al acceder y utilizar el sitio web <strong>AldiaDeTodo</strong> (aldiadetodo.com), aceptas cumplir con estos Términos y Condiciones. Si no estás de acuerdo con alguno de ellos, te pedimos que no utilices nuestro sitio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Uso del sitio</h2>
          <p className="mb-4">
            El contenido de AldiaDeTodo es proporcionado con fines informativos y educativos. Te comprometes a utilizar el sitio de manera responsable y a no:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Reproducir, duplicar o copiar material del sitio con fines comerciales sin autorización previa.</li>
            <li>Utilizar el sitio de manera que cause daño o deteriore la disponibilidad del mismo.</li>
            <li>Usar el sitio para actividades ilegales o no autorizadas.</li>
            <li>Transmitir virus u otro código malicioso a través del sitio.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Propiedad intelectual</h2>
          <p className="mb-4">
            Todo el contenido original publicado en AldiaDeTodo, incluyendo textos, gráficos, logotipos, diseño y software, es propiedad de AldiaDeTodo o de sus respectivos autores y está protegido por las leyes de propiedad intelectual.
          </p>
          <p className="mb-4">
            Puedes compartir nuestros artículos en redes sociales siempre que incluyas un enlace al artículo original y des crédito adecuado a AldiaDeTodo.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Contenido de terceros</h2>
          <p className="mb-4">
            Nuestro sitio puede incluir contenido de noticias proveniente de fuentes externas (RSS). Este contenido pertenece a sus respectivos propietarios y es utilizado con fines informativos. AldiaDeTodo proporciona enlaces a las fuentes originales cuando corresponde.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Publicidad</h2>
          <p className="mb-4">
            AldiaDeTodo utiliza Google AdSense para mostrar anuncios. Estos anuncios pueden utilizar cookies para personalizar el contenido publicitario. Para más información, consulta nuestra{" "}
            <a href="/privacidad" className="text-indigo-600 hover:text-indigo-800 underline">Política de Privacidad</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Descargo de responsabilidad</h2>
          <p className="mb-4">
            El contenido de AldiaDeTodo se proporciona &quot;tal cual&quot; y &quot;según disponibilidad&quot;. No garantizamos que:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>El sitio estará disponible de manera ininterrumpida.</li>
            <li>La información sea completamente precisa o actualizada en todo momento.</li>
            <li>Los consejos o información reemplacen la consulta profesional (médica, financiera, legal, etc.).</li>
          </ul>
          <p className="mb-4">
            Los artículos sobre salud, finanzas y crecimiento personal son de carácter informativo y no constituyen asesoramiento profesional. Siempre consulta con un profesional calificado antes de tomar decisiones importantes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Enlaces externos</h2>
          <p className="mb-4">
            Nuestro sitio puede contener enlaces a sitios web externos. No tenemos control sobre el contenido de esos sitios y no asumimos responsabilidad por el contenido de sitios enlazados.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modificaciones</h2>
          <p className="mb-4">
            Nos reservamos el derecho de revisar estos términos en cualquier momento. Los cambios entrarán en vigor tan pronto como se publiquen en esta página. El uso continuado del sitio después de dichos cambios constituye la aceptación de los nuevos términos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contacto</h2>
          <p className="mb-4">
            Si tienes preguntas sobre estos Términos y Condiciones, contáctanos a través de nuestra{" "}
            <a href="/contacto" className="text-indigo-600 hover:text-indigo-800 underline">página de contacto</a>.
          </p>
        </section>

      </div>
    </div>
  );
}
