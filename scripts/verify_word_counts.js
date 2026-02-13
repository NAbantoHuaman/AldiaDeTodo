const fs = require('fs');
const path = require('path');

const articlesPath = path.join(__dirname, '../lib/articles.js');

try {
  const fileContent = fs.readFileSync(articlesPath, 'utf8');

  // Extract the fullContent object part
  // We look for "const fullContent = {" and parse until the closing brace before "export const generateArticleContent"
  // Actually, regex might be safer given the structure:
  // key: `content`
  
  // Let's use a regex to find all `id: content` pairs inside fullContent.
  // The structure is roughly:
  // const fullContent = {
  //   1: `...`,
  //   2: `...`,
  //   ...
  // };
  
  // We can match (\d+):\s*`([^`]*)` globally.
  const regex = /(\d+):\s*`([^`]*)`/g;
  let match;
  let count = 0;
  let issues = [];

  console.log("Analyzing article lengths...");

  while ((match = regex.exec(fileContent)) !== null) {
    const id = match[1];
    const content = match[2];
    
    // Strip HTML tags to get raw text
    const text = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const wordCount = text.split(' ').length;

    console.log(`Article ${id}: ${wordCount} words`);

    if (wordCount < 800) {
      issues.push({ id, wordCount });
    }
    count++;
  }

  console.log(`\nTotal articles checked: ${count}`);

  if (issues.length > 0) {
    console.error("\nERROR: The following articles are under 800 words:");
    issues.forEach(issue => console.error(`- Article ${issue.id}: ${issue.wordCount} words`));
    process.exit(1);
  } else {
    console.log("\nSUCCESS: All articles are over 800 words.");
    process.exit(0);
  }

} catch (err) {
  console.error("Error reading or parsing file:", err);
  process.exit(1);
}
