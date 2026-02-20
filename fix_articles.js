const fs = require('fs');

let content = fs.readFileSync('lib/articles.js', 'utf8');

// The file has a duplicate block in fullContent that we want to fix.
// We also want to fix the IDs of the newly added 10 articles.
// The true new articles (from Cumbre de Paz) were assigned 44 to 53.
// But 44-47 were already taken by Milano Cortina, Venezuela, IA, and Detox.
// So the 10 new ones should be 48 to 57.

// Let's first rename the IDs in the ARTICLES array.
// We look for `{ id: 44, title: "Cumbre de Paz en Washington` and so on.
let idMap = {
  44: 48,
  45: 49,
  46: 50,
  47: 51,
  48: 52,
  49: 53,
  50: 54,
  51: 55,
  52: 56,
  53: 57
};

for (const [oldId, newId] of Object.entries(idMap)) {
  content = content.replace(
    new RegExp(`id: ${oldId}, title: "(Cumbre|La IA bajo|Tensión|Terremoto|El escándalo|Cambio de|Jornada|Caos|El mundo|Misión)`),
    `id: ${newId}, title: "$1`
  );
  
  // also fix in fullContent
  // The full content for these is:
  // 44: `...\n    <p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">El escenario geopolítico...
  // 45: `...\n    <p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">El vertiginoso...
  // 46: `...\n    <p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">El frágil...
  // 47: `...\n    <p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">El clamor...
  // 48: `...\n    <p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">Los fantasmas...
  // 49: `...\n    <p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">Hoy es un día...
  // 50: `...\n    <p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">La jornada de hoy...
  // 51: `...\n    <p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">El tráfico regular...
  // 52: `...\n    <p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">El avistamiento...
  // 53: `...\n    <p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">El congreso internacional... (wait, snippet is: <p clas...)

  if (oldId === '44') {
    content = content.replace(/44: \`\n\s*<p class="lead-text[^>]*>El escenario/g, `${newId}: \`\n    <p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">El escenario`);
  } else if (oldId === '45') {
    content = content.replace(/45: \`\n\s*<p class="lead-text[^>]*>El vertiginoso/g, `${newId}: \`\n    <p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">El vertiginoso`);
  } else if (oldId === '46') {
    content = content.replace(/46: \`\n\s*<p class="lead-text[^>]*>El frágil/g, `${newId}: \`\n    <p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">El frágil`);
  } else if (oldId === '47') {
    content = content.replace(/47: \`\n\s*<p class="lead-text[^>]*>El clamor/g, `${newId}: \`\n    <p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">El clamor`);
  } else if (oldId === '48') {
    content = content.replace(/48: \`\n\s*<p class="lead-text[^>]*>Los fantasmas/g, `${newId}: \`\n    <p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">Los fantasmas`);
  } else if (oldId === '49') {
    content = content.replace(/49: \`\n\s*<p class="lead-text[^>]*>Hoy es un día/g, `${newId}: \`\n    <p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">Hoy es un día`);
  } else if (oldId === '50') {
    content = content.replace(/50: \`\n\s*<p class="lead-text[^>]*>La jornada de hoy/g, `${newId}: \`\n    <p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">La jornada de hoy`);
  } else if (oldId === '51') {
    content = content.replace(/51: \`\n\s*<p class="lead-text[^>]*>El tráfico regular/g, `${newId}: \`\n    <p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">El tráfico regular`);
  } else if (oldId === '52') {
    content = content.replace(/52: \`\n\s*<p class="lead-text[^>]*>El avistamiento/g, `${newId}: \`\n    <p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">El avistamiento`);
  } else if (oldId === '53') {
    content = content.replace(/53: \`\n\s*<p clas/g, `${newId}: \`\n    <p clas`);
  }
}

// Next, let's remove the duplicated 41-47 section that appeared in the middle.
// We can find the second occurrence of 41: \`
let first41 = content.indexOf('41: `');
let second41 = content.indexOf('41: `', first41 + 1);

let first42 = content.indexOf('42: `');
let second42 = content.indexOf('42: `', first42 + 1);

let first43 = content.indexOf('43: `');
let second43 = content.indexOf('43: `', first43 + 1);

let first44 = content.indexOf('44: `');
let second44 = content.indexOf('44: `', first44 + 1); // wait, we already renamed the third 44 to 48!

let first48 = content.indexOf('48: `'); // the 48 we just made

// We should be careful to wipe out the extra duplicate chunk!
// The duplicate chunk is roughly from second41 up to second47's end.
if (second41 > -1 && second42 > -1 && second43 > -1) {
  // It looks like lines 1686 to 1888 were the duplicates.
  // Wait, I can just use a regex to match the duplicate text and replace the second instance.
  // Actually, I'll just write it manually: 
  let chunkStart = content.indexOf('41: `', first41 + 10);
  let chunkEnd = content.indexOf('48: `');
  
  if (chunkStart !== -1 && chunkEnd !== -1 && chunkStart < chunkEnd) {
    // We can just find the comma before 48
    let chunkEndComma = content.lastIndexOf(',', chunkEnd);
    if (chunkEndComma > chunkStart) {
        content = content.substring(0, chunkStart) + content.substring(chunkEnd);
    }
  }
}

fs.writeFileSync('lib/articles.js', content, 'utf8');
console.log("Fixed lib/articles.js");
