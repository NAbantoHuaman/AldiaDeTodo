import { NextResponse } from "next/server";

export async function POST(req) {
  const API_KEY = process.env.API_FOOTBALL_KEY;
  const HOST = "v3.football.api-sports.io";

  try {
    const { match } = await req.json();
    
    if (!match || !match.id) {
      return NextResponse.json({ error: "No match ID provided" }, { status: 400 });
    }

    // Fetch ALL events for the fixture
    const eventsRes = await fetch(`https://${HOST}/fixtures/events?fixture=${match.id}`, {
        headers: { "x-apisports-key": API_KEY, "x-rapidapi-host": HOST },
        next: { revalidate: 30 } 
    });
    const eventsData = await eventsRes.json();
    
    // Fetch Statistics too, just in case
    const statsRes = await fetch(`https://${HOST}/fixtures/statistics?fixture=${match.id}`, {
        headers: { "x-apisports-key": API_KEY, "x-rapidapi-host": HOST },
        next: { revalidate: 60 }
    });
    const statsData = await statsRes.json();

    return NextResponse.json({ 
      events: eventsData.response || [],
      stats: statsData.response || []
    });
  } catch (error) {
    console.error("Timeline API Error:", error);
    return NextResponse.json({ error: "Failed to fetch timeline data" }, { status: 500 });
  }
}
