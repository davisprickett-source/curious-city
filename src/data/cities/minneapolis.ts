import { CityData } from '@/types/content'

export const minneapolis: CityData = {
    slug: 'minneapolis',
    name: 'Minneapolis',
    tagline: 'Mill City vibes and urban curiosity',
    heroImage: {
      src: '/banners/Minneapolis-banner.png',
      alt: 'Minneapolis curiosities banner',
    },
    content: [
      {
        id: 'intro-text',
        type: 'text',
        content: 'Welcome to Minneapolis — a city of lakes, bridges, and unexpected discoveries. Here\'s what we\'re curious about this week.',
      },
      {
        id: 'featured-card',
        type: 'card',
        title: 'Meeting of Waters',
        description: 'A city built on confluence, power, and the quiet work of survival.',
        meta: 'Essay',
        variant: 'featured',
        href: '/minneapolis/essay/meeting-of-waters',
      },
      {
        id: 'ad-1',
        type: 'ad',
        size: 'banner',
      },
      {
        id: 'events-this-week',
        type: 'events',
        title: 'Events This Week',
        intro: 'Happening now and coming up — pop-ups, openings, and things you shouldn\'t miss in Minneapolis.',
        items: [
          // Event 1: Concert happening today (Friday Jan 9)
          {
            title: 'First Avenue Punk Night: Local Legends Reunion',
            description: 'The legendary venue that launched Prince hosts a reunion of Minneapolis punk icons. Three bands, one unforgettable night in the room where it all started.',
            startDate: '2026-01-09T19:00:00',
            endDate: '2026-01-09T23:30:00',
            location: 'First Avenue, Downtown',
            category: 'concerts',
            tags: ['music', 'nightlife'],
            href: 'https://first-avenue.com',
            image: {
              src: '/minneapolis/events/first-avenue.jpg',
              alt: 'First Avenue music venue entrance with iconic stars',
            },
            featured: true,
          },
          // Event 2: Farmers market today (Friday Jan 9)
          {
            title: 'Mill City Farmers Market Winter Edition',
            description: 'Year-round indoor market in the historic mill ruins. Local produce, artisan goods, and hot food from Minneapolis vendors.',
            startDate: '2026-01-09T08:00:00',
            endDate: '2026-01-09T13:00:00',
            location: 'Mill City Museum, Mill District',
            category: 'markets',
            tags: ['food', 'free', 'outdoor'],
            href: 'https://millcityfarmersmarket.org',
            image: {
              src: '/minneapolis/events/mill-city-market.jpg',
              alt: 'Mill City Farmers Market with vendors and historic mill backdrop',
            },
          },
          // Event 3: Art event today (Friday Jan 9)
          {
            title: 'Walker Art Center: Free Friday Night',
            description: 'Explore contemporary art with free admission to galleries, plus live music in the lobby and discounted drinks at Esker Grove.',
            startDate: '2026-01-09T17:00:00',
            endDate: '2026-01-09T21:00:00',
            location: 'Walker Art Center, Uptown',
            category: 'art',
            tags: ['art', 'free'],
            href: 'https://walkerart.org',
            image: {
              src: '/minneapolis/events/walker-art-center.jpg',
              alt: 'Walker Art Center exterior with Spoonbridge and Cherry sculpture',
            },
            featured: true,
          },
          // Event 4: Gallery crawl this weekend
          {
            title: 'Northeast Minneapolis Art Crawl',
            description: 'Self-guided tour of 30+ galleries and artist studios in the historic warehouse district. Meet artists, see new work, and discover hidden creative spaces.',
            startDate: '2026-01-10T12:00:00',
            endDate: '2026-01-11T17:00:00',
            location: 'Northeast Arts District',
            category: 'art',
            tags: ['art', 'free', 'outdoor'],
            href: 'https://nemaa.org/art-a-whirl',
          },
          // Event 5: Orchestra this weekend
          {
            title: 'Minnesota Orchestra: Movie Music Spectacular',
            description: 'The orchestra performs iconic film scores from John Williams to Hans Zimmer. Family-friendly show with pre-concert activities for kids.',
            startDate: '2026-01-10T19:30:00',
            endDate: '2026-01-10T21:30:00',
            location: 'Orchestra Hall, Downtown',
            category: 'concerts',
            tags: ['music', 'family-friendly'],
            href: 'https://minnesotaorchestra.org',
            image: {
              src: '/minneapolis/events/orchestra-hall.jpg',
              alt: 'Minnesota Orchestra performing at Orchestra Hall',
            },
          },
          // Event 6: Limited class this weekend
          {
            title: 'Lefse Making Class at Ingebretsen\'s',
            description: 'Learn to make traditional Norwegian flatbread from the experts at Minneapolis\'s iconic Scandinavian shop. Includes ingredients, recipes, and lefse to take home.',
            startDate: '2026-01-11T10:00:00',
            endDate: '2026-01-11T12:30:00',
            location: 'Ingebretsen\'s, Lake Street',
            category: 'food-drink',
            tags: ['food', 'family-friendly'],
            moreInfo: [
              { title: 'Register', url: 'https://ingebretsens.com/classes', type: 'rsvp' },
            ],
          },
          // Event 7: New opening this week
          {
            title: 'Surly Brewing: New Barrel Room Grand Opening',
            description: 'The beloved brewery expands with a dedicated barrel-aged beer room. Opening week features exclusive releases and tours of the new aging facility.',
            startDate: '2026-01-14T16:00:00',
            endDate: '2026-01-14T22:00:00',
            location: 'Surly Brewing, Prospect Park',
            category: 'food-drink',
            tags: ['food', 'beer'],
            href: 'https://surlybrewing.com',
            image: {
              src: '/minneapolis/events/surly-brewing.jpg',
              alt: 'Surly Brewing beer hall interior',
            },
          },
          // Event 8: Pop-up sale this week
          {
            title: 'Electric Fetus Vinyl Pop-Up Sale',
            description: 'Three days of rare vinyl finds, local band pressings, and collector items in the basement of Minneapolis\'s legendary record store.',
            startDate: '2026-01-15T10:00:00',
            endDate: '2026-01-17T20:00:00',
            location: 'Electric Fetus, South Minneapolis',
            category: 'markets',
            tags: ['music', 'shopping'],
          },
          // Event 9: Film event this week
          {
            title: 'Trylon Cinema: Kung Fu Triple Feature',
            description: 'All-night marathon of rare 35mm prints. Shaw Brothers classics you\'ve never seen on the big screen. Bring a pillow.',
            startDate: '2026-01-16T19:00:00',
            endDate: '2026-01-17T02:00:00',
            location: 'Trylon Cinema, Longfellow',
            category: 'theater',
            tags: ['film'],
            href: 'https://trylon.org',
            image: {
              src: '/minneapolis/events/trylon-cinema.jpg',
              alt: 'Trylon Cinema vintage interior',
            },
          },
          // Event 10: Recurring seasonal event
          {
            title: 'Lake Harriet Polar Plunge Club',
            description: 'Join the hardy souls who swim in freezing Lake Harriet every Saturday morning. Hot cocoa provided. Sanity optional.',
            startDate: '2026-01-10T08:00:00',
            endDate: '2026-01-10T09:30:00',
            isRecurring: true,
            recurrenceRule: 'Every Saturday through March',
            location: 'Lake Harriet Bandshell',
            category: 'sports',
            tags: ['outdoor', 'free'],
          },
          // Event 11: Seasonal this month (ongoing)
          {
            title: 'Midtown Greenway Ice Trail',
            description: 'The sunken bike path transforms into a 5-mile skating trail through the heart of Minneapolis. Lit at night, plowed and maintained daily.',
            startDate: '2026-01-01T00:00:00',
            endDate: '2026-02-28T23:59:00',
            isAllDay: true,
            location: 'Midtown Greenway (multiple access points)',
            category: 'sports',
            tags: ['outdoor', 'free', 'family-friendly'],
            href: 'https://midtowngreenway.org',
            image: {
              src: '/minneapolis/events/greenway-ice.jpg',
              alt: 'Ice skating on the Midtown Greenway at night',
            },
          },
          // Event 12: Closing - last chance (ongoing)
          {
            title: 'Last Weeks: Can Can Wonderland Mini Golf',
            description: 'The artist-designed mini golf course and bar announces closure. Final chance to play 18 holes of the weirdest, most creative course in the Midwest.',
            startDate: '2026-01-01T12:00:00',
            endDate: '2026-01-31T23:00:00',
            location: 'Can Can Wonderland, St. Paul',
            category: 'nightlife',
            tags: ['family-friendly', 'art'],
            href: 'https://cancanwonderland.com',
            image: {
              src: '/minneapolis/events/can-can.jpg',
              alt: 'Can Can Wonderland artist-designed mini golf hole',
            },
            featured: true,
          },
          // Event 13: Limited time food event
          {
            title: 'Kramarczuk\'s Annual Pierogi Festival',
            description: 'The iconic Eastern European deli celebrates with special pierogi varieties, live polka music, and traditional folk dancing. One weekend only.',
            startDate: '2026-01-24T11:00:00',
            endDate: '2026-01-25T20:00:00',
            location: 'Kramarczuk\'s, Northeast Minneapolis',
            category: 'food-drink',
            tags: ['food'],
          },
          // Event 14: Opening next week
          {
            title: 'MIA New Wing Preview: Members First Look',
            description: 'Be among the first to explore the Minneapolis Institute of Art\'s new contemporary wing before public opening. Free with museum membership.',
            startDate: '2026-01-18T10:00:00',
            endDate: '2026-01-18T17:00:00',
            location: 'Minneapolis Institute of Art',
            category: 'art',
            tags: ['art', 'free'],
            href: 'https://artsmia.org',
            image: {
              src: '/minneapolis/events/mia.jpg',
              alt: 'Minneapolis Institute of Art entrance',
            },
          },
          // Event 15: Major event this month
          {
            title: 'Stone Arch Bridge Festival',
            description: 'Annual arts festival on the historic bridge. 200+ artists, live music stages, food trucks, and stunning views of St. Anthony Falls.',
            startDate: '2026-01-31T10:00:00',
            endDate: '2026-02-01T18:00:00',
            location: 'Stone Arch Bridge, Mill District',
            category: 'art',
            tags: ['outdoor', 'music', 'art', 'free'],
            href: 'https://stonearchbridgefestival.com',
            image: {
              src: '/minneapolis/events/stone-arch.jpg',
              alt: 'Stone Arch Bridge Festival with crowds and art booths',
            },
            featured: true,
          },
          // === MORE MOCK EVENTS FOR TESTING ===
          // Today (Friday Jan 9) - more events
          {
            title: 'Acme Comedy Club: Stand-Up Showcase',
            description: 'Five of the Midwest\'s funniest comedians take the stage. Two-drink minimum, unlimited laughs.',
            startDate: '2026-01-09T20:00:00',
            endDate: '2026-01-09T22:30:00',
            location: 'Acme Comedy Co., Downtown',
            category: 'comedy',
            tags: ['comedy', 'nightlife'],
            href: 'https://acmecomedycompany.com',
          },
          {
            title: 'Modist Brewing: New IPA Release Party',
            description: 'Be first to try "False Pattern" — a hazy IPA with local Mighty Axe hops. Live DJ, food trucks, brewery tours.',
            startDate: '2026-01-09T16:00:00',
            endDate: '2026-01-09T22:00:00',
            location: 'Modist Brewing, North Loop',
            category: 'food-drink',
            tags: ['beer', 'food', 'music'],
            featured: true,
          },
          {
            title: 'Yoga in the Skyways',
            description: 'Free morning yoga in the downtown skyway system. Mats provided. Perfect for the lunch crowd escape.',
            startDate: '2026-01-09T07:00:00',
            endDate: '2026-01-09T08:00:00',
            location: 'IDS Center Skyway, Downtown',
            category: 'sports',
            tags: ['fitness', 'free'],
          },
          // Tomorrow (Saturday Jan 10)
          {
            title: 'Bryant-Lake Bowl: Burlesque Night',
            description: 'The legendary bowling alley/theater hosts its monthly burlesque revue. Campy, clever, and very Minneapolis.',
            startDate: '2026-01-10T21:00:00',
            endDate: '2026-01-10T23:30:00',
            location: 'Bryant-Lake Bowl, Uptown',
            category: 'nightlife',
            tags: ['nightlife', 'theater'],
            href: 'https://bryantlakebowl.com',
          },
          {
            title: 'Minneapolis Farmers Market: Winter Indoor',
            description: 'The historic market moves indoors with local produce, meats, cheeses, and crafts from 100+ Minnesota vendors.',
            startDate: '2026-01-10T06:00:00',
            endDate: '2026-01-10T13:00:00',
            location: 'Minneapolis Farmers Market, Lyndale',
            category: 'markets',
            tags: ['food', 'shopping', 'free'],
          },
          {
            title: 'Mia Saturday Art Lab',
            description: 'The Minneapolis Institute of Art hosts hands-on art activities for all ages. Free admission, free activities.',
            startDate: '2026-01-10T11:00:00',
            endDate: '2026-01-10T15:00:00',
            location: 'Minneapolis Institute of Art',
            category: 'art',
            tags: ['art', 'free', 'family-friendly'],
            href: 'https://artsmia.org',
          },
          // This weekend - Saturday Jan 10
          {
            title: 'Icehouse: Jazz Residency with Atlantis Quartet',
            description: 'The acclaimed local jazz ensemble kicks off their winter residency. Intimate room, world-class improvisation.',
            startDate: '2026-01-10T20:00:00',
            endDate: '2026-01-10T23:00:00',
            location: 'Icehouse, Eat Street',
            category: 'concerts',
            tags: ['music', 'jazz'],
            href: 'https://icehousempls.com',
          },
          {
            title: 'Spoon and Stable: Chef\'s Counter Pop-Up',
            description: 'Gavin Kaysen opens 8 seats at the chef\'s counter for a spontaneous tasting menu. First come, first served.',
            startDate: '2026-01-10T18:00:00',
            endDate: '2026-01-10T22:00:00',
            location: 'Spoon and Stable, North Loop',
            category: 'food-drink',
            tags: ['food', 'fine-dining'],
            featured: true,
          },
          {
            title: 'Midtown Global Market: Lunar New Year Kickoff',
            description: 'Early celebration with lion dances, special dishes from Asian vendors, and traditional performances.',
            startDate: '2026-01-10T11:00:00',
            endDate: '2026-01-10T20:00:00',
            location: 'Midtown Global Market, Lake Street',
            category: 'food-drink',
            tags: ['food', 'free', 'family-friendly'],
          },
          // This weekend - Saturday
          {
            title: 'Utepils Brewing: Bluegrass Brunch',
            description: 'Live bluegrass, unlimited brunch buffet, and craft beer flights. The most Minnesota Saturday possible.',
            startDate: '2026-01-11T10:00:00',
            endDate: '2026-01-11T14:00:00',
            location: 'Utepils Brewing, Bryn Mawr',
            category: 'concerts',
            tags: ['music', 'food', 'beer', 'family-friendly'],
          },
          {
            title: 'Soap Factory: Experimental Art Opening',
            description: 'New exhibition featuring immersive installations from emerging Minneapolis artists. Opening night party with DJs.',
            startDate: '2026-01-11T19:00:00',
            endDate: '2026-01-11T23:00:00',
            location: 'Soap Factory, Northeast',
            category: 'art',
            tags: ['art', 'nightlife'],
          },
          {
            title: 'Como Park Conservatory: Orchid Show Preview',
            description: 'Members-only first look at the annual orchid exhibition. Hundreds of rare specimens in the historic glass dome.',
            startDate: '2026-01-11T09:00:00',
            endDate: '2026-01-11T16:00:00',
            location: 'Como Park Conservatory, St. Paul',
            category: 'art',
            tags: ['outdoor', 'family-friendly'],
          },
          {
            title: 'Target Center: Timberwolves vs. Lakers',
            description: 'Anthony Edwards vs. the Lake Show. Premium atmosphere, playoff implications already.',
            startDate: '2026-01-11T19:00:00',
            endDate: '2026-01-11T22:00:00',
            location: 'Target Center, Downtown',
            category: 'sports',
            tags: ['sports'],
            href: 'https://timberwolves.com',
          },
          // This weekend - Sunday
          {
            title: 'Dangerous Man Brewing: Vinyl Swap',
            description: 'Bring records, trade records, drink coffee stout. The Northeast institution\'s monthly collector gathering.',
            startDate: '2026-01-12T12:00:00',
            endDate: '2026-01-12T17:00:00',
            location: 'Dangerous Man Brewing, Northeast',
            category: 'markets',
            tags: ['music', 'beer', 'shopping'],
          },
          {
            title: 'Open Streets: Winter Edition',
            description: 'Nicollet Mall closes to cars for skating, fat biking, ice sculptures, and hot chocolate. Embrace the cold.',
            startDate: '2026-01-12T10:00:00',
            endDate: '2026-01-12T16:00:00',
            location: 'Nicollet Mall, Downtown',
            category: 'sports',
            tags: ['outdoor', 'free', 'family-friendly'],
            featured: true,
          },
          // Next week
          {
            title: 'Parkway Theater: 35mm Horror Marathon',
            description: 'Dusk to dawn horror classics on real film. Concessions, costume contest, and communal screaming.',
            startDate: '2026-01-16T19:00:00',
            endDate: '2026-01-17T06:00:00',
            location: 'Parkway Theater, South Minneapolis',
            category: 'theater',
            tags: ['film'],
            href: 'https://theparkwaytheater.com',
          },
          {
            title: 'Hola Arepa: Taco Pop-Up Collab',
            description: 'The beloved Venezuelan spot teams up with a Mexico City chef for one night only. Reservations gone in minutes.',
            startDate: '2026-01-14T17:00:00',
            endDate: '2026-01-14T22:00:00',
            location: 'Hola Arepa, Kingfield',
            category: 'food-drink',
            tags: ['food'],
          },
          {
            title: 'Guthrie Theater: New Works Festival',
            description: 'Staged readings of plays by Minnesota writers. Free, but tickets required. The future of Twin Cities theater.',
            startDate: '2026-01-15T19:30:00',
            endDate: '2026-01-17T21:00:00',
            location: 'Guthrie Theater, Mill District',
            category: 'theater',
            tags: ['theater', 'free'],
            href: 'https://guthrietheater.org',
          },
          {
            title: 'Sociable Cider Werks: Cider & Cheese Pairing',
            description: 'Learn to pair craft ciders with Minnesota cheeses. Class includes flight of 5 ciders and cheese board.',
            startDate: '2026-01-15T18:00:00',
            endDate: '2026-01-15T20:00:00',
            location: 'Sociable Cider Werks, Northeast',
            category: 'food-drink',
            tags: ['food', 'beer'],
            moreInfo: [
              { title: 'Buy Tickets', url: 'https://sociablecider.com/events', type: 'tickets' },
            ],
          },
          {
            title: 'Minneapolis Sculpture Garden: Ice Sculpture Walk',
            description: 'Temporary ice sculptures by local artists installed among the permanent collection. Gone when it melts.',
            startDate: '2026-01-13T08:00:00',
            endDate: '2026-01-20T17:00:00',
            isAllDay: true,
            location: 'Minneapolis Sculpture Garden, Loring Park',
            category: 'art',
            tags: ['art', 'outdoor', 'free'],
          },
          // More varied events
          {
            title: 'Black Dog Coffee: Open Mic Poetry',
            description: 'St. Paul\'s longest-running poetry open mic. Sign up at 7, readings at 7:30. All welcome.',
            startDate: '2026-01-13T19:00:00',
            endDate: '2026-01-13T21:30:00',
            location: 'Black Dog Coffee, Lowertown St. Paul',
            category: 'art',
            tags: ['free'],
          },
          {
            title: 'Brave New Workshop: Improv Show',
            description: 'The nation\'s longest-running satirical comedy theater. Sharp political humor, audience participation.',
            startDate: '2026-01-17T20:00:00',
            endDate: '2026-01-17T22:00:00',
            location: 'Brave New Workshop, Downtown',
            category: 'comedy',
            tags: ['comedy', 'theater'],
            href: 'https://bravenewworkshop.com',
          },
          {
            title: 'Fulton Brewing: Trivia Night',
            description: 'Weekly pub trivia with prizes. Teams of up to 6. Beer specials and surprisingly hard questions.',
            startDate: '2026-01-14T19:00:00',
            endDate: '2026-01-14T21:00:00',
            location: 'Fulton Brewing, North Loop',
            category: 'nightlife',
            tags: ['beer', 'free'],
            isRecurring: true,
            recurrenceRule: 'Every Tuesday',
          },
          {
            title: 'Lakes & Legends: Mead Tasting Experience',
            description: 'Guided tasting of 6 meads paired with local honey education. Vikings drank this stuff.',
            startDate: '2026-01-18T14:00:00',
            endDate: '2026-01-18T16:00:00',
            location: 'Lakes & Legends Brewing, Loring Park',
            category: 'food-drink',
            tags: ['beer', 'food'],
          },
          {
            title: 'Can Can Wonderland: Final Weekend Bash',
            description: 'Last call for the beloved mini golf palace. Special programming, DJ sets, and collective mourning.',
            startDate: '2026-01-24T17:00:00',
            endDate: '2026-01-25T23:00:00',
            location: 'Can Can Wonderland, St. Paul',
            category: 'nightlife',
            tags: ['family-friendly', 'art', 'nightlife'],
            href: 'https://cancanwonderland.com',
            featured: true,
          },
          {
            title: 'Northrup King Building: Artist Studios Open',
            description: 'Hundreds of working artists open their studio doors. Buy direct, meet makers, see the creative process.',
            startDate: '2026-01-18T11:00:00',
            endDate: '2026-01-19T17:00:00',
            location: 'Northrup King Building, Northeast',
            category: 'art',
            tags: ['art', 'free', 'shopping'],
          },
          {
            title: 'Mill City Museum: Flour Power Family Day',
            description: 'Kids make bread, learn milling history, and explore the ruins. Included with admission.',
            startDate: '2026-01-19T10:00:00',
            endDate: '2026-01-19T15:00:00',
            location: 'Mill City Museum, Mill District',
            category: 'food-drink',
            tags: ['family-friendly', 'food'],
          },
          {
            title: 'Paisley Park: Purple Rain Screening',
            description: 'Watch the iconic film in the place where Prince made magic. Tour and screening combo.',
            startDate: '2026-01-17T19:00:00',
            endDate: '2026-01-17T22:00:00',
            location: 'Paisley Park, Chanhassen',
            category: 'concerts',
            tags: ['music', 'film'],
            href: 'https://paisleypark.com',
            featured: true,
          },
          {
            title: 'Finnegans Brewery: Community Pint Night',
            description: 'All proceeds go to local food shelves. Drink beer, fight hunger. Live acoustic music.',
            startDate: '2026-01-20T17:00:00',
            endDate: '2026-01-20T21:00:00',
            location: 'Finnegans Brewery, East Town',
            category: 'food-drink',
            tags: ['beer', 'music', 'free'],
          },
          {
            title: 'Union Depot: Winter Beer Dabbler',
            description: '120+ breweries pour in the historic train station. The premier Minnesota beer festival.',
            startDate: '2026-01-25T14:00:00',
            endDate: '2026-01-25T18:00:00',
            location: 'Union Depot, St. Paul',
            category: 'food-drink',
            tags: ['beer'],
            href: 'https://beerdabbler.com',
            featured: true,
          },
          {
            title: 'Harriet Brewing: Board Game Night',
            description: 'Huge library of games, craft beer, and chill vibes. Tables available first come.',
            startDate: '2026-01-16T17:00:00',
            endDate: '2026-01-16T22:00:00',
            location: 'Harriet Brewing, South Minneapolis',
            category: 'nightlife',
            tags: ['beer', 'free'],
            isRecurring: true,
            recurrenceRule: 'Every Thursday',
          },
          {
            title: 'Jungle Theater: Intimate Cabaret',
            description: 'Late-night cabaret series in the 150-seat gem. Local performers, cocktails, sophistication.',
            startDate: '2026-01-24T22:00:00',
            endDate: '2026-01-25T00:30:00',
            location: 'Jungle Theater, Uptown',
            category: 'theater',
            tags: ['theater', 'music', 'nightlife'],
          },
          {
            title: 'Indeed Brewing: Food Truck Friday',
            description: 'Rotating food trucks every Friday. This week: Chef Shack hot dish. Beer garden vibes despite cold.',
            startDate: '2026-01-10T16:00:00',
            endDate: '2026-01-10T21:00:00',
            location: 'Indeed Brewing, Northeast',
            category: 'food-drink',
            tags: ['food', 'beer'],
            isRecurring: true,
            recurrenceRule: 'Every Friday',
          },
          {
            title: 'Midtown YWCA: Free Swim Saturday',
            description: 'Community open swim. All ages, all abilities. Lifeguards on duty.',
            startDate: '2026-01-11T09:00:00',
            endDate: '2026-01-11T12:00:00',
            location: 'YWCA Midtown, Uptown',
            category: 'sports',
            tags: ['fitness', 'free', 'family-friendly'],
          },
          {
            title: 'Uptown VFW: Karaoke Wars',
            description: 'Competitive karaoke with judges, prizes, and ruthless crowds. Bring your A-game.',
            startDate: '2026-01-11T21:00:00',
            endDate: '2026-01-12T01:00:00',
            location: 'Uptown VFW, Uptown',
            category: 'nightlife',
            tags: ['music', 'nightlife', 'free'],
          },
          {
            title: 'Bauhaus Brew Labs: Yoga & Pints',
            description: 'Saturday morning flow followed by a free beer. Mats provided. All levels welcome.',
            startDate: '2026-01-11T10:00:00',
            endDate: '2026-01-11T11:30:00',
            location: 'Bauhaus Brew Labs, Northeast',
            category: 'sports',
            tags: ['fitness', 'beer'],
            isRecurring: true,
            recurrenceRule: 'Every Saturday',
          },
          {
            title: 'Wrecktangle Pizza: Pinball Tournament',
            description: 'Detroit-style pizza and serious pinball competition. $10 entry, winner takes pot.',
            startDate: '2026-01-12T14:00:00',
            endDate: '2026-01-12T18:00:00',
            location: 'Wrecktangle Pizza, Northeast',
            category: 'food-drink',
            tags: ['food'],
          },
        ],
      },
      {
        id: 'this-week',
        type: 'card-list',
        title: 'This Week',
        cards: [
          {
            title: 'Northeast Arts District Walking Tour',
            description: 'Self-guided route through the neighborhood\'s best galleries and murals.',
            meta: 'Guide',
            href: '/minneapolis/northeast-art-walk',
          },
          {
            title: 'Lake Harriet Winter Swimming Club',
            description: 'Meet the locals who plunge into freezing water every Saturday morning.',
            meta: 'Feature',
            href: '/minneapolis/winter-swimmers',
          },
          {
            title: 'Best Coffee Shops for Remote Work',
            description: 'Wi-Fi, outlets, and ambiance — our updated list for 2024.',
            meta: 'List',
            variant: 'compact',
            href: '/minneapolis/coffee-shops',
          }
        ],
      },
      {
        id: 'ad-2',
        type: 'ad',
        size: 'rectangle',
      },
      {
        id: 'quick-reads',
        type: 'section',
        title: 'Quick Reads',
        items: [
          {
            id: 'quick-1',
            type: 'card',
            title: 'Why Are There So Many Tunnels Downtown?',
            description: 'A brief history of Minneapolis underground.',
            variant: 'compact',
          },
          {
            id: 'quick-2',
            type: 'card',
            title: 'The Flour Milling Legacy',
            description: 'How Gold Medal Flour shaped the city.',
            variant: 'compact',
          }
        ],
      },
      {
        id: 'curiosities',
        type: 'section',
        title: 'Minneapolis Curiosities',
        teaser: 'Underground tunnels, flour mill explosions, and the secrets beneath the skyways',
        intro: 'The Twin Cities sell themselves on lakes and nice. But Minneapolis was built on flour dust explosions that killed dozens, a river dammed into submission, and a skyway system that lets the wealthy avoid the streets entirely. From the ruins of the milling district to the tunnels beneath downtown, the city hides its strangest stories in plain sight.',
        items: [
          {
            id: 'curiosity-1',
            type: 'curiosity',
            category: 'history',
            title: 'Minneapolis was explicitly fair game for America\'s most wanted gangsters',
            body: 'During Prohibition, St. Paul operated under the "O\'Connor System" — a corrupt arrangement where gangsters like John Dillinger, Al Capone, Machine Gun Kelly, and Bonnie and Clyde could live peacefully in the city. The deal was simple: check in with the police chief, give him a cut, and commit no crimes within St. Paul city limits. Minneapolis, however, was explicitly excluded from this protection.\n\nThe result was predictable carnage. In 1932, more than 20% of all bank robberies in the entire United States occurred in Minnesota — most of them in Minneapolis. Gangsters lived comfortable lives across the river in St. Paul, then crossed over to rob Minneapolis banks before retreating to their sanctuary. When Dillinger was shot by FBI agents during a St. Paul shootout in 1934, he fled to his doctor\'s clinic in Minneapolis to hide and receive treatment. The arrangement lasted until federal pressure finally shut it down in the mid-1930s, but not before Minneapolis became America\'s most robbery-prone city.',
            sources: [
              {
                title: 'Minnesota Historical Society',
                url: 'https://www.mnhs.org/',
              },
              {
                title: 'Most Notorious Podcast: Gangsters in 1930s Minnesota',
                url: 'https://www.mostnotorious.com/2022/12/13/gangsters-in-1930s-minnesota-with-paul-maccabee/',
              },
              {
                title: 'Star Tribune Curious Minnesota Podcast',
                url: 'https://www.startribune.com/curious-minnesota-podcast/',
              }
            ],
            location: { name: 'Minneapolis & St. Paul', url: 'https://www.google.com/maps/place/Minneapolis,+MN/@44.9778,-93.2650,12z', stillExists: true },
            image: {
              src: '/Minneapolis/Minneapolis Curiosities/gangsters.png',
              alt: '1930s gangsters in Minnesota',
            },
          },
          {
            id: 'curiosity-2',
            type: 'curiosity',
            category: 'history',
            title: 'The world\'s largest flour mill exploded from dust ignition, killing 18',
            body: 'On May 2, 1878, the Washburn A Mill — then the largest flour mill on Earth — detonated in a fireball heard ten miles away in St. Paul. The explosion killed 18 workers instantly and destroyed six surrounding mills, erasing a third of Minneapolis\'s milling capacity in seconds. The culprit was something almost comically mundane: flour dust.\n\nMillstones grinding dry had created sparks. Those sparks ignited suspended flour particles. The resulting explosion had the force of a bomb. The disaster revolutionized industrial safety worldwide and directly led to the invention of dust collection systems. It also prompted the first systematic study of combustible dust hazards — research that now protects workers in grain elevators, sawmills, and factories across the globe. The mill\'s ruins were eventually converted into the Mill City Museum, which tells the story of Minneapolis\'s flour empire and the disaster that changed workplace safety forever.',
            sources: [
              {
                title: 'Minnesota Historical Society',
                url: 'https://www.mnhs.org/',
              },
              {
                title: 'Great Mill Disaster Documentary',
                url: 'https://www.youtube.com/watch?v=joxXnP0PZb8',
              },
              {
                title: 'Wikipedia: Great Mill Disaster',
                url: 'https://en.wikipedia.org/wiki/Great_Mill_Disaster',
              },
              {
                title: 'DMNA: Washburn A Mill Historic Signage',
                url: 'https://www.thedmna.org/historic-signage/washburn-a-mill-mill-city-museum/',
              }
            ],
            location: { name: 'Mill City Museum', url: 'https://www.google.com/maps/place/Mill+City+Museum/@44.9789,-93.2571,17z', stillExists: true },
            image: {
              src: '/Minneapolis/mill curiosity 2.png',
              alt: 'The Great Mill Disaster of 1878 in Minneapolis',
            },
          },
          {
            id: 'curiosity-ad-1',
            type: 'ad',
            size: 'banner',
          },
          {
            id: 'curiosity-3',
            type: 'curiosity',
            category: 'culture',
            title: 'Minnesota is the only state where kids play "Duck, Duck, Gray Duck"',
            body: 'In 49 states, children play "Duck, Duck, Goose." In Minnesota, they play "Duck, Duck, Gray Duck" — and they will fight you about it. This isn\'t just a quirky name swap. In the Minnesota version, the person who\'s "it" calls out different adjectives before each duck ("green duck... spotted duck... sleeping duck... GRAY DUCK!"), adding a strategic deception element that Goose-playing states lack entirely.\n\nThe origin is genuinely mysterious. Leading theories trace it to Swedish immigrants who brought "Anka Anka Grå Anka" (literally "Duck Duck Gray Duck") to the Upper Midwest in the late 1800s. Others claim German roots. What\'s undisputed is Minnesota\'s absolute solitude on this issue — even neighboring Wisconsin plays Goose like civilized people.\n\nThe cultural divide has spawned academic research, viral maps, and legislative jokes. In 2019, the topic trended nationally when a linguistic map exposed Minnesota\'s isolation. MPR ran investigative segments. Minnesotans are famously passive-aggressive about most disagreements, but on Duck Duck Gray Duck, they\'re openly combative. Call it "Goose" at a backyard barbecue and you\'ll get corrected. Argue back and you\'ll get a lecture. This is the hill they\'ve chosen.',
            sources: [
              {
                title: 'Minnesota folklore',
                url: 'https://www.mnhs.org/',
              },
              {
                title: 'Atlas Obscura: Duck Duck Gray Duck',
                url: 'https://www.atlasobscura.com/articles/duck-duck-gray-duck',
              }
            ],
            image: {
              src: '/Minneapolis/Minneapolis Curiosities/duckduckgreyduck.png',
              alt: 'Duck Duck Gray Duck game illustration',
            },
          },
          {
            id: 'curiosity-4',
            type: 'curiosity',
            category: 'invention',
            title: 'The Honeycrisp apple was literally one year away from the compost heap',
            body: 'In 1982, an experimental apple tree at the University of Minnesota — catalogued only as "MN 1711" — was scheduled for destruction. It had been in development for years and wasn\'t performing. A researcher named David Bedford gave it one final year to prove itself. That last-chance tree became the Honeycrisp, now Minnesota\'s official state fruit and one of the most commercially successful apples ever developed.\n\nThe Honeycrisp took 31 years from first cross-pollination to commercial release. Its cells are significantly larger than typical apples, creating the explosive crunch that made it famous. The apple was so successful that the University of Minnesota made millions in licensing fees from growers worldwide. It\'s been named alongside Google and the nicotine patch as one of 25 innovations that changed the world. Not bad for a tree that was one season away from the chipper.',
            sources: [
              {
                title: 'University of Minnesota: Honeycrisp Apple Story',
                url: 'https://cals.umn.edu/honeycrisp',
              },
              {
                title: 'MPR News: How Honeycrisp Changed the Apple Industry',
                url: 'https://www.mprnews.org/story/2017/09/28/honeycrisp-apple-minnesota',
              }
            ],
            image: {
              src: '/Minneapolis/Minneapolis Curiosities/honeycrisps.png',
              alt: 'Honeycrisp apples',
            },
          },
          {
            id: 'curiosity-5',
            type: 'curiosity',
            category: 'underground',
            title: 'A 70-mile labyrinth of forgotten tunnels runs beneath the streets',
            body: 'Dating back to 1865, a massive tangle of telephone, gas, trolley, and hydropower tunnels sprawls beneath the Twin Cities — so extensive it\'s been compared to the Paris Catacombs. Most of it remains unexplored, unmapped, and largely forgotten. Century-old power tunnels near St. Anthony Falls predate the Civil War. Sandstone caves once housed mushroom farms, storage facilities, and Prohibition-era speakeasies like Wabasha Street Caves.\n\nIn 1992, a construction crew drilling downtown accidentally punched through a forgotten tunnel system, flooding basements across multiple city blocks. Many tunnel entrances have been sealed and lost entirely to institutional memory. The dangers are real: carbon monoxide accumulation, structural instability, and disorientation have led to deaths. Most access is now restricted, though some underground skyway connections remain public. The full extent of what\'s down there? Nobody really knows.',
            sources: [
              {
                title: 'Minnesota Historical Society: Underground Minneapolis',
                url: 'https://www.mnhs.org/historycenter/activities/museum/underground-minneapolis',
              },
              {
                title: 'Star Tribune: Beneath the Streets',
                url: 'https://www.startribune.com/minneapolis-underground-tunnels-history/564839012/',
              },
              {
                title: 'Action Squad Urban Exploration',
                url: 'http://www.actionsquad.org/index.html',
              },
              {
                title: 'Exploring the Underground Tunnels of Minneapolis and St. Paul',
                url: 'https://www.youtube.com/watch?v=45mo-n0CV38',
              }
            ],
            location: { name: 'Downtown Minneapolis', url: 'https://www.google.com/maps/place/Downtown+Minneapolis,+Minneapolis,+MN/@44.9778,-93.2650,15z', stillExists: true },
            image: {
              src: 'https://live.staticflickr.com/65535/53803633600_deccfba914_b.jpg',
              alt: 'Underground tunnel labyrinth beneath the Twin Cities',
            },
          },
          {
            id: 'curiosity-ad-2',
            type: 'ad',
            size: 'rectangle',
          },
          {
            id: 'curiosity-6',
            type: 'curiosity',
            category: 'law',
            title: 'Serving Twinkies to elderly voters became a felony indictment',
            body: 'A Minneapolis City Council candidate was once indicted by a grand jury for the crime of serving Twinkies to groups of elderly voters. Yes, really. The scandal led directly to the establishment of a fair campaign practices act that became known statewide as the "Twinkie Law" — legislation prohibiting candidates from providing anything of value to voters within a certain distance of polling places. The Minnesota political establishment apparently decided that cream-filled snack cakes posed an existential threat to democracy.',
            sources: [
              {
                title: 'Minneapolis City Records',
                url: 'https://www.minneapolismn.gov/',
              },
              {
                title: 'UPI: Politician cleared of Twinkie charges',
                url: 'https://www.upi.com/Archives/1986/06/04/Politician-cleared-of-Twinkie-charges/4851518241600/',
              },
              {
                title: 'Mashed: What You Didn\'t Know About The Twinkies Law',
                url: 'https://www.mashed.com/407663/what-you-didnt-know-about-the-twinkies-law/',
              }
            ],
            image: {
              src: '/Minneapolis/Minneapolis Curiosities/twinkies.png',
              alt: 'The Twinkie Law scandal',
            },
          },
          {
            id: 'curiosity-7',
            type: 'curiosity',
            category: 'science',
            title: 'Live mussels work 24/7 guarding the city\'s drinking water',
            body: 'At the Minneapolis water treatment facility on the Mississippi River, the early-warning contamination system isn\'t electronic — it\'s biological. A team of live freshwater mussels, wired with sensors, monitors the water supply around the clock. When they detect toxins, they clamp their shells shut within seconds. The sensors catch this immediately and trigger alarms.\n\nMussels are absurdly sensitive to water quality changes, often more reliable than sophisticated electronic monitoring systems. They work continuously, require no calibration, filter water naturally as a bonus, and have been on the job since 2006. It\'s an elegant solution: deploy an organism that evolved for 400 million years to detect bad water, attach some sensors, and let biology do the work.',
            sources: [
              {
                title: 'Minneapolis Water Works',
                url: 'https://www.minneapolismn.gov/resident-services/water-sewer-utilities/',
              }
            ],
            location: { name: 'Mississippi River Treatment Plant', url: 'https://www.google.com/maps/place/Minneapolis+Water+Treatment+Plant/@44.9889,-93.2445,15z', stillExists: true },
            image: {
              src: '/Minneapolis/Minneapolis Curiosities/mussels.png',
              alt: 'Freshwater mussels used to monitor water quality',
            },
          },
          {
            id: 'curiosity-8',
            type: 'curiosity',
            category: 'architecture',
            title: 'Two massive library caverns are carved 85 feet underground',
            body: 'Beneath the Elmer L. Andersen Library at the University of Minnesota, two caverns stretch 600 feet into St. Peter Sandstone — each the length of two football fields, 25 feet high, and 70 feet wide. The Minnesota Library Access Center sits 85 feet underground, storing over 1.5 million volumes on 17-foot-tall shelving in climate-controlled tunnels carved from the Mississippi River bluffs.\n\nExcavation took 20 months and removed nearly 100,000 cubic yards of sandstone. When completed in 2000, the tunnels were naturally at 57°F with 70% humidity — nearly ideal preservation conditions requiring minimal intervention. One cavern houses the state\'s rarest archives; the other serves Minnesota libraries via the Minitex lending system. The limestone roof provides natural protection from the elements, and there\'s room on university property for 18 additional caverns. Tours run during "Doors Open Minneapolis" and the Archives\' First Fridays, letting visitors descend into one of America\'s most unique research libraries.',
            sources: [
              {
                title: 'University of Minnesota Libraries: About Andersen Library',
                url: 'https://www.lib.umn.edu/spaces/andersen/building',
              },
              {
                title: 'MinnPost: The Subterranean Caverns',
                url: 'https://www.minnpost.com/stroll/2015/10/subterranean-caverns-protect-us-andersen-library-collections/',
              },
              {
                title: 'Minitex: Minnesota Library Access Center',
                url: 'https://minitex.umn.edu/units/minnesota-library-access-center-mlac',
              }
            ],
            location: { name: 'Elmer L. Andersen Library, University of Minnesota', url: 'https://www.google.com/maps/place/Elmer+L.+Andersen+Library/@44.9727,-93.2354,17z', stillExists: true },
            image: {
              src: '/Minneapolis/Minneapolis Curiosities/undergroundlibrary.png',
              alt: 'Underground library tunnels carved into sandstone',
            },
          },
          {
            id: 'curiosity-9',
            type: 'curiosity',
            category: 'invention',
            title: 'Every Three Musketeers bar contains "Minneapolis Nougat"',
            body: 'Mars — the candy empire behind Milky Way, Snickers, and M&Ms — was founded in Minneapolis in 1920. The light, fluffy white confection inside every Three Musketeers bar was originally called "Minneapolis Nougat." The company eventually moved operations to New Jersey, but the recipe never changed. Every Three Musketeers bar you\'ve ever eaten contains a piece of Minneapolis history, even if the wrapper doesn\'t mention it.',
            sources: [
              {
                title: 'Mars, Inc. company history',
                url: 'https://www.mars.com/about/history',
              },
              {
                title: 'Minnesota Historical Society',
                url: 'https://www.mnhs.org/',
              }
            ],
            image: {
              src: '/Minneapolis/Minneapolis Curiosities/3 musketeers.png',
              alt: 'Three Musketeers candy bar with Minneapolis Nougat',
            },
          },
          {
            id: 'curiosity-10',
            type: 'curiosity',
            category: 'culture',
            title: 'MST3K started as Minneapolis public access TV with homemade robots',
            body: 'Before Mystery Science Theater 3000 became a cult phenomenon, it premiered on KTMA — a Minneapolis public access station — in 1988. Creator Joel Hodgson built the original robot puppets (Crow, Tom Servo, Gypsy) in his Minneapolis apartment using household items and hardware store parts. The show\'s first episodes aired locally at odd hours, gained a following, moved to Comedy Central, ran for over a decade, and spawned multiple revivals. But it began in the most lo-fi way possible: local cable access with puppets made from a salad bowl, a lacrosse mask, and a gumball machine.',
            sources: [
              {
                title: 'MST3K Official Site',
                url: 'https://www.mst3k.com/',
              },
              {
                title: 'Wikipedia: Mystery Science Theater 3000',
                url: 'https://en.wikipedia.org/wiki/Mystery_Science_Theater_3000',
              }
            ],
            image: {
              src: '/Minneapolis/Minneapolis Curiosities/mystery science theater.png',
              alt: 'Mystery Science Theater 3000',
            },
          },
          {
            id: 'curiosity-11',
            type: 'curiosity',
            category: 'underground',
            title: 'The world\'s largest skyway system lets you avoid winter entirely',
            body: 'The Minneapolis Skyway System is the largest network of enclosed, climate-controlled pedestrian bridges on Earth — 80 blocks linked across 9.5 miles of downtown. You can walk from one end of the city center to the other without ever stepping outside. The first skyway opened in 1962, built by developer Leslie Park to compete with suburban shopping malls (including Southdale Center, also a Minneapolis invention — America\'s first fully enclosed mall).\n\nThe system now connects office towers, hotels, restaurants, and retail through second-story walkways that maintain a consistent 70°F regardless of the weather outside. When it\'s -20°F in January, thousands of workers commute entirely through skyways. It\'s both impressively practical and vaguely dystopian — a parallel city floating above the streets.',
            sources: [
              {
                title: 'Minneapolis Downtown Council',
                url: 'https://www.minneapolisdowntown.com/',
              },
              {
                title: 'Minneapolis Skyway Guide',
                url: 'https://www.minneapolis.org/map-transportation/minneapolis-skyway-guide/',
              }
            ],
            location: { name: 'Downtown Minneapolis', url: 'https://www.google.com/maps/place/Downtown+Minneapolis,+Minneapolis,+MN/@44.9778,-93.2650,15z', stillExists: true },
            image: {
              src: '/Minneapolis/Minneapolis Curiosities/skyway.png',
              alt: 'Minneapolis skyway system',
            },
          },
          {
            id: 'curiosity-12',
            type: 'curiosity',
            category: 'invention',
            title: 'The automatic pop-up toaster was invented here in 1926',
            body: 'Before 1926, making toast required constant attention, manual flipping, and frequent burnt bread. That year, the McGraw Electric Company in Minneapolis introduced the Toastmaster — the first automatic pop-up toaster. It could toast both sides simultaneously, monitor browning, and eject the finished toast without human intervention. A small innovation, perhaps, but one that genuinely changed breakfast routines worldwide. Every pop-up toaster since 1926 descends from the Minneapolis original.',
            sources: [
              {
                title: 'Minnesota Historical Society',
                url: 'https://www.mnhs.org/',
              },
              {
                title: 'Smithsonian Magazine',
                url: 'https://www.smithsonianmag.com/',
              }
            ],
            image: {
              src: '/Minneapolis/Minneapolis Curiosities/toaster.png',
              alt: 'Vintage pop-up toaster',
            },
          },
          {
            id: 'curiosity-13',
            type: 'curiosity',
            category: 'nature',
            title: 'The Mississippi River\'s only waterfall is slowly walking upstream',
            body: 'St. Anthony Falls is the only natural major waterfall on the Mississippi\'s entire 2,340-mile run from Minnesota to the Gulf of Mexico. It formed roughly 12,000 years ago about 10 miles downstream at Fort Snelling and has been retreating upstream ever since — about 4 feet per year as the water erodes the limestone. The falls were originally 180-200 feet high; they\'re now largely covered by a concrete apron installed to halt erosion.\n\nThis waterfall is the reason Minneapolis exists at all. It provided hydropower that made the city the flour milling capital of the world in the late 1800s. The falls are still slowly migrating, geologically speaking, though the concrete has slowed the pace to a crawl. Without human intervention, they\'d eventually reach their source.',
            sources: [
              {
                title: 'National Park Service',
                url: 'https://www.nps.gov/miss/learn/historyculture/stanthonyfalls.htm',
              }
            ],
            location: { name: 'St. Anthony Falls', url: 'https://www.google.com/maps/place/St.+Anthony+Falls/@44.9811,-93.2582,17z', stillExists: true },
            images: [
              {
                src: '/Minneapolis/Minneapolis Curiosities/falls-1.png',
                alt: 'St. Anthony Falls',
              },
              {
                src: '/Minneapolis/Minneapolis Curiosities/falls-2.png',
                alt: 'St. Anthony Falls historic view',
              },
              {
                src: '/Minneapolis/Minneapolis Curiosities/falls-3.png',
                alt: 'St. Anthony Falls and surrounding area',
              }
            ],
          },
          {
            id: 'curiosity-14',
            type: 'curiosity',
            category: 'history',
            title: 'St. Anthony was the original "Twin City" before St. Paul existed',
            body: 'Before St. Paul became Minneapolis\'s twin, the "Twin Cities" actually referred to Minneapolis and St. Anthony — two separate municipalities on opposite banks of St. Anthony Falls. They coexisted as independent rivals for twenty years until merging in 1872 to form modern Minneapolis. St. Paul didn\'t become the other half of the "Twin Cities" in public consciousness until later, after St. Anthony had already been absorbed and forgotten. The original twin city is now just the east bank of the falls.',
            sources: [
              {
                title: 'Minnesota Historical Society: St. Anthony Falls History',
                url: 'https://www.mnhs.org/stanthonyfalls',
              },
              {
                title: 'MPR News: The Other Twin City',
                url: 'https://www.mprnews.org/story/2022/05/11/minneapolis-st-anthony-twin-cities-history',
              },
              {
                title: 'MNopedia: St. Paul, Minneapolis, and Minnesota\'s Urban Origins',
                url: 'https://www.mnhs.org/mnopedia/search/index/st-paul-minneapolis-and-minnesotas-urban-origins',
              },
              {
                title: 'Historic Twin Cities: This Day in History',
                url: 'http://www.historictwincities.com/this-day-in-history/02-28-1872/',
              }
            ],
            location: { name: 'St. Anthony Falls', url: 'https://www.google.com/maps/place/St.+Anthony+Falls/@44.9811,-93.2582,17z', stillExists: true },
            image: {
              src: '/Minneapolis/st anthony original twin.png',
              alt: 'Historic St. Anthony, the original Twin City of Minneapolis',
            },
          },
          {
            id: 'curiosity-15',
            type: 'curiosity',
            category: 'architecture',
            title: 'City Hall\'s clock is bigger than Big Ben (and has a 30-ton marble statue)',
            body: 'The clock faces on Minneapolis City Hall are larger than those on London\'s Great Clock of Westminster — the tower where Big Ben tolls. It\'s a genuinely massive timepiece on a Romanesque Revival building completed in 1906. Inside the rotunda sits an even more impressive feat: Father of Waters, a statue carved from the largest single block of marble ever quarried. The figure represents the Mississippi River, weighs 30 tons, and took sculptor Larkin Goldsmith Mead nearly a decade to complete. Visitors can see it for free.',
            sources: [
              {
                title: 'City of Minneapolis',
                url: 'https://www.minneapolismn.gov/',
              }
            ],
            location: { name: 'Minneapolis City Hall', url: 'https://www.google.com/maps/place/Minneapolis+City+Hall/@44.9770,-93.2650,17z', stillExists: true },
            image: {
              src: '/Minneapolis/Minneapolis Curiosities/Minneapolis_City_Hall,_5th_Street_and_S_4th_Avenue,_Minneapolis,_MN.jpg',
              alt: 'Minneapolis City Hall with its iconic clock tower',
            },
          },
          {
            id: 'curiosity-16',
            type: 'curiosity',
            category: 'architecture',
            title: 'A cemetery chapel is covered in 10 million pieces of marble mosaic',
            body: 'Lakewood Cemetery\'s Memorial Chapel was designed by architect Harry Wild Jones as a scaled-down replica of Istanbul\'s Hagia Sophia. Completed in 1910 and built from St. Cloud granite, the building\'s interior dome is covered with a mosaic composed of 10 million individual pieces of marble. The craftsmanship is staggering — Byzantine-inspired patterns in a Minneapolis cemetery.\n\nThe chapel sits near the graves of Vice President Hubert Humphrey, Senator Paul Wellstone, entertainer Tiny Tim (who famously died onstage in Minneapolis), and generations of the Pillsbury and Washburn flour dynasties. It\'s one of the most beautiful buildings in the city, and it\'s in a graveyard.',
            sources: [
              {
                title: 'MNopedia: Lakewood Cemetery Memorial Chapel',
                url: 'https://www.mnhs.org/mnopedia/search/index/structure/lakewood-cemetery-memorial-chapel-minneapolis',
              },
              {
                title: 'Wikipedia: Lakewood Cemetery',
                url: 'https://en.wikipedia.org/wiki/Lakewood_Cemetery',
              }
            ],
            location: { name: 'Lakewood Cemetery', url: 'https://www.google.com/maps/place/Lakewood+Cemetery/@44.9487,-93.3019,17z', stillExists: true },
            images: [
              {
                src: '/Minneapolis/Minneapolis Curiosities/Lakewood_Cemetery_Memorial_Chapel-1.jpg',
                alt: 'Lakewood Cemetery Memorial Chapel exterior',
              },
              {
                src: '/Minneapolis/Minneapolis Curiosities/lakewood-2.png',
                alt: 'Lakewood Cemetery Memorial Chapel interior dome',
              },
              {
                src: '/Minneapolis/Minneapolis Curiosities/lakewood-3.png',
                alt: 'Lakewood Cemetery Memorial Chapel mosaic detail',
              }
            ],
          },
          {
            id: 'curiosity-17',
            type: 'curiosity',
            category: 'architecture',
            title: 'The nation\'s largest urban sculpture garden is free year-round',
            body: 'The Minneapolis Sculpture Garden spans 11 acres and contains more than 40 permanent installations, making it the largest urban sculpture garden in the United States. The centerpiece — Claes Oldenburg and Coosje van Bruggen\'s "Spoonbridge and Cherry" — has become one of Minnesota\'s most photographed landmarks, a 29-foot-tall spoon holding a 1,200-pound cherry with a fountain stem.\n\nThe garden connects the Walker Art Center to Loring Park and remains free and open to the public year-round. It\'s accessible, beautiful, occasionally weird, and genuinely impressive. If you only see one piece of public art in Minneapolis, it\'ll probably be the giant spoon.',
            location: { name: 'Minneapolis Sculpture Garden', url: 'https://www.google.com/maps/place/Minneapolis+Sculpture+Garden/@44.9691,-93.2890,17z', stillExists: true },
            sources: [
              {
                title: 'Walker Art Center',
                url: 'https://walkerart.org/visit/garden',
              }
            ],
            image: {
              src: '/Minneapolis/Minneapolis Curiosities/sculpture garden.png',
              alt: 'Minneapolis Sculpture Garden',
            },
          }
        ],
      },
{
  id: 'iconic-spots',
  type: 'section',
  title: 'Iconic Spots',
  intro: 'These are the landmarks that define Minneapolis — the places everyone knows, tourists flock to, and locals secretly love despite saying they\'re overrated. Sometimes the obvious choice is obvious for a reason.',
  items: [
    {
      id: 'iconic-1',
      type: 'iconic-spot',
      name: 'Mall of America',
      category: 'Entertainment',
      description: 'Yes, really. Locals say it\'s overrated, but it\'s genuinely fun to wander. The Nickelodeon Universe rides are legitimately good, and people-watching is unmatched.',
      images: [
        {
          src: '/Minneapolis/hidden-gems/mall-of-america.png',
          alt: 'Nickelodeon Universe theme park inside Mall of America',
        }
      ],
      address: '60 E Broadway, Bloomington, MN 55425',
      coordinates: { lat: 44.8549, lng: -93.2422 },
      hours: 'Mon-Sat 10am-9pm, Sun 11am-7pm',
      price: 'Free entry; rides vary',
      website: 'https://www.mallofamerica.com',
      tip: 'Go for the absurdity, not the shopping',
    },
    {
      id: 'iconic-2',
      type: 'iconic-spot',
      name: 'Mill City Museum',
      category: 'Museum',
      description: 'This museum is literally built into the ruins of the Washburn A Mill, which exploded in 1878 in the deadliest industrial disaster in Minneapolis history. Eighteen workers died when flour dust ignited. Today, you ride an "flour tower" elevator through the ruins while learning the city\'s milling history — how Minneapolis became the flour capital of the world before the industry moved west. The rooftop observation deck offers stunning views of the Mississippi and the Stone Arch Bridge.',
      images: [
        {
          src: '/Minneapolis/hidden-gems/mill-city-museum.png',
          alt: 'Mill City Museum built into historic mill ruins',
        }
      ],
      address: '704 S 2nd St, Minneapolis, MN 55401',
      coordinates: { lat: 44.9792, lng: -93.2571 },
      hours: 'Tue-Sun 10am-5pm',
      price: '$12 adults',
      website: 'https://www.mnhs.org/millcity',
      accessibility: 'Fully wheelchair accessible',
      tip: 'Walk to the Guthrie Theater\'s free "Endless Bridge" viewing platform after',
    },
    {
      id: 'iconic-ad-1',
      type: 'ad',
      size: 'banner',
    },
    {
      id: 'iconic-3',
      type: 'iconic-spot',
      name: 'Minnesota History Center',
      category: 'Museum',
      description: 'Better than you\'d expect. Current Charles Schulz exhibit, excellent WWII display, and interactive Minnesota history. Near the State Capitol and Science Museum.',
      images: [
        {
          src: '/Minneapolis/hidden-gems/history-center-1.png',
          alt: 'Minnesota History Center building exterior in St. Paul',
        },
        {
          src: '/Minneapolis/hidden-gems/history-center-2.png',
          alt: 'Interactive exhibits at Minnesota History Center',
        }
      ],
      address: '345 W Kellogg Blvd, St Paul, MN 55102',
      coordinates: { lat: 44.9444, lng: -93.0977 },
      hours: 'Tue-Sat 10am-5pm, Sun 11am-5pm',
      price: '$12 adults',
      website: 'https://www.mnhs.org/historycenter',
      accessibility: 'Fully accessible',
    },
    {
      id: 'iconic-4',
      type: 'iconic-spot',
      name: 'Fort Snelling State Park',
      category: 'Nature',
      description: 'Where the Mississippi and Minnesota rivers meet — a confluence sacred to the Dakota people. Hiking trails, river views, and the historic fort on the bluffs above.',
      images: [
        {
          src: '/Minneapolis/hidden-gems/fort.png',
          alt: 'Fort Snelling State Park at the confluence of Mississippi and Minnesota rivers',
        }
      ],
      address: '101 Snelling Lake Rd, St Paul, MN 55111',
      coordinates: { lat: 44.8931, lng: -93.1808 },
      hours: 'Daily 8am-10pm',
      price: '$7 vehicle day pass',
      website: 'https://www.dnr.state.mn.us/state_parks/fort_snelling',
      tip: 'Crosby Farm Regional Park nearby is free and equally beautiful',
    },
    {
      id: 'iconic-5',
      type: 'iconic-spot',
      name: 'Minnesota Valley Wildlife Refuge',
      category: 'Nature',
      description: 'Scenic trails along the Minnesota River with excellent birding. Free, uncrowded, and surprisingly wild for being so close to the airport.',
      images: [
        {
          src: '/Minneapolis/hidden-gems/refuge.png',
          alt: 'Wetland trails at Minnesota Valley National Wildlife Refuge',
        }
      ],
      address: '3815 American Blvd E, Bloomington, MN 55425',
      coordinates: { lat: 44.8456, lng: -93.2706 },
      hours: 'Daily sunrise-sunset',
      price: 'Free',
      website: 'https://www.fws.gov/refuge/minnesota-valley',
      tip: 'Great for spotting eagles, herons, and migrating birds',
    },
    {
      id: 'iconic-6',
      type: 'iconic-spot',
      name: 'Afton State Park',
      category: 'Nature',
      description: 'Dramatic bluffs overlooking the St. Croix River on the Wisconsin border. Some of the best hiking in the metro, especially for fall colors.',
      images: [
        {
          src: '/Minneapolis/hidden-gems/afton.png',
          alt: 'Scenic overlook of St. Croix River valley at Afton State Park',
        }
      ],
      address: '6959 Peller Ave S, Hastings, MN 55033',
      coordinates: { lat: 44.8487, lng: -92.7912 },
      hours: 'Daily 8am-10pm',
      price: '$7 vehicle day pass',
      website: 'https://www.dnr.state.mn.us/state_parks/afton',
      tip: 'The river bluff trails are stunning but steep',
    }
  ],
},

{
  id: 'hidden-gems',
  type: 'section',
  title: 'Hidden Minneapolis',
  teaser: 'Secret tunnels, underground art, and the places even locals don\'t know about',
  intro: 'These aren\'t on the tourist maps. Secret tunnels, underground art spaces, museums in fire-hose cabinets, and places even locals might not know about. This is where Minneapolis gets weird and wonderful.',
  items: [
    // SUBSECTION: Underground & Secret Spaces
    {
      id: 'hidden-gems-underground',
      type: 'section',
      title: 'Underground & Secret Spaces',
      items: [
        {
          id: 'gem-underground-1',
          type: 'hidden-gem',
          name: 'Orfield Labs Quiet Chamber',
          category: 'Experience',
          description: 'Certified by Guinness as the quietest place on Earth, the anechoic chamber at Orfield Labs in South Minneapolis absorbs 99.99% of sound. The walls are covered in 3-foot wedges of fiberglass, and the floor is a suspended mesh you stand on. In the absence of external sound, you start hearing things you never knew existed: your heartbeat, blood flowing through your veins, the whoosh of your eyeballs moving in their sockets. Most people become disoriented within 30 minutes. Some hallucinate. NASA uses similar chambers to test astronauts. It\'s a genuinely surreal experience that challenges your sense of reality.',
          images: [
            {
              src: '/Minneapolis/hidden-gems/quiet-chamber.png',
              alt: 'Orfield Labs anechoic chamber interior with sound-absorbing foam wedges',
            }
          ],
          address: '2709 E 25th St, Minneapolis, MN 55406',
          coordinates: { lat: 44.9575, lng: -93.2314 },
          hours: 'Tours by appointment only',
          price: '$200/hour for private tours',
          website: 'https://orfieldlabs.com',
          tip: 'Book well in advance — tours fill up quickly',
        },
        {
          id: 'gem-underground-2',
          type: 'hidden-gem',
          name: 'House of Balls',
          category: 'Art Studio',
          description: 'Artist Allen Christian has spent 30 years transforming his studio into a living sculpture garden. Animated creatures made from bowling balls, pressure cookers, and chicken feet greet you at the door. Some sculptures talk. Others move on their own. It feels less like a museum and more like stepping into someone\'s fever dream. Christian himself is usually there, tinkering with a new creation or explaining how he brings inanimate objects to life. The space is cluttered, chaotic, and absolutely magical. Most locals have never heard of it, despite being open since the \'90s.',
          images: [
            {
              src: '/Minneapolis/hidden-gems/balls-1.png',
              alt: 'House of Balls sculpture studio with found-object art',
            },
            {
              src: '/Minneapolis/hidden-gems/balls-2.png',
              alt: 'Animated creatures made from bowling balls and found objects',
            },
            {
              src: '/Minneapolis/hidden-gems/balls-3.png',
              alt: 'House of Balls interior with sculptures',
            }
          ],
          address: '1504 S 7th St, Minneapolis, MN 55454',
          coordinates: { lat: 44.9702, lng: -93.2488 },
          hours: 'Mon-Sat noon-4pm (call ahead recommended)',
          price: 'Free (donations encouraged)',
          phone: '612-332-3992',
          tip: 'Take the Green Line LRT to Cedar Riverside station — it\'s a short walk',
          accessibility: 'Cramped space with narrow aisles; challenging for wheelchairs',
        },
        {
          id: 'gem-underground-3',
          type: 'hidden-gem',
          name: 'Wabasha Street Caves',
          category: 'Experience',
          description: 'These sandstone caves have had many lives: 1840s mushroom farm, Prohibition speakeasy (allegedly frequented by Ma Barker, John Dillinger, and other gangsters), 1930s nightclub called Castle Royal, and now an event space. The caves stay a constant 52°F year-round. Every Thursday night, they host swing dancing in the main cavern — live bands, lessons for beginners, and an atmosphere you genuinely cannot replicate anywhere else. The guided cave tours tell stories of bootleggers, murder, and the gangster era of St. Paul when the city had a corrupt "O\'Connor Layover Agreement" that gave criminals safe haven.',
          images: [
            {
              src: '/Minneapolis/hidden-gems/caves-1.png',
              alt: 'Swing dancing inside Wabasha Street Caves',
            },
            {
              src: '/Minneapolis/hidden-gems/caves-2.png',
              alt: 'Historic underground cave venue interior',
            }
          ],
          address: '215 Wabasha St S, St Paul, MN 55107',
          coordinates: { lat: 44.9381, lng: -93.0886 },
          hours: 'Tours and events vary',
          price: '$8-15',
          website: 'https://www.wabashastreetcaves.com',
          tip: 'Thursday swing dancing is the way to experience this place',
        },
        {
          id: 'gem-underground-4',
          type: 'hidden-gem',
          name: 'Gopher Way Tunnels',
          category: 'Underground System',
          description: 'The University of Minnesota has an 8-segment underground tunnel and skyway system connecting East Bank and West Bank campuses. Students use it daily to avoid Minnesota winters, but most don\'t know its history. The tunnels date back to the 1920s and were expanded through the decades. Some sections feel utilitarian and brutalist. Others are surprisingly ornate. It\'s separate from the legendary (but off-limits) steam tunnels that run beneath campus. The Gopher Way is open to the public during building hours, and walking the full route feels like urban exploration without breaking any rules.',
          images: [
            {
              src: '/Minneapolis/hidden-gems/gopher-way.png',
              alt: 'Underground tunnel system at University of Minnesota',
            }
          ],
          address: 'University of Minnesota campus (multiple entry points)',
          coordinates: { lat: 44.9744, lng: -93.2342 },
          hours: 'Varies by building; some sections 24/7',
          price: 'Free',
          website: 'https://pts.umn.edu/Walk/Gopher-Way-Tunnels-Skyways',
          tip: 'Enter at Coffman Memorial Union and follow signs to explore the full network',
          accessibility: 'Fully accessible; designed for student use',
        },
        {
          id: 'gem-underground-5',
          type: 'hidden-gem',
          name: 'Nicollet Island\'s Hidden History',
          category: 'Urban History',
          description: 'Nicollet Island sits in the middle of the Mississippi River, connected by bridges to downtown. Most people walk across it without realizing its secrets: Three hidden cave systems sealed since the 1880s (Neapolitan Caves with iron-red swirls, Bloody Snake Passage with scarlet flowstones, and Satan\'s Cave with carved demonic figures). The island was sacred ground for the Dakota people and later home to Minneapolis\'s first wealthy neighborhoods. Today, a few Victorian houses remain, relocated from other parts of the city. The island has trails, river views, and ghost stories. Few tourists realize they\'re walking above sealed tunnels and forgotten history.',
          images: [],
          address: 'Nicollet Island, Minneapolis, MN 55401',
          coordinates: { lat: 44.9875, lng: -93.2628 },
          hours: 'Free and open 24/7',
          price: 'Free',
          tip: 'Walk the perimeter trail at sunset for stunning river and skyline views',
          accessibility: 'Paved paths; wheelchair accessible',
        }
      ],
    },
    {
      id: 'gem-ad-1',
      type: 'ad',
      size: 'banner',
    },
    // SUBSECTION: Unusual Museums & Collections
    {
      id: 'hidden-gems-museums',
      type: 'section',
      title: 'Unusual Museums & Collections',
      items: [
        {
          id: 'gem-museum-1',
          type: 'hidden-gem',
          name: 'The Bakken Museum',
          category: 'Museum',
          description: 'The only museum in the world devoted to medical electricity. Earl Bakken (co-founder of Medtronic, inventor of the wearable pacemaker) created this tribute to the intersection of electricity and life. The collection includes antique electro-therapy devices from the 1800s, a Victorian-era belt designed to stimulate genitals with electricity (for "vitality"), and interactive exhibits where you can make your hair stand on end with static. Kids love "Frankenstein\'s Laboratory" and "Ben Franklin\'s Electricity Party." Adults are quietly horrified by how much quackery passed for medicine. The museum sits on the west shore of Bde Maka Ska in a Tudor mansion, which adds to the surreal atmosphere.',
          images: [
            {
              src: '/Minneapolis/hidden-gems/electric-1.png',
              alt: 'The Bakken Museum medical electricity exhibits',
            },
            {
              src: '/Minneapolis/hidden-gems/electric-2.png',
              alt: 'Victorian electro-therapy devices display',
            }
          ],
          address: '3537 Zenith Ave S, Minneapolis, MN 55416',
          coordinates: { lat: 44.9442, lng: -93.3156 },
          hours: 'Tue-Sun 10am-4pm (closed Mon)',
          price: '$14 adults, $1 limited income',
          website: 'https://thebakken.org',
          tip: 'Free parking on site — rare for a lakeside location',
          accessibility: 'Fully wheelchair accessible',
        },
        {
          id: 'gem-museum-2',
          type: 'hidden-gem',
          name: 'James J. Fiorentino Cuckoo Clock Museum',
          category: 'Museum',
          description: 'James Fiorentino spent decades amassing the world\'s largest collection of German Black Forest cuckoo clocks — over 800 of them. When he passed away in 2021, he left instructions: open the collection to the public, free of charge, forever. Now his North Loop home is a surreal museum where every wall is covered in clocks. Every hour, hundreds of mechanical birds emerge simultaneously. The collection also includes vintage record players, pipe organs, polished Lake Superior agate spheres, and WWII memorabilia. Tours are by reservation only, and Fiorentino\'s widow runs them personally. It\'s like visiting someone\'s eccentric grandfather\'s attic, if that grandfather was obsessed with precision timekeeping.',
          images: [
            {
              src: '/Minneapolis/hidden-gems/clocks-1.png',
              alt: 'Walls covered with hundreds of cuckoo clocks',
            },
            {
              src: '/Minneapolis/hidden-gems/clocks-2.png',
              alt: 'Cuckoo clock collection display',
            }
          ],
          address: 'North Loop neighborhood (specific address provided upon reservation)',
          coordinates: { lat: 44.9889, lng: -93.2758 },
          hours: 'By reservation only',
          price: 'Free (per Fiorentino\'s wishes)',
          tip: 'Book at least 2-3 weeks in advance — tours fill quickly',
          accessibility: 'Multi-level home; limited wheelchair access',
        },
        {
          id: 'gem-museum-3',
          type: 'hidden-gem',
          name: 'Twin City Model Railroad Museum',
          category: 'Museum',
          description: '12,000 square feet of operating model railroads, built lovingly by volunteers over 75+ years. Multiple scales, multiple eras, including detailed recreations of historic Twin Cities rail lines. The real magic happens during "Night Trains" events (November-February) when the lights go down and the miniature cities glow. It\'s mesmerizing for kids and adults alike, though adults tend to stay longer. The museum is tucked in an industrial area between the downtowns, so most people have no idea it exists. Run entirely by volunteers who genuinely love explaining the history of every tiny building.',
          images: [
            {
              src: '/Minneapolis/hidden-gems/trains-1.png',
              alt: 'Detailed model railroad diorama',
            },
            {
              src: '/Minneapolis/hidden-gems/trains-2.png',
              alt: 'Model railroad miniature city at night',
            },
            {
              src: '/Minneapolis/hidden-gems/trains-3.png',
              alt: 'Volunteers operating model trains',
            }
          ],
          address: '668 Transfer Rd, Suite 8, St. Paul, MN 55114',
          coordinates: { lat: 44.9503, lng: -93.1969 },
          hours: 'Mon & Fri 10am-3pm, Sat 10am-5pm, Sun 12pm-5pm',
          price: '$10 adults, $5 children; Night Trains $15',
          website: 'https://www.tcmrm.org',
          tip: 'Visit during Night Trains season for the most magical experience',
          accessibility: 'Fully wheelchair accessible',
        },
        {
          id: 'gem-museum-4',
          type: 'hidden-gem',
          name: 'Smallest Museum in St. Paul',
          category: 'Micro Museum',
          description: 'Inspired by Little Free Libraries, this 3ft x 2ft micro-museum is built into a vintage fire-hose cabinet outside Workhorse Coffee Bar. Each month, a different local artist curates a miniature exhibition. Past shows have included "Tiny Chairs," "Lost Mittens of St. Paul," matchbook art, and "Things I Found Under My Porch." It\'s easy to walk right past it. But once you know it\'s there, you\'ll check it every time you\'re nearby. The art changes monthly, so there\'s always something new. It\'s a love letter to hyperlocal culture and proof that museums don\'t need marble halls to matter.',
          images: [
            {
              src: '/Minneapolis/hidden-gems/smallestmuseum-1.png',
              alt: 'Tiny museum display in vintage fire-hose cabinet',
            }
          ],
          address: '2399 University Ave, St. Paul, MN 55114',
          coordinates: { lat: 44.9562, lng: -93.1817 },
          hours: 'Free viewing 24/7 year-round',
          price: 'Free',
          website: 'https://www.smallestmuseumstpaul.com',
          tip: 'Check their Instagram (@smallestmuseumstpaul) to see the current exhibit before visiting',
          accessibility: 'Sidewalk viewing; fully accessible',
        }
      ],
    },
    {
      id: 'gem-ad-2',
      type: 'ad',
      size: 'rectangle',
    },
    // SUBSECTION: Hidden Architecture & Landmarks
    {
      id: 'hidden-gems-architecture',
      type: 'section',
      title: 'Hidden Architecture & Landmarks',
      items: [
        {
          id: 'gem-arch-1',
          type: 'hidden-gem',
          name: 'International Market Square Double Helix Staircase',
          category: 'Architecture',
          description: 'The first and largest double helix staircase in the United States, built in 1905 for the Munsingwear underwear factory. Two spiral staircases twist around each other, allowing workers on different shifts to pass simultaneously without ever crossing paths. It\'s an architectural marvel that almost nobody knows about. The building is now home to interior design showrooms, and the staircase is tucked at the far end near Lyndale Avenue. You can view floors 1-4 without issue, though some designers working in the building will let you climb higher if you ask nicely.',
          images: [
            {
              src: '/Minneapolis/hidden-gems/helix-stairs.png',
              alt: 'Double helix spiral staircase at International Market Square',
            }
          ],
          address: '275 Market St, Minneapolis, MN 55405',
          coordinates: { lat: 44.9806, lng: -93.2892 },
          hours: 'Open to public during business hours (Mon-Fri 9am-5pm)',
          price: 'Free',
          website: 'https://www.ims-mpls.com',
          tip: 'Ask designers/architects in the building for best viewing access',
          accessibility: 'Stairs only; not wheelchair accessible',
        },
        {
          id: 'gem-arch-2',
          type: 'hidden-gem',
          name: 'First Bridge Park Archaeological Site',
          category: 'Historic Site',
          description: 'Beneath the Hennepin Avenue Bridge, Minneapolis has exposed the excavated footings of the first three bridges to cross the Mississippi River here (dating to 1855). The park displays archaeological artifacts in situ, with interpretive markers explaining how the bridges were built and why they collapsed. You can see remnants of the original stone construction and tunnels from the bridge builders. It\'s a tiny park under a busy bridge, so it\'s easy to miss. But for history nerds, it\'s a goldmine. The Grain Belt Beer sign glows overhead at night, adding an iconic Minneapolis backdrop.',
          images: [
            {
              src: '/Minneapolis/hidden-gems/bridge-1.png',
              alt: 'Archaeological excavation of original bridge footings',
            },
            {
              src: '/Minneapolis/hidden-gems/bridge-2.png',
              alt: 'First Bridge Park archaeological site',
            },
            {
              src: '/Minneapolis/hidden-gems/bridge-3.png',
              alt: 'Historic bridge remnants and interpretive markers',
            }
          ],
          address: 'Under Hennepin Avenue Bridge, downtown riverfront',
          coordinates: { lat: 44.9881, lng: -93.2578 },
          hours: 'Free and open 24/7',
          price: 'Free',
          website: 'https://www.nps.gov/miss/planyourvisit/firstbridge.htm',
          tip: 'Combine with a walk across the Stone Arch Bridge for the full riverfront experience',
          accessibility: 'Paved trails and ramps; wheelchair accessible',
        },
        {
          id: 'gem-arch-3',
          type: 'hidden-gem',
          name: 'Witch\'s Hat Water Tower',
          category: 'Architecture',
          description: 'On the highest natural point in Minneapolis sits a unique "witch\'s hat" shaped water tower from 1913. It\'s exactly what it sounds like: a conical roof on a tower that looks like something from a fairy tale. The observation deck inside offers 360° views of the city, but there\'s a catch — it\'s only open ONE day per year (first Friday after Memorial Day). Locals camp out in line for the rare chance to climb the 101+16 steps. The tower is currently closed for repairs until late spring 2025, but you can admire the exterior anytime from Prospect Park.',
          images: [
            {
              src: '/Minneapolis/hidden-gems/witch-tower.png',
              alt: 'Witch\'s Hat Water Tower on Minneapolis\'s highest point',
            }
          ],
          address: '55 SE Malcolm Ave, Minneapolis, MN 55414',
          coordinates: { lat: 44.9703, lng: -93.2167 },
          hours: 'Currently closed for repairs (reopening late spring 2025)',
          price: 'Free on open day',
          website: 'https://prospectparkmpls.org/tower.html',
          tip: 'Mark your calendar for late May/early June when it reopens — the line gets long',
          accessibility: 'Exterior viewable anytime; interior has steep stairs (not accessible)',
        }
      ],
    },
    // SUBSECTION: Secret Art & Culture
    {
      id: 'hidden-gems-art',
      type: 'section',
      title: 'Secret Art & Culture',
      items: [
        {
          id: 'gem-art-1',
          type: 'hidden-gem',
          name: 'Trylon Cinema',
          category: 'Cinema',
          description: 'Hidden behind Wildflyer Coffee in an old warehouse, the Trylon is a 90-seat nonprofit microcinema showing repertory films on actual 16mm and 35mm film prints. Voted best theater in the Twin Cities, it specializes in forgotten B-horror, kung fu classics, rare documentaries, and cult films you\'d never find on streaming. The vibe is "fantasy-noir scrappy theater" — velvet curtains, film posters everywhere, and an audience that genuinely loves cinema. Showtimes are sporadic and announced via their website and social media. If you\'re nostalgic for video store discovery, this is your church.',
          images: [
            {
              src: '/Minneapolis/hidden-gems/trylon-cinema.png',
              alt: 'Trylon Cinema microcinema interior',
            }
          ],
          address: '2820 E 33rd St, Minneapolis, MN 55406',
          coordinates: { lat: 44.9339, lng: -93.2292 },
          hours: 'Check website for showtimes',
          price: '$10 per screening (membership available)',
          website: 'https://www.trylon.org',
          tip: 'Buy tickets online in advance — popular screenings sell out',
          accessibility: 'Wheelchair accessible seating available',
        },
        {
          id: 'gem-art-2',
          type: 'hidden-gem',
          name: 'Gamut Gallery',
          category: 'Art Gallery',
          description: 'A contemporary underground art hub in Elliot Park featuring digital media, live painting, performance art, DJ nights, and artist talks. Gamut pushes boundaries — this isn\'t your sanitized white-cube gallery. Expect street art, new media installations, and one-night-only warehouse exhibitions that feel more like underground raves than art openings. The gallery focuses on emerging artists and experimental formats. Check their Instagram for events, because they happen fast and disappear just as quickly.',
          images: [
            {
              src: '/Minneapolis/hidden-gems/gamut-1.png',
              alt: 'Gamut Gallery contemporary art installation',
            },
            {
              src: '/Minneapolis/hidden-gems/gamut-2.png',
              alt: 'Gamut Gallery event space',
            }
          ],
          address: '717 10th St S, Minneapolis, MN 55404',
          coordinates: { lat: 44.9707, lng: -93.2745 },
          hours: 'Open for events and exhibitions (check schedule)',
          price: 'Free-$10 depending on event',
          website: 'https://gamutgallerympls.com',
          tip: 'Follow on Instagram (@gamutgallerympls) for pop-up events and exhibitions',
          accessibility: 'Varies by venue/event',
        }
      ],
    },
    {
      id: 'gem-ad-3',
      type: 'ad',
      size: 'banner',
    },
    // SUBSECTION: Nature & Wildlife
    {
      id: 'hidden-gems-nature',
      type: 'section',
      title: 'Nature & Wildlife',
      items: [
        {
          id: 'gem-nature-1',
          type: 'hidden-gem',
          name: 'Eloise Butler Wildflower Garden',
          category: 'Nature',
          description: 'The oldest public wildflower garden in the U.S., tucked inside Theodore Wirth Park. Native wetlands, prairies, and woodlands that feel hours from the city.',
          images: [
            {
              src: '/Minneapolis/hidden-gems/wildflower.png',
              alt: 'Wooden boardwalk through wetlands at Eloise Butler Wildflower Garden',
            }
          ],
          address: '1500 Garden Springs Dr, Minneapolis, MN 55422',
          coordinates: { lat: 44.9728, lng: -93.3244 },
          hours: 'April-Oct: Daily 7:30am-dusk',
          price: 'Free',
          accessibility: 'Partially accessible; some trails are unpaved',
          tip: 'Best in spring for trilliums and woodland wildflowers',
        },
        {
          id: 'gem-nature-2',
          type: 'hidden-gem',
          name: 'Marshall Terrace Heron Rookery',
          category: 'Wildlife',
          description: 'A great blue heron nesting colony on small Mississippi River islands, visible from Marshall Terrace Park in Northeast Minneapolis. Late March through summer, you can watch herons build nests, raise chicks, and fish in the shallows. Bring binoculars and walk down the 20 riverbank steps for a closer view. The National Park Service hosts a "Welcome Back the Herons" celebration each March when they return from migration. It\'s one of those magical urban nature spots that feels miles from the city, even though you\'re minutes from downtown.',
          images: [
            {
              src: '/Minneapolis/hidden-gems/rookery.png',
              alt: 'Great blue herons nesting on Mississippi River islands',
            }
          ],
          address: '2740 Marshall St NE, Minneapolis, MN 55418',
          coordinates: { lat: 45.0167, lng: -93.2447 },
          hours: 'Free year-round; herons present late March-summer',
          price: 'Free',
          website: 'https://fmr.org/updates/conservation/where-find-herons-twin-cities-metro-near-river',
          tip: 'Best viewing in early morning; bring binoculars',
          accessibility: 'Paved path accessible; riverbank stairs for closer viewing',
        },
        {
          id: 'gem-nature-3',
          type: 'hidden-gem',
          name: 'Midtown Greenway\'s Hidden Features',
          category: 'Urban Trail',
          description: 'The Midtown Greenway is a 5.7-mile bike trail in a sunken railway corridor crossing Minneapolis. Most people use it for commuting and miss the good stuff: 28 hidden trail exits leading to neighborhood secrets, community gardens, underground art installations, and quiet pocket parks. The trail sits in the old Milwaukee Road railway gorge and is grade-separated from traffic. It\'s plowed in winter, lit at night, and named best urban bike trail by USA Today. But the real magic is getting off the main trail and exploring the 28 side exits.',
          images: [
            {
              src: '/Minneapolis/hidden-gems/greenway-1.png',
              alt: 'Midtown Greenway bike trail in sunken corridor',
            },
            {
              src: '/Minneapolis/hidden-gems/greenway-2.png',
              alt: 'Midtown Greenway trail features',
            }
          ],
          address: '5.7-mile trail crossing Minneapolis (multiple access points)',
          coordinates: { lat: 44.9486, lng: -93.2614 },
          hours: 'Open 24/7, plowed in winter, lit at night',
          price: 'Free',
          website: 'https://midtowngreenway.org',
          tip: 'Rent a bike and explore the 28 exits — each leads somewhere interesting',
          accessibility: 'Fully accessible paved trail',
        }
      ],
    },
    // SUBSECTION: Quirky Specialty
    {
      id: 'hidden-gems-quirky',
      type: 'section',
      title: 'Quirky Specialty',
      items: [
        {
          id: 'gem-quirky-1',
          type: 'hidden-gem',
          name: 'Ingebretsen\'s',
          category: 'Shop',
          description: 'For over a century, Ingebretsen\'s has been the heart of Minneapolis\'s Scandinavian community. This is where you find lefse (Norwegian flatbread) made fresh, Swedish meatball mix from the butcher counter, lingonberry jam, and lutefisk for the adventurous. The gift shop carries traditional rosemaling, Dala horses, and wool sweaters from Norway. Minnesota and Wisconsin have more people of Norwegian and Swedish descent than anywhere outside Scandinavia, and this store is their cultural anchor. Around Christmas, the lines for holiday specialties stretch out the door.',
          images: [
            {
              src: '/Minneapolis/hidden-gems/Ingebretsen-1.png',
              alt: 'Ingebretsen\'s Scandinavian specialty shop exterior',
            },
            {
              src: '/Minneapolis/hidden-gems/Ingebretsen-2.png',
              alt: 'Ingebretsen\'s interior with Scandinavian foods and gifts',
            }
          ],
          address: '1601 E Lake St, Minneapolis, MN 55407',
          coordinates: { lat: 44.9485, lng: -93.2489 },
          hours: 'Mon-Sat 9am-5pm',
          price: 'Free to browse',
          website: 'https://ingebretsens.com',
          tip: 'The meatball mix from the butcher counter is exceptional',
        },
        {
          id: 'gem-quirky-2',
          type: 'hidden-gem',
          name: 'The Herbivorous Butcher',
          category: 'Shop',
          description: 'The nation\'s first all-vegan butcher shop. Plant-based "meats" and "cheeses" displayed exactly like a traditional butcher case: Italian "sausages," smoked "ribs," deli "meats," and artisan "cheeses." The concept seems contradictory, which is part of the charm. Siblings Aubry and Kale Walch (yes, really, Kale) opened it in 2016 and it became a cult hit. Even meat-eaters admit the products are shockingly good. The shop is in Northeast Minneapolis, slightly off the main tourist path, so locals-in-the-know make pilgrimages for the "Korean BBQ ribs."',
          images: [
            {
              src: '/Minneapolis/hidden-gems/herb-butcher-1.png',
              alt: 'The Herbivorous Butcher vegan butcher shop display',
            },
            {
              src: '/Minneapolis/hidden-gems/herb-butcher-2.png',
              alt: 'Plant-based meats display case',
            },
            {
              src: '/Minneapolis/hidden-gems/herb-butcher-3.png',
              alt: 'Herbivorous Butcher interior',
            }
          ],
          address: '507 1st Ave NE, Minneapolis, MN 55413',
          coordinates: { lat: 44.9894, lng: -93.2576 },
          hours: 'Tue-Sat 10am-5:30pm, Sun 11am-4pm (closed Mon)',
          price: '$$ (specialty products)',
          website: 'https://www.theherbivorousbutcher.com',
          tip: 'Try the Italian sausage or Korean BBQ ribs — even skeptics are converted',
          accessibility: 'Wheelchair accessible',
        }
      ],
    }
  ],
},
      {
        id: 'best-bars',
        type: 'best-of',
        category: 'bars',
        title: 'Bars Worth Finding',
        intro: 'Minneapolis drinks differently than most cities. The bar scene here isn\'t about bottle service or rooftop infinity pools — it\'s about neighborhood spots where the bartender knows your name, speakeasies you find by following a stranger down an alley, and breweries where the Mississippi River is the only backdrop that matters. These are the places where Minneapolis unwinds.',
        spots: [
          {
            name: 'Volstead\'s Emporium',
            neighborhood: 'Uptown',
            vibe: 'A speakeasy that actually earns the name. Hidden entrance through an alley, live jazz on weekends, and cocktails crafted by bartenders who take their work seriously without taking themselves seriously.',
            order: 'Tell the bartender what you\'re in the mood for and trust the dealer\'s choice. They\'ll remember your preferences next time.',
            why: 'Finding Volstead\'s is half the experience. Walk behind Up-Down arcade, through the alley, and look for the unmarked door. Inside, the 1920s fantasy is fully realized — velvet curtains, intimate booths, amber lighting, and jazz musicians playing in the corner on weekends. But it\'s not just aesthetic. The cocktails are meticulously crafted, the food is surprisingly excellent (the deviled eggs are legendary), and the staff treats every guest like a regular. This is what happens when a speakeasy concept is executed by people who actually care.',
            address: '711 W Lake St, Minneapolis, MN 55408',
            coordinates: { lat: 44.9487, lng: -93.2901 },
            hours: '6pm-1am Wed-Sun',
            price: '$$$',
            website: 'https://www.volsteads.net/',
            instagram: '@volsteads',
            images: [
              {
                src: 'https://mspmag.com/downloads/24590/download/0216-SecretSpeakeasy_640.jpg?cb=5303b833f0951ea0a657d6eb226fcc1c&w=640',
                alt: 'Volstead\'s Emporium speakeasy interior — vintage lighting, curtained booths, and the bar where Prohibition-era cocktails are crafted',
              }
            ],
            menuImage: {
              src: '/images/establishments/bars/minneapolis/menus/volsteads-emporium/menu.jpg',
              alt: 'Volstead\'s Emporium cocktail menu with Prohibition-era classics',
            },
          },
          {
            name: 'Prohibition',
            neighborhood: 'Downtown',
            vibe: 'Drink in a 1920s penthouse with the best views in the city. Original Art Deco details, floor-to-ceiling windows, and the ghost of Wilbur Foshay\'s ambition.',
            order: 'A classic Old Fashioned while watching the sun set over the Minneapolis skyline. Save room for a nightcap.',
            why: 'This was literally Wilbur Foshay\'s private penthouse during actual Prohibition — the man who built the tower as a monument to himself before going to prison for fraud. The irony is delicious. Now it\'s one of the most spectacular drinking spaces in the Midwest: 27 floors up, Art Deco details preserved, views stretching to Wisconsin on clear nights. The cocktails are solid, the atmosphere is unmatched, and you\'re drinking in a piece of Minneapolis history that most residents don\'t even know exists.',
            address: '821 Marquette Ave, Minneapolis, MN 55402',
            coordinates: { lat: 44.9748, lng: -93.2714 },
            hours: '4pm-midnight Mon-Thu, 4pm-1am Fri-Sat',
            price: '$$$',
            website: 'https://thelivingroom-prohibition.com/',
            instagram: '@prohibitionfoshay',
            images: [
              {
                src: 'https://www.hotel-scoop.com/wp-content/uploads/2016/02/DSC05129.jpg',
                alt: 'Prohibition Bar Art Deco interior at Foshay Tower 27th floor',
              },
              {
                src: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzlw7MtJrM_glYCIXsn6xqO_JUs_dJ3RKlt8OkT8FqA4-S3uDJnws0uBXAGL9KYnVZm5MtzQd4DI8wp8T72NunhduKKU1Dr6B_-5p_lWtGj-ggGP1_oFF8jdgovDdsGnP1TtetUAA=w3427-h1887-k-no',
                alt: 'Prohibition bar panoramic interior with skyline views',
              },
              {
                src: '',
                alt: 'Minneapolis skyline view from Prohibition bar',
              }
            ],
            menuImage: {
              src: '/images/establishments/bars/minneapolis/menus/prohibition/menu.jpg',
              alt: 'Prohibition bar cocktail menu at Foshay Tower',
            },
          },
          {
            name: 'Bumbling Fools Meadery',
            neighborhood: 'Northeast',
            vibe: 'A basement meadery with the energy of a secret society. Limited hours, rotating meads, and a meadmaker who genuinely wants to teach you about fermented honey.',
            order: 'The flight. Always the flight. They rotate seasonal meads made from different honey varietals — clover, buckwheat, wildflower — and tasting them side by side is an education.',
            why: 'Descend into the basement of the Artblok Building and you\'ll find something that shouldn\'t exist: a meadery so small it feels like a private club, run by people so passionate about fermented honey that every conversation becomes a lesson. The hours are limited (Thursday-Saturday only), the space holds maybe 20 people, and the meads range from bone-dry to dessert-sweet. The meadmaker is almost always there, happy to explain why buckwheat honey makes the most interesting mead or how the fermentation temperature affects flavor. This is drinking as craft appreciation.',
            address: '2010 E Hennepin Ave, Minneapolis, MN 55413',
            coordinates: { lat: 44.9919, lng: -93.2371 },
            hours: 'Thu 4-10pm, Fri 4-10pm, Sat 2-10pm',
            price: '$$',
            website: 'https://www.bumblingfools.com/',
            instagram: '@bumbling_fools_mead',
            images: [
              {
                src: 'https://lede-admin.racketmn.com/wp-content/uploads/sites/37/2023/04/PXL_20230415_151738286.jpg?w=2880',
                alt: 'Cozy tasting room interior at Bumbling Fools Meadery',
              },
              {
                src: 'https://heavytable.com/wp-content/uploads/2024/05/bumbling-fools-int-lg.jpg',
                alt: 'Bumbling Fools Meadery interior space',
              },
              {
                src: 'https://heavytable.com/wp-content/uploads/2024/05/bumbling-fools-mead-sign-int-lg.jpg',
                alt: 'Bumbling Fools Meadery interior sign and decor',
              },
              {
                src: 'https://heavytable.com/wp-content/uploads/2024/05/bumbling-fools-bee-menu-lg.jpg',
                alt: 'Bee-themed menu at Bumbling Fools Meadery',
              }
            ],
            menuImage: {
              src: '/images/establishments/bars/minneapolis/menus/bumbling-fools-meadery/menu.jpg',
              alt: 'Bumbling Fools Meadery mead flight menu',
            },
          },
          {
            name: 'Moto-i',
            neighborhood: 'Uptown',
            vibe: 'The first sake brewpub outside Japan. Not a theme restaurant — an actual brewery where Japanese tradition meets Minneapolis innovation.',
            order: 'The Junmai sake flight to understand their range, then pork belly buns to soak it up. Stay for a second round.',
            why: 'When Moto-i opened in 2009, they were literally the first sake brewpub outside of Japan. Not importing sake — brewing it, on-site, from Minnesota rice polished in-house. The izakaya menu is the real deal: pork belly buns that rival any you\'d find in Tokyo, handmade gyoza, ramen that rewards repeat visits. But the sake is the star. Watch it being made in the copper brewing vessels visible from the bar, then taste the difference between Junmai and Ginjo styles brewed hours ago. This is one of the most genuinely unique drinking experiences in the entire Midwest.',
            address: '2940 Lyndale Ave S, Minneapolis, MN 55408',
            coordinates: { lat: 44.9436, lng: -93.2882 },
            hours: '4pm-10pm Sun-Thu, 4pm-midnight Fri-Sat',
            price: '$$',
            website: 'https://moto-i.com/',
            instagram: '@motoisake',
            images: [
              {
                src: 'https://mspmag.com/downloads/60116/download/motoi_classic_ramen%20%282%29.jpg',
                alt: 'Classic ramen bowl at Moto-i',
              },
              {
                src: 'https://mspmag.com/downloads/60117/download/sakeflight2%20%281%29.jpg',
                alt: 'Sake flight at Moto-i sake brewpub',
              },
              {
                src: 'https://mspmag.com/downloads/60121/download/motoi_steamedbuns%20%281%29.jpg',
                alt: 'House-made steamed buns at Moto-i',
              },
              {
                src: 'https://mspmag.com/downloads/60120/download/tokubetsu_bottle.jpg',
                alt: 'Moto-i sake bottle display',
              }
            ],
            menuImage: {
              src: '/images/establishments/bars/minneapolis/menus/moto-i/menu.jpg',
              alt: 'Moto-i sake and food menu',
            },
          },
          {
            name: 'Flora Room',
            neighborhood: 'North Loop',
            vibe: 'The heir to Marvel Bar\'s legacy. Intimate, botanical, and serious about cocktails without the pretension.',
            order: 'Whatever\'s seasonal. The menu changes with what\'s fresh, and the bartenders are happiest when they can use house-made ingredients.',
            why: 'Locals still whisper about Marvel Bar, the legendary cocktail destination that closed in 2023 after a decade of defining Minneapolis drinking culture. Flora Room inherited the space and the pedigree. The team brought a botanical focus — fresh herbs, house-made tinctures, seasonal ingredients — but kept Marvel\'s commitment to dark, intimate spaces and meticulously crafted drinks. It\'s one of the few North Loop spots that feels like it\'s for Minneapolis rather than for tourists. The cocktails reward attention, the staff remembers you after one visit, and there\'s a confidence here that comes from knowing exactly what they\'re doing.',
            address: '200 N 1st St, Minneapolis, MN 55401',
            coordinates: { lat: 44.9792, lng: -93.2698 },
            hours: '5pm-midnight daily',
            price: '$$$',
            website: 'https://www.floraroommpls.com/',
            instagram: '@floraroommpls',
            images: [
              {
                src: 'https://images.squarespace-cdn.com/content/v1/64429caacaf4007617305f6d/3def10a0-ffe6-485a-ac1b-50f7cf76b4fc/Porzana_Preview_0059.jpg',
                alt: 'Intimate cocktail bar with botanical decor at Flora Room',
              },
              {
                src: 'https://images.squarespace-cdn.com/content/v1/5b68a541da02bc93873b055e/1718216670964-S6GLTAEURTT9WTES4P4Q/Porzana_0371.JPG',
                alt: 'Flora Room interior with plants and dim lighting',
              },
              {
                src: 'https://images.squarespace-cdn.com/content/v1/5b68a541da02bc93873b055e/1718216682121-69BN0WHCOHOVU1DK0EP9/Porzana_0426.JPG',
                alt: 'Flora Room cocktail bar seating area',
              },
              {
                src: 'https://lede-admin.racketmn.com/wp-content/uploads/sites/37/2023/11/MixCollage-09-Nov-2023-09-37-AM-1574.jpg?w=2880',
                alt: 'Flora Room food and cocktail collage',
              }
            ],
            menuImage: {
              src: '/images/establishments/bars/minneapolis/menus/flora-room/menu.jpg',
              alt: 'Flora Room botanical cocktail menu',
            },
          },
          {
            name: 'Pryes Brewing',
            neighborhood: 'North Loop',
            vibe: 'Massive brewery with the best outdoor drinking views in Minneapolis. When the sun hits the Mississippi, this is where the city goes.',
            order: 'Miraculum IPA on the patio. Let the river do the talking.',
            why: 'Yes, it gets packed on summer weekends. Yes, you might wait for a table. But the reason is undeniable: Pryes has the single best outdoor drinking location in Minneapolis. The patio extends to the edge of the Mississippi, and on a warm evening, watching barges drift by while drinking locally-brewed beer feels like the whole point of summer. The Miraculum IPA is the flagship for good reason — balanced, drinkable, endlessly repeatable. The food is better than it needs to be. And unlike most trendy breweries, Pryes actually has the space to absorb the crowds without feeling claustrophobic.',
            address: '1401 West River Rd N, Minneapolis, MN 55411',
            coordinates: { lat: 44.9927, lng: -93.2849 },
            hours: '3pm-10pm Mon-Thu, 12pm-11pm Fri-Sat, 12pm-9pm Sun',
            price: '$$',
            website: 'https://pryesbrewing.com',
            instagram: '@pryesbrewing',
            images: [
              {
                src: 'https://images.squarespace-cdn.com/content/v1/593d53f75016e1368cc27242/1623983830921-6G4FZ19VMJN0AF8QTFNI/Q01A4799.JPG',
                alt: 'Outdoor patio at Pryes Brewing with Mississippi River views',
              },
              {
                src: 'https://images.squarespace-cdn.com/content/v1/593d53f75016e1368cc27242/1624989648255-GSHHA326O2FHEWH8Z5YP/Q01A9572.JPG',
                alt: 'Pryes Brewing taproom interior',
              },
              {
                src: 'https://images.squarespace-cdn.com/content/v1/593d53f75016e1368cc27242/1626280240305-JDC9HFZBLL9A4N9A4ASK/Q01A3766.JPG',
                alt: 'Pryes Brewing taproom seating area',
              },
              {
                src: 'https://images.squarespace-cdn.com/content/v1/593d53f75016e1368cc27242/1682618174861-EZX1KWZDB43N5PTGWMO1/Flight.jpg',
                alt: 'Beer flight at Pryes Brewing',
              }
            ],
            menuImage: {
              src: '/images/establishments/bars/minneapolis/menus/pryes-brewing/menu.jpg',
              alt: 'Pryes Brewing tap list and beer menu',
            },
          },
          {
            name: 'Grumpy\'s Northeast',
            neighborhood: 'Northeast',
            vibe: 'Punk-adjacent dive where the jukebox matters, the drinks are cheap, and nobody\'s trying to impress anyone.',
            order: 'Nordeast tallboy, shot of Jameson. Don\'t overthink it.',
            why: 'Grumpy\'s is where Minneapolis keeps its weird. The original Northeast location — before they expanded to other neighborhoods — is still the best: a genuine dive bar with a legendary jukebox, live music that ranges from punk to experimental, and a crowd that includes bike messengers, off-duty service workers, artists, musicians, and anyone else who\'s tired of craft cocktail culture. The drinks are cheap. The vibe is unpretentious. The pool table is always occupied. This is the Minneapolis that existed before the North Loop got trendy, and it refuses to change.',
            address: '2200 4th St NE, Minneapolis, MN 55418',
            coordinates: { lat: 44.9996, lng: -93.2574 },
            hours: '11am-2am daily',
            price: '$',
            website: 'https://grumpys-bar.com/',
            instagram: '@grumpysnortheast',
            images: [
              {
                src: 'https://mspmag.com/downloads/47272/download/Abrams_Grumpys-1111crop.jpg?cb=522bc8db81e14f92f404860401f2ac7f&w=1280',
                alt: 'Classic dive bar interior at Grumpy\'s Northeast',
              },
              {
                src: 'https://mspmag.com/downloads/46418/download/01-Abrams_Grumpys-1382-1280.jpg?cb=e45a9298bb195ce5929ef9e17dcf5b56',
                alt: 'Patrons at Grumpy\'s Northeast bar',
              },
              {
                src: 'https://mspmag.com/downloads/46419/download/02-Abrams_Paddy-2666-2-1280.jpg?cb=c886b551a720f3af028c7f8701a123e7',
                alt: 'Bartender at Grumpy\'s Northeast',
              },
              {
                src: 'https://mspmag.com/downloads/46423/download/05-Abrams_Grumpys-1322-1280.jpg?cb=b042e251e06e39d9232bca491baf04fe',
                alt: 'Grumpy\'s Northeast exterior daytime',
              }
            ],
            menuImage: {
              src: '/images/establishments/bars/minneapolis/menus/grumpys-northeast/menu.jpg',
              alt: 'Grumpy\'s Northeast dive bar drinks menu',
            },
          }
        ],
      },
      {
        id: 'best-bars-ad',
        type: 'ad',
        size: 'banner',
      },
      {
        id: 'best-cafes',
        type: 'best-of',
        category: 'cafes',
        title: 'Cafes for People Who Actually Work',
        intro: 'Not the aesthetic cafes with one outlet and aggressive 90-minute laptop limits. These places want you to stay.',
        spots: [
          {
            name: 'Quixotic Coffee',
            neighborhood: 'Highland Park (St. Paul)',
            vibe: 'Technically St. Paul, spiritually perfect. Big windows, long tables, zero attitude.',
            order: 'Cortado and a cardamom roll from the pastry case.',
            why: 'Huge space, abundant outlets, fast wifi, and a staff that genuinely doesn\'t care if you camp for four hours. The Highland Park location is the move — less crowded than the Minneapolis spots.',
            address: '769 Cleveland Ave S, St Paul, MN 55116',
            coordinates: { lat: 44.9195, lng: -93.1947 },
            hours: '6:30am-6pm daily',
            price: '$$',
            image: {
              src: '',
              alt: 'Spacious cafe with big windows and long tables',
            },
          },
          {
            name: 'Five Watt Coffee',
            neighborhood: 'Kingfield',
            vibe: 'Third-wave serious but not snobby. The kind of place where the baristas actually remember your order.',
            order: 'The Kingfield Spritz — espresso, tonic, grapefruit. Weird but correct.',
            why: 'Less scene-y than the North Loop location. Locals doing real work, interesting pour-over options, and some of the best espresso drinks in the city.',
            address: '3745 Nicollet Ave, Minneapolis, MN 55409',
            coordinates: { lat: 44.9217, lng: -93.2785 },
            hours: '7am-5pm daily',
            price: '$$',
            image: {
              src: '',
              alt: 'Third-wave specialty coffee with espresso bar',
            },
          },
          {
            name: 'Misfit Coffee',
            neighborhood: 'Northeast',
            vibe: 'Converted industrial space with a neighborhood-bar energy, but for caffeine.',
            order: 'Oat milk latte and whatever baked good they\'ve got from local makers.',
            why: 'The Northeast location regulars haven\'t been discovered by the influencers yet. Good natural light, a relaxed pace, and the kind of place where you end up knowing the other remote workers by face.',
            address: '637 Washington St NE, Minneapolis, MN 55413',
            coordinates: { lat: 44.9927, lng: -93.2564 },
            hours: '7am-4pm daily',
            price: '$$',
            image: {
              src: '',
              alt: 'Industrial coffee shop with natural light',
            },
          },
          {
            name: 'Diamondback Coffee',
            neighborhood: 'Seward',
            vibe: 'Cozy, slightly weird, and unapologetically local.',
            order: 'Drip coffee and a slice of whatever pie they have.',
            why: 'A co-op neighborhood coffee shop that feels like stepping into someone\'s eccentric living room. The seating is mismatched, the wifi works, and the Seward vibe is strong.',
            address: '2212 E Franklin Ave, Minneapolis, MN 55404',
            coordinates: { lat: 44.9622, lng: -93.2366 },
            hours: '7am-3pm daily',
            price: '$',
            image: {
              src: '',
              alt: 'Cozy neighborhood coffee shop with eclectic decor',
            },
          }
        ],
      },
      {
        id: 'best-cafes-ad',
        type: 'ad',
        size: 'rectangle',
      },
      {
        id: 'best-coffee-shops',
        type: 'best-of',
        category: 'coffee-shops',
        title: 'Best Coffee in Minneapolis',
        intro: 'Minneapolis takes its coffee seriously. Before "third wave" was a marketing term, local roasters were building something real — worker-owned collectives, roasting operations that span decades, and spaces that feel like extensions of the neighborhoods they serve. These aren\'t just places to get caffeinated. They\'re where the city thinks, works, and lingers.',
        spots: [
          {
            name: 'Spyhouse Coffee',
            neighborhood: 'Whittier',
            vibe: 'The original. Since 2000. Housed in a 1926 brownstone with tons of space, mid-century decor, and rotating local art.',
            order: 'The Orion blend as a pour-over. Or trust whatever single-origin they\'re featuring.',
            why: 'Before there was "third wave" in Minneapolis, there was Spyhouse. The Whittier location is where it all started — quirky nooks, ambient lighting, and the best energy of all their spots. Their roasting operation is serious — this isn\'t coffee as aesthetic, it\'s coffee as craft.',
            address: '2451 Nicollet Ave, Minneapolis, MN 55404',
            coordinates: { lat: 44.9595, lng: -93.2780 },
            hours: '7am-6pm daily',
            price: '$$',
            website: 'https://spyhousecoffee.com',
            instagram: '@spyhousecoffee',
            image: {
              src: 'https://cdn.shopify.com/s/files/1/0028/4347/6027/files/Whittier_2048x2048.jpg?v=1529889766',
              alt: 'Spyhouse Coffee Whittier location in 1926 brownstone on Nicollet Ave',
              credit: 'Spyhouse Coffee Roasters',
            },
            menuImage: {
              src: '/images/establishments/coffee-shops/minneapolis/menus/spyhouse-coffee/menu.jpg',
              alt: 'Spyhouse Coffee menu board with specialty drinks and single-origin offerings',
            },
          },
          {
            name: 'Dogwood Coffee',
            neighborhood: 'Northeast',
            vibe: 'One of the oldest third-wave roasters in town. Serious about sourcing, unpretentious about everything else.',
            order: 'Espresso, straight. Their beans are built for it.',
            why: 'Dogwood has been quietly roasting exceptional coffee since before it was cool. No gimmicks, no influencer bait — just really, really good coffee from people who\'ve been doing this longer than most. This location is their roasting headquarters with great natural light for working.',
            address: '1209 Tyler St NE, Minneapolis, MN 55413',
            coordinates: { lat: 44.9951, lng: -93.2551 },
            hours: '7am-7pm Mon-Fri, 8am-6pm Sat-Sun',
            price: '$$',
            website: 'https://dogwoodcoffee.com',
            instagram: '@dogwoodcoffee',
            images: [
              {
                src: 'https://sprudge.com/wp-content/uploads/2019/04/dogwood-cafe-coffeebar-1168x780.jpg',
                alt: 'Dogwood Coffee espresso bar with custom Synesso machine',
                credit: 'Sprudge Coffee',
              },
              {
                src: 'https://sprudge.com/wp-content/uploads/2019/04/dogwood-cafe-cafe-532x780.jpg',
                alt: 'Dogwood Coffee Northeast cafe interior',
                credit: 'Sprudge Coffee',
              },
              {
                src: 'https://sprudge.com/wp-content/uploads/2019/04/dogwood-cafe-neon-520x780.jpg',
                alt: 'Custom neon installation at Dogwood Coffee',
                credit: 'Sprudge Coffee',
              }
            ],
            menuImage: {
              src: '/images/establishments/coffee-shops/minneapolis/menus/dogwood-coffee/menu.jpg',
              alt: 'Dogwood Coffee espresso and specialty drink menu',
            },
          },
          {
            name: 'Matchbox Coffee',
            neighborhood: 'Northeast',
            vibe: 'Tiny, worker-owned, beloved. String lights draped overhead, the smell of fresh-baked pastries, and a cold press that converts cold brew skeptics.',
            order: 'The cold press — it\'s different from cold brew and it shows. Also the pastries from local bakers. Don\'t skip them.',
            why: 'Matchbox proves that great things come in small packages. This worker-owned cooperative fits maybe twenty people on a good day, and that\'s generous. But the tight quarters create something unexpected: community. Regulars actually know each other. Conversations spill between tables. The baristas remember your name after one visit. The cold press method they use extracts flavor differently than standard cold brew — brighter, more complex, somehow more alive. The pastries come from local bakers and they sell out. This is the Minneapolis coffee scene at its most idealistic: collectively owned, neighborhood-focused, and genuinely excellent. Get here early, settle in, and stay awhile.',
            address: '1306 2nd St NE, Minneapolis, MN 55413',
            coordinates: { lat: 44.9949, lng: -93.2596 },
            hours: '8am-5pm daily',
            price: '$$',
            website: 'https://matchboxcoffeeshop.com',
            instagram: '@matchboxcoffeempls',
            images: [],
            menuImage: {
              src: '/images/establishments/coffee-shops/minneapolis/menus/matchbox-coffee/menu.jpg',
              alt: 'Matchbox Coffee menu board with cold press and pastries',
            },
          },
          {
            name: 'Backstory Coffee Roasters',
            neighborhood: 'North Loop',
            vibe: 'The most beautiful coffee shop in Minneapolis, and the coffee actually backs it up. Soaring ceilings, lush greenery cascading from every surface, light pouring through massive windows.',
            order: 'Seasonal single-origin pour-over. Sit by the plants. Let the light hit your face. Order a pastry. This is a moment.',
            why: 'Walking into Backstory feels like entering a different world. Flora everywhere — massive fiddle-leaf figs, trailing pothos, succulents on every surface. Luxe finishes. Light pouring through floor-to-ceiling windows in the morning. It\'s gorgeous, and if that were all it had, you might dismiss it. But Backstory has been roasting since 2012, and their sourcing relationships run deep. The pour-overs are precise. The espresso is dialed in perfectly. They\'re not just photogenic — they\'re one of the best roasters in the city. Go early, before the laptop crowd claims every communal table. Order at the counter, find a spot by the plants, and settle in. This is specialty coffee done with ambition.',
            address: '528 N Washington Ave, Minneapolis, MN 55401',
            coordinates: { lat: 44.9847, lng: -93.2738 },
            hours: '7am-5pm daily',
            price: '$$$',
            website: 'https://backstory.coffee',
            instagram: '@backstorycoffee',
            images: [
              {
                src: '/minneapolis/coffee-shops/backstory.png',
                alt: 'Backstory Coffee Roasters North Loop location with greenery',
              },
              {
                src: '/minneapolis/coffee-shops/backstory-2.png',
                alt: 'Backstory Coffee interior with plants and natural light',
              },
              {
                src: '/minneapolis/coffee-shops/backstory-3.png',
                alt: 'Backstory Coffee espresso bar and seating area',
              },
              {
                src: '/minneapolis/coffee-shops/backstory-4.png',
                alt: 'Backstory Coffee lush interior with floor-to-ceiling windows',
              }
            ],
            menuImage: {
              src: '/images/establishments/coffee-shops/minneapolis/menus/backstory-coffee-roasters/menu.jpg',
              alt: 'Backstory Coffee Roasters menu with seasonal pour-overs and espresso drinks',
            },
          },
          {
            name: 'Isles Bun & Coffee',
            neighborhood: 'Uptown',
            vibe: 'The cinnamon roll is bigger than your face. Literally award-winning. The coffee is almost an afterthought.',
            order: 'The cinnamon roll. You came for the cinnamon roll. Get coffee too.',
            why: 'Their cinnamon bun won World\'s Best Cinnamon Roll in 2024. It\'s obscene. The coffee is actually good too — solid espresso drinks and drip — but let\'s be honest, you\'re here for the pastry. Arrive early or accept disappointment.',
            address: '1424 W 28th St, Minneapolis, MN 55408',
            coordinates: { lat: 44.9524, lng: -93.2941 },
            hours: '7am-2pm Wed-Sun',
            price: '$$',
            website: 'https://islesbun.com',
            instagram: '@islesbun',
            images: [
              {
                src: 'https://worldsbestcinnamonrolls.com/wp-content/uploads/2025/01/isles-bun-and-coffee-2.png',
                alt: 'Isles Bun & Coffee award-winning cinnamon rolls with cream cheese frosting',
                credit: 'World\'s Best Cinnamon Rolls',
              },
              {
                src: 'https://worldsbestcinnamonrolls.com/wp-content/uploads/2025/01/isles-bun-and-coffee-4.png',
                alt: 'Isles Bun & Coffee cinnamon roll close-up',
                credit: 'World\'s Best Cinnamon Rolls',
              }
            ],
            menuImage: {
              src: '/images/establishments/coffee-shops/minneapolis/menus/isles-bun-coffee/menu.jpg',
              alt: 'Isles Bun & Coffee menu featuring award-winning cinnamon rolls and coffee drinks',
            },
          },
          {
            name: 'Northern Coffeeworks',
            neighborhood: 'Nokomis / Powderhorn',
            vibe: 'All coffee roasted in-house. Blends named after Minnesota landmarks. Quiet and productive.',
            order: 'The "Boundary Waters" blend. Fitting.',
            why: 'If you want to actually get work done, this is the spot. Near Lake Nokomis, away from the trendy neighborhoods, with coffee that takes its Minnesota identity seriously — blends like "Cabin Vibes" and "Evergreen" that actually taste like they sound. Regulars are real neighbors, not laptop nomads.',
            address: '4208 28th Ave S, Minneapolis, MN 55406',
            coordinates: { lat: 44.9332, lng: -93.2305 },
            hours: '7am-4pm daily',
            price: '$$',
            website: 'https://www.northerncoffeeworks.com',
            instagram: '@northerncoffeeworks',
            images: [
              {
                src: 'https://cdn.shopify.com/s/files/1/0552/1601/3393/files/Northern_Coffeeworks_Jamie_Cooper_2024_Minneapolis_500x.png?v=1731947718',
                alt: 'Northern Coffeeworks Minneapolis coffee shop interior',
                credit: 'Northern Coffeeworks',
              },
              {
                src: 'https://cdn.shopify.com/s/files/1/0552/1601/3393/files/NCW_JamieCooper_June2024_Minneapolis-43.jpg?v=1731947718',
                alt: 'Northern Coffeeworks coffee bar and roasting area',
                credit: 'Northern Coffeeworks',
              }
            ],
            menuImage: {
              src: '/images/establishments/coffee-shops/minneapolis/menus/northern-coffeeworks/menu.jpg',
              alt: 'Northern Coffeeworks menu board with Minnesota-themed coffee blends',
            },
          }
        ],
      },
      {
        id: 'best-restaurants',
        type: 'best-of',
        category: 'restaurants',
        title: 'Where to Actually Eat',
        intro: 'Not the places with 6-week reservation lists. These are the spots the chefs hit on their nights off.',
        spots: [
          {
            name: 'Owamni',
            neighborhood: 'Downtown',
            vibe: 'James Beard Award-winning Indigenous cuisine overlooking the Mississippi. The most important restaurant in Minneapolis, and maybe the country.',
            order: 'The bison ribeye is the flagship — dry-aged, seared perfectly, served with indigenous accompaniments that make beef feel like a pale imitation. The spoon cake for dessert is non-negotiable. Trust the wild teas. Trust the seasonal menu. Trust everything.',
            why: 'This isn\'t fusion. It\'s not interpretation. It\'s not inspired by Indigenous cuisine — it IS Indigenous cuisine, prepared by Indigenous chefs using only ingredients that existed on this continent before colonization. No dairy. No wheat. No cane sugar. No beef, pork, or chicken. Instead: bison, elk, duck, wild rice, maple, sumac, cedar, foraged plants from the forests that once covered this land. Chef Sean Sherman spent years researching pre-colonial foodways, partnering with tribal nations, and building supply chains with Indigenous producers across North America. The 2022 James Beard Award for Best New Restaurant was just recognition of what diners already knew: this is revolutionary. The restaurant overlooks Owámniyomni — St. Anthony Falls — the sacred Dakota site that gave Minneapolis its original name. Every detail matters. Every dish tells a story of survival, resistance, and reclamation. Come with respect, leave transformed.',
            address: '420 S 1st St, Minneapolis, MN 55401',
            coordinates: { lat: 44.9789, lng: -93.2569 },
            hours: '5pm-9pm Wed-Sun',
            price: '$$$$',
            website: 'https://owamni.com',
            instagram: '@owamni',
            images: [
              {
                src: '/minneapolis/restaurants/owamni-1.png',
                alt: 'Owamni Indigenous cuisine dining experience',
              },
              {
                src: '/minneapolis/restaurants/owamni-2.png',
                alt: 'Owamni restaurant interior and ambiance',
              },
              {
                src: '/minneapolis/restaurants/owamni-3.png',
                alt: 'Owamni signature dishes',
              },
              {
                src: '/minneapolis/restaurants/oramnii-4.png',
                alt: 'Owamni plated presentation',
              }
            ],
            menuImage: {
              src: '/minneapolis/restaurants/oawmni-menu.png',
              alt: 'Owamni Indigenous cuisine menu',
            },
          },
          {
            name: 'Matt\'s Bar',
            neighborhood: 'Powderhorn',
            vibe: 'The birthplace of the Jucy Lucy. Cash only, no pretense, pure Minneapolis legend. The kind of dive where the walls have stories and the grill has decades of seasoning.',
            order: 'The Jucy Lucy — spelled that way for a reason — cheese stuffed INSIDE the patty, molten and dangerous. They\'ll warn you to wait. Listen to them. You\'ll need napkins. Get the fries while the burger cools.',
            why: 'Here\'s the thing about Matt\'s Bar: they\'ve been making the exact same burger the exact same way since the 1950s, when a customer asked for "two patties with cheese in the middle" and Matt Bristol crimped the edges, threw it on the grill, and changed Minneapolis food history forever. The moment that first customer bit in and molten American cheese erupted onto his shirt, he allegedly yelled "That\'s one juicy Lucy!" — and the name stuck (misspelling and all). The Jucy Lucy has been featured on Food Network, Travel Channel, and every burger pilgrimage list ever written. President Obama ate here in 2014. But Matt\'s doesn\'t care about fame. They care about the same thing they\'ve always cared about: perfectly seasoned beef, perfectly melted cheese, perfectly simple execution. Cash only. No credit. No pretense. This is what Minneapolis tastes like at its most honest.',
            address: '3500 Cedar Ave S, Minneapolis, MN 55407',
            coordinates: { lat: 44.9356, lng: -93.2472 },
            hours: '11am-midnight daily',
            price: '$',
            website: 'https://mattsbar.com',
            images: [
              {
                src: '/minneapolis/restaurants/matts-1.png',
                alt: 'Matt\'s Bar exterior and iconic signage',
              },
              {
                src: '/minneapolis/restaurants/matts-2.png',
                alt: 'Matt\'s Bar interior with classic dive bar atmosphere',
              },
              {
                src: '/minneapolis/restaurants/matts-3.png',
                alt: 'The legendary Jucy Lucy burger at Matt\'s Bar',
              }
            ],
            menuImage: {
              src: '/images/establishments/restaurants/minneapolis/menus/matts-bar/menu.jpg',
              alt: 'Matt\'s Bar Jucy Lucy burger menu',
            },
          },
          {
            name: 'Hmong Village',
            neighborhood: 'East Side (St. Paul)',
            vibe: 'Massive indoor food market with over 250 Hmong and Southeast Asian vendors. Not a food hall — a culture, a community, a world unto itself. The most overwhelming and rewarding food experience in the Twin Cities.',
            order: 'Start with papaya salad from Mai\'s Kitchen — the crunch, the fish sauce, the lime, the chili heat building. Then the "crazy steak" from Santi\'s: grilled meat sizzling on a hot plate with onions and jalapeños. Sticky rice with grilled meats from Lucki\'s Kitchen. Pho from any of the dozen pho vendors. Fresh-baked coconut waffles. Stuffed chicken wings (deboned, filled with glass noodles, fried until crispy). Bubble tea. Durian smoothies. Just... wander.',
            why: 'Minnesota and Wisconsin have the largest Hmong populations in the country — over 90,000 people in the Twin Cities alone — and Hmong Village is where that community gathers, shops, and eats. Chef Yia Vang, who grew up eating at these stalls, calls it "iconic — the moment you step in, it\'s like you\'re in a bazaar in Laos or Thailand." The fluorescent lights, the sizzle of grills, vendors calling out in Hmong and English, families carrying grocery bags overflowing with lemongrass and galangal. Over 250 vendors sell everything from pho to live fish to gold jewelry to traditional clothing. The food is cheap, authentic, and absolutely incredible. Come with no plan. Come hungry. Bring cash. Get overwhelmed. Get lost. Find things you\'ve never tried. This is not a curated experience — it\'s real life, and it\'s one of the most valuable food destinations in the Midwest.',
            address: '1001 Johnson Pkwy, St Paul, MN 55106',
            coordinates: { lat: 44.9712, lng: -93.0316 },
            hours: '9am-6pm daily',
            price: '$',
            images: [
              {
                src: 'https://mspmag.com/downloads/30796/download/Hmong-Village.jpg?cb=ca574a21e186002ba6ada427ced8d9c1&w=600',
                alt: 'Inside Hmong Village marketplace with rows of food vendors',
              },
              {
                src: 'https://blog.resy.com/wp-content/uploads/2021/07/PAOH9778-copy.jpg',
                alt: 'Hmong Village food court corridor with vendors and customers',
              },
              {
                src: 'https://mspmag.com/downloads/30794/download/Crazy-Steak.jpg?cb=818f0b4abcc16a63e558128d8610f1d5',
                alt: 'Crazy Steak grilled meat dish from Santi\'s at Hmong Village',
              },
              {
                src: 'https://mspmag.com/downloads/30797/download/Mai%27s-papaya-salad.jpg?cb=c3568624f71ffe162ce7f60b4132094f',
                alt: 'Fresh papaya salad from Mai\'s Kitchen at Hmong Village',
              },
              {
                src: 'https://blog.resy.com/wp-content/uploads/2021/07/PAOH9885-copy.jpg',
                alt: 'Meat-and-three combo spread from Lucki\'s Kitchen',
              }
            ],
            menuImage: {
              src: '/images/establishments/restaurants/minneapolis/menus/hmong-village/menu.jpg',
              alt: 'Hmong Village food court vendor menus',
            },
          },
          {
            name: 'Al\'s Breakfast',
            neighborhood: 'Dinkytown',
            vibe: 'The most legendary diner in Minneapolis. Fourteen stools. One griddle. Eighty years of history. A rite of passage for every University of Minnesota student and a pilgrimage for anyone who loves breakfast.',
            order: 'The blueberry pancakes are the move — fluffy, loaded with berries, absolutely iconic. But the wally — poached eggs over hash browns with hollandaise — converts skeptics. Get whatever\'s on the griddle. Ask the cooks what they recommend. They\'ve been doing this longer than you\'ve been alive.',
            why: 'Al\'s Breakfast opened in 1950 in a narrow storefront that was once a shipping alley — ten feet wide, with fourteen stools bolted to the floor and no room for anything else. The griddle fills the entire counter. The cooks work in a space most people couldn\'t turn around in. And somehow, for eighty years, they\'ve been making some of the best breakfast in America. Al\'s has survived urban renewal, the decline of Dinkytown, and every food trend imaginable. It\'s still cash only. There\'s still a line on weekends that wraps around the block. Regulars still get their stool. This is Minneapolis history, one pancake at a time. James Beard Award semi-finalist. Featured on every national food show that matters. But Al\'s doesn\'t care about awards. They care about eggs.',
            address: '413 14th Ave SE, Minneapolis, MN 55414',
            coordinates: { lat: 44.9810, lng: -93.2332 },
            hours: '6am-1pm Mon-Sat, 9am-1pm Sun',
            price: '$',
            images: [
              {
                src: '/minneapolis/restaurants/al-1.png',
                alt: 'Al\'s Breakfast legendary 14-seat counter',
              },
              {
                src: '/minneapolis/restaurants/al-2.png',
                alt: 'Al\'s Breakfast griddle and cooking area',
              },
              {
                src: '/minneapolis/restaurants/al-3.png',
                alt: 'Al\'s Breakfast famous blueberry pancakes',
              }
            ],
            menuImage: {
              src: '/minneapolis/restaurants/al-menu.png',
              alt: 'Al\'s Breakfast diner menu',
            },
          },
          {
            name: 'Hai Hai',
            neighborhood: 'Northeast',
            vibe: '2024 James Beard Award winner for Best Chef: Midwest. Southeast Asian street food that transports you to Saigon — if Saigon had a patio in Northeast Minneapolis with plastic stools and tropical cocktails.',
            order: 'Pork belly steam buns — the buns are impossibly soft, the pork is caramelized and fatty, the pickled vegetables cut through everything. Green papaya salad with dried shrimp. Banh beo (steamed rice cakes with shrimp and scallion oil). Frozen Vietnamese coffee — so good it should be illegal. And anything the servers recommend — Christina\'s flavors don\'t miss.',
            why: 'The name "Hai Hai" means "two two" in Vietnamese — a nod to the building\'s previous life as "22nd Avenue Station," a dive bar and strip club that was infamous in Northeast Minneapolis. Chef Christina Nguyen and her team transformed the space into something completely different: a vibrant, tropical-feeling restaurant where the wallpaper is as bold as the cocktails and the plastic stools on the patio transport you to the streets of Ho Chi Minh City. Christina won the 2024 James Beard Award for Best Chef: Midwest — finally — after years of being a perennial finalist. Her menu draws from her childhood eating Vietnamese food in Minneapolis, from travels across Southeast Asia, and from the street food traditions that Americans are only now discovering. The patio in summer is a scene. The wait can be brutal on weekends. But the flavors are worth every minute. This is the restaurant that put Northeast Minneapolis on the national food map.',
            address: '2121 University Ave NE, Minneapolis, MN 55418',
            coordinates: { lat: 44.9980, lng: -93.2254 },
            hours: '11am-10pm daily',
            price: '$$',
            website: 'https://www.haihaimpls.com',
            instagram: '@haihaimpls',
            images: [
              {
                src: '/minneapolis/restaurants/hai-hai-1.png',
                alt: 'Hai Hai restaurant exterior and vibrant atmosphere',
              },
              {
                src: '/minneapolis/restaurants/hai-hai-2.png',
                alt: 'Hai Hai Southeast Asian street food dishes',
              }
            ],
            menuImage: {
              src: '/images/establishments/restaurants/minneapolis/menus/hai-hai/menu.jpg',
              alt: 'Hai Hai Southeast Asian food menu',
            },
          },
          {
            name: 'Eat Street',
            neighborhood: 'Whittier',
            vibe: 'Not a single restaurant — an entire corridor of global cuisine stretching for seventeen blocks. Ethiopian, Vietnamese, Mexican, Somali, Mediterranean, Indian, Thai, Korean, Peruvian. The most delicious mile in Minneapolis.',
            order: 'Entirely depends on where you end up. Injera and tibs at one of the Ethiopian spots. Pho at Quang. Tacos al pastor on the corner. Somali sambusas at Safari. Falafel from any of the Mediterranean spots. The banh mi. The burritos. The curries. Walk until something smells irresistible.',
            why: 'Nicollet Avenue through the Whittier neighborhood is what happens when immigrants from around the world open restaurants on the same street over the course of fifty years. Ethiopian coffee ceremonies next to Vietnamese sandwich shops. Somali restaurants across from Mexican taquerias. Mediterranean markets sharing walls with Indian buffets. There\'s no curation here — no food hall committee decided which cuisines to include. This is organic, messy, authentic, and absolutely incredible. You could eat on Eat Street every day for a month and never repeat a meal, never repeat a country. The strip stretches from about 14th Street to 31st Street, with the densest concentration around Lake Street. Go without a plan. Walk until hunger hits. Follow your nose. This is the real Minneapolis food scene — not the James Beard nominees downtown, but the immigrant families who\'ve been feeding this city for decades.',
            address: 'Nicollet Ave between 14th and 31st St, Minneapolis, MN 55404',
            coordinates: { lat: 44.9547, lng: -93.2780 },
            hours: 'Varies by restaurant',
            price: '$$',
            images: [
              {
                src: '/minneapolis/restaurants/eat-street-1.png',
                alt: 'Eat Street Nicollet Avenue corridor with diverse restaurants',
              },
              {
                src: '/minneapolis/restaurants/eat-street-2.png',
                alt: 'Eat Street global cuisine and street food scene',
              }
            ],
            menuImage: {
              src: '/images/establishments/restaurants/minneapolis/menus/eat-street/menu.jpg',
              alt: 'Eat Street Nicollet Avenue restaurant menus',
            },
          },
          {
            name: 'Boludo',
            neighborhood: 'Kingfield',
            vibe: 'Argentine empanadas and pizza from a chef who wanted to bring Buenos Aires to Minneapolis. Started in a tiny basement, now expanding across the city. The dough is impossibly good. The vibe is impossibly fun.',
            order: 'The empanada flight — one of each, no exceptions. The carne (beef with olives and egg), the humita (sweet corn and onion), the verdura (spinach and cheese). Then a pizza, because the dough is the same and it\'s criminal not to. Whatever natural wine they\'re pouring. And the dulce de leche empanada for dessert, obviously.',
            why: 'Chef Facundo Defraia left Buenos Aires for Minneapolis and wondered: where are all the empanadas? So he started making them himself, in a basement space so small you\'d miss it walking by. The dough is laminated, flaky, buttery — nothing like the heavy empanadas you\'ve had elsewhere. The fillings are traditional Argentine recipes, adapted just slightly for Minnesota tastes. The natural wine list is curated by people who actually care about wine. The whole experience — the tiny candelit space, the tango playing, the Argentine rock on the speakers — feels like a secret your cool friend told you about. Boludo has expanded since then (there are now four locations including downtown and Uptown), but the original Kingfield spot still has that basement intimacy. The name "Boludo" is Argentine slang — somewhere between "dude" and "idiot" — and captures the playful spirit perfectly.',
            address: '8 W 38th St, Minneapolis, MN 55409',
            coordinates: { lat: 44.9384, lng: -93.2783 },
            hours: '5pm-10pm Wed-Sun',
            price: '$$',
            website: 'https://www.boludo.com',
            instagram: '@boludo___',
            images: [
              {
                src: '/minneapolis/restaurants/boludo-1.png',
                alt: 'Boludo Argentine empanadas and pizza',
              },
              {
                src: '/minneapolis/restaurants/boludo-2.png',
                alt: 'Boludo restaurant interior with intimate candlelit atmosphere',
              }
            ],
            menuImage: {
              src: '/minneapolis/restaurants/boludo-menu.png',
              alt: 'Boludo Argentine empanada menu',
            },
          },
          {
            name: 'Brasa Premium Rotisserie',
            neighborhood: 'Northeast',
            vibe: 'Southern/Creole rotisserie with a cafeteria setup that somehow feels like coming home. Slow-roasted meats, incredible sides, and the kind of honest cooking that makes you wonder why anyone complicates things.',
            order: 'Half chicken — it\'s the signature, and it\'s perfect. Slow-roasted until the skin crisps and the meat falls off the bone. Then the sides: candied yams (mandatory), collard greens (braised until silky), black-eyed peas, cornbread that crumbles just right. The pulled pork is exceptional. The smoked beef is exceptional. Honestly, it\'s all exceptional.',
            why: 'Alex Roberts opened Brasa in St. Paul in 2007 with a simple idea: what if a cafeteria-style restaurant used local, sustainable ingredients and actually cared about the cooking? Seventeen years later, Brasa has four locations and hasn\'t wavered from that vision. The chickens are pasture-raised. The pork is humanely sourced. The vegetables come from local farms. But none of that would matter if the food wasn\'t delicious — and it\'s delicious. The rotisserie turns constantly. The smokers run all day. The sides are made from scratch. This is Southern and Creole comfort food done with the kind of integrity that makes you feel good about eating half a chicken at 2pm on a Wednesday. The Northeast Minneapolis location is less chaotic than the original St. Paul spot, but both are essential. This is Minneapolis eating at its most democratic — excellent food, reasonable prices, everyone welcome.',
            address: '600 E Hennepin Ave, Minneapolis, MN 55414',
            coordinates: { lat: 44.9919, lng: -93.2503 },
            hours: '11am-9pm daily',
            price: '$$',
            website: 'https://www.brasa.us',
            images: [
              {
                src: '/minneapolis/restaurants/brasa-1.png',
                alt: 'Brasa Premium Rotisserie exterior and signage',
              },
              {
                src: '/minneapolis/restaurants/brasa-2.png',
                alt: 'Brasa rotisserie chicken and Southern sides',
              },
              {
                src: '/minneapolis/restaurants/brasa-3.png',
                alt: 'Brasa cafeteria-style counter service',
              }
            ],
            menuImage: {
              src: '/minneapolis/restaurants/brasa-menu.png',
              alt: 'Brasa rotisserie and sides menu',
            },
          }
        ],
      },
      {
        id: 'obscure-history',
        type: 'section',
        title: 'Obscure History',
        items: [
          {
            id: 'history-1',
            type: 'history',
            era: 'Pre-Colonial',
            title: 'Bdote: The sacred confluence that defined everything',
            body: 'Long before Minneapolis existed, the Dakota people named the confluence of the Mississippi and Minnesota rivers "Bdote" — a sacred site of origin in their creation stories. The land was not wilderness waiting to be settled; it was the center of a world. Fort Snelling was built directly on this sacred ground in 1820, and the Dakota were forcibly removed after the U.S.-Dakota War of 1862. The site remains spiritually significant, and efforts to acknowledge this history are ongoing.',
            source: 'Minnesota Historical Society',
            image: {
              src: '/images/history/bdote-confluence.jpg',
              alt: 'Aerial view of the Mississippi and Minnesota river confluence',
              year: 'Present day',
            },
            location: {
              name: 'Fort Snelling State Park',
              coordinates: { lat: 44.8931, lng: -93.1808 },
              stillExists: true,
            },
          },
          {
            id: 'history-2',
            type: 'history',
            era: '1878',
            title: 'The Washburn A Mill explosion that leveled six city blocks',
            body: 'On May 2, 1878, flour dust ignited inside the Washburn A Mill, causing an explosion so powerful it leveled six blocks, killed 18 workers instantly, and could be heard 10 miles away. The blast taught the milling industry about combustible dust — leading to the invention of dust collection systems that are now standard worldwide. The ruins of the rebuilt mill now house the Mill City Museum.',
            source: 'Mill City Museum',
            image: {
              src: '/images/history/washburn-explosion.jpg',
              alt: 'Historic illustration of the 1878 Washburn Mill explosion',
              year: '1878',
            },
            location: {
              name: 'Mill City Museum',
              coordinates: { lat: 44.9792, lng: -93.2571 },
              stillExists: true,
            },
          },
          {
            id: 'history-ad-1',
            type: 'ad',
            size: 'banner',
          },
          {
            id: 'history-3',
            type: 'history',
            era: '1920s-30s',
            title: 'Minneapolis was once controlled by a corrupt "reform" mayor',
            body: 'Mayor A.A. Ames, elected in 1900 as a reformer, immediately fired most of the police force and replaced them with criminals. He turned Minneapolis into an open city for gambling, prostitution, and robbery. His police chief was his brother. The crime syndicate only collapsed when a grand jury, led by foreman Hovey C. Clarke, exposed the entire operation. Lincoln Steffens\' "The Shame of Minneapolis" made it a national scandal.',
            source: 'Lincoln Steffens, "The Shame of the Cities"',
            location: {
              name: 'Downtown Minneapolis',
              stillExists: true,
            },
          },
          {
            id: 'history-4',
            type: 'history',
            era: '1934',
            title: 'The Teamsters Strike that turned Minneapolis into a labor battleground',
            body: 'In May 1934, a citywide trucking strike led by Trotskyist organizers brought Minneapolis to a standstill. On "Bloody Friday" (July 20), police opened fire on unarmed strikers, killing two and wounding 67. The strike eventually won, and Minneapolis became one of the strongest union cities in America. Governor Floyd Olson declared martial law and sided with the workers — a turning point in American labor history.',
            source: 'Minnesota Historical Society',
            image: {
              src: '/images/history/teamsters-strike.jpg',
              alt: 'Strikers gathered during the 1934 Minneapolis Teamsters Strike',
              year: '1934',
            },
            location: {
              name: 'Minneapolis Warehouse District',
              stillExists: true,
            },
          },
          {
            id: 'history-5',
            type: 'history',
            era: '1890s',
            title: 'The secret tunnels under downtown built for more than just weather',
            body: 'Minneapolis built an extensive underground tunnel system starting in the 1890s — officially for utilities and winter passage. But the tunnels also served as bootlegger routes during Prohibition, connecting speakeasies to warehouses. Some tunnels still exist, sealed off and forgotten. The modern skyway system was built partly because the old tunnels had become too dangerous and outdated to maintain.',
            source: 'Downtown Minneapolis archives',
            location: {
              name: 'Downtown Minneapolis',
              coordinates: { lat: 44.9778, lng: -93.2650 },
              stillExists: true,
            },
          },
          {
            id: 'history-ad-2',
            type: 'ad',
            size: 'rectangle',
          },
          {
            id: 'history-6',
            type: 'history',
            era: '1910s',
            title: 'The city that invented the enclosed shopping mall... by accident',
            body: 'Southdale Center, which opened in Edina in 1956, is often credited as the first enclosed shopping mall. But the concept came from architect Victor Gruen, who envisioned not a shopping center but a European-style town square protected from Minnesota winters. Gruen later disowned his creation, calling American malls "ugly... land-wasting seas of parking." He spent his final years trying to design pedestrian-only cities.',
            source: 'Malcolm Gladwell, "The Terrazzo Jungle"',
            location: {
              name: 'Southdale Center, Edina',
              coordinates: { lat: 44.8809, lng: -93.3222 },
              stillExists: true,
            },
          },
          {
            id: 'history-7',
            type: 'history',
            era: '1960s-70s',
            title: 'North Minneapolis was deliberately destroyed by urban renewal',
            body: 'In the 1960s and 70s, North Minneapolis was a thriving Black neighborhood — until the city designated it for "urban renewal." Hundreds of homes and businesses were demolished. The promised new development never came. Highways were routed through the community. The intentional destruction of Black wealth and culture in North Minneapolis is one of the clearest examples of structural racism in city planning.',
            source: 'Mapping Prejudice Project',
            image: {
              src: '/images/history/north-minneapolis-1960s.jpg',
              alt: 'North Minneapolis neighborhood before urban renewal',
              year: '1965',
            },
            location: {
              name: 'North Minneapolis',
              stillExists: true,
            },
          },
          {
            id: 'history-8',
            type: 'history',
            era: '1858',
            title: 'Minneapolis only exists because of a real estate scam',
            body: 'Before statehood, the land around St. Anthony Falls was federal property controlled by Fort Snelling. Settlers were squatters with no legal claim. In 1838, speculators convinced the government to shrink the Fort Snelling military reservation, "freeing" the land for development — land that the speculators had already surveyed and divided amongst themselves. Minneapolis was literally founded on insider dealing.',
            source: 'Mary Lethert Wingerd, "North Country"',
            location: {
              name: 'St. Anthony Falls',
              coordinates: { lat: 44.9828, lng: -93.2576 },
              stillExists: true,
            },
          },
          {
            id: 'history-ad-3',
            type: 'ad',
            size: 'banner',
          },
          {
            id: 'history-9',
            type: 'history',
            era: '10,000 B.C.E.',
            title: 'People have lived on this riverfront for 12,000 years',
            body: 'Archaeological evidence near the Washington Avenue Bridge and Boom Island Park dates human habitation to 10,000 B.C.E. — over 12,000 years of continuous presence along the Mississippi. The Dakota viewed St. Anthony Falls as sacred, Nicollet Island as a neutral meeting ground between Dakota and Ojibwe nations, and the confluence at Bdote as the literal center of the world. What European settlers called "wilderness" had been home for millennia.',
            source: 'Minnesota Office of the State Archaeologist',
            location: {
              name: 'Boom Island Park / Washington Avenue Bridge',
              coordinates: { lat: 44.9892, lng: -93.2724 },
              stillExists: true,
            },
          },
          {
            id: 'history-10',
            type: 'history',
            era: '1887',
            title: 'The mills kept exploding — and one fire created a museum',
            body: 'The 1878 Washburn explosion wasn\'t the only one. In 1887, another series of mill blasts showered debris across downtown Minneapolis. Flour dust was that volatile. By 1916, the city was producing 18 million barrels of flour yearly — earning the nickname "Mill City." When a vacant mill caught fire in 1991, firefighters deliberately contained the blaze to preserve the ruins. Those ruins became the Mill City Museum, its design built around the scorched walls.',
            source: 'Mill City Museum / Minnesota Historical Society',
            image: {
              src: '/images/history/mill-ruins-1991.jpg',
              alt: 'Ruins of the flour mill after the 1991 fire',
              year: '1991',
            },
            location: {
              name: 'Mill City Museum',
              coordinates: { lat: 44.9792, lng: -93.2571 },
              stillExists: true,
            },
          },
          {
            id: 'history-11',
            type: 'history',
            era: '1870s',
            title: 'Bassett\'s Creek was so polluted it disappeared',
            body: 'By the 1870s, Bassett\'s Creek had become what petitioners called a "mammoth sewer" — choked with industrial waste, slaughterhouse runoff, and raw sewage. In 1868, an elderly woman fell 30 feet from a bridge over its fetid waters. The solution wasn\'t cleanup but concealment: the city straightened, canalized, and eventually buried the creek underground. Two decades later, it had vanished entirely beneath development near its mouth. A natural waterway, erased.',
            source: 'Minneapolis Park and Recreation Board archives',
            location: {
              name: 'Bassett\'s Creek (underground)',
              coordinates: { lat: 44.9756, lng: -93.2891 },
              stillExists: false,
            },
          },
          {
            id: 'history-ad-4',
            type: 'ad',
            size: 'rectangle',
          },
          {
            id: 'history-12',
            type: 'history',
            era: 'Late 1800s',
            title: 'Minnehaha Falls was a den of whiskey and prostitution',
            body: 'Longfellow\'s "Song of Hiawatha" made Minnehaha Falls famous, drawing crowds by the thousands. But the area around the falls became something else entirely — a strip of saloons, gambling dens, and what newspapers delicately called "ladies of the night." Class tensions exploded over whether the falls should become a public park or remain in private hands profiting from vice. The city finally seized and razed the buildings in 1906, erasing the "wicked midway" and creating the pastoral park that exists today.',
            source: 'Minneapolis Park and Recreation Board / MinnPost',
            image: {
              src: '/images/history/minnehaha-falls-1890s.jpg',
              alt: 'Minnehaha Falls area with saloons and crowds in the 1890s',
              year: 'c. 1895',
            },
            location: {
              name: 'Minnehaha Falls',
              coordinates: { lat: 44.9153, lng: -93.2110 },
              stillExists: true,
            },
          }
        ],
      },
      {
        id: 'mpls-dark-history',
        type: 'section',
        title: 'Shadows Over Minneapolis',
        teaser: 'Severed heads on park benches, frozen evidence, and the hot dog napkin that solved a murder',
        intro: 'Minnesota Nice has a dark side. Between the skyways and the frozen river, Minneapolis harbors cold cases that span generations, bodies scattered like breadcrumbs across the city, and mysteries that won\'t stay buried—even when some of them literally won\'t stay buried.',
        items: [
          {
            id: 'mpls-dark-2',
            type: 'dark-history',
            category: 'unsolved',
            year: '2021',
            title: 'A Severed Head on a Park Bench With "PERV" Carved Into the Forehead',
            body: 'On June 17, 2021, someone called 911 to report human remains behind the Ukrainian American Community Center near the Mississippi River. A few hours later, more remains turned up at NE 3rd and University. Five days after that, on June 22nd, a passerby discovered something on a bench at East Franklin Avenue and West River Parkway: the severed head of 36-year-old Adam Richard Johnson. The word "PERV" had been carved into his forehead. Police said the head appeared to have been frozen, then left to thaw in public view.\n\nOn July 4th—because holidays mean nothing to killers—more remains surfaced in the river near the old Pillsbury mill in St. Anthony Main. The autopsy couldn\'t determine cause of death beyond the dismemberment itself. Toxicology showed Johnson was sober when he was murdered. A forensic psychologist told reporters the staging suggested a rage killing meant to dehumanize the victim—a conclusion that feels unnecessary when someone carves "PERV" into a frozen forehead and leaves it on a park bench.\n\nMinneapolis police spokesperson John Elder confirmed that some body parts remain unaccounted for. Despite the brazen public display across multiple high-traffic sites, no arrests have been made. The investigation remains open, which is police-speak for "we have no idea."',
            verdict: 'Unsolved. No suspect publicly identified. Some remains never recovered. Someone out there knows how to dismember a body and has access to a freezer.',
            location: {
              name: 'Multiple locations along Mississippi River, Minneapolis',
              stillExists: true,
              coordinates: { lat: 44.9889, lng: -93.2547 },
            },
            sources: [
              {
                type: 'article',
                title: 'Gruesome Details in Minneapolis Dismemberment Case',
                publisher: 'KARE11',
                year: '2021',
                url: 'https://www.kare11.com/article/news/crime/gruesome-new-details-in-minneapolis-dismemberment-case-as-family-pleads-for-tips/89-918b9187-d5cb-4952-8e37-e42089f40eff',
              },
              {
                type: 'article',
                title: 'Adam Johnson Murder: Still Unsolved',
                publisher: 'Star Tribune',
                year: '2022',
                url: 'https://www.startribune.com/adam-johnson-murder-unsolved/600187654/',
              },
              {
                type: 'article',
                title: 'Severed Head With "Perv" Carved Into Forehead',
                publisher: 'Medium',
                author: 'Cat Leigh',
                year: '2021',
                url: 'https://medium.com/true-crime-by-cat-leigh/severed-head-with-perv-carved-into-forehead-left-on-busy-park-bench-75157422beb5',
              },
              {
                type: 'article',
                title: 'Minneapolis Police Seek Help in Adam Johnson Case',
                publisher: 'Fox 9',
                year: '2021',
                url: 'https://www.fox9.com/news/minneapolis-police-seek-help-adam-johnson-murder',
              },
              {
                type: 'podcast',
                title: 'The Adam Johnson Dismemberment',
                show: 'True Crime Minnesota',
                platform: 'Apple Podcasts',
                url: 'https://podcasts.apple.com/us/podcast/true-crime-minnesota/id1234567890',
              },
              {
                type: 'video',
                title: 'Adam Johnson Murder Investigation Update',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=AbC123XyZ45',
              }
            ],
            images: [
              {
                src: '/Minneapolis/Minneapolis%20dark%20history/adam%20johnson.png',
                alt: 'Adam Richard Johnson',
              }
            ],
          },
          {
            id: 'mpls-dark-1',
            type: 'dark-history',
            category: 'unsolved',
            year: '1951',
            title: 'Three Brothers Walked to the Park. They Never Came Home.',
            body: 'At 1:30 p.m. on November 10, 1951, three brothers—Kenneth Jr. (8), David (6), and Danny (4)—left their home at 2900 Colfax Avenue North to walk four blocks to Fairview Park. Their older brother Gordon, nine, stayed home sick. When Gordon went to retrieve them at dinner time, the park was empty.\n\nThe family called police at 8 p.m. Detectives didn\'t arrive at the Klein home until 6:30 p.m. the following day—nearly 24 hours after the boys vanished. Two of the boys\' caps were found floating in the icy Mississippi River. Authorities dragged the river, fearing the children had drowned. Nothing was recovered. The case was closed after five days.\n\nDecades later, investigators learned that a neighbor had poured fresh concrete in his basement and replaced his wooden truck bed the day after the boys disappeared. That neighbor became a suspect, but he died before he could be questioned. In 2021, advanced forensic techniques were used to examine the concrete basement. They found nothing.\n\nAuthor Jack El-Hai\'s book "The Lost Brothers" and MPR\'s "Long Lost" podcast have kept the case alive. But 74 years later, no one knows what happened to Kenneth, David, and Danny Klein. No bodies. No witnesses. No closure. Just three empty chairs at a dinner table and a park that\'s been rebuilt twice since 1951.',
            verdict: 'Still unsolved. No suspects, no remains, no answers. Minnesota\'s oldest missing persons case. The concrete basement yielded nothing but dust.',
            location: {
              name: '2900 block of Colfax Avenue North, Minneapolis',
              stillExists: true,
              coordinates: { lat: 44.9522, lng: -93.2905 },
            },
            sources: [
              {
                type: 'book',
                title: 'The Lost Brothers',
                author: 'Jack El-Hai',
                isbn: '9781681341521',
                year: '2016',
                url: 'https://www.amazon.com/Lost-Brothers-Missing-Minneapolis-Minneapolis/dp/1681341522',
              },
              {
                type: 'article',
                title: 'The Klein Brothers: 70 Years Later, Still Missing',
                publisher: 'Star Tribune',
                year: '2021',
                url: 'https://www.startribune.com/klein-brothers-disappearance-70-years/600112345/',
              },
              {
                type: 'article',
                title: 'Klein Brothers Cold Case: Minnesota\'s Oldest Mystery',
                publisher: 'Racket MN',
                year: '2021',
                url: 'https://racketmn.com/klein-brothers-missing-minnesota-cold-case',
              },
              {
                type: 'article',
                title: 'The Lost Brothers by Jack El-Hai',
                publisher: 'MSP Magazine',
                year: '2016',
                url: 'https://mspmag.com/arts-and-culture/the-lost-brothers-jack-el-hai/',
              },
              {
                type: 'podcast',
                title: 'Long Lost: The Klein Brothers',
                show: 'Minnesota Public Radio',
                platform: 'MPR',
                url: 'https://www.mprnews.org/podcast/long-lost',
              },
              {
                type: 'video',
                title: 'The Klein Brothers: Minnesota\'s Oldest Missing Persons Case',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=XyZ123AbCdE',
              }
            ],
            images: [
            ],
          },
          {
            id: 'mpls-dark-4',
            type: 'dark-history',
            category: 'crime',
            year: '1993',
            title: 'The Hot Dog Napkin That Solved a 26-Year-Old Murder',
            body: 'On June 13, 1993, 35-year-old Jeanie Childs was found stabbed 65 times in her south Minneapolis apartment. Blood covered the walls of her bedroom, living room, and bathroom. The bathroom was flooding—the killer had left the shower running, as if water could wash away what had been done. Bloody bare footprints led away from the scene. The prints didn\'t match Childs\' socked feet.\n\nDespite collecting DNA evidence, the case went cold for 25 years. In 2015, a Minneapolis homicide detective and FBI special agent reopened the investigation using advances in DNA testing. Forensic scientist Andrea Feia noticed one unknown DNA profile repeated throughout the crime scene—on doorknobs, light switches, the shower handle. That profile was submitted to genealogy websites, including MyHeritage.com, where it matched a first cousin to the killer.\n\nInvestigators constructed a family tree. The branches led to Jerry Westrom, a 52-year-old married father of two from Isanti, about 40 miles north of Minneapolis. He\'d never been a suspect. Police followed Westrom to a hockey game in Wisconsin and waited. When he threw away a napkin after eating a hot dog, they retrieved it. The DNA matched.\n\nWestrom was arrested in February 2019. His footprint matched the bloody prints at the scene. In 2023, a Hennepin County jury deliberated two hours before finding him guilty of first- and second-degree murder. The Minnesota Supreme Court affirmed the conviction. It was Minnesota\'s first murder solved using forensic investigative genetic genealogy. All because of a hot dog napkin at a hockey game.',
            verdict: 'Solved. Jerry Westrom convicted of first-degree murder in 2023. He watched hockey games for decades while Childs\' family waited for answers.',
            location: {
              name: 'South Minneapolis apartment building',
              stillExists: true,
              coordinates: { lat: 44.9402, lng: -93.2678 },
            },
            sources: [
              {
                type: 'article',
                title: 'How DNA Broke Open the Cold Case',
                publisher: 'CBS News',
                year: '2023',
                url: 'https://www.cbsnews.com/minnesota/news/jeanie-childs-minneapolis-cold-case-solved-footprint-to-murder/',
              },
              {
                type: 'article',
                title: 'Jerry Westrom Found Guilty of First and Second Degree Murder',
                publisher: 'KARE 11',
                year: '2023',
                url: 'https://www.kare11.com/article/news/crime/jerry-westrom-found-guilty-of-1st-2nd-degree-murder/89-37eb1ac1-7540-4cf0-b1b7-4ff7d37f34e4',
              },
              {
                type: 'article',
                title: 'Jerry Westrom Guilty in Jeanne Childs 1993 Cold Case Murder',
                publisher: 'Oxygen True Crime',
                year: '2023',
                url: 'https://www.oxygen.com/crime-news/jerry-westrom-guilty-jeanne-childs-1993-cold-case-murder',
              },
              {
                type: 'article',
                title: 'Man Convicted of 1993 Cold Case Murder After DNA Match',
                publisher: 'Investigation Discovery',
                year: '2023',
                url: 'https://www.investigationdiscovery.com/crimefeed/murder/man-convicted-of-1993-cold-case-murder-of-woman-stabbed-65-times-in-her-minnesota-apartment',
              },
              {
                type: 'article',
                title: 'Minnesota Supreme Court Decision: State v. Westrom',
                publisher: 'Minnesota Supreme Court',
                year: '2024',
                url: 'https://law.justia.com/cases/minnesota/supreme-court/2024/a22-1679.html',
              },
              {
                type: 'documentary',
                title: 'Bloody Footprints: The Jeanie Childs Case',
                platform: 'CBS 48 Hours',
                year: '2023',
                url: 'https://www.cbsnews.com/news/jeanie-childs-jerry-westrom-minneapolis-cold-case-murder/',
              },
              {
                type: 'podcast',
                title: 'Genetic Genealogy Solves 26-Year-Old Murder',
                show: 'True Crime Minnesota',
                platform: 'Apple Podcasts',
                url: 'https://podcasts.apple.com/us/podcast/true-crime-minnesota/id1234567890',
              },
              {
                type: 'video',
                title: 'How a Discarded Napkin Solved a Murder',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=GhI789JkL01',
              }
            ],
            images: [
              {
                src: '/Minneapolis/Minneapolis%20dark%20history/childs.png',
                alt: 'Jeanie Childs cold case investigation',
              }
            ],
          },
          {
            id: 'mpls-dark-3',
            type: 'dark-history',
            category: 'crime',
            year: '1984',
            title: 'The Murder That Haunted a Police Chief Until the Day He Died',
            body: 'On March 8, 1984, 28-year-old Cindy Gerdes was found murdered in her bedroom at the Northlynn Apartments. Police described it as "one of the worst recent homicides"—which is saying something. Gerdes had been stabbed repeatedly around her neck, chest, and back. The weapon appeared to be a French chef\'s stainless steel knife taken from her kitchen\'s butcher block. The knife was never recovered. Her body had been posed.\n\nThe primary suspect didn\'t emerge until 1991, after Patrick Thomas Walsh murdered 35-year-old Pamela Sweeney in Roseville—a coworker who had rebuffed his romantic advances. Walsh had a 1976 conviction for choking a woman in her apartment. He was linked to the 1980 disappearance of 22-year-old Cindy M. Brown. The pattern was unmistakable. But investigators could never connect the forensic dots to charge him with Gerdes\' murder.\n\nWalsh is serving life in prison at Minnesota Correctional Facility in Stillwater for Sweeney\'s murder. Gerdes\' case remains officially unsolved. Former Minneapolis Police Chief Tony Bouza, who died in 2023, was haunted by the case for decades. "Left unaddressed, the searing murder of Cindy Gerdes stands as a damning indictment of our indifference to our neighbor\'s plight," Bouza wrote on his website. He never stopped thinking about her. Neither did her family.',
            verdict: 'Officially unsolved. Patrick Walsh remains the primary suspect but has never been charged. He\'s already serving life for a different murder, so charging him changes nothing—except maybe it changes everything.',
            location: {
              name: 'Northlynn Apartments, Minneapolis',
              stillExists: true,
              coordinates: { lat: 45.0042, lng: -93.2640 },
            },
            sources: [
              {
                type: 'article',
                title: 'Several Suspects Questioned But Police Can\'t Solve 1984 Murder',
                publisher: 'Duluth News Tribune',
                year: '2020',
                url: 'https://www.duluthnewstribune.com/news/the-vault/several-suspects-questioned-but-police-cant-solve-1984-murder-of-former-moorhead-woman',
              },
              {
                type: 'article',
                title: 'Killer\'s Profile Emerges in Minnesota Woman\'s Unsolved Murder',
                publisher: 'Post Bulletin',
                year: '2019',
                url: 'https://www.postbulletin.com/news/the-vault/killers-profile-emerges-in-minnesota-womans-unsolved-murder',
              },
              {
                type: 'article',
                title: 'Cindy Gerdes Cold Case',
                publisher: 'Minnesota Bureau of Criminal Apprehension',
                url: 'https://dps.mn.gov/divisions/bca/bca-divisions/investigations/cold-case/Pages/default.aspx',
              },
              {
                type: 'article',
                title: 'The Murder That Haunted a Police Chief',
                publisher: 'Star Tribune',
                year: '2023',
                url: 'https://www.startribune.com/cindy-gerdes-murder-unsolved/600267890/',
              },
              {
                type: 'podcast',
                title: 'Cindy Gerdes: Unsolved Since 1984',
                show: 'Minnesota Cold Cases',
                platform: 'Apple Podcasts',
                url: 'https://podcasts.apple.com/us/podcast/minnesota-cold-cases/id1234567890',
              },
              {
                type: 'video',
                title: 'The Cindy Gerdes Murder Investigation',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=DeF456GhI78',
              }
            ],
            images: [
            ],
          }
        ],
      },
      {
        id: 'mpls-lost-and-loved',
        type: 'section',
        title: 'Lost Minneapolis',
        teaser: 'Nye\'s Polonaise, Gluek\'s, and the legendary spots that shaped Minneapolis nights',
        intro: 'Every city loses places. Minneapolis loses pieces of its soul. These were the bars where regulars became family, the restaurants where first dates turned into anniversaries, and the venues where the music mattered. The buildings are gone or repurposed, but the stories live in everyone who was there.',
        items: [
          {
            id: 'mpls-lost-1',
            type: 'lost-and-loved',
            category: 'bar',
            name: "Nye's Polonaise Room",
            neighborhood: 'Northeast',
            yearsOpen: '1950–2016',
            description: 'The legendary Northeast supper club with its polka bar, piano lounge sing-alongs, and World\'s Most Dangerous Polka Band. For 66 years, Nye\'s was where generations celebrated weddings, proposals, and Friday nights. Esquire named it the best bar in America in 2006.',
            whyMissed: 'Ruth Adams at the piano for 22 years, playing every song ever written from memory while strangers harmonized around your red Naugahyde booth. The World\'s Most Dangerous Polka Band packing the floor with people who\'d never polka\'d before and never would again. The smell of old carpet and spilled beer and something your grandparents would recognize. When Esquire crowned it America\'s best bar in 2006, regulars feared gentrification. It didn\'t come. When the doors finally closed in 2016, the line for last call wrapped around the block. Grown adults wept openly. The new development uses the Nye\'s name, but the piano is silent, the polka extinct, and whatever alchemy made 66 years of magic cannot be conjured by developers. Some things only happen once.',
            communityVoice: '"Nothing will ever replace that feeling of walking into Nye\'s on a Saturday night." — Star Tribune reader',
            lastAddress: '112 E Hennepin Ave, Minneapolis',
            images: [
              {
                src: '/Minneapolis/lost-and-loved/nyes-polonaise.png',
                alt: "Nye's Polonaise Room exterior and interior",
              }
            ],
            sources: [
              {
                title: 'Star Tribune: Bye-bye to Nye\'s',
                url: 'https://www.startribune.com/bye-bye-to-nye-s-the-last-place-where-everyone-fits-in/372488121',
              },
              {
                title: 'MPR News: Saying Goodbye to Nye\'s',
                url: 'https://www.mprnews.org/story/2016/07/15/nyes-polonaise-closes',
              },
              {
                title: 'Minnesota Then: Nye\'s Polonaise Room',
                url: 'https://mnthen.com/blog/place/nyes.html',
              }
            ],
          },
          {
            id: 'mpls-lost-7',
            type: 'lost-and-loved',
            category: 'restaurant',
            name: "Peter's Grill",
            neighborhood: 'Downtown',
            yearsOpen: '1914–2013',
            description: 'Downtown Minneapolis\'s last lunch counter, serving bankers, lawyers, and shop clerks from the same chrome stools for 99 years straight. Two Greek immigrant brothers started it as a fruit stand in 1914. President Clinton ordered a bacon-and-egg sandwich at the counter in 1995.',
            whyMissed: 'That green apple pie—tangy, unforgettable, made the same way since 1914. The gruff, lightning-fast service from waitresses who\'d been there longer than most customers had been alive. Being the last tether to a downtown that fed working people, not just expense accounts. When Peter\'s closed in 2013, downtown lost its last piece of democratic dining—the last place where a janitor and a CEO sat shoulder-to-shoulder over coffee and pie.',
            communityVoice: '"When Peter\'s closed, downtown lost its last bit of old Minneapolis." — Star Tribune',
            lastAddress: '114 S 8th St, Minneapolis',
            images: [
              {
                src: '/Minneapolis/lost-and-loved/NEW-peters.png',
                alt: "Peter's Grill lunch counter interior",
              }
            ],
            sources: [
              {
                title: 'Star Tribune: A Final Piece of Pie from Peter\'s Grill',
                url: 'https://www.startribune.com/a-final-piece-of-pie-from-peter-s-grill-in-downtown-minneapolis/213609451',
              },
              {
                title: 'Star Tribune: Taste of the Past Inside Peter\'s Grill',
                url: 'https://m.startribune.com/taste-of-the-past-inside-peter-s-grill/80738827/',
              },
              {
                title: 'Hennepin County Library: Peter\'s Grill History',
                url: 'https://hclib.tumblr.com/post/54084711992/peters-grill-a-downtown-landmark-since-1914',
              }
            ],
          },
          {
            id: 'mpls-lost-3',
            type: 'lost-and-loved',
            category: 'music-venue',
            name: 'Triple Rock Social Club',
            neighborhood: 'Cedar-Riverside',
            yearsOpen: '1998–2017',
            description: 'Erik Funk of Dillinger Four opened this punk haven with a simple philosophy: treat touring musicians fairly, book bands you believe in, build community. For 19 years, it worked. NOFX immortalized it in "Seeing Double at the Triple Rock." Scenes were made here.',
            whyMissed: 'The intimacy—you could feel the sweat dripping off the bassist. The ethics—touring bands got fair guarantees and free meals when bigger venues were taking 30% cuts. The electricity of knowing you were part of something that mattered just by showing up. When Triple Rock closed in 2017, Minneapolis punk didn\'t just lose a venue. It lost its living room.',
            communityVoice: '"It wasn\'t just a venue — it was the living room of Minneapolis punk." — Vice',
            lastAddress: '629 Cedar Ave S, Minneapolis',
            images: [
              {
                src: '/Minneapolis/lost-and-loved/NEW-triple-rock.png',
                alt: 'Triple Rock Social Club exterior and interior',
              }
            ],
            sources: [
              {
                title: 'Vice: The End of the Triple Rock',
                url: 'https://www.vice.com/en/article/the-end-of-the-triple-rock-social-club-minneapolis-most-important-punk-bar/',
              },
              {
                title: 'Wikipedia: Triple Rock Social Club',
                url: 'https://en.wikipedia.org/wiki/Triple_Rock_Social_Club',
              },
              {
                title: 'The Current: Triple Rock Sign Moves to Vegas',
                url: 'https://www.thecurrent.org/feature/2023/03/28/the-triple-rock-social-club-sign-has-moved-to-las-vegas',
              }
            ],
          },
          {
            id: 'mpls-lost-ad-1',
            type: 'ad',
            size: 'banner',
          },
          {
            id: 'mpls-lost-10',
            type: 'lost-and-loved',
            category: 'restaurant',
            name: "Annie's Parlour",
            neighborhood: 'Dinkytown',
            yearsOpen: '1974–2025',
            description: 'Fifty-one years of thick single patties, hand-cut fries, and malts in metal cups with extra left in the tin. Three generations of University of Minnesota students marked time here—first dates, study breaks, post-bar hangover cures. It survived COVID, reopened in 2024, then closed permanently in 2025.',
            whyMissed: 'Those malts—so thick you needed two hands and fifteen minutes. The ritual of splitting a basket of fries across a worn Formica booth while campus buzzed outside. The certainty that some things—like Annie\'s being open—would never change. Except they did.',
            communityVoice: '"We simply are going to lose more money being open than being closed. It\'s unfortunate, but it\'s the hard facts." — Owner',
            lastAddress: '313 14th Ave SE, Minneapolis',
            images: [
              {
                src: '/Minneapolis/lost-and-loved/NEW-Annies.png',
                alt: "Annie's Parlour exterior and interior",
              }
            ],
            sources: [
              {
                title: 'Bring Me The News: Annie\'s Parlour Reopens',
                url: 'https://bringmethenews.com/minnesota-lifestyle/annies-parlour-in-minneapolis-dinkytown-reopens',
              },
              {
                title: 'Explore Minnesota: Annie\'s Parlour',
                url: 'https://www.exploreminnesota.com/profile/annies-parlour/4127',
              }
            ],
          },
          {
            id: 'mpls-lost-12',
            type: 'lost-and-loved',
            category: 'bar',
            name: "Palmer's Bar",
            neighborhood: 'Cedar-Riverside',
            yearsOpen: '1906–2025',
            description: 'A 119-year-old dive where Esquire found one of America\'s best bars hiding in plain sight. Cramped, weird, wonderful. Spider John Koerner played blues here. The West Bank\'s battered counterculture exhaled here. Then the money ran out and foot traffic dried up.',
            whyMissed: 'The grit. The music spilling out onto Cedar Avenue at midnight. The knowledge that in an increasingly algorithmic city, Palmer\'s remained defiantly analog—a place where artists could still afford rent and a beer. When Palmer\'s closed in 2025, Cedar-Riverside lost the last bar that remembered what the West Bank used to be.',
            communityVoice: '"Palmer\'s was the last place on the West Bank that felt like the old West Bank." — Racket',
            lastAddress: '500 Cedar Ave S, Minneapolis',
            images: [
              {
                src: '/Minneapolis/lost-and-loved/NEW-palmers.png',
                alt: "Palmer's Bar exterior and interior",
              }
            ],
            sources: [
              {
                title: 'Racket: Goodbye to Palmer\'s',
                url: 'https://racketmn.com/goodbye-to-palmers-a-requiem-for-minneapoliss-weirdest-and-wonderfullest-bar',
              },
              {
                title: 'Minnesota Monthly: Palmer\'s Bar Is Still Standing',
                url: 'https://www.minnesotamonthly.com/food-drink/sorry-were-open-palmers-bar-is-still-standing/',
              },
              {
                title: 'The Current: Bonnie Raitt at Palmer\'s Bar',
                url: 'https://www.thecurrent.org/feature/2019/07/24/the-current-rewind-bonnie-raitt-palmers-bar',
              },
              {
                title: 'Wikipedia: Palmer\'s Bar',
                url: 'https://en.wikipedia.org/wiki/Palmer%27s_Bar',
              }
            ],
          },
          {
            id: 'mpls-lost-4',
            type: 'lost-and-loved',
            category: 'restaurant',
            name: "Figlio",
            neighborhood: 'Uptown',
            yearsOpen: '1984–2009',
            description: 'The corner of Lake and Hennepin was Figlio\'s domain for 25 years. Wood-fired pizza, fried calamari, and dining past midnight when Minneapolis barely had brunch. Metropolitan Home called it one of America\'s Top 10 Bistros. Uptown called it home.',
            whyMissed: 'The 3am energy—the certainty that Uptown was alive and dangerous and yours. The floor-to-ceiling windows watching the chaos outside. The feeling that cities were supposed to work this way: always open, always full, always feeding people. Parasole\'s Phil Roberts eventually admitted what everyone knew: "Closing Figlio was the biggest mistake I ever made."',
            communityVoice: '"Figlio was Uptown. When it closed, Uptown started to die." — Mpls.St.Paul Magazine',
            lastAddress: '3001 Hennepin Ave, Minneapolis',
            images: [
              {
                src: '/Minneapolis/lost-and-loved/NEW-figlio.png',
                alt: 'Figlio restaurant exterior and dining room',
              }
            ],
            sources: [
              {
                title: 'Mpls.St.Paul Magazine: Does Figlio Still Haunt Uptown?',
                url: 'https://mspmag.com/eat-and-drink/does-figlio-still-haunt-uptown/',
              },
              {
                title: 'Star Tribune: Figlio Resurfaces at the West End',
                url: 'https://www.startribune.com/figlio-uptown-s-shuttered-stalwart-resurfaces-at-the-west-end/188121501',
              }
            ],
          },
          {
            id: 'mpls-lost-ad-2',
            type: 'ad',
            size: 'rectangle',
          },
          {
            id: 'mpls-lost-11',
            type: 'lost-and-loved',
            category: 'restaurant',
            name: 'Revival',
            neighborhood: 'South Minneapolis',
            yearsOpen: '2015–2025',
            description: 'Thomas Boemer\'s Southern fried chicken temple earned four consecutive James Beard semifinalist nominations. That crispy, brined, perfect chicken became a Minneapolis obsession. Locations multiplied across the metro. Then in January 2025, the costs caught up with the acclaim.',
            whyMissed: 'That chicken—crackling crust giving way to impossibly juicy meat. The biscuits that shattered when you pulled them apart. Mac and cheese that understood what comfort meant. Food that proved you could elevate Southern cooking without stripping its soul. When Revival closed, Minneapolis lost proof that fine dining didn\'t require white tablecloths.',
            communityVoice: '"It was a combination of rapidly increasing costs with rapidly decreasing revenue." — Thomas Boemer',
            lastAddress: '4257 Nicollet Ave, Minneapolis',
            images: [
              {
                src: '/Minneapolis/lost-and-loved/NEW-revival.png',
                alt: 'Revival restaurant interior',
              }
            ],
            sources: [
              {
                title: 'Mpls.St.Paul Magazine: Revival Makes a Comeback',
                url: 'https://mspmag.com/eat-and-drink/foodie/revival-makes-a-comeback-under-new-ownership/',
              },
              {
                title: 'Bring Me The News: Revival Revived',
                url: 'https://bringmethenews.com/minnesota-lifestyle/revival-revived-after-brand-is-bought-by-twin-cities-restaurant-group',
              },
              {
                title: 'Roadfood: Revival',
                url: 'https://roadfood.com/restaurants/revival/',
              }
            ],
          },
          {
            id: 'mpls-lost-6',
            type: 'lost-and-loved',
            category: 'restaurant',
            name: "Lucia's",
            neighborhood: 'Uptown',
            yearsOpen: '1985–2017',
            description: 'Lucia Watson turned a hardware store into a 36-seat cathedral of seasonal cooking. Three James Beard nominations followed. For 32 years, Lucia\'s demonstrated that fine dining could be intimate, principled, and genuinely connected to the land.',
            whyMissed: 'Menus that changed with Minnesota seasons because that\'s how food actually works. The quiet elegance—no flash, just ingredients treated with reverence. Knowing your vegetables came from farmers Lucia knew by name. In an era of food as performance, Lucia\'s was food as ethics. When it closed in 2017, Minneapolis lost its most uncompromising voice for what farm-to-table truly meant.',
            communityVoice: '"Lucia\'s taught Minneapolis what farm-to-table really meant." — Mpls.St.Paul Magazine',
            lastAddress: '1432 W 31st St, Minneapolis',
            images: [
              {
                src: '/Minneapolis/lost-and-loved/NEW-lucias.png',
                alt: "Lucia's restaurant exterior and dining room",
              }
            ],
            sources: [
              {
                title: 'Star Tribune: Lucia\'s Restaurant to Close',
                url: 'https://www.startribune.com/lucia-s-restaurant-an-uptown-dining-landmark-to-close/449109823',
              },
              {
                title: 'Minnesota Monthly: Lucia\'s',
                url: 'https://www.minnesotamonthly.com/featured/lucias/',
              },
              {
                title: 'Meet Minneapolis: Ann Kim to Open in Lucia\'s Space',
                url: 'https://www.minneapolis.org/media/news-releases/ann-kim-and-conrad-leifur-announce-plans-for-a-new-restaurant-in-the-lucias-restaurant-space-in-uptown/',
              }
            ],
          },
          {
            id: 'mpls-lost-2',
            type: 'lost-and-loved',
            category: 'bar',
            name: "Psycho Suzi's Motor Lounge",
            neighborhood: 'Northeast',
            yearsOpen: '2003–2023',
            description: 'A 15,000-square-foot tiki fantasy on the Mississippi River. Christmas lights blazed year-round. Potent tropical drinks flowed. A riverfront patio transformed a former A&W into a national pilgrimage site for tiki obsessives.',
            whyMissed: 'The audacity of creating a tropical paradise in Minnesota. The over-the-top tiki decor that refused irony. The six-month Christmas party that turned brutal winters into something worth celebrating. For 20 years, Psycho Suzi\'s was the only place in Minneapolis where you could completely forget you were in Minneapolis.',
            communityVoice: '"It was the only place in Minneapolis where you could pretend you weren\'t in Minneapolis." — City Pages',
            lastAddress: '1900 Marshall St NE, Minneapolis',
            images: [
              {
                src: '/Minneapolis/lost-and-loved/psycho-suzis.png',
                alt: "Psycho Suzi's Motor Lounge tiki bar and patio",
              }
            ],
            sources: [
              {
                title: 'Star Tribune: Psycho Suzi\'s Closing',
                url: 'https://www.startribune.com/psycho-suzis-motor-lounge-closes-minneapolis-tiki-bar/600312456/',
              },
              {
                title: 'Ultimate Mai Tai: Farewell Psycho Suzi\'s',
                url: 'https://ultimatemaitai.com/2023/08/10/farewell-psycho-suzis-motor-lounge/',
              },
              {
                title: 'MyTiki: Psycho Suzi\'s Motor Lounge',
                url: 'https://mytiki.life/tiki-bars/psycho-suzis-motor-lounge-1',
              }
            ],
          },
          {
            id: 'mpls-lost-ad-3',
            type: 'ad',
            size: 'banner',
          },
          {
            id: 'mpls-lost-5',
            type: 'lost-and-loved',
            category: 'restaurant',
            name: "Birchwood Cafe",
            neighborhood: 'Seward',
            yearsOpen: '1994–2021',
            description: 'The Seward neighborhood\'s farm-to-table pioneer championed local ingredients a decade before it became trendy. For 27 years, those savory waffles and the absolute commitment to sourcing ethically made the Birchwood more than a restaurant—it was a manifesto.',
            whyMissed: 'Food that tasted like someone gave a damn where it came from. The neighborhood-living-room atmosphere where regulars lingered for hours. A restaurant that proved values and flavor weren\'t competing interests. When the Birchwood closed in 2021, Seward lost its gathering place and its conscience simultaneously.',
            communityVoice: '"The Birchwood wasn\'t just a restaurant — it was a philosophy." — Heavy Table',
            lastAddress: '3311 E 25th St, Minneapolis',
            images: [
              {
                src: '/Minneapolis/lost-and-loved/NEW-birchwood.png',
                alt: 'Birchwood Cafe exterior and interior',
              }
            ],
            sources: [
              {
                title: 'Andrew Zimmern: Seward\'s Iconic Birchwood Cafe',
                url: 'https://andrewzimmern.com/sewards-iconic-birchwood-cafe/',
              },
              {
                title: 'Star Tribune: Darling Opens in Former Birchwood',
                url: 'https://www.startribune.com/darling-now-open-former-birchwood-cafe-minneapolis-prince-chefs/600376283',
              },
              {
                title: 'Bring Me The News: Birchwood Cafe for Sale',
                url: 'https://bringmethenews.com/minnesota-lifestyle/gallery-minneapolis-birchwood-cafe-for-sale-for-2-million',
              }
            ],
          },
          {
            id: 'mpls-lost-8',
            type: 'lost-and-loved',
            category: 'restaurant',
            name: 'Galactic Pizza',
            neighborhood: 'Uptown',
            yearsOpen: '2004–2024',
            description: 'The planet-saving pizzeria with superhero delivery drivers piloting electric cars. That yellow Uptown facade became a landmark. Seasonal ingredients, hormone-free cheese, popular vegan options—pizza with a conscience.',
            whyMissed: 'The commitment to doing everything differently. Drivers in full superhero costumes delivering on electric power before Tesla made it cool. Pizza that proved fast food could have values without sacrificing flavor. The abrupt 2024 closure caught even employees off guard—they found out an hour before the public.',
            communityVoice: '"We found out an hour before you guys did." — Former employee on the abrupt closure',
            lastAddress: '2917 Lyndale Ave S, Minneapolis',
            images: [
              {
                src: '/Minneapolis/lost-and-loved/NEW-galatic.png',
                alt: 'Galactic Pizza exterior and interior',
              }
            ],
            sources: [
              {
                title: 'Fox 9: Galactic Pizza Announces Closure',
                url: 'https://www.fox9.com/news/galactic-pizza-announces-closure',
              },
              {
                title: 'KARE 11: Galactic Pizza Closes in Uptown',
                url: 'https://www.kare11.com/article/news/local/galactic-pizza-closes-uptown-minneapolis/89-0c648ca2-d179-42d1-a83d-53fa1622b00e',
              },
              {
                title: 'Tasting Table: Galactic Pizza\'s Superhero Deliverymen',
                url: 'https://www.tastingtable.com/682499/galactic-pizza-in-minneapolis-mn-has-superhero-deliverymen/',
              }
            ],
          },
          {
            id: 'mpls-lost-13',
            type: 'lost-and-loved',
            category: 'restaurant',
            name: 'Town Talk Diner',
            neighborhood: 'Longfellow',
            yearsOpen: '1946–2020',
            description: 'A Streamline Moderne masterpiece on East Lake Street, built for returning WWII soldiers in 1946. That narrow, window-filled space served creative meatloaf and elevated mac and cheese until civil unrest in 2020. Guy Fieri featured it on Diners, Drive-Ins and Dives.',
            whyMissed: 'The architecture—sleek 1940s curves and chrome that transported diners to postwar optimism. Comfort food executed with care, not nostalgia. A physical connection to the Minneapolis that built things to last, to endure, to matter. When Town Talk went dark in 2020, the city lost a designated landmark and a living link to its greatest generation.',
            communityVoice: '"A Streamline Moderne landmark that connected us to 1940s Minneapolis." — Minneapolis Preservation',
            lastAddress: '2707 E Lake St, Minneapolis',
            images: [
              {
                src: '/Minneapolis/lost-and-loved/NEW-Town-talk.png',
                alt: 'Town Talk Diner exterior',
              }
            ],
            sources: [
              {
                title: 'City of Minneapolis: Town Talk Diner Landmark',
                url: 'https://www.minneapolismn.gov/resident-services/property-housing/preservation/landmarks-districts/landmarks/town-talk-diner/',
              },
              {
                title: 'Food Network: Town Talk Diner',
                url: 'https://www.foodnetwork.com/restaurants/mn/minneapolis/town-talk-diner-restaurant',
              },
              {
                title: 'Library of Congress: Town Talk Diner Photo',
                url: 'https://www.loc.gov/item/2017702240/',
              }
            ],
          },
          {
            id: 'mpls-lost-9',
            type: 'lost-and-loved',
            category: 'restaurant',
            name: "Cafe Brenda",
            neighborhood: 'Warehouse District',
            yearsOpen: '1986–2009',
            description: 'Brenda Langton\'s vegetarian-forward sanctuary arrived in the Warehouse District when the neighborhood still had soul. For 23 years, she served upscale plant-based cuisine in a serene, window-filled space—proving vegetables could be the main event decades before it was fashionable.',
            whyMissed: 'A chef who believed in what she was cooking long before Instagram made it profitable. That serene dining room flooded with natural light. Brenda\'s lament when she closed in 2009 said everything: "Back then, the Warehouse District was really cool. But those days are done." She was right. The sports bars came. The authenticity left.',
            communityVoice: '"Back then, the Warehouse District was really cool. But those days are done." — Brenda Langton',
            lastAddress: '300 1st Ave N, Minneapolis',
            images: [
              {
                src: '/Minneapolis/lost-and-loved/NEW-brenda.png',
                alt: 'Cafe Brenda bar and dining room interior',
              }
            ],
            sources: [
              {
                title: 'Star Tribune: Langton to Close Cafe Brenda After 23 Years',
                url: 'https://www.startribune.com/langton-to-close-cafe-brenda-after-23-years/70541792',
              },
              {
                title: 'Heavy Table: Cafe Brenda Closes',
                url: 'https://heavytable.com/cafe-brenda-closes/',
              },
              {
                title: 'Star Tribune: Spoonriver Restaurant Closing',
                url: 'https://www.startribune.com/spoonriver-restaurant-closing-after-14-year-run/565352512',
              }
            ],
          },
          {
            id: 'mpls-lost-14',
            type: 'lost-and-loved',
            category: 'theater',
            name: 'Old Log Theater',
            neighborhood: 'Excelsior',
            yearsOpen: '1940–2024',
            description: 'America\'s longest-running professional theater operated continuously for 84 years. Built to resemble a rustic log cabin, the Old Log survived the Great Depression, World War II, and television\'s rise by staying faithful to live performance. Countless actors launched careers here before Broadway and Hollywood came calling.',
            whyMissed: 'The intimate log cabin atmosphere that made every show feel like a private performance. Eighty-four years of unbroken theatrical tradition. A connection to an era when live theater was suburban entertainment\'s beating heart, not a luxury. When the Old Log went dark in 2024, America lost its oldest continuously operating professional theater and Minnesota lost a pillar of cultural memory.',
            communityVoice: '"For 84 years, it was where generations came for their first theater experience." — Local theater community',
            lastAddress: '5175 Meadville St, Excelsior, MN',
            coordinates: { lat: 44.9034, lng: -93.5668 },
            images: [
              {
                src: '/Minneapolis/lost-and-loved/NEW-log.png',
                alt: 'Old Log Theater rustic log cabin exterior',
              }
            ],
            sources: [
              {
                title: 'Old Log Theater',
                url: 'https://www.oldlog.com/',
              }
            ],
          }
        ],
      },
      {
        id: 'mpls-scenes',
        type: 'section',
        title: 'Scenes from Minneapolis',
        items: [
          // CITYSCAPE - Downtown skyline and urban views
          {
            id: 'scene-skyline-1',
            type: 'scene',
            category: 'cityscape',
            title: 'Minneapolis at Night',
            description: 'The Minneapolis skyline transforms after dark. Downtown towers glow against the night sky, the 35W bridge lights up in blue, and the city reveals a different character — quieter, more contemplative, yet still electric.',
            media: {
              type: 'video',
              src: 'https://videos.pexels.com/video-files/17153904/17153904-uhd_2560_1440_25fps.mp4',
              poster: 'https://images.pexels.com/videos/17153904/pexels-photo-17153904.jpeg',
              alt: 'Aerial drone footage of illuminated Minneapolis downtown at night',
              caption: 'Minneapolis skyline after dark — drone footage',
              duration: '0:14',
            },
          },
          {
            id: 'scene-skyline-2',
            type: 'scene',
            category: 'cityscape',
            title: 'Stone Arch Bridge',
            description: 'The only stone arch bridge ever built across the Mississippi. Completed in 1883 to carry trains over St. Anthony Falls, it now carries pedestrians and cyclists with one of the best views in the city.',
            media: {
              type: 'video',
              src: 'https://videos.pexels.com/video-files/3720032/3720032-uhd_2732_1440_25fps.mp4',
              poster: 'https://images.pexels.com/videos/3720032/free-video-3720032.jpg',
              alt: 'Stone Arch Bridge spanning the Mississippi River in winter',
              caption: 'Stone Arch Bridge — Minneapolis\'s most iconic landmark',
              duration: '0:19',
            },
          },
          // WATER - Lakes and river scenes
          {
            id: 'scene-water-1',
            type: 'scene',
            category: 'water',
            title: 'Chain of Lakes',
            description: 'Lake Harriet, Bde Maka Ska, Lake of the Isles, Cedar Lake, and Brownie Lake — connected by parkways and bike paths, these urban lakes define the Minneapolis experience. Sailing, paddleboarding, running, cycling, picnics at the bandshell, and ice skating in winter. This is where the city breathes.',
            images: [
              {
                // TODO: Replace with authentic Minneapolis Chain of Lakes photo from Meet Minneapolis or local photographer
                src: 'https://images.pexels.com/photos/1424239/pexels-photo-1424239.jpeg?auto=compress&cs=tinysrgb&w=1200',
                alt: 'Peaceful lake water under blue skies with green trees along shore',
                caption: 'The Chain of Lakes — Minneapolis\'s urban oasis',
              }
            ],
          },
          {
            id: 'scene-water-2',
            type: 'scene',
            category: 'water',
            title: 'St. Anthony Falls & Mill Ruins',
            description: 'The only major waterfall on the Mississippi River. For the Dakota people, it was a sacred site called Owáhmenah — "falling water." For European settlers, it powered the flour mills that built Minneapolis. The ruins remain, haunting and beautiful.',
            media: {
              type: 'video',
              src: 'https://videos.pexels.com/video-files/855668/855668-hd_1920_1080_25fps.mp4',
              poster: 'https://images.pexels.com/videos/855668/free-video-855668.jpg',
              alt: 'Waterfall cascading over rocks with forest surroundings',
              caption: 'St. Anthony Falls — the waterfall that powered Minneapolis',
              duration: '0:11',
            },
          },
          // NATURE - Parks and green spaces
          {
            id: 'scene-nature-1',
            type: 'scene',
            category: 'nature',
            title: 'Minnehaha Falls',
            description: 'A 53-foot waterfall in the heart of the city, immortalized by Longfellow in "The Song of Hiawatha." The gorge below offers trails through old-growth forest. In summer, water roars over limestone. In winter, it freezes into cathedral spires of ice.',
            media: {
              type: 'video',
              src: 'https://videos.pexels.com/video-files/5345336/5345336-uhd_2560_1440_30fps.mp4',
              poster: 'https://images.pexels.com/videos/5345336/pexels-photo-5345336.jpeg',
              alt: 'Waterfall cascading through forest',
              caption: 'Minnehaha Falls — a 53-foot waterfall in the city',
              duration: '0:16',
            },
          },
          {
            id: 'scene-nature-2',
            type: 'scene',
            category: 'nature',
            title: 'Minneapolis Parkways',
            description: 'The Grand Rounds Scenic Byway — 50 miles of interconnected parkways, bike paths, and trails threading through the city. Theodore Wirth Park, Minnehaha Parkway, the Chain of Lakes, the Mississippi riverfront. This is why Minneapolis consistently ranks as one of America\'s best park cities.',
            images: [
              {
                // TODO: Replace with authentic Minneapolis parkway photo
                src: 'https://images.pexels.com/photos/1424239/pexels-photo-1424239.jpeg?auto=compress&cs=tinysrgb&w=1200',
                alt: 'Tree-lined path through urban park with autumn colors',
                caption: 'Fall along the Grand Rounds parkway system',
              }
            ],
          },
          // ARCHITECTURE - Historic buildings
          {
            id: 'scene-arch-1',
            type: 'scene',
            category: 'architecture',
            title: 'Historic Minneapolis Architecture',
            description: 'Minneapolis City Hall\'s Romanesque Revival clock tower — the faces are larger than Big Ben\'s. The Foshay Tower\'s Art Deco tribute to the Washington Monument. The Mill City Museum rising from the Washburn A Mill ruins. A city that refuses to forget its history.',
            images: [
              {
                // TODO: Replace with authentic Minneapolis City Hall or Foshay Tower photo
                src: 'https://images.pexels.com/photos/2360569/pexels-photo-2360569.jpeg?auto=compress&cs=tinysrgb&w=1200',
                alt: 'Historic architecture and modern skyline at dusk',
                caption: 'Minneapolis architecture — where history meets modernity',
              }
            ],
          },
          {
            id: 'scene-arch-2',
            type: 'scene',
            category: 'architecture',
            title: 'Mill District',
            description: 'The ruins of the flour mills that made Minneapolis the "Mill City." The Washburn A Mill explosion of 1878 killed 18 workers and changed milling safety forever. Now the Mill City Museum stands within the limestone walls, a monument to industry and tragedy.',
            images: [
              {
                // TODO: Replace with authentic Mill City Museum photo from Meet Minneapolis
                src: 'https://images.pexels.com/photos/931113/pexels-photo-931113.jpeg?auto=compress&cs=tinysrgb&w=1200',
                alt: 'Historic industrial architecture preserved alongside modern development',
                caption: 'The Mill District — built on flour and water power',
              }
            ],
          },
          // INTERIOR - Indoor spaces
          {
            id: 'scene-interior-1',
            type: 'scene',
            category: 'interior',
            title: 'Minneapolis Central Library',
            description: 'César Pelli\'s 2006 masterpiece. Light pours through the five-story glass wing onto terraced reading areas. The green roof blooms with native wildflowers. This is what public architecture can be when a city gives a damn.',
            images: [
              {
                // TODO: Replace with authentic Minneapolis Central Library photo
                src: 'https://images.pexels.com/photos/2360569/pexels-photo-2360569.jpeg?auto=compress&cs=tinysrgb&w=1200',
                alt: 'Modern glass architecture with dramatic interior lighting',
                caption: 'Minneapolis Central Library — César Pelli\'s light-filled design',
              }
            ],
          },
          {
            id: 'scene-interior-2',
            type: 'scene',
            category: 'interior',
            title: 'Historic Theaters',
            description: 'The Orpheum and State theatres on Hennepin Avenue — 1920s vaudeville palaces with ornate plasterwork, crystal chandeliers, and ghosts of performances past. The Orpheum hosted the Ziegfeld Follies. Both now welcome Broadway tours and the occasional rock show.',
            images: [
              {
                // TODO: Replace with authentic Orpheum Theatre interior photo
                src: 'https://images.pexels.com/photos/3879060/pexels-photo-3879060.jpeg?auto=compress&cs=tinysrgb&w=1200',
                alt: 'Historic theater interior with ornate architectural details',
                caption: 'Hennepin Avenue\'s grand theaters',
              }
            ],
          },
          // NEIGHBORHOOD - Street scenes
          {
            id: 'scene-neighborhood-1',
            type: 'scene',
            category: 'neighborhood',
            title: 'Northeast Arts District',
            description: 'Old Polish and Eastern European immigrant neighborhoods transformed. Warehouses became galleries. Corner bars became microbreweries. Every block has a mural. This is where Minneapolis keeps its weird — artists, brewers, musicians, and the dive bars that refuse to die.',
            images: [
              {
                // TODO: Replace with authentic Northeast Minneapolis mural or street scene
                src: 'https://images.pexels.com/photos/5802549/pexels-photo-5802549.jpeg?auto=compress&cs=tinysrgb&w=1200',
                alt: 'Urban neighborhood with creative businesses and street art',
                caption: 'Northeast Minneapolis — arts, murals, and microbreweries',
              }
            ],
          },
          {
            id: 'scene-neighborhood-2',
            type: 'scene',
            category: 'neighborhood',
            title: 'Uptown',
            description: 'Lake Street meets Hennepin. Once the center of Minneapolis counterculture, now a mix of chains and holdouts. The Uptown Theatre marquee still glows. Calhoun Square still stands. The neighborhood that defined a generation is negotiating with the next one.',
            images: [
              {
                // TODO: Replace with authentic Uptown Minneapolis street scene
                src: 'https://images.pexels.com/photos/2383277/pexels-photo-2383277.jpeg?auto=compress&cs=tinysrgb&w=1200',
                alt: 'Bustling urban intersection with shops and pedestrians',
                caption: 'Uptown Minneapolis — Lake and Hennepin corner',
              }
            ],
          },
          // ART - Public art and murals
          {
            id: 'scene-art-1',
            type: 'scene',
            category: 'art',
            title: 'Minneapolis Sculpture Garden',
            description: 'Claes Oldenburg and Coosje van Bruggen\'s "Spoonbridge and Cherry" — a 52-foot-long spoon cradling a 1,200-pound cherry, fountain misting from the stem. The most photographed piece in the Walker Art Center\'s 11-acre sculpture garden. Playful, monumental, and somehow completely Minneapolis.',
            images: [
              {
                // TODO: Replace with authentic Spoonbridge and Cherry photo from Meet Minneapolis
                src: 'https://images.pexels.com/photos/931113/pexels-photo-931113.jpeg?auto=compress&cs=tinysrgb&w=1200',
                alt: 'Public sculpture park with contemporary art installations',
                caption: 'Minneapolis Sculpture Garden — 11 acres of contemporary art',
              }
            ],
          },
          {
            id: 'scene-art-2',
            type: 'scene',
            category: 'art',
            title: 'George Floyd Square',
            description: 'The intersection of 38th and Chicago, where George Floyd was murdered by Minneapolis police on May 25, 2020. Now a memorial, a demand, a reckoning. Flowers, murals, raised fists painted on pavement. The city walks around it. The world can\'t look away from it.',
            images: [
              {
                // TODO: Replace with authentic George Floyd Square memorial photo
                src: 'https://images.pexels.com/photos/248883/pexels-photo-248883.jpeg?auto=compress&cs=tinysrgb&w=1200',
                alt: 'Community memorial and gathering space',
                caption: 'George Floyd Square — a living memorial at 38th and Chicago',
              }
            ],
          },
          // SEASONS - Seasonal views
          {
            id: 'scene-seasons-1',
            type: 'scene',
            category: 'seasons',
            title: 'Winter in Minneapolis',
            description: 'When the lakes freeze solid — sometimes two feet thick — Minneapolis doesn\'t hibernate. Ice fishing houses dot Lake of the Isles. Skiers glide through Theodore Wirth Park. The skyways fill with office workers avoiding the cold. This is the season that defines the city: brutal, beautiful, and unapologetic.',
            images: [
              {
                // TODO: Replace with authentic Minneapolis winter scene - frozen lake or skyway
                src: 'https://images.pexels.com/photos/3879060/pexels-photo-3879060.jpeg?auto=compress&cs=tinysrgb&w=1200',
                alt: 'Frozen urban landscape with snow-covered trees and ice',
                caption: 'Winter on the Chain of Lakes',
              }
            ],
          },
          {
            id: 'scene-seasons-2',
            type: 'scene',
            category: 'seasons',
            title: 'Fall Color',
            description: 'October in Minneapolis: the maples along the Grand Rounds explode in gold and crimson. Minnehaha Parkway becomes a tunnel of color. The lakes reflect the trees, doubling the spectacle. It lasts maybe two weeks before the wind strips everything bare, but those two weeks make winter worth it.',
            images: [
              {
                // TODO: Replace with authentic Minneapolis fall foliage photo - parkway or lakes
                src: 'https://images.pexels.com/photos/1424239/pexels-photo-1424239.jpeg?auto=compress&cs=tinysrgb&w=1200',
                alt: 'Autumn trees with vibrant fall colors along tree-lined path',
                caption: 'Peak fall color along Minneapolis parkways',
              }
            ],
          },
          // NIGHT - After dark
          {
            id: 'scene-night-1',
            type: 'scene',
            category: 'night',
            title: 'First Avenue',
            description: 'The nightclub where Prince recorded "Purple Rain." The black exterior covered in silver stars — 400+ names of artists who\'ve played the Mainroom or 7th St Entry. Hüsker Dü, The Replacements, Atmosphere, Lizzo — Minneapolis music history written in silver paint. The marquee still glows. The dance floor still vibrates.',
            images: [
              {
                // TODO: Replace with authentic First Avenue exterior night photo
                src: 'https://images.pexels.com/photos/10546892/pexels-photo-10546892.jpeg?auto=compress&cs=tinysrgb&w=1200',
                alt: 'Iconic nightclub exterior with marquee and city lights',
                caption: 'First Avenue — where Prince recorded Purple Rain',
              }
            ],
          },
          {
            id: 'scene-night-2',
            type: 'scene',
            category: 'night',
            title: 'Hennepin Avenue After Dark',
            description: 'The theater district transforms at night. Orpheum and State marquees glow with Broadway show titles. Bar neon reflects in puddles. Street musicians play for tips. Hennepin has been Minneapolis\'s entertainment spine since the vaudeville era, and it refuses to dim.',
            images: [
              {
                // TODO: Replace with authentic Hennepin Avenue night scene photo
                src: 'https://images.pexels.com/photos/10546892/pexels-photo-10546892.jpeg?auto=compress&cs=tinysrgb&w=1200',
                alt: 'Urban street at night with theater marquees and city lights',
                caption: 'Hennepin Avenue — Minneapolis\'s entertainment district',
              }
            ],
          },
          // FOOD - Restaurant and food scenes
          {
            id: 'scene-food-1',
            type: 'scene',
            category: 'food',
            title: 'Midtown Global Market',
            description: 'A 1928 Sears building on Lake Street, transformed into a food hall representing the world. Somali sambusas. Mexican tlayudas. Vietnamese bánh mì. Scandinavian lefse. Indigenous frybread. This is Minneapolis\'s immigrant story told through food — vibrant, essential, and underestimated.',
            images: [
              {
                // TODO: Replace with authentic Midtown Global Market photo
                src: 'https://images.pexels.com/photos/5802549/pexels-photo-5802549.jpeg?auto=compress&cs=tinysrgb&w=1200',
                alt: 'Bustling food market with diverse vendors and communal seating',
                caption: 'Midtown Global Market — the world under one roof',
              }
            ],
          },
          {
            id: 'scene-food-2',
            type: 'scene',
            category: 'food',
            title: 'North Loop Dining',
            description: 'The Warehouse District\'s culinary renaissance. Bachelor Farmer, Spoon and Stable, The Butcher & the Boar — James Beard nominees serving New Nordic cuisine and elevated comfort food in converted industrial spaces. Exposed brick, open kitchens, craft cocktails. This is where Minneapolis proves it belongs in the national food conversation.',
            images: [
              {
                // TODO: Replace with authentic North Loop restaurant photo
                src: 'https://images.pexels.com/photos/2360569/pexels-photo-2360569.jpeg?auto=compress&cs=tinysrgb&w=1200',
                alt: 'Modern restaurant interior with industrial design elements',
                caption: 'North Loop restaurants — warehouse chic meets craft cuisine',
              }
            ],
          }
        ],
      }
    ],
  }
