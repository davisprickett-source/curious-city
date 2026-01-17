import Link from 'next/link'
import { Header } from '@/components'
import { CITY_METADATA } from '@/data/cities'

// Featured cities to suggest on 404
const FEATURED_CITIES = CITY_METADATA.slice(0, 6)

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="flex-1 flex items-center justify-center bg-neutral-50">
        <div className="container-page text-center py-12 px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100 mb-6">
            <svg
              className="w-8 h-8 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
            Page not found
          </h1>
          <p className="text-neutral-600 mb-8 max-w-md mx-auto">
            We couldn&apos;t find what you&apos;re looking for. Try exploring one of our featured cities instead.
          </p>

          <div className="mb-8">
            <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
              Explore Cities
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {FEATURED_CITIES.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}`}
                  className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 transition-colors"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Go to homepage
          </Link>
        </div>
      </main>
    </>
  )
}
