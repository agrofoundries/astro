from PIL import Image, ImageFilter
import numpy as np

im = Image.open('public/images/hero-precast-yard.jpg')
w, h = im.size

# Let's check the patch around x: [900, 1150], y: [160, 320]
# We can sample the plain concrete wall texture right next to it or above it
# and blend it seamlessly over the text so the wall is 100% clean, blank industrial concrete panels!

arr = np.array(im)

# Let's inspect where the logo is
# In the screenshot, the logo is on the white/grey panel of the building facade behind the yellow/red crane
# Let's save a coordinate grid preview
debug_im = im.copy()
from PIL import ImageDraw
draw = ImageDraw.Draw(debug_im)

# The building is roughly x: [920, 1080], y: [190, 290]
draw.rectangle([920, 180, 1080, 300], outline="red", width=3)
debug_im.save('public/images/debug_grid.jpg')
print("Saved debug_grid.jpg")
