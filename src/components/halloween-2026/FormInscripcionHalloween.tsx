'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { headlineFont } from './fonts';
import { trackHalloween } from './HalloweenTracker';
import { EVENTO, EVENTO_WHATSAPP, SEDES } from './constants';

type Socio = 'si' | 'no' | '';

interface FormState {
  nombre: string;
  whatsapp: string;
  email: string;
  socio: Socio;
  sede: string;
  acompanantes: number;
  concurso: boolean;
  consent: boolean;
  // Honeypot: campo invisible que completan los bots
  website: string;
}

type Field = 'nombre' | 'whatsapp' | 'email' | 'socio';
type Errors = Partial<Record<Field, string>>;

const initial: FormState = {
  nombre: '',
  whatsapp: '',
  email: '',
  socio: '',
  sede: '',
  acompanantes: 0,
  concurso: false,
  consent: false,
  website: '',
};

const MAX_ACOMPANANTES = 10;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const onlyDigits = (s: string) => s.replace(/[^\d]/g, '');

// Agrupa "3811234567" como "381 123 4567". Si tiene más de 10 dígitos (código de país), lo deja corrido.
const formatPhone = (raw: string) => {
  const d = onlyDigits(raw).slice(0, 15);
  if (d.length > 10) return d;
  if (d.length > 6) return `${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}`;
  if (d.length > 3) return `${d.slice(0, 3)} ${d.slice(3)}`;
  return d;
};

const validateField = (field: Field, f: FormState): string | undefined => {
  switch (field) {
    case 'nombre': {
      const partes = f.nombre.trim().split(/\s+/).filter((p) => p.length > 1);
      return partes.length < 2 ? 'Escribí tu nombre y apellido.' : undefined;
    }
    case 'whatsapp': {
      const len = onlyDigits(f.whatsapp).length;
      if (len === 0) return 'Escribí tu WhatsApp.';
      return len < 10 ? 'Revisá el número: incluí el código de área, sin el 0 ni el 15.' : undefined;
    }
    case 'email':
      return f.email.trim() && !EMAIL_RE.test(f.email.trim()) ? 'Ese email no parece válido.' : undefined;
    case 'socio':
      return f.socio === '' ? 'Elegí una opción.' : undefined;
  }
};

const FIELD_ORDER: Field[] = ['nombre', 'whatsapp', 'email', 'socio'];

