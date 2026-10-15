import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inscripción registrada · Fiesta de Halloween RC',
  robots: { index: false, follow: false },
};

export default function GraciasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
