/**
 * Sports Mapping Utility
 * Bridges API-Football and TheSportsDB using name-based caching/lookup.
 */

const mappingCache = new Map();

export async function getTheSportsDBTeamData(teamName) {
  const API_KEY = process.env.THESPORTSDB_KEY || "3";
  
  if (mappingCache.has(teamName)) {
    return mappingCache.get(teamName);
  }

  try {
    const res = await fetch(`https://www.thesportsdb.com/api/v1/json/${API_KEY}/searchteams.php?t=${encodeURIComponent(teamName)}`);
    const data = await res.json();

    if (data.teams && data.teams.length > 0) {
      const team = data.teams[0];
      const result = {
        stadium: team.strStadiumThumb,
        fanart: team.strTeamFanart1 || team.strTeamFanart2,
        banner: team.strTeamBanner,
        badge: team.strBadge,
        description: team.strDescriptionES || team.strDescriptionEN
      };
      mappingCache.set(teamName, result);
      return result;
    }
  } catch (error) {
    console.error(`Mapping error for ${teamName}:`, error);
  }

  return null;
}
