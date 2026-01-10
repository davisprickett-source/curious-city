/**
 * Fetch events from APIs and scrapers, generate files for curation
 *
 * Usage:
 *   npx tsx scripts/fetch-events.ts [city-slug]                      # Fetch and preview
 *   npx tsx scripts/fetch-events.ts [city-slug] --write              # Fetch and write file
 *   npx tsx scripts/fetch-events.ts [city-slug] --enrich-images      # Also fetch images from Wikipedia
 *   npx tsx scripts/fetch-events.ts [city-slug] --write --enrich-images  # Write with images
 *   npx tsx scripts/fetch-events.ts --all                            # Fetch all cities
 *
 * Sources:
 * - Ticketmaster API (concerts, sports, theater)
 * - Eventbrite API (community events, workshops)
 * - Songkick scraper (concerts at indie venues)
 * - Wikipedia (fallback images for artists/venues)
 *
 * The script will:
 * 1. Fetch events from all sources
 * 2. (Optional) Enrich events with images from Wikipedia
 * 3. Score events using city-specific rules
 * 4. Generate a TypeScript file for review
 * 5. You review/edit the file, then merge to deploy
 */

import * as dotenv from 'dotenv'
import * as path from 'path'
import * as fs from 'fs'

// Load .env.local explicitly
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

import { createTicketmasterClient } from '../src/lib/ticketmaster'
import { createEventbriteClient } from '../src/lib/eventbrite'
import { mergeEvents, normalizedToEventItem } from '../src/lib/event-aggregator'
import { getCityEventConfig, getAllCityEventConfigs } from '../src/lib/city-event-configs'
import { scoreEvent, shouldAutoFeature, shouldAutoHide } from '../src/lib/event-scoring'
import { getVenueScrapersForCity } from '../src/lib/providers/scrapers'
import { enrichEventsWithImages } from '../src/lib/image-fetcher'
import type { NormalizedEvent } from '../src/lib/api-types'

interface ScoredEvent extends NormalizedEvent {
  score: number
  scoreBreakdown: {
    venue: number
    eventType: number
    source: number
    timing: number
    reasons: string[]
  }
  autoFeatured: boolean
  autoHidden: boolean
}

