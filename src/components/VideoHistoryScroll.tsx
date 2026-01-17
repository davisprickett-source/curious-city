'use client'

import { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import NextImage from 'next/image'
import { History } from '@/types/content'
import { UnifiedNav } from './navigation/UnifiedNav'
import { PremiumMobileMenu } from './PremiumMobileMenu'
import { ShareButton } from './ShareButton'
import { NewsletterSignup } from './NewsletterSignup'
import { FeedbackSection } from './FeedbackSection'
import { VideoEssayAds } from './ads/VideoEssayAds'
import { getCity } from '@/data/cities'
import { getCityFeaturedEntries } from '@/lib/content/cityHomepage'

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
  // Fargo sequences
  'fargo-1': 78,
  'fargo-2': 78,
  'fargo-3': 78,
  'fargo-4': 78,
  'fargo-5': 78,
  'fargo-6': 78,
  'fargo-7': 66,
  'fargo-8': 78,
  'fargo-9': 78,
  'fargo-10': 78,
  'fargo-11': 54,
  'fargo-12': 78,
  'fargo-13': 78,
  'fargo-14': 78,
  // Chicago sequences
  'chicago-1': 78,
  'chicago-2': 78,
  'chicago-3': 53,
  'chicago-4': 78,
  'chicago-5': 78,
  'chicago-6': 78,
  'chicago-7': 78,
  'chicago-8': 78,
  'chicago-9': 120,
  'chicago-10': 78,
  'chicago-11': 93,
  'chicago-12': 120,
  'chicago-13': 78,
  'chicago-14': 78,
}

// Circular loading animation component - centered in parent
function CircularLoader({ progress }: { progress: number }) {
  const radius = 24
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-3">
      <svg width="64" height="64" className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="4"
        />
        {/* Progress circle */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="#c65d3b"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-300 ease-out"
        />
      </svg>
      <span className="text-white/80 text-sm font-medium">Loading...</span>
    </div>
  )
}

