#!/usr/bin/env node

/**
 * Portland Establishment Image Downloader
 *
 * This script helps download authentic images for Portland establishments
 * from their official sources (websites, Google Maps, Instagram, etc.)
 *
 * NO UNSPLASH - Only genuine, authentic images
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Establishments to process
const establishments = {
  bars: [
    {
      name: 'expatriate',
      displayName: 'Expatriate',
      website: 'http://expatriatepdx.com/',
      instagram: '@expatriatepdx',
      address: '5424 NE 30th Ave',
      images: []
    },
    {
      name: 'multnomah-whiskey-library',
      displayName: 'Multnomah Whiskey Library',
      website: 'https://mwlpdx.com/',
      address: '1124 SW Alder St',
      images: []
    },
    {
      name: 'hale-pele',
      displayName: 'Hale Pele',
      website: 'https://www.halepele.com/',
      address: '2733 NE Broadway',
      images: []
    },
    {
      name: 'the-bye-and-bye',
      displayName: 'The Bye and Bye',
      website: 'https://thebyeandbye.com/',
      address: '1011 NE Alberta St',
      images: []
    },
    {
      name: 'produce-row-cafe',
      displayName: 'Produce Row Café',
      website: 'https://www.producerowcafe.com/',
      address: '204 SE Oak St',
      images: []
    }
  ],
  restaurants: [
    {
      name: 'canard',
      displayName: 'Canard',
      website: 'https://www.canardrestaurant.com/',
      address: '734 E Burnside St',
      images: []
    },
    {
      name: 'yaowarat',
      displayName: 'Yaowarat',
      website: 'https://www.yaowaratpdx.com/',
      address: '7937 SE Stark St',
      images: []
    },
    {
      name: 'screen-door',
      displayName: 'Screen Door',
      website: 'https://screendoorrestaurant.com/',
      address: '2337 E Burnside St',
      images: []
    },
    {
      name: 'lardo',
      displayName: 'Lardo',
      website: 'https://www.lardosandwiches.com/',
      address: '1212 SE Hawthorne Blvd',
      images: []
    },
    {
      name: 'ava-genes',
      displayName: "Ava Gene's",
      website: 'https://avagenes.com/',
      address: '3377 SE Division St',
      images: []
    }
  ],
  coffeeShops: [
    {
      name: 'heart-coffee-roasters',
      displayName: 'Heart Coffee Roasters',
      website: 'https://www.heartroasters.com',
      instagram: '@heartroasters',
      address: '2211 E Burnside St',
      images: []
    },
    {
      name: 'coava-coffee-roasters',
      displayName: 'Coava Coffee Roasters',
      website: 'https://coavacoffee.com',
      instagram: '@coaboratory',
      address: '1015 SE Main St',
      images: []
    },
    {
      name: 'albina-press',
      displayName: 'Albina Press',
      website: 'https://albinapress.com',
      instagram: '@albinapress',
      address: '4637 N Albina Ave',
      images: []
    },
    {
      name: 'either-or',
      displayName: 'Either/Or',
      instagram: '@eitheror_cafe',
      address: '5027 N Lombard St',
      images: []
    },
    {
      name: 'push-x-pull',
      displayName: 'Push x Pull',
      website: 'https://pushxpullcoffee.com',
      instagram: '@pushxpullcoffee',
      address: '2809 SE Stark St',
      images: []
    },
    {
      name: 'portland-ca-phe',
      displayName: 'Portland Cà Phê',
      website: 'https://portlandcaphe.com',
      instagram: '@portlandcaphe',
      address: '1615 SE 35th Pl',
      images: []
    }
  ]
};

/**
 * Download an image from a URL
 */
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const protocol = parsedUrl.protocol === 'https:' ? https : http;

    // Create directory if it doesn't exist
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(filepath);

    protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    }, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${filepath}`);
          resolve(filepath);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        file.close();
        fs.unlinkSync(filepath);
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });
  });
}

/**
 * Print establishment info for manual research
 */
function printEstablishmentInfo() {
  console.log('\n=== PORTLAND ESTABLISHMENTS - MANUAL RESEARCH GUIDE ===\n');

  Object.entries(establishments).forEach(([category, items]) => {
    console.log(`\n## ${category.toUpperCase()}\n`);
    items.forEach(est => {
      console.log(`### ${est.displayName}`);
      console.log(`Address: ${est.address}`);
      if (est.website) console.log(`Website: ${est.website}`);
      if (est.instagram) console.log(`Instagram: ${est.instagram}`);
      console.log(`Google Maps: https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(est.displayName + ' ' + est.address + ' Portland OR')}`);
      console.log('');
    });
  });

  console.log('\n=== IMAGE SOURCING STEPS ===');
  console.log('1. Visit official website - look for high-res images in press/media kit');
  console.log('2. Check Instagram - look for professional photos from the business account');
  console.log('3. Check Google Maps - look for high-quality user photos');
  console.log('4. Search for press coverage - news articles often have professional photos');
  console.log('5. Look for menu PDFs or menu images');
  console.log('\n');
}

// Main execution
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    printEstablishmentInfo();
  } else if (args[0] === 'download' && args.length === 3) {
    const [, url, filepath] = args;
    downloadImage(url, filepath)
      .then(() => console.log('Download complete!'))
      .catch(err => console.error('Download failed:', err.message));
  } else {
    console.log('Usage:');
    console.log('  node scripts/download-portland-establishment-images.js');
    console.log('    - Print research guide');
    console.log('');
    console.log('  node scripts/download-portland-establishment-images.js download <url> <filepath>');
    console.log('    - Download a single image');
  }
}

module.exports = { downloadImage, establishments };
