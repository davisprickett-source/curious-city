'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ShareButton } from '@/components/ShareButton'
import { SaveButton } from '@/components/SaveButton'
import { ImageCarousel } from '../ImageCarousel'

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

interface LostLovedCardProps {
  item: LostLovedItem
  index: number
  onInView?: () => void
  url: string
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
      ease: [0.16, 1, 0.3, 1],
    },
  },
})

// Staggered animation variants for card content
const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
      ease: 'easeOut',
    },
  },
}

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: 'easeOut',
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
      delay: 0.3,
      ease: 'easeOut',
    },
  },
}

function NumberBadge({ number }: { number: number }) {
  return (
    <div className="flex-shrink-0">
      <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white bg-gradient-to-br from-accent-500 to-accent-700">
        <span className="text-xl font-bold text-white">{number}</span>
      </div>
    </div>
  )
}

function MetadataBox({ item }: { item: LostLovedItem }) {
  const hasMetadata = item.lastAddress || (item.sources && item.sources.length > 0)

  if (!hasMetadata) return null

  return (
    <div className="bg-gradient-to-br from-neutral-50 to-amber-50/30 border border-neutral-200 rounded-xl p-6 shadow-sm">
      <div className="space-y-4">
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
  )
}

export function LostLovedCard({ item, index, onInView, url }: LostLovedCardProps) {
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

      {/* Right Column - Content (65%) - Scrollable */}
      <div className={`flex-1 flex flex-col min-h-0 ${!images.length ? 'lg:w-full' : ''}`}>
        <div
          className="flex-1 overflow-y-scroll p-8 lg:p-10 scroll-smooth card-scrollbar min-h-0"
          onWheel={(e) => {
            // Prevent scroll from bubbling to parent when scrolling within card
            const element = e.currentTarget
            const isAtTop = element.scrollTop === 0
            const isAtBottom = element.scrollHeight - element.scrollTop === element.clientHeight

            // Only prevent propagation if we're actively scrolling within bounds
            if ((e.deltaY < 0 && !isAtTop) || (e.deltaY > 0 && !isAtBottom)) {
              e.stopPropagation()
            }
          }}
        >
          {/* Header - with animation */}
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex items-start gap-6 mb-6"
          >
            <NumberBadge number={index + 1} />

            <div className="flex-1 min-w-0">
              {/* Years Badge */}
              {item.yearsOpen && (
                <div className="inline-block px-4 py-1 bg-amber-100 border border-amber-300 rounded-full mb-3">
                  <span className="text-sm font-semibold text-amber-900 tracking-wide">
                    {item.yearsOpen}
                  </span>
                </div>
              )}

              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 leading-tight">
                {item.name}
              </h3>

              {item.neighborhood && (
                <p className="text-base md:text-lg text-neutral-500 font-medium mt-1">
                  {item.neighborhood}
                </p>
              )}
            </div>
          </motion.div>

          {/* Description - with animation */}
          <motion.p
            variants={descriptionVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-lg text-neutral-700 leading-relaxed mb-6"
          >
            {item.description}
          </motion.p>

          {/* Why Missed - Emotional callout */}
          <motion.div
            variants={descriptionVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-lg p-6 mb-6"
          >
            {/* Broken heart icon */}
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
          </motion.div>

          {/* Community Voice - Pull quote */}
          {item.communityVoice && (
            <motion.blockquote
              variants={descriptionVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="relative pl-6 py-4 border-l-4 border-accent-400 bg-white/50 rounded-r-lg mb-6"
            >
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
            </motion.blockquote>
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
            <ShareButton title={item.name} url={url} />
            <SaveButton
              name={item.name}
              description={item.description}
              address={item.lastAddress}
              tip={item.whyMissed}
              category={item.category}
              url={`${url}#${item.id}`}
            />
          </motion.div>
        </div>
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
