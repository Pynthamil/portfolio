const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src/app/coding/[slug]/page.tsx');
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/\/assets\/codedex\/([a-zA-Z0-9_-]+)\.svg/g, '/assets/codedex/$1.webp');
fs.writeFileSync(file, content);
console.log("Updated page.tsx");
