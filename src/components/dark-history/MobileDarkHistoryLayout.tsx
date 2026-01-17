'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useInView as useInViewHook } from 'react-intersection-observer'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ImageCarousel } from '../ImageCarousel'
import { NewsletterSignup } from '../NewsletterSignup'
import { FeedbackSection } from '../FeedbackSection'
import { ShareLinks } from '../ShareLinks'
import { ExploreCard, type ExploreLink } from '../scrollytelling/ExploreCard'
import { ShareButton } from '@/components/ShareButton'
import { SaveButton } from '@/components/SaveButton'
import { StickyBottomAd } from '@/components/ads/mobile/StickyBottomAd'
import { DrawerAd } from '@/components/ads/mobile/DrawerAd'
import { NativeAdSection } from '@/components/ads/NativeAdCard'
import { useAdTrigger } from '@/components/ads/AdTrigger'
import { mobileAdConfig } from '@/lib/ads/config'

interface DarkHistoryItem {
  id: string
  title: string
  body: string
  category?: 'unsolved' | 'crime' | 'disaster' | 'mystery' | 'macabre' | 'haunting' | 'cold-case'
  year?: string
  verdict?: string
  articleSlug?: string
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
  location?: {
    name: string
    stillExists?: boolean
    coordinates?: {
      lat: number
      lng: number
    }
  }
  source?: string
  sources?: Array<{
    type?: 'article' | 'book' | 'documentary' | 'podcast' | 'film' | 'video' | 'report' | 'other'
    title: string
    url?: string
    publisher?: string
    author?: string
    isbn?: string
    platform?: string
    show?: string
    director?: string
    year?: string | number
  }>
}

interface MobileDarkHistoryLayoutProps {
  items: DarkHistoryItem[]
  cityName: string
  citySlug: string
  exploreLinks?: ExploreLink[]
  footer?: React.ReactNode
  url: string
}

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

