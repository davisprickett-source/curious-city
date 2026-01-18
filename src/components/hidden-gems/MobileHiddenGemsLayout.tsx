'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useInView as useInViewHook } from 'react-intersection-observer'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ImageCarousel } from '../ImageCarousel'
import { NewsletterSignup } from '../NewsletterSignup'
import { FeedbackSection } from '../FeedbackSection'
import { ExploreCard, type ExploreLink } from '../scrollytelling/ExploreCard'
import { ShareButton } from '@/components/ShareButton'
import { SaveButton } from '@/components/SaveButton'
import { useScrollToAnchor } from '@/hooks/useScrollToAnchor'
import { StickyBottomAd } from '@/components/ads/mobile/StickyBottomAd'
import { DrawerAd } from '@/components/ads/mobile/DrawerAd'
import { NativeAdSection } from '@/components/ads/NativeAdCard'
import { useAdTrigger } from '@/components/ads/AdTrigger'
import { mobileAdConfig } from '@/lib/ads/config'

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

interface MobileHiddenGemsLayoutProps {
  gems: HiddenGemItem[]
  cityName: string
  exploreLinks?: ExploreLink[]
  footer?: React.ReactNode
  url: string
}

// Category badge color helper - vibrant, colorful theme for hidden gems
export const getCategoryStyle = (category: string) => {
  const lowerCategory = category.toLowerCase()

  if (lowerCategory.includes('architecture')) {
    return {
      bg: 'bg-blue-600/20',
      text: 'text-blue-900',
      accent: 'border-blue-600/40',
      dotColor: 'rgb(37, 99, 235)', // blue-600
      borderColor: 'rgba(37, 99, 235, 0.4)'
    }
  } else if (lowerCategory.includes('cemetery') || lowerCategory.includes('historic')) {
    return {
      bg: 'bg-amber-600/20',
      text: 'text-amber-900',
      accent: 'border-amber-600/40',
      dotColor: 'rgb(217, 119, 6)', // amber-600
      borderColor: 'rgba(217, 119, 6, 0.4)'
    }
  } else if (lowerCategory.includes('oddity') || lowerCategory.includes('oddities')) {
    return {
      bg: 'bg-purple-600/20',
      text: 'text-purple-900',
      accent: 'border-purple-600/40',
      dotColor: 'rgb(147, 51, 234)', // purple-600
      borderColor: 'rgba(147, 51, 234, 0.4)'
    }
  } else if (lowerCategory.includes('archaeological') || lowerCategory.includes('mining') || lowerCategory.includes('ruins')) {
    return {
      bg: 'bg-stone-600/20',
      text: 'text-stone-900',
      accent: 'border-stone-600/40',
      dotColor: 'rgb(87, 83, 78)', // stone-600
      borderColor: 'rgba(87, 83, 78, 0.4)'
    }
  } else if (lowerCategory.includes('waterfall') || lowerCategory.includes('nature')) {
    return {
      bg: 'bg-emerald-600/20',
      text: 'text-emerald-900',
      accent: 'border-emerald-600/40',
      dotColor: 'rgb(5, 150, 105)', // emerald-600
      borderColor: 'rgba(5, 150, 105, 0.4)'
    }
  } else if (lowerCategory.includes('bar') || lowerCategory.includes('speakeasy')) {
    return {
      bg: 'bg-rose-600/20',
      text: 'text-rose-900',
      accent: 'border-rose-600/40',
      dotColor: 'rgb(225, 29, 72)', // rose-600
      borderColor: 'rgba(225, 29, 72, 0.4)'
    }
  } else if (lowerCategory.includes('art')) {
    return {
      bg: 'bg-fuchsia-600/20',
      text: 'text-fuchsia-900',
      accent: 'border-fuchsia-600/40',
      dotColor: 'rgb(192, 38, 211)', // fuchsia-600
      borderColor: 'rgba(192, 38, 211, 0.4)'
    }
  } else if (lowerCategory.includes('cinema') || lowerCategory.includes('theater')) {
    return {
      bg: 'bg-indigo-600/20',
      text: 'text-indigo-900',
      accent: 'border-indigo-600/40',
      dotColor: 'rgb(79, 70, 229)', // indigo-600
      borderColor: 'rgba(79, 70, 229, 0.4)'
    }
  } else if (lowerCategory.includes('bookstore') || lowerCategory.includes('library')) {
    return {
      bg: 'bg-teal-600/20',
      text: 'text-teal-900',
      accent: 'border-teal-600/40',
      dotColor: 'rgb(13, 148, 136)', // teal-600
      borderColor: 'rgba(13, 148, 136, 0.4)'
    }
  } else {
    return {
      bg: 'bg-neutral-600/20',
      text: 'text-neutral-900',
      accent: 'border-neutral-600/40',
      dotColor: 'rgb(82, 82, 82)', // neutral-600
      borderColor: 'rgba(82, 82, 82, 0.4)'
    }
  }
}

