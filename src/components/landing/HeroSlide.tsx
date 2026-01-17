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

export function HeroSlide({ data, isFirst = false, isActive }: HeroSlideProps) {

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
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
      )}

      {/* Gradient Overlay - stronger for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/40 via-transparent to-transparent" />

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
              {/* City name label */}
              <p className="text-sm md:text-base text-white/70 mb-1 md:mb-2 uppercase tracking-wider font-medium">
                {data.cityName}
              </p>
              {/* Title - rust colored */}
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#c65d3b] mb-2 md:mb-3 leading-tight">
                {data.title}
              </h2>
              <p className="text-sm md:text-lg text-white/90 leading-relaxed line-clamp-2 md:line-clamp-none">
                {data.teaser}
              </p>
            </div>

            {/* CTA Link - rust colored text style */}
            <Link
              href={data.href}
              className="group inline-flex items-center gap-2 text-[#c65d3b] hover:text-[#a84d2f] text-base md:text-lg font-semibold transition-colors"
            >
              Read Story
              <svg
                className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
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
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
