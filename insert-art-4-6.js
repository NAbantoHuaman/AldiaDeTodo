const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const article4 = `
<p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">El Mundial de 2026 pasará a la historia no solo por sus 48 equipos o sus tres países anfitriones, sino por ser el primer torneo donde el árbitro principal ha delegado la responsabilidad más crítica del juego a un algoritmo. La llegada de la tecnología de "Fuera de Juego Semi-Automático Avanzado" (SAOT-2), impulsada por aprendizaje profundo, ha eliminado las polémicas líneas trazadas a mano en un monitor oscuro. Ahora, en menos de un segundo, una inteligencia artificial procesa millones de puntos de datos espaciales para dictaminar con una precisión milimétrica si un delantero está adelantado. El fútbol ha abrazado el silicio de forma irreversible.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">La anatomía del nuevo VAR</h3>
<p class="mb-6">Para entender el salto tecnológico que presenciamos en este Mundial, debemos mirar hacia el techo de los estadios. Cada recinto ha sido equipado con 24 cámaras especializadas de seguimiento óptico de ultra-alta velocidad (funcionando a 500 cuadros por segundo), que rastrean 35 puntos de articulación en el cuerpo de cada jugador en la cancha. A esto se le suma un sensor de inercia alojado en el centro del balón, que transmite datos posicionales a 500 hercios.</p>
<p class="mb-6">El verdadero milagro, sin embargo, no está en el hardware, sino en el software. Todo este torrente masivo de datos es procesado en tiempo real por servidores distribuidos bajo la cancha. Los modelos de redes neuronales convolucionales han sido entrenados con millones de horas de partidos históricos para entender la biomecánica del movimiento humano y predecir el momento exacto del impacto del pie con el balón. Cuando ocurre un posible fuera de juego, el sistema no espera a que el árbitro pida revisión; le envía una alerta de vibración directamente a su reloj inteligente con el veredicto final en menos de 0.8 segundos.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">El fin de la polémica... y de la emoción instantánea</h3>
<p class="mb-6">La implementación de esta tecnología ha erradicado el margen de error humano. Las repeticiones en 3D que se muestran en los videomarcadores del estadio pocos segundos después de la sanción son irrefutables. Ya no hay debates sobre el grosor de la línea del VAR, ni discusiones sobre la perspectiva de la cámara. La geometría es absoluta. Esta precisión ha traído una justicia largamente exigida por entrenadores y aficionados.</p>
<p class="mb-6">Sin embargo, también ha introducido un efecto colateral psicológico en el aficionado: la muerte del festejo inmediato. Los jugadores, al marcar un gol apretado, miran de reojo al árbitro antes de atreverse a celebrar. El estallido de euforia de la grada a menudo se retrasa, quedando en una especie de "limbo emocional" hasta que el árbitro señala el centro del campo confirmando que el algoritmo ha dado luz verde. El fútbol se ha vuelto más justo, pero quizás un poco más frío.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">La brecha tecnológica en las ligas menores</h3>
<p class="mb-6">Mientras la FIFA presume su joya tecnológica en la élite mundial, se abre una brecha preocupante con las ligas de desarrollo y las competiciones de países en vías de desarrollo. Instalar el sistema SAOT-2 cuesta aproximadamente 2.5 millones de dólares por estadio, más el mantenimiento y licenciamiento anual del software. Es una inversión imposible de asumir para la inmensa mayoría de clubes del mundo.</p>
<p class="mb-6">Esto está creando dos deportes diferentes bajo el mismo nombre. Por un lado, el fútbol de la élite, milimétrico, analítico e hiper-justo. Por otro, el fútbol tradicional, donde el error humano sigue siendo un factor determinante en el resultado de un campeonato. Algunos analistas temen que los jugadores que saltan de una liga sin esta tecnología a un torneo internacional como el Mundial, tarden en adaptar sus movimientos en el área al saber que su rodilla no escapará al escrutinio del ojo biónico.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">El futuro: ¿Árbitros de silicio?</h3>
<p class="mb-6">El éxito del SAOT-2 en este arranque mundialista ha reabierto el debate sobre el límite de la automatización en el deporte. Si una IA puede decidir un fuera de juego de manera infalible, la tecnología ya está probando modelos para determinar la intencionalidad en las manos dentro del área o la fuerza excesiva en una entrada, basándose en la velocidad de impacto y los vectores de fuerza leídos por las cámaras.</p>
<p class="mb-6">Por ahora, el árbitro principal sigue siendo el juez absoluto de la moralidad y la intención de la jugada, apoyándose en la tecnología solo para cuestiones factuales (fuera de juego y gol fantasma). Pero la línea es cada vez más difusa. El Mundial 2026 nos ha demostrado que cuando la tecnología ofrece precisión perfecta y elimina las portadas de periódicos quejándose de "robos", las instituciones deportivas no dudarán en darle las llaves del partido a un servidor. Bienvenidos a la era del deporte algorítmico.</p>
`;

