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

interface LostLovedItem {
  id: string
  name: string
  description: string
  whyMissed: string
  neighborhood?: string
  yearsOpen?: string
  lastAddress?: string
  communityVoice?: string
  category?: string
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
  sources?: Array<{
    title: string
    url?: string
    publisher?: string
    author?: string
  }>
}

interface MobileLostLovedLayoutProps {
  items: LostLovedItem[]
  cityName: string
  exploreLinks?: ExploreLink[]
  footer?: React.ReactNode
  url: string
}

function LostLovedSection({ item, index, onSectionInView, url, title }: { item: LostLovedItem; index: number; onSectionInView?: (index: number) => void; url: string; title: string }) {
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

  // Animation variants - vintage, nostalgic
  const numberVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, x: isEven ? -60 : 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  // Vintage background gradient - sepia/amber tones
  const getBackgroundGradient = () => {
    return isEven
      ? 'bg-gradient-to-br from-amber-50/30 via-white to-white'
      : 'bg-gradient-to-br from-orange-50/30 via-white to-white'
  }

  const carouselImages = item.images || (item.image ? [item.image] : [])

  if (prefersReducedMotion) {
    return (
      <section ref={inViewRef} className={`min-h-[70vh] flex items-center py-16 px-4 ${getBackgroundGradient()}`}>
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

                <div>
                  {/* Years Badge */}
                  {item.yearsOpen && (
                    <div className="inline-block px-4 py-1 bg-amber-100 border border-amber-300 rounded-full mb-3">
                      <span className="text-sm font-semibold text-amber-900 tracking-wide">
                        {item.yearsOpen}
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-2 leading-tight">
                    {item.name}
                  </h3>

                  {item.neighborhood && (
                    <p className="text-base md:text-lg text-neutral-500 font-medium">
                      {item.neighborhood}
                    </p>
                  )}
                </div>
              </div>

              {/* Images */}
              {carouselImages.length > 0 && (
                <div className="mb-6">
                  <ImageCarousel images={carouselImages as any} />
                </div>
              )}

              {/* Description */}
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Why Missed - Emotional callout */}
              <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg p-6 mb-6">
                <div className="absolute top-3 right-3 opacity-10">
                  <svg className="w-14 h-14 text-amber-800" viewBox="0 0 48 48" fill="currentColor">
                    <path d="M14 7C9 7 5 11 5 16c0 8 7 13 17 24V16l-1 3-1-2-1 3-1-2-1 3-1-2V16C15 11 14 7 14 7z" />
                    <path d="M34 7C39 7 43 11 43 16c0 8-7 13-17 24V16l1 3 1-2 1 3 1-2 1 3 1-2V16C33 11 34 7 34 7z" transform="translate(2.5, 0)" />
                  </svg>
                </div>
                <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2">
                  Why It&apos;s Missed
                </h4>
                <p className="text-neutral-800 italic leading-relaxed">
                  &quot;{item.whyMissed}&quot;
                </p>
              </div>

              {/* Community Voice - Pull quote */}
              {item.communityVoice && (
                <blockquote className="relative pl-6 py-4 border-l-4 border-accent-400 bg-white/50 rounded-r-lg mb-6">
                  <svg
                    className="absolute top-4 left-2 w-6 h-6 text-accent-300 opacity-40"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-neutral-700 italic text-lg">
                    {item.communityVoice}
                  </p>
                </blockquote>
              )}

              {/* Metadata - Vintage card style */}
              {(item.lastAddress || (item.sources && item.sources.length > 0)) && (
                <div className="bg-gradient-to-br from-neutral-50 to-amber-50/30 border border-neutral-200 rounded-xl p-6 shadow-sm mb-6">
                  <div className="space-y-4">
                    {/* Last Address with Map Link */}
                    {item.lastAddress && (
                      <div>
                        <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                          Last Known Address
                        </h4>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.lastAddress)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium transition-colors group"
                        >
                          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="group-hover:underline">{item.lastAddress}</span>
                        </a>
                      </div>
                    )}

                    {/* Sources */}
                    {item.sources && item.sources.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">
                          Sources
                        </h4>
                        <ul className="space-y-2">
                          {item.sources.map((source, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <svg
                                className="w-4 h-4 flex-shrink-0 mt-1 text-amber-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                              {source.url ? (
                                <a
                                  href={source.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-accent-600 hover:text-accent-700 underline underline-offset-2 transition-colors"
                                >
                                  {source.title}
                                </a>
                              ) : (
                                <span className="text-sm text-neutral-700">{source.title}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="flex justify-center gap-6">
                <ShareButton title={title} url={url} />
                <SaveButton
                  name={item.name}
                  description={item.description}
                  address={item.lastAddress}
                  tip={item.whyMissed}
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
      className={`min-h-[70vh] flex items-center py-16 px-4 ${getBackgroundGradient()}`}
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

              <div>
                {/* Years Badge */}
                {item.yearsOpen && (
                  <div className="inline-block px-4 py-1 bg-amber-100 border border-amber-300 rounded-full mb-3">
                    <span className="text-sm font-semibold text-amber-900 tracking-wide">
                      {item.yearsOpen}
                    </span>
                  </div>
                )}

                <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-2 leading-tight">
                  {item.name}
                </h3>

                {item.neighborhood && (
                  <p className="text-base md:text-lg text-neutral-500 font-medium">
                    {item.neighborhood}
                  </p>
                )}
              </div>
            </div>

            {/* Images */}
            {carouselImages.length > 0 && (
              <div className="mb-6">
                <ImageCarousel images={carouselImages as any} />
              </div>
            )}

            {/* Description */}
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              {item.description}
            </p>

            {/* Why Missed - Emotional callout */}
            <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg p-6 mb-6">
              <div className="absolute top-3 right-3 opacity-10">
                <svg className="w-14 h-14 text-amber-800" viewBox="0 0 48 48" fill="currentColor">
                  <path d="M14 7C9 7 5 11 5 16c0 8 7 13 17 24V16l-1 3-1-2-1 3-1-2-1 3-1-2V16C15 11 14 7 14 7z" />
                  <path d="M34 7C39 7 43 11 43 16c0 8-7 13-17 24V16l1 3 1-2 1 3 1-2 1 3 1-2V16C33 11 34 7 34 7z" transform="translate(2.5, 0)" />
                </svg>
              </div>
              <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2">
                Why It&apos;s Missed
              </h4>
              <p className="text-neutral-800 italic leading-relaxed">
                &quot;{item.whyMissed}&quot;
              </p>
            </div>

            {/* Community Voice - Pull quote */}
            {item.communityVoice && (
              <blockquote className="relative pl-6 py-4 border-l-4 border-accent-400 bg-white/50 rounded-r-lg mb-6">
                <svg
                  className="absolute top-4 left-2 w-6 h-6 text-accent-300 opacity-40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-neutral-700 italic text-lg">
                  {item.communityVoice}
                </p>
              </blockquote>
            )}

            {/* Metadata - Vintage card style */}
            {(item.lastAddress || (item.sources && item.sources.length > 0)) && (
              <div className="bg-gradient-to-br from-neutral-50 to-amber-50/30 border border-neutral-200 rounded-xl p-6 shadow-sm mb-6">
                <div className="space-y-4">
                  {/* Last Address with Map Link */}
                  {item.lastAddress && (
                    <div>
                      <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                        Last Known Address
                      </h4>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.lastAddress)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium transition-colors group"
                      >
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="group-hover:underline">{item.lastAddress}</span>
                      </a>
                    </div>
                  )}

                  {/* Sources */}
                  {item.sources && item.sources.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">
                        Sources
                      </h4>
                      <ul className="space-y-2">
                        {item.sources.map((source, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg
                              className="w-4 h-4 flex-shrink-0 mt-1 text-amber-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            {source.url ? (
                              <a
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-accent-600 hover:text-accent-700 underline underline-offset-2 transition-colors"
                              >
                                {source.title}
                              </a>
                            ) : (
                              <span className="text-sm text-neutral-700">{source.title}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="flex justify-center gap-6">
              <ShareButton title={title} url={url} />
              <SaveButton
                name={item.name}
                description={item.description}
                address={item.lastAddress}
                tip={item.whyMissed}
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

export default function MobileLostLovedLayout({
  items,
  cityName,
  exploreLinks = [],
  footer,
  url
}: MobileLostLovedLayoutProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState(0)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // Page ID for ad targeting
  const pageId = `${cityName.toLowerCase().replace(/\s+/g, '-')}-lost-and-loved-mobile`

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
    <div className="relative bg-gradient-to-b from-white via-amber-50/20 to-white">
      {/* Fixed Progress Bar - Vintage amber */}
      <div className="fixed top-0 left-0 w-full h-1 bg-amber-100 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Lost & Loved Sections */}
      <div>
        {items.map((item, index) => (
          <div key={item.id}>
            <div data-lost-loved-section>
              <LostLovedSection
                item={item}
                index={index}
                onSectionInView={handleSectionInView}
                url={url}
                title={item.name}
              />
            </div>

            {/* Native ad section every 3 items - mobile only */}
            {(index + 1) % 3 === 0 && index < items.length - 1 && (
              <div className="lg:hidden">
                <NativeAdSection
                  pageId={pageId}
                  index={index}
                  targeting={{ city: cityName, category: 'lost-and-loved' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Outro Sections */}
      <div className="bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-neutral-800/90 backdrop-blur-md pt-20">
        <div className="max-w-5xl mx-auto space-y-16 px-6 pb-20">
          {/* Share Links */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Share this guide</h3>
            <div className="flex justify-center">
              <ShareLinks title={`${cityName}'s Lost & Loved`} url={url} variant="banner" />
            </div>
          </div>

          {/* Newsletter Signup */}
          <NewsletterSignup variant="dark" />

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
          <FeedbackSection variant="dark" pageTitle={`${cityName}'s Lost & Loved`} />
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
        targeting={{ city: cityName, category: 'lost-and-loved' }}
      />

      {/* Mobile Drawer Ad */}
      <DrawerAd
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        pageId={pageId}
        targeting={{ city: cityName, category: 'lost-and-loved' }}
      />
    </div>
  )
}
