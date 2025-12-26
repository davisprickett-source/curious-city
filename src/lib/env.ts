/**
 * Environment variable validation and access
 *
 * This module provides type-safe access to environment variables
 * and validates them at startup in development.
 */

// ============================================
// Environment Variable Schema
// ============================================

interface EnvSchema {
  // API Keys (optional - only needed for event fetching)
  TICKETMASTER_API_KEY?: string
  EVENTBRITE_API_TOKEN?: string

  // Optional configuration
  CITIES?: string

  // Next.js built-in
  NODE_ENV: 'development' | 'production' | 'test'
}

// ============================================
// Environment Access
// ============================================

function getEnv(): EnvSchema {
  return {
    TICKETMASTER_API_KEY: process.env.TICKETMASTER_API_KEY,
    EVENTBRITE_API_TOKEN: process.env.EVENTBRITE_API_TOKEN,
    CITIES: process.env.CITIES,
    NODE_ENV: (process.env.NODE_ENV as EnvSchema['NODE_ENV']) || 'development',
  }
}

export const env = getEnv()

// ============================================
// Validation Helpers
// ============================================

export interface ValidationResult {
  valid: boolean
  warnings: string[]
  errors: string[]
}

/**
 * Validates environment configuration
 * Returns warnings for missing optional vars
 * Returns errors for missing required vars
 */
export function validateEnv(): ValidationResult {
  const result: ValidationResult = {
    valid: true,
    warnings: [],
    errors: [],
  }

  // Check for API keys (warn if missing, don't error)
  if (!env.TICKETMASTER_API_KEY) {
    result.warnings.push(
      'TICKETMASTER_API_KEY is not set. Event fetching from Ticketmaster will not work.'
    )
  }

  if (!env.EVENTBRITE_API_TOKEN) {
    result.warnings.push(
      'EVENTBRITE_API_TOKEN is not set. Event fetching from Eventbrite will not work.'
    )
  }

  // Validate CITIES format if provided
  if (env.CITIES) {
    const cityList = env.CITIES.split(',').map((c) => c.trim())
    const invalidCities = cityList.filter((c) => !/^[a-z][a-z0-9-]*$/.test(c))
    if (invalidCities.length > 0) {
      result.warnings.push(
        `CITIES contains invalid city slugs: ${invalidCities.join(', ')}`
      )
    }
  }

  return result
}

/**
 * Check if event APIs are configured
 */
export function hasEventAPIs(): boolean {
  return !!(env.TICKETMASTER_API_KEY || env.EVENTBRITE_API_TOKEN)
}

/**
 * Check if Ticketmaster is configured
 */
export function hasTicketmaster(): boolean {
  return !!env.TICKETMASTER_API_KEY
}

/**
 * Check if Eventbrite is configured
 */
export function hasEventbrite(): boolean {
  return !!env.EVENTBRITE_API_TOKEN
}

/**
 * Get the list of cities to fetch events for
 * Defaults to all cities if not specified
 */
export function getConfiguredCities(): string[] | null {
  if (!env.CITIES) return null
  return env.CITIES.split(',').map((c) => c.trim().toLowerCase())
}

// ============================================
// Development Logging
// ============================================

/**
 * Log environment status in development
 * Call this at app startup to surface any issues
 */
export function logEnvStatus(): void {
  if (env.NODE_ENV !== 'development') return

  const validation = validateEnv()

  if (validation.warnings.length > 0) {
    console.log('\n⚠️  Environment Warnings:')
    validation.warnings.forEach((w) => console.log(`   - ${w}`))
  }

  if (validation.errors.length > 0) {
    console.log('\n❌ Environment Errors:')
    validation.errors.forEach((e) => console.log(`   - ${e}`))
  }

  if (validation.warnings.length === 0 && validation.errors.length === 0) {
    console.log('\n✅ Environment configured correctly')
  }

  console.log('')
}
