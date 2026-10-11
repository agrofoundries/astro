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
    // Find any mentions of revslider or civil-engineering-split-screen
    const matches = data.match(/civil-engineering-split-screen-wordpress-slider\/[^"'<>\s]+/gi) || [];
    console.log('Revslider files in page:');
    console.log(Array.from(new Set(matches)));

    // Let's also check for revslider json or config
    const revConfig = data.match(/revslider[a-zA-Z0-9_-]*/gi) || [];
    console.log('Rev mentions count:', revConfig.length);

    // Save full page content to inspect slide text and structure
    fs.writeFileSync('scripts/page_dump.html', data);
    console.log('Saved page_dump.html');
  });
});
