const fs = require('fs');
const sharp = require('sharp');

async function convert() {
  await sharp('public/assets/blog/blog-1.svg').webp({ quality: 80 }).toFile('public/assets/blog/blog-1.webp');
  fs.unlinkSync('public/assets/blog/blog-1.svg');
}

convert().then(() => console.log('Done')).catch(console.error);
