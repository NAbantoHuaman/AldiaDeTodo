import Link from 'next/link';
import { Clock } from 'lucide-react';

const FeaturedArticle = ({ article }) => {
  return (
    <Link href={`/articulos/${article.slug}`} className="relative block w-full h-[500px] rounded-2xl overflow-hidden cursor-pointer group mb-12">
      <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
        <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider mb-4 rounded-sm">
          Destacado de hoy
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:underline decoration-2 underline-offset-4">
          {article.title}
        </h2>
        <p className="text-gray-200 text-lg mb-6 line-clamp-2 hidden md:block">
          {article.excerpt}
        </p>
        <div className="flex items-center space-x-4 text-white/80 text-sm">
          <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 5 min lectura</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedArticle;