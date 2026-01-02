'use client'

interface MapControlsProps {
  activeSpotIndex: number
  totalSpots: number
  viewMode: 'explore' | 'overview'
  onViewAll: () => void
  onNext: () => void
  onPrev: () => void
  onGoToSpot?: (index: number) => void
}

export function MapControls({
  activeSpotIndex,
  totalSpots,
  viewMode,
  onViewAll,
  onGoToSpot
}: MapControlsProps) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 lg:left-8 lg:translate-x-0 lg:bottom-8">
      {/* Progress dots */}
      <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-3 shadow-lg flex items-center gap-2">
        {Array.from({ length: totalSpots }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (onGoToSpot && index !== activeSpotIndex) {
                onGoToSpot(index)
              }
            }}
            className={`
              w-2 h-2 rounded-full transition-all duration-300 cursor-pointer
              ${index === activeSpotIndex
                ? 'bg-[#c65d3b] w-6'
                : 'bg-neutral-300 hover:bg-neutral-400'
              }
              focus:outline-none focus:ring-2 focus:ring-[#c65d3b] focus:ring-offset-2
            `}
            aria-label={`Go to spot ${index + 1}`}
            aria-current={index === activeSpotIndex ? 'true' : 'false'}
          />
        ))}
      </div>

      {/* View All button */}
      <button
        onClick={onViewAll}
        className="
          bg-white/90 backdrop-blur-sm
          text-neutral-900
          px-6 py-3
          rounded-full
          shadow-lg
          font-medium
          text-sm
          hover:bg-white
          transition-all
          duration-300
          hover:scale-105
          focus:outline-none focus:ring-2 focus:ring-[#c65d3b] focus:ring-offset-2
          flex items-center gap-2
        "
        aria-label={viewMode === 'overview' ? 'Return to tour' : 'View all locations'}
      >
        {viewMode === 'overview' ? (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return to Tour
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            View All
          </>
        )}
      </button>

      {/* Keyboard hint (desktop only) */}
      <div className="hidden lg:block bg-neutral-900/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-xs">
        <span className="text-neutral-400">Use</span> ↑↓ <span className="text-neutral-400">or scroll</span>
      </div>
    </div>
  )
}
