'use client'

import { useEffect, useRef, useState } from 'react'
import { BestOfSpot } from '@/types/content'
import { getAllCoordinates, getBounds } from '@/lib/mapbox-utils'
import { createCoffeeMarker } from '@/components/map/createCoffeeMarker'

interface ScrollyMapProps {
  spots: BestOfSpot[]
  activeSpotIndex: number
  markerType?: 'coffee' | 'cocktail' | 'restaurant' | 'default'
  onMapLoaded?: (loaded: boolean) => void
}

const MAP_STYLE = 'mapbox://styles/mapbox/dark-v11'

export function ScrollyMap({
  spots,
  activeSpotIndex,
  onMapLoaded
}: ScrollyMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

  // Initialize map
  useEffect(() => {
    if (!accessToken || !mapContainer.current || mapRef.current) return

    import('mapbox-gl').then((mapboxgl) => {
      if (!mapboxgl.default.supported()) {
        console.warn('Mapbox GL not supported')
        return
      }

      mapboxgl.default.accessToken = accessToken

      // Calculate bounds to fit all spots
      const allCoords = getAllCoordinates(spots)
      const bounds = getBounds(allCoords)

      if (!bounds) {
        console.warn('No coordinates found for spots')
        return
      }

      const map = new mapboxgl.default.Map({
        container: mapContainer.current!,
        style: MAP_STYLE,
        bounds: [
          [bounds.sw.lng, bounds.sw.lat],
          [bounds.ne.lng, bounds.ne.lat],
        ],
        fitBoundsOptions: {
          padding: { top: 100, bottom: 100, left: 100, right: 100 }
        },
        attributionControl: false,
        interactive: false, // Disable all interactions for cinematic experience
      })

      map.on('load', () => {
        setIsMapLoaded(true)
        onMapLoaded?.(true)
      })

      // Disable all interactions
      map.scrollZoom.disable()
      map.boxZoom.disable()
      map.dragPan.disable()
      map.dragRotate.disable()
      map.keyboard.disable()
      map.doubleClickZoom.disable()
      map.touchZoomRotate.disable()

      mapRef.current = map
    })

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [accessToken, spots, onMapLoaded])

  // Render markers (including all locations for multi-location spots)
  useEffect(() => {
    if (!mapRef.current || !isMapLoaded) return

    const map = mapRef.current

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove())
    markersRef.current = []

    import('mapbox-gl').then((mapboxgl) => {
      spots.forEach((spot, index) => {
        if (!spot.coordinates) return

        const isActive = index === activeSpotIndex

        // Create primary marker
        const el = createCoffeeMarker({ isActive, rank: index + 1 })

        const marker = new mapboxgl.default.Marker({ element: el })
          .setLngLat([spot.coordinates.lng, spot.coordinates.lat])
          .addTo(map)

        markersRef.current.push(marker)

        // Add markers for additional locations (but not numbered)
        if (spot.locations) {
          spot.locations.forEach(location => {
            if (!location.coordinates) return

            const locEl = document.createElement('div')
            locEl.style.width = '24px'
            locEl.style.height = '24px'
            locEl.style.borderRadius = '50%'
            locEl.style.backgroundColor = '#d97556'
            locEl.style.border = '2px solid white'
            locEl.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)'
            locEl.style.opacity = '0.7'

            const locMarker = new mapboxgl.default.Marker({ element: locEl })
              .setLngLat([location.coordinates.lng, location.coordinates.lat])
              .addTo(map)

            markersRef.current.push(locMarker)
          })
        }
      })
    })

    return () => {
      markersRef.current.forEach(marker => marker.remove())
      markersRef.current = []
    }
  }, [spots, activeSpotIndex, isMapLoaded])

  // Fly to active spot
  useEffect(() => {
    if (!mapRef.current || !isMapLoaded) return

    if (activeSpotIndex < 0) {
      // Intro section - show overview
      const allCoords = getAllCoordinates(spots)
      const bounds = getBounds(allCoords)
      if (bounds) {
        mapRef.current.fitBounds([
          [bounds.sw.lng, bounds.sw.lat],
          [bounds.ne.lng, bounds.ne.lat],
        ], {
          padding: { top: 100, bottom: 100, left: 100, right: 100 },
          duration: 1500,
        })
      }
      return
    }

    const spot = spots[activeSpotIndex]
    if (!spot?.coordinates) return

    mapRef.current.flyTo({
      center: [spot.coordinates.lng, spot.coordinates.lat],
      zoom: 15,
      pitch: 45,
      bearing: 0,
      duration: 1500,
      essential: true, // Respects prefers-reduced-motion
    })
  }, [activeSpotIndex, isMapLoaded, spots])

  if (!accessToken) {
    return (
      <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
        <p className="text-neutral-400 text-sm">Map unavailable</p>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      <div
        ref={mapContainer}
        className="w-full h-full bg-neutral-900"
      />

      {!isMapLoaded && (
        <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-neutral-700 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}
