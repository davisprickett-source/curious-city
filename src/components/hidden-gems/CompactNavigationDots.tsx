'use client'

import { useRef, useEffect } from 'react'
import { getCategoryStyle } from './MobileHiddenGemsLayout'

interface HiddenGemItem {
  id: string
  name: string
  category?: string
}

interface CompactNavigationDotsProps {
  gems: HiddenGemItem[]
  activeIndex: number
  onNavigate: (index: number) => void
}

export function CompactNavigationDots({ gems, activeIndex, onNavigate }: CompactNavigationDotsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll active dot into view
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const activeDot = container.children[activeIndex] as HTMLElement
    if (activeDot) {
      activeDot.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [activeIndex])

  return (
    <div className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 z-[100]">
      <div
        ref={scrollContainerRef}
        className="flex flex-col gap-1.5 max-h-[80vh] overflow-y-auto scrollbar-hide py-4 px-2"
      >
        {gems.map((gem, index) => {
          const isActive = activeIndex === index
          const categoryStyles = gem.category ? getCategoryStyle(gem.category) : getCategoryStyle('default')

          return (
            <button
              key={gem.id}
              onClick={() => onNavigate(index)}
              className="group relative"
              aria-label={`Jump to ${gem.name}`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'scale-150 shadow-lg'
                    : 'bg-neutral-400 hover:bg-neutral-600 hover:scale-125'
                }`}
                style={{
                  backgroundColor: isActive ? categoryStyles.dotColor : undefined,
                }}
              />

              {/* Tooltip - appears on hover with higher z-index */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[110]">
                <div className="bg-neutral-900/95 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap">
                  {index + 1}. {gem.name}
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
