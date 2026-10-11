import fs from 'node:fs';

const raw = fs.readFileSync('scripts/sr7_config.json', 'utf8');
const lastBrace = raw.lastIndexOf('}');
const cleanJson = raw.substring(0, lastBrace + 1);
fs.writeFileSync('scripts/sr7_config_clean.json', cleanJson);

const obj = JSON.parse(cleanJson);
console.log('Top level keys:', Object.keys(obj));
console.log('addOns:', obj.addOns);
console.log('slides count:', obj.slides ? Object.keys(obj.slides).length : 0);

if (obj.slides) {
  for (const [sKey, sVal] of Object.entries(obj.slides)) {
    console.log(`\n--- SLIDE ${sKey} ---`);
    console.log('Title:', sVal.title);
    if (sVal.layers) {
      for (const [lKey, lVal] of Object.entries(sVal.layers)) {
        if (lVal.text || lVal.alias || lVal.type) {
          console.log(`  Layer ${lKey} (${lVal.alias || lVal.type}): text="${lVal.text?.text || lVal.text || ''}"`);
        }
      }
    }
  }
}
