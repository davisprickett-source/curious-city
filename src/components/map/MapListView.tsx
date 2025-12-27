'use client'

import { useState, useEffect, useRef } from 'react'
import { BestOfSpot } from '@/types/content'
import { Header, CityNav } from '@/components'
import { MapSidebar } from './MapSidebar'
import { SpotCard } from './SpotCard'

interface MapListViewProps {
  spots: BestOfSpot[]
  cityName: string
  citySlug: string
  title: string
}

export function MapListView({ spots, cityName, citySlug, title }: MapListViewProps) {
  const [activeSpotIndex, setActiveSpotIndex] = useState(0)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  // Filter spots that have coordinates
  const spotsWithCoords = spots.filter(spot => spot.coordinates)

  // Intersection observer to track which card is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = parseInt(entry.target.getAttribute('data-card-index') || '0')
            setActiveSpotIndex(index)
          }
        })
      },
      { threshold: 0.5, rootMargin: '-100px 0px' }
    )

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [spotsWithCoords.length])

  if (spotsWithCoords.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-neutral-500">No locations available for map view</p>
      </div>
    )
  }

  return (
    <>
      {/* Header and Nav */}
      <Header cityName={cityName} citySlug={citySlug} />
      <CityNav citySlug={citySlug} cityName={cityName} currentSection="coffee-shops" />

      {/* Main content */}
      <div className="flex-1">
        {/* Mobile: Title */}
        <div className="lg:hidden px-6 py-8 bg-gradient-to-b from-neutral-50 to-white">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-3">
            {title}
          </h1>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Discover the finest coffee shops {cityName} has to offer. From artisanal roasters to cozy neighborhood cafes, explore our curated selection of {spotsWithCoords.length} exceptional spots.
          </p>
        </div>

        {/* Desktop: Two-column layout */}
        <div className="lg:grid lg:grid-cols-[1fr_600px] lg:h-[calc(100vh-120px)]">
          {/* Left: Map Sidebar (desktop only) */}
          <div className="hidden lg:block lg:sticky lg:top-[120px] lg:h-[calc(100vh-120px)]">
            <div className="h-full p-8">
              <div className="h-full rounded-2xl overflow-hidden shadow-2xl">
                {/* Title above map */}
                <div className="bg-white p-6 border-b border-neutral-200">
                  <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                    {title}
                  </h1>
                  <p className="text-neutral-700">
                    {spotsWithCoords.length} exceptional spots
                  </p>
                </div>
                {/* Map */}
                <div className="h-[calc(100%-100px)]">
                  <MapSidebar
                    spots={spotsWithCoords}
                    activeSpotIndex={activeSpotIndex}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Scrollable cards */}
          <div className="lg:overflow-y-auto lg:h-[calc(100vh-120px)]">
            <div className="p-6 lg:py-8 space-y-6">
              {spotsWithCoords.map((spot, index) => (
                <div
                  key={`${spot.name}-${index}`}
                  ref={el => {
                    cardRefs.current[index] = el
                  }}
                  data-card-index={index}
                >
                  <SpotCard
                    spot={spot}
                    rank={index + 1}
                    totalSpots={spotsWithCoords.length}
                    isActive={index === activeSpotIndex}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Mini map button (optional - shows map modal) */}
        <div className="lg:hidden fixed bottom-6 right-6 z-30">
          <button
            className="bg-[#c65d3b] hover:bg-[#b54d2d] text-white px-5 py-3 rounded-full shadow-xl font-medium flex items-center gap-2 transition-all hover:scale-105"
            onClick={() => {
              // TODO: Show map modal on mobile
              alert('Map modal coming soon!')
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            View Map
          </button>
        </div>
      </div>
    </>
  )
}
