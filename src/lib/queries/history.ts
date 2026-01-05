import { History } from '@/types/content'
import { getAllCitySlugs } from '@/data/cities'

// Import all history data
import { history } from '@/data/history'

export async function getHistory(citySlug: string, slug: string): Promise<History | null> {
  const cityHistory = history[citySlug]
  if (!cityHistory) return null

  return cityHistory[slug] || null
}

export async function getAllHistorySlugs(): Promise<Array<{ city: string; slug: string }>> {
  const citySlugs = getAllCitySlugs()
  const result: Array<{ city: string; slug: string }> = []

  for (const citySlug of citySlugs) {
    const cityHistory = history[citySlug]
    if (cityHistory) {
      const historySlugs = Object.keys(cityHistory)
      for (const slug of historySlugs) {
        result.push({ city: citySlug, slug })
      }
    }
  }

  return result
}

export async function getCityHistory(citySlug: string): Promise<History[]> {
  const cityHistory = history[citySlug]
  if (!cityHistory) return []

  return Object.values(cityHistory)
}
