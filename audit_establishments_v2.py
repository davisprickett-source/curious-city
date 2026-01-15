import os
import re

directory = 'src/data/cities'
files = [f for f in os.listdir(directory) if f.endswith('.ts') and f != 'index.ts']

report = []

for filename in files:
    path = os.path.join(directory, filename)
    with open(path, 'r') as f:
        content = f.read()
    
    # Categories we care about
    target_categories = ['bars', 'restaurants', 'coffee-shops', 'cafes']
    
    for cat in target_categories:
        # Find category: 'cat'
        # We search for the pattern and then look for the spots array
        cat_pattern = rf"category:\s*'{cat}'"
        cat_matches = list(re.finditer(cat_pattern, content))
        
        for cat_match in cat_matches:
            # Find the next 'spots: ['
            spots_start = content.find('spots: [', cat_match.end())
            if spots_start == -1:
                continue
            
            # Find the end of the spots array (count brackets)
            bracket_count = 0
            spots_end = -1
            for i in range(spots_start + 7, len(content)):
                if content[i] == '[':
                    bracket_count += 1
                elif content[i] == ']':
                    if bracket_count == 0:
                        spots_end = i + 1
                        break
                    bracket_count -= 1
            
            if spots_end != -1:
                spots_content = content[spots_start:spots_end]
                
                # Find individual spots in the spots_content
                spot_matches = re.finditer(r"\{\s*name:\s*'([^']*)'", spots_content)
                
                for match in spot_matches:
                    name = match.group(1)
                    start_pos = match.start()
                    
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
                            report.append(f"{filename} [{cat}]: {name} is missing {', '.join(missing)}")

for line in report:
    print(line)
