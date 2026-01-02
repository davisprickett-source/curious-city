#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const cityFilePath = path.join(__dirname, '../src/data/cities/minneapolis.ts');
let content = fs.readFileSync(cityFilePath, 'utf8');

// Define all menuImages to add
const menuImagesToAdd = [
  // Bars
  { name: 'Prohibition', slug: 'prohibition', category: 'bars', alt: 'Prohibition bar cocktail menu at Foshay Tower' },
  { name: 'Bumbling Fools Meadery', slug: 'bumbling-fools-meadery', category: 'bars', alt: 'Bumbling Fools Meadery mead flight menu' },
  { name: 'Moto-i', slug: 'moto-i', category: 'bars', alt: 'Moto-i sake and food menu' },
  { name: 'Flora Room', slug: 'flora-room', category: 'bars', alt: 'Flora Room botanical cocktail menu' },
  { name: 'Pryes Brewing', slug: 'pryes-brewing', category: 'bars', alt: 'Pryes Brewing tap list and beer menu' },
  { name: "Grumpy's Northeast", slug: 'grumpys-northeast', category: 'bars', alt: "Grumpy's Northeast dive bar drinks menu" },

  // Restaurants
  { name: 'Owamni', slug: 'owamni', category: 'restaurants', alt: 'Owamni Indigenous cuisine menu' },
  { name: "Matt's Bar", slug: 'matts-bar', category: 'restaurants', alt: "Matt's Bar Jucy Lucy burger menu" },
  { name: 'Hmong Village', slug: 'hmong-village', category: 'restaurants', alt: 'Hmong Village food court vendor menus' },
  { name: "Al's Breakfast", slug: 'als-breakfast', category: 'restaurants', alt: "Al's Breakfast diner menu" },
  { name: 'Hai Hai', slug: 'hai-hai', category: 'restaurants', alt: 'Hai Hai Southeast Asian food menu' },
  { name: 'Eat Street', slug: 'eat-street', category: 'restaurants', alt: 'Eat Street Nicollet Avenue restaurant menus' },
  { name: 'Boludo', slug: 'boludo', category: 'restaurants', alt: 'Boludo Argentine empanada menu' },
  { name: 'Brasa Premium Rotisserie', slug: 'brasa-premium-rotisserie', category: 'restaurants', alt: 'Brasa rotisserie and sides menu' },
];

menuImagesToAdd.forEach(({ name, slug, category, alt }) => {
  // Find the establishment's images array closing
  const escapedName = name.replace(/'/g, "\\\\'");
  const namePattern = new RegExp(`name: '${escapedName}'[\\s\\S]*?images: \\[[\\s\\S]*?\\],`, 'g');

  const menuImageBlock = `
            menuImage: {
              src: '/images/establishments/${category}/minneapolis/menus/${slug}/menu.jpg',
              alt: '${alt}',
              credit: 'Unsplash',
            },`;

  content = content.replace(namePattern, (match) => {
    // Check if menuImage already exists
    if (match.includes('menuImage:')) {
      console.log(`✓ ${name} already has menuImage`);
      return match;
    }
    console.log(`✓ Adding menuImage to ${name}`);
    return match + menuImageBlock;
  });
});

fs.writeFileSync(cityFilePath, content, 'utf8');
console.log('\n✅ All menu images added successfully!');