const article5 = `
<p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">Lo que hace tres años era un borrador lleno de disputas en los pasillos de Bruselas, hoy es una realidad ineludible. El 1 de junio de 2026 ha entrado en pleno vigor la "AI Act" (Ley de Inteligencia Artificial) en la Unión Europea. Este monumental marco regulatorio, el primero de su tipo en el mundo, impone reglas estrictas y multas draconianas a las empresas que desarrollen o desplieguen modelos de aprendizaje automático. Mientras los legisladores celebran una victoria por los derechos civiles, el ecosistema tecnológico europeo se prepara para un terremoto operativo que podría redefinir el liderazgo global en la carrera de la innovación digital.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">La clasificación del riesgo: El corazón de la ley</h3>
<p class="mb-6">La nueva normativa no prohíbe la inteligencia artificial de manera general, sino que utiliza una estructura de pirámide basada en el riesgo. En la cima se encuentran los "Sistemas Prohibidos", aquellas tecnologías de IA que suponen un riesgo inaceptable para los derechos humanos fundamentales. Aquí entran los sistemas de puntuación social (social scoring) al estilo asiático, el reconocimiento facial biométrico indiscriminado en tiempo real en espacios públicos (salvo excepciones policiales hiper-restringidas), y la IA manipuladora subliminal.</p>
<p class="mb-6">El grueso de la regulación recae sobre la segunda categoría: los "Sistemas de Alto Riesgo". Esto incluye cualquier IA utilizada en infraestructuras críticas, contratación laboral, educación, scoring crediticio, y selección de candidatos para beneficios sociales. Si una empresa europea, o una extranjera que ofrezca servicios en Europa, utiliza un modelo predictivo para decidir si le da o no un préstamo hipotecario a un ciudadano, está ahora sujeta a obligaciones extremas de transparencia.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">Las obligaciones: Transparencia algorítmica forzosa</h3>
<p class="mb-6">La era del algoritmo "caja negra" ha terminado en suelo europeo. A partir de hoy, las empresas que operan sistemas de Alto Riesgo deben mantener un registro detallado e histórico de todos los datos utilizados para entrenar sus modelos. Deben demostrar, mediante auditorías de terceros independientes, que sus conjuntos de datos de entrenamiento están libres de sesgos raciales, de género o socioeconómicos. Además, están obligados a proveer un mecanismo técnico que permita explicar de forma humana por qué la IA tomó una decisión específica frente a un usuario.</p>
<p class="mb-6">Para las startups y gigantes tecnológicos que despliegan Modelos de Lenguaje de Propósito General (LLMs), las exigencias también son mayúsculas. Deben publicar resúmenes detallados del material protegido por derechos de autor que utilizaron durante la fase de "scraping" de entrenamiento. Esto abre una puerta masiva a litigios multimillonarios por parte de editoriales, artistas y medios de comunicación que ahora tienen la herramienta legal para exigir compensaciones si sus obras fueron "comidas" por el modelo.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">Multas devastadoras y el efecto "Splinternet"</h3>
<p class="mb-6">El incumplimiento de la Ley de IA no es una simple palmada en la muñeca. Las penalizaciones por violar las normas de Sistemas Prohibidos alcanzan hasta el 7% de la facturación global anual de la empresa matriz o 35 millones de euros (lo que resulte mayor). Es un régimen punitivo incluso más agresivo que el del célebre RGPD (Reglamento General de Protección de Datos). El riesgo financiero es tan alto que los departamentos legales de las Big Tech han vetado el despliegue de ciertas herramientas en Europa.</p>
<p class="mb-6">Esto está provocando lo que los analistas llaman el "Splinternet de la IA". Hemos comenzado a ver cómo asistentes de voz avanzados, herramientas de generación de video generativo y agentes autónomos se lanzan en Estados Unidos y Asia, mientras que los ciudadanos europeos reciben versiones "capadas" o simplemente bloqueos geográficos debido al temor de las empresas a las auditorías europeas.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">¿El fin de la innovación en Europa?</h3>
<p class="mb-6">El debate está al rojo vivo. Los críticos, encabezados por los gremios de startups de París y Berlín, argumentan que la carga burocrática ahogará a los pequeños desarrolladores. Sostienen que solo gigantes corporativos con ejércitos de abogados podrán permitirse el costo de certificar un modelo de Alto Riesgo, creando monopolios de facto.</p>
<p class="mb-6">Por el contrario, la Comisión Europea defiende que esta ley creará una "IA Confiable" de marca registrada. Su apuesta a largo plazo es que los consumidores globales acabarán exigiendo sistemas transparentes y éticos, y las empresas europeas, al haber nacido en este duro entorno regulatorio, tendrán productos premium que vender al resto del mundo. El tiempo dirá si la "AI Act" fue el escudo protector que la sociedad necesitaba, o el muro que dejó a Europa rezagada en la revolución industrial más importante de nuestro siglo.</p>
`;

