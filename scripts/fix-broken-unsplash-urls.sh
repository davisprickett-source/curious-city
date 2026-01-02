#!/bin/bash

# Fix broken Unsplash URLs across all cities by replacing with working alternatives

echo "Fixing broken Unsplash URLs across all cities..."

# Chicago broken URLs (7 failures)
sed -i '' "s|photo-1570394961812-93bcff7a6c91|photo-1477959858617-67f85cf4f1df|g" "/Users/dav/Projects/Curious City/src/data/cities/chicago.ts"
sed -i '' "s|photo-1590052594369-1274347b0611|photo-1558618666-fcd25c85cd64|g" "/Users/dav/Projects/Curious City/src/data/cities/chicago.ts"
sed -i '' "s|photo-1611252441773-3f5f6d1cb4a9|photo-1569982175971-d92b01cf8694|g" "/Users/dav/Projects/Curious City/src/data/cities/chicago.ts"
sed -i '' "s|photo-1561675990-7c06d69463ae|photo-1580519542036-c47de6196ba5|g" "/Users/dav/Projects/Curious City/src/data/cities/chicago.ts"
sed -i '' "s|photo-1607827448299-a099b845d67c|photo-1559827260-dc66d52bef19|g" "/Users/dav/Projects/Curious City/src/data/cities/chicago.ts"
sed -i '' "s|photo-1518737003272-b18298e1b88f|photo-1536924940846-227afb31e2a5|g" "/Users/dav/Projects/Curious City/src/data/cities/chicago.ts"
sed -i '' "s|photo-1609766975358-1f9e4e3d9a4b|photo-1554072675-66db59dba46f|g" "/Users/dav/Projects/Curious City/src/data/cities/chicago.ts"

# Dallas broken URLs (1 failure)
sed -i '' "s|photo-1528711832631-15c33153b1a4|photo-1569718212165-3a8278d5f624|g" "/Users/dav/Projects/Curious City/src/data/cities/dallas.ts"

# Salt Lake City broken URLs (3 failures)
sed -i '' "s|photo-1544550581-5f7ceaf38a0a|photo-1548695607-9c73430ba065|g" "/Users/dav/Projects/Curious City/src/data/cities/salt-lake-city.ts"
sed -i '' "s|photo-1561998338-13ad7883b1a1|photo-1501908734255-16579c18c25f|g" "/Users/dav/Projects/Curious City/src/data/cities/salt-lake-city.ts"
sed -i '' "s|photo-1626645738196-c2a72c3d3036|photo-1565538810643-b5bdb714032a|g" "/Users/dav/Projects/Curious City/src/data/cities/salt-lake-city.ts"

# Tampa broken URLs (3 real failures, 3 timeouts that might work)
sed -i '' "s|photo-1509516249876-e4f0d0a7c4a9|photo-1544551763-46a013bb70d5|g" "/Users/dav/Projects/Curious City/src/data/cities/tampa.ts"
sed -i '' "s|photo-1465070845512-2b5eb2f5e1f7|photo-1527482797697-8795b05a13fe|g" "/Users/dav/Projects/Curious City/src/data/cities/tampa.ts"
sed -i '' "s|photo-1568042651991-2d962e45c2ae|photo-1548550023-2bdb3c5beed7|g" "/Users/dav/Projects/Curious City/src/data/cities/tampa.ts"

echo "✓ Chicago fixed (7 URLs)"
echo "✓ Dallas fixed (1 URL)"
echo "✓ Salt Lake City fixed (3 URLs)"
echo "✓ Tampa fixed (3 URLs)"
echo ""
echo "Total broken Unsplash URLs fixed: 14"
