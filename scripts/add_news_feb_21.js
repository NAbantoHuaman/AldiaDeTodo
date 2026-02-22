const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
  console.log('Reading JSON articles...');
  const dirPath = path.join(__dirname, 'news_feb21');
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.json'));
  const newArticles = [];
  
  for (const file of files) {
    const rawData = fs.readFileSync(path.join(dirPath, file), 'utf-8');
    try {
      const data = JSON.parse(rawData);
      newArticles.push(data);
    } catch(e) {
      console.error(`Error parsing ${file}:`, e);
    }
  }

  console.log(`Found ${newArticles.length} articles to insert.`);

  const categories = [...new Set(newArticles.map(a => a.category))];
  for (const cat of categories) {
    await prisma.category.upsert({
      where: { name: cat },
      update: {},
      create: { name: cat, color: '#4F46E5' }
    });
  }

  const catDb = await prisma.category.findMany();
  const catMap = {};
  catDb.forEach(c => catMap[c.name] = c.id);

  let count = 0;
  for (const article of newArticles) {
    await prisma.article.upsert({
      where: { slug: article.slug },
      update: {
        title: article.title,
        date: article.date,
        time: '12:00 PM',
        image: article.image || '',
        content: article.content,
        categoryId: catMap[article.category],
        isNews: false,
        updatedAt: new Date()
      },
      create: {
        title: article.title,
        slug: article.slug,
        date: article.date,
        time: '12:00 PM',
        image: article.image || '',
        content: article.content,
        categoryId: catMap[article.category],
        isNews: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });
    console.log(`- Upserted: ${article.title}`);
    count++;
  }

  console.log(`Successfully migrated/updated ${count} high quality analytical news articles for Feb 21.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
