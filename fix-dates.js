#!/usr/bin/env node
/**
 * Fix article dates: change all 2023-2024 dates to Nov 2025 - Jan 2026
 */

const fs = require('fs');
const path = require('path');

// Date range: Nov 1, 2025 to Jan 26, 2026
const startDate = new Date('2025-11-01');
const endDate = new Date('2026-01-26');
const dayRange = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

function randomDate() {
  const daysToAdd = Math.floor(Math.random() * dayRange);
  const date = new Date(startDate);
  date.setDate(date.getDate() + daysToAdd);
  return date.toISOString().split('T')[0];
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Match dates like 2023-XX-XX or 2024-XX-XX in publishedAt
  const datePattern = /publishedAt:\s*['"]202[34]-(\d{2})-(\d{2})T/g;
  
  let match;
  const replacements = [];
  
  while ((match = datePattern.exec(content)) !== null) {
    const oldDate = match[0];
    const newDateStr = randomDate();
    replacements.push({ old: oldDate, new: `publishedAt: '${newDateStr}T` });
  }
  
  for (const r of replacements) {
    content = content.replace(r.old, r.new);
  }
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`✓ ${path.basename(filePath)}: ${replacements.length} date(s) updated`);
    return replacements.length;
  }
  return 0;
}

function walkDir(dir) {
  let total = 0;
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      total += walkDir(filePath);
    } else if (file.endsWith('.ts')) {
      total += processFile(filePath);
    }
  }
  return total;
}

const citiesDir = path.join(__dirname, 'src/data/cities');
console.log('Fixing article dates (2023-2024 → Nov 2025 - Jan 2026)...\n');
const total = walkDir(citiesDir);
console.log(`\n✅ Done! Updated ${total} dates.`);
