import Parser from 'rss-parser';
import crypto from 'crypto';

// Initialize RSS Parser
const parser = new Parser({
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    },
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
    },
    // --- Fuentes peruanas ---
    {
        id: 'elcomercio',
        name: 'El Comercio',
        url: 'https://elcomercio.pe/arcio/rss/',
        category: 'Perú',
        color: 'bg-emerald-700'
    },
    {
        id: 'rpp',
        name: 'RPP Noticias',
        url: 'https://rpp.pe/feed',
        category: 'Perú',
        color: 'bg-sky-600'
    },
    {
        id: 'gestion',
        name: 'Gestión',
        url: 'https://gestion.pe/arcio/rss/',
        category: 'Economía',
        color: 'bg-amber-600'
    },
    // --- Ciencia y Clima ---
    {
        id: 'investing',
        name: 'Investing.com',
        url: 'https://es.investing.com/rss/news.rss',
        category: 'Economía',
        color: 'bg-slate-700'
    },
    // --- Ciencia y Clima (Fuentes Estables) ---
    {
        id: 'elpais_ciencia',
        name: 'El País Ciencia',
        url: 'https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/ciencia/portada',
        category: 'Ciencia',
        color: 'bg-indigo-600'
    }
];

// Helper to generate a consistent ID from title
function generateId(title) {
    return crypto.createHash('md5').update(title).digest('hex').substring(0, 10);
}

// Helper to decode HTML entities like &#039; or &quot;
function decodeHTMLEntities(text) {
    if (!text) return "";
    return text
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&apos;/g, "'")
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&nbsp;/g, ' ')
        .replace(/&#8211;/g, '-')
        .replace(/&#8212;/g, '--')
        .replace(/&#8216;/g, "'")
        .replace(/&#8217;/g, "'")
        .replace(/&#8220;/g, '"')
        .replace(/&#8221;/g, '"')
        .replace(/&#191;/g, '¿')
        .replace(/&#161;/g, '¡');
}

// Helper to generate a slug
function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
}

// Helper to validate that an image URL is actually a real, usable image
function isValidImageUrl(url) {
    if (!url || typeof url !== 'string') return false;
    
    // Must be a proper URL
    if (!url.startsWith('http://') && !url.startsWith('https://')) return false;

    const lowerUrl = url.toLowerCase();
    
    // Block known bad domains/patterns
    const BLOCKED_PATTERNS = [
        'dailymotion.com',       // France 24 video embeds (403)
        'pixel.',                // Tracking pixels
        'tracker.',              // Tracking
        'analytics.',            // Analytics beacons
        'gravatar.com/avatar',   // Tiny author avatars
        'feedburner.com',        // Feed tracking
        'feeds.feedburner',      // Feed tracking
        '/1x1.',                 // 1x1 tracking pixels
        '/blank.',               // Blank images
        'data:image',            // Base64 inline (not a URL)
        'badge.',                // Social badges
        '.svg',                  // SVG icons (usually logos, not article images)
        '.ico',                  // Favicons
        '/favicon',              // Favicons
        '/logo',                 // Site logos
        '/icon',                 // Icons
        'comScore',              // Tracking
        'doubleclick',           // Ad tracking
        'googlesyndication',     // Ad tracking
    ];

    for (const pattern of BLOCKED_PATTERNS) {
        if (lowerUrl.includes(pattern)) return false;
    }

    // Must look like an image URL (has image extension or known image CDN)
    const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'];
    const KNOWN_IMAGE_CDNS = [
        'bbci.co.uk', 'uecdn.es', 'prisa.io', 'france24.com',
        'euronews.com', 'weblogssl.com', 'cloudfront.net',
        'amazonaws.com', 'arcpublishing.com', 'elcomercio.pe',
        'rpp.pe', 'gestion.pe', 'akamaized.net', 'wp.com',
        'imgix.net', 'cloudinary.com'
    ];

    const hasImageExtension = IMAGE_EXTENSIONS.some(ext => lowerUrl.includes(ext));
    const isKnownCDN = KNOWN_IMAGE_CDNS.some(cdn => lowerUrl.includes(cdn));

    return hasImageExtension || isKnownCDN;
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
        const match = html.match(/src=["']([^"']+\.(jpg|jpeg|png|webp|gif|avif))["']/i);
        if (match && match[1]) {
            imageUrl = match[1];
        }
    }

    // --- VALIDATE IMAGE ---
    if (!isValidImageUrl(imageUrl)) {
        return null;
    }

    // --- HIGH RESOLUTION UPGRADES ---
    // BBC High Res
    if (imageUrl.includes('bbci.co.uk')) {
        imageUrl = imageUrl.replace('/240/', '/800/');
    }
    // WeblogsSL (Xataka) http -> https
    if (imageUrl.startsWith('http://')) {
        imageUrl = imageUrl.replace('http://', 'https://');
    }

    return imageUrl;
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

                const cleanTitle = decodeHTMLEntities(title.replace(/<[^>]*>?/gm, ''));
                const cleanExcerpt = decodeHTMLEntities((() => {
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
                })());

                return {
                    id: generateId(title),
                    title: cleanTitle,
                    slug: generateSlug(cleanTitle),
                    excerpt: cleanExcerpt,
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
