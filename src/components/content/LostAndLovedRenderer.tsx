import { LostAndLovedContentItem } from '@/types/content'
import { ImageCarousel } from '@/components/ImageCarousel'

interface LostAndLovedRendererProps {
  item: LostAndLovedContentItem
}

function getCategoryStyles(category: LostAndLovedContentItem['category']): string {
  switch (category) {
    case 'restaurant':
      return 'bg-rose-50 text-rose-700'
    case 'bar':
      return 'bg-amber-50 text-amber-700'
    case 'shop':
      return 'bg-blue-50 text-blue-700'
    case 'theater':
      return 'bg-purple-50 text-purple-700'
    case 'music-venue':
      return 'bg-indigo-50 text-indigo-700'
    case 'cafe':
      return 'bg-emerald-50 text-emerald-700'
    case 'bookstore':
      return 'bg-slate-100 text-slate-700'
    case 'entertainment':
      return 'bg-pink-50 text-pink-700'
    default:
      return 'bg-neutral-100 text-neutral-600'
  }
}

export function LostAndLovedRenderer({ item }: LostAndLovedRendererProps) {
  return (
    <article className="py-5 border-b border-neutral-100 last:border-b-0">
      <div className="space-y-3">
        {/* Category badge and years */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${getCategoryStyles(item.category)}`}>
            {item.category.replace('-', ' ')}
          </span>
          {item.yearsOpen && (
            <span className="text-xs text-neutral-400">
              {item.yearsOpen}
            </span>
          )}
        </div>

        {/* Name and neighborhood */}
        <div className="flex items-baseline gap-2">
          <h3 className="font-medium text-neutral-900 leading-snug">
            {item.name}
          </h3>
          <span className="text-sm text-neutral-500">
            {item.neighborhood}
          </span>
        </div>

        {/* Image carousel */}
        {item.images && item.images.length > 0 && (
          <ImageCarousel images={item.images} className="my-4" />
        )}

        {/* YouTube video embed */}
        {item.video && (
          <div className="my-4 aspect-video rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${item.video.youtubeId}${item.video.timestamp ? `?start=${item.video.timestamp}` : ''}`}
              title={item.video.title || `Video about ${item.name}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        )}

        {/* Description */}
        <p className="text-neutral-600 text-[15px] leading-relaxed">
          {item.description}
        </p>

        {/* Why missed */}
        <div className="bg-neutral-50 rounded-lg px-3 py-2">
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Why it's missed</span>
          <p className="text-neutral-700 text-sm mt-0.5">{item.whyMissed}</p>
        </div>

        {/* Community voice quote */}
        {item.communityVoice && (
          <blockquote className="border-l-2 border-accent-300 pl-3 italic text-neutral-600 text-sm">
            {item.communityVoice}
          </blockquote>
        )}

        {/* Footer: address, source */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-500">
          {item.lastAddress && (
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {item.lastAddress}
            </span>
          )}
          {item.source && (
            <span className="italic text-neutral-400">
              Source: {item.source}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
