'use client'

interface MapMarkerProps {
  rank: number
  state: 'active' | 'primary' | 'secondary'
  spotName: string
  onClick: () => void
}

export function MapMarker({ rank, state, spotName, onClick }: MapMarkerProps) {
  const showLabel = state === 'active' || state === 'primary'

  return (
    <button
      onClick={onClick}
      className="group cursor-pointer focus:outline-none"
      aria-label={`${spotName}, rank ${rank}`}
      type="button"
    >
      {/* Label above marker */}
      {showLabel && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap">
          <div className="bg-white px-3 py-1.5 rounded-lg shadow-xl border border-neutral-200 transition-all duration-300 opacity-0 group-hover:opacity-100 group-focus:opacity-100">
            <span className="text-sm font-semibold text-neutral-900">{spotName}</span>
          </div>
          {/* Arrow pointing down */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
            <div className="w-2 h-2 bg-white border-r border-b border-neutral-200 rotate-45 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300" />
          </div>
        </div>
      )}

      {/* Marker pin */}
      <div
        className={`
          ${state === 'active' ? 'w-12 h-12 bg-[#c65d3b] animate-pulse-subtle' : ''}
          ${state === 'primary' ? 'w-9 h-9 bg-[#d97556]' : ''}
          ${state === 'secondary' ? 'w-6 h-6 bg-neutral-400' : ''}
          rounded-full
          border-2 border-white
          shadow-lg
          flex items-center justify-center
          transition-all duration-300
          group-hover:scale-110
          group-focus:scale-110
          group-focus:ring-2 group-focus:ring-white group-focus:ring-offset-2 group-focus:ring-offset-neutral-900
        `}
      >
        {showLabel && (
          <span className="text-white font-semibold text-sm">
            {rank}
          </span>
        )}
      </div>
    </button>
  )
}
