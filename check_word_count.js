const fs = require('fs');
const path = require('path');

const guiasDir = path.join(__dirname, 'app', 'guias');

function countWords(text) {
  // 1. Remove JSX tags but keep their content
  let cleanText = text.replace(/<[^>]*>?/gm, ' ');
  
  // 2. Remove technical symbols that aren't words
  cleanText = cleanText.replace(/[{}[\]();=]/g, ' ');

  // 3. Extract words including Spanish characters (á, é, í, ó, ú, ñ, etc.)
  // We use the unicode property \p{L} for letters
  const words = cleanText.match(/[\wÀ-ÿ]+/g);
  
  return words ? words.length : 0;
}

const guias = fs.readdirSync(guiasDir).filter(f => fs.statSync(path.join(guiasDir, f)).isDirectory());

console.log('| Guía | Palabras | Estado (>3,500) |');
console.log('| :--- | :--- | :--- |');

guias.forEach(guia => {
  const pagePath = path.join(guiasDir, guia, 'page.js');
  if (fs.existsSync(pagePath)) {
    const content = fs.readFileSync(pagePath, 'utf8');
    const words = countWords(content);
    const status = words > 3500 ? '✅' : '❌';
    console.log(`| ${guia} | ${words.toLocaleString()} | ${status} |`);
  }
});
