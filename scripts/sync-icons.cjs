// Copies favicon and PWA icons from repo root into public/ so they are served at runtime
// This lets us use user-provided images without changing their upload location.
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pub = path.join(root, 'public');

const files = [
  'favicon.ico',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'apple-touch-icon.png',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'site.webmanifest',
];

if (!fs.existsSync(pub)) {
  fs.mkdirSync(pub, { recursive: true });
}

let copied = 0;
for (const f of files) {
  const src = path.join(root, f);
  const dest = path.join(pub, f);
  try {
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      copied++;
    }
  } catch (e) {
    console.warn(`[sync-icons] Skipped ${f}: ${e.message}`);
  }
}

// Ensure a local backup path /public/xyz/favicon.png exists (used as a shortcut fallback)
const backupDir = path.join(pub, 'xyz');
try {
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  const primarySource = path.join(pub, 'favicon-32x32.png');
  const backupDest = path.join(backupDir, 'favicon.png');
  if (fs.existsSync(primarySource)) {
    fs.copyFileSync(primarySource, backupDest);
  } else {
    // if the primary source wasn't copied into public yet, try copying from repo root if available
    const altSource = path.join(root, 'favicon-32x32.png');
    if (fs.existsSync(altSource)) {
      fs.copyFileSync(altSource, backupDest);
    }
  }
} catch (e) {
  console.warn(`[sync-icons] Failed to create backup favicon: ${e.message}`);
}

console.log(`[sync-icons] Copied ${copied} icon file(s) into public/`);
