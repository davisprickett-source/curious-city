import { History, HistoryIndex } from '@/types/content'

import { minneapolis_history } from './minneapolis'
import { fargo_history } from './fargo'
import { raleigh_history } from './raleigh'
import { chicago_history } from './chicago'
import { salt_lake_city_history } from './salt-lake-city'
import { colorado_springs_history } from './colorado-springs'
import { dallas_history } from './dallas'
import { anchorage_history } from './anchorage'
import { denver_history } from './denver'
import { tampa_history } from './tampa'
import { phoenix_history } from './phoenix'
import { portland_history } from './portland'

// Premium history essays
import { minneapolis_premium_history } from './premium/minneapolis'
import { tampa_premium_history } from './premium/tampa'
import { phoenix_premium_history } from './premium/phoenix'
import { raleigh_premium_history } from './premium/raleigh'
import { portland_premium_history } from './premium/portland'
import { dallas_premium_history } from './premium/dallas'
import { salt_lake_city_premium_history } from './premium/salt-lake-city'
import { anchorage_premium_history } from './premium/anchorage'

// Re-export individual history collections
export { minneapolis_history }
export { fargo_history }
export { raleigh_history }
export { chicago_history }
export { salt_lake_city_history }
export { colorado_springs_history }
export { dallas_history }
export { anchorage_history }
export { denver_history }
export { tampa_history }
export { phoenix_history }
export { portland_history }

// Combined history index (includes both regular and premium)
export const history: HistoryIndex = {
  'minneapolis': { ...minneapolis_premium_history, ...minneapolis_history },
  'fargo': fargo_history,
  'raleigh': { ...raleigh_history, ...raleigh_premium_history },
  'chicago': chicago_history,
  'salt-lake-city': { ...salt_lake_city_history, ...salt_lake_city_premium_history },
  'colorado-springs': colorado_springs_history,
  'dallas': { ...dallas_history, ...dallas_premium_history },
  'anchorage': { ...anchorage_history, ...anchorage_premium_history },
  'denver': denver_history,
  'tampa': { ...tampa_history, ...tampa_premium_history },
  'phoenix': { ...phoenix_history, ...phoenix_premium_history },
  'portland': { ...portland_history, ...portland_premium_history },
}

export function getHistory(citySlug: string, historySlug: string): History | null {
  return history[citySlug]?.[historySlug] || null
}

export function getHistoryForCity(citySlug: string): History[] {
  const cityHistory = history[citySlug]
  if (!cityHistory) return []
  return Object.values(cityHistory)
}

export function getAllHistory(): History[] {
  return Object.values(history).flatMap((cityHistory) => Object.values(cityHistory))
}
