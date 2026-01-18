'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Seattle video files mapping (sequence name -> mp4 path)
const SEATTLE_VIDEOS: { id: string; path: string; duration: number }[] = [
  { id: 'seattle-1', path: '/seattle/history-essay/1-p1-overview.mp4', duration: 3.2 },
  { id: 'seattle-2', path: '/seattle/history-essay/2-p2-indian.mp4', duration: 2.4 },
  { id: 'seattle-3', path: '/seattle/history-essay/3-p3-lumber.mp4', duration: 3.2 },
  { id: 'seattle-4', path: '/seattle/history-essay/4-p4-fire.mp4', duration: 3.2 },
  { id: 'seattle-5', path: '/seattle/history-essay/5-p5-gold.mp4', duration: 3.2 },
  { id: 'seattle-6', path: '/seattle/history-essay/6-p6-level.mp4', duration: 3.2 },
  { id: 'seattle-7', path: '/seattle/history-essay/7-p7plane.mp4', duration: 3.2 },
  { id: 'seattle-8', path: '/seattle/history-essay/8-p8-microsoft-boom.mp4', duration: 3.2 },
  { id: 'seattle-9', path: '/seattle/history-essay/9-p9-coffee.mp4', duration: 3.2 },
  { id: 'seattle-10', path: '/seattle/history-essay/10-p10-rockstar.mp4', duration: 3.2 },
  { id: 'seattle-11', path: '/seattle/history-essay/11-p11-freeze-neighborhood.mp4', duration: 3.2 },
  { id: 'seattle-12', path: '/seattle/history-essay/12-p12-protest.mp4', duration: 1.8 },
  { id: 'seattle-13', path: '/seattle/history-essay/13-p13-homeless.mp4', duration: 3.2 },
  { id: 'seattle-14', path: '/seattle/history-essay/14-p14-gentri-breweries.mp4', duration: 3.2 },
  { id: 'seattle-15', path: '/seattle/history-essay/15-p15-pikes-place.mp4', duration: 2.7 },
  { id: 'seattle-16', path: '/seattle/history-essay/16-p16-needle.mp4', duration: 3.2 },
  { id: 'seattle-17', path: '/seattle/history-essay/17-p17-water.mp4', duration: 3.2 },
  { id: 'seattle-18', path: '/seattle/history-essay/18-p18-mountains.mp4', duration: 3.2 },
  { id: 'seattle-19', path: '/seattle/history-essay/18-p19-tech.mp4', duration: 3.2 },
  { id: 'seattle-20', path: '/seattle/history-essay/20-p20-final.mp4', duration: 3.2 },
]

