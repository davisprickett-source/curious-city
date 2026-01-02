const fs = require('fs');
const path = require('path');

const citiesDir = '/Users/dav/Projects/Curious City/src/data/cities';
const cityFiles = [
  'anchorage.ts',
  'chicago.ts',
  'colorado-springs.ts',
  'dallas.ts',
  'denver.ts',
  'fargo.ts',
  'minneapolis.ts',
  'phoenix.ts',
  'portland.ts',
  'raleigh.ts',
  'salt-lake-city.ts',
  'tampa.ts'
];

const results = {
  summary: {
    totalCities: 0,
    totalRestaurants: 0,
    restaurantsWithMainImage: 0,
    restaurantsWithCarousel: 0,
    restaurantsWithMenuPhoto: 0,
    restaurantsMissingMainImage: 0,
    restaurantsMissingCarousel: 0,
    restaurantsMissingMenuPhoto: 0
  },
  cities: {}
};

cityFiles.forEach(filename => {
  const filepath = path.join(citiesDir, filename);

  if (!fs.existsSync(filepath)) {
    return;
  }

  const content = fs.readFileSync(filepath, 'utf-8');

  // Find restaurant section
  const restaurantMatch = content.match(/{\s*id:\s*['"]([^'"]*best-restaurants[^'"]*)['"]\s*,\s*type:\s*['"]best-of['"]\s*,\s*category:\s*['"]restaurants['"]\s*,[\s\S]*?spots:\s*\[([\s\S]*?)\],?\s*}/);

  if (!restaurantMatch) {
    return;
  }

  const cityName = filename.replace('.ts', '');
  results.summary.totalCities++;
  results.cities[cityName] = {
    restaurants: []
  };

  // Extract spots array content
  const spotsContent = restaurantMatch[2];

  // Find all restaurant objects
  const restaurantRegex = /{\s*name:\s*['"]([^'"]+)['"]\s*,[\s\S]*?}/g;
  let match;

  while ((match = restaurantRegex.exec(spotsContent)) !== null) {
    const restaurantBlock = match[0];
    const name = match[1];

    // Check for main image
    const hasMainImage = /image:\s*{/.test(restaurantBlock);

    // Check for carousel (images array)
    const hasCarousel = /images:\s*\[/.test(restaurantBlock);

    // Check for menu photo (menuImage field)
    const hasMenuPhoto = /menuImage:\s*{/.test(restaurantBlock);

    results.summary.totalRestaurants++;
    if (hasMainImage) results.summary.restaurantsWithMainImage++;
    else results.summary.restaurantsMissingMainImage++;

    if (hasCarousel) results.summary.restaurantsWithCarousel++;
    else results.summary.restaurantsMissingCarousel++;

    if (hasMenuPhoto) results.summary.restaurantsWithMenuPhoto++;
    else results.summary.restaurantsMissingMenuPhoto++;

    results.cities[cityName].restaurants.push({
      name,
      hasMainImage,
      hasCarousel,
      hasMenuPhoto,
      missing: {
        mainImage: !hasMainImage,
        carousel: !hasCarousel,
        menuPhoto: !hasMenuPhoto
      }
    });
  }
});

console.log(JSON.stringify(results, null, 2));
