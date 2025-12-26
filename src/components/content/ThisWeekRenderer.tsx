/**
 * @deprecated This renderer is for legacy ThisWeekContentItem data.
 * New content should use EventsContentItem and the EventTimeBuckets component.
 */
import { ThisWeekContentItem } from '@/types/content'
import { ContentBlock } from '../ContentBlock'

interface ThisWeekRendererProps {
  item: ThisWeekContentItem
}

function getCategoryStyles(category: string): string {
  switch (category) {
    case 'event':
      return 'bg-blue-50 text-blue-700'
    case 'opening':
      return 'bg-green-50 text-green-700'
    case 'closing':
      return 'bg-red-50 text-red-700'
    case 'seasonal':
      return 'bg-amber-50 text-amber-700'
    case 'limited':
      return 'bg-purple-50 text-purple-700'
    case 'popup':
      return 'bg-pink-50 text-pink-700'
    default:
      return 'bg-neutral-100 text-neutral-600'
  }
}

export function ThisWeekRenderer({ item }: ThisWeekRendererProps) {
  return (
    <ContentBlock title={item.title}>
      {item.intro && (
        <p className="text-neutral-600 text-[15px] leading-relaxed mb-6 -mt-2">
          {item.intro}
        </p>
      )}
      <div className="space-y-4">
        {item.items.map((thisWeekItem, index) => (
          <article key={index} className="py-4 border-b border-neutral-100 last:border-b-0">
            <div className="space-y-2">
              {thisWeekItem.category && (
                <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${getCategoryStyles(thisWeekItem.category)}`}>
                  {thisWeekItem.category}
                </span>
              )}
              <h3 className="font-medium text-neutral-900">{thisWeekItem.title}</h3>
              <p className="text-neutral-600 text-[15px] leading-relaxed">
                {thisWeekItem.description}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-neutral-500">
                {thisWeekItem.date && <span>{thisWeekItem.date}</span>}
                {thisWeekItem.time && <span>{thisWeekItem.time}</span>}
                {thisWeekItem.location && <span>{thisWeekItem.location}</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </ContentBlock>
  )
}
