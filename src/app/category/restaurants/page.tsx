import { Metadata } from 'next'
import { Header, Footer } from '@/components'
import { getAllPageCards } from '@/lib/content/pages'
import { PageCard } from '@/components/cards/PageCard'

export const metadata: Metadata = {
  title: 'Best Restaurants | Curious City',
  description: 'The best restaurants across American cities - local favorites and hidden culinary gems.',
}

export default async function RestaurantsPage() {
  const allCards = await getAllPageCards()

  // Filter to restaurants articles only (guide pages with /restaurants in href)
  const restaurantCards = allCards.filter((card) =>
    card.pageType === 'guide' && card.href.includes('/restaurants')
  )

  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Hero */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-3">
              Best Restaurants
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Local favorites, neighborhood joints, and the places where locals actually eat.
              Skip the tourist traps.
            </p>
          </div>

          {/* Single Column Article Feed */}
          {restaurantCards.length > 0 ? (
            <div className="space-y-8 max-w-4xl mx-auto">
              {restaurantCards.map((card, index) => (
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
              <p className="text-neutral-500 mb-4">No restaurant guides yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
