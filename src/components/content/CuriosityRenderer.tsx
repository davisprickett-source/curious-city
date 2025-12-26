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
        </div>
      </div>
    </article>
  )
}
