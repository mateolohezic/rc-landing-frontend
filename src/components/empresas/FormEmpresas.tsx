'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, WhatsappIcon } from '@/icons';
import { CANTIDAD_EMPLEADOS, buildWhatsappLinkEmpresas } from './constants';
import { trackEmpresas } from './EmpresasTracker';

interface FormState {
  empresa: string;
  cantidadEmpleados: string;
  nombreContacto: string;
  cargo: string;
  telefono: string;
  mail: string;
  // Honeypot — campo invisible que bots completan automáticamente
  website: string;
}

const initial: FormState = {
  empresa: '',
  cantidadEmpleados: '',
  nombreContacto: '',
  cargo: '',
  telefono: '',
  mail: '',
  website: '',
};

const onlyDigits = (s: string) => s.replace(/[^\d]/g, '');

export const FormEmpresas = () => {
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setError(null);
  };

  const validate = (): string | null => {
    if (form.empresa.trim().length < 2) return 'Decinos el nombre de tu empresa.';
    if (!form.cantidadEmpleados) return 'Elegí cuántos empleados sumarían.';
    if (form.nombreContacto.trim().length < 2) return 'Decinos tu nombre.';
    if (onlyDigits(form.telefono).length < 8) return 'Tu teléfono no parece válido.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.mail)) return 'Tu mail no parece válido.';
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
    trackEmpresas('lead_submit', { cantidadEmpleados: form.cantidadEmpleados });

    try {
      const res = await fetch('/api/empresas-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          telefono: onlyDigits(form.telefono),
        }),
      });
      if (!res.ok) throw new Error('request failed');
      setSent(true);
    } catch {
      setError('No pudimos enviar el formulario. Escribinos directo por WhatsApp abajo.');
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl mx-auto bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-10 text-center"
      >
        <div className="size-14 rounded-full bg-red-500/15 border border-red-500/40 flex items-center justify-center mx-auto mb-5">
          <CheckIcon className="text-red-400 size-6" />
        </div>
        <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight">
          Recibimos tus datos
        </h3>
        <p className="mt-3 text-white/70 max-w-md mx-auto">
          Te contactamos por WhatsApp o mail en menos de 60 minutos hábiles para armar el plan de{' '}
          {form.empresa}.
        </p>
        <a
          href={buildWhatsappLinkEmpresas(form.empresa)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEmpresas('whatsapp_direct_click_post_submit')}
          className="mt-6 inline-flex items-center gap-2 text-red-400 hover:text-red-300 underline text-sm"
        >
          <WhatsappIcon />
          ¿Preferís hablar ya? Abrí WhatsApp
        </a>
      </motion.div>
    );
  }

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
          Contanos de tu empresa
        </h3>
        <p className="mt-2 text-sm lg:text-base text-white/70">
          Te respondemos por WhatsApp o mail para armar el plan.
        </p>
      </div>

      <Field label="Nombre de la empresa">
        <input
          type="text"
          value={form.empresa}
          onChange={(e) => update('empresa', e.target.value)}
          className="form-input"
          placeholder="Ej: Estudio Contable Pérez"
          required
        />
      </Field>

      <Field label="Cantidad de empleados que sumarían">
        <select
          value={form.cantidadEmpleados}
          onChange={(e) => update('cantidadEmpleados', e.target.value)}
          className="form-input"
          required
        >
          <option value="">Elegí un rango</option>
          {CANTIDAD_EMPLEADOS.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Tu nombre">
          <input
            type="text"
            autoComplete="name"
            value={form.nombreContacto}
            onChange={(e) => update('nombreContacto', e.target.value)}
            className="form-input"
            placeholder="Ej: María González"
            required
          />
        </Field>
        <Field label="Tu cargo (opcional)">
          <input
            type="text"
            value={form.cargo}
            onChange={(e) => update('cargo', e.target.value)}
            className="form-input"
            placeholder="Ej: RRHH, dueña, administración"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Teléfono">
          <input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.telefono}
            onChange={(e) => update('telefono', e.target.value)}
            className="form-input"
            placeholder="Ej: 381 123 4567"
            required
          />
        </Field>
        <Field label="Mail">
          <input
            type="email"
            autoComplete="email"
            value={form.mail}
            onChange={(e) => update('mail', e.target.value)}
            className="form-input"
            placeholder="Ej: maria@empresa.com"
            required
          />
        </Field>
      </div>

      {/* Honeypot anti-bot — campo invisible para humanos */}
      <div className="absolute -left-[9999px] top-0 size-0 overflow-hidden" aria-hidden>
        <label htmlFor="empresas-website">No completar este campo</label>
        <input
          id="empresas-website"
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
        {submitting ? 'Enviando…' : 'Quiero el convenio'}
      </button>

      <p className="text-center text-xs text-white/40 pt-2 border-t border-white/10">
        ¿Preferís escribirnos directo?{' '}
        <a
          href={buildWhatsappLinkEmpresas()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEmpresas('whatsapp_direct_click')}
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
