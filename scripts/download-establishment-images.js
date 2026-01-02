#!/usr/bin/env node

/**
 * Download high-quality images for all establishments (coffee shops, bars, restaurants)
 * across all cities. Uses Google Custom Search API for finding relevant images.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

// Read all city files
const citiesDir = path.join(__dirname, '../src/data/cities');
const cityFiles = fs.readdirSync(citiesDir)
  .filter(f => f.endsWith('.ts') && !f.includes('.backup') && !f.endsWith('.bak'));

console.log(`Found ${cityFiles.length} city files\n`);

// Parse establishments from city files
function parseEstablishments(cityFile) {
  const citySlug = path.basename(cityFile, '.ts');
  const content = fs.readFileSync(path.join(citiesDir, cityFile), 'utf8');

  const establishments = [];

  // Find all best-of sections
  const bestOfRegex = /{\s*id:\s*['"]([^'"]+)['"]\s*,\s*type:\s*['"]best-of['"]\s*,\s*category:\s*['"]([^'"]+)['"]\s*,[\s\S]*?spots:\s*\[([\s\S]*?)\n\s*\]/g;

  let match;
  while ((match = bestOfRegex.exec(content)) !== null) {
    const [, id, category, spotsContent] = match;

    // Parse individual spots
    const spotRegex = /{\s*name:\s*['"]([^'"]+)['"]/g;
    let spotMatch;
    while ((spotMatch = spotRegex.exec(spotsContent)) !== null) {
      const name = spotMatch[1];
      const slug = name.toLowerCase()
        .replace(/['']/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

      establishments.push({
        city: citySlug,
        category,
        name,
        slug
      });
    }
  }

  return establishments;
}

// Collect all establishments
const allEstablishments = [];
for (const cityFile of cityFiles) {
  const establishments = parseEstablishments(cityFile);
  allEstablishments.push(...establishments);
  console.log(`${path.basename(cityFile, '.ts')}: ${establishments.length} establishments`);
}

console.log(`\nTotal: ${allEstablishments.length} establishments across all cities\n`);

// Create download function using curl to fetch from Google Images
function downloadImage(url, outputPath) {
  try {
    execSync(`curl -sL "${url}" -o "${outputPath}" --max-time 30`, { stdio: 'pipe' });

    // Verify it's an actual image
    const stats = fs.statSync(outputPath);
    if (stats.size < 5000) {
      fs.unlinkSync(outputPath);
      return false;
    }

    return true;
  } catch (error) {
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }
    return false;
  }
}

// Search and download images for each establishment
async function processEstablishment(est) {
  const { city, category, name, slug } = est;

  const photoDir = path.join(__dirname, '../public/images/establishments', category, city, 'photos', slug);
  const menuDir = path.join(__dirname, '../public/images/establishments', category, city, 'menus', slug);

  // Create directories
  fs.mkdirSync(photoDir, { recursive: true });
  fs.mkdirSync(menuDir, { recursive: true });

  console.log(`\n📍 ${name} (${city} ${category})`);

  // For now, print what we would search for
  console.log(`   Would search: "${name} ${city} ${category}" interior exterior photos`);
  console.log(`   Would search: "${name} ${city}" menu`);
  console.log(`   Photo dir: ${photoDir}`);
  console.log(`   Menu dir: ${menuDir}`);
}

// Process first 5 as a test
console.log('\n=== PROCESSING ESTABLISHMENTS ===\n');
for (let i = 0; i < Math.min(5, allEstablishments.length); i++) {
  processEstablishment(allEstablishments[i]);
}

console.log('\n\n✅ Script complete - ready to implement actual image downloading');
console.log('Next steps:');
console.log('1. Integrate with Google Custom Search API or use direct image URLs');
console.log('2. Download 3-5 photos per establishment');
console.log('3. Download menu images');
console.log('4. Update city .ts files with new image paths');
