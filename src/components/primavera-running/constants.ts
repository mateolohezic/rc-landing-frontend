// ───────────────────────────────────────────────
// Datos del evento Primavera Running RC x Alterpoint (20/09/2026)
// Circuito de indoor cycling + running entre RC Terrazas y la terraza de Alterpoint.
// ───────────────────────────────────────────────

// WhatsApp del evento. Por defecto, el de la sede Terrazas (punto de largada). Override con env var si hay número dedicado.
export const EVENTO_WHATSAPP = process.env.NEXT_PUBLIC_EVENTO_WHATSAPP_PRIMAVERA || '5493815145550';

export const EVENTO = {
  fechaLarga: 'Domingo 20 de septiembre de 2026',
  horario: 'Desde las 9:00',
  salida: 'RC Terrazas',
  llegada: 'Alterpoint, terraza Malvina',
  ciudad: 'Yerba Buena, Tucumán',
};

// Inicio del evento (para el countdown y el link de agendar)
export const EVENTO_ISO = '2026-09-20T09:00:00-03:00';

// Fotos de fondo. Hoy son placeholders de picsum.photos; cuando lleguen las fotos reales
// de Alterpoint, se reemplaza cada valor acá (no hace falta tocar los componentes).
export const PRIMAVERA_FOTOS = {
  hero: 'https://picsum.photos/seed/primavera-hero/1600/2000',
  storyIntro: 'https://picsum.photos/seed/primavera-familia/1600/2000',
  cycling: 'https://picsum.photos/seed/cyclehall/1200/1600',
  running: 'https://picsum.photos/seed/primavera-alterpoint/1200/1600',
  after: 'https://picsum.photos/seed/terracenight/1200/1600',
  ctaFinal: 'https://picsum.photos/seed/primavera-cta/1600/2000',
};

// ── Actividades ──────────────────────────────────
export type ActividadId = 'cycling' | 'running';

export const ACTIVIDAD_LABELS: Record<ActividadId, string> = {
  cycling: 'Indoor Cycling al aire libre',
  running: 'Circuito de running',
};

// Construye el resumen legible de lo que eligió la persona (para WhatsApp / gracias)
export const buildActividadResumen = (actividades: ActividadId[], soloAfter: boolean): string => {
  if (soloAfter) return 'Solo el after';
  const partes: string[] = [];
  if (actividades.includes('cycling')) partes.push('Indoor Cycling');
  if (actividades.includes('running')) partes.push('Running');
  return partes.join(' + ');
};

// Link de WhatsApp con mensaje pre-armado
export const buildWhatsappLink = (params: { nombre?: string; actividad?: string }) => {
  const text = `Hola! Soy ${params.nombre || ''}. Me anoté a Primavera Running RC x Alterpoint${
    params.actividad ? ` (${params.actividad})` : ''
  }. Quería confirmar mi lugar.`;
  return `https://wa.me/${EVENTO_WHATSAPP}?text=${encodeURIComponent(text)}`;
};

// Link para agendar el evento en Google Calendar (fecha/hora reales, sin duración estimada
// porque no está confirmada — se carga como evento de 3h desde el inicio a modo de referencia).
export const buildCalendarLink = () => {
  const start = new Date(EVENTO_ISO);
  const end = new Date(start.getTime() + 3 * 60 * 60 * 1000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: 'Primavera Running · RC x Alterpoint',
    dates: `${fmt(start)}/${fmt(end)}`,
    location: 'RC Gym Terrazas, Yerba Buena, Tucumán',
    details: 'Indoor cycling, circuito de running y after en la terraza de Alterpoint.',
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

// ── Sponsors ─────────────────────────────────────
// Vacío hasta que se confirme el line-up. SponsorsPrimavera no renderiza nada si esto está vacío.
export const SPONSORS: string[] = [];

// ── FAQ ──────────────────────────────────────────
// Solo preguntas con respuesta 100% verificada. Nada de horarios de cada bloque, km del
// circuito, cupo total, estacionamiento ni política de lista de espera: no están confirmados.
export const FAQ = [
  {
    q: '¿Hay que ser socio de RC para participar?',
    a: 'No. El evento es abierto a todo el público, socios y no socios.',
  },
  {
    q: '¿Cuánto cuesta la inscripción?',
    a: 'Es gratis.',
  },
  {
    q: '¿Hay cupo limitado?',
    a: 'Sí, los cupos son limitados.',
  },
  {
    q: '¿Puedo inscribirme a las dos actividades?',
    a: 'Sí. Al inscribirte podés elegir el indoor cycling, el circuito de running, ambas, o anotarte solo para el after en Alterpoint.',
  },
  {
    q: '¿Es para todos los niveles?',
    a: 'Sí. Es un evento familiar, abierto a todos los niveles.',
  },
  {
    q: '¿Qué hay que llevar?',
    a: 'Ropa cómoda, calzado deportivo, agua y protector solar.',
  },
];
