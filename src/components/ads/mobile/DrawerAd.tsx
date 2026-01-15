'use client'

import { useEffect, useCallback, useRef, useState } from 'react'
import { UniversalAd } from '../UniversalAd'
import { createDrawerSlot } from '@/lib/ads/slots'

interface DrawerAdProps {
  isOpen: boolean
  onClose: () => void
  pageId: string
  targeting?: Record<string, string>
  title?: string
}

export function DrawerAd({
  isOpen,
  onClose,
  pageId,
  targeting,
  title = 'Sponsored Content',
}: DrawerAdProps) {
  const drawerRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchDelta, setTouchDelta] = useState(0)
  const [isClosing, setIsClosing] = useState(false)

  // Handle escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  // Touch handlers for swipe-to-dismiss
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientY)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const currentY = e.touches[0].clientY
    const delta = currentY - touchStart
    // Only allow downward swipe
    if (delta > 0) {
      setTouchDelta(delta)
    }
  }

  const handleTouchEnd = () => {
    // If swiped down more than 100px, close the drawer
    if (touchDelta > 100) {
      setIsClosing(true)
      setTimeout(onClose, 200)
    }
    setTouchStart(null)
    setTouchDelta(0)
  }

  if (!isOpen) return null

  const slot = createDrawerSlot(pageId, targeting)

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[55] animate-fade-in sm:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed inset-x-0 bottom-0 z-[55] sm:hidden pointer-events-none ${
          isClosing ? 'animate-slide-down' : 'animate-slide-up'
        }`}
        style={{
          transform: touchDelta > 0 ? `translateY(${touchDelta}px)` : undefined,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="pointer-events-auto bg-white rounded-t-2xl shadow-2xl max-h-[70vh] overflow-hidden">
          {/* Handle bar for swipe indication */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-10 h-1 bg-neutral-300 rounded-full" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between px-4 pb-3 border-b border-neutral-100">
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
              {title}
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-neutral-600 rounded-full hover:bg-neutral-100 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Ad content */}
          <div className="p-4 flex items-center justify-center">
            <UniversalAd slot={slot} />
          </div>

          {/* Footer with dismiss hint */}
          <div className="px-4 pb-4 pt-2">
            <p className="text-xs text-center text-neutral-400">
              Swipe down or tap outside to close
            </p>
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
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        @keyframes slide-down {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(100%);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        .animate-slide-down {
          animation: slide-down 0.2s ease-out forwards;
        }
      `}</style>
    </>
  )
}
