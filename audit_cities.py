import os
import re

directory = 'src/data/cities'
files = [f for f in os.listdir(directory) if f.endswith('.ts') and f != 'index.ts']

report = []

for filename in files:
    path = os.path.join(directory, filename)
    with open(path, 'r') as f:
        content = f.read()
    
    # Simple regex to find blocks that look like establishments
    # They usually start with name: '...'
    # and end with a closing brace.
    # We look for blocks inside spots: [ ... ] or items: [ ... ]
    
    # Find all occurrences of name: '...'
    matches = re.finditer(r"name:\s*'([^']*)'", content)
    
    for match in matches:
        name = match.group(1)
        start_pos = match.start()
        
        # Find the surrounding object (roughly)
        # We search forward for the next } and backward for the previous {
        end_obj = content.find('}', start_pos)
        start_obj = content.rfind('{', 0, start_pos)
        
        obj_content = content[start_obj:end_obj+1]
        
        # Only check if it looks like an establishment (has address or vibe or category)
        if 'address' in obj_content or 'vibe' in obj_content or 'category' in obj_content:
            missing = []
            if 'website:' not in obj_content:
                missing.append('website')
            if 'instagram:' not in obj_content:
                missing.append('instagram')
            if 'coordinates:' not in obj_content and 'address:' not in obj_content:
                missing.append('directions')
            
            if missing:
                report.append(f"{filename}: {name} is missing {', '.join(missing)}")

for line in report:
    print(line)
