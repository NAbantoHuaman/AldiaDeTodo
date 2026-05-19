export default function robots() {
  return {
    rules: [
      {
        userAgent: 'Mediapartners-Google',
        allow: '/',
        disallow: ['/noticias/', '/api/', '/data/', '/redaccion/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/noticias/', '/api/', '/data/', '/redaccion/'],
      },
    ],
    sitemap: 'https://aldiadetodo.com/sitemap.xml',
  };
}
