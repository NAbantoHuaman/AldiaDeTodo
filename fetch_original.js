const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getSample() {
  const article = await prisma.article.findFirst({
    where: { 
      // Skip the ones we just added to find an old one
      NOT: {
         slug: {
             in: [
                 "analisis-exhaustivo-primer-bloque-debates-presidenciales-peru-2026",
                 "panorama-electoral-2026-empate-tecnico-electorado-indeciso-encuestas",
                 "elecciones-peru-2026-propuestas-frente-crisis-inseguridad-reactivacion-economica"
             ]
         }
      }
    }
  });

  if (article) {
    console.log("=== ORIGINAL ARTICLE HTML ===");
    console.log(article.content);
  } else {
    console.log("No other articles found.");
  }
}

getSample()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
