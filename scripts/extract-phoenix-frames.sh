#!/bin/bash

# Extract frames from Phoenix animated history videos at 18fps
# Output to /public/sequences/phoenix/

VIDEO_DIR="/Users/dav/Projects/Curious City/public/phoenix/animated-history"
OUTPUT_BASE="/Users/dav/Projects/Curious City/public/sequences/phoenix"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_BASE"

echo "Starting frame extraction for Phoenix animated history videos..."
echo "Extracting at 18fps"
echo ""

# Process each video file
process_video() {
  local video_file="$1"
  local video_id="$2"
  local input_path="$VIDEO_DIR/$video_file"
  local output_dir="$OUTPUT_BASE/$video_id"

  if [ ! -f "$input_path" ]; then
    echo "⚠️  Video not found: $input_path"
    return
  fi

  # Create output directory for this video
  mkdir -p "$output_dir"

  echo "Processing: $video_file → $video_id"

  # Extract frames at 18fps
  ffmpeg -i "$input_path" \
    -vf "fps=18" \
    "$output_dir/frame-%04d.jpg" \
    -y \
    -loglevel error

  # Count frames
  frame_count=$(ls -1 "$output_dir"/frame-*.jpg 2>/dev/null | wc -l | tr -d ' ')
  echo "  ✓ Extracted $frame_count frames to sequences/phoenix/$video_id"
  echo ""
}

# Process all videos
process_video "Phoenix-1-p1-intro.mp4" "phoenix-1"
process_video "Phoenix-2-p2a-salt-river.mp4" "phoenix-2"
process_video "phoenix-3-p2b-hohokam.mp4" "phoenix-3"
process_video "phoenix-4-p3a-settlers.mp4" "phoenix-4"
process_video "phoenix-5-p3b-train.mp4" "phoenix-5"
process_video "phoenix-6-p4a-ac.mp4" "phoenix-6"
process_video "phoenix-7-p4b-wwii.mp4" "phoenix-7"
process_video "phoenix-8-p5-sprawl.mp4" "phoenix-8"
process_video "phoenix-9-p6-freeway.mp4" "phoenix-9"
process_video "phoenix-10-p7-retirees.mp4" "phoenix-10"
process_video "phoenix-11-p8-latino.mp4" "phoenix-11"
process_video "phoenix-12-p9-heat.mp4" "phoenix-12"
process_video "phoenix-13-p10-water.mp4" "phoenix-13"
process_video "phoenix-14-p11-mountains.mp4" "phoenix-14"
process_video "phoenix-15-p12-downtown.mp4" "phoenix-15"
process_video "phoenix-16-p12b-arts-district.mp4" "phoenix-16"
process_video "phoenix-17-p13-baseball.mp4" "phoenix-17"
process_video "phoenix-18-p14-retreat indoors.mp4" "phoenix-18"
process_video "phoenix-19-p15-dust-storm.mp4" "phoenix-19"
process_video "phoenix-20-p16-pool.mp4" "phoenix-20"
process_video "phoenix-21-p17-growing-subdivisions.mp4" "phoenix-21"
process_video "phoenix-22-p18-saguraros.mp4" "phoenix-22"
process_video "phoenix-23-p19-radiating-heat-final.mp4" "phoenix-23"

echo "Frame extraction complete!"
echo ""
echo "Summary:"
echo "--------"
for i in {1..23}; do
  output_dir="$OUTPUT_BASE/phoenix-$i"
  if [ -d "$output_dir" ]; then
    frame_count=$(ls -1 "$output_dir"/frame-*.jpg 2>/dev/null | wc -l | tr -d ' ')
    echo "phoenix-$i: $frame_count frames"
  fi
done
