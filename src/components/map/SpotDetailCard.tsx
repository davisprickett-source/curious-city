'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BestOfSpot } from '@/types/content'
import { ImageCarousel } from '@/components/ImageCarousel'

interface SpotDetailCardProps {
  spot: BestOfSpot
  rank: number
  totalSpots: number
  onNext: () => void
  onPrev: () => void
  onClose?: () => void
}

const cardVariants = {
  hidden: {
    opacity: 0,
    x: 60,
    filter: 'blur(8px)' as const
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)' as const,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const // Exponential ease-out
    }
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.4 }
  }
}

export function SpotDetailCard({ spot, rank, totalSpots, onNext, onPrev, onClose }: SpotDetailCardProps) {
  const carouselImages = spot.images || (spot.image ? [spot.image] : [])
  const hasMultipleLocations = Boolean(spot.locations && spot.locations.length > 0)
  const [mobileExpanded, setMobileExpanded] = useState(false)

  return (
    <>
      {/* Desktop: Centered large card */}
      <div className="hidden lg:flex fixed inset-0 z-20 items-center justify-center pointer-events-none pt-24 pb-12 px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${spot.name}-${rank}`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              w-full max-w-5xl
              bg-white
              shadow-2xl
              rounded-3xl
              overflow-hidden
              max-h-full
              pointer-events-auto
              flex flex-col
              relative
            "
            style={{ willChange: 'transform, opacity, filter' }}
          >
            {/* Close button */}
            {onClose && (
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors"
                aria-label="Close and view map"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}

            <div className="overflow-y-auto flex-1 p-12">
              <CardContent
                spot={spot}
                rank={rank}
                totalSpots={totalSpots}
                onNext={onNext}
                onPrev={onPrev}
                carouselImages={carouselImages}
                hasMultipleLocations={hasMultipleLocations}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile/Tablet: Bottom sheet */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-20 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${spot.name}-${rank}-mobile`}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="
              bg-white
              rounded-t-3xl
              shadow-2xl
              max-h-[80vh]
              overflow-y-auto
              pointer-events-auto
            "
            style={{ willChange: 'transform' }}
          >
            {/* Drag handle */}
            <div className="sticky top-0 bg-white z-10 pt-3 pb-2 flex justify-center border-b border-neutral-100">
              <div className="w-12 h-1 bg-neutral-300 rounded-full" />
            </div>

            <div className="px-6 pb-8">
              <CardContent
                spot={spot}
                rank={rank}
                totalSpots={totalSpots}
                onNext={onNext}
                onPrev={onPrev}
                carouselImages={carouselImages}
                hasMultipleLocations={hasMultipleLocations}
                isMobile
                mobileExpanded={mobileExpanded}
                setMobileExpanded={setMobileExpanded}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}

function CardContent({
  spot,
  rank,
  totalSpots,
  onNext,
  onPrev,
  carouselImages,
  hasMultipleLocations,
  isMobile = false,
  mobileExpanded = false,
  setMobileExpanded
}: {
  spot: BestOfSpot
  rank: number
  totalSpots: number
  onNext: () => void
  onPrev: () => void
  carouselImages: any[]
  hasMultipleLocations: boolean
  isMobile?: boolean
  mobileExpanded?: boolean
  setMobileExpanded?: (expanded: boolean) => void
}) {
  return (
    <div className="space-y-6">
      {/* Rank badge */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#c65d3b] text-white font-semibold rounded-full flex items-center justify-center shadow-md">
          {rank}
        </div>
        <div className="text-sm text-neutral-500">
          / {totalSpots}
        </div>
      </div>

      {/* Image carousel */}
      {carouselImages.length > 0 && (
        <div className={isMobile ? '' : ''}>
          <ImageCarousel images={carouselImages} />
        </div>
      )}

      {/* Name and metadata */}
      <div>
        <div className="flex items-baseline gap-3 flex-wrap mb-3">
          {spot.website ? (
            <a
              href={spot.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl font-bold text-neutral-900 hover:text-[#c65d3b] underline underline-offset-4 decoration-neutral-300 hover:decoration-[#c65d3b] transition-colors"
            >
              {spot.name}
            </a>
          ) : (
            <h3 className="text-4xl font-bold text-neutral-900">{spot.name}</h3>
          )}
        </div>
        <div className="flex items-center gap-3 flex-wrap text-base">
          <span className="text-neutral-600">{spot.neighborhood}</span>
          {spot.price && (
            <span className="text-[#c65d3b] font-semibold">{spot.price}</span>
          )}
        </div>
      </div>

      {/* Vibe */}
      <p className="text-xl text-neutral-700 italic leading-relaxed">
        {spot.vibe}
      </p>

      {/* Mobile: More Details toggle */}
      {isMobile && setMobileExpanded && (
        <button
          onClick={() => setMobileExpanded(!mobileExpanded)}
          className="w-full flex items-center justify-between px-4 py-3 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-colors"
          aria-expanded={mobileExpanded}
        >
          <span className="text-base font-semibold text-neutral-900">
            {mobileExpanded ? 'Less' : 'More Details'}
          </span>
          <svg
            className={`w-5 h-5 text-neutral-600 transition-transform duration-200 ${mobileExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}

      {/* Collapsible content - always visible on desktop, toggle on mobile */}
      {(!isMobile || mobileExpanded) && (
        <motion.div
          initial={isMobile ? { height: 0, opacity: 0 } : false}
          animate={{ height: 'auto', opacity: 1 }}
          exit={isMobile ? { height: 0, opacity: 0 } : undefined}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 overflow-hidden"
        >
      {/* The Order */}
      {spot.order && (
        <div className="border-l-4 border-[#c65d3b] pl-4 py-2 bg-amber-50/50 rounded-r-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-[#c65d3b] uppercase tracking-wider">The Order</span>
            <svg className="w-4 h-4 text-[#c65d3b]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p className="text-neutral-800 font-medium">{spot.order}</p>
        </div>
      )}

      {/* Menu Dropdown */}
      {spot.menuImage && <MenuDropdown menuImage={spot.menuImage} />}

      {/* Why */}
      <p className="text-neutral-700 leading-relaxed">
        {spot.why}
      </p>

      {/* Multiple locations */}
      {hasMultipleLocations && (
        <div className="pt-4 border-t border-neutral-200">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-semibold text-neutral-700">
              {(spot.locations?.length || 0) + 1} Locations
            </span>
          </div>
          <div className="space-y-2">
            {spot.address && (
              <div className="text-sm">
                <p className="font-medium text-neutral-900">{spot.neighborhood}</p>
                <p className="text-neutral-600">{spot.address}</p>
              </div>
            )}
            {spot.locations?.map((location, idx) => (
              <div key={idx} className="text-sm">
                <p className="font-medium text-neutral-900">{location.name}</p>
                <p className="text-neutral-600">{location.address}</p>
                {location.note && (
                  <p className="text-neutral-500 italic text-xs mt-1">{location.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact info - improved layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-neutral-200">
        {spot.address && !hasMultipleLocations && (
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors group"
          >
            <svg className="w-5 h-5 text-neutral-500 group-hover:text-[#c65d3b] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-neutral-700 group-hover:text-[#c65d3b] font-medium transition-colors">Get Directions</span>
          </a>
        )}
        {spot.hours && (
          <div className="flex items-center gap-3 px-4 py-3 bg-neutral-50 rounded-lg">
            <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-neutral-700 font-medium">{spot.hours}</span>
          </div>
        )}
        {spot.instagram && (
          <a
            href={`https://instagram.com/${spot.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors group"
          >
            <svg className="w-5 h-5 text-neutral-500 group-hover:text-[#c65d3b] transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="text-neutral-700 group-hover:text-[#c65d3b] font-medium transition-colors">Instagram</span>
          </a>
        )}
        {spot.facebook && (
          <a
            href={spot.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors group"
          >
            <svg className="w-5 h-5 text-neutral-500 group-hover:text-[#c65d3b] transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="text-neutral-700 group-hover:text-[#c65d3b] font-medium transition-colors">Facebook</span>
          </a>
        )}
        {spot.website && (
          <a
            href={spot.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors group"
          >
            <svg className="w-5 h-5 text-neutral-500 group-hover:text-[#c65d3b] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span className="text-neutral-700 group-hover:text-[#c65d3b] font-medium transition-colors">Website</span>
          </a>
        )}
      </div>
        </motion.div>
      )}

      {/* Navigation buttons */}
      <div className="pt-6 border-t border-neutral-200">
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onPrev}
            disabled={rank === 1}
            className="
              flex items-center justify-center gap-3
              px-6 py-4
              bg-neutral-100
              hover:bg-neutral-200
              disabled:opacity-40
              disabled:cursor-not-allowed
              rounded-xl
              transition-all
              hover:scale-[1.02]
              active:scale-[0.98]
              text-base font-semibold
              text-neutral-900
              min-h-[56px]
              focus:outline-none focus:ring-2 focus:ring-[#c65d3b] focus:ring-offset-2
            "
            aria-label="Previous spot"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>

          <button
            onClick={onNext}
            disabled={rank === totalSpots}
            className="
              flex items-center justify-center gap-3
              px-6 py-4
              bg-[#c65d3b]
              hover:bg-[#b54d2d]
              disabled:opacity-40
              disabled:cursor-not-allowed
              text-white
              rounded-xl
              transition-all
              hover:scale-[1.02]
              active:scale-[0.98]
              text-base font-semibold
              min-h-[56px]
              focus:outline-none focus:ring-2 focus:ring-[#c65d3b] focus:ring-offset-2
              shadow-md
              hover:shadow-lg
            "
            aria-label="Next spot"
          >
            Next
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

// Menu Dropdown Component
function MenuDropdown({ menuImage }: { menuImage: { src: string; alt: string; credit?: string } }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-neutral-50 hover:bg-neutral-100 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-base font-semibold text-neutral-900">View Menu</span>
        </div>
        <svg
          className={`w-5 h-5 text-neutral-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-white">
              <img
                src={menuImage.src}
                alt={menuImage.alt}
                className="w-full h-auto rounded-lg shadow-md"
              />
              {menuImage.credit && (
                <p className="text-xs text-neutral-500 mt-2 text-center">
                  Photo: {menuImage.credit}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
