'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { VideoScrubber } from './VideoScrubber'

interface CuriosityItem {
  id: string
  title: string
  body: string
  category?: string
  year?: string
  videoAnimation?: {
    path: string
    title?: string
    caption?: string
  }
  location?: {
    name: string
    stillExists?: boolean
  }
  source?: string
  sources?: Array<{
    title: string
    url: string
  }>
}

interface PremiumCuriositiesScrollProps {
  curiosities: CuriosityItem[]
  cityName: string
}

export function PremiumCuriositiesScroll({ curiosities, cityName: _cityName }: PremiumCuriositiesScrollProps) {
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

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Find curiosities with video animations
  const curiositiesWithVideos = curiosities.filter(c => c.videoAnimation)

  return (
    <div className="relative bg-white">
      {/* Fixed Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-200 z-50">
        <motion.div
          className="h-full bg-neutral-900"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Video-enhanced curiosities */}
      {curiositiesWithVideos.map((curiosity) => (
        <div key={curiosity.id} className="relative">
          <VideoScrubber
            videoPath={curiosity.videoAnimation!.path}
            title={curiosity.videoAnimation!.title}
            caption={curiosity.videoAnimation!.caption}
            scrollHeight={200}
            textContent={curiosity.body}
            textPosition="right"
          />

          {/* Sources footer */}
          {(curiosity.sources || curiosity.source) && (
            <div className="bg-neutral-50 border-t border-neutral-200 py-8 px-6">
              <div className="max-w-5xl mx-auto">
                {curiosity.sources && curiosity.sources.length > 0 && (
                  <div className="bg-white border border-neutral-200 rounded-xl px-5 py-4">
                    <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">Sources</h4>
                    <ul className="space-y-2">
                      {curiosity.sources.map((source, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {source.url ? (
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent-600 hover:text-accent-700 underline underline-offset-2 transition-colors text-sm font-medium"
                            >
                              {source.title}
                            </a>
                          ) : (
                            <span className="text-neutral-700 text-sm">{source.title}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {curiosity.source && !curiosity.sources && (
                  <div className="text-sm text-neutral-500 italic">
                    Source: {curiosity.source}
                  </div>
                )}
                {curiosity.location && (
                  <div className="flex items-start gap-2 text-sm text-neutral-500 mt-4">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>
                      {curiosity.location.name}
                      {curiosity.location.stillExists === false && (
                        <span className="text-neutral-400 ml-1">(no longer exists)</span>
                      )}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
