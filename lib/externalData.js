/**
 * External Data Fetcher for AldiaDeTodo
 * This utility handles fetching dynamic data for widgets and full pages.
 */

/**
 * Helper to map WMO weather codes to human-readable text and Lucide icon names
 */
export function mapWeatherCode(code) {
  const mapping = {
    0: { text: "Cielo despejado", icon: "Sun" },
    1: { text: "Principalmente despejado", icon: "Sun" },
    2: { text: "Parcialmente nublado", icon: "CloudSun" },
    3: { text: "Nublado", icon: "Cloud" },
    45: { text: "Niebla", icon: "CloudFog" },
    48: { text: "Niebla de escarcha", icon: "CloudFog" },
    51: { text: "Llovizna ligera", icon: "CloudDrizzle" },
    53: { text: "Llovizna moderada", icon: "CloudDrizzle" },
    55: { text: "Llovizna intensa", icon: "CloudDrizzle" },
    61: { text: "Lluvia ligera", icon: "CloudRain" },
    63: { text: "Lluvia moderada", icon: "CloudRain" },
    65: { text: "Lluvia fuerte", icon: "CloudRain" },
    71: { text: "Nieve ligera", icon: "Snowflake" },
    73: { text: "Nieve moderada", icon: "Snowflake" },
    75: { text: "Nieve fuerte", icon: "Snowflake" },
    77: { text: "Granizo", icon: "CloudHail" },
    80: { text: "Chubascos ligeros", icon: "CloudRain" },
    81: { text: "Chubascos moderados", icon: "CloudRain" },
    82: { text: "Chubascos violentos", icon: "CloudRain" },
    95: { text: "Tormenta eléctrica", icon: "CloudLightning" },
    96: { text: "Tormenta con granizo", icon: "CloudLightning" },
    99: { text: "Tormenta severa", icon: "CloudLightning" },
  };
  return mapping[code] || { text: "Variable", icon: "Cloud" };
}

export async function getWeatherData(city = "Cajamarca", coords = null) {
  try {
    let latitude, longitude, name, country;

    if (coords) {
      latitude = coords.lat;
      longitude = coords.lon;
      name = "Tu ubicación";
      country = "Local";
    } else {
      // 1. Geocoding: Get coordinates for the city
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=es&format=json`);
      const geoData = await geoRes.json();
      
      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }

      ({ latitude, longitude, name, country } = geoData.results[0]);
    }

    // 2. Fetch Weather Data
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m,uv_index&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max&timezone=auto`
    );
    const weatherData = await weatherRes.json();

    const current = weatherData.current;
    const daily = weatherData.daily;
    const mappedCurrent = mapWeatherCode(current.weather_code);

    // Filter next 5 days
    const forecast = daily.time.slice(0, 5).map((date, i) => {
      const dayDate = new Date(date);
      const dayName = dayDate.toLocaleDateString('es-ES', { weekday: 'short' });
      const mapped = mapWeatherCode(daily.weather_code[i]);
      
      return {
        day: dayName.charAt(0).toUpperCase() + dayName.slice(1),
        temp: Math.round(daily.temperature_2m_max[i]),
        tempMin: Math.round(daily.temperature_2m_min[i]),
        condition: mapped.text,
        icon: mapped.icon,
        precip: daily.precipitation_probability_max[i]
      };
    });

    return {
      temp: Math.round(current.temperature_2m),
      feelsLike: Math.round(current.apparent_temperature),
      condition: mappedCurrent.text,
      icon: mappedCurrent.icon,
      humidity: current.relative_humidity_2m,
      wind: Math.round(current.wind_speed_10m),
      uvIndex: current.uv_index,
      city: `${name}, ${country}`,
      rawCity: name,
      sunrise: daily.sunrise[0].split('T')[1],
      sunset: daily.sunset[0].split('T')[1],
      forecast
    };
  } catch (error) {
    console.error("Weather API Error:", error);
    return null;
  }
}

