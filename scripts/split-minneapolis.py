#!/usr/bin/env python3
"""
Split Minneapolis monolithic city file into modular collections.
This preserves all content while organizing into separate files.
"""

import re
import json

# Read the entire Minneapolis file
with open('src/data/cities/minneapolis.ts', 'r') as f:
    content = f.read()

# Extract city metadata (before content array)
metadata_match = re.search(r'export const minneapolis: CityData = \{([^}]*?)\n  content:', content, re.DOTALL)
if not metadata_match:
    print("ERROR: Could not find city metadata")
    exit(1)

metadata_block = metadata_match.group(1).strip()

# Parse metadata fields
slug_match = re.search(r"slug: '([^']+)'", metadata_block)
name_match = re.search(r"name: '([^']+)'", metadata_block)
tagline_match = re.search(r"tagline: '([^']+)'", metadata_block)
hero_match = re.search(r'heroImage: \{([^}]+)\}', metadata_block, re.DOTALL)

slug = slug_match.group(1) if slug_match else 'minneapolis'
name = name_match.group(1) if name_match else 'Minneapolis'
tagline = tagline_match.group(1) if tagline_match else ''
hero_image = hero_match.group(1).strip() if hero_match else ''

# Create config.ts
config_content = f"""import {{ CityMetadata }} from '@/types/content'

export const config: CityMetadata = {{
  slug: '{slug}',
  name: '{name}',
  state: 'Minnesota',
  tagline: '{tagline}',
  heroImage: {{
    {hero_image}
  }},
  location: {{
    lat: 44.9778,
    lng: -93.265,
  }},
}}
"""

with open('src/data/cities/minneapolis/config.ts', 'w') as f:
    f.write(config_content)

print("✓ Created config.ts")

# Now we need to extract each collection type
# Let's find the curiosities section first as an example

# Find curiosities section
curiosities_match = re.search(
    r"(\{\s*id: 'curiosities',\s*type: 'section',\s*title: '[^']*',\s*items: \[.*?\]\s*\})",
    content,
    re.DOTALL
)

if curiosities_match:
    curiosities_section = curiosities_match.group(1)

    # Extract the items array
    items_match = re.search(r'items: (\[.*\])', curiosities_section, re.DOTALL)
    if items_match:
        items_content = items_match.group(1)

        # Create curiosities.ts
        curiosities_file = f"""import {{ CuriosityContentItem }} from '@/types/content'

export const curiosities: CuriosityContentItem[] = {items_content}
"""

        with open('src/data/cities/minneapolis/collections/curiosities.ts', 'w') as f:
            f.write(curiosities_file)

        print("✓ Created collections/curiosities.ts")

# Find dark history section
dark_history_match = re.search(
    r"(\{\s*id: 'dark-history',\s*type: 'section',\s*title: '[^']*',\s*items: \[.*?\]\s*\})",
    content,
    re.DOTALL
)

if dark_history_match:
    dark_history_section = dark_history_match.group(1)
    items_match = re.search(r'items: (\[.*\])', dark_history_section, re.DOTALL)
    if items_match:
        items_content = items_match.group(1)
        dark_history_file = f"""import {{ DarkHistoryContentItem }} from '@/types/content'

export const darkHistory: DarkHistoryContentItem[] = {items_content}
"""
        with open('src/data/cities/minneapolis/collections/dark-history.ts', 'w') as f:
            f.write(dark_history_file)
        print("✓ Created collections/dark-history.ts")

# Find hidden gems section
hidden_gems_match = re.search(
    r"(\{\s*id: 'hidden-gems',\s*type: 'section',\s*title: '[^']*',\s*items: \[.*?\]\s*\})",
    content,
    re.DOTALL
)

if hidden_gems_match:
    hidden_gems_section = hidden_gems_match.group(1)
    items_match = re.search(r'items: (\[.*\])', hidden_gems_section, re.DOTALL)
    if items_match:
        items_content = items_match.group(1)
        hidden_gems_file = f"""import {{ HiddenGemContentItem }} from '@/types/content'

export const hiddenGems: HiddenGemContentItem[] = {items_content}
"""
        with open('src/data/cities/minneapolis/collections/hidden-gems.ts', 'w') as f:
            f.write(hidden_gems_file)
        print("✓ Created collections/hidden-gems.ts")

print("\n✓ Minneapolis split complete!")
print("\nNext steps:")
print("1. Manually review and complete remaining collection files")
print("2. Create index.ts to compose CityData from collections")
print("3. Test that all pages still work")
