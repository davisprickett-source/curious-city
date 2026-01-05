#!/bin/bash

# Re-extract minn-2 frames at maximum quality from source video

INPUT_VIDEO="/Users/dav/Projects/Curious City/public/Minneapolis/meeting-of-waters/minn-history-videos/minn-2-p2.5-p3.mp4"
OUTPUT_DIR="/Users/dav/Projects/Curious City/public/sequences/minneapolis/minn-2-hq"

echo "Re-extracting minn-2 frames at maximum quality..."
echo ""

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Extract frames at 18fps with maximum JPEG quality
# -q:v 1 = highest JPEG quality (scale is 1-31, lower is better)
# -qmin 1 -qmax 1 = force consistent max quality
ffmpeg -i "$INPUT_VIDEO" -vf "fps=18" -q:v 1 -qmin 1 -qmax 1 "$OUTPUT_DIR/frame-%04d.jpg" -y

# Count frames
frame_count=$(ls -1 "$OUTPUT_DIR"/frame-*.jpg 2>/dev/null | wc -l | tr -d ' ')
echo ""
echo "✓ Extracted $frame_count frames at maximum quality"
echo ""
echo "Compare:"
echo "Original: /Users/dav/Projects/Curious City/public/sequences/minneapolis/minn-2"
echo "High quality: $OUTPUT_DIR"
echo ""
