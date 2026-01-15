'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { HiddenGemCard } from './HiddenGemCard'
import { CompactNavigationDots } from './CompactNavigationDots'
import { NewsletterSignup } from '../NewsletterSignup'
import { ShareLinks } from '../ShareLinks'
import { ExploreCard, type ExploreLink } from '../scrollytelling/ExploreCard'

interface HiddenGemItem {
  id: string
  name: string
  description: string
  category?: string
  address?: string
  website?: string
  phone?: string
  hours?: string
  price?: string
  image?: {
    src: string
    alt?: string
    credit?: string
  }
  images?: Array<{
    src: string
    alt?: string
    credit?: string
  }>
  coordinates?: {
    lat: number
    lng: number
  }
}

interface DesktopHiddenGemsLayoutProps {
  gems: HiddenGemItem[]
  cityName: string
  exploreLinks?: ExploreLink[]
  footer?: React.ReactNode
  url: string
}

export default function DesktopHiddenGemsLayout({
  gems,
  cityName,
  exploreLinks = [],
  footer,
  url
}: DesktopHiddenGemsLayoutProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const contentContainerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle navigation to specific gem
  const handleNavigate = (index: number) => {
    const contentContainer = contentContainerRef.current
    if (!contentContainer) return

    const cards = contentContainer.querySelectorAll('[data-gem-card]')
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div className="relative">
      {/* Fixed Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-100 z-50">
        <motion.div
          className="h-full bg-accent-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Single Column Layout */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="space-y-12" ref={contentContainerRef}>
          {gems.map((gem, index) => (
            <div key={gem.id} data-gem-card>
              <HiddenGemCard
                gem={gem}
                index={index}
                onInView={() => setActiveIndex(index)}
                url={url}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Compact Navigation Dots */}
      <CompactNavigationDots
        gems={gems}
        activeIndex={activeIndex}
        onNavigate={handleNavigate}
      />

      {/* Outro Sections */}
      <div className="bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-neutral-800/90 backdrop-blur-md pt-20">
        <div className="max-w-5xl mx-auto space-y-20 px-6 pb-20">
          {/* Share Links */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Share this guide</h3>
            <div className="flex justify-center">
              <ShareLinks title={`${cityName}'s Hidden Gems`} url={url} />
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <NewsletterSignup />
          </div>

          {/* Explore More Section */}
          <div className="text-center space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Explore More {cityName}
              </h2>
              <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed max-w-3xl mx-auto">
                Discover more lists and guides curated by locals.
              </p>
            </div>

            {exploreLinks.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
                {exploreLinks.map((link) => (
                  <ExploreCard key={link.href} link={link} />
                ))}
              </div>
            )}
          </div>

          {/* Feedback Section */}
          <div className="max-w-3xl mx-auto bg-accent-600/20 backdrop-blur-sm rounded-2xl p-10 border border-accent-600/30 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Missing something?
            </h3>
            <p className="text-lg text-neutral-200 mb-8 leading-relaxed">
              Know a hidden gem we missed? Or have a correction for one of our entries?
              We'd love to hear from you.
            </p>
            <a
              href="mailto:hello@curiouscity.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent-600 font-bold rounded-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Feedback
            </a>
          </div>
        </div>

        {/* Integrated Footer */}
        {footer && (
          <div className="relative border-t border-white/10">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}
