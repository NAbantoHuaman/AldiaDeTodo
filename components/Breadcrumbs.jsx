"use client";

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ title }) {
  return (
    <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8 overflow-x-auto whitespace-nowrap pb-2 md:pb-0">
      <Link href="/" className="hover:text-indigo-600 flex items-center gap-1 transition-colors">
        <Home className="w-3 h-3" /> Inicio
      </Link>
      <ChevronRight className="w-3 h-3 opacity-30" />
      <Link href="/guias" className="hover:text-indigo-600 transition-colors">
        Guías
      </Link>
      <ChevronRight className="w-3 h-3 opacity-30" />
      <span className="text-slate-900 truncate max-w-[150px] md:max-w-none">
        {title}
      </span>
    </nav>
  );
}
