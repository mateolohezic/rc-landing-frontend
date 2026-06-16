'use client';

import { useEffect } from 'react';

// El Meta Pixel se inicializa globalmente en el layout (<MetaPixel/>).
// Acá solo disparamos eventos custom (view + scroll) a Clarity, GA y Meta.
export const trackRunning = (event: string, data?: Record<string, unknown>) => {
  if (typeof window === 'undefined') return;
  window.clarity?.('event', event);
  window.gtag?.('event', event, data || {});
  window.fbq?.('trackCustom', event, data || {});
};

export const RunningTracker = () => {
  useEffect(() => {
    trackRunning('running_view');

    const milestones = [25, 50, 75, 100];
    const fired = new Set<number>();

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((scrollTop / docHeight) * 100);
      milestones.forEach((m) => {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          trackRunning(`running_scroll_${m}`);
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
};
