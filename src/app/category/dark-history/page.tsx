import { Metadata } from 'next'
import { Footer, ShareButton, NewsletterSignup } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { CategoryHeroSection } from '@/components/category/CategoryHeroSection'
import { CategoryCard } from '@/components/cards/CategoryCard'
import { curateCategoryPageContent, getCategoryMeta } from '@/lib/content/categoryPageCurator'
import { BreadcrumbSchema } from '@/components/StructuredData'
import Link from 'next/link'

const categoryMeta = getCategoryMeta('dark-history')

export const metadata: Metadata = {
  title: `${categoryMeta.title} | Curious City`,
  description: categoryMeta.description,
  alternates: {
    canonical: 'https://thecurious.city/category/dark-history',
  },
}

export default async function DarkHistoryPage() {
  const { heroSlides, allCards } = await curateCategoryPageContent('dark-history')

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://thecurious.city' },
          { name: 'Dark History', url: 'https://thecurious.city/category/dark-history' },
        ]}
      />
      <UnifiedNav />

      {/* Hero Section with featured cities */}
      <CategoryHeroSection
        category="dark-history"
        title={categoryMeta.title}
        tagline={categoryMeta.tagline}
        slides={heroSlides}
      />

      <main className="flex-1 bg-white">
        <div className="container-page py-6">
          <ShareButton title={`${categoryMeta.title} Category`} url={`https://thecurious.city/category/dark-history`} />
        </div>
        {/* All Cities Grid */}
        <section className="py-12 md:py-16">
          <div className="container-page">
            <div className="mb-8 md:mb-10">
              <p className="eyebrow mb-2 text-red-600 text-sm md:text-base">
                Explore
              </p>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-neutral-900">
                By City
              </h2>
              <p className="mt-2 text-lg md:text-xl text-neutral-600 max-w-2xl">
                Every city has shadows. Discover the untold stories from these places.
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
                <p className="text-neutral-500">No dark history content yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* End of Category Page Flow - Share, Subscribe, Feedback */}
      <div className="container-page py-12 space-y-8">
        {/* Share Component */}
        <ShareButton title={`${categoryMeta.title} Category`} url={`https://thecurious.city/category/dark-history`} />

        {/* Subscribe */}
        <NewsletterSignup />

        {/* Feedback Component (mailto link) */}
        <div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">Give Feedback</h3>
          <p className="text-neutral-700">
            Found an error or have a suggestion? {' '}
            <Link
              href={`mailto:hello@thecurious.city?subject=Feedback on ${categoryMeta.title} Category Page`}
              className="text-accent-600 hover:text-accent-700 font-semibold"
            >
              Send us feedback
            </Link>
            .
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}
