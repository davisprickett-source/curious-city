import { History } from '@/types/content'

export const minneapolis_premium_history: Record<string, History> = {
  'meeting-of-waters-premium': {
    slug: 'meeting-of-waters-premium',
    citySlug: 'minneapolis',
    title: 'Meeting of Waters',
    subtitle: 'Flour mills, frozen rivers, and the particular satisfaction of surviving January',
    author: 'Curious City',
    publishedAt: '2024-12-15',
    heroImage: {
      src: '/sequences/minneapolis/minn-1/frame-0001.jpg',
      alt: 'The confluence of the Mississippi and Minnesota rivers',
      position: 'center',
    },
    premium: {
      isPremium: true,
      estimatedReadTime: '12 min',
    },
    blocks: [
      // Video 1: p1-p2 - Meeting of waters intro
      {
        id: 'video1',
        type: 'video-sequence',
        videoPath: '/sequences/minneapolis/minn-1',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p1',
            type: 'paragraph',
            dropcap: true,
            content: 'The city rises from the meeting of waters with the modesty of the Midwest, which is to say it announces nothing while accomplishing everything. Two rivers converge here—the Mississippi driving south with glacial authority, the Minnesota arriving from the west like an afterthought—and at their confluence the Ojibwe and Dakota peoples understood what the millers would later discover: that falling water is power made visible.',
          },
        ],
      },
      // Video 2: p2.5-p3 - Name and falls intro
      {
        id: 'video2',
        type: 'video-sequence',
        videoPath: '/sequences/minneapolis/minn-2',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p2',
            type: 'paragraph',
            content: 'The name itself is a mongrel—mni from Dakota, meaning water, and polis from Greek, meaning city. This hybrid nomenclature, half indigenous truth and half classical pretension, captures something essential about the place: a prairie settlement that wanted to be taken seriously, that built grand theaters and art museums as if to prove that culture could survive at 45 degrees north, where winter means something absolute and meteorological rather than merely calendrical.',
          },
          {
            id: 'break1',
            type: 'break',
            style: 'dots',
          },
          {
            id: 'p3a',
            type: 'paragraph',
            content: 'St. Anthony Falls was the only significant waterfall on the entire navigable length of the Mississippi, and this accident of geology determined everything. The falls meant power—first for sawmills that turned the white pine forests of Minnesota into the lumber that built the Great Plains, then for flour mills that ground the wheat of the same plains into the flour that fed the cities of the East.',
          },
        ],
      },
      // Video 3: p3.5-p4 - Milling capital and legacy
      {
        id: 'video3',
        type: 'video-sequence',
        videoPath: '/sequences/minneapolis/minn-3',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p3b',
            type: 'paragraph',
            content: 'By the 1880s Minneapolis was the flour milling capital of the world, the epicenter of an industry built on the simple physics of water dropping twenty feet through mill races and turning wheels. Pillsbury and General Mills and Gold Medal—these were not brands but geographies made corporate, the transformation of rivers and wheat fields into products that could be shipped in bags and boxes to places that had forgotten what grain looked like growing.',
          },
          {
            id: 'p4',
            type: 'paragraph',
            content: 'The mills are mostly silent now, converted into lofts and museums, the falls themselves barely visible behind the infrastructure of their exploitation. But the pattern they established persists: Minneapolis as a place that takes raw materials—lumber, grain, ideas, people—and processes them into something more refined, more finished, more ready for elsewhere.',
          },
        ],
      },
      // Video 4: p5 - Lakes
      {
        id: 'video4',
        type: 'video-sequence',
        videoPath: '/sequences/minneapolis/minn-4',
        scrollHeight: 180,
        textBlocks: [
          {
            id: 'quote1',
            type: 'pullquote',
            content: 'Minneapolis as a place that takes raw materials—lumber, grain, ideas, people—and processes them into something more refined, more finished, more ready for elsewhere.',
          },
          {
            id: 'p5',
            type: 'paragraph',
            content: 'The city arranged itself with Scandinavian orderliness. Streets run in grids that defy the actual topography, imposing order on the irregular landscape of lakes and hills. The lakes themselves—Harriet, Calhoun (now Bde Maka Ska, its Dakota name restored), Cedar, Nokomis—are what make Minneapolis livable, providing the illusion that a city of 400,000 people is somehow still close to nature. In summer the lakes fill with sailboats and paddleboards, the shorelines busy with joggers and cyclists who seem to be storing movement against the coming winter.',
          },
          {
            id: 'ad1',
            type: 'ad',
            size: 'banner',
          },
        ],
      },
      // Video 5: p6.0 - Winter test
      {
        id: 'video5',
        type: 'video-sequence',
        videoPath: '/sequences/minneapolis/minn-5',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'sub1',
            type: 'subheading',
            content: 'The Test of Winter',
          },
          {
            id: 'p6',
            type: 'paragraph',
            content: 'Because winter here is not a season but a test. January means weeks when the high temperature never reaches zero Fahrenheit, when the cold is so absolute it becomes almost abstract. The skyway system downtown—eleven miles of enclosed pedestrian bridges connecting buildings at the second-story level—is the architectural admission that the city\'s relationship with its climate is one of negotiation rather than harmony. You can live and work and shop in Minneapolis from November to April without ever going outside, moving through this elevated network like a gerbil in habitrail tubes, the street below abandoned to cold and the occasional hardy smoker.',
          },
        ],
      },
      // Video 6: p7 - Protest (George Floyd)
      {
        id: 'video6',
        type: 'video-sequence',
        videoPath: '/sequences/minneapolis/minn-6',
        scrollHeight: 180,
        textBlocks: [
          {
            id: 'p7',
            type: 'paragraph',
            content: 'The progressive reputation is real but complicated. This was a city that elected a police chief who pioneered community policing in the 1980s, that has one of the highest voter turnout rates in the nation, that prides itself on its bike lanes and public libraries and theater scene. But it is also the city where George Floyd was murdered in 2020, where the police officer knelt on his neck for nine minutes while he begged for breath, the whole thing captured on video and broadcast into the global consciousness. The protests that followed burned a police precinct, turned Lake Street into a corridor of broken glass and boarded windows, revealed the gap between the city\'s self-image and its actual operations.',
          },
          {
            id: 'break2',
            type: 'break',
            style: 'space',
          },
        ],
      },
      // Video 7: p8 - Somali community
      {
        id: 'video7',
        type: 'video-sequence',
        videoPath: '/sequences/minneapolis/minn-7',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p8',
            type: 'paragraph',
            content: 'The Somali community, one of the largest in the United States, lives primarily in the Cedar-Riverside neighborhood, creating a Little Mogadishu of halal markets and hijab-wearing women pushing strollers through Minnesota winters. The Hmong community, refugees from Laos after the Vietnam War, has transformed the Midtown Global Market into a space where Southeast Asian cuisine is sold alongside Mexican tamales and Greek gyros. Minneapolis absorbs people the way it absorbed logs and wheat—taking them in, processing them, incorporating them into the civic machinery while never quite erasing their origins.',
          },
        ],
      },
      // Video 8: p9 - Prince
      {
        id: 'video8',
        type: 'video-sequence',
        videoPath: '/sequences/minneapolis/minn-8',
        scrollHeight: 170,
        textBlocks: [
          {
            id: 'quote2',
            type: 'pullquote',
            content: 'Minneapolis absorbs people the way it absorbed logs and wheat—taking them in, processing them, incorporating them into the civic machinery while never quite erasing their origins.',
          },
          {
            id: 'p9',
            type: 'paragraph',
            content: 'Prince was from here, grew up in North Minneapolis, turned the city\'s isolation into an advantage by building Paisley Park in the suburbs and recording music that sounded like nothing else because it came from nowhere else. He understood what Minneapolis offers: enough distance from the coasts to develop an identity unobserved, enough infrastructure to support ambition, enough cold to keep you inside making things while the rest of the country is distracted by easier weather.',
          },
          {
            id: 'ad2',
            type: 'ad',
            size: 'rectangle',
          },
        ],
      },
      // Video 9: p10 - Target and corporations
      {
        id: 'video9',
        type: 'video-sequence',
        videoPath: '/sequences/minneapolis/minn-9',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p10',
            type: 'paragraph',
            content: 'The corporate headquarters—Target, Best Buy, UnitedHealth Group, 3M—suggest a city that succeeded through midwestern virtues of reliability and incremental improvement rather than through disruption or flash. These are companies that do things that work, that scale quietly, that build empires of retail and healthcare and adhesives without drama.',
          },
        ],
      },
      // Video 10: p11 - Snow bargain (The Bargain)
      {
        id: 'video10',
        type: 'video-sequence',
        videoPath: '/sequences/minneapolis/minn-10',
        scrollHeight: 220,
        textBlocks: [
          {
            id: 'sub2',
            type: 'subheading',
            content: 'The Bargain',
          },
          {
            id: 'p11',
            type: 'paragraph',
            content: 'To live in Minneapolis is to make a bargain with difficulty. The cold will test you. The insularity will frustrate you. The niceness—that famous Minnesota Nice which is politeness deployed as a weapon, friendliness that maintains distance—will confuse you. But in exchange you get functioning public services, a commitment to public spaces, neighbors who shovel each other\'s sidewalks, and the particular satisfaction of surviving January, which arrives every year like a recurring apocalypse and every year is survived.',
          },
        ],
      },
      // Video 11: p12 - Final conclusion
      {
        id: 'video11',
        type: 'video-sequence',
        videoPath: '/sequences/minneapolis/minn-11',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p12',
            type: 'paragraph',
            content: 'The city sits at the northwestern edge of the agricultural and industrial Midwest, a final outpost before the Great Plains begin their long emptiness westward. It is a place that succeeded by being necessary—a falls that powered mills, a rail hub that connected wheat to markets, a distribution point for goods moving between coasts. Now it succeeds by being livable, which is a quieter kind of victory but perhaps a more durable one. The rivers still converge. The falls still drop. The city still makes something from what the land provides.',
          },
        ],
      },
    ],
  },
}
