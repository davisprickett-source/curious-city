'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DarkHistoryCard } from './DarkHistoryCard'
import { NewsletterSignup } from '../NewsletterSignup'
import { FeedbackSection } from '../FeedbackSection'
import { ShareButton } from '@/components/ShareButton'
import { ExploreCard, type ExploreLink } from '../scrollytelling/ExploreCard'
import { DualSidebarAds } from '@/components/ads/desktop/SidebarAd'
import { NativeAdCard } from '@/components/ads/NativeAdCard'

interface DarkHistoryItem {
  id: string
  title: string
  body: string
  category?: 'unsolved' | 'crime' | 'disaster' | 'mystery' | 'macabre' | 'haunting' | 'cold-case'
  year?: string
  verdict?: string
  articleSlug?: string
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
  location?: {
    name: string
    stillExists?: boolean
    coordinates?: {
      lat: number
      lng: number
    }
  }
  source?: string
  sources?: Array<{
    type?: 'article' | 'book' | 'documentary' | 'podcast' | 'film' | 'video' | 'report' | 'other'
    title: string
    url?: string
    publisher?: string
    author?: string
    isbn?: string
    platform?: string
    show?: string
    director?: string
    year?: string | number
  }>
}

interface DesktopDarkHistoryLayoutProps {
  items: DarkHistoryItem[]
  cityName: string
  citySlug: string
  exploreLinks?: ExploreLink[]
  footer?: React.ReactNode
  url: string
}

export default function DesktopDarkHistoryLayout({
  items,
  cityName,
  citySlug,
  exploreLinks = [],
  footer,
  url
}: DesktopDarkHistoryLayoutProps) {
  const [scrollProgress, setScrollProgress] = useState(0)

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
  const pageId = `${cityName.toLowerCase().replace(/\s+/g, '-')}-dark-history`

  return (
    <div className="relative">
      {/* Fixed Progress Bar - Darker theme */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-200 z-50">
        <motion.div
          className="h-full bg-accent-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Desktop Sidebar Ads (visible on 1400px+ screens) */}
      <DualSidebarAds
        pageId={pageId}
        targeting={{ city: cityName, category: 'dark-history' }}
        stickyTop={80}
      />

      {/* Single Column Layout */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="space-y-12">
          {items.map((item, index) => (
            <div key={item.id}>
              <DarkHistoryCard
                item={item}
                index={index}
                url={url}
                citySlug={citySlug}
              />

              {/* Native ad card every 3 items */}
              {(index + 1) % 3 === 0 && index < items.length - 1 && (
                <div className="my-12">
                  <NativeAdCard
                    pageId={pageId}
                    index={index}
                    targeting={{ city: cityName, category: 'dark-history' }}
                    variant="listicle"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Outro Sections */}
      <div className="bg-neutral-900 pt-16">
        <div className="max-w-5xl mx-auto px-6 pb-20">
          {/* Divider line */}
          <div className="border-t border-white/20 mb-12" />

          {/* Share and Subscribe - Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Share Section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Share this guide</h3>
              <p className="text-sm text-neutral-300 mb-4">Know someone who&apos;d be into this dark history?</p>
              <ShareButton title={`${cityName}'s Dark History`} url={url} onDark dropdownPosition="below" />
            </div>

            {/* Newsletter Section */}
            <div>
              <NewsletterSignup variant="dark" />
            </div>
          </div>

          {/* Explore More Section */}
          {exploreLinks.length > 0 && (
            <div className="text-center space-y-12 mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Explore More
                </h2>
                <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed max-w-3xl mx-auto">
                  Discover more curated guides and local favorites.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8 w-full">
                {exploreLinks.map((link) => (
                  <ExploreCard key={link.href} link={link} />
                ))}
              </div>
            </div>
          )}

          {/* Feedback Section */}
          <FeedbackSection variant="dark" pageTitle={`${cityName}'s Dark History`} />

          {/* Divider before footer */}
          <div className="border-t border-white/20 mt-16" />
        </div>

        {/* Integrated Footer */}
        {footer}
      </div>
    </div>
  )
}
