/**
 * Venue scraper exports
 *
 * Each city can have multiple venue-specific scrapers.
 */

// Base class
export { BaseScraperProvider } from './base-scraper'

// Multi-city scrapers
export { SongkickProvider } from './songkick'

// Minneapolis venues
export { FirstAvenueProvider } from './first-avenue'
export { CedarCulturalProvider } from './cedar-cultural'
export { ParkwayTheaterProvider } from './parkway-theater'
export { AmsterdamBarProvider } from './amsterdam-bar'

// Chicago venues
export { MetroChicagoProvider } from './chicago-metro'

// Seattle venues
export { ShowboxSeattleProvider } from './seattle-showbox'

// Denver venues
export { DenverVenuesProvider } from './denver-gothic'

// Portland venues
export { PortlandVenuesProvider } from './portland-crystal'

// Phoenix venues
export { PhoenixVenuesProvider } from './phoenix-crescent'

// Dallas venues
export { DallasVenuesProvider } from './dallas-deep-ellum'

// Tampa venues
export { TampaVenuesProvider } from './tampa-ybor'

// Raleigh/Triangle venues
export { RaleighTriangleProvider } from './raleigh-triangle'

// Venue scraper registry by city
import { SongkickProvider } from './songkick'
import { FirstAvenueProvider } from './first-avenue'
import { CedarCulturalProvider } from './cedar-cultural'
import { ParkwayTheaterProvider } from './parkway-theater'
import { AmsterdamBarProvider } from './amsterdam-bar'
import { MetroChicagoProvider } from './chicago-metro'
import { ShowboxSeattleProvider } from './seattle-showbox'
import { DenverVenuesProvider } from './denver-gothic'
import { PortlandVenuesProvider } from './portland-crystal'
import { PhoenixVenuesProvider } from './phoenix-crescent'
import { DallasVenuesProvider } from './dallas-deep-ellum'
import { TampaVenuesProvider } from './tampa-ybor'
import { RaleighTriangleProvider } from './raleigh-triangle'
import type { BaseScraperProvider } from './base-scraper'

export function getVenueScrapersForCity(citySlug: string): BaseScraperProvider[] {
  const scrapers: BaseScraperProvider[] = []

  // Add Songkick for all supported cities
  const songkick = new SongkickProvider()
  if (songkick.getSupportedCities().includes(citySlug)) {
    scrapers.push(songkick)
  }

  // Add city-specific venue scrapers
  switch (citySlug) {
    case 'minneapolis':
      scrapers.push(
        new FirstAvenueProvider(),
        new CedarCulturalProvider(),
        new ParkwayTheaterProvider(),
        new AmsterdamBarProvider()
      )
      break

    case 'chicago':
      scrapers.push(
        new MetroChicagoProvider()
      )
      break

    case 'seattle':
      scrapers.push(
        new ShowboxSeattleProvider()
      )
      break

    case 'denver':
      scrapers.push(
        new DenverVenuesProvider()
      )
      break

    case 'portland':
      scrapers.push(
        new PortlandVenuesProvider()
      )
      break

    case 'phoenix':
      scrapers.push(
        new PhoenixVenuesProvider()
      )
      break

    case 'dallas':
      scrapers.push(
        new DallasVenuesProvider()
      )
      break

    case 'tampa':
      scrapers.push(
        new TampaVenuesProvider()
      )
      break

    case 'raleigh':
      scrapers.push(
        new RaleighTriangleProvider()
      )
      break
  }

  return scrapers
}

/**
 * Get all available venue scrapers across all cities
 */
export function getAllVenueScrapers(): BaseScraperProvider[] {
  return [
    new SongkickProvider(),
    new FirstAvenueProvider(),
    new CedarCulturalProvider(),
    new ParkwayTheaterProvider(),
    new AmsterdamBarProvider(),
    new MetroChicagoProvider(),
    new ShowboxSeattleProvider(),
    new DenverVenuesProvider(),
    new PortlandVenuesProvider(),
    new PhoenixVenuesProvider(),
    new DallasVenuesProvider(),
    new TampaVenuesProvider(),
    new RaleighTriangleProvider(),
  ]
}
