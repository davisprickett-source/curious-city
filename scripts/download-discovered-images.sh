#!/bin/bash

# Create directories
mkdir -p public/anchorage/curiosities
mkdir -p public/chicago/hidden-gems

# Define user agent
UA="CuriousCity/1.0 (https://curious.city; info@curious.city)"

# Anchorage Curiosities
echo "Downloading Anchorage images..."
curl -L -H "User-Agent: $UA" -o public/anchorage/curiosities/earthquake-fourth-ave.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/AlaskaQuake-FourthAve.jpg"
curl -L -H "User-Agent: $UA" -o public/anchorage/curiosities/aurora-borealis.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/Aurora_borealis_in_Alaska.jpg"
curl -L -H "User-Agent: $UA" -o public/anchorage/curiosities/iditarod-start.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/Iditarod_in_Anchorage_Alaska.jpg"
curl -L -H "User-Agent: $UA" -o public/anchorage/curiosities/urban-moose.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/Moose_in_Anchorage,_Alaska.jpg"
curl -L -H "User-Agent: $UA" -o public/anchorage/curiosities/portage-glacier.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/Portage_Glacier_Alaska.jpg"
curl -L -H "User-Agent: $UA" -o public/anchorage/curiosities/earthquake-park.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/Earthquake_Park_Anchorage.jpg"

# Chicago Hidden Gems
echo "Downloading Chicago images..."
curl -L -H "User-Agent: $UA" -o public/chicago/hidden-gems/green-mill.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/Green_Mill_Cocktail_Lounge.jpg"
curl -L -H "User-Agent: $UA" -o public/chicago/hidden-gems/pullman-monument.jpg "https://commons.wikimedia.org/wiki/Special:FilePath/Pullman_Admin_Clock_Tower_Building.jpg"

echo "Download complete."
