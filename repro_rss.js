
const Parser = require('rss-parser');
const parser = new Parser();

(async () => {
  try {
    console.log('Testing rss-parser...');
    // Use a dummy feed or a real one if network allows. 
    // Ideally I should mock it, but let's try a simple URL parse if possible.
    // Actually, let's just use one of the URLs from the user's code.
    const url = 'https://feeds.bbci.co.uk/mundo/rss.xml';
    await parser.parseURL(url);
    console.log('Finished parsing.');
  } catch (e) {
    console.error('Error:', e.message);
  }
})();
