"use client";
import React from 'react';
import { Trophy, Calendar, Zap } from 'lucide-react';

const SportsWidget = ({ data }) => {
  if (!data || !data.live || data.live.length === 0) return null;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-500" />
          <h3 className="font-bold text-gray-900 text-sm italic">Deportes</h3>
        </div>
        <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
          Live
        </span>
      </div>

      <div className="space-y-3">
        {data.live.map((match) => (
          <div key={match.id} className="p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-amber-200 transition-colors group">
            <div className="flex justify-between items-center gap-4">
              <div className="flex-1 text-center">
                <p className="text-xs font-bold text-gray-800 line-clamp-1">{match.home}</p>
              </div>
              <div className="flex flex-col items-center px-3 border-x border-gray-200">
                <p className="text-sm font-black text-gray-900 tracking-tighter">{match.score}</p>
                <p className={`text-[9px] font-bold ${match.status === 'En Vivo' ? 'text-red-500 animate-pulse' : 'text-gray-400'}`}>
                   {match.status === 'En Vivo' && <Zap className="w-2 h-2 inline mr-0.5" />}
                   {match.status}
                </p>
              </div>
              <div className="flex-1 text-center">
                <p className="text-xs font-bold text-gray-800 line-clamp-1">{match.away}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2 text-[11px] font-bold text-gray-500 hover:text-indigo-600 border border-dashed border-gray-200 rounded-lg transition-colors">
        Ver todos los marcadores →
      </button>
    </div>
  );
};

export default SportsWidget;
