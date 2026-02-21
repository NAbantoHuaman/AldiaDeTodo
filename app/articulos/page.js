import { Suspense } from 'react';
import ArticleListClient from '@/components/ArticleListClient';
import prisma from '@/lib/prisma';

export const metadata = {
  title: "Todos los Artículos | AldiaDeTodo",
  description: "Explora nuestra colección completa de sabiduría práctica para la vida moderna. Artículos sobre crecimiento personal, salud mental, productividad y más.",
};

export default async function ArticleListPage() {
  // Fetch from DB
  const rawArticles = await prisma.article.findMany({
    where: { isNews: false },
    orderBy: { createdAt: 'desc' },
    include: { category: true }
  });

  const rawCategories = await prisma.category.findMany();
  const categories = rawCategories.map(c => c.name);

  // Map to the required shape for ArticleListClient
  const allArticles = rawArticles.map(a => ({
    ...a,
    category: a.category.name,
    excerpt: a.content.replace(/<[^>]+>/g, '').substring(0, 150) + "..."
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Todos los Artículos</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">Explora nuestra colección completa de sabiduría práctica para la vida moderna.</p>
      </div>

      <Suspense fallback={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="h-64 bg-gray-100 rounded-xl animate-pulse"></div>
          ))}
        </div>
      }>
        <ArticleListClient initialArticles={allArticles} categories={categories} />
      </Suspense>
    </div>
  );
}