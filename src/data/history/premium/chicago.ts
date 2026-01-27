import { History } from '@/types/content'

export const chicago_premium_history: Record<string, History> = {
  'the-swamp-that-worked-premium': {
    slug: 'the-swamp-that-worked-premium',
    citySlug: 'chicago',
    title: 'The Swamp That Worked',
    subtitle: 'Reversed rivers, inverted skyscrapers, and the stubborn insistence that this swamp is exactly where a great city belongs',
    author: 'James Wilson',
    publishedAt: '2024-12-20',
    heroImage: {
      src: '/sequences/chicago/chicago-1/frame_0001.webp',
      alt: 'Chicago skyline and marshland',
      position: 'center',
    },
    premium: {
      isPremium: true,
      estimatedReadTime: '10 min',
    },
    blocks: [
      // Video 1: Marsh/swamp opening
      {
        id: 'video1',
        type: 'video-sequence',
        videoPath: '/sequences/chicago/chicago-1',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p1',
            type: 'paragraph',
            dropcap: true,
            content: 'The city was never supposed to be here. The land was swamp, a fetid marsh where the Chicago River oozed backwards into Lake Michigan, the whole area so low and wet that the first settlers built on pilings, their houses elevated above mud that in spring became impassable. But the geography that made it miserable also made it inevitable—the portage between the Great Lakes and the Mississippi watershed, the shortest distance between the eastern seaboard and the interior of the continent. Chicago exists because it had to, because commerce demanded a city at precisely this uncomfortable spot.',
          },
        ],
      },
      // Video 2: River reversal
      {
        id: 'video2',
        type: 'video-sequence',
        videoPath: '/sequences/chicago/chicago-2',
        scrollHeight: 220,
        textBlocks: [
          {
            id: 'p2',
            type: 'paragraph',
            content: 'They reversed the river in 1900, one of the great engineering audacities of the industrial age. The city\'s sewage had been flowing into Lake Michigan, which was also the city\'s drinking water, and the resulting typhoid and cholera killed thousands. So they dug a canal and used pumps and gravity to make the Chicago River flow backwards, sending the city\'s waste down towards the Mississippi instead of into the lake. It was less a solution than a redistribution of the problem, dumping Chicago\'s filth on the downstream cities, but it worked. The lake became drinkable. The city survived. This pattern—bold engineering solving one problem while creating another—would define Chicago\'s relationship with itself.',
          },
        ],
      },
      // Video 3: Great Fire
      {
        id: 'video3',
        type: 'video-sequence',
        videoPath: '/sequences/chicago/chicago-3',
        scrollHeight: 180,
        textBlocks: [
          {
            id: 'sub1',
            type: 'subheading',
            content: 'Fire and Reinvention',
          },
          {
            id: 'p3',
            type: 'paragraph',
            content: 'The fire of 1871 burned for two days, destroyed 17,000 buildings, left a hundred thousand people homeless, killed three hundred. Mrs. O\'Leary\'s cow may or may not have kicked over the lantern, but the city was a tinderbox regardless—wooden structures packed tight, October drought, wind off the lake. The fire jumped the river, consumed downtown, burned so hot it created its own weather system. Afterwards they rebuilt in stone and steel, erected what would become the first skyscrapers, invented a new kind of urban architecture because the old kind had proven itself flammable. Daniel Burnham drew plans for the lakefront, declaring "Make no little plans," and the city followed this instruction with a literalism that bordered on mania.',
          },
        ],
      },
      // Video 4: Stockyards
      {
        id: 'video4',
        type: 'video-sequence',
        videoPath: '/sequences/chicago/chicago-4',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'quote1',
            type: 'pullquote',
            content: 'Chicago exists because it had to, because commerce demanded a city at precisely this uncomfortable spot.',
          },
          {
            id: 'p4',
            type: 'paragraph',
            content: 'The stockyards made Chicago the butcher to the nation. Hogs and cattle arrived by rail from Iowa and Kansas, moved through the killing floors with industrial efficiency, emerged as packaged meat shipped east in refrigerated cars that Gustavus Swift pioneered. Upton Sinclair meant The Jungle as an indictment of capitalism and immigrant exploitation; the public read it as an exposé of unsanitary meat-packing and demanded food safety laws instead of socialist revolution. The stockyards closed in 1971, but the city still smells faintly of that history on certain humid summer days when the wind comes from the southwest.',
          },
        ],
      },
      // Video 5: Great Migration
      {
        id: 'video5',
        type: 'video-sequence',
        videoPath: '/sequences/chicago/chicago-5',
        scrollHeight: 220,
        textBlocks: [
          {
            id: 'sub2',
            type: 'subheading',
            content: 'The Great Migration',
          },
          {
            id: 'p5',
            type: 'paragraph',
            content: 'The South Side filled with Black migrants during the Great Migration, sharecroppers and laborers fleeing Jim Crow Mississippi and Alabama, finding work in the steel mills and factories, discovering that northern racism operated differently than southern racism but operated nonetheless. Redlining kept them contained in specific neighborhoods—Bronzeville, Englewood, neighborhoods that developed their own cultures, their own economies, their own particular relationship to a city that needed their labor while containing their presence. This is where the blues came north and became electric, where gospel evolved in storefront churches, where house music was invented in the warehouses and clubs in the 1980s, where drill music emerged in the 2010s, each generation finding new ways to soundtrack survival.',
          },
        ],
      },
      // Video 6: The Loop and L train
      {
        id: 'video6',
        type: 'video-sequence',
        videoPath: '/sequences/chicago/chicago-6',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p6',
            type: 'paragraph',
            content: 'The Loop is named for the elevated train that circles downtown, the \'L\' screeching around corners, casting shadows on the streets below, the rattle and groan of it the city\'s constant background noise. The trains run on time with Chicago efficiency, which is to say mostly on time, good enough. The architecture here is world-class—the Willis Tower (which everyone still calls the Sears Tower), the John Hancock Center, the Wrigley Building white against the Chicago River, Frank Lloyd Wright houses in Oak Park, Mies van der Rohe\'s glass and steel boxes on the lakefront. The city exported the Chicago School and the Prairie Style and made itself synonymous with a certain kind of modern urbanism—functional, democratic, built to human scale even when the buildings scrape clouds.',
          },
        ],
      },
      // Video 7: Iconic buildings continuation
      {
        id: 'video7',
        type: 'video-sequence',
        videoPath: '/sequences/chicago/chicago-7',
        scrollHeight: 180,
        textBlocks: [
          {
            id: 'quote2',
            type: 'pullquote',
            content: 'This is where the blues came north and became electric, where house music was invented in the warehouses and clubs in the 1980s, each generation finding new ways to soundtrack survival.',
          },
        ],
      },
      // Video 8: Politics
      {
        id: 'video8',
        type: 'video-sequence',
        videoPath: '/sequences/chicago/chicago-8',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p7',
            type: 'paragraph',
            content: 'The politics are machine politics, which persists long after the actual machine broke down. The Daley dynasty—father and son—ran the city for forty-three combined years, a reign that was part democratic governance and part feudal fiefdom. Patronage and favor-trading and ward bosses delivering votes, the whole apparatus efficient in its corruption, getting things done while getting people paid. The current mayor is different, the demographic coalition has shifted, but the basic transactional nature of Chicago politics endures—you want something from the city, you need to know who to talk to, what to offer, how the game is played.',
          },
        ],
      },
      // Video 9: Division/segregation (longer video)
      {
        id: 'video9',
        type: 'video-sequence',
        videoPath: '/sequences/chicago/chicago-9',
        scrollHeight: 280,
        textBlocks: [
          {
            id: 'p8',
            type: 'paragraph',
            content: 'The segregation is absolute and visible. The Red Line runs north-south, and you can watch the racial composition of the train change station by station, white North Siders getting off at Belmont and Fullerton, Black South Siders boarding at 63rd and 87th. The West Side, devastated by disinvestment and the crack epidemic of the 1980s, struggles with violence that makes national news but barely registers in Lincoln Park or Lakeview. The city contains multitudes that rarely mix, parallel Chicagos occupying the same geographic space, separated by highways and redlined boundaries and the accumulated weight of policy decisions made decades ago.',
          },
        ],
      },
      // Video 10: Lake
      {
        id: 'video10',
        type: 'video-sequence',
        videoPath: '/sequences/chicago/chicago-10',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'sub3',
            type: 'subheading',
            content: 'The Lake Saves Everything',
          },
          {
            id: 'p9',
            type: 'paragraph',
            content: 'The lake saves everything. Twenty-six miles of public shoreline, beaches and parks and the Lakefront Trail where cyclists and joggers and rollerbladers move in streams on summer evenings. The lake moderates the weather, makes the city slightly less cold in winter and slightly less hot in summer, provides the illusion that Chicago is a coastal city rather than a heartland metropolis. The sunrise over the lake from the Loop is as fine as any ocean dawn, the water stretching to the horizon, the city behind you and the water ahead, the sense that you\'re at the edge of something even though you\'re in the middle of the continent.',
          },
        ],
      },
      // Video 11: Winters (longer video)
      {
        id: 'video11',
        type: 'video-sequence',
        videoPath: '/sequences/chicago/chicago-11',
        scrollHeight: 240,
        textBlocks: [
          {
            id: 'p10',
            type: 'paragraph',
            content: 'The winters are not metaphorical. January means weeks when the temperature doesn\'t rise above ten degrees, when the wind off the lake cuts through every layer of clothing, when walking three blocks requires the calculation and preparation of a polar expedition. The city empties and contracts, people scurrying between heated buildings, the outdoor dining patios and rooftop bars abandoned until April. But Chicagoans wear the winter as a badge, proof they\'re tougher than the soft coasts, that they\'ve earned their city by enduring its climate.',
          },
        ],
      },
      // Video 12: Food (longer video)
      {
        id: 'video12',
        type: 'video-sequence',
        videoPath: '/sequences/chicago/chicago-12',
        scrollHeight: 280,
        textBlocks: [
          {
            id: 'p11',
            type: 'paragraph',
            content: 'The food is unpretentious and excessive—deep dish pizza that\'s more casserole than pizza, Italian beef sandwiches dripping with gravy, hot dogs with the canonical seven toppings and an absolute prohibition on ketchup. The restaurants range from molecular gastronomy at Alinea to Polish diners in Jefferson Park, the whole immigrant history of the city readable in its menus. The neighborhoods claim fierce allegiances—Sox versus Cubs splitting the city, neighborhood bars that haven\'t changed their décor since 1975, corner stores that still sell loose cigarettes to regulars.',
          },
        ],
      },
      // Video 13: City that works
      {
        id: 'video13',
        type: 'video-sequence',
        videoPath: '/sequences/chicago/chicago-13',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p12',
            type: 'paragraph',
            content: 'To live in Chicago is to live in a city that works, mostly, a city that delivers services and picks up garbage and fills potholes with reasonable efficiency. It\'s a city that feels like a city, dense and walkable and gritty, where public transit actually functions, where neighborhoods have identities and characters, where you can still afford to live on a teacher\'s salary if you\'re willing to live in the right neighborhood. It\'s not New York, which is a relief to Chicagoans who prefer their urbanism without the self-congratulation. It\'s not Los Angeles, which is not really a city at all but a collection of suburbs pretending to be one.',
          },
        ],
      },
      // Video 14: City spreads - conclusion (extra scrollHeight for end)
      {
        id: 'video14',
        type: 'video-sequence',
        videoPath: '/sequences/chicago/chicago-14',
        scrollHeight: 350,
        textBlocks: [
          {
            id: 'p13',
            type: 'paragraph',
            content: 'The city spreads along the lakeshore, towers rising against the water, neighborhoods stretching west into the prairie. It remains what it always was—a meeting point, a place of transit and transaction, a city that exists because geography demanded it and continues because it learned how to be necessary. The river still flows backwards. The trains still rattle the Loop. The wind still comes off the lake with a force that bends pedestrians double. The city endures not through beauty or charm but through function, through the stubborn insistence that this swamp by the lake is exactly where a great American city belongs.',
          },
        ],
      },
    ],
  },
}
