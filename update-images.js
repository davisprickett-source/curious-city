const fs = require('fs');
const path = require('path');

// Map of cities and their new images with entry hints
const updates = {
  minneapolis: [
    {
      file: 'minn-cur-jucy-lucy.png',
      searchTerms: ['jucy lucy', 'jucy-lucy'],
      type: 'curiosity',
      insertFirst: true
    },
    {
      file: 'min-cur-street-names.png',
      searchTerms: ['presidential-streets', 'presidents in order'],
      type: 'curiosity',
      insertFirst: true,
      convertFromImage: true // This one uses single 'image' not 'images'
    }
  ],
  // Will add more cities programmatically
};

// Cities with images
const cityImages = {
  'anchorage': [
    'anchorage-curious-capital.png',
    'anchorage-curious-outhouse-race-1.png',
    'anchorage-curious-outhouse-race-2.png',
    'anchorage-curious-ox-yarn-1.png',
    'anchorage-curious-ox-yarn-2.png',
    'anchorage-curious-ox-yarn-3.png',
  ],
  'chicago': [
    'chicago-curious-green-river-1.png',
    'chicago-curious-green-river-2.png',
    'chicago-curious-pedway.png',
    'chicago-curious-picasso.png',
  ],
  'dallas': [
    'dallas-cur-cheerleaders-1.png',
    'dallas-cur-cheerleaders-2.png',
    'dallas-cur-city-name-2.png',
    'dallas-cur-city-name.png',
    'dallas-cur-doc-holladay.png',
    'dallas-cur-massage.png',
    'dallas-cur-pegasus-1.png',
    'dallas-cur-pegasus-2.png',
    'dallas-cur-voicemail-2.png',
    'dallas-cur-white-out-liquid-paper-1.png',
  ],
  'denver': [
    'denver-bars-cruise-1.png',
    'denver-bars-cruise-2.png',
    'denver-bars-cruise-3.png',
    'denver-bars-cruise-4.png',
    'denver-bars-mybro-1.png',
    'denver-bars-mybro-2.png',
    'denver-bars-mybro-3.png',
    'denver-cur-christmas-lights.png',
    'denver-cur-coors.png',
    'denver-cur-kiss.png',
    'denver-cur-onyx-1.png',
    'denver-cur-onyx-2.png',
  ],
  'phoenix': [
    'phoenix-bars-bikini-1.png',
    'phoenix-bars-bikini-2.png',
    'phoenix-bars-bikini-3.png',
    'phoenix-bars-duce-1.png',
    'phoenix-bars-duce-2.png',
    'phoenix-bars-duce-3.png',
    'phoenix-bars-duce-4.png',
    'phoenix-bars-hannys-1.png',
    'phoenix-bars-hannys-2.png',
    'phoenix-bars-hannys-3.png',
    'phoenix-bars-hannys-4.png',
    'phoenix-curious-dreamy-0.png',
    'phoenix-curious-dreamy-1.png',
    'phoenix-curious-wish.png',
    'phoenix-dark-internment.png',
    'phoenix-dark-internment2.png',
    'phoenix-dark-internment3.png',
    'phoenix-dark-internment4.png',
    'phoenix-dark-internment5.png',
    'phoenix-lost-macayo.png',
    'phoenix-lost-willow.png',
    'phoenix-resto-atoyac-1.png',
    'phoenix-resto-atoyac-2.png',
    'phoenix-resto-atoyac-3.png',
    'phoenix-resto-bacan-1.png',
    'phoenix-resto-bacan-2.png',
    'phoenix-resto-bacan-3.png',
    'phoenix-resto-bianco-2.png',
    'phoenix-resto-bianco-3.png',
    'phoenix-resto-bianco.png',
    'phoenix-resto-carolinas-1.png',
    'phoenix-resto-carolinas-2.png',
    'phoenix-resto-carolinas-3.png',
    'phoenix-resto-chelo-1.png',
    'phoenix-resto-chelo-2.png',
    'phoenix-resto-chelo-3.png',
    'phoenix-resto-durants-1.png',
    'phoenix-resto-durants-2.png',
    'phoenix-resto-durants-3.png',
    'phoenix-resto-matts-1.png',
    'phoenix-resto-matts-2.png',
    'phoenix-resto-matts-3.png',
    'phoenix-resto-valentine-1.png',
    'phoenix-resto-valentine-2.png',
    'phoenix-resto-valentine-3.png',
  ],
  'portland': [
    'portland-cur-horse-rings-1.png',
    'portland-cur-horse-rings-2.png',
    'portland-curious-bumper-sticker-1.png',
    'portland-curious-bumper-sticker-2.png',
    'portland-curious-bunyan.png',
    'portland-curious-elvis.png',
    'portland-curious-portlandia.png',
    'portland-curious-portlandia2.png',
    'portland-grotto-1.png',
    'portland-grotto-2.png',
    'portland-hidden-curious-1.png',
    'portland-hidden-curious-2.png',
    'portland-hidden-puppet-1.png',
    'portland-hidden-puppet-2.png',
    'portland-hidden-puppet-3.png',
    'portland-hidden-witch-1.png',
  ],
  'raleigh': [
    'raleigh-cur-grease.png',
    'raleigh-cur-state-fiar.png',
    'raleigh-hidden-alwin-1.png',
    'raleigh-hidden-alwin-2.png',
    'raleigh-hidden-azalea-1.png',
    'raleigh-hidden-azalea-2.png',
    'raleigh-hidden-lassiter-1.png',
    'raleigh-hidden-lassiter-2.png',
    'raleigh-hidden-yates.png',
  ],
  'seattle': [
    'seattle-cur-lake-union-houseboats-1.png',
    'seattle-cur-lake-union-houseboats-2.png',
    'seattle-curious-pirates-1.png',
    'seattle-curious-pirates-2.png',
  ],
  'tampa': [
    'tampa-hidden-statue-door.png',
    'tampa-hidden-water-tower.png',
  ],
};

console.log('Image Update Report\n' + '='.repeat(50));

// For now, just report what would be updated
Object.entries(cityImages).forEach(([city, images]) => {
  console.log(`\n${city.toUpperCase()}:`);

  // Group by base name (without number suffix)
  const grouped = {};
  images.forEach(img => {
    const match = img.match(/^[^-]+-[^-]+-(.+?)(-\d+|-0)?\.png$/);
    if (match) {
      const baseName = match[1];
      if (!grouped[baseName]) grouped[baseName] = [];
      grouped[baseName].push(img);
    }
  });

  Object.entries(grouped).forEach(([name, imgs]) => {
    console.log(`  ${name}: ${imgs.length} image(s)`);
    imgs.forEach(img => console.log(`    - ${img}`));
  });
});

console.log('\n' + '='.repeat(50));
console.log('Ready to update city data files');
console.log('This will require manual review for each entry\n');
