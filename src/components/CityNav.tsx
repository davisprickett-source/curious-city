import Link from 'next/link'

export type CitySection = 'essay' | 'this-week' | 'scenes' | 'coffee-shops' | 'bars' | 'restaurants' | 'hidden-gems' | 'dark-history' | 'lost-and-loved' | 'curiosities'

interface CityNavProps {
  citySlug: string
  cityName: string
  currentSection?: CitySection
}

const sections: { id: CitySection; label: string; path: string }[] = [
  { id: 'essay', label: 'Essay', path: '' },
  { id: 'this-week', label: 'This Week', path: '/this-week' },
  { id: 'scenes', label: 'Scenes', path: '/scenes' },
  { id: 'coffee-shops', label: 'Coffee', path: '/coffee-shops' },
  { id: 'bars', label: 'Bars', path: '/bars' },
  { id: 'restaurants', label: 'Restaurants', path: '/restaurants' },
  { id: 'hidden-gems', label: 'Hidden Gems', path: '/hidden-gems' },
  { id: 'dark-history', label: 'Dark History', path: '/dark-history' },
  { id: 'lost-and-loved', label: 'Lost & Loved', path: '/lost-and-loved' },
  { id: 'curiosities', label: 'Curiosities', path: '/curiosities' },
]

export function CityNav({ citySlug, cityName, currentSection }: CityNavProps) {
  return (
    <nav className="border-b border-neutral-200 bg-neutral-50">
      <div className="container-page">
        <div className="flex items-center gap-1 py-2 overflow-x-auto scrollbar-hide">
          {sections.map((section) => {
            const isActive = section.id === currentSection
            const href = `/${citySlug}${section.path}`

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
