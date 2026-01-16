'use client'

import { useState, useEffect } from 'react'
import { UniversalAd } from './UniversalAd'
import { createAdSlot } from '@/lib/ads/slots'
import { StickyBottomAd } from './mobile/StickyBottomAd'

interface VideoEssayAdsProps {
  pageId: string
  citySlug: string
}

export function VideoEssayAds({ pageId, citySlug }: VideoEssayAdsProps) {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024) // lg breakpoint
    }
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  // Desktop: Show leaderboard ads in top and bottom letterbox areas
  // Mobile: Show sticky bottom ad
  return (
    <>
      {/* Desktop: Top letterbox ad - positioned within the 25vh white bar */}
      {isDesktop && (
        <div className="hidden lg:flex fixed top-0 left-0 right-0 h-[25vh] z-[45] items-start justify-center pt-4 pointer-events-none">
          <div className="pointer-events-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-sm border border-neutral-100 px-4 py-2">
              <div className="flex items-center justify-center gap-3 mb-1">
                <div className="h-px w-8 bg-neutral-200" />
                <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-medium">
                  Sponsored
                </span>
                <div className="h-px w-8 bg-neutral-200" />
              </div>
              <UniversalAd
                slot={createAdSlot(
                  `${pageId}-video-top`,
                  'leaderboard',
                  { city: citySlug, type: 'video-essay', position: 'top-letterbox' }
                )}
              />
            </div>
          </div>
        </div>
      )}

      {/* Desktop: Bottom letterbox ad - positioned within the 25vh white bar */}
      {isDesktop && (
        <div className="hidden lg:flex fixed bottom-0 left-0 right-0 h-[25vh] z-[45] items-end justify-center pb-4 pointer-events-none">
          <div className="pointer-events-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-sm border border-neutral-100 px-4 py-2">
              <UniversalAd
                slot={createAdSlot(
                  `${pageId}-video-bottom`,
                  'leaderboard',
                  { city: citySlug, type: 'video-essay', position: 'bottom-letterbox' }
                )}
              />
              <div className="flex items-center justify-center gap-3 mt-1">
                <div className="h-px w-8 bg-neutral-200" />
                <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-medium">
                  Advertisement
                </span>
                <div className="h-px w-8 bg-neutral-200" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile: Sticky bottom ad */}
      <div className="lg:hidden">
        <StickyBottomAd
          pageId={pageId}
          targeting={{ city: citySlug, type: 'video-essay' }}
        />
      </div>
    </>
  )
}
