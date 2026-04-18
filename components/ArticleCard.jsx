"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Bookmark, Share2 } from 'lucide-react';
import ArticleShareButton from './ArticleShareButton';

const ArticleCard = ({ article, variant = "default", priority = false }) => {
  if (variant === "compact") {
    return (
      <Link href={`/articulos/${article.slug}`} className="group flex gap-5 items-center p-3 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
        <div className="flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden relative shadow-sm">
          {article.image ? (
            <Image
              src={article.image}
              alt={article.title}
              fill
              unoptimized
              sizes="96px"
              priority={priority}
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-slate-900 flex items-center justify-center">
              <span className="text-white/80 text-2xl font-black font-outfit">{article.title?.[0]}</span>
            </div>
          )}
        </div>
        <div className="flex-1">
          <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-1.5 block">{article.category}</span>
          <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-indigo-600 line-clamp-2 transition-colors font-outfit">
            {article.title}
          </h4>
        </div>
      </Link>
    );
  }

  if (variant === "horizontal") {
    return (
      <Link href={`/articulos/${article.slug}`} className="group flex flex-col md:flex-row gap-8 items-stretch bg-white p-6 rounded-[32px] hover:shadow-2xl hover:shadow-slate-200/50 transition-all border border-slate-100 mb-8">
        <div className="w-full md:w-2/5 aspect-[4/3] rounded-[24px] overflow-hidden relative shadow-inner">
           {article.image ? (
          <Image
             src={article.image}
             alt={article.title}
             fill
             unoptimized
             sizes="(max-width: 768px) 100vw, 40vw"
             priority={priority}
             className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
           />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-slate-900 flex items-center justify-center">
              <span className="text-white/20 text-8xl font-black font-outfit">{article.category?.[0]}</span>
            </div>
          )}
           <div className="absolute top-4 left-4">
              <span className="bg-slate-950 text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">
                {article.category}
              </span>
           </div>
        </div>
        <div className="w-full md:w-3/5 flex flex-col justify-between py-2">
            <div>
               <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                 <Calendar className="w-3.5 h-3.5" />
                 <span>{article.date}</span>
               </div>
               <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors font-outfit">
                 {article.title}
               </h3>
               <p className="text-slate-500 text-sm md:text-base line-clamp-3 leading-relaxed font-medium">
                 {article.excerpt}
               </p>
            </div>
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-50">
                <div className="flex items-center gap-2 text-indigo-600 text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                   Leer Artículo <ArrowRight className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2">
                   <ArticleShareButton url={`https://aldiadetodo.com/articulos/${article.slug}`} title={article.title} text={article.excerpt} />
                </div>
            </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/articulos/${article.slug}`} className="group flex flex-col h-full bg-white rounded-[40px] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/60 transition-all hover:-translate-y-2">
      <div className="h-64 overflow-hidden relative shadow-inner">
        {article.image ? (
          <Image
            src={article.image}
            alt={article.title}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-1000 ease-out">
            <span className="text-white/10 text-9xl font-black font-outfit">{article.category?.[0]}</span>
          </div>
        )}
        <div className="absolute top-5 left-5">
            <span className="bg-slate-950 text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">
              {article.category}
            </span>
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
          <Calendar className="w-3.5 h-3.5" />
          <span>{article.date}</span>
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-4 leading-snug group-hover:text-indigo-600 transition-colors font-outfit">
          {article.title}
        </h3>
        <p className="text-slate-500 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed font-medium">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between border-t border-slate-50 pt-6 mt-auto">
          <div className="flex items-center gap-2 text-indigo-600 text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all">
            Ver más <ArrowRight className="w-4 h-4" />
          </div>
          <ArticleShareButton url={`https://aldiadetodo.com/articulos/${article.slug}`} title={article.title} text={article.excerpt} />
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
;