const fs = require('fs');
const path = require('path');

const GUIAS_DIR = path.join(__dirname, '../app/guias');

function countWords(str) {
  // Simple word count: remove HTML tags (for JSX content) and count spaces
  const clean = str.replace(/<[^>]*>?/gm, ' ');
  return clean.split(/\s+/).filter(word => word.length > 0).length;
}

const guias = fs.readdirSync(GUIAS_DIR).filter(f => {
    return fs.statSync(path.join(GUIAS_DIR, f)).isDirectory();
});

console.log('--- Word Count Audit ---');
let allGood = true;

guias.forEach(guia => {
    const pagePath = path.join(GUIAS_DIR, guia, 'page.js');
    if (fs.existsSync(pagePath)) {
        const content = fs.readFileSync(pagePath, 'utf8');
        const count = countWords(content);
        const status = count >= 1000 ? '✅' : '❌';
        console.log(`${status} ${guia}: ${count} words`);
        if (count < 1000) allGood = false;
    }
});

if (allGood) {
    console.log('\n✨ All guides meet the 1,000 word threshold for AdSense!');
} else {
    console.log('\n⚠️ Some guides are still too short.');
}
