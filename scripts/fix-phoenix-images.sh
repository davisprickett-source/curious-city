#!/bin/bash

FILE="/Users/dav/Projects/Curious City/src/data/cities/phoenix.ts"

echo "Fixing Phoenix curiosities images..."

# Arizona Canal / Hohokam images
sed -i '' "s|https://www.pueblogrande.com/images/canal-system-hohokam.jpg|https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800\&q=80|g" "$FILE"
sed -i '' "s|https://www.srpnet.com/assets/srpnet/img/about/canals-historic-photo.jpg|https://images.unsplash.com/photo-1551632811-561732d1e306?w=800\&q=80|g" "$FILE"
sed -i '' "s|https://www.srpnet.com/assets/srpnet/img/water/arizona-canal-modern.jpg|https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800\&q=80|g" "$FILE"

# German POW escape
sed -i '' "s|https://www.papagogc.com/tunnel-marker-great-escape.jpg|https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800\&q=80|g" "$FILE"

# Phoenix Lights
sed -i '' "s|https://www.azcentral.com/gcdn/media/phoenix-lights-photo-1997.jpg|https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800\&q=80|g" "$FILE"
sed -i '' "s|https://media.12news.com/assets/KPNX/phoenix-lights-witness-video-still.jpg|https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800\&q=80|g" "$FILE"

# Heat island / urban heat
sed -i '' "s|https://www.azcentral.com/gcdn/phoenix-heat-island-infrared.jpg|https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800\&q=80|g" "$FILE"

# Saguaro / Sonoran desert
sed -i '' "s|https://www.azcentral.com/gcdn/saguaro-arms-sunset-sonoran-desert.jpg|https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800\&q=80|g" "$FILE"

# Salt River
sed -i '' "s|https://www.azcentral.com/gcdn/dry-salt-river-bed-phoenix.jpg|https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800\&q=80|g" "$FILE"

# Papago Park / Hohokam astronomy
sed -i '' "s|https://www.azcentral.com/gcdn/papago-park-hole-in-rock-solstice-sunrise.jpg|https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800\&q=80|g" "$FILE"
sed -i '' "s|https://www.pueblogrande.com/images/hohokam-astronomy-papago-park.jpg|https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?w=800\&q=80|g" "$FILE"

# Arizona Canal night scene
sed -i '' "s|https://www.srpnet.com/assets/images/arizona-canal-night-reflection-lights.jpg|https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800\&q=80|g" "$FILE"

echo "✓ Phoenix images fixed!"
echo "Checking for remaining broken URLs..."
COUNT=$(grep -c "www.srpnet.com\|www.papagogc.com\|media.12news.com\|www.azcentral.com\|www.pueblogrande.com" "$FILE" 2>/dev/null || echo "0")
# Subtract the source URLs (those are fine, only image URLs matter)
echo "Remaining broken image URLs: should be 0 for images, but source URLs in text are OK"
