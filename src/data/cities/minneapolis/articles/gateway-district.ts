import type { Article } from '@/types/article'

export const gatewayDistrict: Article = {
  slug: 'gateway-district',
  citySlug: 'minneapolis',
  title: 'The Gateway District: When Minneapolis Demolished Its History',
  subtitle: 'In 1959, Minneapolis razed 40% of downtown — 200 buildings, including its birthplace — to eliminate "Skid Row." It was America\'s first federally funded urban renewal project. The results were parking lots.',
  excerpt: 'Between 1959 and 1963, Minneapolis demolished over 200 buildings in the Gateway District — 40% of downtown, including the city\'s first skyscraper and the intersection where Minneapolis was born. The goal was to eliminate "Skid Row" and its 3,000 single male residents. The result was parking lots and brutalist office buildings. It was America\'s first federally funded urban renewal project, and one of its greatest mistakes.',
  author: {
    name: 'The Curious City',
    bio: 'Uncovering buried history',
  },
  publishedAt: '2025-01-10T12:00:00Z',
  featuredImage: {
    src: '/minneapolis/articles/gateway-district.png',
    alt: 'Gateway District before demolition, Minneapolis 1950s',
    credit: 'Minnesota Historical Society',
  },
  category: 'history',
  tags: ['minneapolis', 'urban-renewal', 'history', 'architecture', 'displacement', 'downtown'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'In the early 1950s, downtown Minneapolis had a problem. The Gateway District — the city\'s original downtown, where Hennepin, Washington, and Nicollet Avenues met — had become Skid Row. Three thousand single men lived in cheap hotels and boarding houses. Sixty bars and saloons operated within twenty blocks. The grand buildings of the 1880s and 1890s had aged into flophouses.',
        },
        {
          type: 'paragraph',
          content: 'Minneapolis\'s solution was simple: demolish everything. Between 1959 and 1963, the city razed over 200 buildings covering 25 blocks — roughly 40% of downtown. It was the first federally funded urban renewal project in America. When it was done, Minneapolis had erased its birthplace, destroyed its finest Victorian architecture, and displaced thousands of people who had nowhere else to go.',
        },
        {
          type: 'paragraph',
          content: 'What replaced it? Parking lots. Office buildings. A sea of concrete where a city used to be. The Gateway demolition is now considered one of the greatest urban planning disasters in American history.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Original Downtown',
        },
        {
          type: 'paragraph',
          content: 'The Gateway District was Minneapolis. In the 1850s, when the city was barely a settlement, this was where it happened — the intersection where ferries crossed the river, where mills drew workers, where the railroad brought the world. The city\'s first buildings rose here. Its first businesses opened here. Bridge Square, at the heart of the Gateway, was Minneapolis\'s Times Square.',
        },
        {
          type: 'paragraph',
          content: 'By the 1890s, the district had matured into a dense urban neighborhood of handsome commercial buildings. The Metropolitan Building, completed in 1890, was Minneapolis\'s first skyscraper — a Romanesque brownstone tower that anchored the skyline. Hotels, theaters, banks, and offices crowded the streets. It was the city at its most vital.',
        },
        {
          type: 'quote',
          content: 'Everything happened at the Gateway. It was where you got off the train. It was where you found a job. It was where you saw the city for the first time. It was Minneapolis.',
          attribution: 'Former Minneapolis resident',
          role: 'Oral history, 1970s',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Decline',
        },
        {
          type: 'paragraph',
          content: 'Like downtowns across America, the Gateway District declined in the early twentieth century. Retail and business moved away from the riverfront. The grand buildings aged. Middle-class residents moved to newer neighborhoods. What remained was housing for people with nowhere else to go.',
        },
        {
          type: 'paragraph',
          content: 'By the 1940s, the Gateway was home to roughly 3,000 single men — railroad workers between jobs, seasonal laborers from farms and forests, men down on their luck. They lived in SRO hotels (single room occupancy), ate at cheap restaurants, drank at the dozens of bars that lined Washington Avenue. The city called them "bums" and "hobos." They called it home.',
        },
        {
          type: 'paragraph',
          content: 'These were the men who built Minnesota\'s railroads, harvested its wheat, logged its forests. They came to Minneapolis in the off-season because it was a hub — trains from everywhere, jobs when you needed them, cheap rooms when you didn\'t. The Gateway existed because someone had to house the workforce that built the region.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The "Gandy Dancers"',
          content: 'Many Gateway residents were "gandy dancers" — railroad maintenance workers who traveled the lines laying and repairing track. The work was seasonal and brutal. Minneapolis, as a railroad hub, was where they came between jobs. The SRO hotels of the Gateway were their only stable housing.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Plan',
        },
        {
          type: 'paragraph',
          content: 'In 1956, the Federal Highway Act gave cities money to build highways and "renew" urban areas. Minneapolis civic leaders saw an opportunity. They\'d been embarrassed by the Gateway for years — visitors arriving by train saw Skid Row before they saw anything else. Now they could eliminate it.',
        },
        {
          type: 'paragraph',
          content: 'The plan was comprehensive: demolish virtually everything in a 25-block area, relocate the residents somewhere (details vague), and rebuild the district as a modern business center. The city council voted unanimously in favor. Demolition began in 1959.',
        },
        {
          type: 'paragraph',
          content: 'There was no meaningful public input. The 3,000 men who lived in the Gateway were not consulted — they were poor, transient, and politically powerless. Business owners had more voice, but the momentum was unstoppable. Minneapolis was going to be modern if it had to destroy itself to do it.',
        },
        {
          type: 'quote',
          content: 'Nobody asked us. One day we lived there; the next day we were told to leave. They said they were going to build something better. They built parking lots.',
          attribution: 'Displaced Gateway resident',
          role: 'Minneapolis Tribune, 1962',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Demolition',
        },
        {
          type: 'paragraph',
          content: 'Over four years, Minneapolis demolished more than 200 buildings. The wrecking balls didn\'t discriminate. Victorian commercial blocks came down alongside deteriorated hotels. The Metropolitan Building — the city\'s first skyscraper, a masterpiece of Romanesque architecture — was demolished in 1962 despite preservation efforts.',
        },
        {
          type: 'paragraph',
          content: 'One by one, the landmarks fell. The Gateway Pavilion. The Northwestern National Bank building. The Nicollet Hotel. Theaters, churches, bars, hotels — eighty years of Minneapolis history reduced to rubble and trucked away.',
        },
        {
          type: 'paragraph',
          content: 'The human cost was harder to measure. Three thousand residents were displaced. Some moved to other parts of the city. Some moved to other cities. Many simply disappeared — men without families or fixed addresses, scattered by demolition, lost to history. Nobody tracked them. Nobody seemed to care.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Metropolitan Building',
          content: 'The Metropolitan Building (1890) was Minneapolis\'s first skyscraper and one of the finest examples of Romanesque Revival architecture in the Midwest. Preservationists fought to save it. The city demolished it anyway in 1962. It remains the most mourned loss of the Gateway demolition.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'What Replaced It',
        },
        {
          type: 'paragraph',
          content: 'The plans for the new Gateway were grand: modern office towers, plazas, civic buildings — a showcase of postwar American urbanism. What actually got built was considerably less impressive.',
        },
        {
          type: 'paragraph',
          content: 'For years, the cleared land sat vacant. Surface parking lots covered what had been city blocks. When buildings finally rose, they were the sterile boxes of 1960s New Formalism — the Northwestern National Life building, designed by Minoru Yamasaki (who would later design the World Trade Center), was the best of them. The rest were forgettable.',
        },
        {
          type: 'paragraph',
          content: 'The promised revival never materialized. Downtown Minneapolis didn\'t boom — it cratered. The Gateway project eliminated the street life that made downtowns work. The new buildings were islands in a sea of parking. The urban fabric that took eighty years to develop was replaced by emptiness.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Lessons',
        },
        {
          type: 'paragraph',
          content: 'The Gateway demolition is now a cautionary tale taught in urban planning schools. It demonstrated that "slum clearance" destroys more than it creates. That displacing people doesn\'t solve poverty — it just moves it. That historic buildings, once gone, are gone forever. That parking lots are not progress.',
        },
        {
          type: 'paragraph',
          content: 'Minneapolis eventually learned. Later urban renewal projects were more targeted, more preservationist, more humane. The city that razed the Gateway now protects its remaining historic buildings. But the lesson cost 200 buildings, 3,000 displaced people, and the birthplace of Minneapolis.',
        },
        {
          type: 'paragraph',
          content: 'Other cities learned too — often by watching Minneapolis\'s mistakes. The Gateway project helped spark the historic preservation movement. It showed what happened when cities surrendered to the wrecking ball. Some cities listened. Others repeated the errors. The debate continues.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'Walk through downtown Minneapolis today and you\'ll find no trace of the Gateway District. The Metropolitan Building is gone. Bridge Square is gone. The intersection where Minneapolis was born is now a plaza surrounded by office buildings. The 3,000 men who lived there scattered to the wind.',
        },
        {
          type: 'paragraph',
          content: 'Minneapolis traded its history for modernity and got parking lots. It traded its first downtown for a second one that took decades to become livable. It traded the messiness of a real city for the sterility of a planned one. Some deals can\'t be undone. The Gateway is gone, and it isn\'t coming back.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Finding What Remains',
          content: 'The Gateway District occupied roughly the area bounded by Washington Avenue, Hennepin Avenue, and the riverfront. The Minneapolis Central Library now sits on part of the site. The Mill City Museum and Stone Arch Bridge are nearby but were not part of the demolition zone. The Minnesota Historical Society has extensive photographs of the Gateway before demolition.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'In 1959, Minneapolis demolished 40% of downtown — 200 buildings including its birthplace — to eliminate Skid Row. The result was parking lots. Here\'s the story of the Gateway District.',
  },
}
