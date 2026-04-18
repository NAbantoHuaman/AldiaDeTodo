"use client";
import React from 'react';
import { Cloud, Sun, CloudRain, Wind, Droplets, MapPin } from 'lucide-react';

const WeatherWidget = ({ data }) => {
  if (!data) return null;

  const getIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case 'soleado': return <Sun className="w-12 h-12 text-yellow-400" />;
      case 'lluvia': return <CloudRain className="w-12 h-12 text-blue-400" />;
      default: return <Cloud className="w-12 h-12 text-gray-300" />;
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-2xl p-6 text-white shadow-xl group">
      {/* Decorative blobs */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-1 text-indigo-100 text-xs font-bold uppercase tracking-wider mb-1">
              <MapPin className="w-3 h-3" />
              {data.city}
            </div>
            <div className="text-5xl font-bold tracking-tighter">{data.temp}°</div>
          </div>
          {getIcon(data.condition)}
        </div>

        <div className="text-lg font-medium text-indigo-100 mb-6">
          {data.condition}
        </div>

        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4 text-indigo-300" />
            <div className="text-xs">
              <p className="text-indigo-300">Humedad</p>
              <p className="font-bold">{data.humidity}%</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="w-4 h-4 text-indigo-300" />
            <div className="text-xs">
              <p className="text-indigo-300">Viento</p>
              <p className="font-bold">{data.wind} km/h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
