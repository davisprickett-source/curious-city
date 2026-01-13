import { notFound } from 'next/navigation'
import { getCity, getCityHiddenGems, getCityHiddenGemsSection } from '@/data/cities'
import { ShareButton } from '@/components/ShareButton'
import { Footer } from '@/components'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import HiddenGemsScroll from '@/components/HiddenGemsScroll'

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
  const section = await getCityHiddenGemsSection(citySlug)

  return (
    <>
      <UnifiedNav
        citySlug={city.slug}
        cityName={city.name}
        currentSection="hidden-gems"
      />

      <main className="flex-1 bg-white">
        {/* Hero Section - Dark Background */}
        <div className="bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">
          <div className="container-page py-12 md:py-16">
            <div className="max-w-3xl mx-auto">
              {/* Share Button at Top */}
              <div className="mb-6">
                <ShareButton title={`${city.name}'s Hidden Gems`} />
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {section?.title || `${city.name}'s Hidden Gems`}
              </h1>

              {/* Teaser/Hook in Italics */}
              {section?.teaser && (
                <p className="text-xl md:text-2xl text-white/90 italic leading-relaxed mb-8">
                  {section.teaser}
                </p>
              )}

              {/* Intro if exists */}
              {section?.intro && (
                <p className="text-lg text-white/80 leading-relaxed">
                  {section.intro}
                </p>
              )}
            </div>
          </div>
        </div>

        <HiddenGemsScroll gems={gems} cityName={city.name} />
      </main>

      <Footer />
    </>
  )
}
