import { History } from '@/types/content'

export const dallas_premium_history: Record<string, History> = {
  'will-to-exist-premium': {
    slug: 'will-to-exist-premium',
    citySlug: 'dallas',
    title: 'The Will to Exist',
    subtitle: 'No river, no harbor, no geographic excuse—just 180 years of deciding to matter anyway',
    author: 'Curious City',
    publishedAt: '2024-12-21',
    heroImage: {
      src: '/sequences/dallas/dallas-1/frame_0001.jpg',
      alt: 'Dallas skyline rising from the prairie',
      position: 'center',
    },
    premium: {
      isPremium: true,
      estimatedReadTime: '16 min',
    },
    blocks: [
      // Video 1: Intro - Dallas rising from prairie
      {
        id: 'video1',
        type: 'video-sequence',
        videoPath: '/sequences/dallas/dallas-1',
        scrollHeight: 180,
        textBlocks: [
          {
            id: 'p1',
            type: 'paragraph',
            dropcap: true,
            content: 'The city rises from the prairie with the confidence of a place that willed itself into existence, towers gleaming in sunlight so bright it feels like a statement of intent. There\'s no harbor here, no river worth mentioning, no geographic feature that demanded a city. The Trinity River is barely a creek most of the year, a trickle that floods violently after rain and then subsides back into insignificance. Dallas exists because men in the 1840s decided it should, platted streets on empty prairie, sold lots, and waited for the rest of the country to make their bet pay off.',
          },
        ],
      },
      // Video 2: Trading Post origins
      {
        id: 'video2',
        type: 'video-sequence',
        videoPath: '/sequences/dallas/dallas-2',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p2',
            type: 'paragraph',
            content: 'The origin story is appropriately vague. John Neely Bryan established a trading post here in 1841, supposedly attracted by the river crossing, though the river was hardly an obstacle requiring a ford. The settlement grew slowly, one of dozens of frontier towns competing for survival, distinguished from its neighbors by nothing except the determination of its boosters. When the railroads came in the 1870s—the Houston and Texas Central from the south, the Texas and Pacific from the east—Dallas became a crossroads, a distribution point, a place goods flowed through on their way elsewhere. The city\'s first fortune was built not on production but on transaction, on being the middleman, on convincing everyone that Dallas was where deals happened.',
          },
        ],
      },
      // Video 3: Cotton economy
      {
        id: 'video3',
        type: 'video-sequence',
        videoPath: '/sequences/dallas/dallas-3',
        scrollHeight: 180,
        textBlocks: [
          {
            id: 'sub1',
            type: 'subheading',
            content: 'King Cotton',
          },
          {
            id: 'p3',
            type: 'paragraph',
            content: 'The economy was cotton first, the commodity that built the South and sustained it through reconstruction. Dallas became the financial center for cotton trading, banks and brokers handling the transactions between farmers and distant markets, the white bolls transformed into abstract value in ledgers and bank accounts. The cotton market brought wealth concentrated in remarkably few hands, men who built mansions in what became Highland Park, creating a town-within-a-city where zoning laws and deed restrictions would preserve their vision of who belonged and who didn\'t.',
          },
        ],
      },
      // Video 4: Oil boom
      {
        id: 'video4',
        type: 'video-sequence',
        videoPath: '/sequences/dallas/dallas-4',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'sub2',
            type: 'subheading',
            content: 'Oil and Ambition',
          },
          {
            id: 'p4',
            type: 'paragraph',
            content: 'Oil arrived in East Texas in 1930, the biggest field discovered yet, and Dallas—two hours from the wells—became the financial and logistical hub. The roughnecks and wildcatters did the drilling, but Dallas men did the financing, the dealmaking, the conversion of black crude into capital. The oil money was different from the cotton money—faster, bigger, more volatile—and it created a new class of wealth that built downtown skyscrapers with the enthusiasm of people who believed height equaled legitimacy. The Magnolia Building with its red neon Pegasus on top became the symbol, the flying horse visible for miles, a promise that Dallas was going somewhere even if that somewhere was just up.',
          },
          {
            id: 'quote1',
            type: 'pullquote',
            content: 'The city\'s first fortune was built not on production but on transaction, on being the middleman, on convincing everyone that Dallas was where deals happened.',
          },
        ],
      },
      // Video 5: Kennedy assassination
      {
        id: 'video5',
        type: 'video-sequence',
        videoPath: '/sequences/dallas/dallas-5',
        scrollHeight: 160,
        textBlocks: [
          {
            id: 'p5',
            type: 'paragraph',
            content: 'Kennedy was killed here in 1963, shot in Dealey Plaza while riding in the presidential motorcade, Governor Connally beside him also hit, the whole thing captured on film by Abraham Zapruder standing on a concrete pedestal with his 8mm camera. The assassination marked Dallas in ways the city still hasn\'t fully processed—the association with violence, with right-wing extremism, with being the place where a president died. The Sixth Floor Museum now occupies the building where Lee Harvey Oswald fired from, tourists lining up to look out the window at the X painted on Elm Street below, pilgrims to a site of national trauma that Dallas didn\'t choose but can\'t escape.',
          },
        ],
      },
      // Video 6: Freeway system
      {
        id: 'video6',
        type: 'video-sequence',
        videoPath: '/sequences/dallas/dallas-6',
        scrollHeight: 190,
        textBlocks: [
          {
            id: 'sub3',
            type: 'subheading',
            content: 'Highway City',
          },
          {
            id: 'p6',
            type: 'paragraph',
            content: 'The freeway system is expansive and aggressive, highways layered over highways, the High Five interchange where Central Expressway meets LBJ Freeway rising five levels high, a monument to automobile supremacy and the absolute commitment to sprawl. Dallas made its bargain with the car early and completely, spread north into Plano and Richardson and Frisco, east into Garland and Mesquite, west toward Fort Worth though the two cities maintain fierce separation despite being thirty miles apart. Public transit exists—DART light rail connects some parts of the sprawl—but the city\'s DNA is automotive, distances measured in drive time rather than miles, every destination requiring a parking lot.',
          },
        ],
      },
      // Video 7: Wealth and luxury
      {
        id: 'video7',
        type: 'video-sequence',
        videoPath: '/sequences/dallas/dallas-7',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'sub4',
            type: 'subheading',
            content: 'The Ostentatious Kind',
          },
          {
            id: 'p7',
            type: 'paragraph',
            content: 'The wealth here is ostentatious in ways that embarrass the coasts. The mansions in Highland Park and University Park are enormous, Mediterranean revivals and Georgian colonials on lots that could contain small apartment buildings, the property taxes alone exceeding what median families earn yearly. Northpark Center and the Galleria offer luxury retail—Neiman Marcus started here in 1907, remains headquartered here—catering to shoppers for whom price is information rather than limitation. The restaurants in Uptown and Knox-Henderson are scenes as much as dining establishments, places to be seen, to perform wealth, to participate in the social choreography that Dallas takes seriously in ways that suggest insecurity disguised as confidence.',
          },
        ],
      },
      // Video 8: Cowboys and football
      {
        id: 'video8',
        type: 'video-sequence',
        videoPath: '/sequences/dallas/dallas-8',
        scrollHeight: 150,
        textBlocks: [
          {
            id: 'p8',
            type: 'paragraph',
            content: 'The Cowboys are America\'s Team, a title they gave themselves and somehow made stick through winning in the 1970s and relentless marketing since. Jerry Jones bought the team in 1989 and built AT&T Stadium in Arlington, a $1.3 billion temple to football with a retractable roof and a video screen so large it occasionally gets hit by punts. The stadium holds 80,000 people, fills for games where the actual football sometimes seems secondary to the spectacle, the performance of being Cowboys fans in a stadium that looks like the future.',
          },
        ],
      },
      // Video 9: Arts district
      {
        id: 'video9',
        type: 'video-sequence',
        videoPath: '/sequences/dallas/dallas-9',
        scrollHeight: 170,
        textBlocks: [
          {
            id: 'sub5',
            type: 'subheading',
            content: 'Beyond Money and Football',
          },
          {
            id: 'p9',
            type: 'paragraph',
            content: 'The arts district downtown is the largest in the country by area, a collection of museums and performance halls—the Dallas Museum of Art, the Nasher Sculpture Center, the Meyerson Symphony Center, the AT&T Performing Arts Center—evidence of civic ambition to be taken seriously culturally, to have the institutions that world-class cities have. The museums are genuinely good, the symphony competent, the whole district a rebuke to anyone who thinks Dallas is only money and football and big hair.',
          },
          {
            id: 'break1',
            type: 'break',
            style: 'dots',
          },
        ],
      },
      // Video 10: Latino community
      {
        id: 'video10',
        type: 'video-sequence',
        videoPath: '/sequences/dallas/dallas-10',
        scrollHeight: 180,
        textBlocks: [
          {
            id: 'p10',
            type: 'paragraph',
            content: 'The Latino population is nearly half the city now, concentrated in West Dallas and Oak Cliff, neighborhoods historically poorer and blacker that have become increasingly Hispanic, Mexican restaurants and quinceañera shops and Spanish-language churches replacing or coexisting with the Black businesses and Baptist churches. The demographic shift happened fast, the 1990s and 2000s bringing immigration legal and otherwise, families drawn by construction jobs and service work, the economy needing labor and finding it south of the border.',
          },
        ],
      },
      // Video 11: Summer heat
      {
        id: 'video11',
        type: 'video-sequence',
        videoPath: '/sequences/dallas/dallas-11',
        scrollHeight: 150,
        textBlocks: [
          {
            id: 'p11',
            type: 'paragraph',
            content: 'The summer is hostile, June through September with high temperatures above ninety-five, often above one hundred, the heat not just warm but punishing, the kind that makes walking across parking lots feel dangerous, that keeps people moving between air-conditioned spaces like divers surfacing for breath. The city empties outdoors, everyone retreating to climate control, the streets abandoned except for those who have no choice, the homeless and the landscapers and the construction workers who work through heat that would be illegal in other contexts.',
          },
        ],
      },
      // Video 12: Politics and church
      {
        id: 'video12',
        type: 'video-sequence',
        videoPath: '/sequences/dallas/dallas-12',
        scrollHeight: 180,
        textBlocks: [
          {
            id: 'p12',
            type: 'paragraph',
            content: 'The conservative politics are real but not monolithic. The suburbs are deeply red, mega-churches and gun culture and the absolute certainty that taxes are theft and government is the problem. But Dallas proper is purple, increasingly blue, the urban core and the Latino neighborhoods voting Democratic, the business community pragmatic rather than ideological, interested in growth and development more than culture war. The result is tension—the city wanting things the state legislature won\'t fund, residents wanting services that property tax limitations make difficult, the whole arrangement a negotiation between what Dallas wants to be and what Texas will let it become.',
          },
        ],
      },
      // Video 13: Skyline and construction
      {
        id: 'video13',
        type: 'video-sequence',
        videoPath: '/sequences/dallas/dallas-13',
        scrollHeight: 180,
        textBlocks: [
          {
            id: 'sub6',
            type: 'subheading',
            content: 'The Will to Exist',
          },
          {
            id: 'p13',
            type: 'paragraph',
            content: 'The skyline changes constantly, cranes always present, new towers rising with the assumption that growth is permanent and upward is the only direction that matters. The old buildings downtown—Art Deco survivors from the oil boom decades—are dwarfed by glass towers with names like JP Morgan Chase Tower and Bank of America Plaza, monuments to finance capital that dominate the view like cathedral spires in medieval cities, the religion being money and its worship conducted in trading floors and corner offices.',
          },
        ],
      },
      // Video 14: Business culture
      {
        id: 'video14',
        type: 'video-sequence',
        videoPath: '/sequences/dallas/dallas-14',
        scrollHeight: 160,
        textBlocks: [
          {
            id: 'p14',
            type: 'paragraph',
            content: 'To live in Dallas is to live in a city that has convinced itself it\'s important, that has spent 180 years selling itself as the place where things happen, where deals get made, where ambition finds outlet. It\'s a city of salesmen and developers, of people who came from elsewhere and decided here was where they\'d make it, a city with no old families because there are no old families, everyone\'s grandfather arriving from somewhere else looking for opportunity.',
          },
          {
            id: 'quote2',
            type: 'pullquote',
            content: 'Dallas exists because Dallas decided to exist, and that decision, repeated daily in construction permits and corporate relocations, remains sufficiently convincing that the city continues.',
          },
        ],
      },
      // Video 15: Towers rise
      {
        id: 'video15',
        type: 'video-sequence',
        videoPath: '/sequences/dallas/dallas-15',
        scrollHeight: 170,
        textBlocks: [
          {
            id: 'p15',
            type: 'paragraph',
            content: 'The energy is relentless and exhausting, the optimism occasionally grating, the assumption that bigger is better and biggest is best baked into every decision. The city sprawls because sprawl means growth. The towers rise because height means success. The freeways expand because traffic means people, and people means prosperity, and prosperity means Dallas is winning whatever game American cities are playing.',
          },
        ],
      },
      // Video 16: Final/conclusion
      {
        id: 'video16',
        type: 'video-sequence',
        videoPath: '/sequences/dallas/dallas-16',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p16',
            type: 'paragraph',
            content: 'The prairie grass is long gone, paved over or replaced by St. Augustine lawns that require constant watering in a climate that provides little rain. The Trinity River remains disappointing, plans to make it an amenity perpetually discussed and never quite realized. The city persists through force of will, through the accumulated decisions of people who refuse to admit that maybe Dallas shouldn\'t be here, that maybe geography was trying to tell them something when it provided no water, no hills, no reason. But reason was never the point. Ambition was the point. Dallas exists because Dallas decided to exist, and that decision, repeated daily in construction permits and corporate relocations and people moving here from elsewhere, remains sufficiently convincing that the city continues, grows, rises, shines in sunlight that never questions and never doubts.',
          },
        ],
      },
    ],
  },
}
