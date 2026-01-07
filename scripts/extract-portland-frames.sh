#!/bin/bash

# Extract high-quality frames from Portland premium history videos
# Uses same naming convention as Raleigh (frame_0001.jpg)

VIDEO_DIR="/Users/dav/Projects/Curious City/public/portland/history-essay-1/videos"
OUTPUT_BASE="/Users/dav/Projects/Curious City/public/sequences/portland"

# Create output base directory
mkdir -p "$OUTPUT_BASE"

echo "Starting Portland frame extraction..."
echo "======================================="

# Process each video manually to avoid bash associative array issues
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

# Extract all 18 videos
extract_video "Portland-1-p1-mountain-scene.mp4" "portland-1"
extract_video "portland-2-p2-furs.mp4" "portland-2"
extract_video "portland-3-p3-discovery-settlers.mp4" "portland-3"
extract_video "portland-4-p4-railroads.mp4" "portland-4"
extract_video "portland-5-p5-shipbuilding.mp4" "portland-5"
extract_video "portland-6-p6-highways-roads.mp4" "portland-6"
extract_video "portland-7-p7-growth-90s.mp4" "portland-7"
extract_video "portland-8-p8-nike.mp4" "portland-8"
extract_video "portland-9-p9-bikes-transport.mp4" "portland-9"
extract_video "portland-10-p10-homeless.mp4" "portland-10"
extract_video "portland-11-p11-protests.mp4" "portland-11"
extract_video "portland-12-p12-sunny.mp4" "portland-12"
extract_video "portland-13-p13-mthood.mp4" "portland-13"
extract_video "portland-14-p14-cafe.mp4" "portland-14"
extract_video "portland-15-p15-politics-pot.mp4" "portland-15"
extract_video "portland-16-p16-neighborhood-bikes-shops.mp4" "portland-16"
extract_video "portland-17-p17-city-rain.mp4" "portland-17"
extract_video "portland-18-final.mp4" "portland-18"

echo ""
echo "======================================="
echo "Extraction complete!"
echo ""
echo "Frame counts for VideoHistoryScroll.tsx:"
echo ""

# Print frame counts in TypeScript format
for i in $(seq 1 18); do
  dir="$OUTPUT_BASE/portland-$i"
  if [ -d "$dir" ]; then
    count=$(ls -1 "$dir"/frame_*.jpg 2>/dev/null | wc -l | tr -d ' ')
    echo "  'portland-$i': $count,"
  fi
done
