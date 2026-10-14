import fitz
from PIL import Image
import numpy as np

# Let's inspect where products are on section pages and make clean 3D crops
doc = fitz.open('public/ASTRO 2026 FINAL mike copy (1).pdf')

# Let's check cover product hero bounds
im_hero = Image.open('public/pdf_preview/cover_product_hero.png')
arr = np.array(im_hero)
# find non-white bounds in the image
# White is > 245 in R, G, B
mask = (arr[:, :, 0] < 245) | (arr[:, :, 1] < 245) | (arr[:, :, 2] < 245)
coords = np.argwhere(mask)
if len(coords) > 0:
    y0, x0 = coords.min(axis=0)
    y1, x1 = coords.max(axis=0)
    print(f"Cover product bounds: x=[{x0}, {x1}], y=[{y0}, {y1}]")
    cropped = im_hero.crop((x0, y0, x1, y1))
    cropped.save('public/products_3d/hero_cover_3d.png')
    print("Saved public/products_3d/hero_cover_3d.png")

# Let's extract 3D crops from section divider pages
# Let's check section_p3.png, section_p19.png, section_p30.png, section_p41.png, section_p43.png, section_p49.png, section_p55.png, section_p60.png, section_p64.png, section_p89.png, section_p107.png, section_p120.png, section_p132.png, section_p139.png
sections = [
    (3, 'catch_basin_3d'),
    (19, 'septic_tank_3d'),
    (30, 'grease_trap_3d'),
    (41, 'distribution_box_3d'),
    (43, 'leaching_galley_3d'),
    (49, 'low_dome_3d'),
    (55, 'high_dome_3d'),
    (60, 'curb_stop_3d'),
    (64, 'slab_3d'),
    (89, 'solid_ring_3d'),
    (107, 'sanitary_ring_3d'),
    (120, 'storm_ring_3d'),
    (132, 'footing_ring_3d'),
    (139, 'high_collar_3d'),
]

for pno, name in sections:
    page = doc[pno-1]
    pix = page.get_pixmap(dpi=200)
    im = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
    arr = np.array(im)
    
    # Typically, the bottom or right region has the 3D render, or middle-bottom
    # Let's inspect where the colored product render is (ignoring top text area y < 400 and headers)
    # The header is at y < 550
    # Let's crop y from 450 to 1600, x from 200 to 2000
    sub_arr = arr[400:1650, 100:2100]
    sub_mask = (sub_arr[:, :, 0] < 240) | (sub_arr[:, :, 1] < 240) | (sub_arr[:, :, 2] < 240)
    sub_coords = np.argwhere(sub_mask)
    if len(sub_coords) > 0:
        sy0, sx0 = sub_coords.min(axis=0)
        sy1, sx1 = sub_coords.max(axis=0)
        # map back
        real_y0 = max(0, 400 + sy0 - 20)
        real_y1 = min(im.height, 400 + sy1 + 20)
        real_x0 = max(0, 100 + sx0 - 20)
        real_x1 = min(im.width, 100 + sx1 + 20)
        
        prod_crop = im.crop((real_x0, real_y0, real_x1, real_y1))
        prod_crop.save(f'public/products_3d/{name}.png')
        print(f"Saved {name}.png ({prod_crop.width}x{prod_crop.height})")
