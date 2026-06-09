const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const article2 = `
<p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">Con 48 selecciones participando por primera vez en la historia de la Copa del Mundo, el torneo de 2026 se presenta como el más impredecible de todos los tiempos. El aumento de cupos ha permitido la entrada de equipos debutantes y el regreso de selecciones históricas, pero cuando se trata de levantar el trofeo el 19 de julio en el MetLife Stadium de Nueva Jersey, el círculo de candidatos reales se reduce drásticamente. Tras analizar el rendimiento en las eliminatorias, la madurez táctica y el estado físico de sus estrellas, presentamos las cuatro selecciones que parten como favoritas indiscutibles.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">1. Francia: El imperio inagotable del talento</h3>
<p class="mb-6">Cualquier análisis serio debe comenzar por Francia. Didier Deschamps ha logrado lo que parecía imposible: construir una dinastía que no depende de un solo once titular. Si bien Kylian Mbappé sigue siendo la punta de lanza y el jugador más desequilibrante del planeta, el verdadero poder de los galos reside en su inagotable cantera de centrocampistas y defensores físicos, rápidos y tácticamente perfectos.</p>
<p class="mb-6">El esquema táctico francés se ha vuelto más líquido. Atrás quedó el rígido 4-2-3-1 de Qatar 2022; en 2026 vemos a una selección que puede mutar a un 3-4-3 en posesión, utilizando carrileros extremadamente largos que ahogan al rival en su propio campo. El gran reto de Francia no es el talento, sino la cohesión del vestuario en un torneo largo que exigirá muchísimos desplazamientos entre ciudades y cambios bruscos de clima.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">2. Brasil: La redención del "Jogo Bonito" pragmático</h3>
<p class="mb-6">La "Canarinha" llega a Norteamérica con hambre de venganza tras varias decepciones consecutivas en los mundiales. Sin embargo, este Brasil bajo la dirección de su nuevo cuerpo técnico se aleja del romanticismo puro para abrazar un pragmatismo necesario. Vinícius Júnior asume el papel de líder absoluto, respaldado por una generación de extremos que son verdaderas balas por las bandas.</p>
<p class="mb-6">Lo que hace temible a este Brasil es su renovada solidez defensiva. Han comprendido que los mundiales no se ganan goleando en fase de grupos, sino manteniendo la portería a cero en las fases eliminatorias. Con un doble pivote defensivo que actúa como un muro infranqueable y centrales con gran salida de balón, Brasil está diseñado para soportar la presión y aniquilar al contragolpe en cuestión de segundos.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">3. Inglaterra: ¿El fin de la sequía?</h3>
<p class="mb-6">"It's coming home" es el cántico perpetuo que suele terminar en lágrimas. Pero la selección de los "Three Lions" de 2026 es, posiblemente, la plantilla más profunda y equilibrada que han tenido desde 1966. Jude Bellingham llega al torneo no solo como un talento emergente, sino como una superestrella consagrada, el motor absoluto capaz de gobernar el mediocampo a su antojo.</p>
<p class="mb-6">Tácticamente, Inglaterra ha abandonado la cautela excesiva. Tienen laterales que actúan como extremos encubiertos y centrales con precisión de cirujano para el pase largo. El problema histórico de los ingleses ha sido la gestión emocional en los momentos críticos y las tandas de penales. Si logran mantener la cabeza fría bajo la intensa presión mediática que siempre los acompaña, tienen todas las herramientas futbolísticas para ser campeones del mundo.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">4. España: La evolución del rondo a la verticalidad</h3>
<p class="mb-6">La selección española ha dejado atrás la obsesión por la posesión estéril. El equipo de 2026 es una máquina letal que sabe cuándo amasar el balón y cuándo clavar un puñal con transiciones rápidas. La irrupción de extremos puros y rápidos ha roto la monotonía del juego interior, permitiendo a sus centrocampistas encontrar espacios mucho más abiertos.</p>
<p class="mb-6">El gran valor de España radica en su inteligencia táctica colectiva. Es un equipo de autor, donde el sistema brilla por encima de las individualidades. Su presión alta tras pérdida es la más asfixiante del torneo, recuperando el balón apenas segundos después de perderlo. Si sus delanteros mantienen un buen porcentaje de acierto de cara al arco —su histórico talón de Aquiles— será muy difícil que alguien los saque de la competencia.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">Menciones honoríficas y los "Caballos Negros"</h3>
<p class="mb-6">No podemos cerrar este análisis sin mencionar a la Argentina, defensora del título. Con una plantilla en plena transición generacional y la sombra alargada de las leyendas que comienzan a despedirse, su competitividad en partidos de eliminación directa es innegable. Por otro lado, equipos como Uruguay, con un fútbol vertical e intenso, o una sorprendente selección de Estados Unidos que jugará como local con la mejor generación de su historia, están listos para arruinar las predicciones de cualquier experto.</p>
<p class="mb-6">El formato de 48 equipos añade una ronda extra (dieciseisavos de final), lo que significa que el equipo campeón deberá jugar un total de ocho partidos. El desgaste físico y la gestión de la plantilla serán tan importantes como la táctica sobre la pizarra. El Mundial 2026 será un maratón de resistencia brutal, y solo el equipo más duro, física y mentalmente, llegará a la gloria en Nueva Jersey.</p>
`;

