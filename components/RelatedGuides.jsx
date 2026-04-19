"use client";

import Link from 'next/link';
import Image from 'next/image';
import { guidesData } from '@/lib/guidesData';
import { ArrowRight } from 'lucide-react';

export default function RelatedGuides({ currentSlug }) {
  // Find current guide to get tags/category
  const currentGuide = guidesData.find(g => g.slug === currentSlug);
  
  if (!currentGuide) return null;

  // Algorithm: Find guides in the same category or with shared tags, excluding current
  const related = guidesData
    .filter(g => g.slug !== currentSlug)
    .map(g => {
      let score = 0;
      if (g.category === currentGuide.category) score += 3;
      const sharedTags = g.tags.filter(t => currentGuide.tags.includes(t));
      score += sharedTags.length * 2;
      return { ...g, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-24 pt-16 border-t border-slate-100">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h3 className="text-2xl font-black text-slate-900 font-outfit mb-2">Continúa explorando</h3>
          <p className="text-slate-500 text-sm font-medium">Guías recomendadas basadas en tus intereses</p>
        </div>
        <Link href="/guias" className="hidden md:flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-800 transition-colors">
          Ver todas <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((guide) => (
          <Link 
            key={guide.slug} 
            href={`/guias/${guide.slug}`}
            className="group block bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500"
          >
            <div className="relative h-40">
              <Image 
                src={guide.image} 
                alt={guide.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors"></div>
            </div>
            <div className="p-6">
              <h4 className="font-black text-slate-900 leading-tight mb-2 font-outfit text-lg group-hover:text-indigo-600 transition-colors line-clamp-2">
                {guide.title}
              </h4>
              <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest flex items-center gap-2">
                Leer ahora <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
