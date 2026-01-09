#!/bin/bash
# Convert all sequence JPGs to WebP format
# Keeps original JPGs as backup

SEQUENCES_DIR="/Users/dav/Projects/Curious City/public/sequences"
QUALITY=80
CONVERTED=0
FAILED=0
START_TIME=$(date +%s)

echo "=== Starting WebP conversion ==="
echo "Quality: $QUALITY"
echo "Started at: $(date)"
echo ""

# Find all jpg files in sequences
find "$SEQUENCES_DIR" -name "*.jpg" -type f | while read jpg_file; do
    # Skip files in backup/old directories
    if [[ "$jpg_file" == *"_old_lq"* ]] || [[ "$jpg_file" == *"_backup"* ]]; then
        continue
    fi

    webp_file="${jpg_file%.jpg}.webp"

    # Skip if webp already exists
    if [ -f "$webp_file" ]; then
        continue
    fi

    # Convert to WebP
    if cwebp -q $QUALITY "$jpg_file" -o "$webp_file" 2>/dev/null; then
        ((CONVERTED++))
        # Print progress every 100 files
        if [ $((CONVERTED % 100)) -eq 0 ]; then
            echo "Converted: $CONVERTED frames..."
        fi
    else
        ((FAILED++))
        echo "FAILED: $jpg_file"
    fi
done

END_TIME=$(date +%s)
DURATION=$((END_TIME - START_TIME))

echo ""
echo "=== Conversion complete ==="
echo "Finished at: $(date)"
echo "Duration: $((DURATION / 60)) minutes"
echo ""

# Calculate size savings
echo "=== Size comparison ==="
JPG_SIZE=$(find "$SEQUENCES_DIR" -name "*.jpg" -type f ! -path "*_old_lq*" ! -path "*_backup*" -exec du -ch {} + 2>/dev/null | tail -1 | cut -f1)
WEBP_SIZE=$(find "$SEQUENCES_DIR" -name "*.webp" -type f -exec du -ch {} + 2>/dev/null | tail -1 | cut -f1)
echo "Original JPGs: $JPG_SIZE"
echo "New WebPs: $WEBP_SIZE"
echo ""
echo "Done! You can now update the code to use .webp instead of .jpg"
