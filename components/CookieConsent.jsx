"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show banner only if user hasn't already accepted
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-gray-900 text-white rounded-2xl shadow-2xl border border-gray-700 p-6 md:flex md:items-center md:justify-between gap-6">
        
        {/* Text */}
        <div className="mb-4 md:mb-0 flex-1">
          <p className="text-sm leading-relaxed text-gray-300">
            Usamos cookies propias y de terceros (Google AdSense, Google Analytics) para personalizar contenido, 
            mostrar anuncios relevantes y analizar el tráfico. Al hacer clic en <strong className="text-white">"Aceptar"</strong>, 
            consientes el uso de todas las cookies. Puedes leer más en nuestra{" "}
            <Link href="/privacidad" className="text-indigo-400 hover:text-indigo-300 underline">
              Política de Privacidad
            </Link>.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={handleReject}
            className="px-5 py-2.5 text-sm font-medium text-gray-400 hover:text-white border border-gray-600 hover:border-gray-400 rounded-lg transition-colors"
          >
            Solo esenciales
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2.5 text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors shadow-lg shadow-indigo-600/30"
          >
            Aceptar todo
          </button>
        </div>
      </div>
    </div>
  );
}
