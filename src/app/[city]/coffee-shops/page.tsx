import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getCity, getAllCitySlugs, getCityBestOf } from '@/data/cities'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { Footer } from '@/components'

const DynamicScrollyMapView = dynamic(() => import('@/components/scrollytelling').then(mod => mod.ScrollyMapView), {
  ssr: false,
  loading: () => <div className="w-full h-screen bg-neutral-900 flex items-center justify-center text-neutral-500">Loading Map...</div>,
})
import { getExploreLinks } from '@/lib/content/cityHomepage'
import { BreadcrumbSchema } from '@/components/StructuredData'

interface PageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((city) => ({ city }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    return { title: 'City Not Found' }
  }

  const url = `https://thecurious.city/${slug}/coffee-shops`

  return {
    title: `${city.name}'s Best Coffee Shops | Curious City`,
    description: `${city.name}'s best coffee shops - cozy cafes, third-wave roasters, and neighborhood favorites.`,
    alternates: {
      canonical: url,
    },
  }
}

export default async function CityCoffeeShopsPage({ params }: PageProps) {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  const coffeeShopsList = await getCityBestOf(slug, 'coffee-shops')

  // Flatten all spots from all best-of lists
  const allSpots = coffeeShopsList.flatMap(bestOf => bestOf.spots)

  // Filter spots with coordinates
  const spotsWithCoords = allSpots.filter(spot => spot.coordinates)

  // Get title and intro from first section if available
  const sectionTitle = coffeeShopsList[0]?.title
  const introText = coffeeShopsList[0]?.intro
  const intro = introText ? { text: introText } : undefined

  // Get explore links for bottom section
  const exploreLinks = await getExploreLinks(slug, city.name, 'coffee-shops')

  const url = `https://thecurious.city/${slug}/coffee-shops`

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://thecurious.city' },
          { name: city.name, url: `https://thecurious.city/${slug}` },
          { name: 'Coffee Shops', url },
        ]}
      />
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="coffee-shops"
        useFixedPosition
      />

      <DynamicScrollyMapView
        spots={spotsWithCoords}
        cityName={city.name}
        title={sectionTitle || `${city.name}'s Best Coffee Shops`}
        intro={intro}
        markerType="coffee"
        currentCategory="coffee-shops"
        exploreLinks={exploreLinks}
        footer={<Footer />}
        url={url} // Pass url here
      />
    </>
  )
}
