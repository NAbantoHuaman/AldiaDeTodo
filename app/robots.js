export default function robots() {
  return {
    rules: [
      {
        userAgent: 'Mediapartners-Google',
        disallow: [],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/data/', '/redaccion/'],
      },
    ],
    sitemap: 'https://aldiadetodo.com/sitemap.xml',
  };
}
