#!/bin/bash

# Replace old low-quality Tampa sequences with new HQ versions

OUTPUT_BASE="/Users/dav/Projects/Curious City/public/sequences/tampa"

echo "Replacing old Tampa sequences with HQ versions..."
echo ""

cd "$OUTPUT_BASE" || exit 1

# For each HQ directory
for hq_dir in *-hq; do
    if [ -d "$hq_dir" ]; then
        # Extract base name (e.g., "tampa-2" from "tampa-2-hq")
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

        echo "  ✓ Done"
        echo ""
    fi
done

echo ""
echo "✓✓✓ Tampa cleanup complete! ✓✓✓"
echo ""
echo "Summary:"
ls -d tampa-* 2>/dev/null | while read dir; do
    if [[ ! "$dir" == *"_old_lq"* ]]; then
        count=$(ls -1 "$dir"/*.jpg 2>/dev/null | wc -l | tr -d ' ')
        echo "  $dir: $count HQ frames"
    fi
done
echo ""
