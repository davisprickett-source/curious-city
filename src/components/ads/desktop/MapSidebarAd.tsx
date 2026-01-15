'use client'

import { useEffect, useState } from 'react'
import { UniversalAd } from '../UniversalAd'
import { createMapSidebarSlot } from '@/lib/ads/slots'
import { desktopAdConfig } from '@/lib/ads/config'

interface MapSidebarAdProps {
  pageId: string
  targeting?: Record<string, string>
  className?: string
}

export function MapSidebarAd({ pageId, targeting, className = '' }: MapSidebarAdProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const checkViewport = () => {
      setIsVisible(window.innerWidth >= desktopAdConfig.mapSidebar.minViewportWidth)
    }

    checkViewport()
    window.addEventListener('resize', checkViewport)
    return () => window.removeEventListener('resize', checkViewport)
  }, [])

  if (!desktopAdConfig.mapSidebar.enabled || !isVisible) {
    return null
  }

  const slot = createMapSidebarSlot(pageId, targeting)
  const position = desktopAdConfig.mapSidebar.position

  return (
    <div
      className={`hidden xl:block fixed z-[5] ${className}`}
      style={{
        top: '80px',
        [position]: '16px',
        width: '300px',
      }}
    >
      {/* Semi-transparent backdrop for readability over map */}
      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden">
        {/* Sponsored label */}
        <div className="px-3 py-2 border-b border-neutral-100/50">
          <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">
            Sponsored
          </span>
        </div>

        {/* Ad content */}
        <div className="flex items-center justify-center p-3" style={{ minHeight: '250px' }}>
          <UniversalAd slot={slot} />
        </div>
      </div>
    </div>
  )
}

// Multi-slot version for stacking multiple ads
interface MapSidebarAdsProps {
  pageId: string
  count?: number
  targeting?: Record<string, string>
}

export function MapSidebarAds({ pageId, count = 1, targeting }: MapSidebarAdsProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const checkViewport = () => {
      setIsVisible(window.innerWidth >= desktopAdConfig.mapSidebar.minViewportWidth)
    }

    checkViewport()
    window.addEventListener('resize', checkViewport)
    return () => window.removeEventListener('resize', checkViewport)
  }, [])

  if (!desktopAdConfig.mapSidebar.enabled || !isVisible) {
    return null
  }

  const position = desktopAdConfig.mapSidebar.position

  return (
    <div
      className="hidden xl:flex flex-col gap-4 fixed z-[5]"
      style={{
        top: '80px',
        [position]: '16px',
        width: '300px',
      }}
    >
      {Array.from({ length: count }).map((_, index) => {
        const slot = createMapSidebarSlot(`${pageId}-${index}`, targeting)

        return (
          <div
            key={index}
            className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden"
          >
            {index === 0 && (
              <div className="px-3 py-2 border-b border-neutral-100/50">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">
                  Sponsored
                </span>
              </div>
            )}
            <div
              className="flex items-center justify-center p-3"
              style={{ minHeight: '250px' }}
            >
              <UniversalAd slot={slot} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
