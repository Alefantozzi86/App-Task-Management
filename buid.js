const fs = require('fs');
const path = require('path');
const buildDir = path.resolve(__dirname, 'build');
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir);
}
const files = fs.readdirSync(__dirname);
files.forEach((file) => {
  if (file !== 'build.js' && file !== 'package.json') {
    const srcPath = path.resolve(__dirname, file);
    const destPath = path.resolve(buildDir, file);
    fs.copyFileSync(srcPath, destPath);
  }
});