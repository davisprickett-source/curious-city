'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView as useInViewHook } from 'react-intersection-observer'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ImageCarousel } from './ImageCarousel'

interface HiddenGemItem {
  id: string
  name: string
  description: string
  category?: string
  address?: string
  website?: string
  phone?: string
  hours?: string
  price?: string
  image?: {
    src: string
    alt?: string
    credit?: string
  }
  images?: Array<{
    src: string
    alt?: string
    credit?: string
  }>
  coordinates?: {
    lat: number
    lng: number
  }
}

interface HiddenGemsScrollProps {
  gems: HiddenGemItem[]
  cityName: string
}

// Category badge color helper - vibrant, colorful theme for hidden gems
const getCategoryStyle = (category: string) => {
  const lowerCategory = category.toLowerCase()

  if (lowerCategory.includes('architecture')) {
    return { bg: 'bg-blue-600/20', text: 'text-blue-900', accent: 'border-blue-600/40' }
  } else if (lowerCategory.includes('cemetery') || lowerCategory.includes('historic')) {
    return { bg: 'bg-amber-600/20', text: 'text-amber-900', accent: 'border-amber-600/40' }
  } else if (lowerCategory.includes('oddity') || lowerCategory.includes('oddities')) {
    return { bg: 'bg-purple-600/20', text: 'text-purple-900', accent: 'border-purple-600/40' }
  } else if (lowerCategory.includes('archaeological') || lowerCategory.includes('mining') || lowerCategory.includes('ruins')) {
    return { bg: 'bg-stone-600/20', text: 'text-stone-900', accent: 'border-stone-600/40' }
  } else if (lowerCategory.includes('waterfall') || lowerCategory.includes('nature')) {
    return { bg: 'bg-emerald-600/20', text: 'text-emerald-900', accent: 'border-emerald-600/40' }
  } else if (lowerCategory.includes('bar') || lowerCategory.includes('speakeasy')) {
    return { bg: 'bg-rose-600/20', text: 'text-rose-900', accent: 'border-rose-600/40' }
  } else if (lowerCategory.includes('art')) {
    return { bg: 'bg-fuchsia-600/20', text: 'text-fuchsia-900', accent: 'border-fuchsia-600/40' }
  } else if (lowerCategory.includes('cinema') || lowerCategory.includes('theater')) {
    return { bg: 'bg-indigo-600/20', text: 'text-indigo-900', accent: 'border-indigo-600/40' }
  } else if (lowerCategory.includes('bookstore') || lowerCategory.includes('library')) {
    return { bg: 'bg-teal-600/20', text: 'text-teal-900', accent: 'border-teal-600/40' }
  } else {
    return { bg: 'bg-neutral-600/20', text: 'text-neutral-900', accent: 'border-neutral-600/40' }
  }
}

