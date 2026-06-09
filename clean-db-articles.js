const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function cleanArticles() {
  console.log('Fetching articles from database...');
  const articles = await prisma.article.findMany({
    where: { isNews: false },
    select: { id: true, content: true }
  });

  console.log(`Found ${articles.length} articles to process.`);
  let updatedCount = 0;

  for (const article of articles) {
    let original = article.content;
    let text = original;

    // AI Fingerprint Replacements
    text = text.replace(/\bEn resumen,\b/gi, 'En síntesis,');
    text = text.replace(/\bEn conclusión,\b/gi, 'Como reflexión final,');
    text = text.replace(/\bEs importante destacar que\b/gi, 'Cabe señalar que');
    text = text.replace(/\bRecuerda que\b/gi, 'Ten en cuenta que');
    text = text.replace(/\buna espada de doble filo\b/gi, 'un arma de doble filo'); // Slightly less robotic, but maybe better to say 'tiene múltiples matices'
    text = text.replace(/\bes una espada de doble filo\b/gi, 'es un concepto con múltiples matices');
    text = text.replace(/\bNo cabe duda de que\b/gi, 'Claramente,');
    text = text.replace(/\bAdentrémonos en\b/gi, 'Exploremos');

    if (text !== original) {
      await prisma.article.update({
        where: { id: article.id },
        data: { content: text }
      });
      updatedCount++;
    }
  }

  console.log(`Successfully cleaned ${updatedCount} articles in the database.`);
}

cleanArticles()
  .catch(e => {
    console.error('Error during database cleanup:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
