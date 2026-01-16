const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
require('dotenv').config({ path: '.env.local' });

// Configure R2 client (S3-compatible)
const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

const BUCKET_NAME = process.env.R2_BUCKET_NAME;
const SEQUENCES_DIR = path.join(__dirname, 'public', 'sequences');

// Get all files in sequences directory
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

async function uploadFile(filePath) {
  const fileContent = fs.readFileSync(filePath);

  // Get relative path from sequences directory
  const relativePath = path.relative(path.join(__dirname, 'public'), filePath);
  const key = relativePath.replace(/\\/g, '/'); // Ensure forward slashes

  // Determine content type
  const ext = path.extname(filePath).toLowerCase();
  let contentType = 'application/octet-stream';
  if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
  if (ext === '.png') contentType = 'image/png';
  if (ext === '.webp') contentType = 'image/webp';

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: fileContent,
    ContentType: contentType,
  });

  try {
    await r2Client.send(command);
    return { success: true, key };
  } catch (error) {
    return { success: false, key, error: error.message };
  }
}

async function main() {
  console.log('🚀 Starting upload to Cloudflare R2...\n');
  console.log(`📦 Bucket: ${BUCKET_NAME}`);
  console.log(`📁 Source: ${SEQUENCES_DIR}\n`);

  // Get all files
  const files = getAllFiles(SEQUENCES_DIR);
  console.log(`📊 Found ${files.length} files to upload\n`);

  let uploaded = 0;
  let failed = 0;
  const errors = [];

  // Upload with progress
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const result = await uploadFile(file);

    if (result.success) {
      uploaded++;
      if (uploaded % 100 === 0) {
        console.log(`  ✓ Uploaded ${uploaded}/${files.length} files...`);
      }
    } else {
      failed++;
      errors.push({ file: result.key, error: result.error });
      console.log(`  ✗ Failed: ${result.key}`);
    }
  }

  console.log(`\n✅ Upload complete!`);
  console.log(`  • Uploaded: ${uploaded} files`);
  if (failed > 0) {
    console.log(`  • Failed: ${failed} files`);
    console.log('\nErrors:');
    errors.forEach(err => console.log(`  - ${err.file}: ${err.error}`));
  }

  console.log(`\n🌐 Files accessible at:`);
  console.log(`   ${process.env.R2_PUBLIC_URL}/sequences/`);
}

main().catch(console.error);
