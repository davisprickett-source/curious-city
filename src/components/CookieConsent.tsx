'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const CONSENT_COOKIE_NAME = 'cookie-consent'
const CONSENT_DURATION_DAYS = 365

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = document.cookie
      .split('; ')
      .find((row) => row.startsWith(CONSENT_COOKIE_NAME))

    if (!hasConsented) {
      // Small delay to avoid layout shift on initial load
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    // Set consent cookie
    const expires = new Date()
    expires.setDate(expires.getDate() + CONSENT_DURATION_DAYS)
    document.cookie = `${CONSENT_COOKIE_NAME}=accepted; expires=${expires.toUTCString()}; path=/; SameSite=Lax`
    setShowBanner(false)
  }

  const handleDecline = () => {
    // Set declined cookie (still need to remember their choice)
    const expires = new Date()
    expires.setDate(expires.getDate() + CONSENT_DURATION_DAYS)
    document.cookie = `${CONSENT_COOKIE_NAME}=declined; expires=${expires.toUTCString()}; path=/; SameSite=Lax`
    setShowBanner(false)

    // Optionally disable analytics here
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      })
    }
  }

  if (!showBanner) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-neutral-200 shadow-lg"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="container-page">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h2 id="cookie-consent-title" className="sr-only">
              Cookie Consent
            </h2>
            <p id="cookie-consent-description" className="text-sm text-neutral-600 ui-sans">
              We use cookies to enhance your experience, analyze site traffic, and serve personalized ads.
              By clicking &quot;Accept&quot;, you consent to our use of cookies.{' '}
              <Link href="/privacy" className="text-accent-600 hover:text-accent-700 underline">
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-neutral-600 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors ui-sans"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors ui-sans"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Add gtag type for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, string>
    ) => void
  }
}
