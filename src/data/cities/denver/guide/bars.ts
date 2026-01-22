import type { DirectoryCategory } from '@/types/directory'

/**
 * Denver Bars Directory
 * Curated guide to the best bars in Denver
 */
export const denverBars: DirectoryCategory = {
  slug: 'bars',
  name: 'Bars',
  description: 'From hidden speakeasies to historic dive bars, discover where Denver drinks.',
  icon: 'cocktail',
  color: 'blue',

  // Main establishments
  establishments: [
    {
      id: 'williams-graham',
      name: 'Williams & Graham',
      neighborhood: 'LoHi',
      vibe: 'Hidden speakeasy behind a discreet bookstore facade in the Highlands, with 500+ spirits on the back bar.',
      order: 'Bespoke cocktails based on your preferences, or classic Manhattans. The bartenders are exceptionally skilled.',
      why: 'The secret entrance through the bookshop sets the mood—you literally walk through a bookcase like you\'re in a Nancy Drew novel—but the cocktails justify the theatrics and prevent it from being pure gimmick. With over 500 bottles behind the bar and 60+ classic cocktails plus original creations that change seasonally, Williams & Graham has been Denver\'s premier craft cocktail destination since 2011, which is basically ancient history in RiNo years. The bartenders are exceptionally skilled at reading your preferences and making something you didn\'t know you wanted, and the bespoke cocktail program means you can describe what you like and they\'ll craft something on the spot. Reservations are essential because it fills up quickly and the space is intentionally intimate (read: small), which is speakeasy-speak for "you\'re going to be very close to your neighbors."',
      address: '3160 Tejon St, Denver, CO 80211',
      coordinates: { lat: 39.7603, lng: -105.0131 },
      price: '$$$',
      hours: 'Daily 5pm-1am',
      website: 'https://williamsandgraham.com/',
      instagram: '@williamsandgraham',
      image: {
        src: '/denver/hidden-gems/speakeasy-2.png',
        alt: 'Williams & Graham intimate speakeasy bar with warm lighting and craft cocktails'
      },
      tags: ['speakeasy', 'cocktails', 'craft', 'reservations'],
      featured: true,
    },
    {
      id: 'death-and-co',
      name: 'Death & Co Denver',
      neighborhood: 'RiNo',
      vibe: 'The first-ever expansion of the legendary NYC cocktail bar, housed in The Ramble Hotel lobby.',
      order: 'Cocktails from categories like "Fresh and Lively" or "Elegant and Timeless." Expect to pay up to $33 per drink, but they\'re worth it.',
      why: 'When one of the world\'s most famous and awarded cocktail bars opens its first-ever expansion outside of New York and chooses Denver, you pay attention—and also feel vindicated that Denver is finally getting the respect it deserves. Death & Co brought their meticulous attention to detail and craftsmanship from the East Village in 2018, and it immediately became one of Denver\'s most serious drinking destinations. The cocktails are expensive ($20-$33 per drink, yes you read that right) but worth it if you appreciate the craft: perfect dilution, balanced flavors, garnishes that aren\'t just decorative. The Garden rooftop functions as both a daytime cafe and evening bar, which is very Denver. The cocktails are helpfully categorized ("Fresh and Lively," "Elegant and Timeless," etc.) so you can find your style without having to decode a pretentious menu.',
      address: '1280 25th St, Denver, CO 80205',
      coordinates: { lat: 39.7553, lng: -104.9872 },
      price: '$$$',
      hours: 'Daily 5pm-12am',
      website: 'https://www.deathandcompany.com/',
      instagram: '@deathandcompany',
      tags: ['cocktails', 'craft', 'upscale', 'rooftop'],
      featured: true,
    },
    {
      id: 'union-lodge',
      name: 'Union Lodge No. 1',
      neighborhood: 'Downtown',
      vibe: 'Pre-Prohibition cocktail bar with hand-chipped ice, vintage glassware, and disciplined historical authenticity.',
      order: 'The Blue Blazer for drama (it involves fire), or classics like Sazerac, Vieux Carre, and Sherry Cobbler.',
      why: 'Everything predates Prohibition here — no Coke, no Pepsi, just 18 classic cocktails made exactly as they were in the late 19th century. The building itself was the original Oddfellows\' Lodge No. 1 from that era. For anyone interested in cocktail history, this is a pilgrimage.',
      address: '1543 Champa St, Denver, CO 80202',
      coordinates: { lat: 39.7469, lng: -104.9939 },
      price: '$$$',
      hours: 'Sun-Wed 5pm-11pm, Thu-Sat 5pm-1am',
      website: 'https://www.unionlodge1.com/',
      instagram: '@unionlodge1',
      tags: ['cocktails', 'historic', 'prohibition-era'],
    },
    {
      id: 'ratio-beerworks',
      name: 'Ratio Beerworks',
      neighborhood: 'RiNo',
      vibe: 'The original RiNo brewery, with a massive patio and neighborhood loyalty that predates the gentrification.',
      order: 'Dear You French Saison if they have it. Their lagers are also excellent.',
      why: 'Ratio was here before RiNo became a real estate buzzword, and they\'ve maintained their neighborhood brewery identity despite the neighborhood changing around them. The big patio is perfect in summer, the beer is consistently solid, and the crowd is genuinely local.',
      address: '2920 Larimer St, Denver, CO 80205',
      coordinates: { lat: 39.7593, lng: -104.9798 },
      price: '$$',
      hours: 'Mon-Wed 12pm-11pm, Thu-Fri 12pm-12am, Sat 11am-12am, Sun 11am-11pm',
      website: 'https://ratiobeerworks.com/',
      instagram: '@ratiobeerworks',
      image: {
        src: '/denver/curiosities/breweries-1.png',
        alt: 'Ratio Beerworks craft brewery taproom with industrial RiNo decor'
      },
      tags: ['brewery', 'beer', 'patio', 'local'],
    },
    {
      id: 'mezcaleria-alma',
      name: 'Mezcaleria Alma',
      neighborhood: 'Highland',
      vibe: 'Lively agave spirits bar from the team behind Michelin-starred Alma Fonda Fina.',
      order: 'Agave spirits flights, thoughtful cocktails, and let the vintage Mexican records on the custom sound system set the mood.',
      why: 'Named one of the 5 best new cocktail bars in the U.S. in 2025, Mezcaleria sits next door to Johnny and Kasie Curiel\'s Michelin-starred restaurant. The focus on agave spirits is encyclopedic, the cocktails are innovative, and the atmosphere is genuinely fun. This is where Denver\'s cocktail scene is heading.',
      address: '2550 15th St, Denver, CO 80211',
      coordinates: { lat: 39.7597, lng: -105.0158 },
      price: '$$$',
      hours: 'Daily 4pm-12am',
      website: 'https://www.mezcaleriaalma.com/',
      instagram: '@mezcaleriaalma',
      tags: ['cocktails', 'mezcal', 'tequila', 'agave', 'michelin'],
    },
    {
      id: 'cruise-room',
      name: 'The Cruise Room',
      neighborhood: 'LoDo',
      vibe: 'Pure, unadulterated Art Deco perfection tucked inside the Oxford Hotel. It\'s shaped like a wine bottle and modeled after a lounge on the Queen Mary.',
      order: 'A classic Martini. This is not the place for "innovative" infusions; drink what the ghosts are drinking.',
      why: 'Opened on December 6, 1933—the day after Prohibition was repealed—the Cruise Room has one of the best-preserved Art Deco interiors in the country, and walking in feels like stepping into a time machine that only goes to glamorous eras. Shaped like a wine bottle and modeled after a lounge on the Queen Mary, the space is pure unadulterated Art Deco perfection: pink neon glowing, chrome polished to a mirror finish, low-relief wall panels depicting "international toasts" that are genuinely beautiful and make you wish modern bars cared about details. It feels like a place where secrets are kept, schemes are hatched, and everyone looks good in the lighting. This is not the place for "innovative infusions" or craft cocktails with fifteen ingredients—drink a classic Martini and pretend you\'re in a film noir. It is the most cinematic drink in Denver, and that\'s saying something.',
      address: '1600 17th St, Denver, CO 80202',
      coordinates: { lat: 39.7516, lng: -104.9984 },
      price: '$$',
      hours: 'Daily 4pm-1am',
      website: 'https://TheCruiseRoom.com',
      instagram: '@thecruiseroom',
      images: [
        {
          src: '/denver/bars/denver-bars-cruise-1.png',
          alt: 'The Cruise Room Art Deco interior'
        },
        {
          src: '/denver/bars/denver-bars-cruise-2.png',
          alt: 'The Cruise Room Art Deco interior'
        },
        {
          src: '/denver/bars/denver-bars-cruise-3.png',
          alt: 'The Cruise Room Art Deco interior'
        },
        {
          src: '/denver/bars/denver-bars-cruise-4.png',
          alt: 'The Cruise Room Art Deco interior'
        }
      ],
      tags: ['historic', 'art-deco', 'classic-cocktails', 'prohibition-era'],
      featured: true,
    },
    {
      id: 'my-brothers-bar',
      name: 'My Brother\'s Bar',
      neighborhood: 'LoDo/Highland',
      vibe: 'The oldest bar in Denver (operating since 1873) and famously Neal Cassady\'s haunt. No TVs, no neon signs outside, just classical music and cheap, legendary burgers.',
      order: 'The JCB (Jalapeño Cream Cheese Burger) and a cheap pint. No questions.',
      why: 'There is a framed letter from Neal Cassady (the inspiration for Jack Kerouac\'s "On the Road") hanging on the wall where he asks a friend to pay his tab, which is peak Beat Generation energy and also peak deadbeat energy. Operating since 1873, My Brother\'s Bar is Denver\'s oldest bar and the antidote to the RiNo-ification of the city—no TVs, no neon signs outside, just classical music playing and cheap legendary burgers that will ruin other burgers for you. The JCB (Jalapeño Cream Cheese Burger) is a cult favorite that sounds like it shouldn\'t work but absolutely does. It looks and feels exactly as it has for decades: wood-paneled, dim-lit, and unpretentious in a way that can\'t be faked. It is the city\'s living room—if your living room was haunted by the ghosts of the Beat Generation, smelled faintly of beer and grilled onions, and served incredible $8 burgers. If this place ever closes, Denver loses a piece of its soul.',
      address: '2376 15th St, Denver, CO 80202',
      coordinates: { lat: 39.7578, lng: -105.0089 },
      price: '$',
      hours: 'Mon-Sat 11am-12am, closed Sun',
      website: 'https://mybrothersbar.com',
      instagram: '@mybrothersbardenver',
      images: [
        {
          src: '/denver/bars/denver-bars-mybro-1.png',
          alt: 'My Brother\'s Bar historic interior'
        },
        {
          src: '/denver/bars/denver-bars-mybro-2.png',
          alt: 'My Brother\'s Bar historic interior'
        },
        {
          src: '/denver/bars/denver-bars-mybro-3.png',
          alt: 'My Brother\'s Bar historic interior'
        }
      ],
      tags: ['dive-bar', 'historic', 'burgers', 'beat-generation', 'cheap'],
    },
  ],

  // Discovery boxes to be inserted between listings
  discoveryBoxes: [
    {
      id: 'prohibition-dark-history',
      type: 'dark-history',
      insertAfter: 2, // After Union Lodge
      content: {
        category: 'crime',
        year: '1920s',
        title: 'Denver\'s Prohibition Underworld',
        body: 'During Prohibition, Denver became one of the most corrupt cities in America. Mayor Benjamin Stapleton—yes, that Stapleton—openly allowed speakeasies to operate as long as they paid protection money. The police chief was on the payroll of bootleggers. Market Street downtown was lined with illegal bars, gambling dens, and brothels that operated with impunity. The city\'s underground tunnel system, originally built for steam heating, became a smuggling network for Canadian whiskey. When federal agents raided the city in 1929, they found over 500 speakeasies operating openly, with many located within blocks of City Hall. The establishment didn\'t fight Prohibition—they monetized it.',
        image: {
          src: '/denver/dark-history/prohibition-speakeasy.png',
          alt: 'Prohibition-era speakeasy in Denver',
          credit: 'Denver Public Library'
        },
        sources: [
          {
            type: 'book',
            title: 'Prohibition in Denver',
            author: 'Kevin Sweeney',
            publisher: 'History Press'
          }
        ]
      }
    },
    {
      id: 'altitude-curiosity',
      type: 'curiosity',
      insertAfter: 5, // After Cruise Room
      content: {
        category: 'science',
        title: 'Why alcohol hits harder at altitude',
        body: 'It\'s not just a myth Denver bartenders tell tourists to explain their behavior—alcohol genuinely affects you differently at 5,280 feet. The lower oxygen levels mean your body processes alcohol less efficiently, and dehydration (which happens faster at altitude) compounds the effect. Your blood alcohol content won\'t be higher, but you\'ll feel drunker faster because your brain is already working with less oxygen. Denver\'s bars have built an entire drinking culture around this reality, which is either a warning or an invitation depending on your tolerance for regret. The unofficial motto: "Come for the views, stay because you can\'t stand up yet."',
        image: {
          src: '/denver/curiosities/altitude-drinking.png',
          alt: 'Denver skyline at sunset',
          credit: 'Visit Denver'
        },
        sources: [
          {
            type: 'article',
            title: 'Alcohol and Altitude: What You Need to Know',
            publisher: 'University of Colorado',
            url: 'https://www.uchealth.org/today/alcohol-and-altitude/'
          }
        ]
      }
    }
  ],

  // Available filters for this category
  filters: {
    neighborhoods: ['LoHi', 'RiNo', 'Downtown', 'LoDo', 'Highland', 'LoDo/Highland'],
    priceRanges: ['$', '$$', '$$$'],
    tags: [
      'speakeasy',
      'cocktails',
      'craft',
      'brewery',
      'beer',
      'historic',
      'dive-bar',
      'patio',
      'rooftop',
      'prohibition-era',
      'art-deco',
      'cheap',
      'upscale'
    ]
  },

  // Related articles
  relatedArticles: [],

  // SEO
  seo: {
    title: 'Best Bars in Denver: Speakeasies, Craft Cocktails & Historic Dives',
    description: 'Discover Denver\'s best bars, from hidden speakeasies to Art Deco classics. Find craft cocktails, historic dive bars, and everything in between.',
    keywords: ['denver bars', 'best bars denver', 'denver speakeasy', 'denver cocktails', 'craft cocktails denver']
  }
}
