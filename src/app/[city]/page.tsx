import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs } from '@/data/cities'
import { Footer, RelatedCities } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { getAllHistory } from '@/data/history'

const cityBanners: Record<string, string> = {
  minneapolis: '/banners/Minneapolis-banner.png',
  dallas: '/banners/Dallas-banner.png',
  raleigh: '/banners/Raleigh-banner.png',
  denver: '/banners/Denver-Banner.png',
  tampa: '/banners/Tampa-Banner.png',
  phoenix: '/banners/Phoenix Banner.png',
  portland: '/banners/Portland Banner.png',
  'salt-lake-city': '/banners/Salt Lake City Banner.png',
}

interface CityPageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((city) => ({ city }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    return { title: 'City Not Found' }
  }

  return {
    title: `${city.name} | Curious City`,
    description: city.tagline || `Local content from ${city.name}`,
  }
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params
  const city = await getCity(slug)

  if (!city) {
    notFound()
  }

  const bannerSrc = cityBanners[city.slug]

  // Get history essays for this city
  const allHistory = getAllHistory()
  const cityHistory = allHistory.filter((h) => h.citySlug === slug)

  // Extract section data from city content
  const contentSections: Array<{
    title: string
    teaser: string
    href: string
    thumbnail?: string
    gradient: string
  }> = []

  // Add History Essays section if there are any
  if (cityHistory.length > 0) {
    const firstEssay = cityHistory[0]
    contentSections.push({
      title: 'History Essays',
      teaser: `Long-form narratives exploring ${city.name}'s past`,
      href: `/${slug}/history`,
      thumbnail: firstEssay.heroImage?.src,
      gradient: 'from-amber-900 to-amber-700',
    })
  }

  // Find content sections in city data
  const darkHistorySection = city.content.find((c) => c.type === 'section' && c.title === 'Dark History')
  if (darkHistorySection && 'items' in darkHistorySection && darkHistorySection.items && darkHistorySection.items.length > 0) {
    const firstItem = darkHistorySection.items[0]
    let thumbnail: string | undefined
    if ('image' in firstItem && firstItem.image) {
      thumbnail = firstItem.image.src
    } else if ('images' in firstItem && firstItem.images && firstItem.images.length > 0) {
      thumbnail = firstItem.images[0].src
    }
    contentSections.push({
      title: darkHistorySection.title || 'Dark History',
      teaser: ('teaser' in darkHistorySection && typeof darkHistorySection.teaser === 'string')
        ? darkHistorySection.teaser
        : `Unsolved mysteries, forgotten crimes, and the darker chapters of ${city.name}'s history`,
      href: `/${slug}/dark-history`,
      thumbnail,
      gradient: 'from-red-900 to-red-700',
    })
  }

  const curiositiesSection = city.content.find((c) => c.type === 'section' && c.title?.includes('Curiosit'))
  if (curiositiesSection && 'items' in curiositiesSection && curiositiesSection.items && curiositiesSection.items.length > 0) {
    const firstItem = curiositiesSection.items[0]
    let thumbnail: string | undefined
    if ('image' in firstItem && firstItem.image) {
      thumbnail = firstItem.image.src
    } else if ('images' in firstItem && firstItem.images && firstItem.images.length > 0) {
      thumbnail = firstItem.images[0].src
    }
    contentSections.push({
      title: 'Curiosities',
      teaser: ('teaser' in curiositiesSection && typeof curiositiesSection.teaser === 'string')
        ? curiositiesSection.teaser
        : `Fascinating facts, peculiar details, and surprising stories about ${city.name}`,
      href: `/${slug}/curiosities`,
      thumbnail,
      gradient: 'from-purple-600 to-indigo-600',
    })
  }

  const hiddenGemsSection = city.content.find((c) => c.type === 'section' && c.title === 'Hidden Gems')
  if (hiddenGemsSection && 'items' in hiddenGemsSection && hiddenGemsSection.items && hiddenGemsSection.items.length > 0) {
    const firstItem = hiddenGemsSection.items[0]
    let thumbnail: string | undefined
    if ('image' in firstItem && firstItem.image) {
      thumbnail = firstItem.image.src
    } else if ('images' in firstItem && firstItem.images && firstItem.images.length > 0) {
      thumbnail = firstItem.images[0].src
    }
    contentSections.push({
      title: 'Hidden Gems',
      teaser: ('teaser' in hiddenGemsSection && typeof hiddenGemsSection.teaser === 'string')
        ? hiddenGemsSection.teaser
        : `Off-the-beaten-path spots and local secrets in ${city.name}`,
      href: `/${slug}/hidden-gems`,
      thumbnail,
      gradient: 'from-emerald-600 to-teal-600',
    })
  }

  const lostLovedSection = city.content.find((c) => c.type === 'section' && c.title === 'Lost & Loved')
  if (lostLovedSection && 'items' in lostLovedSection && lostLovedSection.items && lostLovedSection.items.length > 0) {
    const firstItem = lostLovedSection.items[0]
    let thumbnail: string | undefined
    if ('image' in firstItem && firstItem.image) {
      thumbnail = firstItem.image.src
    } else if ('images' in firstItem && firstItem.images && firstItem.images.length > 0) {
      thumbnail = firstItem.images[0].src
    }
    contentSections.push({
      title: 'Lost & Loved',
      teaser: ('teaser' in lostLovedSection && typeof lostLovedSection.teaser === 'string')
        ? lostLovedSection.teaser
        : `Beloved places we miss and remember fondly from ${city.name}`,
      href: `/${slug}/lost-and-loved`,
      thumbnail,
      gradient: 'from-amber-600 to-orange-600',
    })
  }

  // Always add Guide and Events
  contentSections.push(
    {
      title: 'Guide',
      teaser: `Best bars, restaurants, coffee shops, and local favorites in ${city.name}`,
      href: `/${slug}/guide`,
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Events',
      teaser: `What's happening around ${city.name}`,
      href: `/${slug}/events`,
      gradient: 'from-pink-600 to-rose-600',
    }
  )

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
      />

      {bannerSrc && (
        <div className="container-page pt-8">
          <div className="overflow-hidden rounded-2xl shadow-[0_18px_50px_-30px_rgba(0,0,0,0.45)]">
            <Image
              src={bannerSrc}
              alt={`${city.name} banner`}
              width={1536}
              height={512}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      )}

      <main className="flex-1">
        <div className="container-page section-spacing">
          {/* City Introduction */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {city.name}
            </h1>
            {city.tagline && (
              <p className="text-xl text-neutral-600">{city.tagline}</p>
            )}
          </div>

          {/* Premium 1-Column Feed */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                Explore {city.name}
              </h2>
              <p className="text-neutral-600 mt-2">
                Stories, secrets, and discoveries
              </p>
            </div>

            <div className="space-y-8 max-w-4xl">
              {contentSections.map((section, index) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-400 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="md:flex">
                    {/* Image or Gradient */}
                    <div className="md:w-2/5 relative">
                      {section.thumbnail ? (
                        <div className="relative h-64 md:h-full bg-neutral-100">
                          <Image
                            src={section.thumbnail}
                            alt={section.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 40vw"
                            priority={index === 0}
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                        </div>
                      ) : (
                        <div className={`h-64 md:h-full bg-gradient-to-br ${section.gradient}`} />
                      )}
                    </div>

                    {/* Content */}
                    <div className="md:w-3/5 p-8 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3 group-hover:text-accent-600 transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-neutral-600 text-lg leading-relaxed mb-4">
                        {section.teaser}
                      </p>
                      <div className="inline-flex items-center text-accent-600 font-semibold group-hover:gap-2 transition-all">
                        Explore
                        <svg
                          className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Related Cities */}
          <RelatedCities currentCitySlug={slug} />
        </div>
      </main>

      <Footer />
    </>
  )
}
