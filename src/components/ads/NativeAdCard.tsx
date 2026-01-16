'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { UniversalAd } from './UniversalAd'
import { createAdSlot } from '@/lib/ads/slots'
import type { AdSize } from '@/lib/ads/types'

interface NativeAdCardProps {
  pageId: string
  index: number
  targeting?: Record<string, string>
  variant?: 'listicle' | 'compact' | 'minimal'
  size?: AdSize
  className?: string
}

// Animation variants matching HiddenGemCard
const getCardVariants = (index: number) => ({
  hidden: {
    opacity: 0,
    y: 30,
    x: index % 2 === 0 ? -60 : 60,
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

export function NativeAdCard({
  pageId,
  index,
  targeting,
  variant = 'listicle',
  size = 'rectangle',
  className = '',
}: NativeAdCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const slot = createAdSlot(
    `${pageId}-native-${index}`,
    size,
    { ...targeting, format: 'native', position: `native-${index}` }
  )

  if (variant === 'minimal') {
    // Simple inline ad with minimal styling
    return (
      <div ref={ref} className={`py-6 ${className}`}>
        <div className="text-center mb-2">
          <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
            Sponsored
          </span>
        </div>
        <div className="flex justify-center">
          <UniversalAd slot={slot} />
        </div>
      </div>
    )
  }

  if (variant === 'compact') {
    // Compact card for tighter spaces
    return (
      <motion.div
        ref={ref}
        variants={getCardVariants(index)}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className={`bg-gradient-to-br from-neutral-50 to-white rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 ${className}`}
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
              Sponsored Pick
            </span>
          </div>
          <div className="flex justify-center">
            <UniversalAd slot={slot} />
          </div>
        </div>
      </motion.div>
    )
  }

  // Default: listicle variant - matches HiddenGemCard styling
  return (
    <motion.div
      ref={ref}
      variants={getCardVariants(index)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={`group bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 border-t-4 border-amber-400 ${className}`}
    >
      {/* Desktop: Side-by-side layout like HiddenGemCard */}
      <div className="flex flex-col lg:flex-row min-h-[300px] lg:min-h-[400px]">
        {/* Left side - Branding/Visual area */}
        <div className="lg:w-[35%] flex-shrink-0 bg-gradient-to-br from-amber-50 via-amber-100/50 to-orange-50 p-8 flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <span className="text-sm uppercase tracking-wider text-amber-700 font-semibold">
            Sponsored Pick
          </span>
          <p className="text-xs text-amber-600/70 mt-2 text-center max-w-[200px]">
            From our partners
          </p>
        </div>

        {/* Right side - Ad content */}
        <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium">
              Advertisement
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
          </div>

          <div className="flex justify-center items-center flex-1">
            <UniversalAd slot={slot} className="max-w-full" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Simplified version for mobile/responsive use
export function NativeAdSection({
  pageId,
  index,
  targeting,
  className = '',
}: Omit<NativeAdCardProps, 'variant' | 'size'>) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const slot = createAdSlot(
    `${pageId}-native-section-${index}`,
    'rectangle',
    { ...targeting, format: 'native-section', position: `section-${index}` }
  )

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`py-8 px-4 bg-gradient-to-br from-amber-50/50 to-orange-50/30 ${className}`}
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-amber-300" />
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="text-xs uppercase tracking-wider text-amber-600 font-semibold">
              Sponsored Pick
            </span>
          </div>
          <div className="h-px w-12 bg-amber-300" />
        </div>

        {/* Ad container */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex justify-center">
          <UniversalAd slot={slot} />
        </div>

        {/* Footer */}
        <p className="text-xs text-center text-neutral-400 mt-4">
          Advertisements help support our content
        </p>
      </div>
    </motion.div>
  )
}
