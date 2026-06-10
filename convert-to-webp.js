const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'assets', 'blog');
const files = fs.readdirSync(dir);

async function processFiles() {
  for (const file of files) {
    if (file.endsWith('.svg')) {
      const filePath = path.join(dir, file);
      const webpPath = path.join(dir, file.replace('.svg', '.webp'));
      try {
        await sharp(filePath)
          .webp({ quality: 80 })
          .toFile(webpPath);
        console.log(`Converted ${file} to WebP`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
}

processFiles();
