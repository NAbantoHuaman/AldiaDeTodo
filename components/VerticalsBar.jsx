"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid, Cloud, Trophy, DollarSign, Sparkles } from 'lucide-react';

const VerticalsBar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: "Descubrir", path: "/", icon: <LayoutGrid className="w-3.5 h-3.5" /> },
    { name: "Deportes", path: "/deportes", icon: <Trophy className="w-3.5 h-3.5" /> },
    { name: "El Tiempo", path: "/tiempo", icon: <Cloud className="w-3.5 h-3.5" /> },
    { name: "Dinero", path: "/finanzas", icon: <DollarSign className="w-3.5 h-3.5" /> },
    { name: "Horóscopo", path: "/horoscopo", icon: <Sparkles className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className={`sticky z-30 px-4 mb-4 mt-24 hidden md:block transition-all duration-700 ${
      scrolled ? 'translate-y-[-200%] opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
    }`} style={{ top: scrolled ? '0px' : '112px' }}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/95 backdrop-blur-md inline-flex items-center p-1.5 rounded-3xl shadow-xl border border-slate-200">
          <div className="flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`flex items-center gap-2.5 text-[10px] font-black uppercase tracking-widest transition-all px-5 py-2.5 rounded-2xl
                    ${isActive 
                      ? "bg-slate-900 text-white shadow-lg shadow-slate-200" 
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"}`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalsBar;
