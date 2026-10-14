import re

with open('components/home/products-section.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Map old product images to our newly extracted 3D product images from the PDF
image_map = {
    '/images/products/septic-tank-2000g.png': '/images/products_3d/card_septic-tank-3d.png',
    '/images/products/septic-tank-1500g.png': '/images/products_3d/card_septic-tank-3d.png',
    '/images/products/septic-tank-1000g.png': '/images/products_3d/card_septic-tank-3d.png',
    '/images/products/grease-trap-2000g.png': '/images/products_3d/card_grease-trap-3d.png',
    '/images/products/grease-trap-1500g.png': '/images/products_3d/card_grease-trap-3d.png',
    '/images/products/grease-trap-1000g.png': '/images/products_3d/card_grease-trap-3d.png',
    '/images/products/cb-6-catch-basin.webp': '/images/products_3d/card_catch-basin-3d.png',
    '/images/products/catch-basin-side-inlet.webp': '/images/products_3d/card_catch-basin-3d.png',
    '/images/products/catch-basin-2ft.png': '/images/products_3d/card_catch-basin-3d.png',
    '/images/products/leaching-galley.png': '/images/products_3d/card_leaching-galley-3d.png',
    '/images/products/leaching-galley-lc6.png': '/images/products_3d/card_leaching-galley-3d.png',
    '/images/products/manhole-1050mm.webp': '/images/products_3d/card_solid-ring-3d.png',
    '/images/products/precast-reinforced-manhole.webp': '/images/products_3d/card_sanitary-ring-3d.png',
    '/images/products/catch-basin-system.png': '/images/products_3d/card_storm-ring-3d.png',
    '/images/products/b-01b.webp': '/images/products_3d/card_distribution-box-3d.png',
    '/images/products/b-01d.webp': '/images/products_3d/card_precast-slab-3d.png',
    '/images/products/b-01e.webp': '/images/products_3d/card_curb-stop-3d.png',
}

for old_img, new_img in image_map.items():
    if old_img in content:
        content = content.replace(old_img, new_img)
        print(f"Replaced {old_img} -> {new_img}")

# Also enhance VariableCard with 3D stage styling
card_old = '<div className="group flex flex-col h-full rounded-3xl overflow-hidden bg-white border border-[#CBD5E1] hover:border-[#032356] shadow-sm hover:shadow-2xl transition-all duration-300">'
card_new = '<div className="group astro-3d-card flex flex-col h-full rounded-3xl overflow-hidden bg-white border border-[#D0E2F2] hover:border-[#00A3E0] shadow-sm hover:shadow-2xl transition-all duration-300">'

img_stage_old = '<div className="relative h-64 sm:h-72 w-full bg-[#F4F6F9] border-b border-[#EBF1F8] flex items-center justify-center p-6 overflow-hidden group-hover:bg-[#EDF2F8] transition-colors">'
img_stage_new = '<div className="relative h-64 sm:h-72 w-full astro-3d-stage blueprint-grid-astro border-b border-[#D0E2F2] flex items-center justify-center p-4 overflow-hidden group-hover:bg-[#F0F6FC] transition-colors">'

if card_old in content:
    content = content.replace(card_old, card_new)
    print("Enhanced VariableCard with astro-3d-card")

if img_stage_old in content:
    content = content.replace(img_stage_old, img_stage_new)
    print("Enhanced Image stage with astro-3d-stage and blueprint-grid-astro")

with open('components/home/products-section.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated products-section.tsx with 3D product images from PDF catalog.")
