import Link from 'next/link'
import { ReactNode } from 'react'

interface CardProps {
  title: string
  description?: string
  href?: string
  meta?: string
  category?: string
  children?: ReactNode
  variant?: 'default' | 'compact' | 'featured'
}

export function Card({
  title,
  description,
  href,
  meta,
  category,
  children,
  variant = 'default',
}: CardProps) {
  const baseStyles = 'group block bg-white rounded-xl border border-neutral-200 hover:border-accent-300 transition-all duration-200 ui-sans shadow-[0_8px_30px_-24px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_-20px_rgba(0,0,0,0.5)] hover:-translate-y-0.5'

  const variantStyles = {
    default: 'p-5',
    compact: 'p-4',
    featured: 'p-6 border-2 border-accent-200 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.5)]',
  }

  const content = (
    <>
      <div className="flex items-center gap-2 mb-2">
        {category && (
          <span className="kicker">
            {category}
          </span>
        )}
        {meta && !category && (
          <span className="eyebrow text-neutral-500">
            {meta}
          </span>
        )}
        {meta && category && (
          <span className="text-xs text-neutral-400">
            {meta}
          </span>
        )}
      </div>
      <h3 className={`font-semibold text-neutral-900 tracking-tight leading-snug group-hover:text-accent-700 transition-colors ${variant === 'featured' ? 'text-xl' : 'text-lg'}`}>
        {title}
      </h3>
      {description && (
        <p className="mt-2 text-neutral-600 text-[15px] leading-relaxed">
          {description}
        </p>
      )}
      {href && (
        <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-accent-600 opacity-0 group-hover:opacity-100 transition-opacity">
          Read more
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      )}
      {children && <div className="mt-3">{children}</div>}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variantStyles[variant]}`}>
        {content}
      </Link>
    )
  }

  return (
    <div className={`${baseStyles} ${variantStyles[variant]}`}>
      {content}
    </div>
  )
}
