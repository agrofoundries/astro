import fitz

doc = fitz.open('public/ASTRO 2026 FINAL mike copy (1).pdf')

for pno in [4, 5, 6, 11]:
    page = doc[pno]
    print(f'=== Page {pno+1} ===')
    imgs = page.get_images()
    for img in imgs:
        xref = img[0]
        r = page.get_image_rects(xref)
        b = doc.extract_image(xref)
        print(f"  xref {xref}: rects={r}, size=({b['width']}, {b['height']}) ext={b['ext']}")
