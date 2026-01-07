import { Metadata } from 'next'
import { Header, Footer } from '@/components'
import { getAllPageCards } from '@/lib/content/pages'
import { PageCard } from '@/components/cards/PageCard'

export const metadata: Metadata = {
  title: 'Dark History | Curious City',
  description: 'Forgotten crimes, unsolved mysteries, and macabre history from cities across America.',
}

export default async function DarkHistoryPage() {
  const allCards = await getAllPageCards()

  // Filter to dark-history articles only
  const darkHistoryCards = allCards.filter((card) => card.pageType === 'dark-history')

  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Hero */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-3">
              Dark History
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Forgotten crimes, unsolved mysteries, and the darker chapters
              that shaped these cities. The stories that don't make it into the brochures.
            </p>
          </div>

          {/* Single Column Article Feed */}
          {darkHistoryCards.length > 0 ? (
            <div className="space-y-8 max-w-4xl mx-auto">
              {darkHistoryCards.map((card, index) => (
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
              <p className="text-neutral-500 mb-4">No dark history articles yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
