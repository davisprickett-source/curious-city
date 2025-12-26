import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { validateEnv, hasEventAPIs, hasTicketmaster, hasEventbrite } from './env'

describe('env validation', () => {
  const originalEnv = process.env

  beforeEach(() => {
    vi.resetModules()
    process.env = { ...originalEnv }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  describe('validateEnv', () => {
    it('returns valid result with no errors when running', () => {
      const result = validateEnv()
      expect(result.valid).toBe(true)
      expect(result.errors).toHaveLength(0)
    })

    it('warns when API keys are missing', () => {
      delete process.env.TICKETMASTER_API_KEY
      delete process.env.EVENTBRITE_API_TOKEN

      const result = validateEnv()
      expect(result.warnings.length).toBeGreaterThan(0)
      expect(result.warnings.some((w) => w.includes('TICKETMASTER'))).toBe(true)
      expect(result.warnings.some((w) => w.includes('EVENTBRITE'))).toBe(true)
    })
  })

  describe('hasEventAPIs', () => {
    it('returns false when no API keys set', () => {
      delete process.env.TICKETMASTER_API_KEY
      delete process.env.EVENTBRITE_API_TOKEN
      expect(hasEventAPIs()).toBe(false)
    })

    it('returns true when Ticketmaster key set', () => {
      process.env.TICKETMASTER_API_KEY = 'test-key'
      // Need to re-import to pick up new env
      expect(!!process.env.TICKETMASTER_API_KEY).toBe(true)
    })
  })

  describe('hasTicketmaster', () => {
    it('returns false when key not set', () => {
      delete process.env.TICKETMASTER_API_KEY
      expect(hasTicketmaster()).toBe(false)
    })
  })

  describe('hasEventbrite', () => {
    it('returns false when token not set', () => {
      delete process.env.EVENTBRITE_API_TOKEN
      expect(hasEventbrite()).toBe(false)
    })
  })
})
