'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { PageCardData } from '@/lib/content/pages'

interface PageCardProps {
  data: PageCardData
  variant?: 'compact' | 'standard' | 'featured'
  index?: number
  priority?: boolean
}

const pageTypeColors = {
  history: 'bg-amber-100 text-amber-800',
  'dark-history': 'bg-red-100 text-red-800',
  curiosities: 'bg-purple-100 text-purple-800',
  'hidden-gems': 'bg-emerald-100 text-emerald-800',
  'lost-loved': 'bg-orange-100 text-orange-800',
  guide: 'bg-blue-100 text-blue-800',
  events: 'bg-pink-100 text-pink-800',
}

const pageTypeGradients = {
  history: 'from-amber-900 to-amber-700',
  'dark-history': 'from-red-900 to-red-700',
  curiosities: 'from-purple-600 to-indigo-600',
  'hidden-gems': 'from-emerald-600 to-teal-600',
  'lost-loved': 'from-amber-600 to-orange-600',
  guide: 'from-blue-600 to-cyan-600',
  events: 'from-pink-600 to-rose-600',
}

const pageTypeLabels = {
  history: 'History Essay',
  'dark-history': 'Dark History',
  curiosities: 'Curiosities',
  'hidden-gems': 'Hidden Gems',
  'lost-loved': 'Lost & Loved',
  guide: 'Guide',
  events: 'Events',
}

export function PageCard({
  data,
  variant = 'standard',
  index = 0,
  priority = false,
}: PageCardProps) {
  if (variant === 'compact') {
    return <CompactCard data={data} />
  }

  if (variant === 'featured') {
    return <FeaturedCard data={data} index={index} priority={priority} />
  }

  return <StandardCard data={data} index={index} priority={priority} />
}

// Standard Card - Premium 1-column layout (40% image, 60% content)
function StandardCard({
  data,
  index,
  priority,
}: {
  data: PageCardData
  index: number
  priority: boolean
}) {
  const gradient = pageTypeGradients[data.pageType]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="h-full"
    >
      <Link
        href={data.href}
        className="group block h-full bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-accent-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
      >
        <div className="md:flex">
          {/* Image or Gradient */}
          <div className="md:w-2/5 relative">
            {data.thumbnail ? (
              <div className="relative h-64 md:h-full bg-neutral-100">
                <Image
                  src={data.thumbnail}
                  alt={data.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority={priority}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                />
              </div>
            ) : (
              <div className={`h-64 md:h-full bg-gradient-to-br ${gradient}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 text-6xl font-bold">
                    {data.cityName[0]}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="md:w-3/5 p-8 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3 group-hover:text-accent-600 transition-colors">
              {data.title}
            </h3>

            <p className="text-neutral-600 text-lg leading-relaxed mb-4">
              {data.teaser}
            </p>

            <div className="inline-flex items-center text-accent-600 font-semibold group-hover:gap-2 transition-all">
              Explore
              <svg
                className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// Featured Card - Large hero-style layout for homepage
function FeaturedCard({
  data,
  index,
  priority,
}: {
  data: PageCardData
  index: number
  priority: boolean
}) {
  const isEven = index % 2 === 0
  const gradient = pageTypeGradients[data.pageType]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="h-full"
    >
      <Link href={data.href} className="group block h-full">
        <article className="relative h-full bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-accent-300 hover:-translate-y-2 transition-all duration-500">
          <div
            className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0`}
          >
            {/* Image or Gradient */}
            <div className="relative aspect-[16/9] md:aspect-square md:w-1/2 bg-neutral-100 overflow-hidden">
              {data.thumbnail ? (
                <>
                  <Image
                    src={data.thumbnail}
                    alt={data.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={priority}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-500`}
                  />
                </>
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/30 text-8xl font-bold">
                      {data.cityName[0]}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 leading-tight group-hover:text-accent-600 transition-colors duration-300">
                {data.title}
              </h2>

              <p className="text-neutral-600 text-lg md:text-xl leading-relaxed mb-6">
                {data.teaser}
              </p>

              <div className="inline-flex items-center text-accent-600 font-bold text-lg group-hover:gap-3 transition-all">
                Read More
                <svg
                  className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}

// Compact Card - Smaller card for sidebars/related content
function CompactCard({ data }: { data: PageCardData }) {
  const badgeColor = pageTypeColors[data.pageType]
  const gradient = pageTypeGradients[data.pageType]

  return (
    <Link
      href={data.href}
      className="group block bg-white border border-neutral-200 rounded-lg overflow-hidden hover:border-accent-300 hover:shadow-lg transition-all duration-300"
    >
      <article>
        {data.thumbnail ? (
          <div className="relative aspect-[16/9] bg-neutral-100 overflow-hidden">
            <Image
              src={data.thumbnail}
              alt={data.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 300px"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`}
            />
          </div>
        ) : (
          <div className={`aspect-[16/9] bg-gradient-to-br ${gradient}`} />
        )}

        <div className="p-3">
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className={`inline-block px-1.5 py-0.5 text-[10px] font-semibold rounded uppercase tracking-wider ${badgeColor}`}
            >
              {pageTypeLabels[data.pageType]}
            </span>
          </div>

          <h3 className="text-xs font-bold text-neutral-900 mb-1 leading-snug group-hover:text-accent-600 transition-colors line-clamp-2">
            {data.title}
          </h3>

          <p className="text-[11px] text-neutral-600 leading-relaxed line-clamp-2">
            {data.teaser}
          </p>
        </div>
      </article>
    </Link>
  )
}
