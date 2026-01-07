import { Metadata } from 'next'
import { Header, Footer } from '@/components'
import { getAllPageCards } from '@/lib/content/pages'
import { PageCard } from '@/components/cards/PageCard'

export const metadata: Metadata = {
  title: 'Best Bars | Curious City',
  description: 'The best bars across American cities - dive bars, cocktail lounges, and neighborhood favorites.',
}

export default async function BarsPage() {
  const allCards = await getAllPageCards()

  // Filter to bars articles only (guide pages with /bars in href)
  const barCards = allCards.filter((card) =>
    card.pageType === 'guide' && card.href.includes('/bars')
  )

  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Hero */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-3">
              Best Bars
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Dive bars, cocktail lounges, and neighborhood favorites.
              Where locals actually drink.
            </p>
          </div>

          {/* Single Column Article Feed */}
          {barCards.length > 0 ? (
            <div className="space-y-8 max-w-4xl mx-auto">
              {barCards.map((card, index) => (
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
              <p className="text-neutral-500 mb-4">No bar guides yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