export async function getFinanceData() {
  const fallbackData = {
    usd: { buy: "3.71", sell: "3.74", change: "+0.12%", trend: "up" },
    eur: { buy: "4.05", sell: "4.09", change: "-0.05%", trend: "down" },
    crypto: [
      { name: "Bitcoin", symbol: "BTC", price: "64,230.50", change: "+1.2%" },
      { name: "Ethereum", symbol: "ETH", price: "3,450.20", change: "-0.5%" },
      { name: "Solana", symbol: "SOL", price: "145.80", change: "+5.3%" },
    ],
    updatedAt: "Manual Sync"
  };

  try {
    let usdRate = 3.74;
    let eurRate = 4.08;
    let cryptoData = fallbackData.crypto;

    // 1. Fetch Currency Data (Isolated)
    try {
      const curRes = await fetch("https://open.er-api.com/v6/latest/USD", { next: { revalidate: 3600 } });
      if (curRes.ok) {
        const curData = await curRes.json();
        if (curData.rates?.PEN) usdRate = curData.rates.PEN;
        if (curData.rates?.EUR && curData.rates?.PEN) {
          // Cross-rate EUR/PEN
          eurRate = (1 / curData.rates.EUR) * curData.rates.PEN;
        }
      }
    } catch (e) {
      console.warn("Currency API failed, using fallbacks:", e.message);
    }

    // 2. Fetch Crypto Data (Isolated)
    try {
      const btcRes = await fetch("https://api.coincap.io/v2/assets?ids=bitcoin,ethereum,solana", { next: { revalidate: 60 } });
      if (btcRes.ok) {
        const cryptoRaw = await btcRes.json();
        if (cryptoRaw.data && cryptoRaw.data.length > 0) {
          cryptoData = cryptoRaw.data.map(coin => ({
            name: coin.name,
            symbol: coin.symbol,
            price: parseFloat(coin.priceUsd).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
            change: (parseFloat(coin.changePercent24Hr) >= 0 ? '+' : '') + parseFloat(coin.changePercent24Hr).toFixed(2) + '%'
          }));
        }
      }
    } catch (e) {
      console.warn("Crypto API failed, using fallbacks:", e.message);
    }

    return {
      usd: { 
        buy: (usdRate - 0.02).toFixed(2), 
        sell: usdRate.toFixed(2), 
        change: "+0.15%", // Defaulting variation as historical fetch is unstable
        trend: "up" 
      },
      eur: { 
        buy: (eurRate - 0.03).toFixed(2), 
        sell: eurRate.toFixed(2), 
        change: "-0.10%", 
        trend: "down" 
      },
      btc: cryptoData.find(c => c.symbol === 'BTC')?.price || "64,230.50",
      crypto: cryptoData,
      updatedAt: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
    };
  } catch (error) {
    console.error("General Finance Error:", error);
    return fallbackData; // SAFE FALLBACK
  }
}

import { getTheSportsDBTeamData } from "./sportsMapping";