const article3 = `
<p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">El Mundial de la FIFA 2026 no es solo el mayor evento deportivo del año, es un experimento económico sin precedentes. Por primera vez, tres potencias (Estados Unidos, México y Canadá) comparten los inmensos costos operativos y las gigantescas ganancias de albergar el torneo. Con 48 equipos, 104 partidos y millones de turistas atravesando fronteras, las estimaciones sugieren que el impacto financiero superará con creces cualquier métrica registrada en la historia de los mega-eventos deportivos. Pero la pregunta persiste: ¿quiénes son los verdaderos ganadores económicos de esta justa continental?</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">La logística compartida: Reduciendo el riesgo de los "Elefantes Blancos"</h3>
<p class="mb-6">Históricamente, albergar un Mundial ha sido una trampa financiera para las naciones anfitrionas. Ejemplos como Sudáfrica 2010 o Brasil 2014 dejaron estadios millonarios que hoy son "elefantes blancos" casi sin uso y que siguen costando millones en mantenimiento público. La gran genialidad comercial del Mundial 2026 es el uso de infraestructura preexistente. Las 16 sedes elegidas ya contaban con estadios de clase mundial (utilizados para la NFL en EE.UU., o grandes clubes en México y Canadá), requiriendo solo remodelaciones específicas en lugar de construcciones desde cero.</p>
<p class="mb-6">Esto ha reducido la inversión de capital inicial en más de un 60% en comparación con la edición de Qatar 2022. Al dividir los costos de seguridad y logística entre tres gobiernos, el riesgo fiscal se ha mitigado drásticamente, haciendo de este modelo tripartito el posible estándar para futuros mega-eventos globales.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">El turismo y la inyección local directa</h3>
<p class="mb-6">Se estima que más de 5 millones de aficionados cruzarán las fronteras durante las seis semanas de duración del torneo. Para industrias locales como la hostelería, los restaurantes y las aerolíneas regionales, esto representa una inyección de liquidez masiva en pleno verano de 2026. Estudios preliminares de agencias financieras apuntan a que ciudades anfitrionas como Miami, Monterrey o Toronto experimentarán un repunte del 15% al 20% en su PIB mensual durante este período.</p>
<p class="mb-6">Sin embargo, el fenómeno no está libre de tensiones. La alta demanda ha disparado los precios de alquileres de corta estancia (como Airbnb) a cifras exorbitantes, generando fricciones en los mercados locales de vivienda y obligando a los alcaldes a implementar regulaciones de emergencia para proteger a los inquilinos locales de ser desplazados temporalmente.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">Derechos de transmisión y patrocinios récord</h3>
<p class="mb-6">Donde los números se vuelven mareantes es en los derechos de televisión y patrocinios comerciales. Al contar con un mercado local que incluye a Norteamérica entera (una de las regiones de mayor poder adquisitivo y con mayor consumo publicitario del mundo), la FIFA ha cerrado contratos de patrocinio por cifras récord. Gigantes tecnológicos y automotrices han pagado primas del 30% respecto al mundial anterior para asegurar su visibilidad.</p>
<p class="mb-6">El cambio de formato a 104 partidos también significa que las cadenas televisivas tienen muchas más horas de contenido para vender espacios publicitarios. Además, los horarios de los partidos están perfectamente alineados con el prime time del continente americano, lo que asegura audiencias millonarias locales, mientras que los partidos matutinos capturan las importantes franjas de audiencia en Europa y Asia.</p>

<h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">El verdadero legado económico</h3>
<p class="mb-6">Más allá del pico de consumo estival, el verdadero legado económico del Mundial 2026 podría residir en las inversiones de infraestructura paralela que los gobiernos han acelerado para el evento. Las mejoras en las líneas de transporte ferroviario local, la modernización de los sistemas de tráfico aéreo y las actualizaciones en las redes de telecomunicaciones (5G avanzado y redes privadas para estadios) quedarán instaladas para el uso de los ciudadanos.</p>
<p class="mb-6">En definitiva, el Mundial de Norteamérica se perfila no solo como el torneo más masivo a nivel deportivo, sino como el modelo de negocio más pulido que el fútbol haya visto jamás. Un equilibrio cauteloso entre la austeridad en la construcción de nuevos recintos y la maximización brutal de los ingresos por consumo y derechos comerciales. Si el experimento resulta exitoso, es probable que no volvamos a ver una Copa del Mundo organizada por un solo país en solitario durante mucho tiempo.</p>
`;

async function main() {
  await prisma.article.createMany({
    data: [
      {
        title: "Análisis táctico: Las 4 selecciones favoritas para levantar la copa en Nueva Jersey",
        slug: "analisis-tactico-favoritas-mundial-2026",
        date: "09 de Junio de 2026",
        time: "11:30 AM",
        categoryId: 9, // Deportes
        content: article2,
        isNews: true,
        image: ""
      },
      {
        title: "El impacto económico del primer Mundial compartido entre tres naciones",
        slug: "impacto-economico-mundial-norteamerica-2026",
        date: "09 de Junio de 2026",
        time: "02:15 PM",
        categoryId: 15, // Economía
        content: article3,
        isNews: true,
        image: ""
      }
    ]
  });
  console.log("Inserted Articles 2 and 3");
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
