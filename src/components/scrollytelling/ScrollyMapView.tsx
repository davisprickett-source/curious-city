'use client'

import { useState } from 'react'
import { BestOfSpot } from '@/types/content'
import { ScrollyMap } from './ScrollyMap'
import { ScrollyContent } from './ScrollyContent'
import { type ExploreLink } from './ExploreCard'
import { MapSidebarAd } from '@/components/ads/desktop/MapSidebarAd'
import { StickyBottomAd } from '@/components/ads/mobile/StickyBottomAd'

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
  /** Explore links with thumbnails for the bottom section */
  exploreLinks?: ExploreLink[]
  /** Footer component to render at the end of scrollable content */
  footer?: React.ReactNode
  url: string // Add url prop
}

export function ScrollyMapView({
  spots,
  cityName,
  title,
  intro,
  markerType = 'coffee',
  showBanner = false,
  bannerImage,
  currentCategory,
  exploreLinks,
  footer,
  url
}: ScrollyMapViewProps) {
  const [activeSpotIndex, setActiveSpotIndex] = useState(-1) // -1 = intro/banner
  const [, setIsMapLoaded] = useState(false)
  const [scrollToIndex, setScrollToIndex] = useState<number | null>(null)

  // Create a page ID for ad targeting
  const pageId = `${cityName.toLowerCase().replace(/\s+/g, '-')}-${markerType}`

  return (
    <div className="relative">
      {/* Fixed background map (full screen on mobile where nav scrolls, below nav on desktop) */}
      <div className="fixed inset-0 z-0 sm:top-[60px]">
        <ScrollyMap
          spots={spots}
          activeSpotIndex={activeSpotIndex}
          markerType={markerType}
          onMapLoaded={setIsMapLoaded}
          onMarkerClick={(index) => setScrollToIndex(index)}
        />
      </div>

      {/* Desktop sidebar ad (visible on xl+ screens, positioned over map) */}
      <MapSidebarAd
        pageId={pageId}
        targeting={{ city: cityName, category: markerType }}
      />

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
          exploreLinks={exploreLinks}
          footer={footer}
          url={url} // Pass url prop down
        />
      </div>

      {/* Mobile sticky bottom ad */}
      <StickyBottomAd
        pageId={pageId}
        targeting={{ city: cityName, category: markerType }}
      />
    </div>
  )
}
