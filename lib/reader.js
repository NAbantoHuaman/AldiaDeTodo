import { JSDOM } from 'jsdom';
import { Readability } from '@mozilla/readability';

/**
 * Extracts reader-friendly content using a Hybrid Strategy (Cloud + Local).
 * 1. Try Jina.ai (best for bypassing complex JS).
 * 2. Fallback to Local Readability (best for simple HTML/static sites).
 */
export async function extractArticleContent(url) {
  if (!url) return null;

  try {
    // --- STRATEGY 1: Jina.ai (Cloud Reader) ---
    console.log(`[Reader] Strategy 1 (Jina) for: ${url}`);
    try {
        const jinaUrl = `https://r.jina.ai/${url}`;
        const response = await fetch(jinaUrl, {
            headers: { 
                'User-Agent': 'Mozilla/5.0 (compatible; AldiaDeTodo/1.0)',
                'X-Return-Format': 'html' 
            },
            signal: AbortSignal.timeout(5000) // 5s timeout for Jina
        });

        if (response.ok) {
            const jinaHtml = await response.text();
            // Jina "failure" often looks like a short cookie message. 
            // We require at least 600 chars to call it a success.
            if (jinaHtml && jinaHtml.length > 600) {
                console.log(`[Reader] Jina Success (${jinaHtml.length} chars)`);
                return {
                    content: jinaHtml,
                    siteName: new URL(url).hostname,
                    source: 'jina'
                };
            }
            console.warn(`[Reader] Jina result too short (${jinaHtml.length} chars). Trying fallback...`);
        }
    } catch (e) {
        console.warn(`[Reader] Jina failed: ${e.message}`);
    }

    // --- STRATEGY 2: Local Readability (Direct Fetch) ---
    console.log(`[Reader] Strategy 2 (Local) for: ${url}`);
    
    const localResponse = await fetch(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'es-ES,es;q=0.9',
            'Cache-Control': 'no-cache'
        },
        signal: AbortSignal.timeout(8000) // 8s timeout for local
    });

    if (!localResponse.ok) {
        console.error(`[Reader] Local Fetch failed: ${localResponse.status}`);
        return null; // Both failed
    }

    const html = await localResponse.text();
    const doc = new JSDOM(html, { url });
    const reader = new Readability(doc.window.document);
    const article = reader.parse();

    if (article && article.content && article.content.length > 300) {
        console.log(`[Reader] Local Readability Success (${article.content.length} chars)`);
        return {
            title: article.title,
            content: article.content, // HTML
            textContent: article.textContent,
            excerpt: article.excerpt,
            siteName: article.siteName || new URL(url).hostname,
            source: 'local'
        };
    }

    console.warn("[Reader] All strategies exhausted. Returning null.");
    return null;

  } catch (error) {
    console.error(`[Reader] Critical Error: ${error.message}`);
    return null;
  }
}
