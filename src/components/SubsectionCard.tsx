import Link from 'next/link'
import Image from 'next/image'

interface SubsectionCardProps {
  title: string
  teaser: string
  href: string
  thumbnail?: {
    src: string
    alt: string
  }
  gradient?: string
  fallbackGradient?: string
}

export function SubsectionCard({
  title,
  teaser,
  href,
  thumbnail,
  gradient = 'from-neutral-900/90 via-neutral-900/60 to-neutral-900/30',
  fallbackGradient = 'from-neutral-800 to-neutral-950',
}: SubsectionCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        {/* Background */}
        <div className="absolute inset-0">
          {thumbnail ? (
            <Image
              src={thumbnail.src}
              alt={thumbnail.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient}`} />
          )}
          {/* Always apply gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${gradient}`} />
        </div>

        {/* Content */}
        <div className="relative p-6 md:p-8 min-h-[220px] md:min-h-[260px] flex flex-col justify-end">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {title}
          </h2>

          {/* Teaser */}
          <p className="text-base text-white/85 leading-relaxed line-clamp-2 mb-4">
            {teaser}
          </p>

          {/* Explore link */}
          <div className="flex items-center text-accent-400 group-hover:text-white transition-colors border border-accent-400/30 group-hover:border-white/50 px-3 py-1.5 rounded-full w-fit">
            <span className="text-sm font-bold uppercase tracking-wider">Explore</span>
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
