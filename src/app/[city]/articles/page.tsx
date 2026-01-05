import { redirect } from 'next/navigation'
import { getAllCitySlugs } from '@/data/cities'

interface ArticlesPageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((city) => ({ city }))
}

// Redirect /[city]/articles to /[city] (the main city page is the articles page)
export default async function ArticlesPage({ params }: ArticlesPageProps) {
  const { city: slug } = await params
  redirect(`/${slug}`)
}
