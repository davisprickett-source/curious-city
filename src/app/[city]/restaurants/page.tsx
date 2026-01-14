// import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityBestOf } from '@/data/cities'
// import { ScrollyMapView } from '@/components/scrollytelling' // Commented out
// import { UnifiedNav } from '@/components/navigation/UnifiedNav'
// import { Footer } from '@/components'
import { getExploreLinks } from '@/lib/content/cityHomepage'
// import { BreadcrumbSchema } from '@/components/StructuredData'
// import { ClientOnly } from '@/components/ClientOnly'

// const DynamicScrollyMapView = dynamic(() => import('@/components/scrollytelling').then((mod) => mod.ScrollyMapView), {
//   ssr: false,
// })

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

  const url = `https://thecurious.city/${slug}/restaurants`

  return {
    title: `${city.name}'s Best Restaurants: Local Favorites & Hidden Gems | Curious City`,
    description: `The essential restaurant guide for ${city.name}. We uncover the local favorites and culinary secrets you won't find in guidebooks.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `The Best Restaurants in ${city.name} | Curious City`,
      description: `Where the locals eat in ${city.name}.`,
      url,
      images: [`/banners/hero-city-images/${city.slug}-skyline.png`],
    }
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

  // Get explore links for bottom section
  const exploreLinks = await getExploreLinks(slug, city.name, 'restaurants')

  const url = `https://thecurious.city/${slug}/restaurants`

  return (
    <div>
      <h1>Restaurants Page for {city.name} (Debugging Mode)</h1>
      <p>This is a simplified version to debug SSR issues.</p>
    </div>
  )
}
