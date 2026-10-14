import fitz

doc = fitz.open('public/ASTRO 2026 FINAL mike copy (1).pdf')

pages = [
    (1, 'Cover'),
    (3, 'Catch Basins'),
    (19, 'Septic Tanks'),
    (30, 'Grease Traps'),
    (41, 'Distribution Boxes'),
    (43, 'Leaching Galleys'),
    (49, 'Low Domes'),
    (55, 'High Domes'),
    (60, 'Curb Stops'),
    (64, 'Slabs'),
    (89, 'Solid Rings'),
    (107, 'Sanitary Rings'),
    (120, 'Storm Rings'),
    (132, 'Footing Rings'),
    (139, 'High Collars')
]

for pno, name in pages:
    page = doc[pno-1]
    imgs = page.get_images()
    print(f'Page {pno} ({name}): {len(imgs)} images')
    for img in imgs:
        b = doc.extract_image(img[0])
        print(f"   xref {img[0]}: {b['width']}x{b['height']} {b['ext']}")
