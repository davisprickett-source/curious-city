import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityBestOf } from '@/data/cities'
import { ScrollyMapView } from '@/components/scrollytelling'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'

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

  return {
    title: `Best Coffee Shops in ${city.name} | Curious City`,
    description: `The best coffee shops in ${city.name} - cozy cafes, third-wave roasters, and neighborhood favorites.`,
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

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="coffee-shops"
      />

      <ScrollyMapView
        spots={spotsWithCoords}
        cityName={city.name}
        title={sectionTitle || `Best Coffee Shops in ${city.name}`}
        intro={intro}
        markerType="coffee"
        currentCategory="coffee-shops"
      />
    </>
  )
}
