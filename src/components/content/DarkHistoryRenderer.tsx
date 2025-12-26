import { DarkHistoryContentItem } from '@/types/content'

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

        {/* Body text */}
        <p className="text-neutral-600 text-[15px] leading-relaxed">
          {item.body}
        </p>

        {/* Verdict / resolution */}
        {item.verdict && (
          <div className="bg-neutral-50 rounded-lg px-3 py-2">
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">What happened</span>
            <p className="text-neutral-700 text-sm mt-0.5">{item.verdict}</p>
          </div>
        )}

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
