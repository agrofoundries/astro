import os
import glob
import re

replacements = [
    # Hex codes
    ('#D4030C', '#00A3E0'),
    ('#d4030c', '#00A3E0'),
    ('#B50209', '#0284C7'),
    ('#b50209', '#0284C7'),
    ('#FFF2F2', '#E0F2FE'),
    ('#fff2f2', '#E0F2FE'),
    ('#FCD2D4', '#BAE6FD'),
    ('#fcd2d4', '#BAE6FD'),
    
    # Shadows
    ('shadow-red-600/25', 'shadow-sky-500/25'),
    ('shadow-red-600/30', 'shadow-sky-500/30'),
    ('shadow-red-500/20', 'shadow-sky-500/20'),
    ('shadow-red-500/30', 'shadow-sky-500/30'),
    ('shadow-red-600', 'shadow-sky-500'),
    ('shadow-red-500', 'shadow-sky-500'),
    
    # Borders
    ('border-red-200', 'border-sky-200'),
    ('border-red-300', 'border-sky-300'),
    ('border-red-100', 'border-sky-100'),
    ('border-red-500', 'border-sky-500'),
    
    # Backgrounds & Gradients
    ('bg-red-50', 'bg-sky-50'),
    ('bg-red-100', 'bg-sky-100'),
    ('bg-red-600', 'bg-[#00A3E0]'),
    ('bg-red-700', 'bg-[#0284C7]'),
    ('hover:bg-red-700', 'hover:bg-[#0284C7]'),
    ('hover:bg-red-600', 'hover:bg-[#00A3E0]'),
    ('from-red-600', 'from-[#00A3E0]'),
    ('to-red-700', 'to-[#0284C7]'),
    ('from-red-500', 'from-sky-400'),
    ('to-red-600', 'to-[#00A3E0]'),
    
    # Text
    ('text-red-600', 'text-[#0284C7]'),
    ('text-red-700', 'text-[#0369A1]'),
    ('text-red-500', 'text-[#00A3E0]'),
    ('text-red-400', 'text-sky-400'),
    ('hover:text-red-600', 'hover:text-[#00A3E0]'),
    ('hover:text-red-700', 'hover:text-[#0284C7]'),
]

files_changed = 0
total_replacements = 0

for ext in ['tsx', 'ts']:
    for path in glob.glob(f'**/*.{ext}', recursive=True):
        if 'node_modules' in path or '.next' in path or 'scripts' in path:
            continue
        try:
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            orig = content
            rep_count = 0
            for old, new in replacements:
                if old in content:
                    count = content.count(old)
                    rep_count += count
                    content = content.replace(old, new)
            
            if content != orig:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {path} ({rep_count} replacements)")
                files_changed += 1
                total_replacements += rep_count
        except Exception as e:
            print(f"Error on {path}: {e}")

print(f"\nDone! Modified {files_changed} files with {total_replacements} total replacements.")
