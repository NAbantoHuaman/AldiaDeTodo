const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.article.update({
    where: { slug: 'juegos-olimpicos-invierno-milan-cortina-ia-juez-oficial-2026' },
    data: {
      image: '/olympic_ai_judge.png'
    }
  });

  console.log(`Updated image for article: ${result.title}`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
