import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs, getCityBestOf } from '@/data/cities'
import { ScrollyMapView } from '@/components/scrollytelling'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { Footer, ShareLinks } from '@/components'

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

  // Get intro from first section if available
  const intro = coffeeShopsList[0]?.intro

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="coffee-shops"
      />

      {/* Hero Banner - Minneapolis only */}
      {city.slug === 'minneapolis' && (
        <div className="relative h-[500px] md:h-[600px] border-b border-neutral-200">
          <img
            src="/global-banners/coffee-banner.png"
            alt="Best Coffee Shops in Minneapolis"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
          <div className="relative container-page h-full flex flex-col justify-center items-start py-20">
            <div className="max-w-5xl">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                Best Coffee Shops in {city.name}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl font-medium leading-relaxed">
                {intro?.text || 'Cozy cafes, third-wave roasters, and neighborhood favorites.'}
              </p>
            </div>
            <div className="absolute top-6 right-6 md:top-8 md:right-8">
              <ShareLinks title={`Best Coffee Shops in ${city.name} | Curious City`} variant="banner" />
            </div>
          </div>
        </div>
      )}

      <ScrollyMapView
        spots={spotsWithCoords}
        cityName={city.name}
        title={`Best Coffee Shops in ${city.name}`}
        intro={intro}
        markerType="coffee"
      />

      <Footer />
    </>
  )
}
