const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const dir = path.join(__dirname, 'public/assets/project-cards');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));

files.forEach(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf-8');
  const base64Match = content.match(/base64,([^"]+)/);
  if (base64Match) {
    const buffer = Buffer.from(base64Match[1], 'base64');
    new PNG().parse(buffer, function(error, data) {
      if (error) {
        console.log(file, 'error');
        return;
      }
      // get top-left pixel color
      const idx = 0; // (0,0)
      const r = data.data[idx];
      const g = data.data[idx + 1];
      const b = data.data[idx + 2];
      const a = data.data[idx + 3];
      const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      console.log(file, hex, 'Alpha:', a);
    });
  } else {
    console.log(file, 'no base64');
  }
});
