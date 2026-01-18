'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import type { NormalizedTour } from '@/lib/viator/types'
import { event } from '@/lib/analytics'

interface TourCardProps {
  tour: NormalizedTour
  index?: number
  variant?: 'listicle' | 'compact' | 'inline'
  citySlug?: string
  placement?: string
  className?: string
}

// Track affiliate click
function trackAffiliateClick(tour: NormalizedTour, placement: string, citySlug?: string) {
  event(
    'affiliate_click',
    'monetization',
    `viator:${tour.category}:${placement}:${tour.productCode}`
  )
}

// Star rating display
function StarRating({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < fullStars
                ? 'text-amber-400'
                : i === fullStars && hasHalfStar
                  ? 'text-amber-400'
                  : 'text-neutral-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-sm text-neutral-500">
        ({reviewCount.toLocaleString()})
      </span>
    </div>
  )
}

// Category badge
function CategoryBadge({ category }: { category: string }) {
  const categoryLabels: Record<string, string> = {
    'ghost-tour': 'Ghost Tour',
    'architecture': 'Architecture',
    'food-tour': 'Food & Drink',
    'city-tour': 'City Tour',
    'outdoor': 'Outdoor',
    'culture': 'Culture',
    'history': 'History',
    'nightlife': 'Nightlife',
    'other': 'Experience',
  }

  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 text-accent-800">
      {categoryLabels[category] || 'Experience'}
    </span>
  )
}

// Partner disclosure badge
function PartnerBadge({ variant }: { variant: 'listicle' | 'compact' | 'inline' }) {
  if (variant === 'inline') {
    return (
      <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
        Experience Partner
      </span>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      </div>
      <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
        Experience Partner
      </span>
    </div>
  )
}

/**
 * Listicle variant - Full card matching HiddenGemCard style
 * For tours page and content feed injection
 */
function ListicleTourCard({ tour, index = 0, citySlug, placement = 'feed' }: TourCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-accent-500"
    >
      <a
        href={tour.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={() => trackAffiliateClick(tour, placement, citySlug)}
        className="flex flex-col lg:flex-row min-h-[400px]"
      >
        {/* Left - Image */}
        {tour.image.src && (
          <div className="lg:w-[40%] flex-shrink-0 relative h-[200px] lg:h-auto">
            <Image
              src={tour.image.src}
              alt={tour.image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r" />

            {/* Duration badge */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {tour.duration}
            </div>
          </div>
        )}

        {/* Right - Content */}
        <div className="flex-1 p-6 lg:p-8 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <PartnerBadge variant="listicle" />
            <CategoryBadge category={tour.category} />
          </div>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-accent-700 transition-colors">
            {tour.title}
          </h3>

          {/* Rating */}
          {tour.rating > 0 && (
            <div className="mb-3">
              <StarRating rating={tour.rating} reviewCount={tour.reviewCount} />
            </div>
          )}

          {/* Description */}
          <p className="text-neutral-600 leading-relaxed flex-1 line-clamp-3">
            {tour.shortDescription}
          </p>

          {/* Highlights */}
          {tour.highlights && tour.highlights.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tour.highlights.slice(0, 3).map((highlight, i) => (
                <span key={i} className="text-xs text-neutral-500 bg-neutral-100 px-2 py-1 rounded">
                  {highlight}
                </span>
              ))}
            </div>
          )}

          {/* Footer - Price & CTA */}
          <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">From</p>
              <p className="text-2xl font-bold text-neutral-900">{tour.price.formatted}</p>
            </div>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-600 text-white font-medium rounded-full group-hover:bg-accent-700 transition-colors">
              Book Now
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </a>
    </motion.article>
  )
}

/**
 * Compact variant - Smaller card for sidebars
 */
function CompactTourCard({ tour, citySlug, placement = 'sidebar' }: TourCardProps) {
  return (
    <a
      href={tour.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={() => trackAffiliateClick(tour, placement, citySlug)}
      className="group block bg-white rounded-xl overflow-hidden shadow-md ring-1 ring-black/5 hover:shadow-lg transition-all"
    >
      {/* Image */}
      {tour.image.src && (
        <div className="relative h-32">
          <Image
            src={tour.image.src}
            alt={tour.image.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="200px"
          />
          <div className="absolute top-2 left-2">
            <PartnerBadge variant="compact" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <h4 className="font-semibold text-neutral-900 line-clamp-2 mb-2 group-hover:text-accent-700 transition-colors">
          {tour.title}
        </h4>

        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-500">{tour.duration}</span>
          <span className="font-bold text-neutral-900">{tour.price.formatted}</span>
        </div>

        {tour.rating > 0 && (
          <div className="mt-2 flex items-center gap-1">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-neutral-600">{tour.rating.toFixed(1)}</span>
            <span className="text-neutral-400">({tour.reviewCount})</span>
          </div>
        )}
      </div>
    </a>
  )
}

/**
 * Inline variant - Horizontal card for within-article placement
 */
function InlineTourCard({ tour, citySlug, placement = 'article' }: TourCardProps) {
  return (
    <a
      href={tour.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={() => trackAffiliateClick(tour, placement, citySlug)}
      className="group flex gap-4 p-4 bg-accent-50/50 border border-accent-100 rounded-xl hover:bg-accent-50 transition-colors"
    >
      {/* Image */}
      {tour.image.src && (
        <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src={tour.image.src}
            alt={tour.image.alt}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <PartnerBadge variant="inline" />
        </div>

        <h4 className="font-semibold text-neutral-900 line-clamp-1 group-hover:text-accent-700 transition-colors">
          {tour.title}
        </h4>

        <div className="flex items-center gap-3 mt-1 text-sm text-neutral-500">
          <span>{tour.duration}</span>
          <span className="font-semibold text-neutral-900">{tour.price.formatted}</span>
        </div>

        {tour.rating > 0 && (
          <div className="flex items-center gap-1 mt-1">
            <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs text-neutral-600">{tour.rating.toFixed(1)} ({tour.reviewCount})</span>
          </div>
        )}
      </div>

      {/* Arrow */}
      <div className="flex items-center text-accent-600 group-hover:translate-x-1 transition-transform">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  )
}

/**
 * Main TourCard component - renders appropriate variant
 */
export function TourCard({ variant = 'listicle', ...props }: TourCardProps) {
  switch (variant) {
    case 'compact':
      return <CompactTourCard {...props} />
    case 'inline':
      return <InlineTourCard {...props} />
    default:
      return <ListicleTourCard {...props} />
  }
}

/**
 * Tour grid for tours listing page
 */
export function TourGrid({
  tours,
  citySlug,
  className = '',
}: {
  tours: NormalizedTour[]
  citySlug: string
  className?: string
}) {
  if (tours.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-500">No tours available at the moment.</p>
      </div>
    )
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {tours.map((tour, index) => (
        <TourCard
          key={tour.productCode}
          tour={tour}
          index={index}
          variant="compact"
          citySlug={citySlug}
          placement="tours-page"
        />
      ))}
    </div>
  )
}
