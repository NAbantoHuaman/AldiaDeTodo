import prisma from '@/lib/prisma';
import ArticleCard from '@/components/ArticleCard';
import AdsBanner from '@/components/AdsBanner';
import Link from 'next/link';
import { parseSpanishDate } from '@/lib/dateUtils';

// Generate category slug from name
function toSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

// Reverse: slug → search pattern
function fromSlug(slug) {
  return decodeURIComponent(slug).replace(/-/g, ' ');
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const searchName = fromSlug(slug);

  const category = await prisma.category.findFirst({
    where: { name: { contains: searchName, mode: 'insensitive' } },
  });

  const name = category?.name || searchName;

  return {
    title: `${name} — Artículos y Guías | AldiaDeTodo`,
    description: `Explora todos nuestros artículos sobre ${name}. Consejos prácticos, guías y reflexiones para mejorar tu vida.`,
    openGraph: {
      title: `${name} | AldiaDeTodo`,
      description: `Artículos sobre ${name} — tu fuente de inspiración diaria.`,
      url: `https://aldiadetodo.com/categoria/${slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `/categoria/${slug}`,
    },
  };
}

export const dynamicParams = true;
export const revalidate = 60;

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const searchName = fromSlug(slug);

  // Find category (case-insensitive match)
  const category = await prisma.category.findFirst({
    where: { name: { contains: searchName, mode: 'insensitive' } },
  });

  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Categoría no encontrada</h2>
        <p className="text-gray-600 mb-6">La categoría &quot;{searchName}&quot; no existe.</p>
        <Link href="/categoria" className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Ver todas las categorías
        </Link>
      </div>
    );
  }

  const articles = await prisma.article.findMany({
    where: { categoryId: category.id, isNews: false },
    include: { category: true },
  });

  const sortedArticles = articles
    .sort((a, b) => parseSpanishDate(b.date) - parseSpanishDate(a.date))
    .map((a) => ({
      ...a,
      category: a.category.name,
      excerpt: a.content.replace(/<[^>]+>/g, '').substring(0, 150) + '...',
    }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} — AldiaDeTodo`,
    description: `Artículos sobre ${category.name}`,
    url: `https://aldiadetodo.com/categoria/${slug}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'AldiaDeTodo',
      url: 'https://aldiadetodo.com',
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase tracking-widest mb-4">
          <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
          Categoría
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {category.name}
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          {sortedArticles.length} artículo{sortedArticles.length !== 1 ? 's' : ''} disponible{sortedArticles.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Articles Grid */}
      {sortedArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedArticles.map((article, index) => (
            <div key={article.id}>
              <ArticleCard article={article} />
              {/* Insert ad after every 6th card */}
              {(index + 1) % 6 === 0 && (
                <div className="col-span-full mt-8 mb-4">
                  <AdsBanner slot={`cat-${slug}-${index}`} format="horizontal" />
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg mb-6">Aún no hay artículos en esta categoría.</p>
          <Link href="/articulos" className="text-indigo-600 hover:text-indigo-800 font-medium">
            Explorar todos los artículos →
          </Link>
        </div>
      )}

      {/* Bottom Ad */}
      <div className="mt-16">
        <AdsBanner slot={`cat-${slug}-footer`} format="horizontal" />
      </div>

      {/* Back link */}
      <div className="mt-8 text-center">
        <Link href="/categoria" className="text-sm text-gray-500 hover:text-indigo-600 transition">
          ← Ver todas las categorías
        </Link>
      </div>
    </div>
  );
}
