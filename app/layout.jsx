import './globals.css';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cleantex-service.be';

export const metadata = {
  title: 'CleanTex - Dieptereiniging Zetels, Tapijten & Auto-Interieurs',
  description: 'Professionele dieptereiniging van zetels, tapijten, matrassen en auto-interieurs. 500+ tevreden klanten. Snelle en effectieve service in Antwerpen en omgeving.',
  keywords: [
    'dieptereiniging',
    'zetelreiniging',
    'tapijt reiniging',
    'auto-interieur reiniging',
    'matrasreiniging',
    'CleanTex',
    'professionele reiniging',
    'Antwerpen',
  ],
  authors: [{ name: 'CleanTex' }],
  creator: 'CleanTex',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: baseUrl,
    siteName: 'CleanTex',
    title: 'CleanTex - Professionele Dieptereiniging',
    description: 'Diepe reiniging van zetels, tapijten, matrassen en auto-interieurs. 500+ tevreden klanten.',
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'CleanTex Professionele Dieptereiniging',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CleanTex - Professionele Dieptereiniging',
    description: 'Zetelreiniging, tapijt reiniging en auto-interieur reiniging',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'add-your-google-verification-here',
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'nl-BE': `${baseUrl}/nl`,
      'fr-BE': `${baseUrl}/fr`,
    },
  },
  applicationName: 'CleanTex',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'CleanTex',
  },
};

export const viewport = {
  initialScale: 1,
  width: 'device-width',
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/assets/images/ClLogo.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href={baseUrl} />
        
        {/* Apple Web App Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="CleanTex" />
        <link rel="apple-touch-icon" href="/assets/images/logo_clntex.png" />
        
        {/* Microsoft App Meta Tags */}
        <meta name="msapplication-TileColor" content="#00aced9" />
        <meta name="msapplication-TileImage" content="/assets/images/logosite.png" />
        
        {/* Preconnect to external services */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Schema.org structured data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': baseUrl,
              name: 'CleanTex',
              description: 'Professionele dieptereiniging van zetels, tapijten, matrassen en auto-interieurs',
              url: baseUrl,
              telephone: '+32466187627',
              email: 'cleantex.2100@gmail.com',
              image: `${baseUrl}/og-image.jpg`,
              priceRange: '$$$',
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Antwerpen',
                  addressCountry: 'BE'
                },
                {
                  '@type': 'Region',
                  name: 'Vlaanderen'
                }
              ],
              serviceType: [
                'Zetelreiniging',
                'Tapijt reiniging',
                'Matrasreiniging',
                'Auto-interieur reiniging'
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '500',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+32466187627',
                contactType: 'Customer Service',
              },
              sameAs: [
                'https://www.instagram.com/cleann_tex/',
              ],
            }),
          }}
        />
        
        {/* Schema.org structured data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'CleanTex',
              url: baseUrl,
              logo: `${baseUrl}/assets/images/logosite.png`,
              description: 'Professionele dieptereiniging services',
              sameAs: [
                'https://www.instagram.com/cleann_tex/',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+32466187627',
                contactType: 'Customer Support',
              },
            }),
          }}
        />
        
        {/* Schema.org structured data - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Professionele Dieptereiniging',
              description: 'Diepe reiniging van zetels, tapijten, matrassen en auto-interieurs',
              serviceType: 'Cleaning Service',
              provider: {
                '@type': 'LocalBusiness',
                name: 'CleanTex',
                url: baseUrl,
              },
              areaServed: {
                '@type': 'City',
                name: 'Antwerpen',
                addressCountry: 'BE'
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '500',
              },
            }),
          }}
        />
        
        {/* Google Analytics (add your GA ID) */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script> */}
      </head>
      <body>
        <main>{children}</main>
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <div
            style={{
              backgroundColor: '#fff',
              padding: '1rem',
              textAlign: 'center',
              color: '#666',
            }}
          >
            Certaines fonctionnalités peuvent ne pas fonctionner sans JavaScript.
            Merci d'activer JavaScript pour une meilleure expérience.
          </div>
        </noscript>
      </body>
    </html>
  );
}
