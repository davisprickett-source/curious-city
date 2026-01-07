#!/bin/bash

# Re-extract ALL Raleigh frames at maximum quality
# Similar to re-extract-phoenix-hq.sh and re-extract-tampa-hq.sh

INPUT_DIR="/Users/dav/Projects/Curious City/public/Raleigh/Raleigh history videos"
OUTPUT_BASE="/Users/dav/Projects/Curious City/public/sequences/raleigh"
FPS=18

# Create output base directory
mkdir -p "$OUTPUT_BASE"

echo "=== Re-extracting Raleigh frames at HQ ==="
echo "Input: $INPUT_DIR"
echo "Output: $OUTPUT_BASE"
echo ""

total_frames=0
video_count=0

# Process all MP4 files
for video in "$INPUT_DIR"/*.mp4; do
    if [ -f "$video" ]; then
        filename=$(basename "$video")

        # Extract the number from the filename (e.g., "Raleigh-1-..." -> "1", "raleigh-10-..." -> "10")
        num=$(echo "$filename" | grep -oE '[0-9]+' | head -1)

        if [ -n "$num" ]; then
            output_dir="$OUTPUT_BASE/raleigh-${num}-hq"
            mkdir -p "$output_dir"

            echo "Processing: $filename -> raleigh-${num}-hq/"

            # Extract frames at maximum quality
            # -q:v 1 = highest quality (1-31 scale, 1 is best)
            # -qmin 1 -qmax 1 = force consistent max quality
            ffmpeg -i "$video" -vf "fps=$FPS" -q:v 1 -qmin 1 -qmax 1 "$output_dir/frame_%04d.jpg" -y 2>/dev/null

            frame_count=$(ls -1 "$output_dir"/*.jpg 2>/dev/null | wc -l | tr -d ' ')
            total_frames=$((total_frames + frame_count))
            video_count=$((video_count + 1))

            echo "  -> Extracted $frame_count frames"
        fi
    fi
done

echo ""
echo "=== Complete ==="
echo "Videos processed: $video_count"
echo "Total frames extracted: $total_frames"
echo "Output location: $OUTPUT_BASE"
