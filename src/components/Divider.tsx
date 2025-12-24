interface DividerProps {
  variant?: 'ornament' | 'compass' | 'dots' | 'line'
  className?: string
}

export function Divider({ variant = 'ornament', className = '' }: DividerProps) {
  if (variant === 'line') {
    return <hr className={`border-neutral-200 my-10 ${className}`} />
  }

  if (variant === 'dots') {
    return (
      <div className={`flex justify-center gap-2 my-10 ${className}`} aria-hidden="true">
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
      </div>
    )
  }

  if (variant === 'compass') {
    return (
      <div className={`divider-ornament ${className}`} aria-hidden="true">
        <svg
          className="w-6 h-6 text-accent-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
          <path d="M12 8l2 4-2 4-2-4 2-4z" fill="currentColor" />
        </svg>
      </div>
    )
  }

  // Default ornament - decorative flourish
  return (
    <div className={`divider-ornament ${className}`} aria-hidden="true">
      <svg
        className="w-8 h-3 text-accent-300"
        viewBox="0 0 32 12"
        fill="currentColor"
      >
        <path d="M16 6c-2 0-3.5-1.5-5.5-1.5S7 6 5 6 2 4.5 0 4.5v3C2 7.5 3 9 5 9s3.5-1.5 5.5-1.5S13 9 16 9s5-1.5 5.5-1.5S24 9 27 9s3-1.5 5-1.5v-3C30 4.5 29 6 27 6s-3.5-1.5-5.5-1.5S18 6 16 6z" />
      </svg>
    </div>
  )
}
