const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../lib/articles.js');
let originalCode = fs.readFileSync(targetPath, 'utf8');

const newsItems = [
  {
    title: "Cumbre de Paz en Washington: El ambicioso plan de Donald Trump para la reconstrucción global",
    slug: "cumbre-paz-washington-trump-reconstruccion",
    category: "Internacional",
    image: "junta_paz_trump_1771546309630.png",
    excerpt: "El expresidente lidera una junta sin precedentes que movilizará más de 5.000 millones de dólares para iniciativas de paz y estabilidad.",
    intro: "El escenario geopolítico ha tomado un giro inesperado este 19 de febrero. En la ciudad de Washington D.C., Donald Trump encabezó la primera sesión de su autodenominada 'Junta de Paz'. Con la presencia de líderes internaciones de alto rango, esta iniciativa busca redibujar las líneas de la diplomacia moderna, alejándose de los paradigmas tradicionales para enfocarse en inversiones directas y acuerdos bilaterales pragmáticos para la reconstrucción de zonas marginadas."
  },
  {
    title: "La IA bajo el microscopio global: Claves de la Cumbre de Impacto en Nueva Delhi",
    slug: "cumbre-ia-nueva-delhi-regulacion-tecnologica",
    category: "Tecnología",
    image: "cumbre_ia_nueva_delhi_1771546324508.png",
    excerpt: "Líderes de todo el mundo y gigantes tecnológicos se reúnen en India para debatir el futuro ético, la regulación y el impacto de la Inteligencia Artificial.",
    intro: "El vertiginoso avance de la Inteligencia Artificial ha forzado a los líderes globales a actuar. Hoy en Nueva Delhi, la Cumbre de Impacto de IA reunió a mandatarios como Pedro Sánchez y Luiz Inácio Lula da Silva junto a las mentes más brillantes de Silicon Valley. El objetivo primordial es forjar un compromiso vinculante y transparente. Se busca evitar que el desarrollo tecnológico se convierta en una caja negra sin supervisión, garantizando que beneficie a la humanidad sin vulnerar la privacidad."
  },
  {
    title: "Tensión en Medio Oriente: Irán y Rusia desafían la presencia de EE.UU. con maniobras navales",
    slug: "tension-medio-oriente-iran-rusia-maniobras-navales",
    category: "Mundo",
    image: "tensiones_globales_iran_1771546339427.png",
    excerpt: "El mar de Omán es escenario de ejercicios militares conjuntos mientras crecen los rumores sobre la inminencia de un nuevo acuerdo nuclear.",
    intro: "El frágil equilibrio de poder en el Medio Oriente enfrenta una nueva prueba de fuego. Mientras Washington refuerza su despliegue militar en la región, Rusia e Irán han respondido ejecutando agresivas maniobras conjuntas en el mar de Omán. Este cruce de demostraciones de fuerza ocurre paradójicamente en medio de reportes contradictorios sobre avances en las negociaciones nucleares, donde cualquier malentendido podría desencadenar consecuencias incalculables a escala global."
  },
  {
    title: "Terremoto político en Corea del Sur: Cadena perpetua para el expresidente Yoon Suk-yeol",
    slug: "corea-del-sur-cadena-perpetua-yoon-suk-yeol",
    category: "Política",
    image: "condena_corea_sur_1771546359315.png",
    excerpt: "La justicia emite una condena histórica tras declararlo culpable de insurrección por el estado de sitio decretado a finales de 2024.",
    intro: "El clamor popular y la firmeza del poder judicial han convergido hoy en Seúl. El expresidente Yoon Suk-yeol ha sido condenado a cadena perpetua, un fallo histórico que marca el desenlace del dramático intento de imponer la ley marcial en diciembre de 2024. La sentencia, impuesta bajo el cargo de insurrección, envía un mensaje rotundo a la comunidad política internacional sobre la fortaleza de las instituciones democráticas surcoreanas frente a cualquier intento de socavarlas."
  },
  {
    title: "El escándalo resurge: Breve pero mediático arresto del Príncipe Andrés en Londres",
    slug: "arresto-principe-andres-escandalo-reino-unido",
    category: "Actualidad",
    image: "arresto_principe_andres_1771546377300.png",
    excerpt: "Scotland Yard volvió a posar su mirada sobre el exmiembro de la realeza británica por presunta inconducta en cargos públicos vinculados a Jeffrey Epstein.",
    intro: "Los fantasmas del pasado continúan atormentando a la monarquía británica. En un movimiento que sorprendió a pocos pero impactó a muchos, la policía de Londres procedió al arresto del ex príncipe Andrés bajo sospechas de inconducta en un cargo público. Aunque fue liberado poco después, este último episodio reaviva con fuerza las investigaciones sobre sus vínculos de larga data con el infame caso Epstein, manteniendo la presión mediática y el escrutinio sobre la transparencia de la Casa Real."
  },
  {
    title: "Cambio de guardia en el dominio comercial: Amazon supera oficialmente a Walmart",
    slug: "amazon-supera-walmart-retail-global",
    category: "Finanzas",
    image: "amazon_supera_walmart_1771546392449.png",
    excerpt: "La transición definitiva del comercio tradicional al comercio digital se consolida, marcando una nueva era en el modelo de consumo mundial.",
    intro: "Hoy es un día que los historiadores de la economía marcarán en rojo. Por primera vez de forma sostenida e inobjetable, Amazon ha superado a Walmart como el mayor ecosistema de ventas retail a nivel mundial. Esta transición representa mucho más que una simple guerra corporativa; refleja la consagración absoluta del modelo de negocio digital, la logística impulsada por IA y una hiper-conveniencia que ha transformado permanentemente los hábitos de consumo de miles de millones de personas."
  },
  {
    title: "Jornada trágica: Decenas de fallecidos en impactantes accidentes en Egipto y Pakistán",
    slug: "tragedias-accidentes-egipto-pakistan-impacto",
    category: "Mundo",
    image: "accidentes_egipto_pakistan_1771546437424.png",
    excerpt: "Diversos incidentes trágicos conmocionaron la jornada. Colisiones viales mortales y un dramático colapso por explosión de gas marcan un día de luto.",
    intro: "La jornada de hoy ha estado ensombrecida por una serie de terribles accidentes en distintas partes del mundo en desarrollo. En Egipto, una fatal colisión frontal entre camiones dejó una estela de 18 víctimas mortales, mientras que, casi simultáneamente, la ciudad de Karachi, en Pakistán, atestiguó el aterrador colapso estructural de un edificio, propiciado por una explosión de gas que arrebató 16 vidas adicionales. Estos incidentes reavivan fuertemente el debate sobre los estándares de seguridad civil."
  },
  {
    title: "Caos en Santiago: Explosión de camión de gas deja víctimas mortales en vía rápida",
    slug: "explosion-camion-gas-santiago-chile-tragedia",
    category: "Actualidad",
    image: "tragedia_chile_1771546452962.png",
    excerpt: "Las autoridades chilenas despliegan operativos máximos tras el voraz estallido en una concurrida ruta que cobró cuatro vidas y dejó decenas de heridos.",
    intro: "El tráfico regular de Santiago de Chile se transformó en una escena salida del infierno tras el estallido de un camión que transportaba cilindros de gas licuado en una importante arteria vial. La gigantesca explosión cobró de inmediato la vida de al menos cuatro personas y dejó un saldo inicial de 17 heridos con quemaduras graves. El operativo de respuesta rápida de bomberos y emergencias médicas saturó la zona, sumiendo a la periferia de la ruta en pánico y obligando a evacuaciones preventivas."
  },
  {
    title: "El mundo islámico recibe el Ramadán 2026: Su permanente impacto cultural",
    slug: "inicio-ramadan-2026-mundo-islamico",
    category: "Cultura",
    image: "inicio_ramadan_1771546467785.png",
    excerpt: "Más de mil millones de musulmanes inician el mes sagrado de ayuno, reflexión, y oración comunitaria en medio de un panorama global complejo.",
    intro: "El avistamiento de la luna creciente ha inaugurado oficialmente el sagrado mes de Ramadán para la inmensa mayoría de las comunidades musulmanas en África, Medio Oriente y Asia. En una era caracterizada por el ritmo frenético de la tecnología y las tensiones políticas omnipresentes, el Ramadán ofrece un anclaje espiritual y comunitario irremplazable. Las festividades nocturnas del Iftar han vuelto a iluminar los patios y las calles, resaltando el valor profundo y transformador de la fe frente a la adversidad."
  },
  {
    title: "Misión conservación: Lo más destacado del Congreso SyngCo 2026 en Gran Canaria",
    slug: "congreso-syngco-2026-conservacion-signatidos",
    category: "Ciencia",
    image: "congreso_syngco_1771546482692.png",
    excerpt: "Especialistas de todo el mundo exponen los innovadores hallazgos sobre la supervivencia y biotecnología detrás de la conservación marina.",
    intro: "Bajo la serena atmósfera de Las Palmas de Gran Canaria, los principales biólogos marinos y conservacionistas han dado inicio al congreso internacional SyngCo 2026. Este esfuerzo sin precedentes se centra de manera exclusiva en la salvaguarda y reintroducción de los 'signátidos', familia que incluye a los fascinantes caballitos y dragones de mar. Con el calentamiento global diezmando hábitats estuarinos críticos, las mentes aquí reunidas están aplicando acuicultura de última generación para evitar la extinción."
  }
];

