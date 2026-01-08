// City banner images for use across the site
// Used in "Explore Cities" sections and city link cards

export const CITY_BANNERS: Record<string, string> = {
  'minneapolis': '/sequences/minneapolis/minn-1/frame_0001.jpg',
  'raleigh': '/sequences/raleigh/raleigh-1/frame_0001.jpg',
  'chicago': '/chicago/dark-history/theatrefire-1.png',
  'salt-lake-city': '/sequences/salt-lake-city/slc-1/frame_0001.jpg',
  'colorado-springs': '/colorado-springs/curiosities/garden-of-gods-1.png',
  'dallas': '/sequences/dallas/dallas-1/frame_0001.jpg',
  'anchorage': '/anchorage/curiosities/northern-lights-1.png',
  'fargo': '/fargo/curiosities/wood-chipper-1.png',
  'denver': '/denver/curiosities/blue-bear-1.png',
  'tampa': '/sequences/tampa/tampa-1/frame_0001.jpg',
  'phoenix': '/sequences/phoenix/phoenix-1/frame_0001.jpg',
  'portland': '/sequences/portland/portland-1/frame_0001.jpg',
}

export function getCityBanner(slug: string): string | undefined {
  return CITY_BANNERS[slug]
}
