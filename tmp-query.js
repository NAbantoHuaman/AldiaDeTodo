const { PrismaClient } = require('./node_modules/@prisma/client');
const p = new PrismaClient();

(async () => {
  const cats = await p.category.findMany();
  cats.forEach(c => console.log('ID:', c.id, '| Nombre:', c.name, '| Color:', c.color));
  await p.$disconnect();
})();
