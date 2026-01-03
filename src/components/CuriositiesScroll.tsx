'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView as useInViewHook } from 'react-intersection-observer'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { VideoScrubber } from './VideoScrubber'

// Helper function to get icon based on source type
function getSourceIcon(type?: string) {
  switch (type) {
    case 'article':
      return (
        <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      )
    case 'book':
      return (
        <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    case 'podcast':
      return (
        <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    case 'video':
    case 'documentary':
    case 'film':
      return (
        <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    case 'report':
      return (
        <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    default:
      return (
        <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
  }
}

// Image Carousel Component
function ImageCarousel({ images, title }: { images: Array<{ src: string; alt: string; caption?: string; credit?: string }>; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToIndex = (index: number) => {
    setCurrentIndex(index)
  }

  const currentImage = images[currentIndex]

  return (
    <div className="mb-6">
      <div className="relative overflow-hidden rounded-2xl shadow-xl group">
        {/* Image */}
        <div className="relative aspect-[4/3] md:aspect-[16/9]">
          <img
            src={currentImage.src}
            alt={currentImage.alt || title}
            className="w-full h-full object-cover object-center"
          />

          {/* Credit overlay on top */}
          {currentImage.credit && (
            <div className="absolute top-2 right-2 text-xs text-white/90 bg-black/50 px-2 py-1 rounded">
              {currentImage.credit}
            </div>
          )}
        </div>

        {/* Navigation Arrows - only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-2 text-xs text-white/90 bg-black/50 px-2 py-1 rounded">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Caption only (credit is now on image) */}
      {currentImage.caption && (
        <div className="mt-2 px-1 text-xs text-neutral-400">
          {currentImage.caption}
        </div>
      )}
    </div>
  )
}

interface CuriosityItem {
  id: string
  title: string
  body: string
  category?: string
  year?: string
  image?: {
    src: string
    alt?: string
    credit?: string
  }
  images?: Array<{
    src: string
    alt: string
    caption?: string
    credit?: string
  }>
  illustration?: React.ComponentType
  video?: {
    youtubeId: string
    title?: string
  }
  videoAnimation?: {
    path: string
    title?: string
    caption?: string
  }
  location?: {
    name: string
    url?: string
    stillExists?: boolean
  }
  source?: string
  sources?: Array<{
    type?: 'article' | 'book' | 'documentary' | 'podcast' | 'film' | 'video' | 'report' | 'other'
    title: string
    url?: string
  }>
}

interface CuriositiesScrollProps {
  curiosities: CuriosityItem[]
  cityName: string
}

// Category badge color helper
const getCategoryStyle = (category: string) => {
  switch (category) {
    case 'history':
      return { bg: 'bg-amber-50', text: 'text-amber-700', accent: 'border-amber-200' }
    case 'architecture':
      return { bg: 'bg-blue-50', text: 'text-blue-700', accent: 'border-blue-200' }
    case 'underground':
      return { bg: 'bg-neutral-800', text: 'text-neutral-200', accent: 'border-neutral-600' }
    case 'science':
      return { bg: 'bg-emerald-50', text: 'text-emerald-700', accent: 'border-emerald-200' }
    case 'culture':
      return { bg: 'bg-purple-50', text: 'text-purple-700', accent: 'border-purple-200' }
    case 'law':
      return { bg: 'bg-red-50', text: 'text-red-700', accent: 'border-red-200' }
    case 'invention':
      return { bg: 'bg-cyan-50', text: 'text-cyan-700', accent: 'border-cyan-200' }
    case 'legend':
      return { bg: 'bg-violet-50', text: 'text-violet-700', accent: 'border-violet-200' }
    case 'nature':
      return { bg: 'bg-green-50', text: 'text-green-700', accent: 'border-green-200' }
    default:
      return { bg: 'bg-neutral-100', text: 'text-neutral-600', accent: 'border-neutral-300' }
  }
}

// Video Animation Curiosity - full-screen scrolling video with text
function VideoAnimationCuriosity({ item, index, onSectionInView }: { item: CuriosityItem; index: number; totalCount: number; onSectionInView?: (index: number) => void }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { ref: inViewRef, inView } = useInViewHook({
    threshold: 0.15,
    triggerOnce: false,
  })

  // Combine refs
  const setRefs = (element: HTMLDivElement | null) => {
    // @ts-ignore
    sectionRef.current = element
    inViewRef(element)
  }

  // Notify parent when in view
  useEffect(() => {
    if (inView && onSectionInView) {
      onSectionInView(index)
    }
  }, [inView, index, onSectionInView])

  const categoryStyles = item.category ? getCategoryStyle(item.category) : getCategoryStyle('default')

  return (
    <div ref={setRefs} className="relative">
      <VideoScrubber
        videoPath={item.videoAnimation!.path}
        title={item.title}
        caption={item.videoAnimation!.caption}
        scrollHeight={200}
        textContent={item.body}
        textPosition="right"
      />

      {/* Info bar below video */}
      <div className="bg-neutral-50 border-t border-neutral-200 py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-6">
            {/* Number badge */}
            <div className="flex-shrink-0">
              <div className={`w-16 h-16 rounded-2xl ${categoryStyles.bg} border-2 ${categoryStyles.accent} flex items-center justify-center`}>
                <span className={`text-3xl font-bold ${categoryStyles.text}`}>{index + 1}</span>
              </div>
            </div>

            {/* Metadata */}
            <div className="flex-1">
              {/* Sources and Metadata Table */}
              {((item.sources && item.sources.length > 0) || item.location || item.category || item.year) && (
                <div className="bg-white border border-neutral-200 rounded-xl px-5 py-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Sources Column */}
                    {item.sources && item.sources.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">Sources</h4>
                        <ul className="space-y-2">
                          {item.sources.map((source, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              {getSourceIcon(source.type)}
                              {source.url ? (
                                <a
                                  href={source.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-accent-600 hover:text-accent-700 underline underline-offset-2 transition-colors text-sm font-medium"
                                >
                                  {source.title}
                                </a>
                              ) : (
                                <span className="text-neutral-700 text-sm">{source.title}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Metadata Column (Location, Category, Year) */}
                    {(item.category || item.year || item.location) && (
                      <div className="space-y-4">
                        {/* Location */}
                        {item.location && (
                          <div>
                            <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Location</h4>
                            <div className="flex items-start gap-2 text-sm">
                              <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {item.location.url ? (
                                <a
                                  href={item.location.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-accent-600 hover:text-accent-700 underline underline-offset-2 transition-colors font-medium"
                                >
                                  {item.location.name}
                                  {item.location.stillExists === false && (
                                    <span className="text-neutral-400 ml-1">(no longer exists)</span>
                                  )}
                                </a>
                              ) : (
                                <span className="text-neutral-700">
                                  {item.location.name}
                                  {item.location.stillExists === false && (
                                    <span className="text-neutral-400 ml-1">(no longer exists)</span>
                                  )}
                                </span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Category */}
                        {item.category && (
                          <div>
                            <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Category</h4>
                            <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${categoryStyles.bg} ${categoryStyles.text} border ${categoryStyles.accent}`}>
                              {item.category}
                            </span>
                          </div>
                        )}

                        {/* Year */}
                        {item.year && (
                          <div>
                            <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Year</h4>
                            <span className="text-base text-neutral-700 font-semibold">{item.year}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
              {item.source && !item.sources && (
                <div className="text-sm text-neutral-500 italic">
                  Source: {item.source}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CuriositySection({ item, index, onSectionInView }: { item: CuriosityItem; index: number; totalCount: number; onSectionInView?: (index: number) => void }) {
  const sectionRef = useRef<HTMLElement>(null)
  const { ref: inViewRef, inView } = useInViewHook({
    threshold: 0.15,
    triggerOnce: false,
  })

  const prefersReducedMotion = useReducedMotion()
  const isEven = index % 2 === 0
  const categoryStyles = item.category ? getCategoryStyle(item.category) : getCategoryStyle('default')

  // Parallax effect for the number badge - DRAMATIC movement
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  // Much more dramatic parallax - big movement range (no rotation)
  // @ts-ignore - Variable for future use
  const numberY = useTransform(scrollYProgress, [0, 1], [120, -120])

  // Combine refs using callback
  const setRefs = (element: HTMLElement | null) => {
    // @ts-ignore - setting mutable ref
    sectionRef.current = element
    inViewRef(element)
  }

  // Notify parent when in view
  useEffect(() => {
    if (inView && onSectionInView) {
      onSectionInView(index)
    }
  }, [inView, index, onSectionInView])

  // Animation variants - MUCH slower, more dramatic (no rotation)
  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1] as any,
        opacity: { duration: 1.2 }
      }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, x: isEven ? 100 : -100, filter: 'blur(20px)', scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1] as any,
        delay: 0.2,
        opacity: { duration: 1.4 }
      }
    }
  }

  // Get category-specific background gradient
  const getCategoryGradient = () => {
    if (!item.category) return 'bg-white'
    switch (item.category) {
      case 'history':
        return 'bg-gradient-to-br from-amber-50/30 via-white to-white'
      case 'architecture':
        return 'bg-gradient-to-br from-blue-50/30 via-white to-white'
      case 'underground':
        return 'bg-gradient-to-br from-neutral-100/50 via-white to-white'
      case 'science':
        return 'bg-gradient-to-br from-emerald-50/30 via-white to-white'
      case 'culture':
        return 'bg-gradient-to-br from-purple-50/30 via-white to-white'
      case 'law':
        return 'bg-gradient-to-br from-red-50/30 via-white to-white'
      case 'invention':
        return 'bg-gradient-to-br from-cyan-50/30 via-white to-white'
      case 'legend':
        return 'bg-gradient-to-br from-violet-50/30 via-white to-white'
      case 'nature':
        return 'bg-gradient-to-br from-green-50/30 via-white to-white'
      default:
        return 'bg-white'
    }
  }

  if (prefersReducedMotion) {
    return (
      <section ref={setRefs} className={`min-h-[70vh] flex items-center py-16 px-4 ${getCategoryGradient()} relative overflow-hidden`}>
        {/* Background Illustration - Desktop only */}
        {item.illustration && (
          <div className="hidden lg:block absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] scale-125 -translate-x-32">
              <item.illustration />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] scale-125 translate-x-32">
              <item.illustration />
            </div>
          </div>
        )}

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className={`flex flex-col md:flex-row gap-8 items-start ${isEven ? '' : 'md:flex-row-reverse'}`}>
            {/* Number */}
            <div className="flex-shrink-0">
              <div className={`w-20 h-20 rounded-2xl ${categoryStyles.bg} border-2 ${categoryStyles.accent} flex items-center justify-center`}>
                <span className={`text-4xl font-bold ${categoryStyles.text}`}>{index + 1}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-start gap-3 flex-wrap mb-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 leading-tight">
                  {item.title}
                </h2>
              </div>

              {/* Illustration - Mobile only */}
              {item.illustration && (
                <div className="mb-6 lg:hidden">
                  <item.illustration />
                </div>
              )}

              {/* Image */}
              {item.image && !item.illustration && !item.images && (
                <div className="mb-6 overflow-hidden rounded-2xl relative">
                  <img
                    src={item.image.src}
                    alt={item.image.alt || item.title}
                    className="w-full h-96 object-cover object-center"
                  />
                  {item.image.credit && (
                    <div className="absolute top-2 right-2 text-xs text-white/90 bg-black/50 px-2 py-1 rounded">
                      {item.image.credit}
                    </div>
                  )}
                </div>
              )}

              {/* Image Carousel */}
              {item.images && item.images.length > 0 && !item.illustration && (
                <ImageCarousel images={item.images} title={item.title} />
              )}

              {/* Body */}
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {item.body}
              </p>

              {/* Video */}
              {item.video && (
                <div className="mb-6 overflow-hidden rounded-2xl">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-2xl"
                      src={`https://www.youtube.com/embed/${item.video.youtubeId}`}
                      title={item.video.title || item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Sources and Metadata Table */}
              {((item.sources && item.sources.length > 0) || item.location || item.category || item.year) && (
                <div className="bg-neutral-900/5 border border-neutral-200 rounded-xl px-5 py-4 mt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Sources Column */}
                    {item.sources && item.sources.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">Sources</h4>
                        <ul className="space-y-2">
                          {item.sources?.map((source, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              {getSourceIcon(source.type)}
                              {source.url ? (
                                <a
                                  href={source.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-accent-600 hover:text-accent-700 underline underline-offset-2 transition-colors text-sm font-medium"
                                >
                                  {source.title}
                                </a>
                              ) : (
                                <span className="text-neutral-700 text-sm">{source.title}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Metadata Column (Location, Category, Year) */}
                    {(item.category || item.year || item.location) && (
                      <div className="space-y-4">
                        {/* Location */}
                        {item.location && (
                          <div>
                            <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Location</h4>
                            <div className="flex items-start gap-2 text-sm">
                              <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {item.location.url ? (
                                <a
                                  href={item.location.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-accent-600 hover:text-accent-700 underline underline-offset-2 transition-colors font-medium"
                                >
                                  {item.location.name}
                                  {item.location.stillExists === false && (
                                    <span className="text-neutral-400 ml-1">(no longer exists)</span>
                                  )}
                                </a>
                              ) : (
                                <span className="text-neutral-700">
                                  {item.location.name}
                                  {item.location.stillExists === false && (
                                    <span className="text-neutral-400 ml-1">(no longer exists)</span>
                                  )}
                                </span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Category */}
                        {item.category && (
                          <div>
                            <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Category</h4>
                            <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${categoryStyles.bg} ${categoryStyles.text} border ${categoryStyles.accent}`}>
                              {item.category}
                            </span>
                          </div>
                        )}

                        {/* Year */}
                        {item.year && (
                          <div>
                            <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Year</h4>
                            <span className="text-base text-neutral-700 font-semibold">{item.year}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
              {item.source && !item.sources && (
                <div className="text-sm text-neutral-500 italic border-t border-neutral-200 pt-4">
                  Source: {item.source}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }

  // With animations
  return (
    <section ref={setRefs} className={`min-h-[70vh] flex items-center py-16 px-4 ${getCategoryGradient()} transition-colors duration-1000 relative overflow-hidden`}>
      {/* Background Illustration - Desktop only with animations */}
      {item.illustration && (
        <>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 0.15, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1] as any
            }}
            className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[600px] scale-125 -translate-x-32 pointer-events-none"
          >
            <item.illustration />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 0.15, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1] as any
            }}
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[600px] scale-125 translate-x-32 pointer-events-none"
          >
            <item.illustration />
          </motion.div>
        </>
      )}

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className={`flex flex-col md:flex-row gap-8 md:gap-12 items-start ${isEven ? '' : 'md:flex-row-reverse'}`}>
          {/* Animated Number - no parallax to avoid jumping */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={numberVariants}
            className="flex-shrink-0"
          >
            <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl ${categoryStyles.bg} border-2 ${categoryStyles.accent} flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500`}>
              <span className={`text-4xl md:text-5xl font-bold ${categoryStyles.text}`}>{index + 1}</span>
            </div>
          </motion.div>

          {/* Animated Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={contentVariants}
            className="flex-1"
          >
            {/* Header */}
            <div className="flex items-start gap-3 flex-wrap mb-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900 leading-tight">
                {item.title}
              </h2>
            </div>

            {/* Illustration with DRAMATIC animations - Mobile only */}
            {item.illustration && (
              <motion.div
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.8,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1] as any,
                  opacity: { duration: 1.5 }
                }}
                className="mb-6 lg:hidden"
              >
                <item.illustration />
              </motion.div>
            )}

            {/* Image with animations */}
            {item.image && !item.illustration && !item.images && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1] as any
                }}
                className="mb-6 overflow-hidden rounded-2xl shadow-xl relative"
              >
                <div className="relative aspect-[4/3] md:aspect-[16/9]">
                  <img
                    src={item.image.src}
                    alt={item.image.alt || item.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {item.image.credit && (
                  <div className="absolute top-2 right-2 text-xs text-white/90 bg-black/50 px-2 py-1 rounded">
                    {item.image.credit}
                  </div>
                )}
              </motion.div>
            )}

            {/* Image Carousel with animations */}
            {item.images && item.images.length > 0 && !item.illustration && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1] as any
                }}
                className="mb-6"
              >
                <ImageCarousel images={item.images} title={item.title} />
              </motion.div>
            )}

            {/* Body - with animation */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1] as any
              }}
              className="text-lg text-neutral-700 leading-relaxed mb-6"
            >
              {item.body}
            </motion.p>

            {/* Video */}
            {item.video && (
              <div className="mb-6 overflow-hidden rounded-2xl shadow-xl">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-2xl"
                    src={`https://www.youtube.com/embed/${item.video.youtubeId}`}
                    title={item.video.title || item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {/* Sources and Metadata Table */}
            {((item.sources && item.sources.length > 0) || item.location || item.category || item.year) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.8,
                  ease: [0.16, 1, 0.3, 1] as any
                }}
                className="bg-neutral-900/5 border border-neutral-200 rounded-xl px-5 py-4 mt-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Sources Column */}
                  {item.sources && item.sources.length > 0 && (
                    <div>
                      <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">Sources</h4>
                      <ul className="space-y-2">
                        {item.sources?.map((source, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            {getSourceIcon(source.type)}
                            {source.url ? (
                              <a
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent-600 hover:text-accent-700 underline underline-offset-2 transition-colors text-sm font-medium"
                              >
                                {source.title}
                              </a>
                            ) : (
                              <span className="text-neutral-700 text-sm">{source.title}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Metadata Column (Location, Category, Year) */}
                  {(item.category || item.year || item.location) && (
                    <div className="space-y-4">
                      {/* Location */}
                      {item.location && (
                        <div>
                          <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Location</h4>
                          <div className="flex items-start gap-2 text-sm">
                            <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {item.location.url ? (
                              <a
                                href={item.location.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent-600 hover:text-accent-700 underline underline-offset-2 transition-colors font-medium"
                              >
                                {item.location.name}
                                {item.location.stillExists === false && (
                                  <span className="text-neutral-400 ml-1">(no longer exists)</span>
                                )}
                              </a>
                            ) : (
                              <span className="text-neutral-700">
                                {item.location.name}
                                {item.location.stillExists === false && (
                                  <span className="text-neutral-400 ml-1">(no longer exists)</span>
                                )}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Category */}
                      {item.category && (
                        <div>
                          <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Category</h4>
                          <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${categoryStyles.bg} ${categoryStyles.text} border ${categoryStyles.accent}`}>
                            {item.category}
                          </span>
                        </div>
                      )}

                      {/* Year */}
                      {item.year && (
                        <div>
                          <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Year</h4>
                          <span className="text-base text-neutral-700 font-semibold">{item.year}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
            {item.source && !item.sources && (
              <div className="text-sm text-neutral-500 italic border-t border-neutral-200 pt-4">
                Source: {item.source}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function CuriositiesScroll({ curiosities, cityName: _cityName }: CuriositiesScrollProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState(0)


  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle section navigation
  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('[data-curiosity-section]')
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const handleSectionInView = (index: number) => {
    setActiveSection(index)
  }

  return (
    <div className="relative">
      {/* Fixed Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-100 z-50">
        <motion.div
          className="h-full bg-neutral-900"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Navigation Dots - Fixed on right side */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
        {curiosities.map((item, index) => {
          const isActive = activeSection === index
          const categoryStyles = item.category ? getCategoryStyle(item.category) : getCategoryStyle('default')

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(index)}
              className="group relative"
              aria-label={`Jump to curiosity ${index + 1}: ${item.title}`}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? `${categoryStyles.bg} ${categoryStyles.accent} border-2 scale-125 shadow-lg`
                    : 'bg-neutral-300 border border-neutral-400 hover:bg-neutral-400 hover:scale-110'
                }`}
              />
              {/* Tooltip */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                <div className="bg-neutral-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-xl">
                  {index + 1}. {item.title.substring(0, 40)}{item.title.length > 40 ? '...' : ''}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Curiosities Sections */}
      <div>
        {curiosities.map((item, index) => (
          <div key={item.id} data-curiosity-section>
            {item.videoAnimation ? (
              <VideoAnimationCuriosity
                item={item}
                index={index}
                totalCount={curiosities.length}
                onSectionInView={handleSectionInView}
              />
            ) : (
              <CuriositySection
                item={item}
                index={index}
                totalCount={curiosities.length}
                onSectionInView={handleSectionInView}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
