import Link from 'next/link'
import { getAllCities } from '@/data/cities'

interface RelatedCitiesProps {
  currentCitySlug?: string
  maxCities?: number
}

export function RelatedCities({ currentCitySlug, maxCities = 3 }: RelatedCitiesProps) {
  const allCities = getAllCities()

  // Filter out current city and get random selection
  const otherCities = allCities.filter((city) => city.slug !== currentCitySlug)

  // Shuffle and take maxCities
  const shuffled = otherCities.sort(() => 0.5 - Math.random())
  const selectedCities = shuffled.slice(0, maxCities)

  if (selectedCities.length === 0) return null

  return (
    <section className="mt-16 pt-10 border-t border-neutral-200">
      <h2 className="eyebrow text-neutral-500 mb-6">Explore Other Cities</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {selectedCities.map((city) => (
          <Link
            key={city.slug}
            href={`/${city.slug}`}
            className="group block p-5 bg-white rounded-xl border border-neutral-200 hover:border-accent-300 hover:shadow-md card-hover"
          >
            <span className="font-semibold text-neutral-900 group-hover:text-accent-600 transition-colors ui-sans">
              {city.name}
            </span>
            {city.tagline && (
              <p className="text-sm text-neutral-500 mt-1 line-clamp-2">
                {city.tagline}
              </p>
            )}
            <span className="inline-flex items-center gap-1 mt-3 text-sm text-accent-600 opacity-0 group-hover:opacity-100 transition-opacity">
              Explore
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
