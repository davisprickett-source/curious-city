#!/bin/bash

# Re-extract ALL Phoenix frames at maximum quality from source videos

INPUT_DIR="/Users/dav/Projects/Curious City/public/phoenix/animated-history"
OUTPUT_BASE="/Users/dav/Projects/Curious City/public/sequences/phoenix"

echo "Re-extracting ALL Phoenix frames at maximum quality..."
echo ""

# Create base output directory
mkdir -p "$OUTPUT_BASE"

# Process each video
for video in "$INPUT_DIR"/*.mp4; do
    # Get the filename without path and extension
    basename=$(basename "$video" .mp4)

    # Extract the video number (e.g., "phoenix-1" from "Phoenix-1-p1-intro.mp4")
    # Handle both "Phoenix-X" and "phoenix-X" patterns
    video_num=$(echo "$basename" | grep -oEi 'phoenix-[0-9]+' | tr '[:upper:]' '[:lower:]')

    # Skip if extraction failed
    if [ -z "$video_num" ]; then
        echo "Skipping $basename (couldn't extract video number)"
        continue
    fi

    # Create output directory for this video
    output_dir="$OUTPUT_BASE/${video_num}-hq"
    mkdir -p "$output_dir"

    echo "Processing $basename -> $output_dir"

    # Extract frames at 18fps with maximum JPEG quality
    # -q:v 1 = highest JPEG quality (scale is 1-31, lower is better)
    # -qmin 1 -qmax 1 = force consistent max quality
    ffmpeg -i "$video" -vf "fps=18" -q:v 1 -qmin 1 -qmax 1 "$output_dir/frame_%04d.jpg" -y 2>/dev/null

    # Count frames
    frame_count=$(ls -1 "$output_dir"/frame_*.jpg 2>/dev/null | wc -l | tr -d ' ')
    echo "  ✓ Extracted $frame_count frames at maximum quality"
    echo ""
done

echo ""
echo "✓✓✓ All Phoenix videos re-extracted at high quality! ✓✓✓"
echo ""
echo "Output directories created:"
ls -d "$OUTPUT_BASE"/*-hq 2>/dev/null | while read dir; do
    count=$(ls -1 "$dir"/*.jpg 2>/dev/null | wc -l | tr -d ' ')
    echo "  $(basename "$dir"): $count frames"
done
echo ""
