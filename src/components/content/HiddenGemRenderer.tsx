import { HiddenGemContentItem } from '@/types/content'

interface HiddenGemRendererProps {
  item: HiddenGemContentItem
}

export function HiddenGemRenderer({ item }: HiddenGemRendererProps) {
  return (
    <article className="py-5 border-b border-neutral-100 last:border-b-0">
      <div className="space-y-3">
        {/* Header */}
        <div className="flex items-baseline gap-2">
          <h3 className="font-medium text-neutral-900">
            {item.name}
          </h3>
          <span className="text-xs text-neutral-500 uppercase tracking-wide">
            {item.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-neutral-600 text-[15px] leading-relaxed">
          {item.description}
        </p>

        {/* Details grid */}
        {(item.address || item.hours || item.price || item.accessibility) && (
          <div className="grid grid-cols-1 gap-2 text-sm">
            {item.address && (
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-neutral-600 hover:text-accent-600 transition-colors"
              >
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="underline underline-offset-2">{item.address}</span>
              </a>
            )}
            {item.hours && (
              <div className="flex items-start gap-2 text-neutral-600">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{item.hours}</span>
              </div>
            )}
            {item.price && (
              <div className="flex items-start gap-2 text-neutral-600">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{item.price}</span>
              </div>
            )}
            {item.accessibility && (
              <div className="flex items-start gap-2 text-neutral-600">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>{item.accessibility}</span>
              </div>
            )}
          </div>
        )}

        {/* Footer: location, tip, links */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-500">
          {item.location && !item.address && (
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {item.location}
            </span>
          )}
          {item.coordinates && (
            <a
              href={`https://www.google.com/maps?q=${item.coordinates.lat},${item.coordinates.lng}`}
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
          {item.website && (
            <a
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 underline underline-offset-2"
            >
              Website
            </a>
          )}
          {item.tip && (
            <span className="italic text-neutral-500">
              {item.tip}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
