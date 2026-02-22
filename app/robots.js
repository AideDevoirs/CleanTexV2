export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cleantex.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/.well-known/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
