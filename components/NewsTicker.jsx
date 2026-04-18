"use client";
import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Bitcoin, Trophy } from 'lucide-react';

const NewsTicker = ({ financeData, sportsData }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!financeData || !mounted) return null;

  const tickerItems = [
    { label: "USD Compra", value: financeData.usd?.buy || "---", icon: <DollarSign className="w-3 h-3" />, trend: "up" },
    { label: "USD Venta", value: financeData.usd?.sell || "---", icon: <DollarSign className="w-3 h-3" />, trend: "up" },
    { label: "BTC/USD", value: financeData.btc || "---", icon: <Bitcoin className="w-3 h-3" />, trend: "up" },
    ...((sportsData?.live || [])).map(match => ({
      label: `${match.home} vs ${match.away}`,
      value: match.score,
      icon: <Trophy className="w-3 h-3" />,
      tag: match.status === "LIVE" ? "En Vivo" : match.status
    }))
  ];

  // Duplicate items for seamless loop
  const displayItems = [...tickerItems, ...tickerItems];

  return (
    <div className={`bg-slate-900 text-white py-1 transition-all duration-500 overflow-hidden border-b border-slate-800 fixed top-0 left-0 right-0 z-[60] h-8 flex items-center ${
      scrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
    }`}>
      <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
        {displayItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider">
            <span className="text-slate-400">{item.icon}</span>
            <span className="text-slate-300">{item.label}:</span>
            <span className={item.tag === "En Vivo" ? "text-red-400 font-bold" : "text-white"}>
              {item.value}
            </span>
            {item.tag && (
              <span className={`text-[10px] px-1 rounded ${item.tag === "En Vivo" ? "bg-red-500/20 text-red-400" : "bg-slate-700 text-slate-400"}`}>
                {item.tag}
              </span>
            )}
            {item.trend === "up" && <TrendingUp className="w-3 h-3 text-emerald-400" />}
            {item.trend === "down" && <TrendingDown className="w-3 h-3 text-rose-400" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