// Sample text blocks for testing
const TEXT_SECTIONS = [
  {
    videoIndex: 0,
    content: "The city clings to hills between two bodies of water, Puget Sound to the west and Lake Washington to the east, the whole improbable settlement built on land so steep that early residents strung cable cars up grades that horses refused.",
  },
  {
    videoIndex: 1,
    content: "They named it after Chief Si'ahl, anglicized to Seattle, a Suquamish and Duwamish leader who reportedly objected to having his name used because his people believed the dead are disturbed when their names are spoken.",
  },
  {
    videoIndex: 2,
    content: "The first industry was lumber, the Douglas firs and Western red cedars that grew two hundred feet tall and ten feet wide, trees so large that early loggers spent days felling a single one.",
  },
  {
    videoIndex: 3,
    content: "The Great Fire of 1889 burned the entire downtown to the ground—thirty blocks of wooden buildings gone in twelve hours, the flames jumping from block to block.",
  },
  {
    videoIndex: 4,
    content: "The Klondike Gold Rush saved Seattle from post-fire poverty. When gold was discovered in the Yukon in 1897, Seattle's merchants declared themselves the gateway to Alaska.",
  },
  {
    videoIndex: 5,
    content: "The money from the gold rush funded the next transformation. The hills were too steep for the city Seattle wanted to become, so they flattened them.",
  },
  {
    videoIndex: 6,
    content: "Boeing arrived in 1916, William Boeing building seaplanes in a converted boathouse on Lake Union, the company that would define Seattle for the next century.",
  },
  {
    videoIndex: 7,
    content: "Microsoft was founded in Albuquerque in 1975 but moved to Bellevue in 1979, Bill Gates returning to his hometown.",
  },
  {
    videoIndex: 8,
    content: "Starbucks opened in Pike Place Market in 1971, a single store selling coffee beans, no espresso drinks yet, just the raw material for home brewing.",
  },
  {
    videoIndex: 9,
    content: "Seattle became the unlikely capital of rock music in the early 1990s, the grunge explosion that made Nirvana and Pearl Jam famous.",
  },
  {
    videoIndex: 10,
    content: "The neighborhoods frozen in amber by restrictive zoning, the housing prices climbing faster than wages, the tech workers outbidding everyone else.",
  },
  {
    videoIndex: 11,
    content: "The WTO protests of 1999 shut down the city, fifty thousand people in the streets, the tear gas and broken windows.",
  },
  {
    videoIndex: 12,
    content: "The homeless encampments that appeared under every overpass, the tents in doorways downtown, the city unable to build housing fast enough.",
  },
  {
    videoIndex: 13,
    content: "The craft breweries and artisanal everything, the farmers markets and food trucks, the particular Seattle combination of outdoors culture and urban sophistication.",
  },
  {
    videoIndex: 14,
    content: "Pike Place Market survived urban renewal, the oldest continuously operating farmers market in the country, the fish throwers and flower sellers and the original Starbucks.",
  },
  {
    videoIndex: 15,
    content: "The Space Needle stands as a monument to 1962 optimism, the Century 21 Exposition's vision of a jetpack future that never quite arrived.",
  },
  {
    videoIndex: 16,
    content: "The water defines everything—ferries crossing the Sound, kayakers on Lake Union, the houseboats where people actually live year-round.",
  },
  {
    videoIndex: 17,
    content: "Mount Rainier looms over the city on clear days, the glaciated volcano that could bury Seattle in mudflows, the beautiful threat on the horizon.",
  },
  {
    videoIndex: 18,
    content: "Amazon and Microsoft and the tech industry have remade Seattle again, the cranes on the skyline, the billion-dollar campuses, the traffic that never ends.",
  },
  {
    videoIndex: 19,
    content: "Seattle remains a city arguing with its geography, building and rebuilding, the gray skies and evergreen hills and the constant reinvention.",
  },
]

