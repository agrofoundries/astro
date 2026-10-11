import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('public/images/slider-revolution');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const images = [
  'damdam.jpg',
  'viabg.jpg',
  'bridgebbb.jpg',
  'tunnelssss.jpg',
  'trainsss.jpg'
];

async function download(filename) {
  const url = `https://www.sliderrevolution.com/wp-content/uploads/revslider/civil-engineering-split-screen-wordpress-slider/${filename}`;
  const dest = path.join(outDir, filename);
  console.log(`Downloading ${url} -> ${dest}`);

  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed ${filename}: status ${res.statusCode}`);
        return resolve(false);
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Saved ${filename} (${fs.statSync(dest).size} bytes)`);
        resolve(true);
      });
    }).on('error', (err) => {
      console.error(`Error downloading ${filename}:`, err);
      resolve(false);
    });
  });
}

for (const img of images) {
  await download(img);
}
console.log('Download complete!');
