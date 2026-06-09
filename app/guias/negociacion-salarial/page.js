import Link from 'next/link';
import { Briefcase, ArrowRight, DollarSign, TrendingUp, Handshake, Eye } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

export const metadata = {
 title: 'Negociación Salarial: Cobra lo que Vales | AldiaDeTodo',
 description: 'Estrategias probadas para negociar tu salario, aumentos y beneficios. Supera el síndrome del impostor y usa datos para respaldar tu valor.',
 keywords: ['salario', 'negociación', 'finanzas', 'carrera', 'aumento'],
 openGraph: {
 title: 'Negociación Salarial: Cobra lo que Vales',
 description: 'Guía táctica para negociar un aumento de sueldo o un salario inicial.',
 url: 'https://aldiadetodo.com/guias/negociacion-salarial',
 type: 'article',
 },
 alternates: { canonical: '/guias/negociacion-salarial' },
};

export default function Guia() {
 const jsonLd = {
 '@context': 'https://schema.org', '@type': 'Article',
 headline: 'Negociación Salarial: Cobra lo que Vales',
 description: 'Guía táctica para negociar un aumento de sueldo.',
 author: { '@type': 'Person', name: 'Nestor Abanto Huaman' },
 publisher: { '@type': 'Organization', name: 'AldiaDeTodo' },
 datePublished: '2026-05-18', dateModified: '2026-05-18',
 mainEntityOfPage: 'https://aldiadetodo.com/guias/negociacion-salarial',
 };

 return (
 <article className="min-h-screen bg-white font-inter text-slate-900">
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

 <header className="relative bg-slate-950 text-white overflow-hidden">
 <div className="container mx-auto max-w-4xl px-4 py-24 md:py-32 relative z-10">
 <div className="flex items-center gap-3 mb-8">
 <span className="bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">finanzas</span>
 </div>
 <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-outfit leading-[0.9] tracking-tight mb-8">
 Negociación Salarial<br/><span className="text-emerald-400">Cobra lo que Vales</span>
 </h1>
 <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
 El miedo a negociar puede costarte cientos de miles de dólares a lo largo de tu carrera. Aprende a abordar la compensación con confianza, datos y estrategia.
 </p>
 </div>
 </header>

 <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
 <div className="prose prose-lg prose-slate max-w-none">
 <section id="mindset" className="mb-12">
 <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><Eye className="w-7 h-7 text-emerald-500" /> El Mindset del Negociador</h2>
 <p>La razón principal por la que los profesionales no negocian su salario inicial o no piden aumentos no es la falta de habilidades o resultados; es una barrera psicológica profunda. Sentimos que pedir más dinero es "de mala educación", nos da terror que nos retiren la oferta o sufrimos del síndrome del impostor. Romper estas falsas creencias es el paso cero.</p>
 <p>Primero, comprende que para Recursos Humanos y gerencia, la negociación es un trámite estrictamente de negocios, no un insulto personal. Las empresas esperan que negocies. De hecho, en roles gerenciales, no negociar puede hacerte lucir débil o inexperto. Ellos tienen un presupuesto y una banda salarial aprobada, y siempre, invariablemente, su primera oferta estará en la parte media-baja de esa banda para tener margen de maniobra.</p>
 <p>Si no negocias un aumento inicial del 10%, el impacto del interés compuesto a lo largo de 30 años de vida laboral (sobre aportes a jubilación, bonos basados en porcentajes y futuros aumentos) puede resultar en una pérdida neta superior al medio millón de dólares. Negociar no es ser codicioso, es ser financieramente responsable contigo y con tu futuro.</p>
 </section>

 <section id="investigacion" className="mb-12">
 <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><DollarSign className="w-7 h-7 text-emerald-500" /> Investigación de Mercado Salarial</h2>
 <p>La negociación no se gana en la mesa de reuniones, se gana en la preparación semanas antes de sentarte a hablar. Jamás debes entrar a una negociación diciendo "creo que merezco más porque trabajo duro" o "necesito más dinero porque la inflación ha subido". A la empresa no le importan tus necesidades personales, le importa el valor de mercado de tus habilidades.</p>
 <p>Tu objetivo es establecer un "caso de negocio" irrefutable. Usa herramientas como Glassdoor, Payscale, encuestas salariales de reclutadores locales y plataformas como LinkedIn Salary para determinar la banda salarial exacta para tu cargo, en tu ciudad, con tus años de experiencia. Esa es la data dura.</p>
 <p>Construye un portafolio de victorias o "Brag Document" (Documento de Alarde). Documenta con números exactos cómo tus acciones le ahorraron dinero a la empresa, aumentaron los ingresos, o mejoraron procesos críticos durante el último año. "Reduje los tiempos de carga del servidor en un 40%, ahorrando $5k mensuales en infraestructura" es un argumento blindado. "He sido un buen jugador de equipo" no lo es.</p>
 </section>

 <section id="guiones" className="mb-12">
 <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><Handshake className="w-7 h-7 text-emerald-500" /> Estrategias y Guiones Exactos</h2>
 <p>Cuando llegue el momento de la conversación (idealmente 3 a 4 meses antes del ciclo oficial de revisión de desempeño y presupuestos de la empresa, no el mismo día que te entregan tu evaluación), el anclaje y el tono lo son todo. Mantén un tono colaborativo, no combativo. No es "tú contra tu jefe", es "tú y tu jefe resolviendo cómo alinear tu compensación con tu impacto".</p>
 <p><strong>Si te preguntan tu expectativa salarial antes de darte una oferta:</strong> Evita ser el primero en decir un número. El que da el primer número pierde apalancamiento. Di: <em>"Estoy más enfocado en encontrar un rol donde pueda aportar un gran impacto. Estoy seguro de que si hay un buen encaje mutuo, podremos llegar a una compensación justa y competitiva. ¿Cuál es el presupuesto aprobado para este rol?"</em></p>
 <p><strong>Para pedir un aumento en tu rol actual:</strong> <em>"Durante los últimos 12 meses, he liderado los proyectos X e Y que resultaron en un incremento del 20% en ventas. Basado en este impacto continuo y en los datos actuales de mercado para roles con este nivel de responsabilidad en nuestra industria, me gustaría ajustar mi salario base a [X cantidad]. ¿Cómo podemos trabajar juntos para llegar a este objetivo?"</em></p>
 </section>

 <section id="beneficios" className="mb-12">
 <h2 className="text-3xl font-black font-outfit mt-0 flex items-center gap-3"><TrendingUp className="w-7 h-7 text-emerald-500" /> Negociando más allá del dinero</h2>
 <p>A veces, el presupuesto de la empresa está genuinamente congelado o tienen un tope estricto e inamovible para tu rol (banda salarial máxima). Si recibes un "No" firme al aumento del salario base, la negociación no ha terminado; acaba de pivotar hacia la compensación total.</p>
 <p>Existen elementos altamente valiosos para ti que tienen un costo marginal cero o muy bajo para la empresa. Puedes pedir días adicionales de vacaciones pagadas, un presupuesto anual para conferencias y educación profesional, mejoras en la cobertura de tu seguro médico, o flexibilidad garantizada (como trabajar remoto permanentemente 3 días a la semana).</p>
 <p>Otra táctica poderosa frente a un "no" por falta de presupuesto es pedir una revisión adelantada condicionada. Di: <em>"Entiendo las restricciones presupuestarias actuales. Si logro alcanzar los KPIs X, Y y Z durante los próximos 6 meses, ¿podemos firmar por escrito un compromiso para revisar mi banda salarial en ese momento en lugar de esperar al próximo año?"</em> Nunca te levantes de la mesa con las manos completamente vacías.</p>
 </section>
 </div>

 <AuthorBox category="finanzas" datePublished="2026" dateReviewed="Mayo 2026" />
 </div>
 </article>
 );
}
