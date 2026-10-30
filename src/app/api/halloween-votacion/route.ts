import { randomUUID } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/mongo';
import { COOKIE_DIAS, COOKIE_VOTANTE, JUEGOS } from '@/components/halloween-2026/votacion';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const noCache = { 'Cache-Control': 'no-store' };
const cookieOpts = { httpOnly: true, sameSite: 'lax' as const, secure: process.env.NODE_ENV === 'production', path: '/', maxAge: COOKIE_DIAS * 86400 };

const votante = (req: NextRequest) => {
  const c = req.cookies.get(COOKIE_VOTANTE)?.value;
  return c && UUID_RE.test(c) ? c : null;
};

// ¿Este dispositivo ya votó? Lo usa la página al cargar.
export async function GET(req: NextRequest) {
  const vid = votante(req);
  if (!vid) return NextResponse.json({ voto: false }, { headers: noCache });
  try {
    const db = await getDb();
    const doc = await db.collection<{ _id: string; juego: string }>('votos').findOne({ _id: vid });
    return NextResponse.json({ voto: !!doc, juego: doc?.juego ?? null }, { headers: noCache });
  } catch (err) {
    console.error('[halloween-votacion] estado falló', err);
    return NextResponse.json({ voto: false, error: 'No se pudo consultar' }, { status: 503, headers: noCache });
  }
}

// Un voto por dispositivo: el id del votante (cookie) es la clave del documento, así que un segundo voto se rechaza solo.
export async function POST(req: NextRequest) {
  let body: { juego?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Pedido inválido' }, { status: 400 });
  }
  const juego = String(body.juego || '');
  if (!JUEGOS.some((j) => j.id === juego)) {
    return NextResponse.json({ error: 'Opción inválida' }, { status: 422 });
  }
  const vid = votante(req) || randomUUID();
  try {
    const db = await getDb();
    await db.collection<{ _id: string; juego: string; ts: Date }>('votos').insertOne({ _id: vid, juego, ts: new Date() });
  } catch (err) {
    if ((err as { code?: number }).code === 11000) {
      const res = NextResponse.json({ error: 'ya_voto' }, { status: 409, headers: noCache });
      res.cookies.set(COOKIE_VOTANTE, vid, cookieOpts);
      return res;
    }
    console.error('[halloween-votacion] voto falló', err);
    return NextResponse.json({ error: 'No se pudo guardar el voto' }, { status: 503, headers: noCache });
  }
  const res = NextResponse.json({ ok: true }, { headers: noCache });
  res.cookies.set(COOKIE_VOTANTE, vid, cookieOpts);
  return res;
}
