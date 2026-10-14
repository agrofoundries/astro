import fitz

doc = fitz.open('public/ASTRO 2026 FINAL mike copy (1).pdf')

print('--- COVER PAGE TYPOGRAPHY & COLORS ---')
p1 = doc[0]
for b in p1.get_text('dict')['blocks']:
    if 'lines' in b:
        for l in b['lines']:
            for s in l['spans']:
                text = s['text'].strip()
                if text:
                    c = s['color']
                    hex_col = f"#{c:06x}"
                    print(f"Text: '{text}' | Font: {s['font']} | Size: {round(s['size'], 1)} | Color: {hex_col}")

print('\n--- PAGE 2 (TOC) TYPOGRAPHY & COLORS ---')
p2 = doc[1]
for b in p2.get_text('dict')['blocks']:
    if 'lines' in b:
        for l in b['lines']:
            for s in l['spans']:
                text = s['text'].strip()
                if text:
                    c = s['color']
                    hex_col = f"#{c:06x}"
                    print(f"Text: '{text}' | Font: {s['font']} | Size: {round(s['size'], 1)} | Color: {hex_col}")

print('\n--- PAGE 3 & 4 TYPOGRAPHY & COLORS ---')
for pno in [2, 3]:
    p = doc[pno]
    for b in p.get_text('dict')['blocks']:
        if 'lines' in b:
            for l in b['lines']:
                for s in l['spans']:
                    text = s['text'].strip()
                    if text:
                        c = s['color']
                        hex_col = f"#{c:06x}"
                        print(f"P{pno+1} Text: '{text}' | Font: {s['font']} | Size: {round(s['size'], 1)} | Color: {hex_col}")
