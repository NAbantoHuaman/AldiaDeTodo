'use client';

import { useState } from 'react';
import { ARTICLES } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';

export default function ArticleListPage() {
  const [visibleCount, setVisibleCount] = useState(9); // Show 9 initially

  // Show all static articles
  const filteredArticles = ARTICLES;

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Todos los Artículos</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">Explora nuestra colección completa de sabiduría práctica para la vida moderna.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button 
            onClick={loadMore}
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium transition"
          >
            Cargar más artículos
          </button>
        </div>
      )}
    </div>
  );
}