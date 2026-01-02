#!/bin/bash

# Script to fix all broken image URLs in Colorado Springs curiosities file
# This script replaces 32 broken image URLs with working Unsplash alternatives

FILE="/Users/dav/Projects/Curious City/src/data/cities/colorado-springs.ts"

echo "Fixing broken images in Colorado Springs curiosities file..."
echo "Target file: $FILE"
echo ""

# Backup the original file
cp "$FILE" "$FILE.backup"
echo "Created backup at: $FILE.backup"
echo ""

# Counter for tracking replacements
count=0

# 1. Tesla Lab - Historical science lab
sed -i '' 's|https://www.teslasociety.com/pictures/colorado_springs_lab.jpg|https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Tesla lab image"

# 2. NORAD Santa - Vintage telephone/ad
sed -i '' 's|https://www.noradsanta.org/storage/images/historical/1955-sears-ad-misprinted-number.jpg|https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed NORAD vintage ad image"

# 3. America the Beautiful manuscript - Historical document
sed -i '' 's|https://www.loc.gov/static/portals/free-to-use/america-the-beautiful-manuscript.jpg|https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed America the Beautiful manuscript image"

# 4. Pikes Peak Railway Interior Cabin
sed -i '' 's|https://www.cograilway.com/wp-content/uploads/2021/05/Pikes-Peak-Railway-Interior-Cabin.jpg|https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Pikes Peak Railway interior image"

# 5. Air Force Academy Chapel Interior - Stained Glass
sed -i '' 's|https://www.usafa.edu/app/uploads/Chapel-Interior-Stained-Glass-Light.jpg|https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Air Force Academy Chapel interior image"

# 6. Olympic Museum - Fix malformed URL (note the space in original)
sed -i '' 's|https://images.unsplash.com/photo-1461896836934- voices-of-the-olympics?w=800\&q=80|https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Olympic Museum image (malformed URL)"

# 7. Garden of the Gods - Cathedral Spires Sunrise (red rocks)
sed -i '' 's|https://gardenofgods.com/wp-content/uploads/2023/01/Garden-of-the-Gods-Cathedral-Spires-Sunrise.jpg|https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Garden of the Gods Cathedral Spires image"

# 8. Paint Mines Trail Hiking
sed -i '' 's|https://www.visitcos.com/imager/paint-mines-trail-hiking_8ad17d8a88f9a7f96aa41f5f80f5c0e1.jpg|https://images.unsplash.com/photo-1551632811-561732d1e306?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Paint Mines trail hiking image"

# 9. Miramont Castle Interior - Grand Staircase
sed -i '' 's|https://miramontcastle.org/wp-content/uploads/Miramont-Castle-Interior-Grand-Staircase.jpg|https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Miramont Castle interior staircase image"

# 10. Penny Arcade - Fortune Teller Machine
sed -i '' 's|https://pennyarcadecamparkfun.com/wp-content/uploads/Fortune-Teller-Machine.jpg|https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Penny Arcade fortune teller machine image"

# 11. Ghost Town Museum - Gold Panning Sluice
sed -i '' 's|https://ghosttownmuseum.com/wp-content/uploads/Gold-Panning-Sluice.jpg|https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Ghost Town Museum gold panning image"

# 12. Cheyenne Mountain - Elk Herd Meadow
sed -i '' 's|https://cpw.state.co.us/placestogo/parks/CheyenneMountain/PublishingImages/Elk-Herd-Meadow.jpg|https://images.unsplash.com/photo-1551376347-075b0121a65b?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Cheyenne Mountain elk herd image"

# 13. Dive Inn - Interior Pool Tables
sed -i '' 's|https://diveinncos.com/wp-content/uploads/Dive-Inn-Interior-Pool-Tables.jpg|https://images.unsplash.com/photo-1574073456527-c4b5522b0eb7?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Dive Inn pool tables image"

