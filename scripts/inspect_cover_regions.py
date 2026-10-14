from PIL import Image
import numpy as np

# Let's inspect cover_200dpi.png
im = Image.open('public/pdf_preview/cover_200dpi.png')
print("Cover size:", im.size)

# Let's crop several sections of the cover to see what each part contains:
# Top right, center right, bottom right, center
w, h = im.size

# 1. Right side product
im.crop((int(w * 0.45), int(h * 0.15), w - 50, h - 100)).save('public/pdf_preview/cover_sample_right.png')

# 2. Top header / logo
im.crop((50, 50, 700, 300)).save('public/pdf_preview/cover_sample_logo.png')

# 3. Center title
im.crop((50, 300, 900, 800)).save('public/pdf_preview/cover_sample_title.png')

# 4. Bottom footer
im.crop((50, h - 250, w - 50, h - 50)).save('public/pdf_preview/cover_sample_footer.png')

print("Saved sample crops from cover.")
