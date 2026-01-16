import { CityData } from '@/types/content'

export const salt_lake_city: CityData = {
  slug: 'salt-lake-city',
  name: 'Salt Lake City',
  tagline: 'Where mountains meet faith and rebellion',
  heroImage: {
    src: '/banners/salt-lake-city-banner.png',
    alt: 'Salt Lake City skyline with mountains',
  },
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
      id: 'slc-curiosities',
      type: 'section',
      title: 'Salt & Silicon Secrets',
      teaser: 'The lake that refuses to stay put, the city of the grid, and the foundations of the future',
      intro: 'Salt Lake City was planned before it was built—a grid of massive blocks centered on a temple. But beneath that order lies a city of unexpected secrets: a lake that’s a biological marvel, a mountain full of genealogical records, and the origins of the internet itself.',
      items: [
        {
          id: 'slc-curiosity-1',
          type: 'curiosity',
          category: 'culture',
          title: 'A flamingo named Pink Floyd survived 18 Utah winters',
          body: 'In 1988, a Chilean flamingo escaped from Tracy Aviary when someone forgot to clip its wings. It made the Great Salt Lake its home for nearly 18 years. Pink Floyd—as locals named him—shouldn\'t have survived a single Utah winter, but he had a secret advantage: Chilean flamingos naturally live on high-altitude salt lakes in the Andes, dining on brine shrimp in freezing conditions. The Great Salt Lake was basically home with worse PR. He hooked up with seagulls and swans, completely ignoring his own species. Aviary employees attempted multiple rescues. All failed. Every summer, Pink Floyd disappeared to some mysterious location, then returned each winter like clockwork. He was last seen in Idaho in 2005, though there was one unconfirmed sighting in 2010. In 2021, Salt Lake City immortalized him with a mural on a downtown apartment complex. A flamingo adapted to Utah better than most transplants from California.',
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
          body: 'Beneath the sacred grounds of Temple Square, a labyrinthine network of tunnels allows leaders of The Church of Jesus Christ of Latter-day Saints to move unseen between the Salt Lake Temple, the Church Office Building, and other key facilities. Built for both security and discretion in the 1960s, these subterranean passages became critical arteries for dignitaries during the 2002 Winter Olympics. The Church maintains a steadfast silence on their existence, which, of course, only fuels the intrigue. Every institution with an air of divine authority, it seems, eventually builds its own secret corridors—because even a prophet sometimes needs to avoid the weather, or perhaps, simply the public.',
          year: '1960s',
          image: {
            src: '/salt-lake-city/curiosities/slc-tunnels.png',
            alt: 'Underground tunnels beneath Temple Square',
          },
          source: 'Salt Lake Tribune investigative reports',
          location: {
            name: 'Temple Square',
            stillExists: true,
          },
        },
        {
          id: 'slc-curiosity-7',
          type: 'curiosity',
          category: 'legend',
          title: 'The "Miracle of the Gulls" was great PR, less so history',
          body: 'The story is etched into every Utahn\'s memory: in 1848, a devastating cricket plague threatened to wipe out the Mormon pioneers\' first harvest. Just as all hope seemed lost, a flock of California gulls descended, devoured the crickets, and saved the settlement. A divine intervention! A miracle! The only problem? Contemporary journals are sparse and contradictory, with few mentions of the gulls. Modern ecologists confirm that gulls naturally follow insect swarms, eating their fill and then regurgitating to eat more. The "miracle" narrative blossomed decades later, a convenient founding myth for a people who needed one. Still, Utah made the California gull its state bird and erected a monument in Temple Square. Because why let a few inconvenient facts get in the way of a perfectly good story about divine intervention?',
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
          id: 'slc-curiosity-16',
          type: 'curiosity',
          category: 'invention',
          title: 'A Salt Lake City cop invented the traffic light (and never patented it)',
          body: 'In 1912, Salt Lake City police officer Lester F. Wire stood in the middle of the intersection at 200 South and Main Street directing traffic and decided there had to be a better way—preferably one that didn\'t involve getting run over. So he built the world\'s first electric traffic signal: a wooden box that looked like a birdhouse with hand-painted red and green lightbulbs inside. A nearby officer manually switched the lights to control traffic flow. It worked. Wire never filed a patent. Five years later, Salt Lake City installed the first interconnected traffic signal system in the United States—six intersections controlled simultaneously from a single manual switch. Today, traffic lights are everywhere. Wire got nothing. His invention changed the world. He remained a cop.',
          year: '1912',
          image: {
            src: '/salt-lake-city/curiosities/traffic-light.png',
            alt: 'Historic first traffic light in Salt Lake City',
          },
          sources: [
            {
              type: 'article',
              title: 'Utah inventions: The world\'s 1st electric traffic light',
              publisher: 'KSL',
              url: 'https://www.ksl.com/article/35930882/utah-inventions-the-worlds-1st-electric-traffic-light',
            },
            {
              type: 'article',
              title: 'The rather unremarkable tale of Lester Wire',
              publisher: 'Deseret News',
              url: 'https://www.deseret.com/utah/2021/1/3/22198969/lester-wire-traffic-light-salt-lake-city-utah-benson/',
            },
          ],
          location: {
            name: '200 South and Main Street',
            stillExists: true,
          },
        },
        {
          id: 'slc-curiosity-17',
          type: 'curiosity',
          category: 'culture',
          title: 'Jell-O is the official state snack—and Salt Lake City consumes more than anywhere on Earth',
          body: 'In 1997, Kraft Foods released per capita Jell-O sales data, and Salt Lake City ranked #1 in the world. Not just the U.S.—the world. Utahns were so proud they made Jell-O the official state snack in 2001. During the 2002 Winter Olympics in Salt Lake City, the most sought-after collectible pin was a bowl of green Jell-O. The connection between Mormons and gelatin desserts defies easy explanation—theories range from the prominence of potlucks and church gatherings to Jell-O\'s role as an affordable, shelf-stable dessert for large pioneer families. Whatever the reason, it stuck. Utah owns Jell-O culturally, even though the dessert was invented in New York. The legislature made it official.',
          year: '2001',
          image: {
            src: '/salt-lake-city/curiosities/jello.png',
            alt: 'Bowl of Jell-O dessert',
          },
          sources: [
            {
              type: 'article',
              title: 'Utah Field Guide: Jell-O',
              publisher: 'Salt Lake Magazine',
              url: 'https://saltlakemagazine.com/utah-field-guide-jell-o/',
            },
            {
              type: 'article',
              title: 'What You Didn\'t Know About Mormons and Jell-O',
              publisher: 'LDS Living',
              url: 'https://www.ldsliving.com/what-you-didnt-know-about-mormons-and-jell-o/s/84359',
            },
          ],
          location: {
            name: 'Salt Lake City',
            stillExists: true,
          },
        },
        {
          id: 'slc-curiosity-ad-1',
          type: 'ad',
          size: 'banner',
        },
        {
          id: 'slc-curiosity-18',
          type: 'curiosity',
          category: 'law',
          title: 'It\'s illegal not to drink milk in Salt Lake City',
          body: 'Buried in Salt Lake City\'s municipal code is an obscure law making it illegal to refuse to drink milk. The ordinance was enacted to promote Utah\'s dairy industry and ensure its continued success—because nothing says "thriving free market" like legally mandated beverage consumption. Enforcement is nonexistent (lactose intolerant residents can breathe easy), but the law technically remains on the books. It joins other bizarre Utah statutes like birds having the right of way on all highways and $50 fines for throwing snowballs in Provo. The legislature never met an overreach it didn\'t like.',
          image: {
            src: '/salt-lake-city/curiosities/milk.png',
            alt: 'Glass of milk',
          },
          sources: [
            {
              type: 'article',
              title: '5 Strange Utah Laws That\'ll Leave You Amazed',
              publisher: 'Noelle Neff Law',
              url: 'https://noelleneff.com/5-strange-utah-laws-you-didnt-know-existed/',
            },
            {
              type: 'article',
              title: 'These are some of Utah\'s strangest laws',
              publisher: 'KSL',
              url: 'https://www.ksl.com/article/50624960/these-are-some-of-utahs-strangest-laws',
            },
          ],
          location: {
            name: 'Salt Lake City',
            stillExists: true,
          },
        },
        {
          id: 'slc-curiosity-8',
          type: 'curiosity',
          category: 'legend',
          title: 'The "North Shore Monster" terrorized 1870s lake resorts',
          body: 'On July 8, 1877, J.H. McNeil and several workers at the Barnes and Co. saltworks near Monument Point spotted a massive creature rising from the Great Salt Lake. McNeil described it as 75 feet long with the body of a crocodile and the head of a horse. It let out a loud, terrifying bellow as it approached the shore. The men fled into the nearby mountains and hid overnight, too frightened to return. The next morning, they found massive overturned boulders and disturbed ground along the shoreline. McNeil signed a legal affidavit attesting to the encounter, and newspapers across the territory ran with the story, dubbing it the "North Shore Monster" or "Old Briney." A $1 million bounty was offered. The creature was never caught. Earlier sightings dated back to 1848, when Mormon settlers reported porpoise-like creatures in the lake near Antelope Island. The most skeptical explanation? An enormous buffalo carcass bobbing in the waves. But that doesn\'t explain the bellow, the overturned boulders, or why grown men spent a freezing night hiding in the mountains.',
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
          id: 'slc-curiosity-6',
          type: 'curiosity',
          category: 'architecture',
          title: 'Streets were designed wide enough for oxen U-turns',
          body: 'Brigham Young mandated streets wide enough for a team of oxen pulling a wagon to turn around completely without—as he allegedly put it—"resorting to profanity." Main Street is 132 feet wide, roughly the width of a modern four-lane highway with parking on both sides. The grid system uses Temple Square as its origin point: every address tells you exactly how far from the temple you are. Urban planning as theodicy.',
          image: {
            src: '/salt-lake-city/curiosities/slc-streets.png',
            alt: 'Wide Salt Lake City streets designed for oxen',
          },
          source: 'Salt Lake City Planning Division',
        },
        {
          id: 'slc-curiosity-3',
          type: 'curiosity',
          category: 'law',
          title: 'Grocery store beer was capped at 3.2% until 2019',
          body: 'For decades, Utah law forced breweries to choose: water down your beer to 3.2% alcohol or skip the state entirely. Major brands created embarrassing "Utah formulations" of their products—essentially beer-flavored water you could buy at grocery stores. The law finally changed in November 2019, but quirks remain: no wine at grocery stores, bars still pour behind "Zion curtains," and the private club system makes no sense to anyone, including Utahns. Progress is incremental in the Beehive State.',
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
          id: 'slc-curiosity-ad-2',
          type: 'ad',
          size: 'rectangle',
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
          id: 'slc-curiosity-10',
          type: 'curiosity',
          category: 'nature',
          title: 'Winter inversions trap pollution worse than Beijing',
          body: 'A typical Utah winter sees 5-6 multi-day inversion episodes—about 18 days total where pollution levels violate federal air quality standards. Cold air settles in the valley, warmer air above it creates an atmospheric lid, and pollution accumulates for days or weeks with nowhere to go. The physics are brutal: PM2.5 levels during severe inversions reach 130 micrograms per cubic meter, nearly four times the EPA\'s safe limit of 35. That\'s worse than Beijing and Delhi on their bad days. The Wasatch Mountains—normally the city\'s greatest selling point—become a prison wall trapping exhaust, wood smoke, and ammonium nitrate particles. The health toll is staggering: asthma emergency room visits spike 42% during inversions, heart attack hospitalizations increase 10%, and air pollution reduces the average Utah resident\'s life by 1.1 to 3.5 years. Nearly 450 Utahns die annually from pollution-related causes. Residents who can afford it flee to ski resorts above the inversion layer, literally ascending to breathe clean air. The irony—that the state\'s natural beauty is both the attraction and the trap—is not lost on anyone.',
          image: {
            src: '/salt-lake-city/curiosities/pollution.png',
            alt: 'Winter inversion pollution in Salt Lake Valley',
          },
          source: 'Utah Division of Air Quality',
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
          id: 'slc-curiosity-balloon',
          type: 'curiosity',
          category: 'history',
          title: 'Japanese balloon bombs floated over Utah during WWII',
          body: 'In 1945, a rancher in Box Elder County spotted a 33-foot balloon drifting over Blue Creek Valley. Sheriff Warren Hyde grabbed the strange device with his bare hands and held on for 45 minutes in the freezing wind while help was summoned. It was a Japanese Fu-Go balloon bomb—one of 9,300 launched across the Pacific on the jet stream. The FBI swore Hyde to silence for decades. The sand in the ballast bags helped identify Japanese launch sites, leading to bombing raids that ended the program.',
          year: '1945',
          image: {
            src: '/salt-lake-city/articles/balloon-bomb.png',
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
            src: '/salt-lake-city/curiosities/greatest-snow.jpg',
            alt: 'Deep powder snow in the Wasatch Mountains',
          },
          source: 'Utah Office of Tourism',
          location: {
            name: 'Wasatch Mountains',
            stillExists: true,
          },
        },
      ],
    },
  ],
}
