'use client'

import { useState, useEffect } from 'react'
import { useScrollToAnchor } from '@/hooks/useScrollToAnchor'
import { motion } from 'framer-motion'
import { HiddenGemCard } from './HiddenGemCard'
import { NewsletterSignup } from '../NewsletterSignup'
import { FeedbackSection } from '../FeedbackSection'
import { ShareLinks } from '../ShareLinks'
import { ExploreCard, type ExploreLink } from '../scrollytelling/ExploreCard'
import { DualSidebarAds } from '@/components/ads/desktop/SidebarAd'
import { NativeAdCard } from '@/components/ads/NativeAdCard'

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
  const [scrollProgress, setScrollProgress] = useState(0)

  // Scroll to anchor on page load (for deep links)
  useScrollToAnchor(300)

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

  // Create page ID for ad targeting
  const pageId = `${cityName.toLowerCase().replace(/\s+/g, '-')}-hidden-gems`

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

      {/* Desktop Sidebar Ads (visible on 1400px+ screens) */}
      <DualSidebarAds
        pageId={pageId}
        targeting={{ city: cityName, category: 'hidden-gems' }}
        stickyTop={80}
      />

      {/* Single Column Layout */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="space-y-12">
          {gems.map((gem, index) => (
            <div key={gem.id}>
              <HiddenGemCard
                gem={gem}
                index={index}
                url={url}
              />

              {/* Native ad card every 3 gems (after 3rd, 6th, 9th, etc.) */}
              {(index + 1) % 3 === 0 && index < gems.length - 1 && (
                <div className="my-12">
                  <NativeAdCard
                    pageId={pageId}
                    index={index}
                    targeting={{ city: cityName, category: 'hidden-gems' }}
                    variant="listicle"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Outro Sections */}
      <div className="bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-neutral-800/90 backdrop-blur-md pt-20">
        <div className="max-w-5xl mx-auto space-y-16 px-6 pb-20">
          {/* Share Links and Newsletter - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Share Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Share this guide</h3>
              <ShareLinks title={`${cityName}'s Hidden Gems`} url={url} variant="default" onDark={true} />
            </div>

            {/* Newsletter Signup */}
            <div>
              <NewsletterSignup variant="dark" />
            </div>
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
          <FeedbackSection variant="dark" pageTitle={`${cityName}'s Hidden Gems`} />
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
