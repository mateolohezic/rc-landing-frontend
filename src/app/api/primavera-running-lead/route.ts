import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

interface PrimaveraLeadBody {
  nombre?: string;
  whatsapp?: string;
  email?: string;
  actividades?: string[];
  soloAfter?: boolean;
  acompanantes?: string;
  socio?: 'si' | 'no' | '';
  consentMarcas?: boolean;
  actividadResumen?: string;
  // Honeypot
  website?: string;
}

// Google Form "Primavera Running — Inscripciones" (respuestas caen en su Sheet vinculado).
// El usuario nunca ve este formulario: se manda server-to-server, así no hay problema de CORS
// y sí podemos confirmar si la respuesta se guardó de verdad.
const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSd4av6iz9zUJKbi5O1-Uwuondw9t09_nXK3kfkpkHBPc_pvug/formResponse';

const GOOGLE_FORM_ENTRIES = {
  nombre: 'entry.1543490597',
  whatsapp: 'entry.29057673',
  email: 'entry.345729282',
  actividad: 'entry.1294372018', // checkbox: puede repetirse (Cycling / Running / Solo el after)
  acompanantes: 'entry.1714603326',
  socio: 'entry.1369380821', // Sí / No
  consentMarcas: 'entry.1343126151', // Sí / No
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
  const real = req.headers.get('x-real-ip');
  if (real) return real;
  return 'unknown';
};

// Solo saca saltos de línea/tabs (para no romper el POST al Google Form). No toca espacios ni guiones.
const sanitize = (s: string): string => s.replace(/[\r\n\t]/g, ' ').trim().slice(0, 200);

const VALID_ACTIVIDADES = ['running', 'spinning', 'funcional'] as const;

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  let body: PrimaveraLeadBody;
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
  const socio = sanitize(body.socio || '');
  const acompanantes = sanitize(body.acompanantes || '').replace(/[^\d]/g, '').slice(0, 2);
  const actividades = Array.isArray(body.actividades) ? body.actividades.map((a) => sanitize(a)) : [];
  const soloAfter = body.soloAfter === true;
  const consent = body.consentMarcas === true;

  if (nombre.length < 2 || nombre.length > 100) {
    return NextResponse.json({ error: 'Nombre inválido' }, { status: 422 });
  }
  if (whatsapp.length < 8 || whatsapp.length > 15) {
    return NextResponse.json({ error: 'WhatsApp inválido' }, { status: 422 });
  }
  if (
    !soloAfter &&
    (actividades.length === 0 ||
      !actividades.every((a) => VALID_ACTIVIDADES.includes(a as (typeof VALID_ACTIVIDADES)[number])))
  ) {
    return NextResponse.json({ error: 'Actividad inválida' }, { status: 422 });
  }
  if (socio && socio !== 'si' && socio !== 'no') {
    return NextResponse.json({ error: 'Socio inválido' }, { status: 422 });
  }

  // Opciones de actividad tal como están cargadas como opciones del checkbox en el Google Form.
  // El Google Form dejó la opción vieja "Cycling" tal cual (no se renombró a "Spinning"),
  // así que mandamos "Cycling" para esa actividad aunque en la landing diga "Spinning".
  const actividadOpciones: string[] = [];
  if (soloAfter) {
    actividadOpciones.push('Solo el after');
  } else {
    if (actividades.includes('running')) actividadOpciones.push('Running');
    if (actividades.includes('spinning')) actividadOpciones.push('Cycling');
    if (actividades.includes('funcional')) actividadOpciones.push('Funcional');
  }

  const params = new URLSearchParams();
  params.append(GOOGLE_FORM_ENTRIES.nombre, nombre);
  params.append(GOOGLE_FORM_ENTRIES.whatsapp, whatsapp);
  if (email) params.append(GOOGLE_FORM_ENTRIES.email, email);
  for (const opcion of actividadOpciones) params.append(GOOGLE_FORM_ENTRIES.actividad, opcion);
  params.append(GOOGLE_FORM_ENTRIES.acompanantes, acompanantes || '0');
  if (socio) params.append(GOOGLE_FORM_ENTRIES.socio, socio === 'si' ? 'Sí' : 'No');
  params.append(GOOGLE_FORM_ENTRIES.consentMarcas, consent ? 'Sí' : 'No');

  try {
    const res = await fetch(GOOGLE_FORM_ACTION, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });
    if (!res.ok) {
      console.error('[primavera-running-lead] google form respondió', res.status);
      return NextResponse.json({ error: 'No se pudo guardar la inscripción' }, { status: 502 });
    }
  } catch (err) {
    console.error('[primavera-running-lead] google form fetch failed', err);
    return NextResponse.json({ error: 'No se pudo guardar la inscripción' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
