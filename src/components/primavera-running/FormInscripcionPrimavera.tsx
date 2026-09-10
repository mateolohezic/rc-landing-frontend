'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { headlineFont } from './fonts';
import { type ActividadId, buildActividadResumen } from './constants';
import { trackPrimavera } from './PrimaveraTracker';

interface FormState {
  nombre: string;
  whatsapp: string;
  email: string;
  actividades: ActividadId[];
  soloAfter: boolean;
  acompanantes: string;
  socio: 'si' | 'no' | '';
  consentMarcas: boolean;
  // Honeypot: campo invisible que bots completan
  website: string;
}

const initial: FormState = {
  nombre: '',
  whatsapp: '',
  email: '',
  actividades: [],
  soloAfter: false,
  acompanantes: '',
  socio: '',
  consentMarcas: false,
  website: '',
};

const onlyDigits = (s: string) => s.replace(/[^\d]/g, '');

export const FormInscripcionPrimavera = () => {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [apiError, setApiError] = useState(false);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setError(null);
  };

  const toggleActividad = (a: ActividadId) => {
    setForm((f) => {
      const has = f.actividades.includes(a);
      const actividades = has ? f.actividades.filter((x) => x !== a) : [...f.actividades, a];
      return { ...f, actividades, soloAfter: false };
    });
    setError(null);
  };

  const toggleSoloAfter = () => {
    setForm((f) => ({ ...f, soloAfter: !f.soloAfter, actividades: [] }));
    setError(null);
  };

  const validate = (): string | null => {
    if (form.nombre.trim().length < 2) return 'Decinos tu nombre completo.';
    if (onlyDigits(form.whatsapp).length < 8) return 'Tu WhatsApp no parece válido.';
    if (form.actividades.length === 0 && !form.soloAfter) return 'Elegí una actividad, o "Solo el after".';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setSubmitting(true);
    setApiError(false);

    const actividadResumen = buildActividadResumen(form.actividades, form.soloAfter);
    trackPrimavera('inscripcion_submit', {
      actividades: form.actividades.join(','),
      soloAfter: form.soloAfter,
      socio: form.socio,
    });

    try {
      const res = await fetch('/api/primavera-running-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          whatsapp: onlyDigits(form.whatsapp),
          actividadResumen,
        }),
      });
      if (!res.ok) throw new Error('lead-api-failed');
    } catch {
      // La inscripción no se guardó: no mandamos a gracias como si hubiera funcionado.
      setSubmitting(false);
      setApiError(true);
      return;
    }

    const params = new URLSearchParams({
      nombre: form.nombre,
      actividad: actividadResumen,
      acompanantes: form.acompanantes || '0',
    });
    router.push(`/primavera-running/gracias?${params.toString()}`);
  };

  const inputClass =
    'w-full bg-transparent border-0 border-b border-white/30 focus:border-[#e2941f] px-0 py-3 text-white placeholder:text-white/40 outline-none transition-colors';
  const labelClass = 'block text-xs uppercase tracking-[0.3em] text-white/70 mb-2';
  const toggleClass = (active: boolean) =>
    `py-3 text-xs uppercase tracking-[0.2em] font-bold border transition-colors ${
      active
        ? 'bg-[#fbf1dd] border-[#fbf1dd] text-[#2e3712]'
        : 'border-white/30 text-white hover:border-white/60'
    }`;

  return (
    <section id="inscripcion" className="w-full bg-black px-6 py-24">
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-8">
        <h2 className={`${headlineFont.className} text-4xl sm:text-6xl lg:text-7xl text-white text-center uppercase`}>
          Sumate
        </h2>

        <label className="block">
          <span className={labelClass}>Nombre y apellido</span>
          <input
            type="text"
            autoComplete="name"
            value={form.nombre}
            onChange={(e) => update('nombre', e.target.value)}
            className={inputClass}
            placeholder="María González"
            required
          />
        </label>

        <label className="block">
          <span className={labelClass}>WhatsApp</span>
          <input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.whatsapp}
            onChange={(e) => update('whatsapp', e.target.value)}
            className={inputClass}
            placeholder="381 123 4567"
            required
          />
        </label>

        <label className="block">
          <span className={labelClass}>Email (opcional)</span>
          <input
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={inputClass}
            placeholder="maria@email.com"
          />
        </label>

        <fieldset>
          <legend className={labelClass}>Actividad</legend>
          <div className="grid grid-cols-3 gap-2">
            {([
              ['running', 'Running'],
              ['spinning', 'Spinning'],
              ['funcional', 'Funcional'],
            ] as const).map(([id, label]) => (
              <button
                type="button"
                key={id}
                aria-pressed={form.actividades.includes(id)}
                onClick={() => toggleActividad(id)}
                className={toggleClass(form.actividades.includes(id))}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-pressed={form.soloAfter}
            onClick={toggleSoloAfter}
            className={`w-full mt-3 ${toggleClass(form.soloAfter)}`}
          >
            Solo el cierre en Alterpoint
          </button>
          <span className="block mt-2 text-xs text-white/60">
            Running es a las 10. Spinning y funcional son a las 10:30, en simultáneo (elegís una). O anotate solo para el cierre.
          </span>
        </fieldset>

        <fieldset>
          <legend className={labelClass}>¿Sos socio de RC? (opcional)</legend>
          <div className="grid grid-cols-2 gap-3">
            {(['si', 'no'] as const).map((opt) => (
              <button
                type="button"
                key={opt}
                aria-pressed={form.socio === opt}
                onClick={() => update('socio', form.socio === opt ? '' : opt)}
                className={toggleClass(form.socio === opt)}
              >
                {opt === 'si' ? 'Sí' : 'No'}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="block">
          <span className={labelClass}>Acompañantes (opcional)</span>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            max={20}
            value={form.acompanantes}
            onChange={(e) => update('acompanantes', e.target.value)}
            className={inputClass}
            placeholder="2"
          />
        </label>

        <button
          type="button"
          role="checkbox"
          aria-checked={form.consentMarcas}
          onClick={() => update('consentMarcas', !form.consentMarcas)}
          className="w-full flex items-center gap-3 text-left"
        >
          <span
            aria-hidden
            className={`size-4 shrink-0 border transition-colors ${
              form.consentMarcas ? 'bg-[#e2941f] border-[#e2941f]' : 'border-white/30'
            }`}
          />
          <span className="text-xs text-white/70">Quiero recibir novedades de RC y Alterpoint.</span>
        </button>

        {/* Honeypot anti-bot */}
        <div className="absolute -left-[9999px] top-0 size-0 overflow-hidden" aria-hidden>
          <label htmlFor="primavera-website">No completar este campo</label>
          <input
            id="primavera-website"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => update('website', e.target.value)}
          />
        </div>

        {error && <p className="text-sm text-red-400 text-center">{error}</p>}

        {apiError && (
          <p className="text-sm text-red-400 text-center">
            No pudimos guardar tu inscripción. Probá de nuevo, o escribinos directamente por{' '}
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_EVENTO_WHATSAPP_PRIMAVERA || '5493815145550'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              WhatsApp
            </a>
            .
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 bg-[#fbf1dd] text-[#2e3712] text-sm uppercase tracking-[0.3em] font-bold hover:bg-white transition-colors disabled:opacity-50"
        >
          {submitting ? 'Enviando…' : 'Confirmar mi inscripción'}
        </button>

        <p className="text-center text-xs text-white/60">Es gratis. Cupos limitados.</p>
      </form>
    </section>
  );
};
