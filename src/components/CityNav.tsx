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
                  relative px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors
                  ${isActive
                    ? 'text-accent-600'
                    : 'text-neutral-600 hover:text-neutral-900 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-accent-600 before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100'
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
