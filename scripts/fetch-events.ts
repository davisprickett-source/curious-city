/**
 * Fetch events from APIs and output for curation
 * Usage: npx tsx scripts/fetch-events.ts [city-slug]
 */

import 'dotenv/config'
import { createTicketmasterClient } from '../src/lib/ticketmaster'
import { createEventbriteClient } from '../src/lib/eventbrite'
import { mergeEvents, filterEvents, formatForReview, normalizedToEventItem } from '../src/lib/event-aggregator'
import { getCityConfig, getAllCityConfigs } from '../src/lib/city-configs'

async function fetchEventsForCity(citySlug: string) {
  const config = getCityConfig(citySlug)

  if (!config) {
    console.error(`❌ City "${citySlug}" not found`)
    console.log('\nAvailable cities:')
    getAllCityConfigs().forEach((c) => console.log(`  - ${c.slug}`))
    process.exit(1)
  }

  console.log(`\n🔍 Fetching events for ${config.name}...\n`)

  // Initialize API clients
  let ticketmasterEvents: any[] = []
  let eventbriteEvents: any[] = []

  // Fetch from Ticketmaster
  try {
    if (process.env.TICKETMASTER_API_KEY) {
      const tmClient = createTicketmasterClient()
      console.log('📡 Fetching from Ticketmaster...')
      ticketmasterEvents = await tmClient.fetchNormalizedEvents(config.name, undefined, 50)
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
      eventbriteEvents = await ebClient.fetchNormalizedEvents(config.eventbriteCity, 50)
      console.log(`   ✅ Found ${eventbriteEvents.length} events from Eventbrite\n`)
    } else {
      console.log('⚠️  Skipping Eventbrite (no API token)\n')
    }
  } catch (error) {
    console.error('❌ Eventbrite error:', error)
  }

  // Merge and deduplicate
  console.log('🔄 Merging and deduplicating...\n')
  const mergedEvents = mergeEvents(ticketmasterEvents, eventbriteEvents)

  // Filter to get top candidates
  const filteredEvents = filterEvents(mergedEvents, {
    minRelevanceScore: 40, // Minimum score of 40/100
  }).slice(0, 30) // Top 30 events

  // Output for review
  console.log('═'.repeat(80))
  console.log(`📋 TOP EVENTS FOR ${config.name.toUpperCase()}`)
  console.log('═'.repeat(80))
  console.log(formatForReview(filteredEvents))

  // Generate code template
  console.log('\n' + '═'.repeat(80))
  console.log('📝 CODE TEMPLATE (Top 10 events)')
  console.log('═'.repeat(80))
  console.log('\nCopy this into src/data/cities.ts:\n')
  console.log('```typescript')
  console.log('{')
  console.log('  id: \'events-this-week\',')
  console.log('  type: \'events\',')
  console.log('  title: \'Events This Week\',')
  console.log('  intro: \'Happening now and coming up — pop-ups, openings, and things you shouldn\\\'t miss.\',')
  console.log('  items: [')

  // Output top 10 as code
  filteredEvents.slice(0, 10).forEach((event, index) => {
    const eventItem = normalizedToEventItem(event)

    console.log('    {')
    console.log(`      title: '${eventItem.title.replace(/'/g, "\\'")}',`)
    console.log(`      description: '${eventItem.description.replace(/'/g, "\\'")}',`)
    console.log(`      startDate: '${eventItem.startDate}',`)
    if (eventItem.endDate) {
      console.log(`      endDate: '${eventItem.endDate}',`)
    }
    if (eventItem.location) {
      console.log(`      location: '${eventItem.location.replace(/'/g, "\\'")}',`)
    }
    console.log(`      category: '${eventItem.category}',`)
    if (eventItem.tags && eventItem.tags.length > 0) {
      console.log(`      tags: ${JSON.stringify(eventItem.tags)},`)
    }
    if (eventItem.href) {
      console.log(`      href: '${eventItem.href}',`)
    }
    if (eventItem.image) {
      console.log('      // image: {')
      console.log(`      //   src: '${eventItem.image.src}',`)
      console.log(`      //   alt: '${eventItem.image.alt.replace(/'/g, "\\'")}',`)
      console.log('      // },')
    }
    console.log(`    }${index < 9 ? ',' : ''}`)
  })

  console.log('  ],')
  console.log('},')
  console.log('```')

  console.log('\n💡 Tips:')
  console.log('  1. Review descriptions - edit to be more engaging')
  console.log('  2. Download and add images to /public/images/events/')
  console.log('  3. Adjust categories if needed')
  console.log('  4. Remove any events that aren\'t interesting')
  console.log('  5. Run validation: npx tsx scripts/validate-events.ts')
  console.log('')
}

async function main() {
  const citySlug = process.argv[2]

  if (!citySlug) {
    console.log('Usage: npx tsx scripts/fetch-events.ts [city-slug]')
    console.log('\nAvailable cities:')
    getAllCityConfigs().forEach((c) => console.log(`  - ${c.slug}`))
    process.exit(1)
  }

  await fetchEventsForCity(citySlug)
}

main().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})
