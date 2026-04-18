import Link from 'next/link';
import Image from 'next/image';
import { 
  BookOpen, TrendingUp, Brain, Heart, Sparkles, ArrowRight, Apple, Code, MessageSquare, Rocket, Terminal, Zap, Shield,
  Database, Boxes, Atom, Infinity, Ship, Fingerprint, Gamepad2, Binary, Activity, Anchor, Utensils, Landmark, MessageCircle, Settings, ShieldCheck, Layers, Globe, Target, Server, Code2, Cloud
} from 'lucide-react';

export const metadata = {
  title: "Guías Originales — AldiaDeTodo",
  description: "Explora 30 guías completas sobre tecnología, programación, finanzas y bienestar. Contenido original y profundo diseñado para 2026.",
  openGraph: {
    title: "Guías Originales — AldiaDeTodo",
    description: "Artículos educativos masivos sobre desarrollo, arquitectura, salud y crecimiento personal.",
    url: "https://aldiadetodo.com/guias",
    type: "website",
  },
  alternates: {
    canonical: '/guias',
  },
};

const guides = [
  {
    title: "Python 2026: Guía Moderna",
    slug: "python-moderno",
    excerpt: "Domina Python en la era de la IA, con tipos estáticos y agentes autónomos.",
    icon: Terminal,
    color: "green",
    image: "/images/guias/python.png",
    readTime: "18 min",
    tags: ["IA", "Python", "Back-end"],
  },
  {
    title: "JavaScript ES2026+: Ecosistema",
    slug: "javascript-es2026",
    excerpt: "Nuevos operadores, Temporal API y el futuro de la web reactiva.",
    icon: Zap,
    color: "amber",
    image: "/images/guias/javascript.png",
    readTime: "15 min",
    tags: ["JavaScript", "Web", "Next.js"],
  },
  {
    title: "Seguridad para Desarrolladores",
    slug: "seguridad-desarrolladores",
    excerpt: "Protege tus apps contra inyecciones de prompt y ataques modernos.",
    icon: Shield,
    color: "blue",
    image: "/images/guias/seguridad.png",
    readTime: "20 min",
    tags: ["Seguridad", "DevSecOps", "Cloud"],
  },
  {
    title: "Alimentación Saludable: Guía Práctica",
    slug: "alimentacion-saludable",
    excerpt: "Aprende a comer de forma saludable y sostenible. Sin dietas de moda.",
    icon: Apple,
    color: "emerald",
    image: "/images/guias/alimentacion.png",
    readTime: "14 min",
    tags: ["Salud", "Nutrición", "Bienestar"],
  },
  {
    title: "Aprender a Programar desde Cero",
    slug: "aprender-a-programar",
    excerpt: "Todo lo que necesitas saber para empezar en el mundo del desarrollo.",
    icon: Code,
    color: "violet",
    image: "/images/guias/programar.png",
    readTime: "15 min",
    tags: ["Tecnología", "Programación", "Educación"],
  },
  {
    title: "Comunicación Efectiva",
    slug: "comunicacion-efectiva",
    excerpt: "Mejora tus habilidades sociales y aprende a escuchar activamente.",
    icon: MessageSquare,
    color: "indigo",
    image: "/images/guias/comunicacion.png",
    readTime: "13 min",
    tags: ["Habilidades Blandas", "Liderazgo"],
  },
  {
    title: "Emprendimiento Digital",
    slug: "emprendimiento-digital",
    excerpt: "Inicia tu negocio online en 2026. Del concepto a la escalabilidad.",
    icon: Rocket,
    color: "orange",
    image: "/images/guias/emprendimiento.png",
    readTime: "16 min",
    tags: ["Negocios", "Marketing Digital"],
  },
  {
    title: "Cómo Ahorrar Dinero",
    slug: "como-ahorrar-dinero",
    excerpt: "Estrategias probadas para construir hábitos financieros saludables.",
    icon: TrendingUp,
    color: "teal",
    image: "/images/guias/ahorro.png",
    readTime: "12 min",
    tags: ["Finanzas", "Ahorro"],
  },
  {
    title: "10 Hábitos Productivos",
    slug: "habitos-productivos",
    excerpt: "Rutinas y sistemas de las personas más exitosas del mundo.",
    icon: Sparkles,
    color: "slate",
    image: "/images/guias/habitos.png",
    readTime: "10 min",
    tags: ["Productividad", "Hábitos"],
  },
  {
    title: "Guía de Bienestar Mental",
    slug: "bienestar-mental",
    excerpt: "Técnicas basadas en psicología para manejar el estrés diario.",
    icon: Heart,
    color: "rose",
    image: "/images/guias/bienestar.png",
    readTime: "11 min",
    tags: ["Salud Mental", "Mindfulness"],
  },
  {
    title: "Inteligencia Emocional",
    slug: "inteligencia-emocional",
    excerpt: "Reconoce y gestiona tus emociones y las de los demás.",
    icon: Brain,
    color: "violet",
    image: "/images/guias/inteligencia.png",
    readTime: "13 min",
    tags: ["Crecimiento", "Emociones"],
  },
  // Batch 1: Fundamentos y Lenguajes
  {
    title: "TypeScript Maestro",
    slug: "typescript-maestro",
    excerpt: "Domina el tipado estático y construye aplicaciones empresariales robustas.",
    icon: ShieldCheck,
    color: "blue",
    image: "/images/guias/typescript.png",
    readTime: "22 min",
    tags: ["TypeScript", "Web", "Clean Code"],
  },
  {
    title: "Rust para Sistemas",
    slug: "rust-seguridad",
    excerpt: "El lenguaje que redefine el rendimiento y la seguridad de memoria.",
    icon: Settings,
    color: "orange",
    image: "/images/guias/rust.png",
    readTime: "25 min",
    tags: ["Rust", "Sistemas", "Backend"],
  },
  {
    title: "Microservicios con Go",
    slug: "go-microservicios",
    excerpt: "Arquitecturas distribuidas de alto rendimiento con el lenguaje de las nubes.",
    icon: Globe,
    color: "teal",
    image: "/images/guias/go.png",
    readTime: "20 min",
    tags: ["Go", "Cloud", "Microservicios"],
  },
  {
    title: "SQL Moderno Avanzado",
    slug: "sql-avanzado",
    excerpt: "De consultas básicas a optimización de PostgreSQL y arquitecturas escalables.",
    icon: Database,
    color: "blue",
    image: "/images/guias/sql.png",
    readTime: "18 min",
    tags: ["SQL", "Datos", "PostgreSQL"],
  },
  {
    title: "Bases de Datos NoSQL",
    slug: "arquitectura-nosql",
    excerpt: "Cuándo y cómo utilizar MongoDB, Redis y Cassandra en tus proyectos.",
    icon: Boxes,
    color: "emerald",
    image: "/images/guias/nosql.png",
    readTime: "17 min",
    tags: ["NoSQL", "Performance", "Big Data"],
  },
  // Batch 2: Arquitectura y Web Moderna
  {
    title: "React 19 & RSC",
    slug: "react-19-rsc",
    excerpt: "Server Components, Actions y el futuro del desarrollo front-end.",
    icon: Atom,
    color: "indigo",
    image: "/images/guias/react.png",
    readTime: "24 min",
    tags: ["React", "Front-end", "Performance"],
  },
  {
    title: "DevSecOps & CI/CD",
    slug: "devsecops-pipeline",
    excerpt: "Automatización y seguridad integrada en el ciclo de vida del software.",
    icon: Infinity,
    color: "slate",
    image: "/images/guias/devsecops.png",
    readTime: "21 min",
    tags: ["DevOps", "Seguridad", "Automation"],
  },
  {
    title: "IA Generativa para Devs",
    slug: "ia-generativa-llm",
    excerpt: "Integrando Large Language Models y agentes autónomos en tus aplicaciones.",
    icon: Sparkles,
    color: "violet",
    image: "/images/guias/ia.png",
    readTime: "23 min",
    tags: ["IA", "LLM", "Innovación"],
  },
  {
    title: "Arquitectura de Software",
    slug: "patrones-diseno",
    excerpt: "Patrones de diseño modernos, principios SOLID y código limpio.",
    icon: Layers,
    color: "blue",
    image: "/images/guias/arquitectura.png",
    readTime: "22 min",
    tags: ["Diseño", "Arquitectura", "SOLID"],
  },
  {
    title: "Kubernetes & Docker",
    slug: "kubernetes-escala",
    excerpt: "Orquestación de contenedores y despliegues masivos en la nube.",
    icon: Ship,
    color: "indigo",
    image: "/images/guias/kubernetes.png",
    readTime: "26 min",
    tags: ["Cloud", "K8s", "Docker"],
  },
  // Batch 3: Especialidades y Móvil
  {
    title: "Flutter Multiplataforma",
    slug: "flutter-pro",
    excerpt: "Crea aplicaciones nativas de alto rendimiento desde un solo código.",
    icon: Rocket,
    color: "blue",
    image: "/images/guias/flutter.png",
    readTime: "19 min",
    tags: ["Móvil", "Flutter", "Dart"],
  },
  {
    title: "Ethical Hacking",
    slug: "hacking-etico",
    excerpt: "Fundamentos de pentesting y defensa activa en redes modernas.",
    icon: Fingerprint,
    color: "slate",
    image: "/images/guias/hacking.png",
    readTime: "25 min",
    tags: ["Ciberseguridad", "Hacking", "Linux"],
  },
  {
    title: "Gamedev con Unity/Godot",
    slug: "gamedev-unity-godot",
    excerpt: "El arte de crear videojuegos: del motor gráfico al lanzamiento comercial.",
    icon: Gamepad2,
    color: "violet",
    image: "/images/guias/gamedev.png",
    readTime: "28 min",
    tags: ["Juegos", "C#", "Godot"],
  },
  {
    title: "Machine Learning 101",
    slug: "machine-learning-python",
    excerpt: "Entrena modelos de predicción y clasificación con Scikit-Learn y PyTorch.",
    icon: Binary,
    color: "orange",
    image: "/images/guias/ml.png",
    readTime: "24 min",
    tags: ["Python", "CIencia de Datos", "ML"],
  },
  {
    title: "Biohacking & Longevidad",
    slug: "biohacking-longevidad",
    excerpt: "Estrategias biológicas para optimizar tu salud y extender tu vida útil.",
    icon: Activity,
    color: "emerald",
    image: "/images/guias/biohacking.png",
    readTime: "20 min",
    tags: ["Salud", "Biohacking", "Longevidad"],
  },
  // Batch 4: Humanidades y Finanzas
  {
    title: "Estoicismo Práctico",
    slug: "estoicismo-practico",
    excerpt: "Resiliencia emocional y enfoque profundo en la era de la distracción.",
    icon: Anchor,
    color: "slate",
    image: "/images/guias/estoicismo.png",
    readTime: "16 min",
    tags: ["Filosofía", "Enfoque", "Paz"],
  },
  {
    title: "Cocina y Nutrición Batch",
    slug: "cocina-nutricion-batch",
    excerpt: "Aprende a cocinar para toda la semana en solo 3 horas sin sacrificar salud.",
    icon: Utensils,
    color: "orange",
    image: "/images/guias/cocina.png",
    readTime: "15 min",
    tags: ["Cocina", "Salud", "Eficiencia"],
  },
  {
    title: "Inversión Inmobiliaria",
    slug: "inversion-inmobiliaria",
    excerpt: "Estrategias para construir patrimonio real a través del mercado de bienes raíces.",
    icon: Landmark,
    color: "emerald",
    image: "/images/guias/inmobiliaria.png",
    readTime: "19 min",
    tags: ["Finanzas", "Patrimonio", "Inversión"],
  },
  {
    title: "Narrativa & Storytelling",
    slug: "narrativa-storytelling",
    excerpt: "El arte de cautivar audiencias y comunicar ideas con impacto masivo.",
    icon: MessageCircle,
    color: "rose",
    image: "/images/guias/oratoria.png",
    readTime: "17 min",
    tags: ["Comunicación", "Liderazgo", "Storytelling"],
  },
];

