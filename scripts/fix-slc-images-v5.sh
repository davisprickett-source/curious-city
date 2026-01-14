#!/bin/bash

# Define user agent
UA="CuriousCity/1.0 (https://curious.city; info@curious.city)"

# Fix SLC images with direct reliable links
echo "Downloading SLC images from known reliable sources..."

# 1. Plum Alley (from Utah Archives)
curl -L -o public/salt-lake-city/articles/plum-alley.png "https://images.utaharchives.gov/digital/iiif/20120/12065/full/1160,/0/default.jpg"

# 2. Japanese Balloon Bomb (from Utah Archives or similar)
# Using a specific declassified photo URL or similar
curl -L -o public/salt-lake-city/articles/balloon-bomb.png "https://upload.wikimedia.org/wikipedia/commons/4/4e/Japanese_balloon_weapon.jpg"

# 3. Bonneville Salt Flats
curl -L -o public/salt-lake-city/iconic-spots/salt-flats.jpg "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Bonneville_Salt_Flats_Utah.jpg/1280px-Bonneville_Salt_Flats_Utah.jpg"

# 4. This Is The Place Monument
curl -L -o public/salt-lake-city/iconic-spots/this-is-the-place.jpg "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/This_Is_The_Place_Monument_SLC.jpg/1280px-This_Is_The_Place_Monument_SLC.jpg"

# 5. Greatest Snow (already works but let's be sure)
curl -L -o public/salt-lake-city/curiosities/greatest-snow.jpg "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Utah_%E2%80%9Cgreatest_snow_on_earth%E2%80%9D_embossed_license_plate.jpg/1280px-Utah_%E2%80%9Cgreatest_snow_on_earth%E2%80%9D_embossed_license_plate.jpg"

echo "Check file types..."
file public/salt-lake-city/articles/plum-alley.png
file public/salt-lake-city/articles/balloon-bomb.png
file public/salt-lake-city/iconic-spots/salt-flats.jpg
file public/salt-lake-city/iconic-spots/this-is-the-place.jpg
file public/salt-lake-city/curiosities/greatest-snow.jpg
