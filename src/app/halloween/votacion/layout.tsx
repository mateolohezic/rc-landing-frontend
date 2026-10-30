import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Votá el mejor juego · Fiesta de Halloween RC',
  description: 'Votá cuál fue el mejor juego de la Fiesta de Halloween de RC.',
  robots: { index: false, follow: false },
};

export default function VotacionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
