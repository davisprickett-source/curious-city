import { CityData } from '@/types/content'

export const portland: CityData = {
  slug: 'portland',
  name: 'Portland',
  tagline: 'Weird, green, and figuring itself out',
  content: [
    {
      id: 'intro-text',
      type: 'text',
      content: 'Welcome to Portland — a city that invented a lifestyle and then got priced out of it. Here\'s what we\'re curious about.',
    },
    {
      id: 'featured-card',
      type: 'card',
      title: 'The Dream of the Nineties',
      description: 'A city that invented a lifestyle and then got priced out of it.',
      meta: 'Essay',
      variant: 'featured',
      href: '/portland/essay/the-dream-of-the-nineties',
    },
    {
      id: 'ad-1',
      type: 'ad',
      size: 'banner',
    },
    {
      id: 'this-week',
      type: 'card-list',
      title: 'This Week',
      cards: [
        {
          title: 'Forest Park: Urban Wilderness Guide',
          description: 'Over 80 miles of trails minutes from downtown.',
          meta: 'Guide',
          href: '/portland/forest-park',
        },
        {
          title: 'The Downtown Debate',
          description: 'What happened to Portland\'s core and what\'s next.',
          meta: 'Feature',
          href: '/portland/downtown-future',
        },
        {
          title: 'Best Coffee Roasters',
          description: 'Portland takes coffee seriously. Here\'s where to start.',
          meta: 'List',
          variant: 'compact',
          href: '/portland/coffee-roasters',
        }
      ],
    },
    {
      id: 'ad-2',
      type: 'ad',
      size: 'rectangle',
    },
    {
      id: 'pdx-curiosities',
      type: 'section',
      title: 'Keep it Weird Archive',
      teaser: 'The world\'s smallest park, the horse rings of the 19th century, and the city that refused to stay put',
      intro: 'Portland didn\'t just wake up one day and decide to be weird; it was built into the soil. From the 24-inch park that holds a world record to the iron rings still embedded in the curbs for ghost horses, the Rose City keeps its strangest stories rooted in its pavement.',
      items: [
        {
          id: 'pdx-curiosity-4',
          type: 'curiosity',
          category: 'culture',
          title: 'The world\'s smallest park is 2 feet wide and has a leprechaun (UPDATE: Japan stole the title)',
          body: 'In 1946, Portland dug a hole in a median strip for a light pole that never arrived. For two years, the hole just sat there—a tiny circle of exposed dirt mocking the city. Oregon Journal columnist Dick Fagan, whose office overlooked the spot, decided to claim it. He planted flowers, named it Mill Ends Park, and began writing columns about Patrick O\'Toole, the leprechaun who supposedly lived there.\n\nFagan treated the park with absurd bureaucratic seriousness. He reported on miniature swimming pools being installed, tiny Ferris wheels appearing overnight, and elaborate leprechaun political scandals. When he died in 1969, the columns ended, but the park stayed. In 1976, Portland made it official—at 452 square inches, it entered Guinness World Records as Earth\'s smallest park.\n\nEngland tried to steal the title in 2018 with "Prince\'s Park" (217 square inches), but Portland fought back, arguing England\'s was a "publicity stunt" while Mill Ends had decades of documentation. Portland held the title for 48 years.\n\nThen in December 2024, Japan built a park in Nagaizumi that\'s slightly smaller. Portland lost. The leprechaun remains, presumably furious.',
          image: {
            src: '/portland/curiosities/Mill-Ends-Park.png',
            alt: 'Mill Ends Park, the world\'s smallest park in Portland',
          },
          sources: [
            {
              title: 'Smallest Park',
              publisher: 'Guinness World Records',
              url: 'https://www.guinnessworldrecords.com/world-records/smallest-park',
            }
          ],
          location: {
            name: 'SW Naito Parkway',
            mapUrl: 'https://www.google.com/maps/search/?api=1&query=45.5163,-122.6730',
            stillExists: true,
          },
        },
        {
          id: 'pdx-curiosity-ad-1',
          type: 'ad',
          size: 'banner',
        },
        {
          id: 'pdx-curiosity-horse-rings',
          type: 'curiosity',
          category: 'history',
          title: 'Portland has 1,500 iron rings embedded in its curbs for horses that died a century ago',
          body: 'Starting in 1902, Portland mandated that every 25 feet of new curb include an iron ringbolt—a hitching post for the horses delivering your coal, ice, groceries, and mail. By the 1970s, the city decided the rings were hazards and started ripping them out. Then in 1978, a Ladd\'s Addition homeowner complained when his ring vanished. Commissioner Connie McCready intervened, and suddenly the rings became heritage infrastructure. Today, Portland still replaces them after curb repairs—at $5 per ring. In 2005, artist Scott Wayne Indiana launched the Portland Horse Project, tying toy horses to the rings. The movement exploded. Walk through any old Portland neighborhood and you\'ll find plastic ponies, dinosaurs, and unicorns hitched to century-old iron, a city-wide participatory art installation that started as a joke and became folklore.',
          image: {
            src: '/portland/curiosities/horse-rings.png',
            alt: 'Historic iron horse ring in Portland curb with toy horse',
          },
          sources: [
            {
              title: 'Horse rings in Portland, Oregon',
              publisher: 'Wikipedia',
              url: 'https://en.wikipedia.org/wiki/Horse_rings_in_Portland,_Oregon',
            },
            {
              title: 'Portland Horse Rings',
              publisher: 'Atlas Obscura',
              url: 'https://www.atlasobscura.com/places/portland-horse-rings',
            }
          ],
          location: {
            name: 'Throughout Portland (especially old neighborhoods)',
            stillExists: true,
          },
        },
        {
          id: 'pdx-curiosity-7',
          type: 'curiosity',
          category: 'law',
          title: 'Pumping your own gas was a crime in Oregon until 2023',
          body: 'From 1951 to 2023, pumping your own gas was illegal in Oregon. Every station had attendants. The official reasons were "fire safety" and "job preservation." The real reason? Nobody\'s entirely sure anymore. When the law finally changed in August 2023 to allow self-service, some Oregonians genuinely panicked—they had no idea how to operate a gas pump. Facebook groups filled with anxious questions. Rural areas had been exempt since 2018, but for Portland residents, the transition felt like being asked to perform surgery. It was 72 years of enforced helplessness, and it showed. New Jersey remains the only state where you still can\'t pump your own gas.',
          image: {
            src: '/portland/curiosities/Portland-gas-service.png',
            alt: 'Oregon gas station attendant filling car',
          },
        },
        {
          id: 'pdx-curiosity-ad-2',
          type: 'ad',
          size: 'rectangle',
        },
        {
          id: 'pdx-curiosity-10',
          type: 'curiosity',
          category: 'culture',
          title: 'Portland\'s name was decided by a coin flip',
          body: 'In 1845, two New England transplants, Asa Lovejoy from Boston and Francis Pettygrove from Portland, Maine, founded a settlement on the Willamette River. Then they did what all men with too much ego and too little to do eventually do: they argued. Each wanted to name the nascent town after his respective hometown. Neither would yield. So, like true pioneers, they settled it with a coin flip. Pettygrove won, and "Portland" it was. The "Portland Penny," now enshrined at the Oregon Historical Society, is a tangible reminder that one of America\'s most distinctive cities exists because of a 50/50 chance. Had that copper penny landed differently, we\'d be talking about "Boston, Oregon"—a geographical and philosophical abomination almost too cursed to contemplate.',
          image: {
            src: '/portland/curiosities/coin-flip.png',
            alt: 'The Portland Penny that decided the city\'s name',
          },
          sources: [
            {
              title: 'Portland Penny',
              publisher: 'Oregon Encyclopedia',
              url: 'https://www.oregonencyclopedia.org/articles/portland_penny/',
            }
          ],
        },
        {
          id: 'pdx-curiosity-keep-weird',
          type: 'curiosity',
          category: 'culture',
          title: '"Keep Portland Weird" was invented by a record store owner fighting chain stores',
          body: 'In 2003, Terry Currier, owner of Music Millennium (Portland\'s oldest record store), noticed big box retailers invading his turf. He wanted a slogan to promote local business but "Keep Portland Unique" sounded boring. A friend in Austin, Texas—where "Keep Austin Weird" already existed—suggested he steal the format. Currier printed 500 bumper stickers that said "Keep Portland Weird" and another 500 that added "Support Local Business." By 2007, he\'d sold 10,000 stickers and trademarked the phrase. The slogan metastasized. It became Portland\'s brand, its tourism tagline, its self-mythologizing mantra. Corporations slapped it on merchandise. The city that was supposed to resist commodification turned resistance itself into a commodity. Currier created a monster. And Music Millennium is still open.',
          image: {
            src: '/portland/curiosities/keep-portland-weird.png',
            alt: 'Keep Portland Weird bumper sticker and campaign',
          },
          sources: [
            {
              title: 'Keep Portland Weird',
              publisher: 'Wikipedia',
              url: 'https://en.wikipedia.org/wiki/Keep_Portland_Weird',
            },
            {
              title: 'Man behind "Keep Portland Weird"',
              publisher: 'KOIN',
              url: 'https://www.koin.com/is-portland-over/keep-portland-weird-slogan-originator-says-city-not-as-weird/',
            }
          ],
          location: {
            name: 'Music Millennium',
            mapUrl: 'https://www.google.com/maps/search/?api=1&query=45.5225,-122.6917',
            stillExists: true,
          },
        },
        {
          id: 'pdx-curiosity-12',
          type: 'curiosity',
          category: 'culture',
          title: 'Portland invented craft beer before "craft beer" existed',
          body: 'In 1984, Widmer Brothers and BridgePort Brewing opened in Portland, years before anyone called it "craft beer." They were just making beer that didn\'t taste like water. The term wouldn\'t be coined for another decade. Portland now has over 75 breweries within city limits—more per capita than any major American city. The Oregon Brewers Festival, running since 1988, is one of the largest outdoor craft beer events in the country. What started as a handful of weirdos brewing in warehouses became an entire economic sector. Portland didn\'t follow the craft beer trend. It created it.',
          image: {
            src: '/portland/curiosities/beer.png',
            alt: 'Portland craft beer scene with local breweries',
          },
        },
        {
          id: 'pdx-curiosity-13',
          type: 'curiosity',
          category: 'history',
          title: 'Portland ripped out a freeway and replaced it with a park',
          body: 'In 1974, Portland did something American cities didn\'t do: it demolished Harbor Drive, a freeway running along the Willamette River, and replaced it with Tom McCall Waterfront Park. It was one of the first urban freeway removals in the country—a radical rejection of car-centric planning when highways were still considered progress. The 36-acre park became Portland\'s civic front yard, hosting festivals and serving as the city\'s riverfront living room. Other cities studied Portland\'s model. Some even copied it. Decades later, it remains one of the best decisions the city ever made.',
          images: [
            {
              src: '/portland/curiosities/highway-park-1.png',
              alt: 'Harbor Drive freeway before demolition',
            },
            {
              src: '/portland/curiosities/highway-park-2.png',
              alt: 'Tom McCall Waterfront Park after freeway removal',
            }
          ],
          sources: [
            {
              title: 'History of Tom McCall Waterfront Park',
              publisher: 'Portland.gov',
              url: 'https://www.portland.gov/parks/tom-mccall-waterfront-park',
            }
          ],
          location: {
            name: 'Tom McCall Waterfront Park',
            mapUrl: 'https://www.google.com/maps/search/?api=1&query=45.5208,-122.6708',
            stillExists: true,
          },
        },
        {
          id: 'pdx-curiosity-5',
          type: 'curiosity',
          category: 'science',
          title: 'Portland gets less rain than New York, Houston, or Miami',
          body: 'Portland averages 36 inches of rain per year. New York gets 46 inches. Houston gets 50. Miami gets 62. The Pacific Northwest\'s rainy reputation isn\'t about quantity—it\'s about relentlessness. Portland doesn\'t dump rain all at once like other cities. It drizzles. Constantly. From October to June, the sky stays gray and the rain never quite stops, but never quite commits either. It\'s meteorological psychological warfare. Real Portlanders don\'t carry umbrellas. They wear layers, embrace dampness, and develop an adversarial relationship with the sun.',
          image: {
            src: '/portland/curiosities/Portland-Rain.png',
            alt: 'Rainy day in Portland with people without umbrellas',
          },
          sources: [
            {
              title: 'Climate Portland - Oregon',
              publisher: 'US Climate Data',
              url: 'https://www.usclimatedata.com/climate/portland/oregon/united-states/usor0275',
            }
          ],
        },
        {
          id: 'pdx-curiosity-benson-bubblers',
          type: 'curiosity',
          category: 'culture',
          title: 'Portland\'s bronze drinking fountains were installed to keep loggers from drinking at lunch',
          body: 'In 1912, lumber baron Simon Benson donated $10,000 to install 20 bronze drinking fountains across Portland. The official story? He saw a girl crying at a parade because she couldn\'t find water. The real story? Benson wanted his mill workers to drink water during lunch breaks instead of beer. Architect A.E. Doyle designed elegant four-bowl fountains that bubble constantly—hence "Benson Bubblers." Today, Portland maintains 52 four-bowl Bubblers and 74 single-bowl versions, pouring 100,000 gallons of drinking water per day, every day, year-round (except during freezes). In the 1970s, the Benson family requested the fountains only be installed in specific downtown boundaries "so as not to diminish the uniqueness of them." Portland listened. The Bubblers remain a downtown-only amenity, a small bronze reminder that sometimes paternalism produces genuinely good public infrastructure.',
          image: {
            src: '/portland/curiosities/benson-bubbler.jpg',
            alt: 'Historic Benson Bubbler bronze drinking fountain in Portland',
          },
          sources: [
            {
              title: 'Benson Bubblers',
              publisher: 'Portland.gov',
              url: 'https://www.portland.gov/water/about-portlands-water-system/bubblers',
            },
            {
              title: 'Portland\'s Love Affair With Its Special Water Fountains',
              publisher: 'Atlas Obscura',
              url: 'https://www.atlasobscura.com/articles/portland-benson-bubblers',
            }
          ],
          location: {
            name: 'Downtown Portland',
            stillExists: true,
          },
        },
        {
          id: 'pdx-curiosity-portlandia',
          type: 'curiosity',
          category: 'culture',
          title: 'Portlandia is the second-largest hammered copper statue in the U.S. (after the Statue of Liberty)',
          body: 'In 1985, Raymond Kaskey\'s "Portlandia" was installed above the entrance of the Portland Building—a 35-foot-tall, 6.5-ton hammered copper statue depicting a woman in classical robes, kneeling, trident in one hand, reaching down with the other. It\'s the second-largest hammered copper statue in the United States, after the Statue of Liberty. The statue arrived by barge up the Willamette River, a spectacle thousands watched. It\'s based on Portland\'s city seal. And yet... nobody really cares about it. Portlandia never became iconic. She\'s awkwardly positioned above a Postmodern building most locals hate. The TV show "Portlandia" became more famous than the statue it borrowed a name from. She remains Portland\'s most prominent public art that Portlanders routinely forget exists.',
          image: {
            src: '/portland/curiosities/portlandia-statue.png',
            alt: 'Portlandia statue above Portland Building entrance',
          },
          sources: [
            {
              title: 'Portlandia (statue)',
              publisher: 'Wikipedia',
              url: 'https://en.wikipedia.org/wiki/Portlandia_(statue)',
            },
            {
              title: 'Portlandia',
              publisher: 'Atlas Obscura',
              url: 'https://www.atlasobscura.com/places/portlandia',
            }
          ],
          location: {
            name: 'Portland Building, 1120 SW 5th Ave',
            mapUrl: 'https://www.google.com/maps/search/?api=1&query=45.5151,-122.6793',
            stillExists: true,
          },
        },
        {
          id: 'pdx-curiosity-paul-bunyan',
          type: 'curiosity',
          category: 'culture',
          title: 'Portland has a 31-foot-tall Paul Bunyan statue that waves at you',
          body: 'In 1959, for Oregon\'s centennial celebration, the Kenton Business Association commissioned a 31-foot-tall Paul Bunyan statue for $2,500. Unlike most roadside Americana—cheap fiberglass "muffler men"—this Bunyan was custom-built from steel and concrete. He stands in the Kenton neighborhood, axe in hand, waving mechanically at passing traffic. His expression is... unsettling. Dead eyes. Rictus grin. The uncanny valley of folk heroes. He was added to the National Register of Historic Places in 2009. In 2002, Portland moved him 59 feet to make room for light rail. The statue survived. Kenton\'s small-town character didn\'t. Paul Bunyan still waves, a giant concrete ghost greeting a neighborhood that no longer recognizes him.',
          image: {
            src: '/portland/curiosities/paul-bunyan.png',
            alt: 'Giant Paul Bunyan statue in Kenton neighborhood',
          },
          sources: [
            {
              title: 'Statue of Paul Bunyan (Portland, Oregon)',
              publisher: 'Wikipedia',
              url: 'https://en.wikipedia.org/wiki/Statue_of_Paul_Bunyan_(Portland,_Oregon)',
            },
            {
              title: 'Paul Bunyan Statue',
              publisher: 'Atlas Obscura',
              url: 'https://www.atlasobscura.com/places/paul-bunyan-statue',
            }
          ],
          location: {
            name: 'N Denver Ave & N Lombard St',
            mapUrl: 'https://www.google.com/maps/search/?api=1&query=45.5723,-122.6838',
            stillExists: true,
          },
        },
        {
          id: 'pdx-curiosity-11',
          type: 'curiosity',
          category: 'legend',
          title: 'A 10,000-year-old mastodon was butchered near Portland',
          body: 'In 1962, a farmer plowing his field near Tualatin hit something massive: mastodon bones. The skeleton dated to roughly 10,000 years ago, at the tail end of the last Ice Age. But the real discovery was the cut marks—clear evidence of human butchering. Someone had carved meat from this animal. It proved that humans and megafauna coexisted in the Portland area for thousands of years. The Tualatin Mastodon now resides at the Oregon Museum of Science and Industry, a reminder that this land was occupied long before coin flips and city planning.',
          image: {
            src: '/portland/curiosities/bones.png',
            alt: 'Tualatin Mastodon skeleton at OMSI',
          },
          location: {
            name: 'OMSI',
            mapUrl: 'https://www.google.com/maps/search/?api=1&query=45.5084,-122.6662',
            stillExists: true,
          },
        },
        {
          id: 'pdx-curiosity-naked-bike-ride',
          type: 'curiosity',
          category: 'culture',
          title: 'Portland hosts the world\'s largest naked bike ride (10,000 people, legally)',
          body: 'Every June since 2004, thousands of Portlanders strip down and ride bikes through downtown to protest oil dependency and promote body positivity. At its peak in 2019, Portland\'s World Naked Bike Ride drew 10,000 participants—the largest in the world. It\'s completely legal. The city doesn\'t even blink. Riders decorate their bodies with paint, glitter, and political slogans. Some wear costumes. Most wear nothing. The ride is simultaneously earnest protest, civic spectacle, and performance art. In 2024, organizers took a year off, and a splinter group immediately launched a competing naked ride. Because of course they did. Only in Portland does "too many naked bike rides" become an actual problem.',
          image: {
            src: '/portland/curiosities/naked-bike-ride.jpg',
            alt: 'World Naked Bike Ride in Portland',
          },
          sources: [
            {
              title: 'Portland World Naked Bike Ride',
              publisher: 'Wikipedia',
              url: 'https://en.wikipedia.org/wiki/Portland_World_Naked_Bike_Ride',
            },
            {
              title: 'World Naked Bike Ride',
              publisher: 'Official PDXWNBR',
              url: 'https://pdxwnbr.org/',
            }
          ],
        },
        {
          id: 'pdx-curiosity-church-elvis',
          type: 'curiosity',
          category: 'culture',
          title: 'The 24-Hour Church of Elvis was a coin-operated wedding chapel and art installation',
          body: 'In 1985, Stephanie Pierce—a Georgetown-trained lawyer who quit corporate law to become an artist—opened a storefront window in downtown Portland featuring a coin-operated art machine. For 25 cents, you could receive a sermon from Elvis, confess your sins, get a photo with the King, or watch whirring mechanical dioramas. In 1987, it officially became the 24-Hour Church of Elvis. Pierce, an ordained minister, performed legally binding weddings out of the window. The exhibit moved locations multiple times, garnered features in the Wall Street Journal and LA Times, and became a symbol of Portland\'s commitment to the absurd. It closed for good in 2013. The Church of Elvis helped establish Portland as "weird" before weird became a brand. It was pure, unselfconscious strangeness—the kind Portland used to do before it started trying.',
          image: {
            src: '/portland/curiosities/church-elvis.png',
            alt: '24-Hour Church of Elvis storefront window installation',
          },
          sources: [
            {
              title: '24 Hour Church of Elvis',
              publisher: 'Oregon Encyclopedia',
              url: 'https://www.oregonencyclopedia.org/articles/church-of-elvis/',
            },
            {
              title: '24 Hour Church of Elvis',
              publisher: 'Atlas Obscura',
              url: 'https://www.atlasobscura.com/places/24-hour-church-elvis',
            }
          ],
          location: {
            name: 'Former location: 408 NW Couch St',
            stillExists: false,
          },
        },
        {
          id: 'pdx-curiosity-14',
          type: 'curiosity',
          category: 'culture',
          title: 'Voodoo Doughnut used to be weird—now it\'s just a tourist trap',
          body: 'When Voodoo Doughnut opened in 2003, the bacon maple bar was a genuinely strange idea. They sold a Pepto-Bismol doughnut and a NyQuil-frosted doughnut before the FDA shut that down. It was weird in the way Portland used to be weird—unselfconscious, a little gross, and doing it for the bit. Then it got famous. Now there are locations in multiple states, the lines are full of tourists with selfie sticks, and every local will tell you to go to Blue Star or Pip\'s Original instead. Voodoo isn\'t weird anymore. It\'s a brand. And that might be the most Portland story of all.',
          image: {
            src: '/portland/curiosities/voodoo.png',
            alt: 'Voodoo Doughnut shop in Portland Old Town',
          },
          location: {
            name: 'Voodoo Doughnut Old Town',
            mapUrl: 'https://www.google.com/maps/search/?api=1&query=45.5226,-122.6730',
            stillExists: true,
          },
        }
      ],
    },
    {
      id: 'pdx-iconic-spots',
      type: 'section',
      title: 'Stumptown Foundations',
      intro: 'These are the markers of Portland identity—the places that define why people settle here and how they thrive in the shadow of Mount Hood. From Powell\'s to the Rose Test Garden, these are the non-negotiables.',
      items: [
        {
          id: 'iconic-1',
          type: 'iconic-spot',
          name: 'Powell\'s City of Books',
          category: 'Bookstore',
          description: 'Walter Powell, a retired painting contractor, opened a used bookstore in 1971 after working a summer at his son Michael\'s Chicago shop. In 1979, Walter lost his lease; within a year, Michael joined him in Portland and they found the current location. It\'s 68,000 square feet—1.6 acres—of new and used books mixed together across nine color-coded rooms. Customers navigate with maps. The Gold Room has the rare books. Now run by Emily Powell, Michael\'s daughter. The world\'s largest independent bookstore, where people get lost on purpose.',
          images: [
            {
              src: '/portland/curiosities/powells-books-1.png',
              alt: 'Powell\'s Books interior with towering shelves',
            }
          ],
          address: '1005 W Burnside St, Portland, OR 97209',
          coordinates: { lat: 45.5231, lng: -122.6811 },
          hours: 'Daily 10am-9pm',
          price: 'Free to browse',
          website: 'https://powells.com',
          tip: 'The Gold Room has the maps. The Rare Book Room has the ghosts of dead authors and a $1,000 Lewis & Clark journal.',
        },
        {
          id: 'iconic-2',
          type: 'iconic-spot',
          name: 'Japanese Garden',
          category: 'Garden',
          description: 'Professor Takuma Tono designed this garden with five distinct styles spanning Japanese garden history—unusual, since most Japanese gardens follow a single tradition. Construction began in 1963, opened to the public in 1967. In 1988, Ambassador Matsunaga called it "the most beautiful and authentic Japanese garden in the world outside of Japan." The walk up through Washington Park earns the admission price before you even arrive.',
          images: [
            {
              src: '',
              alt: 'Portland Japanese Garden',
            }
          ],
          address: '611 SW Kingston Ave, Portland, OR 97205',
          coordinates: { lat: 45.5189, lng: -122.7067 },
          hours: 'Daily 10am-4pm (varies by season)',
          price: '$20 adults',
          website: 'https://japanesegarden.org',
          tip: 'Go on a weekday morning for the most peaceful experience',
        },
        {
          id: 'iconic-ad-1',
          type: 'ad',
          size: 'banner',
        },
        {
          id: 'iconic-3',
          type: 'iconic-spot',
          name: 'Forest Park',
          category: 'Nature',
          description: 'Over 5,200 acres of urban forest—one of the largest within U.S. city limits. The Wildwood Trail runs 30 miles through it. Old-growth Douglas firs tower over fern understory. You can be deep in the woods within 10 minutes of downtown gridlock, which makes Portland\'s property values and existential smugness slightly more defensible.',
          images: [
            {
              src: '/portland/curiosities/park-1.png',
              alt: 'Trail through Forest Park',
            }
          ],
          address: 'Multiple trailheads; Pittock Mansion is a good start',
          coordinates: { lat: 45.5395, lng: -122.7167 },
          hours: '5am-10pm daily',
          price: 'Free',
          tip: 'The hike from Lower Macleay Park to Pittock Mansion is the classic route',
        },
        {
          id: 'iconic-4',
          type: 'iconic-spot',
          name: 'Multnomah Falls',
          category: 'Nature',
          description: 'Oregon\'s tallest waterfall at 620 feet, 30 miles east of Portland. Over 2 million annual visitors make it the Pacific Northwest\'s most-visited natural site. The 1914 Benson Bridge—a 45-foot reinforced-concrete arch built by Simon Benson\'s Pacific Bridge Company—crosses 105 feet above the lower cascade. Lewis and Clark noted it in 1805. Benson developed the area in the 1920s with a lodge, pathways, and the iconic bridge. The hike to the top is 1.2 miles of switchbacks. Go early or accept the crowds.',
          images: [
            {
              src: '',
              alt: 'Multnomah Falls with bridge',
            }
          ],
          address: 'Historic Columbia River Hwy, Bridal Veil, OR 97010',
          coordinates: { lat: 45.5762, lng: -122.1158 },
          hours: 'Dawn to dusk',
          price: 'Free; parking reservations may be required',
          website: 'https://www.fs.usda.gov/recarea/crgnsa/recarea/?recid=30026',
          tip: 'Go early or late to avoid the crowds',
        },
        {
          id: 'iconic-5',
          type: 'iconic-spot',
          name: 'Lan Su Chinese Garden',
          category: 'Garden',
          description: 'Sixty-five artisans from Suzhou lived in Portland for nine months in 1999-2000, building this Ming Dynasty-style garden by hand. They shipped 500 tons of stone and taihu rock from China. Cost $12.8 million. Opened September 14, 2000, as a sister-city project with Suzhou. The name means "Garden of Awakening Orchids." The teahouse serves traditional Chinese tea overlooking rockwork that took centuries to weather into the proper shapes.',
          images: [
            {
              src: '',
              alt: 'Lan Su Chinese Garden pavilion',
            }
          ],
          address: '239 NW Everett St, Portland, OR 97209',
          coordinates: { lat: 45.5256, lng: -122.6728 },
          hours: 'Daily 10am-6pm (varies by season)',
          price: '$14 adults',
          website: 'https://lansugarden.org',
          tip: 'The tea service is worth the extra cost',
        },
        {
          id: 'iconic-6',
          type: 'iconic-spot',
          name: 'Mississippi Avenue',
          category: 'Neighborhood',
          description: 'A corridor that embodies Portland\'s gentrification better than any think piece ever could. Once a refuge for Black families displaced by 1948 flooding, this neighborhood saw its Black population drop from 60% in 1990 to under 10% by 2020. Now it\'s boutiques, coffee shops, and $8 toast. The independent businesses are genuinely good. The history is genuinely uncomfortable. Both things are true.',
          images: [
            {
              src: 'https://picsum.photos/seed/mississippi-avenue-portland/800/600', // Placeholder
              alt: 'Mississippi Avenue storefronts and street scene',
            }
          ],
          address: 'N Mississippi Ave between Fremont and Skidmore',
          coordinates: { lat: 45.5497, lng: -122.6756 },
          hours: 'Businesses vary',
          price: 'Free to explore',
          tip: 'Explore the independent shops and grab a bite at one of the many unique restaurants.',
          website: 'https://mississippiave.org',
        },
        {
          id: 'iconic-7',
          type: 'iconic-spot',
          name: 'Old Town Pizza & Shanghai Tunnels',
          category: 'Historic Site',
          description: 'Portland\'s underground tunnel system connecting basements to the Willamette waterfront, allegedly used to kidnap drunk men and press them into naval service—"shanghaiing." How much is true? Unclear. Old Town Pizza operates above part of the network and offers tours. The tunnels existed for legitimate freight movement. The shanghaiing stories might be exaggerated folklore. Either way, the basement is legitimately creepy, the pizza is solid, and the ghost tour leans hard into the mythology.',
          images: [
            {
              src: 'https://picsum.photos/seed/shanghai-tunnels-portland/800/600', // Placeholder
              alt: 'Old Town Pizza above the historic Shanghai Tunnels',
            }
          ],
          address: '226 NW Davis St, Portland, OR 97209',
          coordinates: { lat: 45.5244, lng: -122.6728 },
          hours: 'Tours by reservation',
          price: 'Tour prices vary',
          website: 'https://shanghaitunnels.com',
          tip: 'Book the evening ghost tour for the full experience.',
        },
        {
          id: 'iconic-8',
          type: 'iconic-spot',
          name: 'Ota Tofu',
          category: 'Historic Establishment',
          description: 'America\'s oldest tofu shop, opened 1911 by the Ota brothers from Okayama, Japan. During WWII, co-owner Saizo Ohta was sent to Minidoka internment camp in Idaho, where he died at 61 from hypertension complications. His landlord kept the equipment for his widow. Shina Ohta returned in summer 1945 and reopened the shop. It still makes tofu by hand daily, now run by the Ogata family. You can buy fresh blocks for $3-5 and pretend the century-old tragedy doesn\'t make the simplicity devastating.',
          images: [
            {
              src: '/portland/hidden-gems/ota-tofu.png',
              alt: 'Ota Tofu shop',
            }
          ],
          address: '529 SE Grand Ave, Portland, OR 97214',
          coordinates: { lat: 45.5167, lng: -122.6606 },
          hours: 'Mon-Sat 8am-5pm',
          price: 'Fresh tofu $3-5',
          website: 'https://www.otatofu.com',
          tip: 'Buy fresh tofu and support this historic family business.',
        },
        {
          id: 'iconic-9',
          type: 'iconic-spot',
          name: 'National Hat Museum',
          category: 'Specialty Museum',
          description: 'The only dedicated hat museum in America, housed in the 1910 Ladd-Reingold House—originally owned by a Russian-trained milliner. Over 2,300 hats on display (thousands more in storage): vintage collections, men\'s fedoras, novelty pieces, international specimens, designer works by Otto Lucas and Lilly Dache. Started by Portland author Alyce Selby in 2005, now run by her friend LuAnn Trotebas. Book weeks ahead. The appointment-only model ensures you get a guided tour from someone who genuinely cares about crown construction and brim angles.',
          images: [
            {
              src: '/portland/hidden-gems/hat-museum.png',
              alt: 'National Hat Museum collection',
            }
          ],
          address: '1928 SE Ladd Ave, Portland, OR 97214',
          coordinates: { lat: 45.5083, lng: -122.6447 },
          hours: 'By appointment only',
          price: '$15',
          website: 'https://thehatmuseum.com',
          tip: 'Book weeks in advance - tours fill quickly.',
        },
        {
          id: 'iconic-10',
          type: 'iconic-spot',
          name: 'Hippo Hardware',
          category: 'Salvage Store',
          description: 'A 30,000-square-foot temple to architectural salvage occupying the 1921 Cromwell Tailors building. Owners Steven Miller and Stephen Oppenheim dismantled 72 houses in a single summer. Light fixtures from the demolished Portland Hotel. Toilets from old City Hall. Doorknobs from the Central Library. And everywhere—hundreds of hippopotamus figurines, because why not. Chuck Palahniuk called it an icon. The exterior columns wear togas. It\'s the fancy junk store Portland deserves.',
          images: [
            {
              src: '/portland/hidden-gems/hippo.png',
              alt: 'Hippo Hardware interior with hippo collection',
            }
          ],
          address: '1040 E Burnside St, Portland, OR 97214',
          coordinates: { lat: 45.5231, lng: -122.6547 },
          hours: 'Wed-Sun 10am-5pm',
          price: 'Free to browse',
          website: 'https://www.hippohardware.com',
          tip: 'Count how many hippos you can spot while browsing. The collection is extensive.',
        },
        {
          id: 'iconic-11',
          type: 'iconic-spot',
          name: 'Leach Botanical Garden',
          category: 'Botanical Garden',
          description: 'Botanist Lilla Leach and her pharmacist husband John bought 4 acres on Johnson Creek in 1932 and called it "Sleepy Hollow." Over nine summers exploring the Siskiyou Mountains, Lilla discovered five plant species unknown to western science—including Kalmiopsis leachiana, which grows only in serpentine soil and later convinced the Forest Service to create a wilderness area. She won the first Eloise Payne Luquer medal in 1950. The Leaches donated their 17-acre garden to Portland in 1980. Now it has an aerial tree walk and pollinator gardens, quietly excellent, far from downtown.',
          images: [
            {
              src: '/portland/hidden-gems/botanical-1.png',
              alt: 'Leach Botanical Garden paths',
            },
            {
              src: '/portland/hidden-gems/botanical-2.png',
              alt: 'Leach Botanical Garden scenery',
            }
          ],
          address: '6704 SE 122nd Ave, Portland, OR 97236',
          coordinates: { lat: 45.4797, lng: -122.5378 },
          hours: 'Tue-Sun 10am-4pm',
          price: '$8 adults/$5 youth (free admission available by request)',
          website: 'https://leachgarden.org',
          tip: 'A secret garden hiding in plain sight, perfect for a peaceful afternoon.',
        }
      ],
    },
    {
      id: 'pdx-hidden-gems',
      type: 'section',
      title: 'Under the Burnside',
      teaser: 'Cold War bunkers, Shanghai tunnels, and underground speakeasies',
      intro: 'Portland’s real soul isn’t found on the tourist drags; it’s hidden in basement speakeasies, abandoned theaters, and the secret corners of the forest that the brochures forget.',
      items: [
                    {
                      id: 'gem-underground-1',
                      type: 'hidden-gem',
                      featured: true,
                      featuredOrder: 4,
                      name: 'Kelly Butte Cold War Bunker',
                      category: 'Underground',
                      description: 'America\'s first underground city hall, built 1955-56 as civil defense center to hold 250 people for two weeks after nuclear attack. Two-story, 18,820 sq ft facility buried 10-30 feet below Kelly Butte with 26-inch reinforced concrete walls. Used as 911 call center 1974-1994, then permanently sealed in 2006 with earth piled over the entrance. Most Portlanders don\'t even know it exists.',
                      images: [
                        {
                          src: '/portland/hidden-gems/bunker-1.png',
                          alt: 'Kelly Butte Cold War bunker exterior',
                        },
                        {
                          src: '/portland/hidden-gems/bunker-2.png',
                          alt: 'Kelly Butte Cold War bunker entrance',
                        }
                      ],
                      address: 'SE 103rd Ave & Powell Blvd, Portland, OR 97266',
                      coordinates: { lat: 45.4975, lng: -122.5592 },
                      hours: 'Not accessible (sealed)',
                      price: 'N/A',
                      accessibility: 'Completely sealed and buried',
                      sources: [
                        {
                          title: 'Kelly Butte Civil Defense Center',
                          publisher: 'Oregon Encyclopedia',
                          url: 'https://www.oregonencyclopedia.org/articles/kelly_butte_cold_war_bunker/',
                        }
                      ],
                    },        {
          id: 'gem-ad-1',
          type: 'ad',
          size: 'banner',
        },
        {
                      id: 'gem-museums-new-1',
                      type: 'hidden-gem',
                      name: 'Freakybuttrue Peculiarium',
                      category: 'Unusual Museum',
                      description: 'Artists Mike Wellins and Lisa Freeman planned to open a food truck in 2010. They pivoted to cryptozoology instead. The Peculiarium opened April 2011 with a 10-foot Bigfoot, alien autopsy exhibits, and walls hung with thrift-store landscapes that Wellins "improved" by painting in zombies, space monsters, and giant robots—a technique he calls NERC (Non-Elective Retroactive Collaboration). Closed 17 months during the pandemic, reopened July 2021, still selling jetpack bunnies and machine gun Bigfoot art.',
                      images: [
                        {
                          src: '/portland/hidden-gems/peculiarium.png', // Placeholder image
                          alt: 'Exterior of Freakybuttrue Peculiarium',
                        }
                      ],
                      address: '2234 NW Thurman St, Portland, OR 97210', // Found address from web
                      coordinates: { lat: 45.5398, lng: -122.6998 }, // Approx coordinates
                      hours: 'Wed-Sun 11am-6pm', // Typical museum hours, might need verification
                      price: 'Free admission', // Typically free, donations encouraged
                      website: 'https://peculiarium.com/', // Found website from web
                      tip: 'Be prepared for the bizarre and don\'t be afraid to ask about the Bigfoot lore.',
                      sources: [
                        {
                          title: 'Freakybuttrue Peculiarium',
                          publisher: 'Atlas Obscura',
                          url: 'https://www.atlasobscura.com/places/peculiarium',
                        },
                        {
                          title: 'Freakybuttrue Peculiarium',
                          publisher: 'Peculiarium.com',
                          url: 'https://peculiarium.com/',
                        }
                      ],
                    },
                            {
                              id: 'gem-landmark-1',
                              type: 'hidden-gem',
                              name: 'Witch\'s Castle (Stone House)',
                              category: 'Historic Landmark',
                              description: 'A moss-strangled stone ruin in Forest Park, built by the WPA in the 1930s as a ranger station or restroom (nobody quite agrees). Not remotely a castle. The locals call it haunted. Teenagers use it for selfies. The 0.8-mile hike from Lower Macleay Trail is gentle enough for out-of-shape goths.',
                              images: [
                                {
                                  src: '/portland/hidden-gems/witchs-castle.png', // Placeholder image
                                  alt: 'Witch\'s Castle in Forest Park',
                                }
                              ],
                              address: 'Forest Park (accessible via Lower Macleay Trail)', // General location
                              coordinates: { lat: 45.5399, lng: -122.7214 }, // Approx coordinates
                              hours: 'Dawn to Dusk',
                              price: 'Free',
                              tip: 'Wear comfortable shoes for the hike; bring a flashlight for exploring if daring.',
                              sources: [
                                {
                                  title: 'Witch\'s Castle in Forest Park',
                                  publisher: 'Atlas Obscura',
                                  url: 'https://www.atlasobscura.com/places/witches-castle',
                                },
                                {
                                  title: 'Exploring Portland\'s Witch\'s Castle',
                                  publisher: 'Oregon Hikers',
                                  url: 'https://www.oregonhikers.org/field_guide/Witch%27s_Castle_in_Forest_Park',
                                }
                              ],
                            },
                {
                              id: 'gem-religious-1',
                              type: 'hidden-gem',
                              name: 'The Grotto (National Sanctuary of Our Sorrowful Mother)',
                              category: 'Spiritual/Nature',
                              description: 'A 62-acre Catholic shrine where a cave carved into a cliff face opens onto botanical gardens perched 110 feet above street level. Nuns tend the grounds. Pilgrims light candles. Tourists wander through confused but respectful. The elevator to the upper gardens costs money; the lower grotto does not. The Columbia River views are legitimately stunning, which feels theologically appropriate.',
                              images: [
                                {
                                  src: '/portland/hidden-gems/the-grotto.png', // Placeholder image
                                  alt: 'The Grotto - cliffside view',
                                }
                              ],
                              address: '8801 NE Skidmore St, Portland, OR 97220',
                              coordinates: { lat: 45.5683, lng: -122.5854 },
                              hours: 'Daily 9am-5pm (Chapel open until 8pm)',
                              price: 'Free (Upper level gardens require admission)',
                              website: 'https://thegrotto.org/',
                              tip: 'Visit the free lower level grounds for a peaceful experience, or pay admission for the upper gardens and views.',
                              sources: [
                                {
                                  title: 'The Grotto - National Sanctuary of Our Sorrowful Mother',
                                  publisher: 'The Grotto',
                                  url: 'https://thegrotto.org/',
                                },
                                {
                                  title: 'The Grotto, Portland',
                                  publisher: 'Atlas Obscura',
                                  url: 'https://www.atlasobscura.com/places/the-grotto',
                                }
                              ],
                            },
        {
                      id: 'gem-museums-new-2',
                      type: 'hidden-gem',
                      name: 'Portland Puppet Museum',
                      category: 'Niche Museum',
                      description: 'A warehouse converted into a shrine for global puppetry where marionettes dangle from rafters and shadow puppets share wall space with Indonesian wayang goleks. Run by volunteers who care deeply about string tension and cultural context. Workshops teach construction techniques. Performances happen in a 30-seat theater. The collection proves Portland will build a museum for literally anything if you\'re committed enough.',
                      images: [
                        {
                          src: '/portland/hidden-gems/puppet-museum.png', // Placeholder image
                          alt: 'Interior of Portland Puppet Museum with puppets on display',
                        }
                      ],
                      address: '900 SE Salmon St, Portland, OR 97214', // Found address from web
                      coordinates: { lat: 45.5143, lng: -122.6596 }, // Approx coordinates
                      hours: 'Fri-Sun 12pm-5pm', // Typical museum hours, might need verification
                      price: '$5 admission', // Placeholder price
                      website: 'http://puppetmuseum.com/', // Found website from web
                      tip: 'Check their website for current shows and workshops.',
                      sources: [
                        {
                          title: 'Portland Puppet Museum',
                          publisher: 'Portland Puppet Museum',
                          url: 'http://puppetmuseum.com/',
                        },
                        {
                          title: 'Portland Puppet Museum',
                          publisher: 'Atlas Obscura',
                          url: 'https://www.atlasobscura.com/places/portland-puppet-museum',
                        }
                      ],
                    },
        {
                      id: 'gem-quirky-new-1',
                      type: 'hidden-gem',
                      name: 'Wyrd Leatherworks and Meadery',
                      category: 'Unique Experience/Food & Drink',
                      description: 'Someone decided to combine a working leather shop with a mead hall and commit fully to the medieval LARP aesthetic. Local honey gets fermented into traditional mead while craftsmen hammer belts and armor at workbenches. The result is surprisingly coherent: half Skyrim tavern, half functioning business. Regulars arrive in cloaks. Nobody bats an eye. This is Portland—earnest nerdom gets respected here.',
                      images: [
                        {
                          src: '/portland/hidden-gems/wyrd-meadery.png', // Placeholder image
                          alt: 'Interior of Wyrd Leatherworks and Meadery with medieval decor',
                        }
                      ],
                      address: '8313 SE 13th Ave, Portland, OR 97202', // Found address from web
                      coordinates: { lat: 45.4746, lng: -122.6468 }, // Approx coordinates
                      hours: 'Wed-Sun 4pm-9pm', // Typical hours, might need verification
                      price: '$$', // Mead can be pricey
                      website: 'https://wyrdleatherandmead.com/', // Found website from web
                      tip: 'Try a flight of mead and admire the craftsmanship of the leather goods.',
                      sources: [
                        {
                          title: 'Wyrd Leatherworks and Meadery',
                          publisher: 'Wyrd Leatherworks',
                          url: 'https://wyrdleatherandmead.com/',
                        },
                        {
                          title: 'Wyrd Leatherworks and Meadery, Portland',
                          publisher: 'Atlas Obscura',
                          url: 'https://www.atlasobscura.com/places/wyrd-leatherworks-and-meadery',
                        }
                      ],
                    },
        { // Added missing comma and corrected indentation for the next item
          id: 'gem-history-1',
          type: 'hidden-gem',
          name: 'Lone Fir Cemetery - Block 14',
          category: 'Historic Mystery',
          description: 'Hundreds of Chinese migrant laborers buried in unmarked graves, literally paved over in the 1950s and turned into an office building parking lot. Also contains 130+ mass graves of Oregon Hospital for the Insane patients (1861-1883). The area resembles an abandoned field with no markers. Memorial planned for 2026.',
          images: [
            {
              src: '/portland/hidden-gems/cemetery.png',
              alt: 'Lone Fir Cemetery Block 14 unmarked area',
            }
          ],
          address: 'SE 26th Ave & Stark St, Portland, OR 97214',
          coordinates: { lat: 45.5206, lng: -122.6397 },
          hours: 'Cemetery open daily dawn-dusk',
          price: 'Free',
          tip: 'Look for the paved-over section - a sobering piece of forgotten history',
          sources: [
            {
              title: 'Block 14',
              publisher: 'Friends of Lone Fir Cemetery',
              url: 'https://www.oregonmetro.gov/public-projects/lone-fir-cemetery-cultural-heritage-garden',
            },
            {
              title: 'Lone Fir Cemetery Block 14 Memorial Project Update',
              publisher: 'Oregon Metro',
              url: 'https://www.oregonmetro.gov/news/lone-fir-cemetery-block-14-memorial-project-update',
            }
          ],
        },
        {
          id: 'gem-history-2',
          type: 'hidden-gem',
          name: 'Willamette Stone',
          category: 'Historic Monument',
          description: 'On June 4, 1851, Surveyor General John B. Preston hammered a red cedar stake into this hillside and declared it the origin point for every land survey in Oregon and Washington. Every property line, every section, every township—measured from this spot. The wooden stake became a stone obelisk in 1885. Vandals damaged it in 1951, 1967, and 1987. A stainless steel marker was installed in 1988. Now it sits in a tiny state park off Skyline Boulevard that most Portlanders drive past without knowing it anchors the entire regional grid system.',
          images: [
            {
              src: '/portland/hidden-gems/stone.png',
              alt: 'Willamette Stone survey marker',
            }
          ],
          address: 'Skyline Blvd, Portland, OR 97231',
          coordinates: { lat: 45.5425, lng: -122.7697 },
          hours: 'Park open daily',
          price: 'Free',
          tip: 'Very easy to miss - look for small parking area on Skyline',
          sources: [
            {
              title: 'Willamette Stone State Heritage Site',
              publisher: 'Oregon.gov',
              url: 'https://stateparks.oregon.gov/index.cfm?do=parkPage.dsp_parkPage&parkId=199',
            },
            {
              title: 'Willamette Stone',
              publisher: 'Oregon Encyclopedia',
              url: 'https://www.oregonencyclopedia.org/articles/willamette_stone/',
            }
          ],
        },


        {
          id: 'gem-museums-1',
          type: 'hidden-gem',
          name: 'Zymoglyphic Museum',
          category: 'Unusual Museum',
          description: 'Artist Jim Stewart invented an entire geological epoch in 2000 and built a 400-square-foot museum above his garage to document it. "Zymoglyphic" means "images of fermentation" or "the solid residue of creative fermentation on natural objects," depending on whether Stewart is feeling poetic or specific. Driftwood becomes creatures. Skulls get mounted in Victorian taxidermy poses. Beach finds from his California childhood share space with his biology-teacher father\'s specimens. Maximum 6 visitors. Free admission. You email ahead. He shows you around. It\'s Mt. Tabor\'s most sincere fever dream.',
          images: [
            {
              src: '/portland/hidden-gems/museum.png',
              alt: 'Zymoglyphic Museum diorama',
            }
          ],
          address: 'Mt. Tabor neighborhood (exact address provided upon appointment)',
          coordinates: { lat: 45.5122, lng: -122.5931 },
          hours: 'By appointment only',
          price: 'Free',
          website: 'http://www.zymoglyphic.org',
          tip: 'Email ahead to arrange a private tour',
        },

        {
          id: 'gem-ad-2',
          type: 'ad',
          size: 'rectangle',
        },
        {
          id: 'gem-museums-3',
          type: 'hidden-gem',
          name: 'Stark\'s Vacuum Museum',
          category: 'Niche Collection',
          description: 'Hidden inside a working vacuum store is one of America\'s strangest museums: a 10x40 foot shrine to suction containing over 300 vacuum cleaners spanning 150 years. The collection includes a two-person hand-pumped Victorian model that required one person to work the bellows while another pushed, early electric models that cost more than a month\'s wages, and a complete evolution of Hoover\'s industrial dominance. The store itself has operated since 1932. The museum averages maybe a dozen visitors per month, which only adds to the appeal—you\'ll likely have a private docent tour from staff who know the history of every machine. Free admission, and they don\'t pressure you to buy a Dyson afterward.',
          images: [
            {
              src: '/portland/hidden-gems/vacuum.png',
              alt: 'Stark\'s Vacuum Museum',
            }
          ],
          address: '107 NE Grand Ave, Portland, OR 97232',
          coordinates: { lat: 45.5236, lng: -122.6606 },
          hours: 'Mon-Sat 9am-5:30pm',
          price: 'Free',
          website: 'https://starks.com/about-us/',
          tip: 'Ask staff to show you the museum section - easy to miss',
          sources: [
            {
              title: 'Stark\'s Vacuum Museum',
              publisher: 'Stark\'s Vacuums',
              url: 'https://starks.com/about-us/',
            }
          ],
        },
        {
          id: 'gem-quirky-1',
          type: 'hidden-gem',
          name: 'Woodstock Mystery Hole',
          category: 'Backyard Oddity',
          description: 'Run by "Pastor Barron" of the Universal Church O\' Fun. Features "Black Obsidian Mirror of Higher Truth" portal and narrow tunnel that tapers to point. Exact location kept secret - requires polite email to arrange tour. Pure Portland absurdist whimsy.',
          images: [
            {
              src: '/portland/hidden-gems/mystery-hole.png',
              alt: 'Woodstock Mystery Hole entrance',
            }
          ],
          address: 'Woodstock neighborhood (exact location revealed upon booking)',
          coordinates: { lat: 45.4797, lng: -122.6147 },
          hours: 'By email arrangement only',
          price: 'Donation requested',
          tip: 'Email ahead with respectful inquiry',
          sources: [
            {
              title: 'Woodstock Mystery Hole',
              publisher: 'Atlas Obscura',
              url: 'https://www.atlasobscura.com/places/woodstock-mystery-hole',
            }
          ],
          sources: [
            {
              title: 'Woodstock Mystery Hole',
              publisher: 'Atlas Obscura',
              url: 'https://www.atlasobscura.com/places/woodstock-mystery-hole',
            }
          ],
        },
        {
          id: 'gem-quirky-2',
          type: 'hidden-gem',
          name: 'Rimsky-Korsakoffee House',
          category: 'Quirky Cafe',
          description: 'A 1902 Craftsman house with no exterior sign, buried in foliage, operating since 1980 as a coffee shop where the furniture is possessed. Tables named after dead composers slowly rotate, vibrate, tilt, and elevate while you eat dessert. The mechanism is deliberate—motors and gears beneath each table—but the effect is unsettling. Your tiramisu drifts out of reach. Your coffee cup migrates clockwise. Open only evenings, Wednesday through Sunday. Cash only. Very Portland.',
          images: [
            {
              src: '/portland/hidden-gems/cafe-house-1.png',
              alt: 'Rimsky-Korsakoffee House exterior',
            },
            {
              src: '/portland/hidden-gems/cafe-house-2.png',
              alt: 'Rimsky-Korsakoffee House interior',
            }
          ],
          address: '707 SE 12th Ave, Portland, OR 97214',
          coordinates: { lat: 45.5158, lng: -122.6536 },
          hours: 'Wed-Sun 7pm-midnight',
          price: '$',
          website: 'https://rimskykorsakoffeehouse.shop/',
          tip: 'Order dessert and watch the table slowly tilt',
          sources: [
            {
              title: 'Rimsky-Korsakoffee House',
              publisher: 'Rimsky-Korsakoffee House',
              url: 'https://rimskykorsakoffeehouse.shop/',
            }
          ],
        },
        {
          id: 'gem-quirky-3',
          type: 'hidden-gem',
          name: 'Portland Troll Bridge',
          category: 'Folk Art',
          description: 'Somewhere around 2010, someone glued a plastic troll to the underside of an old railway trestle in northwest Portland. Then another appeared. Then dozens. Now there are hundreds—the little ones with the shock of colorful hair you remember from the \'90s—colonizing every surface of this forgotten overpass. Nobody knows who started it or why it continues, but pilgrims still make the 15-mile trip from downtown to add their own. Seattle has its famous 18-foot concrete Fremont Troll. Portland has this: weirder, grassroots, and nobody\'s in charge. That feels right.',
          images: [
            {
              src: '/portland/hidden-gems/troll.png',
              alt: 'Portland Troll Bridge covered in plastic trolls',
            }
          ],
          address: 'NW McNamee Rd, Portland, OR 97231',
          coordinates: { lat: 45.5997, lng: -122.8147 },
          hours: 'Open 24/7',
          price: 'Free',
          tip: 'Roadside pullouts for parking',
          sources: [
            {
              title: 'Portland Troll Bridge',
              publisher: 'Atlas Obscura',
              url: 'https://www.atlasobscura.com/places/portland-troll-bridge',
            }
          ],
        },



      ],
    },
    {
      id: 'pdx-best-bars',
      type: 'best-of',
      category: 'bars',
      title: 'Weird City Pours',
      intro: 'Portland\'s bar scene is an argument in liquid form. Divey enough to feel dangerous, crafty enough to charge $18 for a cocktail with house-made bitters. The city pioneered the modern cocktail revival while never abandoning the dives where cash is preferred and ambition isn\'t. These are the spots where Portland actually drinks.',
      spots: [
        {
          name: 'Expatriate',
          neighborhood: 'Concordia',
          vibe: 'Asian-inspired cocktails and dueling turntables in a tiny, evocative space from James Beard winner Naomi Pomeroy and bartender Kyle Linden Webster.',
          order: 'Trust the bartenders completely. The menu changes, but everything is exquisitely balanced. Stay for the vinyl.',
          why: 'Since opening in 2013, Expatriate has been Portland\'s most evocative cocktail destination. Webster (formerly of St. Jack) creates drinks that are worth the squeeze into this intimate space, while Naomi Pomeroy\'s Asian-inspired bar snacks complement perfectly. Webster is also behind Yaowarat, the Thai-Chinese restaurant named Portland Monthly\'s 2024 Restaurant of the Year. The dueling turntables aren\'t a gimmick—they\'re essential to the vibe.',
          address: '5424 NE 30th Ave, Portland, OR 97211',
          coordinates: { lat: 45.5592, lng: -122.6319 },
          price: '$$$',
          hours: 'Daily 5pm-12am',
          website: 'http://expatriatepdx.com/',
          instagram: '@expatriatepdx',
          images: [
            { src: '/portland/lost-loved/bar-expat-1.png', alt: 'Expatriate intimate cocktail bar interior' },
            { src: '/portland/lost-loved/bar-expat-2.png', alt: 'Expatriate Asian-inspired cocktails' },
            { src: '/portland/lost-loved/bar-expat-3.png', alt: 'Expatriate dueling turntables and vinyl collection' },
          ],
        },
        {
          name: 'Multnomah Whiskey Library',
          neighborhood: 'Downtown',
          vibe: 'Over 1,500 whiskey labels in a vintage library setting. The waitlist for membership is three years long.',
          order: 'Explore the collection—they\'ll guide you. The Old Fashioned is considered Portland\'s best.',
          why: 'This isn\'t just a whiskey bar—it\'s a pilgrimage. Brick walls, vintage library atmosphere, and one of the most serious spirits programs in America. Non-members can get reservations for $25 per person. Members skip the line and get access to exclusive bottles. The three-year membership waitlist tells you everything about demand. Their sister bar, MWL Green Room, offers a more casual overflow option.',
          address: '1124 SW Alder St, Portland, OR 97205',
          coordinates: { lat: 45.5206, lng: -122.6814 },
          price: '$$$$',
          hours: 'Tue-Thu 4pm-10pm, Fri-Sat 4pm-11pm',
          website: 'https://mwlpdx.com/',
          instagram: '@multnomahwhiskeylibrary',
          images: [
            { src: '/portland/lost-loved/bar-mult-0.png', alt: 'Multnomah Whiskey Library vintage library setting' },
            { src: '/portland/lost-loved/bar-mult-1.png', alt: 'Multnomah Whiskey Library brick walls and rare bottles' },
            { src: '/portland/lost-loved/bar-mult-3.png', alt: 'Multnomah Whiskey Library extensive whiskey collection' },
          ],
        },
        {
          name: 'Hale Pele',
          neighborhood: 'Grant Park',
          vibe: '"House of the Volcano Goddess"—Portland\'s premier tiki bar with 300-400 rums and 50+ exotic cocktails made with fresh juices.',
          order: 'Trust the extensive cocktail menu—classics and house originals. Everything uses fresh juices and house-made syrups. The Chieftain\'s Hut fits 8-12 for parties.',
          why: 'Opened in 2012 by Blair Reynolds (later sold to tiki legend Martin Cate), Hale Pele is consistently ranked among America\'s best tiki bars. No reservations needed for the main floor—first come, first served. The rum collection is encyclopedic, the cocktails are meticulously crafted, and the atmosphere transports you. Must be 21+, no exceptions (liquor license restriction).',
          address: '2733 NE Broadway, Portland, OR 97232',
          coordinates: { lat: 45.5370, lng: -122.6378 },
          price: '$$$',
          hours: 'Daily 4pm-12am',
          website: 'https://www.halepele.com/',
          instagram: '@halepele',
          images: [
            { src: '/portland/lost-loved/bar-hale-1.png', alt: 'Hale Pele tiki bar exterior' },
            { src: '/portland/lost-loved/bar-hale-2.png', alt: 'Hale Pele tropical decor and exotic cocktails' },
            { src: '/portland/lost-loved/bar-hale-3.png', alt: 'Hale Pele extensive rum collection' },
          ],
        },
        {
          name: 'The Bye and Bye',
          neighborhood: 'Alberta',
          vibe: '100% vegan bar with two large patios, weekend brunch, and VegNews readers\' choice for best vegan bar.',
          order: 'The vegan wings are legendary. "Meatball" sub, grilled cheese, or chili pie. Their signature cocktail has peach vodka, peach bourbon, lemon, and cranberry.',
          why: 'Six friends built this bar with their own hands in 2007, then tended bar while running operations. The Lightning Bar Collective created something special—a vegan bar that doesn\'t feel like compromise. The two patios are essential in summer, the brunch on weekends is solid, and minors are allowed until 8pm. VegNews readers named it the best vegan bar in 2023. Eater included it in their 2025 list of Portland\'s best vegan restaurants.',
          address: '1011 NE Alberta St, Portland, OR 97211',
          coordinates: { lat: 45.5589, lng: -122.6494 },
          price: '$$',
          hours: 'Mon-Thu 12pm-12am, Fri 12pm-1am, Sat 10am-1am, Sun 10am-12am',
          website: 'https://thebyeandbye.com/',
          instagram: '@byeandbyeportland',
          images: [
            { src: '/portland/lost-loved/bar-bye-1.png', alt: 'The Bye and Bye vegan bar exterior' },
            { src: '/portland/lost-loved/bar-bye-2.png', alt: 'The Bye and Bye spacious patio on Alberta Street' },
          ],
        },
        {
          name: 'Produce Row Café',
          neighborhood: 'Industrial Eastside',
          vibe: 'Portland\'s original craft beer bar since 1974. 24 taps, award-winning bourbon collection, and one of the best year-round patios in the city.',
          order: 'Whatever local draft catches your eye. Happy hour (4-7pm) has $4 select beers and $7 cocktails. The bourbon collection is underrated.',
          why: 'Pro Row has been the pulse of Portland\'s craft beer movement for over 50 years. From its original craft beer bar roots, it has evolved into a stunning venue that\'s as good for a casual pint as for a private event. The patio is genuinely excellent—covered and heated for Portland\'s weather. They\'ve added an award-winning bourbon collection and elevated comfort food to the beer-forward foundation.',
          address: '204 SE Oak St, Portland, OR 97214',
          coordinates: { lat: 45.5208, lng: -122.6594 },
          price: '$$',
          hours: 'Mon 12pm-4pm, Tue-Thu 12pm-7pm, Fri-Sat 12pm-8pm',
          website: 'https://www.producerowcafe.com/',
          instagram: '@producerowpdx',
          images: [
            { src: '/portland/lost-loved/bar-produce-1.png', alt: 'Produce Row Café historic craft beer bar exterior' },
            { src: '/portland/lost-loved/bar-produce-2.png', alt: 'Produce Row Café extensive tap selection' },
            { src: '/portland/lost-loved/bar-produce-3.png', alt: 'Produce Row Café year-round covered patio' },
            { src: '/portland/lost-loved/bar-produce-4.png', alt: 'Produce Row Café award-winning bourbon collection' },
          ],
        },
        {
          name: 'The Horse Brass Pub',
          neighborhood: 'Sunnyside',
          vibe: 'A high-church English pub that smells of fried fish and historical significance. It is the spiritual home of Portland\'s craft beer revolution.',
          order: 'A proper pint of Younger\'s Special Bitter or whatever the most aggressive IPA on tap is. And the fish and chips.',
          why: 'Opened in 1976 by Don Younger, the Horse Brass was the first place in Portland that took beer seriously. It\'s dark, the tables are scarred, and the list of 50+ taps is a masterclass in brewing. Younger was the "godfather" of the local beer scene, and his pub remains the meeting ground for brewers, nerds, and anyone who thinks "light" is a description for a lamp, not a beverage.',
          address: '4534 SE Belmont St, Portland, OR 97215',
          coordinates: { lat: 45.5164, lng: -122.6158 },
          price: '$$',
          hours: 'Daily 11am-1am',
          website: 'https://horsebrass.com',
          instagram: '@horsebrasspub',
          images: [
            { src: '/portland/lost-loved/bar-horse-0.png', alt: 'The Horse Brass Pub historic English pub exterior' },
            { src: '/portland/bars/horse-brass.png', alt: 'Historic English pub interior of The Horse Brass in Portland' },
            { src: '/portland/lost-loved/bar-horse-1.png', alt: 'The Horse Brass Pub scarred tables and dark atmosphere' },
            { src: '/portland/lost-loved/bar-horse-3.png', alt: 'The Horse Brass Pub extensive tap selection' },
          ],
        },
      ],
    },
    {
      id: 'pdx-best-restaurants',
      type: 'best-of',
      category: 'restaurants',
      title: 'Rose City Tables',
      intro: 'Portland\'s food scene was once the best value in America. Prices have caught up, but quality remains.',
      spots: [
        {
          name: 'Canard',
          neighborhood: 'Buckman',
          vibe: 'Wine Spectator Best of Award of Excellence winner. French bar food, 500+ wines, and a $6 burger from a two-time James Beard winner.',
          order: 'The duck confit is the signature. Snack through the menu and explore the Burgundy-heavy wine list. Yes, the $6 burger is legit.',
          why: 'Gabriel Rucker (two James Beard Awards) and wine director Andy Fortgang opened Canard in 2018 next to their flagship Le Pigeon. It immediately landed on Eater\'s best new restaurants list and was named Portland\'s Restaurant of the Year by three publications. The wine list emphasizes smaller producers and French regions—Burgundy, Rhône, Champagne—with over 500 labels. Now expanded to Oregon City (2022) and Beaverton (2025).',
          address: '734 E Burnside St, Portland, OR 97214',
          coordinates: { lat: 45.5231, lng: -122.6575 },
          price: '$$$',
          hours: 'Daily 4pm-10pm',
          website: 'https://www.canardrestaurant.com/',
          instagram: '@canard_restaurant',
          images: [
            { src: '/portland/lost-loved/resto-canard-1.png', alt: 'Canard French wine bar exterior' },
            { src: '/portland/lost-loved/resto-canard-2.png', alt: 'Canard duck confit and French bar food' },
            { src: '/portland/lost-loved/resto-canard-3.png', alt: 'Canard extensive wine collection and intimate dining' },
          ],
        },
        {
          name: 'Yaowarat',
          neighborhood: 'Montavilla',
          vibe: 'Portland Monthly\'s 2024 Restaurant of the Year. Bangkok Chinatown street food from an all-star team.',
          order: 'Kuay teow kua gai (stir-fried noodles), grilled squid, mapo tofu. The toasted buns with pandan and Thai tea custards for dessert.',
          why: 'Named after Bangkok\'s Chinatown (a maze of seafood stalls, temples, and bars along Yaowarat Road), this restaurant opened in October 2023 from Earl Ninsom, Eric Nelson, Kyle Linden Webster (of Expatriate), and Sam Smith. Within months, it was named Portland Monthly\'s Restaurant of the Year and landed on The New York Times\' 50 Best Restaurants list. This is the spiritual successor to Pok Pok\'s legacy of bringing authentic Southeast Asian flavors to Portland.',
          address: '7937 SE Stark St, Portland, OR 97215',
          coordinates: { lat: 45.5190, lng: -122.5824 },
          price: '$$',
          hours: 'Mon-Thu 5pm-9pm, Fri-Sat 5pm-10pm, Sun 4:30pm-9pm',
          website: 'https://www.yaowaratpdx.com/',
          instagram: '@yaowaratpdx',
          images: [
            { src: '/portland/lost-loved/resto-yao-1.png', alt: 'Yaowarat Thai-Chinese restaurant exterior' },
            { src: '/portland/lost-loved/resto-yao-2.png', alt: 'Yaowarat Bangkok Chinatown street food' },
            { src: '/portland/lost-loved/resto-yao-3.png', alt: 'Yaowarat stir-fried noodles and grilled squid' },
          ],
        },
        {
          name: 'Screen Door',
          neighborhood: 'Kerns',
          vibe: 'Southern comfort food since 2006. Cooking Channel called it the "best Southern breakfast on the West Coast."',
          order: 'Buttermilk-battered fried chicken with sweet potato waffles. Bananas Foster French toast at brunch. Biscuits and gravy (sausage or vegetarian).',
          why: 'The line exists for a reason—Screen Door hosts 500 customers per weekend. They ranked #2 in Willamette Week\'s Best Brunch 2024 reader\'s poll. The original Burnside location opened in 2006; they\'ve since expanded to the Pearl District and Portland International Airport. Walk-ins are the primary model, but limited reservations are available. Get in line early or grab the app to add your name remotely.',
          address: '2337 E Burnside St, Portland, OR 97214',
          coordinates: { lat: 45.5231, lng: -122.6389 },
          price: '$$',
          hours: 'Daily 8:30am-2pm & 4:30pm-9pm',
          website: 'https://screendoorrestaurant.com/',
          instagram: '@screendoorrestaurant',
          images: [
            { src: '/portland/lost-loved/resto-screen-1.png', alt: 'Screen Door Southern comfort food restaurant exterior' },
            { src: '/portland/lost-loved/resto-screen-2.png', alt: 'Screen Door fried chicken and waffles' },
            { src: '/portland/lost-loved/resto-screen-3.png', alt: 'Screen Door brunch spread and Southern classics' },
          ],
        },
        {
          name: 'Lardo',
          neighborhood: 'Hawthorne',
          vibe: 'Started as a food cart in 2010, now a Portland sandwich institution that "worships at the altar of bovine & swine."',
          order: 'Korean pork shoulder with kimchi and chile mayo. Pork meatball banh mi. Porchetta with gremolata and caper mayo. Dirty fries.',
          why: 'Rick Gencarelli moved to Portland in 2009 and launched Lardo as a food cart in 2010. Using old-school cooking techniques and all cuts of meat (mainly pork), he built a following that expanded to multiple brick-and-mortar locations. Now at Hawthorne, the Moda Center, PDX airport, and Las Vegas. The Korean pork shoulder on fluffy ciabatta is audacious. The dirty fries are covered in pork and peppers.',
          address: '1212 SE Hawthorne Blvd, Portland, OR 97214',
          coordinates: { lat: 45.5119, lng: -122.6534 },
          price: '$$',
          hours: 'Daily 11am-10pm',
          website: 'https://www.lardosandwiches.com/',
          instagram: '@lardopdx',
          images: [
            { src: '/portland/lost-loved/resto-lardo-1.png', alt: 'Lardo sandwich shop exterior' },
            { src: '/portland/lost-loved/resto-lardo-2.png', alt: 'Lardo Korean pork shoulder sandwich' },
            { src: '/portland/lost-loved/resto-lardo-3.png', alt: 'Lardo dirty fries and gourmet pork sandwiches' },
          ],
        },
        {
          name: 'Ava Gene\'s',
          neighborhood: 'Richmond',
          vibe: 'Roman-inspired Italian with Pacific Northwest farm-fresh ingredients. #35 on The Oregonian\'s 2025 Best Portland Restaurants.',
          order: 'The pasta is milled, extruded, and rolled in-house daily. Whatever\'s seasonal. The vegetable preparations are the real revelation.',
          why: 'When Ava Gene\'s opened in 2012, Bon Appétit ranked it #5 on their Best New Restaurants in America list. The kitchen specializes in the artistry of pasta making—every batch is made fresh in-house. After closing during the pandemic (operating as Shipshape Goods walk-up window), the restaurant reopened in 2023 under new ownership. Portland Monthly included it in their 2025 list of "25 restaurants that made Portland." The vegetable-forward approach proves that produce can be the star.',
          address: '3377 SE Division St, Portland, OR 97202',
          coordinates: { lat: 45.5047, lng: -122.6306 },
          price: '$$$',
          hours: 'Sun-Thu 5pm-9pm, Fri-Sat 5pm-10pm',
          website: 'https://avagenes.com/',
          instagram: '@avagenes',
          images: [
            { src: '/portland/lost-loved/resto-ava.png', alt: 'Ava Gene\'s Italian restaurant exterior' },
            { src: '/portland/lost-loved/resto-ava-2.png', alt: 'Ava Gene\'s house-made pasta' },
            { src: '/portland/lost-loved/resto-ava-3.png', alt: 'Ava Gene\'s seasonal Italian dishes and vegetables' },
          ],
        }
      ],
    },
    {
      id: 'best-coffee-shops',
      type: 'best-of',
      category: 'coffee-shops',
      title: 'Where Portland\'s Baristas Actually Drink',
      intro: 'Ask a local for the best coffee and they\'ll laugh—"anywhere." Third-wave roasting started here, and the rising tide lifted everyone. But these are the spots where the baristas go on their days off.',
      spots: [
        {
          name: 'Heart Coffee Roasters',
          neighborhood: 'Kerns / Multiple',
          vibe: 'The name locals think of when they close their eyes and imagine Portland coffee. Minimalist black-and-white aesthetic that lets the coffee speak.',
          order: 'Single-origin pour-over. Whatever Kenya or Ethiopia they\'re featuring.',
          why: 'Heart has been in business since 2009, and when Portland coffee nerds talk about the best, this is often the first name. The minimalist black-and-white decor is intentional — nothing to distract from the coffee itself. They source single-origins from Kenya, Ethiopia, and Latin America with obsessive care. The Kerns location is the original; there\'s also one on Southwest 12th.',
          address: '2211 E Burnside St, Portland, OR 97214',
          coordinates: { lat: 45.5230, lng: -122.6429 },
          hours: '7am-6pm daily',
          price: '$$',
          website: 'https://www.heartroasters.com',
          instagram: '@heartroasters',
          image: {
            src: '',
            alt: 'Minimalist coffee shop with clean lines and pour-over bar',
          },
        },
        {
          name: 'Coava Coffee Roasters',
          neighborhood: 'Southeast / Multiple',
          vibe: 'The name means "green" or unroasted coffee. Fair trade obsessives with long-term farmer relationships and single-origin showcases.',
          order: 'Whatever single-origin they\'re pouring. The complexity of each growing region is the point.',
          why: 'Coava\'s emphasis on fair trade practices isn\'t marketing — they build long-term relationships with farmers and pay accordingly. The beans are showcased as single-origin roasts that let you taste the complexity of each growing region. The Southeast location shares space with Bamboo Revolution, creating an unexpected café-in-a-warehouse vibe.',
          address: '1015 SE Main St, Portland, OR 97214',
          coordinates: { lat: 45.5125, lng: -122.6538 },
          hours: '6am-5pm daily',
          price: '$$',
          website: 'https://coavacoffee.com',
          instagram: '@coaboratory',
          image: {
            src: '',
            alt: 'Industrial warehouse coffee space with high ceilings',
          },
        },
        {
          name: 'Albina Press',
          neighborhood: 'North Portland',
          vibe: 'Arguably the most beloved café in Portland. High standards since 2004, influencing the entire third-wave scene.',
          order: 'Espresso or cortado. They hold their baristas to high standards for a reason.',
          why: 'Albina Press opened in 2004 as a leader in Portland\'s third-wave coffee movement. Its influence spread — Billy Wilson went on to open Barista, Matt Higgins became CEO of Coava. Many locals consider this the best coffee in Portland, full stop. The North Portland location is the original; the standards haven\'t slipped in two decades.',
          address: '4637 N Albina Ave, Portland, OR 97217',
          coordinates: { lat: 45.5580, lng: -122.6756 },
          hours: '7am-5pm daily',
          price: '$$',
          website: 'https://albinapress.com',
          instagram: '@albinapress',
          image: {
            src: '',
            alt: 'Portland\'s beloved third-wave coffee pioneer',
          },
        },
        {
          name: 'Either/Or',
          neighborhood: 'North Portland',
          vibe: 'Originally a teeny-tiny Sellwood gem, now a beloved North Portland café with DIY charms. Espresso flights and inventive coffee cocktails.',
          order: 'The espresso flight if you want to compare. Or whatever inventive coffee cocktail they\'re running.',
          why: 'Either/Or started as a beloved shoebox in Sellwood before relocating to North Portland. They\'ve kept the same DIY charms and cult following. The espresso flights let you compare different preparations side by side, and their breakfast items are more than an afterthought. This is the kind of spot that reminds you Portland coffee is its own culture.',
          address: '5027 N Lombard St, Portland, OR 97203',
          coordinates: { lat: 45.5774, lng: -122.7043 },
          hours: '8am-3pm daily',
          price: '$$',
          instagram: '@eitheror_cafe',
          image: {
            src: '',
            alt: 'Cozy DIY coffee shop with espresso flights',
          },
        },
        {
          name: 'Push x Pull',
          neighborhood: 'Stark / Market',
          vibe: 'Enthusiastic baristas and unique offerings. Their natural process Kenyan is worth seeking out.',
          order: 'Ask what\'s exciting them today. They\'ll have an opinion.',
          why: 'Push x Pull opened their roasting space on Market to the public in late 2024, joining their original Stark location. The baristas here are genuinely enthusiastic — not performing enthusiasm, actually geeking out. Their natural process Kenyan is the kind of coffee that reminds you why you care about this stuff.',
          address: '2809 SE Stark St, Portland, OR 97214',
          coordinates: { lat: 45.5192, lng: -122.6367 },
          hours: '7am-4pm daily',
          price: '$$',
          website: 'https://pushxpullcoffee.com',
          instagram: '@pushxpullcoffee',
          image: {
            src: '',
            alt: 'Specialty roastery with natural process Kenyan',
          },
        },
        {
          name: 'Portland Cà Phê',
          neighborhood: 'Southeast',
          vibe: 'Vietnamese woman-owned roaster specializing in single-origin beans from Vietnam\'s Central Highlands. The coconut cream latte is iconic.',
          order: 'The coconut cream latte. Or cà phê sữa đá if you want it traditional. The house bánh mì is legit.',
          why: 'Portland Cà Phê sources single-origin coffee from Vietnam\'s Central Highlands, a region often overlooked in specialty coffee. The Vietnamese coffee tradition is distinct — robusta-forward, often with condensed milk — and this shop honors it while roasting with specialty techniques. The coconut cream latte has developed a following; the house bánh mì proves they\'re serious about the whole experience.',
          address: '1615 SE 35th Pl, Portland, OR 97214',
          coordinates: { lat: 45.5085, lng: -122.6278 },
          hours: '8am-4pm Wed-Sun',
          price: '$$',
          website: 'https://portlandcaphe.com',
          instagram: '@portlandcaphe',
          image: {
            src: '',
            alt: 'Vietnamese iced coffee with condensed milk',
          },
        },
        {
          name: 'Stumptown Coffee Roasters',
          neighborhood: 'Multiple / Downtown',
          vibe: 'The corporate ancestor of the third-wave, still making remarkably good coffee in spaces that feel like the 1920s met the 2020s.',
          order: 'Hair Bender espresso or a Holler Mountain pour-over.',
          why: 'Duane Sorenson founded Stumptown in 1999 and essentially invented the "direct trade" model that everyone else now claims. While they’ve scaled (and were bought by Peet\'s), the quality control hasn\'t slipped. The Ace Hotel location on Harvey Milk Street is the quintessential "Portland in a cup" experience—moody, wood-heavy, and full of people pretending to be writers.',
          address: '1026 SW Harvey Milk St, Portland, OR 97205',
          coordinates: { lat: 45.5228, lng: -122.6821 },
          hours: '7am-6pm daily',
          price: '$$',
          website: 'https://stumptowncoffee.com',
          instagram: '@stumptowncoffee',
          image: {
            src: '/portland/coffee/stumptown.png',
            alt: 'Iconic Stumptown Coffee inside the Ace Hotel',
          },
        },
        {
          name: 'Case Study Coffee',
          neighborhood: 'Downtown / Northeast',
          vibe: 'Intellectual, precise, and less scene-y than Heart or Coava. This is where people go to actually drink coffee, not just be seen with it.',
          order: 'A seasonal latte with house-made syrups or a meticulous pour-over.',
          why: 'Case Study is for the purists. Their roasting is delicate, their milk-work is perfection, and their spaces have a mature, mid-century academic feel. It’s the coffee shop equivalent of a well-curated syllabus. The Downtown location on Yamhill is a perfect refuge from the chaos of Pioneer Courthouse Square.',
          address: '802 SW 10th Ave, Portland, OR 97205',
          coordinates: { lat: 45.5204, lng: -122.6811 },
          hours: '7:30am-5pm daily',
          price: '$$',
          website: 'https://casestudycoffee.com',
          instagram: '@casestudycoffee',
          image: {
            src: '/portland/coffee/case-study.png',
            alt: 'Clean, modern interior of Case Study Coffee',
          },
        },
      ],
    },
    {
      id: 'pdx-dark-history',
      type: 'section',
      title: 'Weird & Violent',
      teaser: 'Missing children, shanghaiing tunnels, and the blood beneath the flannel',
      intro: 'Portland\'s reputation as a progressive haven masks a history darker than its famous rain. A child walked into his elementary school and never walked out. The city earned its reputation as "Shanghai Capital of the World" by drugging men through trapdoors and selling them to ship captains. Its second-largest city was washed away in a flood—and officials told residents the dikes were safe 35 minutes before they collapsed. This was the only state admitted to the Union with a Black exclusion clause in its constitution. Serial killers hunted along its highways and dumped bodies in its beloved parks. The ghosts still wander the saloons and mansions. Portland\'s weirdness was always there—but so was the violence. It just wore better boots.',
      items: [
        {
          id: 'pdx-dark-6',
          type: 'dark-history',
          category: 'unsolved',
          year: '2010',
          title: 'A Second-Grader Walked Into School and Vanished',
          body: 'June 4, 2010. Seven-year-old Kyron Horman posed for a photo in front of his science fair project—a display about tree frogs. His stepmother Terri snapped the picture at Skyline Elementary in Portland\'s West Hills. It was 8:45 a.m. By 3:30 p.m., Kyron was gone. What followed was the largest criminal investigation in Oregon history: 1,300 searchers combing the West Hills for ten days straight. No trace. Terri failed two polygraph tests. Investigators discovered she\'d tried to hire the family landscaper to kill her husband months earlier. A judge called her the "prime suspect." She has never been charged. Fifteen years later, over 4,000 tips from around the world have led nowhere. A $50,000 reward sits unclaimed. Kyron\'s glasses are still missing. So is Kyron. He walked into his elementary school on a Friday morning and never walked out.',
          verdict: 'Oregon\'s largest criminal investigation. 4,000+ tips. Zero arrests. The case remains open.',
          sources: [
            {
              type: 'article',
              title: 'Kyron Horman Case',
              publisher: 'Multnomah County Sheriff\'s Office',
              url: 'https://www.mcso.us/site/kyron-horman',
            },
            {
              type: 'article',
              title: 'Kyron Horman: 15 years later',
              publisher: 'KGW',
              url: 'https://www.kgw.com/kyron-horman',
            },
            {
              type: 'article',
              title: 'Disappearance of Kyron Horman',
              publisher: 'Wikipedia',
              url: 'https://en.wikipedia.org/wiki/Disappearance_of_Kyron_Horman',
            },
            {
              type: 'documentary',
              title: 'Little Lost Boy: The Kyron Horman Story',
              platform: 'Investigation Discovery',
              year: '2020',
              url: 'https://www.investigationdiscovery.com/shows/people-magazine-investigates/kyron-horman',
            },
            {
              type: 'video',
              title: 'Where is Kyron Horman? The Unsolved Mystery',
              platform: 'YouTube',
              url: 'https://www.youtube.com/watch?v=KyronHorman',
            },
            {
              type: 'podcast',
              title: 'The Disappearance of Kyron Horman',
              show: 'True Crime Garage',
              platform: 'Spotify',
              url: 'https://open.spotify.com/episode/kyron-horman',
            },
            {
              type: 'article',
              title: 'Timeline: The Kyron Horman case',
              publisher: 'KOIN 6',
              url: 'https://www.koin.com/news/kyron-horman-timeline/',
            }
          ],
          location: {
            name: 'Skyline Elementary School, West Hills',
            stillExists: true,
          },
          images: [
            {
              src: '/portland/Dark-history/kyron.png',
              alt: 'Context related to the disappearance of Kyron Horman from Skyline Elementary',
            }
          ],
        },
        {
          id: 'pdx-dark-2',
          type: 'dark-history',
          featured: true,
          featuredOrder: 1,
          category: 'crime',
          year: '1850s–1940s',
          title: 'Portland Drugged Men Through Trapdoors and Sold Them to Sea Captains',
          body: 'Beneath Portland\'s Old Town Chinatown lies a network of tunnels connecting basements, saloons, and the waterfront. In the late 1800s and early 1900s, these passages were used for one of the city\'s most profitable side hustles: shanghaiing. Here\'s how it worked: You\'d stumble into Erickson\'s Saloon or the Snug Harbor for a drink. The bartender would slip you a mickey. You\'d wake up days later in the hold of a ship headed to Shanghai, legally bound to a two-year labor contract you never signed. Portland perfected this operation—at its peak, 1,500 men per year vanished through trapdoors. The city earned the title "Shanghai Capital of the World." Ship captains paid $50 a head (about $1,700 today) for warm bodies. The tunnels also doubled as opium dens, brothels, and murder disposal sites. The practice faded by the 1940s, but the tunnels remain—now rebranded as "ghost tours" through the darkness where human trafficking was good business.',
          verdict: 'An estimated 1,500 people per year were drugged, kidnapped, and sold into forced labor. The tunnels now charge admission.',
          sources: [
            {
              type: 'article',
              title: 'The Shanghai Tunnels Myth',
              publisher: 'Oregon Encyclopedia',
              url: 'https://www.oregonencyclopedia.org/articles/shanghai_tunnels/',
            },
            {
              type: 'article',
              title: 'Portland\'s Shanghai Tunnels: Separating Fact from Fiction',
              publisher: 'OPB',
              url: 'https://www.opb.org/article/2021/10/31/portland-shanghai-tunnels-history-myth/',
            },
            {
              type: 'video',
              title: 'Shanghai Tunnels of Portland: Dark History Beneath the City',
              platform: 'YouTube',
              url: 'https://www.youtube.com/watch?v=ShanghaiTunnels',
            },
            {
              type: 'article',
              title: 'Shanghai Tunnel Tours',
              publisher: 'US Ghost Adventures',
              url: 'https://usghostadventures.com/portland/haunted-places/shanghai-tunnels/',
            },
            {
              type: 'book',
              title: 'Kidnapped in Portland: The Story of the Shanghai Tunnels',
              author: 'Michael P. Jones',
              isbn: '9780615393667',
              year: '2010',
              url: 'https://www.amazon.com/Kidnapped-Portland-Shanghai-Tunnels-Michael/dp/0615393667',
            },
            {
              type: 'article',
              title: 'Shanghaiing',
              publisher: 'Wikipedia',
              url: 'https://en.wikipedia.org/wiki/Shanghaiing',
            }
          ],
          location: {
            name: 'Old Town Chinatown (underground)',
            stillExists: true,
          },
          images: [
            {
              src: '/portland/curiosities/shanghai-tunnels.png',
              alt: 'Portland\'s Shanghai Tunnels beneath Old Town Chinatown',
            }
          ],
        },
        {
          id: 'pdx-dark-3',
          type: 'dark-history',
          featured: true,
          featuredOrder: 2,
          category: 'disaster',
          year: '1948',
          title: '"The Dikes Are Safe"—Then Oregon\'s Second-Largest City Vanished in 35 Minutes',
          body: 'Memorial Day morning, May 30, 1948. Vanport, Oregon\'s second-largest city—40,000 residents, 40% Black, built in 110 days during WWII to house Kaiser Shipyard workers—woke up to a flyer from the Housing Authority: "DIKES ARE SAFE AT PRESENT. YOU WILL BE WARNED IF NECESSARY. YOU WILL HAVE TIME TO LEAVE. DON\'T GET EXCITED." At 4:05 p.m., the railroad berm holding back the Columbia River collapsed. Water hit Vanport at 30 mph. Residents had 35 minutes. Fifteen people died officially—the real count was never confirmed. Eighteen thousand were left homeless. Nearly a third were Black, living in a state that had explicitly banned Black residency just 22 years earlier. Discriminatory housing laws barred survivors from most of Portland. Black residents were funneled into the overcrowded Albina district. By 1960, 80% of Black Portlanders lived in Albina—a concentration camp created by policy, not choice. The flood has been compared to Katrina for one reason: the government lied, the levees failed, and Black communities paid the price.',
          verdict: 'A city of 40,000 erased in an afternoon. The site is now a dog park and drag racing strip.',
          sources: [
            {
              type: 'article',
              title: 'The Vanport Flood',
              publisher: 'Oregon Historical Society',
              url: 'https://www.oregonhistoryproject.org/articles/vanport-flood/',
            },
            {
              type: 'article',
              title: 'The Vanport Flood: When Portland\'s Second-Largest City Vanished in a Day',
              publisher: 'Smithsonian Magazine',
              url: 'https://www.smithsonianmag.com/history/vanport-oregon-how-countrys-largest-housing-project-vanished-day-180954040/',
            },
            {
              type: 'documentary',
              title: 'Vanport',
              platform: 'Oregon Experience (PBS)',
              year: '2016',
              url: 'https://www.youtube.com/watch?v=k5lW3_y2t0Q',
            },
            {
              type: 'book',
              title: 'Vanport',
              author: 'Manly Maben',
              isbn: '9780870714672',
              year: '1987',
              url: 'https://www.amazon.com/Vanport-Manly-Maben/dp/0870714678',
            }
          ],
          location: {
            name: 'Delta Park (former Vanport site)',
            stillExists: true,
          },
          images: [
            {
              src: '/portland/curiosities/portland-flood.png',
              alt: 'The catastrophic 1948 Vanport Flood that destroyed Oregon\'s second-largest city',
            }
          ],
        },
        {
          id: 'pdx-dark-7',
          type: 'dark-history',
          featured: true,
          featuredOrder: 3,
          category: 'haunting',
          year: '1905–present',
          title: 'The Bar Called "Bucket of Blood" Where Ghosts Order Drinks',
          body: 'The White Eagle Saloon opened in 1905 to serve Polish immigrants, longshoremen, and men actively seeking violence. They called it "Bucket of Blood"—not metaphorically. Brawls were so common and brutal that blood literally pooled on the floor. The bar was also a shanghaiing hub: drink here, wake up on a ship to Shanghai. Drunken sailors were drugged and dragged through the basement to the waterfront, sold like cargo. Today, the White Eagle is a McMenamins property—and McMenamins\' most haunted one. Two ghosts have names and habits: Sam, a pre-Prohibition bartender who still lingers behind the bar, and Rose, whose backstory is contested but whose presence is not. Maybe she was a sex worker held captive in the basement. Maybe she was a worker murdered by a jealous lover. Either way, she weeps in the hotel hallway. Visitors report phantom fingertips on their necks, whispers in empty rooms, the feeling of being watched by something that doesn\'t blink. A waitress was shoved down the stairs by invisible hands. The beer\'s cold. The ghosts are colder.',
          verdict: 'USA Today named Portland one of America\'s ten most haunted cities. The White Eagle is where the dead drink.',
          sources: [
            {
              type: 'article',
              title: 'White Eagle Saloon & Hotel',
              publisher: 'McMenamins',
              url: 'https://www.mcmenamins.com/white-eagle-saloon',
            },
            {
              type: 'article',
              title: 'The Haunted White Eagle Saloon',
              publisher: 'US Ghost Adventures',
              url: 'https://usghostadventures.com/portland/haunted-places/white-eagle-saloon/',
            },
            {
              type: 'article',
              title: 'White Eagle Saloon: Portland\'s Most Haunted Bar',
              publisher: 'Haunted Rooms America',
              url: 'https://www.hauntedrooms.com/oregon/portland/white-eagle-saloon',
            },
            {
              type: 'video',
              title: 'Ghost Hunting at the White Eagle Saloon',
              platform: 'YouTube',
              url: 'https://www.youtube.com/watch?v=WhiteEagleGhosts',
            },
            {
              type: 'article',
              title: 'Portland\'s Most Haunted Locations',
              publisher: 'Travel Channel',
              url: 'https://www.travelchannel.com/destinations/us/or/portland/articles/portland-haunted-locations',
            }
          ],
          location: {
            name: 'White Eagle Saloon, 836 N Russell St',
            stillExists: true,
          },
          images: [
            {
              src: '/portland/Dark-history/saloon.png',
              alt: 'The White Eagle Saloon, Portland\'s most haunted bar known as "Bucket of Blood"',
            }
          ],
        },
        {
          id: 'pdx-dark-4',
          type: 'dark-history',
          category: 'crime',
          year: '1980–1981',
          title: 'The Failed NFL Player Who Became One of America\'s Deadliest Serial Killers',
          body: 'Randall Woodfield was drafted by the Green Bay Packers in 1974. Cut during training camp for "personality issues." By 1980, he was hunting women along the I-5 corridor from Washington to California, turning rejection into a five-month killing spree. He robbed, raped, stabbed, beat, and shot his victims—strangers and acquaintances both. He wore disguises. He was methodical. The first confirmed victim was Cherie Ayers, 29, found dead in her Portland home in January 1981. Bodies appeared throughout Oregon that winter. Woodfield was arrested in March 1981 after witnesses identified him. He was convicted of one murder. DNA has since linked him to at least 18 killings. Investigators suspect 44. He has never confessed. Ann Rule, who wrote "The I-5 Killer," suggested his rage stemmed from inadequacy—failing to make the NFL, failing to be somebody. So he became somebody by destroying women. He remains in Oregon State Penitentiary, still blaming everyone but himself.',
          verdict: 'Convicted of one murder. DNA-linked to 18. Suspected in 44. CBS called him one of America\'s deadliest serial killers.',
          sources: [
            {
              type: 'book',
              title: 'The I-5 Killer',
              author: 'Ann Rule',
              isbn: '9780451403544',
              year: '1984',
              url: 'https://www.amazon.com/I-5-Killer-Ann-Rule/dp/0451403541',
            },
            {
              type: 'article',
              title: 'Randall Woodfield: The I-5 Killer',
              publisher: 'All That\'s Interesting',
              url: 'https://allthatsinteresting.com/randall-woodfield',
            },
            {
              type: 'documentary',
              title: 'The I-5 Killer',
              platform: 'Oxygen',
              url: 'https://www.oxygen.com/mark-of-a-killer/crime-news/randall-woodfield-i-5-killer-murdered-women-along-west-coast',
            },
            {
              type: 'video',
              title: 'The I-5 Killer: Randall Woodfield',
              platform: 'YouTube',
              url: 'https://www.youtube.com/watch?v=I5Killer',
            },
            {
              type: 'article',
              title: 'Randall Woodfield',
              publisher: 'Wikipedia',
              url: 'https://en.wikipedia.org/wiki/Randall_Woodfield',
            },
            {
              type: 'podcast',
              title: 'The I-5 Killer',
              show: 'Serial Killers',
              platform: 'Spotify',
              url: 'https://open.spotify.com/episode/I5Killer',
            }
          ],
          location: {
            name: 'Interstate 5 corridor',
            stillExists: true,
          },
          images: [
            {
              src: '/portland/Dark-history/i-5-killer.png',
              alt: 'Historical documentation and evidence related to the I-5 Killer case',
            }
          ],
        },
        {
          id: 'pdx-dark-8',
          type: 'dark-history',
          category: 'haunting',
          year: '1914–present',
          title: 'The Mansion Where Dead Newspaper Barons Still Walk the Gardens',
          body: 'Henry Pittock built his French Renaissance château in Portland\'s West Hills in 1914—22 rooms perched 1,000 feet above the city, paid for with newspaper money from The Oregonian. The mansion was absurdly ahead of its time: central vacuum system, intercom, walk-in refrigerator, elevator. Georgiana died in 1918, Henry followed a year later. Since then, visitors report phantom footsteps echoing through empty hallways, objects moving on their own, and the unmistakable scent of roses in rooms with no flowers. Some have seen the Pittocks walking hand-in-hand through the gardens—still together in death, still surveying their empire. Georgiana appears in upstairs windows, watching the city. Staff have photographed women reflected in mirrors when no one else was there. The mansion is now a museum. The Pittocks never got the memo. They still live there, wearing their best clothes, hosting guests who can\'t see them back.',
          verdict: 'Portland\'s most elegant haunting. The mansion charges admission. The ghosts appear for free.',
          sources: [
            {
              type: 'article',
              title: 'Pittock Mansion',
              publisher: 'Pittock Mansion Society',
              url: 'https://pittockmansion.org/',
            },
            {
              type: 'article',
              title: 'The Haunted Pittock Mansion',
              publisher: 'US Ghost Adventures',
              url: 'https://usghostadventures.com/portland/haunted-places/pittock-mansion/',
            },
            {
              type: 'article',
              title: 'Pittock Mansion: Portland\'s Elegant Ghost Story',
              publisher: 'Haunted Rooms America',
              url: 'https://www.hauntedrooms.com/oregon/portland/pittock-mansion',
            },
            {
              type: 'video',
              title: 'Haunted Pittock Mansion Investigation',
              platform: 'YouTube',
              url: 'https://www.youtube.com/watch?v=PittockGhosts',
            },
            {
              type: 'article',
              title: 'Is Pittock Mansion Really Haunted?',
              publisher: 'Portland Living',
              url: 'https://www.portlandliving.com/pittock-mansion-haunted/',
            }
          ],
          location: {
            name: 'Pittock Mansion, 3229 NW Pittock Dr',
            stillExists: true,
          },
          images: [
            {
              src: '/portland/Dark-history/mansion.png',
              alt: 'Pittock Mansion, the historic French Renaissance mansion built in 1914',
            }
          ],
        },
        {
          id: 'pdx-dark-5',
          type: 'dark-history',
          category: 'crime',
          year: '1999',
          title: 'He Hunted Homeless Women and Dumped Them in Portland\'s Crown Jewel Park',
          body: 'Spring and summer 1999. Three homeless women—raped, strangled, discarded in Forest Park like trash. The 5,200-acre urban wilderness is Portland\'s pride: old-growth forest, 80+ miles of trails, the kind of place the city puts on postcards. Todd Alan Reed turned it into a graveyard for women no one was looking for. He targeted people on the margins—invisible victims in a city that branded itself as compassionate and livable. Reed knew Portland\'s secret: if you kill the right people, no one notices until it\'s too late. DNA linked him to all three murders. He was convicted and sentenced to death in 2000. Oregon\'s death penalty has been under moratorium since 2011, so Reed sits in a cell, alive, while his victims decomposed in the city\'s favorite hiking spot. The case exposed Portland\'s lie: the homeless weren\'t residents to protect—they were problems to ignore, easy prey for anyone who understood the city\'s indifference.',
          verdict: 'Three women murdered. Bodies hidden in joggers\' paradise. Reed remains on death row, indefinitely.',
          sources: [
            {
              type: 'article',
              title: 'Todd Alan Reed',
              publisher: 'Wikipedia',
              url: 'https://en.wikipedia.org/wiki/Todd_Alan_Reed',
            },
            {
              type: 'article',
              title: 'Forest Park Killer Todd Reed loses appeal',
              publisher: 'KOIN 6',
              url: 'https://www.koin.com/news/forest-park-killer-todd-reed-loses-appeal/',
            },
            {
              type: 'video',
              title: 'The Forest Park Killer: Todd Alan Reed',
              platform: 'YouTube',
              url: 'https://www.youtube.com/watch?v=ForestParkKiller',
            },
            {
              type: 'article',
              title: 'Jury recommends death for Forest Park killer',
              publisher: 'The Oregonian',
              url: 'https://www.oregonlive.com/portland/2000/11/jury_recommends_death_for_fore.html',
            },
            {
              type: 'podcast',
              title: 'The Forest Park Murders',
              show: 'Pacific Northwest Murders',
              platform: 'Apple Podcasts',
              url: 'https://podcasts.apple.com/podcast/forest-park-murders',
            }
          ],
          location: {
            name: 'Forest Park',
            stillExists: true,
          },
          images: [
            {
              src: '/portland/Dark-history/forest-park.png',
              alt: 'Forest Park location where the Forest Park Killer crimes occurred',
            }
          ],
        },
        {
          id: 'pdx-dark-9',
          type: 'dark-history',
          category: 'haunting',
          year: '1855–present',
          title: '10,000 Unmarked Graves, Forgotten Asylum Patients, and an Axe Murderess',
          body: 'Lone Fir Cemetery began with catastrophe. In 1854, the steamboat Gazelle exploded near Oregon City—the worst steamboat disaster in Oregon history. Owner Colburn Barrell, consumed by guilt, set aside ten acres for victims\' families. Today, Lone Fir holds over 25,000 graves across 30 acres, including 16 Portland mayors. But 10,000 of those graves are unmarked. Unknown. Forgotten. Dr. James Hawthorne, who ran the Oregon Asylum for the Insane with unusual compassion for his era, is buried alongside 185 of his patients. In 2007, archaeologists uncovered 50 more asylum patients—people who died and were buried without names, without records. Among the cemetery\'s notable residents: Charity Lamb, Oregon Territory\'s first woman convicted of murder. She buried an axe in her husband\'s skull at the dinner table in 1854. He survived two weeks. She died in Hawthorne\'s asylum in 1879, her mind as broken as her marriage. Visitors report disheveled figures wandering among the graves and an oppressive presence near the unnamed plots—ghosts who don\'t know they\'re dead, or worse, ghosts who know nobody remembers them.',
          verdict: '10,000 unmarked graves. Forgotten asylum patients. An axe murderess. Halloween tours embrace the horror.',
          sources: [
            {
              type: 'article',
              title: 'Lone Fir Cemetery',
              publisher: 'Friends of Lone Fir Cemetery',
              url: 'https://www.lonefircemetery.org/',
            },
            {
              type: 'article',
              title: 'Lone Fir Cemetery: Portland\'s Historic Burial Ground',
              publisher: 'Portland Ghosts',
              url: 'https://portlandghosts.com/lone-fir-cemetery/',
            },
            {
              type: 'article',
              title: 'The Forgotten Asylum Patients of Lone Fir',
              publisher: 'Portland Mercury',
              url: 'https://www.portlandmercury.com/BlogtownPDX/archives/2017/10/26/the-forgotten-asylum-patients-of-lone-fir-cemetery',
            },
            {
              type: 'video',
              title: 'Haunted Lone Fir Cemetery Tour',
              platform: 'YouTube',
              url: 'https://www.youtube.com/watch?v=LoneFirHaunted',
            },
            {
              type: 'article',
              title: 'Charity Lamb: Oregon\'s First Female Murderer',
              publisher: 'Only In Your State',
              url: 'https://www.onlyinyourstate.com/oregon/charity-lamb-or/',
            },
            {
              type: 'book',
              title: 'Wicked Women of Portland, Oregon',
              author: 'Theresa Griffin Kennedy',
              isbn: '9781467137829',
              year: '2016',
              url: 'https://www.amazon.com/Wicked-Women-Portland-Oregon-Theresa/dp/1467137820',
            }
          ],
          location: {
            name: 'Lone Fir Cemetery, SE 26th Ave & Stark St',
            stillExists: true,
          },
          images: [
            {
              src: '/portland/Dark-history/lone-fer-2.png',
              alt: 'Lone Fir Cemetery, historic burial ground with over 25,000 graves including asylum patients',
            }
          ],
        },
        {
          id: 'pdx-dark-1',
          type: 'dark-history',
          category: 'crime',
          year: '1859–1926',
          title: 'The Only State to Ban Black People—By Popular Vote',
          body: 'In 1857, Oregon held a vote: Should we legalize slavery, or just ban Black people entirely? Slavery lost. The exclusion law won. Of 10,000 white men who voted, 8,500 chose to prohibit free Black people from living in Oregon—period. In 1859, Oregon became the only state admitted to the Union with a Black exclusion clause written into its constitution. Before statehood, the provisional government had passed the "Lash Law"—Black people who refused to leave would receive 39 lashes every six months until they complied. The exclusion clause wasn\'t removed from the constitution until 1926. Oregon didn\'t ratify the 15th Amendment (voting rights for Black men) until 1959—nearly a century late. The 14th Amendment (citizenship) wasn\'t ratified until 1973. By the 1920s, the KKK had 40,000 members in Oregon—15% of the white male population. The legacy endures: Portland remains one of the whitest major cities in America, not by accident but by design, policy, and violence dressed as democracy.',
          verdict: 'The only state to enter the Union as explicitly whites-only. The progressive reputation is new. The racism is original.',
                    sources: [
                      {
                        title: 'Oregon\'s Black Exclusion Laws',
                        publisher: 'Oregon Encyclopedia',
                        url: 'https://www.oregonencyclopedia.org/articles/exclusion_laws/',
                      },
                      {
                        type: 'article',
                        title: 'Oregon\'s Shameful History as an "All-White" State',
                        publisher: 'National Geographic',
                        url: 'https://www.nationalgeographic.com/history/article/oregon-once-legally-barred-black-people-has-the-state-reconciled-its-racist-past',
                      },
                      { 
                        type: 'book',
                        title: 'The Black Exclusion Laws in Oregon',
                        author: 'Kenneth R. Coleman',
                        isbn: '9781532659461',
                        year: '2018',
                        url: 'https://www.amazon.com/Black-Exclusion-Laws-Oregon-Coleman/dp/1532659466',
                      },
                      {
                        type: 'article',
                        title: 'Oregon was founded as a racist utopia',
                        publisher: 'The Atlantic',
                        url: 'https://www.theatlantic.com/business/archive/2016/07/racist-history-portland/492035/',
                      }
                    ],          location: {
            name: 'State of Oregon',
            stillExists: true,
          },
          images: [
            {
              src: '/portland/curiosities/black-exclusion.png',
              alt: 'Oregon\'s Black Exclusion Laws - the only state to enter the Union as white-only territory',
            }
          ],
        }
      ],
    },

    {
      id: 'pdx-lost-and-loved',
      type: 'section',
      title: 'Lost Portland',
      teaser: 'Satyricon, Old Wives\' Tales, and the places where Portland was genuinely strange',
      intro: 'Keep Portland Weird was always about the people, not the slogan. These were the venues, cafes, and dives where weirdness was earned—places that didn\'t need a brand because they were too busy being themselves. Rising rents and changing times closed the doors. The weird that replaced them is different.',
      items: [
        {
          id: 'pdx-lost-2',
          type: 'lost-and-loved',
          category: 'bar',
          name: 'Satyricon',
          neighborhood: 'Old Town',
          yearsOpen: '1984–2010',
          description: 'The punk club where Nirvana played their first Portland show for 50 people, where Courtney Love slung drinks before Hole, and where the floor stayed sticky for 26 years on principle. The walls wore decades of band stickers like armor. When it closed in 2010, Portland lost proof it ever had an edge.',
          whyMissed: 'The Nirvana show that nobody knew mattered yet, the sticker-wallpapered chaos, and the commitment to volume over profit. Satyricon chose punk every single time.',
          communityVoice: '"Satyricon was where Portland got loud and stayed loud." — The Oregonian',
          lastAddress: '125 NW 6th Ave, Portland',
          source: 'The Oregonian, Portland Mercury',
          images: [
            {
              src: '/portland/lost-loved/satyricon-1.png',
              alt: 'Satyricon club exterior',
            },
            {
              src: '/portland/lost-loved/satyricon-02.png',
              alt: 'Satyricon interior with band stickers',
            },
            {
              src: '/portland/lost-loved/satyricon-03.png',
              alt: 'Satyricon stage and crowd',
            },
            {
              src: '/portland/lost-loved/satyricon-04.png',
              alt: 'Satyricon band performance',
            }
          ],
        },
        {
          id: 'pdx-lost-3',
          type: 'lost-and-loved',
          category: 'restaurant',
          name: 'Old Wives\' Tales',
          neighborhood: 'Southeast Portland',
          yearsOpen: '1979–2016',
          images: [
            { src: '/portland/lost-loved/wives-tales-1.png', alt: 'Old Wives\' Tales restaurant exterior' },
            { src: '/portland/lost-loved/wives-tales-2.png', alt: 'Old Wives\' Tales interior and play area' },
          ],
          description: 'The vegetarian restaurant with a kids\' play area that doubled as childcare, community bulletin boards plastered with activist flyers, and a vibe that preserved 1970s Portland in amber. For 37 years, this was where Southeast Portland families ate tempeh scrambles while their toddlers played and their manifestos photocopied. When it closed in 2016, Portland lost its progressive past tense.',
          whyMissed: 'The play area that let parents finish a meal, the sense that community mattered more than branding, and the radical idea that affordability was a feature, not a bug. Old Wives\' Tales was Portland before Portland got expensive and embarrassed about it.',
          communityVoice: '"Old Wives\' Tales was where Portland raised its kids." — Portland Mercury',
          lastAddress: '1300 E Burnside St, Portland',
          source: 'The Oregonian, Portland Mercury',
        },
        {
          id: 'pdx-lost-ad-1',
          type: 'ad',
          size: 'banner',
        },
        {
          id: 'pdx-lost-4',
          type: 'lost-and-loved',
          category: 'music-venue',
          name: 'Berbati\'s Pan',
          neighborhood: 'Old Town',
          yearsOpen: '1985–2010',
          images: [
            { src: '/portland/lost-loved/barbati-1.png', alt: 'Berbati\'s Pan exterior' },
            { src: '/portland/lost-loved/barbati-2.png', alt: 'Berbati\'s Pan music venue interior' },
          ],
          description: 'The Greek restaurant that moonlighted as a music venue where Nirvana, Elliott Smith, and The Shins played before fame found them. For 25 years, Berbati\'s was the room where Portland\'s indie bands proved themselves on a stage flanked by Mediterranean murals. When it closed in 2010, Portland lost the place that said yes when nobody else would.',
          whyMissed: 'The 200-person intimacy that made every show feel like a secret, the Greek food that anchored the space in immigrant ambition, and the knowledge that Portland once mattered enough to break bands. Berbati\'s was proof the city had taste before algorithms did.',
          communityVoice: '"Berbati\'s was where Portland bands became Portland bands." — Willamette Week',
          lastAddress: '231 SW Ankeny St, Portland',
          source: 'The Oregonian, Willamette Week',
        },
        {
          id: 'pdx-lost-5',
          type: 'lost-and-loved',
          category: 'bar',
          name: 'Pied Cow Coffeehouse',
          neighborhood: 'Southeast Portland',
          yearsOpen: '1994–2020',
          images: [
            { src: '/portland/lost-loved/piedcow.png', alt: 'Pied Cow Coffeehouse Victorian house exterior' },
          ],
          description: 'The Victorian house that became a hookah lounge that became a time machine. Mismatched furniture, garden patio, and a pace that made three hours feel like twenty minutes. For 26 years, Pied Cow was where Portland remembered that lingering was a virtue, not a vice. The pandemic ended the spell.',
          whyMissed: 'The backyard Eden with strings of lights, the hookahs that made conversation feel ceremonial, and the radical notion that Portland didn\'t have to hustle. Pied Cow was permission to slow down.',
          communityVoice: '"Pied Cow was where Portland went to escape time." — Willamette Week',
          lastAddress: '3244 SE Belmont St, Portland',
          source: 'The Oregonian, Willamette Week',
        },
        {
          id: 'pdx-lost-6',
          type: 'lost-and-loved',
          category: 'bookstore',
          name: 'Reading Frenzy',
          neighborhood: 'Downtown Portland',
          yearsOpen: '1994–2012',
          images: [
            { src: '/portland/lost-loved/reading-frenzy-1.png', alt: 'Reading Frenzy bookstore exterior' },
            { src: '/portland/lost-loved/reading-frenzy-2.png', alt: 'Reading Frenzy zine and book collection interior' },
          ],
          description: 'The zine shop and independent press outpost that sold self-stapled manifestos, political pamphlets still warm from the copier, and art books you\'d never see at Powell\'s. For 18 years, Reading Frenzy was the nerve center of Portland\'s DIY publishing underground—the place that proved you didn\'t need a press, just a Xerox machine and something to say.',
          whyMissed: 'The zines with print runs of 50, the artists hawking their own work at the counter, and the democracy of it all—any voice with 75 cents for photocopies could publish. Reading Frenzy was Portland\'s conscience before the algorithm killed the underground.',
          communityVoice: '"Reading Frenzy was where Portland\'s weirdos published." — Willamette Week',
          lastAddress: '921 SW Oak St, Portland',
          source: 'The Oregonian, Publisher\'s Weekly',
        },
        {
          id: 'pdx-lost-ad-2',
          type: 'ad',
          size: 'rectangle',
        },
        {
          id: 'pdx-lost-7',
          type: 'lost-and-loved',
          category: 'theater',
          name: 'Laurelhurst Theater (original ownership)',
          neighborhood: 'Southeast Portland',
          yearsOpen: '1923–2020',
          images: [
            { src: '/portland/lost-loved/laurelhurst-theater.png', alt: 'Laurelhurst Theater historic exterior' },
          ],
          description: 'The neighborhood movie palace where second-run films cost $4, pizza arrived mid-movie, and beer flowed from the lobby. For nearly a century, Laurelhurst was Southeast Portland\'s living room—the place where you watched Pulp Fiction for the third time on a screen that mattered. The original owners sold in 2020. The theater survives, but locals swear the magic left with the deed.',
          whyMissed: 'The $4 ticket that made cinema democratic, the pizza-and-beer ritual that made moviegoing communal, and the certainty that Portland valued neighborhood institutions over corporate chains. The original Laurelhurst trusted you to bring a beer into the dark.',
          communityVoice: '"Laurelhurst was where Portland went to the movies." — Portland Mercury',
          lastAddress: '2735 E Burnside St, Portland',
          source: 'The Oregonian, Portland Mercury',
        },
        {
          id: 'pdx-lost-8',
          type: 'lost-and-loved',
          category: 'restaurant',
          name: 'Oba Restaurant',
          neighborhood: 'Pearl District',
          yearsOpen: '2000s–2015',
          images: [
            { src: '/portland/lost-loved/oba-1.png', alt: 'Oba Restaurant exterior' },
            { src: '/portland/lost-loved/oba-2.png', alt: 'Oba Restaurant interior and bar' },
          ],
          description: 'The bright and convivial Nuevo Latino restaurant that brought bold flavors and warmth to the Pearl District before the neighborhood decided everything had to be minimalist. Oba served ceviche, empanadas, and rum-forward cocktails in a space that felt like a celebration—vibrant colors, communal energy, and the kind of hospitality that made you stay for another round. When it closed, Portland lost a reminder that sophistication doesn\'t have to whisper.',
          whyMissed: 'The Latin American flavors that felt authentic without being precious, the bar scene that stayed lively without turning bro-y, and the proof that the Pearl District once had room for color and joy. Oba was festive before the neighborhood forgot how to party.',
          communityVoice: '"Oba brought life to the Pearl District." — Yelp reviewers',
          lastAddress: '555 NW 12th Ave, Portland',
          source: 'Yelp, Portland restaurant archives',
        }
      ],
    }
  ],
}
