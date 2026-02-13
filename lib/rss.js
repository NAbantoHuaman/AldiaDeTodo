import Parser from 'rss-parser';
import crypto from 'crypto';

// Initialize RSS Parser
const parser = new Parser({
    customFields: {
        item: [
            ['media:content', 'media'], 
            ['media:thumbnail', 'thumbnail'],
            ['enclosure', 'enclosure'],
            ['content:encoded', 'contentEncoded']
        ],
    }
});

// Curated list of high-quality feeds
const FEEDS = [
    { 
        id: 'bbc',
        name: 'BBC Mundo', 
        url: 'http://feeds.bbci.co.uk/mundo/rss.xml',
        category: 'Mundo',
        color: 'bg-red-700'
    },
    { 
        id: 'elpais',
        name: 'El País', 
        url: 'https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/internacional/portada',
        category: 'Internacional',
        color: 'bg-blue-600'
    },
    { 
        id: 'dw',
        name: 'DW Español', 
        url: 'https://rss.dw.com/xml/rss-sp-all',
        category: 'Actualidad',
        color: 'bg-orange-500'
    },
    {
        id: 'france24',
        name: 'France 24',
        url: 'https://www.france24.com/es/rss',
        category: 'Mundo',
        color: 'bg-blue-400'
    },
    {
        id: 'marca',
        name: 'Marca',
        url: 'https://e00-marca.uecdn.es/rss/portada.xml',
        category: 'Deportes',
        color: 'bg-red-500'
    },
    {
        id: 'xataka',
        name: 'Xataka',
        url: 'https://feeds.weblogssl.com/xataka2',
        category: 'Tecnología',
        color: 'bg-green-600'
    },
    {
        id: 'france24_eco',
        name: 'France 24 Economía',
        url: 'https://www.france24.com/es/economia/rss',
        category: 'Economía',
        color: 'bg-yellow-600'
    },
    {
        id: 'euronews',
        name: 'Euronews',
        url: 'https://es.euronews.com/rss',
        category: 'Actualidad',
        color: 'bg-blue-800'
    }
];

// Helper to generate a consistent ID from title
function generateId(title) {
    return crypto.createHash('md5').update(title).digest('hex').substring(0, 10);
}

// Helper to generate a slug
function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
}

// Helper to extract image from RSS item
function extractImage(item, category) {
    let imageUrl = null;

    // 1. Check media:content (Common standard)
    if (item.media && item.media.$ && item.media.$.url) {
        imageUrl = item.media.$.url;
    }
    // 2. Check enclosure (Standard RSS)
    else if (item.enclosure && item.enclosure.url && item.enclosure.type && item.enclosure.type.startsWith('image')) {
        imageUrl = item.enclosure.url;
    }
    // 3. Check thumbnail (Often low res, but better than nothing)
    else if (item.thumbnail && item.thumbnail.$ && item.thumbnail.$.url) {
        imageUrl = item.thumbnail.$.url;
    }
    // 4. Check HTML content (for Xataka/others mostly)
    else if (item.contentEncoded || item.content) {
        const html = item.contentEncoded || item.content;
        const match = html.match(/src=["']([^"']+\.(jpg|jpeg|png|webp|gif))["']/i);
        if (match && match[1]) {
            imageUrl = match[1];
        }
    }

    // --- HIGH RESOLUTION UPGRADES ---
    if (imageUrl) {
        // Filter out Dailymotion URLs (France 24 embeds that return 403)
        if (imageUrl.includes('dailymotion.com')) {
            return null;
        }
        // BBC High Res
        if (imageUrl.includes('bbci.co.uk')) {
            return imageUrl.replace('/240/', '/800/');
        }
        // WeblogsSL (Xataka) http -> https
        if (imageUrl.startsWith('http://')) {
            imageUrl = imageUrl.replace('http://', 'https://');
        }
        return imageUrl;
    }
    
    // --- CATEGORY FALLBACKS ---
    // User requested to REMOVE articles without images instead of showing fallbacks.
    // So we return null here, and filter them out later.
    return null;
}

export async function getRSSNews() {
    let allNews = [];

    // Fetch all feeds in parallel
    const feedPromises = FEEDS.map(async (source) => {
        try {
            console.log(`Fetching RSS: ${source.name}`);
            const feed = await parser.parseURL(source.url);
            
            // Map and Filter "Null Images" immediately
            return feed.items.map(item => {
                const title = item.title || "Noticia sin título";
                const date = item.pubDate ? new Date(item.pubDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }) : "Hoy";
                const img = extractImage(item, source.category);

                if (!img) return null; // Skip items without image

                return {
                    id: generateId(title),
                    title: title,
                    slug: generateSlug(title),
                    title: title,
                    slug: generateSlug(title),
                    excerpt: (() => {
                        // Prefer contentSnippet, then content
                        let text = item.contentSnippet || item.content || "Lea la noticia completa...";
                        // Remove HTML tags
                        text = text.replace(/<[^>]*>?/gm, '');
                        // Remove common RSS junk
                        text = text.replace(/En Xataka.*/g, '')
                                   .replace(/Publicado originalmente en.*/g, '')
                                   .replace(/Lee la noticia completa.*/g, '')
                                   .replace(/\s+/g, ' ').trim();
                        // Truncate if too long (it's just a teaser now)
                        if (text.length > 250) text = text.substring(0, 250) + "...";
                        return text;
                    })(),
                    content: item.contentEncoded || item.content || "", // Sometimes full content is here
                    image: img,
                    category: source.category, // Or mapped from item.categories
                    author: item.creator || source.name,
                    date: date,
                    link: item.link, // CRITIAL: Original URL for Reader Mode
                    source: source.name,
                    sourceColor: source.color
                };
            }).filter(Boolean); // Remove nulls
            

        } catch (error) {
            console.error(`Error fetching ${source.name}:`, error.message);
            return [];
        }
    });

    const results = await Promise.all(feedPromises);
    
    // --- ROUND ROBIN INTERLEAVING ---
    // Instead of sorting purely by date (which might show 20 BBC items in a row),
    // we take 1 from BBC, 1 from Marca, 1 from Xataka, etc.
    const mixedNews = [];
    const maxItems = Math.max(...results.map(r => r.length));
    
    for (let i = 0; i < maxItems; i++) {
        for (const feedItems of results) {
            if (feedItems[i]) {
                mixedNews.push(feedItems[i]);
            }
        }
    }

    // Remove duplicates (by link or title)
    const uniqueNews = Array.from(new Map(mixedNews.map(item => [item.title, item])).values());
    
    // We still allow a cleaner return, but now it's mixed by source.
    return uniqueNews;
}
