import { Barlow, Barlow_Condensed } from 'next/font/google';

// Tipografía propia de esta landing (el resto del sitio usa Montserrat).
// Barlow Condensed en itálica pesada: es la misma de la pieza "Save the date".
export const headlineFont = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--hw-headline',
  display: 'swap',
});

export const bodyFont = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--hw-body',
  display: 'swap',
});
