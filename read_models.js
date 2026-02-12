const fs = require('fs');
try {
  const data = fs.readFileSync('models.txt', 'utf8'); // Try utf8 first
  // If it's UTF-16LE (from PowerShell), this might look like garbage, but let's try.
  // Actually, let's just use the test-ai.mjs to PRINT strictly to stdout and not file.
  console.log(data);
} catch (err) {
  console.error(err);
}
