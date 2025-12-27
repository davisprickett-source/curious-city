'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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
    title: string
    url: string
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

// Get all unique categories
const getCategories = (items: DarkHistoryItem[]) => {
  const categories = new Set<string>()
  items.forEach(item => {
    if (item.category) categories.add(item.category)
  })
  return Array.from(categories)
}

function DarkHistorySection({ item, index, totalCount, onSectionInView }: { item: DarkHistoryItem; index: number; totalCount: number; onSectionInView?: (index: number) => void }) {
  const sectionRef = useRef<HTMLElement>(null)
  const { ref: inViewRef, inView } = useInViewHook({
    threshold: 0.15,
    triggerOnce: false,
  })

  const prefersReducedMotion = useReducedMotion()
  const isEven = index % 2 === 0
  const categoryStyles = item.category ? getCategoryStyle(item.category) : getCategoryStyle('default')

  // Parallax effect for images only
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1.05, 1.05, 0.85])
  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80])

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
      <section ref={setRefs} className={`min-h-[70vh] flex items-center py-16 px-4 ${getCategoryGradient()}`}>
        <div className="max-w-5xl mx-auto w-full">
          <div className={`flex flex-col md:flex-row gap-8 items-start ${isEven ? '' : 'md:flex-row-reverse'}`}>
            {/* Number */}
            <div className="flex-shrink-0">
              <div className={`w-20 h-20 rounded-2xl ${categoryStyles.bg} border-2 ${categoryStyles.accent} flex items-center justify-center shadow-lg`}>
                <span className={`text-4xl font-bold ${categoryStyles.text}`}>{index + 1}</span>
              </div>
              <div className="text-xs text-neutral-400 mt-2 text-center">{index + 1}/{totalCount}</div>
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
                  <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">Sources</h4>
                  <ul className="space-y-2">
                    {item.sources?.map((source, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {source.url ? (
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent-600 hover:text-accent-700 underline underline-offset-2 transition-colors text-sm"
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
    <section ref={setRefs} className={`min-h-[70vh] flex items-center py-16 px-4 ${getCategoryGradient()} transition-colors duration-1000`}>
      <div className="max-w-5xl mx-auto w-full">
        <div className={`flex flex-col md:flex-row gap-8 md:gap-12 items-start ${isEven ? '' : 'md:flex-row-reverse'}`}>
          {/* Animated Number - no parallax */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={numberVariants}
            className="flex-shrink-0"
          >
            <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl ${categoryStyles.bg} border-2 ${categoryStyles.accent} flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500`}>
              <span className={`text-4xl md:text-5xl font-bold ${categoryStyles.text}`}>{index + 1}</span>
            </div>
            <div className="text-xs text-neutral-400 mt-2 text-center font-medium">{index + 1}/{totalCount}</div>
          </motion.div>

          {/* Animated Content */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
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
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] as any }}
                className="bg-neutral-900/5 border border-neutral-200 rounded-xl px-5 py-4 mb-6"
              >
                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">What Happened</span>
                <p className="text-neutral-800 mt-2 leading-relaxed">{item.verdict}</p>
              </motion.div>
            )}

            {/* Images with DRAMATIC animations */}
            {carouselImages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.8 }}
                transition={{
                  duration: 1.8,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1] as any,
                  opacity: { duration: 1.5 }
                }}
                className="mb-6"
              >
                <motion.div
                  style={{
                    scale: prefersReducedMotion ? 1 : imageScale,
                    y: prefersReducedMotion ? 0 : imageY
                  }}
                >
                  <ImageCarousel images={carouselImages as any} />
                </motion.div>
              </motion.div>
            )}

            {/* Body - with animation */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 1.4,
                delay: 0.6,
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
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
                className="bg-neutral-900/5 border border-neutral-200 rounded-xl px-5 py-4 mt-6"
              >
                <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">Sources</h4>
                <ul className="space-y-2">
                  {item.sources?.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {source.url ? (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-600 hover:text-accent-700 underline underline-offset-2 transition-colors text-sm"
                        >
                          {source.title}
                        </a>
                      ) : (
                        <span className="text-neutral-700 text-sm">{source.title}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
            {item.source && !item.sources && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
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

export function DarkHistoryScroll({ items, cityName }: DarkHistoryScrollProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState(0)

  const categories = getCategories(items)
  const filteredItems = selectedCategory
    ? items.filter(item => item.category === selectedCategory)
    : items

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
        {filteredItems.map((item, index) => {
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

      {/* Category Filter Pills */}
      {categories.length > 0 && (
        <div className="sticky top-0 z-40 bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-700 py-4 mb-12">
          <div className="container-page">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === null
                    ? 'bg-white text-neutral-900 shadow-md'
                    : 'bg-neutral-800 text-neutral-200 hover:bg-neutral-700'
                }`}
              >
                All ({items.length})
              </button>
              {categories.map(category => {
                const count = items.filter(item => item.category === category).length
                const styles = getCategoryStyle(category)
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
                      selectedCategory === category
                        ? `${styles.bg} ${styles.text} ${styles.accent} shadow-md`
                        : 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:bg-neutral-700'
                    }`}
                  >
                    {category} ({count})
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Dark History Sections */}
      <div>
        {filteredItems.map((item, index) => (
          <div key={item.id} data-dark-history-section>
            <DarkHistorySection
              item={item}
              index={index}
              totalCount={filteredItems.length}
              onSectionInView={handleSectionInView}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
