// Votación "el mejor juego" de la Fiesta de Halloween (viernes 30/10/2026).
// Para cambiar las opciones se edita esta lista: `id` es interno y no se cambia una vez que hay votos; `nombre` es lo que se ve.
export const JUEGOS: { id: string; nombre: string; detalle?: string }[] = [
  { id: 'mistery-box', nombre: 'Mystery box' },
  { id: 'completar-el-zombie', nombre: 'Completar el zombie' },
  { id: 'la-ruta-embrujada', nombre: 'La ruta embrujada' },
  { id: 'duelo-maldito', nombre: 'Duelo maldito' },
  { id: 'sacudida-macabra', nombre: 'Sacudida macabra' },
  { id: 'mision-escapar-del-circo', nombre: 'Misión: escapar del circo' },
  { id: 'zombie-eyebell', nombre: 'Zombie eyeball' },
  { id: 'zombie-bowling-ball', nombre: 'Zombie bowling ball' },
];

export const COOKIE_VOTANTE = 'hw_vid';
export const COOKIE_DIAS = 30;
