import type { Metadata, Viewport } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Curious City',
  description: 'Local content for curious people',
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
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <head>
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
        <SmoothScrollProvider>
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
