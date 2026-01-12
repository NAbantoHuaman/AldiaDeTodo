import AdsBanner from "@/components/AdsBanner";

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>
      <div className="prose prose-indigo text-gray-700 space-y-4">
        <p>Última actualización: 10 de Octubre de 2023</p>
        <p>En AldiaDeTodo, accesible desde aldiadetodo.com, una de nuestras principales prioridades es la privacidad de nuestros visitantes.</p>
        
        <h3 className="text-xl font-bold mt-6 text-gray-900">Cookies y Web Beacons</h3>
        <p>Como cualquier otro sitio web, AldiaDeTodo utiliza 'cookies'. Estas cookies se utilizan para almacenar información, incluidas las preferencias de los visitantes y las páginas del sitio web a las que el visitante accedió o visitó.</p>
        
        <h3 className="text-xl font-bold mt-6 text-gray-900">Google DoubleClick DART Cookie</h3>
        <p>Google es uno de los proveedores externos en nuestro sitio. También utiliza cookies, conocidas como cookies DART, para publicar anuncios a los visitantes de nuestro sitio en función de su visita a www.website.com y otros sitios en Internet.</p>
        
        <h3 className="text-xl font-bold mt-6 text-gray-900">Socios Publicitarios (AdSense)</h3>
        <p>Nuestros socios publicitarios pueden utilizar cookies y web beacons en nuestro sitio. Nuestro socio publicitario principal es Google AdSense.</p>
        
        <AdsBanner slot="9988776655" label="Anuncio en Política" />
      </div>
    </div>
  );
}