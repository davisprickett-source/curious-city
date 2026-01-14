#!/bin/bash

# Define user agent
UA="CuriousCity/1.0 (https://curious.city; info@curious.city)"

# Fix SLC images with Special:Redirect/file
echo "Downloading SLC images with Special:Redirect..."

# Salt Flats
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/iconic-spots/salt-flats.jpg "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bonneville%20Salt%20Flats%20Utah.jpg"

# This Is The Place
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/iconic-spots/this-is-the-place.jpg "https://commons.wikimedia.org/wiki/Special:Redirect/file/This%20Is%20The%20Place%20Monument%20SLC.jpg"

# Plum Alley
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/articles/plum-alley.png "https://commons.wikimedia.org/wiki/Special:Redirect/file/Salt%20Lake%20City%20Chinatown%201910.jpg"

# Balloon Bomb
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/articles/balloon-bomb.png "https://commons.wikimedia.org/wiki/Special:Redirect/file/Japanese%20Fu-Go%20Balloon%20Bomb.jpg"

echo "Check file types..."
file public/salt-lake-city/iconic-spots/salt-flats.jpg
file public/salt-lake-city/iconic-spots/this-is-the-place.jpg
file public/salt-lake-city/articles/plum-alley.png
file public/salt-lake-city/articles/balloon-bomb.png
