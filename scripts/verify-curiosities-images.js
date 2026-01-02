const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const cities = [
  'anchorage', 'chicago', 'colorado-springs', 'dallas', 'denver',
  'fargo', 'minneapolis', 'phoenix', 'portland', 'raleigh',
  'salt-lake-city', 'tampa'
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    const req = protocol.request(url, { method: 'HEAD', timeout: 5000 }, (res) => {
      resolve({
        url,
        status: res.statusCode,
        ok: res.statusCode >= 200 && res.statusCode < 400,
        contentType: res.headers['content-type']
      });
    });
    req.on('error', (err) => {
      resolve({ url, status: 'ERROR', ok: false, error: err.message });
    });
    req.on('timeout', () => {
      req.destroy();
      resolve({ url, status: 'TIMEOUT', ok: false });
    });
    req.end();
  });
}

async function verifyCityImages(citySlug) {
  const filePath = path.join(__dirname, '..', 'src', 'data', 'cities', `${citySlug}.ts`);
  const content = fs.readFileSync(filePath, 'utf-8');

  // Find curiosities section
  const curiositiesMatch = content.match(/id: ['"]curiosities['"]/);
  if (!curiositiesMatch) {
    return { city: citySlug, error: 'No curiosities section found' };
  }

  // Extract all image URLs from curiosities (looking for image: { src: 'url' } or images: [...])
  const imageMatches = [];
  const imageRegex = /image(?:s)?:\s*(?:\{[^}]*src:\s*['"]([^'"]+)['"]|(?:\[[^\]]*src:\s*['"]([^'"]+)['"][^\]]*\]))/g;

  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    const url = match[1] || match[2];
    if (url && url.startsWith('http')) {
      imageMatches.push(url);
    }
  }

  // Also check for standalone src: properties in the curiosities section
  const curiositiesStart = curiositiesMatch.index;
  const curiositiesEnd = content.indexOf("id: '", curiositiesStart + 100) || content.length;
  const curiositiesSection = content.substring(curiositiesStart, curiositiesEnd);

  const srcRegex = /src:\s*['"]([^'"]+)['"]/g;
  while ((match = srcRegex.exec(curiositiesSection)) !== null) {
    const url = match[1];
    if (url && url.startsWith('http') && !imageMatches.includes(url)) {
      imageMatches.push(url);
    }
  }

  console.log(`\n${citySlug.toUpperCase()}: Found ${imageMatches.length} curiosities images`);

  const results = [];
  for (const url of imageMatches) {
    const result = await checkUrl(url);
    results.push(result);

    const status = result.ok ? '✓' : '✗';
    const statusCode = result.status;
    console.log(`  ${status} ${statusCode} - ${url.substring(0, 80)}${url.length > 80 ? '...' : ''}`);

    // Add small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  return { city: citySlug, images: results };
}

async function main() {
  console.log('Verifying curiosities images across all cities...\n');

  const allResults = [];
  for (const city of cities) {
    const result = await verifyCityImages(city);
    allResults.push(result);
  }

  // Summary
  console.log('\n\n=== SUMMARY ===\n');
  for (const cityResult of allResults) {
    if (cityResult.error) {
      console.log(`${cityResult.city}: ${cityResult.error}`);
      continue;
    }

    const total = cityResult.images.length;
    const ok = cityResult.images.filter(i => i.ok).length;
    const failed = total - ok;

    console.log(`${cityResult.city}: ${ok}/${total} images OK ${failed > 0 ? `(${failed} FAILED)` : ''}`);

    if (failed > 0) {
      console.log('  Failed URLs:');
      cityResult.images.filter(i => !i.ok).forEach(img => {
        console.log(`    - ${img.url} (${img.status})`);
      });
    }
  }
}

main().catch(console.error);
