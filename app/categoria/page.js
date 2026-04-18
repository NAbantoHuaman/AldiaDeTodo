import prisma from '@/lib/prisma';
import Link from 'next/link';
import { 
  Leaf, Zap, DollarSign, Brain, Heart, Laptop,
  FlaskConical, Theater, Newspaper, Landmark,
  Globe2, Trophy, Globe, Clapperboard, TrendingUp,
  FileText
} from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

export const metadata = {
  title: 'Categorías — Explora por Tema | AldiaDeTodo',
  description: 'Navega por todas nuestras categorías de artículos: crecimiento personal, finanzas, productividad, salud mental y más.',
  openGraph: {
    title: 'Categorías | AldiaDeTodo',
    description: 'Explora artículos por categoría en AldiaDeTodo.',
    url: 'https://aldiadetodo.com/categoria',
    type: 'website',
  },
  alternates: {
    canonical: '/categoria',
  },
};

// Color mapping for category cards
const CATEGORY_COLORS = {
  'Crecimiento Personal': { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', icon: <Leaf className="w-8 h-8" strokeWidth={1.5} /> },
  'Productividad': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', icon: <Zap className="w-8 h-8" strokeWidth={1.5} /> },
  'Finanzas': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', icon: <DollarSign className="w-8 h-8" strokeWidth={1.5} /> },
  'Salud Mental': { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', icon: <Brain className="w-8 h-8" strokeWidth={1.5} /> },
  'Relaciones': { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200', icon: <Heart className="w-8 h-8" strokeWidth={1.5} /> },
  'Tecnología': { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200', icon: <Laptop className="w-8 h-8" strokeWidth={1.5} /> },
  'Ciencia': { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', icon: <FlaskConical className="w-8 h-8" strokeWidth={1.5} /> },
  'Cultura': { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', icon: <Theater className="w-8 h-8" strokeWidth={1.5} /> },
  'Actualidad': { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', icon: <Newspaper className="w-8 h-8" strokeWidth={1.5} /> },
  'Política': { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200', icon: <Landmark className="w-8 h-8" strokeWidth={1.5} /> },
  'Mundo': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', icon: <Globe2 className="w-8 h-8" strokeWidth={1.5} /> },
  'Deportes': { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', icon: <Trophy className="w-8 h-8" strokeWidth={1.5} /> },
  'Internacional': { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200', icon: <Globe className="w-8 h-8" strokeWidth={1.5} /> },
  'Entretenimiento': { bg: 'bg-fuchsia-50', text: 'text-fuchsia-700', border: 'border-fuchsia-200', icon: <Clapperboard className="w-8 h-8" strokeWidth={1.5} /> },
  'Economía': { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200', icon: <TrendingUp className="w-8 h-8" strokeWidth={1.5} /> },
  'Perú': { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', icon: <Landmark className="w-8 h-8" strokeWidth={1.5} /> }
};

const DEFAULT_STYLE = { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200', icon: <FileText className="w-8 h-8" strokeWidth={1.5} /> };

function toSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
    include: {
      _count: { select: { articles: true } },
    },
    orderBy: { name: 'asc' },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Categorías
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Explora nuestros artículos organizados por tema. Encuentra exactamente lo que necesitas.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const style = CATEGORY_COLORS[cat.name] || DEFAULT_STYLE;
          const articleCount = cat._count.articles;
          
          return (
            <Link
              key={cat.id}
              href={`/categoria/${encodeURIComponent(toSlug(cat.name))}`}
              className={`group relative p-6 rounded-2xl border ${style.border} ${style.bg} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`text-current ${style.text}`}>{style.icon}</span>
                <span className={`text-xs font-bold ${style.text} bg-white/70 px-2 py-1 rounded-full`}>
                  {articleCount} artículo{articleCount !== 1 ? 's' : ''}
                </span>
              </div>
              <h2 className={`text-xl font-bold ${style.text} mb-2 group-hover:underline decoration-2 underline-offset-4`}>
                {cat.name}
              </h2>
              <div className={`flex items-center ${style.text} text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity`}>
                Explorar →
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
