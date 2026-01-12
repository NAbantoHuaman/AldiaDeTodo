import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || 'general';
  
  // 1. Check for API Key
  let apiKey = process.env.GNEWS_API_KEY;
  
  if (apiKey) {
    apiKey = apiKey.trim();
    console.log(`[Debug] API Key Status: Present (Length: ${apiKey.length}, StartsWith: ${apiKey.substring(0,4)})`);
  } else {
    console.log("[Debug] API Key Status: Missing");
  }

  // 2. Mock Data Fallback (if no key or for testing)
  if (!apiKey) {
    console.log("No GNEWS_API_KEY found. Serving mock data.");
    return NextResponse.json({
      totalArticles: 3,
      articles: [
        {
          title: "Avances significativos en la energía solar: ¿El fin del petróleo?",
          description: "Nuevas tecnologías de paneles solares prometen una eficiencia del 45%, lo que podría revolucionar el mercado energético global.",
          content: "Un equipo de investigadores en Suiza ha desarrollado...",
          url: "https://example.com/solar-news",
          image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
          publishedAt: new Date().toISOString(),
          source: { name: "EcoTech News", url: "https://example.com" }
        },
        {
          title: "La inteligencia artificial y el futuro del trabajo creativos",
          description: "Expertos debaten si las herramientas generativas son una amenaza o una ayuda para artistas y escritores.",
          content: "La conferencia anual de tecnología en San Francisco...",
          url: "https://example.com/ai-debate",
          image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
          publishedAt: new Date().toISOString(),
          source: { name: "TechDaily", url: "https://example.com" }
        },
        {
          title: "Descubren ciudad perdida en el Amazonas usando tecnología LIDAR",
          description: "Arqueólogos revelan una vasta red de asentamientos que desafía lo que sabíamos sobre las civilizaciones antiguas.",
          content: "Bajo la densa copa de los árboles...",
          url: "https://example.com/amazon-discovery",
          image: "https://images.unsplash.com/photo-1544983059-e970a09a5b32?auto=format&fit=crop&q=80&w=800",
          publishedAt: new Date().toISOString(),
          source: { name: "Science Today", url: "https://example.com" }
        }
      ]
    });
  }

  // 3. Real API Fetching (NewsData.io)
  try {
    // NewsData.io uses 'apikey', 'country' (mx), 'language' (es)
    // Endpoint: https://newsdata.io/api/1/news
    // Removing 'country=mx' for global news.
    // Adding categories to find "interesting" news: top, technology, science, entertainment
    const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=es&category=top,technology,science,entertainment`;
    
    console.log(`[Debug] Fetching from: ${apiUrl.replace(apiKey, 'HIDDEN_KEY')}`);

    const response = await fetch(apiUrl, {
        next: { revalidate: 3600 } 
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error("NewsData API Error Details:", errorText);
        throw new Error(`NewsData API Error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const externalData = await response.json();
    
    // Map NewsData.io format to our internal 'GNews-like' format to keep frontend compatible
    const articles = (externalData.results || []).map(item => ({
        title: item.title,
        description: item.description,
        content: item.content, // NewsData provides truncated content usually
        url: item.link,
        image: item.image_url, // NewsData uses image_url
        publishedAt: item.pubDate, // NewsData uses pubDate
        source: { 
            name: item.source_id || 'NewsData', 
            url: item.link 
        }
    }));

    return NextResponse.json({
        totalArticles: externalData.totalResults,
        articles: articles
    });

  } catch (error) {
    console.error("Error fetching from GNews:", error);
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
  }
}
