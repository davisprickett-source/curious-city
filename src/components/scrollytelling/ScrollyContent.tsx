'use client'

import { BestOfSpot } from '@/types/content'
import { ScrollySection } from './ScrollySection'
import { ScrollySpotCard } from './ScrollySpotCard'

interface ScrollyContentProps {
  spots: BestOfSpot[]
  cityName: string
  title: string
  intro?: {
    text: string
    attribution?: string
  }
  onActiveIndexChange: (index: number) => void
}

export function ScrollyContent({
  spots,
  cityName,
  title,
  intro,
  onActiveIndexChange
}: ScrollyContentProps) {
  return (
    <div className="relative">
      {/* Intro Section */}
      <ScrollySection
        index={-1}
        onInView={onActiveIndexChange}
        className="bg-neutral-900/80 backdrop-blur-sm"
      >
        <div className="max-w-4xl text-center space-y-6 px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
            {title}
          </h1>
          {intro && (
            <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
              {intro.text}
            </p>
          )}
          <p className="text-neutral-300 text-base md:text-lg">
            Scroll to explore {spots.length} exceptional coffee shops
          </p>
        </div>
      </ScrollySection>

      {/* Spot Sections */}
      {spots.map((spot, index) => (
        <ScrollySection
          key={`${spot.name}-${index}`}
          index={index}
          onInView={onActiveIndexChange}
        >
          <ScrollySpotCard
            spot={spot}
            rank={index + 1}
            totalSpots={spots.length}
          />
        </ScrollySection>
      ))}

      {/* Outro Section */}
      <ScrollySection
        index={spots.length}
        onInView={onActiveIndexChange}
        className="bg-neutral-900/80 backdrop-blur-sm"
      >
        <div className="max-w-4xl text-center space-y-6 px-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl">
            Explore More {cityName}
          </h2>
          <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed drop-shadow-lg">
            Discover the best bars, restaurants, and hidden gems across the city.
          </p>
        </div>
      </ScrollySection>
    </div>
  )
}
