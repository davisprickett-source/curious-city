import { Metadata } from 'next'
import { Header, Footer } from '@/components'
import { getAllPageCards } from '@/lib/content/pages'
import { PageCard } from '@/components/cards/PageCard'

export const metadata: Metadata = {
  title: 'Hidden Gems | Curious City',
  description: 'Discover hidden gems and local favorites across American cities.',
}

export default async function HiddenGemsPage() {
  const allCards = await getAllPageCards()

  // Filter to hidden-gems articles only
  const hiddenGemCards = allCards.filter((card) => card.pageType === 'hidden-gems')

  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Hero */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-3">
              Hidden Gems
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Places the locals know about. Museums, parks, shops, and experiences
              that don't make it into the tourist guides.
            </p>
          </div>

          {/* Single Column Article Feed */}
          {hiddenGemCards.length > 0 ? (
            <div className="space-y-8 max-w-4xl mx-auto">
              {hiddenGemCards.map((card, index) => (
                <PageCard
                  key={card.href}
                  data={card}
                  variant="standard"
                  index={index}
                  priority={index === 0}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-500 mb-4">No hidden gems articles yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
