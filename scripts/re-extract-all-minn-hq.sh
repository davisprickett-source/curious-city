#!/bin/bash

# Re-extract ALL Minneapolis frames at maximum quality from source videos

INPUT_DIR="/Users/dav/Projects/Curious City/public/Minneapolis/meeting-of-waters/minn-history-videos"
OUTPUT_BASE="/Users/dav/Projects/Curious City/public/sequences/minneapolis"

echo "Re-extracting ALL Minneapolis frames at maximum quality..."
echo ""

# Process each video
for video in "$INPUT_DIR"/*.mp4; do
    # Get the filename without path and extension
    basename=$(basename "$video" .mp4)

    # Extract the video number (e.g., "minn-1" from "minn-1-p1-p2.0.mp4")
    video_num=$(echo "$basename" | grep -oE 'minn-[0-9]+')

    # Skip if in dontuse folder or if extraction failed
    if [[ "$video" == *"dontuse"* ]]; then
        continue
    fi

    # Create output directory for this video
    output_dir="$OUTPUT_BASE/${video_num}-hq"
    mkdir -p "$output_dir"

    echo "Processing $basename -> $output_dir"

    # Extract frames at 18fps with maximum JPEG quality
    # -q:v 1 = highest JPEG quality (scale is 1-31, lower is better)
    # -qmin 1 -qmax 1 = force consistent max quality
    ffmpeg -i "$video" -vf "fps=18" -q:v 1 -qmin 1 -qmax 1 "$output_dir/frame-%04d.jpg" -y 2>/dev/null

    # Count frames
    frame_count=$(ls -1 "$output_dir"/frame-*.jpg 2>/dev/null | wc -l | tr -d ' ')
    echo "  ✓ Extracted $frame_count frames at maximum quality"
    echo ""
done

echo ""
echo "✓✓✓ All Minneapolis videos re-extracted at high quality! ✓✓✓"
echo ""
echo "Output directories created:"
ls -d "$OUTPUT_BASE"/minn-*-hq 2>/dev/null | while read dir; do
    count=$(ls -1 "$dir"/*.jpg 2>/dev/null | wc -l | tr -d ' ')
    echo "  $(basename "$dir"): $count frames"
done
echo ""
echo "Next: Run cleanup script to replace old versions with HQ versions"