async function fetchEventsForCity(citySlug: string, writeFile: boolean = false) {
  const config = getCityEventConfig(citySlug)

  if (!config) {
    console.error(`❌ City "${citySlug}" not found`)
    console.log('\nAvailable cities:')
    getAllCityEventConfigs().forEach((c) => console.log(`  - ${c.slug}`))
    process.exit(1)
  }

  console.log(`\n🔍 Fetching events for ${config.name}...\n`)

  // Initialize API clients
  let ticketmasterEvents: NormalizedEvent[] = []
  let eventbriteEvents: NormalizedEvent[] = []

  // Fetch from Ticketmaster
  try {
    if (process.env.TICKETMASTER_API_KEY) {
      const tmClient = createTicketmasterClient()
      console.log('📡 Fetching from Ticketmaster...')
      ticketmasterEvents = await tmClient.fetchNormalizedEvents(
        config.name,
        config.api.ticketmaster?.stateCode,
        100
      )
      console.log(`   ✅ Found ${ticketmasterEvents.length} events from Ticketmaster\n`)
    } else {
      console.log('⚠️  Skipping Ticketmaster (no API key)\n')
    }
  } catch (error) {
    console.error('❌ Ticketmaster error:', error)
  }

  // Fetch from Eventbrite
  try {
    if (process.env.EVENTBRITE_API_TOKEN) {
      const ebClient = createEventbriteClient()
      console.log('📡 Fetching from Eventbrite...')
      eventbriteEvents = await ebClient.fetchNormalizedEvents(
        config.api.eventbrite.locationAddress,
        100
      )
      console.log(`   ✅ Found ${eventbriteEvents.length} events from Eventbrite\n`)
    } else {
      console.log('⚠️  Skipping Eventbrite (no API token)\n')
    }
  } catch (error) {
    console.error('❌ Eventbrite error:', error)
  }

  // Fetch from venue scrapers (Songkick + city-specific venues)
  let venueScraperEvents: NormalizedEvent[] = []
  const venueScrapers = getVenueScrapersForCity(citySlug)

  for (const scraper of venueScrapers) {
    try {
      if (await scraper.isAvailable()) {
        console.log(`📡 Fetching from ${scraper.name}...`)
        const result = await scraper.fetchEvents(citySlug, { limit: 100 })
        console.log(`   ✅ Found ${result.events.length} events from ${scraper.name}`)
        venueScraperEvents.push(...result.events)
        if (result.errors.length > 0) {
          console.log(`   ⚠️  ${scraper.name} errors: ${result.errors.join(', ')}`)
        }
      } else {
        console.log(`⚠️  Skipping ${scraper.name} (not available)`)
      }
    } catch (error) {
      console.error(`❌ ${scraper.name} error:`, error)
    }
  }

  if (venueScrapers.length > 0) console.log('')

  // Merge and deduplicate all sources
  console.log('🔄 Merging and deduplicating...')
  const apiMerged = mergeEvents(ticketmasterEvents, eventbriteEvents)
  let mergedEvents = mergeEvents(apiMerged, venueScraperEvents)
  console.log(`   ${mergedEvents.length} unique events after deduplication\n`)

  // Enrich events without images (if --enrich-images flag is set)
  const enrichImages = process.argv.includes('--enrich-images')
  if (enrichImages) {
    console.log('🖼️  Enriching events with images from Wikipedia...')
    mergedEvents = await enrichEventsWithImages(mergedEvents, { concurrency: 3, delayMs: 300 })
    console.log('')
  }

  // Score events
  console.log('📊 Scoring events...')
  const scoredEvents: ScoredEvent[] = mergedEvents.map((event) => {
    const breakdown = scoreEvent(event, config)
    return {
      ...event,
      score: breakdown.total,
      scoreBreakdown: {
        venue: breakdown.venue,
        eventType: breakdown.eventType,
        source: breakdown.source,
        timing: breakdown.timing,
        reasons: breakdown.reasons,
      },
      autoFeatured: shouldAutoFeature(event, breakdown),
      autoHidden: shouldAutoHide(breakdown),
    }
  })

  // Sort by score
  scoredEvents.sort((a, b) => b.score - a.score)

  // Filter out auto-hidden events
  const visibleEvents = scoredEvents.filter((e) => !e.autoHidden)
  const hiddenEvents = scoredEvents.filter((e) => e.autoHidden)

  console.log(`   ✅ ${visibleEvents.length} events above threshold`)
  console.log(`   🚫 ${hiddenEvents.length} events auto-hidden (score < 30)\n`)

  // Display summary
  console.log('═'.repeat(80))
  console.log(`📋 TOP EVENTS FOR ${config.name.toUpperCase()} (showing top 20)`)
  console.log('═'.repeat(80))

  visibleEvents.slice(0, 20).forEach((event, index) => {
    const date = new Date(event.startDate)
    const dateStr = date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    })

    const featured = event.autoFeatured ? '⭐' : '  '
    const scoreStr = String(event.score).padStart(2)

    console.log(
      `${featured} ${String(index + 1).padStart(2)}. [${scoreStr}] ${event.title.substring(0, 50)}${event.title.length > 50 ? '...' : ''}`
    )
    console.log(`       📅 ${dateStr} @ ${event.venue || 'TBA'}`)
    if (event.scoreBreakdown.reasons.length > 0) {
      console.log(`       💡 ${event.scoreBreakdown.reasons.slice(0, 3).join(', ')}`)
    }
    console.log('')
  })

  // Show hidden events summary
  if (hiddenEvents.length > 0) {
    console.log('\n' + '─'.repeat(80))
    console.log(`🚫 AUTO-HIDDEN EVENTS (${hiddenEvents.length} total, showing top 5):`)
    console.log('─'.repeat(80))

    hiddenEvents.slice(0, 5).forEach((event) => {
      console.log(`   [${event.score}] ${event.title.substring(0, 60)}`)
      console.log(`       Reasons: ${event.scoreBreakdown.reasons.join(', ')}`)
    })
  }

  // Generate file content
  if (writeFile) {
    const outputPath = path.resolve(
      process.cwd(),
      `src/data/events/${citySlug}-api.ts`
    )

    const fileContent = generateEventFile(citySlug, config.name, visibleEvents)

    fs.writeFileSync(outputPath, fileContent)
    console.log(`\n✅ Wrote ${visibleEvents.length} events to: ${outputPath}`)
    console.log('\n📝 Next steps:')
    console.log('   1. Review the generated file')
    console.log('   2. Edit descriptions to be more engaging')
    console.log('   3. Remove any events that aren\'t interesting')
    console.log('   4. Mark your favorites with featured: true')
    console.log('   5. Commit and deploy!')
  } else {
    console.log('\n💡 Run with --write to generate the file:')
    console.log(`   npx tsx scripts/fetch-events.ts ${citySlug} --write`)
  }

  return { visible: visibleEvents, hidden: hiddenEvents }
}