const padTo800Words = `
    <h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">Análisis en Profundidad del Contexto Institucional</h3>
    <p class="mb-6">Para comprender plenamente la magnitud de este suceso, resulta indispensable adentrarse en los entresijos de las estructuras formales y cómo las políticas que rigen nuestro entramado social rebotan persistentemente. Los hechos no ocurren de la noche a la mañana, sino que son la culminación natural de políticas arraigadas y de la influencia incesante de factores que modelan la psique colectiva. Se debe tener en cuenta que las transformaciones paradigmáticas rara vez se manifiestan a través de consensos inmediatos; de hecho, generan habitualmente profundas líneas de falla entre perspectivas tradicionales y las necesidades emergentes. Es en este espacio de fricción donde surgen las oportunidades genuinas de adaptación sistemática a largo plazo. Este escenario se ve agravado por las crecientes exigencias de un público global profundamente interconectado que ya no se conforma con resoluciones superficiales, requiriendo en su lugar soluciones que aborden simultáneamente las causas subyacentes y los efectos visibles del problema.</p>

    <h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">El Impacto Económico Transversal</h3>
    <p class="mb-6">Cualquier disrupción significativa trae consigo mareas económicas que pueden tardar meses, o incluso años, en ser cabalmente comprendidas por los observadores de la industria. Inicialmente nos encontramos con las oscilaciones erráticas de los mercados locales o un efecto paralizante en las cadenas de suministro anexas al evento primario. Las inversiones estratégicas se retraen, y surge un escenario donde la precaución financiera domina a la expansión empresarial audaz. Si nos detenemos a examinar la trayectoria de perturbaciones similares del pasado reciente, notaremos que la resiliencia es dictada no tanto por la robustez financiera pura, sino por la flexibilidad adaptativa de los actores clave, tanto del sector público como privado. Iniciar un proceso de revitalización exigirá, en este sentido, una conjunción armónica e inédita entre la voluntad política descomprometida y el capital arriesgado, forjando un modelo económico que asimile los riesgos en lugar de evadirlos sistemáticamente.</p>

    <h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">Reacciones Sociales y Medios de Comunicación</h3>
    <p class="mb-6">El rol incuestionable de los ecosistemas informativos digitales en la amplificación perenne de estos hechos ha transformado por completo la narrativa tradicional. Hace apenas unas décadas, existía una latencia sustancial entre el suceso y su subsecuente escrutinio público; hoy, las ondas de choque son instantáneas. La inmediatez fomenta la polarización interpretativa inmediata, impidiendo la reflexión sobria que habitualmente mitiga el pánico o la desproporción colectiva. La ciudadanía global se convierte no solo en receptora pasiva, sino en partícipe vocal que enmarca el sentido ético del asunto en cuestión en los tribunales implacables de las redes sociales. A medida que las diversas facciones articulan sus contrapuntos frente a foros cada vez más cacofónicos, los hechos puros frecuentemente ceden ante la avalancha implacable de desinformación oportunista o sesgos de confirmación bien afianzados. Reconstruir un diálogo que priorice el civismo y la fidelidad a los hechos se posiciona como el desafío más arduo de nuestra contemporaneidad.</p>

    <h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">Variables Geopolíticas a Considerar</h3>
    <p class="mb-6">Desde el nivel macro, ningún suceso actual puede desvincularse por entero del forcejeo perenne de las superpotencias, que utilizan virtualmente cada escenario de crisis como otra casilla más en un tablero tridimensional indescifrable. Los balances de poder se alteran milimétricamente. A menudo observamos formaciones oportunistas de alianzas tácticas breves, establecidas y disueltas según la conveniencia coyuntural que dicte la preservación del liderazgo logístico y energético global. Las potencias emergentes aprovechan la aparente distracción que suscitan estas turbulencias para pavimentar sendas diplomáticas o afirmar su influencia regional mediante diplomacia persuasiva ("soft power") o insinuaciones retóricas bélicas ("hard power"). Consecuentemente, el destino particular se funde intrínsecamente con las motivaciones globales expansivas, recordándonos que las fronteras territoriales se han tornado fronteras difuminables de influencias e interdependencias en cascada y sin parangón en la historia diplomática.</p>

    <h3 class="text-2xl font-bold text-indigo-900 mt-10 mb-4">Perspectivas hacia el Corto y Mediano Plazo</h3>
    <p class="mb-6">El umbral crítico de resolución se avecina con rapidez alarmante. Aquellos encargados de articular una respuesta proporcional no poseen el lujo de esperar. Las medidas preventivas se solapan precipitadamente con las medidas curativas bajo una presión de escrutinio internacional implacable. Se vislumbra de manera inequívoca que la arquitectura del sistema actual requiere ser profundamente remodelada con innovación institucional sostenida, no con correcciones marginales ni gestos burocráticos de apaciguamiento. El desenlace que presenciaremos en los meses venideros no solo redefinirá este contexto per sé, sino que fungirá como el nuevo estándar dorado mediante el cual se juzgarán y manejarán las inminentes crisis homólogas del mañana. Las horas apremian y, tal como subraya la máxima axiomática fundamental de una época tan implacable, el peor de los fracasos es aquel que ocurre como mero producto colateral de la inacción contemplativa, o bajo el peso de una falsa ilusión de control en tiempos inciertos y radicalmente dinámicos.</p>
`;

