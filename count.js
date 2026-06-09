const { PrismaClient } = require('./node_modules/@prisma/client');
const p = new PrismaClient();
p.article.count({where: {isNews: false}}).then(c => {
  console.log('Articulos: ' + c);
  return p.$disconnect();
});
