import { HistoryContentItem } from '@/types/content'

interface HistoryRendererProps {
  item: HistoryContentItem
}

export function HistoryRenderer({ item }: HistoryRendererProps) {
  return (
    <article className="py-5 border-b border-neutral-100 last:border-b-0">
      <div className="space-y-3">
        {/* Era badge and title */}
        <div className="space-y-1">
          {item.era && (
            <span className="inline-block text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
              {item.era}
            </span>
          )}
          <h3 className="font-medium text-neutral-900 leading-snug">
            {item.title}
          </h3>
        </div>

        {/* Body text */}
        <p className="text-neutral-600 text-[15px] leading-relaxed">
          {item.body}
        </p>

        {/* Footer: location, source */}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Map
            </a>
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
