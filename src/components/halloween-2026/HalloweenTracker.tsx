'use client';

import { useEffect } from 'react';
import { trackMetaEvent } from '@/components';

// El Meta Pixel se inicializa globalmente en el layout (<MetaPixel/>).
// Acá solo disparamos eventos custom (vista + scroll) a Clarity, GA y Meta.
export const trackHalloween = (event: string, data?: Record<string, unknown>) => {
  if (typeof window === 'undefined') return;
  window.clarity?.('event', event);
  window.gtag?.('event', event, data || {});
  window.fbq?.('trackCustom', event, data || {});
};

export const HalloweenTracker = () => {
  useEffect(() => {
    trackHalloween('halloween_view');
    // Evento estándar de Meta: vio la página del evento.
    trackMetaEvent('ViewContent', {
      content_name: 'halloween-2026',
      content_category: 'evento',
    });

    const milestones = [25, 50, 75, 100];
    const fired = new Set<number>();

    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((window.scrollY / docHeight) * 100);
      milestones.forEach((m) => {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          trackHalloween(`halloween_scroll_${m}`);
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
};
