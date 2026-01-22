'use client'

interface DirectoryHeroProps {
  title: string
  description: string
  citySlug: string
  categorySlug: string
}

/**
 * Hero section for directory pages
 * Simple title + description with subtle gradient background
 */
export function DirectoryHero({ title, description, citySlug, categorySlug }: DirectoryHeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
