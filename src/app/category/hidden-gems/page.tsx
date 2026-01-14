import { Metadata } from 'next'
import { Footer, ShareButton, NewsletterSignup } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { CategoryHeroSection } from '@/components/category/CategoryHeroSection'
import { CategoryCard } from '@/components/cards/CategoryCard'
import { curateCategoryPageContent, getCategoryMeta } from '@/lib/content/categoryPageCurator'
import { BreadcrumbSchema } from '@/components/StructuredData'
import Link from 'next/link'

const categoryMeta = getCategoryMeta('hidden-gems')

export const metadata: Metadata = {
  title: `${categoryMeta.title} | Curious City`,
  description: categoryMeta.description,
  alternates: {
    canonical: 'https://thecurious.city/category/hidden-gems',
  },
}

export default async function HiddenGemsPage() {
  const { heroSlides, allCards } = await curateCategoryPageContent('hidden-gems')

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://thecurious.city' },
          { name: 'Hidden Gems', url: 'https://thecurious.city/category/hidden-gems' },
        ]}
      />
      <UnifiedNav />

      {/* Hero Section with featured cities */}
      <CategoryHeroSection
        category="hidden-gems"
        title={categoryMeta.title}
        tagline={categoryMeta.tagline}
        slides={heroSlides}
      />

      <main className="flex-1 bg-white">
        <div className="container-page py-6">
          <ShareButton title={`${categoryMeta.title} Category`} url={`https://thecurious.city/category/hidden-gems`} />
        </div>
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

      {/* End of Category Page Flow - Share, Subscribe, Feedback */}
      <div className="container-page py-12 space-y-8">
        {/* Share Component */}
        <ShareButton title={`${categoryMeta.title} Category`} url={`https://thecurious.city/category/hidden-gems`} />

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
