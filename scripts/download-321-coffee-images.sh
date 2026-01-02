#!/bin/bash
# Download images for 321 Coffee establishment
# Fill in the IMAGE_URL variables with actual URLs from Instagram/Yelp/Website

set -e  # Exit on error

PROJECT_ROOT="/Users/dav/Projects/Curious City"
OUTPUT_DIR="$PROJECT_ROOT/public/images/establishments/coffee-shops/raleigh/321-coffee"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}321 Coffee Image Downloader${NC}"
echo "========================================"
echo ""
echo "INSTRUCTIONS:"
echo "1. Visit https://www.instagram.com/drink321coffee"
echo "2. Visit Yelp: Search '321 Coffee Raleigh'"
echo "3. Visit https://www.321coffee.com"
echo ""
echo "Find 3-4 high-quality images showing:"
echo "  - Employees/community atmosphere"
echo "  - Coffee drinks and food"
echo "  - Interior design"
echo "  - Mission-driven aspects"
echo ""
echo "Then edit this script and add the URLs below:"
echo ""

# TODO: Replace these placeholder URLs with actual image URLs
IMAGE_1_URL="PASTE_URL_HERE"  # Description: Interior with employees
IMAGE_2_URL="PASTE_URL_HERE"  # Description: Barista making drinks
IMAGE_3_URL="PASTE_URL_HERE"  # Description: Coffee drinks/latte art
IMAGE_4_URL="PASTE_URL_HERE"  # Description: Community atmosphere or exterior

# Output filenames
IMAGE_1_OUTPUT="$OUTPUT_DIR/interior-01.jpg"
IMAGE_2_OUTPUT="$OUTPUT_DIR/barista-01.jpg"
IMAGE_3_OUTPUT="$OUTPUT_DIR/drinks-01.jpg"
IMAGE_4_OUTPUT="$OUTPUT_DIR/community-01.jpg"

# Check if URLs have been updated
if [[ "$IMAGE_1_URL" == "PASTE_URL_HERE" ]]; then
    echo -e "${RED}ERROR: Please edit this script and add actual image URLs${NC}"
    echo ""
    echo "To get Instagram image URLs:"
    echo "  1. Visit https://www.instagram.com/drink321coffee"
    echo "  2. Right-click on image → 'Open Image in New Tab'"
    echo "  3. Copy the URL (starts with https://scontent-...)"
    echo ""
    echo "To get Yelp image URLs:"
    echo "  1. Search '321 Coffee Raleigh' on Yelp"
    echo "  2. Click 'Photos' (25 available)"
    echo "  3. Right-click image → 'Open Image in New Tab'"
    echo "  4. Copy the high-res URL"
    echo ""
    exit 1
fi

# Ensure output directory exists
mkdir -p "$OUTPUT_DIR"

# Download function
download_image() {
    local url="$1"
    local output="$2"
    local description="$3"

    echo -e "${YELLOW}Downloading: ${description}${NC}"
    echo "  URL: $url"
    echo "  Output: $output"

    if curl -L -f \
        -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
        -o "$output" \
        "$url" 2>/dev/null; then

        # Check file size
        size=$(du -h "$output" | cut -f1)
        echo -e "${GREEN}  ✓ Success! Size: $size${NC}"
        echo ""
    else
        echo -e "${RED}  ✗ Download failed${NC}"
        rm -f "$output"
        echo ""
        return 1
    fi
}

# Download all images
echo -e "${YELLOW}Starting downloads...${NC}"
echo ""

download_image "$IMAGE_1_URL" "$IMAGE_1_OUTPUT" "Interior with employees"
download_image "$IMAGE_2_URL" "$IMAGE_2_OUTPUT" "Barista making drinks"
download_image "$IMAGE_3_URL" "$IMAGE_3_OUTPUT" "Coffee drinks/latte art"
download_image "$IMAGE_4_URL" "$IMAGE_4_OUTPUT" "Community atmosphere"

# Summary
echo "========================================"
echo -e "${GREEN}Download complete!${NC}"
echo ""
echo "Downloaded files:"
ls -lh "$OUTPUT_DIR"
echo ""
echo "Next steps:"
echo "1. Verify images look good: open $OUTPUT_DIR"
echo "2. Research menu from https://www.321coffee.com"
echo "3. Update /Users/dav/Projects/Curious City/src/data/cities/raleigh.ts"
echo "   - Replace 'image' with 'images' array (see guide)"
echo "   - Add 'menu' object with categories and items"
echo ""
echo "See: /Users/dav/Projects/Curious City/321-coffee-completion-guide.md"
