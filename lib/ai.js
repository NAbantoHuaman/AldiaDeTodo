import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export async function generateArticleAnalysis(title, content, category, source) {
  if (!process.env.GOOGLE_API_KEY) {
    console.warn("GOOGLE_API_KEY is missing. Skipping AI analysis.");
    return null;
  }

  let text = "";
  try {
    const prompt = `
      Actúa como un editor experto de un periódico digital serio y profesional llamado "Al Día de Todo".
      Tu tarea es escribir un análisis profundo y original para una noticia.
      
      Detalles de la noticia:
      Título: "${title}"
      Categoría: "${category}"
      Fuente Original: "${source}"
      Contenido Base: "${content}"

      Genera un objeto JSON con las siguientes secciones (asegúrate de que el tono sea profesional pero atractivo, usando negritas HTML <b> para resaltar frases clave):
      
      1. "hook": Un párrafo introductorio bajo el título "La Lupa Editorial". (Máximo 60 palabras).
      2. "key_points": Un array de strings. 3 puntos clave. (Máximo 15 palabras por punto).
      3. "context": Un dato curioso breve. (Máximo 40 palabras).
      4. "impact_title": Título corto para la sección de impacto (Máximo 5 palabras).
      5. "impact_content": Contenido de la sección de impacto. (Máximo 50 palabras).
      6. "conclusion_title": Título corto para la conclusión (Máximo 5 palabras).
      7. "conclusion_content": Contenido de la conclusión. (Máximo 40 palabras).

      Formato JSON esperado:
      {
        "hook": "texto...",
        "key_points": ["punto 1", "punto 2", "punto 3"],
        "context": "texto...",
        "impact_title": "Título...",
        "impact_content": "Contenido...",
        "conclusion_title": "Título...",
        "conclusion_content": "Contenido..."
      }
      
      Responde SOLO con el JSON válido.
    `;

    const schema = {
      type: "object",
      properties: {
        hook: { type: "string" },
        key_points: { type: "array", items: { type: "string" } },
        context: { type: "string" },
        impact_title: { type: "string" },
        impact_content: { type: "string" },
        conclusion_title: { type: "string" },
        conclusion_content: { type: "string" }
      },
      required: ["hook", "key_points", "context", "impact_title", "impact_content", "conclusion_title", "conclusion_content"]
    };

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { 
        responseMimeType: "application/json",
        responseSchema: schema,
        maxOutputTokens: 2000,
        temperature: 0.5,
      }
    });
    const response = await result.response;
    text = response.text();
    
    // Clean potential markdown blocks
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();

    return JSON.parse(text);
  } catch (error) {
    console.error("Error generating AI analysis:", error);
    // Log the failed text to debug what the AI actually returned
    if (error instanceof SyntaxError) {
        console.log("Failed AI Text Output:", text);
    }
    return null;
  }
}
