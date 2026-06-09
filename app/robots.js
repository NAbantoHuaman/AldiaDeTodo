export default function robots() {
  return {
    rules: [
      {
        // AdSense crawler — block ALL non-original content paths
        userAgent: 'Mediapartners-Google',
        allow: ['/', '/guias/', '/articulos/'],
        disallow: ['/noticias/', '/api/', '/data/', '/redaccion/', '/horoscopo', '/deportes', '/tiempo', '/finanzas'],
      },
      {
        userAgent: '*',
        allow: ['/', '/guias/', '/articulos/'],
        disallow: ['/noticias/', '/api/', '/data/', '/redaccion/', '/horoscopo', '/deportes', '/tiempo', '/finanzas'],
      },
    ],
    sitemap: 'https://aldiadetodo.com/sitemap.xml',
  };
}
