import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

interface HalloweenLeadBody {
  nombre?: string;
  whatsapp?: string;
  email?: string;
  socio?: 'si' | 'no' | '';
  sede?: string;
  concurso?: boolean;
  consent?: boolean;
  // Honeypot
  website?: string;
}

interface Lead {
  nombre: string;
  whatsapp: string;
  email: string;
  socio: 'si' | 'no';
  sede: string;
  concurso: boolean;
  consent: boolean;
  timestamp: string;
}

const SEDES = ['Tafí Viejo', 'Barrio Sur', 'Barrio Norte', 'Terrazas', 'Aconquija', 'Épico'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// ── Destino principal: Google Form con su Sheet vinculado, como en Primavera Running ──
// Form "Inscripción Halloween 2026". Si se cambian las preguntas del Form, hay que actualizar estos ids.
// Si la URL queda vacía, las inscripciones llegan por mail a contacto@rcgym.com.ar.
const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSdSdkuwoxQte2M1V8Yd0qKguwdhJ3tLclGguVGY3ZnlN_vT9g/formResponse';
const GOOGLE_FORM_ENTRIES = {
  nombre: 'entry.541243978',
  whatsapp: 'entry.1852480621',
  email: 'entry.1308561590',
  socio: 'entry.1899092983', // Sí / No
  sede: 'entry.1338546576',
  concurso: 'entry.1369972471', // Sí / No
  consent: 'entry.506842768', // Sí / No
};

// Rate limit en memoria (per-IP, 10 req/min)
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 10;
const ipHits = new Map<string, number[]>();

const isRateLimited = (ip: string): boolean => {
  const now = Date.now();
  const hits = (ipHits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (hits.length >= RATE_LIMIT_MAX) {
    ipHits.set(ip, hits);
    return true;
  }
  hits.push(now);
  ipHits.set(ip, hits);
  if (ipHits.size > 1000) {
    for (const [k, v] of ipHits) {
      if (v.every((t) => now - t > RATE_LIMIT_WINDOW_MS)) ipHits.delete(k);
    }
  }
  return false;
};

const getClientIp = (req: NextRequest): string => {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.headers.get('x-real-ip') || 'unknown';
};

// Saca saltos de línea, tabs y caracteres de control. No toca espacios ni guiones.
// eslint-disable-next-line no-control-regex
const sanitize = (s: string): string => s.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, 200);

const escapeHtml = (s: string): string =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

let transporterCache: nodemailer.Transporter | null = null;

const getTransporter = (): nodemailer.Transporter | null => {
  if (transporterCache) return transporterCache;
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_EMAIL;
  const pass = process.env.SMTP_PASSWORD;
  if (!host || !user || !pass) return null;

  transporterCache = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user, pass },
  });
  return transporterCache;
};

const socioLabel = (lead: Lead) => (lead.socio === 'si' ? `Sí${lead.sede ? ` (${lead.sede})` : ''}` : 'No');

const buildEmailText = (lead: Lead) => `NUEVA INSCRIPCIÓN — FIESTA DE HALLOWEEN RC (30/10)

Nombre:          ${lead.nombre}
WhatsApp:        +${lead.whatsapp}
Email:           ${lead.email || '—'}
¿Es socio?:      ${socioLabel(lead)}
Concurso:        ${lead.concurso ? 'Quiere participar' : 'No'}
Novedades RC:    ${lead.consent ? 'Sí, acepta' : 'No'}
Recibido:        ${lead.timestamp}

Contactar:       https://wa.me/${lead.whatsapp}

—
Enviado desde rcgym.com.ar/halloween`;

