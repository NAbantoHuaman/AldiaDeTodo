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

import { guidesData } from '@/lib/guidesData';

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
          {guidesData.map((guide) => {
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
