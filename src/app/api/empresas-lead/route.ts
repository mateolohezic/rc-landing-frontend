import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Forzar runtime Node (nodemailer no funciona en Edge)
export const runtime = 'nodejs';

interface EmpresasLeadBody {
  empresa?: string;
  cantidadEmpleados?: string;
  nombreContacto?: string;
  cargo?: string;
  telefono?: string;
  mail?: string;
  // Honeypot field — bots completan, humanos no lo ven
  website?: string;
}

// In-memory rate limit (per-IP, 10 req/min). En serverless cada lambda
// tiene su propio store, pero el ataque típico viene de pocas IPs así
// que esta protección bloquea casi todo el spam.
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
  const real = req.headers.get('x-real-ip');
  if (real) return real;
  return 'unknown';
};

const sanitize = (s: string): string => s.replace(/[<>]/g, '').trim().slice(0, 200);

const escapeHtml = (s: string): string =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const CANTIDAD_LABELS: Record<string, string> = {
  '15-24': '15 a 24 empleados',
  '25-49': '25 a 49 empleados',
  '50+': '50 o más empleados',
};

// Lazy: una sola instancia del transporter por lambda warm
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

const buildEmailHtml = (lead: {
  empresa: string;
  cantidadEmpleados: string;
  nombreContacto: string;
  cargo: string;
  telefono: string;
  mail: string;
  timestamp: string;
}) => {
  const cantidadLabel = CANTIDAD_LABELS[lead.cantidadEmpleados] || lead.cantidadEmpleados;
  const waNumber = lead.telefono.replace(/[^\d]/g, '');
  const waMessage = encodeURIComponent(
    `Hola ${lead.nombreContacto}, te escribimos de RC Gym por el convenio para ${lead.empresa}.`,
  );
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Nuevo lead de empresas</title></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f5f5f5;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;background:#0a0a0a;border-radius:12px;overflow:hidden;">
        <tr><td style="background:linear-gradient(135deg,#dc2626,#991b1b);padding:24px;text-align:center;">
          <p style="margin:0;color:rgba(255,255,255,0.7);font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700;">Convenio Empresas RC</p>
          <h1 style="margin:8px 0 0 0;color:white;font-size:24px;font-weight:900;text-transform:uppercase;">Nuevo lead</h1>
        </td></tr>
        <tr><td style="padding:32px 24px;color:white;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);">
              <span style="display:inline-block;width:150px;color:rgba(255,255,255,0.5);font-size:13px;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Empresa</span>
              <span style="color:#ef4444;font-size:16px;font-weight:700;">${escapeHtml(lead.empresa)}</span>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);">
              <span style="display:inline-block;width:150px;color:rgba(255,255,255,0.5);font-size:13px;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Empleados</span>
              <span style="color:white;font-size:16px;font-weight:700;">${escapeHtml(cantidadLabel)}</span>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);">
              <span style="display:inline-block;width:150px;color:rgba(255,255,255,0.5);font-size:13px;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Contacto</span>
              <span style="color:white;font-size:16px;font-weight:700;">${escapeHtml(lead.nombreContacto)}</span>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);">
              <span style="display:inline-block;width:150px;color:rgba(255,255,255,0.5);font-size:13px;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Cargo</span>
              <span style="color:white;font-size:16px;">${escapeHtml(lead.cargo || '—')}</span>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);">
              <span style="display:inline-block;width:150px;color:rgba(255,255,255,0.5);font-size:13px;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Teléfono</span>
              <span style="color:white;font-size:16px;font-weight:700;">+${escapeHtml(lead.telefono)}</span>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);">
              <span style="display:inline-block;width:150px;color:rgba(255,255,255,0.5);font-size:13px;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Mail</span>
              <span style="color:white;font-size:16px;">${escapeHtml(lead.mail)}</span>
            </td></tr>
            <tr><td style="padding:10px 0;">
              <span style="display:inline-block;width:150px;color:rgba(255,255,255,0.5);font-size:13px;text-transform:uppercase;letter-spacing:1px;font-weight:700;">Recibido</span>
              <span style="color:rgba(255,255,255,0.7);font-size:14px;">${escapeHtml(lead.timestamp)}</span>
            </td></tr>
          </table>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:28px;">
            <tr><td align="center">
              <a href="${waLink}" style="display:inline-block;background:#25D366;color:#000;padding:14px 28px;text-decoration:none;border-radius:8px;font-weight:900;font-size:15px;text-transform:uppercase;letter-spacing:1px;">Contactar por WhatsApp</a>
            </td></tr>
          </table>
          <p style="margin:20px 0 0 0;text-align:center;color:rgba(255,255,255,0.4);font-size:12px;">Regla del canal: contactar antes de 60 minutos.</p>
        </td></tr>
        <tr><td style="background:#171717;padding:16px;text-align:center;border-top:1px solid rgba(255,255,255,0.08);">
          <p style="margin:0;color:rgba(255,255,255,0.4);font-size:12px;">Enviado automáticamente desde rcgym.com.ar/empresas</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
};

