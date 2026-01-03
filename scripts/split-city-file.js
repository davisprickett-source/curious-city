#!/usr/bin/env node
/**
 * Split monolithic city file into modular collections
 *
 * Usage: node scripts/split-city-file.js minneapolis
 */

const fs = require('fs');
const path = require('path');

const citySlug = process.argv[2] || 'minneapolis';
const cityFilePath = `src/data/cities/${citySlug}.ts`;
const outputDir = `src/data/cities/${citySlug}`;

console.log(`\n📦 Splitting ${citySlug} into modular structure...\n`);

// Read the city file
const content = fs.readFileSync(cityFilePath, 'utf-8');

// Extract city metadata (before content array)
const metadataMatch = content.match(/export const \w+: CityData = \{([\s\S]*?)\n\s{2}content:/);
if (!metadataMatch) {
  console.error('❌ Could not find city metadata');
  process.exit(1);
}

const metadataBlock = metadataMatch[1].trim();

// Parse slug, name, tagline, heroImage
const slug = (metadataBlock.match(/slug: '([^']+)'/) || [])[1] || citySlug;
const name = (metadataBlock.match(/name: '([^']+)'/) || [])[1] || citySlug;
const state = (metadataBlock.match(/state: '([^']+)'/) || [])[1] || '';
const tagline = (metadataBlock.match(/tagline: '([^']+)'/) || [])[1] || '';
const heroImageMatch = metadataBlock.match(/heroImage: \{([\s\S]*?)\n\s{4}\}/);
const heroImage = heroImageMatch ? heroImageMatch[1].trim() : '';

// Create config.ts
const configContent = `export const config = {
  slug: '${slug}',
  name: '${name}',
  state: '${state}',
  tagline: '${tagline}',
  heroImage: {
    ${heroImage}
  },
  location: {
    lat: 44.9778,
    lng: -93.265,
  },
}
`;

// Ensure output directory exists
if (!fs.existsSync(`${outputDir}/collections`)) {
  fs.mkdirSync(`${outputDir}/collections`, { recursive: true });
}
if (!fs.existsSync(`${outputDir}/articles`)) {
  fs.mkdirSync(`${outputDir}/articles`, { recursive: true });
}

// Write config
fs.writeFileSync(`${outputDir}/config.ts`, configContent);
console.log('✓ Created config.ts');

// Find and extract content sections
// We'll use a simple approach: find section IDs and extract their content

// Helper function to find balanced braces
function extractSection(content, startPattern, sectionId) {
  const regex = new RegExp(`\\{[^}]*id: '${sectionId}',[^}]*type: 'section'[\\s\\S]*?items: \\[`, 'g');
  const match = regex.exec(content);

  if (!match) return null;

  const startIndex = match.index + match[0].length - 1; // Position of opening [
  let braceCount = 1;
  let endIndex = startIndex + 1;

  while (braceCount > 0 && endIndex < content.length) {
    if (content[endIndex] === '[') braceCount++;
    if (content[endIndex] === ']') braceCount--;
    endIndex++;
  }

  return content.substring(startIndex, endIndex);
}

// Extract curiosities
const curiositiesArray = extractSection(content, 'curiosities', 'curiosities');
if (curiositiesArray) {
  const curiositiesContent = `import { CuriosityContentItem } from '@/types/content'

export const curiosities: CuriosityContentItem[] = ${curiositiesArray}
`;
  fs.writeFileSync(`${outputDir}/collections/curiosities.ts`, curiositiesContent);
  console.log('✓ Created collections/curiosities.ts');
}

// Extract hidden-gems
const hiddenGemsArray = extractSection(content, 'hidden-gems', 'hidden-gems');
if (hiddenGemsArray) {
  const hiddenGemsContent = `import { HiddenGemContentItem } from '@/types/content'

export const hiddenGems: HiddenGemContentItem[] = ${hiddenGemsArray}
`;
  fs.writeFileSync(`${outputDir}/collections/hidden-gems.ts`, hiddenGemsContent);
  console.log('✓ Created collections/hidden-gems.ts');
}

// Extract dark-history items
// Dark history items are typically within a section, let's find them
const darkHistoryMatch = content.match(/\{[^}]*id: 'dark-history'[\s\S]*?items: (\[[\s\S]*?\n\s{8}\])/);
if (darkHistoryMatch) {
  const darkHistoryArray = darkHistoryMatch[1];
  const darkHistoryContent = `import { DarkHistoryContentItem } from '@/types/content'

export const darkHistory: DarkHistoryContentItem[] = ${darkHistoryArray}
`;
  fs.writeFileSync(`${outputDir}/collections/dark-history.ts`, darkHistoryContent);
  console.log('✓ Created collections/dark-history.ts');
}

// For now, we'll create placeholder files for other collections
// These will need to be manually populated from the original file

const collections = [
  { name: 'bars', type: 'BestOfContentItem', exportName: 'bars' },
  { name: 'restaurants', type: 'BestOfContentItem', exportName: 'restaurants' },
  { name: 'coffee-shops', type: 'BestOfContentItem', exportName: 'coffeeShops' },
  { name: 'lost-and-loved', type: 'LostAndLovedContentItem', exportName: 'lostAndLoved' },
  { name: 'scenes', type: 'SceneContentItem', exportName: 'scenes' },
  { name: 'events', type: 'EventContentItem', exportName: 'events' },
  { name: 'iconic-spots', type: 'IconicSpotContentItem', exportName: 'iconicSpots' },
];

collections.forEach(({ name, type, exportName }) => {
  const placeholderContent = `import { ${type} } from '@/types/content'

// TODO: Extract ${name} content from original ${citySlug}.ts file
export const ${exportName}: ${type}[] = []
`;
  const filePath = `${outputDir}/collections/${name}.ts`;
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, placeholderContent);
    console.log(`○ Created placeholder collections/${name}.ts`);
  }
});

