"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Navigation, Loader2, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CitySearch({ currentCity }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();
  const suggestionsRef = useRef(null);

  // Debounced search for suggestions
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.trim().length > 2) {
        try {
          const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5&language=es&format=json`);
          const data = await res.json();
          setSuggestions(data.results || []);
          setShowSuggestions(true);
        } catch (err) {
          console.error("Suggestions error:", err);
        }
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  // Close suggestions on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (city) => {
    setLoading(true);
    setQuery(`${city.name}, ${city.country}`);
    setShowSuggestions(false);
    router.push(`/tiempo?lat=${city.latitude}&lon=${city.longitude}`);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setShowSuggestions(false);
    router.push(`/tiempo?city=${encodeURIComponent(query)}`);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleGeolocation = () => {
    if (!navigator.geolocation) {
      alert("Tu navegador no soporta geolocalización.");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        router.push(`/tiempo?lat=${latitude}&lon=${longitude}`);
        setTimeout(() => setLoading(false), 2000);
      },
      (error) => {
        console.error("Error de geolocalización:", error);
        alert("No pudimos obtener tu ubicación.");
        setLoading(false);
      }
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-10 relative" ref={suggestionsRef}>
      <form onSubmit={handleSearch} className="relative group z-30">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-indigo-400 group-focus-within:text-white transition-colors" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
          placeholder={`Buscar ciudad (Ej: ${currentCity || 'Lima'})...`}
          className="block w-full pl-12 pr-32 py-4 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all font-medium"
        />
        <div className="absolute inset-y-0 right-0 p-2 flex gap-2">
          <button
            type="button"
            onClick={handleGeolocation}
            disabled={loading}
            className="p-2 bg-indigo-500/30 hover:bg-indigo-500/50 rounded-2xl text-white transition-colors disabled:opacity-50"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Navigation className="h-5 w-5" />}
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 bg-white text-indigo-900 rounded-2xl font-bold text-sm hover:bg-indigo-50 transition-colors"
          >
            Buscar
          </button>
        </div>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-40 animate-in slide-in-from-top-2 duration-200">
           <div className="p-2">
             {suggestions.map((city, idx) => (
                <button
                  key={`${city.latitude}-${idx}`}
                  onClick={() => handleSelect(city)}
                  className="w-full flex items-center gap-4 px-6 py-4 hover:bg-white/10 text-left transition-colors group first:rounded-t-2xl last:rounded-b-2xl border-b border-white/5 last:border-0"
                >
                  <div className="p-2 bg-white/5 rounded-xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{city.name}</p>
                    <p className="text-[10px] text-indigo-300 uppercase font-black tracking-widest mt-0.5">
                      {city.admin1 ? `${city.admin1}, ` : ''}{city.country}
                    </p>
                  </div>
                </button>
             ))}
           </div>
        </div>
      )}
    </div>
  );
}
