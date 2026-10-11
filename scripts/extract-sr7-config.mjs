import fs from 'node:fs';

const html = fs.readFileSync('scripts/page_dump.html', 'utf8');
const search = "SR7.JSON['SR7_3563_1'] =";
const start = html.indexOf(search);
if (start !== -1) {
  const end = html.indexOf('</script>', start);
  const jsonStr = html.substring(start + search.length, end).trim().replace(/;$/, '');
  fs.writeFileSync('scripts/sr7_config.json', jsonStr);
  console.log('Saved sr7_config.json, length:', jsonStr.length);
  try {
    const obj = JSON.parse(jsonStr);
    console.log('Top keys:', Object.keys(obj));
    console.log('Slide keys in obj.slides:', obj.slides ? Object.keys(obj.slides) : 'none');
    if (obj.slides) {
      for (const [key, val] of Object.entries(obj.slides)) {
        console.log(`Slide ${key}: title =`, val.title, 'layers count =', val.layers ? Object.keys(val.layers).length : 0);
      }
    }
  } catch (e) {
    console.error('Parse error:', e.message);
  }
} else {
  console.log('Search not found');
}
