const fs = require('fs');

const filePath = '/Users/dav/Projects/Curious City/src/data/cities/minneapolis.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Map of location names to Google Maps URLs
const locationUrls = {
  'Downtown Minneapolis': 'https://www.google.com/maps/place/Downtown+Minneapolis,+Minneapolis,+MN/@44.9778,-93.2650,15z',
  'Mill City Museum': 'https://www.google.com/maps/place/Mill+City+Museum/@44.9789,-93.2571,17z',
  'St. Anthony Falls': 'https://www.google.com/maps/place/St.+Anthony+Falls/@44.9811,-93.2582,17z',
  'Mississippi River Treatment Plant': 'https://www.google.com/maps/place/Minneapolis+Water+Treatment+Plant/@44.9889,-93.2445,15z',
  'Minneapolis City Hall': 'https://www.google.com/maps/place/Minneapolis+City+Hall/@44.9770,-93.2650,17z',
  'Minneapolis & St. Paul': 'https://www.google.com/maps/place/Minneapolis,+MN/@44.9778,-93.2650,12z',
  'University of Minnesota': 'https://www.google.com/maps/place/University+of+Minnesota/@44.9727,-93.2354,15z',
  'Lakewood Cemetery': 'https://www.google.com/maps/place/Lakewood+Cemetery/@44.9487,-93.3019,17z',
  'Minneapolis Sculpture Garden': 'https://www.google.com/maps/place/Minneapolis+Sculpture+Garden/@44.9691,-93.2890,17z',
  'Old Log Theater, Excelsior': 'https://www.google.com/maps/place/Old+Log+Theatre/@44.9034,-93.5668,17z'
};

// Replace each location object to include URL
Object.entries(locationUrls).forEach(([name, url]) => {
  // Match location objects with this name and add URL
  const regex = new RegExp(`location: \\{ name: '${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}', stillExists: (true|false) \\}`, 'g');
  content = content.replace(regex, `location: { name: '${name}', url: '${url}', stillExists: $1 }`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Added URLs to all location fields');
