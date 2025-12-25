/**
 * Build-time event validation script
 * Run with: npx tsx scripts/validate-events.ts
 */

import { cities, getAllCitySlugs } from '../src/data/cities'
import type { EventsContentItem } from '../src/types/content'
import { validateAllEvents, findStaleEvents, suggestCleanup } from '../src/utils/eventHelpers'

function findItemsOfType<T>(content: any[], type: string): T[] {
  const results: T[] = []

  for (const item of content) {
    if (item.type === type) {
      results.push(item as T)
    }
    if (item.items && Array.isArray(item.items)) {
      results.push(...findItemsOfType<T>(item.items, type))
    }
    if (item.content && Array.isArray(item.content)) {
      results.push(...findItemsOfType<T>(item.content, type))
    }
  }

  return results
}

function main() {
  console.log('🔍 Validating events across all cities...\n')

  const citySlugs = getAllCitySlugs()
  let totalEvents = 0
  let totalValid = 0
  let totalInvalid = 0
  let totalStale = 0
  let hasErrors = false

  citySlugs.forEach((slug) => {
    const city = cities[slug]
    if (!city) return

    const eventSections = findItemsOfType<EventsContentItem>(city.content, 'events')
    if (eventSections.length === 0) {
      return // No events for this city
    }

    const allEvents = eventSections.flatMap((section) => section.items)
    if (allEvents.length === 0) {
      return
    }

    console.log(`📍 ${city.name} (${allEvents.length} events)`)
    console.log('─'.repeat(50))

    // Validate all events
    const report = validateAllEvents(allEvents, 7)
    totalEvents += report.totalEvents
    totalValid += report.validEvents
    totalInvalid += report.invalidEvents
    totalStale += report.staleEvents

    // Show validation errors
    if (report.errors.length > 0) {
      hasErrors = true
      console.log('  ❌ Validation Errors:')
      report.errors.forEach(({ event, errors }) => {
        console.log(`     "${event.title}"`)
        errors.forEach((error) => console.log(`       - ${error}`))
      })
      console.log('')
    }

    // Show stale events
    const staleEvents = findStaleEvents(allEvents, 7)
    if (staleEvents.length > 0) {
      console.log('  ⚠️  Stale Events (ended >7 days ago):')
      staleEvents.forEach((event) => {
        const endDate = event.endDate || event.startDate
        console.log(`     "${event.title}" (ended: ${endDate.split('T')[0]})`)
      })
      console.log('')
    }

    // Suggest cleanup
    const suggestions = suggestCleanup(allEvents, 7)
    if (suggestions.length > 0) {
      console.log('  💡 Cleanup Suggestions:')
      suggestions.slice(0, 5).forEach(({ type, event, reason }) => {
        const icon = type === 'remove-stale' ? '🗑️' : type === 'remove-duplicate' ? '🔁' : '⚠️'
        console.log(`     ${icon} "${event.title}": ${reason}`)
      })
      if (suggestions.length > 5) {
        console.log(`     ... and ${suggestions.length - 5} more`)
      }
      console.log('')
    }

    if (report.errors.length === 0 && staleEvents.length === 0) {
      console.log('  ✅ All events are valid and current')
      console.log('')
    }
  })

  // Summary
  console.log('═'.repeat(50))
  console.log('📊 Summary')
  console.log('═'.repeat(50))
  console.log(`Total Events:    ${totalEvents}`)
  console.log(`Valid:           ${totalValid} ✅`)
  if (totalInvalid > 0) {
    console.log(`Invalid:         ${totalInvalid} ❌`)
  }
  if (totalStale > 0) {
    console.log(`Stale:           ${totalStale} ⚠️`)
  }
  console.log('')

  if (hasErrors || totalInvalid > 0) {
    console.log('❌ Validation failed. Please fix errors above.')
    process.exit(1)
  } else if (totalStale > 0) {
    console.log('⚠️  Validation passed, but you have stale events to clean up.')
    process.exit(0)
  } else {
    console.log('✅ All events are valid!')
    process.exit(0)
  }
}

main()