const colorClasses = {
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    icon: "bg-emerald-100 text-emerald-600",
    tag: "bg-emerald-100 text-emerald-700",
    hover: "group-hover:bg-emerald-100",
    accent: "bg-emerald-500",
  },
  indigo: {
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    icon: "bg-indigo-100 text-indigo-600",
    tag: "bg-indigo-100 text-indigo-700",
    hover: "group-hover:bg-indigo-100",
    accent: "bg-indigo-500",
  },
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-200",
    icon: "bg-rose-100 text-rose-600",
    tag: "bg-rose-100 text-rose-700",
    hover: "group-hover:bg-rose-100",
    accent: "bg-rose-500",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    icon: "bg-amber-100 text-amber-600",
    tag: "bg-amber-100 text-amber-700",
    hover: "group-hover:bg-amber-100",
    accent: "bg-amber-500",
  },
  green: {
    bg: "bg-green-50",
    border: "border-green-200",
    icon: "bg-green-100 text-green-600",
    tag: "bg-green-100 text-green-700",
    hover: "group-hover:bg-green-100",
    accent: "bg-green-500",
  },
  violet: {
    bg: "bg-violet-50",
    border: "border-violet-200",
    icon: "bg-violet-100 text-violet-600",
    tag: "bg-violet-100 text-violet-700",
    hover: "group-hover:bg-violet-100",
    accent: "bg-violet-500",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: "bg-blue-100 text-blue-600",
    tag: "bg-blue-100 text-blue-700",
    hover: "group-hover:bg-blue-100",
    accent: "bg-blue-500",
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    icon: "bg-orange-100 text-orange-600",
    tag: "bg-orange-100 text-orange-700",
    hover: "group-hover:bg-orange-100",
    accent: "bg-orange-500",
  },
  teal: {
    bg: "bg-teal-50",
    border: "border-teal-200",
    icon: "bg-teal-100 text-teal-600",
    tag: "bg-teal-100 text-teal-700",
    hover: "group-hover:bg-teal-100",
    accent: "bg-teal-500",
  },
  slate: {
    bg: "bg-slate-50",
    border: "border-slate-200",
    icon: "bg-slate-100 text-slate-600",
    tag: "bg-slate-100 text-slate-700",
    hover: "group-hover:bg-slate-100",
    accent: "bg-slate-500",
  },
};