// Create articles/index.ts placeholder
const articlesIndexContent = `import { Article } from '@/types/article'

// TODO: Add article exports here
export const articles: Article[] = []
`;
fs.writeFileSync(`${outputDir}/articles/index.ts`, articlesIndexContent);
console.log('○ Created articles/index.ts placeholder');

// Create index.ts that composes the city from collections
const indexContent = `import { CityData } from '@/types/content'
import { config } from './config'
import { curiosities } from './collections/curiosities'
import { darkHistory } from './collections/dark-history'
import { hiddenGems } from './collections/hidden-gems'
import { bars } from './collections/bars'
import { restaurants } from './collections/restaurants'
import { coffeeShops } from './collections/coffee-shops'
import { lostAndLoved } from './collections/lost-and-loved'
import { scenes } from './collections/scenes'
import { events } from './collections/events'
import { iconicSpots } from './collections/iconic-spots'

export const ${citySlug}: CityData = {
  ...config,
  content: [
    // Intro text
    {
      id: 'intro-text',
      type: 'text',
      content: config.tagline,
    },

    // Curiosities section
    {
      id: 'curiosities',
      type: 'section',
      title: 'Things You Might Not Know About ${name}',
      items: curiosities,
    },

    // Dark History section
    {
      id: 'dark-history',
      type: 'section',
      title: 'Dark History',
      items: darkHistory,
    },

    // Hidden Gems section
    {
      id: 'hidden-gems',
      type: 'section',
      title: 'Hidden Gems',
      items: hiddenGems,
    },

    // TODO: Add other sections (bars, restaurants, coffee-shops, etc.)
    // This needs to match the original structure from ${citySlug}.ts
  ],
}
`;
fs.writeFileSync(`${outputDir}/index.ts`, indexContent);
console.log('✓ Created index.ts');

console.log(`\n✅ Modular structure created for ${citySlug}!`);
console.log(`\n📝 Next steps:`);
console.log(`1. Manually extract remaining content from ${cityFilePath}`);
console.log(`2. Update collections/*.ts placeholder files`);
console.log(`3. Complete the index.ts content array`);
console.log(`4. Test that all pages still work\n`);
