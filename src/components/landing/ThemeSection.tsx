import { ReactNode } from 'react'

interface ThemeSectionProps {
  theme: 'dark' | 'discovery' | 'nostalgic'
  children: ReactNode
  className?: string
}

const themeStyles = {
  dark: {
    background: 'bg-gradient-to-b from-red-950/15 via-red-900/8 to-transparent',
    border: 'border-t border-red-900/20',
  },
  discovery: {
    background: 'bg-gradient-to-b from-purple-50/50 via-teal-50/30 to-transparent',
    border: 'border-t border-purple-100',
  },
  nostalgic: {
    background: 'bg-gradient-to-b from-amber-50/60 via-orange-50/30 to-transparent',
    border: 'border-t border-amber-100',
  },
}

export function ThemeSection({ theme, children, className = '' }: ThemeSectionProps) {
  const styles = themeStyles[theme]

  return (
    <section className={`${styles.background} ${styles.border} ${className}`}>
      <div className="container-page section-spacing py-12 md:py-16">
        {children}
      </div>
    </section>
  )
}
