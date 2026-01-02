#!/bin/bash
# Download images with proper headers to avoid 403 errors
# Usage: ./scripts/download-image.sh <url> <output-filename>

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <url> <output-filename>"
    echo "Example: $0 https://example.com/image.jpg /public/images/myimage.jpg"
    exit 1
fi

URL="$1"
OUTPUT="$2"

# Create directory if it doesn't exist
mkdir -p "$(dirname "$OUTPUT")"

# Download with User-Agent header to avoid blocks
curl -L -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
     -o "$OUTPUT" \
     "$URL"

# Check if download was successful
if [ -s "$OUTPUT" ]; then
    echo "✓ Successfully downloaded to $OUTPUT ($(du -h "$OUTPUT" | cut -f1))"
else
    echo "✗ Download failed or file is empty"
    rm "$OUTPUT"
    exit 1
fi
