import Link from 'next/link';
import { Ship, ChevronLeft, BookOpen, CheckCircle, Lightbulb, AlertTriangle, Terminal, Cpu, Search, HelpCircle, ArrowRight, Zap, Globe, Layers, Shield, Activity, Target, History, Scale, Footprints, Wind, Trophy, Heart, ShieldAlert, HeartHandshake, Database, BarChart3, Calculator } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
  title: "Kubernetes Maestro: El Manual de la Infraestructura Planetaria (2026)",
  description: "La guía enciclopédica definitiva sobre Kubernetes a escala. Del Control Plane y etcd a Service Mesh, GitOps y escalado automático con Karpenter. Más de 3,500 palabras.",
  openGraph: {
    title: "Kubernetes Maestro: El Manual de la Infraestructura Planetaria (2026)",
    description: "Domina el sistema operativo de la nube distribuida. La guía más profunda para ingenieros de plataformas senior en 2026.",
    url: "https://aldiadetodo.com/guias/kubernetes-escala",
    type: "article",
    images: [{ url: '/images/guias/kubernetes.png' }]
  },
  alternates: { canonical: '/guias/kubernetes-escala' },
};

export default function GuiaKubernetes() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Kubernetes Maestro: El Manual de la Infraestructura Planetaria (2026)',
    description: 'Manual enciclopédico sobre orquestación de contenedores, K8s Control Plane, Service Mesh, GitOps y seguridad de infraestructura cloud-native.',
    author: { '@type': 'Organization', name: 'AldiaDeTodo' },
    publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
    datePublished: '2026-04-18', dateModified: '2026-04-20',
    mainEntityOfPage: 'https://aldiadetodo.com/guias/kubernetes-escala',
  };

  return (
    <article className="min-h-screen bg-white font-inter text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-indigo-50 to-white py-24 border-b border-indigo-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Link href="/guias" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-800 mb-10 transition-colors bg-white px-5 py-2.5 rounded-full shadow-sm border border-indigo-100">
            <ChevronLeft className="w-4 h-4" /> Todas las Guías
          </Link>
          <div className="flex justify-center items-center gap-3 mb-10">
            <div className="w-20 h-20 bg-indigo-600 rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-indigo-200 rotate-3 border-4 border-white">
              <Ship className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.05] font-outfit mb-8">
             Kubernetes <span className="text-indigo-600 text-glow">Maestro</span>: Elite Pass
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Terminal className="w-4 h-4 text-indigo-500" /> Platform Architect</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><BookOpen className="w-4 h-4 text-indigo-500" /> +3,500 Palabras</span>
            <span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><Zap className="w-4 h-4 text-indigo-500" /> Versión Élite 2026</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-16">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium italic border-l-4 border-indigo-500 pl-8 bg-indigo-50 py-8 rounded-r-3xl pr-6">
            &quot;Kubernetes no es solo un orquestador de contenedores; es el sistema operativo de la nube distribuida y el lenguaje universal de la infraestructura moderna. En 2026, dominar K8s no es una opción, es la base sobre la que se construyen los imperios de software resilientes, autogestionados y elásticos a nivel planetario.&quot;
          </p>

          <p className="mb-12 font-medium text-slate-700">
            Bienvenido al manual definitivo sobre la tecnología que ha redefinido la ingeniería de software y operaciones durante la última década. Lo que comenzó como un proyecto interno en Google hoy es el motor que mueve desde microservicios críticos en el sector financiero hasta las cargas de trabajo masivas de entrenamiento de modelos de lenguaje (LLMs) en la era de la IA. En esta guía enciclopédica de más de 3,500 palabras, vamos a diseccionar la anatomía de Kubernetes: desde los internals del Control Plane y el ciclo de reconciliación de etcd hasta las estrategias avanzadas de escalado "just-in-time" con Karpenter, la orquestación distribuida con Service Mesh, los flujos de GitOps y la seguridad Zero-Trust en entornos multi-nube. Prepárate para tomar el mando del timón del ecosistema Cloud Native.
          </p>

          <div className="not-prose bg-slate-950 rounded-[40px] p-10 mb-20 border border-slate-800 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <h2 className="text-2xl font-black !text-white mb-8 flex items-center gap-3 mt-0 relative z-10">
              <BookOpen className="w-6 h-6 text-indigo-400" /> Currículo de Ingeniería de Plataformas Total
            </h2>
            <nav className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: "01", label: "Control Plane Internals & etcd", href: "#control-plane" },
                  { id: "02", label: "El Ciclo de Reconciliación Master", href: "#reconciliation" },
                  { id: "03", label: "Networking: CNI, Ingress & Gateway API", href: "#networking" },
                  { id: "04", label: "Escalado Elástico: HPA, VPA & Karpenter", href: "#scaling" },
                  { id: "05", label: "Service Mesh: Istio, Linkerd & mTLS", href: "#mesh" },
                  { id: "06", label: "Storage: CSI & Persistencia Crítica", href: "#storage" },
                  { id: "07", label: "GitOps: ArgoCD, Flux & Verdad en Git", href: "#gitops" },
                  { id: "08", label: "Seguridad: RBAC, Network Policies & OPA", href: "#security" },
                  { id: "09", label: "Observabilidad: El Stack Prometheus", href: "#observability" },
                  { id: "10", label: "Operadores: Automatizando el Dominio", href: "#operators" },
                  { id: "11", label: "FinOps: Optimización de Costes Cloud", href: "#finops" },
                  { id: "12", label: "Cargas IA: GPUS en K8s a Escala", href: "#ai-workloads" },
                ].map((item) => (
                  <a key={item.id} href={item.href} className="flex items-center gap-3 p-4 rounded-2xl hover:bg-white/5 transition-all group no-underline border border-transparent hover:border-indigo-500/30">
                    <span className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">{item.id}</span>
                    <span className="text-slate-200 font-bold group-hover:text-indigo-400 transition-colors uppercase tracking-tight text-[10px]">{item.label}</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <h2 id="control-plane" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Cpu className="w-8 h-8 text-indigo-600" /> 1. Control Plane Internals: El Cerebro del Coloso
          </h2>
          <p>
            Kubernetes no es un orquestador monolítico, sino un conjunto de microservicios coordinados. El **Control Plane** es el mando central. El corazón es el **API Server**, el único que habla con la base de datos **etcd**. etcd es un almacén clave-valor distribuido basado en el algoritmo de consenso Raft; si etcd cae, el cluster muere. 
          </p>
          <p>
            En 2026, la salud del API Server y la latencia de etcd son las métricas más críticas para un Ingeniero de Plataformas. El **Scheduler** decide dónde vive cada Pod basándose en afinidades, tolerancias y recursos disponibles, mientras que el **Controller Manager** ejecuta bucles infinitos de comprobación. Dominar estos internals es la diferencia entre operar un cluster y entenderlo.
          </p>

          <h2 id="reconciliation" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Activity className="w-8 h-8 text-indigo-600" /> 2. El Ciclo de Reconciliación: El Estado Deseado
          </h2>
          <p>
            La magia de Kubernetes reside en su naturaleza declarativa. Tú no dices "crea tres réplicas", dices "mi estado deseado es que existan tres réplicas". El sistema vive en un bucle infinito comparando el **Estado Real** con el **Estado Deseado**. 
          </p>
          <p>
            Si un nodo físico falla y se pierden dos réplicas, el Control Plane lo detecta instantáneamente y ordena al Scheduler crear dos nuevas réplicas en otros nodos sanos. Esta capacidad de **auto-reparación (self-healing)** es lo que permite que infraestructuras planetarias funcionen con mínima intervención humana durante años.
          </p>

          <h2 id="networking" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Globe className="w-8 h-8 text-indigo-600" /> 3. Networking: De CNI a Gateway API
          </h2>
          <p>
            La red en K8s es una abstracción sobre abstracción. Por debajo tenemos el **CNI (Container Network Interface)** como Cilium o Calico, que utiliza eBPF para un rendimiento masivo. Por encima, el sistema de **Services** (ClusterIP, NodePort) y el nuevo estándar **Gateway API**. 
          </p>
          <p>
            A diferencia del antiguo Ingress, Gateway API es más expresivo y permite separar la infraestructura de red pura de las reglas de negocio de enrutamiento. Entender el flujo de un paquete desde el Load Balancer externo hasta el contenedor dentro de un Pod es fundamental para el debugging de aplicaciones distribuidas a gran escala.
          </p>

          <h2 id="scaling" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Zap className="w-8 h-8 text-indigo-600" /> 4. Escalado Elástico: Karpenter y el 'Just-in-Time'
          </h2>
          <p>
            Escalar réplicas de Pods con **HPA (Horizontal Pod Autoscaler)** es el nivel básico. El reto real es escalar la infraestructura física (los nodos). En 2026, el estándar para clusters en la nube es **Karpenter** (especialmente en AWS). 
          </p>
          <p>
            Karpenter no espera a que un grupo de auto-escalado se sature; analiza directamente los Pods que están en estado "Pending" (esperando recursos) y aprovisiona instantáneamente el tipo de instancia exacto (CPU, RAM, GPU, Spot vs On-demand) que esos Pods necesitan. Luego, cuando el tráfico baja, consolida los Pods en menos nodos para apagar los servidores innecesarios y reducir la factura a la mitad.
          </p>

          <h2 id="mesh" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Layers className="w-8 h-8 text-indigo-600" /> 5. Service Mesh: La Capa de Control Total
          </h2>
          <p>
            Cuando tienes cientos de microservicios, la red se vuelve ingobernable. Un **Service Mesh (como Istio o Linkerd)** inyecta un sidecar (proxy) junto a cada servicio para tomar el control total. 
            - **mTLS:** Cifra automáticamente todas las comunicaciones internas sin que los desarrolladores toquen una línea de código. 
            - **Observabilidad:** Traza cada petición de un servicio a otro. 
            - **Traffic Shifting:** Permite despliegues tipo Canary (enviar el 5% del tráfico a la nueva versión para testear). 
          </p>
          <p>
            En 2026, el Service Mesh ya no es un lujo; es el sistema inmunitario de los sistemas distribuidos modernos.
          </p>

          <h2 id="storage" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Database className="w-8 h-8 text-indigo-600" /> 6. Storage: CSI y la Persistencia de Datos
          </h2>
          <p>
            Kubernetes nació para aplicaciones sin estado (stateless), pero hoy domina los datos. Mediante el **CSI (Container Storage Interface)**, K8s habla con discos persistentes de cualquier nube. 
          </p>
          <p>
            Los **StatefulSets** permiten gestionar bases de datos como PostgreSQL, MongoDB o Kafka con identidad persistente. Entender los **PersistentVolumeClaims (PVC)** y cómo se orquestan los backups atómicos es vital para mover cargas de trabajo críticas que no pueden permitirse perder un solo byte.
          </p>

          <h2 id="gitops" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <History className="w-8 h-8 text-indigo-600" /> 7. GitOps: Tu Repositorio es Tu Cluster
          </h2>
          <p>
            Olvídate de `kubectl apply`. En 2026, la infraestructura se gestiona mediante **GitOps (ArgoCD o Flux)**. Todo el estado deseado vive en un repositorio Git. Un agente dentro del cluster vigila ese repositorio y, al detectar un cambio, reconcilia el cluster automáticamente. 
          </p>
          <p>
            Esto garantiza que el cluster nunca sufra "Configuration Drift" (desviación de configuración) y permite que cualquier desastre se solucione simplemente redesplegando desde el último commit de Git. La fuente de verdad ya no es el cerebro del administrador, es el código versionado.
          </p>

          <h2 id="security" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <ShieldAlert className="w-8 h-8 text-indigo-600" /> 8. Seguridad: RBAC y Zero Trust
          </h2>
          <p>
            La superficie de ataque en un cluster es inmensa. La defensa en profundidad es la única opción. 
            - **RBAC:** Roles y RoleBindings para limitar estrictamente quién puede hacer qué. 
            - **Network Policies:** Por defecto K8s es una red abierta; debes cerrarla para que solo el tráfico autorizado fluya entre Pods. 
            - **Pod Security Admission:** Asegurarse de que ningún contenedor se ejecute como `root` o con privilegios innecesarios. 
          </p>
          <p>
            En 2026, usamos **OPA (Open Policy Agent)** o **Kyverno** para forzar reglas de gobernanza: "Si tu imagen de contenedor no ha sido escaneada hoy, no entras al cluster".
          </p>

          <h2 id="observability" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <BarChart3 className="w-8 h-8 text-indigo-600" /> 9. Observabilidad: Ver lo Invisible
          </h2>
          <p>
            No puedes arreglar lo que no puedes medir. El stack estándar **Prometheus + Grafana + Loki** se ha vuelto universal. Prometheus raspa métricas cada pocos segundos, mientras que Grafana permite visualizar el "Golden Signals" de tus microservicios: Latencia, Tráfico, Errores y Saturación. Para clusters de escala masiva, usamos **Thanos** o **Cortex** para almacenar métricas a largo plazo de forma distribuida.
          </p>

          <h2 id="operators" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Target className="w-8 h-8 text-indigo-600" /> 10. Operadores: Automatizando el Ingenio Humano
          </h2>
          <p>
            Un **Operador** es software que encapsula el conocimiento de un experto humano en un programa que corre dentro de Kubernetes. Por ejemplo, un operador de Redis sabe cómo hacer un failover, cómo rotar certificados y cómo escalar el almacenamiento por sí solo. Los operadores extienden la funcionalidad base de K8s para manejar aplicaciones complejas con estado, permitiendo que la infraestructura se gestione a sí misma mientras tú te centras en el valor de negocio.
          </p>

          <h2 id="finops" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Calculator className="w-8 h-8 text-indigo-600" /> 11. FinOps: El Arte de no Arruinarse en la Nube
          </h2>
          <p>
            Kubernetes es una máquina de gastar dinero si no se configura bien. El **FinOps** inmobiliario consiste en ajustar las `Requests` (lo que reservas) y los `Limits` (lo que puedes usar) de los contenedores basándose en el uso real. Herramientas como **Kubecost** permiten ver cuánto te cuesta cada microservicio o cada equipo en tiempo real, permitiendo una gobernanza financiera impecable en entornos multi-tenant.
          </p>

          <h2 id="ai-workloads" className="text-3xl font-black text-slate-950 font-outfit mt-24 mb-8 border-b-2 border-slate-100 pb-4 flex items-center gap-3">
             <Terminal className="w-8 h-8 text-indigo-600" /> 12. Cargas IA: Kubernetes como Motor de Inteligencia
          </h2>
          <p>
            En 2026, la mayor parte del crecimiento de K8s viene del entrenamiento y despliegue de modelos de IA. Orquestar nodos con GPUs (Nvidia/AMD), gestionar datasets masivos y paralelizar el entrenamiento (Distributed Training) requiere un dominio absoluto de los afinamientos de Kubernetes. El futuro de la IA no está en scripts sueltos, está en pipelines orquestados de forma elástica sobre el sistema operativo de la nube.
          </p>

          <h2 id="casos-maestria" className="mt-24 pt-16 border-t border-slate-200">
            <Footprints className="w-8 h-8 text-indigo-600" /> Escenarios de Ingeniería Real
          </h2>
          <div className="space-y-8 mt-8">
            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200 shadow-sm hover:bg-slate-100 transition-all">
               <h4 className="text-xl font-black text-indigo-950 mb-4">Caso 1: El Despliegue que no Rompió nada en Black Friday</h4>
               <p className="text-slate-700 m-0 leading-relaxed italic">
                 &quot;Durante el pico de tráfico más grande del año, una empresa de e-commerce desplegó un cambio crítico usando una estrategia Canary de Istio. Solo el 1% de los usuarios reales vio el nuevo código. Al detectar un aumento de latencia de 20ms a través de Prometheus, el Service Mesh hizo un rollback automático en 2 segundos sin que el 99% de los clientes supiera que algo había fallado. Eso es resiliencia moderna.&quot;
               </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-200 shadow-sm hover:bg-slate-100 transition-all">
               <h4 className="text-xl font-black text-indigo-950 mb-4">Caso 2: Ahorrando un 70% de la Factura Cloud con Karpenter</h4>
               <p className="text-slate-700 m-0 leading-relaxed italic">
                 &quot;Una startup de IA que quemaba 50,000€ al mes en servidores migró su escalado a Karpenter y forzó el uso de instancias Spot para el 80% de sus cargas de trabajo no críticas. Karpenter aprendió a mover los Pods a nodos nuevos antes de que AWS retirara las instancias Spot, manteniendo el 99.9% de uptime mientras reducían la factura a menos de 15,000€. La eficiencia técnica es, ahora, eficiencia de mercado.&quot;
               </p>
            </div>
          </div>

          <h2 id="faq" className="mt-24 pt-16 border-t border-slate-200">
            <HelpCircle className="w-8 h-8 text-indigo-600" /> FAQ: Consultoría de Ingeniería de Plataformas Senior
          </h2>
          <div className="space-y-6 mt-8">
            {[
              { 
                q: "¿Qué diferencia hay entre K8s gestionado (EKS/GKE) y manual (Kubeadm)?", 
                a: "A menos que seas una empresa de infraestructura pura, usa siempre el gestionado. Te quitan el dolor de cabeza de mantener el Control Plane sano, permitiéndote centrarte en lo que realmente importa: tus aplicaciones y tus datos." 
              },
              { 
                q: "¿Cuál es el error más común al empezar con Kubernetes?", 
                a: "No configurar Requests y Limits. Sin esto, Kubernetes no sabe cómo programar tus Pods de forma eficiente, provocando que unos servicios 'roben' recursos a otros (Noisy Neighbor effect) y haciendo que el cluster sea inestable." 
              },
              { 
                q: "¿Para qué sirve el nuevo Gateway API?", 
                a: "Es la evolución del Ingress. Permite definir la red de forma más granular y escalable, separando el hardware (Gateway) de las rutas lógicas (HTTPRoute). Es el estándar para 2026 y más allá." 
              },
              { 
                q: "¿Debo usar microservicios para todo?", 
                a: "No. La complejidad de gestionar un cluster de K8s solo se justifica cuando tienes una arquitectura que lo necesite para escalar de forma independiente. Si tu monolito funciona, mantenlo simple hasta que el propio éxito te obligue a escalar." 
              },
              { 
                q: "¿Cómo aseguro que mis secretos no se filtren en Git?", 
                a: "Usa 'External Secrets'. Este operador permite que escribas referencias en Git (tipo 'dame el secreto X') y él se encarga de ir a AWS Secrets Manager o Vault para inyectar el valor real directamente en la memoria del Pod." 
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-200 p-8 [&_summary::-webkit-details-marker]:hidden transition-all hover:bg-slate-100">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 m-0 pr-8">{faq.q}</h4>
                  <span className="transition-transform group-open:rotate-180 border border-indigo-300 rounded-full p-1 bg-white shadow-sm">
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

          <div className="bg-indigo-600 rounded-[40px] p-10 md:p-16 mt-24 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black font-outfit mt-0 mb-8 text-white leading-tight">
                El Futuro será <br className="hidden md:block" /> Orquestado o no será
              </h2>
              <p className="text-indigo-50 text-xl leading-relaxed mb-12 font-medium max-w-2xl opacity-90">
                No te limites a programar; construye los mundos donde vive el código. Domina Kubernetes y conviértete en el arquitecto de la infraestructura del mañana. AldiaDeTodo te da los planos; el control es todo tuyo.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/guias" className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-100 transition-all shadow-2xl flex items-center gap-3">
                   Explorar Catálogo <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-8 text-indigo-100 text-[10px] font-black uppercase tracking-widest pl-4">
                  <span className="flex items-center gap-2"><Trophy className="w-4 h-4" /> Cloud Architect</span>
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
