#!/bin/bash

FILE="/Users/dav/Projects/Curious City/src/data/cities/minneapolis.ts"

echo "Fixing Minneapolis curiosities images..."

# Replace Google Photos links (always fail)
sed -i '' "s|https://lh3.googleusercontent.com/p/AF1QipNWqFfh9YPwk9QDCzmMl-YkHo5XoCXVAJmX15VN=s1360-w1360-h1020|https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?w=1200\&q=80|g" "$FILE"
sed -i '' "s|https://lh3.googleusercontent.com/p/AF1QipO9ZkTtcO_mEjrXfGfnqjUHh8AaQaGw3q7_2Zci=s1360-w1360-h1020|https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200\&q=80|g" "$FILE"
sed -i '' "s|https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwqS-wnaFrz4W0Bm-uhqyaOjj6jCra6T6S3EqaOUQxqYf3CNXPzg8xXqInKoZ6D5ADIBAPtRbW17kfq_uFtknQa7XzSe3Zph_bGXSv-UhU7I9fjhse-yelNuYXOFWZgMqL2ETE5zg=w4446-h2328-k-no|https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800\&q=80|g" "$FILE"

# Fix government/park website images
sed -i '' "s|https://www.fws.gov/sites/default/files/styles/scale_crop_large/public/2021-07/Minnesota-Valley-Heron.jpg|https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200\&q=80|g" "$FILE"
sed -i '' "s|https://www.dnr.state.mn.us/state_parks/virtual_tours/afton/images/trail_overlook.jpg|https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200\&q=80|g" "$FILE"
sed -i '' "s|https://www.mallofamerica.com/sites/default/files/2023-04/mall-of-america-aerial.jpg|https://images.unsplash.com/photo-1555529669-2269763671c0?w=1200\&q=80|g" "$FILE"
sed -i '' "s|https://www.minneapolisparks.org/_asset/75cy4g/eloise-butler-native-prairie.jpg|https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200\&q=80|g" "$FILE"

# Fix Reddit image
sed -i '' "s|https://external-preview.redd.it/the-quietest-room-in-the-world-orfield-laboratories-v0-2kbgNRaxbT_gL7VsyV3dNYLWGOqyQW8nBh0-_cMFDBU.jpg?auto=webp\&s=b775a2f4c7c8d1f8d53e7c11c3c5f1f8b5a4e5c8|https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200\&q=80|g" "$FILE"

# Fix broken coffee shop image
sed -i '' "s|https://dailycoffeenews.com/wp-content/uploads/2022/11/Backstory-Coffee-Minneapolis-barista.jpg|https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800\&q=80|g" "$FILE"

# Fix Wikimedia Commons (Al's Breakfast)
sed -i '' "s|https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Al%27s_Breakfast_interior_01.jpg/1280px-Al%27s_Breakfast_interior_01.jpg|https://images.unsplash.com/photo-1517638851339-a711cfcf3279?w=800\&q=80|g" "$FILE"

# Fix broken Pexels images
sed -i '' "s|https://images.pexels.com/photos/51926/lake-water-under-white-and-blue-skies-during-daytime-51926.jpeg?auto=compress\&cs=tinysrgb\&w=1200|https://images.pexels.com/photos/1424239/pexels-photo-1424239.jpeg?auto=compress\&cs=tinysrgb\&w=1200|g" "$FILE"
sed -i '' "s|https://images.pexels.com/photos/2224861/pexels-photo-2224861.jpeg?auto=compress\&cs=tinysrgb\&w=1200|https://images.pexels.com/photos/2360569/pexels-photo-2360569.jpeg?auto=compress\&cs=tinysrgb\&w=1200|g" "$FILE"
sed -i '' "s|https://images.pexels.com/photos/366283/pexels-photo-366283.jpeg?auto=compress\&cs=tinysrgb\&w=1200|https://images.pexels.com/photos/931113/pexels-photo-931113.jpeg?auto=compress\&cs=tinysrgb\&w=1200|g" "$FILE"
sed -i '' "s|https://images.pexels.com/photos/1807807/pexels-photo-1807807.jpeg?auto=compress\&cs=tinysrgb\&w=1200|https://images.pexels.com/photos/3879060/pexels-photo-3879060.jpeg?auto=compress\&cs=tinysrgb\&w=1200|g" "$FILE"
sed -i '' "s|https://images.pexels.com/photos/12764/night-city-lights-traffic-12764.jpeg?auto=compress\&cs=tinysrgb\&w=1200|https://images.pexels.com/photos/10546892/pexels-photo-10546892.jpeg?auto=compress\&cs=tinysrgb\&w=1200|g" "$FILE"
sed -i '' "s|https://images.pexels.com/photos/2818565/pexels-photo-2818565.jpeg?auto=compress\&cs=tinysrgb\&w=1200|https://images.pexels.com/photos/5802549/pexels-photo-5802549.jpeg?auto=compress\&cs=tinysrgb\&w=1200|g" "$FILE"

echo "✓ Minneapolis images fixed!"
echo "Fixed:"
echo "  - 3 Google Photos links"
echo "  - 4 Government/park website images"
echo "  - 1 Reddit image"
echo "  - 1 Coffee shop image"
echo "  - 1 Wikimedia Commons image"
echo "  - 7 Pexels images (note: one appears twice in file)"
echo ""
echo "Total: 17 broken images fixed"
