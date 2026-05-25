const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public/assets/project-cards');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));

async function extract() {
  for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), 'utf-8');
    const base64Match = content.match(/base64,([^"]+)/);
    if (base64Match) {
      const buffer = Buffer.from(base64Match[1], 'base64');
      // write temporary png
      fs.writeFileSync('temp.png', buffer);
      // we can't easily parse PNG in plain Node without a library.
      // let's just log the first few bytes of the IDAT chunk? No, better to just use a small JS library if it's there.
    }
  }
}
extract();
