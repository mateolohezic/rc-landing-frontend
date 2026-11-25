import type { Metadata } from 'next';
import {
  HeroEmpresas,
  ProofBarEmpresas,
  BeneficiosEmpresas,
  BannerEmpresas,
  PlanesEmpresas,
  SedesEmpresas,
  ComoFuncionaEmpresas,
  FAQEmpresas,
  CTAFinalEmpresas,
  EmpresasTracker,
} from '@/components/empresas';
import { FAQ_EMPRESAS } from '@/components/empresas/constants';

export const metadata: Metadata = {
  title: 'Convenio para Empresas · RC Gym Tucumán',
  description:
    'Convenio corporativo para que los empleados de tu empresa entrenen con descuento en las 6 sedes de RC Gym en Tucumán.',
  keywords: [
    'convenio empresas gimnasio tucuman',
    'beneficios corporativos gimnasio tucuman',
    'gimnasio para empresas tucuman',
    'descuento empleados gimnasio',
    'rc gym empresas',
  ],
  alternates: {
    canonical: 'https://rcgym.com.ar/empresas',
  },
  openGraph: {
    title: 'Convenio para Empresas · RC Gym Tucumán',
    description:
      'Descuento para que los empleados de tu empresa entrenen en cualquiera de las 6 sedes de RC Gym.',
    url: 'https://rcgym.com.ar/empresas',
    type: 'website',
    images: [
      {
        url: '/apple-icon.png',
        alt: 'RC Gym Tucumán · Convenio para empresas',
      },
    ],
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_EMPRESAS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  },
];

export default function EmpresasPage() {
  return (
    <main className="w-full grow flex flex-col bg-black overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">
        Convenio para empresas — descuento para empleados en las 6 sedes de RC Gym, Tucumán
      </h1>
      <EmpresasTracker />
      <HeroEmpresas />
      <ProofBarEmpresas />
      <BeneficiosEmpresas />
      <BannerEmpresas />
      <PlanesEmpresas />
      <SedesEmpresas />
      <ComoFuncionaEmpresas />
      <FAQEmpresas />
      <CTAFinalEmpresas />
    </main>
  );
}
