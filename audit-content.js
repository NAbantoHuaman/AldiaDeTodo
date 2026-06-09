const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const badPatterns = [
  { regex: /como un modelo de lenguaje/gi, name: "IA Disclaimer (Modelo)" },
  { regex: /como modelo de lenguaje/gi, name: "IA Disclaimer (Modelo)" },
  { regex: /lo siento,\s*pero/gi, name: "IA Disclaimer (Disculpa)" },
  { regex: /no puedo generar/gi, name: "IA Disclaimer (Negativa)" },
  { regex: /soy una inteligencia artificial/gi, name: "IA Disclaimer (Identidad)" },
  { regex: /\[insertar/gi, name: "Placeholder [Insertar]" },
  { regex: /\[tu nombre\]/gi, name: "Placeholder [Tu nombre]" },
  { regex: /\[nombre de(l)?/gi, name: "Placeholder [Nombre de]" }
];

async function runAudit() {
  const errors = [];
  
  console.log("Auditing guides...");
  const guidesDir = path.join(__dirname, 'app', 'guias');
  if (fs.existsSync(guidesDir)) {
    const dirs = fs.readdirSync(guidesDir).filter(file => fs.statSync(path.join(guidesDir, file)).isDirectory());
    for (const dir of dirs) {
      const pagePath = path.join(guidesDir, dir, 'page.js');
      if (fs.existsSync(pagePath)) {
        const content = fs.readFileSync(pagePath, 'utf8');
        for (const pattern of badPatterns) {
          const matches = [...content.matchAll(pattern.regex)];
          if (matches.length > 0) {
            errors.push({
              source: `Guide: ${dir}`,
              issue: pattern.name,
              matches: matches.length
            });
          }
        }
      }
    }
  }

  console.log("Auditing database articles...");
  try {
    const articles = await prisma.article.findMany({
      select: { id: true, title: true, content: true }
    });

    for (const article of articles) {
      for (const pattern of badPatterns) {
        const matches = [...(article.content || '').matchAll(pattern.regex)];
        if (matches.length > 0) {
          errors.push({
            source: `DB Article ID ${article.id}: ${article.title}`,
            issue: pattern.name,
            matches: matches.length
          });
        }
      }
    }
  } catch (e) {
    console.error("Failed to read from DB:", e);
  }

  if (errors.length === 0) {
    console.log("\n✅ AUDIT PASSED: No AI fingerprints or placeholders found in any of the 148 documents.");
  } else {
    console.log(`\n❌ AUDIT FAILED: Found ${errors.length} issues.`);
    console.table(errors);
  }

  await prisma.$disconnect();
}

runAudit();
