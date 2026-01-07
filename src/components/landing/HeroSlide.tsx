'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { PageCardData } from '@/lib/content/pages'

interface HeroSlideProps {
  data: PageCardData
  isFirst?: boolean
  isActive: boolean
}

const pageTypeGradients = {
  history: 'from-amber-900/80 to-amber-700/60',
  'dark-history': 'from-red-900/80 to-red-700/60',
  curiosities: 'from-purple-600/80 to-indigo-600/60',
  'hidden-gems': 'from-emerald-600/80 to-teal-600/60',
  'lost-loved': 'from-amber-600/80 to-orange-600/60',
  guide: 'from-blue-600/80 to-cyan-600/60',
  events: 'from-pink-600/80 to-rose-600/60',
}

export function HeroSlide({ data, isFirst = false, isActive }: HeroSlideProps) {
  const gradient = pageTypeGradients[data.pageType]

  return (
    <div className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden">
      {/* Background Image */}
      {data.thumbnail ? (
        <Image
          src={data.thumbnail}
          alt={data.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority={isFirst}
          quality={90}
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient.replace('/80', '').replace('/60', '')}`} />
      )}

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${gradient} via-black/40 to-transparent`} />

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="container-page pb-14 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            {/* Article Content with City Name */}
            <div className="mb-4 md:mb-6">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3 leading-tight">
                <span className="text-accent-300">{data.cityName}:</span> {data.title}
              </h2>
              <p className="text-sm md:text-lg text-white/90 leading-relaxed line-clamp-2 md:line-clamp-none">
                {data.teaser}
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href={data.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-accent-500 hover:bg-accent-600 text-white text-sm md:text-base font-bold rounded-lg transition-all duration-300 hover:gap-3 hover:shadow-xl"
            >
              Read Story
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
