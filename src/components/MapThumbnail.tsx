'use client'

import { useEffect, useRef, useState } from 'react'

interface MapThumbnailProps {
  lat: number
  lng: number
  name?: string
  className?: string
  width?: number
  height?: number
  zoom?: number
}

// Mapbox style options
const MAPBOX_STYLE = 'mapbox://styles/mapbox/dark-v11'
const MAPBOX_STATIC_STYLE = 'dark-v11'

export function MapThumbnail({
  lat,
  lng,
  name,
  className = '',
  width = 300,
  height = 150,
  zoom = 15,
}: MapThumbnailProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)
  const [useStaticFallback, setUseStaticFallback] = useState(false)

  // Access the token - it must be inlined at build time by Next.js
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

  // Debug logs
  console.log('MapThumbnail Debug:', {
    accessToken: accessToken ? 'Found' : 'Missing',
    tokenStart: accessToken?.substring(0, 20),
    allEnvVars: Object.keys(process.env).filter(k => k.startsWith('NEXT_PUBLIC'))
  })

  useEffect(() => {
    if (!accessToken || !mapContainer.current || mapRef.current || useStaticFallback) return

    // Dynamically import mapbox-gl to avoid SSR issues
    import('mapbox-gl').then((mapboxgl) => {
      // Check if WebGL is supported
      if (!mapboxgl.default.supported()) {
        setUseStaticFallback(true)
        return
      }

      try {
        mapboxgl.default.accessToken = accessToken

        const map = new mapboxgl.default.Map({
          container: mapContainer.current!,
          style: MAPBOX_STYLE,
          center: [lng, lat],
          zoom: zoom,
          attributionControl: false,
        })

        // Handle map errors
        map.on('error', () => {
          setUseStaticFallback(true)
        })

        // Add navigation controls (zoom buttons)
        map.addControl(new mapboxgl.default.NavigationControl({ showCompass: false }), 'top-right')

        // Add a marker at the location
        const markerEl = document.createElement('div')
        markerEl.innerHTML = `
          <div style="
            width: 24px;
            height: 24px;
            background: #ef4444;
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          "></div>
        `

        new mapboxgl.default.Marker({ element: markerEl })
          .setLngLat([lng, lat])
          .addTo(map)

        mapRef.current = map
      } catch {
        setUseStaticFallback(true)
      }
    }).catch(() => {
      setUseStaticFallback(true)
    })

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [accessToken, lat, lng, zoom, useStaticFallback])

  // Static map fallback (used when no token or WebGL fails)
  const staticMapUrl = accessToken
    ? `https://api.mapbox.com/styles/v1/mapbox/${MAPBOX_STATIC_STYLE}/static/pin-s+ef4444(${lng},${lat})/${lng},${lat},${zoom},0/${width}x${height}@2x?access_token=${accessToken}`
    : null

  if (!accessToken) {
    // Fallback: stylized placeholder when no Mapbox token
    return (
      <a
        href={`https://www.google.com/maps?q=${lat},${lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`block relative overflow-hidden rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 group ${className}`}
        style={{ width, height }}
        title={name ? `View ${name} on map` : 'View on map'}
      >
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
        {/* Center marker */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg shadow-red-500/50 group-hover:scale-110 transition-transform" />
            <div className="absolute -inset-2 bg-red-500/20 rounded-full animate-ping" />
          </div>
        </div>
        {/* Coordinates display */}
        <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
          <span className="text-[10px] font-mono text-neutral-500">
            {lat.toFixed(4)}, {lng.toFixed(4)}
          </span>
          <span className="text-[10px] text-neutral-400 group-hover:text-white transition-colors">
            View map →
          </span>
        </div>
      </a>
    )
  }

  // Use static image fallback when WebGL fails
  if (useStaticFallback && staticMapUrl) {
    return (
      <a
        href={`https://www.google.com/maps?q=${lat},${lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`block relative overflow-hidden rounded-lg group ${className}`}
        title={name ? `View ${name} on map` : 'View on map'}
      >
        <img
          src={staticMapUrl}
          alt={name ? `Map showing ${name}` : 'Map location'}
          width={width}
          height={height}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-2 right-2 bg-white/90 hover:bg-white text-neutral-700 text-xs font-medium px-2 py-1 rounded shadow-sm transition-colors">
          Open in Maps ↗
        </div>
      </a>
    )
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <div
        ref={mapContainer}
        style={{ width, height }}
        className="w-full"
      />
      {/* Link to open in Google Maps */}
      <a
        href={`https://www.google.com/maps?q=${lat},${lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-2 bg-white/90 hover:bg-white text-neutral-700 text-xs font-medium px-2 py-1 rounded shadow-sm transition-colors"
        title={name ? `Open ${name} in Google Maps` : 'Open in Google Maps'}
      >
        Open in Maps ↗
      </a>
    </div>
  )
}
