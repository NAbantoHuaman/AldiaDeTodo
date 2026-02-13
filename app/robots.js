export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/data/', '/redaccion/'],
      },
    ],
    sitemap: 'https://aldiadetodo.com/sitemap.xml',
  };
}
