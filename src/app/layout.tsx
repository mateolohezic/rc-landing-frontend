import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--montserrat",
  display: 'swap',
});

const stretch = localFont({
  src: "../assets/fonts/Stretch.otf",
  variable: "--stretch",
  weight: "400",
});

const highrise_bold = localFont({
  src: "../assets/fonts/Highrise_Bold.otf",
  variable: "--highrise_bold",
  weight: "900",
});

export const metadata: Metadata = {
  title:{
    template: '%s - RC Gym',
    default: 'RC Gym',
  },
  description: "El mejor gimnasio de Tucumán.",
  generator: 'RC Gym',
  applicationName: 'RC Gym',
  referrer: 'origin-when-cross-origin',
  keywords: ['gimnasio', 'RC Gym', 'mejor', 'tucumán', 'fitness', 'salud', 'bienestar'],
  authors: [{ name: 'RC Gym', url: 'https://rcgym.com.ar' }],
  creator: 'RC Gym',
  publisher: 'RC Gym',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://rcgym.com.ar'),
  alternates: {
    canonical: '/',
    languages: {
      'x-default': '/',
    },
  },
  openGraph: {
    title: 'RC Gym',
    description: 'El mejor gimnasio de Tucumán.',
    url: 'https://rcgym.com.ar',
    siteName: 'RC Gym',
    locale: 'es_AR',
    type: 'website',
  },
  robots: { 
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: 'https://rcgym.com.ar/manifest.webmanifest',
  twitter: {
    card: 'summary_large_image',
    site: 'https://rcgym.com.ar',
    creator: 'RC Gym',
    title: 'RC Gym',
    description: 'El mejor gimnasio de Tucumán.',
  },
  appleWebApp: {
    title: 'RC Gym',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/src/app/apple-icon.png',
      {
        url: '/src/app/apple-icon.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
  category: 'health',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'normal',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  interactiveWidget: 'resizes-visual',
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es" className="bg-neutral-900 text-white">
      <body className={`${montserrat.className} ${montserrat.variable} ${stretch.variable} ${highrise_bold.variable} antialiased w-full min-h-svh flex flex-col items-center`}>
        {children}
      </body>
    </html>
  );
}