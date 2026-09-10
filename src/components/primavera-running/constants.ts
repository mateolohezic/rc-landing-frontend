// ───────────────────────────────────────────────
// Datos del evento Primavera Running RC x Alterpoint (20/09/2026)
// Running + spinning + funcional en RC Terrazas, cierre en Alterpoint.
// ───────────────────────────────────────────────

// WhatsApp del evento. Por defecto, el de la sede Terrazas (punto de largada). Override con env var si hay número dedicado.
export const EVENTO_WHATSAPP = process.env.NEXT_PUBLIC_EVENTO_WHATSAPP_PRIMAVERA || '5493815145550';

export const EVENTO = {
  fechaLarga: 'Domingo 20 de septiembre de 2026',
  horario: 'Desde las 9:30',
  salida: 'RC Terrazas',
  llegada: 'Alterpoint, terraza Malvina',
  ciudad: 'Yerba Buena, Tucumán',
};

// Inicio del evento (para el countdown y el link de agendar): 9:30, bienvenida y acreditación.
export const EVENTO_ISO = '2026-09-20T09:30:00-03:00';

// Cronograma real del día.
export const CRONOGRAMA = [
  { hora: '9:30', actividad: 'Bienvenida y acreditación + café', detalle: 'Para socios y no socios' },
  { hora: '10:00', actividad: 'Running con Romi Mamá Fit', detalle: 'Para todas las edades' },
  { hora: '10:30', actividad: 'Masterclass de spinning con Luz Moyano', detalle: '' },
  { hora: '10:30', actividad: 'Funcional con Jere y Lu', detalle: '' },
  { hora: '12:00', actividad: 'Charla del Dr. Calabro + 3er tiempo', detalle: 'En Alterpoint' },
];

// Fotos de fondo. Hoy son placeholders; cuando lleguen las fotos reales de Alterpoint,
// se reemplaza cada valor acá (no hace falta tocar los componentes).
export const PRIMAVERA_FOTOS = {
  hero: 'https://picsum.photos/seed/primavera-hero/1600/2000',
  storyIntro: 'https://picsum.photos/seed/primavera-familia/1600/2000',
  running: 'https://picsum.photos/seed/primavera-alterpoint/1200/1600',
  funcional: 'https://picsum.photos/seed/primavera-funcional/1200/1600',
  ctaFinal: 'https://picsum.photos/seed/primavera-cta/1600/2000',
};

// ── Actividades ──────────────────────────────────
export type ActividadId = 'running' | 'spinning' | 'funcional';

export const ACTIVIDAD_LABELS: Record<ActividadId, string> = {
  running: 'Running',
  spinning: 'Spinning',
  funcional: 'Funcional',
};

// Construye el resumen legible de lo que eligió la persona (para WhatsApp / gracias)
export const buildActividadResumen = (actividades: ActividadId[], soloAfter: boolean): string => {
  if (soloAfter) return 'Solo el after';
  const partes: string[] = [];
  if (actividades.includes('running')) partes.push('Running');
  if (actividades.includes('spinning')) partes.push('Spinning');
  if (actividades.includes('funcional')) partes.push('Funcional');
  return partes.join(' + ');
};

// Link de WhatsApp con mensaje pre-armado
export const buildWhatsappLink = (params: { nombre?: string; actividad?: string }) => {
  const text = `Hola! Soy ${params.nombre || ''}. Me anoté a Primavera Running RC x Alterpoint${
    params.actividad ? ` (${params.actividad})` : ''
  }. Quería confirmar mi lugar.`;
  return `https://wa.me/${EVENTO_WHATSAPP}?text=${encodeURIComponent(text)}`;
};

// Link para agendar el evento en Google Calendar (fecha/hora reales; dura hasta el cierre
// confirmado a las 12:00 en Alterpoint).
export const buildCalendarLink = () => {
  const start = new Date(EVENTO_ISO);
  const end = new Date('2026-09-20T12:30:00-03:00');
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: 'Primavera Running · RC x Alterpoint',
    dates: `${fmt(start)}/${fmt(end)}`,
    location: 'RC Gym Terrazas, Yerba Buena, Tucumán',
    details: 'Running, spinning y funcional en RC Terrazas, cierre en Alterpoint con charla y 3er tiempo.',
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

// ── FAQ ──────────────────────────────────────────
// Solo preguntas con respuesta 100% verificada.
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
    q: '¿Puedo inscribirme a más de una actividad?',
    a: 'Sí. Podés elegir running, spinning, funcional, combinarlas, o anotarte solo para el cierre en Alterpoint. Running es a las 10, spinning y funcional son a las 10:30 (en simultáneo, así que de esas dos se elige una).',
  },
  {
    q: '¿Es para todos los niveles?',
    a: 'Sí. Es un evento familiar, abierto a todos los niveles. El running es para todas las edades.',
  },
  {
    q: '¿Qué hay que llevar?',
    a: 'Ropa cómoda, calzado deportivo, agua y protector solar.',
  },
];