const article6 = `
<p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">El esperado retorno de la humanidad a la superficie lunar tendrá que esperar un poco más. La NASA ha convocado una rueda de prensa de emergencia este martes para anunciar una revisión exhaustiva del calendario del programa Artemis. La misión Artemis III, originalmente programada para un alunizaje tripulado en el polo sur lunar a finales de este año, ha sido reprogramada oficialmente para septiembre de 2027. La decisión, aunque frustrante para la comunidad espacial y el público general, subraya la filosofía innegociable de la agencia moderna: la seguridad de la tripulación prima absolutamente sobre los plazos políticos y comerciales.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">Los desafíos del Human Landing System (HLS)</h3>
<p class="mb-6">El principal factor detrás del retraso no reside en el gigantesco cohete SLS (Space Launch System) ni en la cápsula Orion, que demostraron un rendimiento casi impecable durante la misión Artemis I. El cuello de botella técnico se centra en el "Human Landing System" (HLS), la inmensa nave espacial Starship desarrollada por SpaceX que actuará como el vehículo de descenso final para llevar a los astronautas desde la órbita lunar hasta la superficie polvorienta de nuestro satélite.</p>
<p class="mb-6">Para que la Starship llegue a la Luna con suficiente combustible para aterrizar y volver a despegar, SpaceX necesita dominar una tecnología inédita: la transferencia de cientos de toneladas de metano y oxígeno líquido criogénico entre naves en el vacío del espacio terrestre. Aunque han logrado avances monumentales en sus pruebas recientes desde Boca Chica, Texas, el ritmo de desarrollo para lograr la fiabilidad necesaria para llevar vidas humanas ha tomado más tiempo del proyectado en los cronogramas hiper-optimistas de la industria privada.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">El rompecabezas de los trajes espaciales</h3>
<p class="mb-6">Un factor secundario, pero igualmente crítico, es el desarrollo de los nuevos trajes espaciales extravehiculares (xEMU), cuyo contrato fue adjudicado a la empresa Axiom Space. Caminar por el polo sur lunar es un desafío infinitamente más hostil que los paseos de las misiones Apolo en el ecuador lunar durante los años 70. Los astronautas se enfrentarán a zonas de oscuridad permanente donde las temperaturas caen a -230 grados Celsius, y a terrenos accidentados que requieren una movilidad articular muy superior.</p>
<p class="mb-6">Durante las últimas pruebas en cámaras de vacío térmico en Houston, se detectaron vulnerabilidades en los sistemas portátiles de soporte vital de los trajes frente a picos extremos térmicos. La corrección de estos diseños requiere rehacer varias capas de aislamiento térmico de alta tecnología, lo que añade al menos diez meses de rediseño y validación antes de poder ser certificados para vuelo tripulado.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">La presión geopolítica y la carrera con China</h3>
<p class="mb-6">El administrador de la NASA no evitó abordar el elefante en la habitación durante la conferencia: la nueva carrera espacial. Mientras Artemis ajusta sus calendarios, la Administración Espacial Nacional China (CNSA) continúa cumpliendo religiosamente sus hitos. Tras traer con éxito muestras de la cara oculta de la Luna, China mantiene firme su objetivo de aterrizar taikonautas en el polo sur lunar para 2029, con el apoyo logístico de su estación orbital Tiangong.</p>
<p class="mb-6">Un retraso hasta 2027 recorta el margen de ventaja estadounidense a apenas dos años. El polo sur lunar es un territorio estratégico vital debido a sus enormes reservas de hielo de agua en cráteres permanentemente a oscuras; este hielo no solo es necesario para mantener a futuras colonias hidratadas, sino que se puede descomponer mediante electrólisis en hidrógeno y oxígeno para crear combustible de cohetes, convirtiendo a la Luna en la gasolinera del sistema solar profundo. Llegar primero significa dictar las normas de extracción bajo el Acuerdo de Artemis, de ahí la ansiedad política en Washington por los retrasos.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">El panorama a corto plazo: Artemis II sigue en pie</h3>
<p class="mb-6">A pesar de las malas noticias sobre el alunizaje, la NASA reafirmó que la misión Artemis II —el vuelo orbital tripulado alrededor de la Luna, similar al icónico Apolo 8— sigue programada para la próxima ventana de lanzamiento. Los cuatro astronautas designados (tres estadounidenses y un canadiense) continúan sus intensos entrenamientos en el Johnson Space Center.</p>
<p class="mb-6">Artemis II pondrá a prueba los sistemas de soporte vital de la cápsula Orion con tripulación humana a cientos de miles de kilómetros de casa, validando los protocolos de aborto de emergencia y la navegación en el espacio profundo. El retraso de Artemis III es un duro recordatorio de que la exploración del cosmos profundo es inherentemente impredecible, peligrosa y difícil. Como señaló uno de los directores de vuelo de la agencia: "El espacio no perdona la prisa. Iremos a la Luna, pero iremos para quedarnos, y lo haremos cuando estemos absolutamente listos."</p>
`;

async function main() {
  await prisma.article.createMany({
    data: [
      {
        title: "La evolución silenciosa del VAR: Cómo la IA está decidiendo los fuera de juego en milisegundos",
        slug: "evolucion-var-inteligencia-artificial-mundial-2026",
        date: "09 de Junio de 2026",
        time: "03:45 PM",
        categoryId: 5, // Tecnología
        content: article4,
        isNews: true,
        image: ""
      },
      {
        title: "Entra en pleno vigor la Ley Europea de Inteligencia Artificial: Lo que cambia para las empresas",
        slug: "ley-europea-inteligencia-artificial-empresas",
        date: "09 de Junio de 2026",
        time: "05:00 PM",
        categoryId: 1, // Mundo
        content: article5,
        isNews: true,
        image: ""
      },
      {
        title: "Misión Artemis III: La NASA anuncia ajustes en la fecha para el regreso de la humanidad a la Luna",
        slug: "mision-artemis-iii-nasa-retraso-luna-2027",
        date: "09 de Junio de 2026",
        time: "06:30 PM",
        categoryId: 4, // Ciencia
        content: article6,
        isNews: true,
        image: ""
      }
    ]
  });
  console.log("Inserted Articles 4, 5, 6");
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