const buildEmailText = (lead: {
  empresa: string;
  cantidadEmpleados: string;
  nombreContacto: string;
  cargo: string;
  telefono: string;
  mail: string;
  timestamp: string;
}) => {
  const cantidadLabel = CANTIDAD_LABELS[lead.cantidadEmpleados] || lead.cantidadEmpleados;
  return `NUEVO LEAD DE CONVENIO EMPRESAS — RC GYM

Empresa:     ${lead.empresa}
Empleados:   ${cantidadLabel}
Contacto:    ${lead.nombreContacto}
Cargo:       ${lead.cargo || '—'}
Teléfono:    +${lead.telefono}
Mail:        ${lead.mail}
Recibido:    ${lead.timestamp}

Contactar:   https://wa.me/${lead.telefono.replace(/[^\d]/g, '')}

Regla del canal: contactar antes de 60 minutos.

—
Enviado desde rcgym.com.ar/empresas`;
};

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  let body: EmpresasLeadBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot — si está completo, es un bot. Devolvemos 200 (ok) para no
  // darle pistas al atacante, pero NO procesamos el lead.
  if (body.website && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const empresa = sanitize(body.empresa || '');
  const cantidadEmpleados = sanitize(body.cantidadEmpleados || '');
  const nombreContacto = sanitize(body.nombreContacto || '');
  const cargo = sanitize(body.cargo || '');
  const telefono = sanitize(body.telefono || '').replace(/[^\d]/g, '');
  const mail = sanitize(body.mail || '');

  if (empresa.length < 2 || empresa.length > 150) {
    return NextResponse.json({ error: 'Nombre de empresa inválido' }, { status: 422 });
  }
  if (!Object.keys(CANTIDAD_LABELS).includes(cantidadEmpleados)) {
    return NextResponse.json({ error: 'Cantidad de empleados inválida' }, { status: 422 });
  }
  if (nombreContacto.length < 2 || nombreContacto.length > 100) {
    return NextResponse.json({ error: 'Nombre de contacto inválido' }, { status: 422 });
  }
  if (telefono.length < 8 || telefono.length > 15) {
    return NextResponse.json({ error: 'Teléfono inválido' }, { status: 422 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
    return NextResponse.json({ error: 'Mail inválido' }, { status: 422 });
  }

  const timestamp = new Date().toLocaleString('es-AR', {
    timeZone: 'America/Argentina/Tucuman',
    dateStyle: 'short',
    timeStyle: 'short',
  });

  const transporter = getTransporter();
  if (transporter) {
    const lead = { empresa, cantidadEmpleados, nombreContacto, cargo, telefono, mail, timestamp };
    try {
      await transporter.sendMail({
        from: process.env.LEAD_EMAIL_FROM || `RC Empresas <${process.env.SMTP_EMAIL}>`,
        to: process.env.LEAD_EMAIL_TO || 'contacto@rcgym.com.ar',
        replyTo: mail || process.env.LEAD_EMAIL_REPLY_TO || undefined,
        subject: `Nuevo lead de convenio — ${empresa}`,
        text: buildEmailText(lead),
        html: buildEmailHtml(lead),
      });
    } catch (err) {
      // Log el error pero NO bloqueamos al usuario — el equipo igual ve
      // el lead si se cae el mail, porque la respuesta de la API es ok.
      console.error('[empresas-lead] email send failed', err);
    }
  }

  return NextResponse.json({ ok: true });
}
