export function createCoffeeMarker(options: {
  isActive: boolean
  rank: number
  name?: string
}): HTMLDivElement {
  const { isActive, rank, name } = options

  const container = document.createElement('div')
  container.className = 'coffee-marker-container'
  container.style.position = 'relative'
  container.style.display = 'flex'
  container.style.flexDirection = 'column'
  container.style.alignItems = 'center'
  container.style.cursor = 'pointer'

  const el = document.createElement('div')
  el.className = 'coffee-marker'
  el.style.width = isActive ? '48px' : '36px'
  el.style.height = isActive ? '48px' : '36px'
  el.style.transition = 'all 0.3s ease'

  // Coffee cup SVG with numbered badge
  el.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Background circle -->
      <circle cx="24" cy="24" r="24" fill="${isActive ? '#c65d3b' : '#d97556'}" />
      <circle cx="24" cy="24" r="21" fill="${isActive ? '#c65d3b' : '#d97556'}" stroke="white" stroke-width="3" />

      <!-- Coffee cup icon -->
      <path
        d="M14 20h16M14 20v10a3 3 0 003 3h8a3 3 0 003-3v-10M14 20v-2a2 2 0 012-2h12a2 2 0 012 2v2M31 22h2a3 3 0 013 3v2a3 3 0 01-3 3h-2"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <!-- Number badge -->
      <text
        x="24"
        y="24"
        text-anchor="middle"
        dominant-baseline="middle"
        fill="white"
        font-size="${isActive ? '14' : '12'}"
        font-weight="bold"
        font-family="system-ui, -apple-system, sans-serif"
      >
        ${rank}
      </text>
    </svg>
  `

  if (isActive) {
    el.style.animation = 'pulse-marker 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
  }

  container.appendChild(el)

  // Add name label if provided
  if (name) {
    const label = document.createElement('div')
    label.className = 'coffee-marker-label'
    label.style.marginTop = '4px'
    label.style.padding = '4px 8px'
    label.style.backgroundColor = isActive ? '#c65d3b' : '#ffffff'
    label.style.color = isActive ? '#ffffff' : '#1a1a1a'
    label.style.fontSize = isActive ? '13px' : '11px'
    label.style.fontWeight = '600'
    label.style.borderRadius = '4px'
    label.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)'
    label.style.whiteSpace = 'nowrap'
    label.style.fontFamily = 'system-ui, -apple-system, sans-serif'
    label.style.transition = 'all 0.3s ease'
    label.textContent = name
    container.appendChild(label)
  }

  return container
}
