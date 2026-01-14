#!/bin/bash

# Fix SLC images by using the most direct and simple method
echo "Downloading SLC images with direct links..."

# Greatest Snow
curl -L -o public/salt-lake-city/curiosities/greatest-snow.jpg "https://upload.wikimedia.org/wikipedia/commons/4/46/Utah_%E2%80%9Cgreatest_snow_on_earth%E2%80%9D_embossed_license_plate.jpg"

# Spiral Jetty
curl -L -o public/salt-lake-city/iconic-spots/spiral-jetty.jpg "https://upload.wikimedia.org/wikipedia/commons/8/84/Spiral-jetty-from-rozel-point.png"

# Salt Flats (Using a different known working image)
curl -L -o public/salt-lake-city/iconic-spots/salt-flats.jpg "https://upload.wikimedia.org/wikipedia/commons/b/b1/Bonneville_Salt_Flats%2C_Utah.jpg"

# This Is The Place
curl -L -o public/salt-lake-city/iconic-spots/this-is-the-place.jpg "https://upload.wikimedia.org/wikipedia/commons/d/d7/This_Is_The_Place_Monument_SLC.jpg"

# Plum Alley (From Wikipedia page og:image)
curl -L -o public/salt-lake-city/articles/plum-alley.png "https://upload.wikimedia.org/wikipedia/commons/a/a7/Salt_Lake_City_Chinatown_1910.jpg"

# Balloon Bomb
curl -L -o public/salt-lake-city/articles/balloon-bomb.png "https://upload.wikimedia.org/wikipedia/commons/4/4e/Japanese_balloon_weapon.jpg"

echo "Checking results..."
file public/salt-lake-city/curiosities/greatest-snow.jpg
file public/salt-lake-city/iconic-spots/spiral-jetty.jpg
file public/salt-lake-city/iconic-spots/salt-flats.jpg
file public/salt-lake-city/iconic-spots/this-is-the-place.jpg
file public/salt-lake-city/articles/plum-alley.png
file public/salt-lake-city/articles/balloon-bomb.png
