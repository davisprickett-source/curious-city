import { ContentItem } from '@/types/content'
import { Card } from './Card'
import { ContentBlock } from './ContentBlock'
import { AdPlaceholder } from './AdPlaceholder'
import { TextBlock } from './TextBlock'
import {
  CuriosityRenderer,
  HiddenGemRenderer,
  HistoryRenderer,
  DarkHistoryRenderer,
  LostAndLovedRenderer,
  BestOfRenderer,
  SceneRenderer,
} from './content'

interface ContentRendererProps {
  items: ContentItem[]
}

export function ContentRenderer({ items }: ContentRendererProps) {
  return (
    <>
      {items.map((item) => (
        <ContentItemRenderer key={item.id} item={item} />
      ))}
    </>
  )
}

function ContentItemRenderer({ item }: { item: ContentItem }) {
  switch (item.type) {
    case 'text':
      return <TextBlock content={item.content} />

    case 'card':
      return (
        <Card
          title={item.title}
          description={item.description}
          href={item.href}
          meta={item.meta}
          variant={item.variant}
        />
      )

    case 'card-list':
      return (
        <ContentBlock title={item.title}>
          <div className="space-y-3">
            {item.cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                href={card.href}
                meta={card.meta}
                variant={card.variant}
              />
            ))}
          </div>
        </ContentBlock>
      )

    case 'ad':
      return (
        <div className="py-4">
          <AdPlaceholder size={item.size} />
        </div>
      )

    case 'section':
      return (
        <ContentBlock title={item.title}>
          <ContentRenderer items={item.items} />
        </ContentBlock>
      )

    case 'curiosity':
      return <CuriosityRenderer item={item} />

    case 'hidden-gem':
      return <HiddenGemRenderer item={item} />

    case 'best-of':
      return <BestOfRenderer item={item} />

    case 'history':
      return <HistoryRenderer item={item} />

    case 'dark-history':
      return <DarkHistoryRenderer item={item} />

    case 'this-week':
      // ThisWeek is deprecated - content should be in events
      return null

    case 'events':
      // Events are handled by the EventTimeBuckets component on the dedicated events page
      return null

    case 'lost-and-loved':
      return <LostAndLovedRenderer item={item} />

    case 'scene':
      return <SceneRenderer item={item} />

    default:
      // Type-safe exhaustive check
      const _exhaustiveCheck: never = item
      console.warn('Unknown content type:', _exhaustiveCheck)
      return null
  }
}
