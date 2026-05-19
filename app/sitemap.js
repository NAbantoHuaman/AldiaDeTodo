import prisma from '../lib/prisma';

export const dynamic = 'force-dynamic';

const BASE_URL = 'https://aldiadetodo.com';

export default async function sitemap() {
  // Static pages
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/guias`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/articulos`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // Removed /noticias - contains RSS scraped content that violates AdSense policies
    {
      url: `${BASE_URL}/categoria`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/acerca`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Guide pages (original content — high priority)
  const guidePages = [
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
    'narrativa-storytelling'
  ].map(slug => ({
    url: `${BASE_URL}/guias/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // All guide slugs (complete list)
  const additionalGuides = [
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
    'typescript-maestro',
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
  ].map(slug => ({
    url: `${BASE_URL}/guias/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // Dynamic article pages from database (ORIGINAL content only — exclude RSS/news)
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

  // Category pages from database
  const categories = await prisma.category.findMany({
    select: { name: true },
  });

  const categoryPages = categories.map((cat) => ({
    url: `${BASE_URL}/categoria/${encodeURIComponent(cat.name.toLowerCase().replace(/\s+/g, '-'))}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticPages, ...guidePages, ...additionalGuides, ...articlePages, ...categoryPages];
}