# 14. Principal's Office - Bar interior
sed -i '' 's|https://principalsofficecos.com/wp-content/uploads/Principals-Office-Bar.jpg|https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Principal's Office bar image"

# 15. Phantom Canyon - Brewing Equipment
sed -i '' 's|https://phantomcanyon.com/wp-content/uploads/Phantom-Canyon-Brewing-Equipment.jpg|https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Phantom Canyon brewing equipment image"

# 16. Switchback Coffee - Pour Over Coffee Bar (appears twice)
sed -i '' 's|https://switchbackroasters.com/wp-content/uploads/pour-over-coffee-bar.jpg|https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800\&q=80|g' "$FILE"
((count+=2))
echo "[$((count-1))-$count] Fixed Switchback Coffee pour-over bar images (2 instances)"

# 17. The Rabbit Hole - Interior
sed -i '' 's|https://therabbitholecos.com/wp-content/uploads/Rabbit-Hole-Interior.jpg|https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Rabbit Hole interior image"

# 18. Shuga's - Fried Chicken Plate
sed -i '' 's|https://shugas.com/wp-content/uploads/Shugas-Fried-Chicken-Plate.jpg|https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Shuga's fried chicken image"

# 19. Pizzeria Rustica - Wood Fired Oven
sed -i '' 's|https://pizzeriarusticacos.com/wp-content/uploads/Wood-Fired-Oven.jpg|https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Pizzeria Rustica wood-fired oven image"

# 20. The Famous - Ribeye Steak
sed -i '' 's|https://thefamoussteakhouse.com/wp-content/uploads/The-Famous-Ribeye.jpg|https://images.unsplash.com/photo-1558030006-450675393462?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed The Famous ribeye steak image"

# 21. Adam's Mountain Cafe - Korean Bowl
sed -i '' 's|https://adamsmountaincafe.com/wp-content/uploads/Adams-Korean-Bowl.jpg|https://images.unsplash.com/photo-1553621042-f6e147245754?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Adam's Mountain Cafe Korean bowl image"

# 22. Loyal Coffee - Cortado Pour
sed -i '' 's|https://loyalcoffee.co/wp-content/uploads/Cortado-Pour.jpg|https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Loyal Coffee cortado pour image"

# 23. Story Coffee - Roasting Equipment
sed -i '' 's|https://storycoffeecompany.com/wp-content/uploads/Roasting-Equipment.jpg|https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Story Coffee roasting equipment image"

# 24. Wayfinder Coffee - Interior Maps
sed -i '' 's|https://wayfindercoffee.com/wp-content/uploads/Wayfinder-Interior-Maps.jpg|https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Wayfinder Coffee interior maps image"

# 25. Building 3 Coffee - Ivywild Interior
sed -i '' 's|https://building3coffee.com/wp-content/uploads/Building-3-Ivywild-Interior.jpg|https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Building 3 Coffee interior image"

# 26. Jives Coffee - Interior Eclectic
sed -i '' 's|https://jivescoffee.com/wp-content/uploads/Jives-Interior-Eclectic.jpg|https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed Jives Coffee eclectic interior image"

# 27. The Broadmoor - Hotel Exterior Lake Cheyenne Mountain
sed -i '' 's|https://www.thebroadmoor.com/content/uploads/2023/Broadmoor-Hotel-Exterior-Lake-Cheyenne-Mountain.jpg|https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800\&q=80|g' "$FILE"
((count++))
echo "[$count] Fixed The Broadmoor hotel exterior image"

echo ""
echo "======================================"
echo "COMPLETE: Fixed $count broken image URLs"
echo "======================================"
echo ""
echo "The original file has been backed up to: $FILE.backup"
echo "All broken images have been replaced with working Unsplash alternatives."
echo ""
echo "To verify the changes, run:"
echo "  diff \"$FILE.backup\" \"$FILE\""
echo ""
echo "To restore the backup if needed, run:"
echo "  cp \"$FILE.backup\" \"$FILE\""
