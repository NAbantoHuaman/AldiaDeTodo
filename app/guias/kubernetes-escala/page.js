import Link from 'next/link';
import { Ship, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Zap, Globe, Layers, Shield } from 'lucide-react';

export const metadata = {
  title: "Kubernetes & Docker: Orquestación y Escalabilidad Masiva en 2026",
  description: "Guía definitiva sobre contenedores y orquestación. Aprende Docker, Kubernetes (K8s), Helm, Service Mesh y cómo gestionar infraestructuras cloud-native en 2026.",
  openGraph: {
    title: "Kubernetes & Docker: Orquestación y Escalabilidad Masiva en 2026",
    description: "Domina el sistema operativo de la nube. Aprende a desplegar y escalar aplicaciones globales con contenedores.",
    url: "https://aldiadetodo.com/guias/kubernetes-escala",
    type: "article",
    images: [{ url: '/images/guias/kubernetes.png' }]
  },
  alternates: { canonical: '/guias/kubernetes-escala' },
};

export default function GuiaKubernetes() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Kubernetes & Docker: Orquestación y Escalabilidad Masiva en 2026',
    description: 'Manual técnico profundo sobre la contenedorización de aplicaciones y su gestión a escala mediante Kubernetes en entornos de nube modernos.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-18',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/kubernetes-escala',
  };

  return (
    <article className="min-h-screen bg-white font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-indigo-50 to-white py-24 border-b border-indigo-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-800 mb-10 transition-colors bg-white px-4 py-2 rounded-full shadow-sm">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center shadow-xl shadow-indigo-200 rotate-3 border-4 border-white">
              <Ship className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Kubernetes: El <span className="text-indigo-600">Capitán</span> de la Infraestructura Cloud
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Tipo:</span> Orquestación</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Lectura:</span> 30 min</span>
            <span className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg"><span className="font-black text-slate-900">Enfoque:</span> Cloud Native</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-indigo-500 pl-6">
            &quot;En 2026, ya nadie despliega código directamente en un servidor. Desplegamos contenedores, y Kubernetes es quien decide dónde, cómo y cuántos de ellos deben ejecutarse para que tu aplicación nunca se caiga. Es, literalmente, el sistema operativo de la nube distribuida.&quot;
          </p>

          <p className="mb-8">
            La forma en que construimos y desplegamos software ha cambiado para siempre. Atrás quedaron los días de &quot;en mi máquina funciona&quot; y de los servidores manuales configurados con amor. Con <strong>Docker</strong>, empaquetamos nuestra aplicación con todo lo que necesita para correr en cualquier lugar. Pero cuando tienes cientos o miles de contenedores, necesitas un director de orquesta. Ahí es donde entra <strong>Kubernetes</strong> (K8s). Lo que comenzó como un proyecto interno de Google (Borg) hoy domina el 85% de las infraestructuras cloud-native del mundo. En esta guía, aprenderás cómo escalar de un simple contenedor a un cluster global capaz de manejar millones de peticiones por segundo.
          </p>

          <div className="not-prose bg-slate-950 rounded-[32px] p-10 mb-16 border border-slate-800 shadow-2xl">
            <h2 className="text-2xl font-black !text-white mb-6 flex items-center gap-3 mt-0">
              <BookOpen className="w-6 h-6 text-indigo-400" /> Registro de Bordo
            </h2>
            <nav>
              <ul className="space-y-3 text-slate-300 list-none p-0">
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">01</span>
                  <a href="#docker" className="text-slate-200 no-underline font-bold group-hover:text-indigo-400 transition-colors">Contenedores: Por qué Docker cambió el mundo</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">02</span>
                  <a href="#k8s-core" className="text-slate-200 no-underline font-bold group-hover:text-indigo-400 transition-colors">Kubernetes Core: Pods, Services y Deployments</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">03</span>
                  <a href="#escalabilidad" className="text-slate-200 no-underline font-bold group-hover:text-indigo-400 transition-colors">Auto-escalado y Resiliencia (HPA y Self-healing)</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">04</span>
                  <a href="#gitops" className="text-slate-200 no-underline font-bold group-hover:text-indigo-400 transition-colors">GitOps: Despliegue Declarativo con ArgoCD/Flux</a>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">05</span>
                  <a href="#faq" className="text-slate-200 no-underline font-bold group-hover:text-indigo-400 transition-colors">Preguntas Frecuentes</a>
                </li>
              </ul>
            </nav>
          </div>

          <h2 id="docker" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Layers className="w-8 h-8 text-indigo-600" /> 1. Contenedores: La Unidad de Envío
          </h2>
          <p>
            Antes de Docker, desplegar software era como enviar piezas de muebles sueltas por correo y esperar que el receptor supiera cómo montarlas. Con Docker, enviamos la caja de IKEA completa: contiene el código, las librerías, la configuración y el sistema operativo mínimo necesario.
          </p>
          <p>
            <strong>La Inmutabilidad:</strong> Los contenedores son efímeros e inmutables. Una vez que construyes una imagen, esa imagen es exactamente igual en tu laptop que en el servidor de AWS. Esto elimina categorías enteras de errores de configuración y permite que los desarrolladores se enfoquen en la lógica de negocio, dejando que la infraestructura sea un detalle de implementación.
          </p>
          <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-8 my-10 flex gap-6 items-start shadow-sm">
             <Lightbulb className="w-8 h-8 text-indigo-500 flex-shrink-0 mt-1" />
             <div>
                <h4 className="text-lg font-black text-indigo-900 mb-2 mt-0">Consejo de Oro:</h4>
                <p className="text-indigo-800 m-0 text-sm leading-relaxed">
                  Usa imágenes base pequeñas (como Alpine o imágenes Distroless) y construye tus Dockerfiles en varias etapas (Multi-stage builds). Esto reduce la superficie de ataque y hace que tus despliegues sean hasta un 90% más rápidos al reducir el peso de las imágenes.
                </p>
             </div>
          </div>

          <h2 id="k8s-core" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Shield className="w-8 h-8 text-indigo-600" /> 2. El Cerebro de Kubernetes
          </h2>
          <p>
            Kubernetes es un sistema de <strong>estado deseado</strong>. Tú le dices: &quot;Quiero 3 copias de esta aplicación corriendo&quot;, y el cerebro de K8s (el Control Plane) se encarga de que así sea. Si una copia muere, K8s lanza otra automáticamente.
          </p>
          <p>
            Conceptos fundamentales que debes dominar:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Pods:</strong> La unidad más pequeña. Uno o más contenedores corriendo juntos.</li>
            <li><strong>Deployments:</strong> La receta que dice qué imagen usar y cuántas réplicas queremos.</li>
            <li><strong>Services:</strong> El balanceador de carga interno que da una IP estable a tus Pods efímeros.</li>
            <li><strong>Ingress:</strong> La puerta de entrada desde el internet público hacia tu cluster.</li>
          </ul>
          <pre className="bg-slate-950 text-indigo-300 p-6 rounded-2xl overflow-x-auto text-sm my-8 border border-slate-800">
            <code>
{`# Ejemplo minimalista de un Deployment en K8s
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mi-app-web
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: nginx
        image: nginx:1.25-alpine
        ports:
        - containerPort: 80`}
            </code>
          </pre>

          <h2 id="escalabilidad" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-indigo-600" /> 3. Escalabilidad y Resiliencia Extrema
          </h2>
          <p>
            En 2026, las aplicaciones deben escalar instantáneamente si se vuelven virales. El <strong>HPA (Horizontal Pod Autoscaler)</strong> de Kubernetes monitorea el uso de CPU y memoria y añade réplicas en segundos si el tráfico sube.
          </p>
          <p>
            <strong>Self-healing:</strong> La característica más amada. Si un servidor físico (Node) falla, Kubernetes detecta que los Pods que vivían allí han muerto y los re-programa en otros servidores saludables en cuestión de milisegundos. Para el usuario final, la aplicación nunca dejó de funcionar. Esto permite parches de seguridad y actualizaciones de software en pleno día sin interrumpir el servicio.
          </p>

          <h2 id="gitops" className="text-3xl font-black text-slate-950 font-outfit mt-20 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Globe className="w-8 h-8 text-indigo-600" /> 4. GitOps: La Infraestructura es Código
          </h2>
          <p>
             En un flujo GitOps, tu repositorio de Git es la única fuente de verdad para la infraestructura. Nunca ejecutas <code>kubectl apply</code> manualmente. En su lugar, herramientas como <strong>ArgoCD</strong> miran tu repositorio y sincronizan el cluster automáticamente. Quién cambió qué, cuándo y por qué queda registrado en el historial de Git, permitiendo hacer &quot;rollbacks&quot; instantáneos si algún cambio de configuración sale mal.
          </p>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-indigo-600" /> Preguntas Frecuentes
          </h2>
          <div className="space-y-6 mt-8">
            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Kubernetes es demasiado complejo para mi pequeña empresa?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                Posiblemente. K8s tiene una curva de aprendizaje alta. Si solo tienes una o dos aplicaciones, servicios como AWS App Runner o Render pueden ser suficientes. Solo muévete a K8s cuando necesites control total sobre la red, escalabilidad masiva o tengas una arquitectura de microservicios compleja.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Qué es un Service Mesh (Istio/Linkerd)?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                A medida que escalas, necesitas seguridad entre tus propios servicios (mTLS) y visibilidad de quién habla con quién. Un Service Mesh es una capa de red transparente que añade estas funciones sin que tengas que tocar una sola línea de tu código de aplicación.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-lg font-bold text-slate-900 m-0">¿Es caro correr Kubernetes?</h4>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronLeft className="w-5 h-5 -rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-slate-600 border-t border-slate-200 pt-4 leading-relaxed">
                El control plane suele tener un costo fijo mensual, pero la eficiencia que ganas al &quot;empaquetar&quot; múltiples aplicaciones en los mismos servidores puede ahorrarte mucho dinero en la factura total de la nube. Además, el uso de &quot;Spot Instances&quot; con K8s es una forma increíble de reducir costos hasta un 80%.
              </p>
            </details>
          </div>

          <div className="bg-indigo-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-6 text-white leading-tight">
                Toma el Timón de <br className="hidden md:block" /> la Nube Global
              </h2>
              <p className="text-indigo-50 text-lg leading-relaxed mb-10 font-medium max-w-2xl">
                Domina la herramienta que hace posible plataformas como Spotify, Netflix o Airbnb. Kubernetes es el superpoder que te permite dormir tranquilo mientras tus aplicaciones escalan y se auto-reparan solas en cualquier rincón del mundo.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-50 transition-all shadow-xl flex items-center gap-2">
                   Ver más Guías <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 text-indigo-100 text-sm font-bold">
                  <span className="flex items-center gap-1"><Ship className="w-4 h-4" /> Orchestration Pro</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Multi-Cloud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