export function VideoHistoryScroll({ history }: VideoHistoryScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const storyContentRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [currentFrame, setCurrentFrame] = useState(1)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isCurrentFrameLoaded, setIsCurrentFrameLoaded] = useState(false)
  const loadedFramesRef = useRef<Set<string>>(new Set())
  const imagesRef = useRef<Map<string, HTMLImageElement>>(new Map())
  const [cityName, setCityName] = useState('')
  const [firstFramePath, setFirstFramePath] = useState('')
  const lastLoadedFrameRef = useRef<string>('') // Track last successfully displayed frame

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
    // Use R2 CDN if available, otherwise local path
    const cdnUrl = process.env.NEXT_PUBLIC_SEQUENCES_CDN || ''
    const path = `/sequences/${city}/${sequenceName}/frame_${paddedNum}.webp`
    return cdnUrl ? `${cdnUrl}${path}` : path
  }

  // Preload frames progressively - first frame loads immediately
  useEffect(() => {
    const totalFramesToLoad: string[] = []

    videoBlocks.forEach((block) => {
      const seqName = getSequenceName(block.videoPath)
      const frameCount = getFrameCount(seqName)
      for (let i = 1; i <= frameCount; i++) {
        totalFramesToLoad.push(getFramePath(seqName, i))
      }
    })

    // Load first frame immediately
    if (totalFramesToLoad.length > 0) {
      const firstFrame = totalFramesToLoad[0]
      setFirstFramePath(firstFrame)

      const firstImg = new Image()
      firstImg.onload = () => {
        loadedFramesRef.current.add(firstFrame)
        imagesRef.current.set(firstFrame, firstImg)
        setIsCurrentFrameLoaded(true)
      }
      firstImg.src = firstFrame
    }

    const totalFrames = totalFramesToLoad.length
    let loadedCount = 0

    // Calculate the "initial load" threshold (10% of frames)
    const initialLoadThreshold = Math.ceil(totalFrames * 0.1)

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
              // Scale progress: 0-10% of actual frames = 0-100% visual progress
              const scaledProgress = Math.min(100, Math.round((loadedCount / initialLoadThreshold) * 100))
              setLoadingProgress(scaledProgress)
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

      // Stop showing loading UI once we hit the threshold
      if (loadedCount >= initialLoadThreshold) {
        setIsLoading(false)
      }

      if (startIdx + batchSize < totalFrames) {
        setTimeout(() => loadBatch(startIdx + batchSize, batchSize), 10)
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

  // Check if user has scrolled ahead of loaded frames
  const isFrameLoaded = loadedFramesRef.current.has(framePath)
  const showLoadingOverlay = isLoading || (!isFrameLoaded && framePath !== '')

  // Update last loaded frame ref when current frame is loaded
  if (isFrameLoaded && framePath) {
    lastLoadedFrameRef.current = framePath
  }

  // Use last loaded frame as fallback (stays on current position instead of jumping to start)
  const displayPath = isFrameLoaded ? framePath : (lastLoadedFrameRef.current || firstFramePath || framePath)

  return (
    <>
      {/* Navigation - simplified on mobile, full UnifiedNav on desktop */}
      {/* Mobile nav - simple fixed header with hamburger menu */}
      <div className="sm:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100">
        <div className="container-page">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center font-semibold text-neutral-900 tracking-tight">
              <img
                src="/logos/ccs.png"
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

      {/* Desktop fade overlay - fade text at top of visible area only */}
      <div className="hidden lg:block fixed right-0 w-[30%] h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-50 pointer-events-none" style={{ top: '25vh' }} />

      {/* Split Screen Section */}
      <div className="lg:flex lg:flex-row" ref={containerRef}>
        {/* Left Side: Video (Fixed on all screens) */}
        {/* Desktop: positioned within the visible window between letterbox bars (25vh-75vh) */}
        <div className="fixed left-0 right-0 top-[57px] h-[30vh] lg:right-auto lg:w-[70%] lg:top-[25vh] lg:h-[50vh] bg-neutral-900 flex items-center justify-center z-20 will-change-transform">
          {/* Always show an image - use first frame as fallback */}
          <img
            src={displayPath}
            alt=""
            className="w-full h-full object-cover lg:object-contain will-change-transform"
            style={{
              opacity: frameOpacity,
              transform: 'translateZ(0)', // Force GPU layer for smoother rendering
            }}
          />

          {/* Loading overlay with circular progress - centered */}
          {showLoadingOverlay && (
            <div className="absolute inset-0 bg-neutral-900/60 transition-opacity duration-300 flex items-center justify-center">
              <CircularLoader progress={loadingProgress} />
            </div>
          )}
        </div>

        {/* Right Side: Text (Scrollable, 30% width on desktop, full width on mobile) */}
        {/* z-10 keeps it below video (z-20) on mobile and below letterbox bars (z-40) on desktop */}
        <div className="w-full lg:w-[30%] lg:ml-[70%] bg-white relative z-10 will-change-transform" style={{ transform: 'translateZ(0)' }}>
          {/* Mobile spacer - push content below nav + fixed video + gradient overlay (add 6rem to clear gradient) */}
          <div className="lg:hidden" style={{ height: 'calc(57px + 30vh + 6rem)' }} />

          {/* Top spacing - centers content in middle of screen on desktop */}
          <div className="hidden lg:block" style={{ height: '50vh' }} />

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
                <div className="mb-4">
                  <ShareButton title={history.title} />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight text-neutral-900 mb-2">
                  {history.title}
                </h1>

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

            {/* Bottom spacing to allow last video to complete */}
            <div className="h-[25vh]" />
          </div>

          {/* Footer - OUTSIDE scroll measurement so video stops animating when article ends */}
          {/* Extra bottom padding on desktop to push content above 25vh letterbox bar */}
          <footer className="px-6 md:px-10 pt-6 pb-12 lg:pb-[30vh] bg-white">
              {/* Explore More Section */}
              <div className="mb-8 pb-8 border-b border-neutral-200">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Explore More</h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  <RelatedStoryCards currentCity={history.citySlug} currentSlug={history.slug} />
                </div>
              </div>

              {/* Share Options */}
              <div className="mb-8 pb-8 border-b border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-4">Share this story</h4>
                <ShareButton title={history.title} />
              </div>

              {/* Newsletter Signup */}
              <NewsletterSignup />

              {/* Feedback */}
              <FeedbackSection pageTitle={history.title} />
            </footer>
        </div>
      </div>

      {/* Ads in letterbox areas (desktop) and sticky bottom (mobile) */}
      <VideoEssayAds
        pageId={`${history.citySlug}-video-essay-${history.slug}`}
        citySlug={history.citySlug}
      />
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
    { title: 'The Will to Exist', subtitle: 'No river, no harbor, no geographic excuse—just 180 years of deciding to matter anyway', slug: 'will-to-exist', thumbnail: '/sequences/dallas/dallas-1/frame_0001.webp' }
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

function RelatedStoryCards({ currentCity, currentSlug }: { currentCity: string; currentSlug: string }) {
  const [items, setItems] = useState<Array<{
    id: string
    title: string
    teaser: string
    image: string
    href: string
    cityName?: string
    badge: string
  }>>([])

  useEffect(() => {
    async function fetchRelatedContent() {
      const relatedItems: Array<{
        id: string
        title: string
        teaser: string
        image: string
        href: string
        cityName?: string
        badge: string
      }> = []
      const usedIds = new Set<string>()

      // 1. Get 2 articles from OTHER cities
      const otherCities = Object.entries(cityHistoryEssays)
        .filter(([city]) => city !== currentCity)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2)

      for (const [city, essays] of otherCities) {
        for (const essay of essays) {
          const itemId = `${city}-${essay.slug}`
          if (!usedIds.has(itemId) && essay.slug !== currentSlug) {
            const cityName = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
            relatedItems.push({
              id: itemId,
              title: essay.title,
              teaser: essay.subtitle,
              image: essay.thumbnail,
              href: `/${city}/articles/${essay.slug}`,
              cityName,
              badge: 'Article',
            })
            usedIds.add(itemId)
            break
          }
        }
      }

      // 2. Get 2 discover pages from SAME city
      try {
        const sameCityEntries = await getCityFeaturedEntries(currentCity)
        const discoverPages = sameCityEntries
          .filter((entry) => !usedIds.has(entry.id))
          .slice(0, 2)

        for (const entry of discoverPages) {
          const badgeText = entry.type === 'curiosity' ? 'Curiosity' : entry.type === 'dark-history' ? 'Dark History' : 'Discover'
          relatedItems.push({
            id: entry.id,
            title: entry.title,
            teaser: entry.teaser,
            image: entry.image?.src || '',
            href: entry.href,
            badge: badgeText,
          })
          usedIds.add(entry.id)
        }
      } catch (error) {
        console.error('Error fetching discover pages:', error)
      }

      setItems(relatedItems)
    }

    fetchRelatedContent()
  }, [currentCity, currentSlug])

  return (
    <>
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="group relative overflow-hidden rounded-xl bg-white border border-neutral-200 hover:border-accent-300 transition-all duration-300 hover:shadow-lg"
        >
          <div className="aspect-[16/9] relative overflow-hidden bg-neutral-200">
            <NextImage
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="inline-block px-2.5 py-1 bg-accent-600 text-white text-xs font-bold uppercase tracking-wider rounded">
                {item.badge}
              </span>
            </div>
          </div>
          <div className="p-5">
            {item.cityName && (
              <div className="text-xs font-semibold text-accent-600 uppercase tracking-wider mb-2">
                {item.cityName}
              </div>
            )}
            <h4 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-accent-600 transition-colors leading-tight">
              {item.title}
            </h4>
            <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed">
              {item.teaser}
            </p>
          </div>
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
