import Parser from 'rss-parser';
import { extractArticleContent } from './lib/reader.js';

const parser = new Parser();

const FEEDS = [
    { name: 'BBC Mundo', url: 'http://feeds.bbci.co.uk/mundo/rss.xml' },
    { name: 'El País', url: 'https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/internacional/portada' },
    { name: 'DW Español', url: 'https://rss.dw.com/xml/rss-sp-all' }
];

async function testFeeds() {
    console.log("Testing High-Quality RSS Feeds...");
    
    for (const feed of FEEDS) {
        console.log(`\n--- Fetching ${feed.name} ---`);
        try {
            const result = await parser.parseURL(feed.url);
            console.log(`Found ${result.items.length} items.`);
            
            // Test the first item with our extraction engine
            if (result.items.length > 0) {
                const item = result.items[0];
                console.log(`Testing extraction for: ${item.title}`);
                console.log(`Link: ${item.link}`);
                
                const extracted = await extractArticleContent(item.link);
                if (extracted && extracted.content && extracted.content.length > 1000) {
                    console.log(`[SUCCESS] Extracted ${extracted.content.length} chars.`);
                } else {
                    console.log(`[FAIL] Extraction weak (${extracted?.content?.length || 0} chars).`);
                }
            }
        } catch (e) {
            console.error(`Error fetching ${feed.name}:`, e.message);
        }
    }
}

testFeeds();
