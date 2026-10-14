import re

with open('components/home/products-section.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

images = re.findall(r'image:\s*"([^"]+)"', text)
print(f'Total product images in products-section: {len(images)}')
for img in sorted(set(images)):
    print('  ', img)
