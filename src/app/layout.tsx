import type { Metadata, Viewport } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'
import { AdProvider } from '@/components/ads/AdProvider'
import { SkipToContent } from '@/components/SkipToContent'
import { CookieConsent } from '@/components/CookieConsent'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

// DM Sans - Clean, modern sans-serif for body text
// Highly readable, geometric, professional
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// Fraunces - Old-style soft serif for headings
// Has a quirky, curious, vintage newspaper feel perfect for "Curious City"
// The "wonk" in Fraunces adds character and warmth
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://thecurious.city'),
  title: 'Curious City - Discover Hidden Gems, Dark History & Secret Stories',
  description: 'Explore the untold stories, hidden gems, dark history, and local secrets of cities across America. Your guide to the curious side of urban life.',
  keywords: ['city guides', 'hidden gems', 'dark history', 'local secrets', 'urban exploration', 'city stories', 'travel guides'],
  authors: [{ name: 'Curious City' }],
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thecurious.city',
    siteName: 'Curious City',
    title: 'Curious City - Discover Hidden Gems, Dark History & Secret Stories',
    description: 'Explore the untold stories, hidden gems, dark history, and local secrets of cities across America.',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Curious City',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curious City - Discover Hidden Gems, Dark History & Secret Stories',
    description: 'Explore the untold stories, hidden gems, dark history, and local secrets of cities across America.',
    images: ['/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID

  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <head>
        <meta name="ahrefs-site-verification" content="377248d64559ef60f6c204a1fac00117e8ff6ab7018ba40e0d883c4bc71c84cb" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Suppress MetaMask errors
              window.addEventListener('error', function(e) {
                if (e.message && e.message.includes('MetaMask')) {
                  e.preventDefault();
                  e.stopPropagation();
                  return false;
                }
              }, true);

              window.addEventListener('unhandledrejection', function(e) {
                if (e.reason && e.reason.message && e.reason.message.includes('MetaMask')) {
                  e.preventDefault();
                  e.stopPropagation();
                  return false;
                }
              });
            `,
          }}
        />
      </head>
      <body>
        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "v2muutfl4p");
            `,
          }}
        />

        {/* Ahrefs Analytics */}
        <Script
          id="ahrefs-analytics"
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="4c2N7INVEXY/mfE3hAxgnQ"
          strategy="afterInteractive"
        />

        {/* Google AdSense */}
        {ADSENSE_CLIENT_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}

        <SkipToContent />
        <AdProvider>
          <SmoothScrollProvider>
            <div id="main-content" className="min-h-screen flex flex-col">
              {children}
            </div>
          </SmoothScrollProvider>
        </AdProvider>
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
