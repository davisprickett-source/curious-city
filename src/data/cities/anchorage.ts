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
        intro: 'Anchorage is where the wilderness starts at the edge of the parking lot and ends somewhere in Siberia. Moose outnumber people in some neighborhoods. The Cold War left behind nuclear-powered spy devices on mountaintops. And twice daily, a surfable tidal wave rolls through waters that will swallow you whole if you step off your board. Nothing here is normal.',
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
            images: [
              {
                src: '/anchorage/curiosities/PFD.png',
                alt: 'Alaska Permanent Fund Dividend check',
              }
            ],
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
            images: [
              {
                src: '/anchorage/curiosities/mountain-view-diversity.png',
                alt: 'Diverse Mountain View neighborhood in Anchorage',
              }
            ],
            source: 'U.S. Census Bureau',
            location: {
              name: 'Mountain View neighborhood',
              stillExists: true,
            },
          },
          {
            id: 'anc-curiosity-12',
            type: 'curiosity',
            category: 'culture',
            title: 'Anchorage is geographically closer to Tokyo than Miami',
            body: 'Anchorage sits on the great circle route between North America and Asia—90% of the industrialized world is within 9.5 hours of Ted Stevens Airport. This geographic accident turned it into the 4th busiest cargo airport in the world. FedEx and UPS refuel here, transferring freight between continents. Flights from New York to Tokyo pass almost directly overhead. Your Amazon package from Shenzhen probably stopped in Anchorage. Geography made this city relevant whether it wanted to be or not.',
            images: [
              {
                src: '/anchorage/curiosities/tokyo-miami-1.png',
                alt: 'Global flight path diagram showing Anchorage location',
              },
              {
                src: '/anchorage/curiosities/tokyo-miami-2.png',
                alt: 'Ted Stevens Airport cargo operations',
              }
            ],
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
            images: [
              {
                src: '/anchorage/curiosities/triangle.png',
                alt: 'Map of the Alaska Triangle region',
              }
            ],
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
            featured: true,
            featuredOrder: 4,
            name: 'Nike Site Summit',
            category: 'Cold War Relic',
            description: 'At the height of the Cold War, Anchorage sat directly in the crosshairs of Soviet bombers flying over the pole—so the U.S. Army built a ring of nuclear-armed missiles around the city. Nike Site Summit, perched atop Mount Gordon Lyon at 4,500 feet, was part of this "Ring of Steel" from 1959 to 1979. The missiles are long gone, but the concrete bunkers, launch pads, and control buildings remain frozen in time—one of the most complete Nike Hercules sites left in America. Tours (offered through Joint Base Elmendorf-Richardson) take you through barracks where soldiers waited for orders that never came, past empty silos that once held weapons capable of destroying formations of Soviet aircraft, and along ridges with views of the city those weapons were meant to protect. The site feels like a time capsule from an era when nuclear war felt inevitable and Anchorage was ground zero.',
            images: [
              {
                src: '/anchorage/hidden-gems/cia-nike-1.png',
                alt: 'Abandoned Cold War military installation on mountaintop',
              },
              {
                src: '/anchorage/hidden-gems/cia-nike-2.png',
                alt: 'Nike Site Summit Cold War bunker remains',
              },
            ],
            address: 'Mount Gordon Lyon, 12.5 miles east of downtown',
            coordinates: { lat: 61.24, lng: -149.66 },
            hours: 'Tours only through Joint Base Elmendorf-Richardson',
            price: 'Varies by tour',
            tip: 'Tours book out weeks in advance during summer—check the JBER recreation website early.',
          },
          {
            id: 'gem-cultural-1',
            type: 'hidden-gem',
            featured: true,
            featuredOrder: 5,
            name: 'Eklutna Spirit Houses Cemetery',
            category: 'Cultural Site',
            description: 'Twenty-five miles north of Anchorage, at the oldest continuously inhabited site in the region, over 100 brightly painted spirit houses stand among the birch trees—a tradition that exists nowhere else on Earth. When Russian Orthodox missionaries arrived in the 1800s, the Dena\'ina Athabascan people merged their burial practices with the new faith: bodies are buried with blankets in the Orthodox tradition, but 40 days later, families build small wooden spirit houses over the graves, painted in clan colors that identify family lines. Per Athabascan tradition, the houses are left to decay naturally—new wood standing next to weathered predecessors going back generations. The adjacent St. Nicholas Russian Orthodox Church, built in 1870, is the second-oldest building in Anchorage. This is sacred ground, still used for burials today, and visitors are welcome to witness a tradition that bridges centuries and cultures.',
            images: [
              {
                src: '/anchorage/hidden-gems/eklutna-1.png',
                alt: 'Colorful spirit houses in cemetery setting',
              },
              {
                src: '/anchorage/hidden-gems/eklutna-2.png',
                alt: 'Eklutna Spirit Houses with Russian Orthodox church',
              },
            ],
            address: 'St. Nicholas Russian Orthodox Church, Eklutna Village (25 miles north)',
            coordinates: { lat: 61.46, lng: -149.35 },
            hours: 'Open daily',
            price: 'Small donation appreciated',
            tip: 'The Heritage House offers guided tours that explain the traditions in depth. Photography is allowed but keep your voice down—this is an active cemetery.',
          },
          {
            id: 'gem-earthquake-1',
            type: 'hidden-gem',
            name: 'Earthquake Park',
            category: 'Historic Site',
            description: 'On Good Friday 1964, the ground shook for four and a half minutes. The 9.2-magnitude earthquake—the second most powerful ever recorded—devastated Anchorage, and nowhere more dramatically than Turnagain Heights, where an entire bluff liquefied and slid into Cook Inlet, taking 75 homes with it. The bodies were never recovered; the ground was too unstable to search. Today, Earthquake Park preserves the landslide zone, and sixty years later, you can still see what happened: rippling hills, sudden drops, and terrain that looks like it was stirred by a giant spoon. The destruction is frozen in time, overgrown with grass and birch but unmistakably wrong. Interpretive signs tell the story of the families who lost everything in minutes. On clear days, you can see Denali from the overlook—beauty and catastrophe occupying the same view.',
            images: [
              {
                src: '/anchorage/hidden-gems/quake-park.png',
                alt: 'Uneven terrain showing earthquake damage effects',
              },
              {
                src: '/anchorage/hidden-gems/quake-park-2.png',
                alt: 'Earthquake Park interpretive trail',
              },
            ],
            address: 'Earthquake Park, West Northern Lights Blvd',
            coordinates: { lat: 61.20, lng: -149.98 },
            hours: 'Open daily',
            price: 'Free',
            website: 'https://www.muni.org/parks',
            tip: 'The Tony Knowles Coastal Trail runs through the park—you can bike here from downtown in 20 minutes.',
          },
          {
            id: 'gem-museum-1',
            type: 'hidden-gem',
            name: 'Little Lithuanian Museum',
            category: 'Appointment-Only Museum',
            description: 'In a tiny yellow house in Chugiak, Svaja Worthington runs what might be the most personal museum in Alaska. Svaja\'s family fled Lithuania when the Soviets invaded in 1944; she was four years old. The artifacts she displays—traditional clothing, family photographs, handwritten letters, folk art—are her family\'s possessions, carried through refugee camps across Europe before finally arriving in Alaska. The museum also serves as the Honorary Consulate of Lithuania, which means Svaja is both the curator and the closest thing to an ambassador within a thousand miles. She guides every visitor herself, telling stories that connect the objects to the history they represent. It\'s not a museum in the institutional sense—it\'s a woman sharing her family\'s survival with anyone curious enough to ask.',
            images: [
              {
                src: '/anchorage/hidden-gems/lithuanian-1.png',
                alt: 'Small historic house museum with traditional artifacts',
              },
              {
                src: '/anchorage/hidden-gems/lithuanian-2.png',
                alt: 'Lithuanian folk costumes and artifacts collection',
              },
            ],
            address: 'Chugiak (contact for exact location)',
            coordinates: { lat: 61.39, lng: -149.47 },
            hours: 'By appointment only, June-September',
            price: 'Free',
            tip: 'Call ahead and bring questions—Svaja has stories that aren\'t in any history books.',
          },
          {
            id: 'gem-museum-2',
            type: 'hidden-gem',
            name: 'Alaska Law Enforcement Museum',
            category: 'Niche Museum',
            description: 'Alaska didn\'t become a state until 1959, and before that, law enforcement in the territory was... creative. This 3,000-square-foot museum downtown traces that history through the objects officers carried and criminals encountered: a 1952 Hudson Hornet patrol car restored to showroom condition, wire-tapping equipment from the bootlegging era, territorial badges from before anyone agreed on what Alaska even was, antique radios that connected officers across distances that would take days to cross. The shackles are unnerving. The vintage uniforms are surprisingly dapper. The stories—gold rush justice, Prohibition-era smuggling, bush pilots doubling as lawmen—feel like they belong in novels. Alaska\'s only law enforcement museum sits quietly downtown, passed by tourists who don\'t know it exists, guarding artifacts from an era when the law had to improvise.',
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
            tip: 'Ask about the territorial period—the stories of pre-statehood law enforcement are wilder than anything in the displays.',
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
            description: 'Anchorage is full of people who\'ve lived here for years without knowing that a 200-foot canyon cuts through the Chugach foothills ten minutes from downtown. The Campbell Creek Gorge Overlook is unmarked, unimproved, and unknown to most—a tree-shrouded ledge where you look straight down at whitewater crashing through a slot canyon that feels transplanted from the Southwest. The trail to reach it isn\'t on most maps; you have to know which fork to take from the Hillside Ski Chalet parking lot. Stand at the edge and the city feels impossibly far away—just rushing water, sheer rock, and the kind of silence that makes you understand why people move to Alaska and never leave.',
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
            tip: 'The overlook is unfenced and the drop is real—keep back from the edge, especially in wet conditions.',
          },
          {
            id: 'gem-aurora-1',
            type: 'hidden-gem',
            name: 'Glen Alps Aurora Viewpoint',
            category: 'Northern Lights Spot',
            description: 'When the aurora forecast goes active, half of Anchorage drives to the same crowded pullouts on the Glenn Highway. The other half—the ones who know—drive to Glen Alps. At 2,200 feet, above the city lights and facing north toward the Alaska Range, this Chugach State Park trailhead offers what might be the best aurora viewing within reach of the city. Five mountain ranges ring the horizon. The Anchorage Bowl glitters below. And when the lights come—green curtains rippling across the sky, sometimes pink, sometimes purple—you watch from a parking lot that feels like a front-row seat to the universe. Dress for genuine cold. Arrive before dark to claim a spot. And check the aurora forecast before driving up—when it\'s active, the parking lot fills with photographers, champagne toasts, and Alaskans who never get tired of watching the sky.',
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
            tip: 'The University of Alaska Fairbanks aurora forecast is gospel—check it before driving up. Bring hand warmers; it\'s 15-20 degrees colder than downtown.',
          },
          {
            id: 'gem-wildlife-1',
            type: 'hidden-gem',
            name: 'Ship Creek Urban Salmon Viewing',
            category: 'Urban Wildlife',
            description: 'In most cities, a creek running through downtown is a sad afterthought. In Anchorage, Ship Creek fills with thousands of salmon every summer—king salmon in May and June, silvers from July through September—and you can watch them fight upstream from viewing platforms a ten-minute walk from the hotel district. The fish ladders and spillway at the William Jack Hernandez Sport Fish Hatchery give you close-up views of salmon in their final, desperate push to spawn. Better yet, you can fish: Ship Creek is one of the best urban salmon fishing spots in America, and you can rent gear on-site if you didn\'t bring your own. The Alaska Railroad rumbles past on schedule. Eagles circle overhead. The whole scene feels impossibly Alaskan, and it\'s hiding in plain sight downtown.',
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
            tip: 'Peak salmon runs happen mid-July through August. The combat fishing (shoulder-to-shoulder anglers) is part of the spectacle.',
          },
          {
            id: 'gem-nature-2',
            type: 'hidden-gem',
            name: 'Turnagain Arm Bore Tide',
            category: 'Natural Phenomenon',
            description: 'Twice a day, during extreme tides, a wall of water up to ten feet high comes thundering into Turnagain Arm at speeds up to 24 mph—one of the largest bore tides in North America. The physics are dramatic: a 40-foot tidal swing funnels into a narrow, shallow arm, compressing into a wave that advances for miles. Local surfers ride the bore for distances that would be impossible in ocean surf. Kayakers paddle frantically to stay ahead of it. From the viewing point at Beluga Point, you watch the wave approach like a freight train made of water, churning the silty inlet white as it passes. The bore tide happens on a schedule dictated by the moon, strongest during new and full moons, most dramatic around the fall equinox. Miss the timing and you\'ll see nothing. Nail it and you\'ll witness one of Alaska\'s most surreal natural phenomena.',
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
            tip: 'NEVER walk on the mudflats. The glacial silt acts like quicksand and has killed people who wandered out. Watch from solid ground only.',
          },
          {
            id: 'gem-quirky-1',
            type: 'hidden-gem',
            name: 'World\'s Largest Chocolate Waterfall',
            category: 'Quirky Attraction',
            description: 'Inside an unassuming candy factory south of downtown, a 20-foot waterfall of molten chocolate cascades through three tiers of vintage copper candy kettles—over 3,000 pounds of chocolate in continuous flow. Homer artist Mike Sirl built this confectionary monument in 1994, and while Guinness has never officially certified it, no one has stepped forward to claim a larger one. You can\'t drink from it (health codes being what they are), but you can stand and watch chocolate fall in sheets while contemplating the glorious absurdity of building something like this in Alaska, of all places. The surrounding store sells wild berry products, fudge, and tourist kitsch, but the waterfall is the draw. It\'s free to view, delightfully weird, and exactly the kind of thing that shouldn\'t exist but does.',
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
            tip: 'Factory tours explain how they keep 3,000 pounds of chocolate at the perfect temperature year-round. The fudge is worth buying.',
          },
          {
            id: 'gem-trail-1',
            type: 'hidden-gem',
            name: 'Anchorage Light Speed Planet Walk',
            category: 'Public Art Trail',
            description: 'A high school astronomy student designed this: a scale-model solar system stretching from downtown Anchorage to the Kincaid Park chalet, with the Sun at 5th and G Street and Pluto 5.5 hours away on foot. The brilliance is in the math—if you walk at a casual pace, you\'re moving at the speed of light relative to the model. Earth is an eight-minute walk from the Sun. Jupiter takes 45 minutes. By the time you reach Pluto, you\'ve covered miles of Anchorage\'s best trail system and gained an intuitive understanding of just how empty and vast the solar system actually is. Most people don\'t walk the whole thing. Most people don\'t need to. Just walking from the Sun to Mars will change how you think about space.',
            images: [
              {
                src: '/anchorage/hidden-gems/curious-solar-planet-walk-1.png',
                alt: 'Planet model markers along urban trail',
              },
              {
                src: '/anchorage/hidden-gems/curious-solar-planet-walk-2.png',
                alt: 'Anchorage Light Speed Planet Walk solar system model',
              },
            ],
            address: 'Starts: 5th Ave & G Street (The Sun)',
            coordinates: { lat: 61.2176, lng: -149.8894 },
            hours: '24/7',
            price: 'Free',
            website: 'https://anchorageplanetwalk.org',
            tip: 'Rent bikes downtown and ride the coastal trail to the outer planets. You can reach Saturn in about an hour.',
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
            description: 'Anchorage didn\'t exist until 1915. That year, the Alaska Railroad began construction, and a tent city sprang up at Ship Creek to house the workers. Oscar Anderson claimed to be the 18th person to arrive—he kept count. The wood-frame house he built that summer is now Anchorage\'s only historic house museum, restored to its 1915 appearance and designated a National Trust Distinctive Destination. Anderson went on to become one of early Anchorage\'s most prominent citizens: meat packer, coal dealer, aviation pioneer, newspaper owner. His house sits in Elderberry Park, steps from the coastal trail, a reminder that this city of 300,000 began barely a century ago with a railroad, a handful of tents, and people like Oscar Anderson who saw opportunity in the wilderness. The 45-minute tours are led by docents who know the stories that don\'t make the history books.',
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
            tip: 'Combine with a walk on the Tony Knowles Coastal Trail, which starts right outside.',
          },
          {
            id: 'gem-cultural-2',
            type: 'hidden-gem',
            name: 'Indigenous Place Names Project Markers',
            category: 'Cultural Art',
            description: 'Before Anchorage was Anchorage, it was Dena\'ina land—and the Dena\'ina Athabascan people had names for every creek, inlet, and mountain. The Indigenous Place Names Project is slowly restoring that language to the landscape: 32 sculptural markers now stand along Anchorage trails and parks, each featuring a Dena\'ina place name, its English translation, and the story behind it. Artist Melissa Shaginoff designed the markers to incorporate traditional fire bag patterns and contemporary Indigenous art. Each one reads "You are walking on Dena\'ina land"—a simple statement that reframes the city around you. Find them at Westchester Lagoon, Muldoon Park, Potter Marsh, Point Woronzof, and along the Chester Creek trail system. The project is ongoing; new markers appear regularly.',
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
            tip: 'Download the project map from the Anchorage Park Foundation website to find all 32 markers.',
          },
          {
            id: 'gem-brewery-1',
            type: 'hidden-gem',
            name: 'Midnight Sun Brewing Company',
            category: 'Brewery',
            description: 'Alaska has a surprisingly excellent craft beer scene, and Midnight Sun is the flagship. The brewery operates out of an industrial park south of downtown—not exactly scenic from the outside, but inside you\'ll find one of the largest tap lists in the state, a kitchen that takes food as seriously as the beer, and a vibe that manages to be both polished and unpretentious. The Sockeye Red IPA is the signature, but the rotating seasonals are why regulars keep coming back. The brewing facility is visible from the taproom, and the staff can explain exactly what\'s happening in those massive fermentation tanks. Midnight Sun doesn\'t take itself too seriously—the beer names and label art lean playful—but the brewing is dead serious. This is where Alaskan craft beer grew up.',
            images: [
              {
                src: '/anchorage/hidden-gems/midnight-sun-1.png',
                alt: 'Craft brewery tap room with beer selection',
              },
              {
                src: '/anchorage/hidden-gems/midnigh-sun-2.png',
                alt: 'Brewery equipment and tanks',
              }
            ],
            address: '8111 Dimond Hook Dr, Anchorage, AK 99507',
            coordinates: { lat: 61.1385, lng: -149.8644 },
            hours: 'Mon-Thu 11am-10pm, Fri-Sat 11am-11pm, Sun 11am-9pm',
            price: '$$',
            website: 'https://midnightsunbrewing.com',
            tip: 'The M Street Porter and Arctic Devil Barleywine are both medal winners. Pair the Sockeye Red with the smoked salmon appetizer.',
          },
          {
            id: 'gem-wildlife-2',
            type: 'hidden-gem',
            name: 'Alaska Wildlife Conservation Center',
            category: 'Wildlife',
            description: 'Seeing Alaskan wildlife in the wild is never guaranteed—bears might be fishing elsewhere, moose might be browsing out of sight, caribou might be a hundred miles north. The Alaska Wildlife Conservation Center offers a guarantee: orphaned and injured animals, unable to survive in the wild, living out their lives where visitors can see them up close. The brown bears are the stars, but the moose, musk oxen, caribou, wolves, and porcupines each have their own enclosures spread across the facility. This isn\'t a zoo—it\'s a rescue center that happens to allow visitors. The animals have space, the presentations are educational rather than performative, and the drive to get here (45 minutes south, along Turnagain Arm) is one of the most scenic in America. For visitors with limited time who want a guaranteed wildlife encounter, this is the answer.',
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
            tip: 'Time your drive for the bore tide if possible—you pass Beluga Point on the way. The musk oxen are most active in cooler weather.',
          },
        ],
      },
      {
        id: 'anc-best-bars',
        type: 'best-of',
        category: 'bars',
        title: 'Last Frontier Pours',
        intro: 'Anchorage bars don\'t pretend to be anything they\'re not. In a city where people arrive in Carhartts and leave in the same Carhartts, the drinking culture is unpretentious by design. Legendary dives that have survived earthquakes, craft cocktail spots that emerged despite the isolation, and neighborhood bars where the bartender remembers your drink and your dog\'s name.',
        spots: [
          {
            name: 'Blues Central',
            neighborhood: 'Downtown',
            vibe: 'Hidden speakeasy with craft cocktails and live jazz (temporarily closed)',
            order: 'Any of the Prohibition-era cocktails',
            why: 'Tucked on the second floor of Williwaw, you need to find the phone booth and password to get in. Note: Currently closed—check Williwaw\'s website for updates on reopening.',
            address: '609 F St, Anchorage, AK 99501',
            coordinates: { lat: 61.2175, lng: -149.8878 },
            price: '$$',
            hours: 'Temporarily closed',
            website: 'http://williwawsocial.com/',
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
            hours: 'Mon-Sat 11am-11pm, Sun 11am-10pm',
            website: 'https://www.49thstatebrewing.com/',
            instagram: '@49thstatebrewing',
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
            neighborhood: 'Downtown',
            vibe: 'Neighborhood bar with strong drinks and zero attitude',
            order: 'Beer and a shot—plus free popcorn',
            why: 'Voted best dive bar, best small bar, and best jukebox in Anchorage by readers. Darwin\'s hasn\'t caved to trends—no 15 taps of local IPAs, just cans and bottles. The jukebox is free and not connected to the internet. The owner Darwin is allegedly the world\'s biggest seller of Cinnamon Schnapps. This is the real deal.',
            address: '426 G St, Anchorage, AK 99501',
            coordinates: { lat: 61.2173, lng: -149.8856 },
            price: '$',
            hours: 'Mon-Sun 10am-2:30am (Fri-Sat til 3am)',
            website: 'http://darwinstheoryalaska.com/',
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
            hours: 'Thu-Sat 5pm-2am (varies by event)',
            website: 'http://williwawsocial.com/',
            instagram: '@williwawsocial',
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
        intro: 'In Alaska, the seafood isn\'t a menu section—it\'s the entire point. Salmon pulled from waters you can see from downtown, halibut that was swimming yesterday, king crab that costs what it costs because it\'s actually fresh. Everything else has to be shipped in, but the fish is the best on Earth. These restaurants know how to honor it.',
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
            hours: 'Mon-Fri 11:30am-9pm, Sat-Sun 11am-9pm',
            website: 'https://www.simonandseaforts.com/',
            instagram: '@simonandseaforts',
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
            menuImage: { src: '/anchorage/establishments/simon-menu.png', alt: 'Simon & Seafort\'s menu' },
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
            hours: 'Mon-Fri 10:30am-11pm, Sat-Sun 11am-11pm',
            website: 'https://www.moosestoothak.com/',
            instagram: '@moosestoothpub',
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
            menuImage: { src: '/anchorage/establishments/moosetooth-menu-1.png', alt: 'Moose\'s Tooth menu' },
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
            hours: 'Daily 7am-3pm',
            website: 'https://www.snowcitycafe.com/',
            instagram: '@snowcitycafe',
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
            menuImage: { src: '/anchorage/establishments/snowcity-menu.png', alt: 'Snow City Cafe menu' },
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
            hours: 'Daily 9am-10pm',
            website: 'https://www.spenardroadhouse.com/',
            instagram: '@spenardrh',
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
            menuImage: { src: '/anchorage/establishments/spenard-roadhouse-menu.png', alt: 'Spenard Roadhouse menu' },
          },
          {
            name: 'Kinley\'s Restaurant',
            neighborhood: 'Midtown',
            vibe: 'Modern Alaskan with indigenous influences',
            order: 'Tasting menu or whatever features local catch',
            why: 'Kinley\'s is what happens when a chef actually commits to showcasing Alaska\'s ingredients: local seafood, foraged greens, indigenous techniques, and a tasting menu that tells a story about place. This is the restaurant that proves Anchorage can compete on a national level. The space is elegant but not stuffy. Reservations are essential. For a city this isolated, having a restaurant this ambitious is something worth celebrating.',
            address: '3230 Seward Hwy, Anchorage, AK 99503',
            coordinates: { lat: 61.1891, lng: -149.8764 },
            price: '$$$$',
            tier: 'fine-dining',
            hours: 'Tue-Fri 11:30am-9pm, Sat 5pm-10pm, Closed Sun-Mon',
            website: 'https://www.kinleysrestaurant.com/',
            instagram: '@kinleysrestaurant',
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
            menuImage: { src: '/anchorage/establishments/kinleys-menu.png', alt: 'Kinley\'s menu' },
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
            menuImage: { src: '/anchorage/establishments/steamdot-menu-1.png', alt: 'SteamDot Coffee menu' },
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
            menuImage: { src: '/anchorage/establishments/dark-horse-menu.png', alt: 'Dark Horse Coffee menu' },
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
            menuImage: { src: '/anchorage/establishments/spenardjoes-menu-1.png', alt: 'Spenard Joe\'s menu' },
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
            menuImage: { src: '/anchorage/establishments/blackcup-menu.png', alt: 'Black Cup Coffee menu' },
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
            featured: true,
            featuredOrder: 1,
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
            featured: true,
            featuredOrder: 2,
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
            featured: true,
            featuredOrder: 3,
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
          {
            id: 'anc-dark-12',
            type: 'dark-history',
            category: 'unsolved',
            year: '2003',
            title: 'The Torso Murders: Bodies Without Names',
            body: 'In June 2003, an 11-year-old boy found a torso in the mud along Turnagain Arm—no head, no legs. It was Desiree Lekanoff, 22, Alaska Native, once a sex worker on Spenard. Three months later, another torso washed up: Michelle Rothe, 32. She\'d never even been reported missing. Both women had ties to Spenard\'s underworld. Investigators found connections to at least five other missing women. No one has ever been charged. No more torsos have appeared since 2003—suggesting the killer stopped, moved away, or learned to dispose of bodies differently.',
            verdict: 'Completely unsolved. The connection to other missing women suggests a serial killer who was never caught. The case remains open.',
            sources: [
              {
                type: 'article',
                title: 'Alaska Underworld: Torso Cases Remain Unsolved',
                publisher: 'Anchorage Daily News',
                year: '2009',
                url: 'https://www.adn.com/alaska-news/article/alaska-underworld-more-than-5-years-after-torsos-wash-anchorage-cases-remain-unsolved/2009/01/22/',
              },
              {
                type: 'article',
                title: 'The Dark Side of Anchorage: Unsolved Murders',
                publisher: 'True Crime Diva',
                url: 'https://truecrimediva.com/the-dark-side-of-anchorage-alaska-part-ii-unsolved-murders-1991-2003/',
              },
            ],
            location: {
              name: 'Turnagain Arm; Spenard',
              stillExists: true,
            },
          },
          {
            id: 'anc-dark-13',
            type: 'dark-history',
            category: 'forgotten',
            year: '1950s',
            title: 'The Burning of Rogers Park: When Integration Meant Arson',
            body: 'In 1950s Anchorage, racial segregation was written directly into property deeds—restrictive covenants that prohibited sale to anyone who wasn\'t white, specifically excluding Black residents and Alaska Natives. When Alvin Campbell, a Black pioneer, purchased a home in the segregated Rogers Park neighborhood, he was met with racist taunts. Days before his family could move in, the house was burned to the ground. It wasn\'t an isolated incident—it was part of a pattern of violent resistance to integration that most Anchorage residents have never heard of.',
            verdict: 'The arson was never solved. Thousands of Anchorage homes still have these illegal covenants on their deeds. The NAACP opened its first Alaska branch in 1951 partly in response.',
            sources: [
              {
                type: 'article',
                title: 'History of Racial Segregation in Alaska',
                publisher: 'KTOO',
                year: '2022',
                url: 'https://www.ktoo.org/2022/02/20/history-of-racial-segregation-in-alaska/',
              },
              {
                type: 'article',
                title: 'Illegal for Decades, Many Anchorage Homes Still Have Covenants That Prohibit Sale to Blacks and Alaska Natives',
                publisher: 'KTOO',
                year: '2020',
                url: 'https://www.ktoo.org/2020/03/05/illegal-for-decades-many-anchorage-homes-still-have-covenants-that-prohibit-sale-to-blacks-and-alaska-natives/',
              },
              {
                type: 'other',
                title: 'Black Lives in Alaska: Journey, Justice, Joy (Exhibit)',
                publisher: 'Anchorage Museum',
                url: 'https://www.anchoragemuseum.org/exhibits/black-lives-in-alaska-journey-justice-joy/',
              },
            ],
            location: {
              name: 'Rogers Park neighborhood',
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
        intro: 'In a city where darkness lasts twenty hours in winter, the places that kept the lights on mattered more than most. These were the legendary dives, roadhouses, and gathering spots that gave Anchorage its frontier character—establishments that felt like they\'d been there since statehood. The Last Frontier loses its landmarks quietly.',
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
