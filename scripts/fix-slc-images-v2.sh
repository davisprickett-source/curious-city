#!/bin/bash

# Define user agent
UA="CuriousCity/1.0 (https://curious.city; info@curious.city)"

# Fix SLC images with properly encoded URLs
echo "Downloading SLC images with correct encoding..."

# Greatest Snow
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/curiosities/greatest-snow.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/Utah_%E2%80%9Cgreatest_snow_on_earth%E2%80%9D_embossed_license_plate.jpg"

# Spiral Jetty
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/iconic-spots/spiral-jetty.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/Spiral-jetty-from-rozel-point.png"

# Salt Flats
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/iconic-spots/salt-flats.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/Bonneville%20Salt%20Flats%20Utah.jpg"

# Red Butte
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/iconic-spots/red-butte.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/Red%20Butte%20Garden2.jpg"

# This Is The Place
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/iconic-spots/this-is-the-place.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/This%20Is%20The%20Place%20Monument%20SLC.jpg"

# Gilgal Garden
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/iconic-spots/gilgal-garden.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/Gilgal%20garden%201.JPG"

# Plum Alley
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/articles/plum-alley.png "https://commons.wikimedia.org/wiki/Special:FilePath/Salt%20Lake%20City%20Chinatown%201910.jpg"

# Balloon Bomb
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/articles/balloon-bomb.png "https://commons.wikimedia.org/wiki/Special:FilePath/Japanese%20Fu-Go%20Balloon%20Bomb.jpg"

echo "Check file types..."
file public/salt-lake-city/curiosities/greatest-snow.jpg
file public/salt-lake-city/iconic-spots/spiral-jetty.jpg
file public/salt-lake-city/iconic-spots/salt-flats.jpg
file public/salt-lake-city/iconic-spots/red-butte.jpg
file public/salt-lake-city/iconic-spots/this-is-the-place.jpg
file public/salt-lake-city/iconic-spots/gilgal-garden.jpg
file public/salt-lake-city/articles/plum-alley.png
file public/salt-lake-city/articles/balloon-bomb.png
