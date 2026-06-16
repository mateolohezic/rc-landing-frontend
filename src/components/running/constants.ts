// ───────────────────────────────────────────────
// Datos del evento RC Running (28/06/2026, Terrazas)
// A beneficio de la Fundación Copa de Leche Los Indiecitos.
// ───────────────────────────────────────────────

// WhatsApp del evento (placeholder editable). Solo dígitos, formato internacional sin "+".
export const EVENTO_WHATSAPP = process.env.NEXT_PUBLIC_EVENTO_WHATSAPP || '5493815555555';

export const EVENTO = {
  fechaLarga: 'Domingo 28 de junio de 2026',
  horario: '9:30 a 12:30',
  sede: 'RC Terrazas',
  ciudad: 'Tucumán',
};

// Inicio del evento (para el countdown)
export const EVENTO_ISO = '2026-06-28T09:30:00-03:00';

// Comedor beneficiario
export const COMEDOR = {
  nombre: 'Fundación Copa de Leche Los Indiecitos',
  direccion: 'Luis Braille 2555, Tucumán',
  instagram: 'copa_de_leche_los_indiecitos_t',
  personas: 389,
};

// ── Actividades ──────────────────────────────────
export type ActividadId = 'running' | 'spinning';
export type DistanciaId = '3k' | '5k';

export const ACTIVIDAD_LABELS: Record<ActividadId, string> = {
  running: 'Running',
  spinning: 'Masterclass de spinning',
};

export const DISTANCIA_LABELS: Record<DistanciaId, string> = {
  '3k': '3K',
  '5k': '5K',
};

// Construye el resumen legible de lo que eligió la persona (para WhatsApp / gracias)
export const buildActividadResumen = (
  actividades: ActividadId[],
  distancia: DistanciaId | '',
): string => {
  const partes: string[] = [];
  if (actividades.includes('running')) {
    partes.push(distancia ? `Running ${DISTANCIA_LABELS[distancia]}` : 'Running');
  }
  if (actividades.includes('spinning')) partes.push('Spinning');
  return partes.join(' + ');
};

// Link de WhatsApp con mensaje pre-armado
export const buildWhatsappLink = (params: { nombre?: string; actividad?: string }) => {
  const text = `Hola RC! Soy ${params.nombre || ''}. Me inscribí a RC Running${
    params.actividad ? ` (${params.actividad})` : ''
  }. Quería confirmar mi lugar.`;
  return `https://wa.me/${EVENTO_WHATSAPP}?text=${encodeURIComponent(text)}`;
};

// ── FAQ ──────────────────────────────────────────
export const FAQ = [
  {
    q: '¿Hay que ser socio de RC para participar?',
    a: 'No. El evento es abierto a socios y no socios. Cualquier persona puede inscribirse y participar.',
  },
  {
    q: '¿Cuánto cuesta la entrada?',
    a: 'La entrada es solidaria. Se ingresa con un alimento no perecedero, destinado a la Fundación Copa de Leche Los Indiecitos.',
  },
  {
    q: '¿El running es competitivo?',
    a: 'No. Son dos recorridos, de 3K y 5K, para hacer a ritmo libre. No hay cronómetro ni clasificación.',
  },
  {
    q: '¿Puedo inscribirme a las dos actividades?',
    a: 'Sí. Al inscribirte podés elegir el running, la masterclass de spinning o ambas. Los cupos son limitados.',
  },
  {
    q: '¿Cuántos lugares tiene el spinning?',
    a: 'La masterclass de spinning tiene 40 cupos y es apta para todos los niveles. Se reservan por orden de inscripción.',
  },
  {
    q: '¿Pueden participar niños?',
    a: 'Sí. Es un evento familiar, al aire libre, en los espacios verdes de la sede Terrazas.',
  },
  {
    q: '¿Qué hay que llevar?',
    a: 'El alimento no perecedero, ropa cómoda y agua.',
  },
  {
    q: '¿A dónde van las donaciones?',
    a: 'A la Fundación Copa de Leche Los Indiecitos (Luis Braille 2555, Tucumán), que brinda almuerzo y merienda a 389 personas durante la semana, además de apoyo escolar.',
  },
  {
    q: '¿Cómo me inscribo?',
    a: 'Completá el formulario de esta página y elegí tu actividad. Te confirmamos el lugar por WhatsApp.',
  },
];
