import type { Article } from '@/types/article'

export const millEndsPark: Article = {
  slug: 'mill-ends-park',
  citySlug: 'portland',
  title: 'Mill Ends Park: The World\'s Smallest Park',
  subtitle: 'A journalist planted flowers in a pothole to annoy his leprechaun. Now it\'s an official city park, 452 square inches, with its own swimming pool for butterflies.',
  excerpt: 'In 1948, Portland newspaper columnist Dick Fagan looked out his office window and saw a leprechaun digging in an abandoned hole in a traffic median. He caught the leprechaun, wished for a park, and got exactly what he asked for: a circle two feet across, officially the world\'s smallest park. For decades it had a tiny swimming pool, hosted snail races, and was home to "the only leprechaun colony west of Ireland." Portland has never stopped being weird.',
  author: {
    name: 'Tyler Scott',
    bio: 'Celebrating the strange',
  },
  publishedAt: '2025-12-13T12:00:00Z',
  featuredImage: {
    src: '/portland/articles/mill-ends-park.png',
    alt: 'Mill Ends Park, a tiny circular park in a traffic median',
    credit: 'Portland Parks & Recreation',
  },
  category: 'feature',
  tags: ['portland', 'weird-portland', 'parks', 'history', 'quirky', 'world-records'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'There\'s a park in Portland that\'s smaller than a manhole cover. It\'s a circle in a traffic median, two feet across, surrounded by rushing cars on Naito Parkway. At 452 square inches, it held the Guinness World Record for "World\'s Smallest Park" for over fifty years. It has its own swimming pool. It hosts annual snail races. It\'s home to the only leprechaun colony west of Ireland.',
        },
        {
          type: 'image',
          src: '/portland/curiosities/mill-ends-park.png',
          alt: 'Mill Ends Park in Portland, the world\'s smallest park',
          caption: 'Mill Ends Park: 452 square inches of official Portland city parkland in a traffic median on Naito Parkway.',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Dick_Fagan_and_Mill_Ends_Park%2C_1970s_%28cropped%29.jpg/800px-Dick_Fagan_and_Mill_Ends_Park%2C_1970s_%28cropped%29.jpg',
          alt: 'Dick Fagan, founder of Mill Ends Park, with the park',
          caption: 'Dick Fagan, the Oregon Journal columnist who founded Mill Ends Park, tending to his creation in the 1970s. Fagan\'s whimsical columns brought the tiny park to life for readers.',
          credit: 'Wikimedia Commons',
        },
        {
          type: 'paragraph',
          content: 'None of this is a joke. Mill Ends Park is real, it\'s official, and it\'s been a designated Portland city park since 1976. It exists because a newspaper columnist in 1948 decided to weaponize bureaucratic absurdity against itself — and Portland, being Portland, went along with it.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Hole',
        },
        {
          type: 'paragraph',
          content: 'In 1946, Dick Fagan came home from World War II and returned to his job as a columnist at the Oregon Journal, Portland\'s afternoon newspaper. His desk was on the second floor, overlooking Front Street (now Naito Parkway). Out his window, he could see a hole in the traffic median where a light pole was supposed to go.',
        },
        {
          type: 'paragraph',
          content: 'The pole never arrived. The hole sat there, empty, filling with weeds. Fagan stared at it for months. Eventually, he couldn\'t stand it anymore. He went down and planted flowers.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Column',
        },
        {
          type: 'paragraph',
          content: 'Fagan wrote a popular column called "Mill Ends" — named after the rough, irregular pieces of lumber left over at sawmills. The column was folksy, funny, and beloved by readers. And starting in 1948, it frequently featured news from Mill Ends Park.',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Mill_Ends_Park_butterfly_pool_1970s.jpg',
          alt: 'Mill Ends Park with its miniature swimming pool for butterflies, 1970s',
          caption: 'Mill Ends Park with its miniature swimming pool for butterflies, a whimsical feature often highlighted in Dick Fagan\'s column.',
          credit: 'Wikimedia Commons',
        },
        {
          type: 'paragraph',
          content: 'The park, Fagan reported, had an active social calendar. There were concerts. Festivals. Political rallies. The leprechauns were constantly busy with improvements — a swimming pool (complete with diving board) for butterflies, a tiny Ferris wheel delivered by crane, a miniature horseshoe for good luck.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Park Attractions Over the Years',
          content: 'Mill Ends Park has featured: a swimming pool for butterflies with a working diving board; a miniature Ferris wheel; a fragment of the old Oregon Journal building; a horseshoe; various seasonal plantings; and, on one memorable St. Patrick\'s Day, two cowboys who arrived to plant a "Texas Rose."',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Dedication',
        },
        {
          type: 'paragraph',
          content: 'On St. Patrick\'s Day 1948, Fagan officially dedicated Mill Ends Park as "the world\'s smallest park." The dedication ceremony was covered in the Journal. Patrick O\'Toole reportedly attended, though no photographs were taken at his request.',
        },
        {
          type: 'paragraph',
          content: 'For the next two decades, Fagan maintained the park and chronicled its goings-on. Every St. Patrick\'s Day brought special events. Annual snail races attracted competitors from across the city. The park developed its own mythology, its own history, its own community of believers.',
        },
        {
          type: 'paragraph',
          content: 'Dick Fagan died of lung cancer in 1969. The day after his death, the Oregon Journal published a cartoon: a leprechaun sitting alone in Mill Ends Park, head bowed, holding a shamrock. Portland had lost its keeper of the small.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Record',
        },
        {
          type: 'paragraph',
          content: 'In 1971, Guinness World Records officially recognized Mill Ends Park as the world\'s smallest park. The measurement: 452 square inches, a circle two feet in diameter. The recognition wasn\'t a joke — it met all the criteria for a park, and no one had found anything smaller.',
        },
        {
          type: 'paragraph',
          content: 'Five years later, on St. Patrick\'s Day 1976, the City of Portland officially adopted Mill Ends Park into the park system. It became real in every legal sense — a city park like Forest Park or the waterfront, just considerably smaller. The leprechauns, presumably, were pleased.',
        },
        {
          type: 'paragraph',
          content: 'The record held for over fifty years. In February 2025, a park in Nagaizumi, Japan — measuring 0.24 square meters — claimed the title. Portland took the news with good humor. Mill Ends Park had never been about winning. It had been about believing in something small and silly and making it true.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'A Brief Dethroning',
          content: 'In 2025, Japan\'s tiny park in Nagaizumi briefly claimed the world record. But Mill Ends Park remains the smallest park in the United States and the most visited park per square inch anywhere on Earth.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Park Today',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mill_Ends_Park_today.jpg/1280px-Mill_Ends_Park_today.jpg',
          alt: 'Mill Ends Park today, in a traffic median in Portland',
          caption: 'Mill Ends Park today, still maintained in its traffic median on Naito Parkway. It remains a beloved, quirky landmark in Portland.',
          credit: 'Wikimedia Commons',
        },
        {
          type: 'paragraph',
          content: 'On St. Patrick\'s Day, the park comes alive. There are ceremonies. Occasionally there are snail races. Someone usually plants something — flowers, a tiny tree, a holiday decoration. The tradition Dick Fagan started in 1948 continues, three-quarters of a century later.',
        },
        {
          type: 'paragraph',
          content: 'It\'s the most Portland thing imaginable: a joke that became real, a prank that became official, a two-foot circle of dirt that became a genuine civic institution. Other cities have serious parks — grand vistas, historic monuments, sweeping promenades. Portland has a hole in a traffic median where a leprechaun colony lives.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'Dick Fagan understood something about cities: they\'re defined by the stories people tell about them. He looked at an abandoned hole in a street and told a story about leprechauns and wishes. Enough people believed it, or wanted to believe it, that the story became true.',
        },
        {
          type: 'paragraph',
          content: 'Mill Ends Park is 452 square inches of faith — faith that the world can be stranger and more whimsical than it appears, that a hole can be a park, that a newspaper column can create reality. It\'s tiny and absurd and beloved. It\'s the world\'s smallest park. It\'s exactly what Portland deserves.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Visiting Mill Ends Park',
          content: 'Mill Ends Park is located in the median of Naito Parkway (formerly Front Street) near SW Taylor Street in downtown Portland. The park is best viewed from the sidewalk — please don\'t step into traffic. St. Patrick\'s Day events occur annually. The leprechauns prefer not to be photographed.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'Mill Ends Park in Portland is the world\'s smallest park: 452 square inches, home to a leprechaun colony, and an official city park since 1976.',
  },
}
