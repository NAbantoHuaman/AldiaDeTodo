import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

const ArticleCard = ({ article, variant = "default" }) => {
  if (variant === "compact") {
    return (
      <Link href={`/articulos/${article.slug}`} className="group cursor-pointer flex gap-4 items-start mb-6">
        <div className="flex-shrink-0 w-20 h-20 rounded overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div>
          <span className="text-xs font-bold text-indigo-600 uppercase mb-1 block">{article.category}</span>
          <h4 className="text-sm font-bold text-gray-900 leading-tight group-hover:text-indigo-600 line-clamp-2">{article.title}</h4>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/articulos/${article.slug}`} className="group cursor-pointer flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="h-48 overflow-hidden relative">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-gray-900">
          {article.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
          <Calendar className="w-3 h-3" />
          <span>{article.date}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-indigo-600 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
          {article.excerpt}
        </p>
        <div className="flex items-center text-indigo-600 text-sm font-semibold mt-auto group-hover:translate-x-1 transition-transform">
          Leer más <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;