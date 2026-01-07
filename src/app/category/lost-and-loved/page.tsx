import { Metadata } from 'next'
import { Header, Footer } from '@/components'
import { getAllPageCards } from '@/lib/content/pages'
import { PageCard } from '@/components/cards/PageCard'

export const metadata: Metadata = {
  title: 'Lost & Loved | Curious City',
  description: 'Beloved places and cherished memories from cities across America - the landmarks we lost and still miss.',
}

export default async function LostAndLovedPage() {
  const allCards = await getAllPageCards()

  // Filter to lost-loved articles only
  const lostLovedCards = allCards.filter((card) => card.pageType === 'lost-loved')

  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Hero */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-3">
              Lost & Loved
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Beloved places and cherished memories from cities' golden eras.
              The landmarks we lost and the stories we still tell.
            </p>
          </div>

          {/* Single Column Article Feed */}
          {lostLovedCards.length > 0 ? (
            <div className="space-y-8 max-w-4xl mx-auto">
              {lostLovedCards.map((card, index) => (
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
              <p className="text-neutral-500 mb-4">No lost & loved articles yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
