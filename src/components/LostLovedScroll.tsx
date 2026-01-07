'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView as useInViewHook } from 'react-intersection-observer'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ImageCarousel } from './ImageCarousel'
import Image from 'next/image'

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
  source?: string
}

interface LostLovedScrollProps {
  items: LostLovedItem[]
  cityName: string
}

function LostLovedSection({
  item,
  index,
  onSectionInView,
}: {
  item: LostLovedItem
  index: number
  onSectionInView?: (index: number) => void
}) {
  const { ref: inViewRef, inView } = useInViewHook({
    threshold: 0.15,
    triggerOnce: false,
  })

  const isEven = index % 2 === 0

  useEffect(() => {
    if (inView && onSectionInView) {
      onSectionInView(index)
    }
  }, [inView, index, onSectionInView])

  // Vintage, nostalgic animation variants - softer than dark history
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

  // Get all images (handle both formats)
  const allImages = item.images || (item.image ? [item.image] : [])

  return (
    <motion.section
      ref={inViewRef}
      className="relative min-h-[70vh] flex items-center py-16 px-4"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {/* Vintage background gradient - sepia/amber tones */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        isEven
          ? 'from-amber-50/30 via-white to-white'
          : 'from-orange-50/30 via-white to-white'
      }`} />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className={`flex flex-col md:flex-row gap-8 md:gap-12 items-start ${isEven ? '' : 'md:flex-row-reverse'}`}>
          {/* Number Badge - Vintage style, inline */}
          <motion.div
            variants={numberVariants}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center shadow-lg border-2 border-amber-200">
                <span className="text-2xl md:text-3xl font-bold text-white">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={contentVariants}
            className="flex-1 space-y-6"
          >
            {/* Header */}
            <div className="mb-4">
              {/* Years Badge */}
              {item.yearsOpen && (
                <div className="inline-block px-4 py-1 bg-amber-100 border border-amber-300 rounded-full mb-3">
                  <span className="text-sm font-semibold text-amber-900 tracking-wide">
                    {item.yearsOpen}
                  </span>
                </div>
              )}

              {/* Name */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-900 mb-2 leading-tight">
                {item.name}
              </h3>

              {/* Neighborhood */}
              {item.neighborhood && (
                <p className="text-base md:text-lg text-neutral-500 font-medium">
                  {item.neighborhood}
                </p>
              )}
            </div>

            {/* Image - now in content flow */}
            {allImages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  {allImages.length === 1 ? (
                    <div className="relative aspect-[4/3] md:aspect-[16/9]">
                      <Image
                        src={allImages[0].src}
                        alt={allImages[0].alt || item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                      {/* Subtle sepia overlay for vintage feel */}
                      <div className="absolute inset-0 bg-amber-900/5 mix-blend-multiply pointer-events-none" />
                      {/* Image credit overlay */}
                      {allImages[0].credit && (
                        <div className="absolute top-2 right-2 text-xs text-white/90 bg-black/50 px-2 py-1 rounded">
                          {allImages[0].credit}
                        </div>
                      )}
                    </div>
                  ) : (
                    <ImageCarousel
                      images={allImages.map(img => ({ ...img, alt: img.alt || item.name }))}
                    />
                  )}
                </div>
              </motion.div>
            )}

            {/* Description */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Why Missed - Emotional callout */}
            <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg p-6">
              {/* Cracked heart icon */}
              <div className="absolute top-3 right-3 opacity-10">
                <svg className="w-12 h-12 text-amber-800" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  <path d="M12 5.5L10.5 10.5L12 12L13.5 10.5L12 5.5z" fill="white" opacity="0.8" />
                  <path d="M11.5 12.5L10 16.5L12 18L14 16.5L12.5 12.5L12 13L11.5 12.5z" fill="white" opacity="0.8" />
                </svg>
              </div>
              <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2">
                Why It's Missed
              </h4>
              <p className="text-neutral-800 italic leading-relaxed">
                "{item.whyMissed}"
              </p>
            </div>

            {/* Community Voice - Pull quote */}
            {item.communityVoice && (
              <blockquote className="relative pl-6 py-4 border-l-4 border-accent-400 bg-white/50 rounded-r-lg">
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
              <div className="bg-gradient-to-br from-neutral-50 to-amber-50/30 border border-neutral-200 rounded-xl p-6 shadow-sm">
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export function LostLovedScroll({ items, cityName }: LostLovedScrollProps) {
  const [activeSection, setActiveSection] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      const totalScroll = documentHeight - windowHeight
      const progress = (scrollTop / totalScroll) * 100

      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSectionInView = (index: number) => {
    setActiveSection(index)
  }

  if (!items || items.length === 0) {
    return (
      <div className="container-page py-20 text-center">
        <p className="text-neutral-500">No lost & loved entries yet for {cityName}.</p>
      </div>
    )
  }

  return (
    <div className="relative bg-gradient-to-b from-white via-amber-50/20 to-white">
      {/* Fixed Progress Bar - Vintage style */}
      <div className="fixed top-0 left-0 w-full h-1 bg-amber-100 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Navigation Dots - Right side */}
      {!prefersReducedMotion && items.length > 1 && (
        <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
          <ul className="space-y-3">
            {items.map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    const element = document.getElementById(`lost-loved-${index}`)
                    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }}
                  className={`block w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    index === activeSection
                      ? 'bg-amber-500 border-amber-500 scale-125'
                      : 'bg-white border-amber-300 hover:border-amber-500 hover:scale-110'
                  }`}
                  aria-label={`Jump to ${items[index].name}`}
                />
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Sections */}
      <div>
        {items.map((item, index) => (
          <div key={item.id} id={`lost-loved-${index}`}>
            <LostLovedSection
              item={item}
              index={index}
              onSectionInView={handleSectionInView}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