export default function GuiasIndexPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Guías Originales — AldiaDeTodo',
    description: 'Colección de guías educativas masivas sobre tecnología, finanzas, bienestar y más.',
    url: 'https://aldiadetodo.com/guias',
    publisher: {
      '@type': 'Organization',
      name: 'AldiaDeTodo',
    },
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-24 bg-slate-950 overflow-hidden text-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950"></div>
        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-indigo-600 rounded-[32px] flex items-center justify-center shadow-2xl shadow-indigo-500/20 rotate-3">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 font-outfit">
            Centro de<span className="text-indigo-500 text-glow"> Conocimiento</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Domina el futuro con nuestras guías expertas. De programación avanzada a bienestar integral.
          </p>
        </div>
      </section>

      {/* Full Width Grid */}
      <section className="container mx-auto px-4 py-24 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {guides.map((guide) => {
            const Icon = guide.icon;
            const colors = colorClasses[guide.color];
            return (
              <Link
                key={guide.slug}
                href={`/guias/${guide.slug}`}
                className="group flex flex-col bg-white rounded-[40px] overflow-hidden border border-slate-100 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-3"
              >
                {/* Image / Header */}
                <div className="h-64 relative overflow-hidden">
                  <Image 
                    src={guide.image}
                    alt={guide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute top-6 left-6">
                    <div className={`w-12 h-12 rounded-2xl ${colors.icon} backdrop-blur-md flex items-center justify-center shadow-xl`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex gap-2 flex-wrap">
                      {guide.tags.map(tag => (
                        <span key={tag} className="bg-white/10 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-white/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                   <div className="flex items-center gap-3 mb-4">
                      <span className={`w-2 h-2 rounded-full ${colors.accent}`}></span>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                         {guide.readTime} LECTURA
                      </span>
                   </div>

                   <h2 className="text-2xl font-black text-slate-900 leading-tight mb-4 font-outfit group-hover:text-indigo-600 transition-colors">
                      {guide.title}
                   </h2>

                   <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                      {guide.excerpt}
                   </p>

                   <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between group-hover:border-indigo-50 transition-colors">
                      <span className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                         Explorar Guía <ArrowRight className="w-4 h-4" />
                      </span>
                   </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-20 max-w-4xl">
        <div className="bg-slate-950 rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500"></div>
          <h2 className="text-2xl md:text-3xl font-black font-outfit mb-4">¿Quieres más contenido como este?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Publicamos nuevas guías y artículos originales cada semana. Suscríbete a nuestro newsletter para no perderte nada.
          </p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-400 hover:text-white transition-all shadow-xl">
            Suscribirme <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
