"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, Bell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Guías", path: "/guias" },
    { name: "Artículos", path: "/articulos" },
    { name: "Noticias", path: "/noticias" },
    { name: "Contacto", path: "/contacto" },
  ];

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'top-0 px-0 py-0' : 'top-8 px-4 py-3'
    }`}>
      <nav className={`max-w-7xl mx-auto transition-all duration-500 ${
        scrolled ? 'bg-white/95 shadow-2xl shadow-slate-300/50 border-b border-slate-100' : 'bg-white/50 backdrop-blur-sm rounded-[32px]'
      }`}>
        <div className={`px-6 md:px-10 transition-all duration-500 ${scrolled ? 'py-1' : 'py-0'}`}>
          <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-12 md:h-14' : 'h-14 md:h-16'}`}>
            
            {/* Logo Part */}
            <Link href="/" className="flex items-center group transition-transform hover:scale-105">
              <div className="bg-slate-950 text-white w-10 h-10 flex items-center justify-center rounded-2xl font-black text-xl tracking-tighter shadow-lg shadow-slate-400/20 group-hover:rotate-6 transition-transform">
                AD
              </div>
              <span className={`ml-3 font-black text-2xl tracking-tighter text-slate-900 font-outfit transition-all duration-500 overflow-hidden whitespace-nowrap ${
                scrolled ? 'opacity-0 max-w-0 ml-0' : 'opacity-100 max-w-[200px]'
              }`}>
                Aldia<span className="text-indigo-600">DeTodo</span>
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-xs font-black uppercase tracking-widest transition-all relative py-2 ${
                    isActive(link.path)
                      ? "text-indigo-600" 
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 rounded-full animate-in fade-in slide-in-from-bottom-1 duration-300"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4 border-l border-slate-200 pl-8 ml-2">
               <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                  <Search className="w-5 h-5" />
               </button>
               <button className="bg-slate-950 text-white px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-md active:scale-95">
                  Suscribir
               </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-2xl bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-3xl rounded-b-[32px] border-t border-slate-100 absolute top-full left-0 right-0 shadow-2xl overflow-hidden animate-in slide-in-from-top-4 duration-300">
            <div className="p-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${
                     isActive(link.path)
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-slate-100">
                 <button className="w-full bg-slate-950 text-white py-5 rounded-3xl font-black uppercase tracking-widest shadow-xl">
                    Suscribirse Gratis
                 </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;