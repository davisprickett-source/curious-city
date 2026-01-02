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
}

export function ScrollyMapView({
  spots,
  cityName,
  title,
  intro,
  markerType = 'coffee'
}: ScrollyMapViewProps) {
  const [activeSpotIndex, setActiveSpotIndex] = useState(-1) // -1 = intro
  const [, setIsMapLoaded] = useState(false)

  return (
    <div className="relative">
      {/* Fixed background map (full screen, behind content) */}
      <div className="fixed inset-0 z-0">
        <ScrollyMap
          spots={spots}
          activeSpotIndex={activeSpotIndex}
          markerType={markerType}
          onMapLoaded={setIsMapLoaded}
        />
      </div>

      {/* Scrollable content (floats on top of map) */}
      <div className="relative z-10">
        <ScrollyContent
          spots={spots}
          cityName={cityName}
          title={title}
          intro={intro}
          onActiveIndexChange={setActiveSpotIndex}
        />
      </div>
    </div>
  )
}
