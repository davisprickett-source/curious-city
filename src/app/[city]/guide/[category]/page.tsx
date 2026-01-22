import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getAllCitySlugs } from '@/data/cities'
import { UnifiedNav } from '@/components/navigation/UnifiedNav'
import { Footer } from '@/components'
import { DirectoryTemplate } from '@/components/directory'
import { BreadcrumbSchema } from '@/components/StructuredData'
import { getDenverCategory } from '@/data/cities/denver/guide'

interface PageProps {
  params: Promise<{ city: string; category: string }>
}

export async function generateStaticParams() {
  // For now, only Denver has the new guide structure
  // As we add more cities, expand this
  return [
    { city: 'denver', category: 'bars' },
    // TODO: Add more categories and cities
  ]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug, category: categorySlug } = await params

  // For now, only Denver is supported
  if (citySlug !== 'denver') {
    return { title: 'Not Found' }
  }

  const category = getDenverCategory(categorySlug)
  if (!category) {
    return { title: 'Not Found' }
  }

  const cityName = 'Denver'
  const url = `https://thecurious.city/${citySlug}/guide/${categorySlug}`

  return {
    title: category.seo?.title || `Best ${category.name} in ${cityName} | Curious City`,
    description: category.seo?.description || category.description,
    keywords: category.seo?.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `Best ${category.name} in ${cityName} | Curious City`,
      description: category.description,
      url,
    }
  }
}

export default async function GuideCategoryPage({ params }: PageProps) {
  const { city: citySlug, category: categorySlug } = await params

  // For now, only Denver is supported
  // TODO: Add router/loader for other cities
  if (citySlug !== 'denver') {
    notFound()
  }

  const category = getDenverCategory(categorySlug)
  if (!category) {
    notFound()
  }

  const cityName = 'Denver'
  const url = `https://thecurious.city/${citySlug}/guide/${categorySlug}`

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://thecurious.city' },
          { name: cityName, url: `https://thecurious.city/${citySlug}` },
          { name: 'Guide', url: `https://thecurious.city/${citySlug}/guide` },
          { name: category.name, url },
        ]}
      />
      <UnifiedNav
        citySlug={citySlug}
        cityName={cityName}
        currentSection="guide"
        useFixedPosition
      />

      <DirectoryTemplate
        category={category}
        cityName={cityName}
        citySlug={citySlug}
      />

      <Footer />
    </>
  )
}
