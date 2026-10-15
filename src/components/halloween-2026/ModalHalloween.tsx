'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { trackHalloween } from './HalloweenTracker';
import { EVENTO_ISO } from './constants';

const STORAGE_KEY = 'rc_halloween_modal_cerrado';
const OCULTAR_HORAS = 24; // después de cerrarlo, no vuelve a aparecer por este tiempo
const DELAY_MS = 2500;

// El aviso y el link del navbar se retiran cuando la fiesta ya pasó.
export const halloweenVigente = () => Date.now() < new Date(EVENTO_ISO).getTime() + 6 * 3600000;

const recienCerrado = () => {
  try {
    const t = Number(localStorage.getItem(STORAGE_KEY) || 0);
    return t > 0 && Date.now() - t < OCULTAR_HORAS * 3600000;
  } catch {
    return false;
  }
};

export const ModalHalloween = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const enHalloween = pathname?.startsWith('/halloween');

  useEffect(() => {
    if (enHalloween || !halloweenVigente() || recienCerrado()) return;
    const id = setTimeout(() => {
      setOpen(true);
      trackHalloween('modal_view');
    }, DELAY_MS);
    return () => clearTimeout(id);
  }, [enHalloween]);

  const close = useCallback(() => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* sin localStorage: se cierra igual */
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Fiesta de Halloween de RC, viernes 30 de octubre"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[26rem] max-h-[92svh] overflow-y-auto bg-[#0a0a0a] shadow-2xl"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => {
                trackHalloween('modal_close');
                close();
              }}
              aria-label="Cerrar"
              className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center bg-black/70 text-white hover:bg-black"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <Image
              src="/halloween-2026/modal.jpg"
              alt="Fiesta de Halloween en RC Terrazas, viernes 30.10 desde las 18:30"
              width={864}
              height={1080}
              sizes="(min-width: 448px) 416px, 92vw"
              className="block h-auto w-full"
              priority={false}
            />
            <div className="p-4">
              <Link
                href="/halloween"
                onClick={() => {
                  trackHalloween('modal_cta_click');
                  close();
                }}
                className="flex w-full justify-center bg-[#c8ff2e] py-4 text-base font-semibold uppercase tracking-[0.25em] text-black transition-colors hover:bg-[#dcff6e]"
              >
                Anotarme gratis
              </Link>
              <p className="mt-3 text-center text-xs uppercase tracking-[0.25em] text-white/60">Socios y no socios</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
