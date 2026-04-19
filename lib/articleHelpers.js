/**
 * News categories that should be routed under /noticias/
 */
export const NEWS_CATEGORIES = [
  "Actualidad", 
  "Política", 
  "Mundo", 
  "Noticias", 
  "Tecnología", 
  "Deportes", 
  "Entretenimiento", 
  "Economía", 
  "Negocios",
  "Internacional"
];

/**
 * Determines if an article object represents a news item.
 * Supports both DB articles and RSS dynamic articles.
 */
export function isNewsContent(article) {
  if (!article) return false;

  // 1. Explicit flags (La DB tiene la palabra final)
  if (typeof article.isNews === 'boolean') {
    return article.isNews;
  }

  if (article.isDynamic === true) return true;

  // 2. Category check (Fallback para noticias externas / RSS que no tienen isNews definido)
  const categoryName = typeof article.category === 'string' 
    ? article.category 
    : article.category?.name;

  if (categoryName && NEWS_CATEGORIES.includes(categoryName)) {
    return true;
  }

  // 3. Metadata check (fallback for RSS transformer structure if passed differently)
  if (article.metadata?.isDynamic) return true;

  return false;
}

/**
 * Returns the base segment for the URL (noticias or articulos)
 */
export function getArticleBaseUrl(article) {
  return isNewsContent(article) ? "noticias" : "articulos";
}
