// Votación "el mejor juego" de la Fiesta de Halloween (viernes 30/10/2026).
// Para cambiar las opciones se edita esta lista: `id` es interno y no se cambia una vez que hay votos; `nombre` es lo que se ve.
export const JUEGOS: { id: string; nombre: string; detalle?: string }[] = [
  { id: 'tafi-viejo', nombre: 'Stand de Tafí Viejo' },
  { id: 'barrio-sur', nombre: 'Stand de Barrio Sur' },
  { id: 'barrio-norte', nombre: 'Stand de Barrio Norte' },
  { id: 'terrazas', nombre: 'Stand de Terrazas' },
  { id: 'aconquija', nombre: 'Stand de Aconquija' },
  { id: 'epico', nombre: 'Stand de Épico' },
];

export const COOKIE_VOTANTE = 'hw_vid';
export const COOKIE_DIAS = 30;
