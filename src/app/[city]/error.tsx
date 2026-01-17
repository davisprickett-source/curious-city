'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function CityError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('City page error:', error)
  }, [error])

  return (
    <main className="flex-1 flex items-center justify-center min-h-screen bg-neutral-50">
      <div className="container-page text-center py-12 px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
          <svg
            className="w-8 h-8 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
          Unable to load city
        </h1>
        <p className="text-neutral-600 mb-6 max-w-md mx-auto">
          We encountered an error loading this city&apos;s content. Please try again or explore a different city.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/cities"
            className="inline-flex items-center justify-center px-4 py-2 bg-white text-neutral-900 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
          >
            Browse all cities
          </Link>
        </div>
      </div>
    </main>
  )
}
