import { Metadata } from 'next'
import { Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { CategoryHeroSection } from '@/components/category/CategoryHeroSection'
import { CategoryCard } from '@/components/cards/CategoryCard'
import { curateCategoryPageContent, getCategoryMeta } from '@/lib/content/categoryPageCurator'

const categoryMeta = getCategoryMeta('hidden-gems')

export const metadata: Metadata = {
  title: `${categoryMeta.title} | Curious City`,
  description: categoryMeta.description,
}

export default async function HiddenGemsPage() {
  const { heroSlides, allCards } = await curateCategoryPageContent('hidden-gems')

  return (
    <>
      <UnifiedNav />

      {/* Hero Section with featured cities */}
      <CategoryHeroSection
        category="hidden-gems"
        title={categoryMeta.title}
        tagline={categoryMeta.tagline}
        slides={heroSlides}
      />

      <main className="flex-1 bg-white">
        {/* All Cities Grid */}
        <section className="py-12 md:py-16">
          <div className="container-page">
            <div className="mb-8 md:mb-10">
              <p className="eyebrow mb-2 text-emerald-600 text-sm md:text-base">
                Explore
              </p>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-neutral-900">
                By City
              </h2>
              <p className="mt-2 text-lg md:text-xl text-neutral-600 max-w-2xl">
                Off-the-beaten-path spots and local secrets that only insiders know about.
              </p>
            </div>

            {allCards.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allCards.map((card, index) => (
                  <CategoryCard
                    key={card.href}
                    data={card}
                    index={index}
                    priority={index < 3}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-neutral-500">No hidden gems content yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
