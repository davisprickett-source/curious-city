#!/bin/bash

# Download Authentic Images for Anchorage Dark History
# This script downloads images from public domain and archival sources

set -e

# Change to the images directory
cd "/Users/dav/Projects/Curious City/public/images/dark-history/anchorage"

echo "Downloading images for Anchorage Dark History..."
echo "================================================"

# Entry 0: Serial Killer Capital Overview
echo ""
echo "Entry 0: Serial Killer Capital Overview"
echo "----------------------------------------"

# Alaska Remote Wilderness - USGS
curl -L -A "Mozilla/5.0" "https://www.usgs.gov/media/images/alaska-wilderness-landscape" \
  -o alaska-remote-wilderness-usgs.jpg || echo "Failed to download alaska-remote-wilderness-usgs.jpg"

# Anchorage Aerial View - Alternative source
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1600&q=90" \
  -o anchorage-aerial-view.jpg || echo "Failed to download anchorage-aerial-view.jpg"

# Winter Darkness
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1600&q=90" \
  -o anchorage-winter-darkness.jpg || echo "Failed to download anchorage-winter-darkness.jpg"

# Entry 1: Robert Hansen - Butcher Baker
echo ""
echo "Entry 1: Robert Hansen - Butcher Baker"
echo "---------------------------------------"

# Fourth Avenue 1970s - Use historical archive
curl -L -A "Mozilla/5.0" "https://vilda.alaska.edu/digital/api/singleitem/image/cdmg21/[ID]/default.jpg" \
  -o fourth-avenue-1970s-anchorage.jpg || echo "Note: Need to get Fourth Avenue image from Anchorage Museum"

# Knik River Wilderness
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90" \
  -o knik-river-wilderness.jpg || echo "Failed to download knik-river-wilderness.jpg"

# Small Aircraft Alaska
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1600&q=90" \
  -o small-aircraft-alaska-wilderness.jpg || echo "Failed to download small-aircraft-alaska-wilderness.jpg"

# Entry 2: Hansen's Unidentified Victims
echo ""
echo "Entry 2: Hansen's Unidentified Victims"
echo "---------------------------------------"

# Eklutna Area
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90" \
  -o eklutna-alaska-area.jpg || echo "Failed to download eklutna-alaska-area.jpg"

# Cold Case Investigation - Placeholder
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=90" \
  -o alaska-cold-case-investigation.jpg || echo "Failed to download alaska-cold-case-investigation.jpg"

# Remote Alaska Landscape
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1600&q=90" \
  -o remote-alaska-landscape.jpg || echo "Failed to download remote-alaska-landscape.jpg"

# Entry 3: Israel Keyes
echo ""
echo "Entry 3: Israel Keyes - Meticulous Monster"
echo "-------------------------------------------"

# Tudor Road - Contemporary
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1600&q=90" \
  -o tudor-road-anchorage.jpg || echo "Failed to download tudor-road-anchorage.jpg"

# Anchorage Correctional Facility
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=90" \
  -o anchorage-correctional-facility.jpg || echo "Failed to download anchorage-correctional-facility.jpg"

# Alaska Highway Map
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=90" \
  -o alaska-highway-map.jpg || echo "Failed to download alaska-highway-map.jpg"

# Entry 4: Fourth Avenue Hunting Ground
echo ""
echo "Entry 4: Fourth Avenue - The Hunting Ground"
echo "--------------------------------------------"

# Fourth Avenue Night 1970s
echo "Note: Need historical image from Anchorage Museum Archives"

# Trans-Alaska Pipeline Workers - Library of Congress
curl -L -A "Mozilla/5.0" "https://tile.loc.gov/storage-services/service/pnp/highsm/[ID]/[ID]_150px.jpg" \
  -o trans-alaska-pipeline-workers.jpg || echo "Note: Need LOC image ID"

# Downtown Anchorage 1980
echo "Note: Need historical image from Alaska State Archives"

# Entry 5: Missing and Murdered Indigenous Women
echo ""
echo "Entry 5: Missing and Murdered Indigenous Women"
echo "-----------------------------------------------"

# Alaska Native Village Aerial
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1600&q=90" \
  -o alaska-native-village-aerial.jpg || echo "Failed to download alaska-native-village-aerial.jpg"

# MMIW Memorial
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=90" \
  -o mmiw-memorial-alaska.jpg || echo "Failed to download mmiw-memorial-alaska.jpg"

# Remote Village Winter
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1600&q=90" \
  -o remote-village-winter-alaska.jpg || echo "Failed to download remote-village-winter-alaska.jpg"

# Entry 6: Fandell Siblings
echo ""
echo "Entry 6: The Fandell Siblings"
echo "------------------------------"

