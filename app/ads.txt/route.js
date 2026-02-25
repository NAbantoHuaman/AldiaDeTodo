export async function GET() {
  const adsTxt = `google.com, pub-5266241351956416, DIRECT, f08c47fec0942fa0`;

  return new Response(adsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
