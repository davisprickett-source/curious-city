'use client'

import { useEffect, useState } from 'react'
import { UniversalAd } from '../UniversalAd'
import { createSidebarSlot } from '@/lib/ads/slots'
import { desktopAdConfig } from '@/lib/ads/config'

interface SidebarAdProps {
  pageId: string
  position: 'left' | 'right'
  targeting?: Record<string, string>
  stickyTop?: number
  className?: string
}

export function SidebarAd({
  pageId,
  position,
  targeting,
  stickyTop = 80, // Below nav
  className = '',
}: SidebarAdProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const checkViewport = () => {
      setIsVisible(window.innerWidth >= desktopAdConfig.sidebars.minViewportWidth)
    }

    checkViewport()
    window.addEventListener('resize', checkViewport)
    return () => window.removeEventListener('resize', checkViewport)
  }, [])

  if (!desktopAdConfig.sidebars.enabled || !isVisible) {
    return null
  }

  // Check if this position is enabled
  if (!desktopAdConfig.sidebars.positions.includes(position)) {
    return null
  }

  const slot = createSidebarSlot(pageId, position, desktopAdConfig.sidebars.size, targeting)

  // Calculate dimensions based on size
  const sizeStyles = {
    skyscraper: { width: 160, height: 600 },
    'wide-skyscraper': { width: 300, height: 600 },
    rectangle: { width: 300, height: 250 },
  }

  const dimensions = sizeStyles[desktopAdConfig.sidebars.size] || sizeStyles.skyscraper

  return (
    <div
      className={`hidden fixed z-20 ${className}`}
      style={{
        top: `${stickyTop}px`,
        [position]: '16px',
        width: `${dimensions.width}px`,
        display: isVisible ? 'block' : 'none',
      }}
    >
      <div
        className="bg-white rounded-lg shadow-sm border border-neutral-100 overflow-hidden"
        style={{
          width: `${dimensions.width}px`,
          minHeight: `${dimensions.height}px`,
        }}
      >
        {/* Sponsored label */}
        <div className="px-3 py-1.5 border-b border-neutral-100">
          <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
            Sponsored
          </span>
        </div>

        {/* Ad content */}
        <div className="flex items-center justify-center p-2">
          <UniversalAd slot={slot} />
        </div>
      </div>
    </div>
  )
}

// Wrapper component that renders both sidebars if enabled
interface DualSidebarAdsProps {
  pageId: string
  targeting?: Record<string, string>
  stickyTop?: number
}

export function DualSidebarAds({ pageId, targeting, stickyTop }: DualSidebarAdsProps) {
  return (
    <>
      <SidebarAd
        pageId={pageId}
        position="left"
        targeting={targeting}
        stickyTop={stickyTop}
      />
      <SidebarAd
        pageId={pageId}
        position="right"
        targeting={targeting}
        stickyTop={stickyTop}
      />
    </>
  )
}
