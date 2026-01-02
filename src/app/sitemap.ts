import { MetadataRoute } from 'next'
import { CITY_METADATA } from '@/data/cities'
import { getAllHistory } from '@/data/history'
import { citySections } from '@/lib/routes'

export default function sitemap(): MetadataRoute.Sitemap {
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

  // All history articles
  const historyArticles = getAllHistory()
  historyArticles.forEach((article) => {
    routes.push({
      url: `${baseUrl}/${article.citySlug}/history/${article.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    })
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

    // City section pages
    citySections.forEach((section) => {
      // Skip 'history' section as it's the city overview
      if (section.id === 'history') return

      routes.push({
        url: `${baseUrl}/${city.slug}${section.path}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    })
  })

  return routes
}
