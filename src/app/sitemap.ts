import { MetadataRoute } from 'next'
import { CITY_METADATA } from '@/data/cities'
import { citySections } from '@/lib/routes'
import { getAllArticles } from '@/lib/queries/articles'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://thecurious.city'
  const currentDate = new Date()

  const routes: MetadataRoute.Sitemap = []

  // Homepage
  routes.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 1,
  })

  // History index page
  routes.push({
    url: `${baseUrl}/history`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  })

  // Global category pages
  const categories = ['hidden-gems', 'bars', 'restaurants', 'dark-history']
  categories.forEach((category) => {
    routes.push({
      url: `${baseUrl}/category/${category}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  })

  // All city pages and their sections
  CITY_METADATA.forEach((city) => {
    // City overview page
    routes.push({
      url: `${baseUrl}/${city.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    })

    // City section pages (articles, discover, guide)
    citySections.forEach((section) => {
      routes.push({
        url: `${baseUrl}/${city.slug}${section.path}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    })
  })

  // All articles across all cities
  try {
    const allArticles = await getAllArticles()
    allArticles.forEach((article) => {
      routes.push({
        url: `${baseUrl}/${article.citySlug}/articles/${article.slug}`,
        lastModified: new Date(article.updatedAt || article.publishedAt),
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    })
  } catch (error) {
    console.warn('Could not load articles for sitemap:', error)
  }

  return routes
}
