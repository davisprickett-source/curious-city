import { BestOfContentItem, BestOfSpot } from '@/types/content'
import { ContentBlock } from '../ContentBlock'
import { ImageCarousel } from '../ImageCarousel'

interface BestOfRendererProps {
  item: BestOfContentItem
}

export function BestOfRenderer({ item }: BestOfRendererProps) {
  return (
    <ContentBlock title={item.title}>
      {item.intro && (
        <p className="text-neutral-600 text-[15px] leading-relaxed mb-6 -mt-2">
          {item.intro}
        </p>
      )}
      <div className="divide-y divide-neutral-200">
        {item.spots.map((spot, index) => (
          <div key={index} className={index === 0 ? 'pb-8' : 'py-8'}>
            <BestOfSpotCard spot={spot} rank={index + 1} />
          </div>
        ))}
      </div>
    </ContentBlock>
  )
}

function BestOfSpotCard({ spot, rank }: { spot: BestOfSpot; rank: number }) {
  // Combine single image and images array for carousel
  const carouselImages = spot.images || (spot.image ? [spot.image] : [])

  return (
    <article className="relative">
      {/* Rank badge */}
      <div className="absolute -left-1 -top-1 w-7 h-7 bg-accent-600 text-white text-sm font-semibold rounded-full flex items-center justify-center z-10 shadow-sm">
        {rank}
      </div>

      <div className="pl-8 space-y-4">
        {/* Image carousel */}
        {carouselImages.length > 0 && (
          <ImageCarousel images={carouselImages} className="ml-1" />
        )}

        {/* Header */}
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3 className="text-lg font-semibold text-neutral-900">{spot.name}</h3>
          <span className="text-sm text-neutral-500">{spot.neighborhood}</span>
          {spot.price && (
            <span className="text-sm text-accent-600 font-medium">{spot.price}</span>
          )}
        </div>

        {/* Vibe */}
        <p className="text-neutral-600 italic leading-relaxed">
          {spot.vibe}
        </p>

        {/* The Order - Redesigned */}
        <div className="relative border-l-2 border-accent-500 pl-4 py-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-accent-600 uppercase tracking-wider">The Order</span>
            <svg className="w-3.5 h-3.5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p className="text-neutral-800 font-medium">{spot.order}</p>
        </div>

        {/* Why */}
        <p className="text-neutral-600 leading-relaxed">
          {spot.why}
        </p>

        {/* Footer: address, hours, links */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-500 pt-2">
          {spot.address && (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="underline underline-offset-2">{spot.address}</span>
            </a>
          )}
          {spot.coordinates && !spot.address && (
            <a
              href={`https://www.google.com/maps?q=${spot.coordinates.lat},${spot.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-600 hover:text-accent-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span className="underline underline-offset-2">View on map</span>
            </a>
          )}
          {spot.hours && (
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {spot.hours}
            </span>
          )}
          {spot.website && (
            <a
              href={spot.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span className="underline underline-offset-2">Website</span>
            </a>
          )}
          {spot.instagram && (
            <a
              href={`https://instagram.com/${spot.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="underline underline-offset-2">{spot.instagram}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
