import type { Metadata } from 'next';
import {
  PrimaveraTracker,
  HeroPrimavera,
  CountdownPrimavera,
  StoryIntroPrimavera,
  MomentosPrimavera,
  CronogramaPrimavera,
  MapaCircuitoPrimavera,
  FormInscripcionPrimavera,
  FAQPrimavera,
  SponsorsPrimavera,
  CTAFinalPrimavera,
  StickyCTAPrimavera,
} from '@/components/primavera-running';
import { FAQ } from '@/components/primavera-running/constants';
import { headlineFont, labelFont } from '@/components/primavera-running/fonts';

export const metadata: Metadata = {
  title: 'Primavera Running RC x Alterpoint · 20 de septiembre | Tucumán',
  description:
    'Running, spinning y funcional en RC Terrazas, con cierre en la terraza de Alterpoint. Domingo 20 de septiembre, desde las 9:30. Gratis, cupos limitados. Inscribite.',
  keywords: [
    'primavera running tucuman',
    'rc gym alterpoint',
    'evento running tucuman',
    'spinning tucuman',
    'funcional tucuman',
    'evento yerba buena',
    'evento familiar tucuman',
    'alterpoint terraza',
  ],
  alternates: {
    canonical: 'https://rcgym.com.ar/primavera-running',
  },
  openGraph: {
    title: 'Primavera Running RC x Alterpoint · 20 de septiembre',
    description:
      'Running, spinning y funcional en RC Terrazas, con cierre en la terraza de Alterpoint. Gratis, cupos limitados. Inscribite.',
    url: 'https://rcgym.com.ar/primavera-running',
    type: 'website',
    images: [
      {
        url: '/apple-icon.png',
        alt: 'RC Gym x Alterpoint · Primavera Running',
      },
    ],
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'Primavera Running RC x Alterpoint',
    description:
      'Jornada de running, spinning y funcional en RC Terrazas, con cierre en la terraza de Alterpoint (charla y 3er tiempo).',
    startDate: '2026-09-20T09:30:00-03:00',
    endDate: '2026-09-20T12:30:00-03:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    url: 'https://rcgym.com.ar/primavera-running',
    image: 'https://rcgym.com.ar/apple-icon.png',
    location: {
      '@type': 'Place',
      name: 'RC Terrazas',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Yerba Buena',
        addressRegion: 'Tucumán',
        addressCountry: 'AR',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'RC Gym',
      url: 'https://rcgym.com.ar',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'ARS',
      availability: 'https://schema.org/InStock',
      url: 'https://rcgym.com.ar/primavera-running',
      description: 'Entrada libre y gratuita. Cupos limitados.',
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

export default function PrimaveraRunningPage() {
  return (
    <main
      className={`${headlineFont.variable} ${labelFont.variable} w-full grow flex flex-col bg-black overflow-x-hidden`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">
        Primavera Running RC x Alterpoint: indoor cycling y circuito de running por Yerba Buena,
        con after en la terraza de Alterpoint, domingo 20 de septiembre
      </h1>
      <PrimaveraTracker />
      <HeroPrimavera />
      <StoryIntroPrimavera />
      <MomentosPrimavera />
      <CronogramaPrimavera />
      <MapaCircuitoPrimavera />
      <CountdownPrimavera />
      <FormInscripcionPrimavera />
      <FAQPrimavera />
      <SponsorsPrimavera />
      <CTAFinalPrimavera />
      <StickyCTAPrimavera />
    </main>
  );
}
