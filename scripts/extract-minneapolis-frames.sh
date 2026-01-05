#!/bin/bash

# Extract frames from Minneapolis meeting-of-waters videos at 18fps

INPUT_DIR="/Users/dav/Projects/Curious City/public/Minneapolis/meeting-of-waters/minn-history-videos"
OUTPUT_BASE="/Users/dav/Projects/Curious City/public/sequences/minneapolis"

# Create output base directory
mkdir -p "$OUTPUT_BASE"

# Process each video
for video in "$INPUT_DIR"/*.mp4; do
    # Get the filename without path and extension
    basename=$(basename "$video" .mp4)

    # Extract the video number (e.g., "minn-1" from "minn-1-p1-p2.0.mp4")
    # This extracts just the "minn-X" part
    video_num=$(echo "$basename" | grep -oE 'minn-[0-9]+')

    # Skip if in dontuse folder
    if [[ "$video" == *"dontuse"* ]]; then
        continue
    fi

    # Create output directory for this video
    output_dir="$OUTPUT_BASE/$video_num"
    mkdir -p "$output_dir"

    echo "Processing $basename -> $output_dir"

    # Extract frames at 18fps
    ffmpeg -i "$video" -vf "fps=18" "$output_dir/frame-%04d.jpg" -y

    # Count frames
    frame_count=$(ls -1 "$output_dir"/frame-*.jpg 2>/dev/null | wc -l)
    echo "  ✓ Extracted $frame_count frames"
done

echo ""
echo "Frame extraction complete!"
echo "Output location: $OUTPUT_BASE"
