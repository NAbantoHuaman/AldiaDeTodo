const { PrismaClient } = require('./node_modules/@prisma/client');
const p = new PrismaClient();

const updates = [
  { slug: "explosion-blue-origin-carrera-espacial-2026", img: "/images/blue_origin_explosion_1780182063124.png" },
  { slug: "vacunas-arnm-ensayos-clinicos-cancer-2026", img: "/images/mrna_vaccine_cancer_1780182075455.png" },
  { slug: "ola-calor-prematura-cambio-climatico-2026", img: "/images/extreme_heatwave_1780182088957.png" },
  { slug: "anthropic-valoracion-billon-dolares-ia-2026", img: "/images/anthropic_ai_1780182115372.png" },
  { slug: "mundial-2026-revolucion-tecnologica-estadios", img: "/images/world_cup_tech_1780182131167.png" },
  { slug: "tratado-global-ia-acuerdo-ginebra-2026", img: "/images/ai_treaty_geneva_1780182147371.png" },
  { slug: "spacex-opi-mayor-historia-economia-2026", img: "/images/spacex_ipo_1780182169209.png" },
  { slug: "crisis-identidad-digital-filtracion-biometrica-2026", img: "/images/biometric_hack_1780182184788.png" },
  { slug: "cine-musica-ia-generativa-contratos-hollywood-2026", img: "/images/hollywood_ai_1780182206431.png" },
  { slug: "desintoxicacion-dopaminergica-pandemia-atencion-2026", img: "/images/dopamine_detox_1780182221049.png" },
];

(async () => {
  for (const u of updates) {
    try {
      await p.article.update({
        where: { slug: u.slug },
        data: { image: u.img }
      });
      console.log('✅ ' + u.slug + ' actualizado con imagen.');
    } catch (e) {
      console.log('❌ Error ' + u.slug + ': ' + e.message);
    }
  }
  await p.$disconnect();
})();
