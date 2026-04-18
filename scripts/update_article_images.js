const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
  console.log('Updating article images...');

  const updates = [
    {
      slug: 'artemis-ii-regreso-luna-mision-historica-2026',
      image: 'https://e01-elmundo.uecdn.es/assets/multimedia/imagenes/2026/04/12/17759825999051.jpg'
    },
    {
      slug: 'ia-agentica-agentes-inteligencia-artificial-transformacion-2026',
      image: 'https://www.iebschool.com/hub/wp-content/uploads/2024/11/image-38.jpg'
    },
    {
      slug: 'computacion-cuantica-chip-majorana-microsoft-2026',
      image: 'https://etl.capital/wp-content/uploads/2025/11/ETL-Capital_Blog_Computacion-cuantica-2026-1170x694.webp'
    }
  ];

  for (const update of updates) {
    const result = await prisma.article.update({
      where: { slug: update.slug },
      data: { image: update.image }
    });
    console.log(`✅ Updated: ${result.title}`);
  }

  console.log('\n🎉 Finished updating images.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
