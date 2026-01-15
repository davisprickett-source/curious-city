'use client'

import { useEffect, useState } from 'react'
import { UniversalAd } from '../UniversalAd'
import { useAdContextSafe } from '../AdProvider'
import { createStickySlot } from '@/lib/ads/slots'
import { mobileAdConfig } from '@/lib/ads/config'

interface StickyBottomAdProps {
  pageId: string
  targeting?: Record<string, string>
}

export function StickyBottomAd({ pageId, targeting }: StickyBottomAdProps) {
  const adContext = useAdContextSafe()
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  // If we have context, use it; otherwise manage state locally
  const contextVisible = adContext?.isStickyVisible
  const contextDismiss = adContext?.dismissSticky

  useEffect(() => {
    // Check if already dismissed in session
    const dismissed = sessionStorage.getItem('ad_sticky_dismissed') === 'true'
    if (dismissed) {
      setIsDismissed(true)
      return
    }

    // Show after configured delay
    const delay = mobileAdConfig.sticky.showAfter.value * 1000
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    if (contextDismiss) {
      contextDismiss()
    } else {
      sessionStorage.setItem('ad_sticky_dismissed', 'true')
      setIsDismissed(true)
      setIsVisible(false)
    }
  }

  // Determine visibility
  const shouldShow = contextVisible !== undefined ? contextVisible : (isVisible && !isDismissed)

  if (!mobileAdConfig.sticky.enabled || !shouldShow) {
    return null
  }

  const slot = createStickySlot(pageId, targeting)

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 z-30 sm:hidden animate-slide-up"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <div className="relative bg-white border-t border-neutral-200 shadow-lg">
          {/* Dismiss button */}
          {mobileAdConfig.sticky.dismissible && (
            <button
              onClick={handleDismiss}
              className="absolute -top-6 right-2 w-6 h-6 bg-neutral-800/80 hover:bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs z-10 transition-colors"
              aria-label="Close ad"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {/* Ad content */}
          <div
            className="flex items-center justify-center py-1"
            style={{ minHeight: `${mobileAdConfig.sticky.height}px` }}
          >
            <UniversalAd slot={slot} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
