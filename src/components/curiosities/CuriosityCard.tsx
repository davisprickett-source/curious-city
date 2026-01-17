'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ShareButton } from '@/components/ShareButton'
import { SaveButton } from '@/components/SaveButton'
import { ImageCarousel } from '../ImageCarousel'
import { ExpandableCardContent } from '../ExpandableCardContent'

interface CuriosityItem {
  id: string
  title: string
  body: string
  category?: string
  year?: string
  articleSlug?: string
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
  video?: {
    youtubeId: string
    title?: string
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

interface CuriosityCardProps {
  item: CuriosityItem
  index: number
  onInView?: () => void
  url: string
  citySlug?: string
}

// Card entry animation variants with alternating left/right
const getCardVariants = (index: number) => ({
  hidden: {
    opacity: 0,
    y: 30,
    x: index % 2 === 0 ? -120 : 120
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
})

// Staggered animation variants for card content - slower, more engaging
const numberBadgeVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: [0.34, 1.56, 0.64, 1] as const, // Spring-like bounce
    },
  },
}

const titleVariants = {
  hidden: { opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: 0.7,
      delay: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

const descriptionVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

const bodyVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

const detailsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

function NumberBadge({ number, inView }: { number: number; inView: boolean }) {
  return (
    <motion.div
      className="flex-shrink-0"
      variants={numberBadgeVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white bg-gradient-to-br from-accent-500 to-accent-700">
        <span className="text-xl font-bold text-white">{number}</span>
      </div>
    </motion.div>
  )
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

function MetadataBox({ item }: { item: CuriosityItem }) {
  const hasMetadata = item.location || (item.sources && item.sources.length > 0) || item.source || item.year

  if (!hasMetadata) return null

  return (
    <div className="bg-neutral-900/5 border border-neutral-200 rounded-xl px-5 py-4">
      <div className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto_1fr] gap-x-8 gap-y-4">
        {/* Location */}
        {item.location && (
          <>
            <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Location</h4>
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
          </>
        )}

        {/* Sources */}
        {(item.sources && item.sources.length > 0) ? (
          <>
            <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Sources</h4>
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
          </>
        ) : item.source && (
          <>
            <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Source</h4>
            <span className="text-sm text-neutral-700">{item.source}</span>
          </>
        )}

        {/* Year */}
        {item.year && (
          <>
            <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Year</h4>
            <span className="text-base text-neutral-700 font-semibold">{item.year}</span>
          </>
        )}
      </div>
    </div>
  )
}

export function CuriosityCard({ item, index, onInView, url, citySlug }: CuriosityCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const [isImageExpanded, setIsImageExpanded] = useState(false)
  const images = item.images || (item.image ? [item.image] : [])

  // Notify parent when in view
  useEffect(() => {
    if (inView && onInView) {
      onInView()
    }
  }, [inView, onInView])

  return (
    <motion.article
      id={item.id}
      ref={ref}
      variants={getCardVariants(index)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="group bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-accent-600 relative h-[600px] flex flex-col lg:flex-row"
    >
      {/* Left Column - Image (35%) */}
      {images.length > 0 && (
        <div className="lg:w-[35%] flex-shrink-0 relative h-full">
          <ImageCarousel images={images} className="h-full w-full rounded-none" />

          {/* Expand Button with Elongating Arrows */}
          <motion.button
            onClick={() => setIsImageExpanded(true)}
            className="absolute bottom-4 right-4 text-white drop-shadow-lg z-10"
            aria-label="Expand image"
            whileHover="hover"
            initial="initial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              {/* Top-left arrow */}
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={{
                  initial: { d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9" },
                  hover: { d: "M2 2v6m0-6h6m-6 0L10.5 10.5" }
                }}
                transition={{ duration: 0.2 }}
              />
              {/* Bottom-left arrow */}
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={{
                  initial: { d: "M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15" },
                  hover: { d: "M2 22v-6m0 6h6m-6 0L10.5 13.5" }
                }}
                transition={{ duration: 0.2 }}
              />
              {/* Top-right arrow */}
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={{
                  initial: { d: "M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9" },
                  hover: { d: "M22 2h-6m6 0v6m0-6L13.5 10.5" }
                }}
                transition={{ duration: 0.2 }}
              />
              {/* Bottom-right arrow */}
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={{
                  initial: { d: "M20.25 20.25h-4.5m4.5 0v-4.5m0 4.5L15 15" },
                  hover: { d: "M22 22h-6m6 0v-6m0 6L13.5 13.5" }
                }}
                transition={{ duration: 0.2 }}
              />
            </svg>
          </motion.button>
        </div>
      )}

      {/* Right Column - Content (65%) */}
      <div className={`flex-1 flex flex-col min-h-0 ${!images.length ? 'lg:w-full' : ''}`}>
        <ExpandableCardContent className="flex-1">
          <div className="p-8 lg:p-10">
          {/* Header - with animation */}
          <div className="flex items-start gap-6 mb-6">
            <NumberBadge number={index + 1} inView={inView} />

            <motion.div
              variants={titleVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="flex-1 min-w-0"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 leading-tight">
                {item.title}
              </h3>
            </motion.div>
          </div>

          {/* Body - with animation */}
          <motion.p
            variants={descriptionVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-lg text-neutral-700 leading-relaxed mb-6"
          >
            {item.body}
          </motion.p>

          {/* Read More Link - if article exists */}
          {item.articleSlug && citySlug && (
            <motion.div
              variants={detailsVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="mb-6"
            >
              <a
                href={`/${citySlug}/articles/${item.articleSlug}`}
                className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-semibold transition-colors group/link"
              >
                <span>Read the full story</span>
                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          )}

          {/* Video */}
          {item.video && (
            <motion.div
              variants={descriptionVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="mb-6 overflow-hidden rounded-2xl shadow-xl"
            >
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  src={`https://www.youtube.com/embed/${item.video.youtubeId}`}
                  title={item.video.title || item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          )}

          {/* Metadata Box - with animation */}
          <motion.div
            variants={detailsVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <MetadataBox item={item} />
          </motion.div>

          {/* Share and Save Buttons - centered at bottom */}
          <motion.div
            variants={detailsVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="mt-6 pt-6 border-t border-neutral-200 flex justify-center gap-6"
          >
            <ShareButton title={item.title} url={url} />
            <SaveButton
              name={item.title}
              description={item.body}
              address={item.location?.name}
              website={item.location?.url}
              category={item.category}
              url={`${url}#${item.id}`}
            />
          </motion.div>
          </div>
        </ExpandableCardContent>
      </div>

      {/* Expanded Image Overlay with Carousel */}
      <AnimatePresence>
        {isImageExpanded && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-50 rounded-3xl overflow-hidden bg-black/95"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full"
              onClick={() => setIsImageExpanded(false)}
            >
              <ImageCarousel
                images={images}
                className="h-full w-full rounded-none"
              />
            </motion.div>

            {/* Close Button with Line Swap Animation */}
            <motion.button
              onClick={() => setIsImageExpanded(false)}
              className="absolute top-4 right-4 text-white drop-shadow-lg z-10"
              aria-label="Close expanded image"
              whileHover="hover"
              initial="initial"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                {/* First line (top-left to bottom-right, swaps to bottom-left to top-right) */}
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={{
                    initial: { d: "M6 18L18 6" },
                    hover: { d: "M6 6L18 18" }
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                {/* Second line (bottom-left to top-right, swaps to top-left to bottom-right) */}
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={{
                    initial: { d: "M6 6l12 12" },
                    hover: { d: "M6 18L18 6" }
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
