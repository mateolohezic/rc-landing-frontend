import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongo';
import { JUEGOS } from '@/components/halloween-2026/votacion';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Resultados de la votación. Sin contraseña a pedido (es un juego de la fiesta); la página pública nunca los muestra.
export async function GET() {
  try {
    const db = await getDb();
    const filas = await db.collection('votos').aggregate<{ _id: string; n: number }>([{ $group: { _id: '$juego', n: { $sum: 1 } } }]).toArray();
    const porId = new Map(filas.map((f) => [f._id, f.n]));
    const resultados = JUEGOS.map((j) => ({ id: j.id, nombre: j.nombre, votos: porId.get(j.id) ?? 0 })).sort((a, b) => b.votos - a.votos);
    const total = resultados.reduce((s, r) => s + r.votos, 0);
    const max = resultados[0]?.votos ?? 0;
    const ganadores = max > 0 ? resultados.filter((r) => r.votos === max) : [];
    return NextResponse.json({ total, resultados, ganadores }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (err) {
    console.error('[halloween-votacion] resultados falló', err);
    return NextResponse.json({ error: 'No se pudo leer' }, { status: 503, headers: { 'Cache-Control': 'no-store' } });
  }
}
