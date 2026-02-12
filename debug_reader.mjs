import { extractArticleContent } from './lib/reader.js';

// Test with a few common Spanish news sites to check compatibility
const urls = [
  "https://www.bbc.com/mundo/articles/c4n91491z11o", // BBC usually static friendly
  "https://elpais.com", // Often strict
];

async function test() {
    console.log("Starting Reader Debug...");
    
    // Let's test a recent El Pais URL
    const testUrl = "https://elpais.com/internacional/2024-06-19/putin-y-kim-jong-un-firman-un-acuerdo-de-asociacion-estrategica.html"; 
    
    console.log(`Testing URL: ${testUrl}`);
    const result = await extractArticleContent(testUrl);
    
    if (result) {
        console.log("SUCCESS!");
        console.log("Title:", result.title);
        console.log("Content Length:", result.content.length);
        console.log("Excerpt:", result.excerpt);
    } else {
        console.log("FAILED to extract content.");
    }
}

test();
