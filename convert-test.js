const sharp = require('sharp');
sharp('public/assets/blog/LightMode.svg')
  .webp({ quality: 80 })
  .toFile('public/assets/blog/LightMode.webp')
  .then(() => console.log('Success!'))
  .catch(err => console.error(err));
