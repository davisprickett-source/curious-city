#!/bin/bash

# Define user agent
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

# Fix SLC images with thumb.php
echo "Downloading SLC images with thumb.php method..."

# Salt Flats
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/iconic-spots/salt-flats.jpg "https://commons.wikimedia.org/w/thumb.php?f=Bonneville%20Salt%20Flats%20Utah.jpg&w=1200"

# This Is The Place
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/iconic-spots/this-is-the-place.jpg "https://commons.wikimedia.org/w/thumb.php?f=This%20Is%20The%20Place%20Monument%20SLC.jpg&w=1200"

# Plum Alley
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/articles/plum-alley.png "https://commons.wikimedia.org/w/thumb.php?f=Salt%20Lake%20City%20Chinatown%201910.jpg&w=1200"

# Balloon Bomb
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/articles/balloon-bomb.png "https://commons.wikimedia.org/w/thumb.php?f=Japanese%20Fu-Go%20Balloon%20Bomb.jpg&w=1200"

echo "Check file types..."
file public/salt-lake-city/iconic-spots/salt-flats.jpg
file public/salt-lake-city/iconic-spots/this-is-the-place.jpg
file public/salt-lake-city/articles/plum-alley.png
file public/salt-lake-city/articles/balloon-bomb.png
