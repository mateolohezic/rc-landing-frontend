'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckIcon } from '@/icons';
import {
  type ActividadId,
  type DistanciaId,
  buildActividadResumen,
} from './constants';
import { trackRunning } from './RunningTracker';

interface FormState {
  nombre: string;
  whatsapp: string;
  email: string;
  actividades: ActividadId[];
  distancia: DistanciaId | '';
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
  distancia: '',
  socio: '',
  consentMarcas: false,
  website: '',
};

const onlyDigits = (s: string) => s.replace(/[^\d]/g, '');

export const FormInscripcionRunning = () => {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setError(null);
  };

  const toggleActividad = (a: ActividadId) => {
    setForm((f) => {
      const has = f.actividades.includes(a);
      const actividades = has
        ? f.actividades.filter((x) => x !== a)
        : [...f.actividades, a];
      // Si saca running, limpiamos la distancia
      const distancia = a === 'running' && has ? '' : f.distancia;
      return { ...f, actividades, distancia };
    });
    setError(null);
  };

  const validate = (): string | null => {
    if (form.nombre.trim().length < 2) return 'Decinos tu nombre completo.';
    if (onlyDigits(form.whatsapp).length < 8) return 'Tu WhatsApp no parece válido.';
    if (form.actividades.length === 0) return 'Elegí al menos una actividad.';
    if (form.actividades.includes('running') && !form.distancia)
      return 'Elegí la distancia del running (3K o 5K).';
    if (!form.socio) return '¿Sos socio de RC?';
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

    const actividadResumen = buildActividadResumen(form.actividades, form.distancia);
    trackRunning('inscripcion_submit', {
      actividades: form.actividades.join(','),
      distancia: form.distancia,
      socio: form.socio,
    });

    try {
      await fetch('/api/running-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          whatsapp: onlyDigits(form.whatsapp),
          actividadResumen,
        }),
      });
    } catch {
      // si la api falla, igual mandamos a gracias para no perder la inscripción
    }

    const params = new URLSearchParams({
      nombre: form.nombre,
      actividad: actividadResumen,
    });
    router.push(`/running/gracias?${params.toString()}`);
  };

  return (
    <section id="inscripcion" className="relative w-full section-padding px-4 bg-black">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl mx-auto bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-10 space-y-5"
      >
        <div className="text-center mb-6">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight uppercase leading-tight">
            Inscribite
          </h2>
          <p className="mt-2 text-sm lg:text-base text-white/70">
            Cupos limitados. Te confirmamos tu lugar por WhatsApp.
          </p>
        </div>

        <Field label="Nombre y apellido">
          <input
            type="text"
            autoComplete="name"
            value={form.nombre}
            onChange={(e) => update('nombre', e.target.value)}
            className="form-input"
            placeholder="Ej: María González"
            required
          />
        </Field>

        <Field label="WhatsApp">
          <input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.whatsapp}
            onChange={(e) => update('whatsapp', e.target.value)}
            className="form-input"
            placeholder="Ej: 381 123 4567"
            required
          />
        </Field>

        <Field label="Email (opcional)">
          <input
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className="form-input"
            placeholder="Ej: maria@email.com"
          />
        </Field>

        <Field label="¿A qué actividad te inscribís?">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {([
              ['running', 'Running (3K / 5K)'],
              ['spinning', 'Masterclass de spinning'],
            ] as const).map(([id, label]) => (
              <button
                type="button"
                key={id}
                onClick={() => toggleActividad(id)}
                className={`py-3 px-4 rounded-lg text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  form.actividades.includes(id)
                    ? 'bg-red-600 border border-red-500 shadow-lg shadow-red-500/20'
                    : 'bg-white/5 border border-white/15 hover:bg-white/10'
                }`}
              >
                {form.actividades.includes(id) && <CheckIcon className="shrink-0" />}
                {label}
              </button>
            ))}
          </div>
          <span className="block mt-2 text-xs text-white/45">Podés elegir ambas.</span>
        </Field>

        {form.actividades.includes('running') && (
          <Field label="Distancia del running">
            <div className="grid grid-cols-2 gap-3">
              {(['3k', '5k'] as const).map((d) => (
                <button
                  type="button"
                  key={d}
                  onClick={() => update('distancia', d)}
                  className={`py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all ${
                    form.distancia === d
                      ? 'bg-red-600 border border-red-500 shadow-lg shadow-red-500/20'
                      : 'bg-white/5 border border-white/15 hover:bg-white/10'
                  }`}
                >
                  {d === '3k' ? '3K' : '5K'}
                </button>
              ))}
            </div>
          </Field>
        )}

        <Field label="¿Sos socio de RC?">
          <div className="grid grid-cols-2 gap-3">
            {(['si', 'no'] as const).map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => update('socio', opt)}
                className={`py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all ${
                  form.socio === opt
                    ? 'bg-red-600 border border-red-500 shadow-lg shadow-red-500/20'
                    : 'bg-white/5 border border-white/15 hover:bg-white/10'
                }`}
              >
                {opt === 'si' ? 'Sí, soy socio' : 'No, todavía no'}
              </button>
            ))}
          </div>
        </Field>

        {/* Consentimiento para promos de marcas (habilita el envío post-evento) */}
        <button
          type="button"
          onClick={() => update('consentMarcas', !form.consentMarcas)}
          className="w-full flex items-start gap-3 text-left bg-white/[0.03] border border-white/10 rounded-lg p-4 hover:bg-white/[0.05] transition-colors"
        >
          <span
            className={`mt-0.5 size-5 shrink-0 rounded border flex items-center justify-center transition-colors ${
              form.consentMarcas ? 'bg-red-600 border-red-500' : 'border-white/30'
            }`}
          >
            {form.consentMarcas && <CheckIcon className="text-xs" />}
          </span>
          <span className="text-xs lg:text-sm text-white/65 leading-relaxed">
            Quiero recibir promociones y beneficios de RC y de las marcas que acompañan el evento.
          </span>
        </button>

        {/* Honeypot anti-bot */}
        <div className="absolute -left-[9999px] top-0 size-0 overflow-hidden" aria-hidden>
          <label htmlFor="running-website">No completar este campo</label>
          <input
            id="running-website"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => update('website', e.target.value)}
          />
        </div>

        {error && (
          <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-center">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300 text-lg font-black uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Enviando…' : 'Confirmar inscripción'}
        </button>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs lg:text-sm text-white/60">
          <li className="flex items-center gap-2">
            <CheckIcon className="text-red-500 shrink-0" />
            Entrada solidaria con un alimento
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon className="text-red-500 shrink-0" />
            Te confirmamos por WhatsApp
          </li>
        </ul>
      </motion.form>
    </section>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="block text-xs uppercase tracking-widest text-white/60 font-bold mb-2">
      {label}
    </span>
    {children}
  </label>
);
