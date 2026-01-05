#!/bin/bash

# Crop frames for Minneapolis videos 2 and 3 to remove watermarks and black edges
# Adjust CROP_PIXELS as needed to remove the watermark

# Amount to crop from each side (in pixels)
CROP_PIXELS=100

# Directories to process
DIRS=(
  "/Users/dav/Projects/Curious City/public/sequences/minneapolis/minn-2"
  "/Users/dav/Projects/Curious City/public/sequences/minneapolis/minn-3"
)

echo "Cropping ${CROP_PIXELS}px from each side of frames..."
echo ""

for dir in "${DIRS[@]}"; do
  if [ ! -d "$dir" ]; then
    echo "Directory not found: $dir"
    continue
  fi

  dir_name=$(basename "$dir")
  echo "Processing $dir_name..."

  # Create backup directory
  backup_dir="${dir}_backup"
  if [ ! -d "$backup_dir" ]; then
    echo "  Creating backup..."
    cp -r "$dir" "$backup_dir"
  fi

  # Count frames
  frame_count=$(ls -1 "$dir"/*.jpg 2>/dev/null | wc -l)
  echo "  Found $frame_count frames"

  # Process each frame
  processed=0
  for frame in "$dir"/*.jpg; do
    if [ -f "$frame" ]; then
      # Get original dimensions (1280x720)
      # Crop formula: width = 1280 - (2 * CROP_PIXELS), height = 720 (no vertical crop)
      # Position: start at x=CROP_PIXELS, y=0
      new_width=$((1280 - (2 * CROP_PIXELS)))

      # Use ffmpeg to crop
      temp_file="${frame}.tmp.jpg"
      ffmpeg -i "$frame" -vf "crop=${new_width}:720:${CROP_PIXELS}:0" "$temp_file" -y 2>/dev/null

      if [ $? -eq 0 ]; then
        mv "$temp_file" "$frame"
        ((processed++))

        # Show progress every 20 frames
        if [ $((processed % 20)) -eq 0 ]; then
          echo "    Processed $processed frames..."
        fi
      else
        echo "    Error processing $frame"
        rm -f "$temp_file"
      fi
    fi
  done

  echo "  ✓ Completed $processed frames"
  echo ""
done

echo "Done! Backups saved in *_backup directories"
echo ""
echo "If the crop amount isn't right, restore from backup and adjust CROP_PIXELS:"
echo "  rm -rf minn-2 minn-3"
echo "  cp -r minn-2_backup minn-2"
echo "  cp -r minn-3_backup minn-3"