export async function getSportsData() {
  const API_KEY = process.env.API_FOOTBALL_KEY;
  const HOST = "v3.football.api-sports.io";
  
  if (!API_KEY) {
    console.warn("No API_FOOTBALL_KEY found. Using hardcoded fallback.");
    // Fallback to the previous logic or static data
  }

  try {
    const today = new Date().toISOString().split('T')[0];

    // 1. Fetch Today's Fixtures (Live and scheduled)
    const fixturesRes = await fetch(`https://${HOST}/fixtures?date=${today}`, {
      headers: { "x-apisports-key": API_KEY, "x-rapidapi-host": HOST },
      next: { revalidate: 300 } 
    });
    const fixturesData = await fixturesRes.json();
    const fixtures = fixturesData.response || [];

    // 2. Fetch Standings (La Liga id: 140, Season: 2025 or current)
    // We'll try to find the current season, assuming 2025 for now
    const standingsRes = await fetch(`https://${HOST}/standings?league=140&season=2025`, {
      headers: { "x-apisports-key": API_KEY, "x-rapidapi-host": HOST },
      next: { revalidate: 3600 }
    });
    const standingsData = await standingsRes.json();
    const standingsRaw = standingsData.response?.[0]?.league?.standings?.[0] || [];

    // --- ENRICHMENT LOGIC ---
    // We'll grab the first 4 live or high-profile matches and enrich them with TheSportsDB and Events
    const processedLive = await Promise.all(
      fixtures
        .filter(f => ['1H', '2H', 'HT', 'ET', 'P', 'LIVE'].includes(f.fixture.status.short))
        .slice(0, 4)
        .map(async f => {
            // Fetch detailed events for THIS specific fixture
            const eventsRes = await fetch(`https://${HOST}/fixtures/events?fixture=${f.fixture.id}`, {
                headers: { "x-apisports-key": API_KEY, "x-rapidapi-host": HOST },
                next: { revalidate: 60 } // Events update frequently
            });
            const eventsData = await eventsRes.json();
            const rawEvents = eventsData.response || [];

            const enrichment = await getTheSportsDBTeamData(f.teams.home.name);
            return {
                id: f.fixture.id,
                home: f.teams.home.name,
                homeLogo: f.teams.home.logo,
                away: f.teams.away.name,
                awayLogo: f.teams.away.logo,
                score: `${f.goals.home ?? 0}-${f.goals.away ?? 0}`,
                status: f.fixture.status.short === 'HT' ? 'Descanso' : 'En Vivo',
                elapsed: f.fixture.status.elapsed,
                league: f.league.name,
                leagueLogo: f.league.logo,
                stadiumImg: enrichment?.stadium || null,
                banner: enrichment?.banner || null,
                events: rawEvents.slice(-3).map(e => ({
                  time: e.time.elapsed,
                  type: e.type,
                  player: e.player.name,
                  detail: e.detail
                }))
            };
        })
    );

    // If no live, get recently finished or upcoming
    const finalLive = processedLive.length > 0 ? processedLive : await Promise.all(
        fixtures
            .filter(f => f.fixture.status.short === 'FT')
            .slice(0, 2)
            .map(async f => {
                const enrichment = await getTheSportsDBTeamData(f.teams.home.name);
                return {
                    id: f.fixture.id,
                    home: f.teams.home.name,
                    away: f.teams.away.name,
                    score: `${f.goals.home}-${f.goals.away}`,
                    status: "Terminado",
                    stadiumImg: enrichment?.stadium || null
                };
            })
    );

    const upcoming = await Promise.all(
        fixtures
            .filter(f => f.fixture.status.short === 'NS')
            .slice(0, 5)
            .map(async f => {
                return {
                    id: f.fixture.id,
                    home: f.teams.home.name,
                    away: f.teams.away.name,
                    time: new Date(f.fixture.date).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
                    league: f.league.name
                };
            })
    );

    const standings = standingsRaw.slice(0, 6).map(t => ({
        rank: t.rank,
        team: t.team.name,
        pts: t.points
    }));

    // Fallback if standings empty (e.g. season not started)
    const finalStandings = standings.length > 0 ? standings : [
        { rank: 1, team: "Real Madrid", pts: 78 },
        { rank: 2, team: "Barcelona", pts: 70 },
        { rank: 3, team: "Girona", pts: 65 }
    ];

    return {
      live: finalLive,
      upcoming,
      standings: finalStandings
    };

  } catch (error) {
    console.error("Triple Threat Sports Error:", error);
    return { live: [], upcoming: [], standings: [] };
  }
}

const zodiacSigns = [
  "Aries", "Tauro", "Géminis", "Cáncer", 
  "Leo", "Virgo", "Libra", "Escorpio", 
  "Sagitario", "Capricornio", "Acuario", "Piscis"
];

export async function getHoroscopeData() {
  const signs = await getAllHoroscopes();
  const today = new Date();
  const dateTitle = today.toLocaleDateString('es-ES', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
  });
  
  return {
    date: dateTitle.charAt(0).toUpperCase() + dateTitle.slice(1),
    signs
  };
}

export async function getAllHoroscopes() {
  try {
    const res = await fetch("https://api.xor.cl/tyaas/", { next: { revalidate: 14400 } }); // Cache 4h
    if (!res.ok) throw new Error("API Horoscope failed");
    
    const data = await res.json();
    const apiSigns = data.horoscopo || {};

    return zodiacSigns.map(sign => {
      const slug = sign.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const entry = apiSigns[slug] || {};
      
      return {
        sign,
        love: entry.amor || "Día estable en lo sentimental.",
        money: entry.dinero || "Mantén prudencia con tus gastos hoy.",
        health: entry.salud || "Energía positiva para tu bienestar físico.",
        text: `Hoy ${sign}, los astros indican: ${entry.amor || ''} ${entry.dinero || ''}`.trim() || `Excelente día para ${sign} en todo lo relacionado con proyectos personales.`
      };
    });
  } catch (error) {
    console.warn("Using fallback horoscopes:", error.message);
    return zodiacSigns.map(sign => ({
      sign,
      love: "Día para conectar profundamente con tu pareja.",
      money: "Una entrada de dinero inesperada te dará alivio.",
      health: "Excelente energía vital para emprender nuevos hábitos.",
      text: `Hoy ${sign} se verá influenciado por los astros de una manera muy positiva, especialmente en el ámbito creativo.`
    }));
  }
}
