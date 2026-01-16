'use client'

interface FeedbackSectionProps {
  variant?: 'default' | 'dark'
  pageTitle?: string
}

export function FeedbackSection({ variant = 'default', pageTitle }: FeedbackSectionProps) {
  const emailSubject = pageTitle
    ? `Feedback on: ${pageTitle}`
    : 'Feedback for Curious City'

  const mailtoHref = `mailto:hello@thecurious.city?subject=${encodeURIComponent(emailSubject)}`

  if (variant === 'dark') {
    return (
      <div className="border-t border-white/20 pt-8 text-center">
        <p className="text-neutral-300 mb-3">
          Know something we missed? Have a correction?
        </p>
        <a
          href={mailtoHref}
          className="inline-flex items-center gap-2 text-[#c65d3b] hover:text-[#a54d30] font-medium transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          We&apos;d love to hear from you
        </a>
      </div>
    )
  }

  // Default light variant
  return (
    <div className="border-t border-neutral-200 pt-8 text-center">
      <p className="text-neutral-600 mb-3">
        Know something we missed? Have a correction?
      </p>
      <a
        href={mailtoHref}
        className="inline-flex items-center gap-2 text-[#c65d3b] hover:text-[#a54d30] font-medium transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        We&apos;d love to hear from you
      </a>
    </div>
  )
}
