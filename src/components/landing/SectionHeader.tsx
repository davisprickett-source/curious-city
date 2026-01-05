import Link from 'next/link'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  link?: {
    href: string
    text: string
  }
  theme?: 'light' | 'dark'
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  link,
  theme = 'light',
}: SectionHeaderProps) {
  const textColor = theme === 'dark' ? 'text-white' : 'text-neutral-900'
  const descriptionColor = theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
  const linkColor = theme === 'dark' ? 'text-accent-300 hover:text-accent-200' : 'text-accent-600 hover:text-accent-700'

  return (
    <div className="mb-8 md:mb-12">
      <div className="flex items-end justify-between gap-4 mb-4">
        <div>
          {eyebrow && (
            <div className={`eyebrow mb-2 ${theme === 'dark' ? 'text-accent-300' : 'text-accent-600'}`}>
              {eyebrow}
            </div>
          )}
          <h2 className={`text-3xl md:text-4xl font-bold ${textColor}`}>
            {title}
          </h2>
        </div>
        {link && (
          <Link
            href={link.href}
            className={`ui-sans text-sm font-semibold ${linkColor} transition-colors whitespace-nowrap flex items-center gap-1 group`}
          >
            {link.text}
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 7l5 5-5 5M6 12h12"
              />
            </svg>
          </Link>
        )}
      </div>
      {description && (
        <p className={`text-lg md:text-xl ${descriptionColor} max-w-3xl`}>
          {description}
        </p>
      )}
    </div>
  )
}
