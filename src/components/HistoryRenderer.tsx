import { HistoryBlock } from '@/types/content'
import { AdPlaceholder } from './AdPlaceholder'

interface HistoryRendererProps {
  blocks: HistoryBlock[]
}

export function HistoryRenderer({ blocks }: HistoryRendererProps) {
  return (
    <div className="history-content max-w-3xl xl:max-w-[52rem] mx-auto">
      {blocks.map((block) => (
        <HistoryBlockRenderer key={block.id} block={block} />
      ))}
    </div>
  )
}

function HistoryBlockRenderer({ block }: { block: HistoryBlock }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p
          className={`
            text-[20px] leading-[1.9] text-neutral-800 mb-8 tracking-[-0.01em]
            ${block.dropcap ? 'first-letter:text-7xl first-letter:font-semibold first-letter:float-left first-letter:mr-4 first-letter:mt-1 first-letter:leading-none first-letter:text-neutral-900' : ''}
          `}
        >
          {block.content}
        </p>
      )

    case 'pullquote':
      return (
        <blockquote className="my-12 pl-6 border-l-4 border-accent-600 text-2xl md:text-3xl italic text-neutral-700 font-serif">
          {block.content}
          {block.attribution && (
            <footer className="text-lg not-italic text-neutral-500 mt-4 font-sans">
              — {block.attribution}
            </footer>
          )}
        </blockquote>
      )

    case 'break':
      if (block.style === 'dots') {
        return (
          <div className="my-10 flex justify-center gap-2" aria-hidden="true">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
          </div>
        )
      }
      if (block.style === 'line') {
        return <hr className="my-10 border-neutral-200" />
      }
      // Default: space
      return <div className="my-12" aria-hidden="true" />

    case 'subheading':
      return (
        <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-5 ui-sans tracking-tight">
          {block.content}
        </h2>
      )

    case 'ad':
      return (
        <div className="my-10">
          <AdPlaceholder size={block.size} />
        </div>
      )

    case 'image-sequence':
    case 'scroll-text':
    case 'mixed-sequence':
    case 'video-sequence':
      // Premium blocks - not rendered in standard history renderer
      // These are only rendered in PremiumHistoryScroll or VideoHistoryScroll component
      return null

    default:
      const _exhaustiveCheck: never = block
      console.warn('Unknown history block type:', _exhaustiveCheck)
      return null
  }
}
