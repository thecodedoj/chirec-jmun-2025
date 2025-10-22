const fs = require('fs');
const path = require('path');

const repoRoot = process.cwd();
const teamDataPath = path.join(repoRoot, 'src', 'lib', 'teamData.ts');
const srcDir = path.join(repoRoot, 'src', 'components', 'team');
const outDir = path.join(repoRoot, 'public', 'team');

function normalize(name) {
  return name.replace(/\.[^.]+$/, '').toLowerCase().replace(/[^a-z0-9]+/g, '');
}

if (!fs.existsSync(teamDataPath)) {
  console.error('teamData.ts not found at', teamDataPath);
  process.exit(1);
}

const teamDataText = fs.readFileSync(teamDataPath, 'utf8');
// crude regex to extract image: "filename.png" entries
const images = Array.from(teamDataText.matchAll(/image:\s*"([^"]+)"/g)).map(m => m[1]);
if (!images.length) {
  console.error('No image entries found in teamData.ts');
  process.exit(1);
}

if (!fs.existsSync(srcDir)) {
  console.error('Source dir not found:', srcDir);
  process.exit(1);
}

const actualFiles = fs.readdirSync(srcDir).filter(f => /\.png$/i.test(f));
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const missing = [];
for (const img of images) {
  const wantNorm = normalize(img);
  // find best match in actualFiles
  const found = actualFiles.find(f => normalize(f) === wantNorm);
  const target = path.join(outDir, img);
  if (found) {
    const src = path.join(srcDir, found);
    try {
      fs.copyFileSync(src, target);
      console.log(`Copied ${found} -> ${img}`);
    } catch (err) {
      console.error('Failed to copy', found, '->', img, err.message);
      missing.push(img);
    }
  } else {
    console.warn(`No matching source for ${img} (looked for ${wantNorm})`);
    missing.push(img);
  }
}

if (missing.length) {
  console.log('\nMissing images that could not be matched:');
  for (const m of missing) console.log(' -', m);
  process.exit(2);
}

console.log('\nAll images copied successfully.');
