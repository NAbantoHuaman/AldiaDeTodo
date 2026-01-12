"use client";
import { useEffect, useRef } from 'react';

const AdsBanner = ({ slot, format = "auto", label = "Publicidad", responsive = "true", style = { display: 'block' } }) => {
  // ⚠️ CONFIGURACIÓN:
  // - SHOW_REAL_ADS: true para producción (inyecta scripts de Google)
  // - SHOW_DEV_MOCKUP: true para ver los espacios grises durante el diseño
  const SHOW_REAL_ADS = false; 
  const SHOW_DEV_MOCKUP = false; // <--- Cambiar a true si necesitas ver dónde irán los anuncios
  
  // TU ID DE CLIENTE (Obtenido de Google AdSense, formato: ca-pub-XXXXXXXXXXXXXXXX)
  const AD_CLIENT_ID = "ca-pub-XXXXXXXXXXXXXXXX"; 

  const adRef = useRef(null);

  useEffect(() => {
    // Solo intenta cargar el anuncio si estamos en modo real y no se ha cargado ya en este contenedor
    if (SHOW_REAL_ADS && adRef.current) {
      try {
        // Verifica si adsbygoogle existe, si no, lo inicializa como array
        const adsbygoogle = window.adsbygoogle || [];
        // Intenta hacer push. Nota: AdSense puede lanzar error si empujas a un slot ya lleno en SPA, 
        // pero en navegación básica de Next esto es el estándar.
        adsbygoogle.push({});
      } catch (e) {
        console.error("AdSense error (puede ser normal en dev):", e);
      }
    }
  }, [SHOW_REAL_ADS, slot]);

  // RENDERIZADO MODO PRODUCCIÓN (ANUNCIO REAL)
  if (SHOW_REAL_ADS) {
    return (
      <div className="w-full my-6 flex flex-col items-center justify-center">
         {/* Etiqueta opcional "Publicidad" */}
         {label && <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">{label}</div>}
         
         <div className="w-full flex justify-center overflow-hidden min-h-[100px]">
            <ins
              className="adsbygoogle"
              style={style}
              data-ad-client={AD_CLIENT_ID}
              data-ad-slot={slot}
              data-ad-format={format}
              data-full-width-responsive={responsive}
              ref={adRef}
            />
         </div>
      </div>
    );
  }

  // Si no hay anuncios reales ni mockup activado, no mostrar nada
  if (!SHOW_DEV_MOCKUP) return null;

  // RENDERIZADO MODO DESARROLLO (MOCKUP VISUAL)
  return (
    <div className="w-full my-6 flex flex-col items-center justify-center">
      <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">{label}</div>
      <div className="w-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center p-4 min-h-[120px]">
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-500">Google AdSense Space</p>
          <div className="flex flex-col gap-1 mt-2 text-xs text-gray-400">
             <p>Client ID: {AD_CLIENT_ID}</p>
             <p>Slot ID: {slot || "Falta Slot ID"}</p>
             <p>Format: {format}</p>
          </div>
          <p className="text-[10px] text-indigo-500 mt-3 font-mono bg-indigo-50 px-2 py-1 rounded inline-block">
             Modo Desarrollo (SHOW_REAL_ADS = false)
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdsBanner;