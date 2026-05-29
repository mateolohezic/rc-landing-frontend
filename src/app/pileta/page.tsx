import type { Metadata } from 'next';
import {
  HeroPileta,
  ProofBarPileta,
  SolucionPileta,
  ComparativaPileta,
  TestimoniosPileta,
  HorariosPileta,
  ProfesPileta,
  PreciosPileta,
  ComoLlegar,
  CasaRC,
  FAQPileta,
  CTAFinalPileta,
  StickyHeaderPileta,
  PiletaTracker,
} from '@/components/pileta';
import { FAQ, PLANES } from '@/components/pileta/constants';

export const metadata: Metadata = {
  title: 'Pileta Climatizada RC Terrazas · Tucumán | Abierta',
  description:
    'La única pileta climatizada semiolímpica de un gimnasio en Tucumán. Natación, aquagym y pileta libre con acompañamiento profesional. Abierta en RC Terrazas, Yerba Buena.',
  keywords: [
    'pileta climatizada tucuman',
    'natacion tucuman',
    'aquagym tucuman',
    'pileta gym tucuman',
    'rc gym pileta',
    'pileta terrazas tucuman',
    'natacion adultos tucuman',
    'natacion ninos tucuman',
    'aquagym yerba buena',
    'pileta yerba buena',
  ],
  alternates: {
    canonical: 'https://rcgym.com.ar/pileta',
  },
  openGraph: {
    title: 'Pileta Climatizada RC · La única de un gimnasio en Tucumán',
    description:
      'Pileta semiolímpica climatizada con acompañamiento profesional, en RC Terrazas (Yerba Buena). Empezá esta semana — coordinamos por WhatsApp.',
    url: 'https://rcgym.com.ar/pileta',
    type: 'website',
    images: [
      {
        url: '/apple-icon.png',
        alt: 'RC Gym Tucumán · Pileta climatizada Terrazas',
      },
    ],
  },
};

// JSON-LD structured data — SEO local + rich results
const jsonLd = [
  // 1. SportsActivityLocation — para Google Maps / local search
  {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: 'Pileta RC Terrazas',
    alternateName: 'Pileta Climatizada RC Gym Tucumán',
    description:
      'Pileta semiolímpica climatizada con profesores dedicados. Clases de natación adultos, niños, aquagym y pileta libre.',
    url: 'https://rcgym.com.ar/pileta',
    image: 'https://rcgym.com.ar/apple-icon.png',
    telephone: '+5493815555555',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Perón 2400',
      addressLocality: 'Yerba Buena',
      addressRegion: 'Tucumán',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -26.8154,
      longitude: -65.3148,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '06:00',
      closes: '22:00',
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Pileta climatizada', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Vestuarios', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Duchas', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Lockers', value: true },
    ],
    sameAs: [
      'https://www.rcgym.com.ar',
      'https://www.instagram.com/rcgym',
      'https://www.facebook.com/GimnasioRC',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      reviewCount: '2000',
      bestRating: '5',
      worstRating: '1',
    },
  },
  // 2. Offer catalog — planes con precios para Google rich results
  {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Planes de Pileta RC',
    itemListElement: PLANES.map((p) => ({
      '@type': 'Offer',
      name: p.titulo,
      description: p.bajada,
      price: p.precio,
      priceCurrency: 'ARS',
      availability: 'https://schema.org/InStock',
      url: 'https://rcgym.com.ar/pileta#planes',
    })),
  },
  // 3. FAQPage — para que Google muestre el accordion en SERPs
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  },
];

export default function PiletaPage() {
  return (
    <main className="w-full grow flex flex-col bg-black overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">
        Pileta climatizada semiolímpica en RC Terrazas, Tucumán — Abierta en Yerba Buena
      </h1>
      <PiletaTracker />
      <HeroPileta />
      <ProofBarPileta />
      <SolucionPileta />
      <ComparativaPileta />
      <TestimoniosPileta />
      <HorariosPileta />
      <ProfesPileta />
      <PreciosPileta />
      <ComoLlegar />
      <CasaRC />
      <FAQPileta />
      <CTAFinalPileta />
      <StickyHeaderPileta />
    </main>
  );
}
