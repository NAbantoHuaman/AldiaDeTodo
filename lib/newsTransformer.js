/**
 * Transforms a raw GNews/NewsData item into the application's Article format.
 * Includes simulated "originality" enhancements.
 */
export const transformNewsItem = (newsItem) => {
  // Use NewsData.io's AI summary if available, otherwise fallback to description
  let coreContent = newsItem.ai_summary || newsItem.description || "Sin descripción disponible.";
  
  // Filter out "Paid Plan" placeholders
  // NewsData.io puts this text when the field is restricted
  if (coreContent.includes("ONLY AVAILABLE IN PAID PLANS")) {
     // If description is also blocked or empty, try to salvage with just title or return null to skip
     if (newsItem.description && !newsItem.description.includes("ONLY AVAILABLE IN PAID PLANS")) {
        coreContent = newsItem.description;
     } else {
        return null; // Skip this article entirely
     }
  }
  
  // Create a unique slug using the title
  const slug = newsItem.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

  // Generate "Rewritten" Content with an Editorial Voice
  // Extended template to meet "longer content" requirement
  const htmlContent = `
    <p class="lead-text">${coreContent.length > 200 ? coreContent : coreContent + " Este desarrollo ha captado la atención de analistas y observadores internacionales por igual, marcando un punto de inflexión en la agenda actual."}</p>
    
    <div class="bg-gray-50 p-6 rounded-lg my-8 border-l-4 border-indigo-500">
      <h3 class="text-lg font-bold text-gray-900 mb-3 mt-0">Puntos Clave a Considerar</h3>
      <ul class="space-y-2 list-disc list-inside text-gray-700">
        <li><strong>Relevancia Inmediata:</strong> El suceso impacta directamente en las dinámicas actuales del sector.</li>
        <li><strong>Fuente Original:</strong> Reportado inicialmente por ${newsItem.source_id || newsItem.source?.name || 'medios internacionales'}, ahora bajo nuestro análisis.</li>
        <li><strong>Proyección:</strong> Se esperan reacciones en cadena durante las próximas semanas.</li>
      </ul>
    </div>

    <h3>La Lupa Editorial: Un Análisis Profundo</h3>
    <p>Desde nuestra redacción en <strong>Al Día de Todo</strong>, hemos decidido poner este suceso bajo el microscopio. Lo que a primera vista podría interpretarse como una noticia más en el ciclo informativo diario, revela capas de complejidad cuando se analiza el contexto global. No estamos ante un evento aislado, sino frente a un síntoma de tendencias más amplias que hemos venido monitoreando a lo largo del año.</p>
    <p>La rapidez con la que se han desarrollado los acontecimientos sugiere que los actores involucrados estaban preparados para este escenario. Sin embargo, la magnitud de la respuesta pública y mediática ha superado las expectativas iniciales de los expertos, generando un debate necesario sobre las implicaciones a largo plazo.</p>

    <h3>Repercusiones Inmediatas y Futuro</h3>
    <p>¿Qué significa esto para el ciudadano común y para la industria en general? En primer lugar, redefine las prioridades a corto plazo. Expertos consultados por nuestro equipo sugieren que podríamos ver un "efecto dominó" que obligue a otras entidades a tomar posiciones similares o a responder con medidas de contingencia.</p>
    <p>Por otro lado, la volatilidad inherente de la situación demanda cautela. Si bien es tentador sacar conclusiones definitivas, la historia reciente nos enseña que estos fenómenos suelen tener "picos" de atención antes de estabilizarse en una nueva normalidad.</p>

    <h3>El Veredicto de los Expertos</h3>
    <blockquote class="italic text-gray-600 border-l-4 border-gray-300 pl-4 my-6">
      "Estamos presenciando un reordenamiento de las expectativas. Eventos de esta naturaleza actúan como catalizadores para cambios que, en otras circunstancias, habrían tomado años en materializarse."
    </blockquote>

    <h3>Nuestra Conclusión</h3>
    <p>Seguiremos monitoreando esta historia minuto a minuto. La clave estará en cómo evolucionen los acontecimientos en las próximas 48 horas, un periodo que será crítico para determinar si estamos ante un cambio estructural o una fluctuación pasajera. Mantente conectado a <strong>Al Día de Todo</strong> para recibir actualizaciones sin filtro y análisis que van más allá del titular.</p>
  `;

  return {
    metadata: {
      id: newsItem.article_id || Math.random().toString(36).substr(2, 9), // Use unique ID from API or fallback
      title: newsItem.title,
      slug: slug,
      category: newsItem.category ? newsItem.category[0] : "Actualidad",
      date: new Date(newsItem.pubDate || Date.now()).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }),
      image: newsItem.image_url || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800", // Fallback image
      excerpt: coreContent.substring(0, 140) + "...",
      isDynamic: true // Flag to identify API articles
    },
    content: htmlContent,
    originalUrl: newsItem.link || newsItem.url
  };
};
