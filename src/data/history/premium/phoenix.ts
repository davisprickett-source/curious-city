import { History } from '@/types/content'

export const phoenix_premium_history: Record<string, History> = {
  'the-air-conditioned-dream-premium': {
    slug: 'the-air-conditioned-dream-premium',
    citySlug: 'phoenix',
    title: 'The Air-Conditioned Dream',
    subtitle: 'A city that shouldn\'t exist, existing grandly anyway',
    author: 'Curious City',
    publishedAt: '2024-12-22',
    premium: {
      isPremium: true,
      estimatedReadTime: '18 min',
    },
    blocks: [
      // Video 1: Intro - city as argument against nature
      {
        id: 'video1',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-1',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p1',
            type: 'paragraph',
            dropcap: true,
            content: 'The city exists as an argument against nature, a sprawling defiance of every signal the Sonoran Desert sends about human habitation. The summer temperatures reach 120 degrees, heat so extreme it grounds airplanes because the air becomes too thin for lift, heat that melts plastic trash cans and makes steering wheels untouchable, that kills people who run out of gas on the freeway or decide to hike at noon. This is not a place that invited settlement. This is a place that had to be conquered, subdued, made livable through constant mechanical effort and the application of water from elsewhere.',
          },
        ],
      },
      // Video 2: Salt River - first part of p2
      {
        id: 'video2',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-2',
        scrollHeight: 180,
        textBlocks: [
          {
            id: 'p2a',
            type: 'paragraph',
            content: 'The Salt River runs through the valley, or used to. Now it\'s mostly dry, a wide sandy bed with occasional pools, the water diverted into canals built by the Hohokam a thousand years ago, then rebuilt by white settlers in the 1860s who found the ancient irrigation channels still visible in the desert and simply cleared them out.',
          },
        ],
      },
      // Video 3: Hohokam - second part of p2
      {
        id: 'video3',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-3',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p2b',
            type: 'paragraph',
            content: 'The Hohokam had farmed this valley for centuries, engineering sophisticated water systems, building platform mounds and ball courts, supporting thousands of people before mysteriously abandoning everything around 1450. The settlers who arrived four centuries later learned nothing from this collapse, built their own civilization in the same place, with the same assumptions about water, with the same confidence that engineering could overcome ecology.',
          },
        ],
      },
      // Video 4: Settlers - first part of p3
      {
        id: 'video4',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-4',
        scrollHeight: 180,
        textBlocks: [
          {
            id: 'p3a',
            type: 'paragraph',
            content: 'The town was founded in 1868, named Phoenix by Darrell Duppa, a British-born wanderer who saw the new settlement rising from the ruins of Hohokam canals and thought of the mythical bird reborn from ashes. It was a farming community first, growing cotton and alfalfa and citrus in the irrigated desert, the crops thriving in soil that was rich when watered, the growing season extending almost year-round.',
          },
        ],
      },
      // Video 5: Railroad - second part of p3
      {
        id: 'video5',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-5',
        scrollHeight: 170,
        textBlocks: [
          {
            id: 'p3b',
            type: 'paragraph',
            content: 'The railroad arrived in 1887, connecting Phoenix to the national economy, making it possible to ship crops east and bring manufactured goods west.',
          },
          {
            id: 'break1',
            type: 'break',
            style: 'dots',
          },
        ],
      },
      // Video 6: Air conditioning revolution - first part of p4
      {
        id: 'video6',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-6',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'sub1',
            type: 'subheading',
            content: 'Air Conditioning and Explosion',
          },
          {
            id: 'p4a',
            type: 'paragraph',
            content: 'But Phoenix remained small and marginal until air conditioning. The technology that made Florida livable made Arizona habitable, the swamp coolers of the 1930s giving way to refrigerated air in the 1950s, and suddenly summer was not an ordeal to be endured but a mild inconvenience to be ignored.',
          },
        ],
      },
      // Video 7: WWII expansion - second part of p4
      {
        id: 'video7',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-7',
        scrollHeight: 180,
        textBlocks: [
          {
            id: 'p4b',
            type: 'paragraph',
            content: 'The city exploded after World War II, servicemen who\'d trained at the airbases around Phoenix returning with families, developers building subdivisions in the desert, paving over creosote and saguaro, replacing native landscape with lawns and swimming pools and palm trees imported from California.',
          },
        ],
      },
      // Video 8: Sprawl - p5
      {
        id: 'video8',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-8',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p5',
            type: 'paragraph',
            content: 'The growth was not organic but manufactured, the city spreading in every direction with no geographic constraints, no water to cross, no mountains in the way, just flat desert stretching to distant ranges. The sprawl is among the worst in America—Phoenix proper covers 517 square miles, but the metro area is larger, Mesa and Scottsdale and Glendale and Tempe bleeding together into a continuous urban surface that extends fifty miles across the valley floor. There\'s no center, or rather there are many centers, commercial nodes scattered across the grid, shopping malls and office parks repeating in patterns that suggest replication rather than planning.',
          },
        ],
      },
      // Video 9: Freeways - p6
      {
        id: 'video9',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-9',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'quote1',
            type: 'pullquote',
            content: 'This is not a place that invited settlement. This is a place that had to be conquered, subdued, made livable through constant mechanical effort.',
          },
          {
            id: 'p6',
            type: 'paragraph',
            content: 'The freeways loop and cross, ten lanes wide in places, traffic flowing at seventy-five miles per hour except during rush hours when it congeals into parking lots, the whole metro area designed around the assumption that everyone drives everywhere because everyone does drive everywhere. Public transit exists—a light rail line connecting Tempe and downtown Phoenix and a few other places—but it\'s a gesture, a line on a map in a city built for cars, where summer heat makes walking between buildings actively dangerous, where the distances are too great and the destinations too dispersed for transit to function efficiently.',
          },
          {
            id: 'ad1',
            type: 'ad',
            size: 'banner',
          },
        ],
      },
      // Video 10: Retirees/snowbirds - p7
      {
        id: 'video10',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-10',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'sub2',
            type: 'subheading',
            content: 'Snowbirds and Newcomers',
          },
          {
            id: 'p7',
            type: 'paragraph',
            content: 'The retirees came in waves, snowbirds from Minnesota and Michigan and Montana, fleeing winter for the desert warmth, buying houses in Sun City and other age-restricted communities, golfing year-round on courses that require millions of gallons of water to stay green. The retirement communities spread across the northwest valley—Sun City, Sun City West, Sun City Grand—gated subdivisions where the median age is seventy, where golf carts outnumber cars, where the primary civic concern is keeping things exactly as they are. The snowbirds stay October through April, then flee north when summer arrives, leaving behind empty houses and neighborhoods that go dormant in the heat.',
          },
        ],
      },
      // Video 11: Latino population - p8
      {
        id: 'video11',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-11',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p8',
            type: 'paragraph',
            content: 'The Latino population is nearly half the city now, Phoenix being close enough to Mexico that the border is a presence rather than an abstraction. The farmworkers who came for the cotton harvest stayed and brought families, the construction boom of the 1990s and 2000s drew laborers from Sonora and Sinaloa, and the city\'s economy depends on this labor even as the politics swing against it. Arpaio ran the county sheriff\'s office for twenty-four years on anti-immigrant rhetoric, tent cities and pink underwear for inmates, raids on workplaces and traffic stops that targeted brown skin, the cruelty performative and popular until it finally wasn\'t.',
          },
        ],
      },
      // Video 12: Heat islands - p9
      {
        id: 'video12',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-12',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p9',
            type: 'paragraph',
            content: 'The heat islands are real and growing, the asphalt and concrete absorbing sunlight and radiating it back, nighttime temperatures in summer staying above ninety, the urban core ten to fifteen degrees hotter than the surrounding desert. The poor neighborhoods, lacking trees and with minimal air conditioning, become dangerous in summer, elderly residents dying in homes that become ovens, cooling centers opened as emergency measures, the whole arrangement a reminder that Phoenix works only for people who can afford to insulate themselves from the climate.',
          },
          {
            id: 'break2',
            type: 'break',
            style: 'space',
          },
        ],
      },
      // Video 13: Water from Colorado River - p10
      {
        id: 'video13',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-13',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'sub3',
            type: 'subheading',
            content: 'Water from Elsewhere',
          },
          {
            id: 'p10',
            type: 'paragraph',
            content: 'The water comes from the Colorado River, carried 336 miles through the Central Arizona Project canal, and from groundwater pumped from aquifers that took millennia to fill and are being depleted in decades. The growth happened on the assumption that water would always be available, that the Colorado River Compact of 1922 guaranteed Arizona\'s share, that technology and law could override hydrology. Now the river is drying up, Lake Mead and Lake Powell dropping to levels that threaten the whole system, and Phoenix faces the reality that its existence depends on water that may not continue flowing.',
          },
        ],
      },
      // Video 14: Mountains - p11
      {
        id: 'video14',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-14',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p11',
            type: 'paragraph',
            content: 'The mountains rise around the valley—the McDowell Mountains to the northeast, the Superstitions to the east, South Mountain to the south—providing the illusion that the city is contained, that the sprawl has limits. But the subdivisions keep climbing into the foothills, houses built on slopes where the views are dramatic and the wildfire risk is extreme, developers selling mountain living while destroying the mountains, the desert scraped away and replaced with grass and pavement and structures that will burn when the fires come.',
          },
        ],
      },
      // Video 15: Downtown revitalization - first part of p12
      {
        id: 'video15',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-15',
        scrollHeight: 180,
        textBlocks: [
          {
            id: 'quote2',
            type: 'pullquote',
            content: 'Phoenix persists through collective delusion and mechanical force, through the absolute conviction that engineering can overcome ecology.',
          },
          {
            id: 'p12a',
            type: 'paragraph',
            content: 'The downtown tried to revitalize, high-rises and the convention center and Chase Field where the Diamondbacks play baseball in air-conditioned comfort, the retractable roof closed all summer because outdoor baseball in Phoenix would be lethal.',
          },
        ],
      },
      // Video 16: Arts district - second part of p12
      {
        id: 'video16',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-16',
        scrollHeight: 170,
        textBlocks: [
          {
            id: 'p12b',
            type: 'paragraph',
            content: 'The arts district and Roosevelt Row offer galleries and restaurants and street art, the attempt to create urban culture in a city fundamentally suburban, the effort genuine but swimming against the current of a place designed for dispersal rather than density.',
          },
          {
            id: 'ad2',
            type: 'ad',
            size: 'rectangle',
          },
        ],
      },
      // Video 17: Baseball and tourism - p13
      {
        id: 'video17',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-17',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p13',
            type: 'paragraph',
            content: 'The economy is healthcare and finance and tourism, though tourism in Phoenix is peculiar—people come to play golf and stay in resorts and escape to Sedona or the Grand Canyon, using Phoenix as a base rather than a destination. The spring training brings baseball teams and fans in February and March, the weather perfect then, seventy-five degrees and sunny, the desert blooming with wildflowers, the saguaros studded with white blossoms. This is Phoenix\'s best moment, the brief season when the climate is ideal, when outdoor living makes sense, when you can understand why people came.',
          },
        ],
      },
      // Video 18: Summer siege - p14
      {
        id: 'video18',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-18',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'sub4',
            type: 'subheading',
            content: 'The Illusion of Normal',
          },
          {
            id: 'p14',
            type: 'paragraph',
            content: 'But spring is brief, six weeks maybe, and then summer arrives like a siege. The calendar says May but the temperature says August, hitting 110 in early June and staying there through September, the heat not humid but absolute, dry enough that sweat evaporates instantly, the air itself hostile, the sun overhead brutal and inescapable. People retreat indoors, moving between air-conditioned spaces, the city emptying out, the wealthy fleeing to San Diego or Flagstaff or anywhere cooler, the poor staying because staying is all they can afford.',
          },
        ],
      },
      // Video 19: Dust storms and monsoons - p15
      {
        id: 'video19',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-19',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p15',
            type: 'paragraph',
            content: 'The dust storms come, haboobs rolling across the valley with walls of sand two miles high, turning day to night, reducing visibility to zero, coating everything in fine desert grit. The monsoons arrive in July and August, sudden violent thunderstorms that dump rain faster than the storm drains can handle, flash floods turning washes into raging rivers, the precipitation arriving in minutes and draining away almost as fast, the ground too hard to absorb water, the whole system designed for aridity rather than abundance.',
          },
        ],
      },
      // Video 20: Illusion of normal - p16
      {
        id: 'video20',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-20',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p16',
            type: 'paragraph',
            content: 'To live in Phoenix is to live in a place that requires constant maintenance of the illusion that this is normal, that cities of five million people naturally exist in deserts that receive eight inches of rain annually, that the swimming pools and golf courses and fountains are sustainable rather than absurd. The boosters talk about the weather, selling sunshine as an asset, ignoring that the sunshine is the problem, that the relentless heat is what makes Phoenix difficult, that the climate everyone claims to love is bearable only because air conditioning makes it irrelevant.',
          },
        ],
      },
      // Video 21: Continued growth - p17
      {
        id: 'video21',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-21',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p17',
            type: 'paragraph',
            content: 'The city continues growing, subdivisions spreading into the empty desert, new residents arriving from California and the Midwest, drawn by housing costs lower than the coasts and winters warmer than anywhere else. The construction cranes multiply, apartment towers rising downtown, warehouses spreading across the west valley to serve the logistics economy. Phoenix believes in growth the way previous generations believed in God, with absolute faith, the assumption that bigger is better and biggest is best, that the water will keep flowing and the power grid will hold and the climate will cooperate.',
          },
        ],
      },
      // Video 22: Saguaros dying, unsustainable - p18
      {
        id: 'video22',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-22',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p18',
            type: 'paragraph',
            content: 'But the saguaros are dying, stressed by heat and drought, the iconic cacti that define the Sonoran Desert collapsing after 150 years of growth. Lake Mead is at twenty-seven percent capacity. The aquifers are dropping. The summers are getting hotter, the century mark that used to be notable now routine, 115 degrees no longer newsworthy. The desert is reclaiming what was always temporarily borrowed, the illusion that Phoenix could exist in perpetuity dissolving like morning frost that never actually forms here because it never gets cold enough.',
          },
        ],
      },
      // Video 23: Final - persistence and delusion - p19
      {
        id: 'video23',
        type: 'video-sequence',
        videoPath: '/sequences/phoenix/phoenix-23',
        scrollHeight: 220,
        textBlocks: [
          {
            id: 'p19',
            type: 'paragraph',
            content: 'The city sprawls under the relentless sun, concrete and asphalt radiating heat, the air shimmering above the freeways, the mountains on the horizon wavering like mirages. Phoenix persists through collective delusion and mechanical force, through the absolute conviction that engineering can overcome ecology, that desire creates reality, that a city of millions can exist in a desert that barely supports lizards and snakes. The air conditioning hums. The water flows through canals. The grass stays improbably green. And everyone pretends this is sustainable, this is normal, this is fine, right up until the moment when it isn\'t.',
          },
        ],
      },
    ],
  },
}
