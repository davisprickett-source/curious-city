'use client'

import { useState, useEffect, useRef } from 'react'
import { BestOfSpot } from '@/types/content'
import { Header, CityNav } from '@/components'
import { InteractiveMap } from './InteractiveMap'
import { SpotDetailCard } from './SpotDetailCard'
import { MapControls } from './MapControls'

interface MapExplorerProps {
  spots: BestOfSpot[]
  cityName: string
  citySlug: string
  title: string
}

export function MapExplorer({ spots, cityName, citySlug, title }: MapExplorerProps) {
  const [activeSpotIndex, setActiveSpotIndex] = useState(0)
  const [viewMode, setViewMode] = useState<'explore' | 'overview'>('overview') // Start with overview
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showCard, setShowCard] = useState(false) // Start with card hidden
  const [showIntro, setShowIntro] = useState(true) // Show intro initially
  const spotRefs = useRef<(HTMLElement | null)[]>([])
  const introRef = useRef<HTMLElement | null>(null)

  // Filter spots that have coordinates
  const spotsWithCoords = spots.filter(spot => spot.coordinates)

  useEffect(() => {
    if (spotsWithCoords.length === 0) return

    // IntersectionObserver for scroll detection
    const observer = new IntersectionObserver(
      (entries) => {
        if (isTransitioning) return // Prevent updates during transitions

        entries.forEach(entry => {
          // Check if it's the intro section
          if (entry.target.getAttribute('data-section') === 'intro') {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setShowIntro(true)
              setShowCard(false)
            } else {
              setShowIntro(false)
            }
            return
          }

          // Handle spot sections
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = parseInt(entry.target.getAttribute('data-spot-index') || '0')
            // Switch to explore mode when scrolling to first spot
            if (viewMode === 'overview') {
              setViewMode('explore')
            }
            if (index !== activeSpotIndex) {
              setActiveSpotIndex(index)
              setShowCard(true)
              setShowIntro(false)
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    // Observe intro section
    if (introRef.current) {
      observer.observe(introRef.current)
    }

    // Observe all spot sections
    spotRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [spotsWithCoords.length, isTransitioning, activeSpotIndex, viewMode])

  const handleSpotChange = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= spotsWithCoords.length) return

    setActiveSpotIndex(newIndex)

    // Scroll to corresponding section
    spotRefs.current[newIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }

  const handleViewAll = () => {
    setViewMode(viewMode === 'overview' ? 'explore' : 'overview')
  }

  const handleTransitionStart = () => {
    setIsTransitioning(true)
  }

  const handleTransitionEnd = () => {
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const handleMarkerClick = (index: number) => {
    if (viewMode === 'overview') {
      setViewMode('explore')
    }
    setShowCard(true) // Always show card when marker clicked
    handleSpotChange(index)
  }

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
      <Header cityName={cityName} />
      <CityNav citySlug={citySlug} cityName={cityName} currentSection="coffee-shops" />

      <div className="relative min-h-screen overflow-hidden">
        {/* Fixed map background */}
        <div className="fixed inset-0 top-0 z-0 w-full h-full">
          <InteractiveMap
            spots={spotsWithCoords}
            activeSpotIndex={activeSpotIndex}
            viewMode={viewMode}
            onTransitionStart={handleTransitionStart}
            onTransitionEnd={handleTransitionEnd}
            onMarkerClick={handleMarkerClick}
          />
        </div>

        {/* Map controls overlay */}
        <MapControls
          activeSpotIndex={activeSpotIndex}
          totalSpots={spotsWithCoords.length}
          viewMode={viewMode}
          onViewAll={handleViewAll}
          onNext={() => handleSpotChange(activeSpotIndex + 1)}
          onPrev={() => handleSpotChange(activeSpotIndex - 1)}
          onGoToSpot={handleSpotChange}
        />

        {/* Detail card - centered, large on desktop */}
        {showCard && (
          <SpotDetailCard
            spot={spotsWithCoords[activeSpotIndex]}
            rank={activeSpotIndex + 1}
            totalSpots={spotsWithCoords.length}
            onNext={() => handleSpotChange(activeSpotIndex + 1)}
            onPrev={() => handleSpotChange(activeSpotIndex - 1)}
            onClose={() => setShowCard(false)}
          />
        )}

        {/* Intro title overlay */}
        {showIntro && (
          <div className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none px-6">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-8">
                Discover the finest coffee shops {cityName} has to offer. From artisanal roasters to cozy neighborhood cafes, explore our curated selection of {spotsWithCoords.length} exceptional spots.
              </p>
              <div className="flex items-center justify-center gap-2 text-neutral-500">
                <span className="text-sm font-medium">Scroll to explore</span>
                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Invisible scroll sections for IntersectionObserver */}
        <div className="relative z-10 pointer-events-none">
          {/* Intro section */}
          <section
            ref={introRef}
            data-section="intro"
            className="h-screen"
            aria-label="Introduction section"
          />

          {/* Spot sections */}
          {spotsWithCoords.map((spot, index) => (
            <section
              key={`${spot.name}-${index}`}
              ref={el => {
                spotRefs.current[index] = el
              }}
              data-spot-index={index}
              className="h-screen"
              aria-label={`${spot.name} section`}
            />
          ))}
        </div>
      </div>
    </>
  )
}
