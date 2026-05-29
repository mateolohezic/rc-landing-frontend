// Cierre de preventa: lunes 25 de mayo a las 23:59 (-03:00 Argentina)
export const PREVENTA_END_ISO = process.env.NEXT_PUBLIC_PILETA_PREVENTA_END || '2026-05-25T23:59:59-03:00';

// WhatsApp comercial (placeholder editable). Solo dígitos, formato internacional sin "+".
export const PILETA_WHATSAPP = process.env.NEXT_PUBLIC_PILETA_WHATSAPP || '5493815555555';

// Construye un link wa.me con mensaje pre-armado
export const buildWhatsappLink = (params: { nombre?: string; plan?: string }) => {
  const text = `Hola RC! Soy ${params.nombre || ''}. Reservé cupo en pileta plan ${params.plan || ''}. Quiero confirmar mi lugar.`;
  return `https://wa.me/${PILETA_WHATSAPP}?text=${encodeURIComponent(text)}`;
};

// ID interno + label visible
export type PlanId = 'natacion-2x' | 'natacion-3x' | 'libre' | 'aquagym';

export interface Plan {
  id: PlanId;
  titulo: string;
  bajada: string;
  precio: number;
  unidad: string; // "/mes" o "/día"
  cupoPorClase?: number;
  destacado?: boolean;
  features: string[];
}

export const PLANES: Plan[] = [
  {
    id: 'natacion-2x',
    titulo: 'Natación 2x semana',
    bajada: 'Con profe que te mira',
    precio: 100000,
    unidad: '/mes',
    cupoPorClase: 15,
    features: [
      'Clases dirigidas por semana',
      'Profe que corrige tu técnica',
      'Grupos chicos, no masivos',
      'Vestuarios, lockers y duchas',
    ],
  },
  {
    id: 'natacion-3x',
    titulo: 'Natación 3x semana',
    bajada: 'El plan más elegido',
    precio: 130000,
    unidad: '/mes',
    cupoPorClase: 15,
    destacado: true,
    features: [
      'Clases dirigidas por semana',
      'Profe que corrige tu técnica',
      'Grupos chicos, no masivos',
      'Vestuarios, lockers y duchas',
      'Resultados visibles en 1 mes',
    ],
  },
  {
    id: 'libre',
    titulo: 'Pileta libre',
    bajada: 'En turnos disponibles',
    precio: 100000,
    unidad: '/mes',
    features: [
      'Acceso en turnos disponibles',
      'Reservás según los horarios libres',
      'Vestuarios, lockers y duchas',
    ],
  },
  {
    id: 'aquagym',
    titulo: 'Aquagym 2x semana',
    bajada: 'Bajo impacto, alta intensidad',
    precio: 84000,
    unidad: '/mes',
    cupoPorClase: 30,
    features: [
      '2 clases por semana',
      'Profe que dirige cada movimiento',
      'Bajo impacto: ideal post-lesión y embarazo',
    ],
  },
];

// Mapeo de plan id → label legible para WhatsApp y form
export const PLAN_LABELS: Record<PlanId, string> = {
  'natacion-2x': 'Natación 2x semana',
  'natacion-3x': 'Natación 3x semana',
  'libre': 'Pileta libre',
  'aquagym': 'Aquagym 2x semana',
};

// Combo socio gym + pileta
// Mecánica real: 20% off en la cuota del gym al sumar pileta.
// Ejemplo: gym $100k + pileta $100k = $200k → con combo: $80k gym + $100k pileta = $180k.
// Lo presentamos al revés: "si ya pagás gym, sumar pileta te cuesta $80k más al mes".
export const COMBO_SOCIO = {
  // Cuánto extra pagás al mes por sumar pileta a tu cuota actual del gym
  costoExtraSocio: 80000,
  // Precio normal de pileta (sin ser socio)
  precioPiletaNormal: 100000,
  // Cuánto te ahorrás por mes vs pagar los dos por separado
  ahorroMensual: 20000,
  // Texto principal
  descripcion:
    'Si ya entrenás en RC, sumar la pileta a tu plan te sale solo $80.000/mes más. Mismo gimnasio, mismo lugar, ahora también con pileta climatizada.',
  // Letra chica explicativa
  comoFunciona:
    'En la práctica: aplicamos un 20% de descuento sobre tu cuota del gym al sumar pileta, así sumar pileta te queda en $80.000 efectivos al mes.',
};

