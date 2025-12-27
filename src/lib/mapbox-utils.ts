import { BestOfSpot } from '@/types/content'

export function getAllCoordinates(spots: BestOfSpot[]): Array<{ lat: number, lng: number }> {
  const coords: Array<{ lat: number, lng: number }> = []

  spots.forEach(spot => {
    // Primary coordinates
    if (spot.coordinates) {
      coords.push(spot.coordinates)
    }

    // Additional locations (for multi-location spots like Spyhouse)
    if (spot.locations) {
      spot.locations.forEach(loc => {
        if (loc.coordinates) {
          coords.push(loc.coordinates)
        }
      })
    }
  })

  return coords
}

export function getBounds(coords: Array<{ lat: number, lng: number }>) {
  if (coords.length === 0) {
    return null
  }

  const lats = coords.map(c => c.lat)
  const lngs = coords.map(c => c.lng)

  return {
    sw: { lng: Math.min(...lngs), lat: Math.min(...lats) },
    ne: { lng: Math.max(...lngs), lat: Math.max(...lats) },
  }
}
