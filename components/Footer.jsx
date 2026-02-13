'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CATEGORIES } from '../lib/articles';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [nlStatus, setNlStatus] = useState("idle");

  const handleNewsletter = async (e) => {
    e.preventDefault();
    if (!email) return;
    setNlStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/meelalvz", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ email, _subject: "Nueva suscripción al newsletter" }),
      });
      if (res.ok) {
        setNlStatus("success");
        setEmail("");
      } else {
        setNlStatus("error");
      }
    } catch {
      setNlStatus("error");
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
              <div className="bg-white text-gray-900 p-1 rounded font-bold text-lg tracking-tighter">AD</div>
              <span className="font-bold text-xl tracking-tight text-white">AldiaDeTodo</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tu dosis diaria de inspiración, consejos prácticos y crecimiento personal. Transformamos vidas un artículo a la vez.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Explorar</h3>
            <ul className="space-y-3">
              {CATEGORIES.slice(0, 4).map(cat => (
                <li key={cat}><Link href={`/articulos?categoria=${encodeURIComponent(cat)}`} className="text-gray-400 hover:text-white text-sm">{cat}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacidad" className="text-gray-400 hover:text-white text-sm text-left">Política de Privacidad</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white text-sm text-left">Términos y Condiciones</Link></li>
              <li><Link href="/acerca" className="text-gray-400 hover:text-white text-sm text-left">Sobre Nosotros</Link></li>
              <li><Link href="/contacto" className="text-gray-400 hover:text-white text-sm text-left">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Recibe los mejores artículos cada semana.</p>
            {nlStatus === "success" ? (
              <p className="text-green-400 text-sm font-medium">✓ ¡Suscrito! Gracias.</p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu email"
                  required
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  disabled={nlStatus === "sending"}
                  className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700 font-medium whitespace-nowrap"
                >
                  {nlStatus === "sending" ? "..." : "Suscribir"}
                </button>
              </form>
            )}
            {nlStatus === "error" && (
              <p className="text-red-400 text-xs mt-2">Error al suscribir. Intenta de nuevo.</p>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2026 AldiaDeTodo. Todos los derechos reservados.</p>
          <p className="text-gray-600 text-xs mt-2 md:mt-0">Diseñado con ❤️ para la excelencia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;