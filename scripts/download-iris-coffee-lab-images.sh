#!/bin/bash

# Download images for Iris Coffee Lab
# This script downloads images showing:
# 1. Seasonal specialty lattes (cherry-marzipan, rosemary, blue matcha)
# 2. Beautiful latte art
# 3. Plant-filled interior with natural light
# 4. Seaboard Station location

OUTPUT_DIR="/Users/dav/Projects/Curious City/public/images/establishments/coffee-shops/raleigh/iris-coffee-lab"

# Ensure directory exists
mkdir -p "$OUTPUT_DIR"

echo "Downloading Iris Coffee Lab images..."
echo "Output directory: $OUTPUT_DIR"
echo ""

# Image sources:
# - Instagram: @iriscoffeelab
# - Yelp: https://www.yelp.com/biz/iris-coffee-lab-raleigh (225 photos available)
# - Website: https://iriscoffeelab.com

# TODO: Replace these placeholder URLs with actual image URLs from:
# 1. Instagram @iriscoffeelab - Look for posts showing seasonal lattes
# 2. Yelp page - Download high-quality interior and drink photos
# 3. Official website - Download any featured images

# Image 1: Seasonal specialty latte with beautiful latte art
# (Look for cherry-marzipan, rosemary, or blue matcha latte)
IMAGE1_URL="REPLACE_WITH_INSTAGRAM_URL_OF_SEASONAL_LATTE"
if [[ "$IMAGE1_URL" != "REPLACE_"* ]]; then
  echo "Downloading image 1: Seasonal specialty latte..."
  curl -L -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
       -o "$OUTPUT_DIR/seasonal-latte-1.jpg" \
       "$IMAGE1_URL" && echo "✓ Downloaded seasonal-latte-1.jpg"
else
  echo "⚠ Skipping image 1 - URL not set"
fi

# Image 2: Plant-filled interior with natural light
IMAGE2_URL="REPLACE_WITH_YELP_URL_OF_INTERIOR"
if [[ "$IMAGE2_URL" != "REPLACE_"* ]]; then
  echo "Downloading image 2: Interior with plants and natural light..."
  curl -L -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
       -o "$OUTPUT_DIR/interior-plants.jpg" \
       "$IMAGE2_URL" && echo "✓ Downloaded interior-plants.jpg"
else
  echo "⚠ Skipping image 2 - URL not set"
fi

# Image 3: Beautiful latte art / coffee drink
IMAGE3_URL="REPLACE_WITH_INSTAGRAM_URL_OF_LATTE_ART"
if [[ "$IMAGE3_URL" != "REPLACE_"* ]]; then
  echo "Downloading image 3: Latte art..."
  curl -L -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
       -o "$OUTPUT_DIR/latte-art.jpg" \
       "$IMAGE3_URL" && echo "✓ Downloaded latte-art.jpg"
else
  echo "⚠ Skipping image 3 - URL not set"
fi

# Image 4: Seaboard Station location / exterior or another specialty drink
IMAGE4_URL="REPLACE_WITH_YELP_URL_OF_LOCATION"
if [[ "$IMAGE4_URL" != "REPLACE_"* ]]; then
  echo "Downloading image 4: Location/exterior or specialty drink..."
  curl -L -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
       -o "$OUTPUT_DIR/location.jpg" \
       "$IMAGE4_URL" && echo "✓ Downloaded location.jpg"
else
  echo "⚠ Skipping image 4 - URL not set"
fi

echo ""
echo "========================================="
echo "INSTRUCTIONS FOR FINDING IMAGES:"
echo "========================================="
echo ""
echo "1. Visit Instagram @iriscoffeelab:"
echo "   - Find posts with seasonal specialty lattes (cherry-marzipan, rosemary, blue matcha)"
echo "   - Find posts with beautiful latte art"
echo "   - Right-click images and 'Open image in new tab' to get direct URL"
echo ""
echo "2. Visit Yelp (225 photos): https://www.yelp.com/biz/iris-coffee-lab-raleigh"
echo "   - Look for high-quality photos of the plant-filled interior"
echo "   - Look for photos showing natural light"
echo "   - Look for photos of the Seaboard Station location"
echo "   - Right-click images and 'Copy image address'"
echo ""
echo "3. Visit website: https://iriscoffeelab.com"
echo "   - Look for featured images or photo gallery"
echo "   - Right-click and 'Copy image address'"
echo ""
echo "4. Edit this script and replace the REPLACE_WITH_* URLs with actual image URLs"
echo ""
echo "5. Run this script again: bash $0"
echo ""
echo "========================================="
echo ""

# Check if any images were downloaded
if [ "$(ls -A $OUTPUT_DIR 2>/dev/null)" ]; then
  echo "✓ Images downloaded successfully to:"
  ls -lh "$OUTPUT_DIR"
else
  echo "⚠ No images downloaded yet. Please update the URLs in this script."
fi
