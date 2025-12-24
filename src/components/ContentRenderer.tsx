import { ContentItem, BestOfSpot, LostAndLovedContentItem } from '@/types/content'
import { Card } from './Card'
import { ContentBlock } from './ContentBlock'
import { AdPlaceholder } from './AdPlaceholder'
import { TextBlock } from './TextBlock'
import { ImageCarousel } from './ImageCarousel'

// NOTE: Image rendering is currently disabled in this component
// because there are no actual images in the public folder.
// When real images are added, uncomment the image sections in:
// - hidden-gem (around line 137)
// - history (around line 270)
// - BestOfSpotCard (around line 368)

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
      return (
        <article className="py-5 border-b border-neutral-100 last:border-b-0">
          <div className="flex gap-3">
            {item.icon && (
              <span className="text-xl flex-shrink-0" aria-hidden="true">
                {item.icon}
              </span>
            )}
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

    case 'hidden-gem':
      return (
        <article className="py-5 border-b border-neutral-100 last:border-b-0">
          <div className="space-y-3">
            {/* Image - disabled until real images are added */}
            {/* {item.image && (
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-neutral-100">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="w-full h-full object-cover"
                />
                {item.image.credit && (
                  <span className="absolute bottom-2 right-2 text-xs text-white/80 bg-black/40 px-2 py-0.5 rounded">
                    {item.image.credit}
                  </span>
                )}
              </div>
            )} */}

            {/* Header */}
            <div className="flex items-baseline gap-2">
              <h3 className="font-medium text-neutral-900">
                {item.name}
              </h3>
              <span className="text-xs text-neutral-500 uppercase tracking-wide">
                {item.category}
              </span>
            </div>

            {/* Description */}
            <p className="text-neutral-600 text-[15px] leading-relaxed">
              {item.description}
            </p>

            {/* Details grid */}
            {(item.address || item.hours || item.price || item.accessibility) && (
              <div className="grid grid-cols-1 gap-2 text-sm">
                {item.address && (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-neutral-600 hover:text-accent-600 transition-colors"
                  >
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="underline underline-offset-2">{item.address}</span>
                  </a>
                )}
                {item.hours && (
                  <div className="flex items-start gap-2 text-neutral-600">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item.hours}</span>
                  </div>
                )}
                {item.price && (
                  <div className="flex items-start gap-2 text-neutral-600">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item.price}</span>
                  </div>
                )}
                {item.accessibility && (
                  <div className="flex items-start gap-2 text-neutral-600">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>{item.accessibility}</span>
                  </div>
                )}
              </div>
            )}

            {/* Footer: location, tip, links */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-500">
              {item.location && !item.address && (
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {item.location}
                </span>
              )}
              {item.coordinates && (
                <a
                  href={`https://www.google.com/maps?q=${item.coordinates.lat},${item.coordinates.lng}`}
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
              {item.website && (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-900 underline underline-offset-2"
                >
                  Website
                </a>
              )}
              {item.tip && (
                <span className="italic text-neutral-500">
                  {item.tip}
                </span>
              )}
            </div>
          </div>
        </article>
      )

    case 'best-of':
      return (
        <ContentBlock title={item.title}>
          {item.intro && (
            <p className="text-neutral-600 text-[15px] leading-relaxed mb-6 -mt-2">
              {item.intro}
            </p>
          )}
          <div className="divide-y divide-neutral-200">
            {item.spots.map((spot, index) => (
              <div key={index} className={index === 0 ? 'pb-8' : 'py-8'}>
                <BestOfSpotCard spot={spot} rank={index + 1} />
              </div>
            ))}
          </div>
        </ContentBlock>
      )

    case 'history':
      return (
        <article className="py-5 border-b border-neutral-100 last:border-b-0">
          <div className="space-y-3">
            {/* Image with historical context - disabled until real images are added */}
            {/* {item.image && (
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-neutral-100">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <div className="flex items-end justify-between">
                    {item.image.year && (
                      <span className="text-white text-sm font-medium">
                        {item.image.year}
                      </span>
                    )}
                    {item.image.credit && (
                      <span className="text-white/70 text-xs">
                        {item.image.credit}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )} */}

            {/* Era badge and title */}
            <div className="space-y-1">
              {item.era && (
                <span className="inline-block text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                  {item.era}
                </span>
              )}
              <h3 className="font-medium text-neutral-900 leading-snug">
                {item.title}
              </h3>
            </div>

            {/* Body text */}
            <p className="text-neutral-600 text-[15px] leading-relaxed">
              {item.body}
            </p>

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

    case 'dark-history':
      return (
        <article className="py-5 border-b border-neutral-100 last:border-b-0">
          <div className="space-y-3">
            {/* Category badge and year */}
            <div className="flex items-center gap-2">
              <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${
                item.category === 'unsolved' ? 'bg-red-50 text-red-700' :
                item.category === 'crime' ? 'bg-orange-50 text-orange-700' :
                item.category === 'disaster' ? 'bg-amber-50 text-amber-700' :
                item.category === 'mystery' ? 'bg-purple-50 text-purple-700' :
                item.category === 'macabre' ? 'bg-neutral-800 text-neutral-200' :
                item.category === 'haunting' ? 'bg-indigo-50 text-indigo-700' :
                item.category === 'cold-case' ? 'bg-slate-100 text-slate-700' :
                'bg-neutral-100 text-neutral-600'
              }`}>
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

    case 'this-week':
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
                    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${
                      thisWeekItem.category === 'event' ? 'bg-blue-50 text-blue-700' :
                      thisWeekItem.category === 'opening' ? 'bg-green-50 text-green-700' :
                      thisWeekItem.category === 'closing' ? 'bg-red-50 text-red-700' :
                      thisWeekItem.category === 'seasonal' ? 'bg-amber-50 text-amber-700' :
                      thisWeekItem.category === 'limited' ? 'bg-purple-50 text-purple-700' :
                      thisWeekItem.category === 'popup' ? 'bg-pink-50 text-pink-700' :
                      'bg-neutral-100 text-neutral-600'
                    }`}>
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

    case 'lost-and-loved':
      return (
        <article className="py-5 border-b border-neutral-100 last:border-b-0">
          <div className="space-y-3">
            {/* Category badge and years */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${
                item.category === 'restaurant' ? 'bg-rose-50 text-rose-700' :
                item.category === 'bar' ? 'bg-amber-50 text-amber-700' :
                item.category === 'shop' ? 'bg-blue-50 text-blue-700' :
                item.category === 'theater' ? 'bg-purple-50 text-purple-700' :
                item.category === 'music-venue' ? 'bg-indigo-50 text-indigo-700' :
                item.category === 'cafe' ? 'bg-emerald-50 text-emerald-700' :
                item.category === 'bookstore' ? 'bg-slate-100 text-slate-700' :
                item.category === 'entertainment' ? 'bg-pink-50 text-pink-700' :
                'bg-neutral-100 text-neutral-600'
              }`}>
                {item.category.replace('-', ' ')}
              </span>
              {item.yearsOpen && (
                <span className="text-xs text-neutral-400">
                  {item.yearsOpen}
                </span>
              )}
            </div>

            {/* Name and neighborhood */}
            <div className="flex items-baseline gap-2">
              <h3 className="font-medium text-neutral-900 leading-snug">
                {item.name}
              </h3>
              <span className="text-sm text-neutral-500">
                {item.neighborhood}
              </span>
            </div>

            {/* Description */}
            <p className="text-neutral-600 text-[15px] leading-relaxed">
              {item.description}
            </p>

            {/* Why missed */}
            <div className="bg-neutral-50 rounded-lg px-3 py-2">
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Why it's missed</span>
              <p className="text-neutral-700 text-sm mt-0.5">{item.whyMissed}</p>
            </div>

            {/* Community voice quote */}
            {item.communityVoice && (
              <blockquote className="border-l-2 border-accent-300 pl-3 italic text-neutral-600 text-sm">
                {item.communityVoice}
              </blockquote>
            )}

            {/* Footer: address, source */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-500">
              {item.lastAddress && (
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {item.lastAddress}
                </span>
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

    case 'scene':
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

    default:
      // Type-safe exhaustive check
      const _exhaustiveCheck: never = item
      console.warn('Unknown content type:', _exhaustiveCheck)
      return null
  }
}

function BestOfSpotCard({ spot, rank }: { spot: BestOfSpot; rank: number }) {
  // Combine single image and images array for carousel
  const carouselImages = spot.images || (spot.image ? [spot.image] : [])

  return (
    <article className="relative">
      {/* Rank badge */}
      <div className="absolute -left-1 -top-1 w-7 h-7 bg-accent-600 text-white text-sm font-semibold rounded-full flex items-center justify-center z-10 shadow-sm">
        {rank}
      </div>

      <div className="pl-8 space-y-4">
        {/* Image carousel */}
        {carouselImages.length > 0 && (
          <ImageCarousel images={carouselImages} className="ml-1" />
        )}

        {/* Header */}
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3 className="text-lg font-semibold text-neutral-900">{spot.name}</h3>
          <span className="text-sm text-neutral-500">{spot.neighborhood}</span>
          {spot.price && (
            <span className="text-sm text-accent-600 font-medium">{spot.price}</span>
          )}
        </div>

        {/* Vibe */}
        <p className="text-neutral-600 italic leading-relaxed">
          {spot.vibe}
        </p>

        {/* The Order - Redesigned */}
        <div className="relative border-l-2 border-accent-500 pl-4 py-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-accent-600 uppercase tracking-wider">The Order</span>
            <svg className="w-3.5 h-3.5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p className="text-neutral-800 font-medium">{spot.order}</p>
        </div>

        {/* Why */}
        <p className="text-neutral-600 leading-relaxed">
          {spot.why}
        </p>

        {/* Footer: address, hours, links */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-500 pt-2">
          {spot.address && (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="underline underline-offset-2">{spot.address}</span>
            </a>
          )}
          {spot.coordinates && !spot.address && (
            <a
              href={`https://www.google.com/maps?q=${spot.coordinates.lat},${spot.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-600 hover:text-accent-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span className="underline underline-offset-2">View on map</span>
            </a>
          )}
          {spot.hours && (
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {spot.hours}
            </span>
          )}
          {spot.website && (
            <a
              href={spot.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span className="underline underline-offset-2">Website</span>
            </a>
          )}
          {spot.instagram && (
            <a
              href={`https://instagram.com/${spot.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="underline underline-offset-2">{spot.instagram}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
