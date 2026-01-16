const fs = require('fs');
const path = require('path');

// Category mappings
const categoryMap = {
  'cur': 'curiosities',
  'curious': 'curiosities',
  'hidden': 'hidden-gems',
  'resto': 'restaurants',
  'bars': 'bars',
  'dark': 'dark-history',
  'lost': 'lost-loved',
  'grotto': 'hidden-gems',  // Portland grotto
};

// City name mappings
const cityMap = {
  'min': 'minneapolis',
  'minn': 'minneapolis',
};

// Get all files from new-again
const sourceDir = './public/new-again';
const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));

console.log(`Found ${files.length} images to organize\n`);

const moves = [];

files.forEach(file => {
  // Parse filename: city-category-name-number.ext
  const match = file.match(/^([a-z]+)-([a-z]+)-(.+)\.([a-z]+)$/);

  if (!match) {
    console.log(`⚠️  Could not parse: ${file}`);
    return;
  }

  let [, cityPrefix, categoryPrefix, namePart, ext] = match;

  // Map city and category
  const city = cityMap[cityPrefix] || cityPrefix;
  const category = categoryMap[categoryPrefix];

  if (!category) {
    console.log(`⚠️  Unknown category '${categoryPrefix}' in: ${file}`);
    return;
  }

  // Check if target directory exists
  const targetDir = `./public/${city}/${category}`;
  if (!fs.existsSync(targetDir)) {
    console.log(`⚠️  Directory does not exist: ${targetDir}`);
    return;
  }

  const sourcePath = path.join(sourceDir, file);
  const targetPath = path.join(targetDir, file);

  moves.push({
    source: sourcePath,
    target: targetPath,
    file,
    city,
    category,
    namePart
  });
});

// Group by city and category for reporting
const grouped = {};
moves.forEach(move => {
  const key = `${move.city}/${move.category}`;
  if (!grouped[key]) grouped[key] = [];
  grouped[key].push(move.file);
});

console.log('Images to move by location:');
Object.keys(grouped).sort().forEach(key => {
  console.log(`\n${key}:`);
  grouped[key].forEach(f => console.log(`  - ${f}`));
});

console.log(`\n\nTotal: ${moves.length} images ready to move`);
console.log('\nRun with --execute to perform the moves');

if (process.argv.includes('--execute')) {
  console.log('\n🚀 Moving files...\n');
  let success = 0;
  let failed = 0;

  moves.forEach(move => {
    try {
      fs.copyFileSync(move.source, move.target);
      console.log(`✓ ${move.file} → ${move.city}/${move.category}/`);
      success++;
    } catch (err) {
      console.log(`✗ ${move.file}: ${err.message}`);
      failed++;
    }
  });

  console.log(`\n✅ Moved ${success} files successfully`);
  if (failed > 0) console.log(`❌ Failed to move ${failed} files`);
}
