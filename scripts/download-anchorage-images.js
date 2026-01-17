const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, '../public/anchorage/articles');

const images = {
  // Boggs & Begich
  'plane-hero.jpg': 'https://images.unsplash.com/photo-1519076800762-6c6276274a74?w=1600&q=80',
  'cessna.jpg': 'https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=1200&q=80',
  'chugach-mountains.jpg': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
  // Boggs & Begich Portraits - using generic placeholders if needed or just skipping if Unsplash doesn't fit?
  // I will skip the portraits and let the text carry it, or use a generic "political rally" image if I had one.
  // Actually, I'll download a "political crowd" or similar.
  // 'political-rally.jpg': 'https://images.unsplash.com/photo-1529101091760-6149d4c46b29?w=1200&q=80', // Generic crowd

  // Bootlegger's Cove
  'bootleggers-cove.png': 'https://images.unsplash.com/photo-1496950866446-325b84264983?w=1600&q=80', // Coast
  'downtown-1920.jpg': 'https://images.unsplash.com/photo-1524230659092-07f99a75c013?w=1200&q=80', // Vintage Street
  'bootleggers-cove-still.jpg': 'https://images.unsplash.com/photo-1598155523122-3842334d6c10?w=1200&q=80', // Barrels
  'cook-inlet.jpg': 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?w=1200&q=80', // Landscape
  'bootleggers-cove-liquor-pour.jpg': 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1200&q=80', // Pour

  // Dena'ina Flu
  'denaina-flu.png': 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=1600&q=80', // Snow/Winter Hero
  'eklutna-cemetery.jpg': 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=1200&q=80', // Crosses
  // 'denaina-flu-tent-city.jpg' -> Reusing Snow/Winter or maybe a "camp" image if I had one. 
  // I'll reuse the Snow image for now as it sets the mood.
  'flu-hospital.jpg': 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&q=80', // Hospital
};

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadImage(filename, url) {
  const filePath = path.join(targetDir, filename);
  const file = fs.createWriteStream(filePath);

  https.get(url, (response) => {
    if (response.statusCode !== 200) {
      console.error(`Failed to download ${filename}: HTTP ${response.statusCode}`);
      return;
    }
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(filePath, () => {}); // Delete the partial file
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
}

Object.entries(images).forEach(([filename, url]) => {
  downloadImage(filename, url);
});
