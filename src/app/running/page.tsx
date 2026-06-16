import type { Metadata } from 'next';
import {
  RunningTracker,
  HeroRunning,
  CountdownRunning,
  RunningDetalle,
  SpinningDetalle,
  ComedorRunning,
  FormInscripcionRunning,
  FAQRunning,
  CTAFinalRunning,
} from '@/components/running';
import { FAQ } from '@/components/running/constants';

export const metadata: Metadata = {
  title: 'RC Running · 28 de junio en Terrazas | Tucumán',
  description:
    'Jornada de running (3K y 5K) y masterclass de spinning en familia, en la sede Terrazas. Domingo 28 de junio, entrada solidaria con un alimento no perecedero a beneficio de la Fundación Copa de Leche Los Indiecitos. Inscribite, cupos limitados.',
  keywords: [
    'running tucuman',
    'carrera tucuman',
    'dia del running rc',
    'evento running tucuman',
    'rc gym evento',
    'spinning tucuman',
    'evento familiar tucuman',
    'running terrazas',
    '5k tucuman',
    '3k tucuman',
  ],
  alternates: {
    canonical: 'https://rcgym.com.ar/running',
  },
  openGraph: {
    title: 'RC Running · 28 de junio en Terrazas',
    description:
      'Running 3K y 5K y masterclass de spinning, en familia. Entrada solidaria con un alimento para un comedor de Tucumán. Inscribite. Cupos limitados.',
    url: 'https://rcgym.com.ar/running',
    type: 'website',
    images: [
      {
        url: '/apple-icon.png',
        alt: 'RC Gym Tucumán · RC Running',
      },
    ],
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'RC Running',
    description:
      'Jornada de running (3K y 5K, participativo) y masterclass de spinning en familia, a beneficio de la Fundación Copa de Leche Los Indiecitos. Entrada solidaria con un alimento no perecedero.',
    startDate: '2026-06-28T09:30:00-03:00',
    endDate: '2026-06-28T12:30:00-03:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    url: 'https://rcgym.com.ar/running',
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
      url: 'https://rcgym.com.ar/running',
      description: 'Entrada libre con un alimento no perecedero.',
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

export default function RunningPage() {
  return (
    <main className="w-full grow flex flex-col bg-black overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">
        RC Running: running 3K y 5K y masterclass de spinning en la sede Terrazas, Tucumán, domingo 28 de junio
      </h1>
      <RunningTracker />
      <HeroRunning />
      <CountdownRunning />
      <RunningDetalle />
      <SpinningDetalle />
      <ComedorRunning />
      <FormInscripcionRunning />
      <FAQRunning />
      <CTAFinalRunning />
    </main>
  );
}
