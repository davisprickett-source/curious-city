/**
 * Base provider class with common functionality
 */

import type {
  EventProvider,
  ProviderConfig,
  ProviderResult,
  FetchOptions,
  ProviderSource,
} from './types'
import type { NormalizedEvent } from '../api-types'

/**
 * Abstract base class for event providers
 */
export abstract class BaseProvider implements EventProvider {
  config: ProviderConfig

  constructor(config: Partial<ProviderConfig> & { name: string; slug: string; sourceType: ProviderSource }) {
    this.config = {
      enabled: true,
      timeout: 30000,
      retries: 2,
      ...config,
    }
  }

  /**
   * Check if provider is available - must be implemented by subclass
   */
  abstract isAvailable(): Promise<boolean>

  /**
   * Fetch events - must be implemented by subclass
   */
  abstract fetchEvents(citySlug: string, options?: FetchOptions): Promise<ProviderResult>

  /**
   * Create a standardized result object
   */
  protected createResult(
    events: NormalizedEvent[],
    startTime: number,
    options?: {
      errors?: string[]
      warnings?: string[]
      metadata?: ProviderResult['metadata']
    }
  ): ProviderResult {
    return {
      events,
      source: this.config.slug,
      fetchedAt: new Date().toISOString(),
      duration: Date.now() - startTime,
      errors: options?.errors || [],
      warnings: options?.warnings || [],
      metadata: options?.metadata,
    }
  }

  /**
   * Create an empty result (for when provider is unavailable or city not supported)
   */
  protected createEmptyResult(reason?: string): ProviderResult {
    return {
      events: [],
      source: this.config.slug,
      fetchedAt: new Date().toISOString(),
      duration: 0,
      errors: [],
      warnings: reason ? [reason] : [],
    }
  }

  /**
   * Wrap a fetch function with retry logic
   */
  protected async withRetry<T>(
    fn: () => Promise<T>,
    retries: number = this.config.retries || 2
  ): Promise<T> {
    let lastError: Error | null = null

    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        return await fn()
      } catch (error) {
        lastError = error as Error

        if (attempt < retries) {
          // Exponential backoff: 1s, 2s, 4s...
          const delay = Math.pow(2, attempt) * 1000
          await this.sleep(delay)
        }
      }
    }

    throw lastError
  }

  /**
   * Wrap a promise with timeout
   */
  protected async withTimeout<T>(
    fn: () => Promise<T>,
    ms: number = this.config.timeout || 30000
  ): Promise<T> {
    return Promise.race([
      fn(),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error(`Timeout after ${ms}ms`)), ms)
      ),
    ])
  }

  /**
   * Sleep helper
   */
  protected sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  /**
   * Log a message with provider prefix
   */
  protected log(message: string): void {
    console.log(`[${this.config.name}] ${message}`)
  }

  /**
   * Log an error with provider prefix
   */
  protected logError(message: string, error?: Error): void {
    console.error(`[${this.config.name}] ${message}`, error?.message || '')
  }
}
