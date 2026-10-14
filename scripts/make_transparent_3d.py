import os
from PIL import Image
import numpy as np

os.makedirs('public/products_3d/transparent', exist_ok=True)

names = [
    'catch_basin_3d',
    'septic_tank_3d',
    'grease_trap_3d',
    'distribution_box_3d',
    'leaching_galley_3d',
    'low_dome_3d',
    'high_dome_3d',
    'curb_stop_3d',
    'slab_3d',
    'solid_ring_3d',
    'sanitary_ring_3d',
    'storm_ring_3d',
    'footing_ring_3d',
    'high_collar_3d',
]

for name in names:
    src_path = f'public/products_3d/{name}.png'
    if not os.path.exists(src_path):
        continue
    im = Image.open(src_path).convert('RGBA')
    arr = np.array(im)
    
    # White background threshold
    # Look at pixels where R, G, B are all > 248
    r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
    
    # Calculate difference from white
    diff_from_white = 255 - np.minimum(np.minimum(r, g), b)
    
    # Create smooth alpha: 0 when diff < 8, 255 when diff > 25, linear between
    alpha = np.clip((diff_from_white - 8) * (255.0 / 18.0), 0, 255).astype(np.uint8)
    
    arr[:, :, 3] = alpha
    
    # Tight crop around non-transparent area
    coords = np.argwhere(alpha > 10)
    if len(coords) > 0:
        y0, x0 = coords.min(axis=0)
        y1, x1 = coords.max(axis=0)
        # Pad slightly
        pad = 10
        y0 = max(0, y0 - pad)
        y1 = min(arr.shape[0], y1 + pad)
        x0 = max(0, x0 - pad)
        x1 = min(arr.shape[1], x1 + pad)
        
        cropped_arr = arr[y0:y1, x0:x1]
        out_im = Image.fromarray(cropped_arr)
        out_path = f'public/products_3d/transparent/{name}.png'
        out_im.save(out_path, format='PNG')
        print(f"Created transparent cutout: {out_path} ({out_im.width}x{out_im.height})")

print("All transparent cutouts generated successfully.")
