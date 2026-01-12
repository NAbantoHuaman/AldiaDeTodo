"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Noticias", path: "/#noticias" },
    { name: "Artículos", path: "/articulos" },
    { name: "Acerca de", path: "/acerca" },
    { name: "Contacto", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const handleScroll = (e, path) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const id = path.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false); // Close mobile menu if open
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link href="/" className="flex items-center cursor-pointer">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-black text-white p-1 rounded font-bold text-xl tracking-tighter">AD</div>
              <span className="font-bold text-2xl tracking-tight text-gray-900">AldiaDeTodo</span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => link.path.startsWith('/#') ? handleScroll(e, link.path) : null}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  isActive(link.path)
                    ? "text-indigo-600 border-b-2 border-indigo-600 pb-1" 
                    : "text-gray-600 hover:text-indigo-600"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pl-4 border-l border-gray-300">
               <Search className="w-5 h-5 text-gray-400 cursor-pointer hover:text-indigo-600" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  if (link.path.startsWith('/#')) handleScroll(e, link.path);
                  else setIsOpen(false);
                }}
                className={`block w-full text-left pl-3 pr-4 py-2 border-l-4 text-base font-medium cursor-pointer ${
                   isActive(link.path)
                    ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;