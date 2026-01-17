// Archived items from Phoenix
// These entries were removed from the main file but preserved for potential future use

export const phoenixArchivedCuriosities = [
  {
    id: 'phx-curiosity-pyramid',
    type: 'curiosity',
    category: 'legend',
    archivedReason: 'Consolidated into hidden gem entry (gem-hunts-tomb) - visitable location fits better as hidden gem',
    title: 'Arizona\'s first governor is buried in a King Tut pyramid',
    body: 'George W.P. Hunt served as Arizona\'s first governor for seven terms. When King Tut\'s tomb was discovered in 1922, Hunt became obsessed with pyramid burial. He commissioned a white-tiled pyramid tomb in Papago Park for himself and his family—complete with Egyptian hieroglyphics and a copper dome. Hunt was a progressive who fought for women\'s suffrage, abolished child labor, and did his own grocery shopping (scandalous for 1920s men). He also knitted scarves for soldiers during WWI. When he died in 1934, they entombed him in his pyramid. His wife Annie joined him there in 1940. The tomb still stands on a red sandstone hill, visible from the highway—Arizona\'s weirdest monument to its least conventional governor.',
    image: {
      src: '/phoenix/curiosities/hunt-pyramid.png',
      alt: 'Governor Hunt pyramid tomb in Papago Park',
    },
    sources: [
      {
        title: 'Arizona State Library: Governor George W.P. Hunt',
        url: 'https://azlibrary.gov/dazl/george-wp-hunt',
      },
      {
        title: 'Downtown Phoenix: Fun Facts About Phoenix',
        url: 'https://dtphx.org/post/12-fun-facts-you-may-not-know-about-downtown-phoenix',
      },
    ],
    location: {
      name: 'Papago Park',
      stillExists: true,
    },
  },
]

export const phoenixArchivedHiddenGems = [
  {
    id: 'gem-mural-alley',
    type: 'hidden-gem',
    name: 'Mural Alley (1 1/2 Street)',
    category: 'Hidden Art',
    archivedReason: 'Duplicate concept - Oak Street Alley Murals already covers hidden mural alleys in Phoenix',
    description:
      'Heart of Roosevelt Row but hard to find. Behind The Churchill food pavilion. Dozen works by local artists. "Hidden in plain sight" according to locals. No street signage — behind buildings.',
    address: 'Behind The Churchill, Roosevelt Row',
    coordinates: { lat: 33.4567, lng: -112.0633 },
    hours: 'Always accessible',
    price: 'Free',
    tip: 'Access from Roosevelt or 5th Street — between the buildings.',
  },
]