const buildEmailHtml = (lead: Lead) => {
  const row = (label: string, value: string) => `
    <tr><td style="padding:10px 0;border-bottom:1px solid #e5e5e5;">
      <span style="display:inline-block;width:150px;color:#737373;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:700;">${label}</span>
      <span style="color:#0a0a0a;font-size:15px;font-weight:600;">${escapeHtml(value)}</span>
    </td></tr>`;

  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>Nueva inscripción Halloween RC</title></head>
<body style="margin:0;padding:24px 12px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f5f5f5;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td align="center">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="560" style="max-width:560px;background:#ffffff;">
      <tr><td style="background:#0a0a0a;padding:24px;">
        <p style="margin:0;color:#f26b1d;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700;">Fiesta de Halloween · 30/10</p>
        <h1 style="margin:8px 0 0 0;color:#f3ece2;font-size:22px;font-weight:800;text-transform:uppercase;">Nueva inscripción</h1>
      </td></tr>
      <tr><td style="padding:24px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          ${row('Nombre', lead.nombre)}
          ${row('WhatsApp', '+' + lead.whatsapp)}
          ${row('Email', lead.email || '—')}
          ${row('¿Es socio?', socioLabel(lead))}
          ${row('Concurso', lead.concurso ? 'Quiere participar' : 'No')}
          ${row('Novedades RC', lead.consent ? 'Sí, acepta' : 'No')}
          ${row('Recibido', lead.timestamp)}
        </table>
        <p style="margin:24px 0 0 0;"><a href="https://wa.me/${lead.whatsapp}" style="color:#0a0a0a;font-weight:700;">Escribirle por WhatsApp</a></p>
      </td></tr>
    </table>
  </td></tr></table>
</body></html>`;
};

const sendEmail = async (lead: Lead): Promise<boolean> => {
  const transporter = getTransporter();
  if (!transporter) return false;
  try {
    await transporter.sendMail({
      from: process.env.LEAD_EMAIL_FROM || `RC Halloween <${process.env.SMTP_EMAIL}>`,
      to: process.env.HALLOWEEN_EMAIL_TO || process.env.LEAD_EMAIL_TO || 'contacto@rcgym.com.ar',
      replyTo: process.env.LEAD_EMAIL_REPLY_TO || undefined,
      // Asunto etiquetado para filtrar la base de inscriptos en la casilla
      subject: `[Inscripción Halloween] ${lead.nombre}${lead.socio === 'si' ? ' · socio' : ''}${lead.concurso ? ' · concurso' : ''}${lead.consent ? ' · acepta novedades' : ''}`,
      text: buildEmailText(lead),
      html: buildEmailHtml(lead),
    });
    return true;
  } catch (err) {
    console.error('[halloween-lead] email send failed', err);
    return false;
  }
};

const sendToGoogleForm = async (lead: Lead): Promise<boolean> => {
  if (!GOOGLE_FORM_ACTION) return false;
  const e = GOOGLE_FORM_ENTRIES;
  const params = new URLSearchParams();
  const add = (entry: string, value: string) => {
    if (entry) params.append(entry, value);
  };
  add(e.nombre, lead.nombre);
  add(e.whatsapp, lead.whatsapp);
  if (lead.email) add(e.email, lead.email);
  add(e.socio, lead.socio === 'si' ? 'Sí' : 'No');
  if (lead.sede) add(e.sede, lead.sede);
  add(e.concurso, lead.concurso ? 'Sí' : 'No');
  add(e.consent, lead.consent ? 'Sí' : 'No');
  try {
    const res = await fetch(GOOGLE_FORM_ACTION, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });
    if (!res.ok) console.error('[halloween-lead] google form respondió', res.status);
    return res.ok;
  } catch (err) {
    console.error('[halloween-lead] google form fetch failed', err);
    return false;
  }
};

export async function POST(req: NextRequest) {
  if (isRateLimited(getClientIp(req))) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  let body: HalloweenLeadBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot — bot
  if (body.website && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const nombre = sanitize(body.nombre || '');
  const whatsapp = sanitize(body.whatsapp || '').replace(/[^\d]/g, '');
  const email = sanitize(body.email || '');
  const socio = body.socio;
  const sede = sanitize(body.sede || '');

  if (nombre.length < 3 || nombre.length > 100) {
    return NextResponse.json({ error: 'Nombre inválido' }, { status: 422 });
  }
  if (whatsapp.length < 8 || whatsapp.length > 15) {
    return NextResponse.json({ error: 'WhatsApp inválido' }, { status: 422 });
  }
  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Email inválido' }, { status: 422 });
  }
  if (socio !== 'si' && socio !== 'no') {
    return NextResponse.json({ error: 'Socio inválido' }, { status: 422 });
  }
  if (sede && !SEDES.includes(sede)) {
    return NextResponse.json({ error: 'Sede inválida' }, { status: 422 });
  }

  const lead: Lead = {
    nombre,
    whatsapp,
    email,
    socio,
    sede: socio === 'si' ? sede : '',
    concurso: body.concurso === true,
    consent: body.consent === true,
    timestamp: new Date().toLocaleString('es-AR', {
      timeZone: 'America/Argentina/Tucuman',
      dateStyle: 'short',
      timeStyle: 'short',
    }),
  };

  // En desarrollo no se manda nada al equipo: se registra en consola para poder probar el flujo.
  // Para probar el envío real en local: HALLOWEEN_SEND_IN_DEV=true en .env.local.
  if (process.env.NODE_ENV !== 'production' && process.env.HALLOWEEN_SEND_IN_DEV !== 'true') {
    console.log('[halloween-lead] (dev, no se envía)', lead);
    return NextResponse.json({ ok: true, dev: true });
  }

  // Destino principal: Google Form (cae en una planilla). El mail queda como respaldo: solo se manda
  // si el Form no está configurado o falla, para no perder ninguna inscripción.
  const formOk = await sendToGoogleForm(lead);
  const emailOk = formOk ? true : await sendEmail(lead);

  if (!emailOk) {
    return NextResponse.json({ error: 'No se pudo guardar la inscripción' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
