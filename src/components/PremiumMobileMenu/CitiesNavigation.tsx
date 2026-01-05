'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CITY_METADATA } from '@/data/cities'
import { staggerContainerVariants, itemVariants } from './animations'

// Sort cities alphabetically
const cities = [...CITY_METADATA].sort((a, b) => a.name.localeCompare(b.name))

interface CitiesNavigationProps {
  onClose: () => void
}

export function CitiesNavigation({ onClose }: CitiesNavigationProps) {
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
            <Link
              href={`/${city.slug}`}
              onClick={onClose}
              className="group block w-full text-left transition-colors hover:text-accent-600 focus:outline-none focus:text-accent-600"
            >
              <span className="text-[clamp(2.5rem,8vw,3.8rem)] font-semibold leading-none tracking-tight text-neutral-900 group-hover:text-accent-600 group-focus:text-accent-600 transition-colors">
                {city.name}
              </span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}
