import { SceneContentItem } from '@/types/content'
import { ImageCarousel } from '../ImageCarousel'

interface SceneRendererProps {
  item: SceneContentItem
}

export function SceneRenderer({ item }: SceneRendererProps) {
  // Check if this is a video
  const isVideo = item.media?.type === 'video'

  // Support both the new images array and legacy media field
  const images = item.images || (item.media && item.media.type === 'image' ? [{
    src: item.media.src,
    alt: item.media.alt || '',
    caption: item.media.caption,
    credit: item.media.credit,
  }] : [])

  return (
    <article className="py-6">
      {item.title && (
        <h3 className="font-medium text-neutral-900 mb-2">{item.title}</h3>
      )}
      {item.description && (
        <p className="text-neutral-600 text-[15px] leading-relaxed mb-4">
          {item.description}
        </p>
      )}

      {/* Video display */}
      {isVideo && item.media && (
        <div className="relative aspect-video rounded-lg overflow-hidden bg-neutral-100 mb-4">
          <video
            src={item.media.src}
            poster={item.media.poster}
            controls
            className="w-full h-full object-cover"
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
          {item.media.caption && (
            <p className="text-sm text-neutral-600 mt-2">{item.media.caption}</p>
          )}
          {item.media.credit && (
            <p className="text-xs text-neutral-400 mt-1">Video: {item.media.credit}</p>
          )}
        </div>
      )}

      {/* Image carousel */}
      {images.length > 0 && (
        <ImageCarousel images={images} />
      )}
    </article>
  )
}
