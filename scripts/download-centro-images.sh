#!/bin/bash

# Download images for Centro Raleigh
# Usage: ./download-centro-images.sh

# Set the target directory
TARGET_DIR="/Users/dav/Projects/Curious City/public/images/establishments/restaurants/raleigh/centro"

# Create directory if it doesn't exist
mkdir -p "$TARGET_DIR"

echo "📸 Centro Raleigh Image Downloader"
echo "===================================="
echo ""
echo "Target directory: $TARGET_DIR"
echo ""

# Function to download an image
download_image() {
    local url="$1"
    local filename="$2"
    local description="$3"

    echo "Downloading: $description"
    echo "URL: $url"
    echo "Saving as: $filename"

    if curl -L "$url" -o "$TARGET_DIR/$filename" --silent --show-error --fail --max-time 30; then
        echo "✅ Successfully downloaded $filename"

        # Check file size
        size=$(wc -c < "$TARGET_DIR/$filename")
        if [ "$size" -lt 5000 ]; then
            echo "⚠️  Warning: File size is very small ($size bytes). May not be a valid image."
            rm "$TARGET_DIR/$filename"
            echo "❌ Removed invalid file"
        else
            echo "📊 File size: $size bytes"
        fi
    else
        echo "❌ Failed to download $filename"
    fi
    echo ""
}

# Instructions
echo "To use this script, you need to provide image URLs."
echo "You can either:"
echo "  1. Edit this script and add URLs below"
echo "  2. Run: ./download-centro-images.sh <url1> <url2> <url3> <url4>"
echo ""
echo "Images needed:"
echo "  1. tacos-al-pastor.jpg - Tacos al pastor with pineapple"
echo "  2. interior.jpg - Restaurant interior"
echo "  3. mole-dish.jpg - Mole poblano dish"
echo "  4. elote-esquites.jpg - Mexican street corn"
echo ""

# Example usage (uncomment and add real URLs):
# download_image "https://example.com/tacos.jpg" "tacos-al-pastor.jpg" "Tacos al pastor"
# download_image "https://example.com/interior.jpg" "interior.jpg" "Restaurant interior"
# download_image "https://example.com/mole.jpg" "mole-dish.jpg" "Mole poblano"
# download_image "https://example.com/elote.jpg" "elote-esquites.jpg" "Mexican street corn"

# Check if URLs were provided as arguments
if [ $# -eq 4 ]; then
    download_image "$1" "tacos-al-pastor.jpg" "Tacos al pastor"
    download_image "$2" "interior.jpg" "Restaurant interior"
    download_image "$3" "mole-dish.jpg" "Mole poblano"
    download_image "$4" "elote-esquites.jpg" "Mexican street corn"

    echo "===================================="
    echo "✅ Download complete!"
    echo ""
    echo "Verify images:"
    ls -lh "$TARGET_DIR"
elif [ $# -gt 0 ]; then
    echo "❌ Error: Please provide exactly 4 image URLs"
    echo "Usage: ./download-centro-images.sh <url1> <url2> <url3> <url4>"
    exit 1
else
    echo "💡 Add URLs to this script or run with 4 URL arguments"
    echo ""
    echo "Sources to find images:"
    echo "  • Instagram: @centroraleigh (1,141 posts)"
    echo "  • Yelp: https://www.yelp.com/biz/centro-raleigh (303 photos)"
    echo "  • Website: https://centroraleigh.com"
    echo ""
    echo "See CENTRO_IMAGE_DOWNLOAD_GUIDE.md for detailed instructions"
fi
