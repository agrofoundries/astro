import shutil
import os
from PIL import Image, ImageFilter

os.makedirs('public/images/products_3d', exist_ok=True)

mapping = {
    'catch_basin_3d': 'catch-basin-3d.png',
    'septic_tank_3d': 'septic-tank-3d.png',
    'grease_trap_3d': 'grease-trap-3d.png',
    'distribution_box_3d': 'distribution-box-3d.png',
    'leaching_galley_3d': 'leaching-galley-3d.png',
    'low_dome_3d': 'low-dome-3d.png',
    'high_dome_3d': 'high-dome-3d.png',
    'curb_stop_3d': 'curb-stop-3d.png',
    'slab_3d': 'precast-slab-3d.png',
    'solid_ring_3d': 'solid-ring-3d.png',
    'sanitary_ring_3d': 'sanitary-ring-3d.png',
    'storm_ring_3d': 'storm-ring-3d.png',
    'footing_ring_3d': 'footing-ring-3d.png',
    'high_collar_3d': 'high-collar-3d.png',
}

# 1. Copy transparent cutouts to public/images/products_3d/
for src_name, target_name in mapping.items():
    src_file = f'public/products_3d/transparent/{src_name}.png'
    if os.path.exists(src_file):
        dest_file = f'public/images/products_3d/{target_name}'
        shutil.copyfile(src_file, dest_file)
        print(f"Copied {src_file} -> {dest_file}")

# 2. Also create realistic 3D pedestal cards with subtle ambient glow and engineering grid
for src_name, target_name in mapping.items():
    src_file = f'public/products_3d/transparent/{src_name}.png'
    if not os.path.exists(src_file):
        continue
    
    prod_img = Image.open(src_file).convert('RGBA')
    # Create canvas 1200 x 900 with subtle gradient & 3D shadow
    card_w, card_h = 1200, 900
    canvas = Image.new('RGBA', (card_w, card_h), (255, 255, 255, 0))
    
    # Scale product to fit within 960 x 680
    prod_ratio = min(960 / prod_img.width, 680 / prod_img.height)
    new_w = int(prod_img.width * prod_ratio)
    new_h = int(prod_img.height * prod_ratio)
    prod_resized = prod_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Generate soft directional 3D shadow underneath
    shadow = Image.new('RGBA', (card_w, card_h), (0, 0, 0, 0))
    shadow_w = int(new_w * 0.85)
    shadow_h = int(new_h * 0.18)
    shadow_ellipse = Image.new('RGBA', (shadow_w, shadow_h), (14, 76, 143, 85)) # astro deep blue shadow
    # Mask with radial falloff
    from PIL import ImageDraw
    draw = ImageDraw.Draw(shadow)
    pos_x = (card_w - new_w) // 2
    pos_y = (card_h - new_h) // 2 - 20
    
    # draw shadow ellipse
    sh_x0 = (card_w - shadow_w) // 2
    sh_y0 = pos_y + new_h - int(shadow_h * 0.45)
    draw.ellipse([sh_x0, sh_y0, sh_x0 + shadow_w, sh_y0 + shadow_h], fill=(14, 76, 143, 60))
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=25))
    
    # Composite shadow then product
    canvas.alpha_composite(shadow)
    canvas.alpha_composite(prod_resized, (pos_x, pos_y))
    
    card_out = f'public/images/products_3d/card_{target_name}'
    canvas.save(card_out, format='PNG')
    print(f"Generated 3D pedestal asset: {card_out}")

print("3D product library preparation complete.")
