const { PrismaClient } = require('./node_modules/@prisma/client');
const p = new PrismaClient();

const articles = [
  {
    title: "El impacto real de la IA en el empleo: más allá del miedo y la utopía",
    slug: "impacto-real-ia-empleo-2026",
    date: "18 May 2026",
    time: "9 min",
    image: "/images/guias/ia.png",
    categoryId: 5, // Tecnología
    isNews: false,
    content: `
<p>La inteligencia artificial no viene a quitarte el trabajo. Viene a <strong>cambiar la naturaleza del trabajo mismo</strong>. Esta distinción, que parece sutil, es la diferencia entre el pánico y la preparación. Mientras los titulares sensacionalistas predicen un apocalipsis laboral, la realidad de 2026 nos muestra un panorama mucho más matizado y, en muchos aspectos, esperanzador.</p>

<h2>Lo que realmente está pasando en el mercado laboral</h2>
<p>Según el último informe del Foro Económico Mundial publicado en marzo de 2026, la automatización mediante IA eliminará aproximadamente 85 millones de puestos de trabajo para 2028, pero <strong>creará 97 millones de nuevos roles</strong>. La ecuación neta es positiva, pero el desafío está en la transición: los empleos que desaparecen no son los mismos que los que se crean, y las personas afectadas no son las mismas que se benefician.</p>

<p>Los sectores más impactados no son los que la mayoría imagina. No es la manufactura (que ya fue automatizada en oleadas anteriores), sino los <strong>servicios profesionales de nivel medio</strong>: analistas financieros junior, redactores de informes estandarizados, asistentes legales que revisan contratos, y diseñadores gráficos que producen variaciones de plantillas. La IA no reemplaza al cirujano, pero sí al radiólogo que interpreta imágenes rutinarias.</p>

<h2>Las 5 habilidades que la IA no puede replicar</h2>
<p>Si quieres mantenerte relevante en la economía del futuro, debes desarrollar capacidades que las máquinas no pueden emular:</p>

<p><strong>1. Pensamiento crítico contextual.</strong> La IA puede analizar datos, pero no puede cuestionar las premisas. Un modelo de lenguaje puede escribir un argumento convincente a favor o en contra de cualquier posición, pero no puede determinar cuál es éticamente correcto en un contexto cultural específico.</p>

<p><strong>2. Inteligencia emocional profunda.</strong> Liderar equipos, negociar conflictos, motivar personas en crisis: estas son habilidades que requieren empatía genuina, no simulada. Un chatbot puede imitar comprensión; un líder humano la siente y actúa desde ella.</p>

<p><strong>3. Creatividad disruptiva.</strong> La IA genera contenido basándose en patrones existentes. Puede combinar estilos, pero no puede inventar un nuevo movimiento artístico o desafiar paradigmas culturales. La creatividad que rompe moldes sigue siendo exclusivamente humana.</p>

<p><strong>4. Juicio ético complejo.</strong> ¿Debería un hospital priorizar a un paciente joven sobre uno anciano? ¿Es aceptable que una empresa use IA para monitorear la productividad de sus empleados? Estas decisiones requieren marcos morales que la IA no posee.</p>

<p><strong>5. Adaptabilidad ante lo desconocido.</strong> La IA funciona con datos históricos. En situaciones verdaderamente nuevas — una pandemia, una crisis geopolítica sin precedentes, un cambio tecnológico radical — la capacidad humana de improvisar y adaptarse es insustituible.</p>

<h2>Cómo prepararte: un plan de acción realista</h2>
<p>No necesitas convertirte en programador para sobrevivir en la era de la IA. Pero sí necesitas:</p>

<p><strong>Aprender a trabajar CON la IA, no contra ella.</strong> Dominar herramientas como ChatGPT, Copilot o Midjourney no es opcional. El profesional que usa IA como amplificador de sus habilidades producirá 10 veces más que el que la ignora. No es trampa; es evolución.</p>

<p><strong>Invertir en habilidades "a prueba de automatización".</strong> Comunicación persuasiva, liderazgo, pensamiento sistémico, resolución de problemas complejos. Estas son las habilidades con mayor retorno de inversión en la economía de 2026.</p>

<p><strong>Construir una marca personal.</strong> En un mundo donde la IA puede producir contenido genérico a escala, tu perspectiva única, tu experiencia vivida y tu reputación se convierten en tu mayor activo. Las personas confían en personas, no en algoritmos.</p>

<h2>La perspectiva histórica que nos falta</h2>
<p>Cada revolución tecnológica ha generado el mismo terror. La imprenta de Gutenberg amenazó a los escribas. La revolución industrial amenazó a los artesanos. Internet amenazó a los intermediarios. En todos los casos, el resultado fue el mismo: <strong>más empleos, no menos</strong>, pero de naturaleza diferente.</p>

<p>La IA es la continuación de esta historia, no su final. El secreto no es resistir el cambio, sino surfear la ola. Y para eso, necesitas empezar a remar ahora.</p>

<p><em>En AldiaDeTodo creemos que la mejor defensa contra la incertidumbre es el conocimiento aplicado. Explora nuestras guías sobre productividad, finanzas e inteligencia emocional para construir tu futuro profesional con confianza.</em></p>
`
  },
  {
    title: "La regla 50/30/20: el presupuesto más simple que realmente funciona",
    slug: "regla-50-30-20-presupuesto-simple",
    date: "17 May 2026",
    time: "8 min",
    image: "/images/guias/ahorro.png",
    categoryId: 3, // Finanzas
    isNews: false,
    content: `
<p>Si alguna vez has intentado hacer un presupuesto y lo abandonaste a los tres días, no eres tú: <strong>es el método</strong>. La mayoría de sistemas presupuestarios son tan complicados que se convierten en una fuente más de estrés en lugar de una solución. Pero existe una regla tan simple que puedes aprenderla en 60 segundos y aplicarla de por vida: la regla 50/30/20.</p>

<h2>¿Qué es la regla 50/30/20?</h2>
<p>Creada por la senadora estadounidense Elizabeth Warren en su libro <em>"All Your Worth"</em>, esta regla divide tus ingresos netos (después de impuestos) en tres categorías:</p>

<p><strong>50% para necesidades.</strong> Vivienda, alimentación, transporte, servicios básicos, seguros, pagos mínimos de deudas. Todo lo que DEBES pagar para sobrevivir y mantener tu empleo. Si tu alquiler solo consume el 30% de tus ingresos, bien. Si consume el 55%, tienes un problema que debes resolver.</p>

<p><strong>30% para deseos.</strong> Restaurantes, entretenimiento, ropa no esencial, suscripciones de streaming, viajes, hobbies. Todo lo que mejora tu calidad de vida pero no es estrictamente necesario. Esta categoría es la que la mayoría de "gurús" financieros te dicen que elimines, pero eso es insostenible. La clave es disfrutar sin excederte.</p>

<p><strong>20% para ahorro e inversión.</strong> Fondo de emergencia, aportes a tu retiro, inversiones, pago acelerado de deudas. Este 20% es tu <strong>libertad futura</strong>. Cada peso que destinas aquí hoy es un peso que trabaja para ti mañana.</p>

<h2>Ejemplo práctico con números reales</h2>
<p>Supongamos que ganas 3,000 soles netos al mes:</p>

<p><strong>Necesidades (S/ 1,500):</strong> Alquiler S/ 800, alimentación S/ 350, transporte S/ 150, servicios S/ 100, seguro S/ 100.</p>
<p><strong>Deseos (S/ 900):</strong> Salidas S/ 300, ropa S/ 150, streaming S/ 50, gym S/ 100, ahorro para viaje S/ 200, varios S/ 100.</p>
<p><strong>Ahorro/Inversión (S/ 600):</strong> Fondo de emergencia S/ 300, inversión en ETFs S/ 200, pago extra de deuda S/ 100.</p>

<h2>Los 4 errores más comunes al aplicar esta regla</h2>

<p><strong>1. Confundir deseos con necesidades.</strong> Netflix no es una necesidad. Un auto último modelo no es una necesidad si puedes usar transporte público. Sé brutalmente honesto en esta clasificación.</p>

<p><strong>2. No ajustar los porcentajes a tu realidad.</strong> Si vives en una ciudad cara donde el alquiler consume el 40% de tus ingresos, puede que necesites un esquema 60/20/20. La regla es una guía, no una ley.</p>

<p><strong>3. Olvidar el fondo de emergencia.</strong> Antes de invertir un solo peso, construye un colchón de 3-6 meses de gastos. Sin este fondo, cualquier imprevisto te obligará a endeudarte y destruirá tu progreso.</p>

<p><strong>4. Ser demasiado estricto.</strong> Si te prohíbes todo placer, reventarás en un mes y gastarás el doble por frustración. El 30% de deseos está ahí por una razón: la disciplina financiera debe ser <strong>sostenible</strong>.</p>

<h2>Cómo empezar hoy mismo (en 5 minutos)</h2>
<p>No necesitas una app ni una hoja de cálculo compleja:</p>
<p><strong>Paso 1:</strong> Calcula tu ingreso neto mensual.</p>
<p><strong>Paso 2:</strong> Multiplica por 0.5, 0.3 y 0.2.</p>
<p><strong>Paso 3:</strong> Compara con tus gastos reales del mes pasado.</p>
<p><strong>Paso 4:</strong> Identifica dónde estás excedido y ajusta UN gasto esta semana.</p>

<p>No intentes cambiar todo de golpe. Cambia una cosa por semana durante un mes. Al final del mes, tendrás un presupuesto funcional que ni siquiera sentirás como una restricción.</p>

<h2>El poder oculto del 20%</h2>
<p>Si inviertes el 20% de un salario de S/ 3,000 cada mes en un fondo indexado con un rendimiento promedio del 8% anual, en 20 años tendrás <strong>más de S/ 350,000</strong>. Eso es el poder del interés compuesto: tu dinero trabaja mientras tú duermes.</p>

<p>La regla 50/30/20 no te hará rico de la noche a la mañana. Pero te dará algo más valioso: <strong>tranquilidad financiera</strong>. Y esa tranquilidad se nota en tu sueño, en tus relaciones y en tu capacidad de tomar decisiones sin miedo.</p>

<p><em>¿Quieres profundizar? Lee nuestra guía completa sobre Cómo Ahorrar Dinero y la Psicología del Dinero para transformar tu relación con las finanzas.</em></p>
`
  },
  {
    title: "Desconexión digital: cómo tu smartphone destruye tu sueño según la ciencia",
    slug: "desconexion-digital-smartphone-sueno-ciencia",
    date: "16 May 2026",
    time: "7 min",
    image: "/images/guias/sueno.png",
    categoryId: 10, // Salud
    isNews: false,
    content: `
<p>Son las 11 de la noche. Dices "solo un minuto más" mientras scrolleas en tu teléfono. 45 minutos después, finalmente lo dejas en la mesita de noche. Te acuestas, cierras los ojos… y no puedes dormir. Tu mente sigue acelerada. Suena familiar, ¿verdad? <strong>No es falta de voluntad: es bioquímica.</strong></p>

<h2>Lo que la luz azul le hace a tu cerebro</h2>
<p>La pantalla de tu smartphone emite luz azul con una longitud de onda de 450-495 nanómetros. Esta luz es prácticamente idéntica a la del sol del mediodía. Cuando tu cerebro la detecta a las 11 PM, interpreta una señal clara: <strong>"es de día, mantente despierto"</strong>.</p>

<p>El mecanismo es preciso: la luz azul suprime la producción de <strong>melatonina</strong>, la hormona que regula tu ciclo de sueño. Un estudio de la Universidad de Harvard demostró que la exposición a pantallas 2 horas antes de dormir reduce la melatonina en un <strong>22%</strong> y retrasa el inicio del sueño en un promedio de 30 minutos.</p>

<p>Pero el problema no es solo la luz. Es lo que estás <strong>consumiendo</strong>.</p>

<h2>El ciclo de dopamina que te mantiene despierto</h2>
<p>Las redes sociales, los videos cortos y las notificaciones están diseñados para generar <strong>microdosis de dopamina</strong>. Cada like, cada nuevo video, cada mensaje activa el sistema de recompensa de tu cerebro. Este sistema fue diseñado para la supervivencia (encontrar comida, evitar peligros), pero ahora está siendo secuestrado por algoritmos de engagement.</p>

<p>Cuando finalmente sueltas el teléfono, tu cerebro está en un estado de <strong>hiperactivación dopaminérgica</strong>. Intentar dormir en ese estado es como intentar frenar un auto a 200 km/h de golpe. Tu sistema nervioso necesita tiempo para desacelerar.</p>

<h2>Las consecuencias que no ves</h2>
<p>La privación crónica de sueño de calidad no solo te deja cansado. Los efectos acumulativos son devastadores:</p>

<p><strong>Rendimiento cognitivo:</strong> Después de una semana durmiendo 6 horas (en lugar de 8), tu rendimiento mental equivale al de alguien con 0.1% de alcohol en sangre. Legalmente borracho en la mayoría de países.</p>

<p><strong>Metabolismo:</strong> La falta de sueño aumenta la grelina (hormona del hambre) y reduce la leptina (hormona de saciedad). Resultado: comes más, especialmente carbohidratos y azúcar. Un estudio de la Universidad de Chicago encontró que los participantes privados de sueño consumían <strong>385 calorías extra por día</strong>.</p>

<p><strong>Salud mental:</strong> La amígdala (centro emocional del cerebro) se vuelve un 60% más reactiva con sueño insuficiente. Esto explica por qué te irritas por cosas triviales después de una mala noche.</p>

<h2>El protocolo de 90 minutos que cambiará tus noches</h2>
<p>No necesitas eliminar tu smartphone. Solo necesitas establecer una <strong>frontera temporal</strong>:</p>

<p><strong>90 minutos antes de dormir:</strong> Pon tu teléfono en modo "No molestar" y déjalo fuera de tu habitación. Sí, fuera. Compra un despertador de S/ 20 si lo usas como alarma.</p>

<p><strong>60 minutos antes:</strong> Baja las luces de tu casa. Usa lámparas cálidas (2700K o menos). Esto le dice a tu cerebro que el sol se está poniendo.</p>

<p><strong>30 minutos antes:</strong> Lee un libro físico, escribe en un diario, medita o haz estiramientos suaves. Actividades que calmen tu sistema nervioso sin estimulación visual intensa.</p>

<p><strong>En la cama:</strong> Si no te duermes en 20 minutos, levántate y haz algo aburrido (leer instrucciones de un electrodoméstico funciona sorprendentemente bien). Vuelve cuando sientas sueño real.</p>

<h2>La verdad incómoda</h2>
<p>Sabemos lo que debemos hacer. El problema no es la información, es la <strong>adicción</strong>. Tu smartphone está diseñado por equipos de psicólogos e ingenieros cuyo único objetivo es maximizar tu tiempo de pantalla. No estás luchando contra tu falta de voluntad; estás luchando contra miles de millones de dólares en investigación de modificación de comportamiento.</p>

<p>La buena noticia: una vez que implementas el protocolo de 90 minutos durante solo <strong>7 días consecutivos</strong>, los resultados son tan dramáticos que la motivación se vuelve automática. Duermes mejor, piensas más claro, comes menos basura y tu estado de ánimo mejora visiblemente.</p>

<p>Tu sueño es el fundamento de todo lo demás. Protégelo como protegerías tu recurso más valioso, porque <strong>eso es exactamente lo que es</strong>.</p>

<p><em>Para un enfoque más profundo, lee nuestra Guía sobre la Arquitectura del Sueño y nuestra guía de Biohacking y Longevidad.</em></p>
`
  },
  {
    title: "Cómo construir un hábito en 21 días: el mito, la ciencia y el método real",
    slug: "construir-habito-21-dias-metodo-real",
    date: "15 May 2026",
    time: "8 min",
    image: "/images/guias/habitos.png",
    categoryId: 16, // Crecimiento Personal
    isNews: false,
    content: `
<p>Has escuchado la frase mil veces: <em>"Solo necesitas 21 días para formar un hábito"</em>. Es motivadora, simple y completamente <strong>falsa</strong>. Esta cifra proviene de un libro de 1960 del cirujano plástico Maxwell Maltz, quien observó que sus pacientes tardaban aproximadamente 21 días en acostumbrarse a su nueva apariencia. Pero acostumbrarse a una nariz diferente no es lo mismo que ir al gimnasio todos los días.</p>

<h2>Lo que dice la ciencia real</h2>
<p>Un estudio de la University College London publicado en el <em>European Journal of Social Psychology</em> encontró que el tiempo promedio para automatizar un comportamiento es de <strong>66 días</strong>. Pero la variación es enorme: desde 18 días para hábitos simples (beber un vaso de agua al despertar) hasta <strong>254 días</strong> para hábitos complejos (hacer 50 abdominales antes del desayuno).</p>

<p>La buena noticia: el proceso no es lineal. La mayoría del "trabajo duro" ocurre en las <strong>primeras 3 semanas</strong>. Después, la resistencia disminuye exponencialmente. Si logras pasar los primeros 21 días (ahí es donde Maltz no estaba del todo equivocado), el camino se vuelve mucho más fácil.</p>

<h2>El sistema de las 4 leyes de los hábitos</h2>
<p>James Clear, en su bestseller <em>Atomic Habits</em>, propone un marco que sintetiza décadas de investigación en psicología del comportamiento. Cada hábito se construye sobre 4 pilares:</p>

<p><strong>1. Hazlo obvio (Señal).</strong> Tu cerebro necesita un disparador claro. "Voy a meditar" es vago. "Voy a meditar 5 minutos después de servirme el café de la mañana" es una señal vinculada a un comportamiento existente. Esta técnica se llama <strong>habit stacking</strong> y es la más efectiva documentada.</p>

<p><strong>2. Hazlo atractivo (Anhelo).</strong> Vincula el hábito nuevo con algo que disfrutes. ¿Quieres correr por las mañanas? Guarda tu podcast favorito SOLO para escucharlo mientras corres. Ahora tu cerebro asocia correr con placer auditivo.</p>

<p><strong>3. Hazlo fácil (Respuesta).</strong> La regla de los 2 minutos: reduce cualquier hábito a su versión más pequeña. No "voy a leer 30 páginas", sino "voy a abrir el libro". No "voy a hacer ejercicio 1 hora", sino "voy a ponerme los tenis". La versión mínima elimina la barrera de activación.</p>

<p><strong>4. Hazlo satisfactorio (Recompensa).</strong> Tu cerebro repite lo que se siente bien AHORA, no lo que será bueno en 6 meses. Necesitas una recompensa inmediata. Un calendario donde marcas una X cada día que cumples es sorprendentemente poderoso: romper la cadena se siente como una pérdida, y los humanos odiamos perder más de lo que disfrutamos ganar.</p>

<h2>Los 3 errores que destruyen tus hábitos</h2>

<p><strong>Error 1: Empezar demasiado grande.</strong> "Voy a ir al gym 6 días a la semana" cuando llevas 2 años sin hacer ejercicio. Tu motivación inicial durará 10 días. Cuando se agote, abandonarás todo. Empieza con 2 días por semana. Cuando sea automático, sube a 3.</p>

<p><strong>Error 2: Depender de la motivación.</strong> La motivación es una emoción, y las emociones son volátiles. Los días que no tienes ganas son exactamente los días que más importan. Un hábito real se ejecuta ESPECIALMENTE cuando no quieres hacerlo. Por eso la regla de los 2 minutos es vital: no necesitas motivación para abrir un libro.</p>

<p><strong>Error 3: No diseñar tu entorno.</strong> Si quieres comer sano pero tu cocina está llena de galletas, estás luchando contra tu biología. Diseña tu entorno para que el comportamiento correcto sea el camino de menor resistencia. Pon la fruta al frente del refrigerador. Pon el libro en tu almohada. Pon los tenis junto a la puerta.</p>

<h2>El método del "Never Zero"</h2>
<p>Esta es la técnica que personalmente considero más transformadora: <strong>nunca dejes que el contador llegue a cero</strong>. Si tu hábito es escribir y hoy no tienes tiempo, escribe UNA oración. Si es meditar, medita 30 segundos. Si es correr, camina alrededor de la manzana.</p>

<p>La ciencia detrás: lo que destruye un hábito no es un mal día, sino <strong>dos días malos consecutivos</strong>. Un día de "versión mínima" mantiene la identidad activa. Te sigues viendo como alguien que escribe/medita/corre, aunque hoy haya sido poco.</p>

<h2>La transformación de identidad</h2>
<p>El cambio más profundo no ocurre al nivel del comportamiento, sino al nivel de la <strong>identidad</strong>. No se trata de "quiero correr" (comportamiento), sino de "soy un corredor" (identidad). Cuando tu hábito se convierte en parte de quién eres, dejar de hacerlo se siente como una traición a ti mismo.</p>

<p>Cada vez que ejecutas el hábito, estás votando por la persona que quieres ser. No necesitas unanimidad; necesitas mayoría. Si cumples 4 de 7 días, estás ganando la elección de tu identidad.</p>

<p>No necesitas 21 días. Necesitas <strong>un buen sistema y la paciencia de dejarlo funcionar</strong>. La transformación no es un sprint de 3 semanas; es un maratón silencioso que un día, sin aviso, te convierte en la persona que siempre quisiste ser.</p>

<p><em>Para más estrategias de desarrollo personal, explora nuestras guías sobre 10 Hábitos Productivos, Gestión de Tiempo y Deep Work, y Estoicismo Práctico.</em></p>
`
  }
];

(async () => {
  console.log('Insertando 4 artículos originales...\n');
  
  for (const article of articles) {
    try {
      const created = await p.article.create({ data: article });
      const wordCount = article.content.replace(/<[^>]+>/g, '').split(/\s+/).length;
      console.log('OK: "' + created.title + '" (' + wordCount + ' palabras)');
    } catch (err) {
      if (err.code === 'P2002') {
        console.log('SKIP: "' + article.title + '" (ya existe)');
      } else {
        console.log('ERROR: ' + err.message);
      }
    }
  }
  
  console.log('\nTotal artículos en DB ahora:', await p.article.count({ where: { isNews: false } }));
  await p.$disconnect();
})();
