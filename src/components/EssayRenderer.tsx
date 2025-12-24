import { EssayBlock } from '@/types/content'
import { AdPlaceholder } from './AdPlaceholder'

interface EssayRendererProps {
  blocks: EssayBlock[]
}

export function EssayRenderer({ blocks }: EssayRendererProps) {
  return (
    <div className="essay-content max-w-3xl xl:max-w-[52rem] mx-auto">
      {blocks.map((block) => (
        <EssayBlockRenderer key={block.id} block={block} />
      ))}
    </div>
  )
}

function EssayBlockRenderer({ block }: { block: EssayBlock }) {
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
        <figure className="my-12 py-8 border-t border-b border-neutral-300">
          <blockquote className="text-2xl leading-relaxed text-neutral-900 font-medium italic">
            "{block.content}"
          </blockquote>
          {block.attribution && (
            <figcaption className="mt-4 text-sm text-neutral-500 ui-sans">
              — {block.attribution}
            </figcaption>
          )}
        </figure>
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

    default:
      const _exhaustiveCheck: never = block
      console.warn('Unknown essay block type:', _exhaustiveCheck)
      return null
  }
}
