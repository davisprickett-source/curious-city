'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView as useInViewHook } from 'react-intersection-observer'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ImageCarousel } from './ImageCarousel'

interface DarkHistoryItem {
  id: string
  title: string
  body: string
  category?: 'unsolved' | 'crime' | 'disaster' | 'mystery' | 'macabre' | 'haunting' | 'cold-case'
  year?: string
  verdict?: string
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
  moreInfo?: Array<{
    type: 'video' | 'podcast' | 'article'
    title: string
    url: string
  }>
}

interface DarkHistoryScrollProps {
  items: DarkHistoryItem[]
  cityName: string
}

// Category badge color helper with darker theme
const getCategoryStyle = (category: string) => {
  switch (category) {
    case 'unsolved':
      return { bg: 'bg-red-900/20', text: 'text-red-900', accent: 'border-red-900/40' }
    case 'crime':
      return { bg: 'bg-orange-900/20', text: 'text-orange-900', accent: 'border-orange-900/40' }
    case 'disaster':
      return { bg: 'bg-amber-900/20', text: 'text-amber-900', accent: 'border-amber-900/40' }
    case 'mystery':
      return { bg: 'bg-purple-900/20', text: 'text-purple-900', accent: 'border-purple-900/40' }
    case 'macabre':
      return { bg: 'bg-neutral-900', text: 'text-neutral-100', accent: 'border-neutral-700' }
    case 'haunting':
      return { bg: 'bg-indigo-900/20', text: 'text-indigo-900', accent: 'border-indigo-900/40' }
    case 'cold-case':
      return { bg: 'bg-slate-900/20', text: 'text-slate-900', accent: 'border-slate-900/40' }
    default:
      return { bg: 'bg-neutral-800', text: 'text-neutral-100', accent: 'border-neutral-600' }
  }
}

