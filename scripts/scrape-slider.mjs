import https from 'node:https';
import fs from 'node:fs';

const url = 'https://www.sliderrevolution.com/templates/civil-engineering-split-screen-wordpress-slider/';

https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    const imgRegex = /https:\/\/[^"'<>\s]+\.(?:jpg|jpeg|png|webp)/gi;
    const matches = Array.from(new Set(data.match(imgRegex) || []));
    console.log('Total images found:', matches.length);
    const relevant = matches.filter(m => m.includes('upload') || m.includes('civil') || m.includes('slider') || m.includes('split'));
    console.log('Relevant:', JSON.stringify(relevant, null, 2));

    // Also look for iframes or demo links
    const iframeRegex = /<iframe[^>]+src=["']([^"']+)["']/gi;
    let m;
    while ((m = iframeRegex.exec(data)) !== null) {
      console.log('Iframe:', m[1]);
    }

    // Look for revolution slider links
    const demoLinks = Array.from(new Set(data.match(/https:\/\/[^"'<>\s]*(?:demo|preview|templates)[^"'<>\s]*/gi) || []));
    console.log('Demo links:', JSON.stringify(demoLinks.slice(0, 10), null, 2));
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