export function VideoScrollTest() {
  const containerRef = useRef<HTMLDivElement>(null)
  const storyContentRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [loadingStates, setLoadingStates] = useState<boolean[]>(new Array(SEATTLE_VIDEOS.length).fill(false))
  const [isReady, setIsReady] = useState(false)

  // Track video durations once loaded
  const videoDurations = useRef<number[]>(new Array(SEATTLE_VIDEOS.length).fill(3))

  // Preload videos
  useEffect(() => {
    const loadPromises = SEATTLE_VIDEOS.map((_video, index) => {
      return new Promise<void>((resolve) => {
        const videoEl = videoRefs.current[index]
        if (!videoEl) {
          resolve()
          return
        }

        const handleCanPlay = () => {
          videoDurations.current[index] = videoEl.duration || 3
          setLoadingStates(prev => {
            const next = [...prev]
            next[index] = true
            return next
          })
          resolve()
        }

        if (videoEl.readyState >= 3) {
          handleCanPlay()
        } else {
          videoEl.addEventListener('canplaythrough', handleCanPlay, { once: true })
        }
      })
    })

    // Wait for at least the first 3 videos to be ready
    Promise.all(loadPromises.slice(0, 3)).then(() => {
      setIsReady(true)
    })
  }, [])

  // Calculate which video to show and what time to seek to
  const handleScroll = useCallback(() => {
    if (!containerRef.current || !storyContentRef.current) return

    const container = containerRef.current
    const storyContent = storyContentRef.current
    const containerRect = container.getBoundingClientRect()

    const containerTop = Math.max(0, -containerRect.top)
    const storyContentHeight = Math.max(1, storyContent.offsetHeight)

    const rawProgress = containerTop / storyContentHeight
    const progress = Math.max(0, Math.min(1, rawProgress))

    setScrollProgress(progress * 100)

    // Calculate which video we're in
    const totalVideos = SEATTLE_VIDEOS.length
    const videoProgress = progress * totalVideos
    const videoIndex = Math.min(Math.floor(videoProgress), totalVideos - 1)
    const progressInVideo = videoProgress - videoIndex

    setCurrentVideoIndex(videoIndex)

    // Seek the current video to the correct time
    const videoEl = videoRefs.current[videoIndex]
    if (videoEl && loadingStates[videoIndex]) {
      const duration = videoDurations.current[videoIndex] || videoEl.duration || 3
      const targetTime = progressInVideo * duration

      // Only seek if the difference is significant (avoid micro-seeks)
      if (Math.abs(videoEl.currentTime - targetTime) > 0.05) {
        videoEl.currentTime = targetTime
      }
    }
  }, [loadingStates])

  // Throttle scroll with RAF
  const rafRef = useRef<number | null>(null)
  const throttledHandleScroll = useCallback(() => {
    if (rafRef.current !== null) return
    rafRef.current = requestAnimationFrame(() => {
      handleScroll()
      rafRef.current = null
    })
  }, [handleScroll])

  useEffect(() => {
    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [throttledHandleScroll, handleScroll])

  const loadedCount = loadingStates.filter(Boolean).length
  const loadingProgress = Math.round((loadedCount / SEATTLE_VIDEOS.length) * 100)

  return (
    <>
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="font-semibold text-neutral-900">
              Video Scroll Test
            </Link>
            <div className="text-sm text-neutral-500">
              {loadedCount}/{SEATTLE_VIDEOS.length} videos loaded
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-14 left-0 right-0 h-1 bg-neutral-200 z-[60]">
        <motion.div
          className="h-full bg-[#c65d3b]"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Loading overlay */}
      {!isReady && (
        <div className="fixed inset-0 z-[100] bg-neutral-900 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-2xl font-bold mb-4">Loading videos...</div>
            <div className="w-64 h-2 bg-neutral-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#c65d3b] transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <div className="mt-2 text-neutral-400">{loadingProgress}%</div>
          </div>
        </div>
      )}

      {/* Video container - all videos stacked, only current one visible */}
      <div className="fixed left-0 right-0 top-14 h-[40vh] lg:right-auto lg:w-[65%] lg:top-14 lg:h-[calc(100vh-56px)] bg-neutral-900 z-20">
        {SEATTLE_VIDEOS.map((video, index) => (
          <video
            key={video.id}
            ref={(el) => { videoRefs.current[index] = el }}
            src={video.path}
            muted
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
              index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Debug info */}
        <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs p-2 rounded font-mono">
          Video: {currentVideoIndex + 1}/{SEATTLE_VIDEOS.length} |
          Scroll: {scrollProgress.toFixed(1)}% |
          Loaded: {loadedCount}
        </div>
      </div>

      {/* Text content */}
      <div className="w-full lg:w-[35%] lg:ml-[65%] bg-white relative z-10" ref={containerRef}>
        {/* Spacer for fixed video */}
        <div className="lg:hidden" style={{ height: 'calc(56px + 40vh + 2rem)' }} />
        <div className="hidden lg:block" style={{ height: '40vh' }} />

        <div ref={storyContentRef}>
          <div className="px-6 md:px-10 pb-4">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-neutral-900 mb-8">
              Rain City Rising
            </h1>

            <div className="space-y-8">
              {TEXT_SECTIONS.map((section, index) => (
                <p
                  key={index}
                  className={`text-lg leading-relaxed transition-colors duration-300 ${
                    currentVideoIndex === section.videoIndex
                      ? 'text-neutral-900'
                      : 'text-neutral-600'
                  }`}
                >
                  {section.content}
                </p>
              ))}
            </div>
          </div>

          {/* Bottom spacing */}
          <div className="h-[50vh]" />
        </div>

        {/* Footer */}
        <footer className="px-6 md:px-10 py-12 bg-neutral-100">
          <h3 className="text-xl font-bold mb-4">Test Complete</h3>
          <p className="text-neutral-600 mb-4">
            This is a test page comparing video scrubbing vs frame sequences.
          </p>
          <Link
            href="/seattle/articles/rain-city-rising"
            className="text-[#c65d3b] font-semibold hover:underline"
          >
            Compare with frame-based version →
          </Link>
        </footer>
      </div>
    </>
  )
}
