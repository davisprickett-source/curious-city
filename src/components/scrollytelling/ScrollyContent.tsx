'use client'

import { useRef, useEffect } from 'react'
import { BestOfSpot } from '@/types/content'
import { ScrollySection } from './ScrollySection'
import { ScrollySpotCard } from './ScrollySpotCard'
import { UniversalAd } from '@/components/ads/UniversalAd'
import { createAdSlot } from '@/lib/ads/slots'

interface ScrollyContentProps {
  spots: BestOfSpot[]
  cityName: string
  title: string
  intro?: {
    text: string
    attribution?: string
  }
  showBanner?: boolean
  bannerImage?: string
  onActiveIndexChange: (index: number) => void
  scrollToIndex?: number | null
  onScrollComplete?: () => void
}

export function ScrollyContent({
  spots,
  cityName,
  title,
  intro,
  showBanner = false,
  bannerImage,
  onActiveIndexChange,
  scrollToIndex,
  onScrollComplete
}: ScrollyContentProps) {
  const sectionRefs = useRef<{ [key: number]: HTMLElement | null }>({})

  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index]
    if (section) {
      // Scroll to start of section for better visibility
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Handle external scroll requests (from map marker clicks)
  useEffect(() => {
    if (scrollToIndex !== null && scrollToIndex !== undefined) {
      scrollToSection(scrollToIndex)
      onScrollComplete?.()
    }
  }, [scrollToIndex, onScrollComplete])

  const handleNavigate = (currentIndex: number, action: 'list' | 'minimize' | 'close' | 'prev' | 'next') => {
    switch (action) {
      case 'list':
        // Scroll to intro to show global view
        scrollToSection(-1)
        break
      case 'minimize':
        // Minimize - go back to overview
        scrollToSection(-1)
        break
      case 'close':
        // Close and return to start
        scrollToSection(-1)
        break
      case 'prev':
        if (currentIndex > 0) {
          scrollToSection(currentIndex - 1)
        }
        break
      case 'next':
        if (currentIndex < spots.length - 1) {
          scrollToSection(currentIndex + 1)
        }
        break
    }
  }

  return (
    <div className="relative">
      {/* Banner Section - Hero image with title overlay */}
      {showBanner && bannerImage && (
        <ScrollySection
          index={-2}
          onInView={onActiveIndexChange}
          className="relative snap-start"
          ref={(el) => { sectionRefs.current[-2] = el }}
        >
          <div className="absolute inset-0 w-full h-screen">
            <img
              src={bannerImage}
              alt={`${title} banner`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-6">
                {title}
              </h1>
              <div className="mt-8 animate-bounce">
                <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </ScrollySection>
      )}

      {/* Introduction Section - Shows intro text over map */}
      {intro && (
        <ScrollySection
          index={-1}
          onInView={onActiveIndexChange}
          className="bg-transparent snap-start"
          ref={(el) => { sectionRefs.current[-1] = el }}
        >
          <div className="max-w-4xl w-full mx-auto text-center space-y-6 px-6 py-12 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl">
            {!showBanner && (
              <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 drop-shadow-lg mb-6">
                {title}
              </h1>
            )}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                {intro.text}
              </p>
              {intro.attribution && (
                <p className="text-sm text-neutral-500 italic">
                  {intro.attribution}
                </p>
              )}
            </div>
          </div>
        </ScrollySection>
      )}

      {/* Spot Sections with Ads */}
      {spots.map((spot, index) => (
        <div key={`spot-wrapper-${index}`}>
          <ScrollySection
            key={`${spot.name}-${index}`}
            index={index}
            onInView={onActiveIndexChange}
            className="snap-start"
            ref={(el) => { sectionRefs.current[index] = el }}
          >
            <ScrollySpotCard
              spot={spot}
              rank={index + 1}
              totalSpots={spots.length}
              onNavigate={(action) => handleNavigate(index, action)}
              onViewGlobal={() => scrollToSection(showBanner ? -2 : -1)}
            />
          </ScrollySection>

          {/* Ad every 3 spots */}
          {(index + 1) % 3 === 0 && index < spots.length - 1 && (
            <ScrollySection
              key={`ad-${index}`}
              index={-100 - index} // Use negative index to not interfere with spot indices
              onInView={() => {}} // No-op for ads
              className="bg-white/90 backdrop-blur-md snap-start"
            >
              <div className="max-w-3xl w-full px-6">
                <UniversalAd
                  slot={createAdSlot(
                    `coffee-shops-scrolly-ad-${index}`,
                    'rectangle',
                    { type: 'coffee-shops', position: 'between-entries' }
                  )}
                />
              </div>
            </ScrollySection>
          )}
        </div>
      ))}

      {/* Outro Section - Final destination, cannot scroll past */}
      <ScrollySection
        index={spots.length}
        onInView={onActiveIndexChange}
        className="bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-neutral-800/90 backdrop-blur-md snap-start min-h-screen"
        ref={(el) => { sectionRefs.current[spots.length] = el }}
      >
        <div className="max-w-5xl w-full mx-auto text-center space-y-8 px-6 py-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl">
            Explore More {cityName}
          </h2>
          <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed drop-shadow-lg max-w-3xl mx-auto">
            From hidden bars to historic curiosities, there's more to discover.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
            <a
              href={`/${cityName.toLowerCase().replace(/\s+/g, '-')}/bars`}
              className="group relative overflow-hidden rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center gap-3">
                <svg className="w-12 h-12 text-white/90 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span className="text-lg font-semibold text-white">Best Bars</span>
              </div>
            </a>
            <a
              href={`/${cityName.toLowerCase().replace(/\s+/g, '-')}/restaurants`}
              className="group relative overflow-hidden rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center gap-3">
                <svg className="w-12 h-12 text-white/90 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-lg font-semibold text-white">Restaurants</span>
              </div>
            </a>
            <a
              href={`/${cityName.toLowerCase().replace(/\s+/g, '-')}/curiosities`}
              className="group relative overflow-hidden rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center gap-3">
                <svg className="w-12 h-12 text-white/90 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="text-lg font-semibold text-white">Curiosities</span>
              </div>
            </a>
          </div>
        </div>
      </ScrollySection>
    </div>
  )
}
