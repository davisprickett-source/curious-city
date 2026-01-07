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
  const [isHovered, setIsHovered] = useState(false)

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
        className="relative aspect-[4/3] md:aspect-[16/9] rounded-lg overflow-hidden bg-neutral-100 cursor-pointer group"
        onClick={goToNext}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Credit overlay */}
        {images[currentIndex].credit && (
          <span className="absolute top-2 right-2 text-xs text-white/90 bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
            {images[currentIndex].credit}
          </span>
        )}

        {/* Animated navigation arrows - black and only visible on hover */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            goToPrevious()
          }}
          className={`absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 group/arrow ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}
          aria-label="Previous image"
        >
          <svg
            className="w-5 h-5 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            strokeLinecap="round"
          >
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            goToNext()
          }}
          className={`absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 group/arrow ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
          aria-label="Next image"
        >
          <svg
            className="w-5 h-5 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            strokeLinecap="round"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Minimalistic dot indicators - small circles with subtle fill */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation()
                setCurrentIndex(index)
              }}
              className={`w-[5px] h-[5px] rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'border-[1.5px] border-[#B7410E] bg-[#B7410E]/20'
                  : 'border-[1.5px] border-white/70 bg-white/15 hover:border-white/90'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
