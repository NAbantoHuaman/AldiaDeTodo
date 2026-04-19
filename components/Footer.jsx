'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const CATEGORIES = ["Crecimiento Personal", "Productividad", "Finanzas", "Salud Mental", "Relaciones", "Tecnología", "Ciencia", "Cultura"];

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
    <footer className="bg-slate-950 text-white pt-20 pb-10 font-inter">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-5">
             <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="bg-white text-slate-950 w-10 h-10 flex items-center justify-center rounded-2xl font-black text-xl tracking-tighter shadow-md group-hover:rotate-12 transition-transform">
                AD
              </div>
              <span className="font-black text-2xl tracking-tighter text-white font-outfit">
                Aldia<span className="text-indigo-400">DeTodo</span>
              </span>
            </Link>
            <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-sm">
              Potenciando el conocimiento humano a través de artículos de élite sobre crecimiento, finanzas y tecnología. Excelencia en cada palabra.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Instagram size={18} />, href: "https://www.instagram.com/aldiadetodos/" },
                { icon: <Facebook size={18} />, href: "https://www.facebook.com/share/16z3oSet5d/" },
                { icon: <Twitter size={18} />, href: "https://x.com/AldiaDeTodos" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Column 1 */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-[10px] font-black text-slate-100 uppercase tracking-[0.3em] mb-8 font-outfit">Explorar</h3>
            <ul className="space-y-4">
              {CATEGORIES.slice(0, 5).map(cat => (
                <li key={cat}>
                  <Link href={`/categoria/${cat.toLowerCase().replace(/\s+/g, '-')}`} className="text-slate-400 hover:text-indigo-400 text-sm transition-colors font-medium">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-[10px] font-black text-slate-100 uppercase tracking-[0.3em] mb-8 font-outfit">Ecosistema</h3>
            <ul className="space-y-4">
              <li><Link href="/guias" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors font-medium">Guías</Link></li>
              <li><Link href="/privacidad" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors font-medium">Privacidad</Link></li>
              <li><Link href="/terms" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors font-medium">Términos</Link></li>
              <li><Link href="/acerca" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors font-medium">Nosotros</Link></li>
              <li><Link href="/contacto" className="text-slate-400 hover:text-indigo-400 text-sm transition-colors font-medium">Contacto</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-[10px] font-black text-slate-100 uppercase tracking-[0.3em] mb-8 font-outfit">Newsletter</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">Suscríbete para recibir nuestra curaduría semanal de artículos premium.</p>
            {nlStatus === "success" ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl text-emerald-400 text-xs font-black uppercase tracking-widest text-center animate-in fade-in zoom-in-95 duration-500">
                ✓ Sincronizado correctamente
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  required
                  className="bg-slate-900 text-white px-6 py-4 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-slate-800 text-sm"
                />
                <button
                  type="submit"
                  disabled={nlStatus === "sending"}
                  className="bg-white text-slate-950 px-6 py-4 rounded-2xl hover:bg-indigo-400 hover:text-white font-black text-xs uppercase tracking-widest transition-all shadow-xl active:scale-95 disabled:opacity-50"
                >
                  {nlStatus === "sending" ? "Analizando..." : "Unirme ahora"}
                </button>
              </form>
            )}
            {nlStatus === "error" && (
              <p className="text-rose-400 text-[10px] mt-3 font-black uppercase tracking-widest text-center">Error en conexión. Reintenta.</p>
            )}
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">© 2026 AldiaDeTodo • Excelencia Editorial</p>
          <div className="flex gap-8">
             <span className="text-slate-600 text-[10px] font-medium uppercase tracking-widest italic">Digital Hub v4.0.1</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;