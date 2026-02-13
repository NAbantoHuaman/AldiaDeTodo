'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ARTICLES, CATEGORIES } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';

function ArticleListContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('categoria');

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "Todos");
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      setVisibleCount(9);
    }
  }, [categoryParam]);

  const filteredArticles = selectedCategory === "Todos"
    ? ARTICLES
    : ARTICLES.filter(a => a.category === selectedCategory);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setVisibleCount(9);
    const url = cat === "Todos" ? "/articulos" : `/articulos?categoria=${encodeURIComponent(cat)}`;
    window.history.replaceState(null, "", url);
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          onClick={() => handleCategoryChange("Todos")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === "Todos"
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Todos
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results */}
      {filteredArticles.length === 0 ? (
        <p className="text-center text-gray-500 py-12">No hay artículos en esta categoría todavía.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}

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
    </>
  );
}

export default function ArticleListPage() {
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
        <ArticleListContent />
      </Suspense>
    </div>
  );
}