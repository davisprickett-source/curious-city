#!/bin/bash

# Download script for Matt's Bar images
# Usage: Add image URLs to the array below, then run: bash scripts/download-matts-bar-images.sh

TARGET_DIR="/Users/dav/Projects/Curious City/public/images/establishments/restaurants/minneapolis/photos/matts-bar"

# Create directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Array of image URLs and their target filenames
# Format: "URL|filename"
declare -a IMAGES=(
    # Add URLs here in the format:
    # "https://example.com/image.jpg|jucy-lucy-cheese-01.jpg"
    # "https://example.com/image2.jpg|exterior-neon-01.jpg"
)

# Download each image
for IMAGE_INFO in "${IMAGES[@]}"; do
    IFS='|' read -r URL FILENAME <<< "$IMAGE_INFO"
    echo "Downloading $FILENAME from $URL..."
    curl -L -o "$TARGET_DIR/$FILENAME" "$URL"

    if [ $? -eq 0 ]; then
        echo "Successfully downloaded: $FILENAME"
    else
        echo "Failed to download: $FILENAME"
    fi
    echo ""
done

echo "Download complete! Images saved to: $TARGET_DIR"
echo "Remember to update SOURCES.md with attribution information"
