'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { getCategoryStyle } from './MobileHiddenGemsLayout'
import { ShareButton } from '@/components/ShareButton'
import { SaveButton } from '@/components/SaveButton'
import { ImageCarousel } from '../ImageCarousel'
import { ExpandableCardContent } from '../ExpandableCardContent'

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
}

interface HiddenGemCardProps {
  gem: HiddenGemItem
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

const detailsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.9,
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
      {/* Main badge */}
      <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white bg-gradient-to-br from-accent-500 to-accent-700">
        <span className="text-xl font-bold text-white">{number}</span>
      </div>
    </motion.div>
  )
}

function DetailsBox({ gem }: { gem: HiddenGemItem }) {
  const hasDetails = gem.address || gem.website || gem.phone || gem.hours || gem.price

  if (!hasDetails) return null

  return (
    <div className="bg-neutral-900/5 border-y border-neutral-200 -mx-8 lg:-mx-10 px-8 lg:px-10 py-4 mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
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
  )
}

export function HiddenGemCard({ gem, index, onInView, url }: HiddenGemCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const [isImageExpanded, setIsImageExpanded] = useState(false)
  const [expandedImageIndex, setExpandedImageIndex] = useState(0)
  const images = gem.images || (gem.image ? [gem.image] : [])

  // Notify parent when in view
  useEffect(() => {
    if (inView && onInView) {
      onInView()
    }
  }, [inView, onInView])

  return (
    <motion.article
      id={gem.id}
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
                {gem.name}
              </h3>
            </motion.div>
          </div>

          {/* Description - with animation */}
          <motion.p
            variants={descriptionVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-lg text-neutral-700 leading-relaxed"
          >
            {gem.description}
          </motion.p>

          {/* Details Box - with animation */}
          <motion.div
            variants={detailsVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <DetailsBox gem={gem} />
          </motion.div>

          {/* Share and Save Buttons */}
          <motion.div
            variants={detailsVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="mt-6 pt-6 border-t border-neutral-200 flex justify-center gap-6"
          >
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
            {/* Full Card Image Carousel - Covers Entire Space */}
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
