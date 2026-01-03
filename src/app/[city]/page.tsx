import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getCity, getAllCitySlugs } from '@/data/cities'
import { Footer, RelatedCities } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'

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

  // Define content sections available for this city
  const contentSections = [
    {
      title: 'Dark History',
      description: 'Unsolved mysteries, forgotten crimes, and the city\'s shadowy past',
      href: `/${slug}/dark-history`,
      gradient: 'from-red-900 to-red-700',
      thumbnail: city.content.find(c => c.type === 'dark-history')?.image?.src,
    },
    {
      title: 'Curiosities',
      description: 'Fascinating facts, peculiar details, and surprising stories',
      href: `/${slug}/curiosities`,
      gradient: 'from-purple-600 to-indigo-600',
      thumbnail: city.content.find(c => c.type === 'curiosity')?.image?.src,
    },
    {
      title: 'Hidden Gems',
      description: 'Off-the-beaten-path spots and local secrets',
      href: `/${slug}/hidden-gems`,
      gradient: 'from-emerald-600 to-teal-600',
      thumbnail: city.content.find(c => c.type === 'hidden-gem')?.image?.src,
    },
    {
      title: 'Lost & Loved',
      description: 'Beloved places we miss and remember fondly',
      href: `/${slug}/lost-and-loved`,
      gradient: 'from-amber-600 to-orange-600',
      thumbnail: city.content.find(c => c.type === 'lost-and-loved')?.image?.src,
    },
    {
      title: 'Guide',
      description: 'Best bars, restaurants, coffee shops, and local favorites',
      href: `/${slug}/guide`,
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Events',
      description: 'What\'s happening around town',
      href: `/${slug}/events`,
      gradient: 'from-pink-600 to-rose-600',
    },
  ]

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

          {/* Content Sections Grid */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                Explore {city.name}
              </h2>
              <p className="text-neutral-600 mt-2">
                Discover the stories, secrets, and soul of the city
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentSections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="group block bg-white border-2 border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-400 hover:shadow-xl transition-all duration-300"
                >
                  {/* Image or Gradient Header */}
                  {section.thumbnail ? (
                    <div className="relative h-48 bg-neutral-100">
                      <Image
                        src={section.thumbnail}
                        alt={section.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                    </div>
                  ) : (
                    <div className={`h-48 bg-gradient-to-br ${section.gradient}`} />
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-accent-600 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {section.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="px-6 pb-6">
                    <div className="inline-flex items-center text-accent-600 font-medium group-hover:gap-2 transition-all">
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
