'use client'

import React, { useEffect, useState } from 'react'

interface ClientOnlyProps {
  children: React.ReactNode
}

export function ClientOnly({ children }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null // Render nothing on the server, or during initial client render before mount
  }

  return <>{children}</> // Render children only after component has mounted on client
}
