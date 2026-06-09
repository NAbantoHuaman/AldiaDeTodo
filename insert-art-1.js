const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const article1 = `
<p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">El mundo se detuvo por unas horas. El mítico Estadio Azteca de la Ciudad de México, el coloso de Santa Úrsula que vio coronarse a Pelé en 1970 y a Diego Armando Maradona en 1986, añadió ayer un nuevo capítulo dorado a su historia al convertirse en el primer recinto del planeta en inaugurar tres Copas del Mundo de la FIFA. El pitido inicial del Mundial 2026 no fue solo el comienzo de un torneo, fue una declaración de intenciones por parte de Norteamérica ante los ojos de más de 1.500 millones de espectadores en todo el globo.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">El peso de la historia en cada butaca</h3>
<p class="mb-6">Caminar por los pasillos del Estadio Azteca antes del evento de inauguración era respirar fútbol en su estado más puro. Desde primera hora de la mañana, las calles aledañas se convirtieron en un mar de camisetas, cánticos y una mezcla cultural que solo este deporte es capaz de lograr. Aficionados locales se mezclaban con canadienses, estadounidenses y visitantes de todos los rincones del planeta, unidos por la expectación de un torneo que rompe esquemas al jugarse por primera vez en tres países simultáneamente y con 48 selecciones participantes.</p>
<p class="mb-6">La remodelación del recinto, que duró más de tres años y costó cientos de millones de dólares, quedó patente desde el momento en que se abrieron las puertas. Las nuevas pantallas 360 grados, la iluminación LED de última generación y los palcos VIP renovados no borraron, sin embargo, el alma del estadio. Las gradas conservan esa acústica ensordecedora, ese "latido" particular que intimida a los visitantes y empuja a los locales. Cuando los 83,000 asistentes cantaron al unísono, el cemento literalmente vibraba bajo los pies.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">Una ceremonia que entrelazó tres culturas</h3>
<p class="mb-6">A diferencia de ceremonias de inauguración pasadas, a menudo excesivamente largas o desconectadas del espíritu del juego, la organización norteamericana apostó por un espectáculo vibrante, rápido y profundamente representativo. El campo se transformó en un enorme lienzo de proyección donde se dibujó un mapa que unía desde las frías tierras de Vancouver hasta la vibrante Ciudad de México, pasando por los rascacielos de Nueva York.</p>
<p class="mb-6">El componente musical no decepcionó. La fusión de ritmos regionales mexicanos con el pop estadounidense y los sonidos urbanos canadienses logró levantar a todo el estadio. Pero el momento cumbre, el que hizo que a más de uno se le escapara una lágrima, fue el homenaje a las leyendas del pasado. Proyecciones holográficas de momentos icónicos jugados en ese mismo césped sirvieron de puente entre el pasado glorioso y el futuro que estaba a punto de comenzar.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">El partido inaugural: Tensión, calor y desahogo</h3>
<p class="mb-6">Luego del protocolo y los discursos (que afortunadamente fueron breves), el balón rodó. México, con la inmensa presión de ser anfitrión y con una generación de jugadores muy cuestionada por la prensa local durante el último año, se enfrentaba a un rival que en los papeles parecía inferior, pero que en un Mundial siempre puede complicar las cosas.</p>
<p class="mb-6">Los primeros 20 minutos fueron un manojo de nervios. Pases erráticos, faltas a destiempo y un calor asfixiante que rondaba los 30 grados centígrados pesaban sobre las piernas de los jugadores. La afición exigía, silbaba ante los errores, demostrando que en el Azteca la indulgencia no existe, ni siquiera el día de la fiesta grande.</p>
<p class="mb-6">Sin embargo, el punto de inflexión llegó cerca del minuto 35. Una jugada trenzada por la banda derecha terminó en un centro raso que el delantero centro, con más coraje que técnica, logró empujar al fondo de la red. El estallido de júbilo de 83,000 gargantas es algo difícil de describir con palabras; fue una liberación colectiva, un grito que expulsaba meses de dudas y críticas.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">La logística: Un reto superado con éxito (por ahora)</h3>
<p class="mb-6">Uno de los grandes miedos en la previa de este mega-evento era la logística. Trasladar a tantas selecciones y cientos de miles de turistas a través de fronteras enormes suponía un desafío titánico. La Ciudad de México, famosa por su tráfico caótico, implementó un sistema de transporte exclusivo y carriles rápidos que, al menos en este primer día, funcionaron con una fluidez asombrosa.</p>
<p class="mb-6">Las medidas de seguridad también fueron estrictas pero discretas, apoyándose enormemente en el reconocimiento facial y escáneres sin contacto de alta velocidad en las entradas del estadio. Este enfoque tecnológico permitió un flujo de entrada constante, evitando las temidas aglomeraciones bajo el sol abrasador del mediodía mexicano.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">Lo que nos espera en las próximas semanas</h3>
<p class="mb-6">El silbatazo final que decretó la victoria del equipo local en el partido inaugural fue solo la chispa que enciende un incendio de proporciones continentales. A partir de hoy, la maquinaria del Mundial 2026 no se detiene. Con 48 selecciones, el ritmo de partidos será frenético. Las sedes en Estados Unidos y Canadá ya calientan motores para recibir sus respectivos partidos inaugurales, marcando un torneo que pondrá a prueba la resistencia física de los jugadores debido a los largos desplazamientos.</p>
<p class="mb-6">El Mundial 2026 ha comenzado con el pie derecho, apoyado en la nostalgia del Estadio Azteca y mirando hacia el futuro con una organización impecable. La fiesta del fútbol ha vuelto a nuestro continente, y durante el próximo mes, el mundo entero girará en torno a una pelota. Que gane el mejor.</p>
`;

async function main() {
  const dateStr = new Date().toISOString().split('T')[0]; // Current date
  
  const created = await prisma.article.create({
    data: {
      title: "El Estadio Azteca hace historia: Así se vivió la inauguración del Mundial 2026",
      slug: "estadio-azteca-inauguracion-mundial-2026",
      date: "09 de Junio de 2026",
      time: "10:00 AM",
      categoryId: 9, // Deportes
      content: article1,
      isNews: true,
      image: "" // To be updated later
    }
  });
  console.log("Inserted article:", created.title);
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
