#!/bin/bash

# Define user agent
UA="CuriousCity/1.0 (https://curious.city; info@curious.city)"

# Fix SLC images with Special:FilePath?width=1200
echo "Downloading SLC images with Special:FilePath and width param..."

# Salt Flats
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/iconic-spots/salt-flats.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/Bonneville%20Salt%20Flats%20Utah.jpg?width=1200"

# This Is The Place
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/iconic-spots/this-is-the-place.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/This%20Is%20The%20Place%20Monument%20SLC.jpg?width=1200"

# Plum Alley
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/articles/plum-alley.png "https://commons.wikimedia.org/wiki/Special:FilePath/Salt%20Lake%20City%20Chinatown%201910.jpg?width=1200"

# Balloon Bomb
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/articles/balloon-bomb.png "https://commons.wikimedia.org/wiki/Special:FilePath/Japanese%20Fu-Go%20Balloon%20Bomb.jpg?width=1200"

echo "Check file types..."
file public/salt-lake-city/iconic-spots/salt-flats.jpg
file public/salt-lake-city/iconic-spots/this-is-the-place.jpg
file public/salt-lake-city/articles/plum-alley.png
file public/salt-lake-city/articles/balloon-bomb.png
