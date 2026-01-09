#!/usr/bin/env npx tsx
/**
 * Simple CLI for fetching events
 *
 * Usage:
 *   npm run get minn              # Preview Minneapolis events
 *   npm run get minn -- --write   # Write to file
 *   npm run get --all             # Fetch all cities
 *
 * City aliases:
 *   minn, mpls -> minneapolis
 *   chi -> chicago
 *   pdx -> portland
 *   den -> denver
 *   phx -> phoenix
 *   slc -> salt-lake-city
 *   ral -> raleigh
 *   tpa -> tampa
 *   anc -> anchorage
 *   cos -> colorado-springs
 *   far -> fargo
 *   dal -> dallas
 */

import * as dotenv from 'dotenv'
import * as path from 'path'
import * as fs from 'fs'

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

import { registry } from '../src/lib/providers'
import { getCityEventConfig, getAllCityEventConfigs } from '../src/lib/city-event-configs'
import { scoreEvent, shouldAutoFeature, shouldAutoHide } from '../src/lib/event-scoring'
import { normalizedToEventItem } from '../src/lib/event-aggregator'
import type { NormalizedEvent } from '../src/lib/api-types'

// City aliases for quick typing
const CITY_ALIASES: Record<string, string> = {
  minn: 'minneapolis',
  mpls: 'minneapolis',
  chi: 'chicago',
  pdx: 'portland',
  den: 'denver',
  phx: 'phoenix',
  slc: 'salt-lake-city',
  ral: 'raleigh',
  tpa: 'tampa',
  anc: 'anchorage',
  cos: 'colorado-springs',
  far: 'fargo',
  dal: 'dallas',
}

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

async function fetchCity(citySlug: string, writeFile: boolean): Promise<void> {
  const config = getCityEventConfig(citySlug)

  if (!config) {
    console.error(`\n❌ City "${citySlug}" not found`)
    console.log('\nAvailable cities:')
    getAllCityEventConfigs().forEach((c) => console.log(`  - ${c.slug}`))
    console.log('\nAliases:')
    Object.entries(CITY_ALIASES).forEach(([alias, slug]) => {
      console.log(`  ${alias} -> ${slug}`)
    })
    process.exit(1)
  }

  console.log(`\n🏙️  Fetching events for ${config.name}`)
  console.log('═'.repeat(60))

  // Fetch from all providers
  const result = await registry.fetchAll(citySlug)

  // Score events
  console.log('\n📊 Scoring events...')
  const scoredEvents: ScoredEvent[] = result.events.map((event) => {
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

  // Filter
  const visibleEvents = scoredEvents.filter((e) => !e.autoHidden)
  const hiddenEvents = scoredEvents.filter((e) => e.autoHidden)

  console.log(`   ✅ ${visibleEvents.length} events above threshold`)
  console.log(`   🚫 ${hiddenEvents.length} events auto-hidden (score < 30)`)

  // Display top events
  console.log('\n' + '═'.repeat(60))
  console.log(`📋 TOP EVENTS FOR ${config.name.toUpperCase()} (showing top 20)`)
  console.log('═'.repeat(60) + '\n')

  visibleEvents.slice(0, 20).forEach((event, index) => {
    const date = new Date(event.startDate)
    const dateStr = date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    })

    const featured = event.autoFeatured ? '⭐' : '  '
    const scoreStr = String(event.score).padStart(2)
    const title = event.title.length > 50 ? event.title.substring(0, 47) + '...' : event.title

    console.log(`${featured} ${String(index + 1).padStart(2)}. [${scoreStr}] ${title}`)
    console.log(`       📅 ${dateStr} @ ${event.venue || 'TBA'}`)
    if (event.scoreBreakdown.reasons.length > 0) {
      console.log(`       💡 ${event.scoreBreakdown.reasons.slice(0, 3).join(', ')}`)
    }
    console.log('')
  })

  // Show hidden events summary
  if (hiddenEvents.length > 0) {
    console.log('─'.repeat(60))
    console.log(`🚫 AUTO-HIDDEN EVENTS (${hiddenEvents.length} total, showing top 5):`)
    console.log('─'.repeat(60) + '\n')

    hiddenEvents.slice(0, 5).forEach((event) => {
      console.log(`   [${event.score}] ${event.title.substring(0, 60)}`)
      if (event.scoreBreakdown.reasons.length > 0) {
        console.log(`       Reasons: ${event.scoreBreakdown.reasons.join(', ')}`)
      }
    })
  }

  // Write file if requested
  if (writeFile) {
    const outputPath = path.resolve(process.cwd(), `src/data/events/${citySlug}-api.ts`)
    const fileContent = generateEventFile(citySlug, config.name, visibleEvents)

    fs.writeFileSync(outputPath, fileContent)
    console.log(`\n✅ Wrote ${visibleEvents.length} events to: ${outputPath}`)
    console.log('\n📝 Next steps:')
    console.log('   1. Review the generated file')
    console.log('   2. Edit descriptions to be more engaging')
    console.log("   3. Remove any events that aren't interesting")
    console.log('   4. Mark your favorites with featured: true')
    console.log('   5. Commit and deploy!')
  } else {
    console.log('\n💡 Run with --write to generate the file:')
    console.log(`   npm run get ${citySlug} -- --write`)
  }
}

