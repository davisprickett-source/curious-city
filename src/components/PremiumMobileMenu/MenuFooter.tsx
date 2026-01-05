'use client'

export function MenuFooter() {
  return (
    <div className="flex-shrink-0 border-t border-neutral-200 bg-[#f8f7f4] px-8 py-6">
      <div className="text-sm text-neutral-600">
        <a
          href="mailto:hello@thecurious.city"
          className="text-accent-600 hover:text-accent-700 transition-colors font-medium"
        >
          hello@thecurious.city
        </a>
      </div>
    </div>
  )
}
