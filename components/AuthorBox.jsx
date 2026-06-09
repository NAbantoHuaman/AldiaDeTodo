import { ShieldCheck, BookOpen, Award } from 'lucide-react';
import Link from 'next/link';

const AuthorBox = ({ 
  category = "tecnologia",
  datePublished = "2026",
  dateReviewed = "2026"
}) => {
  // Use real author name for all categories
  const author = {
      name: "Nestor Abanto Huaman",
      initials: "NA",
      role: "Editor Principal & Especialista",
      bio: "Apasionado por la tecnología, el bienestar y el desarrollo continuo. Investigo y documento profundamente cada tema para ofrecer guías prácticas, verificadas y de alto valor para nuestros lectores.",
      color: "indigo"
  };

  const colorMap = {
    indigo: { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200", bgLight: "bg-indigo-50" },
    emerald: { bg: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-200", bgLight: "bg-emerald-50" },
    violet: { bg: "bg-violet-100", text: "text-violet-600", border: "border-violet-200", bgLight: "bg-violet-50" },
    amber: { bg: "bg-amber-100", text: "text-amber-600", border: "border-amber-200", bgLight: "bg-amber-50" },
  };
  const colors = colorMap[author.color] || colorMap.indigo;

  return (
    <div className={`${colors.bgLight} rounded-3xl p-8 md:p-10 border ${colors.border} mt-16`}>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Author Avatar */}
        <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
          <span className={`text-xl font-black ${colors.text}`}>{author.initials}</span>
        </div>

        {/* Author Info */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h4 className="text-lg font-black text-slate-900">{author.name}</h4>
            <span className={`inline-flex items-center gap-1 text-[10px] font-black ${colors.text} uppercase tracking-widest ${colors.bg} px-3 py-1 rounded-full`}>
              <ShieldCheck className="w-3 h-3" /> Verificado
            </span>
          </div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">{author.role}</p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">{author.bio}</p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200/60">
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5" />
              Publicado: {datePublished}
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              Revisado: {dateReviewed}
            </div>
            <Link href="/acerca" className={`text-[10px] font-black ${colors.text} uppercase tracking-widest hover:underline ml-auto`}>
              Sobre nuestro equipo →
            </Link>
          </div>
        </div>
      </div>
      
      {/* Disclaimer */}
      <div className="mt-6 pt-4 border-t border-slate-200/40">
        <p className="text-[11px] text-slate-400 leading-relaxed italic">
          Este artículo ha sido investigado y redactado por el equipo editorial de AldiaDeTodo. Nuestro contenido es original, verificado y actualizado periódicamente. 
          No constituye asesoramiento profesional. Consulta siempre con un especialista antes de tomar decisiones importantes.
        </p>
      </div>
    </div>
  );
};

export default AuthorBox;
