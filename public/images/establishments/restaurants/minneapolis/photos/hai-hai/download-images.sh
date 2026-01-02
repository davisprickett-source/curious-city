#!/bin/bash

# Hai Hai Restaurant - Image Download Script
# Chef Christina Nguyen's James Beard Award-winning Southeast Asian restaurant

DOWNLOAD_DIR="/Users/dav/Projects/Curious City/public/images/establishments/restaurants/minneapolis/photos/hai-hai"

echo "Downloading high-quality images for Hai Hai restaurant..."

# 1. Pork Belly Steam Buns (signature dish)
# Unsplash: Bao buns with pork belly
curl -L "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=1200&q=80" -o "$DOWNLOAD_DIR/pork-belly-buns-01.jpg"

# 2. Green Papaya Salad
# Unsplash: Vietnamese papaya salad
curl -L "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=1200&q=80" -o "$DOWNLOAD_DIR/papaya-salad-01.jpg"

# 3. Banh Beo (steamed rice cakes)
# Unsplash: Vietnamese rice dishes
curl -L "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=1200&q=80" -o "$DOWNLOAD_DIR/banh-beo-01.jpg"

# 4. Frozen Vietnamese Coffee
# Unsplash: Vietnamese iced coffee
curl -L "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80" -o "$DOWNLOAD_DIR/vietnamese-coffee-01.jpg"

# 5. Tropical/Bold Interior Design
# Unsplash: Colorful restaurant interior with tropical vibes
curl -L "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80" -o "$DOWNLOAD_DIR/interior-tropical-01.jpg"

# 6. Food on Plastic Stools/Patio Setting
# Unsplash: Vietnamese street food style presentation
curl -L "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1200&q=80" -o "$DOWNLOAD_DIR/food-casual-setting-01.jpg"

# Additional high-quality options

# Alternative pork belly buns
curl -L "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1200&q=80" -o "$DOWNLOAD_DIR/pork-belly-buns-02.jpg"

# Vietnamese spring rolls (bonus)
curl -L "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?w=1200&q=80" -o "$DOWNLOAD_DIR/fresh-rolls-01.jpg"

echo ""
echo "Download complete! Images saved to:"
echo "$DOWNLOAD_DIR"
echo ""
echo "Please review SOURCES.md for attribution information."
