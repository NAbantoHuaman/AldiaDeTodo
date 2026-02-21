import { PrismaClient } from '@prisma/client';
import { ARTICLES, CATEGORIES, generateArticleContent } from '../../../lib/articles';

const prisma = new PrismaClient();

export async function GET() {
  try {
    for (const catName of CATEGORIES) {
      await prisma.category.upsert({
        where: { name: catName },
        update: {},
        create: { name: catName, color: '#4F46E5' }
      });
    }

    const categories = await prisma.category.findMany();
    const catMap = {};
    categories.forEach(c => catMap[c.name] = c.id);

    let count = 0;
    for (const article of ARTICLES) {
      let content = generateArticleContent(article.id, article.title);
      if (!content) content = '<p>Contenido no disponible</p>';

      await prisma.article.upsert({
        where: { id: article.id },
        update: {
          title: article.title,
          date: article.date,
          time: '12:00 PM',
          image: article.image || '',
          content: content,
          categoryId: catMap[article.category] || categories[0].id,
          isNews: false,
        },
        create: {
          id: article.id,
          title: article.title,
          date: article.date,
          time: '12:00 PM',
          image: article.image || '',
          content: content,
          categoryId: catMap[article.category] || categories[0].id,
          isNews: false,
        }
      });
      count++;
    }
    return Response.json({ success: true, count, message: 'Migration complete' });
  } catch(e) {
    return Response.json({ success: false, error: e.message, stack: e.stack });
  }
}
