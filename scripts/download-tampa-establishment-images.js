#!/usr/bin/env node

/**
 * Downloads authentic images for Tampa establishments
 * Includes exterior, interior, food, drinks for each establishment
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Create directories if they don't exist
const ensureDirectoryExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Download a single image
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const protocol = parsedUrl.protocol === 'https:' ? https : http;

    const file = fs.createWriteStream(filepath);

    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${path.basename(filepath)}`);
          resolve();
        });
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirects
        const redirectUrl = response.headers.location;
        console.log(`  Redirecting to: ${redirectUrl}`);
        downloadImage(redirectUrl, filepath).then(resolve).catch(reject);
      } else {
        fs.unlink(filepath, () => {});
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

// Tampa Bars Images
const barImages = {
  'jekyll': [
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipM5HqyY8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'jekyll-interior-1.jpg',
      alt: 'Jekyll speakeasy dimly lit interior with plush seating'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipPZ5qKvH9xY3b0x4Y5HJqY5kMX8X9QoY8Q=s1360-w1360-h1020',
      filename: 'jekyll-interior-2.jpg',
      alt: 'Jekyll speakeasy bar with craft cocktails'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipNX8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'jekyll-cocktail.jpg',
      alt: 'Craft cocktail at Jekyll'
    }
  ],
  'the-bricks-of-ybor': [
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipNYlP3MgXJ8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'bricks-exterior.jpg',
      alt: 'The Bricks of Ybor exterior on 7th Avenue'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipM8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'bricks-interior.jpg',
      alt: 'The Bricks of Ybor indoor-outdoor seating'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipP8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'bricks-sandwich.jpg',
      alt: 'Sandwich and beer at The Bricks'
    }
  ],
  'the-independent': [
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipO8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'independent-exterior.jpg',
      alt: 'The Independent converted gas station exterior'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipN8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'independent-interior.jpg',
      alt: 'The Independent European-style pub interior'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipM8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'independent-beer.jpg',
      alt: 'Belgian beer selection at The Independent'
    }
  ],
  'cigar-city-cider-mead': [
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipL8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'cigar-city-cider-exterior.jpg',
      alt: 'Cigar City Cider and Mead exterior in Ybor'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipK8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'cigar-city-cider-interior.jpg',
      alt: 'Cigar City Cider and Mead tasting room with tanks'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipJ8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'cigar-city-cider-flight.jpg',
      alt: 'Cider flight at Cigar City Cider and Mead'
    }
  ],
  'madame-fortune': [
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipI8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'madame-fortune-entrance.jpg',
      alt: 'Madame Fortune hidden entrance through Roast'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipH8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'madame-fortune-interior.jpg',
      alt: 'Madame Fortune intimate speakeasy interior'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipG8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'madame-fortune-dessert.jpg',
      alt: 'Dessert and cocktail at Madame Fortune'
    }
  ]
};

// Tampa Restaurants Images
const restaurantImages = {
  'rooster-and-the-till': [
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipF8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'rooster-till-exterior.jpg',
      alt: 'Rooster & the Till exterior in Seminole Heights'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipE8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'rooster-till-kitchen.jpg',
      alt: 'Rooster & the Till open kitchen with chef counter'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipD8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'rooster-till-dish.jpg',
      alt: 'Farm-to-table dish at Rooster & the Till'
    }
  ],
  'la-segunda': [
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipC8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'la-segunda-exterior.jpg',
      alt: 'La Segunda Central Bakery exterior'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipB8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'la-segunda-interior.jpg',
      alt: 'La Segunda bakery counter with fresh bread'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipA8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'la-segunda-cuban-bread.jpg',
      alt: 'Fresh Cuban bread at La Segunda'
    }
  ],
  'berns-steak-house': [
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipZ8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'berns-exterior.jpg',
      alt: 'Bern\'s Steak House exterior'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipY8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'berns-dining-room.jpg',
      alt: 'Bern\'s Steak House dining room interior'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipX8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'berns-dessert-room.jpg',
      alt: 'Bern\'s famous dessert room with wine barrel booths'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipW8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'berns-steak.jpg',
      alt: 'Dry-aged steak at Bern\'s Steak House'
    }
  ],
  'ulele': [
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipV8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'ulele-exterior.jpg',
      alt: 'Ulele restaurant riverside exterior'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipU8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'ulele-barbacoa.jpg',
      alt: 'Ulele signature barbacoa grill'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipT8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'ulele-oysters.jpg',
      alt: 'Charbroiled oysters from the barbacoa grill'
    }
  ],
  'west-tampa-sandwich': [
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipS8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'west-tampa-exterior.jpg',
      alt: 'West Tampa Sandwich Shop exterior'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipR8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'west-tampa-interior.jpg',
      alt: 'West Tampa Sandwich Shop interior with vintage photos'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipQ8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'west-tampa-obama-sandwich.jpg',
      alt: 'The Obama Cuban sandwich at West Tampa Sandwich Shop'
    }
  ]
};

// Coffee Shops Images
const coffeeImages = {
  'buddy-brew': [
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipP8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'buddy-brew-exterior.jpg',
      alt: 'Buddy Brew Coffee exterior'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipO8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'buddy-brew-interior.jpg',
      alt: 'Buddy Brew Coffee interior with espresso bar'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipN8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'buddy-brew-coffee.jpg',
      alt: 'Pour-over coffee at Buddy Brew'
    }
  ],
  'blind-tiger': [
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipM8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'blind-tiger-exterior.jpg',
      alt: 'Blind Tiger Coffee Roasters exterior in Ybor'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipL8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'blind-tiger-interior.jpg',
      alt: 'Blind Tiger speakeasy-style interior'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipK8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'blind-tiger-dirty-thaiger.jpg',
      alt: 'Dirty Thaiger signature drink at Blind Tiger'
    }
  ],
  'kahwa-coffee': [
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipJ8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'kahwa-exterior.jpg',
      alt: 'Kahwa Coffee exterior'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipI8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'kahwa-interior.jpg',
      alt: 'Kahwa Coffee modern interior'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipH8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'kahwa-coffee.jpg',
      alt: 'Specialty coffee at Kahwa'
    }
  ],
  'the-lab-coffee': [
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipG8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'lab-coffee-exterior.jpg',
      alt: 'The Lab Coffee exterior'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipF8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'lab-coffee-interior.jpg',
      alt: 'The Lab Coffee industrial interior with roastery'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipE8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'lab-coffee-experimental.jpg',
      alt: 'Experimental roast at The Lab Coffee'
    }
  ],
  'cafe-quiquiriqui': [
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipD8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'quiquiriqui-exterior.jpg',
      alt: 'Cafe Quiquiriqui inside Hotel Haya'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipC8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'quiquiriqui-interior.jpg',
      alt: 'Cafe Quiquiriqui beautiful interior'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipB8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'quiquiriqui-cafe-con-leche.jpg',
      alt: 'Cuban café con leche at Cafe Quiquiriqui'
    }
  ],
  'shortwave-coffee': [
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipA8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'shortwave-exterior.jpg',
      alt: 'Shortwave Coffee at Sparkman Wharf'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipZ8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'shortwave-interior.jpg',
      alt: 'Shortwave Coffee minimalist interior'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipY8Y8WnK0_FU5Y7iJZL5xMG3lX8X0QoY8Q=s1360-w1360-h1020',
      filename: 'shortwave-waterfront.jpg',
      alt: 'Shortwave Coffee waterfront seating'
    }
  ]
};

console.log('Note: These are placeholder Google Maps URLs.');
console.log('You need to replace them with actual image URLs from Google Maps, establishment websites, or other legitimate sources.');
console.log('\nTo find real images:');
console.log('1. Search for each establishment on Google Maps');
console.log('2. Look at the photos section');
console.log('3. Right-click on high-quality photos and copy image address');
console.log('4. Replace the placeholder URLs in this script');
console.log('\nSkipping download for placeholder URLs...\n');

// For now, just show what directories would be created
const baseDir = path.join(__dirname, '..', 'public', 'images', 'establishments');
console.log('\nDirectories that would be created:');
console.log(`${baseDir}/bars/tampa`);
console.log(`${baseDir}/restaurants/tampa`);
console.log(`${baseDir}/coffee-shops/tampa`);
console.log(`${baseDir}/bars/tampa/menus`);
console.log(`${baseDir}/restaurants/tampa/menus`);
console.log(`${baseDir}/coffee-shops/tampa/menus`);

console.log('\n✓ Script ready - update with real image URLs to download');
