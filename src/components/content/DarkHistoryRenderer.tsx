import { DarkHistoryContentItem } from '@/types/content'
import { ImageCarousel } from '../ImageCarousel'

interface DarkHistoryRendererProps {
  item: DarkHistoryContentItem
}

function getCategoryStyles(category: DarkHistoryContentItem['category']): string {
  switch (category) {
    case 'unsolved':
      return 'bg-red-50 text-red-700'
    case 'crime':
      return 'bg-orange-50 text-orange-700'
    case 'disaster':
      return 'bg-amber-50 text-amber-700'
    case 'mystery':
      return 'bg-purple-50 text-purple-700'
    case 'macabre':
      return 'bg-neutral-800 text-neutral-200'
    case 'haunting':
      return 'bg-indigo-50 text-indigo-700'
    case 'cold-case':
      return 'bg-slate-100 text-slate-700'
    default:
      return 'bg-neutral-100 text-neutral-600'
  }
}

export function DarkHistoryRenderer({ item }: DarkHistoryRendererProps) {
  // Support both images array and single image
  const carouselImages = item.images || (item.image ? [item.image] : [])

  return (
    <article className="py-5 border-b border-neutral-100 last:border-b-0">
      <div className="space-y-3">
        {/* Category badge and year */}
        <div className="flex items-center gap-2">
          <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${getCategoryStyles(item.category)}`}>
            {item.category}
          </span>
          {item.year && (
            <span className="text-xs text-neutral-400">
              {item.year}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-medium text-neutral-900 leading-snug">
          {item.title}
        </h3>

        {/* Verdict / resolution - MOVED TO TOP - full width */}
        {item.verdict && (
          <div className="-mx-4 sm:mx-0 bg-neutral-50 rounded-none sm:rounded-lg px-4 py-3">
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">What happened</span>
            <p className="text-neutral-700 text-sm mt-0.5">{item.verdict}</p>
          </div>
        )}

        {/* Image carousel - full width */}
        {carouselImages.length > 0 && (
          <div className="-mx-4 sm:mx-0">
            <ImageCarousel images={carouselImages} />
          </div>
        )}

        {/* Body text */}
        <p className="text-neutral-600 text-[15px] leading-relaxed">
          {item.body}
        </p>

        {/* Location Map */}
        {item.location?.coordinates && (
          <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-lg overflow-hidden bg-neutral-100 h-48">
            <iframe
              src={`https://www.google.com/maps?q=${item.location.coordinates.lat},${item.location.coordinates.lng}&z=15&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${item.location.name}`}
            />
          </div>
        )}

        {/* Footer: location */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-500">
          {item.location && (
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>
                {item.location.name}
                {item.location.stillExists === false && (
                  <span className="text-neutral-400 ml-1">(no longer exists)</span>
                )}
              </span>
            </span>
          )}
          {item.location?.coordinates && (
            <a
              href={`https://www.google.com/maps?q=${item.location.coordinates.lat},${item.location.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-neutral-600 hover:text-neutral-900 underline underline-offset-2"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open in Maps
            </a>
          )}
          {item.source && (
            <span className="italic text-neutral-400">
              Source: {item.source}
            </span>
          )}
        </div>

        {/* Sources Section */}
        {item.sources && item.sources.length > 0 && (
          <div className="-mx-4 sm:mx-0 bg-neutral-50 rounded-none sm:rounded-lg px-4 py-3 mt-4">
            <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Sources</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1.5">
              {item.sources.map((source: any, idx: number) => (
                <li key={idx}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-700 hover:text-accent-600 underline underline-offset-2"
                  >
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Further Reading/Watching Section */}
        {item.moreInfo && item.moreInfo.length > 0 && (
          <div className="-mx-4 sm:mx-0 bg-neutral-50 rounded-none sm:rounded-lg px-4 py-3 mt-3">
            <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Further Reading & Watching</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1.5">
              {item.moreInfo.map((info: any, idx: number) => (
                <li key={idx}>
                  <span className="text-xs text-neutral-500 uppercase tracking-wide">
                    {info.type === 'video' && 'Video: '}
                    {info.type === 'podcast' && 'Podcast: '}
                    {info.type === 'article' && 'Article: '}
                  </span>
                  <a
                    href={info.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-700 hover:text-accent-600 underline underline-offset-2"
                  >
                    {info.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  )
}
