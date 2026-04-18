import React from 'react';
import { 
  Cloud, MapPin, Wind, Droplets, Sun, 
  CloudRain, Sunrise, Sunset, Microscope, 
  CloudSun, CloudFog, CloudDrizzle, Snowflake, 
  CloudHail, CloudLightning, Thermometer,
  Zap, Eye, Gauge, ArrowDown, ArrowUp
} from 'lucide-react';
import { getWeatherData } from "@/lib/externalData";
import { getRSSNews } from "@/lib/rss";
import ArticleCard from "@/components/ArticleCard";
import CitySearch from "@/components/CitySearch";

export const metadata = {
  title: "El Tiempo - AldiaDeTodo",
  description: "Pronóstico detallado del tiempo y clima actual en tiempo real.",
};

const WeatherIcon = ({ icon, className }: { icon: string; className: string }) => {
  const icons: Record<string, any> = {
    Sun, CloudSun, Cloud, CloudFog, CloudDrizzle, 
    CloudRain, Snowflake, CloudHail, CloudLightning
  };
  const IconComponent = icons[icon] || Cloud;
  return <IconComponent className={className} />;
};

export default async function WeatherPage({ searchParams }: { searchParams: any }) {
  const params = await searchParams;
  const city = params?.city || "Cajamarca";
  const lat = params?.lat;
  const lon = params?.lon;
  
  const coords = lat && lon ? { lat: parseFloat(lat), lon: parseFloat(lon) } : null;
  const data = await getWeatherData(city, coords as any);

  // Fetch real-time science/climate news
  const allNews = await getRSSNews();
  const scienceNews = allNews
    .filter((item): item is NonNullable<typeof item> => item != null && (item.category === 'Ciencia' || item.category === 'Tecnología' || item.category === 'Actualidad'))
    .slice(0, 3);

  if (!data) return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-10 text-center">
      <Cloud className="w-16 h-16 text-indigo-400 animate-bounce mb-4" />
      <h2 className="text-2xl font-black text-white uppercase italic">Hubo un problema al cargar el clima</h2>
      <p className="text-indigo-300 mt-2">No pudimos encontrar la ciudad seleccionada.</p>
      <a href="/tiempo" className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold">Volver</a>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Weather Section with Glassmorphism */}
      <div className="relative bg-slate-950 overflow-hidden pt-20 pb-24 px-4">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -mr-48 -mt-48 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <CitySearch currentCity={data.rawCity} />

          <div className="bg-white/5 backdrop-blur-2xl rounded-[40px] border border-white/10 p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
              
              <div className="text-center lg:text-left flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full mb-6 border border-white/5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="text-xs font-black uppercase text-indigo-100 tracking-widest">{data.city}</span>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex items-center">
                    <span className="text-[120px] md:text-[180px] font-black tracking-tighter text-white leading-none drop-shadow-2xl">
                      {data.temp}°
                    </span>
                    <div className="h-24 w-px bg-white/10 mx-8 hidden md:block"></div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center lg:justify-start gap-4">
                       <WeatherIcon icon={data.icon} className="w-16 h-16 text-indigo-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]" />
                       <p className="text-4xl md:text-5xl font-black text-white italic tracking-tighter">{data.condition}</p>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-3 text-indigo-200">
                       <Thermometer className="w-4 h-4" />
                       <span className="text-sm font-bold uppercase tracking-widest">Sensación: {data.feelsLike}°</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid of Weather Stats */}
              <div className="grid grid-cols-2 gap-4 w-full lg:max-w-md">
                {[
                  { label: "Humedad", value: `${data.humidity}%`, icon: Droplets, color: "text-blue-400" },
                  { label: "Viento", value: `${data.wind} km/h`, icon: Wind, color: "text-emerald-400" },
                  { label: "Índice UV", value: data.uvIndex, icon: Sun, color: "text-amber-400" },
                  { label: "Visibilidad", value: "10 km", icon: Eye, color: "text-indigo-400" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors">
                    <stat.icon className={`w-5 h-5 ${stat.color} mb-3`} />
                    <p className="text-[10px] font-black text-indigo-300 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-xl font-black text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sun Times */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
               <div className="flex items-center gap-3">
                  <Sunrise className="w-5 h-5 text-orange-400" />
                  <div>
                    <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">Amanecer</p>
                    <p className="text-sm font-black text-white">{data.sunrise}</p>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <Sunset className="w-5 h-5 text-rose-400" />
                  <div>
                    <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">Atardecer</p>
                    <p className="text-sm font-black text-white">{data.sunset}</p>
                  </div>
               </div>
               <div className="items-center gap-3 hidden md:flex">
                  <Gauge className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">Presión</p>
                    <p className="text-sm font-black text-white">1014 hPa</p>
                  </div>
               </div>
               <div className="items-center gap-3 hidden md:flex">
                  <Zap className="w-5 h-5 text-indigo-400" />
                  <div>
                    <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">API Engine</p>
                    <p className="text-sm font-black text-white">Open-Meteo v1</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forecast Section */}
      <div className="container mx-auto max-w-6xl py-20 px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter">
              Pronóstico de la Semana
            </h2>
            <p className="text-slate-500 font-medium">Análisis detallado de los próximos 5 días</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mb-24">
          {data.forecast.map((day: any, i: number) => (
            <div key={i} className="group bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">{day.day}</p>
              <div className="mb-6">
                <WeatherIcon icon={day.icon} className="w-12 h-12 text-indigo-600 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-black text-slate-900 tracking-tighter">{day.temp}°</span>
                <span className="text-xl font-bold text-slate-300">{day.tempMin}°</span>
              </div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-tighter mb-4">{day.condition}</p>
              
              <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                 <div className="flex items-center gap-1.5 overflow-hidden">
                    <Droplets className="w-3 h-3 text-blue-400" />
                    <span className="text-[10px] font-bold text-slate-400">{day.precip}%</span>
                 </div>
                 {day.precip > 50 && <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>}
              </div>
            </div>
          ))}
        </div>

        {/* Science News Integration */}
        <section className="mb-24">
           <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-100 rounded-2xl text-indigo-600">
                   <Microscope className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter">Noticias de Ciencia y Clima</h2>
                  <p className="text-slate-500 font-medium">Impacto global y descubrimientos recientes</p>
                </div>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {scienceNews.map((article: any, index: number) => (
               <div key={article.id} className="relative group">
                 <div className="absolute inset-0 bg-indigo-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <ArticleCard article={article} variant="default" priority={index < 3} />
               </div>
             ))}
           </div>
        </section>

        {/* Dynamic Tip Card */}
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-[40px] p-12 text-white overflow-hidden relative shadow-2xl shadow-indigo-200">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="p-6 bg-white/10 backdrop-blur-3xl rounded-3xl border border-white/10">
                 <Sun className="w-12 h-12 text-amber-300" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-4">Análisis Predictivo</h3>
                <p className="text-indigo-100 leading-relaxed max-w-2xl text-lg font-medium">
                  {data.temp > 25 ? "Día caluroso por delante. Asegúrate de mantenerte hidratado y usar protector solar si el índice UV es alto." : 
                   data.condition.includes("Lluvia") ? "Se esperan precipitaciones. Un paraguas y calzado resistente al agua serán tus mejores aliados hoy." :
                   "Condiciones ideales para actividades al aire libre. Disfruta del día con tranquilidad."}
                </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
