'use client'

import { motion } from 'framer-motion'
import { CITY_METADATA } from '@/data/cities'
import { staggerContainerVariants, itemVariants } from './animations'
import type { CitiesNavigationProps } from './types'

// Sort cities alphabetically
const cities = [...CITY_METADATA].sort((a, b) => a.name.localeCompare(b.name))

export function CitiesNavigation({ onSelectCity }: CitiesNavigationProps) {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="px-8 pt-20 pb-6"
    >
      <div className="eyebrow text-neutral-500 mb-8">Cities</div>

      <motion.ul role="list" className="space-y-6">
        {cities.map((city) => (
          <motion.li key={city.slug} variants={itemVariants}>
            <button
              onClick={() => onSelectCity(city.slug)}
              className="group flex items-center justify-between w-full text-left transition-colors hover:text-accent-600 focus:outline-none focus:text-accent-600"
            >
              <span className="text-[clamp(2.5rem,8vw,3.8rem)] font-semibold leading-none tracking-tight text-neutral-900 group-hover:text-accent-600 group-focus:text-accent-600 transition-colors">
                {city.name}
              </span>
              <svg
                className="w-8 h-8 text-neutral-400 group-hover:text-accent-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}
