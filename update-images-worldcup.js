const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artifactsDir = 'C:\\Users\\USER\\.gemini\\antigravity-ide\\brain\\828a92d1-e878-4787-80d0-06f9fb1891ba';
const publicImagesDir = path.join(__dirname, 'public', 'images', 'noticias');

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

const mappings = [
  { slug: 'estadio-azteca-inauguracion-mundial-2026', prefix: 'art1_mundial' },
  { slug: 'analisis-tactico-favoritas-mundial-2026', prefix: 'art2_tactics' },
  { slug: 'impacto-economico-mundial-norteamerica-2026', prefix: 'art3_economy' },
  { slug: 'evolucion-var-inteligencia-artificial-mundial-2026', prefix: 'art4_var_ai' },
  { slug: 'ley-europea-inteligencia-artificial-empresas', prefix: 'art5_eu_ai' },
  { slug: 'mision-artemis-iii-nasa-retraso-luna-2027', prefix: 'art6_artemis' },
  { slug: 'verano-extremo-2026-adaptacion-infraestructura-olas-calor', prefix: 'art7_heatwave' },
  { slug: 'semana-laboral-4-dias-europa-2026-productividad', prefix: 'art8_4days' },
  { slug: 'aprobada-nueva-terapia-genetica-crispr-edicion-base-2026', prefix: 'art9_crispr' },
  { slug: 'paradoja-bitcoin-2026-menor-volatilidad-adopcion-institucional', prefix: 'art10_bitcoin' }
];

async function updateImages() {
  const files = fs.readdirSync(artifactsDir);

  for (const map of mappings) {
    // Find the file that starts with the prefix
    const imageFile = files.find(f => f.startsWith(map.prefix) && f.endsWith('.png'));
    if (imageFile) {
      const sourcePath = path.join(artifactsDir, imageFile);
      const targetFileName = `${map.slug}.png`;
      const targetPath = path.join(publicImagesDir, targetFileName);
      
      // Copy file
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`Copied ${imageFile} to ${targetFileName}`);

      // Update Database
      const imageDbPath = `/images/noticias/${targetFileName}`;
      await prisma.article.updateMany({
        where: { slug: map.slug },
        data: { image: imageDbPath }
      });
      console.log(`Updated DB for ${map.slug}`);
    } else {
      console.log(`Could not find image for ${map.prefix}`);
    }
  }
}

updateImages()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
