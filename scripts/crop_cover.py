import fitz
from PIL import Image

doc = fitz.open('public/ASTRO 2026 FINAL mike copy (1).pdf')
p1 = doc[0]

# Render Page 1 to high res PNG
pix = p1.get_pixmap(dpi=200)
pix.save('public/pdf_preview/cover_200dpi.png')

print(f"Cover rendered: {pix.width}x{pix.height}")

# Let's crop the right-hand side of the cover where the 3D product render is!
im = Image.open('public/pdf_preview/cover_200dpi.png')
w, h = im.size

# Cover has text on left, 3D product model on right
# Let's crop the right half
crop_right = im.crop((int(w * 0.42), 0, w, h))
crop_right.save('public/pdf_preview/cover_product_hero.png')
print("Cropped cover_product_hero.png")

# Also let's crop the logo from the top right / top left
# Check image xref 159, 161, 162
b159 = doc.extract_image(159)
with open('public/pdf_preview/cover_logo_159.png', 'wb') as f:
    f.write(b159['image'])

b161 = doc.extract_image(161)
with open('public/pdf_preview/cover_badge_161.png', 'wb') as f:
    f.write(b161['image'])

b162 = doc.extract_image(162)
with open('public/pdf_preview/cover_badge_162.png', 'wb') as f:
    f.write(b162['image'])

print("Cover components saved.")
