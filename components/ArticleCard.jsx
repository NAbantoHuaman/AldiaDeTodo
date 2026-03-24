import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Share2 } from 'lucide-react';
import ArticleShareButton from './ArticleShareButton';

const ArticleCard = ({ article, variant = "default" }) => {
  if (variant === "compact") {
    return (
      <Link href={`/articulos/${article.slug}`} className="group cursor-pointer flex gap-4 items-start mb-6">
        <div className="flex-shrink-0 w-20 h-20 rounded overflow-hidden relative">
          <Image
            src={article.image}
            alt={article.title}
            fill
            unoptimized
            sizes="80px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div>
          <span className="text-xs font-bold text-indigo-600 uppercase mb-1 block">{article.category}</span>
          <h4 className="text-sm font-bold text-gray-900 leading-tight group-hover:text-indigo-600 line-clamp-2 pr-6 relative">
            {article.title}
          </h4>
          <div className="mt-2 text-right">
             <ArticleShareButton url={`https://aldiadetodo.com/articulos/${article.slug}`} title={article.title} text={article.excerpt} />
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "horizontal") {
    return (
      <Link href={`/articulos/${article.slug}`} className="group cursor-pointer flex flex-col md:flex-row gap-6 items-start bg-white p-4 rounded-xl hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
        <div className="w-full md:w-1/3 aspect-video md:aspect-[4/3] rounded-lg overflow-hidden relative">
           <Image
             src={article.image}
             alt={article.title}
             fill
             unoptimized
             sizes="(max-width: 768px) 100vw, 33vw"
             className="object-cover group-hover:scale-105 transition-transform duration-500"
           />
           <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm z-10">{article.category}</span>
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-between h-full">
            <div>
               <div className="flex items-center text-xs text-gray-500 mb-2 space-x-2">
                 <Calendar className="w-3 h-3" />
                 <span>{article.date}</span>
               </div>
               <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-indigo-600 transition-colors">
                 {article.title}
               </h3>
               <p className="text-gray-600 text-sm line-clamp-2 md:line-clamp-3 mb-4">
                 {article.excerpt}
               </p>
            </div>
            <div className="flex items-center justify-between border-t border-gray-50 pt-3 mt-2">
                <div className="flex items-center text-indigo-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                   Leer completo <ArrowRight className="w-4 h-4 ml-1" />
                </div>
                <ArticleShareButton url={`https://aldiadetodo.com/articulos/${article.slug}`} title={article.title} text={article.excerpt} />
            </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/articulos/${article.slug}`} className="group cursor-pointer flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="h-48 overflow-hidden relative">
        <Image
          src={article.image}
          alt={article.title}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-gray-900 z-10">
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
        <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
          <div className="flex items-center text-indigo-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
            Leer más <ArrowRight className="w-4 h-4 ml-1" />
          </div>
          <ArticleShareButton url={`https://aldiadetodo.com/articulos/${article.slug}`} title={article.title} text={article.excerpt} />
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;