function generateEventFile(
  citySlug: string,
  cityName: string,
  events: ScoredEvent[]
): string {
  const now = new Date().toISOString()

  let output = `/**
 * ${cityName} - API-Fetched Events
 *
 * Auto-generated on: ${now}
 * Sources: Ticketmaster, Eventbrite, Songkick
 *
 * REVIEW CHECKLIST:
 * [ ] Remove boring/corporate events
 * [ ] Edit descriptions to be more engaging
 * [ ] Mark best events with featured: true
 * [ ] Add any missing cool events to ${citySlug}-curated.ts
 */

import type { CuratedEvent } from './types'

export const ${toCamelCase(citySlug)}ApiEvents: CuratedEvent[] = [
`

  events.forEach((event) => {
    const eventItem = normalizedToEventItem(event)

    output += `  // Score: ${event.score} | ${event.scoreBreakdown.reasons.slice(0, 2).join(', ') || 'Base score'}\n`
    output += `  {\n`
    output += `    title: ${JSON.stringify(eventItem.title)},\n`
    output += `    description: ${JSON.stringify(eventItem.description)},\n`
    output += `    startDate: '${eventItem.startDate}',\n`
    if (eventItem.endDate) {
      output += `    endDate: '${eventItem.endDate}',\n`
    }
    if (eventItem.location) {
      output += `    location: ${JSON.stringify(eventItem.location)},\n`
    }
    output += `    category: '${eventItem.category}',\n`
    if (eventItem.tags && eventItem.tags.length > 0) {
      output += `    tags: ${JSON.stringify(eventItem.tags)},\n`
    }
    if (eventItem.href) {
      output += `    href: '${eventItem.href}',\n`
    }
    // Include image if available from API
    if (eventItem.image?.src) {
      output += `    image: {\n`
      output += `      src: '${eventItem.image.src}',\n`
      output += `      alt: ${JSON.stringify(eventItem.image.alt)},\n`
      output += `    },\n`
    }
    if (event.autoFeatured) {
      output += `    featured: true,\n`
    }
    output += `    source: '${event.source}',\n`
    output += `  },\n`
  })

  output += `]
`

  return output
}

function toCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
}

async function main() {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    console.log('Usage:')
    console.log('  npx tsx scripts/fetch-events.ts [city-slug]                      # Preview events')
    console.log('  npx tsx scripts/fetch-events.ts [city-slug] --write              # Generate file')
    console.log('  npx tsx scripts/fetch-events.ts [city-slug] --enrich-images      # Fetch fallback images')
    console.log('  npx tsx scripts/fetch-events.ts [city-slug] --write --enrich-images')
    console.log('  npx tsx scripts/fetch-events.ts --all                            # All cities')
    console.log('\nAvailable cities:')
    getAllCityEventConfigs().forEach((c) => console.log(`  - ${c.slug}`))
    process.exit(1)
  }

  const writeFile = args.includes('--write')
  const fetchAll = args.includes('--all')

  if (fetchAll) {
    const configs = getAllCityEventConfigs()
    for (const config of configs) {
      await fetchEventsForCity(config.slug, writeFile)
      // Rate limit between cities
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  } else {
    const citySlug = args.find((a) => !a.startsWith('--'))
    if (!citySlug) {
      console.error('Please provide a city slug')
      process.exit(1)
    }
    await fetchEventsForCity(citySlug, writeFile)
  }
}

main().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})
