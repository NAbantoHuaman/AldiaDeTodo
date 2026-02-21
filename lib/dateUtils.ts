export function parseSpanishDate(dateString: string): number {
  if (!dateString) return 0;
  
  const months: Record<string, number> = {
    'enero': 0, 'ene': 0, 'jan': 0,
    'febrero': 1, 'feb': 1,
    'marzo': 2, 'mar': 2,
    'abril': 3, 'abr': 3, 'apr': 3,
    'mayo': 4, 'may': 4,
    'junio': 5, 'jun': 5,
    'julio': 6, 'jul': 6,
    'agosto': 7, 'ago': 7, 'aug': 7,
    'septiembre': 8, 'sep': 8,
    'octubre': 9, 'oct': 9,
    'noviembre': 10, 'nov': 10,
    'diciembre': 11, 'dic': 11, 'dec': 11
  };

  try {
    const cleanStr = dateString.toLowerCase().replace(/\bde\b/g, '').trim();
    const parts = cleanStr.split(/\s+/);
    
    if (parts.length >= 3) {
      let day = parseInt(parts[0], 10);
      let monthStr = parts[1];
      let year = parseInt(parts[2], 10);
      
      let month = 0;
      for (const [key, val] of Object.entries(months)) {
        if (monthStr.startsWith(key)) {
          month = val;
          break;
        }
      }
      return new Date(year, month, day).getTime();
    }
    
    // Fallback for standard JS parse
    const fallback = new Date(dateString).getTime();
    return isNaN(fallback) ? 0 : fallback;
  } catch (e) {
    return 0;
  }
}
