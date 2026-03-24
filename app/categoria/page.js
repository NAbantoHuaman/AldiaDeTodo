import prisma from '@/lib/prisma';
import Link from 'next/link';

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
  'Crecimiento Personal': { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', icon: '🌱' },
  'Productividad': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', icon: '⚡' },
  'Finanzas': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', icon: '💰' },
  'Salud Mental': { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', icon: '🧠' },
  'Relaciones': { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200', icon: '❤️' },
  'Tecnología': { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200', icon: '💻' },
  'Ciencia': { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', icon: '🔬' },
  'Cultura': { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', icon: '🎭' },
  'Actualidad': { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', icon: '📰' },
  'Política': { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200', icon: '🏛️' },
  'Mundo': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', icon: '🌍' },
  'Deportes': { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', icon: '⚽' },
  'Internacional': { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200', icon: '🌐' },
  'Entretenimiento': { bg: 'bg-fuchsia-50', text: 'text-fuchsia-700', border: 'border-fuchsia-200', icon: '🎬' },
  'Economía': { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200', icon: '📊' },
};

const DEFAULT_STYLE = { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200', icon: '📄' };

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
                <span className="text-3xl">{style.icon}</span>
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
