export function createCoffeeMarker(options: {
  isActive: boolean
  rank: number
}): HTMLDivElement {
  const { isActive, rank } = options

  const el = document.createElement('div')
  el.className = 'coffee-marker'
  el.style.width = isActive ? '48px' : '36px'
  el.style.height = isActive ? '48px' : '36px'
  el.style.cursor = 'pointer'
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

  return el
}
