'use client'

import { useState } from 'react'
import { BestOfSpot } from '@/types/content'
import { ScrollyMap } from './ScrollyMap'
import { ScrollyContent } from './ScrollyContent'

interface ScrollyMapViewProps {
  spots: BestOfSpot[]
  cityName: string
  title: string
  intro?: {
    text: string
    attribution?: string
  }
  markerType?: 'coffee' | 'cocktail' | 'restaurant' | 'default'
  showBanner?: boolean
  bannerImage?: string
  /** Current category to exclude from bottom links */
  currentCategory?: string
}

export function ScrollyMapView({
  spots,
  cityName,
  title,
  intro,
  markerType = 'coffee',
  showBanner = false,
  bannerImage,
  currentCategory
}: ScrollyMapViewProps) {
  const [activeSpotIndex, setActiveSpotIndex] = useState(-1) // -1 = intro/banner
  const [, setIsMapLoaded] = useState(false)
  const [scrollToIndex, setScrollToIndex] = useState<number | null>(null)

  return (
    <div className="relative">
      {/* Fixed background map (starts below nav) */}
      <div className="fixed inset-0 z-0" style={{ top: '60px' }}>
        <ScrollyMap
          spots={spots}
          activeSpotIndex={activeSpotIndex}
          markerType={markerType}
          onMapLoaded={setIsMapLoaded}
          onMarkerClick={(index) => setScrollToIndex(index)}
        />
      </div>

      {/* Scrollable content (floats on top of map) */}
      <div className="relative z-10">
        <ScrollyContent
          spots={spots}
          cityName={cityName}
          title={title}
          intro={intro}
          showBanner={showBanner}
          bannerImage={bannerImage}
          onActiveIndexChange={setActiveSpotIndex}
          scrollToIndex={scrollToIndex}
          onScrollComplete={() => setScrollToIndex(null)}
          currentCategory={currentCategory}
        />
      </div>
    </div>
  )
}
