'use client'

import { useEffect, useCallback, useState } from 'react'
import { UniversalAd } from '../UniversalAd'
import { createInterstitialSlot } from '@/lib/ads/slots'
import { mobileAdConfig } from '@/lib/ads/config'

interface InterstitialAdProps {
  isOpen: boolean
  onClose: () => void
  pageId: string
  targeting?: Record<string, string>
}

export function InterstitialAd({
  isOpen,
  onClose,
  pageId,
  targeting,
}: InterstitialAdProps) {
  const [countdown, setCountdown] = useState(mobileAdConfig.interstitial.countdownSeconds)
  const [canSkip, setCanSkip] = useState(false)

  // Handle escape key (only when countdown is done)
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && canSkip) {
        onClose()
      }
    },
    [onClose, canSkip]
  )

  // Body scroll lock and keyboard handler
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'

      // Start countdown
      setCountdown(mobileAdConfig.interstitial.countdownSeconds)
      setCanSkip(false)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  // Countdown timer
  useEffect(() => {
    if (!isOpen || countdown <= 0) {
      if (countdown <= 0) {
        setCanSkip(true)
      }
      return
    }

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setCanSkip(true)
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isOpen, countdown])

  if (!isOpen) return null

  const slot = createInterstitialSlot(pageId, targeting)

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 z-[70] animate-fade-in"
        aria-hidden="true"
      />

      {/* Interstitial content */}
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 animate-scale-in">
        {/* Close/Skip button area */}
        <div className="absolute top-4 right-4 z-10">
          {canSkip ? (
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white text-sm font-medium transition-colors"
              aria-label="Skip ad"
            >
              <span>Skip</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/70 text-sm">
              <span>Skip in</span>
              <span className="font-mono font-bold text-white">{countdown}</span>
            </div>
          )}
        </div>

        {/* Sponsored label */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/70 text-xs uppercase tracking-wide">
            Sponsored
          </span>
        </div>

        {/* Ad container */}
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Ad content area */}
          <div className="p-6 flex items-center justify-center min-h-[300px]">
            <UniversalAd slot={slot} className="w-full" />
          </div>

          {/* Bottom action area */}
          <div className="px-6 pb-6 pt-2 border-t border-neutral-100">
            {canSkip ? (
              <button
                onClick={onClose}
                className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-xl transition-colors"
              >
                Continue to Content
              </button>
            ) : (
              <div className="text-center text-neutral-500 text-sm py-3">
                Content will be available in {countdown} seconds
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scale-in {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
