export interface PlanEmpresa {
  id: string;
  nombre: string;
  adherentes: string;
  descuento: string;
  destacado?: boolean;
  incluye: string[];
}

// Los porcentajes de RC Empresa y RC Corporativo todavía no pasaron el
// chequeo de margen de administración (ver campanas/empresas/empresas.md
// §4 y la auditoría del 25/08/2026) — el techo publicado hoy en /planes
// es 25% (semestral). Por eso acá no se imprime un % fijo para esos dos
// planes: se muestra el rango orientativo de empleados y el contenido del
// plan, y el número final se define en la reunión.
export const PLANES_EMPRESA: PlanEmpresa[] = [
  {
    id: 'equipo',
    nombre: 'RC Equipo',
    adherentes: 'Desde 15 empleados',
    descuento: '20% por empleado',
    incluye: [
      'Las 6 sedes, cada empleado elige la suya',
      'Musculación, funcional y clases grupales',
      'Una pausa activa guiada por mes, en tu oficina',
      'Informe de altas al mes 1 y al mes 3',
    ],
  },
  {
    id: 'empresa',
    nombre: 'RC Empresa',
    adherentes: 'Desde 25 empleados',
    descuento: 'Descuento por volumen, a definir en la reunión',
    destacado: true,
    incluye: [
      'Todo lo de RC Equipo',
      'Una charla de bienestar o nutrición por semestre',
      'Informe de adhesión trimestral',
      'Pase de invitado para un familiar, una vez por trimestre',
    ],
  },
  {
    id: 'corporativo',
    nombre: 'RC Corporativo',
    adherentes: 'Desde 50 empleados',
    descuento: 'Descuento por volumen, a definir en la reunión',
    incluye: [
      'Todo lo de RC Empresa',
      'Dos pausas activas guiadas por mes',
      'Una charla de bienestar o nutrición por trimestre',
      'Informe de adhesión mensual y cupos en eventos de RC',
    ],
  },
];

export const CANTIDAD_EMPLEADOS = [
  { id: '15-24', label: '15 a 24 empleados' },
  { id: '25-49', label: '25 a 49 empleados' },
  { id: '50+', label: '50 o más empleados' },
] as const;

export const FAQ_EMPRESAS = [
  {
    q: '¿Cuánto le cuesta esto a la empresa?',
    a: 'Depende de cómo lo armen: puede no costarle nada — cada empleado paga su cuota con el descuento de la Suscripción RC — o la empresa puede cubrir una parte o el total. Se define en la reunión.',
  },
  {
    q: '¿Qué pasa si un empleado deja la empresa?',
    a: 'Se da de baja del convenio avisando a RC. El resto de los empleados adheridos sigue sin cambios.',
  },
  {
    q: '¿Sirve para familiares?',
    a: 'Los planes RC Empresa y RC Corporativo incluyen pases de invitado. Fuera de eso, el convenio es para empleados de la empresa.',
  },
  {
    q: '¿Hay permanencia mínima para el empleado?',
    a: 'No. Entrena mientras esté adherido al convenio de su empresa.',
  },
  {
    q: '¿Qué pasa si la empresa da de baja el convenio?',
    a: 'Cada empleado que ya estaba entrenando puede seguir como socio individual, sin perder la antigüedad.',
  },
  {
    q: '¿En qué sedes puede entrenar mi gente?',
    a: 'En las 6: Tafí Viejo, Barrio Sur, Barrio Norte, Terrazas, Aconquija y Épico. Cada empleado elige la que le queda cerca.',
  },
] as const;

export function buildWhatsappLinkEmpresas(empresa?: string) {
  const base = 'https://api.whatsapp.com/send/?phone=5493815145550&type=phone_number&app_absent=0';
  const text = empresa
    ? `Hola, te escribo de ${empresa} por el convenio de empresas de RC Gym.`
    : 'Hola, quiero información sobre el convenio de empresas de RC Gym.';
  return `${base}&text=${encodeURIComponent(text)}`;
}
