'use client'

import { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { History } from '@/types/content'
import { UnifiedNav } from './navigation/UnifiedNav'
import { PremiumMobileMenu } from './PremiumMobileMenu'
import { getCity } from '@/data/cities'

interface VideoHistoryScrollProps {
  history: History
}

// Frame counts for each video sequence (after trimming)
const FRAME_COUNTS: Record<string, number> = {
  // Tampa sequences
  'tampa-1': 89,
  'tampa-2': 75,
  'tampa-3': 89,
  'tampa-4': 70,
  'tampa-5': 69,
  'tampa-6': 89,
  'tampa-7': 89,
  'tampa-8': 136,
  'tampa-9': 136,
  'tampa-10': 89,
  'tampa-11': 36,
  'tampa-12': 89,

  // Phoenix sequences (custom counts for trimmed videos)
  'phoenix-3': 93,
  'phoenix-11': 54,
  'phoenix-17': 50,
  'phoenix-18': 91,
  'phoenix-20': 91,

  // Minneapolis sequences
  'minn-1': 94,
  'minn-2': 144,
  'minn-3': 144,
  'minn-4': 94,
  'minn-5': 94,
  'minn-6': 74,
  'minn-7': 94,
  'minn-8': 46,
  'minn-9': 94,
  'minn-10': 144,
  'minn-11': 94,

  // Raleigh sequences
  'raleigh-1': 94,
  'raleigh-2': 144,
  'raleigh-3': 94,
  'raleigh-4': 144,
  'raleigh-5': 57,
  'raleigh-6': 94,
  'raleigh-7': 94,
  'raleigh-8': 66,
  'raleigh-9': 94,
  'raleigh-10': 94,
  'raleigh-11': 94,
  'raleigh-12': 144,

  // Portland sequences
  'portland-1': 192,
  'portland-2': 125,
  'portland-3': 125,
  'portland-4': 125,
  'portland-5': 192,
  'portland-6': 125,
  'portland-7': 125,
  'portland-8': 125,
  'portland-9': 125,
  'portland-10': 125,
  'portland-11': 125,
  'portland-12': 125,
  'portland-13': 106,
  'portland-14': 192,
  'portland-15': 192,
  'portland-16': 125,
  'portland-17': 117,
  'portland-18': 125,

  // Dallas sequences
  'dallas-1': 98,
  'dallas-2': 125,
  'dallas-3': 125,
  'dallas-4': 125,
  'dallas-5': 81,
  'dallas-6': 125,
  'dallas-7': 125,
  'dallas-8': 75,
  'dallas-9': 125,
  'dallas-10': 125,
  'dallas-11': 80,
  'dallas-12': 117,
  'dallas-13': 125,
  'dallas-14': 95,
  'dallas-15': 125,
  'dallas-16': 125,
  // Salt Lake City sequences
  'slc-1': 125,
  'slc-2': 125,
  'slc-3': 125,
  'slc-4': 125,
  'slc-5': 84,
  'slc-6': 125,
  'slc-7': 125,
  'slc-8': 125,
  'slc-9': 100,
  // Anchorage sequences
  'anchorage-1': 192,
  'anchorage-2': 125,
  'anchorage-3': 125,
  'anchorage-4': 125,
  'anchorage-5': 125,
  'anchorage-6': 125,
  'anchorage-7': 131,
  'anchorage-8': 68,
  'anchorage-9': 107,
  'anchorage-10': 125,
  'anchorage-11': 125,
  // Denver sequences
  'denver-1': 78,
  'denver-2': 60,
  'denver-3': 58,
  'denver-4': 120,
  'denver-5': 78,
  'denver-6': 61,
  'denver-7': 78,
  'denver-8': 78,
  'denver-9': 78,
  'denver-10': 78,
  'denver-11': 78,
  'denver-12': 27,
  'denver-13': 68,
  'denver-14': 78,
  'denver-15': 120,
  'denver-16': 78,
}

export function VideoHistoryScroll({ history }: VideoHistoryScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const storyContentRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [currentFrame, setCurrentFrame] = useState(1)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const loadedFramesRef = useRef<Set<string>>(new Set())
  const imagesRef = useRef<Map<string, HTMLImageElement>>(new Map())
  const [cityName, setCityName] = useState('')

  // Get city name
  useEffect(() => {
    getCity(history.citySlug).then(city => {
      if (city) setCityName(city.name)
    })
  }, [history.citySlug])

  // Get all video sequence blocks
  const videoBlocks = history.blocks.filter(
    b => b.type === 'video-sequence'
  ) as Array<any>

  // Get sequence name from video path
  const getSequenceName = (videoPath: string): string => {
    const sequenceMatch = videoPath.match(/\/sequences\/([^\/]+)\/([^\/]+)$/)
    if (sequenceMatch) {
      return sequenceMatch[2]
    }
    const videoMatch = videoPath.match(/([a-z-]+)-(\d+)\.mp4$/)
    if (videoMatch) {
      return `${videoMatch[1]}-${videoMatch[2]}`
    }
    return 'tampa-1'
  }

  // Get frame count for a sequence
  const getFrameCount = (sequenceName: string): number => {
    if (FRAME_COUNTS[sequenceName]) {
      return FRAME_COUNTS[sequenceName]
    }
    return 94
  }

  // Get frame path
  const getFramePath = (sequenceName: string, frameNum: number): string => {
    const paddedNum = String(frameNum).padStart(4, '0')
    const cityPrefix = sequenceName.split('-')[0]
    // Map city prefixes to full city names
    const cityMap: Record<string, string> = {
      'minn': 'minneapolis',
      'tampa': 'tampa',
      'phoenix': 'phoenix',
      'raleigh': 'raleigh',
      'portland': 'portland',
      'dallas': 'dallas',
      'slc': 'salt-lake-city',
      'anchorage': 'anchorage',
      'denver': 'denver'
    }
    const city = cityMap[cityPrefix] || cityPrefix
    // All sequences use underscore format: frame_0001.webp
    return `/sequences/${city}/${sequenceName}/frame_${paddedNum}.webp`
  }

  // Preload frames progressively
  useEffect(() => {
    const totalFramesToLoad: string[] = []

    videoBlocks.forEach((block) => {
      const seqName = getSequenceName(block.videoPath)
      const frameCount = getFrameCount(seqName)
      for (let i = 1; i <= frameCount; i++) {
        totalFramesToLoad.push(getFramePath(seqName, i))
      }
    })

    const totalFrames = totalFramesToLoad.length
    let loadedCount = 0

    const loadBatch = async (startIdx: number, batchSize: number) => {
      const batch = totalFramesToLoad.slice(startIdx, startIdx + batchSize)

      await Promise.all(
        batch.map((framePath) => {
          return new Promise<void>((resolve) => {
            if (loadedFramesRef.current.has(framePath)) {
              loadedCount++
              resolve()
              return
            }

            const img = new Image()
            img.onload = () => {
              loadedFramesRef.current.add(framePath)
              imagesRef.current.set(framePath, img)
              loadedCount++
              setLoadingProgress(Math.round((loadedCount / totalFrames) * 100))
              resolve()
            }
            img.onerror = () => {
              loadedCount++
              resolve()
            }
            img.src = framePath
          })
        })
      )

      if (startIdx + batchSize < totalFrames) {
        setTimeout(() => loadBatch(startIdx + batchSize, batchSize), 10)
      } else {
        setIsLoading(false)
      }
    }

    loadBatch(0, 20)
  }, [videoBlocks])

  // Calculate weighted scroll thresholds based on scrollHeight values
  const scrollWeights = useMemo(() => {
    const weights = videoBlocks.map((block: any) => block.scrollHeight || 180)
    const totalWeight = weights.reduce((sum: number, w: number) => sum + w, 0)

    // Calculate cumulative thresholds (0 to 1)
    const thresholds: number[] = []
    let cumulative = 0
    for (const w of weights) {
      cumulative += w / totalWeight
      thresholds.push(cumulative)
    }
    return { weights, totalWeight, thresholds }
  }, [videoBlocks])

  // Handle scroll
  const handleScroll = useCallback(() => {
    if (!containerRef.current || !storyContentRef.current) return

    const container = containerRef.current
    const storyContent = storyContentRef.current
    const containerRect = container.getBoundingClientRect()

    // Calculate scroll based only on story content area, not footer
    const containerTop = Math.max(0, -containerRect.top)
    const storyContentHeight = Math.max(1, storyContent.offsetHeight)

    // Progress should complete when story content finishes scrolling
    const rawProgress = containerTop / storyContentHeight

    // Once scroll reaches the very end, lock at 100% and don't update further
    // This prevents frame shifts when scrolling into footer area
    // Using 0.995 to allow final video to play through almost completely
    const isAtEnd = rawProgress >= 0.995
    const progress = isAtEnd ? 1 : Math.max(0, Math.min(0.99, rawProgress))

    setScrollProgress(Math.min(progress * 100, 100))

    // If at end, lock to last video and last frame - don't recalculate
    if (isAtEnd) {
      const lastVideoIdx = videoBlocks.length - 1
      const lastBlock = videoBlocks[lastVideoIdx]
      if (lastBlock) {
        setCurrentVideoIndex(lastVideoIdx)
        const seqName = getSequenceName(lastBlock.videoPath)
        const frameCount = getFrameCount(seqName)
        setCurrentFrame(frameCount) // Lock to last frame
      }
      return
    }

    // Find current video based on weighted thresholds
    let currentIdx = 0
    for (let i = 0; i < scrollWeights.thresholds.length; i++) {
      if (progress < scrollWeights.thresholds[i]) {
        currentIdx = i
        break
      }
      currentIdx = i
    }

    // Calculate progress within current video
    const prevThreshold = currentIdx > 0 ? scrollWeights.thresholds[currentIdx - 1] : 0
    const currentThreshold = scrollWeights.thresholds[currentIdx]
    const videoRange = currentThreshold - prevThreshold
    const progressInVideo = Math.max(0, Math.min(0.99, (progress - prevThreshold) / videoRange))

    setCurrentVideoIndex(currentIdx)

    const currentBlock = videoBlocks[currentIdx]
    if (currentBlock) {
      const seqName = getSequenceName(currentBlock.videoPath)
      const frameCount = getFrameCount(seqName)
      // Clamp frame number strictly within bounds, use floor instead of ceil to prevent overshoot
      const targetFrame = Math.floor(progressInVideo * frameCount) + 1
      const frameNum = Math.max(1, Math.min(frameCount, targetFrame))
      setCurrentFrame(frameNum)
    }
  }, [videoBlocks, scrollWeights])

  // Throttle scroll handler with requestAnimationFrame for smoother mobile performance
  const rafRef = useRef<number | null>(null)
  const throttledHandleScroll = useCallback(() => {
    if (rafRef.current !== null) return // Skip if already scheduled
    rafRef.current = requestAnimationFrame(() => {
      handleScroll()
      rafRef.current = null
    })
  }, [handleScroll])

  useEffect(() => {
    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    handleScroll() // Initial call
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [throttledHandleScroll, handleScroll])

  const getCurrentFramePath = () => {
    const currentBlock = videoBlocks[currentVideoIndex]
    if (!currentBlock) return ''
    const seqName = getSequenceName(currentBlock.videoPath)
    return getFramePath(seqName, currentFrame)
  }

  const framePath = getCurrentFramePath()
  // Always use full opacity to prevent flashing on scroll - frames load fast enough
  const frameOpacity = 1

  return (
    <>
      {/* Navigation - simplified on mobile, full UnifiedNav on desktop */}
      {/* Mobile nav - simple fixed header with hamburger menu */}
      <div className="sm:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100">
        <div className="container-page">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center font-semibold text-neutral-900 tracking-tight">
              <img
                src="/logos/CCs.png"
                alt="Curious City"
                className="h-8 w-auto"
              />
            </Link>
            <PremiumMobileMenu currentCitySlug={history.citySlug} />
          </div>
        </div>
      </div>

      {/* Desktop nav - full UnifiedNav wrapped in fixed container */}
      <div className="hidden sm:block fixed top-0 left-0 right-0 z-50 bg-white">
        <UnifiedNav
          citySlug={history.citySlug}
          cityName={cityName}
          currentSection="articles"
        />
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-200 z-[60]">
        <motion.div
          className="h-full bg-neutral-900"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Loading indicator */}
      {isLoading && (
        <div style={{ position: 'fixed', top: 1, left: 0, right: 0, height: 1, zIndex: 50 }}>
          <div style={{ height: '100%', backgroundColor: 'rgba(251,191,36,0.6)', width: `${loadingProgress}%`, transition: 'width 150ms' }} />
        </div>
      )}

      {/* White letterbox bars - fixed position, crop both video and text (desktop only) */}
      <div className="hidden lg:block fixed top-0 left-0 right-0 h-[25vh] bg-white z-40 pointer-events-none" />
      <div className="hidden lg:block fixed bottom-0 left-0 right-0 h-[25vh] bg-white z-40 pointer-events-none" />

      {/* Fade overlays - positioned outside text column to avoid stacking context issues */}
      {/* Mobile fade overlay - positioned right below video, z-30 so nav dropdown appears above */}
      <div
        className="lg:hidden fixed left-0 right-0 h-20 bg-gradient-to-b from-white via-white/80 to-transparent z-30 pointer-events-none"
        style={{ top: 'calc(57px + 30vh)' }}
      />

      {/* Desktop fade overlays - fade text at top and bottom of visible area */}
      <div className="hidden lg:block fixed right-0 w-[30%] h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-50 pointer-events-none" style={{ top: '25vh' }} />
      <div className="hidden lg:block fixed right-0 w-[30%] h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-50 pointer-events-none" style={{ bottom: '25vh' }} />

      {/* Split Screen Section - starts below nav to make video flush */}
      <div className="lg:flex lg:flex-row pt-[57px]" ref={containerRef}>
        {/* Left Side: Video (Sticky on both mobile and desktop) */}
        <div className="w-full h-[30vh] sticky top-[57px] -mt-[57px] lg:w-[70%] lg:h-screen lg:top-[57px] lg:mt-0 bg-white flex items-center justify-center relative z-20 will-change-transform">
          <img
            src={framePath}
            alt=""
            className="w-full h-full object-cover lg:object-contain will-change-transform"
            style={{
              opacity: frameOpacity,
              transform: 'translateZ(0)', // Force GPU layer for smoother rendering
            }}
          />

          {isLoading && loadingProgress < 10 && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
              <span className="text-neutral-400 text-sm">{loadingProgress}%</span>
            </div>
          )}
        </div>

        {/* Right Side: Text (Scrollable, 30% width on desktop, full width on mobile) */}
        <div className="w-full lg:w-[30%] bg-white relative will-change-transform" style={{ transform: 'translateZ(0)' }}>
          {/* Top spacing - centers content in middle of screen on desktop */}
          <div className="hidden lg:block" style={{ height: '50vh' }} />

          {/* Mobile spacing - push content well below the gradient so title is clearly visible */}
          <div className="lg:hidden h-32" />

          {/* Story Content Area - ref attached here to measure only story, not footer */}
          <div ref={storyContentRef}>
            <div className="px-6 md:px-10 pb-4 lg:pb-0 lg:py-0">
              {/* Title with Share Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold leading-tight text-neutral-900 flex-1">
                    {history.title}
                  </h1>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: history.title, url: window.location.href })
                      } else {
                        navigator.clipboard.writeText(window.location.href)
                      }
                    }}
                    className="flex-shrink-0 text-accent-600 hover:text-accent-700 font-bold text-sm uppercase tracking-wider transition-colors"
                  >
                    Share
                  </button>
                </div>

                {/* Underline bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="h-1 w-16 md:w-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full mb-4"
                  style={{ transformOrigin: 'left' }}
                />

                {history.subtitle && (
                  <p className="text-base md:text-lg text-neutral-600 leading-relaxed italic">
                    {history.subtitle}
                  </p>
                )}
              </motion.div>

              {/* All content blocks in continuous flow */}
              <div className="space-y-6">
                {videoBlocks.map((videoBlock, vIdx) => (
                  <div key={videoBlock.id}>
                    {videoBlock.textBlocks.map((block: any, bIdx: number) => (
                      <TextBlock
                        key={block.id || `${vIdx}-${bIdx}`}
                        block={block}
                        isFirst={vIdx === 0 && bIdx === 0}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom spacing - minimal gap before share section */}
            <div className="h-8" />
          </div>

          {/* Footer - appears at end of scroll */}
          <footer className="px-6 md:px-10 pt-6 pb-12 bg-white">
            {/* Simple Share Button */}
            <div className="mb-8 pb-8 border-b border-neutral-200">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: history.title,
                      url: `https://thecurious.city/${history.citySlug}/articles/${history.slug}`
                    })
                  } else {
                    navigator.clipboard.writeText(`https://thecurious.city/${history.citySlug}/articles/${history.slug}`)
                    alert('Link copied!')
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-bold rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share this story
              </button>
            </div>

            {/* More Stories Section */}
            <div className="mb-8 pb-8 border-b border-neutral-200">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">More Stories</h3>
              <div className="flex flex-col gap-4">
                <RelatedStoryCards currentCity={history.citySlug} />
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mb-8 pb-8 border-b border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-2">Stay curious</h4>
              <p className="text-sm text-neutral-600 mb-3">New stories delivered to your inbox.</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.target as HTMLFormElement
                  const input = form.querySelector('input') as HTMLInputElement
                  if (input.value) {
                    input.value = ''
                    alert('Thanks for subscribing!')
                  }
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-accent-600 rounded-lg hover:bg-accent-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Feedback Link */}
            <div className="text-center">
              <p className="text-sm text-neutral-500 mb-2">Have a suggestion or found an error?</p>
              <a
                href={`mailto:hello@thecurious.city?subject=Feedback on: ${encodeURIComponent(history.title)}`}
                className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send us feedback
              </a>
            </div>

          </footer>
        </div>
      </div>
    </>
  )
}

// Related story cards for the footer
const cityHistoryEssays: Record<string, { title: string; subtitle: string; slug: string; thumbnail: string }[]> = {
  tampa: [
    { title: 'Sunshine and Hustle', subtitle: 'A city of cigars, conquistadors, and perpetual reinvention', slug: 'sunshine-and-hustle', thumbnail: '/sequences/tampa/tampa-1/frame_0001.webp' }
  ],
  phoenix: [
    { title: 'The Air-Conditioned Dream', subtitle: 'A city that shouldn\'t exist, existing grandly anyway', slug: 'the-air-conditioned-dream', thumbnail: '/sequences/phoenix/phoenix-1/frame_0001.webp' }
  ],
  minneapolis: [
    { title: 'Flour, Falls, and Funk', subtitle: 'How a humble flour mill town became the unlikely capital of Midwest cool', slug: 'flour-falls-and-funk', thumbnail: '/sequences/minneapolis/minn-1/frame_0001.webp' }
  ],
  raleigh: [
    { title: 'The Research Triangle\'s Quiet Rise', subtitle: 'From sleepy capital to tech powerhouse', slug: 'the-research-triangles-quiet-rise', thumbnail: '/sequences/raleigh/raleigh-1/frame_0001.webp' }
  ],
  portland: [
    { title: 'Weird and Proud', subtitle: 'The making of America\'s most iconoclastic city', slug: 'weird-and-proud', thumbnail: '/sequences/portland/portland-1/frame_0001.webp' }
  ],
  dallas: [
    { title: 'Big D Energy', subtitle: 'Oil, ambition, and the city that thinks it can do anything', slug: 'big-d-energy', thumbnail: '/sequences/dallas/dallas-1/frame_0001.webp' }
  ],
  'salt-lake-city': [
    { title: 'Zion in the Desert', subtitle: 'The improbable rise of a city built on faith', slug: 'zion-in-the-desert', thumbnail: '/sequences/salt-lake-city/slc-1/frame_0001.webp' }
  ],
  anchorage: [
    { title: 'The Last Frontier\'s First City', subtitle: 'Where wilderness meets urbanity at the edge of the world', slug: 'the-last-frontiers-first-city', thumbnail: '/sequences/anchorage/anchorage-1/frame_0001.webp' }
  ],
  denver: [
    { title: 'Mile High and Rising', subtitle: 'From mining camp to mountain metropolis', slug: 'mile-high-and-rising', thumbnail: '/sequences/denver/denver-1/frame_0001.webp' }
  ],
}

function RelatedStoryCards({ currentCity }: { currentCity: string }) {
  // Get stories from other cities (not the current one)
  const otherCities = Object.entries(cityHistoryEssays)
    .filter(([city]) => city !== currentCity)
    .slice(0, 2)

  // Get pages from current city (curiosities, dark-history, etc.)
  const cityPages = [
    { title: 'Curiosities', href: `/${currentCity}/curiosities`, type: 'curiosities' },
    { title: 'Dark History', href: `/${currentCity}/dark-history`, type: 'dark-history' },
  ]

  return (
    <>
      {/* Other city history essays */}
      {otherCities.map(([city, essays]) => (
        essays.map(essay => (
          <Link
            key={`${city}-${essay.slug}`}
            href={`/${city}/articles/${essay.slug}`}
            className="group relative overflow-hidden rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-all duration-300 hover:shadow-lg"
          >
            <div className="aspect-[16/9] relative overflow-hidden bg-neutral-200">
              <img
                src={essay.thumbnail}
                alt={essay.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <div className="text-xs font-semibold text-accent-600 uppercase tracking-wider mb-1">
                {city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              </div>
              <h4 className="font-bold text-neutral-900 mb-2 group-hover:text-accent-600 transition-colors">
                {essay.title}
              </h4>
              <p className="text-sm text-neutral-600 line-clamp-2">
                {essay.subtitle}
              </p>
            </div>
          </Link>
        ))
      ))}

      {/* Current city pages */}
      {cityPages.map(page => (
        <Link
          key={page.href}
          href={page.href}
          className="group flex items-center gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-all duration-300"
        >
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
            page.type === 'dark-history' ? 'bg-red-100' : 'bg-purple-100'
          }`}>
            {page.type === 'dark-history' ? (
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            )}
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-neutral-900 group-hover:text-accent-600 transition-colors">
              {page.title}
            </h4>
            <p className="text-sm text-neutral-500">
              Explore more from this city
            </p>
          </div>
          <svg className="w-5 h-5 text-neutral-400 group-hover:text-accent-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ))}
    </>
  )
}

// Memoized TextBlock to prevent re-renders when video frame changes
const TextBlock = memo(function TextBlock({ block, isFirst }: { block: any; isFirst?: boolean }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p
          className={`text-lg md:text-xl leading-relaxed text-neutral-800 mb-6 ${
            isFirst && block.dropcap
              ? 'first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:text-neutral-900'
              : ''
          }`}
        >
          {block.content}
        </p>
      )

    case 'pullquote':
      return (
        <blockquote className="pl-6 border-l-4 border-neutral-300 text-2xl md:text-3xl italic text-neutral-700 my-8">
          {block.content}
          {block.attribution && (
            <footer className="text-base not-italic text-neutral-500 mt-3">
              — {block.attribution}
            </footer>
          )}
        </blockquote>
      )

    case 'subheading':
      return (
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
          {block.content}
        </h2>
      )

    case 'break':
      if (block.style === 'dots') {
        return (
          <div className="flex justify-center gap-2 my-8">
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
          </div>
        )
      } else if (block.style === 'line') {
        return <hr className="border-neutral-200 my-8" />
      }
      return <div className="h-8" />

    default:
      return null
  }
})
