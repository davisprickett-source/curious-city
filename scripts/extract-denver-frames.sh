#!/bin/bash

# Extract high-quality frames from Denver history videos
# Uses 15 fps and highest quality WebP output
# Uses underscore naming convention (frame_0001.webp)
# Note: Two videos are extracted in REVERSE order (denver-12, denver-16)

VIDEO_DIR="/Users/dav/Projects/Curious City/public/denver/history-essay/videos"
OUTPUT_BASE="/Users/dav/Projects/Curious City/public/sequences/denver"

# Create output base directory
mkdir -p "$OUTPUT_BASE"

echo "Starting Denver frame extraction at 15fps with WebP output..."
echo "=============================================================="

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
    # Lossy WebP at quality 95 - small files, fast encoding, great quality
    ffmpeg -i "$input_path" \
      -vf "fps=15,reverse" \
      -c:v libwebp \
      -quality 95 \
      -start_number 1 \
      "$output_dir/frame_%04d.webp" \
      -y -hide_banner -loglevel warning
  else
    # Extract frames normally
    # Lossy WebP at quality 95 - small files, fast encoding, great quality
    ffmpeg -i "$input_path" \
      -vf "fps=15" \
      -c:v libwebp \
      -quality 95 \
      -start_number 1 \
      "$output_dir/frame_%04d.webp" \
      -y -hide_banner -loglevel warning
  fi

  # Count frames
  frame_count=$(ls -1 "$output_dir"/frame_*.webp 2>/dev/null | wc -l | tr -d ' ')
  echo "  Extracted $frame_count frames to $seq_name"
}

# Extract all 16 Denver videos
# Note: denver-12 and denver-16 are reversed
extract_video "denver-1-p1-great plains.mp4" "denver-1"
extract_video "denver-2-p2-platte-river.mp4" "denver-2"
extract_video "denver-3-p3-tents.mp4" "denver-3"
extract_video "denver-4-p4-railroad.mp4" "denver-4"
extract_video "denver-5-p5-capitol-hill-wealth.mp4" "denver-5"
extract_video "denver-6-p6-oil-boom.mp4" "denver-6"
extract_video "denver-7-p7-mountains.mp4" "denver-7"
extract_video "denver-8-p8-marijuana.mp4" "denver-8"
extract_video "denver-9-p9-growth-appartments.mp4" "denver-9"
extract_video "denver-10-p10-homeless.mp4" "denver-10"
extract_video "denver-11-p11-whether-winter.mp4" "denver-11"
extract_video "denver-12-p12-sprawl-reverse-.mp4" "denver-12" "reverse"
extract_video "denver-13-p13-outdoorsy.mp4" "denver-13"
extract_video "denver-14-p14-politics.mp4" "denver-14"
extract_video "denver-15-p15-persists-skiing.mp4" "denver-15"
extract_video "denver-16-mountains-reverse.mp4" "denver-16" "reverse"

echo ""
echo "=============================================================="
echo "Extraction complete!"
echo ""
echo "Frame counts for VideoHistoryScroll.tsx:"
echo ""

# Print frame counts in TypeScript format
for i in $(seq 1 16); do
  dir="$OUTPUT_BASE/denver-$i"
  if [ -d "$dir" ]; then
    count=$(ls -1 "$dir"/frame_*.webp 2>/dev/null | wc -l | tr -d ' ')
    echo "  'denver-$i': $count,"
  fi
done

echo ""
echo "Add these to FRAME_COUNTS in src/components/VideoHistoryScroll.tsx"
