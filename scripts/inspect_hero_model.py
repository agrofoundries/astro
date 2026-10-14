from PIL import Image
import numpy as np

im = Image.open('public/pdf_preview/cover_sample_right.png')
print("cover_sample_right size:", im.size)

# Let's crop the actual 3D hero model from the cover
# The cover has a blue / sky background or white background. Let's inspect pixel colors:
arr = np.array(im)
print("Min, max, mean of cover_sample_right:", arr.min(), arr.max(), arr.mean(axis=(0,1)))

# Let's save a clean version for hero
im.save('public/products_3d/hero_cover_model.png')
print("Saved public/products_3d/hero_cover_model.png")
