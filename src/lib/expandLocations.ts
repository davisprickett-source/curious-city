import { BestOfSpot } from '@/types/content'

/**
 * Expands spots with multiple locations into individual spot entries
 * If a spot has a `locations` array, create a separate entry for each location
 * Otherwise, return the spot as-is
 */
export function expandSpotLocations(spots: BestOfSpot[]): BestOfSpot[] {
  const expanded: BestOfSpot[] = []

  for (const spot of spots) {
    // If spot has locations array, create individual entries for each
    if (spot.locations && spot.locations.length > 0) {
      spot.locations.forEach((location) => {
        expanded.push({
          ...spot,
          // Override with location-specific data
          name: location.name || spot.name,
          address: location.address,
          coordinates: location.coordinates,
          neighborhood: location.neighborhood || spot.neighborhood,
          hours: location.hours || spot.hours,
          // Add location note to vibe if present
          vibe: location.note ? `${spot.vibe}\n\n📍 ${location.note}` : spot.vibe,
          // Remove locations array from expanded entry
          locations: undefined,
        })
      })
    } else {
      // No locations array, keep spot as-is
      expanded.push(spot)
    }
  }

  return expanded
}
