import os
import re

directory = 'src/data/cities'
files = [f for f in os.listdir(directory) if f.endswith('.ts') and f != 'index.ts']

report = []

for filename in files:
    path = os.path.join(directory, filename)
    with open(path, 'r') as f:
        content = f.read()
    
    # Find sections like best-bars, best-restaurants, best-coffee-shops
    # These usually look like { id: '...', type: 'best-of', category: 'bars', ... spots: [ ... ] }
    
    sections = re.findall(r"\{\s*id:\s*'[^']*',\s*type:\s*'best-of',\s*category:\s*'([^']*)'.*?spots:\s*\[(.*?)\n\s*\]\s*\},", content, re.DOTALL)
    
    for category, spots_content in sections:
        # Find individual spots in the spots_content
        spots = re.findall(r"\{\s*name:\s*'([^']*)'.*?\}", spots_content, re.DOTALL)
        
        # We need to re-find the full content of each spot to check for fields
        spot_matches = re.finditer(r"\{\s*name:\s*'([^']*)'", spots_content)
        
        for match in spot_matches:
            name = match.group(1)
            start_pos = match.start()
            
            # Find the end of this object
            # This is tricky with nested objects (like images: []), so we count braces
            brace_count = 0
            end_pos = -1
            for i in range(start_pos, len(spots_content)):
                if spots_content[i] == '{':
                    brace_count += 1
                elif spots_content[i] == '}':
                    brace_count -= 1
                    if brace_count == 0:
                        end_pos = i + 1
                        break
            
            if end_pos != -1:
                obj_content = spots_content[start_pos:end_pos]
                missing = []
                if 'website:' not in obj_content:
                    missing.append('website')
                if 'instagram:' not in obj_content:
                    missing.append('instagram')
                if 'coordinates:' not in obj_content or 'address:' not in obj_content:
                    missing.append('directions')
                
                if missing:
                    report.append(f"{filename} [{category}]: {name} is missing {', '.join(missing)}")

for line in report:
    print(line)
