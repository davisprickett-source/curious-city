interface AdPlaceholderProps {
  size?: 'banner' | 'rectangle' | 'leaderboard'
  className?: string
}

const sizeStyles = {
  banner: 'h-[50px]',      // Mobile banner
  rectangle: 'h-[250px]',   // Medium rectangle
  leaderboard: 'h-[90px]',  // Leaderboard
}

export function AdPlaceholder({ size = 'banner', className = '' }: AdPlaceholderProps) {
  return (
    <div
      className={`
        w-full bg-neutral-100 border border-dashed border-neutral-300
        rounded flex items-center justify-center
        ${sizeStyles[size]} ${className}
      `}
      role="complementary"
      aria-label="Advertisement placeholder"
    >
      <span className="text-xs text-neutral-400 uppercase tracking-wider">
        Ad
      </span>
    </div>
  )
}
