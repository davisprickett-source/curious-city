import { Essay, EssaysIndex } from '@/types/content'

import { minneapolis_essays } from './minneapolis'
import { fargo_essays } from './fargo'
import { raleigh_essays } from './raleigh'
import { chicago_essays } from './chicago'
import { salt_lake_city_essays } from './salt-lake-city'
import { colorado_springs_essays } from './colorado-springs'
import { dallas_essays } from './dallas'
import { anchorage_essays } from './anchorage'
import { denver_essays } from './denver'
import { tampa_essays } from './tampa'
import { phoenix_essays } from './phoenix'
import { portland_essays } from './portland'

// Re-export individual essay collections
export { minneapolis_essays }
export { fargo_essays }
export { raleigh_essays }
export { chicago_essays }
export { salt_lake_city_essays }
export { colorado_springs_essays }
export { dallas_essays }
export { anchorage_essays }
export { denver_essays }
export { tampa_essays }
export { phoenix_essays }
export { portland_essays }

// Combined essays index
export const essays: EssaysIndex = {
  'minneapolis': minneapolis_essays,
  'fargo': fargo_essays,
  'raleigh': raleigh_essays,
  'chicago': chicago_essays,
  'salt-lake-city': salt_lake_city_essays,
  'colorado-springs': colorado_springs_essays,
  'dallas': dallas_essays,
  'anchorage': anchorage_essays,
  'denver': denver_essays,
  'tampa': tampa_essays,
  'phoenix': phoenix_essays,
  'portland': portland_essays,
}

export function getEssay(citySlug: string, essaySlug: string): Essay | null {
  return essays[citySlug]?.[essaySlug] || null
}

export function getEssaysForCity(citySlug: string): Essay[] {
  const cityEssays = essays[citySlug]
  if (!cityEssays) return []
  return Object.values(cityEssays)
}

export function getAllEssays(): Essay[] {
  return Object.values(essays).flatMap((cityEssays) => Object.values(cityEssays))
}
