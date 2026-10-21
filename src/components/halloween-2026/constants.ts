import type { StaticImageData } from 'next/image';
import catrina from '@/assets/halloween-2026/catrina-logo-rc.jpeg';
import cruella from '@/assets/halloween-2026/cruella.jpeg';
import spiderman from '@/assets/halloween-2026/spiderman-pampa.jpeg';
import grupo from '@/assets/halloween-2026/grupo.jpeg';

// ───────────────────────────────────────────────
// Datos de la Fiesta de Halloween RC (30/10/2026)
// Todo lo que cambia entre ediciones vive acá, no en los componentes.
// ───────────────────────────────────────────────

export const EVENTO = {
  nombre: 'Fiesta de Halloween',
  fechaLarga: 'Viernes 30 de octubre',
  fechaCorta: '30.10',
  horario: 'Desde las 18:30',
  lugar: 'RC Terrazas',
  direccion: 'Av. Perón 2400, Yerba Buena',
  ciudad: 'Yerba Buena, Tucumán',
};

// Inicio del evento (link de agendar y datos estructurados).
export const EVENTO_ISO = '2026-10-30T18:30:00-03:00';
// Sin horario de fin confirmado: el link de agendar usa esta duración estimada.
export const EVENTO_DURACION_HS = 5;

export const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=RC+Gym+Terrazas+Av.+Per%C3%B3n+2400+Yerba+Buena+Tucum%C3%A1n';

export const SITE_URL = 'https://rcgym.com.ar/halloween';

// WhatsApp de contacto del evento. Por defecto el de Terrazas. Override con env var si hay número dedicado.
export const EVENTO_WHATSAPP = process.env.NEXT_PUBLIC_EVENTO_WHATSAPP_HALLOWEEN || '5493815145550';

// Día de prueba gratis: es el mismo link del botón del navbar. Vacío = no se muestra.
export const DIA_DE_PRUEBA_URL = process.env.NEXT_PUBLIC_FORM_ASOCIATE || '';

export const SEDES = ['Tafí Viejo', 'Barrio Sur', 'Barrio Norte', 'Terrazas', 'Aconquija', 'Épico'] as const;

// Qué hay en la fiesta.
export const QUE_HAY = [
  { titulo: 'DJ en vivo', detalle: 'Música para bailar toda la noche.' },
  { titulo: 'Stand de juegos', detalle: 'Vení a jugar durante la fiesta.' },
  { titulo: 'Comida y bebida', detalle: 'Para disfrutar mientras lo das todo.' },
  { titulo: 'Concurso de disfraces', detalle: 'Un jurado elige los mejores y se entregan premios.' },
];

// Premios del concurso de este año. Mientras esté vacío, la landing no muestra el bloque de premios.
// Formato: { puesto: '1° puesto', premio: 'Texto del premio' }
export const PREMIOS: { puesto: string; meses: string }[] = [
  { puesto: '1° puesto', meses: '12' },
  { puesto: '2° puesto', meses: '6' },
  { puesto: '3° puesto', meses: '3' },
];
export const PREMIO_DETALLE = 'de gimnasio en tu sede';

// Línea debajo de los premios (premios varios y sorteos sin detallar).
export const PREMIOS_EXTRA = 'Además, premios y sorteos durante la fiesta.';

// Jurado de este año. Mientras esté vacío, no se muestra.
export const JURADO: { nombre: string; detalle?: string }[] = [];

// Galería de la edición 2025. Los textos describen lo que se ve en cada foto o video.
export type GaleriaItem =
  | { tipo: 'foto'; src: StaticImageData; alt: string; pie: string; posicion?: string }
  | { tipo: 'video'; src: string; poster: string; alt: string; pie: string };

export const GALERIA: GaleriaItem[] = [
  { tipo: 'video', src: '/halloween-2026/desfile.mp4', poster: '/halloween-2026/desfile.jpg', alt: 'Participantes disfrazados desfilando sobre el pasto', pie: 'El desfile' },
  { tipo: 'foto', src: spiderman, alt: 'Chico disfrazado de hombre araña con una calabaza y una bolsa de regalo', pie: 'Disfraces para todas las edades', posicion: 'center 45%' },
  { tipo: 'foto', src: cruella, alt: 'Participante disfrazada de Cruella de Vil', pie: 'Cruella, del desfile', posicion: 'center 40%' },
  { tipo: 'video', src: '/halloween-2026/cierre.mp4', poster: '/halloween-2026/cierre.jpg', alt: 'Público disfrazado reunido en el patio de RC Terrazas', pie: 'El patio de RC Terrazas' },
  { tipo: 'foto', src: grupo, alt: 'Grupo de adultos y chicos disfrazados frente al logo de RC Terrazas', pie: 'Entre amigos y en familia', posicion: 'center 50%' },
  { tipo: 'foto', src: catrina, alt: 'Participante disfrazada frente al logo de RC con globos y lápidas', pie: 'Decoración en la entrada', posicion: 'center 42%' },
];

export const FAQ = [
  {
    q: '¿Hay que ser socio de RC para ir?',
    a: 'No. La fiesta es para socios y no socios. Si no entrenás en RC, es una buena forma de conocer RC Terrazas.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'La entrada es gratis. Hay que inscribirse antes con el formulario de esta página.',
  },
  {
    q: '¿A qué hora empieza y dónde es?',
    a: 'El viernes 30 de octubre desde las 18:30, en RC Terrazas, Av. Perón 2400, Yerba Buena.',
  },
  {
    q: '¿Cómo participo del concurso de disfraces?',
    a: 'En el formulario podés marcar que querés participar. Las bases completas se publican en @rcgym.',
  },
];

// ── Utilidades ───────────────────────────────────
export const buildCalendarLink = () => {
  const start = new Date(EVENTO_ISO);
  const end = new Date(start.getTime() + EVENTO_DURACION_HS * 3600000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: 'Fiesta de Halloween · RC Terrazas',
    dates: `${fmt(start)}/${fmt(end)}`,
    location: `RC Gym Terrazas, ${EVENTO.direccion}`,
    details: 'Fiesta de Halloween de RC Gym con DJ en vivo, stand de juegos, comida y bebida y concurso de disfraces. Entrada gratis con inscripción.',
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

export const buildShareLink = () => {
  const text = `Fiesta de Halloween en RC Terrazas, viernes 30 de octubre desde las 18:30. Entrada gratis con inscripción: ${SITE_URL}`;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
};

export const buildWhatsappLink = (nombre?: string) => {
  const text = `Hola! Soy ${nombre || ''}. Me anoté a la Fiesta de Halloween del 30/10 y quería hacer una consulta.`;
  return `https://wa.me/${EVENTO_WHATSAPP}?text=${encodeURIComponent(text)}`;
};