function HiddenGemSection({ gem, index, onSectionInView, url, title }: { gem: HiddenGemItem; index: number; onSectionInView?: (index: number) => void; url: string; title: string }) {
  const { ref: inViewRef, inView } = useInViewHook({
    threshold: 0.15,
    triggerOnce: true,
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
      <section id={gem.id} ref={inViewRef} className={`min-h-[70vh] flex items-center py-16 px-4 ${getCategoryGradient()}`}>
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col gap-8">
            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Header with Number */}
              <div className="flex items-start gap-4 mb-4">
                {/* Number Badge */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-accent-600 flex items-center justify-center shadow-md">
                    <span className="text-xl font-bold text-white">{index + 1}</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-tight">{gem.name}</h3>
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
                <div className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-xl px-5 py-4 space-y-3 mb-6">
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
              <div className="flex justify-center gap-6 mb-6">
                <ShareButton
                  title={gem.name}
                  url={url}
                  anchor={gem.id}
                  shareText={gem.description.length > 120 ? gem.description.slice(0, 117) + '...' : gem.description}
                />
                <SaveButton
                  name={gem.name}
                  description={gem.description}
                  address={gem.address}
                  hours={gem.hours}
                  phone={gem.phone}
                  website={gem.website}
                  category={gem.category}
                  url={`${url}#${gem.id}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Animated version
  return (
    <motion.section
      id={gem.id}
      ref={inViewRef}
      className={`min-h-[70vh] flex items-center py-16 px-4 ${getCategoryGradient()}`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col gap-8">
          {/* Animated Content */}
          <motion.div className="flex-1 min-w-0" variants={contentVariants}>
            {/* Header with Number */}
            <div className="flex items-start gap-4 mb-4">
              {/* Number Badge */}
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-accent-600 flex items-center justify-center shadow-md">
                  <span className="text-xl font-bold text-white">{index + 1}</span>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-tight">{gem.name}</h3>
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

            {/* Share and Save Buttons */}
            <div className="flex justify-center gap-6 mt-6">
              <ShareButton
                title={gem.name}
                url={url}
                anchor={gem.id}
                shareText={gem.description.length > 120 ? gem.description.slice(0, 117) + '...' : gem.description}
              />
              <SaveButton
                name={gem.name}
                description={gem.description}
                address={gem.address}
                hours={gem.hours}
                phone={gem.phone}
                website={gem.website}
                category={gem.category}
                url={`${url}#${gem.id}`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default function MobileHiddenGemsLayout({
  gems,
  cityName,
  exploreLinks = [],
  footer,
  url
}: MobileHiddenGemsLayoutProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState(0)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // Scroll to anchor on page load (for deep links)
  useScrollToAnchor(300)

  // Page ID for ad targeting
  const pageId = `${cityName.toLowerCase().replace(/\s+/g, '-')}-hidden-gems-mobile`

  // Drawer ad trigger (50% scroll depth or 30 seconds)
  const handleDrawerTrigger = useCallback(() => {
    // Check if we haven't already shown the drawer this page
    const drawerShown = sessionStorage.getItem(`drawer_shown_${pageId}`)
    if (!drawerShown) {
      setIsDrawerOpen(true)
      sessionStorage.setItem(`drawer_shown_${pageId}`, 'true')
    }
  }, [pageId])

  useAdTrigger(mobileAdConfig.drawer.triggers, handleDrawerTrigger, mobileAdConfig.drawer.enabled)

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

      {/* Hidden Gems Sections */}
      <div>
        {gems.map((gem, index) => (
          <div key={gem.id}>
            <div data-hidden-gem-section>
              <HiddenGemSection
                gem={gem}
                index={index}
                onSectionInView={handleSectionInView}
                url={url}
                title={gem.name}
              />
            </div>

            {/* Native ad section every 3 gems (after 3rd, 6th, 9th, etc.) - mobile only */}
            {(index + 1) % 3 === 0 && index < gems.length - 1 && (
              <div className="lg:hidden">
                <NativeAdSection
                  pageId={pageId}
                  index={index}
                  targeting={{ city: cityName, category: 'hidden-gems' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Outro Sections */}
      <div className="bg-neutral-900 pt-16">
        <div className="max-w-5xl mx-auto px-6 pb-20">
          {/* Divider line */}
          <div className="border-t border-white/20 mb-12" />

          {/* Share and Subscribe - Two columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Share Section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Share this guide</h3>
              <p className="text-sm text-neutral-300 mb-4">Know someone who&apos;d love these hidden gems?</p>
              <ShareButton title={`${cityName}'s Hidden Gems`} url={url} onDark dropdownPosition="below" />
            </div>

            {/* Newsletter Section */}
            <div>
              <NewsletterSignup variant="dark" />
            </div>
          </div>

          {/* Explore More Section */}
          {exploreLinks.length > 0 && (
            <div className="text-center space-y-12 mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Explore More
                </h2>
                <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed max-w-3xl mx-auto">
                  Discover more curated guides and local favorites.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8 w-full">
                {exploreLinks.map((link) => (
                  <ExploreCard key={link.href} link={link} />
                ))}
              </div>
            </div>
          )}

          {/* Feedback Section */}
          <FeedbackSection variant="dark" pageTitle={`${cityName}'s Hidden Gems`} />

          {/* Divider before footer */}
          <div className="border-t border-white/20 mt-16" />
        </div>

        {/* Integrated Footer */}
        {footer}
      </div>

      {/* Mobile Sticky Bottom Ad */}
      <StickyBottomAd
        pageId={pageId}
        targeting={{ city: cityName, category: 'hidden-gems' }}
      />

      {/* Mobile Drawer Ad */}
      <DrawerAd
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        pageId={pageId}
        targeting={{ city: cityName, category: 'hidden-gems' }}
      />
    </div>
  )
}