function HiddenGemSection({ gem, index, onSectionInView }: { gem: HiddenGemItem; index: number; onSectionInView?: (index: number) => void }) {
  const { ref: inViewRef, inView } = useInViewHook({
    threshold: 0.15,
    triggerOnce: false,
  })

  const prefersReducedMotion = useReducedMotion()
  const isEven = index % 2 === 0
  const categoryStyles = gem.category ? getCategoryStyle(gem.category) : getCategoryStyle('default')

  // Notify parent when in view
  useEffect(() => {
    if (inView && onSectionInView) {
      onSectionInView(index)
    }
  }, [inView, index, onSectionInView])

  // Animation variants - bright, energetic
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

  // Get category-specific background gradient - colorful theme
  const getCategoryGradient = () => {
    if (!gem.category) return 'bg-gradient-to-br from-neutral-50 to-white'
    const lowerCategory = gem.category.toLowerCase()

    if (lowerCategory.includes('architecture')) {
      return 'bg-gradient-to-br from-blue-50 via-blue-25 to-white'
    } else if (lowerCategory.includes('cemetery') || lowerCategory.includes('historic')) {
      return 'bg-gradient-to-br from-amber-50 via-amber-25 to-white'
    } else if (lowerCategory.includes('oddity') || lowerCategory.includes('oddities')) {
      return 'bg-gradient-to-br from-purple-50 via-purple-25 to-white'
    } else if (lowerCategory.includes('archaeological') || lowerCategory.includes('mining') || lowerCategory.includes('ruins')) {
      return 'bg-gradient-to-br from-stone-50 via-stone-25 to-white'
    } else if (lowerCategory.includes('waterfall') || lowerCategory.includes('nature')) {
      return 'bg-gradient-to-br from-emerald-50 via-emerald-25 to-white'
    } else if (lowerCategory.includes('bar') || lowerCategory.includes('speakeasy')) {
      return 'bg-gradient-to-br from-rose-50 via-rose-25 to-white'
    } else if (lowerCategory.includes('art')) {
      return 'bg-gradient-to-br from-fuchsia-50 via-fuchsia-25 to-white'
    } else if (lowerCategory.includes('cinema') || lowerCategory.includes('theater')) {
      return 'bg-gradient-to-br from-indigo-50 via-indigo-25 to-white'
    } else if (lowerCategory.includes('bookstore') || lowerCategory.includes('library')) {
      return 'bg-gradient-to-br from-teal-50 via-teal-25 to-white'
    } else {
      return 'bg-gradient-to-br from-neutral-50 to-white'
    }
  }

  const carouselImages = gem.images || (gem.image ? [gem.image] : [])

  if (prefersReducedMotion) {
    return (
      <section ref={inViewRef} className={`min-h-[70vh] flex items-center py-16 px-4 ${getCategoryGradient()}`}>
        <div className="max-w-5xl mx-auto w-full">
          <div className={`flex flex-col md:flex-row gap-8 items-start ${isEven ? '' : 'md:flex-row-reverse'}`}>
            {/* Number */}
            <div className="flex-shrink-0">
              <div className={`w-20 h-20 rounded-2xl ${categoryStyles.bg} border-2 ${categoryStyles.accent} flex items-center justify-center shadow-lg`}>
                <span className={`text-4xl font-bold ${categoryStyles.text}`}>{index + 1}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Header */}
              <div className="flex items-baseline gap-3 flex-wrap mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-tight">{gem.name}</h3>
                {gem.category && (
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryStyles.bg} ${categoryStyles.text} border ${categoryStyles.accent}`}>
                    {gem.category}
                  </span>
                )}
              </div>

              {/* Images */}
              {carouselImages.length > 0 && (
                <div className="mb-6">
                  <ImageCarousel images={carouselImages as any} />
                </div>
              )}

              {/* Description */}
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {gem.description}
              </p>

              {/* Details Box */}
              {(gem.address || gem.website || gem.phone || gem.hours || gem.price) && (
                <div className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-xl px-5 py-4 space-y-3">
                  {gem.address && (() => {
                    const addressParts = gem.address.split(', ')
                    const streetAddress = addressParts[0]
                    const cityStateZip = addressParts.slice(1).join(', ')
                    return (
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gem.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 text-neutral-700 hover:text-neutral-900 group"
                      >
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-neutral-400 group-hover:text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div className="flex flex-col">
                          <span className="text-base font-semibold underline underline-offset-2 decoration-neutral-300 group-hover:decoration-neutral-500">
                            {streetAddress}
                          </span>
                          <span className="text-sm text-neutral-500">
                            {cityStateZip}
                          </span>
                        </div>
                      </a>
                    )
                  })()}
                  {gem.website && (
                    <a
                      href={gem.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900"
                    >
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <span className="text-base underline underline-offset-2">Website</span>
                    </a>
                  )}
                  {gem.phone && (
                    <a
                      href={`tel:${gem.phone}`}
                      className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900"
                    >
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-base">{gem.phone}</span>
                    </a>
                  )}
                  {gem.hours && (
                    <div className="flex items-start gap-3 text-neutral-600">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-base">{gem.hours}</span>
                    </div>
                  )}
                  {gem.price && (
                    <div className="flex items-center gap-3 text-neutral-600">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-base">{gem.price}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Animated version
  return (
    <motion.section
      ref={inViewRef}
      className={`min-h-[70vh] flex items-center py-16 px-4 ${getCategoryGradient()}`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className={`flex flex-col md:flex-row gap-8 items-start ${isEven ? '' : 'md:flex-row-reverse'}`}>
          {/* Animated Number Badge */}
          <motion.div className="flex-shrink-0" variants={numberVariants}>
            <div className={`w-20 h-20 rounded-2xl ${categoryStyles.bg} border-2 ${categoryStyles.accent} flex items-center justify-center shadow-lg backdrop-blur-sm`}>
              <span className={`text-4xl font-bold ${categoryStyles.text}`}>{index + 1}</span>
            </div>
          </motion.div>

          {/* Animated Content */}
          <motion.div className="flex-1 min-w-0" variants={contentVariants}>
            {/* Header */}
            <div className="flex items-baseline gap-3 flex-wrap mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-tight">{gem.name}</h3>
              {gem.category && (
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryStyles.bg} ${categoryStyles.text} border ${categoryStyles.accent}`}>
                  {gem.category}
                </span>
              )}
            </div>

            {/* Images */}
            {carouselImages.length > 0 && (
              <div className="mb-6">
                <ImageCarousel images={carouselImages as any} />
              </div>
            )}

            {/* Description */}
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              {gem.description}
            </p>

            {/* Details Box */}
            {(gem.address || gem.website || gem.phone || gem.hours || gem.price) && (
              <div className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-xl px-5 py-4 space-y-3">
                {gem.address && (() => {
                  const addressParts = gem.address.split(', ')
                  const streetAddress = addressParts[0]
                  const cityStateZip = addressParts.slice(1).join(', ')
                  return (
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gem.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-neutral-700 hover:text-neutral-900 group"
                    >
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-neutral-400 group-hover:text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div className="flex flex-col">
                        <span className="text-base font-semibold underline underline-offset-2 decoration-neutral-300 group-hover:decoration-neutral-500">
                          {streetAddress}
                        </span>
                        <span className="text-sm text-neutral-500">
                          {cityStateZip}
                        </span>
                      </div>
                    </a>
                  )
                })()}
                {gem.website && (
                  <a
                    href={gem.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span className="text-base underline underline-offset-2">Website</span>
                  </a>
                )}
                {gem.phone && (
                  <a
                    href={`tel:${gem.phone}`}
                    className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-base">{gem.phone}</span>
                  </a>
                )}
                {gem.hours && (
                  <div className="flex items-start gap-3 text-neutral-600">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-base">{gem.hours}</span>
                  </div>
                )}
                {gem.price && (
                  <div className="flex items-center gap-3 text-neutral-600">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-base">{gem.price}</span>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default function HiddenGemsScroll({ gems, cityName: _cityName }: HiddenGemsScrollProps) {
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
    const sections = document.querySelectorAll('[data-hidden-gem-section]')
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const handleSectionInView = (index: number) => {
    setActiveSection(index)
  }

  return (
    <div className="relative">
      {/* Fixed Progress Bar - rust/accent color */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-100 z-50">
        <motion.div
          className="h-full bg-accent-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Navigation Dots - Fixed on right side */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
        {gems.map((gem, index) => {
          const isActive = activeSection === index
          const categoryStyles = gem.category ? getCategoryStyle(gem.category) : getCategoryStyle('default')

          return (
            <button
              key={gem.id}
              onClick={() => scrollToSection(index)}
              className="group relative"
              aria-label={`Jump to hidden gem ${index + 1}: ${gem.name}`}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ease-out ${
                  isActive
                    ? `${categoryStyles.bg} ${categoryStyles.accent} border-2 scale-125 shadow-lg`
                    : 'bg-neutral-400 border border-neutral-500 group-hover:bg-neutral-600 group-hover:scale-150 group-hover:shadow-md'
                }`}
              />
              {/* Tooltip - wider, max 2 lines */}
              <div className="absolute right-7 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
                <div className="bg-neutral-900/95 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-lg shadow-2xl w-[320px] whitespace-normal">
                  <span className="font-medium">{index + 1}.</span>{' '}
                  <span className="line-clamp-2">{gem.name}</span>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Hidden Gems Sections */}
      <div>
        {gems.map((gem, index) => (
          <div key={gem.id} data-hidden-gem-section>
            <HiddenGemSection
              gem={gem}
              index={index}
              onSectionInView={handleSectionInView}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