// Beneficios del nado (sección educativa: por qué nadar)
export const BENEFICIOS_NADO = [
  {
    titulo: 'Tu corazón en su mejor versión',
    desc: '30 minutos de nado equivalen a 90 de gym a nivel cardiovascular. Sin desgaste, sin lesiones.',
  },
  {
    titulo: 'Cero impacto en articulaciones',
    desc: 'El agua amortigua el 90% de tu peso. Ideal para post-lesiones, embarazo y adultos mayores.',
  },
  {
    titulo: 'Energía que dura todo el día',
    desc: 'Sin agotamiento, sin agujetas, sin saltarte un día por dolor. Volvés a tu casa con la cabeza despejada.',
  },
  {
    titulo: 'Mejor postura y respiración',
    desc: 'Cada largo te alinea. La respiración consciente baja el cortisol y mejora tu sueño.',
  },
  {
    titulo: 'Complemento del gym',
    desc: 'Si entrenás fuerza, nadar acelera tu recuperación y mejora tu rendimiento entre semanas.',
  },
  {
    titulo: 'Para todas las edades',
    desc: 'Niños desde escuela, adultos, embarazadas, adultos mayores. Cada etapa, su clase, su profe.',
  },
];

// Clases que se dictan
export const CLASES = [
  {
    nombre: 'Natación adultos',
    desc: 'Aprendé desde cero o pulí tu técnica. 4 estilos, drills, series.',
    horarios: 'Lun a vie · 6–11 y 16–22 hs',
    detalle: 'Última clase: 10–11 hs y 21–22 hs',
  },
  {
    nombre: 'Natación niños',
    desc: 'Escuela de natación con profes especializados en chicos.',
    horarios: 'Lun a vie · 17–20 hs',
    detalle: 'Última clase: 19–20 hs',
  },
  {
    nombre: 'Aquagym',
    desc: 'Entrenamiento dirigido en el agua. Bajo impacto, ritmo alto.',
    horarios: 'Mar y jue · 16–17 hs',
    detalle: '',
  },
  {
    nombre: 'Pileta libre',
    desc: 'Reservás un turno disponible y nadás a tu ritmo durante esa hora.',
    horarios: 'Lun a vie · 11–16 hs · Sáb 9–13 hs',
    detalle: '',
  },
];

// ───────────────────────────────────────────────
// Grilla de horarios de la pileta (sede Terrazas)
// Actualizar acá cuando cambien profes o franjas.
// ───────────────────────────────────────────────
export type PiletaCat = 'adultos' | 'ninos' | 'aquagym' | 'libre';

export interface PiletaSlot {
  prof?: string;
  cat: PiletaCat;
}

export interface PiletaHorarioRow {
  franja: string;
  lun?: PiletaSlot[];
  mar?: PiletaSlot[];
  mie?: PiletaSlot[];
  jue?: PiletaSlot[];
  vie?: PiletaSlot[];
}

export const PILETA_CAT_LABELS: Record<PiletaCat, string> = {
  adultos: 'Adultos',
  ninos: 'Niños',
  aquagym: 'Aquagym',
  libre: 'Pileta libre',
};

// Helpers para no repetir { prof, cat } en cada celda
const ad = (prof: string): PiletaSlot => ({ prof, cat: 'adultos' });
const ni = (prof: string): PiletaSlot => ({ prof, cat: 'ninos' });
const ag = (prof: string): PiletaSlot => ({ prof, cat: 'aquagym' });
const libre: PiletaSlot = { cat: 'libre' };

export const HORARIOS_PILETA: PiletaHorarioRow[] = [
  {
    franja: '6 a 11',
    lun: [ad('Gastón')], mar: [ad('Gastón')], mie: [ad('Gastón')], jue: [ad('Gastón')], vie: [ad('Gastón')],
  },
  {
    franja: '11 a 16',
    lun: [libre], mar: [libre], mie: [libre], jue: [libre], vie: [libre],
  },
  {
    franja: '16 a 17',
    lun: [ad('Melisa')], mar: [ag('Carla')], mie: [ad('Melisa')], jue: [ag('Carla')], vie: [ad('Melisa')],
  },
  {
    franja: '17 a 18',
    lun: [ad('Melisa'), ni('Agustina')], mar: [ad('Franco'), ni('Carla')], mie: [ad('Melisa'), ni('Agustina')], jue: [ad('Franco'), ni('Carla')], vie: [ad('Melisa'), ni('Agustina')],
  },
  {
    franja: '18 a 19',
    lun: [ad('Celeste'), ni('Agustina')], mar: [ad('Franco'), ni('Lucía')], mie: [ad('Celeste'), ni('Agustina')], jue: [ad('Franco'), ni('Lucía')], vie: [ad('Celeste'), ni('Agustina')],
  },
  {
    franja: '19 a 20',
    lun: [ad('Celeste'), ni('Agustina')], mar: [ad('Franco'), ni('Lucía')], mie: [ad('Celeste'), ni('Agustina')], jue: [ad('Franco'), ni('Lucía')], vie: [ad('Celeste'), ni('Agustina')],
  },
  {
    franja: '20 a 21',
    lun: [ad('Camila')], mar: [ad('Andrés')], mie: [ad('Camila')], jue: [ad('Andrés')], vie: [ad('Camila')],
  },
  {
    franja: '21 a 22',
    lun: [ad('Camila')], mar: [ad('Andrés')], mie: [ad('Camila')], jue: [ad('Andrés')], vie: [ad('Camila')],
  },
];

