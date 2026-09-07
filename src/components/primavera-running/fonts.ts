import { Archivo_Black, Jost } from 'next/font/google';

// Tipografía propia de esta landing (no toca el resto del sitio, que usa Montserrat).
// Archivo Black: el bold ancho de los titulares grandes ("PRIMAVERA RUNNING", "SAVE THE DATE").
// Jost: el sans geométrico y trackeado de las etiquetas chicas ("[ DOMINGO IDEAL ]", fechas, labels).
export const headlineFont = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--pr-headline',
  display: 'swap',
});

export const labelFont = Jost({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--pr-label',
  display: 'swap',
});
