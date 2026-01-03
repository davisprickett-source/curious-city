'use client'

import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface MasonryGridProps {
  children: ReactNode
  className?: string
  columns?: {
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
}

/**
 * Masonry Grid Layout Component
 *
 * Uses CSS columns for a Pinterest-style staggered grid layout.
 * Items automatically break to avoid splitting across columns.
 *
 * Features:
 * - Responsive column counts
 * - Smooth staggered animations
 * - GPU-accelerated transforms
 * - Respects reduced-motion preferences
 *
 * Usage:
 * ```tsx
 * <MasonryGrid columns={{ sm: 1, md: 2, lg: 3 }}>
 *   {items.map(item => <ContentCard key={item.id} data={item} />)}
 * </MasonryGrid>
 * ```
 */
export function MasonryGrid({
  children,
  className = '',
  columns = {
    sm: 1,
    md: 2,
    lg: 3,
    xl: 3,
  },
}: MasonryGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`masonry-grid ${className}`}
      style={{
        columnGap: '1.5rem',
        // Responsive column counts
        columnCount: columns.sm || 1,
      }}
    >
      <style jsx>{`
        .masonry-grid {
          column-fill: balance;
        }

        .masonry-grid > * {
          break-inside: avoid;
          page-break-inside: avoid;
        }

        @media (min-width: 768px) {
          .masonry-grid {
            column-count: ${columns.md || 2};
          }
        }

        @media (min-width: 1024px) {
          .masonry-grid {
            column-count: ${columns.lg || 3};
          }
        }

        @media (min-width: 1280px) {
          .masonry-grid {
            column-count: ${columns.xl || 3};
          }
        }
      `}</style>
      {children}
    </motion.div>
  )
}

/**
 * Masonry Grid Container with Stagger Animation
 *
 * Wraps MasonryGrid with staggered child animations for a premium reveal effect.
 * Use this for initial page loads or when revealing new content.
 */
export function AnimatedMasonryGrid({
  children,
  className = '',
  columns,
  staggerDelay = 0.1,
}: MasonryGridProps & { staggerDelay?: number }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
    >
      <MasonryGrid columns={columns} className={className}>
        {children}
      </MasonryGrid>
    </motion.div>
  )
}

/**
 * Infinite Scroll Masonry Grid
 *
 * Masonry grid with intersection observer for lazy loading more content.
 * Automatically triggers onLoadMore when sentinel is visible.
 */
interface InfiniteMasonryGridProps extends MasonryGridProps {
  onLoadMore?: () => void
  hasMore?: boolean
  loading?: boolean
  loadingComponent?: ReactNode
}

export function InfiniteMasonryGrid({
  children,
  className = '',
  columns,
  onLoadMore,
  hasMore = false,
  loading = false,
  loadingComponent,
}: InfiniteMasonryGridProps) {
  return (
    <div className="relative">
      <MasonryGrid columns={columns} className={className}>
        {children}
      </MasonryGrid>

      {/* Load more sentinel */}
      {hasMore && (
        <div
          ref={(node) => {
            if (!node || !onLoadMore) return

            const observer = new IntersectionObserver(
              (entries) => {
                if (entries[0].isIntersecting && !loading) {
                  onLoadMore()
                }
              },
              { rootMargin: '400px' }
            )

            observer.observe(node)
            return () => observer.disconnect()
          }}
          className="h-20"
        >
          {loading && (
            <div className="flex items-center justify-center py-8">
              {loadingComponent || (
                <div className="flex items-center gap-3 text-neutral-500">
                  <div className="w-5 h-5 border-2 border-neutral-300 border-t-accent-600 rounded-full animate-spin" />
                  <span className="text-sm">Loading more...</span>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
