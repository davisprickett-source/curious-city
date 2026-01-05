#!/bin/bash

# Upscale minn-2 frames using ffmpeg's lanczos algorithm (high quality)
# This is not AI upscaling but produces sharper results than the original

SOURCE_DIR="/Users/dav/Projects/Curious City/public/sequences/minneapolis/minn-2"
OUTPUT_DIR="/Users/dav/Projects/Curious City/public/sequences/minneapolis/minn-2-upscaled"

echo "Upscaling minn-2 frames with ffmpeg (lanczos)..."
echo ""

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Create backup info
echo "Original frames: $SOURCE_DIR"
echo "Upscaled output: $OUTPUT_DIR"
echo ""

# Count frames
frame_count=$(ls -1 "$SOURCE_DIR"/*.jpg 2>/dev/null | wc -l | tr -d ' ')
echo "Found $frame_count frames to process"
echo ""

# Process each frame
processed=0
for frame in "$SOURCE_DIR"/*.jpg; do
  if [ -f "$frame" ]; then
    filename=$(basename "$frame")
    output_file="$OUTPUT_DIR/$filename"

    # Upscale 2x using lanczos (1080x720 -> 2160x1440)
    # -sws_flags lanczos = high quality scaling
    # -q:v 2 = very high JPEG quality
    ffmpeg -i "$frame" -vf "scale=iw*2:ih*2:flags=lanczos" -q:v 2 "$output_file" -y 2>/dev/null

    if [ $? -eq 0 ]; then
      ((processed++))

      # Show progress every 10 frames
      if [ $((processed % 10)) -eq 0 ]; then
        echo "  Processed $processed / $frame_count frames..."
      fi
    else
      echo "  Error processing $frame"
    fi
  fi
done

echo ""
echo "✓ Completed $processed frames"
echo ""
echo "Next steps:"
echo "1. Check the quality: open $OUTPUT_DIR"
echo "2. If satisfied, replace original:"
echo "   mv \"$SOURCE_DIR\" \"${SOURCE_DIR}_original\""
echo "   mv \"$OUTPUT_DIR\" \"$SOURCE_DIR\""
echo ""
