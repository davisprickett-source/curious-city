#!/bin/bash

# Define user agent
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

# Fix SLC images with Special:FilePath via index.php
echo "Downloading SLC images with alternative method..."

# Greatest Snow
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/curiosities/greatest-snow.jpg "https://commons.wikimedia.org/w/index.php?title=Special:FilePath&file=Utah%20%E2%80%9Cgreatest%20snow%20on%20earth%E2%80%9D%20embossed%20license%20plate.jpg"

# Spiral Jetty
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/iconic-spots/spiral-jetty.jpg "https://commons.wikimedia.org/w/index.php?title=Special:FilePath&file=Spiral-jetty-from-rozel-point.png"

# Salt Flats
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/iconic-spots/salt-flats.jpg "https://commons.wikimedia.org/w/index.php?title=Special:FilePath&file=Bonneville%20Salt%20Flats%20Utah.jpg"

# This Is The Place
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/iconic-spots/this-is-the-place.jpg "https://commons.wikimedia.org/w/index.php?title=Special:FilePath&file=This%20Is%20The%20Place%20Monument%20SLC.jpg"

# Plum Alley
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/articles/plum-alley.png "https://commons.wikimedia.org/w/index.php?title=Special:FilePath&file=Salt%20Lake%20City%20Chinatown%201910.jpg"

# Balloon Bomb
curl -L -H "User-Agent: $UA" -o public/salt-lake-city/articles/balloon-bomb.png "https://commons.wikimedia.org/w/index.php?title=Special:FilePath&file=Japanese%20Fu-Go%20Balloon%20Bomb.jpg"

echo "Check file types..."
file public/salt-lake-city/curiosities/greatest-snow.jpg
file public/salt-lake-city/iconic-spots/spiral-jetty.jpg
file public/salt-lake-city/iconic-spots/salt-flats.jpg
file public/salt-lake-city/iconic-spots/this-is-the-place.jpg
file public/salt-lake-city/articles/plum-alley.png
file public/salt-lake-city/articles/balloon-bomb.png
