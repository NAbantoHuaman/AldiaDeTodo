import Link from 'next/link';
import { ArrowRight, Newspaper, BookOpen } from 'lucide-react';

export const metadata = {
  title: "Noticias - Próximamente | AldiaDeTodo",
  description: "Estamos trabajando en una sección de noticias con análisis original y perspectiva editorial propia. Mientras tanto, explora nuestros artículos y guías.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/noticias',
  },
};

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center font-inter">
      <div className="w-20 h-20 bg-indigo-100 rounded-3xl flex items-center justify-center mb-8">
        <Newspaper className="w-10 h-10 text-indigo-600" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-outfit tracking-tight">
        Sección en Desarrollo
      </h1>
      
      <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-4 leading-relaxed">
        Estamos trabajando en una sección de noticias con <strong className="text-slate-700">análisis original</strong> y perspectiva editorial propia.
      </p>
      
      <p className="text-base text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed">
        Mientras tanto, te invitamos a explorar nuestros artículos originales y guías en profundidad sobre crecimiento personal, finanzas y tecnología.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/articulos" 
          className="inline-flex items-center gap-3 px-8 py-4 bg-slate-950 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl active:scale-95"
        >
          <BookOpen className="w-4 h-4" />
          Ver Artículos Originales
          <ArrowRight className="w-4 h-4" />
        </Link>
        
        <Link 
          href="/guias" 
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm"
        >
          Explorar Guías
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
