#!/bin/bash

# Convert all jpg frames to webp for better compression
# Keeps original jpgs as backup

SEQUENCES_DIR="/Users/dav/Projects/Curious City/public/sequences"

echo "Converting frames from jpg to webp..."
echo "======================================"

# Count total jpgs first
total=$(find "$SEQUENCES_DIR" -name "*.jpg" | wc -l | tr -d ' ')
echo "Found $total jpg files to convert"
echo ""

converted=0

for city_dir in "$SEQUENCES_DIR"/*/; do
  city=$(basename "$city_dir")
  echo "Processing: $city"

  for seq_dir in "$city_dir"*/; do
    seq=$(basename "$seq_dir")

    # Convert each jpg to webp
    for jpg in "$seq_dir"*.jpg; do
      if [ -f "$jpg" ]; then
        webp="${jpg%.jpg}.webp"
        if [ ! -f "$webp" ]; then
          cwebp -q 85 "$jpg" -o "$webp" 2>/dev/null
          ((converted++))

          # Show progress every 100 files
          if [ $((converted % 100)) -eq 0 ]; then
            echo "  Converted $converted / $total files..."
          fi
        fi
      fi
    done
  done
done

echo ""
echo "======================================"
echo "Conversion complete! Converted $converted files."
echo ""
echo "To save space, you can delete the original jpgs with:"
echo "find \"$SEQUENCES_DIR\" -name \"*.jpg\" -delete"