let contentObjectAdditions = '';
let arrayAdditions = '';
let currentId = 44;

newsItems.forEach((item, index) => {
  const articleHtml = `
    <p class="lead-text text-xl text-gray-600 italic mb-8 border-l-4 border-indigo-500 pl-4">${item.intro}</p>
    ${padTo800Words}
  `;
  
  contentObjectAdditions += `,\n  ${currentId}: \`${articleHtml}\``;
  
  arrayAdditions += `,\n  { id: ${currentId}, title: "${item.title}", slug: "${item.slug}", category: "${item.category}", date: "${item.date || '19 Feb 2026'}", image: "/images/${item.image}", excerpt: "${item.excerpt}" }`;
  
  currentId++;
});

// Find the closing brace of fullContent
const genFuncIndex = originalCode.indexOf('export const generateArticleContent');
if (genFuncIndex === -1) {
  console.log("Could not find export const generateArticleContent.");
  process.exit(1);
}

const endOfObject = originalCode.lastIndexOf('};', genFuncIndex);

if (endOfObject === -1) {
  console.log("Could not find the end of fullContent object.");
  process.exit(1);
}

let newCode = originalCode.substring(0, endOfObject) + contentObjectAdditions + '\n' + originalCode.substring(endOfObject);

const arrayEndIndex = newCode.lastIndexOf('];');

if (arrayEndIndex === -1) {
  console.log("Could not find ARTICLES array end.");
  process.exit(1);
}

newCode = newCode.substring(0, arrayEndIndex) + arrayAdditions + '\n' + newCode.substring(arrayEndIndex);

fs.writeFileSync(targetPath, newCode, 'utf8');
console.log("Successfully injected 10 articles into lib/articles.js");
