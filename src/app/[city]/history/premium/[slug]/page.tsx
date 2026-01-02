import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getHistory, getAllHistory } from '@/data/history'
import { getCity } from '@/data/cities'
import { PremiumHistoryScroll } from '@/components/PremiumHistoryScroll'
import { VideoHistoryScroll } from '@/components/VideoHistoryScroll'
import { Footer } from '@/components'

interface PageProps {
  params: Promise<{ city: string; slug: string }>
}

export async function generateStaticParams() {
  const allHistory = getAllHistory()
  return allHistory
    .filter(h => h.premium?.enabled || h.premium?.isPremium)
    .map((history) => ({
      city: history.citySlug,
      slug: history.slug
    }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug, slug } = await params
  const history = getHistory(citySlug, slug)
  const city = await getCity(citySlug)

  if (!history || !city || (!history.premium?.enabled && !history.premium?.isPremium)) {
    return { title: 'Not Found' }
  }

  return {
    title: `${history.title} | ${city.name} | Curious City`,
    description: history.subtitle || `An immersive journey through ${history.title}`,
    openGraph: {
      title: `${history.title} | ${city.name}`,
      description: history.subtitle || '',
      type: 'article',
      publishedTime: history.publishedAt,
      authors: history.author ? [history.author] : undefined,
    }
  }
}

export default async function PremiumHistoryPage({ params }: PageProps) {
  const { city: citySlug, slug } = await params
  const history = getHistory(citySlug, slug)
  const city = await getCity(citySlug)

  if (!history || !city) {
    notFound()
  }

  // Redirect to regular history page if premium not enabled
  if (!history.premium?.enabled && !history.premium?.isPremium) {
    notFound()
  }

  // Check if this is a video-based history (has video-sequence blocks)
  const hasVideoSequences = history.blocks.some(block => block.type === 'video-sequence')

  return (
    <>
      {hasVideoSequences ? (
        <VideoHistoryScroll history={history} />
      ) : (
        <>
          <main className="min-h-screen bg-white">
            <PremiumHistoryScroll history={history} />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
