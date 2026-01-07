import { Metadata } from 'next'
import { Header, Footer } from '@/components'
import { getAllPageCards } from '@/lib/content/pages'
import { PageCard } from '@/components/cards/PageCard'

export const metadata: Metadata = {
  title: 'Local Curiosities | Curious City',
  description: 'Strange, wonderful, and bizarre local curiosities from cities across America.',
}

export default async function CuriositiesPage() {
  const allCards = await getAllPageCards()

  // Filter to curiosities articles only
  const curiosityCards = allCards.filter((card) => card.pageType === 'curiosities')

  return (
    <>
      <Header />

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* Hero */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-3">
              Local Curiosities
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The weird, wonderful, and downright bizarre things that make each city unique.
              Strange landmarks, unusual traditions, and the oddities that locals love.
            </p>
          </div>

          {/* Single Column Article Feed */}
          {curiosityCards.length > 0 ? (
            <div className="space-y-8 max-w-4xl mx-auto">
              {curiosityCards.map((card, index) => (
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
              <p className="text-neutral-500 mb-4">No curiosities articles yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
