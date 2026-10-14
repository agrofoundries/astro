from PIL import Image, ImageFilter
import numpy as np

im = Image.open('public/images/hero-precast-yard.jpg')
arr = np.array(im)

# Let's clean the wall logo:
# The wall with the logo is between x = 940 and x = 1040, y = 205 and y = 280
# Notice that the wall immediately below and behind has a uniform off-white/light grey panel color
# Let's clone clean wall texture and feather the edges seamlessly

# Wall color sample from clean area around y: [260, 290], x: [940, 1040] or above
# Let's take the clean wall area right above or to the right:
clean_patch = im.crop((950, 275, 1030, 295)) # clean concrete section
clean_patch_resized = clean_patch.resize((100, 75), Image.Resampling.LANCZOS)

# Create feathered mask
mask = Image.new('L', (100, 75), 0)
from PIL import ImageDraw
draw = ImageDraw.Draw(mask)
draw.rectangle([10, 10, 90, 65], fill=255)
mask = mask.filter(ImageFilter.GaussianBlur(radius=8))

# Paste clean patch over logo at (945, 205)
im.paste(clean_patch_resized, (945, 205), mask)

# Also let's check the small blue sign on the building to the right (around x: [1080, 1140], y: [270, 310])
# Let's also clean any text from that blue sign or wall:
blue_sign_clean = im.crop((1080, 310, 1140, 325)).resize((65, 35), Image.Resampling.LANCZOS)
mask2 = Image.new('L', (65, 35), 0)
draw2 = ImageDraw.Draw(mask2)
draw2.rectangle([8, 8, 57, 27], fill=255)
mask2 = mask2.filter(ImageFilter.GaussianBlur(radius=6))
im.paste(blue_sign_clean, (1080, 275), mask2)

# Save cleaned image
im.save('public/images/hero-precast-yard.jpg', quality=95)
print("Successfully removed all logos and signs from the factory walls!")
