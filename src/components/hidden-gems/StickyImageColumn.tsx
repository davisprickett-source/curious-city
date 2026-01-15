'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ImageCarousel } from '../ImageCarousel'

interface HiddenGemItem {
  id: string
  name: string
  description: string
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
}

interface StickyImageColumnProps {
  gems: HiddenGemItem[]
  activeIndex: number
}

// Image transition variants
const imageVariants = {
  enter: {
    opacity: 0,
    scale: 1.05,
  },
  center: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.6,
    },
  },
}

export function StickyImageColumn({ gems, activeIndex }: StickyImageColumnProps) {
  // Get current gem
  const currentGem = gems[activeIndex]
  if (!currentGem) return null

  // Get images for current gem
  const images = currentGem.images || (currentGem.image ? [currentGem.image] : [])

  if (images.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-neutral-100 rounded-2xl">
        <p className="text-neutral-400 text-lg">No image available</p>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="relative w-full"
        >
          <ImageCarousel
            images={images}
            className="shadow-2xl ring-1 ring-black/5"
          />

          {/* Entry counter overlay */}
          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg">
            {activeIndex + 1} of {gems.length}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