export const HORARIOS_PILETA_SABADO = 'Pileta libre · 9 a 13 hs';

// Profes (placeholder hasta que el usuario pase fotos + nombres)
export interface Profe {
  nombre: string;
  rol: string;
  bio: string;
  foto?: string; // path al asset webp cuando lo tengamos
  instagram?: string;
}

export const PROFES: Profe[] = [
  {
    nombre: 'Profe 1',
    rol: 'Natación adultos',
    bio: 'Especialista en técnica de los 4 estilos. Te corrige hasta el último detalle.',
  },
  {
    nombre: 'Profe 2',
    rol: 'Escuela de natación niños',
    bio: 'Convierte el miedo al agua en confianza. Más de X años con chicos.',
  },
  {
    nombre: 'Profe 3',
    rol: 'Aquagym',
    bio: 'Energía pura. Sus clases son cardio + fuerza + buena onda.',
  },
];

// FAQ
export const FAQ = [
  {
    q: '¿Tengo que ser socio del gimnasio para entrar a la pileta?',
    a: 'No. La pileta tiene su propia suscripción. Si ya sos socio del gym, te conviene el combo (sale más barato que pagar los dos por aparte). Si no sos socio, podés entrar solo a la pileta.',
  },
  {
    q: '¿Desde qué edad pueden ir los chicos?',
    a: 'Tenemos clases de natación para niños desde los 5 años. Coordinamos con vos la edad y el nivel cuando te respondamos por WhatsApp.',
  },
  {
    q: '¿Mi hijo necesita algo especial para empezar?',
    a: 'Sí. Los chicos de 5 a 10 años necesitan completar un consentimiento médico antes de la primera clase. Te lo enviamos por WhatsApp y se firma con presentación del DNI. La revisión médica es obligatoria — la coordinamos con vos al confirmar tu plan.',
  },
  {
    q: '¿Necesito hacer una revisión médica para empezar?',
    a: 'Sí, es obligatoria antes de empezar. Hay un médico en horario fijo en la sede; se paga un plus aparte de tu plan (no está incluido en la cuota mensual). Coordinamos día y hora cuando reserves tu cupo.',
  },
  {
    q: '¿Cómo puedo pagar?',
    a: 'Aceptamos efectivo y transferencia. Coordinamos el medio de pago con vos cuando confirmemos tu inscripción por WhatsApp.',
  },
  {
    q: '¿Puedo ir si estoy embarazada?',
    a: 'Sí. Aquagym y nado son de las mejores actividades durante el embarazo. Sumá nuestro consentimiento médico previo y te asesoramos sobre el plan ideal.',
  },
  {
    q: '¿Y si tuve una lesión o estoy en rehabilitación?',
    a: 'El agua es ideal para rehabilitación. Coordinamos con tu kinesiólogo si hace falta. Hablalo con nuestro equipo cuando te contactemos.',
  },
  {
    q: '¿Necesito saber nadar?',
    a: 'No. Las clases para adultos arrancan desde cero. Si nunca diste un largo, te enseñamos.',
  },
  {
    q: '¿Qué tengo que llevar?',
    a: 'Malla, gorra, antiparras, ojotas y toalla. Lockers gratis. Si no tenés algo, te ayudamos a conseguirlo.',
  },
  {
    q: '¿Cómo es el horario?',
    a: 'De lunes a viernes de 6:00 a 22:00 (último turno 21:00) y sábados de 9 a 13 hs para pileta libre. Mirá la grilla completa en la sección de horarios.',
  },
  {
    q: '¿La pileta es climatizada todo el año?',
    a: 'Sí. Semiolímpica, climatizada. Es la única pileta climatizada de un gimnasio en Tucumán.',
  },
  {
    q: '¿Cómo me inscribo?',
    a: 'Completá el formulario al final de esta página con tu plan elegido. Te contactamos por WhatsApp para coordinar tu primera clase, la inscripción y el pago.',
  },
];

// Métricas RC para la sección "Casa de siempre"
export const METRICAS_RC = [
  { numero: '+3.000', label: 'Socios activos' },
  { numero: '+30', label: 'Años de trayectoria' },
  { numero: '6', label: 'Sedes en Tucumán' },
];

// Specs técnicas de la pileta (para sección solución)
export const PILETA_SPECS = [
  'Pileta climatizada todo el año',
  'Semi-olímpica',
  'Lockers, vestuarios y duchas',
  'Única en Tucumán',
  'La mejor atención',
];
