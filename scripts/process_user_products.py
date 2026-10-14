import os
import shutil
from PIL import Image
import numpy as np

base_src = 'public/products-image'
web_dest = 'public/products-image-web'
os.makedirs(web_dest, exist_ok=True)

# Map category directory to friendly name and best representative images
catalog_def = [
    {
        'id': 'catch-basins',
        'category': 'Catch Basins',
        'dir': 'catch basins',
        'sample': 'catch basins/4 Inch/Renders/18 inch.png',
        'drawing': '/downloads/drawings/Astro-Catch-Basins-Drawings.pdf',
        'drawingFilename': 'Astro-Catch-Basins-Drawings.pdf',
        'title': 'Precast Catch Basin System',
        'desc': 'Monolithic concrete storm drainage catch basin with reinforced walls, custom pipe knockouts, and AASHTO HS20-44 highway traffic rating.',
        'dimensions': '18" to 48" Diameters',
        'rating': 'AASHTO HS20-44'
    },
    {
        'id': 'septic-tanks',
        'category': 'Septic Tanks',
        'dir': 'Septic tank',
        'sample': 'Septic tank/Regular size/Render/1000 G Septic tank (1).png',
        'drawing': '/downloads/drawings/Astro-Septic-Tanks-Drawings.pdf',
        'drawingFilename': 'Astro-Septic-Tanks-Drawings.pdf',
        'title': 'Precast Septic Tank (Monolithic)',
        'desc': 'Heavy-duty precast residential and commercial septic tank engineered for watertight wastewater containment with internal baffles.',
        'dimensions': '1,000 to 2,500 Gallons',
        'rating': 'ASTM C1227 Watertight'
    },
    {
        'id': 'leaching-galleys',
        'category': 'Leaching Galleys',
        'dir': 'LEACHING GALLEYS',
        'sample': 'LEACHING GALLEYS/Renders/4 FT Leaching Galley.242.jpg',
        'drawing': '/downloads/drawings/Astro-Leaching-Galleys-Drawings.pdf',
        'drawingFilename': 'Astro-Leaching-Galleys-Drawings.pdf',
        'title': 'Precast Leaching Galley (High-Flow)',
        'desc': 'Perforated precast stormwater infiltration galley designed for maximum soil percolation and groundwater recharge across Long Island.',
        'dimensions': '4 FT Standard Height',
        'rating': 'Suffolk DPW Approved'
    },
    {
        'id': 'circular-slabs',
        'category': 'Circular Slabs',
        'dir': 'Circular Slab',
        'sample': 'Circular Slab/Renders/10-10 solid slab.png',
        'drawing': '/downloads/drawings/Astro-Slabs-Drawings.pdf',
        'drawingFilename': 'Astro-Slabs-Drawings.pdf',
        'title': 'Circular Traffic Slab',
        'desc': 'Reinforced circular precast cover slab designed to withstand extreme highway wheel loads over subterranean drainage chambers.',
        'dimensions': "6' to 12' Diameters",
        'rating': 'AASHTO HS20-44'
    },
    {
        'id': 'grease-traps',
        'category': 'Grease Traps',
        'dir': 'Grease trap',
        'sample': 'Grease trap/Regular size/Renders/1000 G Grease Trap.png',
        'drawing': '/downloads/drawings/Astro-Grease-Traps-Drawings.pdf',
        'drawingFilename': 'Astro-Grease-Traps-Drawings.pdf',
        'title': 'Precast Commercial Grease Interceptor',
        'desc': 'Commercial kitchen FOG interceptor built with acid-resistant concrete mix and sanitary inspection manholes.',
        'dimensions': '1,000 to 1,500 Gallons',
        'rating': 'Suffolk Health Dept'
    },
    {
        'id': 'd-boxes',
        'category': 'Distribution Boxes',
        'dir': 'D Box',
        'sample': 'D Box/Render/distribution box.png',
        'drawing': '/downloads/drawings/Astro-Distribution-Boxes-Drawings.pdf',
        'drawingFilename': 'Astro-Distribution-Boxes-Drawings.pdf',
        'title': 'Precast Distribution Box',
        'desc': 'Flow distribution box with multiple knockout ports and pipe seals for balanced effluent discharge to absorption fields.',
        'dimensions': '6-Hole Monolithic',
        'rating': 'Watertight Precast'
    },
    {
        'id': 'solid-rings',
        'category': 'Solid Rings',
        'dir': 'Solid ring',
        'sample': 'Solid ring/Render/10-3 solid ring.png',
        'drawing': '/downloads/drawings/Astro-Solid-Rings-Drawings.pdf',
        'drawingFilename': 'Astro-Solid-Rings-Drawings.pdf',
        'title': 'Precast Solid Riser Ring',
        'desc': 'Solid concrete grade ring for precise height adjustment of manholes, catch basins, and utility vaults to road grade.',
        'dimensions': '4" to 12" Heights',
        'rating': 'ASTM C478 Grade'
    },
    {
        'id': 'sanitary-rings',
        'category': 'Sanitary Rings',
        'dir': 'Sanitary Ring',
        'sample': 'Sanitary Ring/Renders/10-3 SANITARY RING.png',
        'drawing': '/downloads/drawings/Astro-Sanitary-Rings-Drawings.pdf',
        'drawingFilename': 'Astro-Sanitary-Rings-Drawings.pdf',
        'title': 'Precast Sanitary Riser Ring',
        'desc': 'Interlocking tongue-and-groove sanitary riser section with gasketed joint for municipal sanitary sewer manholes.',
        'dimensions': '30" to 48" ID',
        'rating': '5,000+ PSI Concrete'
    },
    {
        'id': 'storm-rings',
        'category': 'Storm Rings',
        'dir': 'Storm ring',
        'sample': 'Storm ring/Renders/10-4 STORM RING.5234.png',
        'drawing': '/downloads/drawings/Astro-Storm-Rings-Drawings.pdf',
        'drawingFilename': 'Astro-Storm-Rings-Drawings.pdf',
        'title': 'Precast Storm Drainage Ring',
        'desc': 'Heavy-wall round concrete storm section engineered for deep vertical storm sewer drywell installations.',
        'dimensions': '10-4 Standard Section',
        'rating': 'AASHTO HS20-44'
    },
    {
        'id': 'footing-rings',
        'category': 'Footing Rings',
        'dir': 'Footing Ring',
        'sample': 'Footing Ring/Renders/6 FT FOOTING RING.5046.png',
        'drawing': '/downloads/drawings/Astro-Footings-Drawings.pdf',
        'drawingFilename': 'Astro-Footings-Drawings.pdf',
        'title': 'Precast Base Footing Ring',
        'desc': 'Flanged base footing collar providing broad load distribution and foundational stability in sandy or wet soils.',
        'dimensions': "4' to 12' Diameters",
        'rating': 'High Bearing Foundation'
    },
    {
        'id': 'high-domes',
        'category': 'High Domes',
        'dir': 'High Dome',
        'sample': 'High Dome/Renders/8 FTHIGH DOME.1678.png',
        'drawing': '/downloads/drawings/Astro-High-Domes-Drawings.pdf',
        'drawingFilename': 'Astro-High-Domes-Drawings.pdf',
        'title': 'Precast High Dome Cone Top',
        'desc': 'Tapered conical dome top transitioning large drywell or cesspool diameters to standard 24" or 30" street access frames.',
        'dimensions': "6' to 10' Diameters",
        'rating': 'AASHTO HS20-44'
    },
    {
        'id': 'low-domes',
        'category': 'Low Domes',
        'dir': 'LOW DOME',
        'sample': 'LOW DOME/Renders/8 FT LOW DOME.5049.png',
        'drawing': '/downloads/drawings/Astro-Low-Domes-Drawings.pdf',
        'drawingFilename': 'Astro-Low-Domes-Drawings.pdf',
        'title': 'Precast Low Dome Top',
        'desc': 'Low-profile transition top engineered for shallow subgrade depths where vertical overhead clearance is constrained.',
        'dimensions': "6' to 12' Low Profile",
        'rating': 'AASHTO HS20-44'
    },
    {
        'id': 'high-collars',
        'category': 'High Collars',
        'dir': 'High collar',
        'sample': 'High collar/Renders/18 Inch High Collar.png',
        'drawing': '/downloads/drawings/Astro-High-Collars-Drawings.pdf',
        'drawingFilename': 'Astro-High-Collars-Drawings.pdf',
        'title': 'Precast High Collar Section',
        'desc': 'Tall cylindrical collar section providing vertical clearance and easy access riser height above precast tanks.',
        'dimensions': '6" to 24" Collar Heights',
        'rating': 'ASTM C478 Spec'
    },
    {
        'id': 'curb-stops',
        'category': 'Curb Stops',
        'dir': 'Curb Stop',
        'sample': 'Curb Stop/Renders/5.5 Curb Stop.239.png',
        'drawing': '/downloads/drawings/Astro-Curb-Stops-Drawings.pdf',
        'drawingFilename': 'Astro-Curb-Stops-Drawings.pdf',
        'title': 'Precast Concrete Curb Stop',
        'desc': 'Heavy-duty commercial parking bumper with cast-in anchor holes and beveled edges to protect vehicular tires.',
        'dimensions': '5.5 FT Standard Length',
        'rating': 'Commercial Parking'
    },
    {
        'id': 'gravity-blocks',
        'category': 'Gravity Blocks',
        'dir': 'Gravity Block',
        'sample': 'Gravity Block/Renders/Gravity Block.241.png',
        'drawing': '/downloads/drawings/Astro-Catch-Basins-Drawings.pdf',
        'drawingFilename': 'Astro-Catch-Basins-Drawings.pdf',
        'title': 'Precast Gravity Retaining Block',
        'desc': 'Interlocking high-mass concrete block designed for earth retention, soil stabilization, and material bulk storage bays.',
        'dimensions': 'Modular Interlock Block',
        'rating': '5,000+ PSI Monolithic'
    },
    {
        'id': 'trench-grates',
        'category': 'Trench Grates',
        'dir': 'Trench Grate',
        'sample': 'Trench Grate/Renders/12 FT  SIDE INTERLOCK.1721.png',
        'drawing': '/downloads/drawings/Astro-Catch-Basins-Drawings.pdf',
        'drawingFilename': 'Astro-Catch-Basins-Drawings.pdf',
        'title': 'Precast Linear Trench Grate Section',
        'desc': 'Continuous linear drainage channel with heavy cast-iron grating frame for rapid surface runoff along roadways and loading docks.',
        'dimensions': '12 FT Interlocking Section',
        'rating': 'Heavy Industrial Traffic'
    }
]

