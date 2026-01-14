#!/bin/bash

# Consolidate SLC curiosities
mkdir -p public/salt-lake-city/curiosities
mv public/salt-lake-city/Curiosities/* public/salt-lake-city/curiosities/ 2>/dev/null
rmdir public/salt-lake-city/Curiosities 2>/dev/null

# Define user agent
UA="CuriousCity/1.0 (https://curious.city; info@curious.city)"

# Download raw images from Wikimedia Commons correctly
# Using Special:FilePath which redirects to the actual image file
echo "Downloading SLC images..."

# Greatest Snow on Earth License Plate
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/curiosities/greatest-snow.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/Utah_%E2%80%9Cgreatest_snow_on_earth%E2%80%9D_embossed_license_plate.jpg"

# Spiral Jetty
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/iconic-spots/spiral-jetty.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/Spiral-jetty-from-rozel-point.png"

# Bonneville Salt Flats
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/iconic-spots/salt-flats.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/Bonneville_Salt_Flats_Utah.jpg"

# Red Butte Garden
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/iconic-spots/red-butte.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/Red_Butte_Garden2.jpg"

# This Is The Place
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/iconic-spots/this-is-the-place.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/This_Is_The_Place_Monument_SLC.jpg"

# Gilgal Garden
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/iconic-spots/gilgal-garden.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/Gilgal_garden_1.JPG"

# Plum Alley
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/articles/plum-alley.png "https://commons.wikimedia.org/wiki/Special:FilePath/Salt_Lake_City_Chinatown_1910.jpg"

# Balloon Bomb
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/articles/balloon-bomb.png "https://commons.wikimedia.org/wiki/Special:FilePath/Japanese_Fu-Go_Balloon_Bomb.jpg"

echo "Download complete."
