#!/bin/bash

# Replace old low-quality Minneapolis sequences with new HQ versions
# This will:
# 1. Move old versions to *_old_lq backup folders
# 2. Move HQ versions to the main sequence folders
# 3. Delete upscaled/test folders

OUTPUT_BASE="/Users/dav/Projects/Curious City/public/sequences/minneapolis"

echo "Replacing old sequences with HQ versions..."
echo ""

cd "$OUTPUT_BASE" || exit 1

# For each HQ directory
for hq_dir in minn-*-hq; do
    if [ -d "$hq_dir" ]; then
        # Extract base name (e.g., "minn-2" from "minn-2-hq")
        base_name="${hq_dir%-hq}"

        echo "Processing $base_name..."

        # Backup old version if it exists
        if [ -d "$base_name" ]; then
            echo "  Backing up old version to ${base_name}_old_lq"
            mv "$base_name" "${base_name}_old_lq"
        fi

        # Move HQ version to main location
        echo "  Moving HQ version to $base_name"
        mv "$hq_dir" "$base_name"

        # Delete upscaled version if it exists
        if [ -d "${base_name}-upscaled" ]; then
            echo "  Deleting old upscaled version"
            rm -rf "${base_name}-upscaled"
        fi

        echo "  ✓ Done"
        echo ""
    fi
done

echo ""
echo "✓✓✓ Cleanup complete! ✓✓✓"
echo ""
echo "Summary:"
ls -d minn-* 2>/dev/null | while read dir; do
    if [[ ! "$dir" == *"_old_lq"* ]] && [[ ! "$dir" == *"_backup"* ]] && [[ ! "$dir" == *"-upscaled"* ]]; then
        count=$(ls -1 "$dir"/*.jpg 2>/dev/null | wc -l | tr -d ' ')
        echo "  $dir: $count HQ frames"
    fi
done
echo ""
echo "Old versions backed up in *_old_lq folders (delete manually if satisfied)"
