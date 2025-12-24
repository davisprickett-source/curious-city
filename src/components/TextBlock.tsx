interface TextBlockProps {
  content: string
  className?: string
}

export function TextBlock({ content, className = '' }: TextBlockProps) {
  return (
    <div className={`max-w-none ${className}`}>
      <p className="text-[17px] leading-[1.8] text-neutral-700">
        {content}
      </p>
    </div>
  )
}
