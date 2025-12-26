import { SceneContentItem } from '@/types/content'

interface SceneRendererProps {
  item: SceneContentItem
}

export function SceneRenderer({ item }: SceneRendererProps) {
  return (
    <article className="py-5">
      {item.title && (
        <h3 className="font-medium text-neutral-900 mb-2">{item.title}</h3>
      )}
      {item.description && (
        <p className="text-neutral-600 text-[15px] leading-relaxed mb-3">
          {item.description}
        </p>
      )}
      {item.media && item.media.type === 'image' && (
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-neutral-100">
          <img
            src={item.media.src}
            alt={item.media.alt || ''}
            className="w-full h-full object-cover"
          />
          {(item.media.caption || item.media.credit) && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
              {item.media.caption && (
                <p className="text-white text-sm">{item.media.caption}</p>
              )}
              {item.media.credit && (
                <span className="text-white/70 text-xs">{item.media.credit}</span>
              )}
            </div>
          )}
        </div>
      )}
    </article>
  )
}
