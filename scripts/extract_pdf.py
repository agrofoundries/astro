import fitz
import os
from PIL import Image

pdf_path = 'public/ASTRO 2026 FINAL mike copy (1).pdf'
doc = fitz.open(pdf_path)

os.makedirs('public/extracted_assets', exist_ok=True)
os.makedirs('public/pdf_preview', exist_ok=True)

# Save images from pages
saved_xrefs = set()
for pno in range(len(doc)):
    page = doc[pno]
    for idx, img in enumerate(page.get_images()):
        xref = img[0]
        if xref in saved_xrefs:
            continue
        saved_xrefs.add(xref)
        b = doc.extract_image(xref)
        ext = b['ext']
        w = b['width']
        h = b['height']
        # only save reasonable resolution assets
        if w > 100 and h > 100:
            fname = f'public/extracted_assets/p{pno+1}_xref{xref}_{w}x{h}.{ext}'
            with open(fname, 'wb') as f:
                f.write(b['image'])
            print(f'Saved: {fname}')
        if len(saved_xrefs) > 40:
            break
    if len(saved_xrefs) > 40:
        break

print('Extraction complete. Total unique images saved:', len(saved_xrefs))
