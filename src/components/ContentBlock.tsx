import { ReactNode } from 'react'

interface ContentBlockProps {
  title?: string
  children: ReactNode
  className?: string
}

export function ContentBlock({ title, children, className = '' }: ContentBlockProps) {
  return (
    <section className={`section-spacing ${className}`}>
      {title && (
        <h2 className="text-2xl font-semibold text-neutral-900 mb-5 tracking-tight ui-sans">
          {title}
        </h2>
      )}
      <div className="space-y-4">
        {children}
      </div>
    </section>
  )
}
