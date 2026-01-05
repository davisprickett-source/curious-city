import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityBestOf } from '@/data/cities'
import { ScrollyMapView } from '@/components/scrollytelling'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { Footer } from '@/components'

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
    title: `Best Bars in ${city.name} | Curious City`,
    description: `The best bars in ${city.name} - dive bars, cocktail lounges, and neighborhood favorites.`,
  }
}

export default async function CityBarsPage({ params }: PageProps) {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  const barsList = await getCityBestOf(slug, 'bars')

  // Flatten all spots from all best-of lists
  const allSpots = barsList.flatMap(bestOf => bestOf.spots)

  // Filter spots with coordinates
  const spotsWithCoords = allSpots.filter(spot => spot.coordinates)

  // Get intro from first section if available
  const introText = barsList[0]?.intro
  const intro = introText ? { text: introText } : undefined

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="bars"
      />

      <ScrollyMapView
        spots={spotsWithCoords}
        cityName={city.name}
        title={`Best Bars in ${city.name}`}
        intro={intro}
        markerType="cocktail"
        showBanner={true}
        bannerImage="/global-banners/bar-banner.png"
      />

      <Footer />
    </>
  )
}
