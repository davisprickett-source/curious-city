'use client'

import { useState, useCallback } from 'react'

interface CarouselImage {
  src: string
  alt: string
  credit?: string
}

interface ImageCarouselProps {
  images: CarouselImage[]
  className?: string
}

export function ImageCarousel({ images, className = '' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  if (!images || images.length === 0) return null

  // Single image - no carousel needed
  if (images.length === 1) {
    return (
      <div className={`relative aspect-[4/3] md:aspect-[16/9] rounded-lg overflow-hidden bg-neutral-100 ${className}`}>
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="w-full h-full object-cover"
        />
        {images[0].credit && (
          <span className="absolute bottom-2 right-2 text-xs text-white/80 bg-black/40 px-2 py-0.5 rounded">
            {images[0].credit}
          </span>
        )}
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {/* Main image container - click to advance */}
      <div
        className="relative aspect-[4/3] md:aspect-[16/9] rounded-lg overflow-hidden bg-neutral-100 cursor-pointer"
        onClick={goToNext}
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Credit overlay */}
        {images[currentIndex].credit && (
          <span className="absolute bottom-2 right-2 text-xs text-white/80 bg-black/40 px-2 py-0.5 rounded">
            {images[currentIndex].credit}
          </span>
        )}

        {/* Navigation arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            goToPrevious()
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center transition-all hover:scale-105"
          aria-label="Previous image"
        >
          <svg className="w-4 h-4 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            goToNext()
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center transition-all hover:scale-105"
          aria-label="Next image"
        >
          <svg className="w-4 h-4 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image counter */}
        <div className="absolute bottom-2 left-2 text-xs text-white bg-black/50 px-2 py-0.5 rounded">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation()
              setCurrentIndex(index)
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-accent-600 w-3'
                : 'bg-neutral-300 hover:bg-neutral-400'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
