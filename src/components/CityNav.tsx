import Link from 'next/link'
import { citySections, routes, type CitySection, type AnyCitySection } from '@/lib/routes'

// Re-export CitySection for backwards compatibility
export type { CitySection }

interface CityNavProps {
  citySlug: string
  cityName: string
  currentSection?: AnyCitySection
}

export function CityNav({ citySlug, cityName: _cityName, currentSection }: CityNavProps) {
  return (
    <nav className="border-b border-neutral-200 bg-neutral-50">
      <div className="container-page">
        <div className="flex items-center gap-1 py-2 overflow-x-auto scrollbar-hide">
          {citySections.map((section) => {
            const isActive = section.id === currentSection
            const href = routes.citySection(citySlug, section.id)

            return (
              <Link
                key={section.id}
                href={href}
                className={`
                  px-3 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-colors
                  ${isActive
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
                  }
                `}
              >
                {section.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
