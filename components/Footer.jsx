import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { CATEGORIES } from '../lib/articles';

const Footer = () => {
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
            <div className="flex space-x-4 mt-6">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
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
            <div className="flex">
              <input type="email" placeholder="Tu email" className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-indigo-500" />
              <button className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700 font-medium">Suscribir</button>
            </div>
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