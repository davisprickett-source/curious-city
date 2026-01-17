import { CuriosityContentItem } from '@/types/content'

interface CuriosityRendererProps {
  item: CuriosityContentItem
}

export function CuriosityRenderer({ item }: CuriosityRendererProps) {
  return (
    <article className="py-5 border-b border-neutral-100 last:border-b-0">
      <div className="flex gap-3">
        <div className="min-w-0">
          <h3 className="font-medium text-neutral-900 leading-snug">
            {item.title}
          </h3>
          <p className="mt-2 text-neutral-600 text-[15px] leading-relaxed">
            {item.body}
          </p>

          {/* Further Reading/Shop Section */}
          {item.moreInfo && item.moreInfo.length > 0 && (
            <div className="bg-neutral-50 rounded-lg px-4 py-3 mt-4">
              <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Further Reading & Watching</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1.5">
                {item.moreInfo.map((info: any, idx: number) => (
                  <li key={idx}>
                    <span className="text-xs text-neutral-500 uppercase tracking-wide">
                      {info.type === 'video' && 'Video: '}
                      {info.type === 'podcast' && 'Podcast: '}
                      {info.type === 'article' && 'Article: '}
                      {info.type === 'shop' && 'Shop: '}
                      {info.type === 'product' && 'Product: '}
                      {info.type === 'book' && 'Book: '}
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
      </div>
    </article>
  )
}