function generateEventFile(citySlug: string, cityName: string, events: ScoredEvent[]): string {
  const now = new Date().toISOString()
  const camelCase = citySlug.replace(/-([a-z])/g, (g) => g[1].toUpperCase())

  let output = `/**
 * ${cityName} - API-Fetched Events
 *
 * Auto-generated on: ${now}
 * Sources: ${Array.from(new Set(events.map((e) => e.source))).join(', ')}
 *
 * REVIEW CHECKLIST:
 * [ ] Remove boring/corporate events
 * [ ] Edit descriptions to be more engaging
 * [ ] Mark best events with featured: true
 * [ ] Add any missing cool events to ${citySlug}-curated.ts
 */

import type { CuratedEvent } from './types'

export const ${camelCase}ApiEvents: CuratedEvent[] = [
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
    if (event.autoFeatured) {
      output += `    featured: true,\n`
    }
    if (eventItem.image) {
      output += `    image: { src: '${eventItem.image.src}', alt: ${JSON.stringify(eventItem.image.alt || eventItem.title)} },\n`
    }
    output += `    source: '${event.source}',\n`
    output += `  },\n`
  })

  output += `]
`

  return output
}

function showHelp(): void {
  console.log(`
Usage: npm run get <city> [options]

Fetch events from all configured providers for a city.

Arguments:
  <city>        City slug or alias (see below)

Options:
  --write       Write events to src/data/events/<city>-api.ts
  --all         Fetch all cities
  --help        Show this help message

City Aliases:
${Object.entries(CITY_ALIASES)
  .map(([alias, slug]) => `  ${alias.padEnd(6)} -> ${slug}`)
  .join('\n')}

Available Cities:
${getAllCityEventConfigs()
  .map((c) => `  ${c.slug}`)
  .join('\n')}

Examples:
  npm run get minn              # Preview Minneapolis events
  npm run get minn -- --write   # Write Minneapolis events to file
  npm run get chi               # Preview Chicago events
  npm run get --all             # Preview all cities
  npm run get --all -- --write  # Write all cities
`)
}

async function main(): Promise<void> {
  const args = process.argv.slice(2)

  // Help
  if (args.includes('--help') || args.includes('-h') || args.length === 0) {
    showHelp()
    return
  }

  const writeFile = args.includes('--write')
  const fetchAll = args.includes('--all')

  if (fetchAll) {
    const configs = getAllCityEventConfigs()
    for (const config of configs) {
      await fetchCity(config.slug, writeFile)
      // Rate limit between cities
      await new Promise((resolve) => setTimeout(resolve, 2000))
    }
  } else {
    const cityArg = args.find((a) => !a.startsWith('--'))
    if (!cityArg) {
      console.error('Please provide a city slug or alias')
      showHelp()
      process.exit(1)
    }

    // Resolve alias
    const citySlug = CITY_ALIASES[cityArg.toLowerCase()] || cityArg.toLowerCase()
    await fetchCity(citySlug, writeFile)
  }
}

main().catch((error) => {
  console.error('\n❌ Fatal error:', error.message)
  process.exit(1)
})
