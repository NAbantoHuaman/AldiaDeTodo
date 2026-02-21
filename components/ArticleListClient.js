'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ArticleCard from '@/components/ArticleCard';

// Helper to convert "19 Feb 2026" to "2026-02-19" for comparison with native date input
function toIsoDate(dateStr) {
  if (!dateStr) return "";
  const parts = dateStr.split(' ');
  if (parts.length !== 3) return "";
  const day = parts[0].padStart(2, '0');
  const monthNames = { 'Ene': '01', 'Feb': '02', 'Mar': '03', 'Abr': '04', 'May': '05', 'Jun': '06', 'Jul': '07', 'Ago': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dic': '12' };
  const month = monthNames[parts[1]] || '01';
  const year = parts[2];
  return `${year}-${month}-${day}`;
}

export default function ArticleListClient({ initialArticles, categories }) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('categoria');

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "Todos");
  const [selectedDate, setSelectedDate] = useState(""); // empty string means no date filter
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      setVisibleCount(9);
    }
  }, [categoryParam]);

  // Filter by category
  let filteredArticles = selectedCategory === "Todos"
    ? initialArticles
    : initialArticles.filter(a => a.category === selectedCategory);

  // Filter by date
  if (selectedDate) {
    filteredArticles = filteredArticles.filter(a => toIsoDate(a.date) === selectedDate);
  }

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setVisibleCount(9);
    const url = cat === "Todos" ? "/articulos" : `/articulos?categoria=${encodeURIComponent(cat)}`;
    window.history.replaceState(null, "", url);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setVisibleCount(9);
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-6 mb-12">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => handleCategoryChange("Todos")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === "Todos"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                : "bg-gray-100/80 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Todos
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                  : "bg-gray-100/80 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Date filter calendar */}
        <div className="flex items-center gap-3 bg-gray-50/80 border border-gray-200/60 rounded-full px-5 py-2 hover:bg-white hover:shadow-sm focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100 focus-within:border-indigo-300 transition-all">
          <label htmlFor="date-filter" className="text-sm font-semibold text-indigo-900/80 flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Filtrar fecha:
          </label>
          <div className="relative flex items-center">
            <input
              id="date-filter"
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="text-sm font-medium text-gray-700 bg-transparent border-none focus:ring-0 p-0 cursor-pointer outline-none [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-60 hover:[&::-webkit-calendar-picker-indicator]:opacity-100 transition-opacity"
            />
          </div>
          {selectedDate && (
            <>
              <div className="h-4 w-[1px] bg-gray-300 mx-1"></div>
              <button
                onClick={() => { setSelectedDate(""); setVisibleCount(9); }}
                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                title="Borrar filtro"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-400 text-center mb-6">
        {filteredArticles.length} artículo{filteredArticles.length !== 1 ? 's' : ''} encontrado{filteredArticles.length !== 1 ? 's' : ''}
      </p>

      {/* Results */}
      {filteredArticles.length === 0 ? (
        <p className="text-center text-gray-500 py-12">No hay artículos con estos filtros. Prueba cambiando la categoría o la fecha.</p>
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
