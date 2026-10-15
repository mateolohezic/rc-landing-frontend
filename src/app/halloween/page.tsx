import type { Metadata } from 'next';
import {
  HalloweenTracker,
  HeroHalloween,
  CronometroHalloween,
  DatosHalloween,
  QueHayHalloween,
  ConcursoHalloween,
  GaleriaHalloween,
  FormInscripcionHalloween,
  FAQHalloween,
  CTAFinalHalloween,
  StickyCTAHalloween,
} from '@/components/halloween-2026';
import { FAQ, EVENTO_ISO, SITE_URL } from '@/components/halloween-2026/constants';
import { bodyFont, headlineFont } from '@/components/halloween-2026/fonts';
import ogImage from '@/assets/halloween-2026/logo-terrazas.jpeg';

const TITLE = 'Fiesta de Halloween RC · 30 de octubre | RC Terrazas';
const DESCRIPTION =
  'Fiesta de Halloween en RC Terrazas, viernes 30 de octubre desde las 18:30. DJ en vivo, stand de juegos, comida y bebida y concurso de disfraces con premios. Entrada gratis con inscripción, para socios y no socios.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'fiesta de halloween tucuman',
    'halloween rc gym',
    'concurso de disfraces tucuman',
    'evento 30 de octubre tucuman',
    'rc terrazas',
    'fiesta yerba buena',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Fiesta de Halloween RC · Viernes 30 de octubre',
    description: 'DJ en vivo, stand de juegos, comida y bebida y concurso de disfraces en RC Terrazas. Entrada gratis con inscripción.',
    url: SITE_URL,
    type: 'website',
    images: [{ url: ogImage.src, width: ogImage.width, height: ogImage.height, alt: 'RC Terrazas decorado para Halloween' }],
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Fiesta de Halloween RC',
    description: DESCRIPTION,
    startDate: EVENTO_ISO,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    isAccessibleForFree: true,
    url: SITE_URL,
    image: ogImage.src,
    location: {
      '@type': 'Place',
      name: 'RC Terrazas',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Perón 2400',
        addressLocality: 'Yerba Buena',
        addressRegion: 'Tucumán',
        addressCountry: 'AR',
      },
    },
    organizer: { '@type': 'Organization', name: 'RC Gym', url: 'https://rcgym.com.ar' },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'ARS',
      availability: 'https://schema.org/InStock',
      url: SITE_URL,
      description: 'Entrada gratuita con inscripción previa.',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
];

export default function HalloweenPage() {
  return (
    <main
      className={`${headlineFont.variable} ${bodyFont.variable} ${bodyFont.className} w-full grow flex flex-col bg-black overflow-x-hidden`}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="sr-only">
        Fiesta de Halloween de RC Gym en RC Terrazas, viernes 30 de octubre desde las 18:30, con DJ en vivo, stand de juegos, comida y bebida y
        concurso de disfraces
      </h1>
      <HalloweenTracker />
      <HeroHalloween />
      <CronometroHalloween />
      <DatosHalloween />
      <QueHayHalloween />
      <ConcursoHalloween />
      <GaleriaHalloween />
      <FormInscripcionHalloween />
      <FAQHalloween />
      <CTAFinalHalloween />
      <StickyCTAHalloween />
    </main>
  );
}
