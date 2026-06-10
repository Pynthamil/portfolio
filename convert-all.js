const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = 'public/assets/blog/';
const files = fs.readdirSync(dir);

async function convert() {
  for (const file of files) {
    if (file.endsWith('.svg')) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.size > 100 * 1024) { // larger than 100KB
        const dest = filePath.replace('.svg', '.webp');
        console.log(`Converting ${file}...`);
        await sharp(filePath).webp({ quality: 80 }).toFile(dest);
        fs.unlinkSync(filePath); // delete original large SVG
      }
    }
  }
}

convert().then(() => console.log('Done')).catch(console.error);
