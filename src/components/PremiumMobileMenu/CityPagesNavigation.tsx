'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CITY_METADATA } from '@/data/cities'
import { routes, citySections } from '@/lib/routes'
import { staggerContainerVariants, gridItemVariants } from './animations'
import type { CityPagesNavigationProps } from './types'

export function CityPagesNavigation({ citySlug, onBack, onClose }: CityPagesNavigationProps) {
  // Find city name
  const city = CITY_METADATA.find((c) => c.slug === citySlug)
  const cityName = city?.name || citySlug

  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="px-8 pt-20 pb-6"
    >
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors mb-8 group"
        aria-label="Back to cities"
      >
        <svg
          className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="text-base font-medium">Cities</span>
      </button>

      {/* City name */}
      <div className="mb-12">
        <h2 className="text-[clamp(2rem,6vw,2.5rem)] font-semibold leading-tight tracking-tight text-neutral-900">
          {cityName}
        </h2>
      </div>

      {/* Pages grid */}
      <motion.nav aria-label={`${cityName} pages`}>
        <motion.ul
          role="list"
          className="grid grid-cols-2 gap-4"
          variants={staggerContainerVariants}
        >
          {citySections.map((section) => (
            <motion.li key={section.id} variants={gridItemVariants}>
              <Link
                href={routes.citySection(citySlug, section.id)}
                onClick={onClose}
                className="block min-h-[44px] px-4 py-3 bg-neutral-50 hover:bg-accent-50 rounded-lg transition-colors group"
              >
                <span className="text-lg font-medium text-neutral-700 group-hover:text-accent-700 transition-colors">
                  {section.label}
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </motion.div>
  )
}
