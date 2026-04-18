const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  const categories = await prisma.category.findMany();
  categories.forEach(c => console.log(`${c.id} | ${c.name} | ${c.slug}`));
}
main().finally(() => prisma.$disconnect());
