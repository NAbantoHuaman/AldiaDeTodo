"use client";

import React, { useState } from 'react';
import { ArrowRight, X, Activity, RefreshCw, Smartphone as Card, Trophy, Timer } from 'lucide-react';

const EventIcon = ({ type, detail }) => {
  if (type === 'Goal') return <Trophy className="w-4 h-4 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />;
  if (type === 'Card') {
    const isRed = detail?.toLowerCase().includes('red');
    return (
      <div className={`w-3 h-4 rounded-sm shadow-sm ${isRed ? 'bg-red-500 shadow-red-500/50' : 'bg-amber-400 shadow-amber-400/50'}`} 
           style={{ transform: 'skewX(-10deg)' }} 
      />
    );
  }
  if (type === 'subst') return <RefreshCw className="w-3.5 h-3.5 text-indigo-400" />;
  return <Activity className="w-3.5 h-3.5 text-slate-400" />;
};

const LiveMatchCard = ({ match }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState({ events: [], stats: [] });
  const [loading, setLoading] = useState(false);

  const handleFetchDetails = async () => {
    if (details.events.length > 0) {
      setShowDetails(true);
      return;
    }

    setLoading(true);
    setShowDetails(true);
    try {
      const res = await fetch("/api/sports/analysis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ match })
      });
      const data = await res.json();
      setDetails({ 
        events: data.events || [], 
        stats: data.stats || [] 
      });
    } catch (err) {
      console.error("Error fetching match details:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div key={match.id} className="relative overflow-hidden group rounded-3xl border border-slate-200 bg-slate-900 min-h-[300px] transition-all hover:shadow-2xl hover:shadow-indigo-500/10">
      {/* Stadium Background */}
      {match.stadiumImg ? (
        <div className="absolute inset-0 z-0">
          <img 
            src={match.stadiumImg} 
            alt={match.home} 
            className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 to-slate-950 opacity-50"></div>
      )}

      {/* Main Content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
           <div className="flex items-center gap-2">
             {match.leagueLogo && <img src={match.leagueLogo} alt={match.league} className="w-5 h-5 object-contain" />}
             <span className="text-[10px] font-black uppercase tracking-tighter text-white/80">
               {match.league}
             </span>
           </div>
           <div className="flex items-center gap-2">
             {match.status === 'En Vivo' && (
               <div className="flex items-center gap-1.5 px-2 py-0.5 bg-red-500/10 border border-red-500/20 rounded text-[10px] font-bold text-red-400">
                 <Timer className="w-3 h-3 animate-pulse" />
                 <span>{match.elapsed}'</span>
               </div>
             )}
             <span className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-black uppercase ${match.status === 'En Vivo' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-white/20 text-slate-300'}`}>
               {match.status}
             </span>
           </div>
        </div>

        <div className="flex justify-between items-center gap-4 py-6">
          <div className="flex-1 flex flex-col items-center gap-3">
            {match.homeLogo && <img src={match.homeLogo} alt={match.home} className="w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-2xl" />}
            <p className="text-sm md:text-xl font-black text-white italic tracking-tighter leading-tight text-center drop-shadow-lg">{match.home}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-3xl border border-white/10 px-6 py-4 rounded-3xl flex flex-col items-center shadow-2xl">
            <span className="text-4xl md:text-6xl font-black text-white tracking-tighter drop-shadow-2xl">{match.score}</span>
          </div>

          <div className="flex-1 flex flex-col items-center gap-3">
            {match.awayLogo && <img src={match.awayLogo} alt={match.away} className="w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-2xl" />}
            <p className="text-sm md:text-xl font-black text-white italic tracking-tighter leading-tight text-center drop-shadow-lg">{match.away}</p>
          </div>
        </div>

        {/* Live Events Feed (Preview) */}
        <div className="space-y-2 mb-4 bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-white/5">
          <h5 className="text-[10px] font-black text-slate-400 uppercase flex items-center gap-2 mb-3 tracking-widest">
            <Activity className="w-3 h-3 text-red-500" /> Incidencias Recientes
          </h5>
          <div className="space-y-3">
            {match.events && match.events.length > 0 ? (
              match.events.map((event, idx) => (
                <div key={idx} className="flex items-center gap-3 text-[10px] text-slate-300 border-l border-white/10 pl-3">
                  <span className="font-black text-slate-500 w-6">{event.time}'</span>
                  <div className="w-5 flex justify-center">
                    <EventIcon type={event.type} detail={event.detail} />
                  </div>
                  <span className="font-bold flex-1 text-white truncate">{event.player}</span>
                  <span className="text-slate-500 italic text-[9px] uppercase tracking-tighter">({event.detail})</span>
                </div>
              ))
            ) : (
              <p className="text-[10px] text-slate-500 italic pb-1">Esperando acción en el campo...</p>
            )}
          </div>
        </div>

        <div className="flex justify-center border-t border-white/10 pt-4">
           <button 
             onClick={handleFetchDetails}
             className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-red-600/20"
           >
             <Activity className="w-4 h-4" />
             Minuto a Minuto en Vivo
             <ArrowRight className="w-3 h-3" />
           </button>
        </div>
      </div>

      {/* Details Overlay / Modal */}
      {showDetails && (
        <div className="absolute inset-0 z-50 bg-slate-950/98 backdrop-blur-3xl animate-in fade-in duration-300 flex flex-col p-6">
          <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-red-500" />
              <h3 className="text-sm font-black text-white uppercase tracking-widest italic">
                Cronología del Partido
              </h3>
            </div>
            <button 
              onClick={() => setShowDetails(false)}
              className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
            {loading ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 text-slate-400">
                <div className="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xs font-black uppercase animate-pulse">Sincronizando cronología...</p>
              </div>
            ) : (
              <div className="space-y-6">
                 {/* Stats Summary if available */}
                 {details.stats.length > 0 && (
                   <div className="grid grid-cols-3 gap-4 mb-8 bg-white/5 p-5 rounded-3xl border border-white/10 shadow-inner">
                      <div className="text-center">
                        <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Posesión</p>
                        <p className="text-xl font-black text-white italic tracking-tighter">{details.stats[0]?.statistics.find(s => s.type === 'Ball Possession')?.value || '50%'}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Remates</p>
                        <p className="text-xl font-black text-white italic tracking-tighter">{details.stats[0]?.statistics.find(s => s.type === 'Total Shots')?.value || '0'}</p>
                      </div>
                      <div className="text-center text-red-500">
                         <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Tiempo</p>
                         <p className="text-xl font-black italic tracking-tighter">{match.elapsed}'</p>
                      </div>
                   </div>
                 )}

                 <div className="relative space-y-6">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent z-0"></div>
                    
                    {details.events.length > 0 ? details.events.sort((a,b) => b.time.elapsed - a.time.elapsed).map((event, idx) => (
                      <div key={idx} className="relative z-10 flex items-start gap-6">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 border border-white/10 shadow-lg ${event.type === 'Goal' ? 'bg-amber-500 text-amber-950' : event.type === 'Card' ? 'bg-white/10 text-white' : 'bg-slate-800 text-slate-400'}`}>
                           {event.time.elapsed}'
                        </div>
                        <div className="flex-1 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                           <div className="flex justify-between items-center mb-2">
                             <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{event.team.name}</span>
                             <EventIcon type={event.type} detail={event.detail} />
                           </div>
                           <p className="text-sm font-black text-white italic tracking-tighter">{event.player.name}</p>
                           <p className="text-[10px] text-slate-500 font-medium mt-1 uppercase tracking-widest">{event.detail}</p>
                        </div>
                      </div>
                    )) : (
                      <p className="text-xs text-slate-500 italic text-center py-8 font-medium">Buscando incidencias detalladas...</p>
                    )}
                 </div>
              </div>
            )}
          </div>
          
          <button 
            onClick={() => setShowDetails(false)}
            className="mt-6 py-4 border border-white/10 hover:bg-white/5 text-slate-400 hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"
          >
            Cerrar Minuto a Minuto
          </button>
        </div>
      )}
    </div>
  );
};

export default LiveMatchCard;