for item in catalog_def:
    src_path = os.path.join(base_src, item['sample'])
    dest_filename = f"{item['id']}.png"
    dest_path = os.path.join(web_dest, dest_filename)
    
    if not os.path.exists(src_path):
        print('MISSING:', src_path)
        continue
        
    im = Image.open(src_path)
    if im.mode != 'RGBA':
        im = im.convert('RGBA')
        # If background is white (e.g. for JPEG), make it transparent
        arr = np.array(im)
        mask = (arr[:,:,0] > 240) & (arr[:,:,1] > 240) & (arr[:,:,2] > 240)
        arr[mask, 3] = 0
        im = Image.fromarray(arr)
        
    # Crop to non-transparent bounding box
    bbox = im.getbbox()
    if bbox:
        # Add 4% padding
        w, h = im.size
        pad_x = int((bbox[2] - bbox[0]) * 0.04)
        pad_y = int((bbox[3] - bbox[1]) * 0.04)
        crop_box = (
            max(0, bbox[0] - pad_x),
            max(0, bbox[1] - pad_y),
            min(w, bbox[2] + pad_x),
            min(h, bbox[3] + pad_y)
        )
        im = im.crop(crop_box)
        
    # Resize nicely if oversized (max width 1200)
    if im.width > 1200:
        ratio = 1200 / im.width
        new_size = (1200, int(im.height * ratio))
        im = im.resize(new_size, Image.Resampling.LANCZOS)
        
    im.save(dest_path)
    print(f"Processed [{item['category']}] -> {dest_path} ({im.size})")

print('All 16 categories successfully processed!')
