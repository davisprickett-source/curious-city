import Image from 'next/image'
import { UniversalAd, createAdSlot } from './ads/UniversalAd'
import type { ArticleBlock } from '@/types/article'

interface ArticleRendererProps {
  blocks: ArticleBlock[]
  citySlug: string
  articleSlug: string
}

export function ArticleRenderer({ blocks, citySlug, articleSlug }: ArticleRendererProps) {
  return (
    <div className="article-content">
      {blocks.map((block, index) => (
        <ArticleBlockRenderer
          key={index}
          block={block}
          index={index}
          citySlug={citySlug}
          articleSlug={articleSlug}
        />
      ))}
    </div>
  )
}

function ArticleBlockRenderer({
  block,
  index,
  citySlug,
  articleSlug,
}: {
  block: ArticleBlock
  index: number
  citySlug: string
  articleSlug: string
}) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="text-neutral-700 text-lg leading-relaxed mb-6">
          {block.content}
        </p>
      )

    case 'heading':
      const HeadingTag = `h${block.level}` as 'h2' | 'h3' | 'h4'
      const headingClasses = {
        2: 'text-3xl font-bold text-neutral-900 mt-12 mb-6',
        3: 'text-2xl font-semibold text-neutral-900 mt-10 mb-4',
        4: 'text-xl font-semibold text-neutral-900 mt-8 mb-3',
      }
      return (
        <HeadingTag className={headingClasses[block.level]}>
          {block.content}
        </HeadingTag>
      )

    case 'image':
      return (
        <figure className="my-10">
          <div className="relative aspect-[16/9] bg-neutral-100 rounded-lg overflow-hidden">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {(block.caption || block.credit) && (
            <figcaption className="mt-3 text-sm text-neutral-600 text-center">
              {block.caption}
              {block.credit && (
                <span className="text-neutral-500"> • Photo: {block.credit}</span>
              )}
            </figcaption>
          )}
        </figure>
      )

    case 'gallery':
      return (
        <div className="my-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {block.images.map((img, i) => (
            <figure key={i}>
              <div className="relative aspect-square bg-neutral-100 rounded-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              {img.caption && (
                <figcaption className="mt-2 text-xs text-neutral-600">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )

    case 'quote':
      return (
        <blockquote className="my-10 border-l-4 border-accent-500 pl-6 py-4 bg-neutral-50 rounded-r-lg">
          <p className="text-xl text-neutral-800 italic leading-relaxed mb-3">
            "{block.content}"
          </p>
          {block.attribution && (
            <cite className="text-sm text-neutral-600 not-italic">
              — {block.attribution}
              {block.role && <span className="text-neutral-500">, {block.role}</span>}
            </cite>
          )}
        </blockquote>
      )

    case 'embed':
      return (
        <div className="my-10">
          {block.platform === 'youtube' && (
            <div className="relative aspect-video bg-neutral-900 rounded-lg overflow-hidden">
              <iframe
                src={getEmbedUrl(block.url, block.platform)}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
          {block.platform === 'instagram' && (
            <div className="flex justify-center">
              <iframe
                src={getEmbedUrl(block.url, block.platform)}
                className="border-0"
                width="400"
                height="600"
                allowFullScreen
              />
            </div>
          )}
          {block.platform === 'twitter' && (
            <div className="flex justify-center">
              <blockquote className="twitter-tweet">
                <a href={block.url}>View Tweet</a>
              </blockquote>
            </div>
          )}
          {block.caption && (
            <p className="mt-3 text-sm text-neutral-600 text-center">{block.caption}</p>
          )}
        </div>
      )

    case 'ad':
      return (
        <div className="my-10">
          <UniversalAd
            slot={createAdSlot(
              `${citySlug}-article-${articleSlug}-block-${index}`,
              block.size,
              { city: citySlug, type: 'article', position: 'content' }
            )}
          />
        </div>
      )

    case 'divider':
      const dividerStyles = {
        solid: 'border-neutral-300',
        dashed: 'border-dashed border-neutral-300',
        dotted: 'border-dotted border-neutral-300',
      }
      return (
        <hr
          className={`my-10 ${dividerStyles[block.style || 'solid']}`}
        />
      )

    case 'callout':
      const calloutStyles = {
        info: 'bg-blue-50 border-blue-200 text-blue-900',
        tip: 'bg-green-50 border-green-200 text-green-900',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
        success: 'bg-emerald-50 border-emerald-200 text-emerald-900',
      }
      return (
        <div
          className={`my-8 p-6 border-l-4 rounded-r-lg ${
            calloutStyles[block.variant || 'info']
          }`}
        >
          {block.title && (
            <h4 className="font-semibold mb-2">{block.title}</h4>
          )}
          <p className="leading-relaxed">{block.content}</p>
        </div>
      )

    default:
      return null
  }
}

function getEmbedUrl(url: string, platform: string): string {
  switch (platform) {
    case 'youtube':
      const youtubeId = url.match(
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
      )?.[1]
      return youtubeId ? `https://www.youtube.com/embed/${youtubeId}` : url

    case 'instagram':
      return url.replace(/\/$/, '') + '/embed'

    case 'vimeo':
      const vimeoId = url.match(/vimeo\.com\/(\d+)/)?.[1]
      return vimeoId ? `https://player.vimeo.com/video/${vimeoId}` : url

    case 'spotify':
      return url.replace('track', 'embed/track')

    default:
      return url
  }
}
