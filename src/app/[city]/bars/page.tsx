import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getCity, getAllCitySlugs, getCityBestOf } from '@/data/cities'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { Footer } from '@/components'

const DynamicScrollyMapView = dynamic(
  () => import('@/components/scrollytelling/ScrollyMapView').then(mod => ({ default: mod.ScrollyMapView })),
  {
    ssr: false,
    loading: () => <div className="w-full h-screen bg-neutral-900 flex items-center justify-center text-neutral-500">Loading Map...</div>,
  }
)
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

  const url = `https://thecurious.city/${slug}/bars`

  return {
    title: `${city.name}'s Best Bars: Cocktail Lounges & Dive Bars | Curious City`,
    description: `A curated guide to the best bars in ${city.name}. From historic dive bars to high-end cocktail lounges, discover where the locals drink.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `The Best Bars in ${city.name} | Curious City`,
      description: `Discover where to drink in ${city.name}.`,
      url,
      images: [`/banners/hero-city-images/${city.slug}-skyline.png`],
    }
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

  // Get explore links for bottom section
  const exploreLinks = await getExploreLinks(slug, city.name, 'bars')

  const url = `https://thecurious.city/${slug}/bars`

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://thecurious.city' },
          { name: city.name, url: `https://thecurious.city/${slug}` },
          { name: 'Bars', url },
        ]}
      />
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="bars"
        useFixedPosition
      />

      <DynamicScrollyMapView
        spots={spotsWithCoords}
        cityName={city.name}
        title={`${city.name}'s Best Bars`}
        intro={intro}
        markerType="cocktail"
        showBanner={true}
        bannerImage="/global-banners/bar-banner.png"
        currentCategory="bars"
        exploreLinks={exploreLinks}
        footer={<Footer />}
        url={url} // Pass url here
      />
    </>
  )
}
