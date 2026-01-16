'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CuriosityCard } from './CuriosityCard'
import { NewsletterSignup } from '../NewsletterSignup'
import { FeedbackSection } from '../FeedbackSection'
import { ShareLinks } from '../ShareLinks'
import { ExploreCard, type ExploreLink } from '../scrollytelling/ExploreCard'
import { DualSidebarAds } from '@/components/ads/desktop/SidebarAd'
import { NativeAdCard } from '@/components/ads/NativeAdCard'

interface CuriosityItem {
  id: string
  title: string
  body: string
  category?: string
  year?: string
  image?: {
    src: string
    alt?: string
    credit?: string
  }
  images?: Array<{
    src: string
    alt: string
    caption?: string
    credit?: string
  }>
  video?: {
    youtubeId: string
    title?: string
  }
  location?: {
    name: string
    url?: string
    stillExists?: boolean
  }
  source?: string
  sources?: Array<{
    type?: 'article' | 'book' | 'documentary' | 'podcast' | 'film' | 'video' | 'report' | 'other'
    title: string
    url?: string
  }>
}

interface DesktopCuriositiesLayoutProps {
  curiosities: CuriosityItem[]
  cityName: string
  exploreLinks?: ExploreLink[]
  footer?: React.ReactNode
  url: string
}

export default function DesktopCuriositiesLayout({
  curiosities,
  cityName,
  exploreLinks = [],
  footer,
  url
}: DesktopCuriositiesLayoutProps) {
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
  const pageId = `${cityName.toLowerCase().replace(/\s+/g, '-')}-curiosities`

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
        targeting={{ city: cityName, category: 'curiosities' }}
        stickyTop={80}
      />

      {/* Single Column Layout */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="space-y-12">
          {curiosities.map((item, index) => (
            <div key={item.id}>
              <CuriosityCard
                item={item}
                index={index}
                url={url}
              />

              {/* Native ad card every 3 curiosities */}
              {(index + 1) % 3 === 0 && index < curiosities.length - 1 && (
                <div className="my-12">
                  <NativeAdCard
                    pageId={pageId}
                    index={index}
                    targeting={{ city: cityName, category: 'curiosities' }}
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
          {/* Share Links */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Share this guide</h3>
            <div className="flex justify-center">
              <ShareLinks title={`${cityName} Curiosities`} url={url} variant="banner" />
            </div>
          </div>

          {/* Newsletter Signup */}
          <NewsletterSignup variant="dark" />

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
          <FeedbackSection variant="dark" pageTitle={`${cityName} Curiosities`} />
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
