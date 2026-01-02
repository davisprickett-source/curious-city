// Simple script to generate placeholder sequence frames
// Run with: node scripts/generate-placeholder-sequences.js

const fs = require('fs');
const path = require('path');

// Create a simple SVG placeholder
function createPlaceholderSVG(frameNum, totalFrames, title, colors) {
  const progress = frameNum / totalFrames;
  const color1 = colors[0];
  const color2 = colors[1];

  // Interpolate between colors
  const r = Math.round(parseInt(color1.slice(1,3), 16) * (1-progress) + parseInt(color2.slice(1,3), 16) * progress);
  const g = Math.round(parseInt(color1.slice(3,5), 16) * (1-progress) + parseInt(color2.slice(3,5), 16) * progress);
  const b = Math.round(parseInt(color1.slice(5,7), 16) * (1-progress) + parseInt(color2.slice(5,7), 16) * progress);
  const bgColor = `rgb(${r},${g},${b})`;

  return `<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <rect width="1920" height="1080" fill="${bgColor}"/>
  <text x="960" y="500" font-family="Arial, sans-serif" font-size="72" fill="white" text-anchor="middle" opacity="0.9">
    ${title}
  </text>
  <text x="960" y="600" font-family="Arial, sans-serif" font-size="36" fill="white" text-anchor="middle" opacity="0.6">
    Frame ${frameNum + 1} / ${totalFrames}
  </text>
  <text x="960" y="650" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" opacity="0.4">
    Placeholder - Replace with real animation
  </text>
</svg>`;
}

// Generate sequence
function generateSequence(sequencePath, frameCount, title, colors) {
  console.log(`Generating ${frameCount} frames for ${title}...`);

  const fullPath = path.join(__dirname, '..', 'public', 'sequences', sequencePath);

  // Create directory if it doesn't exist
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }

  // Generate SVG files
  for (let i = 0; i < frameCount; i++) {
    const frameNum = String(i + 1).padStart(4, '0');
    const svg = createPlaceholderSVG(i, frameCount, title, colors);
    const filename = `frame_${frameNum}.svg`;
    fs.writeFileSync(path.join(fullPath, filename), svg);
  }

  console.log(`✓ Generated ${frameCount} frames in ${sequencePath}`);
}

// Generate all three sequences
console.log('Generating placeholder sequences...\n');

generateSequence(
  'minneapolis/meeting-waters/confluence',
  120,
  'Rivers Converging',
  ['#1e3a8a', '#059669'] // Blue to green (Mississippi + Minnesota)
);

generateSequence(
  'minneapolis/meeting-waters/falls-power',
  150,
  'The Falls That Built an Empire',
  ['#0891b2', '#78350f'] // Cyan (water) to brown (mills)
);

generateSequence(
  'minneapolis/meeting-waters/winter-skyways',
  150,
  'Winter & Adaptation',
  ['#6366f1', '#f5f5f5'] // Purple to white (cold to skyways)
);

console.log('\n✓ All placeholder sequences generated!');
console.log('\nNote: These are SVG placeholders. For production:');
console.log('1. Create animations in After Effects/Blender');
console.log('2. Export as PNG sequences');
console.log('3. Convert to WebP using: for f in *.png; do cwebp -q 85 "$f" -o "${f%.png}.webp"; done');
console.log('4. Replace these SVG files with the WebP sequences');
