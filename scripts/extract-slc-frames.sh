#!/bin/bash

# Extract high-quality frames from Salt Lake City premium history videos
# Uses same naming convention as Raleigh/Portland/Dallas (frame_0001.jpg)
# Note: Final video (slc-9) is extracted in REVERSE order

VIDEO_DIR="/Users/dav/Projects/Curious City/public/Salt-Lake-City/history-essay-1"
OUTPUT_BASE="/Users/dav/Projects/Curious City/public/sequences/salt-lake-city"

# Create output base directory
mkdir -p "$OUTPUT_BASE"

echo "Starting Salt Lake City frame extraction..."
echo "============================================="

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

# Extract all 9 videos
extract_video "SLC-1-p1-founding.mp4" "slc-1"
extract_video "SLC-2-S-Irrigation-canals-grid.mp4" "slc-2"
extract_video "SLC-3-temple-office.mp4" "slc-3"
extract_video "SLC-4-modern.mp4" "slc-4"
extract_video "SLC-5-skiiing.mp4" "slc-5"
extract_video "SLC-6-salt-lake-dying.mp4" "slc-6"
extract_video "SLC-7-suburbs.mp4" "slc-7"
extract_video "SLC-8-bar.mp4" "slc-8"
extract_video "SLC-9-S-to-live-in-salt-lake city-reverse it.mp4" "slc-9" "reverse"

echo ""
echo "============================================="
echo "Extraction complete!"
echo ""
echo "Frame counts for VideoHistoryScroll.tsx:"
echo ""

# Print frame counts in TypeScript format
for i in $(seq 1 9); do
  dir="$OUTPUT_BASE/slc-$i"
  if [ -d "$dir" ]; then
    count=$(ls -1 "$dir"/frame_*.jpg 2>/dev/null | wc -l | tr -d ' ')
    echo "  'slc-$i': $count,"
  fi
done
