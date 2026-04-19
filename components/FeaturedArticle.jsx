import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';
import { getArticleBaseUrl } from '@/lib/articleHelpers';

const FeaturedArticle = ({ article }) => {
  const baseUrl = getArticleBaseUrl(article);

  return (
    <Link href={`/${baseUrl}/${article.slug}`} className="relative block w-full h-[600px] rounded-[48px] overflow-hidden cursor-pointer group shadow-2xl shadow-slate-900/10">
      {article.image ? (
        <Image
          src={article.image}
          alt={article.title}
          fill
          unoptimized
          sizes="100vw"
          priority
          className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-800 to-slate-950 group-hover:scale-110 transition-transform duration-[2000ms] ease-out">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI2ZmZiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNhKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
        </div>
      )}
      
      {/* Immersive Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10"></div>
      
      {/* Content Container */}
      <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-4xl z-20">
        <div className="flex items-center gap-3 mb-6 animate-in fade-in slide-in-from-left-4 duration-500">
           <span className="bg-indigo-600 w-12 h-1 rounded-full"></span>
           <span className="text-[10px] font-black uppercase text-indigo-400 tracking-[0.4em] font-inter">
             Historia de Portada
           </span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.05] tracking-tighter font-outfit animate-fade-in-up">
          {article.title}
        </h2>
        
        <p className="text-slate-200 text-lg md:text-xl mb-10 line-clamp-2 hidden md:block leading-relaxed font-medium font-inter">
          {article.excerpt}
        </p>
        
        <div className="flex items-center gap-6 text-slate-300 text-[10px] font-black uppercase tracking-[0.2em] font-inter">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-indigo-400" />
            5 MIN LECTURA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
          <span>{article.date}</span>
          <div className="ml-auto md:ml-4 flex items-center gap-2 text-white group-hover:gap-4 transition-all">
             <span className="hidden md:inline">Explorar ahora</span>
             <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-indigo-600 transition-colors">
                <ArrowRight className="w-4 h-4" />
             </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedArticle;