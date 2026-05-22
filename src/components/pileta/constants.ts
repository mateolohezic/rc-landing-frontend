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
    titulo: 'Nado libre',
    bajada: 'Cuando vos quieras',
    precio: 100000,
    unidad: '/mes',
    features: [
      'Nadás cuando vos quieras',
      'Acceso a todos los turnos disponibles',
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
  'libre': 'Nado libre',
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
    cupo: 15,
  },
  {
    nombre: 'Natación niños',
    desc: 'Escuela de natación con profes especializados en chicos.',
    cupo: 10,
  },
  {
    nombre: 'Aquagym',
    desc: 'Entrenamiento dirigido en el agua. Bajo impacto, alta diversión.',
    cupo: 30,
  },
  {
    nombre: 'Nado libre',
    desc: 'Vení cuando quieras. La pileta es tuya en cualquier turno disponible.',
    cupo: null,
  },
];

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
    a: 'Aceptamos efectivo o transferencia. Importante: el precio de preventa es válido únicamente en efectivo contado. Si elegís transferencia o pago en cuotas, aplica el precio regular post-apertura.',
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
    q: '¿Cuándo abre exactamente?',
    a: 'En mayo. Estamos terminando los últimos detalles de habilitación. La preventa cierra el lunes 25 de mayo a las 23:59 — los que reserven ahora son los primeros en entrar.',
  },
  {
    q: '¿Cómo es el horario?',
    a: 'De lunes a viernes de 6:00 a 22:00 (último turno 21:00). Sábados y domingos próximamente.',
  },
  {
    q: '¿La pileta es climatizada todo el año?',
    a: 'Sí. 25 metros, semiolímpica, climatizada. Es la única pileta climatizada de un gimnasio en Tucumán.',
  },
  {
    q: '¿Cómo reservo mi cupo?',
    a: 'Llenás el formulario al final de esta página. Te contactamos por WhatsApp para confirmar tu plan y coordinar el pago.',
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
  '25 metros de largo',
  'Semiolímpica · 12 m de ancho',
  'Climatizada todo el año',
  'Lockers, vestuarios y duchas',
  'Profes que te miran',
  'Única en gimnasios de Tucumán',
];
