'use client'

import { useState } from 'react'
import { BestOfSpot } from '@/types/content'
import { ImageCarousel } from '@/components/ImageCarousel'
import { motion, AnimatePresence } from 'framer-motion'

interface SpotCardProps {
  spot: BestOfSpot
  rank: number
  totalSpots: number
  isActive: boolean
}

export function SpotCard({ spot, rank, totalSpots, isActive }: SpotCardProps) {
  const carouselImages = spot.images || (spot.image ? [spot.image] : [])
  const hasMultipleLocations = Boolean(spot.locations && spot.locations.length > 0)

  return (
    <div
      className={`
        bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300
        ${isActive ? 'ring-4 ring-[#c65d3b]' : 'hover:shadow-2xl'}
      `}
    >
      {/* Image carousel */}
      {carouselImages.length > 0 && (
        <div className="aspect-[16/10]">
          <ImageCarousel images={carouselImages} />
        </div>
      )}

      <div className="p-6 space-y-4">
        {/* Rank badge */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#c65d3b] text-white font-semibold rounded-full flex items-center justify-center shadow-md">
            {rank}
          </div>
          <div className="text-sm text-neutral-500">
            / {totalSpots}
          </div>
        </div>

        {/* Name and metadata */}
        <div>
          <div className="flex items-baseline gap-3 flex-wrap mb-2">
            {spot.website ? (
              <a
                href={spot.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl font-bold text-neutral-900 hover:text-[#c65d3b] underline underline-offset-4 decoration-neutral-300 hover:decoration-[#c65d3b] transition-colors"
              >
                {spot.name}
              </a>
            ) : (
              <h3 className="text-3xl font-bold text-neutral-900">{spot.name}</h3>
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
        <p className="text-lg text-neutral-700 italic leading-relaxed">
          {spot.vibe}
        </p>

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

        {/* Contact info */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-neutral-200">
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
              <span className="text-neutral-700 group-hover:text-[#c65d3b] font-medium transition-colors text-sm">Directions</span>
            </a>
          )}
          {spot.hours && (
            <div className="flex items-center gap-3 px-4 py-3 bg-neutral-50 rounded-lg">
              <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-neutral-700 font-medium text-sm">{spot.hours}</span>
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
              <span className="text-neutral-700 group-hover:text-[#c65d3b] font-medium transition-colors text-sm">Instagram</span>
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
              <span className="text-neutral-700 group-hover:text-[#c65d3b] font-medium transition-colors text-sm">Website</span>
            </a>
          )}
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
