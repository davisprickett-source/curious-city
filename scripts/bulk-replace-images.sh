#!/bin/bash

# Bulk replace broken Wikimedia Commons images with working Unsplash alternatives
# for Anchorage curiosities, bars, restaurants, and coffee shops

FILE="/Users/dav/Projects/Curious City/src/data/cities/anchorage.ts"

# Generic food/beverage replacements
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/3/3e/Champagne_and_oysters.jpg|https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/0/05/Fresh_oysters_on_ice.jpg|https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/d/d0/Brewpub_interior.jpg|https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/5/50/Craft_brewery_taps.jpg|https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/e/e7/Bar_with_beer_taps.jpg|https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/6/67/Neighborhood_dive_bar.jpg|https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/a/a4/Concert_venue_interior.jpg|https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/f/f1/Live_music_venue_stage.jpg|https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/b/bc/Alaska_halibut_dish.jpg|https://images.unsplash.com/photo-1544025162-d76694265947?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/4/43/Grilled_halibut_steak.jpg|https://images.unsplash.com/photo-1580959375944-1ab5b8badf9b?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/3/30/Craft_beer_with_pizza.jpg|https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/a/a3/Pepperoni_pizza.jpg|https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/f/f8/American_breakfast.jpg|https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/8/89/Eggs_Benedict.jpg|https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/9/9d/Comfort_food_mac_cheese.jpg|https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/1/1f/Tasting_menu_course.jpg|https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/6/6d/Coffee_shop_latte.jpg|https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/b/b9/Specialty_latte_art.jpg|https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/7/7a/Cold_brew_coffee.jpg|https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/1/18/Coffee_and_pastries.jpg|https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/d/d1/Coffee_shop_pastry_case.jpg|https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://upload.wikimedia.org/wikipedia/commons/4/4f/Coffee_shop_workspace.jpg|https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800\&q=80|g" "$FILE"

# Replace Flickr images with Unsplash
sed -i.bak "s|https://live.staticflickr.com/3870/14854321316_1f3b23bf3a_b.jpg|https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://live.staticflickr.com/7332/9467994394_c0ab3fb0d7_b.jpg|https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://live.staticflickr.com/4091/5176595890_c6d8bc19ba_b.jpg|https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://live.staticflickr.com/3123/2679064424_e3e2c0e7d0_b.jpg|https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800\&q=80|g" "$FILE"
sed -i.bak "s|https://live.staticflickr.com/2904/14264348118_0f3b61f3e1_b.jpg|https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800\&q=80|g" "$FILE"

# Remove backup files
rm -f "$FILE.bak"

echo "Anchorage image replacements complete!"
