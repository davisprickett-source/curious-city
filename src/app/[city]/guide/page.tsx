import { Fragment } from 'react'
import { getCity, getAllCitySlugs, getCityBestOf } from '@/data/cities'
import { Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { SubsectionCard } from '@/components/SubsectionCard'
import { DualSidebarAds } from '@/components/ads/desktop/SidebarAd'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { BreadcrumbSchema } from '@/components/StructuredData'

interface GuidePageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((city) => ({ city }))
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = await getCity(slug)
  if (!city) return {}

  const url = `https://thecurious.city/${slug}/guide`

  return {
    title: `${city.name} Guide - Bars, Restaurants, Tours & More | Curious City`,
    description: `Your essential guide to ${city.name} - the best bars, restaurants, coffee shops, and tours curated by locals.`,
    alternates: {
      canonical: url,
    },
  }
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { city: slug } = await params
  const city = await getCity(slug)
  if (!city) notFound()

  // Fetch representative establishments for each category
  const barsList = await getCityBestOf(slug, 'bars')
  const restaurantsList = await getCityBestOf(slug, 'restaurants')
  const coffeeList = await getCityBestOf(slug, 'coffee-shops')

  // Get first spot with image from each category
  const getFirstSpotWithImage = (lists: any[]) => {
    for (const list of lists) {
      const spot = list.spots?.find((s: any) => s.images && s.images.length > 0)
      if (spot) return spot
    }
    return null
  }

  const barSpot = getFirstSpotWithImage(barsList)
  const restaurantSpot = getFirstSpotWithImage(restaurantsList)
  const coffeeSpot = getFirstSpotWithImage(coffeeList)

  // Only establishment categories - listicles (hidden gems, local favorites, lost & loved) are in Discover
  const guideCategories = [
    {
      title: 'Best Bars',
      teaser: 'Cocktail lounges, dive bars, and neighborhood favorites',
      href: `/${slug}/bars`,
      thumbnail: barSpot?.images?.[0],
      gradient: 'from-indigo-900/90 via-indigo-900/60 to-indigo-900/30',
      fallbackGradient: 'from-indigo-700 to-indigo-950',
    },
    {
      title: 'Best Restaurants',
      teaser: 'From fine dining to neighborhood spots, the city\'s culinary highlights',
      href: `/${slug}/restaurants`,
      thumbnail: restaurantSpot?.images?.[0],
      gradient: 'from-amber-900/90 via-amber-900/60 to-amber-900/30',
      fallbackGradient: 'from-amber-700 to-amber-950',
    },
    {
      title: 'Best Coffee Shops',
      teaser: 'Local roasters, cozy cafes, and third wave coffee',
      href: `/${slug}/coffee-shops`,
      thumbnail: coffeeSpot?.images?.[0],
      gradient: 'from-stone-900/90 via-stone-900/60 to-stone-900/30',
      fallbackGradient: 'from-stone-700 to-stone-950',
    },
    {
      title: 'Tours & Experiences',
      teaser: 'Ghost tours, architecture walks, food tours, and adventures',
      href: `/${slug}/tours`,
      thumbnail: undefined, // Will use fallback gradient
      gradient: 'from-accent-900/90 via-accent-900/60 to-accent-900/30',
      fallbackGradient: 'from-accent-700 to-accent-950',
    },
  ]

  return (
    <Fragment>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://thecurious.city' },
          { name: city.name, url: `https://thecurious.city/${slug}` },
          { name: 'Guide', url: `https://thecurious.city/${slug}/guide` },
        ]}
      />
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="guide"
      />

      <div className="city-page-wrapper">
        {/* Desktop Sidebar Ads (visible on 1400px+ screens) */}
        <DualSidebarAds
          pageId={`${slug}-guide`}
          targeting={{ city: city.name, category: 'guide' }}
          stickyTop={80}
        />

        <main className="flex-1">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
            <div className="container-page py-12 md:py-16">
              <div className="max-w-4xl">
                <div className="eyebrow text-accent-400 mb-3">Best of {city.name}</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  The Essential Guide
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl">
                  The best bars, restaurants, coffee shops, and experiences in {city.name}.
                </p>
              </div>
            </div>
          </div>

          {/* Guide Categories Grid */}
          <div className="container-page py-10 md:py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guideCategories.map((category) => (
                <SubsectionCard
                  key={category.href}
                  title={category.title}
                  teaser={category.teaser}
                  href={category.href}
                  thumbnail={category.thumbnail}
                  gradient={category.gradient}
                  fallbackGradient={category.fallbackGradient}
                />
              ))}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </Fragment>
  )
}
