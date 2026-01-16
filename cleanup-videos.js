const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Finding all video files...');
const allVideos = execSync('find public -name "*.mp4" -type f', { encoding: 'utf-8' })
  .trim()
  .split('\n')
  .filter(Boolean);

console.log(`📊 Total videos in public folder: ${allVideos.length}`);

console.log('\n🔍 Finding referenced videos in code...');
const referencedVideos = execSync('grep -rh "\\.mp4" src/data/history --include="*.ts" | grep -o \'/[^"\'\\\'\']*\\.mp4\'', { encoding: 'utf-8' })
  .trim()
  .split('\n')
  .filter(Boolean)
  .map(v => v.toLowerCase());

console.log(`📊 Videos referenced in code: ${referencedVideos.length}`);
console.log('Referenced videos:', referencedVideos);

// Find unused videos
const unused = allVideos.filter(video => {
  const videoPath = video.replace('public', '').toLowerCase();
  return !referencedVideos.some(ref => videoPath.includes(ref.toLowerCase()) || ref.toLowerCase().includes(path.basename(videoPath).toLowerCase()));
});

console.log(`\n🗑️  Unused videos: ${unused.length}`);
if (unused.length > 0) {
  console.log('\nUnused video files:');
  unused.forEach(v => console.log(`  - ${v}`));

  // Calculate size
  let totalSize = 0;
  unused.forEach(file => {
    const stats = fs.statSync(file);
    totalSize += stats.size;
  });

  const sizeMB = (totalSize / 1024 / 1024).toFixed(2);
  const sizeGB = (totalSize / 1024 / 1024 / 1024).toFixed(2);
  console.log(`\n💾 Space to free: ${sizeMB} MB (${sizeGB} GB)`);

  console.log('\n❓ Delete these files? (You\'ll need to run: node cleanup-videos.js delete)');
}

// If "delete" argument passed, actually delete them
if (process.argv.includes('delete')) {
  console.log('\n🗑️  Deleting unused videos...');
  unused.forEach(file => {
    fs.unlinkSync(file);
    console.log(`  ✓ Deleted: ${file}`);
  });
  console.log(`\n✅ Deleted ${unused.length} unused videos`);
}
