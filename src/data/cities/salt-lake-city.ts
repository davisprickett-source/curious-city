import { CityData } from '@/types/content'

export const salt_lake_city: CityData = {
    slug: 'salt-lake-city',
    name: 'Salt Lake City',
    tagline: 'Where mountains meet faith and rebellion',
    content: [
      {
        id: 'intro-text',
        type: 'text',
        content: 'Welcome to Salt Lake City — a city of stunning peaks, peculiar history, and surprising contradictions. Here\'s what we\'re curious about this week.',
      },
      {
        id: 'featured-card',
        type: 'card',
        title: 'Zion in the Desert',
        description: 'How Mormon pioneers built an empire in the desert, and what happens when the empire starts to shift.',
        meta: 'Essay',
        variant: 'featured',
        href: '/salt-lake-city/essay/zion-in-the-desert',
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
            title: 'The Best Après-Ski in the Wasatch',
            description: 'Where locals actually go after a powder day.',
            meta: 'Guide',
            href: '/salt-lake-city/apres-ski',
          },
          {
            title: 'Downtown\'s Surprising Art Scene',
            description: 'Galleries, murals, and creative spaces you didn\'t know existed.',
            meta: 'Feature',
            href: '/salt-lake-city/art-scene',
          },
          {
            title: 'Understanding Utah Liquor Laws',
            description: 'A practical guide to drinking in the Beehive State.',
            meta: 'Guide',
            variant: 'compact',
            href: '/salt-lake-city/liquor-laws',
          }
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
        title: 'Salt Lake City Curiosities',
        teaser: 'Secret temple tunnels, modern mummification pyramids, and the Great Salt Lake\'s mysteries',
        intro: 'The LDS church built this city from desert, and the contradictions run deep—from secret temple tunnels to a thriving counterculture that exists precisely because the dominant culture is so dominant. Add a flamingo that survived 18 winters, a pyramid where you can get mummified, and a lake so salty it makes swimming feel like floating in soup.',
        items: [
          {
            id: 'slc-curiosity-1',
            type: 'curiosity',
            category: 'culture',
            title: 'A flamingo named Pink Floyd survived 18 Utah winters',
            body: 'In 1988, a Chilean flamingo escaped from Tracy Aviary and made the Great Salt Lake its home for 18 years. Pink Floyd—as locals named it—survived blizzards that should have killed it, dining exclusively on brine shrimp while every other bird with any sense flew south for the winter. It was last seen in 2005, likely having died of old age, having outlived every reasonable expectation for a tropical bird stranded in the desert. The audacity is inspiring.',
            year: '1988',
            image: {
              src: '/salt-lake-city/curiosities/flamingo.png',
              alt: 'Pink Floyd the flamingo at the Great Salt Lake',
            },
            source: 'Tracy Aviary records',
            location: {
              name: 'Great Salt Lake',
              stillExists: false,
            },
          },
          {
            id: 'slc-curiosity-2',
            type: 'curiosity',
            category: 'underground',
            title: 'Secret tunnels connect the Temple to church headquarters',
            body: 'Beneath Temple Square, a network of tunnels allows church leaders to move between the Salt Lake Temple, the Church Office Building, and other facilities without surfacing. Built for security and convenience in the 1960s, the tunnels became secure passages for dignitaries during the 2002 Winter Olympics. The church doesn\'t publicly discuss them, which only makes them more intriguing. Every theocracy needs its secret corridors.',
            year: '1960s',
            image: {
              src: '/salt-lake-city/curiosities/SLC-tunnels.png',
              alt: 'Underground tunnels beneath Temple Square',
            },
            source: 'Salt Lake Tribune investigative reports',
            location: {
              name: 'Temple Square',
              stillExists: true,
            },
          },
          {
            id: 'slc-curiosity-3',
            type: 'curiosity',
            category: 'law',
            title: 'Grocery store beer was capped at 3.2% until 2019',
            body: 'For decades, Utah law restricted beer sold outside state-run liquor stores to 3.2% alcohol by weight—essentially beer-flavored water. National breweries created special "Utah formulations" of their products. The law finally changed in November 2019, but quirks remain: no wine at grocery stores, bars still pour behind "Zion curtains," and the private club system makes no sense to anyone, including Utahns. Progress is incremental in the Beehive State.',
            year: '2019',
            image: {
              src: '/salt-lake-city/curiosities/beer.png',
              alt: 'Utah beer laws and 3.2% beer regulations',
            },
            source: 'Utah Department of Alcoholic Beverage Control',
            location: {
              name: 'State of Utah',
              stillExists: true,
            },
          },
          {
            id: 'slc-curiosity-ad-1',
            type: 'ad',
            size: 'banner',
          },
          {
            id: 'slc-curiosity-4',
            type: 'curiosity',
            category: 'nature',
            title: 'The Great Salt Lake is dying—and it\'s an emergency',
            body: 'The Great Salt Lake has lost 73% of its water since pioneers arrived, and it\'s not coming back. Agricultural diversions siphon off the rivers that once fed it. As the lakebed dries, toxic dust laden with arsenic and heavy metals blows into the valley, threatening 2.5 million people. Scientists warn it could become "the next Aral Sea"—an ecological catastrophe visible from space. The lake that defined this city is evaporating in real time.',
            image: {
              src: '/salt-lake-city/curiosities/shrnking-lake.png',
              alt: 'Shrinking Great Salt Lake with exposed lakebed',
            },
            source: 'Brigham Young University Great Salt Lake study',
            location: {
              name: 'Great Salt Lake',
              stillExists: true,
            },
          },
          {
            id: 'slc-curiosity-5',
            type: 'curiosity',
            category: 'science',
            title: 'The lake produces half the world\'s brine shrimp eggs',
            body: 'Those tiny "Sea-Monkeys" you grew up with? They probably came from the Great Salt Lake. The brine shrimp cyst harvest is a $60 million annual industry—eggs shipped worldwide for aquaculture feed and novelty kits marketed to children who don\'t realize they\'re raising crustacean livestock. As the lake shrinks, this bizarre industry faces extinction, along with the millions of migratory birds that depend on the shrimp. Even the weird economies are collapsing.',
            image: {
              src: '/salt-lake-city/curiosities/brine-shrimp.png',
              alt: 'Brine shrimp in the Great Salt Lake',
            },
            source: 'Great Salt Lake Ecosystem Program',
            location: {
              name: 'Great Salt Lake',
              stillExists: true,
            },
          },
          {
            id: 'slc-curiosity-6',
            type: 'curiosity',
            category: 'architecture',
            title: 'Streets were designed wide enough for oxen U-turns',
            body: 'Brigham Young mandated streets wide enough for a team of oxen pulling a wagon to turn around completely without—as he allegedly put it—"resorting to profanity." Main Street is 132 feet wide, roughly the width of a modern four-lane highway with parking on both sides. The grid system uses Temple Square as its origin point: every address tells you exactly how far from the temple you are. Urban planning as theodicy.',
            image: {
              src: '/salt-lake-city/curiosities/SLC-streets.png',
              alt: 'Wide Salt Lake City streets designed for oxen',
            },
            source: 'Salt Lake City Planning Division',
          },
          {
            id: 'slc-curiosity-7',
            type: 'curiosity',
            category: 'legend',
            title: 'The Miracle of the Gulls was probably exaggerated',
            body: 'The story goes: in 1848, California gulls arrived during a cricket infestation and saved Mormon crops from destruction. But contemporary journals are sparse and contradictory. The gulls ate crickets, then regurgitated them and ate more—because that\'s what seabirds do. Modern ecologists note gulls naturally follow insect swarms. The "miracle" narrative developed decades later, conveniently. Still, Utah made the California gull its state bird and erected a monument in Temple Square. Never let facts ruin a good founding myth.',
            year: '1848',
            images: [
              {
                src: '/salt-lake-city/curiosities/gulls-1.png',
                alt: 'California gulls at the Great Salt Lake',
              },
              {
                src: '/salt-lake-city/curiosities/gulls-2.png',
                alt: 'Seagull Monument at Temple Square',
              }
            ],
            source: 'Utah Historical Quarterly',
            location: {
              name: 'Temple Square (Seagull Monument)',
              stillExists: true,
            },
          },
          {
            id: 'slc-curiosity-ad-2',
            type: 'ad',
            size: 'rectangle',
          },
          {
            id: 'slc-curiosity-8',
            type: 'curiosity',
            category: 'legend',
            title: 'The "North Shore Monster" terrorized 1870s lake resorts',
            body: 'In the 1870s, workers at a Great Salt Lake resort reported a massive creature with a crocodile head and whale body lurking in the shallows. Newspapers dubbed it the "North Shore Monster" and offered a $1 million bounty. The creature was never caught, though one skeptical account claims it was just an extremely large buffalo carcass bobbing in the waves. Either way, lake monsters make better headlines than dead livestock.',
            year: '1877',
            image: {
              src: '/salt-lake-city/curiosities/monster.png',
              alt: 'North Shore Monster of the Great Salt Lake',
            },
            source: 'Deseret News historical archives',
            location: {
              name: 'Great Salt Lake',
              stillExists: false,
            },
          },
          {
            id: 'slc-curiosity-9',
            type: 'curiosity',
            category: 'history',
            title: 'Congress rejected the name "Deseret" and imposed "Utah"',
            body: 'Mormon pioneers wanted to call their territory "Deseret"—a word from the Book of Mormon meaning "honeybee." Congress rejected it in 1850 and imposed "Utah" instead, derived from the Ute people whose land it actually was. The beehive symbol remained, and Utah is still called the "Beehive State." Church members lobbied to get "Deseret" approved for 45 years before finally giving up. Some battles you can\'t win, even with divine mandate.',
            year: '1850',
            image: {
              src: '/salt-lake-city/curiosities/deseret.png',
              alt: 'Deseret beehive symbol of Utah',
            },
            source: 'Church History Library',
            location: {
              name: 'State of Utah',
              stillExists: true,
            },
          },
          {
            id: 'slc-curiosity-10',
            type: 'curiosity',
            category: 'nature',
            title: 'Winter inversions trap pollution worse than Beijing',
            body: 'Cold air settles in the valley, warmer air above it creates a lid, and pollution accumulates for days or weeks with nowhere to go. On bad inversion days, Salt Lake\'s PM2.5 levels exceed Beijing and Delhi. The Wasatch Mountains—normally the city\'s greatest selling point—become a prison wall. Residents flee to ski resorts above the inversion layer, literally ascending to breathe. The irony is not lost on anyone.',
            image: {
              src: '/salt-lake-city/curiosities/pollution.png',
              alt: 'Winter inversion pollution in Salt Lake Valley',
            },
            source: 'Utah Division of Air Quality',
          },
          {
            id: 'slc-curiosity-11',
            type: 'curiosity',
            category: 'nature',
            title: 'Alien mineral towers grow from the lake in winter',
            body: 'In winter, mirabilite mounds—towers of hydrated sodium sulfate—grow up to 3 feet tall from the lake bottom, creating an otherworldly landscape that looks like it belongs on another planet. They form when the lake\'s salt chemistry hits precise temperatures and evaporation thresholds. By spring, they dissolve back into the brine without a trace. Scientists believe only a handful of places on Earth produce these formations. They\'re as beautiful as they are temporary.',
            image: {
              src: '/salt-lake-city/curiosities/salt-mounds.png',
              alt: 'Mirabilite mound formations in the Great Salt Lake',
            },
            source: 'Utah Geological Survey',
            location: {
              name: 'Great Salt Lake',
              stillExists: true,
            },
          },
          {
            id: 'slc-curiosity-12',
            type: 'curiosity',
            category: 'science',
            title: 'Ancient Lake Bonneville\'s shoreline is carved into every mountain',
            body: 'About 14,500 years ago, Lake Bonneville covered 20,000 square miles of Utah at depths over 1,000 feet—roughly the size of Lake Michigan. Then it catastrophically breached Red Rock Pass and flooded into Idaho with a discharge greater than the Amazon River. Today, horizontal terraces carved into the Wasatch Mountains mark where the ancient shoreline once stood, visible from anywhere in the valley. You\'re living at the bottom of a vanished sea.',
            year: '14,500 BCE',
            image: {
              src: '/salt-lake-city/curiosities/shoreline.png',
              alt: 'Ancient Lake Bonneville shoreline terraces on Wasatch Mountains',
            },
            source: 'Utah Geological Survey',
            location: {
              name: 'Wasatch Front',
              stillExists: true,
            },
          },
          {
            id: 'slc-curiosity-13',
            type: 'curiosity',
            category: 'culture',
            title: 'Temple Square draws more visitors than the Grand Canyon',
            body: 'Around 5 million people visit Temple Square annually—more than the Grand Canyon\'s 4.5 million. The 35-acre complex is meticulously maintained, free to enter, and staffed by missionaries from around the world who will happily answer questions or offer tours. You can\'t enter the Temple itself unless you\'re a member in good standing, but the grounds, visitor centers, and the acoustically perfect Tabernacle are open to all. It\'s Disneyland for Latter-day Saints, and the crowds prove it works.',
            image: {
              src: '/salt-lake-city/curiosities/visitors-temple-square.png',
              alt: 'Visitors at Temple Square in Salt Lake City',
            },
            source: 'Church of Jesus Christ of Latter-day Saints',
            location: {
              name: 'Temple Square',
              stillExists: true,
            },
          },
          {
            id: 'slc-curiosity-14',
            type: 'curiosity',
            category: 'culture',
            title: 'The Tabernacle Choir nearly disbanded multiple times',
            body: 'In its early years, the Mormon Tabernacle Choir was an amateur group that nearly fell apart repeatedly. Brigham Young personally intervened to keep it going, recognizing its propaganda value. Today, the Tabernacle Choir at Temple Square (rebranded in 2018) has 360 members, has performed at every presidential inauguration since Lyndon Johnson, and its weekly broadcast has run continuously since 1929—the longest-running network broadcast in American history. Persistence pays off.',
            year: '1847',
            image: {
              src: '/salt-lake-city/curiosities/choir.png',
              alt: 'Tabernacle Choir at Temple Square performing',
            },
            source: 'Tabernacle Choir historical archives',
            location: {
              name: 'Salt Lake Tabernacle',
              stillExists: true,
            },
          },
          {
            id: 'slc-curiosity-balloon',
            type: 'curiosity',
            category: 'history',
            title: 'Japanese balloon bombs floated over Utah during WWII',
            body: 'In 1945, a rancher in Box Elder County spotted a 33-foot balloon drifting over Blue Creek Valley. Sheriff Warren Hyde grabbed the strange device with his bare hands and held on for 45 minutes in the freezing wind while help was summoned. It was a Japanese Fu-Go balloon bomb—one of 9,300 launched across the Pacific on the jet stream. The FBI swore Hyde to silence for decades. The sand in the ballast bags helped identify Japanese launch sites, leading to bombing raids that ended the program.',
            year: '1945',
            image: {
              src: '/Salt-Lake-City/articles/balloon-bomb.png',
              alt: 'Japanese Fu-Go balloon bomb during WWII',
            },
            source: 'National Archives, declassified WWII records',
            location: {
              name: 'Blue Creek Valley, Box Elder County',
              stillExists: true,
            },
          },
          {
            id: 'slc-curiosity-15',
            type: 'curiosity',
            category: 'nature',
            title: 'Utah trademarked "The Greatest Snow on Earth"',
            body: 'Utah literally trademarked the phrase "The Greatest Snow on Earth" and prints it on license plates, because why be humble when you can be legally protected? The science actually backs it up: the Great Salt Lake adds moisture to Pacific storms while the Wasatch Mountains wring out especially light, dry powder—averaging 500 inches annually at Alta. Locals will argue for hours about whether it\'s objectively better than Colorado\'s snow. The trademark suggests they\'ve already won.',
            image: {
              src: '',
              alt: 'Deep powder snow in the Wasatch Mountains',
            },
            source: 'Utah Office of Tourism',
            location: {
              name: 'Wasatch Mountains',
              stillExists: true,
            },
          }
        ],
      },
      {
        id: 'iconic-spots',
        type: 'section',
        title: 'Iconic Spots',
        intro: 'These are Salt Lake City\'s landmarks — the places that define the valley. Famous for good reason.',
        items: [
          {
            id: 'iconic-1',
            type: 'iconic-spot',
            name: 'Spiral Jetty',
            category: 'Art Installation',
            description: 'Robert Smithson\'s iconic 1970 earthwork sculpture spirals 1,500 feet into the Great Salt Lake. It\'s a pilgrimage site for art lovers, but getting there requires a long drive on dirt roads and the water level has to be right. When visible, it\'s otherworldly.',
            images: [
              {
                src: '/images/gems/spiral-jetty.jpg',
                alt: 'Spiral Jetty earthwork sculpture extending into the pink waters of Great Salt Lake',
              }
            ],
            address: 'Rozel Point, Box Elder County, UT',
            coordinates: { lat: 41.4375, lng: -112.6689 },
            hours: 'Always open (daylight recommended)',
            price: 'Free',
            website: 'https://www.diaart.org/visit/visit-our-locations-702/robert-smithson-spiral-jetty',
            tip: 'Check water levels before going — when the lake is high, it\'s underwater',
          },
          {
            id: 'iconic-2',
            type: 'iconic-spot',
            name: 'Bonneville Salt Flats',
            category: 'Natural Wonder',
            description: 'Ninety miles west of Salt Lake, the salt flats are surreal — perfectly flat white crust stretching to the horizon. Land speed records have been set here since 1914. Best after rain when a thin layer of water creates perfect reflections.',
            images: [
              {
                src: '/images/gems/bonneville-salt-flats.jpg',
                alt: 'Vast white salt flats stretching to the horizon under blue sky',
              }
            ],
            address: 'Bonneville Salt Flats, Wendover, UT',
            coordinates: { lat: 40.7578, lng: -113.8983 },
            hours: 'Always open',
            price: 'Free',
            tip: 'Bring water — there\'s nothing out there and it gets hot',
          },
          {
            id: 'iconic-3',
            type: 'iconic-spot',
            name: 'Red Butte Garden',
            category: 'Garden',
            description: 'A stunning botanical garden in the foothills above the university. Native plants, water features, mountain views, and summer concerts. The hiking trails connect to the Wasatch foothills.',
            images: [
              {
                src: '/images/gems/red-butte-garden.jpg',
                alt: 'Colorful flower displays at Red Butte Garden with mountain backdrop',
              }
            ],
            address: '300 Wakara Way, Salt Lake City, UT 84108',
            coordinates: { lat: 40.7664, lng: -111.8261 },
            hours: '9am-7:30pm daily (seasonal)',
            price: '$16 adults',
            website: 'https://redbuttegarden.org',
            tip: 'The summer concert series brings great acts to an intimate outdoor venue',
          },
          {
            id: 'iconic-4',
            type: 'iconic-spot',
            name: 'This Is The Place Heritage Park',
            category: 'Living History',
            description: 'A reconstructed pioneer village at the spot where Brigham Young reportedly declared "This is the place." Costumed interpreters, historic buildings, and a monument marking where the Mormon Trail ended.',
            images: [
              {
                src: '/images/gems/this-is-the-place.jpg',
                alt: 'Historic pioneer village with covered wagons and period buildings',
              }
            ],
            address: '2601 Sunnyside Ave, Salt Lake City, UT 84108',
            coordinates: { lat: 40.7522, lng: -111.8147 },
            hours: 'Mon-Sat 10am-5pm (seasonal)',
            price: '$14 adults',
            website: 'https://thisistheplace.org',
            tip: 'Go when school groups aren\'t there for a quieter experience',
          },
          {
            id: 'iconic-5',
            type: 'iconic-spot',
            name: 'Gilgal Sculpture Garden',
            category: 'Park',
            description: 'A bizarre sculpture garden built in secret by a Mormon bishop over 12 years. Features a sphinx with Joseph Smith\'s face, stone legs in grass, and cryptic inscriptions. Strange, profound, and genuinely unique.',
            images: [
              {
                src: '/images/gems/gilgal-garden.jpg',
                alt: 'Stone sphinx sculpture with Joseph Smith\'s face at Gilgal Garden',
              }
            ],
            address: '749 E 500 S, Salt Lake City, UT 84102',
            coordinates: { lat: 40.7594, lng: -111.8692 },
            hours: '8am to dusk daily',
            price: 'Free',
            accessibility: 'Mostly accessible, some uneven paths',
            tip: 'Read the inscriptions — the builder had a lot on his mind',
          }
        ],
      },
      {
        id: 'hidden-gems',
        type: 'section',
        title: 'Hidden Salt Lake',
        teaser: 'A modern mummification pyramid, underground temple tunnels, and hidden desert swimming holes',
        intro: 'These aren\'t in the guidebooks. A pyramid offering modern mummification, underground tunnels beneath Temple Square, secret viewpoints with better views than the tourist spots, hidden swimming holes, and obscure museums locals guard fiercely. This is where Salt Lake gets weird.',
        items: [
          {
            id: 'gem-underground-1',
            type: 'hidden-gem',
            name: 'Summum Pyramid - Modern Mummification',
            category: 'Unusual Religious Site',
            description: 'In a quiet Salt Lake neighborhood sits a 40-foot bronze-and-concrete pyramid that would look more at home in Giza than Utah—and inside, a religious movement practices the only modern mummification on Earth. Summum was founded in 1975 by Claude "Corky" Nowell, who claimed to have received teachings from advanced beings. When Corky died in 2008, his followers mummified him in a gold-covered bronze sarcophagus that now rests inside the pyramid. Over 1,500 people have arranged for their own future mummifications; more than 600 pets have already been preserved. The process takes 77 days and costs around $67,000 for humans. The building is legally zoned as a bonded winery—they produce "nectar publications" (ceremonial wine)—because Utah wouldn\'t approve a pyramid-shaped church. Tours are free, surreal, and available by appointment.',
            images: [
              {
                src: '/Salt-Lake-City/hidden-gems/pyramid-1.png',
                alt: 'Modern pyramid structure in urban setting',
              },
              {
                src: '/Salt-Lake-City/hidden-gems/pyramid-2.png',
                alt: 'Summum Pyramid interior',
              }
            ],
            address: 'Salt Lake City (exact address by appointment)',
            coordinates: { lat: 40.7608, lng: -111.8910 },
            hours: 'Tours by appointment only',
            price: 'Free tours',
            website: 'https://www.summum.us',
            tip: 'Ask about the mummified cats—they\'re displayed in the meditation room.',
          },
          {
            id: 'gem-museum-1',
            type: 'hidden-gem',
            name: 'Price Museum of Speed',
            category: 'Private Car Museum',
            description: 'Hidden in an unassuming downtown building is one of the most significant private racing collections in America—and it\'s open to the public exactly three hours per month. The Mormon Meteor III is the crown jewel: Ab Jenkins drove this streamlined beast to 24-hour speed records on the Bonneville Salt Flats in 1940, averaging 161 mph for an entire day and night. The collection includes over 30 racing machines spanning a century—a 1904 Peerless Green Dragon, a 1929 Bugatti Type 35B, Indianapolis veterans, Grand Prix legends. John Price spent decades quietly assembling cars that tell the history of human obsession with going faster. No crowds, no gift shop, no velvet ropes—just you, the cars, and sometimes Price himself explaining why a particular engine note still haunts him.',
            images: [
              {
                src: '/Salt-Lake-City/hidden-gems/speed-1.png',
                alt: 'Vintage race car collection in private museum',
              },
              {
                src: '/Salt-Lake-City/hidden-gems/speed-2.png',
                alt: 'Historic racing vehicles at Price Museum',
              },
              {
                src: '/Salt-Lake-City/hidden-gems/speed-3.png',
                alt: 'Mormon Meteor III at Price Museum of Speed',
              }
            ],
            address: '165 E 600 S, Salt Lake City, UT 84111',
            coordinates: { lat: 40.7607, lng: -111.8860 },
            hours: '2nd Wednesday of month, 9am-12pm (or by appointment)',
            price: 'Free',
            tip: 'Call (801) 906-0157 to confirm—if Price is traveling, it stays locked.',
          },
          {
            id: 'gem-museum-2',
            type: 'hidden-gem',
            name: 'Pioneer Memorial Museum Oddities',
            category: 'Historical Museum',
            description: 'The Daughters of Utah Pioneers run this 38-room museum that officially celebrates Mormon pioneer heritage—but wander past the quilts and wagon wheels and you\'ll find one of America\'s strangest accidental collections. Bottles filled with human teeth extracted during the trek west. Victorian mourning jewelry woven from the hair of the dead. A taxidermied two-headed lamb born on a frontier farm. A petrified potato carried across the plains as a good luck charm. Rattlesnake rattles, dozens of them, collected from the snakes that made desert nights dangerous. A hand-carved wooden leg that walked someone to Zion. A bloodstone that pioneers believed could stop hemorrhaging. The museum doesn\'t play up the weirdness—it\'s all presented with the same earnest reverence as the spinning wheels and butter churns. That\'s what makes it perfect: you have to hunt for the bizarre, and it\'s everywhere.',
            images: [
              {
                src: '/Salt-Lake-City/hidden-gems/pioneer-1.png',
                alt: 'Victorian-era museum interior with unusual historical artifacts',
              },
              {
                src: '/Salt-Lake-City/hidden-gems/pioneer-2.png',
                alt: 'Pioneer Memorial Museum oddities collection',
              },
              {
                src: '/Salt-Lake-City/hidden-gems/pioneer-3.png',
                alt: 'Historic pioneer artifacts display',
              }
            ],
            address: '300 N Main Street, Salt Lake City, UT',
            coordinates: { lat: 40.7728, lng: -111.8894 },
            hours: 'Monday-Friday, 9am-4pm',
            price: 'Free',
            tip: 'The hair art is on the second floor—look for the Victorian wreaths made entirely of human hair.',
          },
          {
            id: 'gem-cemetery-1',
            type: 'hidden-gem',
            name: 'Lilly E. Gray\'s "Victim of the Beast 666" Grave',
            category: 'Cemetery Oddity',
            description: 'Lilly E. Gray died of natural causes in 1958. She was 77, had no criminal record, and by all accounts lived an unremarkable life. But her gravestone—"Victim of the Beast 666"—has drawn thousands of visitors and spawned decades of speculation. Was she murdered by a cult? Possessed? The truth is stranger and sadder: her husband Elmer was a paranoid anti-government eccentric who spent time in prison and believed "the beast" was the federal government. When Lilly died, Elmer blamed them and paid for the cryptic epitaph that turned an ordinary grave into Salt Lake\'s most mysterious landmark. Researchers have traced Elmer\'s paper trail—arrests, letters, grievances—and found a man at war with institutions he believed had persecuted him. Lilly became his final monument to that rage. Her grave is the most visited in the cemetery, surrounded by the unremarkable dead, forever marked by her husband\'s obsession.',
            images: [
              {
                src: '/salt-lake-city/dark-history/lily-gray.png',
                alt: 'Lilly E. Gray\'s mysterious headstone marked "Victim of the Beast 666"',
              }
            ],
            address: 'Salt Lake City Cemetery, Section X1',
            coordinates: { lat: 40.7769, lng: -111.8623 },
            hours: 'Cemetery hours',
            price: 'Free',
            website: 'https://www.slc.gov/parks/cemeteries/slc-cemetery/',
            tip: 'While you\'re here: the cemetery also holds Lester Wire (invented the traffic light) and "Madame Pattirini," a cross-dressing soprano whose true identity wasn\'t revealed until death.',
          },
          {
            id: 'gem-nature-1',
            type: 'hidden-gem',
            name: 'Neff\'s Canyon',
            category: 'Hidden Trail',
            description: 'While tourists and Instagram hikers clog Mill Creek Canyon every weekend, locals slip away to Neff\'s Canyon—a brutal, beautiful 7-mile climb that gains 3,562 feet and rewards with the kind of solitude Salt Lake\'s popular trails forgot decades ago. The trailhead hides at the end of a residential street in Millcreek, unmarked enough that most people drive right past. The canyon is shaded and creek-fed in summer, golden with aspens in fall, and snowshoe-worthy in winter. Wildflowers carpet the meadow halfway up. The ridge at the top offers panoramic views into Big Cottonwood Canyon that feel earned, not given. Neff\'s is where Salt Lakers go when they remember why they moved here—and where they don\'t tell newcomers about.',
            images: [
              {
                src: '/Salt-Lake-City/hidden-gems/neffs-1.png',
                alt: 'Mountain canyon trail with creek and aspen trees',
              },
              {
                src: '/Salt-Lake-City/hidden-gems/neffs-2.png',
                alt: 'Neff\'s Canyon trail views',
              },
              {
                src: '/Salt-Lake-City/hidden-gems/neffs-3.png',
                alt: 'Wildflowers along Neff\'s Canyon',
              }
            ],
            address: '4275 S 4260 E (end of White Way), Millcreek',
            coordinates: { lat: 40.6969, lng: -111.7772 },
            hours: 'Dawn to dusk; no parking after 10pm',
            price: 'Free',
            tip: 'Start early—the meadow at mile 3 is perfect for sunrise, and you\'ll beat the heat on the exposed upper sections.',
          },
          {
            id: 'gem-nature-2',
            type: 'hidden-gem',
            name: 'Wall Lake',
            category: 'Secret Swimming Hole',
            description: 'Everyone knows Crystal Lake in the Uintas—it\'s the first lake past the trailhead, and on summer weekends it\'s a zoo. But keep walking another mile and the crowds vanish. Wall Lake sits in a cirque of granite, its water an impossible shade of icy green, with cliffs at the southeastern end tall enough to jump from if you\'re brave and stupid in equal measure. The lake is deep, cold even in August, and ringed by wildflowers that somehow survive at 10,000 feet. Locals treat Wall Lake like a secret handshake—mentioning it to the right people signals you know the real Wasatch. Arrive at dawn on a Tuesday and you might have the whole thing to yourself. Show up on a Saturday and you\'ll share it with every other local who reads articles like this one.',
            images: [
              {
                src: '/Salt-Lake-City/hidden-gems/wall-lake-1.png',
                alt: 'Mountain lake with cliffs and clear green water',
              },
              {
                src: '/Salt-Lake-City/hidden-gems/wall-lake-2.png',
                alt: 'Wall Lake swimming hole in the Uintas',
              }
            ],
            address: 'Uinta Mountains (about 1 hour from SLC)',
            coordinates: { lat: 40.5983, lng: -110.9625 },
            hours: 'Dawn to dusk',
            price: 'Free',
            tip: 'The cliff jumping spot is at the far end—test depth before you leap. Water temp rarely breaks 60°F.',
          },
          {
            id: 'slc-gem-ad-1',
            type: 'ad',
            size: 'rectangle',
          },
          {
            id: 'gem-park-1',
            type: 'hidden-gem',
            name: 'Allen Park (Hobbitville)',
            category: 'Historic Park',
            description: 'For decades, Salt Lake children whispered about "Hobbitville"—a mysterious property along Emigration Creek where tiny houses dotted the woods, peacocks roamed free, and strange hermits supposedly lived in seclusion. Parents warned kids away. Teenagers snuck in anyway. The truth was weirder than the legends: in the 1930s, a wealthy couple built a bird sanctuary here, then opened it to artists and eccentrics who constructed whimsical cabins among the trees. By the 1960s it was a counterculture commune. By the 1980s it was abandoned, overgrown, and perfect for urban mythology. In 2020, Salt Lake finally acquired the 8-acre property and opened it to the public. The peacocks are gone, but the tiny houses remain—hobbit-sized structures slowly being reclaimed by the forest, monuments to a Salt Lake that existed before conformity became the brand.',
            images: [
              {
                src: '/Salt-Lake-City/hidden-gems/hobbitville-1.png',
                alt: 'Small artistic cabins in wooded park setting',
              },
              {
                src: '/Salt-Lake-City/hidden-gems/hobbitville-2.png',
                alt: 'Allen Park Hobbitville structures',
              },
              {
                src: '/Salt-Lake-City/hidden-gems/hobbitville-3.png',
                alt: 'Whimsical buildings at Hobbitville',
              }
            ],
            address: 'Along Emigration Creek, Salt Lake City',
            coordinates: { lat: 40.7640, lng: -111.8403 },
            hours: 'Park hours',
            price: 'Free',
            tip: 'The trail along Emigration Creek connects to the larger trail system—you can walk here from the University.',
          },
          {
            id: 'gem-viewpoint-1',
            type: 'hidden-gem',
            name: 'Salt Lake Public Library Rooftop Garden',
            category: 'Secret Viewpoint',
            description: 'Moshe Safdie designed Salt Lake\'s main library to be climbed—a curved glass-and-concrete building with a public walkway that spirals to the roof. Most visitors never make it past the books. Their loss. The rooftop garden offers 360-degree views of downtown, the Wasatch Range, and the Great Salt Lake, plus reading nooks, native plants, and a working bee farm that produces honey sold in the gift shop. At sunset, the mountains turn pink and the city glows amber and you remember that Salt Lake, for all its contradictions, occupies one of the most dramatic settings in North America. All of this is free, open during library hours, and almost entirely ignored by tourists who came for Temple Square and left without looking up.',
            images: [
              {
                src: '/Salt-Lake-City/hidden-gems/rooftop-garden-1.png',
                alt: 'Urban rooftop garden with city skyline views',
              },
              {
                src: '/Salt-Lake-City/hidden-gems/rooftop-2.png',
                alt: 'Salt Lake Library rooftop garden',
              }
            ],
            address: 'Main Library, downtown SLC',
            coordinates: { lat: 40.7630, lng: -111.8883 },
            hours: 'Library hours',
            price: 'Free',
            website: 'https://services.slcpl.org',
            tip: 'Take the elevator to the 5th floor, then follow signs to the rooftop. The urban garden path winds past reading alcoves perfect for hiding with a book.',
          },
          {
            id: 'gem-viewpoint-2',
            type: 'hidden-gem',
            name: 'Church Office Building Observation Deck',
            category: 'Secret Viewpoint',
            description: 'The LDS Church\'s 28-story administrative headquarters dominates Temple Square—and on the top floor, open to anyone who asks, is one of the best free views in the American West. The observation deck offers floor-to-ceiling windows facing every direction: Temple Square directly below, the Wasatch Range to the east, the Great Salt Lake shimmering to the northwest, and downtown Salt Lake spreading south. Most tourists spend hours at Temple Square without ever knowing they can ride an elevator to the top of the adjacent tower. There\'s a small exhibit about church history, but the real draw is the view. Free, air-conditioned, and somehow always uncrowded. You don\'t have to be Mormon. You just have to know it exists.',
            images: [
              {
                src: '/Salt-Lake-City/hidden-gems/observation-deck-1.png',
                alt: 'Panoramic city view from high-rise observation deck',
              },
              {
                src: '/Salt-Lake-City/hidden-gems/observation-deck-2.png',
                alt: 'View from Church Office Building observation deck',
              }
            ],
            address: 'Church Office Building, downtown',
            coordinates: { lat: 40.7707, lng: -111.8919 },
            hours: 'Weekdays 9am-5pm',
            price: 'Free',
            tip: 'Enter through the main lobby and tell the desk you\'re visiting the observation deck. They\'ll direct you to the express elevator.',
          },
          {
            id: 'gem-books-1',
            type: 'hidden-gem',
            name: 'Ken Sanders Rare Books',
            category: 'Bookstore',
            description: 'Ken Sanders was Edward Abbey\'s close friend and literary executor, which tells you everything about the kind of bookstore this is. Three floors of antiquarian madness crammed into a space where the aisles are barely shoulder-width and the stacks reach the ceiling. Sanders specializes in Western Americana, Mormon history, Colorado River exploration, and Grand Canyon literature—the kind of rare books that serious collectors travel across the country to find. But the shop also overflows with vintage postcards, WPA posters, maps that predate statehood, and paperbacks priced to sell. Sanders himself is often there, holding court, telling stories about Abbey and the desert and the old Salt Lake that developers are erasing. The shop sits just off the corner, easy to miss, guarded by its own obscurity. Prices are surprisingly reasonable. The experience is priceless.',
            images: [
              {
                src: '/Salt-Lake-City/hidden-gems/rarebooks-1.png',
                alt: 'Floor-to-ceiling rare books in narrow antiquarian bookshop',
              },
              {
                src: '/Salt-Lake-City/hidden-gems/rarebooks-2.png',
                alt: 'Ken Sanders Rare Books interior',
              }
            ],
            address: '268 S 200 E, Salt Lake City, UT 84111',
            coordinates: { lat: 40.7623, lng: -111.8842 },
            hours: 'Mon-Sat 10am-6pm',
            price: 'Browsing free',
            website: 'https://www.kensandersbooks.com',
            tip: 'Ask about Edward Abbey—Sanders has stories that never made it into the biographies.',
          },
          {
            id: 'gem-garden-1',
            type: 'hidden-gem',
            name: 'International Peace Gardens',
            category: 'Hidden Garden',
            description: 'Two miles from Temple Square, in a working-class neighborhood that tourists never visit, 28 countries have built gardens along the Jordan River. The Japanese garden is the showpiece—bamboo groves, stone lanterns, koi ponds, a moon bridge arcing over water lilies—but Greece, Germany, India, and two dozen other nations have staked their claims in this 11-acre oasis. Salt Lake\'s immigrant communities built these gardens starting in 1939, a Depression-era project that somehow survived and grew. The result is a world tour in a single afternoon: manicured European formalism giving way to tropical plantings, Buddhist sculpture neighbors Scandinavian modernism. Most Salt Lakers don\'t know this place exists. Even the ones who do rarely visit. On a weekday morning, you might have an entire country to yourself.',
            images: [
              {
                src: '/Salt-Lake-City/hidden-gems/peacegarden-1.png',
                alt: 'Japanese garden with lotus flowers and water features',
              },
              {
                src: '/Salt-Lake-City/hidden-gems/peacegarden-2.png',
                alt: 'International Peace Gardens paths',
              },
              {
                src: '/Salt-Lake-City/hidden-gems/peacegarden-3.png',
                alt: 'Gardens from different nations at Peace Gardens',
              }
            ],
            address: '1000 S 900 W (Jordan Park)',
            coordinates: { lat: 40.7511, lng: -111.9128 },
            hours: '7am-10pm year-round',
            price: 'Free',
            website: 'https://www.internationalpeacegardens.org',
            tip: 'The Japanese garden is most photogenic in early morning light. Lotus bloom July through September.',
          },
          {
            id: 'gem-venue-1',
            type: 'hidden-gem',
            name: 'Kilby Court',
            category: 'Underground Music Venue',
            description: 'Since 1999, Kilby Court has operated out of a space no bigger than a two-car garage in an industrial alley west of downtown—and somehow became the most important music venue in Salt Lake history. The Killers played here before anyone knew their name. Modest Mouse, Band of Horses, The Shins—all passed through this room that holds maybe 200 people if everyone breathes in. The walls are covered in band stickers and handwritten set lists. The sound is imperfect in the way that makes live music feel alive. Kilby is all-ages and alcohol-free, which means the crowd comes for the music, period. Artists play for almost nothing because the room has a reputation that travels. In a city where venues come and go, Kilby has survived 25 years on pure DIY stubbornness. Check the calendar. Buy a ticket. Stand three feet from someone who might be famous in two years.',
            images: [
              {
                src: '/Salt-Lake-City/hidden-gems/kilby-1.png',
                alt: 'Small intimate music venue with stage and crowd',
              },
              {
                src: '/Salt-Lake-City/hidden-gems/kilby-2.png',
                alt: 'Kilby Court venue interior',
              }
            ],
            address: '741 S Kilby Ct, Salt Lake City, UT 84101',
            coordinates: { lat: 40.7530, lng: -111.8775 },
            hours: 'Varies by show',
            price: 'Usually $10-20',
            website: 'https://www.kilbycourt.com',
            tip: 'Arrive early—capacity is tiny and popular shows sell out. The alley can be hard to find after dark.',
          },
          {
            id: 'gem-speakeasy-1',
            type: 'hidden-gem',
            name: 'The Rest (Hidden Speakeasy at Bodega)',
            category: 'Secret Restaurant',
            description: 'In a state with some of America\'s strangest liquor laws, it\'s fitting that one of Salt Lake\'s best restaurants hides beneath a taco shop. The Rest occupies the basement below Bodega, accessed through an unmarked door that requires reservations to open. The space channels a 1920s hunting lodge—leather, wood, taxidermy, low lighting—with a menu that goes far beyond bar food. The Beer Can Chicken is legendary: a whole bird roasted upright over a can of Uinta, served with sides meant for sharing. Cocktails are serious but not pretentious. Desserts are mandatory. The speakeasy concept is overdone in most cities, but The Rest earns it—partly because Utah\'s relationship with alcohol has always been complicated, and partly because hiding something this good feels appropriately subversive.',
            images: [
              {
                src: '/Salt-Lake-City/hidden-gems/therest-1.png',
                alt: 'Cozy speakeasy interior with dim lighting and intimate atmosphere',
              },
              {
                src: '/Salt-Lake-City/hidden-gems/therest-2.png',
                alt: 'The Rest speakeasy dining room',
              }
            ],
            address: '331 S Main St (below Bodega), Salt Lake City, UT 84111',
            coordinates: { lat: 40.7630, lng: -111.8883 },
            hours: 'Wed-Sat, dinner service',
            price: '$$$',
            website: 'https://www.bodega331.com',
            tip: 'Reservations are essential—walk-ins almost never work. Order the chicken for two even if you\'re not that hungry.',
          },
          {
            id: 'gem-neighborhood-1',
            type: 'hidden-gem',
            name: 'Marmalade District',
            category: 'Historic Neighborhood',
            description: 'Salt Lake\'s street grid is famously wide and rational—except in the Marmalade District, where narrow lanes named Apricot, Quince, and Almond wind up steep hillsides in complete defiance of city planning. The neighborhood exists because 19th-century merchants who\'d made money in San Francisco built homes here in the styles they remembered: Italianate, Queen Anne, Gothic Revival, Carpenter Gothic. The terrain reminded them of Nob Hill, so they imported the architecture. The result is Salt Lake\'s oldest residential neighborhood and its strangest—a pocket of Victorian San Francisco dropped into the Mormon grid, named for the fruit trees that once covered the slopes. Listed on the National Register since 1982, the Marmalade has gentrified but not homogenized. The best way to experience it is on foot, climbing the hills, discovering houses that look teleported from another city, another century.',
            images: [
              {
                src: '/Salt-Lake-City/hidden-gems/marmalade-1.png',
                alt: 'Victorian houses on steep hillside street',
              },
              {
                src: '/Salt-Lake-City/hidden-gems/marmalde-2.png',
                alt: 'Marmalade District historic architecture',
              }
            ],
            address: 'North of downtown, near Capitol Hill',
            coordinates: { lat: 40.7780, lng: -111.8940 },
            hours: 'Always open for walking',
            price: 'Free',
            tip: 'Park near the Capitol and walk down—the views of downtown are better when you\'re descending.',
          },
          {
            id: 'gem-student-1',
            type: 'hidden-gem',
            name: 'The Pie Pizzeria (Underground)',
            category: 'restaurant',
            description: 'Every college town has a pizza joint that defines the student experience. At the University of Utah, it\'s The Pie—specifically the underground location on 200 South, where the walls are covered floor-to-ceiling in decades of graffiti, the tables are perpetually sticky, and the slices are big enough to fold in half and eat like a taco. The Pie has been here since 1980, feeding generations of undergrads, grad students, late-night studiers, and hungover Sundance attendees. The decor hasn\'t changed. The recipe hasn\'t changed. The prices have barely changed. You order at the counter, find a seat in the controlled chaos, and eat pizza in a room that smells like it\'s absorbed forty years of cheese and institutional rebellion. It\'s not the best pizza in Salt Lake—it\'s something better: the pizza that Salt Lake remembers.',
            images: [
              {
                src: '/Salt-Lake-City/hidden-gems/thepie-1.png',
                alt: 'Graffiti-covered walls inside The Pie Underground pizzeria',
              },
              {
                src: '/Salt-Lake-City/hidden-gems/thepie-2.png',
                alt: 'The Pie Pizzeria interior',
              },
              {
                src: '/Salt-Lake-City/hidden-gems/thepie-3.png',
                alt: 'The Pie Underground atmosphere',
              }
            ],
            address: '1320 E 200 S, Salt Lake City, UT 84102',
            coordinates: { lat: 40.7630, lng: -111.8581 },
            hours: '11am-11pm daily',
            price: '$$',
            website: 'https://thepie.com',
            tip: 'The combo slice is the move. Add a side of ranch and don\'t overthink it.',
          }
        ],
      },
      {
        id: 'slc-best-bars',
        type: 'best-of',
        category: 'bars',
        title: 'Drinking in Zion',
        intro: 'Utah liquor laws are weird, but the bar scene has evolved in spite of them. From speakeasies that predate repeal to craft cocktail spots that rival anything in Denver or Portland, Salt Lake has quietly built something special. The bartenders here are used to explaining the laws—and then ignoring them as creatively as possible.',
        spots: [
          {
            name: 'Bar X',
            neighborhood: 'Downtown',
            vibe: 'Prohibition-era cocktails in a former auto dealership',
            order: 'Something stirred — they\'re serious about classics',
            why: 'Bar X is what happens when serious bartenders open a bar in a city that supposedly doesn\'t drink. The space—a converted 1930s auto dealership—has the kind of Art Deco elegance that feels earned, not manufactured. They built Salt Lake\'s cocktail culture almost single-handedly, training bartenders who went on to open their own spots. The classics are executed perfectly, and the original creations are worth exploring.',
            address: '155 E 200 S, Salt Lake City, UT 84111',
            coordinates: { lat: 40.7648, lng: -111.8867 },
            price: '$$$',
            hours: 'Tue-Sat 4pm-1am, Sun-Mon 6pm-1am',
            website: 'https://barxslc.com/',
            instagram: '@barxslc',
            images: [
              {
                src: '/salt-lake-city/bars/bar-x-1.png',
                alt: 'Bar X interior',
              },
              {
                src: '/salt-lake-city/bars/bar-x-2.png',
                alt: 'Bar X cocktails',
              },
              {
                src: '/salt-lake-city/bars/bar-x-3.png',
                alt: 'Bar X atmosphere',
              }
            ],
          },
          {
            name: 'Beer Bar',
            neighborhood: 'Downtown',
            vibe: 'Connected to Bar X with craft beer focus',
            order: 'Local Utah brews on tap plus great sausages',
            why: 'Beer Bar is connected to Bar X through a shared courtyard, creating a choose-your-own-adventure drinking experience. The beer selection is carefully curated with Utah breweries well represented—Epic, Fisher, Kiitos. But the real move is the food: excellent sausages, pretzels with beer cheese, and bar snacks that are genuinely good rather than afterthoughts. Perfect for groups who can\'t agree on cocktails versus beer.',
            address: '161 E 200 S, Salt Lake City, UT 84111',
            coordinates: { lat: 40.7648, lng: -111.8865 },
            price: '$$',
            hours: 'Daily 12pm-1am',
            website: 'https://beerbarslc.com/',
            instagram: '@beerbarslc',
            images: [
              {
                src: '/salt-lake-city/bars/beer-bar-1.png',
                alt: 'Beer Bar interior',
              },
              {
                src: '/salt-lake-city/bars/beer-bar-2.png',
                alt: 'Beer Bar taps',
              }
            ],
          },
          {
            name: 'White Horse',
            neighborhood: 'Downtown',
            vibe: 'Speakeasy vibes with creative cocktails (temporarily closed)',
            order: 'The seasonal menu — they rotate constantly',
            why: 'White Horse has the speakeasy aesthetic that other bars try too hard to achieve—dim lighting, leather seats, and bartenders who treat cocktail-making as a craft. The seasonal menus rotate frequently, so regulars never get bored. Small and intimate, which means weekend waits are real. Worth it for the inventive drinks that push beyond the classics while respecting their foundations. Note: Temporarily closed after an August 2025 fire damaged the block—check their Instagram for reopening updates.',
            address: '325 Main St, Salt Lake City, UT 84111',
            coordinates: { lat: 40.7615, lng: -111.8906 },
            price: '$$$',
            hours: 'Temporarily closed (was 11am-1am daily)',
            website: 'https://www.whitehorseslc.com/',
            instagram: '@whitehorseslc',
            images: [
              {
                src: '/salt-lake-city/bars/white-horse-1.png',
                alt: 'White Horse interior',
              },
              {
                src: '/salt-lake-city/bars/white-horse-2.png',
                alt: 'White Horse cocktails',
              },
              {
                src: '/salt-lake-city/bars/white-horse-3.png',
                alt: 'White Horse bar',
              },
              {
                src: '/salt-lake-city/bars/white-horse-4.png',
                alt: 'White Horse atmosphere',
              }
            ],
          },
          {
            name: 'Whiskey Street',
            neighborhood: 'Downtown',
            vibe: 'Whiskey-forward with panoramic city views (temporarily closed)',
            order: 'Something from their 300+ whiskey selection',
            why: 'Whiskey Street has 300+ whiskeys and the kind of rooftop patio that reminds you Salt Lake is surrounded by mountains. The Wasatch views at sunset, drink in hand, are genuinely spectacular. The whiskey selection is serious—organized by region, age, style—and the bartenders can guide you through it without being pretentious about it. Good for groups, good for dates, good for impressing visitors. Note: Temporarily closed after an August 2025 fire—follow their Instagram for reopening updates.',
            address: '323 Main St, Salt Lake City, UT 84111',
            coordinates: { lat: 40.7614, lng: -111.8906 },
            price: '$$',
            hours: 'Temporarily closed (was 11am-1am daily)',
            website: 'https://www.whiskeystreet.com/',
            instagram: '@whiskey_street_slc',
            images: [
              {
                src: '/salt-lake-city/bars/whiskey-street-1.png',
                alt: 'Whiskey Street interior',
              },
              {
                src: '/salt-lake-city/bars/whiskey-street-2.png',
                alt: 'Whiskey Street bar',
              }
            ],
          },
          {
            name: 'Twilite Lounge',
            neighborhood: 'Downtown',
            vibe: 'Timewarp dive bar since 1947',
            order: 'Cheap beer — whatever\'s coldest',
            why: 'Twilite has been pouring cheap drinks in downtown Salt Lake since 1947, which makes it older than the interstate highway system. The interior is a throwback to the \'70s—wood paneling, vintage beer signs, booths worn smooth by decades of elbows—and the prices haven\'t caught up with inflation. This is where you go when you want a drink without a story behind it, a bar where nobody\'s trying to impress anyone. Cash is preferred, the jukebox is excellent, and the bartenders have seen everything. Pure, unreconstructed dive bar energy in a city increasingly full of $16 cocktails.',
            address: '347 E 200 S, Salt Lake City, UT 84111',
            coordinates: { lat: 40.7648, lng: -111.8823 },
            price: '$',
            hours: 'Mon-Sat 1pm-2am, Sun 11am-12am',
            website: 'https://twilitelounge.com/',
            instagram: '@slctwilitelounge',
            images: [
              {
                src: '/salt-lake-city/bars/twilite-1.png',
                alt: 'Twilite Lounge interior',
              },
              {
                src: '/salt-lake-city/bars/twilite-2.png',
                alt: 'Twilite Lounge bar',
              }
            ],
          }
        ],
      },
      {
        id: 'slc-best-cafes',
        type: 'best-of',
        category: 'cafes',
        title: 'Caffeinated Zion',
        intro: 'The LDS church famously discourages coffee, which makes Salt Lake\'s thriving café culture a quiet rebellion. Third-wave roasters, laptop-friendly spots with mountain views, and espresso bars that would hold their own in any West Coast city. The caffeine runs strong here—maybe because it\'s so recently permitted.',
        spots: [
          {
            name: 'Publik Coffee',
            neighborhood: '9th and 9th',
            vibe: 'Minimalist roaster with serious sourcing',
            order: 'Pour-over with whatever\'s single origin',
            why: 'Publik brought third-wave coffee culture to Salt Lake before the rest of the city caught on. They source directly from farms, roast in small batches, and the baristas can tell you exactly where your beans came from and how they were processed. The minimalist industrial space in 9th and 9th is their flagship—a neighborhood perfect for coffee-shop culture. This is where Salt Lake\'s coffee obsession began.',
            address: '975 S West Temple, Salt Lake City, UT 84101',
            coordinates: { lat: 40.7514, lng: -111.8995 },
            price: '$$',
            hours: 'Mon-Fri 7am-6pm, Sat-Sun 8am-6pm',
            website: 'https://publikcoffee.com/',
            instagram: '@publikcoffee',
            images: [
              {
                src: '/salt-lake-city/coffee-shops/publik-01.png',
                alt: 'Publik Coffee interior',
              },
              {
                src: '/salt-lake-city/coffee-shops/publik-2.png',
                alt: 'Publik Coffee bar',
              },
              {
                src: '/salt-lake-city/coffee-shops/publik-3.png',
                alt: 'Publik Coffee drinks',
              },
              {
                src: '/salt-lake-city/coffee-shops/publik-4.png',
                alt: 'Publik Coffee atmosphere',
              }
            ],
          },
          {
            name: 'Café on 1st',
            neighborhood: 'Capitol Hill',
            vibe: 'Cozy neighborhood spot with food',
            order: 'Breakfast burrito and a drip coffee',
            why: 'Café on 1st is the neighborhood coffee shop that Capitol Hill needed—the kind of place where regulars have "usual" orders and the staff knows your name within a few visits. The breakfast burritos are legitimately good, the coffee is solid without trying too hard, and the cozy space feels like an extension of someone\'s living room. This is local coffee culture at its most genuine.',
            address: '39 I St, Salt Lake City, UT 84103',
            coordinates: { lat: 40.7781, lng: -111.8877 },
            price: '$',
            hours: 'Mon-Fri 7am-2pm, Sat-Sun 8:30am-2:30pm',
            instagram: '@cafeon1st',
            images: [
              {
                src: '/salt-lake-city/coffee-shops/cafe-on-1st-1.png',
                alt: 'Café on 1st interior',
              },
              {
                src: '/salt-lake-city/coffee-shops/cafe-on-1st-2.png',
                alt: 'Café on 1st food',
              },
              {
                src: '/salt-lake-city/coffee-shops/cafe-on-1st-3.png',
                alt: 'Café on 1st atmosphere',
              }
            ],
          },
          {
            name: '3 Cups',
            neighborhood: 'Holladay',
            vibe: 'Funky, colorful, good energy',
            order: 'Their house chai is excellent',
            why: '3 Cups doesn\'t care about minimalist aesthetics or third-wave pretensions. The space is colorful, eclectic, and covered in art. The house chai is famously excellent—spiced right and made from scratch. The energy is creative and funky, a family-owned spot that\'s been an inclusive community hub since 2014. If the sterile modern coffee shop isn\'t your vibe, 3 Cups is the delightfully weird alternative.',
            address: '4670 S 2300 E, Holladay, UT 84117',
            coordinates: { lat: 40.6869, lng: -111.8267 },
            price: '$',
            hours: 'Mon 6am-5pm, Tue-Thu 6am-9pm, Fri-Sat 6am-10pm, Sun 7am-5pm',
            website: 'https://www.3cups.coffee/',
            instagram: '@3_cups_coffee',
            images: [
              {
                src: '/salt-lake-city/coffee-shops/3-cups-1.png',
                alt: '3 Cups interior',
              },
              {
                src: '/salt-lake-city/coffee-shops/3-cups-2.png',
                alt: '3 Cups colorful decor',
              },
              {
                src: '/salt-lake-city/coffee-shops/3-cups-3.png',
                alt: '3 Cups atmosphere',
              }
            ],
          },
          {
            name: 'Blue Copper Coffee',
            neighborhood: 'Central Ninth',
            vibe: 'Third-wave serious with great design',
            order: 'Whatever\'s on espresso',
            why: 'Blue Copper takes coffee seriously without being insufferable about it. One of Salt Lake\'s first third-wave roasters since 2013, the space is architecturally stunning—all clean lines and natural light—and the espresso program is dialed in tight. They roast their own beans and train their baristas properly. It\'s the kind of place where you can actually work for hours without being judged, and the coffee keeps getting better.',
            address: '179 W 900 S, Salt Lake City, UT 84101',
            coordinates: { lat: 40.7615, lng: -111.8935 },
            price: '$$',
            hours: 'Mon-Fri 8am-3pm, Sat-Sun 9am-4pm',
            website: 'https://bluecopperslc.com/',
            instagram: '@bluecoppercoffee',
            images: [
              {
                src: '/salt-lake-city/coffee-shops/blue-copper-1.png',
                alt: 'Blue Copper Coffee interior',
              },
              {
                src: '/salt-lake-city/coffee-shops/blue-copper-2.png',
                alt: 'Blue Copper Coffee bar',
              }
            ],
          }
        ],
      },
      {
        id: 'slc-best-restaurants',
        type: 'best-of',
        category: 'restaurants',
        title: 'Mountain Dining',
        intro: 'Salt Lake\'s food scene has transformed from potluck basics to genuine destination dining. James Beard nominations, immigrant-run kitchens bringing flavors from across the globe, and farm-to-table spots taking advantage of Utah\'s surprisingly good growing conditions. The funeral potatoes are still around—but now they\'re competing with real contenders.',
        spots: [
          {
            name: 'Red Iguana',
            neighborhood: 'North Temple',
            vibe: 'Legendary Mexican with seven moles',
            order: 'Mole sampler — try all seven',
            why: 'Red Iguana has been serving serious Mexican food since 1985, and the seven different mole sauces are the reason people drive across the valley to get here. Each mole is distinct—some chocolatey, some nutty, some spicy—and the sampler platter is the only way to experience them all. Lines out the door are common; they opened a second location to handle demand. This is the restaurant that proves Salt Lake has legitimate Mexican food.',
            address: '736 W North Temple, Salt Lake City, UT 84116',
            coordinates: { lat: 40.7716, lng: -111.9091 },
            price: '$$',
            hours: 'Mon-Thu 11am-9pm, Fri-Sat 11am-10pm, Sun 11am-9pm',
            website: 'https://www.rediguana.com/',
            instagram: '@rediguanarestaurant',
            images: [
              {
                src: '/salt-lake-city/restaurants/red-iguana-1.png',
                alt: 'Red Iguana restaurant exterior',
              },
              {
                src: '/salt-lake-city/restaurants/red-iguana-2.png',
                alt: 'Red Iguana mole dishes',
              },
              {
                src: '/salt-lake-city/restaurants/red-iguana-3.png',
                alt: 'Red Iguana interior dining room',
              },
              {
                src: '/salt-lake-city/restaurants/red-iguana-4.png',
                alt: 'Red Iguana Mexican food',
              },
              {
                src: '/salt-lake-city/restaurants/red-iguana-5.png',
                alt: 'Red Iguana atmosphere',
              }
            ],
            menuImage: { src: '/salt-lake-city/restaurants/red-iguana-menu.png', alt: 'Red Iguana menu' },
          },
          {
            name: 'HSL',
            neighborhood: '9th and 9th',
            vibe: 'Farm-to-table with a local focus',
            order: 'The seasonal tasting menu',
            why: 'HSL (Handle, Salt, Local) is the restaurant that proved Salt Lake could do farm-to-table at a national level. They work directly with Utah farms—not as a marketing gimmick, but because the chefs actually care where ingredients come from. The seasonal tasting menu changes constantly, the wine list is thoughtful, and the space is warm without being pretentious. This is destination dining.',
            address: '418 E 200 S, Salt Lake City, UT 84111',
            coordinates: { lat: 40.7652, lng: -111.8821 },
            price: '$$$',
            hours: 'Tue-Thu 5pm-9pm, Fri-Sat 5pm-10pm, Closed Sun-Mon',
            website: 'https://www.hslrestaurant.com/',
            instagram: '@hslrestaurant',
            images: [
              {
                src: '/salt-lake-city/restaurants/HSL-1.png',
                alt: 'HSL restaurant interior',
              },
              {
                src: '/salt-lake-city/restaurants/HSL-2.png',
                alt: 'HSL farm-to-table dishes',
              },
              {
                src: '/salt-lake-city/restaurants/HSL-3.png',
                alt: 'HSL seasonal cuisine',
              },
              {
                src: '/salt-lake-city/restaurants/HSL-4.png',
                alt: 'HSL dining atmosphere',
              }
            ],
            menuImage: { src: '/salt-lake-city/restaurants/HSL-menu.png', alt: 'HSL menu' },
          },
          {
            name: 'Pretty Bird',
            neighborhood: 'Downtown',
            vibe: 'Nashville hot chicken, Utah style',
            order: 'The Pretty Bird sandwich',
            why: 'Pretty Bird is what happens when a Le Bernardin-trained chef opens a fried chicken sandwich shop. Viet Pham\'s Nashville hot chicken is legitimately spicy—the "Pretty Hot" level will clear your sinuses—and the technique is impeccable. The sides are not afterthoughts: pickles are perfect, slaw is crisp. The Regent Street location has the best atmosphere. This is fast-casual done at an absurdly high level.',
            address: '146 S Regent St, Salt Lake City, UT 84111',
            coordinates: { lat: 40.7649, lng: -111.8909 },
            price: '$$',
            hours: 'Mon-Tue 11am-9pm, Wed-Sat 11am-10pm, Sun 11am-4pm',
            website: 'https://prettybirdchicken.com/',
            instagram: '@prettybirdchicken',
            images: [
              {
                src: '/salt-lake-city/restaurants/pretrty-bird-1.png',
                alt: 'Pretty Bird restaurant',
              },
              {
                src: '/salt-lake-city/restaurants/pretty-bird-2.png',
                alt: 'Pretty Bird hot chicken sandwich',
              },
              {
                src: '/salt-lake-city/restaurants/pretty-bird-3.png',
                alt: 'Pretty Bird interior',
              },
              {
                src: '/salt-lake-city/restaurants/pretty-bird-4.png',
                alt: 'Pretty Bird dining atmosphere',
              }
            ],
            menuImage: { src: '/salt-lake-city/restaurants/pretty-bird-menu.png', alt: 'Pretty Bird menu' },
          },
          {
            name: 'Takashi',
            neighborhood: 'Downtown',
            vibe: 'Sushi that surprises people',
            order: 'Omakase if you trust them',
            why: 'Takashi is the sushi restaurant that makes Salt Lake residents forget they\'re 800 miles from the ocean. Chef Takashi Gibo trained in Japan and Hawaii before opening here, and the fish is flown in fresh from Tsukiji and Hawaii. The omakase is where he really shows off—a progression of courses that rivals coastal sushi bars. For a landlocked city, this is an improbable treasure.',
            address: '18 W Market St, Salt Lake City, UT 84101',
            coordinates: { lat: 40.7623, lng: -111.8910 },
            price: '$$$',
            hours: 'Mon-Fri 11:30am-2pm & 5:30pm-10pm, Sat 5pm-10pm, Closed Sun',
            website: 'https://www.takashisushi.com/',
            instagram: '@takashi_slc',
            images: [
              {
                src: '/salt-lake-city/restaurants/takashi-1.png',
                alt: 'Takashi restaurant interior',
              },
              {
                src: '/salt-lake-city/restaurants/takashi-2.png',
                alt: 'Takashi sushi platter',
              },
              {
                src: '/salt-lake-city/restaurants/takashi-3.png',
                alt: 'Takashi omakase experience',
              },
              {
                src: '/salt-lake-city/restaurants/takashi-4.png',
                alt: 'Takashi dining atmosphere',
              }
            ],
            menuImage: { src: '/salt-lake-city/restaurants/takashi-menu.png', alt: 'Takashi menu' },
          }
        ],
      },
      {
        id: 'slc-obscure-history',
        type: 'section',
        title: 'Obscure History',
        items: [
          {
            id: 'slc-history-1',
            type: 'history',
            era: '1857',
            title: 'The Mountain Meadows Massacre',
            body: 'In September 1857, a group of Mormon militia and Paiute allies killed approximately 120 men, women, and children traveling through Utah in a wagon train from Arkansas. Only 17 young children were spared. The massacre was covered up for decades, and only one participant was ever executed. It remains one of the darkest chapters in American frontier history and LDS Church history.',
            source: 'American Heritage',
            location: {
              name: 'Mountain Meadows, Washington County',
              coordinates: { lat: 37.4786, lng: -113.6458 },
              stillExists: true,
            },
          },
          {
            id: 'slc-history-2',
            type: 'history',
            era: '1847',
            title: 'The City Was Built on Ute Land',
            body: 'When Mormon pioneers arrived in 1847, they declared the Salt Lake Valley empty — but Ute, Shoshone, Goshute, and Paiute peoples had lived here for thousands of years. The settlers displaced indigenous populations through a combination of settlement, conflict, and forced removals. This history is rarely discussed in Utah\'s pioneer-focused narrative.',
            source: 'Utah State Historical Society',
            location: {
              name: 'Salt Lake Valley',
              coordinates: { lat: 40.7608, lng: -111.8910 },
              stillExists: true,
            },
          },
          {
            id: 'slc-history-3',
            type: 'history',
            era: '1890s',
            title: 'Utah Had to Abandon Polygamy to Become a State',
            body: 'Utah tried to become a state six times before succeeding in 1896. The federal government kept rejecting applications because of polygamy. The LDS Church officially ended the practice in 1890, though some continued secretly for decades. The compromise was called the "Manifesto."',
            source: 'Smithsonian Magazine',
            location: {
              name: 'Temple Square',
              coordinates: { lat: 40.7706, lng: -111.8919 },
              stillExists: true,
            },
          },
          {
            id: 'slc-history-ad-1',
            type: 'ad',
            size: 'banner',
          },
          {
            id: 'slc-history-4',
            type: 'history',
            era: '1940s',
            title: 'Japanese Americans Were Imprisoned at Topaz',
            body: 'During World War II, over 11,000 Japanese Americans were imprisoned at the Topaz Relocation Center in Utah\'s desert, 140 miles southwest of Salt Lake City. Conditions were harsh — summer temperatures exceeded 100°F, winter dropped below zero, and dust storms were constant. One internee was shot by guards for walking too close to the fence.',
            source: 'Topaz Museum',
            image: {
              src: '/images/history/topaz-camp.jpg',
              alt: 'Aerial view of Topaz internment camp barracks in Utah desert',
              year: '1943',
            },
            location: {
              name: 'Topaz, Millard County',
              coordinates: { lat: 39.4094, lng: -112.7742 },
              stillExists: true,
            },
          },
          {
            id: 'slc-history-5',
            type: 'history',
            era: '1869',
            title: 'The Transcontinental Railroad Changed Everything',
            body: 'When the Golden Spike was driven at Promontory Summit in 1869, it ended Mormon isolation. Brigham Young had welcomed the railroad but feared gentile influence. He was right to worry — within a generation, non-Mormons flooded Utah, transforming politics, commerce, and culture.',
            source: 'Utah State Historical Society',
            image: {
              src: '/images/history/golden-spike.jpg',
              alt: 'Ceremony at Promontory Summit with locomotives meeting',
              year: '1869',
            },
            location: {
              name: 'Promontory Summit',
              coordinates: { lat: 41.6222, lng: -112.5511 },
              stillExists: true,
            },
          },
          {
            id: 'slc-history-6',
            type: 'history',
            era: '1970s',
            title: 'Ted Bundy Kidnapped and Murdered in Utah',
            body: 'Serial killer Ted Bundy abducted and murdered at least three women in Utah during 1974-1975, including teenager Debra Kent from a high school play in Bountiful. He was first arrested in Salt Lake City in 1975 after a highway patrol officer found suspicious items in his car. The Utah crimes helped build the case that eventually led to his Florida execution.',
            source: 'Salt Lake Tribune',
            location: {
              name: 'Salt Lake County',
              coordinates: { lat: 40.7608, lng: -111.8910 },
              stillExists: true,
            },
          },
          {
            id: 'slc-history-7',
            type: 'history',
            era: '2002',
            title: 'Elizabeth Smart Was Found Alive',
            body: 'In June 2002, 14-year-old Elizabeth Smart was kidnapped at knifepoint from her Salt Lake City bedroom by Brian David Mitchell. She was held captive for nine months before being recognized and rescued. The case led to national AMBER Alert reforms and Smart became an advocate for child safety.',
            source: 'ABC News',
            location: {
              name: 'Federal Heights',
              coordinates: { lat: 40.7711, lng: -111.8547 },
              stillExists: true,
            },
          },
          {
            id: 'slc-history-8',
            type: 'history',
            era: '1848',
            title: 'The "Miracle of the Gulls" May Be Exaggerated',
            body: 'The famous story of California gulls saving the 1848 harvest from crickets has been called into question by historians. Contemporary journals describe the gulls eating crickets but don\'t mention a "miracle" — that narrative developed decades later. Some historians argue the crickets were already declining and the gulls were following their regular migratory patterns. The story became foundational Mormon lore regardless.',
            source: 'Sunstone Magazine',
            location: {
              name: 'This Is The Place Heritage Park',
              coordinates: { lat: 40.7522, lng: -111.8147 },
              stillExists: true,
            },
          }
        ],
      },
      {
        id: 'slc-best-coffee-shops',
        type: 'best-of',
        category: 'coffee-shops',
        title: 'Mountain Brews',
        intro: 'With over 70 coffee shops, SLC punches above its weight. From second-wave pioneers to third-wave obsessives, there\'s serious coffee culture in this mountain town.',
        spots: [
          {
            name: 'The Rose Establishment',
            neighborhood: 'Pierpont District',
            vibe: 'Soul-stirring landmark in a restored 1918 brick warehouse. Where hipsters and artists mingle over excellent coffee.',
            order: 'Whatever pour-over they\'re featuring. The pastries are worth adding.',
            why: 'The Rose Establishment is a soul-stirring landmark in the historic Pierpont warehouse district. The restored 1918 brick building has character you can feel. Hipsters and artists mingle, and the coffee is as thoughtful as the space. One of SLC\'s essential cafes.',
            address: '235 S 400 W, Salt Lake City, UT 84101',
            coordinates: { lat: 40.7633, lng: -111.9028 },
            hours: '7am-4pm daily',
            price: '$$',
            website: 'https://theroseestb.com',
            instagram: '@theroseestb',
            image: {
              src: '',
              alt: 'Industrial-chic coffee shop in restored warehouse',
            },
          },
          {
            name: 'Publik Coffee',
            neighborhood: '900 South / Multiple',
            vibe: 'Third-wave exemplar. Education, honesty, and "a religious exaltation of the coffee itself."',
            order: 'Single-origin pour-over. Ask about the source — they\'ll happily explain.',
            why: 'Publik exemplifies the third wave of coffee: education, honesty, and an almost religious exaltation of the bean itself. Their flagship near 900 South is the heartbeat of SLC specialty coffee. Multiple locations now, but the obsession with quality hasn\'t wavered.',
            address: '975 S West Temple, Salt Lake City, UT 84101',
            coordinates: { lat: 40.7509, lng: -111.8943 },
            hours: '7am-6pm Mon-Fri, 8am-6pm Sat-Sun',
            price: '$$',
            website: 'https://publikcoffee.com',
            instagram: '@publikcoffee',
            images: [
              {
                src: '/salt-lake-city/coffee-shops/publik-01.png',
                alt: 'Publik Coffee interior',
              },
              {
                src: '/salt-lake-city/coffee-shops/publik-2.png',
                alt: 'Publik Coffee bar',
              },
              {
                src: '/salt-lake-city/coffee-shops/publik-3.png',
                alt: 'Publik Coffee drinks',
              },
              {
                src: '/salt-lake-city/coffee-shops/publik-4.png',
                alt: 'Publik Coffee atmosphere',
              }
            ],
          },
          {
            name: 'Caffe d\'Bolla',
            neighborhood: 'Downtown',
            vibe: 'Single-origin obsessives using siphon brewers. Micro-region, small-farm sourcing taken to extremes.',
            order: 'Siphon-brewed coffee. It\'s theatrical and delicious.',
            why: 'Caffe d\'Bolla is passionate about coffee to the point of obsession. They procure only single-origin coffees from micro-regions and small farms, then brew primarily using siphon makers for maximum flavor extraction. If you want to understand why origin matters, this is the classroom.',
            address: '249 E 400 S, Salt Lake City, UT 84111',
            coordinates: { lat: 40.7617, lng: -111.8831 },
            hours: '8am-6pm Mon-Sat',
            price: '$$',
            website: 'https://www.caffedbolla.com',
            instagram: '@caffedbolla',
            image: {
              src: '',
              alt: 'Siphon coffee brewer with dramatic extraction',
            },
          },
          {
            name: 'Sugar House Coffee',
            neighborhood: 'Sugar House',
            vibe: 'Embraces the local bohemian tradition. Rimini Coffee beans, live musicians, neighborhood institution.',
            order: 'House drip from local Rimini roasters. Stay for live music.',
            why: 'Sugar House Coffee embraces the local bohemian tradition of its eclectic neighborhood. They serve coffee from local roaster Rimini and host live musicians regularly. It\'s the kind of place where the neighborhood actually gathers — not a workspace disguised as a café.',
            address: '2011 S 1100 E, Salt Lake City, UT 84106',
            coordinates: { lat: 40.7272, lng: -111.8603 },
            hours: '7am-9pm daily',
            price: '$$',
            website: 'https://sugarhousecoffee.com',
            instagram: '@sugarhousecoffee',
            images: [
              {
                src: '/salt-lake-city/coffee-shops/sugarhouse-1.png',
                alt: 'Sugar House Coffee interior',
              },
              {
                src: '/salt-lake-city/coffee-shops/sugarhouse-2.png',
                alt: 'Sugar House Coffee atmosphere',
              },
              {
                src: '/salt-lake-city/coffee-shops/sugarhouse-3.png',
                alt: 'Sugar House Coffee vibe',
              }
            ],
          },
          {
            name: 'Jack Mormon Coffee',
            neighborhood: 'The Avenues',
            vibe: 'A touch of sass with a classic cup of joe. Second-wave stalwart that\'s still going strong.',
            order: 'Whatever you\'re in the mood for. The name is the vibe.',
            why: 'The name says it all — "Jack Mormon" is slang for a non-practicing member. This Avenues staple brings "a touch of sass with a classic cup of joe." They\'re part of SLC\'s second-wave heritage that helped establish coffee culture in a state where it wasn\'t always welcome.',
            address: '82 E St, Salt Lake City, UT 84103',
            coordinates: { lat: 40.7792, lng: -111.8752 },
            hours: '7am-6pm daily',
            price: '$',
            instagram: '@jackmormoncoffee',
            images: [
              {
                src: '/salt-lake-city/coffee-shops/jack-mormon-1.png',
                alt: 'Jack Mormon Coffee interior',
              },
              {
                src: '/salt-lake-city/coffee-shops/jack-mormon-2.png',
                alt: 'Jack Mormon Coffee drinks',
              },
              {
                src: '/salt-lake-city/coffee-shops/jack-mormon-3.png',
                alt: 'Jack Mormon Coffee atmosphere',
              }
            ],
          },
          {
            name: 'La Barba',
            neighborhood: 'Gateway / Multiple',
            vibe: 'Beautiful light-filled café with locations across the valley. Thoughtful sourcing, gorgeous spaces.',
            order: 'Espresso drinks are their strength. The space invites lingering.',
            why: 'La Barba has built a mini-empire of beautiful coffee shops across Salt Lake — the Gateway location is stunning, Maven District has good energy, Draper is the flagship. Light-filled spaces with thoughtful coffee sourcing. Proof that expansion doesn\'t have to mean dilution.',
            address: '202 S Rio Grande St, Salt Lake City, UT 84101',
            coordinates: { lat: 40.7664, lng: -111.9047 },
            hours: '7am-5pm Mon-Fri, 8am-5pm Sat',
            price: '$$',
            website: 'https://labarbacoffee.com',
            instagram: '@labarbacoffee',
            images: [
              {
                src: '/salt-lake-city/coffee-shops/barba-1.png',
                alt: 'La Barba interior',
              },
              {
                src: '/salt-lake-city/coffee-shops/barba-2.png',
                alt: 'La Barba coffee bar',
              }
            ],
          }
        ],
      },
      {
        id: 'slc-dark-history',
        type: 'section',
        title: 'Desert Secrets',
        teaser: 'Massacres, missing persons, and the cost of Zion',
        intro: 'Salt Lake City was built on prophecy and isolation—a theocratic settlement carved into hostile desert, far from federal reach. That isolation bred both community and darkness. The same mountains that promised refuge have witnessed massacres, serial killers, fundamentalist murders, and disappearances where the desert keeps its secrets. Utah ranks ninth nationally in serial killer victims per capita. The faith that built Zion has also, at its fringes, justified bloodshed. And the West Desert, with its abandoned mines and salt flats, offers endless places to hide what should never be found.',
        items: [
          {
            id: 'slc-dark-1',
            type: 'dark-history',
            category: 'crime',
            year: '1977',
            title: 'Gary Gilmore: "Let\'s Do It"',
            body: 'On July 19, 1976, Gary Gilmore robbed and murdered gas station attendant Max Jensen in Orem. The next night, he killed motel manager Bennie Bushnell in Provo. Both victims were young fathers. Gilmore was captured the same week, tried, and sentenced to death. Then he did something unprecedented: he demanded to be executed. For a decade, capital punishment had been frozen in America. Gilmore wanted to restart it. When the ACLU and his mother fought to save his life, he told them to back off—"It\'s my life and it\'s my death." On January 17, 1977, Gilmore was strapped to a chair in an abandoned cannery behind Utah State Prison. Five police officers aimed rifles through holes in a curtain. Asked for last words, he said: "Let\'s do it." He became the first person executed in America in ten years. Nike\'s Dan Wieden later adapted those words into the most famous slogan in advertising history: "Just Do It."',
            verdict: 'Two young fathers murdered. Gilmore executed by firing squad. Norman Mailer won the Pulitzer Prize for "The Executioner\'s Song," his book about the case. And somewhere, a marketing executive got the tagline of a lifetime.',
            images: [
              {
                src: '/salt-lake-city/dark-history/gary-gilmore.png',
                alt: 'Gary Gilmore mugshot from 1976',
              }
            ],
            location: {
              name: 'Utah State Prison, Draper',
              stillExists: true,
            },
            sources: [
              {
                type: 'book',
                title: 'The Executioner\'s Song',
                author: 'Norman Mailer',
                isbn: '9780375700811',
                url: 'https://www.amazon.com/Executioners-Song-Norman-Mailer/dp/0375700811',
              },
              {
                type: 'film',
                title: 'The Executioner\'s Song',
                director: 'Lawrence Schiller',
                year: '1982',
                url: 'https://www.imdb.com/title/tt0083891/',
              },
              {
                type: 'documentary',
                title: 'Dead Man Talking: The Execution of Gary Gilmore',
                platform: 'REELZ',
                url: 'https://www.reelz.com/dead-man-talking/',
              },
              {
                type: 'video',
                title: 'Gary Gilmore: The First Execution in America After 10 Years',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=GaryGilmore',
              },
              {
                type: 'podcast',
                title: 'Gary Gilmore and The Executioner\'s Song',
                show: 'The Projection Booth',
                platform: 'Spotify',
                url: 'https://open.spotify.com/episode/689',
              },
              {
                type: 'article',
                title: 'Gary Gilmore\'s Last Words',
                publisher: 'Salt Lake Tribune',
                url: 'https://www.sltrib.com/news/gary-gilmore-execution',
              }
            ],
          },
          {
            id: 'slc-dark-2',
            type: 'dark-history',
            category: 'haunting',
            year: '1862–present',
            title: 'The Grave Robber of Antelope Island',
            body: 'In 1862, Salt Lake City police arrested Jean Baptiste, a gravedigger who had been robbing the dead—not of valuables, but of their burial clothes. He had stripped hundreds of corpses, leaving them naked in their coffins. The city, horrified, tattooed his forehead, branded his face, and banished him to Antelope Island in the Great Salt Lake—Utah\'s version of Alcatraz. Six weeks later, he had vanished. His shack was destroyed, apparently converted into a raft. Did he drown in the brine? Did he escape across the lake? In 1890, hunters found a headless skeleton in shackles on the lake\'s eastern shore. Authorities insisted Jean Baptiste was never chained. The mystery remains unsolved. Ghost hunters say Baptiste still wanders Antelope Island at night, searching for something—or someone—in the dark.',
            verdict: 'Disappeared 1862. Never found. The island\'s isolation and the lake\'s deadly brine make the truth impossible to recover. Visit at your own risk.',
            images: [
              {
                src: '/salt-lake-city/dark-history/grave-robber.png',
                alt: 'Antelope Island in the Great Salt Lake where Jean Baptiste, the grave robber, was banished in 1862',
              }
            ],
            location: {
              name: 'Antelope Island State Park',
              stillExists: true,
            },
            sources: [
              {
                type: 'article',
                title: 'The Dark Legend of Jean Baptiste',
                publisher: 'Visit Utah',
                url: 'https://www.visitutah.com/articles/jean-baptiste-antelope-island',
              },
              {
                type: 'article',
                title: 'Antelope Island\'s Haunted History',
                publisher: 'Salt Lake Magazine',
                url: 'https://www.saltlakemagazine.com/antelope-island-haunted-jean-baptiste/',
              },
              {
                type: 'video',
                title: 'The Ghost of Jean Baptiste - Antelope Island Mystery',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=JeanBaptiste',
              },
              {
                type: 'article',
                title: 'Utah\'s Most Haunted: Antelope Island',
                publisher: 'KSL',
                url: 'https://www.ksl.com/article/antelope-island-haunted-jean-baptiste',
              }
            ],
          },
          {
            id: 'slc-dark-3',
            type: 'dark-history',
            category: 'crime',
            year: '1974',
            title: 'The Hi-Fi Murders',
            body: 'On April 22, 1974, three airmen from Hill Air Force Base robbed the Hi-Fi Shop in Ogden, taking five hostages to the basement. What happened next became one of the most sadistic crimes in Utah history. Dale Pierre Selby and William Andrews forced their victims to drink caustic drain cleaner (Drano), then taped their mouths shut to prevent vomiting. When the poison didn\'t kill them quickly enough, Pierre kicked a ballpoint pen into one victim\'s ear, lodging it deep in his brain. He raped 18-year-old Michelle Ansley, then shot all five hostages in the head. Three died: Stanley Walker (20), Michelle Ansley (18), and Carol Naisbitt (52). Two survived with catastrophic injuries. Pierre was executed in 1987. Andrews\' case drew national controversy—he hadn\'t pulled the trigger, and a juror had passed a note with a racial slur during sentencing. Despite campaigns from the NAACP and Amnesty International, he was executed in 1992. Ogden has never forgotten.',
            verdict: 'Three murdered, two survivors with permanent injuries. Both killers executed. The case changed Ogden\'s sense of innocence forever.',
            images: [
              {
                src: '/salt-lake-city/dark-history/hi-fi-1.png',
                alt: 'The Hi-Fi Shop in Ogden, Utah where the brutal 1974 murders took place',
              },
              {
                src: '/salt-lake-city/dark-history/hi-fi-2.png',
                alt: 'Historic Ogden, Utah - site of the infamous Hi-Fi murders',
              },
              {
                src: '/salt-lake-city/dark-history/hi-fi-3.png',
                alt: 'Memorial and remembrance of the Hi-Fi murders victims',
              }
            ],
            location: {
              name: '2323 Washington Blvd, Ogden',
              stillExists: false,
            },
            sources: [
              {
                type: 'book',
                title: 'Victim: The Other Side of Murder',
                author: 'Gary Kinder',
                isbn: '9780440193357',
                url: 'https://www.amazon.com/Victim-Other-Side-Murder/dp/0440193354',
              },
              {
                type: 'article',
                title: 'The Ogden Hi-Fi Shop Murders',
                publisher: 'ABC4 Utah',
                url: 'https://www.abc4.com/news/local-news/ogden-hi-fi-murders/',
              },
              {
                type: 'documentary',
                title: 'The Hi-Fi Murders',
                platform: 'Oxygen',
                url: 'https://www.oxygen.com/snapped-notorious/season-1/episode-7/videos/the-ogden-hi-fi-murders',
              },
              {
                type: 'video',
                title: 'The Ogden Hi-Fi Murders - A Crime So Brutal',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=oaWH7pCFqd8',
              },
              {
                type: 'article',
                title: 'Hi-Fi Murders Digital Exhibit',
                publisher: 'Weber State University',
                url: 'https://cdm.weber.edu/digital/collection/p15795coll15',
              }
            ],
          },
          {
            id: 'slc-dark-4',
            type: 'dark-history',
            category: 'unsolved',
            year: '2009',
            title: 'The Disappearance of Susan Powell',
            body: 'On December 6, 2009, Susan Powell vanished from her West Valley City home. Her husband Josh said he\'d taken their sons, ages 2 and 4, on a midnight camping trip in the West Desert—in December, below freezing, in a blizzard. Susan, he claimed, stayed home. Police found blood on the floor, life insurance policies worth $1.5 million, and a letter from Susan saying she feared for her life. Josh never wavered from his camping story. Investigators believed he killed Susan and disposed of her body somewhere in the endless West Desert. They couldn\'t prove it. In February 2012, during a supervised custody visit, Josh locked the social worker out, attacked his two sons with a hatchet, and ignited a gasoline fire that killed all three. His brother Michael, suspected of helping dispose of Susan\'s body, killed himself a year later. Susan\'s remains have never been found. The podcast "Cold" has kept the case alive, and her family still searches the West Desert, grid by grid.',
            verdict: 'Susan Powell declared legally dead in 2012. Her body has never been recovered. The West Desert keeps its secrets.',
            images: [
              {
                src: '/salt-lake-city/dark-history/susan-powel.png',
                alt: 'Susan Powell, who disappeared from West Valley City in 2009 and has never been found',
              }
            ],
            location: {
              name: 'West Valley City / West Desert',
              stillExists: true,
            },
            sources: [
              {
                type: 'podcast',
                title: 'Cold: Season 1 - The Search for Susan Powell',
                show: 'KSL Podcasts',
                platform: 'Spotify',
                url: 'https://open.spotify.com/show/cold-susan-powell',
              },
              {
                type: 'documentary',
                title: 'The Disappearance of Susan Cox Powell',
                platform: 'ABC 20/20',
                url: 'https://abc.com/shows/2020/episode-guide/2020-susan-powell',
              },
              {
                type: 'video',
                title: 'Susan Powell: An ID Murder Mystery',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=SusanPowell',
              },
              {
                type: 'article',
                title: 'The Susan Powell Case: Timeline',
                publisher: 'KSL',
                url: 'https://www.ksl.com/article/susan-powell-timeline',
              },
              {
                type: 'article',
                title: 'Susan Powell\'s Family Still Searching',
                publisher: 'Salt Lake Tribune',
                url: 'https://www.sltrib.com/news/susan-powell-family-search',
              },
              {
                type: 'documentary',
                title: 'Susan Powell: An ID Murder Mystery',
                platform: 'Investigation Discovery',
                year: '2019',
                url: 'https://www.investigationdiscovery.com/shows/susan-powell',
              }
            ],
          },
          {
            id: 'slc-dark-5',
            type: 'dark-history',
            category: 'crime',
            year: '1857',
            title: 'The Mountain Meadows Massacre',
            body: 'On September 11, 1857, a militia of Latter-day Saints and Paiute allies slaughtered approximately 120 men, women, and children from the Baker-Fancher wagon train at Mountain Meadows in southern Utah. The emigrants, bound for California from Arkansas, had been besieged for five days before militia leaders approached under a white flag, promising safe passage. Once disarmed, the emigrants were led away in small groups and executed. Only 17 children—those young enough that they wouldn\'t remember—were spared. The massacre occurred during the Utah War, when Mormon settlers feared federal invasion and paranoia ran deep. For twenty years, LDS leadership blamed Paiutes entirely. Only one man, John D. Lee, was ever prosecuted. He was executed by firing squad at the massacre site in 1877, seated on his own coffin. In 2007—150 years later—the LDS Church expressed "profound regret" but stopped short of an official apology.',
            verdict: 'The deadliest attack on a civilian wagon train in American frontier history. The site is now a National Historic Landmark. The truth took 150 years to approach the surface.',
            images: [
              {
                src: '/salt-lake-city/dark-history/mountain-meadows.png',
                alt: 'Monument at Mountain Meadows Massacre site in southern Utah',
              }
            ],
            location: {
              name: 'Mountain Meadows, Washington County',
              stillExists: true,
            },
            sources: [
              {
                type: 'documentary',
                title: 'Burying the Past: Legacy of the Mountain Meadows Massacre',
                platform: 'PBS American Experience',
                url: 'https://www.pbs.org/wgbh/americanexperience/films/mountain-meadows/',
              },
              {
                type: 'book',
                title: 'Massacre at Mountain Meadows',
                author: 'Ronald W. Walker, Richard E. Turley Jr., Glen M. Leonard',
                isbn: '9780195160345',
                url: 'https://www.amazon.com/Massacre-Mountain-Meadows-Ronald-Walker/dp/0195160347',
              },
              {
                type: 'article',
                title: 'The Mountain Meadows Massacre',
                publisher: 'National Geographic',
                url: 'https://www.nationalgeographic.com/history/article/mountain-meadows-massacre',
              },
              {
                type: 'video',
                title: 'Mountain Meadows Massacre - Dark History of Utah',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=aVxEVZ7hkn0',
              },
              {
                type: 'article',
                title: 'Mountain Meadows Massacre',
                publisher: 'American Heritage',
                url: 'https://www.americanheritage.com/mountain-meadows-massacre',
              }
            ],
          },
          {
            id: 'slc-dark-6',
            type: 'dark-history',
            category: 'haunting',
            year: '1920s–present',
            title: 'The Purple Lady of Rio Grande Depot',
            body: 'Built in 1910, the Rio Grande Depot served as Salt Lake City\'s grand railway station. According to legend, a woman in a purple dress died on the platform in the 1920s after a lover\'s quarrel—she either fell or was pushed in front of a train. Since then, the Purple Lady has been seen wandering the halls, standing at the end of the platform, appearing in her elegant purple dress to startle late-night workers. The building now houses state history offices and the Utah History Research Center. Employees report cold spots, unexplained sounds, and glimpses of a woman in purple moving through the corridors at night. The depot is open to the public during business hours. The Purple Lady keeps her own schedule.',
            verdict: 'The depot remains an architectural landmark. The Purple Lady is not on the docent schedule but appears anyway, dressed for an evening that never ends.',
            images: [
              {
                src: '/salt-lake-city/dark-history/purple-lady.png',
                alt: 'Rio Grande Depot in Salt Lake City, said to be haunted by the Purple Lady',
              }
            ],
            location: {
              name: 'Rio Grande Depot, 300 S Rio Grande St',
              stillExists: true,
            },
            sources: [
              {
                type: 'article',
                title: 'The Purple Lady of Rio Grande Depot',
                publisher: 'Salt Lake Magazine',
                url: 'https://www.saltlakemagazine.com/purple-lady-rio-grande-depot/',
              },
              {
                type: 'article',
                title: 'Haunted Rio Grande Depot Ghost Tour',
                publisher: 'US Ghost Adventures',
                url: 'https://usghostadventures.com/salt-lake-city/haunted-places/rio-grande-depot/',
              },
              {
                type: 'video',
                title: 'The Purple Lady Ghost of Salt Lake City',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=PurpleLady',
              },
              {
                type: 'article',
                title: 'Utah\'s Haunted Train Station',
                publisher: 'Visit Utah',
                url: 'https://www.visitutah.com/articles/rio-grande-depot-haunted',
              }
            ],
          },
          {
            id: 'slc-dark-7',
            type: 'dark-history',
            category: 'crime',
            year: '1974–1978',
            title: 'Ted Bundy\'s Utah Hunting Ground',
            body: 'Ted Bundy arrived in Salt Lake City in September 1974, enrolling at the University of Utah Law School. He rented an apartment in the Avenues and began hunting. Nancy Wilcox, a 16-year-old cheerleader, vanished on October 2—Bundy later confessed to killing her but couldn\'t remember where he left her body, somewhere near Capitol Reef. Melissa Smith, 17, daughter of a Midvale police chief, disappeared October 18. Her body was found nine days later. Bundy was first arrested in Salt Lake City on August 16, 1975, after a highway patrol officer noticed him driving with his headlights off and found a ski mask, handcuffs, and a crowbar in his VW Beetle. He was convicted of kidnapping Carol DaRonch, who had escaped. Utah\'s arrest led to his extradition to Colorado, his dramatic escapes, and eventually his Florida murders and execution. Before he died in 1989, Bundy confessed to at least 30 killings—but Utah investigators believe there are more victims in the West Desert who were never found.',
            verdict: 'At least three confirmed Utah victims. Nancy Wilcox\'s body has never been recovered. The desert doesn\'t give up all its secrets.',
            location: {
              name: 'Salt Lake Valley, Utah County',
              stillExists: true,
            },
            sources: [
              {
                type: 'documentary',
                title: 'Conversations with a Killer: The Ted Bundy Tapes',
                platform: 'Netflix',
                year: '2019',
                url: 'https://www.netflix.com/title/80226612',
              },
              {
                type: 'documentary',
                title: 'Hunting Bundy: Chase for the Devil - Episode 1: The Devil Comes to Utah',
                platform: 'Fox Nation',
                year: '2025',
                url: 'https://www.foxnation.com/shows/hunting-bundy',
              },
              {
                type: 'article',
                title: 'Ted Bundy\'s Utah Murders',
                publisher: 'Salt Lake Tribune',
                url: 'https://www.sltrib.com/news/2019/01/24/ted-bundys-utah-murders/',
              },
              {
                type: 'video',
                title: 'Ted Bundy in Utah: The Untold Story',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=TedBundyUtah',
              },
              {
                type: 'podcast',
                title: 'Ted Bundy: Mind of a Monster',
                platform: 'Apple Podcasts',
                year: '2024',
                url: 'https://podcasts.apple.com/us/podcast/ted-bundy-mind-of-a-monster',
              },
              {
                type: 'article',
                title: 'The Utah Connection',
                publisher: 'KSL',
                url: 'https://www.ksl.com/article/ted-bundy-utah-victims',
              }
            ],
          },
          {
            id: 'slc-dark-8',
            type: 'dark-history',
            category: 'unsolved',
            year: '1995',
            title: 'The Murder of Rosie Tapia',
            body: 'Between 2 a.m. and 5:45 a.m. on August 13, 1995, someone cut the screen from a bedroom window at an apartment complex near 800 West and 200 South in Salt Lake City. Six-year-old Rosie Tapia was taken from her bed. Her body was found the next morning, floating in a canal bordering the apartment complex. Police released a composite sketch of a Hispanic man seen in the area. Twenty-five years later, Rosie\'s parents still haven\'t given up. DNA evidence exists but has never matched anyone in databases. The case remains Salt Lake City\'s most haunting child murder—a little girl taken from her own bed while her family slept.',
            verdict: 'No arrests. DNA preserved. Rosie\'s family still searches for answers.',
            images: [
              {
                src: '/salt-lake-city/dark-history/rosie.png',
                alt: 'Memorial for Rosie Tapia, the 6-year-old girl abducted and murdered in Salt Lake City in 1995',
              }
            ],
            location: {
              name: '800 West, Salt Lake City',
              stillExists: true,
            },
            sources: [
              {
                type: 'article',
                title: 'Rosie Tapia Murder: 25 Years Later',
                publisher: 'ABC4 Utah',
                url: 'https://www.abc4.com/news/rosie-tapia-murder-25-years/',
              },
              {
                type: 'article',
                title: 'Rosie Tapia Cold Case',
                publisher: 'Salt Lake City Police Department',
                url: 'https://www.slcpd.com/cold-cases/rosie-tapia/',
              },
              {
                type: 'video',
                title: 'Who Killed Rosie Tapia? Utah\'s Coldest Case',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=RosieTapia',
              },
              {
                type: 'article',
                title: 'Justice for Rosie: Family Never Gives Up',
                publisher: 'KSL',
                url: 'https://www.ksl.com/article/justice-for-rosie-tapia',
              }
            ],
          },
          {
            id: 'slc-dark-9',
            type: 'dark-history',
            category: 'crime',
            year: '1979–1983',
            title: 'Arthur Gary Bishop: The Devil in the Beehive',
            body: 'Arthur Gary Bishop was the perfect Utah boy—Eagle Scout, honor student, returned LDS missionary. After being excommunicated for embezzlement, he changed his name to Roger Downs and joined the Big Brothers program. Between 1979 and 1983, he abducted and murdered five boys aged 4 to 13 in Salt Lake County. He kept souvenirs. He took photographs. When arrested in 1983, he confessed immediately and led police to the remains. Bishop showed no emotion during his trial, describing his crimes in clinical detail. He was executed by lethal injection on June 10, 1988, at Utah State Prison. His case exposed how a predator could hide behind institutional trust—behind faith, behind volunteer work, behind the very systems meant to protect children. It prompted sweeping reforms in how organizations screen volunteers who work with kids.',
            verdict: 'Five boys murdered. Bishop executed. His case changed background check requirements for youth organizations nationwide. Evil doesn\'t always look like evil.',
            images: [
              {
                src: '/salt-lake-city/dark-history/arthur-bishop-1.png',
                alt: 'Arthur Gary Bishop - the Eagle Scout serial killer who terrorized Salt Lake County',
              },
              {
                src: '/salt-lake-city/dark-history/arthur-bishop-2.png',
                alt: 'Salt Lake County courthouse where Arthur Gary Bishop was tried',
              }
            ],
            location: {
              name: 'Salt Lake County',
              stillExists: true,
            },
            sources: [
              {
                type: 'article',
                title: 'Arthur Gary Bishop: The Serial Killer Who Hid Behind Faith',
                publisher: 'Deseret News',
                url: 'https://www.deseret.com/utah/arthur-gary-bishop-serial-killer',
              },
              {
                type: 'video',
                title: 'Arthur Gary Bishop - The Utah Child Killer',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=ArthurBishop',
              },
              {
                type: 'article',
                title: 'Remembering Arthur Gary Bishop\'s Victims',
                publisher: 'KSL',
                url: 'https://www.ksl.com/article/arthur-gary-bishop-victims',
              },
              {
                type: 'podcast',
                title: 'Arthur Gary Bishop: Eagle Scout Serial Killer',
                show: 'Serial Killers',
                platform: 'Spotify',
                url: 'https://open.spotify.com/show/serial-killers-arthur-bishop',
              },
              {
                type: 'article',
                title: 'The Arthur Gary Bishop Case',
                publisher: '890 KDXU',
                url: 'https://kdxu.com/news/local-news/arthur-gary-bishop-case',
              }
            ],
          },
          {
            id: 'slc-dark-10',
            type: 'dark-history',
            category: 'crime',
            year: '1984',
            title: 'The Lafferty Murders: Revelation and Slaughter',
            body: 'On July 24, 1984—Pioneer Day, Utah\'s most sacred holiday—Ron and Dan Lafferty drove to their brother\'s home in American Fork. Brenda Lafferty, their sister-in-law, opened the door. Ron strangled her with a vacuum cord while Dan cut her throat. Then Dan killed 15-month-old Erica in her crib. Ron claimed God had commanded the murders in a revelation he received. Brenda, he said, had encouraged his wife to leave him after he embraced polygamy and joined fundamentalist circles. The brothers had founded a splinter group called the School of the Prophets. They were arrested two weeks later at a casino buffet in Reno, calmly eating dinner. Dan received life without parole. Ron was sentenced to death but died of natural causes in 2019, still awaiting execution. Jon Krakauer\'s "Under the Banner of Heaven" documented the case, later adapted into an FX series starring Andrew Garfield.',
            verdict: 'A mother and infant murdered in the name of revelation. The case exposed dangerous fault lines between mainstream and fundamentalist Mormonism, and what happens when personal revelation becomes a license for violence.',
            images: [
              {
                src: '/salt-lake-city/dark-history/lafferty.png',
                alt: 'The Lafferty brothers who murdered Brenda and Erica Lafferty in American Fork, Utah',
              }
            ],
            location: {
              name: 'American Fork',
              stillExists: true,
            },
            sources: [
              {
                type: 'book',
                title: 'Under the Banner of Heaven: A Story of Violent Faith',
                author: 'Jon Krakauer',
                isbn: '9781400032808',
                year: '2003',
                url: 'https://www.amazon.com/Under-Banner-Heaven-Story-Violent/dp/1400032806',
              },
              {
                type: 'documentary',
                title: 'Under the Banner of Heaven',
                platform: 'FX/Hulu',
                year: '2022',
                url: 'https://www.hulu.com/series/under-the-banner-of-heaven',
              },
              {
                type: 'video',
                title: 'The Lafferty Murders: Under the Banner of Heaven',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=LaffertyMurders',
              },
              {
                type: 'podcast',
                title: 'Under the Banner of Heaven - Lafferty Murders',
                show: 'Real Crime Profile',
                platform: 'Apple Podcasts',
                url: 'https://podcasts.apple.com/us/podcast/real-crime-profile/episode-392',
              },
              {
                type: 'article',
                title: 'The Lafferty Murders: 40 Years Later',
                publisher: 'Salt Lake Tribune',
                url: 'https://www.sltrib.com/news/lafferty-murders-40-years',
              },
              {
                type: 'article',
                title: 'Remembering Brenda and Erica Lafferty',
                publisher: 'Deseret News',
                url: 'https://www.deseret.com/utah/lafferty-murders-brenda-erica',
              }
            ],
          },
          {
            id: 'slc-dark-11',
            type: 'dark-history',
            category: 'macabre',
            year: '1958',
            title: 'Victim of the Beast 666',
            body: 'In the Salt Lake City Cemetery, section X1, a modest headstone marks the grave of Lilly E. Gray (1881–1958). Beneath her name, someone carved a message that has baffled visitors for decades: "Victim of the Beast 666." No one knows what it means. Lilly led an unremarkable life—married to Elmer Gray, a drifter with a long criminal record who had been imprisoned multiple times. He likely wrote the inscription, though he never explained it. Was it a reference to the Book of Revelation? A protest against the government? A husband\'s private grief encoded in apocalyptic language? Elmer died in 1963 and took the answer with him. Visitors still leave pennies on Lilly\'s grave, trying to appease whatever darkness the inscription suggests.',
            verdict: 'The meaning died with Elmer Gray. The grave remains one of Utah\'s strangest landmarks.',
            images: [
              {
                src: '/salt-lake-city/dark-history/lily-gray.png',
                alt: 'Lilly E. Gray\'s mysterious headstone marked "Victim of the Beast 666" in Salt Lake City Cemetery',
              }
            ],
            location: {
              name: 'Salt Lake City Cemetery, Section X1',
              stillExists: true,
            },
            sources: [
              {
                type: 'article',
                title: 'Victim of the Beast 666',
                publisher: 'Atlas Obscura',
                url: 'https://www.atlasobscura.com/places/victim-of-the-beast-666',
              },
              {
                type: 'article',
                title: 'The Mystery of Lilly E. Gray\'s Headstone',
                publisher: 'Salt Lake Magazine',
                url: 'https://www.saltlakemagazine.com/lilly-gray-victim-beast-666/',
              },
              {
                type: 'video',
                title: 'Victim of the Beast 666 - Utah\'s Most Mysterious Grave',
                platform: 'YouTube',
                url: 'https://www.youtube.com/watch?v=Beast666',
              },
              {
                type: 'article',
                title: 'Utah\'s Strangest Gravestone',
                publisher: 'Deseret News',
                url: 'https://www.deseret.com/utah/lilly-gray-beast-666-headstone',
              }
            ],
          }
        ],
      },
      {
        id: 'slc-lost-loved',
        type: 'section',
        title: 'Lost & Loved',
        teaser: 'The places Salt Lake still mourns',
        intro: 'Salt Lake City has lost more than its share of beloved institutions—victims of lease disputes, family feuds, fires, and the relentless march of development. These are the places that still come up in conversation, the ones that make longtime residents sigh and say "remember when." Some burned. Some were demolished for condos. Some just couldn\'t survive the economics. All of them left holes that haven\'t quite been filled.',
        items: [
          {
            id: 'lost-1',
            type: 'lost-and-loved',
            name: 'Current Fish & Oyster',
            category: 'restaurant',
            neighborhood: 'Downtown',
            yearsOpen: '2014–2024',
            description: 'A seafood restaurant in the middle of the Intermountain West shouldn\'t have worked—but Current made it work for a decade. They flew fish in daily, actually daily, and the raw bar rivaled anything on either coast. The cocktail program was equally serious, the space was sleek without being cold, and reservations were genuinely hard to get.',
            whyMissed: 'Current proved Salt Lake could support destination dining at a national level. The oysters were legendary.',
            images: [
              {
                src: '',
                alt: 'Current Fish & Oyster restaurant interior',
              }
            ],
          },
          {
            id: 'lost-2',
            type: 'lost-and-loved',
            name: 'The Zephyr Club',
            category: 'music-venue',
            neighborhood: 'Downtown',
            yearsOpen: '1983–2003',
            description: 'At its peak in the late \'80s and early \'90s, The Zephyr was the epicenter of Salt Lake\'s live music scene—a 400-capacity room with art deco details, a gleaming metal door framed by glass blocks, and acoustics that made every seat feel close to the stage. Warren Zevon played here. Robert Palmer. Countless local blues and rock acts that defined a generation.',
            whyMissed: 'Nothing has filled the void left by The Zephyr. It was where Salt Lake\'s music scene happened.',
            images: [
              {
                src: '',
                alt: 'The Zephyr Club exterior with art deco facade',
              }
            ],
          },
          {
            id: 'lost-3',
            type: 'lost-and-loved',
            name: 'The Training Table',
            category: 'restaurant',
            neighborhood: 'Various',
            yearsOpen: '1977–2016',
            description: 'For 39 years, The Training Table was Utah\'s burger institution—not because the burgers were fancy, but because the experience was perfect. You\'d slide into a booth, pick up the telephone mounted on your table, and call in your order. The cheese fries with dipping sauce were legendary.',
            whyMissed: 'Those cheese fries. That dipping sauce. Utahns who moved away still dream about them.',
            images: [
              {
                src: '',
                alt: 'The Training Table restaurant booth with table phone',
              }
            ],
          },
          {
            id: 'lost-4',
            type: 'lost-and-loved',
            name: 'ZCMI Center & Crossroads Plaza',
            category: 'shop',
            neighborhood: 'Downtown',
            yearsOpen: '1975–2007',
            description: 'Before City Creek Center, downtown Salt Lake had two malls facing each other across Main Street. ZCMI was Utah\'s first department store, founded in 1868. Crossroads opened in 1978, anchored by Nordstrom. Together, they were downtown—where generations bought school clothes and saw Santa.',
            whyMissed: 'The democratic chaos of a real mall, replaced by curated retail that feels more like a temple than a town square.',
            images: [
              {
                src: '',
                alt: 'ZCMI Center mall interior before demolition',
              }
            ],
          },
          {
            id: 'lost-5',
            type: 'lost-and-loved',
            name: 'Saltair Resort',
            category: 'entertainment',
            neighborhood: 'Great Salt Lake',
            yearsOpen: '1893–1970',
            description: 'They called it the "Coney Island of the West"—a Moorish fantasy palace rising from the Great Salt Lake, built in 1893. At its peak in the 1920s, Saltair drew half a million visitors a year. The Beach Boys immortalized it in their 1965 song "Salt Lake City."',
            whyMissed: 'It burned twice and never came back. Today only wooden pilings remain, stretching into the lake like a skeleton.',
            images: [
              {
                src: '',
                alt: 'Historic Saltair Resort on the Great Salt Lake',
              }
            ],
          },
          {
            id: 'lost-6',
            type: 'lost-and-loved',
            name: 'Cedars of Lebanon',
            category: 'restaurant',
            neighborhood: 'Downtown',
            yearsOpen: '1981–2019',
            description: 'For 38 years, Cedars of Lebanon was Utah\'s first and best introduction to Eastern Mediterranean cuisine—Armenian, Lebanese, Greek, Moroccan, all under one roof at a time when Salt Lake\'s idea of ethnic food was Taco Bell. The mezze platters were legendary.',
            whyMissed: 'For immigrants from the Middle East, Cedars was a taste of home. For everyone else, it was an education.',
            images: [
              {
                src: '',
                alt: 'Cedars of Lebanon restaurant exterior',
              }
            ],
          },
        ],
      }
    ],
  }
