'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export const trackEmpresas = (event: string, data?: Record<string, unknown>) => {
  if (typeof window === 'undefined') return;
  window.clarity?.('event', event);
  window.gtag?.('event', event, data || {});
  window.fbq?.('trackCustom', event, data || {});
};

export const EmpresasTracker = () => {
  useEffect(() => {
    trackEmpresas('empresas_view');
  }, []);

  return null;
};
