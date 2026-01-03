'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export interface UnifiedCardData {
  type: 'article' | 'hidden-gem' | 'dark-history' | 'lost-loved' | 'curiosity' | 'best-of' | 'event'
  href: string
  title: string
  teaser: string
  image?: {
    src: string
    alt: string
    credit?: string
  }
  badge?: {
    label: string
    color: string
  }
  meta?: {
    date?: string
    author?: string
    location?: string
    category?: string
  }
}

interface ContentCardProps {
  data: UnifiedCardData
  variant?: 'compact' | 'standard' | 'featured' | 'media'
  index?: number
  priority?: boolean
}

const typeColors = {
  article: 'bg-blue-100 text-blue-800',
  'hidden-gem': 'bg-emerald-100 text-emerald-800',
  'dark-history': 'bg-red-100 text-red-800',
  'lost-loved': 'bg-amber-100 text-amber-800',
  curiosity: 'bg-purple-100 text-purple-800',
  'best-of': 'bg-pink-100 text-pink-800',
  event: 'bg-indigo-100 text-indigo-800',
}

export function ContentCard({
  data,
  variant = 'standard',
  index = 0,
  priority = false,
}: ContentCardProps) {
  if (variant === 'compact') {
    return <CompactCard data={data} />
  }

  if (variant === 'featured') {
    return <FeaturedCard data={data} index={index} priority={priority} />
  }

  if (variant === 'media') {
    return <MediaCard data={data} />
  }

  return <StandardCard data={data} priority={priority} />
}

// Standard Card - Clean, newspaper-style layout
function StandardCard({ data, priority }: { data: UnifiedCardData; priority: boolean }) {
  const badgeColor = data.badge?.color || typeColors[data.type]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="break-inside-avoid mb-6"
    >
      <Link href={data.href} className="group block">
        <article className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-accent-300 transition-all duration-500">
          {data.image && (
            <div className="relative aspect-[16/9] bg-neutral-100 overflow-hidden">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={priority}
              />
            </div>
          )}

          <div className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full uppercase tracking-wider ${badgeColor}`}
              >
                {data.badge?.label || data.type.replace('-', ' ')}
              </span>
              {data.meta?.date && (
                <span className="text-xs text-neutral-500">{data.meta.date}</span>
              )}
            </div>

            <h2 className="text-xl font-bold text-neutral-900 mb-2 leading-tight group-hover:text-accent-600 transition-colors line-clamp-2">
              {data.title}
            </h2>

            <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3 mb-3">
              {data.teaser}
            </p>

            {(data.meta?.author || data.meta?.location || data.meta?.category) && (
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                {data.meta.author && <span>{data.meta.author}</span>}
                {data.meta.location && (
                  <>
                    {data.meta.author && <span>·</span>}
                    <span>{data.meta.location}</span>
                  </>
                )}
                {data.meta.category && (
                  <>
                    {(data.meta.author || data.meta.location) && <span>·</span>}
                    <span className="text-neutral-400">#{data.meta.category}</span>
                  </>
                )}
              </div>
            )}
          </div>
        </article>
      </Link>
    </motion.div>
  )
}

// Featured Card - Premium magazine-style layout
function FeaturedCard({
  data,
  index,
  priority,
}: {
  data: UnifiedCardData
  index: number
  priority: boolean
}) {
  const isEven = index % 2 === 0
  const badgeColor = data.badge?.color || typeColors[data.type]

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.7,
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="break-inside-avoid mb-8"
    >
      <Link href={data.href} className="group block">
        <article className="relative bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-accent-300 transition-all duration-500">
          <div
            className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 md:gap-6`}
          >
            {data.image && (
              <div className="relative aspect-[16/9] md:aspect-square md:w-1/2 bg-neutral-100 overflow-hidden">
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={priority}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            )}

            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`inline-block px-3 py-1.5 text-xs font-semibold rounded-full uppercase tracking-wider ${badgeColor}`}
                >
                  {data.badge?.label || data.type.replace('-', ' ')}
                </span>
                {data.meta?.date && (
                  <span className="text-sm text-neutral-500">{data.meta.date}</span>
                )}
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3 leading-tight group-hover:text-accent-600 transition-colors duration-300">
                {data.title}
              </h2>

              <p className="text-base text-neutral-600 leading-relaxed mb-4 line-clamp-4">
                {data.teaser}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  {data.meta?.author && <span>{data.meta.author}</span>}
                  {data.meta?.location && (
                    <>
                      {data.meta.author && <span>·</span>}
                      <span>{data.meta.location}</span>
                    </>
                  )}
                </div>

                <div className="inline-flex items-center text-accent-600 font-semibold gap-2 group-hover:gap-3 transition-all duration-300">
                  <span className="text-sm uppercase tracking-wider">Explore</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5-5 5M6 12h12"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}

// Media Card - Image-focused with minimal text overlay
function MediaCard({ data }: { data: UnifiedCardData }) {
  const badgeColor = data.badge?.color || typeColors[data.type]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="break-inside-avoid mb-6"
    >
      <Link href={data.href} className="group block">
        <article className="relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
          {data.image && (
            <div className="relative aspect-[4/5] bg-neutral-100">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <span
                  className={`inline-block self-start px-2.5 py-1 text-xs font-semibold rounded-full uppercase tracking-wider mb-3 ${badgeColor}`}
                >
                  {data.badge?.label || data.type.replace('-', ' ')}
                </span>

                <h2 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-accent-300 transition-colors">
                  {data.title}
                </h2>

                <p className="text-sm text-white/90 leading-relaxed line-clamp-2">
                  {data.teaser}
                </p>

                {data.meta?.location && (
                  <span className="text-xs text-white/70 mt-2">{data.meta.location}</span>
                )}
              </div>
            </div>
          )}
        </article>
      </Link>
    </motion.div>
  )
}

// Compact Card - Minimal horizontal layout
function CompactCard({ data }: { data: UnifiedCardData }) {
  return (
    <Link href={data.href} className="group block">
      <article className="flex gap-3 mb-4">
        {data.image && (
          <div className="relative w-20 h-20 flex-shrink-0 bg-neutral-100 rounded overflow-hidden">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="80px"
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm text-neutral-900 group-hover:text-accent-600 transition-colors line-clamp-2 mb-1">
            {data.title}
          </h3>
          {data.meta?.date && (
            <p className="text-xs text-neutral-500">{data.meta.date}</p>
          )}
        </div>
      </article>
    </Link>
  )
}
