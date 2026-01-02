#!/bin/bash

# Extract frames from Tampa history videos at 17 fps
# Frames will be saved in /public/sequences/tampa/[video-name]/

VIDEO_DIR="/Users/dav/Projects/Curious City/public/Tampa/history-video"
OUTPUT_DIR="/Users/dav/Projects/Curious City/public/sequences/tampa"
FPS=17

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Process each video
for i in {1..12}; do
    VIDEO_FILE="$VIDEO_DIR/tampa-$i.mp4"
    FRAME_DIR="$OUTPUT_DIR/tampa-$i"

    if [ -f "$VIDEO_FILE" ]; then
        echo "Processing tampa-$i.mp4..."
        mkdir -p "$FRAME_DIR"

        # Extract frames at 17 fps, output as optimized JPEGs
        # %04d gives us 4-digit numbering (0001, 0002, etc.)
        ffmpeg -i "$VIDEO_FILE" -vf "fps=$FPS" -q:v 2 "$FRAME_DIR/frame_%04d.jpg" -y 2>/dev/null

        # Count frames extracted
        FRAME_COUNT=$(ls -1 "$FRAME_DIR" | wc -l | tr -d ' ')
        echo "  -> Extracted $FRAME_COUNT frames to $FRAME_DIR"
    else
        echo "Warning: $VIDEO_FILE not found"
    fi
done

echo ""
echo "Done! Frames saved to: $OUTPUT_DIR"
echo ""
echo "Folder structure:"
ls -la "$OUTPUT_DIR"