function DarkHistorySection({ item, index, onSectionInView }: { item: DarkHistoryItem; index: number; totalCount: number; onSectionInView?: (index: number) => void }) {
  const { ref: inViewRef, inView } = useInViewHook({
    threshold: 0.15,
    triggerOnce: false,
  })

  const prefersReducedMotion = useReducedMotion()
  const isEven = index % 2 === 0
  const categoryStyles = item.category ? getCategoryStyle(item.category) : getCategoryStyle('default')

  // Notify parent when in view
  useEffect(() => {
    if (inView && onSectionInView) {
      onSectionInView(index)
    }
  }, [inView, index, onSectionInView])

  // Animation variants - dark, dramatic
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

  // Get category-specific background gradient - darker theme
  const getCategoryGradient = () => {
    if (!item.category) return 'bg-gradient-to-br from-neutral-900/5 to-white'
    switch (item.category) {
      case 'unsolved':
        return 'bg-gradient-to-br from-red-950/10 via-red-900/5 to-white'
      case 'crime':
        return 'bg-gradient-to-br from-orange-950/10 via-orange-900/5 to-white'
      case 'disaster':
        return 'bg-gradient-to-br from-amber-950/10 via-amber-900/5 to-white'
      case 'mystery':
        return 'bg-gradient-to-br from-purple-950/10 via-purple-900/5 to-white'
      case 'macabre':
        return 'bg-gradient-to-br from-neutral-950/15 via-neutral-900/8 to-white'
      case 'haunting':
        return 'bg-gradient-to-br from-indigo-950/10 via-indigo-900/5 to-white'
      case 'cold-case':
        return 'bg-gradient-to-br from-slate-950/10 via-slate-900/5 to-white'
      default:
        return 'bg-gradient-to-br from-neutral-900/5 to-white'
    }
  }

  const carouselImages = item.images || (item.image ? [item.image] : [])

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
              {/* Header with category and year */}
              <div className="flex items-baseline gap-2 flex-wrap mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-tight">{item.title}</h3>
              </div>

              <div className="flex items-center gap-2 mb-4">
                {item.category && (
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryStyles.bg} ${categoryStyles.text} border ${categoryStyles.accent}`}>
                    {item.category}
                  </span>
                )}
                {item.year && (
                  <span className="text-sm text-neutral-400 font-medium">{item.year}</span>
                )}
              </div>

              {/* Verdict */}
              {item.verdict && (
                <div className="bg-neutral-900/5 border border-neutral-200 rounded-xl px-5 py-4 mb-6">
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">What Happened</span>
                  <p className="text-neutral-800 mt-2 leading-relaxed">{item.verdict}</p>
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

              {/* Location */}
              {item.location && (
                <div className="flex items-start gap-2 text-sm text-neutral-500 mb-4">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    {item.location.name}
                    {item.location.stillExists === false && (
                      <span className="text-neutral-400 ml-1">(no longer exists)</span>
                    )}
                  </span>
                </div>
              )}

              {/* Sources - premium formatting */}
              {item.sources && item.sources.length > 0 && (
                <div className="bg-neutral-900/5 border border-neutral-200 rounded-xl px-5 py-4 mt-6">
                  <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">Sources & Further Reading</h4>
                  <ul className="space-y-2">
                    {item.sources?.map((source, idx) => {
                      // Get icon based on source type
                      const getSourceIcon = () => {
                        switch (source.type) {
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

                      return (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          {getSourceIcon()}
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
                            {(source.author || source.publisher || source.platform || source.show || source.director || source.year || source.isbn) && (
                              <span className="text-neutral-600">
                                {source.author && <span> by {source.author}</span>}
                                {source.publisher && <span> • {source.publisher}</span>}
                                {source.platform && <span> • {source.platform}</span>}
                                {source.show && <span> • {source.show}</span>}
                                {source.director && <span> • dir. {source.director}</span>}
                                {source.year && <span> • {source.year}</span>}
                                {source.isbn && <span> • ISBN: {source.isbn}</span>}
                              </span>
                            )}
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
              {item.source && !item.sources && (
                <div className="bg-neutral-900/5 border border-neutral-200 rounded-xl px-5 py-4 mt-6">
                  <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Source</h4>
                  <p className="text-sm text-neutral-700">{item.source}</p>
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
    <section ref={inViewRef} className={`min-h-[70vh] flex items-center py-16 px-4 ${getCategoryGradient()} transition-colors duration-1000`}>
      <div className="max-w-5xl mx-auto w-full">
        <div className={`flex flex-col md:flex-row gap-8 md:gap-12 items-start ${isEven ? '' : 'md:flex-row-reverse'}`}>
          {/* Animated Number - no parallax */}
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
            className="flex-1 min-w-0"
          >
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 leading-tight mb-3">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 flex-wrap">
                {item.category && (
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryStyles.bg} ${categoryStyles.text} border ${categoryStyles.accent}`}>
                    {item.category}
                  </span>
                )}
                {item.year && (
                  <span className="text-sm text-neutral-400 font-medium">{item.year}</span>
                )}
              </div>
            </div>

            {/* Verdict with animation */}
            {item.verdict && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] as any }}
                className="bg-neutral-900/5 border border-neutral-200 rounded-xl px-5 py-4 mb-6"
              >
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">What Happened</span>
                <p className="text-neutral-800 mt-2 leading-relaxed">{item.verdict}</p>
              </motion.div>
            )}

            {/* Images with animations - no parallax */}
            {carouselImages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1] as any
                }}
                className="mb-6"
              >
                <ImageCarousel images={carouselImages as any} />
              </motion.div>
            )}

            {/* Body - with animation */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1] as any
              }}
              className="text-lg text-neutral-700 leading-relaxed mb-6"
            >
              {item.body}
            </motion.p>

            {/* Location */}
            {item.location && (
              <div className="flex items-start gap-2 text-sm text-neutral-500 mb-4">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  {item.location.name}
                  {item.location.stillExists === false && (
                    <span className="text-neutral-400 ml-1">(no longer exists)</span>
                  )}
                </span>
              </div>
            )}

            {/* Sources - premium formatting */}
            {item.sources && item.sources.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
                className="bg-neutral-900/5 border border-neutral-200 rounded-xl px-5 py-4 mt-6"
              >
                <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">Sources & Further Reading</h4>
                <ul className="space-y-2">
                  {item.sources?.map((source, idx) => {
                    // Get icon based on source type
                    const getSourceIcon = () => {
                      switch (source.type) {
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

                    return (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        {getSourceIcon()}
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
                          {(source.author || source.publisher || source.platform || source.show || source.director || source.year || source.isbn) && (
                            <span className="text-neutral-600">
                              {source.author && <span> by {source.author}</span>}
                              {source.publisher && <span> • {source.publisher}</span>}
                              {source.platform && <span> • {source.platform}</span>}
                              {source.show && <span> • {source.show}</span>}
                              {source.director && <span> • dir. {source.director}</span>}
                              {source.year && <span> • {source.year}</span>}
                              {source.isbn && <span> • ISBN: {source.isbn}</span>}
                            </span>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            )}
            {item.source && !item.sources && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
                className="bg-neutral-900/5 border border-neutral-200 rounded-xl px-5 py-4 mt-6"
              >
                <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Source</h4>
                <p className="text-sm text-neutral-700">{item.source}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function DarkHistoryScroll({ items, cityName: _cityName }: DarkHistoryScrollProps) {
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
    const sections = document.querySelectorAll('[data-dark-history-section]')
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const handleSectionInView = (index: number) => {
    setActiveSection(index)
  }

  return (
    <div className="relative">
      {/* Fixed Progress Bar - darker theme */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-900/10 z-50">
        <motion.div
          className="h-full bg-neutral-900"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Navigation Dots - Fixed on right side */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
        {items.map((item, index) => {
          const isActive = activeSection === index
          const categoryStyles = item.category ? getCategoryStyle(item.category) : getCategoryStyle('default')

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(index)}
              className="group relative"
              aria-label={`Jump to dark history ${index + 1}: ${item.title}`}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? `${categoryStyles.bg} ${categoryStyles.accent} border-2 scale-125 shadow-lg`
                    : 'bg-neutral-400 border border-neutral-500 hover:bg-neutral-500 hover:scale-110'
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

      {/* Dark History Sections */}
      <div>
        {items.map((item, index) => (
          <div key={item.id} data-dark-history-section>
            <DarkHistorySection
              item={item}
              index={index}
              totalCount={items.length}
              onSectionInView={handleSectionInView}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
