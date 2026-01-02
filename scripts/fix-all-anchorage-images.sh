#!/bin/bash

FILE="/Users/dav/Projects/Curious City/src/data/cities/anchorage.ts"

# Hidden Gems section
sed -i '' "s|https://live.staticflickr.com/65535/48989159757_e6c7e7f3e5_k.jpg|https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=1200\&q=80|g" "$FILE"
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/3/37/Flattop_Mountain_Anchorage.jpg|https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200\&q=80|g" "$FILE"
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/a/ab/Tony_Knowles_Coastal_Trail.jpg|https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200\&q=80|g" "$FILE"
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/5/58/Anchorage_Museum_at_Rasmuson_Center.jpg|https://images.unsplash.com/photo-1566127992631-af28211df5eb?w=1200\&q=80|g" "$FILE"
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/b/b6/Brown_bear_Alaska.jpg|https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1200\&q=80|g" "$FILE"
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/9/9b/Craft_beer_brewery.jpg|https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800\&q=80|g" "$FILE"
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/1/13/Lake_Hood_Seaplane_Base.jpg|https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200\&q=80|g" "$FILE"

# Restaurants
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/2/20/Hearty_breakfast_plate.jpg|https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800\&q=80|g" "$FILE"
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/5/5c/Mac_and_cheese.jpg|https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800\&q=80|g" "$FILE"
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/7/72/Fine_dining_plating.jpg|https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800\&q=80|g" "$FILE"

# Coffee shops
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/d/d8/Coffee_roasting_drum.jpg|https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800\&q=80|g" "$FILE"
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/c/c5/Fresh_roasted_coffee_beans.jpg|https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800\&q=80|g" "$FILE"
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/4/45/Pour_over_coffee.jpg|https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800\&q=80|g" "$FILE"
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/a/a5/Modern_coffee_shop_interior.jpg|https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800\&q=80|g" "$FILE"
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/e/e8/Espresso_machine.jpg|https://images.unsplash.com/photo-1568649929103-16bf8b502946?w=800\&q=80|g" "$FILE"
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/3/36/Cozy_cafe_interior.jpg|https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800\&q=80|g" "$FILE"
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/f/f2/Bookstore_cafe.jpg|https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800\&q=80|g" "$FILE"
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/9/94/Vintage_coffee_shop.jpg|https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800\&q=80|g" "$FILE"
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/2/2f/Eclectic_cafe.jpg|https://images.unsplash.com/photo-1501862700950-18382cd41497?w=800\&q=80|g" "$FILE"
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/8/88/Fresh_brewed_coffee.jpg|https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=800\&q=80|g" "$FILE"
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/5/59/Modern_coffee_shop.jpg|https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800\&q=80|g" "$FILE"
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/c/cb/Espresso_drinks.jpg|https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800\&q=80|g" "$FILE"

echo "All Anchorage images fixed!"
echo "Checking for any remaining broken URLs..."
COUNT=$(grep -c "upload.wikimedia.org\|live.staticflickr.com" "$FILE" || echo "0")
echo "Remaining Wikimedia/Flickr URLs: $COUNT"
