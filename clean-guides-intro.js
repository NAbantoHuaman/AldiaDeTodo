const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'app', 'guias');

function getDirectories(srcPath) {
  return fs.readdirSync(srcPath)
    .map(file => path.join(srcPath, file))
    .filter(path => fs.statSync(path).isDirectory());
}

const guideDirs = getDirectories(targetDir);

let processed = 0;

for (const dir of guideDirs) {
  const pagePath = path.join(dir, 'page.js');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');

    // 1. Remove "Bienvenido al manual..." 
    content = content.replace(/Bienvenido al manual.*?\. /gi, '');

    // 2. Remove "Olvida..."
    content = content.replace(/Olvida .*?\. /gi, '');

    // 3. Transform "En esta guía exhaustiva/enciclopédica..." to just "En este artículo vamos a..." or "A continuación, vamos a..."
    content = content.replace(/En esta guía (exhaustiva|enciclopédica)( de más de [0-9,]+ palabras)?, vamos a /gi, 'A continuación, vamos a ');
    
    // Sometimes it's just "Esta guía exhaustiva disecciona..."
    content = content.replace(/Esta guía exhaustiva disecciona /gi, 'A continuación diseccionamos ');

    // 4. Remove "Prepárate para..." or "Estás a punto de leer..."
    content = content.replace(/Prepárate para .*?\./gi, '');
    content = content.replace(/Estás a punto de leer .*?\./gi, '');

    // Clean up double spaces that might result from removals
    content = content.replace(/  +/g, ' ');

    fs.writeFileSync(pagePath, content, 'utf8');
    processed++;
  }
}

console.log(`Cleaned intro paragraphs in ${processed} guides successfully.`);
