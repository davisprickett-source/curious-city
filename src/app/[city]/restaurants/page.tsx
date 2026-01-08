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
    title: `Best Restaurants in ${city.name} | Curious City`,
    description: `The best restaurants in ${city.name} - local favorites, hidden spots, and must-try dishes.`,
  }
}

export default async function CityRestaurantsPage({ params }: PageProps) {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  const restaurantsList = await getCityBestOf(slug, 'restaurants')

  // Flatten all spots from all best-of lists
  const allSpots = restaurantsList.flatMap(bestOf => bestOf.spots)

  // Filter spots with coordinates
  const spotsWithCoords = allSpots.filter(spot => spot.coordinates)

  // Get intro from first section if available
  const introText = restaurantsList[0]?.intro
  const intro = introText ? { text: introText } : undefined

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="restaurants"
      />

      <ScrollyMapView
        spots={spotsWithCoords}
        cityName={city.name}
        title={`Best Restaurants in ${city.name}`}
        intro={intro}
        markerType="restaurant"
        showBanner={true}
        bannerImage="/global-banners/restaurant-banner.png"
        currentCategory="restaurants"
      />
    </>
  )
}
