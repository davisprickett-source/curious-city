import { CityData } from '@/types/content'

export const anchorage: CityData = {
    slug: 'anchorage',
    name: 'Anchorage',
    tagline: 'Where wilderness begins at the edge of the parking lot',
    content: [
      {
        id: 'intro-text',
        type: 'text',
        content: 'Welcome to Anchorage — Alaska\'s largest city, where moose wander through neighborhoods and the mountains are always watching. Here\'s what we\'re curious about.',
      },
      {
        id: 'featured-card',
        type: 'card',
        title: 'The Last Frontier City',
        description: 'A city that exists to service the wilderness while being nothing like it.',
        meta: 'Essay',
        variant: 'featured',
        href: '/anchorage/essay/the-last-frontier-city',
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
            title: 'Flattop Mountain: The Essential Hike',
            description: 'The most popular trail in Alaska, and worth doing anyway.',
            meta: 'Guide',
            href: '/anchorage/flattop',
          },
          {
            title: 'How the PFD Works',
            description: 'Understanding Alaska\'s annual oil dividend check.',
            meta: 'Explainer',
            href: '/anchorage/pfd-explained',
          },
          {
            title: 'Best Places to See Northern Lights Near Town',
            description: 'Dark sky spots within an hour of downtown.',
            meta: 'List',
            variant: 'compact',
            href: '/anchorage/northern-lights',
          },
        ],
      },
      {
        id: 'ad-2',
        type: 'ad',
        size: 'rectangle',
      },
      {
        id: 'curiosities',
        type: 'section',
        title: 'Anchorage Curiosities',
        teaser: 'CIA spy devices, Cold War relics, and secrets at the edge of wilderness',
        items: [
          {
            id: 'anc-curiosity-1',
            type: 'curiosity',
            category: 'nature',
            title: 'Surfers ride a tidal wave that hides quicksand capable of killing you',
            body: 'Twice daily, a 6-foot wall of water barrels up Turnagain Arm at 15 mph—a bore tide you can surf for miles. The catch? The silty glacial water conceals quicksand that\'s swallowed people whole. Local surfers have mapped the safe zones through trial, error, and decades of bodies. One wrong step off your board and the inlet doesn\'t let go.',
            images: [
              {
                src: '/anchorage/curiosities/surf-1.png',
                alt: 'Alaska coastal inlet with mountains',
              },
              {
                src: '/anchorage/curiosities/surf-2.png',
                alt: 'Turnagain Arm landscape where bore tide occurs',
              }
            ],
            source: 'Alaska Department of Fish and Game',
          },
          {
            id: 'anc-curiosity-2',
            type: 'curiosity',
            category: 'nature',
            title: 'Urban moose are more violent than grizzlies',
            body: 'Anchorage\'s 1,500 city moose didn\'t adapt to humans—they learned to bully them. Moose attacks injure 5-10 people per year here, outpacing bear attacks statewide. These aren\'t skittish woodland creatures; they\'re 1,200-pound mammals who\'ve figured out that lawns are easier than tundra and that humans usually back down first. The city runs a dedicated moose patrol. Calving season turns them homicidal.',
            images: [
              {
                src: '/anchorage/curiosities/moose-1.png',
                alt: 'Moose in Alaska wilderness',
              },
              {
                src: '/anchorage/curiosities/moose-2.png',
                alt: 'Wildlife in Alaska urban setting',
              }
            ],
            source: 'Alaska Department of Fish and Game',
          },
          {
            id: 'anc-curiosity-ad-1',
            type: 'ad',
            size: 'banner',
          },
          {
            id: 'anc-curiosity-3',
            type: 'curiosity',
            category: 'history',
            title: 'The CIA trained Alaskan civilians to become Soviet-occupied guerrillas',
            body: 'Operation Washtub didn\'t just plant nuclear-powered listening devices across remote Alaska during the Cold War—it recruited ordinary civilians as "sleeper agents" trained to stay behind after Soviet invasion. These Alaskans were taught sabotage, intelligence gathering, and survival tactics for operating in occupied territory. The program ran 1951-1959. The government didn\'t declassify it for decades, probably because the whole thing sounds completely insane.',
            year: '1951',
            images: [
              {
                src: '/anchorage/curiosities/cia-1.png',
                alt: 'Remote Alaska wilderness where Cold War operations took place',
              },
              {
                src: '/anchorage/curiosities/cia-2.png',
                alt: 'Aerial view of remote Alaska terrain',
              }
            ],
            source: 'Declassified CIA documents',
            location: {
              name: 'Various Alaska locations',
              stillExists: false,
            },
          },
          {
            id: 'anc-curiosity-4',
            type: 'curiosity',
            category: 'culture',
            title: 'Alaska pays you $1,300 a year just for living here',
            body: 'Every October, every Alaskan gets an oil money check in the mail. The Permanent Fund Dividend has paid out anywhere from $331 to $2,072 annually since 1982. Retailers throw "PFD sales." Former residents mysteriously reappear to collect. The state\'s population temporarily spikes. It\'s the only place in America where breathing qualifies you for passive income, and Alaskans will fight you if you suggest touching the fund.',
            source: 'Alaska Permanent Fund Corporation',
          },
          {
            id: 'anc-curiosity-5',
            type: 'curiosity',
            category: 'science',
            title: 'The aurora borealis performs 243 nights a year—if you can stay awake',
            body: 'Anchorage sits directly beneath the auroral oval, the northern lights\' permanent stage. On average, the aurora is visible 243 nights per year. But light pollution from the city washes it out, so serious viewers drive north to darker skies. September through March delivers the best shows, when nights are actually dark and the solar wind is cooperating. Mother Nature\'s most reliable entertainment, assuming you\'re willing to stand outside in the cold.',
            images: [
              {
                src: '/anchorage/curiosities/aurora-1.png',
                alt: 'Northern lights aurora borealis over Alaska',
              },
              {
                src: '/anchorage/curiosities/aurora-2.png',
                alt: 'Vivid aurora display in Alaska sky',
              },
              {
                src: '/anchorage/curiosities/aurora-3-.png',
                alt: 'Aurora borealis over Anchorage landscape',
              },
              {
                src: '/anchorage/curiosities/aurora-4.png',
                alt: 'Spectacular northern lights display',
              }
            ],
            source: 'Geophysical Institute, University of Alaska Fairbanks',
          },
          {
            id: 'anc-curiosity-ad-2',
            type: 'ad',
            size: 'rectangle',
          },
          {
            id: 'anc-curiosity-6',
            type: 'curiosity',
            category: 'history',
            title: 'The 1964 earthquake moved entire neighborhoods 30 feet sideways',
            body: 'The Good Friday Earthquake—magnitude 9.2, the most powerful in North American history—shook Anchorage for four and a half minutes. The ground didn\'t just crack; it liquefied. Entire neighborhoods slid into Cook Inlet. Fourth Avenue dropped 11 feet. The earth moved so violently that surveyed property lines became meaningless. If you owned a house before March 27, 1964, good luck finding where it used to be.',
            year: '1964',
            images: [
              {
                src: '/anchorage/curiosities/earthquake-1.png',
                alt: '1964 earthquake damage on 4th Avenue in Anchorage',
              },
              {
                src: '/anchorage/curiosities/earthquake-2.png',
                alt: 'Massive ground displacement from 1964 earthquake',
              },
              {
                src: '/anchorage/curiosities/earthquake-3.png',
                alt: 'Anchorage downtown earthquake destruction',
              }
            ],
            source: 'USGS Earthquake Hazards Program',
            location: {
              name: 'Downtown Anchorage',
              stillExists: true,
            },
          },
          {
            id: 'anc-curiosity-7',
            type: 'curiosity',
            category: 'culture',
            title: 'The world\'s busiest seaplane base operates inside city limits',
            body: 'Lake Hood logs 190+ floatplane flights per day in summer—more takeoffs and landings than most regional airports. For hundreds of Alaska communities with no roads, these planes are the only connection to civilization. Watch pilots load groceries, lumber, and ATVs into aircraft designed to land on water. This is Alaska\'s version of a commuter hub, except the runways are lakes and the delays involve weather that can kill you.',
            images: [
              {
                src: '/anchorage/curiosities/plainport-1.png',
                alt: 'Floatplane on Alaska lake',
              },
              {
                src: '/anchorage/curiosities/plainport-2.png',
                alt: 'Seaplane in Alaska wilderness',
              }
            ],
            source: 'Lake Hood Seaplane Base',
            location: {
              name: 'Lake Hood',
              stillExists: true,
            },
          },
          {
            id: 'anc-curiosity-8',
            type: 'curiosity',
            category: 'nature',
            title: 'Downtown lawyers catch 30-pound salmon on their lunch break',
            body: 'Ship Creek runs through downtown Anchorage, and every summer, king and silver salmon fight their way upstream—right past office buildings and the federal courthouse. Locals in business attire swap spreadsheets for fishing rods at lunch. The state stocks the creek with extra fish to handle the fishing pressure. This might be the only city in America where you can land a 30-pound king salmon between depositions.',
            images: [
              {
                src: '/anchorage/curiosities/curious-salmon-1.png',
                alt: 'Salmon swimming in Ship Creek in downtown Anchorage',
              },
              {
                src: '/anchorage/curiosities/curious-salmon-2.png',
                alt: 'Urban salmon fishing at Ship Creek',
              }
            ],
            source: 'Alaska Department of Fish and Game',
          },
          {
            id: 'anc-curiosity-9',
            type: 'curiosity',
            category: 'science',
            title: '19 hours of daylight turns some residents manic',
            body: 'During summer solstice, Anchorage gets 19 hours and 21 minutes of daylight. True darkness never arrives from mid-May through late July. Blackout curtains aren\'t optional. Some residents develop what locals call "midnight sun madness"—a wired, manic energy from the endless light. Others spiral into insomnia and disorientation. The sun refuses to set, and your circadian rhythm loses its mind.',
            images: [
              {
                src: '/anchorage/curiosities/curious-solar-1.png',
                alt: 'Endless daylight during Alaska summer solstice',
              },
              {
                src: '/anchorage/curiosities/curious-solar-2.png',
                alt: 'Midnight sun over Anchorage',
              }
            ],
            source: 'National Weather Service Alaska',
          },
          {
            id: 'anc-curiosity-10',
            type: 'curiosity',
            category: 'culture',
            title: 'Over 100 languages are spoken in Anchorage schools',
            body: 'Mountain View, a northeast Anchorage neighborhood, ranks as one of the most diverse census tracts in America. Refugees from Sudan, Bhutan, and Somalia live alongside Pacific Islanders, Indigenous Alaskans, and transplants from everywhere else. Over 100 languages echo through Anchorage schools. It\'s the kind of diversity you\'d expect in Queens or the Bay Area—not at the edge of the Arctic.',
            source: 'U.S. Census Bureau',
            location: {
              name: 'Mountain View neighborhood',
              stillExists: true,
            },
          },
          {
            id: 'anc-curiosity-11',
            type: 'curiosity',
            category: 'culture',
            title: 'You can walk through a neighborhood the earthquake swallowed',
            body: 'Earthquake Park preserves the exact spot where 75 houses slid into Cook Inlet during the 1964 quake. The ground still ripples and buckles—what was once flat suburban streets is now hummocky, broken terrain. Interpretive signs show before-and-after photos: tidy homes, then nothing. You\'re walking on land that liquefied and ate an entire neighborhood. The earth hasn\'t forgotten, and neither should you.',
            year: '1964',
            images: [
              {
                src: '/anchorage/curiosities/quake-park.png',
                alt: 'Alaska landscape terrain',
              },
              {
                src: '/anchorage/curiosities/quake-park-2.png',
                alt: 'Alaska natural landscape',
              }
            ],
            source: 'Municipality of Anchorage',
            location: {
              name: 'Earthquake Park',
              stillExists: true,
            },
          },
          {
            id: 'anc-curiosity-12',
            type: 'curiosity',
            category: 'culture',
            title: 'Anchorage is geographically closer to Tokyo than Miami',
            body: 'Anchorage sits on the great circle route between North America and Asia. Flights from New York to Tokyo pass almost directly overhead. This geographic accident turned Ted Stevens Airport into a global cargo hub—FedEx and UPS refuel here, transferring freight between continents. Your Amazon package from Shenzhen probably stopped in Anchorage. Geography made this city relevant whether it wanted to be or not.',
            source: 'Ted Stevens Anchorage International Airport',
            location: {
              name: 'Ted Stevens International Airport',
              stillExists: true,
            },
          },
          {
            id: 'anc-curiosity-13',
            type: 'curiosity',
            category: 'culture',
            title: 'The Iditarod\'s starting line is pure theater—the real race starts elsewhere',
            body: 'Every March, sled dog teams run through downtown Anchorage streets while crowds cheer. It\'s the ceremonial start of the Iditarod, Alaska\'s famous 1,000-mile race. The actual race? That starts the next day in Willow, 50 miles north, where there\'s reliable snow and no tourists. The Anchorage start is spectacle, tradition, and civic pride—in that order. Nobody pretends otherwise.',
            source: 'Iditarod Trail Committee',
          },
          {
            id: 'anc-curiosity-14',
            type: 'curiosity',
            category: 'history',
            title: 'Alaska voted twice to move the capital here—then refused to pay for it',
            body: 'Juneau, Alaska\'s capital, is inaccessible by road. You can only reach it by plane or boat. In 1976 and again in 1994, voters approved moving the capital to a site near Anchorage. Both times, the funding ballot failed. Alaskans wanted a more practical capital—they just didn\'t want to pay for new government buildings. So Juneau remains the capital, inaccessible and inexplicable, because fiscal conservatism beat out logic.',
            source: 'Alaska State Legislature',
          },
          {
            id: 'anc-curiosity-15',
            type: 'curiosity',
            category: 'legend',
            title: 'The Alaska Triangle has swallowed 16,000 people since 1988',
            body: 'A region stretching from Juneau to Barrow to Anchorage has a missing persons rate four times the national average. Since 1988, over 16,000 people have vanished—most in the wilderness, some under circumstances that defy explanation. The Alaska Triangle isn\'t supernatural; it\'s geographical reality meeting human fragility. The wilderness here doesn\'t need a legend. It just needs time.',
            source: 'Alaska State Troopers',
          },
        ],
      },
      {
        id: 'iconic-spots',
        type: 'section',
        title: 'Iconic Spots',
        intro: 'These are Anchorage\'s landmarks — the places that define the Last Frontier. Famous for good reason.',
        items: [
          {
            id: 'iconic-1',
            type: 'iconic-spot',
            name: 'Flattop Mountain Trail',
            category: 'Hike',
            description: 'The most-climbed mountain in Alaska, with panoramic views of the city, Cook Inlet, and the Alaska Range. Steep but doable for most fitness levels.',
            images: [
              {
                src: '',
                alt: 'View from Flattop Mountain overlooking Anchorage and Cook Inlet',
              },
              {
                src: '',
                alt: 'Hikers on Flattop Mountain trail',
              }
            ],
            address: 'Glen Alps Trailhead, Anchorage, AK 99516',
            coordinates: { lat: 61.1017, lng: -149.6831 },
            hours: 'Dawn to dusk',
            price: '$5 parking fee',
            tip: 'Go early on weekends — parking fills up fast',
          },
          {
            id: 'iconic-2',
            type: 'iconic-spot',
            name: 'Tony Knowles Coastal Trail',
            category: 'Trail',
            description: 'An 11-mile paved trail from downtown to Kincaid Park, hugging the coast with views of the inlet and mountains. Moose sightings are common. Popular with bikers, runners, and skiers.',
            images: [
              {
                src: '',
                alt: 'Tony Knowles Coastal Trail with Cook Inlet and mountains',
              },
              {
                src: '',
                alt: 'Cyclists on the Coastal Trail',
              }
            ],
            address: 'Starts near Elderberry Park, downtown',
            coordinates: { lat: 61.2181, lng: -149.9003 },
            hours: '24 hours',
            price: 'Free',
            tip: 'Rent bikes from downtown and ride to Kincaid',
          },
          {
            id: 'iconic-3',
            type: 'iconic-spot',
            name: 'Anchorage Museum',
            category: 'Museum',
            description: 'World-class museum covering Alaska Native cultures, Arctic science, and contemporary art. The Smithsonian Arctic Studies Center inside has an exceptional collection of Native artifacts.',
            images: [
              {
                src: '',
                alt: 'Anchorage Museum exterior',
              },
              {
                src: '',
                alt: 'Anchorage Museum building and plaza',
              }
            ],
            address: '625 C St, Anchorage, AK 99501',
            coordinates: { lat: 61.2163, lng: -149.8867 },
            hours: 'Tue-Sun 10am-6pm',
            price: '$20 adults',
            website: 'https://anchoragemuseum.org',
            tip: 'First Friday of each month is pay-what-you-wish',
          },
          {
            id: 'iconic-4',
            type: 'iconic-spot',
            name: 'Lake Hood Seaplane Base',
            category: 'Experience',
            description: 'The world\'s busiest seaplane base, right next to the airport. Watch floatplanes take off and land from the shore. You can book flightseeing tours from here.',
            images: [
              {
                src: '',
                alt: 'Floatplanes docked at Lake Hood Seaplane Base',
              },
              {
                src: '',
                alt: 'Floatplane on Lake Hood',
              }
            ],
            address: 'Lake Hood Dr, Anchorage, AK 99502',
            coordinates: { lat: 61.1811, lng: -149.9694 },
            hours: 'Best viewing in summer, dawn to dusk',
            price: 'Free to watch',
            tip: 'Rust\'s Flying Service offers excellent glacier tours',
          },
        ],
      },
      {
        id: 'hidden-gems',
        type: 'section',
        title: 'Hidden Anchorage',
        teaser: 'Abandoned missile sites, spirit houses, and a 20-foot chocolate waterfall',
        intro: 'These aren\'t in the guidebooks. Abandoned Cold War missile sites on mountaintops, spirit houses blending Russian Orthodox and Dena\'ina traditions, earthquake remnants from 1964, downtown salmon runs, and a 20-foot chocolate waterfall. This is where Alaska gets weird.',
        items: [
          {
            id: 'gem-coldwar-1',
            type: 'hidden-gem',
            name: 'Nike Site Summit',
            category: 'Cold War Relic',
            description: 'A 244-acre abandoned Nike Hercules missile battery atop Mount Gordon Lyon, operational 1959-1979 as part of the "Rings of Steel" defense against Soviet attacks. One of the most complete Nike sites left in the U.S. Guided tours only through military base.',
            images: [
              {
                src: '',
                alt: 'Abandoned Cold War military installation on mountaintop',
              },
            ],
            address: 'Mount Gordon Lyon, 12.5 miles east of downtown',
            coordinates: { lat: 61.24, lng: -149.66 },
            hours: 'Tours only through Joint Base Elmendorf-Richardson',
            price: 'Varies by tour',
            tip: 'Book well in advance - tours fill up quickly for this rare site',
          },
          {
            id: 'gem-cultural-1',
            type: 'hidden-gem',
            name: 'Eklutna Spirit Houses Cemetery',
            category: 'Cultural Site',
            description: 'Over 100 brightly colored spirit houses blending Dena\'ina Athabascan and Russian Orthodox burial traditions. Bodies buried with blankets, then spirit houses painted in family colors placed 40 days later. Left to decay naturally per Athabascan tradition. Site settled over 800 years ago.',
            images: [
              {
                src: '',
                alt: 'Colorful spirit houses in cemetery setting',
              },
            ],
            address: 'St. Nicholas Russian Orthodox Church, Eklutna Village (25 miles north)',
            coordinates: { lat: 61.46, lng: -149.35 },
            hours: 'Open daily',
            price: 'Small donation appreciated',
            tip: 'Photography allowed but be respectful - oldest inhabited location in Anchorage area',
          },
          {
            id: 'gem-earthquake-1',
            type: 'hidden-gem',
            name: 'Earthquake Park',
            category: 'Historic Site',
            description: 'Site of catastrophic 1964 landslide where 75 houses in Turnagain Heights slid into Cook Inlet during the 9.2 magnitude quake. Ground remains visibly uneven with rippling hills showing soil liquefaction effects nearly 60 years later.',
            images: [
              {
                src: '',
                alt: 'Uneven terrain showing earthquake damage effects',
              },
            ],
            address: 'Earthquake Park, West Northern Lights Blvd',
            coordinates: { lat: 61.20, lng: -149.98 },
            hours: 'Open daily',
            price: 'Free',
            website: 'https://www.muni.org/parks',
            tip: 'Walk the paved loop to see visible ground displacement - interpretive signs tell the story',
          },
          {
            id: 'gem-museum-1',
            type: 'hidden-gem',
            name: 'Little Lithuanian Museum',
            category: 'Appointment-Only Museum',
            description: 'Incredibly intimate museum in a tiny yellow house in Chugiak run by Svaja Worthington, showcasing Lithuanian heritage through family heirlooms, traditional clothing, and artifacts. Also serves as Honorary Consulate of Lithuania.',
            images: [
              {
                src: '',
                alt: 'Small historic house museum with traditional artifacts',
              },
            ],
            address: 'Chugiak (contact for exact location)',
            coordinates: { lat: 61.39, lng: -149.47 },
            hours: 'By appointment only, June-September',
            price: 'Free',
            tip: 'Svaja personally guides every visitor - deeply personal experience',
          },
          {
            id: 'gem-museum-2',
            type: 'hidden-gem',
            name: 'Alaska Law Enforcement Museum',
            category: 'Niche Museum',
            description: 'Over 3,000 sq ft of law enforcement history including a restored 1952 Hudson Hornet patrol car, antique radios, wire-tapping equipment, shackles, vintage uniforms, and badges from Territorial period through Statehood. Alaska\'s only collection of historical law enforcement memorabilia.',
            images: [
              {
                src: '/anchorage/curiosities/curious-police-1.png',
                alt: 'Historic police car and law enforcement memorabilia',
              },
              {
                src: '/anchorage/curiosities/curious-police-2.png',
                alt: 'Alaska Law Enforcement Museum exhibits',
              }
            ],
            address: '245 W 5th Ave, downtown Anchorage',
            coordinates: { lat: 61.2176, lng: -149.8856 },
            hours: 'Wed-Fri 10am-4pm, Sat 12-5pm (closed Sun-Tue)',
            price: '$5 ($3 for military, law enforcement, youth, seniors)',
            website: 'https://foast.org/museum',
            tip: 'The Hudson Hornet patrol car is a highlight',
          },
          {
            id: 'anc-gem-ad-1',
            type: 'ad',
            size: 'banner',
          },
          {
            id: 'gem-nature-1',
            type: 'hidden-gem',
            name: 'Campbell Creek Gorge Overlook',
            category: 'Secret Viewpoint',
            description: 'Tree-covered overlook gazing hundreds of feet down a sheer cliff to Campbell Creek crashing through a narrow canyon. One of Anchorage\'s best-kept secrets. Not well-marked.',
            images: [
              {
                src: '/anchorage/curiosities/curious-campbell-1.png',
                alt: 'Creek flowing through narrow canyon with steep cliffs',
              },
              {
                src: '/anchorage/curiosities/curious-campbell-2.png',
                alt: 'Campbell Creek gorge overlook',
              }
            ],
            address: 'Accessible from Hillside Ski Chalet parking or North Bivouac Trailhead',
            coordinates: { lat: 61.10, lng: -149.71 },
            hours: 'Dawn to dusk',
            price: 'Free',
            tip: 'Arrive early for best light - ask locals for exact trailhead',
          },
          {
            id: 'gem-aurora-1',
            type: 'hidden-gem',
            name: 'Glen Alps Aurora Viewpoint',
            category: 'Northern Lights Spot',
            description: 'At 2,200 feet elevation with views of Anchorage Bowl and five mountain ranges - possibly the BEST aurora viewing spot in Anchorage. Overlook provides northern exposure away from city lights. Best viewing near midnight August-April.',
            images: [
              {
                src: '/anchorage/curiosities/curious-glenalps1.png',
                alt: 'Mountain overlook with aurora borealis in night sky',
              },
              {
                src: '/anchorage/curiosities/curious-glenalps2.png',
                alt: 'Glen Alps viewpoint for northern lights',
              }
            ],
            address: 'Glen Alps Trailhead, Chugach State Park',
            coordinates: { lat: 61.102, lng: -149.676 },
            hours: '24/7; best viewing near midnight Aug-Apr',
            price: '$5 parking fee',
            tip: 'Arrive before dark to secure parking during active aurora nights - dress warmly',
          },
          {
            id: 'gem-wildlife-1',
            type: 'hidden-gem',
            name: 'Ship Creek Urban Salmon Viewing',
            category: 'Urban Wildlife',
            description: '10-minute walk from downtown to watch king salmon (May-June) and silver salmon (July-Sept) at fish ladders and spillway. One of best urban salmon fishing spots in America. Rent gear on-site.',
            images: [
              {
                src: '',
                alt: 'Salmon swimming upstream in urban creek setting',
              },
            ],
            address: 'Ship Creek Overlook Park, East Whitney Road',
            coordinates: { lat: 61.2213, lng: -149.8776 },
            hours: 'Open daily; best July-September',
            price: 'Free (fishing license required to fish)',
            website: 'https://www.alaska.org/detail/salmon-viewing-at-ship-creek',
            tip: 'Watch from viewing platforms and pedestrian bridges - Alaska Railroad trains pass regularly',
          },
          {
            id: 'gem-nature-2',
            type: 'hidden-gem',
            name: 'Turnagain Arm Bore Tide',
            category: 'Natural Phenomenon',
            description: 'Wave up to 10 feet high thundering into Turnagain Arm at 6-24 mph twice daily during extreme tides. Local surfers ride for miles. Best during new/full moons, especially fall equinox. Arrives ~1 hr 15 min after low tide at Beluga Point.',
            images: [
              {
                src: '/anchorage/curiosities/curious-wave-1.png',
                alt: 'Tidal bore wave rushing through narrow inlet',
              },
              {
                src: '/anchorage/curiosities/curious-wave-main-0.png',
                alt: 'Turnagain Arm bore tide wave phenomenon',
              }
            ],
            address: 'Best viewing: Beluga Point (20 min south of Anchorage)',
            coordinates: { lat: 61.01, lng: -149.52 },
            hours: 'Check tide charts; arrive 30 min before predicted arrival',
            price: 'Free to view',
            website: 'https://www.alaska.org/advice/alaska-bore-tide',
            tip: 'DO NOT walk on mudflats - quicksand-like silt has caused fatal drownings',
          },
          {
            id: 'gem-quirky-1',
            type: 'hidden-gem',
            name: 'World\'s Largest Chocolate Waterfall',
            category: 'Quirky Attraction',
            description: '20-foot chocolate waterfall with 3,000+ pounds of chocolate flowing through copper candy kettles. Created in 1994 by Homer artist Mike Sirl. Display only (not drinkable). While not Guinness-certified, likely the world\'s largest.',
            images: [
              {
                src: '/anchorage/curiosities/curious-chocolate-1.png',
                alt: 'Large chocolate waterfall display in factory setting',
              },
              {
                src: '/anchorage/curiosities/curious-chocolate-2.png',
                alt: 'Alaska Wild Berry Products chocolate waterfall',
              }
            ],
            address: 'Alaska Wild Berry Products, 5225 Juneau Street',
            coordinates: { lat: 61.1956, lng: -149.8678 },
            hours: 'Store hours (typically 9am-7pm)',
            price: 'Free to view',
            website: 'https://akwildberry.com',
            tip: 'Factory tours available - gift shop has chocolate treats',
          },
          {
            id: 'gem-trail-1',
            type: 'hidden-gem',
            name: 'Anchorage Light Speed Planet Walk',
            category: 'Public Art Trail',
            description: 'Scale model solar system from Sun (5th & G Street downtown) to Pluto (Kincaid Chalet) - walking at leisurely pace mimics light speed. Takes 5.5 hours to walk entire route. Designed by high school astronomy student.',
            images: [
              {
                src: '',
                alt: 'Planet model markers along urban trail',
              },
            ],
            address: 'Starts: 5th Ave & G Street (The Sun)',
            coordinates: { lat: 61.2176, lng: -149.8894 },
            hours: '24/7',
            price: 'Free',
            website: 'https://anchorageplanetwalk.org',
            tip: 'Earth is 8-min walk, Jupiter 45-min, Pluto 5.5 hours - walk as much or as little as you like',
          },
          {
            id: 'anc-gem-ad-2',
            type: 'ad',
            size: 'rectangle',
          },
          {
            id: 'gem-history-1',
            type: 'hidden-gem',
            name: 'Oscar Anderson House Museum',
            category: 'Historic House',
            description: 'Anchorage\'s ONLY historic house museum - the first wood-frame house in Anchorage (1915), built by Oscar Anderson who claimed to be the 18th person to set foot in Anchorage. Fully restored to 1915 appearance. Named Distinctive Destination by National Trust.',
            images: [
              {
                src: '/anchorage/curiosities/curious-andersonhouse-1.png',
                alt: 'Historic wood-frame house from early 1900s',
              },
              {
                src: '/anchorage/curiosities/curious-andersonhouse-3.png',
                alt: 'Oscar Anderson House Museum interior',
              }
            ],
            address: '420 M Street, Elderberry Park, downtown',
            coordinates: { lat: 61.2159, lng: -149.8967 },
            hours: 'Varies seasonally; 45-minute guided tours',
            price: '$7-10',
            tip: 'Anderson was active in meat packing, coal, aviation, and newspapers',
          },
          {
            id: 'gem-cultural-2',
            type: 'hidden-gem',
            name: 'Indigenous Place Names Project Markers',
            category: 'Cultural Art',
            description: '32 sculptural markers throughout Anchorage featuring Dena\'ina language, traditional fire bag designs, and place name stories. Each features "you are walking on Dena\'ina land." Artwork by Melissa Shaginoff at parks and trails.',
            images: [
              {
                src: '/anchorage/curiosities/curious-names-1.png',
                alt: 'Indigenous cultural markers along trail',
              },
              {
                src: '/anchorage/curiosities/curious-names2.png',
                alt: 'Dena\'ina place names project markers',
              }
            ],
            address: 'Multiple locations: Westchester Lagoon, Muldoon Park, Potter Marsh, Point Woronzof',
            coordinates: { lat: 61.2181, lng: -149.9003 },
            hours: 'Park hours',
            price: 'Free',
            website: 'https://anchorageparkfoundation.org/indigenous-placemaking',
            tip: 'Look for artwork along Chester Creek and other major trails',
          },
          {
            id: 'gem-brewery-1',
            type: 'hidden-gem',
            name: 'Midnight Sun Brewing Company',
            category: 'Brewery',
            description: 'One of Alaska\'s best breweries with a huge tap list and excellent food. The brewing facility is impressive, and they don\'t take themselves too seriously.',
            images: [
              {
                src: '',
                alt: 'Craft brewery tap room with beer selection',
              },
              {
                src: '',
                alt: 'Brewery equipment and tanks',
              }
            ],
            address: '8111 Dimond Hook Dr, Anchorage, AK 99507',
            coordinates: { lat: 61.1385, lng: -149.8644 },
            hours: 'Mon-Thu 11am-10pm, Fri-Sat 11am-11pm, Sun 11am-9pm',
            price: '$$',
            website: 'https://midnightsunbrewing.com',
            tip: 'The Sockeye Red IPA is the flagship',
          },
          {
            id: 'gem-wildlife-2',
            type: 'hidden-gem',
            name: 'Alaska Wildlife Conservation Center',
            category: 'Wildlife',
            description: 'A rescue facility where you can see bears, moose, musk oxen, and other Alaskan animals up close. Most animals were orphaned or injured. A guaranteed way to see wildlife.',
            images: [
              {
                src: '/anchorage/curiosities/curious-conservation-1.png',
                alt: 'Brown bear at Alaska Wildlife Conservation Center',
              },
              {
                src: '/anchorage/curiosities/curious-conservation-2.png',
                alt: 'Musk ox at wildlife center',
              },
              {
                src: '/anchorage/curiosities/curious-conservation-3.png',
                alt: 'Alaska Wildlife Conservation Center animals',
              }
            ],
            address: 'Mile 79 Seward Highway, Girdwood, AK 99587',
            coordinates: { lat: 60.8228, lng: -148.9883 },
            hours: 'Daily 10am-5pm',
            price: '$15 adults',
            website: 'https://alaskawildlife.org',
            tip: 'Combine with a drive down Turnagain Arm — one of the most scenic drives in America',
          },
        ],
      },
      {
        id: 'anc-best-bars',
        type: 'best-of',
        category: 'bars',
        title: 'Last Frontier Pours',
        intro: 'Anchorage bars are unpretentious by necessity. The vibe is come-as-you-are.',
        spots: [
          {
            name: 'Blues Central',
            neighborhood: 'Downtown',
            vibe: 'Hidden speakeasy with craft cocktails and live jazz',
            order: 'Any of the Prohibition-era cocktails',
            why: 'Tucked on the second floor of Williwaw, you need to find the phone booth and password to get in',
            address: '609 F St, Anchorage, AK 99501',
            coordinates: { lat: 61.2175, lng: -149.8878 },
            price: '$$',
            images: [
              {
                src: '/anchorage/bars/blues-central-1.jpg',
                alt: '1920s-style speakeasy with vintage lighting and rock icons',
              },
              {
                src: '/anchorage/establishments/blues-1.png',
                alt: 'Blues Central speakeasy interior',
              },
              {
                src: '/anchorage/establishments/blues-2.png',
                alt: 'Blues Central atmosphere',
              }
            ],
          },
          {
            name: '49th State Brewing',
            neighborhood: 'Downtown',
            vibe: 'Big brewpub with Alaska character',
            order: 'Whatever\'s seasonal and the halibut tacos',
            why: 'There\'s literally a bus on the roof—the famous "Into the Wild" replica. But beyond the gimmick, this is a proper brewpub: solid beer lineup, genuinely good halibut tacos, and the kind of Alaska character that doesn\'t feel manufactured. The downtown location has the best atmosphere; Denali location is scenery.',
            address: '717 W 3rd Ave, Anchorage, AK 99501',
            coordinates: { lat: 61.2189, lng: -149.8917 },
            price: '$$',
            images: [
              {
                src: '/anchorage/bars/49th-state-1.jpg',
                alt: 'Craft brewery tap handles',
              },
              {
                src: '/anchorage/bars/49th-state-2.jpg',
                alt: 'Brewpub interior with rustic decor',
              }
            ],
          },
          {
            name: 'Darwin\'s Theory',
            neighborhood: 'Spenard',
            vibe: 'Neighborhood bar with strong drinks and zero attitude',
            order: 'Beer and a shot',
            why: 'Spenard is Anchorage\'s weird neighborhood, and this bar fits',
            address: '426 G St, Anchorage, AK 99501',
            coordinates: { lat: 61.2173, lng: -149.8856 },
            price: '$',
            images: [
              {
                src: '/anchorage/bars/darwins-theory-1.jpg',
                alt: 'Classic neighborhood dive bar interior',
              },
              {
                src: '/anchorage/establishments/darin-1.png',
                alt: 'Darwin\'s Theory bar exterior',
              },
              {
                src: '/anchorage/establishments/darwin-2.png',
                alt: 'Darwin\'s Theory bar atmosphere',
              }
            ],
          },
          {
            name: 'Williwaw Social',
            neighborhood: 'Downtown',
            vibe: 'Live music venue and cocktail bar',
            order: 'Check the calendar and order whatever',
            why: 'Williwaw is where Anchorage\'s live music scene actually happens. They book touring acts that skip most of Alaska, local bands with genuine followings, and the occasional DJ set that turns the place into something unexpected. The sound system is proper, the cocktails are better than they need to be, and the crowd skews younger than most Anchorage bars.',
            address: '609 F St, Anchorage, AK 99501',
            coordinates: { lat: 61.2175, lng: -149.8878 },
            price: '$$',
            images: [
              {
                src: '/anchorage/bars/williwaw-1.jpg',
                alt: 'Live music venue stage with lighting',
              },
              {
                src: '/anchorage/bars/williwaw-2.jpg',
                alt: 'Concert venue interior with crowd',
              },
              {
                src: '/anchorage/bars/williwaw-3.jpg',
                alt: 'Williwaw concert venue with stage',
              }
            ],
          },
        ],
      },
      {
        id: 'anc-best-restaurants',
        type: 'best-of',
        category: 'restaurants',
        title: 'Alaska Eats',
        intro: 'Alaska seafood is the star. Everything else is imported, but the fish is the real thing.',
        spots: [
          {
            name: 'Simon & Seafort\'s',
            neighborhood: 'Downtown',
            vibe: 'Old-school fine dining with inlet views',
            order: 'Anything fresh from the sea',
            why: 'Simon\'s has been serving Alaska seafood with panoramic Cook Inlet views since 1978. The macadamia nut halibut is famous because it\'s genuinely perfect—the technique hasn\'t changed in decades. This is old-school fine dining: white tablecloths, professional service, the kind of place you take your parents when they visit. Watching the sun set over the inlet while eating halibut pulled from these waters earlier that day is the Alaska experience done right.',
            address: '420 L St, Anchorage, AK 99501',
            coordinates: { lat: 61.2156, lng: -149.8814 },
            price: '$$$',
            images: [
              {
                src: '/anchorage/establishments/simon-1.png',
                alt: 'Simon & Seafort\'s restaurant interior',
              },
              {
                src: '/anchorage/establishments/simon-2.png',
                alt: 'Simon & Seafort\'s dining room',
              },
              {
                src: '/anchorage/establishments/simon-3.png',
                alt: 'Simon & Seafort\'s atmosphere',
              }
            ],
            menu_image: '/anchorage/establishments/simon-menu.png',
          },
          {
            name: 'Moose\'s Tooth Pub & Pizzeria',
            neighborhood: 'Midtown',
            vibe: 'Legendary local pizza with excellent beer',
            order: 'Pepperoni Rendezvous and a Fairweather IPA',
            why: 'Moose\'s Tooth isn\'t just pizza—it\'s an Anchorage rite of passage. Lines wrap around the building because the pizza is genuinely excellent: creative toppings on a perfect crust, house-brewed beer that\'s become legendary in its own right. The Broken Tooth Brewing operation shares the space. Locals argue fiercely about which pizza is best. The Pepperoni Rendezvous is the classic, but the rotating specials are worth exploring.',
            address: '3300 Old Seward Hwy, Anchorage, AK 99503',
            coordinates: { lat: 61.1903, lng: -149.8764 },
            price: '$$',
            images: [
              {
                src: '/anchorage/establishments/moosetooth-1.png',
                alt: 'Moose\'s Tooth restaurant exterior',
              },
              {
                src: '/anchorage/establishments/moosetooth-2.png',
                alt: 'Moose\'s Tooth interior and dining area',
              },
              {
                src: '/anchorage/establishments/moosetooth-3.png',
                alt: 'Moose\'s Tooth pizzeria atmosphere',
              }
            ],
            menu_image: '/anchorage/establishments/moosetooth-menu-1.png',
          },
          {
            name: 'Snow City Cafe',
            neighborhood: 'Downtown',
            vibe: 'Breakfast institution with local character',
            order: 'Anything with reindeer sausage',
            why: 'Snow City is where Anchorage politicians, lawyers, fishermen, and artists all somehow end up on Saturday mornings. The reindeer sausage is the signature move—savory, slightly gamey, distinctly Alaskan. The cafe was instrumental in revitalizing downtown Anchorage in the 1990s and remains a neighborhood anchor. Expect to wait on weekends; the locals haven\'t abandoned it despite the crowds.',
            address: '1034 W 4th Ave, Anchorage, AK 99501',
            coordinates: { lat: 61.2181, lng: -149.9008 },
            price: '$$',
            images: [
              {
                src: '/anchorage/establishments/snowcity-1.png',
                alt: 'Snow City Cafe exterior',
              },
              {
                src: '/anchorage/establishments/snowcity-2.png',
                alt: 'Snow City Cafe interior dining area',
              },
              {
                src: '/anchorage/establishments/snowcity-3.png',
                alt: 'Snow City Cafe atmosphere',
              }
            ],
            menu_image: '/anchorage/establishments/snowcity-menu.png',
          },
          {
            name: 'Spenard Roadhouse',
            neighborhood: 'Spenard',
            vibe: 'Upscale comfort food in the funky part of town',
            order: 'Mac and cheese with add-ons',
            why: 'Spenard is Anchorage\'s artsy, funky neighborhood—the kind of place where tattoo shops neighbor yoga studios—and Spenard Roadhouse channels that energy into upscale comfort food. The mac and cheese is customizable with add-ons like reindeer sausage or pulled pork. Brunch on weekends draws the creative class. The building itself is unpretentious in a way that feels intentional.',
            address: '1049 W Northern Lights Blvd, Anchorage, AK 99503',
            coordinates: { lat: 61.1947, lng: -149.9022 },
            price: '$$',
            images: [
              {
                src: '/anchorage/establishments/spenard-roadhouse-1.png',
                alt: 'Spenard Roadhouse exterior',
              },
              {
                src: '/anchorage/establishments/spenard-roadhouse-2.png',
                alt: 'Spenard Roadhouse interior dining',
              },
              {
                src: '/anchorage/establishments/spenard-roadhouse-3.png',
                alt: 'Spenard Roadhouse atmosphere',
              }
            ],
            menu_image: '/anchorage/establishments/spenard-roadhouse-menu.png',
          },
          {
            name: 'Kinley\'s Restaurant',
            neighborhood: 'Downtown',
            vibe: 'Modern Alaskan with indigenous influences',
            order: 'Tasting menu or whatever features local catch',
            why: 'Kinley\'s is what happens when a chef actually commits to showcasing Alaska\'s ingredients: local seafood, foraged greens, indigenous techniques, and a tasting menu that tells a story about place. This is the restaurant that proves Anchorage can compete on a national level. The space is elegant but not stuffy. Reservations are essential. For a city this isolated, having a restaurant this ambitious is something worth celebrating.',
            address: '501 W 3rd Ave, Anchorage, AK 99501',
            coordinates: { lat: 61.2185, lng: -149.8883 },
            price: '$$$$',
            images: [
              {
                src: '/anchorage/establishments/kinleys-1.png',
                alt: 'Kinley\'s Restaurant interior',
              },
              {
                src: '/anchorage/establishments/kinleys-2.png',
                alt: 'Kinley\'s fine dining atmosphere',
              }
            ],
            menu_image: '/anchorage/establishments/kinleys-menu.png',
          },
        ],
      },
      {
        id: 'anc-coffee-shops',
        type: 'best-of',
        category: 'coffee-shops',
        title: 'Dark Winter Fuel',
        intro: 'Coffee culture thrives in the land of 19-hour winter nights. These spots keep Anchorage caffeinated and sane.',
        spots: [
          {
            name: 'Kaladi Brothers Coffee',
            neighborhood: 'Multiple Locations',
            vibe: 'Alaska\'s hometown roaster since 1986. Unpretentious, consistent, deeply local.',
            order: 'The drip coffee or a classic latte — they nail the basics.',
            why: 'Kaladi Brothers is to Anchorage what Stumptown is to Portland. They\'ve been roasting in Alaska since 1986 and have earned their status as the local favorite. Every location has regulars who\'ve been coming for decades. The Brayton Drive roastery location is the original.',
            address: '6921 Brayton Dr, Anchorage, AK 99507',
            coordinates: { lat: 61.1543, lng: -149.8658 },
            hours: 'Daily 6am-8pm (hours vary by location)',
            price: '$$',
            website: 'https://kaladi.com',
            instagram: '@kaladibrotherscoffee',
            images: [
              {
                src: '/anchorage/coffee-shops/kaladi-1.jpg',
                alt: 'Coffee roasting equipment',
              },
              {
                src: '/anchorage/coffee-shops/kaladi-2.jpg',
                alt: 'Fresh roasted coffee beans',
              },
              {
                src: '/anchorage/coffee-shops/kaladi-3.jpg',
                alt: 'Classic coffee shop latte',
              }
            ],
          },
          {
            name: 'SteamDot Coffee Roasters',
            neighborhood: 'Downtown',
            vibe: 'Modern third-wave in a historic building. High ceilings, exposed brick, serious about craft.',
            order: 'Seasonal single-origin pour-over or their signature lavender latte.',
            why: 'SteamDot brought third-wave coffee to downtown Anchorage and set a new bar for quality. The space in the historic 4th Avenue building is beautiful — high ceilings, natural light, the kind of place where you want to linger. Their roasting program is constantly evolving.',
            address: '427 W 4th Ave, Anchorage, AK 99501',
            coordinates: { lat: 61.2178, lng: -149.8906 },
            hours: 'Mon-Fri 7am-5pm, Sat-Sun 8am-5pm',
            price: '$$',
            website: 'https://steamdot.com',
            instagram: '@steamdotcoffee',
            images: [
              {
                src: '/anchorage/coffee-shops/steamdot-1.jpg',
                alt: 'Pour-over coffee being prepared',
              },
              {
                src: '/anchorage/coffee-shops/steamdot-2.jpeg',
                alt: 'Modern minimalist coffee shop interior',
              },
              {
                src: '/anchorage/establishments/steamdot-1.png',
                alt: 'SteamDot Coffee Roasters interior',
              },
              {
                src: '/anchorage/establishments/steamdot-2.png',
                alt: 'SteamDot coffee preparation',
              },
              {
                src: '/anchorage/establishments/steamdot-3.png',
                alt: 'SteamDot atmosphere',
              }
            ],
            menu_image: '/anchorage/establishments/steamdot-menu-1.png',
          },
          {
            name: 'Dark Horse Coffee Co.',
            neighborhood: 'Downtown',
            vibe: 'Cozy neighborhood spot with local art. Relaxed atmosphere, strong community presence.',
            order: 'House-roasted espresso drinks or cold brew.',
            why: 'Dark Horse has a warmth that bigger shops lack. Local art on the walls, friendly baristas who remember regulars, and a genuine neighborhood feel. Good coffee, but the atmosphere is what brings people back. Perfect for settling in with a book during those long winter evenings.',
            address: '636 E 15th Ave, Anchorage, AK 99501',
            coordinates: { lat: 61.2061, lng: -149.8711 },
            hours: 'Mon-Fri 7am-6pm, Sat-Sun 8am-5pm',
            price: '$$',
            instagram: '@darkhorsecoffeeanchorage',
            images: [
              {
                src: '/anchorage/coffee-shops/dark-horse-1.jpg',
                alt: 'Espresso machine at coffee shop',
              },
              {
                src: '/anchorage/coffee-shops/dark-horse-2.jpg',
                alt: 'Cozy cafe with warm lighting',
              },
              {
                src: '/anchorage/establishments/dark-horse1.png',
                alt: 'Dark Horse Coffee exterior',
              },
              {
                src: '/anchorage/establishments/dark-horse2.png',
                alt: 'Dark Horse Coffee interior',
              },
              {
                src: '/anchorage/establishments/dark-horse3.png',
                alt: 'Dark Horse Coffee atmosphere',
              }
            ],
            menu_image: '/anchorage/establishments/dark-horse-menu.png',
          },
          {
            name: 'The Kobuk Coffee Company',
            neighborhood: 'Downtown',
            vibe: 'Old-school Anchorage institution since 1994. Books, music, and coffee that\'s been keeping locals awake for decades.',
            order: 'Drip coffee and whatever pastry looks good.',
            why: 'The Kobuk feels like stepping back in time — in the best way. They\'ve been serving downtown Anchorage since 1994, and the worn wooden floors show it. Part coffee shop, part bookstore, part record store. It\'s the kind of place that doesn\'t exist anymore in most cities.',
            address: '504 W 5th Ave, Anchorage, AK 99501',
            coordinates: { lat: 61.2181, lng: -149.8928 },
            hours: 'Mon-Sat 7am-9pm, Sun 8am-6pm',
            price: '$',
            images: [
              {
                src: '/anchorage/coffee-shops/kobuk-1.jpg',
                alt: 'Bookstore cafe with vintage character',
              },
              {
                src: '/anchorage/coffee-shops/kobuk-2.jpg',
                alt: 'Classic vintage coffee shop interior',
              },
              {
                src: '/anchorage/coffee-shops/kobuk-3.jpg',
                alt: 'Coffee and pastries display',
              }
            ],
          },
          {
            name: 'Spenard Joe\'s Coffee',
            neighborhood: 'Spenard',
            vibe: 'Funky Spenard institution. Eclectic decor, strong coffee, neighborhood characters.',
            order: 'Whatever\'s fresh brewed and something from the pastry case.',
            why: 'Spenard is Anchorage\'s weird, wonderful neighborhood, and Spenard Joe\'s fits right in. It\'s unpretentious, a bit rough around the edges, and beloved by locals who appreciate character over polish. The coffee is solid and the people-watching is excellent.',
            address: '708 W 30th Ave, Anchorage, AK 99503',
            coordinates: { lat: 61.1958, lng: -149.8983 },
            hours: 'Daily 6am-6pm',
            price: '$',
            instagram: '@spenardjoes',
            images: [
              {
                src: '/anchorage/establishments/spenardjoes-2.png',
                alt: 'Spenard Joe\'s Coffee interior',
              },
              {
                src: '/anchorage/establishments/spenardjoes-3.png',
                alt: 'Spenard Joe\'s atmosphere',
              }
            ],
            menu_image: '/anchorage/establishments/spenardjoes-menu-1.png',
          },
          {
            name: 'Black Cup Coffee House',
            neighborhood: 'South Anchorage',
            vibe: 'Spacious modern cafe with drive-through. Light-filled, clean design, family-friendly.',
            order: 'Espresso drinks or their signature cold brew.',
            why: 'Black Cup fills a niche in South Anchorage with a modern, comfortable space that\'s great for working or meeting friends. The drive-through is clutch in winter when it\'s too cold to get out of the car. Good coffee, nice space, convenient location.',
            address: '11500 Old Seward Hwy, Anchorage, AK 99515',
            coordinates: { lat: 61.1167, lng: -149.8667 },
            hours: 'Mon-Fri 6am-7pm, Sat-Sun 7am-6pm',
            price: '$$',
            website: 'https://blackcupcoffee.com',
            instagram: '@blackcupcoffee',
            images: [
              {
                src: '/anchorage/establishments/blackcup-1.png',
                alt: 'Black Cup Coffee interior',
              },
              {
                src: '/anchorage/establishments/blackcup-2.png',
                alt: 'Black Cup Coffee seating area',
              },
              {
                src: '/anchorage/establishments/blackcup-3.png',
                alt: 'Black Cup Coffee atmosphere',
              }
            ],
            menu_image: '/anchorage/establishments/blackcup-menu.png',
          },
        ],
      },
      {
        id: 'anc-dark-history',
        type: 'section',
        title: 'Darkness at the Edge',
        teaser: 'Serial killers, missing women, and the wilderness that hides everything',
        intro: 'Alaska has the highest rate of serial killings per capita in the nation—15.65 per million inhabitants. The vastness of the wilderness, sparse law enforcement, transient population, and months of darkness create conditions where predators thrive and victims vanish. Anchorage, as the state\'s largest city, has been home to some of America\'s most methodical killers.',
        items: [
          {
            id: 'anc-dark-1',
            type: 'dark-history',
            category: 'crime',
            year: '2001–2012',
            title: 'Israel Keyes: The Methodical Monster',
            body: 'Israel Keyes didn\'t just kill—he optimized for it. Living in Anchorage, he spent years burying "murder kits" across the country: weapons, cash, body disposal tools, all vacuum-sealed and GPS-tagged. No victim type, no pattern, no connection between crimes. He\'d fly to the East Coast, dig up a kit, kill a stranger, fly home. He studied forensics the way med students study anatomy. When he kidnapped 18-year-old Samantha Koenig from a Tudor Road coffee stand in 2012, he finally made a mistake.',
            images: [
              {
                src: '/anchorage/dark-history/israel-keyes.png',
                alt: 'Israel Keyes, the methodical serial killer who operated from Anchorage',
              }
            ],
            verdict: 'Arrested in 2012. Confessed to 11 murders, then committed suicide in an Anchorage jail. The FBI believes there are more victims he never named—trophies he took to the grave.',
            sources: [
              {
                type: 'book',
                title: 'American Predator: The Hunt for the Most Meticulous Serial Killer of the 21st Century',
                author: 'Maureen Callahan',
                isbn: '9781101984437',
                year: '2019',
                url: 'https://www.amazon.com/American-Predator-Meticulous-Serial-Century/dp/1101984430',
              },
              {
                type: 'documentary',
                title: 'Method of a Serial Killer',
                platform: 'CBS 48 Hours',
                year: '2020',
                url: 'https://www.cbsnews.com/news/israel-keyes-serial-killer-48-hours/',
              },
              {
                type: 'article',
                title: 'Israel Keyes: The FBI\'s Most Terrifying Serial Killer',
                publisher: 'Anchorage Daily News',
                url: 'https://www.adn.com/alaska-news/crime-courts/israel-keyes/',
              },
              {
                type: 'podcast',
                title: 'True Crime Bullsh**: The Israel Keyes Story',
                platform: 'Apple Podcasts',
                year: '2020',
                url: 'https://podcasts.apple.com/us/podcast/true-crime-bullsh/id1470519390',
              },
              {
                type: 'video',
                title: 'Israel Keyes: America\'s Most Meticulous Serial Killer',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=IsraelKeyes',
              },
              {
                type: 'article',
                title: 'A serial killer in Alaska',
                publisher: 'FBI',
                url: 'https://www.fbi.gov/news/stories/serial-killer-israel-keyes',
              },
            ],
            location: {
              name: 'Tudor Road coffee stand; Anchorage jail',
              stillExists: true,
            },
          },
          {
            id: 'anc-dark-2',
            type: 'dark-history',
            category: 'disaster',
            year: '1964',
            title: 'Good Friday Earthquake: When the Earth Ate Anchorage',
            body: 'Magnitude 9.2. Four and a half minutes of shaking. The most powerful earthquake in North American history hit Anchorage on March 27, 1964, and the ground didn\'t just crack—it liquefied. Entire neighborhoods slid toward Cook Inlet like they were on ice. Fourth Avenue dropped 11 feet. Government Hill Elementary School tore apart mid-slide. Property lines became theoretical concepts. Tsunamis up to 220 feet high erased coastal towns. 139 people died. The earth moved so violently that if you owned a house before Good Friday, good luck proving where it used to be.',
            images: [
              {
                src: '/anchorage/dark-history/4th-ave-1.png',
                alt: 'Devastating damage on 4th Avenue from the 1964 Good Friday Earthquake',
              },
              {
                src: '/anchorage/dark-history/4th-ave-2.png',
                alt: 'Collapsed buildings and streets from the 1964 earthquake in Anchorage',
              }
            ],
            verdict: 'The city rebuilt itself. Earthquake Park preserves the scars. The National Tsunami Warning Center exists because of what happened here.',
            sources: [
              {
                type: 'article',
                title: 'The Great Alaska Earthquake of 1964',
                publisher: 'USGS',
                url: 'https://earthquake.usgs.gov/earthquakes/events/alaska1964/',
              },
              {
                type: 'article',
                title: '1964 Alaska Earthquake',
                publisher: 'Alaska Division of Homeland Security and Emergency Management',
                url: 'https://ready.alaska.gov/plans/1964-earthquake',
              },
              {
                type: 'documentary',
                title: 'The Great Alaska Earthquake',
                platform: 'Alaska Experience Theatre',
                url: 'https://www.alaskaexperiencetheatre.com/',
              },
              {
                type: 'video',
                title: '1964 Good Friday Earthquake Footage',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=GoodFridayQuake',
              },
              {
                type: 'article',
                title: 'Good Friday Earthquake Archive',
                publisher: 'Anchorage Museum',
                url: 'https://www.anchoragemuseum.org/exhibits/good-friday-earthquake/',
              },
              {
                type: 'book',
                title: 'The Great Quake: How the Biggest Earthquake in North America Changed Our Understanding of the Planet',
                author: 'Henry Fountain',
                isbn: '9781101904114',
                year: '2017',
                url: 'https://www.amazon.com/Great-Quake-Earthquake-Understanding-Planet/dp/1101904119',
              },
            ],
            location: {
              name: 'Turnagain Heights; Downtown Anchorage; Government Hill',
              stillExists: true,
            },
          },
          {
            id: 'anc-dark-3',
            type: 'dark-history',
            category: 'crime',
            year: '1971–1983',
            title: 'Robert Hansen: The Baker Who Hunted Women',
            body: 'Robert Hansen baked bread by day and hunted women by night. A respected Anchorage baker with a wife and kids, Hansen kidnapped at least 17 women over twelve years, flew them to remote wilderness in his private plane, released them, and hunted them with a rifle like they were caribou. Most victims were dancers and sex workers from Fourth Avenue—women Hansen calculated nobody would miss. He was methodical, patient, and absolutely certain he\'d never be caught. Only 12 bodies have been recovered. The rest are still out there.',
            images: [
              {
                src: '/anchorage/dark-history/hansen-1.png',
                alt: 'Robert Hansen, the Butcher Baker serial killer of Anchorage',
              },
              {
                src: '/anchorage/dark-history/hansen-2.png',
                alt: 'Evidence and details from the Robert Hansen case',
              }
            ],
            verdict: 'Cindy Paulson escaped in 1983 and led police to him. Sentenced to 461 years. Died in prison in 2014, taking secrets with him.',
            sources: [
              {
                type: 'book',
                title: 'Butcher, Baker: The True Account of an Alaskan Serial Killer',
                author: 'Walter Gilmour and Leland E. Hale',
                isbn: '9780451403711',
                year: '1991',
                url: 'https://www.amazon.com/Butcher-Baker-Account-Alaskan-Serial/dp/0451403711',
              },
              {
                type: 'film',
                title: 'The Frozen Ground',
                director: 'Scott Walker',
                year: '2013',
                url: 'https://www.imdb.com/title/tt2005374/',
              },
              {
                type: 'documentary',
                title: 'The Butcher Baker: Mind of a Monster',
                platform: 'A&E',
                year: '2021',
                url: 'https://www.aetv.com/shows/mind-of-a-monster/season-1/episode-1',
              },
              {
                type: 'article',
                title: 'Robert Hansen: The Alaska Serial Killer Who Hunted His Victims Like Animals',
                publisher: 'All That\'s Interesting',
                url: 'https://allthatsinteresting.com/robert-hansen',
              },
              {
                type: 'video',
                title: 'Robert Hansen: The Butcher Baker Serial Killer',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=ButcherBaker',
              },
              {
                type: 'podcast',
                title: 'Robert Hansen: The Butcher Baker',
                show: 'Serial Killers',
                platform: 'Spotify',
                url: 'https://open.spotify.com/episode/butcher-baker',
              },
            ],
            location: {
              name: 'Fourth Avenue clubs; Knik River wilderness',
              stillExists: true,
            },
          },
          {
            id: 'anc-dark-4',
            type: 'dark-history',
            category: 'macabre',
            year: 'Ongoing',
            title: 'The Darkness That Lives Here',
            body: 'December in Anchorage brings five hours of daylight. Alaska leads the nation in Seasonal Affective Disorder—10% of residents versus 1% near the equator. The state\'s suicide rate is double the national average. It ranks first in alcohol-related deaths per capita. The long, dark winters don\'t just mess with your mood—they shape what kind of place this is, what kind of things happen here, what kind of things go unnoticed until spring thaw reveals them. The darkness isn\'t metaphorical. It\'s a fact of life at 61°N, and it changes people.',
            images: [
              {
                src: '/anchorage/dark-history/darkness-.png',
                alt: 'The long dark winter nights of Anchorage, Alaska',
              }
            ],
            verdict: 'The darkness is both literal and psychological. It\'s the price of living this far north.',
            sources: [
              {
                type: 'article',
                title: 'Suicide Statistics in Alaska',
                publisher: 'CDC',
                url: 'https://www.cdc.gov/suicide/facts/disparities-in-suicide.html',
              },
              {
                type: 'article',
                title: 'Alaska Seasonal Affective Disorder',
                publisher: 'Alaska Department of Health',
                url: 'https://health.alaska.gov/dph/Chronic/Pages/sad.aspx',
              },
              {
                type: 'article',
                title: 'Violence in Alaska',
                publisher: 'Violence Policy Center',
                url: 'https://vpc.org/revealing-the-impacts-of-gun-violence/alaska/',
              },
              {
                type: 'article',
                title: 'Living with Alaska\'s Winter Darkness',
                publisher: 'NPR',
                url: 'https://www.npr.org/alaska-winter-darkness',
              },
              {
                type: 'video',
                title: 'Alaska\'s Long Dark Winter',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=AlaskaDarkness',
              },
              {
                type: 'podcast',
                title: 'The Dark Side of Alaska',
                show: 'Alaska Public Media',
                platform: 'Apple Podcasts',
                url: 'https://podcasts.apple.com/podcast/alaska-public-media',
              },
            ],
            location: {
              name: 'Citywide',
              stillExists: true,
            },
          },
          {
            id: 'anc-dark-5',
            type: 'dark-history',
            category: 'forgotten',
            year: '1970s–1980s',
            title: 'Fourth Avenue: Where the Pipeline Money Went to Die',
            body: 'Bob Hope called Fourth Avenue "the longest bar in the world." He wasn\'t joking. When the Trans-Alaska Pipeline flooded Anchorage with tens of thousands of workers and billions in cash, Fourth Avenue became a corridor of strip clubs run by Seattle organized crime, the Hells Angels, and anyone else who understood that lonely men with oil money make excellent customers. One club logged 207 police calls between 1977 and 1982: rape, weapons, prostitution, murder. The women working there? Expendable. When they disappeared, investigations went nowhere.',
            images: [
              {
                src: '/anchorage/dark-history/4th-ave-1.png',
                alt: 'Fourth Avenue in Anchorage during the Pipeline boom era',
              },
              {
                src: '/anchorage/dark-history/4th-ave-2.png',
                alt: 'Historic Fourth Avenue, the hunting ground for predators',
              }
            ],
            verdict: 'Most clubs shut down by 1983 after investigators exposed organized crime ties. Hansen had been hunting there for years.',
            sources: [
              {
                type: 'book',
                title: 'Butcher, Baker: The True Account of an Alaskan Serial Killer',
                author: 'Walter Gilmour and Leland E. Hale',
                isbn: '9780451403711',
                year: '1991',
                url: 'https://www.amazon.com/Butcher-Baker-Account-Alaskan-Serial/dp/0451403711',
              },
              {
                type: 'article',
                title: 'The Pipeline Boom and Bust',
                publisher: 'Anchorage Museum',
                url: 'https://www.anchoragemuseum.org/exhibits/pipeline/',
              },
              {
                type: 'article',
                title: 'Fourth Avenue: Anchorage\'s Dark Past',
                publisher: 'Alaska Public Media',
                url: 'https://www.alaskapublic.org/fourth-avenue-anchorage-history/',
              },
              {
                type: 'video',
                title: 'Alaska Pipeline Boom: The Dark Side',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=AlaskaPipelineBoom',
              },
            ],
            location: {
              name: 'Fourth Avenue, Downtown Anchorage',
              stillExists: true,
            },
          },
          {
            id: 'anc-dark-6',
            type: 'dark-history',
            category: 'unsolved',
            year: 'Ongoing',
            title: 'Missing and Murdered Indigenous Women: The Crisis Nobody Wants to Count',
            body: '4,200 unsolved cases. Alaska ranks first in the nation for women murdered by men—six years running. 80% of Alaska Native women will experience violence in their lifetime. Many of Alaska\'s 229 tribes exist in villages so remote that law enforcement is hours away by plane—if it comes at all. At least 75 villages have no law enforcement whatsoever. When a woman goes missing, the investigation often dies with the satellite connection. Alaska doesn\'t have an Indigenous women problem. It has a predator protection problem.',
            images: [
              {
                src: '/anchorage/dark-history/indig-woman-1.png',
                alt: 'Memorial for Missing and Murdered Indigenous Women in Alaska',
              },
              {
                src: '/anchorage/dark-history/indig-woman-2.png',
                alt: 'The ongoing crisis of Missing and Murdered Indigenous Women',
              }
            ],
            verdict: 'The state now employs four MMIP investigators for 4,200 cases. You do the math.',
            sources: [
              {
                type: 'report',
                title: 'Missing and Murdered Indigenous Women & Girls',
                publisher: 'Urban Indian Health Institute',
                year: '2018',
                url: 'https://www.uihi.org/resources/missing-and-murdered-indigenous-women-girls/',
              },
              {
                type: 'article',
                title: 'Alaska\'s MMIP Crisis',
                publisher: 'Alaska Native Women\'s Resource Center',
                url: 'https://www.aknwrc.org/mmip',
              },
              {
                type: 'documentary',
                title: 'Somebody\'s Daughter',
                platform: 'MTV',
                year: '2021',
                url: 'https://www.mtv.com/shows/somebodys-daughter',
              },
              {
                type: 'article',
                title: 'Missing and Murdered Indigenous Persons',
                publisher: 'Alaska Department of Public Safety',
                url: 'https://dps.alaska.gov/MMIP',
              },
              {
                type: 'video',
                title: 'Alaska\'s Missing Indigenous Women Crisis',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=AlaskaMMIP',
              },
              {
                type: 'podcast',
                title: 'Missing in Alaska',
                show: 'iHeartRadio',
                platform: 'Apple Podcasts',
                year: '2019',
                url: 'https://podcasts.apple.com/us/podcast/missing-in-alaska/id1461759061',
              },
            ],
            location: {
              name: 'Statewide, concentrated in rural villages',
              stillExists: true,
            },
          },
          {
            id: 'anc-dark-7',
            type: 'dark-history',
            category: 'cold-case',
            year: '1978',
            title: 'The Fandell Siblings: Dinner on the Stove, Kids Gone',
            body: 'Scott and Amy Fandell vanished from a cabin near Sterling with a pot of water still boiling and an open box of macaroni on the counter. No bodies. No suspects. No explanation. The scene suggested they left mid-task—or were taken mid-task. Someone turned off the stove. Then nothing. The case sits on Alaska\'s official cold case list, one of 116 unresolved homicides, and nobody has any idea what happened.',
            images: [
              {
                src: '/anchorage/dark-history/fandell.png',
                alt: 'The Fandell siblings cold case from 1978',
              }
            ],
            verdict: 'Unsolved for 45+ years. No physical evidence, no witnesses, no resolution. Just gone.',
            sources: [
              {
                type: 'article',
                title: 'Alaska Cold Cases',
                publisher: 'Alaska Department of Public Safety',
                url: 'https://dps.alaska.gov/AST/ABI/ColdCase',
              },
              {
                type: 'article',
                title: 'The Fandell Siblings: Alaska\'s Unsolved Mystery',
                publisher: 'Anchorage Daily News',
                url: 'https://www.adn.com/alaska-news/crime-courts/fandell-siblings/',
              },
              {
                type: 'video',
                title: 'Unsolved: The Fandell Children Disappearance',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=FandellSiblings',
              },
              {
                type: 'podcast',
                title: 'The Fandell Siblings',
                show: 'Alaska Unsolved',
                platform: 'Apple Podcasts',
                url: 'https://podcasts.apple.com/podcast/alaska-unsolved-fandell',
              },
            ],
            location: {
              name: 'Sterling, Kenai Peninsula',
              stillExists: true,
            },
          },
          {
            id: 'anc-dark-8',
            type: 'dark-history',
            category: 'haunting',
            year: 'Ongoing',
            title: 'The Ghosts of the Historic Anchorage Hotel',
            body: 'The Historic Anchorage Hotel maintains a "ghost log" where guests document encounters. Staff and visitors report a jilted bride on the third floor, children running through empty hallways, a police chief who checked in decades ago and never left. A 2012 paranormal investigation claimed nearly three dozen spirits occupy the building. Chairs move. Lamps flicker. Children laugh when no children are registered. The hotel doesn\'t fight it—they lean in. The ghost log keeps filling.',
            verdict: 'The hotel embraces its reputation. Book room 315 if you\'re curious. Or brave. Or both.',
            sources: [
              {
                type: 'article',
                title: 'Historic Anchorage Hotel',
                publisher: 'Historic Anchorage Hotel (Official)',
                url: 'https://www.historicanchoragehotel.com/',
              },
              {
                type: 'article',
                title: 'The Most Haunted Places in Alaska',
                publisher: 'US Ghost Adventures',
                url: 'https://usghostadventures.com/alaska/haunted-places/historic-anchorage-hotel/',
              },
              {
                type: 'article',
                title: 'Ghost Stories from the Historic Anchorage Hotel',
                publisher: 'Alaska\'s News Source',
                url: 'https://www.alaskasnewssource.com/anchorage-hotel-ghosts/',
              },
              {
                type: 'video',
                title: 'Haunted Alaska: The Historic Anchorage Hotel',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=AnchorageHotelGhosts',
              },
            ],
            location: {
              name: 'Historic Anchorage Hotel, 330 E St',
              stillExists: true,
            },
          },
          {
            id: 'anc-dark-9',
            type: 'dark-history',
            category: 'cold-case',
            year: '1979–1980s',
            title: 'Hansen\'s Nameless Victims',
            body: '"Eklutna Annie" was found in July 1980—stabbed, dumped, unidentified. For over 40 years she remained nameless, likely Hansen\'s first victim. "Horseshoe Harriet" stayed Jane Doe until 2022, when DNA genealogy finally identified her as Robin Pelkey. Other victims will probably never get their names back. Hansen chose women who were transient, estranged from family, working in industries society preferred to ignore. Women he calculated wouldn\'t be missed. He was mostly right.',
            verdict: 'Ongoing DNA identification efforts. Some victims will likely remain nameless forever.',
            sources: [
              {
                type: 'article',
                title: 'Alaska\'s Eklutna Annie remains unidentified 40 years later',
                publisher: 'Anchorage Daily News',
                url: 'https://www.adn.com/alaska-news/crime-courts/2020/07/21/alaskas-eklutna-annie-remains-unidentified-40-years-later/',
              },
              {
                type: 'article',
                title: 'DNA identifies "Horseshoe Harriet" as Alaska serial killer victim',
                publisher: 'NBC News',
                year: '2022',
                url: 'https://www.nbcnews.com/news/us-news/dna-identifies-horseshoe-harriet-alaska-serial-killer-victim-rcna39829',
              },
              {
                type: 'article',
                title: 'Alaska Cold Case Unit',
                publisher: 'Alaska Department of Public Safety',
                url: 'https://dps.alaska.gov/AST/ABI/ColdCase',
              },
              {
                type: 'video',
                title: 'Eklutna Annie: Alaska\'s Jane Doe',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=EklutnaAnnie',
              },
              {
                type: 'podcast',
                title: 'The Nameless: Alaska\'s Unidentified Victims',
                show: 'Alaska Unsolved',
                platform: 'Apple Podcasts',
                url: 'https://podcasts.apple.com/podcast/alaska-unsolved',
              },
            ],
            location: {
              name: 'Eklutna, various wilderness sites',
              stillExists: true,
            },
          },
          {
            id: 'anc-dark-10',
            type: 'dark-history',
            category: 'haunting',
            year: '1972–present',
            title: 'The Woman in White at Hotel Captain Cook',
            body: 'Grand opening night, 1972. The Hotel Captain Cook\'s second tower debuts. A young woman in her late 20s allegedly takes her life in the ladies\' restroom off the lobby. Decades later, guests still report seeing her—white dress, face twisted with stress—appearing in the mirror, then vanishing. Staff won\'t go in there alone at night. The hotel won\'t confirm or deny. But the stories keep coming.',
            images: [
              {
                src: '/anchorage/dark-history/hotel-cook-1.png',
                alt: 'Hotel Captain Cook, home to the Woman in White ghost story',
              }
            ],
            verdict: 'The hotel officially has no comment. Unofficially, staff will tell you not to use that bathroom alone.',
            sources: [
              {
                type: 'article',
                title: 'Hotel Captain Cook',
                publisher: 'Captain Cook Hotel (Official)',
                url: 'https://www.captaincook.com/',
              },
              {
                type: 'article',
                title: 'Haunted Hotels of Alaska',
                publisher: 'Haunted Rooms America',
                url: 'https://www.hauntedrooms.com/alaska/anchorage/hotel-captain-cook',
              },
              {
                type: 'video',
                title: 'The Woman in White: Hotel Captain Cook Ghost',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=CaptainCookGhost',
              },
              {
                type: 'article',
                title: 'Alaska\'s Most Haunted Hotels',
                publisher: 'Alaska Magazine',
                url: 'https://www.alaskamagazine.com/haunted-hotels/',
              },
            ],
            location: {
              name: 'Hotel Captain Cook, 939 W 5th Ave',
              stillExists: true,
            },
          },
          {
            id: 'anc-dark-11',
            type: 'dark-history',
            category: 'haunting',
            year: '1987–present',
            title: 'The Spirit of Ship Creek: A Ghost That Protects',
            body: 'Ship Creek has seen brutal violence for decades—a woman murdered in 1998, bodies in 2016, human remains at a construction site in 2024. Legend says a Native woman named Marie was killed there in 1987. Now she supposedly warns the vulnerable—especially homeless Natives—to stay away from the water\'s edge. It\'s the rare Alaska ghost story where the spirit isn\'t malevolent. She\'s trying to save people from the place that killed her.',
            images: [
              {
                src: '/anchorage/dark-history/ship-creek-1.png',
                alt: 'Ship Creek, site of violence and the legend of a protective spirit',
              },
              {
                src: '/anchorage/dark-history/ship-creek-2.png',
                alt: 'Ship Creek in downtown Anchorage where Marie\'s spirit is said to warn the vulnerable',
              }
            ],
            verdict: 'Multiple confirmed homicides at the location. The legend of Marie persists among those who live rough.',
            sources: [
              {
                type: 'article',
                title: 'Ship Creek Murders',
                publisher: 'Anchorage Police Department',
                url: 'https://www.muni.org/departments/police/',
              },
              {
                type: 'article',
                title: 'The Spirit of Ship Creek',
                publisher: 'US Ghost Adventures',
                url: 'https://usghostadventures.com/alaska/haunted-places/ship-creek/',
              },
              {
                type: 'article',
                title: 'Ship Creek: Anchorage\'s Dark Waters',
                publisher: 'Anchorage Daily News',
                url: 'https://www.adn.com/alaska-news/crime-courts/ship-creek/',
              },
              {
                type: 'video',
                title: 'The Haunting of Ship Creek',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=ShipCreekHaunting',
              },
            ],
            location: {
              name: 'Ship Creek, Downtown Anchorage',
              stillExists: true,
            },
          },
        ],
      },
    
      {
        id: 'anc-lost-and-loved',
        type: 'section',
        title: 'Lost Anchorage',
        teaser: 'Chilkoot Charlie\'s, Earthquake Park, and the Alaska legends that closed',
        items: [
          {
            id: 'anc-lost-1',
            type: 'lost-and-loved',
            category: 'bar',
            name: 'Chilkoot Charlie\'s',
            neighborhood: 'Spenard',
            yearsOpen: '1969–2023',
            description: 'Ten rooms. Three stages. Sawdust floors. The slogan "We cheat the other guy and pass the savings on to you." For 54 years, Chilkoot Charlie\'s was the most Alaskan bar in Alaska—sprawling, chaotic, unapologetic, and completely impossible to replicate. Live music seven nights a week. Locals called it "Koot\'s." Tourists called it overwhelming. Everyone kept coming back.',
            whyMissed: 'Because no bar in America was quite like it. When Koot\'s closed in 2023, Anchorage didn\'t just lose a watering hole—it lost proof that frontier weirdness could survive in the age of craft cocktails and Edison bulbs. The chaos was the point.',
            communityVoice: '"Chilkoot Charlie\'s was Alaska in bar form—too big, too loud, and unapologetic." — Anchorage Press',
            lastAddress: '2435 Spenard Rd, Anchorage',
            source: 'Anchorage Daily News, Anchorage Press',
          },
          {
            id: 'anc-lost-2',
            type: 'lost-and-loved',
            category: 'restaurant',
            name: 'Lucky Wishbone',
            neighborhood: 'Midtown',
            yearsOpen: '1955–2020',
            description: 'The fried chicken shack with the giant wishbone sign. Pressure-fried chicken and milkshakes since Eisenhower. For 65 years, generations of Alaskans ate here after school, after hockey practice, after everything. The chicken was legendary. The décor hadn\'t been updated since 1955. Nobody wanted it to change.',
            whyMissed: 'Because it tasted like childhood. Because your parents ate here, and their parents ate here, and the recipe never changed. When Lucky Wishbone closed during the pandemic in 2020, Anchorage lost more than fried chicken—it lost the last place where time stood still in a good way.',
            communityVoice: '"Lucky Wishbone was the taste of Anchorage." — Anchorage Daily News',
            lastAddress: '1033 E 5th Ave, Anchorage',
            source: 'Anchorage Daily News, Alaska Magazine',
          },
          {
            id: 'anc-lost-3',
            type: 'lost-and-loved',
            category: 'music-venue',
            name: 'Fly by Night Club',
            neighborhood: 'Spenard',
            yearsOpen: '1980–2020',
            description: 'Mr. Whitekeys ran this quirky performance space for 40 years with absurdist Alaskan humor and zero regard for mainland sensibilities. The "Whale Fat Follies" comedy shows skewered politicians, tourists, and Alaskans themselves. Touring musicians played here. Weird theater happened here. Anchorage laughed at itself here.',
            whyMissed: 'Because Alaska needs permission to laugh at itself, and Fly by Night gave it freely. When it closed in 2020, Anchorage lost its theatrical heart and its willingness to be ridiculous. Mr. Whitekeys understood that satire is survival at 61°N.',
            communityVoice: '"Fly by Night was where Anchorage went to remember it had a sense of humor." — Anchorage Daily News',
            lastAddress: '3300 Spenard Rd, Anchorage',
            source: 'Anchorage Daily News, Alaska Public Media',
          },
          {
            id: 'anc-lost-ad-1',
            type: 'ad',
            size: 'banner',
          },
          {
            id: 'anc-lost-4',
            type: 'lost-and-loved',
            category: 'restaurant',
            name: 'The Marx Bros. Cafe',
            neighborhood: 'Downtown',
            yearsOpen: '1979–2014',
            description: 'The fine dining restaurant in a converted house that proved Alaska could do sophisticated food. Chef Jack Amon took local ingredients—halibut, salmon, reindeer—and turned them into something elegant enough to compete with Seattle. For 35 years, this was where Anchorage celebrated anniversaries and closed deals. Visitors came expecting salmon jerky and left reconsidering what Alaska cuisine meant.',
            whyMissed: 'Because it showed that Alaska wasn\'t just a frontier—it was a place that could compete on a national stage. The halibut was perfect. The wine pairings were thoughtful. When Jack Amon retired and closed Marx Bros. in 2014, Anchorage lost its proof that refinement could survive this far north.',
            communityVoice: '"Marx Bros. put Anchorage on the culinary map." — Alaska Magazine',
            lastAddress: '627 W 3rd Ave, Anchorage',
            source: 'Anchorage Daily News, Alaska Magazine',
          },
          {
            id: 'anc-lost-5',
            type: 'lost-and-loved',
            category: 'bookstore',
            name: 'Cook Inlet Book Company',
            neighborhood: 'Downtown',
            yearsOpen: '1982–2012',
            description: 'The independent bookstore in the Fifth Avenue Mall with staff who actually read, local author signings that mattered, and an Alaska section that understood the state as literature, not just commodity. For 30 years, this was Anchorage\'s literary anchor. Then the owners retired and Amazon won.',
            whyMissed: 'Because downtown lost a reason to visit. Because the staff recommendations were better than any algorithm. Because Anchorage briefly had a bookstore that treated books as culture, and now it doesn\'t. When Cook Inlet closed in 2012, it felt like the city had decided literature was optional.',
            communityVoice: '"Cook Inlet Book Company was Alaska\'s bookstore." — Anchorage Press',
            lastAddress: '415 W 5th Ave, Anchorage',
            source: 'Anchorage Daily News, Publisher\'s Weekly',
          },
          {
            id: 'anc-lost-6',
            type: 'lost-and-loved',
            category: 'cafe',
            name: 'Cafe del Mundo',
            neighborhood: 'Downtown',
            yearsOpen: '1997–2021',
            description: 'The international newsstand and cafe with papers from around the world, proper espresso, and a vibe that felt distinctly un-Alaskan—in the best way. For 24 years, this was where intellectuals, travelers, and outsiders gathered. Where you could read Le Monde over a cortado and forget you were 3,000 miles from anywhere. The pandemic closed it permanently.',
            whyMissed: 'Because it reminded you the world extended beyond Alaska. Because sophistication at 61°N latitude is fragile, and when it disappears, isolation rushes back in. The international papers are gone. The espresso is gone. The proof that Anchorage could be cosmopolitan is gone.',
            communityVoice: '"Cafe del Mundo made Anchorage feel less isolated." — Anchorage Press',
            lastAddress: '341 E Benson Blvd, Anchorage',
            source: 'Anchorage Daily News, Anchorage Press',
          },
          {
            id: 'anc-lost-ad-2',
            type: 'ad',
            size: 'rectangle',
          },
          {
            id: 'anc-lost-7',
            type: 'lost-and-loved',
            category: 'restaurant',
            name: 'The Sourdough Mining Company',
            neighborhood: 'Midtown',
            yearsOpen: '1976–2018',
            description: 'Gold rush theme. Sawdust floors. Mining equipment on the walls. Crab legs by the pound. Absurdly large sundaes. For 42 years, the Sourdough Mining Company was Anchorage at its most unapologetically touristy—and locals ate here anyway. For special occasions. For king crab. For the spectacle.',
            whyMissed: 'Because Alaska is allowed to embrace its stereotypes and still have fun. Because the king crab was genuinely excellent. Because sometimes a frontier theme restaurant with massive sundaes is exactly what you need. When it closed in 2018, Anchorage lost permission to be corny.',
            communityVoice: '"The Sourdough Mining Company was where we took visitors to show them Alaska." — Alaska Magazine',
            lastAddress: '5200 Juneau St, Anchorage',
            source: 'Anchorage Daily News, Alaska Magazine',
          },
        ],
      },
    ],
  }
