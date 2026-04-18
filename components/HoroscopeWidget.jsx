"use client";
import React, { useState } from 'react';
import { Star, Sparkles } from 'lucide-react';

const signs = [
  "Aries", "Tauro", "Géminis", "Cáncer", 
  "Leo", "Virgo", "Libra", "Escorpio", 
  "Sagitario", "Capricornio", "Acuario", "Piscis"
];

const HoroscopeWidget = ({ data }) => {
  const [selected, setSelected] = useState(0);

  if (!data || data.length === 0) return null;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-indigo-600" />
        <h3 className="font-bold text-gray-900">Horóscopo de Hoy</h3>
      </div>

      {/* Signs Selector */}
      <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
        {signs.map((sign, idx) => (
          <button
            key={sign}
            onClick={() => setSelected(idx % data.length)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border
              ${selected === (idx % data.length) 
                ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-200" 
                : "bg-gray-50 border-gray-100 text-gray-500 hover:border-indigo-200 hover:text-indigo-600"}`}
          >
            {sign}
          </button>
        ))}
      </div>

      <div className="bg-indigo-50/50 rounded-xl p-4 border border-indigo-100/50 animate-slide-up">
        <div className="flex items-center gap-2 mb-2">
          <Star className="fill-indigo-600 text-indigo-600 w-3 h-3" />
          <span className="text-xs font-bold text-indigo-900 uppercase tracking-tighter">Predicción</span>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed italic">
          "{data[selected]?.text || "Tu destino está por escribirse..."}"
        </p>
      </div>
      
      <p className="text-[10px] text-gray-400 mt-4 text-center italic">
        Consulta tu signo diariamente para nuevos consejos.
      </p>
    </div>
  );
};

export default HoroscopeWidget;
