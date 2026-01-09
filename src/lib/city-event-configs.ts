/**
 * City-specific event configurations
 *
 * Each city has:
 * - Venue tiers (premium, good, avoid)
 * - Priority categories for that city's vibe
 * - Local tags that indicate "cool"
 * - API-specific settings
 */

export interface CityEventConfig {
  slug: string
  name: string

  // Venue tiers for scoring
  venues: {
    premium: string[]  // Iconic venues, always boost
    good: string[]     // Reliable quality venues
    avoid: string[]    // Corporate/tourist trap venues
  }

  // Categories to prioritize for this city's identity
  priorityCategories?: string[]

  // Tags that indicate "cool" for this city
  coolTags?: string[]

  // API settings
  api: {
    ticketmaster?: {
      marketId?: string  // DMA market ID
      stateCode: string
    }
    eventbrite: {
      locationAddress: string
      locationWithin?: string  // Default: 25mi
    }
  }
}

export const cityEventConfigs: Record<string, CityEventConfig> = {
  minneapolis: {
    slug: 'minneapolis',
    name: 'Minneapolis',
    venues: {
      premium: [
        'First Avenue',
        '7th Street Entry',
        'Walker Art Center',
        'Minnesota Orchestra',
        'Orchestra Hall',
        'Guthrie Theater',
        'Icehouse',
        'Dakota Jazz Club',
      ],
      good: [
        'Triple Rock Social Club',
        'Bryant-Lake Bowl',
        'Turf Club',
        'Cedar Cultural Center',
        'Varsity Theater',
        'Fine Line',
        'Parkway Theater',
        'Trylon Cinema',
        'Electric Fetus',
        'Surly Brewing',
        'Indeed Brewing',
        'Ingebretsen\'s',
        'Mill City Museum',
        'Minneapolis Institute of Art',
        'Midtown Global Market',
      ],
      avoid: [
        'Minneapolis Convention Center',
        'Mall of America',
        'US Bank Stadium',  // Unless it's a major concert
        'Target Center',    // Generic arena shows
        'Marriott',
        'Hilton',
        'Hyatt',
      ],
    },
    priorityCategories: ['music', 'art', 'local', 'craft beer'],
    coolTags: ['underground', 'local', 'experimental', 'nordic', 'prince'],
    api: {
      ticketmaster: { stateCode: 'MN' },
      eventbrite: { locationAddress: 'Minneapolis, MN' },
    },
  },

  chicago: {
    slug: 'chicago',
    name: 'Chicago',
    venues: {
      premium: [
        'Metro',
        'Empty Bottle',
        'Thalia Hall',
        'Art Institute of Chicago',
        'Chicago Theatre',
        'Hideout',
        'Kingston Mines',
        'Green Mill',
        'Second City',
        'Steppenwolf Theatre',
      ],
      good: [
        'Lincoln Hall',
        'Schubas',
        'Sleeping Village',
        'The Promontory',
        'Constellation',
        'Logan Square Auditorium',
        'Music Box Theatre',
        'Gene Siskel Film Center',
        'House of Blues',
        'Buddy Guy\'s Legends',
        'Chicago Cultural Center',
      ],
      avoid: [
        'McCormick Place',
        'Navy Pier',
        'United Center',  // Unless major concert
        'Wrigley Field',  // Unless major concert
        'Marriott',
        'Hilton',
      ],
    },
    priorityCategories: ['music', 'comedy', 'theater', 'jazz', 'blues'],
    coolTags: ['underground', 'local', 'improv', 'jazz', 'blues', 'house music'],
    api: {
      ticketmaster: { stateCode: 'IL' },
      eventbrite: { locationAddress: 'Chicago, IL' },
    },
  },

  portland: {
    slug: 'portland',
    name: 'Portland',
    venues: {
      premium: [
        'Crystal Ballroom',
        'Doug Fir Lounge',
        'Revolution Hall',
        'Mississippi Studios',
        'Portland Art Museum',
        'Lan Su Chinese Garden',
        'McMenamins',
        'Alberta Rose Theatre',
      ],
      good: [
        'Wonder Ballroom',
        'Holocene',
        'Star Theater',
        'Polaris Hall',
        'Clinton Street Theater',
        'Hollywood Theatre',
        'Hawthorne Theatre',
        'Powell\'s Books',
        'Ground Kontrol',
      ],
      avoid: [
        'Oregon Convention Center',
        'Moda Center',
        'Portland Expo Center',
        'Marriott',
        'Hilton',
      ],
    },
    priorityCategories: ['music', 'indie', 'craft beer', 'coffee', 'film'],
    coolTags: ['local', 'indie', 'DIY', 'weird', 'keep portland weird'],
    api: {
      ticketmaster: { stateCode: 'OR' },
      eventbrite: { locationAddress: 'Portland, OR' },
    },
  },

  denver: {
    slug: 'denver',
    name: 'Denver',
    venues: {
      premium: [
        'Red Rocks Amphitheatre',
        'Bluebird Theater',
        'Gothic Theatre',
        'Ogden Theatre',
        'Denver Art Museum',
        'Meow Wolf',
      ],
      good: [
        'Cervantes\' Masterpiece Ballroom',
        'Globe Hall',
        'Hi-Dive',
        'Lost Lake Lounge',
        'Larimer Lounge',
        'Oriental Theater',
        'Denver Botanic Gardens',
        'Tattered Cover',
      ],
      avoid: [
        'Colorado Convention Center',
        'Ball Arena',  // Unless major show
        'Empower Field',
        'Marriott',
        'Hilton',
      ],
    },
    priorityCategories: ['music', 'outdoor', 'craft beer', 'art'],
    coolTags: ['local', 'mountain', 'craft', 'outdoor', 'jam band'],
    api: {
      ticketmaster: { stateCode: 'CO' },
      eventbrite: { locationAddress: 'Denver, CO' },
    },
  },

  phoenix: {
    slug: 'phoenix',
    name: 'Phoenix',
    venues: {
      premium: [
        'Crescent Ballroom',
        'The Van Buren',
        'Musical Instrument Museum',
        'Phoenix Art Museum',
        'Heard Museum',
        'Orpheum Theatre',
      ],
      good: [
        'Valley Bar',
        'The Rebel Lounge',
        'Rhythm Room',
        'Last Exit Live',
        'Trunk Space',
        'FilmBar',
        'Alamo Drafthouse',
        'Bitter & Twisted',
      ],
      avoid: [
        'Phoenix Convention Center',
        'State Farm Stadium',
        'Footprint Center',
        'Marriott',
        'Hilton',
      ],
    },
    priorityCategories: ['music', 'art', 'desert', 'local'],
    coolTags: ['local', 'desert', 'southwestern', 'underground'],
    api: {
      ticketmaster: { stateCode: 'AZ' },
      eventbrite: { locationAddress: 'Phoenix, AZ' },
    },
  },

  dallas: {
    slug: 'dallas',
    name: 'Dallas',
    venues: {
      premium: [
        'Granada Theater',
        'Trees',
        'Deep Ellum Art Company',
        'Dallas Museum of Art',
        'Nasher Sculpture Center',
        'AT&T Performing Arts Center',
      ],
      good: [
        'Club Dada',
        'Three Links',
        'Double Wide',
        'Kessler Theater',
        'Texas Theatre',
        'Alamo Drafthouse',
        'Sons of Hermann Hall',
        'AllGood Cafe',
      ],
      avoid: [
        'Kay Bailey Hutchison Convention Center',
        'AT&T Stadium',
        'American Airlines Center',
        'Marriott',
        'Hilton',
      ],
    },
    priorityCategories: ['music', 'tex-mex', 'art', 'local'],
    coolTags: ['deep ellum', 'local', 'texas', 'honky tonk'],
    api: {
      ticketmaster: { stateCode: 'TX' },
      eventbrite: { locationAddress: 'Dallas, TX' },
    },
  },

  'salt-lake-city': {
    slug: 'salt-lake-city',
    name: 'Salt Lake City',
    venues: {
      premium: [
        'The Depot',
        'The State Room',
        'Red Butte Garden',
        'Utah Museum of Fine Arts',
        'Eccles Theater',
      ],
      good: [
        'Urban Lounge',
        'Kilby Court',
        'Metro Music Hall',
        'The Complex',
        'Tower Theatre',
        'Broadway Centre Cinemas',
        'Squatters',
        'Epic Brewing',
      ],
      avoid: [
        'Salt Palace Convention Center',
        'Vivint Arena',
        'Rice-Eccles Stadium',
        'Marriott',
        'Hilton',
      ],
    },
    priorityCategories: ['music', 'outdoor', 'indie', 'skiing'],
    coolTags: ['local', 'indie', 'mountain', 'outdoor'],
    api: {
      ticketmaster: { stateCode: 'UT' },
      eventbrite: { locationAddress: 'Salt Lake City, UT' },
    },
  },

  raleigh: {
    slug: 'raleigh',
    name: 'Raleigh',
    venues: {
      premium: [
        'Lincoln Theatre',
        'The Ritz',
        'Cat\'s Cradle',
        'North Carolina Museum of Art',
        'Duke Energy Center',
      ],
      good: [
        'Pour House Music Hall',
        'Slim\'s',
        'The Pinhook',
        'Motorco Music Hall',
        'Carolina Theatre',
        'Alamo Drafthouse',
        'Trophy Brewing',
      ],
      avoid: [
        'Raleigh Convention Center',
        'PNC Arena',
        'Carter-Finley Stadium',
        'Marriott',
        'Hilton',
      ],
    },
    priorityCategories: ['music', 'indie', 'local', 'bbq'],
    coolTags: ['local', 'triangle', 'indie', 'southern'],
    api: {
      ticketmaster: { stateCode: 'NC' },
      eventbrite: { locationAddress: 'Raleigh, NC' },
    },
  },

  tampa: {
    slug: 'tampa',
    name: 'Tampa',
    venues: {
      premium: [
        'The Ritz Ybor',
        'Crowbar',
        'Tampa Theatre',
        'Tampa Museum of Art',
        'Straz Center',
      ],
      good: [
        'Orpheum',
        'The Attic',
        'Hooch and Hive',
        'Skipper\'s Smokehouse',
        'Cigar City Brewing',
        'The Cuban Club',
        'Ybor City',
      ],
      avoid: [
        'Tampa Convention Center',
        'Raymond James Stadium',
        'Amalie Arena',
        'Marriott',
        'Hilton',
      ],
    },
    priorityCategories: ['music', 'cuban', 'latin', 'local'],
    coolTags: ['local', 'ybor', 'cuban', 'latin', 'tampa metal'],
    api: {
      ticketmaster: { stateCode: 'FL' },
      eventbrite: { locationAddress: 'Tampa, FL' },
    },
  },

  anchorage: {
    slug: 'anchorage',
    name: 'Anchorage',
    venues: {
      premium: [
        'Bear Tooth Theatre',
        'Anchorage Museum',
        'Alaska Center for Performing Arts',
      ],
      good: [
        'Williwaw',
        'The Taproot',
        'Midnight Sun Brewing',
        '49th State Brewing',
        'Snow Goose Restaurant',
      ],
      avoid: [
        'Dena\'ina Civic and Convention Center',
        'Alaska Airlines Center',
        'Marriott',
        'Hilton',
      ],
    },
    priorityCategories: ['music', 'outdoor', 'local', 'alaska'],
    coolTags: ['local', 'alaska', 'aurora', 'wilderness'],
    api: {
      ticketmaster: { stateCode: 'AK' },
      eventbrite: { locationAddress: 'Anchorage, AK' },
    },
  },

  'colorado-springs': {
    slug: 'colorado-springs',
    name: 'Colorado Springs',
    venues: {
      premium: [
        'Pikes Peak Center',
        'Black Sheep',
        'Colorado Springs Fine Arts Center',
      ],
      good: [
        'Lulu\'s Downstairs',
        'The Gold Room',
        'Ivywild School',
        'Bristol Brewing',
        'Cerberus Brewing',
      ],
      avoid: [
        'Broadmoor World Arena',
        'Marriott',
        'Hilton',
      ],
    },
    priorityCategories: ['music', 'outdoor', 'local', 'military'],
    coolTags: ['local', 'pikes peak', 'mountain', 'outdoor'],
    api: {
      ticketmaster: { stateCode: 'CO' },
      eventbrite: { locationAddress: 'Colorado Springs, CO' },
    },
  },

  fargo: {
    slug: 'fargo',
    name: 'Fargo',
    venues: {
      premium: [
        'The Aquarium',
        'Fargo Theatre',
        'Plains Art Museum',
      ],
      good: [
        'Dempsey\'s',
        'The Sanctuary',
        'Fargo Brewing',
        'Junkyard Brewing',
        'Red Raven',
      ],
      avoid: [
        'Fargodome',
        'Marriott',
        'Hilton',
      ],
    },
    priorityCategories: ['music', 'local', 'nordic'],
    coolTags: ['local', 'nordic', 'fargo', 'midwest'],
    api: {
      ticketmaster: { stateCode: 'ND' },
      eventbrite: { locationAddress: 'Fargo, ND' },
    },
  },

  seattle: {
    slug: 'seattle',
    name: 'Seattle',
    venues: {
      premium: [
        'The Showbox',
        'Neumos',
        'The Crocodile',
        'Triple Door',
        'Seattle Art Museum',
        'MoPOP',
        'Paramount Theatre',
        'Moore Theatre',
      ],
      good: [
        'Tractor Tavern',
        'The Vera Project',
        'Barboza',
        'Clock-Out Lounge',
        'Nectar Lounge',
        'Fremont Abbey',
        'SIFF Cinema',
        'Northwest Film Forum',
        'Elliott Bay Book Company',
        'Easy Street Records',
      ],
      avoid: [
        'Washington State Convention Center',
        'Climate Pledge Arena',
        'Lumen Field',
        'T-Mobile Park',
        'Marriott',
        'Hilton',
      ],
    },
    priorityCategories: ['music', 'indie', 'coffee', 'tech', 'film'],
    coolTags: ['local', 'indie', 'grunge', 'pacific northwest', 'DIY'],
    api: {
      ticketmaster: { stateCode: 'WA' },
      eventbrite: { locationAddress: 'Seattle, WA' },
    },
  },
}

export function getCityEventConfig(slug: string): CityEventConfig | undefined {
  return cityEventConfigs[slug]
}

export function getAllCityEventConfigs(): CityEventConfig[] {
  return Object.values(cityEventConfigs)
}
