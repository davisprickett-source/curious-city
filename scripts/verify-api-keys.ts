/**
 * Verify API keys are configured and working
 * Usage: npx tsx scripts/verify-api-keys.ts
 */

import * as dotenv from 'dotenv'
import * as path from 'path'

// Load .env.local explicitly
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

async function verifyTicketmaster(): Promise<boolean> {
  const apiKey = process.env.TICKETMASTER_API_KEY
  if (!apiKey) {
    console.log('  ❌ TICKETMASTER_API_KEY: Not configured')
    return false
  }

  try {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=Minneapolis&size=1`
    )
    if (response.ok) {
      const data = await response.json()
      console.log(`  ✅ TICKETMASTER_API_KEY: Working (found ${data.page?.totalElements || 0} events in Minneapolis)`)
      return true
    } else {
      const errorText = await response.text()
      console.log(`  ❌ TICKETMASTER_API_KEY: Error (${response.status}) - ${errorText.slice(0, 100)}`)
      return false
    }
  } catch (error) {
    console.log(`  ❌ TICKETMASTER_API_KEY: Connection failed - ${error}`)
    return false
  }
}

async function verifyEventbrite(): Promise<boolean> {
  const token = process.env.EVENTBRITE_API_TOKEN
  if (!token) {
    console.log('  ❌ EVENTBRITE_API_TOKEN: Not configured')
    return false
  }

  try {
    const response = await fetch(
      'https://www.eventbriteapi.com/v3/users/me/',
      { headers: { Authorization: `Bearer ${token}` } }
    )
    if (response.ok) {
      const data = await response.json()
      console.log(`  ✅ EVENTBRITE_API_TOKEN: Working (authenticated as ${data.name || data.email || 'user'})`)
      return true
    } else {
      const errorText = await response.text()
      console.log(`  ❌ EVENTBRITE_API_TOKEN: Error (${response.status}) - ${errorText.slice(0, 100)}`)
      return false
    }
  } catch (error) {
    console.log(`  ❌ EVENTBRITE_API_TOKEN: Connection failed - ${error}`)
    return false
  }
}

async function main() {
  console.log('\n🔑 Verifying Event API Keys...\n')

  const ticketmasterOk = await verifyTicketmaster()
  const eventbriteOk = await verifyEventbrite()

  console.log('\n' + '═'.repeat(50))

  if (ticketmasterOk && eventbriteOk) {
    console.log('✅ All API keys verified and working!')
  } else if (ticketmasterOk || eventbriteOk) {
    console.log('⚠️  Some API keys are working, some need attention.')
  } else {
    console.log('❌ No API keys are working.')
  }

  console.log('\nTo configure missing keys:')
  console.log('1. Copy .env.example to .env.local (if not done)')
  console.log('2. Get Ticketmaster key: https://developer.ticketmaster.com/')
  console.log('3. Get Eventbrite token: https://www.eventbrite.com/platform/api')
  console.log('')

  process.exit(ticketmasterOk || eventbriteOk ? 0 : 1)
}

main()