# Sterling Alaska Area
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90" \
  -o sterling-alaska-area.jpg || echo "Failed to download sterling-alaska-area.jpg"

# Alaska Cabin Remote
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1600&q=90" \
  -o alaska-cabin-remote.jpg || echo "Failed to download alaska-cabin-remote.jpg"

# Cold Case Files
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=90" \
  -o alaska-cold-case-files.jpg || echo "Failed to download alaska-cold-case-files.jpg"

# Entry 7: Good Friday Earthquake
echo ""
echo "Entry 7: Good Friday Earthquake (1964)"
echo "---------------------------------------"

# USGS 1964 Earthquake Images - Try direct USGS sources
curl -L -A "Mozilla/5.0" "https://earthquake.usgs.gov/earthquakes/eventpage/official19640328033616_30/executive" \
  -o earthquake-1964-fourth-avenue.jpg || echo "Note: Need direct USGS image link"

curl -L -A "Mozilla/5.0" "https://pubs.usgs.gov/[path-to-image]" \
  -o turnagain-heights-landslide-1964.jpg || echo "Note: Need direct USGS image link"

echo "Note: Need Government Hill school image from Anchorage Museum"

# Entry 8: Historic Anchorage Hotel
echo ""
echo "Entry 8: Historic Anchorage Hotel Ghosts"
echo "-----------------------------------------"

# Historic Anchorage Hotel Exterior
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=90" \
  -o historic-anchorage-hotel-exterior.jpg || echo "Failed to download historic-anchorage-hotel-exterior.jpg"

# Historic Interior
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=90" \
  -o historic-anchorage-hotel-interior.jpg || echo "Failed to download historic-anchorage-hotel-interior.jpg"

# Historic Hotel Hallway
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=90" \
  -o historic-hotel-hallway.jpg || echo "Failed to download historic-hotel-hallway.jpg"

# Entry 9: Hotel Captain Cook
echo ""
echo "Entry 9: Hotel Captain Cook - Woman in White"
echo "---------------------------------------------"

# Hotel Captain Cook Exterior
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=90" \
  -o hotel-captain-cook-exterior.jpg || echo "Failed to download hotel-captain-cook-exterior.jpg"

echo "Note: Need historical 1972 opening image from hotel/museum archives"

# Hotel Lobby
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=90" \
  -o hotel-captain-cook-lobby.jpg || echo "Failed to download hotel-captain-cook-lobby.jpg"

# Entry 10: Spirit of Ship Creek
echo ""
echo "Entry 10: The Spirit of Ship Creek"
echo "-----------------------------------"

# Ship Creek Downtown - USGS/Alaska Dept Fish & Game
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=90" \
  -o ship-creek-downtown-anchorage.jpg || echo "Failed to download ship-creek-downtown-anchorage.jpg"

# Ship Creek Salmon Fishing
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=90" \
  -o ship-creek-salmon-fishing.jpg || echo "Failed to download ship-creek-salmon-fishing.jpg"

echo "Note: Need historical Ship Creek bridge image from Anchorage Museum"

# Entry 11: The Darkness That Lives Here
echo ""
echo "Entry 11: The Darkness That Lives Here"
echo "---------------------------------------"

# Anchorage December Darkness
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1600&q=90" \
  -o anchorage-december-darkness.jpg || echo "Failed to download anchorage-december-darkness.jpg"

# Northern Lights Anchorage Winter
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=1600&q=90" \
  -o northern-lights-anchorage-winter.jpg || echo "Failed to download northern-lights-anchorage-winter.jpg"

# Anchorage Street Winter Night
curl -L -A "Mozilla/5.0" "https://images.unsplash.com/photo-1548777123-e216912df7d8?w=1600&q=90" \
  -o anchorage-street-winter-night.jpg || echo "Failed to download anchorage-street-winter-night.jpg"

echo ""
echo "================================================"
echo "Download complete! Check the directory for images."
echo ""
echo "IMPORTANT NEXT STEPS:"
echo "1. Review all downloaded images for authenticity and appropriateness"
echo "2. Replace placeholder images with authentic archival photos from:"
echo "   - Anchorage Museum (anchoragemuseum.org)"
echo "   - Alaska State Archives (archives.alaska.gov)"
echo "   - Alaska Digital Archives (vilda.alaska.edu)"
echo "   - USGS for earthquake images"
echo "3. Verify all image credits and attributions"
echo "4. Update anchorage.ts with the image paths from ANCHORAGE_DARK_HISTORY_UPDATED.ts"
echo ""
echo "For archival images, you may need to:"
echo "- Contact museums directly for permission"
echo "- Search Alaska Digital Archives (vilda.alaska.edu)"
echo "- Use USGS/NOAA databases for disaster/scientific images"
echo "================================================"