function DarkHistorySection({ item, index, onSectionInView, url, title, citySlug }: { item: DarkHistoryItem; index: number; onSectionInView?: (index: number) => void; url: string; title: string; citySlug?: string }) {
  const { ref: inViewRef, inView } = useInViewHook({
    threshold: 0.15,
    triggerOnce: false,
  })

  const prefersReducedMotion = useReducedMotion()
  const isEven = index % 2 === 0

  // Notify parent when in view
  useEffect(() => {
    if (inView && onSectionInView) {
      onSectionInView(index)
    }
  }, [inView, index, onSectionInView])

  // Animation variants - slower, more engaging
  const contentVariants = {
    hidden: { opacity: 0, x: isEven ? -60 : 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  const carouselImages = item.images || (item.image ? [item.image] : [])

  if (prefersReducedMotion) {
    return (
      <section ref={inViewRef} className="min-h-[70vh] flex items-center py-16 px-4 bg-gradient-to-br from-neutral-50/30 via-white to-white">
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

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-tight inline mr-3">
                    {item.title}
                  </h3>
                  {item.year && (
                    <span className="text-lg text-neutral-600 font-semibold inline-block">{item.year}</span>
                  )}
                </div>
              </div>

              {/* What Happened / Verdict */}
              {item.verdict && (
                <div className="bg-neutral-900/5 border-y border-neutral-200 -mx-4 px-4 py-4 mb-6">
                  <h4 className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-2">
                    What Happened
                  </h4>
                  <p className="text-neutral-800 leading-relaxed">{item.verdict}</p>
                </div>
              )}

              {/* Images */}
              {carouselImages.length > 0 && (
                <div className="mb-6">
                  <ImageCarousel images={carouselImages as any} />
                </div>
              )}

              {/* Body */}
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {item.body}
              </p>

              {/* Read More Link - if article exists */}
              {item.articleSlug && citySlug && (
                <div className="mb-6">
                  <a
                    href={`/${citySlug}/articles/${item.articleSlug}`}
                    className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-semibold transition-colors group/link"
                  >
                    <span>Read the full story</span>
                    <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              )}

              {/* Location */}
              {item.location && (
                <div className="bg-neutral-900/5 border-y border-neutral-200 -mx-4 px-4 py-4 mb-6">
                  <h4 className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-2">Location</h4>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="flex-1">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.location.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-600 hover:text-accent-700 underline underline-offset-2 transition-colors font-medium text-sm"
                      >
                        {item.location.name}
                      </a>
                      {item.location.stillExists === false && (
                        <span className="text-neutral-600 text-sm ml-1"> • No longer exists</span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Sources */}
              {((item.sources && item.sources.length > 0) || item.source) && (
                <div className="bg-neutral-900/5 border-y border-neutral-200 -mx-4 px-4 py-4 mb-6">
                  <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                    Sources & Further Reading
                  </h4>

                  {item.sources && item.sources.length > 0 ? (
                    <ul className="space-y-2.5">
                      {item.sources.map((source, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          {getSourceIcon(source.type)}
                          <div className="flex-1 min-w-0">
                            {source.url ? (
                              <a
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent-600 hover:text-accent-700 underline underline-offset-2 transition-colors font-medium"
                              >
                                {source.title}
                              </a>
                            ) : (
                              <span className="text-neutral-700 font-medium">{source.title}</span>
                            )}
                            {(source.author || source.publisher || source.platform || source.show || source.director || source.year) && (
                              <div className="text-neutral-600 text-xs mt-0.5">
                                {source.author && <span>{source.author}</span>}
                                {source.publisher && <span>{source.author ? ' • ' : ''}{source.publisher}</span>}
                                {source.platform && <span> • {source.platform}</span>}
                                {source.show && <span> • {source.show}</span>}
                                {source.director && <span> • dir. {source.director}</span>}
                                {source.year && <span> • {source.year}</span>}
                              </div>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : item.source && (
                    <p className="text-sm text-neutral-700">{item.source}</p>
                  )}
                </div>
              )}

              <div className="flex justify-center gap-6">
                <ShareButton title={title} url={url} />
                <SaveButton
                  name={item.title}
                  description={item.body}
                  address={item.location?.name}
                  category={item.category}
                  url={`${url}#${item.id}`}
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
      ref={inViewRef}
      className="min-h-[70vh] flex items-center py-16 px-4 bg-gradient-to-br from-neutral-50/30 via-white to-white"
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

              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-tight inline mr-3">
                  {item.title}
                </h3>
                {item.year && (
                  <span className="text-lg text-neutral-600 font-semibold inline-block">{item.year}</span>
                )}
              </div>
            </div>

            {/* What Happened / Verdict */}
            {item.verdict && (
              <div className="bg-neutral-900/5 border-y border-neutral-200 -mx-4 px-4 py-4 mb-6">
                <h4 className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-2">
                  What Happened
                </h4>
                <p className="text-neutral-800 leading-relaxed">{item.verdict}</p>
              </div>
            )}

            {/* Images */}
            {carouselImages.length > 0 && (
              <div className="mb-6">
                <ImageCarousel images={carouselImages as any} />
              </div>
            )}

            {/* Body */}
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              {item.body}
            </p>

            {/* Read More Link - if article exists */}
            {item.articleSlug && citySlug && (
              <div className="mb-6">
                <a
                  href={`/${citySlug}/articles/${item.articleSlug}`}
                  className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-semibold transition-colors group/link"
                >
                  <span>Read the full story</span>
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            )}

            {/* Location */}
            {item.location && (
              <div className="bg-neutral-900/5 border-y border-neutral-200 -mx-4 px-4 py-4 mb-6">
                <h4 className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-2">Location</h4>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="flex-1">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.location.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-600 hover:text-accent-700 underline underline-offset-2 transition-colors font-medium text-sm"
                    >
                      {item.location.name}
                    </a>
                    {item.location.stillExists === false && (
                      <span className="text-neutral-600 text-sm ml-1"> • No longer exists</span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Sources */}
            {((item.sources && item.sources.length > 0) || item.source) && (
              <div className="bg-neutral-900/5 border-y border-neutral-200 -mx-4 px-4 py-4 mb-6">
                <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                  Sources & Further Reading
                </h4>

                {item.sources && item.sources.length > 0 ? (
                  <ul className="space-y-2.5">
                    {item.sources.map((source, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        {getSourceIcon(source.type)}
                        <div className="flex-1 min-w-0">
                          {source.url ? (
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent-600 hover:text-accent-700 underline underline-offset-2 transition-colors font-medium"
                            >
                              {source.title}
                            </a>
                          ) : (
                            <span className="text-neutral-700 font-medium">{source.title}</span>
                          )}
                          {(source.author || source.publisher || source.platform || source.show || source.director || source.year) && (
                            <div className="text-neutral-600 text-xs mt-0.5">
                              {source.author && <span>{source.author}</span>}
                              {source.publisher && <span>{source.author ? ' • ' : ''}{source.publisher}</span>}
                              {source.platform && <span> • {source.platform}</span>}
                              {source.show && <span> • {source.show}</span>}
                              {source.director && <span> • dir. {source.director}</span>}
                              {source.year && <span> • {source.year}</span>}
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : item.source && (
                  <p className="text-sm text-neutral-700">{item.source}</p>
                )}
              </div>
            )}

            <div className="flex justify-center gap-6">
              <ShareButton title={title} url={url} />
              <SaveButton
                name={item.title}
                description={item.body}
                address={item.location?.name}
                category={item.category}
                url={`${url}#${item.id}`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default function MobileDarkHistoryLayout({
  items,
  cityName,
  citySlug,
  exploreLinks = [],
  footer,
  url
}: MobileDarkHistoryLayoutProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState(0)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // Page ID for ad targeting
  const pageId = `${cityName.toLowerCase().replace(/\s+/g, '-')}-dark-history-mobile`

  // Drawer ad trigger
  const handleDrawerTrigger = useCallback(() => {
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

  const handleSectionInView = (index: number) => {
    setActiveSection(index)
  }

  return (
    <div className="relative bg-gradient-to-b from-white via-neutral-50/20 to-white">
      {/* Fixed Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-neutral-200 z-50">
        <motion.div
          className="h-full bg-accent-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Dark History Sections */}
      <div>
        {items.map((item, index) => (
          <div key={item.id}>
            <div data-dark-history-section>
              <DarkHistorySection
                item={item}
                index={index}
                onSectionInView={handleSectionInView}
                url={url}
                title={item.title}
                citySlug={citySlug}
              />
            </div>

            {/* Native ad section every 3 items - mobile only */}
            {(index + 1) % 3 === 0 && index < items.length - 1 && (
              <div className="lg:hidden">
                <NativeAdSection
                  pageId={pageId}
                  index={index}
                  targeting={{ city: cityName, category: 'dark-history' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Outro Sections */}
      <div className="bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-neutral-800/90 backdrop-blur-md pt-16">
        <div className="max-w-5xl mx-auto px-6 pb-20">
          {/* Divider line */}
          <div className="border-t border-white/20 mb-12" />

          {/* Share and Subscribe - Two columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Share Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Share this guide</h3>
              <p className="text-sm text-neutral-300 mb-4">Know someone who&apos;d be into this dark history?</p>
              <ShareLinks title={`${cityName}'s Dark History`} url={url} onDark />
            </div>

            {/* Newsletter Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
              <NewsletterSignup variant="dark" />
            </div>
          </div>

          {/* Explore More Section */}
          <div className="text-center space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Explore More {cityName}
              </h2>
              <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed max-w-3xl mx-auto">
                Discover more lists and guides curated by locals.
              </p>
            </div>

            {exploreLinks.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
                {exploreLinks.map((link) => (
                  <ExploreCard key={link.href} link={link} />
                ))}
              </div>
            )}
          </div>

          {/* Feedback Section */}
          <FeedbackSection variant="dark" pageTitle={`${cityName}'s Dark History`} />
        </div>

        {/* Integrated Footer */}
        {footer && (
          <div className="relative border-t border-white/10">
            {footer}
          </div>
        )}
      </div>

      {/* Mobile Sticky Bottom Ad */}
      <StickyBottomAd
        pageId={pageId}
        targeting={{ city: cityName, category: 'dark-history' }}
      />

      {/* Mobile Drawer Ad */}
      <DrawerAd
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        pageId={pageId}
        targeting={{ city: cityName, category: 'dark-history' }}
      />
    </div>
  )
}
