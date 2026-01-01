import { notFound } from 'next/navigation'
import { getCity, getCityHiddenGems } from '@/data/cities'
import { ShareLinks, Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import HiddenGemsClient from './HiddenGemsClient'

interface PageProps {
  params: Promise<{ city: string }>
}

export default async function CityHiddenGemsPage({ params }: PageProps) {
  const { city: citySlug } = await params
  const city = await getCity(citySlug)

  if (!city) {
    notFound()
  }

  const gems = await getCityHiddenGems(citySlug)

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="hidden-gems"
      />

      <main className="flex-1 bg-white">
        {/* Hero Header with Banner - Minneapolis only */}
        {city.slug === 'minneapolis' ? (
          <div className="relative h-[500px] md:h-[600px] border-b border-neutral-200">
            <img
              src="/Minneapolis/hidden-gems/hidden-gems-banner.png"
              alt="Hidden Gems in Minneapolis"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
            <div className="relative container-page h-full flex flex-col justify-center items-start py-20">
              <div className="max-w-5xl">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                  Hidden Gems in {city.name}
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl font-medium leading-relaxed">
                  Places the locals know about. Museums, parks, shops, and experiences that don't make it into the tourist guides.
                </p>
              </div>
              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <ShareLinks title={`Hidden Gems in ${city.name} | Curious City`} variant="banner" />
              </div>
            </div>
          </div>
        ) : (
          <div className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white">
            <div className="container-page py-12 md:py-16">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-3">
                    Hidden Gems in {city.name}
                  </h1>
                  <p className="text-lg md:text-xl text-neutral-600 max-w-3xl">
                    Places the locals know about. Museums, parks, shops, and experiences that don't make it into the tourist guides.
                  </p>
                </div>
                <div className="hidden sm:block flex-shrink-0">
                  <ShareLinks title={`Hidden Gems in ${city.name} | Curious City`} variant="compact" />
                </div>
              </div>
            </div>
          </div>
        )}

        <HiddenGemsClient gems={gems} cityName={city.name} />
      </main>

      <Footer />
    </>
  )
}
