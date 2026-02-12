import Parser from 'rss-parser';

// Initialize RSS Parser with detailed fields
const parser = new Parser({
    customFields: {
        item: [
            ['media:content', 'media'], 
            ['media:thumbnail', 'thumbnail'],
            ['enclosure', 'enclosure'],
            ['content:encoded', 'contentEncoded'],
            ['description', 'description']
        ],
    }
});

const MARCA_FEED = 'https://e00-marca.uecdn.es/rss/portada.xml';
const XATAKA_FEED = 'https://feeds.weblogssl.com/xataka2';

async function inspectFeed(url, name) {
    console.log(`\nFetching ${name} Feed...`);
    try {
        const feed = await parser.parseURL(url);
        
        if (feed.items.length > 0) {
            const item = feed.items[0];
            console.log(`--- First Item (${name}) ---`);
            console.log("Title:", item.title);
            console.log("Media Content:", JSON.stringify(item.media, null, 2));
            console.log("Thumbnail:", JSON.stringify(item.thumbnail, null, 2));
            console.log("Enclosure:", JSON.stringify(item.enclosure, null, 2));
            console.log("Content Encoded:", item.contentEncoded ? item.contentEncoded.substring(0, 100) + "..." : "None");
        }
    } catch (error) {
        console.error(`Error fetching ${name}:`, error.message);
    }
}

async function run() {
    await inspectFeed(MARCA_FEED, "Marca");
    await inspectFeed(XATAKA_FEED, "Xataka");
}

run();
