/**
 * Transforms a raw GNews/NewsData item into the application's Article format.
 * Includes simulated "originality" enhancements.
 */
export const transformNewsItem = (newsItem) => {
  // Use full content if available, otherwise description, otherwise fallback
  let coreContent = newsItem.content || newsItem.description || newsItem.ai_summary || "Sin contenido disponible.";
  
  // Filter out "Paid Plan" placeholders
  // NewsData.io puts this text when the field is restricted
  if (coreContent.includes("ONLY AVAILABLE IN PAID PLANS")) {
     // If description is also blocked or empty, try to salvage with just title or return null to skip
     if (newsItem.description && !newsItem.description.includes("ONLY AVAILABLE IN PAID PLANS")) {
        coreContent = newsItem.description;
     } else {
        return null; // Skip this article entirely
     }
  }
  
  // Create a unique slug using the title
  const slug = newsItem.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

  // Generate "Rewritten" Content with an Editorial Voice
  // Extended template to meet "longer content" requirement
  const htmlContent = `
    <p class="lead-text">${coreContent}</p>
  `;

  return {
    metadata: {
      id: newsItem.article_id || Math.random().toString(36).substr(2, 9), // Use unique ID from API or fallback
      title: newsItem.title,
      slug: slug,
      category: newsItem.category ? newsItem.category[0] : "Actualidad",
      date: new Date(newsItem.pubDate || Date.now()).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }),
      image: newsItem.image_url || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800", // Fallback image
      excerpt: coreContent.substring(0, 140) + "...",
      isDynamic: true // Flag to identify API articles
    },
    content: htmlContent,
    originalUrl: newsItem.link || newsItem.url
  };
};