export const FormInscripcionHalloween = () => {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initial);
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState(false);
  const inFlight = useRef(false);
  const started = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Embudo: el formulario entró en pantalla (una vez).
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          trackHalloween('form_view');
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Embudo: la persona empezó a completar el formulario (una vez).
  const handleStart = () => {
    if (started.current) return;
    started.current = true;
    trackHalloween('form_start');
  };

  const errors: Errors = {};
  for (const field of FIELD_ORDER) {
    const e = validateField(field, form);
    if (e && touched[field]) errors[field] = e;
  }

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setApiError(false);
  };
  const touch = (field: Field) => setTouched((t) => ({ ...t, [field]: true }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inFlight.current) return;

    const all: Partial<Record<Field, boolean>> = { nombre: true, whatsapp: true, email: true, socio: true };
    setTouched(all);
    const firstInvalid = FIELD_ORDER.find((f) => validateField(f, form));
    if (firstInvalid) {
      document.getElementById(`hw-${firstInvalid}`)?.focus();
      return;
    }

    inFlight.current = true;
    setSubmitting(true);
    setApiError(false);
    trackHalloween('inscripcion_submit', { socio: form.socio, concurso: form.concurso });

    try {
      const res = await fetch('/api/halloween-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          nombre: form.nombre.trim(),
          whatsapp: onlyDigits(form.whatsapp),
          email: form.email.trim(),
          sede: form.socio === 'si' ? form.sede : '',
        }),
      });
      if (!res.ok) throw new Error('lead-api-failed');
    } catch {
      // La inscripción no se guardó: no mandamos a gracias como si hubiera funcionado.
      inFlight.current = false;
      setSubmitting(false);
      setApiError(true);
      return;
    }

    const params = new URLSearchParams({
      nombre: form.nombre.trim(),
      acompanantes: String(form.acompanantes),
      concurso: form.concurso ? '1' : '0',
      socio: form.socio,
    });
    router.push(`/halloween/gracias?${params.toString()}`);
  };

  const labelClass = 'block text-xs font-semibold uppercase tracking-[0.3em] text-[#f3ece2]/70 mb-2';
  const inputClass = (invalid: boolean) =>
    `w-full bg-transparent border-0 border-b px-0 py-3 text-lg text-[#f3ece2] placeholder:text-[#f3ece2]/30 outline-none transition-colors ${
      invalid ? 'border-red-400' : 'border-white/30 focus:border-[#f26b1d]'
    }`;
  const segClass = (active: boolean) =>
    `py-3 text-xs font-semibold uppercase tracking-[0.25em] border transition-colors ${
      active
        ? 'bg-[#f26b1d] border-[#f26b1d] text-black'
        : 'border-white/30 text-[#f3ece2] hover:border-white/70'
    }`;
  const errorEl = (field: Field) =>
    errors[field] ? (
      <p id={`hw-${field}-error`} role="alert" className="mt-2 text-sm text-red-400">
        {errors[field]}
      </p>
    ) : null;

  return (
    <section ref={sectionRef} id="inscripcion" className="w-full bg-[#0a0a0a] px-6 py-20 sm:px-10 sm:py-28 border-t border-white/10 scroll-mt-4">
      <div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f26b1d] mb-4">Inscripción</p>
          <h2 className={`${headlineFont.className} italic font-black uppercase text-5xl sm:text-7xl leading-[0.88] text-[#f3ece2]`}>
            Anotate
          </h2>
          <p className="mt-6 text-[#f3ece2]/75 max-w-sm leading-relaxed">
            Es gratis y es para socios y no socios. {EVENTO.fechaLarga} desde las 18:30 en {EVENTO.lugar}.
          </p>
        </div>

        <form onSubmit={handleSubmit} onFocusCapture={handleStart} noValidate className="w-full space-y-8">
          <div>
            <label htmlFor="hw-nombre" className={labelClass}>Nombre y apellido</label>
            <input
              id="hw-nombre"
              type="text"
              autoComplete="name"
              value={form.nombre}
              onChange={(e) => update('nombre', e.target.value)}
              onBlur={() => touch('nombre')}
              aria-invalid={!!errors.nombre}
              aria-describedby={errors.nombre ? 'hw-nombre-error' : undefined}
              maxLength={100}
              className={inputClass(!!errors.nombre)}
              placeholder="María González"
            />
            {errorEl('nombre')}
          </div>

          <div>
            <label htmlFor="hw-whatsapp" className={labelClass}>WhatsApp</label>
            <input
              id="hw-whatsapp"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              value={form.whatsapp}
              onChange={(e) => update('whatsapp', formatPhone(e.target.value))}
              onBlur={() => touch('whatsapp')}
              aria-invalid={!!errors.whatsapp}
              aria-describedby={errors.whatsapp ? 'hw-whatsapp-error' : 'hw-whatsapp-hint'}
              className={inputClass(!!errors.whatsapp)}
              placeholder="381 123 4567"
            />
            {errors.whatsapp ? errorEl('whatsapp') : (
              <p id="hw-whatsapp-hint" className="mt-2 text-xs text-[#f3ece2]/50">
                Con código de área, sin el 0 ni el 15.
              </p>
            )}
          </div>

          <div>
            <label htmlFor="hw-email" className={labelClass}>Email (opcional)</label>
            <input
              id="hw-email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              onBlur={() => touch('email')}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'hw-email-error' : undefined}
              maxLength={120}
              className={inputClass(!!errors.email)}
              placeholder="maria@email.com"
            />
            {errorEl('email')}
          </div>

          <fieldset>
            <legend className={labelClass}>¿Sos socio de RC?</legend>
            <div
              id="hw-socio"
              role="radiogroup"
              aria-invalid={!!errors.socio}
              aria-describedby={errors.socio ? 'hw-socio-error' : undefined}
              tabIndex={-1}
              className="grid grid-cols-2 gap-3 outline-none"
            >
              {(['si', 'no'] as const).map((opt) => (
                <button
                  type="button"
                  key={opt}
                  role="radio"
                  aria-checked={form.socio === opt}
                  onClick={() => {
                    update('socio', opt);
                    touch('socio');
                  }}
                  className={segClass(form.socio === opt)}
                >
                  {opt === 'si' ? 'Sí, soy socio' : 'No, todavía no'}
                </button>
              ))}
            </div>
            {errorEl('socio')}
          </fieldset>

          {form.socio === 'si' && (
            <div>
              <label htmlFor="hw-sede" className={labelClass}>¿En qué sede entrenás? (opcional)</label>
              <select
                id="hw-sede"
                value={form.sede}
                onChange={(e) => update('sede', e.target.value)}
                className="w-full bg-[#0a0a0a] border-0 border-b border-white/30 focus:border-[#f26b1d] px-0 py-3 text-lg text-[#f3ece2] outline-none transition-colors"
              >
                <option value="">Elegí tu sede</option>
                {SEDES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          )}

          <div>
            <span id="hw-acomp-label" className={labelClass}>¿Cuántas personas van con vos? (opcional)</span>
            <div role="group" aria-labelledby="hw-acomp-label" className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => update('acompanantes', Math.max(0, form.acompanantes - 1))}
                disabled={form.acompanantes === 0}
                aria-label="Una persona menos"
                className="size-12 border border-white/30 text-xl text-[#f3ece2] hover:border-[#f26b1d] hover:text-[#f26b1d] transition-colors disabled:opacity-30 disabled:hover:border-white/30 disabled:hover:text-[#f3ece2]"
              >
                −
              </button>
              <span
                aria-live="polite"
                className={`${headlineFont.className} italic font-black text-4xl w-10 text-center tabular-nums text-[#f3ece2]`}
              >
                {form.acompanantes}
              </span>
              <button
                type="button"
                onClick={() => update('acompanantes', Math.min(MAX_ACOMPANANTES, form.acompanantes + 1))}
                disabled={form.acompanantes === MAX_ACOMPANANTES}
                aria-label="Una persona más"
                className="size-12 border border-white/30 text-xl text-[#f3ece2] hover:border-[#f26b1d] hover:text-[#f26b1d] transition-colors disabled:opacity-30 disabled:hover:border-white/30 disabled:hover:text-[#f3ece2]"
              >
                +
              </button>
            </div>
          </div>


          <div className="space-y-4 pt-2">
            {([
              ['concurso', 'Quiero participar del concurso de disfraces.'],
              ['consent', 'Acepto recibir novedades de RC por WhatsApp. Podés pedir dejar de recibirlas cuando quieras.'],
            ] as const).map(([key, texto]) => (
              <label key={key} className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form[key]}
                  onChange={(e) => update(key, e.target.checked)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden
                  className="mt-0.5 size-5 shrink-0 border border-white/40 peer-checked:bg-[#f26b1d] peer-checked:border-[#f26b1d] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#f26b1d] flex items-center justify-center transition-colors"
                >
                  {form[key] && (
                    <svg viewBox="0 0 12 12" className="size-3 text-black" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 6.5l2.5 2.5L10 3.5" />
                    </svg>
                  )}
                </span>
                <span className="text-sm text-[#f3ece2]/80 leading-snug">{texto}</span>
              </label>
            ))}
          </div>

          {/* Honeypot anti-bot */}
          <div className="absolute -left-[9999px] top-0 size-0 overflow-hidden" aria-hidden>
            <label htmlFor="halloween-website">No completar este campo</label>
            <input
              id="halloween-website"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(e) => update('website', e.target.value)}
            />
          </div>

          {apiError && (
            <p role="alert" className="text-sm text-red-400">
              No pudimos guardar tu inscripción. Probá de nuevo, o escribinos por{' '}
              <a
                href={`https://wa.me/${EVENTO_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                WhatsApp
              </a>
              .
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-5 bg-[#c8ff2e] text-black text-base font-semibold uppercase tracking-[0.3em] hover:bg-[#dcff6e] transition-colors disabled:opacity-60 disabled:cursor-wait"
          >
            {submitting ? 'Enviando…' : 'Confirmar inscripción'}
          </button>
          <p className="text-xs text-[#f3ece2]/50 leading-relaxed">
            Usamos tus datos para organizar la fiesta y, si lo aceptaste, para enviarte novedades de RC.
          </p>
        </form>
      </div>
    </section>
  );
};
