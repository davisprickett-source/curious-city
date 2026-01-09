#!/bin/bash

# Extract high-quality frames from Anchorage premium history videos
# Uses underscore naming convention (frame_0001.jpg)
# Note: Final video (anchorage-11) is extracted in REVERSE order

VIDEO_DIR="/Users/dav/Projects/Curious City/public/anchorage/history-essay-1"
OUTPUT_BASE="/Users/dav/Projects/Curious City/public/sequences/anchorage"

# Create output base directory
mkdir -p "$OUTPUT_BASE"

echo "Starting Anchorage frame extraction..."
echo "========================================"

extract_video() {
  local video_file="$1"
  local seq_name="$2"
  local reverse="$3"
  local input_path="$VIDEO_DIR/$video_file"
  local output_dir="$OUTPUT_BASE/$seq_name"

  if [ ! -f "$input_path" ]; then
    echo "Warning: Skipping $video_file - file not found"
    return
  fi

  echo ""
  echo "Processing: $video_file -> $seq_name"

  # Create output directory
  mkdir -p "$output_dir"

  if [ "$reverse" = "reverse" ]; then
    echo "  (Extracting in REVERSE order)"
    # Extract frames in reverse using the reverse filter
    ffmpeg -i "$input_path" \
      -vf "fps=24,reverse" \
      -qscale:v 2 \
      -start_number 1 \
      "$output_dir/frame_%04d.jpg" \
      -y -hide_banner -loglevel warning
  else
    # Extract frames normally
    ffmpeg -i "$input_path" \
      -vf "fps=24" \
      -qscale:v 2 \
      -start_number 1 \
      "$output_dir/frame_%04d.jpg" \
      -y -hide_banner -loglevel warning
  fi

  # Count frames
  frame_count=$(ls -1 "$output_dir"/frame_*.jpg 2>/dev/null | wc -l | tr -d ' ')
  echo "Extracted $frame_count frames to $seq_name"
}

# Extract all 11 videos
extract_video "Anchorage-1.mp4" "anchorage-1"
extract_video "Anchorage-2.mp4" "anchorage-2"
extract_video "Anchorage-3.mp4" "anchorage-3"
extract_video "Anchorage-4.mp4" "anchorage-4"
extract_video "Anchorage-5.mp4" "anchorage-5"
extract_video "Anchorage-6-town-night.mp4" "anchorage-6"
extract_video "Anchorage-7-military.mp4" "anchorage-7"
extract_video "Anchorage-8-native.mp4" "anchorage-8"
extract_video "Anchorage-9-hike.mp4" "anchorage-9"
extract_video "Anchorage-10-climate-change.mp4" "anchorage-10"
extract_video "Anchorage-11-final-scene-reverse.mp4" "anchorage-11" "reverse"

echo ""
echo "========================================"
echo "Extraction complete!"
echo ""
echo "Frame counts for VideoHistoryScroll.tsx:"
echo ""

# Print frame counts in TypeScript format
for i in $(seq 1 11); do
  dir="$OUTPUT_BASE/anchorage-$i"
  if [ -d "$dir" ]; then
    count=$(ls -1 "$dir"/frame_*.jpg 2>/dev/null | wc -l | tr -d ' ')
    echo "  'anchorage-$i': $count,"
  fi
done
