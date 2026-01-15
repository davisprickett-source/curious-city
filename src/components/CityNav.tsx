import Link from 'next/link'
import { citySections, routes, type CitySection, type AnyCitySection } from '@/lib/routes'

// Re-export CitySection for backwards compatibility
export type { CitySection }

interface CityNavProps {
  citySlug: string
  cityName: string
  currentSection?: AnyCitySection
}

export function CityNav({ citySlug, currentSection }: CityNavProps) {
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
                  group px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors !min-h-0 !min-w-0
                  ${isActive
                    ? 'text-accent-600'
                    : 'text-neutral-600 hover:text-neutral-900'
                  }
                `}
              >
                <span className="relative inline-block">
                  {section.label}
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent-600 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  )}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
