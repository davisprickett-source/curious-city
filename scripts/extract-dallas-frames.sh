#!/bin/bash

# Extract high-quality frames from Dallas premium history videos
# Uses same naming convention as Raleigh/Portland (frame_0001.jpg)

VIDEO_DIR="/Users/dav/Projects/Curious City/public/dallas/video-essay-1"
OUTPUT_BASE="/Users/dav/Projects/Curious City/public/sequences/dallas"

# Create output base directory
mkdir -p "$OUTPUT_BASE"

echo "Starting Dallas frame extraction..."
echo "======================================="

extract_video() {
  local video_file="$1"
  local seq_name="$2"
  local input_path="$VIDEO_DIR/$video_file"
  local output_dir="$OUTPUT_BASE/$seq_name"

  if [ ! -f "$input_path" ]; then
    echo "⚠️  Skipping $video_file - file not found"
    return
  fi

  echo ""
  echo "Processing: $video_file -> $seq_name"

  # Create output directory
  mkdir -p "$output_dir"

  # Extract frames at native resolution, high quality JPEG
  ffmpeg -i "$input_path" \
    -vf "fps=24" \
    -qscale:v 2 \
    -start_number 1 \
    "$output_dir/frame_%04d.jpg" \
    -y -hide_banner -loglevel warning

  # Count frames
  frame_count=$(ls -1 "$output_dir"/frame_*.jpg 2>/dev/null | wc -l | tr -d ' ')
  echo "✓ Extracted $frame_count frames to $seq_name"
}

# Extract all 16 videos
extract_video "dallas-1-p1-intro.mp4" "dallas-1"
extract_video "dallas-2-p2-trading-post.mp4" "dallas-2"
extract_video "dallas-3-p3-cotton.mp4" "dallas-3"
extract_video "dallas-4-p4-oil.mp4" "dallas-4"
extract_video "dallas-5-p5-kennedy.mp4" "dallas-5"
extract_video "dallas-6-p6-freeway.mp4" "dallas-6"
extract_video "dallas-7-p7-wealth.mp4" "dallas-7"
extract_video "dallas-8-p8-cowboys.mp4" "dallas-8"
extract_video "dallas-9-p9-arts.mp4" "dallas-9"
extract_video "dallas-10-p10-latino.mp4" "dallas-10"
extract_video "dallas-11-p11-heat.mp4" "dallas-11"
extract_video "dallas-12-p12-politics-church.mp4" "dallas-12"
extract_video "dallas-13-p13-skyline-construction.mp4" "dallas-13"
extract_video "dallas-14-p14-biz.mp4" "dallas-14"
extract_video "dallas-15-p15-towers-rise.mp4" "dallas-15"
extract_video "dallas-16-p16-final.mp4" "dallas-16"

echo ""
echo "======================================="
echo "Extraction complete!"
echo ""
echo "Frame counts for VideoHistoryScroll.tsx:"
echo ""

# Print frame counts in TypeScript format
for i in $(seq 1 16); do
  dir="$OUTPUT_BASE/dallas-$i"
  if [ -d "$dir" ]; then
    count=$(ls -1 "$dir"/frame_*.jpg 2>/dev/null | wc -l | tr -d ' ')
    echo "  'dallas-$i': $count,"
  fi
done
