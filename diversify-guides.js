const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'app', 'guias');

function getDirectories(srcPath) {
  return fs.readdirSync(srcPath)
    .map(file => path.join(srcPath, file))
    .filter(path => fs.statSync(path).isDirectory());
}

const eliteBadges = [
  "Actualizado 2026",
  "Guía Completa",
  "Nivel Avanzado",
  "Lectura Profunda",
  "Análisis Detallado",
  "Guía Práctica",
  "Edición 2026",
  "A Fondo"
];

const encyDescriptions = [
  "guía detallada",
  "análisis completo",
  "tutorial exhaustivo",
  "manual práctico",
  "recorrido a fondo",
  "guía paso a paso",
  "exploración profunda"
];

const wordCountReplacements = [
  "Descubre todo lo que necesitas saber.",
  "Con ejemplos prácticos y actualizados.",
  "Explicado de manera clara y directa.",
  "Tu punto de partida ideal.",
  "Todo en un solo lugar.",
  "Lectura altamente recomendada.",
  "Para todos los niveles."
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomDate() {
  const start = new Date(2026, 2, 1); // March 1, 2026
  const end = new Date(2026, 5, 1);   // June 1, 2026
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0];
}

const guideDirs = getDirectories(targetDir);

let processed = 0;

for (const dir of guideDirs) {
  const pagePath = path.join(dir, 'page.js');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');

    // 1. JSON-LD Author
    content = content.replace(
      /author:\s*\{\s*'@type':\s*'Organization',\s*name:\s*'AldiaDeTodo'\s*\}/g,
      `author: { '@type': 'Person', name: 'Nestor Abanto Huaman' }`
    );

    // 2. JSON-LD and general Dates
    const pubDate = getRandomDate();
    const modDate = getRandomDate();
    content = content.replace(/datePublished:\s*'2026-04-18'/g, `datePublished: '${pubDate}'`);
    content = content.replace(/dateModified:\s*'2026-04-[0-9]{2}'/g, `dateModified: '${pubDate}'`);

    // 3. Remove "+3,500 Palabras" badge
    content = content.replace(
      /<span className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 px-4 py-2 rounded-xl text-slate-900"><BookOpen className="w-4 h-4 text-[a-zA-Z0-9-]+-500" \/> \+3,?500 Palabras<\/span>/g,
      ''
    );

    // 4. Replace "Versión Élite 2026" badge
    content = content.replace(/Versión Élite 2026/g, () => getRandomItem(eliteBadges));

    // 5. Replace repetitive description phrases
    content = content.replace(/guía enciclopédica definitiva/gi, () => getRandomItem(encyDescriptions));
    content = content.replace(/Manual enciclopédico/gi, () => `Guía completa`);
    
    // 6. Replace "+3,500 palabras" in descriptions
    content = content.replace(/Más de 3,500 palabras\./gi, () => getRandomItem(wordCountReplacements));
    content = content.replace(/guía enciclopédica de más de 3,500 palabras/gi, () => "guía exhaustiva");
    content = content.replace(/\+3500 Palabras/gi, () => "Lectura Completa");

    // 7. Fix AuthorBox references just in case (we changed the component, but let's make sure it doesn't hardcode anything weird)
    // 8. Fix empty gaps from deleted badges
    content = content.replace(/<span\s*><\/span>/g, '');

    fs.writeFileSync(pagePath, content, 'utf8');
    processed++;
  }
}

console.log(`Processed ${processed} guides successfully.`);
