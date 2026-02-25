// Forzar renderizado dinámico para que Vercel nunca cachee esta ruta
export const dynamic = 'force-static';
export const revalidate = false; // Cachear indefinidamente como contenido estático

export async function GET() {
  const adsTxt = `google.com, pub-5266241351956416, DIRECT, f08c47fec0942fa0`;

  return new Response(adsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      'X-Robots-Tag': 'noindex',
    },
  });
}
