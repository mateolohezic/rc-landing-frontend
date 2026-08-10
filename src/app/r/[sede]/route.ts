import { NextRequest, NextResponse } from 'next/server';

/**
 * Redirect de reseñas por sede: rcgym.com.ar/r/{sede} → Google Maps.
 *
 * Los QR impresos (mostrador, vestuario, tarjetas) apuntan SIEMPRE acá y nunca
 * a Google directo. Si Google cambia el link o conseguimos los Place ID, se
 * edita este archivo y los carteles ya impresos siguen funcionando.
 *
 * Ver campanas/resenas/resenas.md en el repo de marketing.
 */

interface Sede {
  /** Nombre + dirección, para armar la búsqueda de Maps mientras no haya Place ID */
  query: string;
  /**
   * Place ID de la ficha de Google. Cuando está cargado, el link abre el
   * formulario de reseña directo (un solo toque). Se saca de:
   * https://developers.google.com/maps/documentation/places/web-service/place-id
   */
  placeId?: string;
}

const SEDES: Record<string, Sede> = {
  'tafi-viejo': {
    query: 'RC Gym Tafí Viejo, Av. Constitución 2400, Tafí Viejo, Tucumán',
  },
  'barrio-sur': {
    query: 'RC Gym Barrio Sur, 9 de Julio 676, San Miguel de Tucumán',
  },
  'barrio-norte': {
    query: 'RC Gym Barrio Norte, Junín 567, San Miguel de Tucumán',
  },
  terrazas: {
    query: 'RC Gym Terrazas, Av. Juan Domingo Perón 2400, Yerba Buena, Tucumán',
  },
  aconquija: {
    query: 'RC Gym Aconquija, Av. Aconquija 2122, Yerba Buena, Tucumán',
  },
  epico: {
    query: 'RC Gym Épico, San Luis y Güemes, Yerba Buena, Tucumán',
  },
};

/**
 * Alias tolerados. La sede se llama Aconquija, pero el plan de reseñas la
 * nombraba "Yerba Buena"; si quedó algún QR o link viejo, no se rompe.
 */
const ALIAS: Record<string, string> = {
  'yerba-buena': 'aconquija',
  tafi: 'tafi-viejo',
  épico: 'epico',
};

const BUSQUEDA_GENERICA = 'RC Gym, Tucumán';

const linkDeMaps = (sede: Sede): string => {
  // Con Place ID: abre el formulario de reseña directo.
  if (sede.placeId) {
    return `https://search.google.com/local/writereview?placeid=${encodeURIComponent(sede.placeId)}`;
  }
  // Sin Place ID: cae en la ficha de la sede, desde donde se puede reseñar.
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sede.query)}`;
};

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ sede: string }> },
) {
  const { sede: slugCrudo } = await params;
  const slug = decodeURIComponent(slugCrudo).toLowerCase().trim();
  const sede = SEDES[slug] ?? SEDES[ALIAS[slug]];

  const destino = sede
    ? linkDeMaps(sede)
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSQUEDA_GENERICA)}`;

  // 302 + no-store a propósito: el destino va a cambiar cuando carguemos los
  // Place ID. Con un 301 el navegador se guardaría el destino viejo para
  // siempre y el QR impreso quedaría apuntando mal sin forma de arreglarlo.
  return NextResponse.redirect(destino, {
    status: 302,
    headers: { 'Cache-Control': 'no-store' },
  });
}
