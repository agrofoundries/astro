import fitz

doc = fitz.open("public/ASTRO 2026 FINAL mike copy (1).pdf")

sections = [
    (4, 17, "Catch Basins"),
    (18, 28, "Septic Tanks"),
    (29, 39, "Grease Traps"),
    (40, 41, "Distribution Boxes"),
    (42, 47, "Leaching Galleys"),
    (48, 53, "Low Domes"),
    (54, 58, "High Domes"),
    (59, 62, "Curb Stops"),
    (63, 84, "Precast Slabs"),
    (85, 102, "Solid Rings"),
    (103, 115, "Sanitary Rings"),
    (116, 127, "Storm Rings"),
    (128, 134, "Footings"),
    (135, 140, "High Collars"),
]

for start, end, label in sections:
    print(f"\n=======================================================")
    print(f"=== {label.upper()} (Pages {start} - {end}) ===")
    print(f"=======================================================")
    for p in range(start - 1, min(end, len(doc))):
        text = doc[p].get_text()
        lines = [l.strip() for l in text.splitlines() if l.strip()]
        print(f"\n--- PAGE {p+1} ---")
        for line in lines[:25]:
            print(f"  {line}")
