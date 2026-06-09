import prisma from '../lib/prisma';

export const dynamic = 'force-dynamic';

const BASE_URL = 'https://aldiadetodo.com';

// Static publication dates for guides (avoid sending new Date() which signals fake freshness)
const GUIDE_PUBLISH_DATE = new Date('2026-04-18');
const SITE_LAUNCH_DATE = new Date('2026-03-01');

export default async function sitemap() {
  // Static pages — use realistic dates, not new Date()
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/guias`,
      lastModified: GUIDE_PUBLISH_DATE,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/articulos`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // Removed /noticias — contains RSS scraped content
    // Removed /horoscopo, /deportes, /tiempo, /finanzas — API data pages with noindex
    {
      url: `${BASE_URL}/categoria`,
      lastModified: SITE_LAUNCH_DATE,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/acerca`,
      lastModified: SITE_LAUNCH_DATE,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: SITE_LAUNCH_DATE,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/privacidad`,
      lastModified: SITE_LAUNCH_DATE,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: SITE_LAUNCH_DATE,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];

  // All guide slugs (complete, deduplicated list — previously 'typescript-maestro' was duplicated)
  const allGuideSlugs = [
    'python-moderno',
    'javascript-es2026',
    'seguridad-desarrolladores',
    'alimentacion-saludable',
    'aprender-a-programar',
    'comunicacion-efectiva',
    'emprendimiento-digital',
    'como-ahorrar-dinero',
    'habitos-productivos',
    'bienestar-mental',
    'inteligencia-emocional',
    'typescript-maestro',
    'rust-seguridad',
    'go-microservicios',
    'sql-avanzado',
    'arquitectura-nosql',
    'react-19-rsc',
    'devsecops-pipeline',
    'ia-generativa-llm',
    'patrones-diseno',
    'kubernetes-escala',
    'flutter-pro',
    'hacking-etico',
    'gamedev-unity-godot',
    'machine-learning-python',
    'biohacking-longevidad',
    'estoicismo-practico',
    'cocina-nutricion-batch',
    'inversion-inmobiliaria',
    'narrativa-storytelling',
    'inversion-etfs-bolsa',
    'psicologia-dinero',
    'cripto-web3-seguro',
    'gestion-tiempo-avanzada',
    'liderazgo-remoto',
    'aprender-a-aprender',
    'optimizacion-sueno',
    'entrenamiento-fuerza',
    'ingenieria-prompts',
    'desarrollo-serverless',
    'ciberseguridad-personal',
    'primeros-auxilios-emocionales',
    'freelancing-profesional',
    'lectura-veloz-retencion',
    'minimalismo-digital',
    'nutricion-antiinflamatoria',
    'negociacion-salarial',
    'ia-para-creativos',
    'mindfulness-practico',
    'espacios-trabajo-productivos',
    'privacidad-redes-sociales',
    'impuestos-freelance',
  ];

  // Guide pages (original content — high priority)
  const guidePages = allGuideSlugs.map(slug => ({
    url: `${BASE_URL}/guias/${slug}`,
    lastModified: GUIDE_PUBLISH_DATE,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // Dynamic article pages from database (ORIGINAL content only — exclude news)
  const articles = await prisma.article.findMany({
    where: { isNews: false },
    select: { slug: true, updatedAt: true },
  });

  const articlePages = articles.map((article) => ({
    url: `${BASE_URL}/articulos/${article.slug}`,
    lastModified: article.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Category pages — only include categories that have original articles (not news categories)
  const categories = await prisma.category.findMany({
    where: {
      articles: {
        some: { isNews: false }
      }
    },
    select: { name: true },
  });

  // Exclude news-only categories from sitemap
  const NEWS_ONLY_CATEGORIES = [
    'Actualidad', 'Política', 'Mundo', 'Noticias', 
    'Deportes', 'Entretenimiento', 'Economía', 'Negocios', 
    'Internacional', 'Perú', 'Ciencia'
  ];

  const categoryPages = categories
    .filter(cat => !NEWS_ONLY_CATEGORIES.includes(cat.name))
    .map((cat) => ({
      url: `${BASE_URL}/categoria/${encodeURIComponent(cat.name.toLowerCase().replace(/\s+/g, '-'))}`,
      lastModified: SITE_LAUNCH_DATE,
      changeFrequency: 'monthly',
      priority: 0.5,
    }));

  return [...staticPages, ...guidePages, ...articlePages, ...categoryPages];
}
