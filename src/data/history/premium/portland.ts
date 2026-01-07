import { History } from '@/types/content'

export const portland_premium_history: Record<string, History> = {
  'the-dream-of-the-nineties-premium': {
    slug: 'the-dream-of-the-nineties-premium',
    citySlug: 'portland',
    title: 'The Dream of the Nineties',
    subtitle: 'How a coin toss, 200 feet of rain, and a generation of California refugees built America\'s most self-conscious city',
    author: 'Curious City',
    publishedAt: '2025-01-08',
    heroImage: {
      src: '/sequences/portland/portland-1/frame_0001.jpg',
      alt: 'Portland with Mt. Hood in the background',
      position: 'center',
    },
    premium: {
      isPremium: true,
      estimatedReadTime: '18 min',
    },
    blocks: [
      // Video 1: Mountain scene - intro and geography
      {
        id: 'video1',
        type: 'video-sequence',
        videoPath: '/sequences/portland/portland-1',
        scrollHeight: 180,
        textBlocks: [
          {
            id: 'p1',
            type: 'paragraph',
            dropcap: true,
            content: 'Portland sits in the shadow of a volcano. Mount Hood rises 11,250 feet to the east, snow-capped year-round, visible from downtown on clear days like a reminder that nature here operates on a different scale than human ambition. The city occupies the confluence of the Willamette and Columbia Rivers, a natural crossroads that determined its existence before anyone decided to build here. The geography is dramatic in that Pacific Northwest way—forested hills, river valleys, the Cascade Range forming a wall against the high desert to the east. It rains here, famously, persistently, a gray drizzle that locals claim to prefer over sunshine because it keeps the tourists away.',
          },
        ],
      },
      // Video 2: Fur trade history
      {
        id: 'video2',
        type: 'video-sequence',
        videoPath: '/sequences/portland/portland-2',
        scrollHeight: 160,
        textBlocks: [
          {
            id: 'p2',
            type: 'paragraph',
            content: 'The city began as a fur trading post, like so many Western settlements—a place where beaver pelts and otter skins could be collected and shipped to markets that prized them. The Hudson\'s Bay Company controlled the region from Fort Vancouver across the Columbia, the British assuming this territory would remain theirs until the border dispute was settled in 1846. American settlers had other ideas. They came down the Oregon Trail by the thousands in the 1840s, seeking farmland in the Willamette Valley, and they needed a port city to ship their grain. Portland was that port, named by a coin flip in 1845 when the two founders—one from Portland, Maine, and one from Boston—couldn\'t agree on what to call their clearing in the woods.',
          },
        ],
      },
      // Video 3: Discovery and settlers
      {
        id: 'video3',
        type: 'video-sequence',
        videoPath: '/sequences/portland/portland-3',
        scrollHeight: 140,
        textBlocks: [
          {
            id: 'p3',
            type: 'paragraph',
            content: 'The settlers who arrived found a land that had been home to the Chinook, Multnomah, and other peoples for thousands of years—peoples who had built sophisticated societies around salmon fishing and cedar woodworking, who had traded goods up and down the coast and into the interior. Disease had already devastated these communities by the time American settlers arrived in numbers. What the settlers saw as empty land waiting for civilization was actually a landscape still reverberating from catastrophe, its human presence reduced to a fraction of what it had been a generation earlier.',
          },
        ],
      },
      // Video 4: Railroads
      {
        id: 'video4',
        type: 'video-sequence',
        videoPath: '/sequences/portland/portland-4',
        scrollHeight: 150,
        textBlocks: [
          {
            id: 'sub1',
            type: 'subheading',
            content: 'The Railroad City',
          },
          {
            id: 'p4',
            type: 'paragraph',
            content: 'The railroads arrived in the 1880s, and Portland transformed from a river town into a proper city. The Northern Pacific connected the city to the transcontinental network, bringing goods, people, and capital from the East. Portland became the commercial hub of the Pacific Northwest, its merchants and bankers growing wealthy on timber, wheat, and the steady flow of settlers still arriving to claim Oregon\'s promise. The downtown that exists today took shape in this era—the cast-iron buildings, the brick warehouses, the street grid that runs from the river up into the West Hills.',
          },
        ],
      },
      // Video 5: Shipbuilding
      {
        id: 'video5',
        type: 'video-sequence',
        videoPath: '/sequences/portland/portland-5',
        scrollHeight: 170,
        textBlocks: [
          {
            id: 'p5',
            type: 'paragraph',
            content: 'World War II made Portland an industrial powerhouse. The Kaiser Shipyards along the Columbia and Willamette Rivers produced more ships than any other complex in the country—hundreds of Liberty ships and aircraft carriers, built by a workforce that swelled to over 100,000 people. Workers poured in from across the country, including tens of thousands of Black Americans fleeing the Jim Crow South, creating the Vanport housing development that was briefly Oregon\'s second-largest city. When the flood of 1948 destroyed Vanport in fifteen minutes, killing at least fifteen people and displacing 18,500, Portland\'s brief experiment with wartime diversity began its slow unraveling.',
          },
          {
            id: 'quote1',
            type: 'pullquote',
            content: 'The Kaiser Shipyards produced more ships than any other complex in the country—hundreds of Liberty ships and aircraft carriers.',
          },
        ],
      },
      // Video 6: Highways and roads
      {
        id: 'video6',
        type: 'video-sequence',
        videoPath: '/sequences/portland/portland-6',
        scrollHeight: 140,
        textBlocks: [
          {
            id: 'p6',
            type: 'paragraph',
            content: 'The postwar decades brought the same suburban sprawl that afflicted every American city—highways carved through neighborhoods, shopping centers replacing downtown commerce, the population spreading east into Gresham and south toward Lake Oswego. But something different happened in Portland. In 1974, Governor Tom McCall pushed through Senate Bill 100, creating the nation\'s first statewide land-use planning system. Urban growth boundaries drew lines around cities, protecting farmland from development and forcing growth inward. Portland tore down a downtown freeway and built a waterfront park instead. These decisions, made when other cities were still building highways, would define Portland\'s identity for the next half-century.',
          },
        ],
      },
      // Video 7: Growth 90s
      {
        id: 'video7',
        type: 'video-sequence',
        videoPath: '/sequences/portland/portland-7',
        scrollHeight: 150,
        textBlocks: [
          {
            id: 'p7',
            type: 'paragraph',
            content: 'The 1990s brought the boom that transformed Portland from a regional oddity into a national destination. Intel expanded its campus in the suburbs, bringing thousands of tech jobs. Young people discovered that Portland offered urban amenities at a fraction of coastal prices, with natural beauty at the doorstep. The neighborhoods close to downtown—the Pearl District, Alberta, Mississippi, Division—began their transformation from working-class and industrial to hip and expensive. Coffee culture took root. The food scene exploded. "Keep Portland Weird" became a slogan, borrowed from Austin, that captured something real about the city\'s embrace of eccentricity.',
          },
        ],
      },
      // Video 8: Nike
      {
        id: 'video8',
        type: 'video-sequence',
        videoPath: '/sequences/portland/portland-8',
        scrollHeight: 140,
        textBlocks: [
          {
            id: 'sub2',
            type: 'subheading',
            content: 'The Nike Effect',
          },
          {
            id: 'p8',
            type: 'paragraph',
            content: 'Nike shaped Portland in ways that go beyond its suburban campus in Beaverton. Phil Knight\'s company brought athletic culture into the city\'s DNA—the running paths, the hiking trails, the outdoor-brand headquarters that followed Nike\'s lead. Adidas moved its North American headquarters here. Columbia Sportswear stayed local. The concentration of athletic and outdoor companies created an industry cluster that fed on itself, designers and marketers moving between companies, a shared aesthetic emerging that blended performance and lifestyle. Portland became the place where activewear was invented and refined, where the line between workout clothes and everyday clothes first blurred.',
          },
        ],
      },
      // Video 9: Bikes and transport
      {
        id: 'video9',
        type: 'video-sequence',
        videoPath: '/sequences/portland/portland-9',
        scrollHeight: 160,
        textBlocks: [
          {
            id: 'p9',
            type: 'paragraph',
            content: 'The bike culture became Portland\'s most visible claim to urban progressivism. More people commute by bicycle here than in any other major American city—not Copenhagen numbers, but remarkable for the United States. The infrastructure followed the riders: bike lanes, bike boulevards, bike parking, a culture of mutual respect between cyclists and drivers that doesn\'t quite exist elsewhere. The Hawthorne Bridge carries more cyclists than any other bridge in the country. Critical Mass rides that started as protests became celebrations. Portland proved that American cities could accommodate cyclists if they chose to, that car dominance wasn\'t inevitable.',
          },
        ],
      },
      // Video 10: Homelessness
      {
        id: 'video10',
        type: 'video-sequence',
        videoPath: '/sequences/portland/portland-10',
        scrollHeight: 160,
        textBlocks: [
          {
            id: 'sub3',
            type: 'subheading',
            content: 'The Crisis',
          },
          {
            id: 'p10',
            type: 'paragraph',
            content: 'The homelessness crisis crept up on Portland and then exploded. Tent encampments appeared along the Springwater Corridor, under the overpasses, in the doorways downtown. The numbers grew year after year—housing costs rising faster than wages, mental health services inadequate, addiction treatment underfunded, the social safety net fraying. Portland\'s tolerance, which once meant accepting eccentricity and alternative lifestyles, was tested by visible human suffering on a scale the city had never seen. The response has been fractured, inadequate, politically contentious. The camps remain.',
          },
        ],
      },
      // Video 11: Protests
      {
        id: 'video11',
        type: 'video-sequence',
        videoPath: '/sequences/portland/portland-11',
        scrollHeight: 150,
        textBlocks: [
          {
            id: 'p11',
            type: 'paragraph',
            content: 'The summer of 2020 made Portland internationally famous for reasons no one wanted. The protests following George Floyd\'s murder lasted longer here than anywhere else in the country—over a hundred consecutive nights of demonstrations, clashes with police, federal agents deployed against the wishes of local officials. The federal courthouse became a battleground, tear gas drifting through downtown streets night after night. The images broadcast worldwide were of a city at war with itself, though the reality was more complicated: a few blocks of conflict while the rest of the city went about its business, the protests revealing divisions that had always existed but were now impossible to ignore.',
          },
        ],
      },
      // Video 12: Sunny day
      {
        id: 'video12',
        type: 'video-sequence',
        videoPath: '/sequences/portland/portland-12',
        scrollHeight: 130,
        textBlocks: [
          {
            id: 'p12',
            type: 'paragraph',
            content: 'The sunny days here are spectacular, and locals know to drop everything when they arrive. The mountains emerge from the clouds, the rivers sparkle, the green of the trees is almost electric against the blue sky. People pour into the parks, onto the patios, up into the hills. The gray months are forgotten temporarily, replaced by an almost manic appreciation for warmth and light. Summer in Portland is three months of near-perfection, the reason people endure the other nine months of drizzle and darkness.',
          },
          {
            id: 'break1',
            type: 'break',
            style: 'dots',
          },
        ],
      },
      // Video 13: Mt Hood
      {
        id: 'video13',
        type: 'video-sequence',
        videoPath: '/sequences/portland/portland-13',
        scrollHeight: 130,
        textBlocks: [
          {
            id: 'p13',
            type: 'paragraph',
            content: 'Mount Hood draws Portlanders like a magnet. An hour\'s drive puts you at Timberline Lodge, the WPA-era masterpiece that serves as base camp for skiers, hikers, and climbers. The mountain is skiable into June some years, its glaciers feeding the rivers that flow through the metro area. People climb it by the thousands each year, some dying in the attempt when weather turns or crevasses open. The volcano is dormant, not extinct—it last erupted in the 1780s, just before Lewis and Clark passed through, and geologists consider another eruption possible if not imminent. Portland lives in its shadow, literally and metaphorically.',
          },
        ],
      },
      // Video 14: Cafe culture
      {
        id: 'video14',
        type: 'video-sequence',
        videoPath: '/sequences/portland/portland-14',
        scrollHeight: 160,
        textBlocks: [
          {
            id: 'sub4',
            type: 'subheading',
            content: 'The Café City',
          },
          {
            id: 'p14',
            type: 'paragraph',
            content: 'The coffee culture here predates the national obsession, goes deeper than most cities can claim. Stumptown started roasting in 1999, before third-wave coffee had a name, and its success spawned imitators and competitors until Portland became one of the best coffee cities in the country. The cafés serve as living rooms, offices, meeting places—lingering is encouraged, Wi-Fi is expected, the quality of the espresso is taken seriously. The baristas are often people with graduate degrees or artistic ambitions, and the customers assume expertise from anyone pulling shots. Coffee in Portland is not a commodity but a craft, approached with the same reverence the city brings to beer and food.',
          },
        ],
      },
      // Video 15: Politics and pot
      {
        id: 'video15',
        type: 'video-sequence',
        videoPath: '/sequences/portland/portland-15',
        scrollHeight: 150,
        textBlocks: [
          {
            id: 'p15',
            type: 'paragraph',
            content: 'Oregon legalized marijuana in 2014, and Portland embraced it with characteristic enthusiasm. Dispensaries proliferated—sleek storefronts with designer interiors, budtenders who discuss terpene profiles like sommeliers discuss terroir. The tax revenue flowed, the arrests stopped, the culture shifted from underground to mainstream. But the legal market couldn\'t compete with the black market on price, and the oversupply crashed wholesale prices until many legal growers went under. The experiment in legal cannabis has been messier than advocates predicted, more successful than opponents feared, a work in progress like so much else in the city.',
          },
        ],
      },
      // Video 16: Neighborhoods
      {
        id: 'video16',
        type: 'video-sequence',
        videoPath: '/sequences/portland/portland-16',
        scrollHeight: 150,
        textBlocks: [
          {
            id: 'p16',
            type: 'paragraph',
            content: 'The neighborhoods each have their own character, their own commercial strips, their own sense of identity. Hawthorne for vintage shops and vegetarian restaurants. Alberta for art galleries and gentrification guilt. Mississippi for bars and boutiques in buildings that were falling apart a generation ago. Division for the food scene that put Portland on the culinary map. Each neighborhood is bikeable, walkable, scaled for human interaction in a way that suburban sprawl never achieved. The urban growth boundary that once seemed like a constraint now looks like wisdom, having preserved the density that makes neighborhood life possible.',
          },
        ],
      },
      // Video 17: City rain
      {
        id: 'video17',
        type: 'video-sequence',
        videoPath: '/sequences/portland/portland-17',
        scrollHeight: 140,
        textBlocks: [
          {
            id: 'p17',
            type: 'paragraph',
            content: 'The rain returns, as it always does. The gray settles in for months at a time, broken by occasional storms and rarer sunshine. Portlanders develop strategies—Gore-Tex layers, good rain boots, an acceptance that outdoor plans might be wet plans. The rain keeps the landscape green, feeds the rivers, fills the reservoirs. It also filters the population, selecting for people who don\'t need sunshine to be happy, who find beauty in clouds and mist and the particular quality of light that comes through overcast skies. The rain is Portland\'s gatekeeper, its defining characteristic, its constant companion.',
          },
          {
            id: 'quote2',
            type: 'pullquote',
            content: 'The rain is Portland\'s gatekeeper, its defining characteristic, its constant companion.',
          },
        ],
      },
      // Video 18: Final/conclusion
      {
        id: 'video18',
        type: 'video-sequence',
        videoPath: '/sequences/portland/portland-18',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p18',
            type: 'paragraph',
            content: 'Portland has always been a city of self-invention, of people who came here to escape somewhere else and build something new. That impulse created the progressive politics, the environmental consciousness, the tolerance for weirdness that defined the city\'s reputation. It also created the blind spots—the whiteness of the population, the displacement of longtime residents by newcomers with more money, the gap between progressive values and progressive outcomes. The city that coined "Keep Portland Weird" now struggles to keep Portland affordable, livable, functional. The dream of urban life done differently collides daily with the realities of homelessness, housing costs, and political dysfunction. Portland remains an experiment, its results still uncertain, its promise still compelling to the people who keep arriving despite everything.',
          },
        ],
      },
    ],
  },
}
