'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckIcon, WhatsappIcon } from '@/icons';
import { PLANES, PLAN_LABELS, type PlanId, buildWhatsappLink } from './constants';
import { trackPileta } from './PiletaTracker';

interface FormState {
  nombre: string;
  whatsapp: string;
  plan: PlanId | '';
  socio: 'si' | 'no' | '';
  paraQuien: string;
  // Honeypot — campo invisible que bots completan automáticamente
  website: string;
}

const initial: FormState = {
  nombre: '',
  whatsapp: '',
  plan: '',
  socio: '',
  paraQuien: '',
  website: '',
};

const onlyDigits = (s: string) => s.replace(/[^\d]/g, '');

export const FormPreventaPileta = () => {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setError(null);
  };

  const validate = (): string | null => {
    if (form.nombre.trim().length < 2) return 'Decinos tu nombre completo.';
    if (onlyDigits(form.whatsapp).length < 8) return 'Tu WhatsApp no parece válido.';
    if (!form.plan) return 'Elegí qué plan te interesa.';
    if (!form.socio) return '¿Sos socio actual de RC?';
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
    trackPileta('lead_submit', { plan: form.plan, socio: form.socio });

    try {
      await fetch('/api/pileta-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          whatsapp: onlyDigits(form.whatsapp),
        }),
      });
    } catch {
      // si la api falla, igual seguimos al WhatsApp para no perder el lead
    }

    const planLabel = form.plan ? PLAN_LABELS[form.plan as PlanId] : '';
    const params = new URLSearchParams({
      nombre: form.nombre,
      plan: planLabel,
    });
    router.push(`/pileta/gracias?${params.toString()}`);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-10 space-y-5"
    >
      <div className="text-center mb-6">
        <h3 className="text-3xl lg:text-4xl font-black tracking-tight uppercase leading-tight">
          Reservá tu cupo
        </h3>
        <p className="mt-2 text-sm lg:text-base text-white/70">
          Te respondemos por WhatsApp para confirmar tu plan.
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

      <Field label="¿Qué plan te interesa?">
        <select
          value={form.plan}
          onChange={(e) => update('plan', e.target.value as PlanId)}
          className="form-input"
          required
        >
          <option value="">Elegí un plan</option>
          {PLANES.map((p) => (
            <option key={p.id} value={p.id}>
              {p.titulo} — ${p.precio.toLocaleString('es-AR')}
              {p.unidad}
            </option>
          ))}
        </select>
      </Field>

      <Field label="¿Sos socio actual de RC?">
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

      <Field label="¿Para quién es? (opcional)">
        <select
          value={form.paraQuien}
          onChange={(e) => update('paraQuien', e.target.value)}
          className="form-input"
        >
          <option value="">No especifico</option>
          <option value="yo">Para mí</option>
          <option value="hijo">Para mi hijo/a</option>
          <option value="pareja">Para mi pareja</option>
          <option value="familiar">Para un familiar</option>
        </select>
      </Field>

      {/* Honeypot anti-bot — campo invisible para humanos */}
      <div className="absolute -left-[9999px] top-0 size-0 overflow-hidden" aria-hidden>
        <label htmlFor="pileta-website">No completar este campo</label>
        <input
          id="pileta-website"
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
        className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300 text-lg font-black uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {submitting ? (
          'Enviando…'
        ) : (
          <>
            <WhatsappIcon className="text-2xl" />
            Reservar mi cupo
          </>
        )}
      </button>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs lg:text-sm text-white/60">
        <li className="flex items-center gap-2">
          <CheckIcon className="text-red-500 shrink-0" />
          Te escribimos por WhatsApp
        </li>
        <li className="flex items-center gap-2">
          <CheckIcon className="text-red-500 shrink-0" />
          Sin pago anticipado en este paso
        </li>
      </ul>

      {/* Fallback directo a WhatsApp por si no quieren llenar el form */}
      <p className="text-center text-xs text-white/40 pt-2 border-t border-white/10">
        ¿Preferís escribirnos directo?{' '}
        <a
          href={buildWhatsappLink({})}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackPileta('whatsapp_direct_click')}
          className="text-red-400 hover:text-red-300 underline"
        >
          Abrir WhatsApp
        </a>
      </p>
    </motion.form>
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
