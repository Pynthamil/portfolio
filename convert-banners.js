const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = 'public/assets/blog/';
const banners = ['banner1.svg', 'banner2.svg', 'banner3.svg', 'banner4.svg'];

async function convert() {
  for (const file of banners) {
    const filePath = path.join(dir, file);
    if (fs.existsSync(filePath)) {
      const dest = filePath.replace('.svg', '.webp');
      console.log(`Converting ${file}...`);
      await sharp(filePath).webp({ quality: 80 }).toFile(dest);
      fs.unlinkSync(filePath);
    }
  }
}

convert().then(() => console.log('Done')).catch(console.error);
