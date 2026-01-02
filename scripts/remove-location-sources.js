const fs = require('fs');

const filePath = '/Users/dav/Projects/Curious City/src/data/cities/minneapolis.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Remove all Location source entries (the entry and its URL)
content = content.replace(/              \{\n                title: 'Location',\n                url: '[^']+',\n              \},\n/g, '');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Removed all Location entries from sources');
