import type { Article } from '@/types/article'

export const dobyville: Article = {
  slug: 'dobyville',
  citySlug: 'tampa',
  title: 'The Neighborhood Under the Highway',
  subtitle: 'One of the city\'s oldest Black communities — families, churches, a school, a way of life. Then the Selmon Expressway cut through the middle of it. Now there\'s nothing left but an off-ramp.',
  excerpt: 'For over sixty years, Dobyville was a thriving African American neighborhood in the shadow of Hyde Park\'s mansions. The people who worked in those mansions — cooks, maids, gardeners, drivers — built homes and raised families just blocks away. Then, in the 1970s, Tampa decided it needed a highway. Dobyville was in the way. The city demolished the entire neighborhood, scattered its residents, and paved over the memory. Today, cars pass over where the community used to be at 60 miles per hour. There is no marker.',
  author: {
    name: 'The Curious City',
    bio: 'Stories of erased communities',
  },
  publishedAt: '2025-01-11T12:00:00Z',
  featuredImage: {
    src: '/tampa/articles/dobyville.png',
    alt: 'Dobyville neighborhood in Tampa, circa 1960',
    credit: 'Tampa Bay History Center',
  },
  category: 'history',
  tags: ['tampa', 'black-history', 'urban-renewal', 'highways', 'forgotten-history', 'hyde-park', 'segregation'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'If you drive the Lee Roy Selmon Expressway through South Tampa today, you\'ll pass over a patch of land between Hyde Park and downtown that looks like nothing special. Some parking lots. A few industrial buildings. The kind of anonymous urban landscape that exists beneath elevated highways everywhere in America. There is no sign indicating what used to be here. There is no memorial. There is nothing to suggest that for more than sixty years, this was Dobyville — one of Tampa\'s oldest African American neighborhoods, home to hundreds of families, erased in the 1970s to make room for the road you\'re driving on.',
        },
        {
          type: 'paragraph',
          content: 'The people who lived in Dobyville worked in the grand houses of Hyde Park, just a few blocks away. They cooked the meals, cleaned the rooms, raised the children, and tended the gardens of Tampa\'s white elite. Then they walked home to their own community — modest houses on unpaved streets, but theirs. They built churches there. They built a school. They built a life. And then the city took it all away.',
        },
        {
          type: 'image',
          src: 'https://tampabayhistorycenter.org/wp-content/uploads/2016/06/Dobyville_001.jpg',
          alt: 'Street scene in Dobyville, Tampa, circa 1960',
          caption: 'A street scene in Dobyville, circa 1960s. This thriving African American community, though modest, fostered a strong sense of belonging and self-sufficiency.',
          credit: 'Tampa Bay History Center',
        },
        {
          type: 'paragraph',
          content: 'This is the story of Dobyville — how it was built, how it survived Jim Crow, and how it disappeared under concrete and asphalt.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Servants\' Quarter',
        },
        {
          type: 'paragraph',
          content: 'Dobyville emerged in the early 1900s as Tampa\'s wealthy Hyde Park neighborhood was being developed. The grand Victorian homes going up along Bayshore Boulevard required staff — lots of staff. Cooks, housekeepers, nannies, gardeners, chauffeurs, laundresses. Under the racial codes of the Jim Crow South, these workers could not live in the white neighborhoods where they worked. They needed somewhere close enough to walk to work but far enough to maintain the fiction of separation.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Highway',
        },
        {
          type: 'paragraph',
          content: 'In the 1960s and 70s, American cities were obsessed with highways. The Interstate Highway System had transformed long-distance travel, and urban planners wanted to bring that speed into city centers. Expressways would move commuters from suburbs to downtowns, revitalizing business districts and connecting metropolitan areas.',
        },
        {
          type: 'image',
          src: 'https://tampabayhistorycenter.org/wp-content/uploads/2016/06/Crosstown_Expressway_001.jpg',
          alt: 'Aerial view of Crosstown Expressway construction through Tampa, 1970s',
          caption: 'Construction of the Crosstown Expressway (now Selmon Expressway) cutting through South Tampa in the 1970s. Dobyville lay directly in the path of this urban renewal project.',
          credit: 'Tampa Bay History Center',
        },
        {
          type: 'paragraph',
          content: 'There was just one problem: building highways through cities required demolishing whatever was in the way. And somehow, what was in the way was almost always Black neighborhoods.',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Urban_renewal_demolition_in_the_United_States%2C_1960s.jpg/1280px-Urban_renewal_demolition_in_the_United_States%2C_1960s.jpg',
          alt: 'Historical photo of urban renewal demolition in a US city, 1960s',
          caption: 'Urban renewal demolition in a US city, illustrative of the widespread destruction of Black neighborhoods for highway construction in the mid-20th century.',
          credit: 'Wikimedia Commons',
        },
        {
          type: 'paragraph',
          content: 'This wasn\'t coincidence. Highway planners explicitly routed expressways through "blighted" areas — a term that almost always meant poor and Black. The federal government paid 90% of construction costs, creating a powerful incentive for cities to use highway projects as a form of urban renewal. If you wanted to clear a neighborhood you considered undesirable, you just had to put a highway through it.',
        },
        {
          type: 'paragraph',
          content: 'Tampa\'s expressway — originally called the Crosstown Expressway, later renamed for county commissioner Lee Roy Selmon — was planned to connect the suburbs east of the city with the downtown core. The route went directly through Dobyville.',
        },
        {
          type: 'quote',
          content: 'You can\'t tell the story of Hyde Park without telling the story of Dobyville... The expressway deals a crushing blow to that neighborhood.',
          attribution: 'Rodney Kite-Powell',
          role: 'Historian, Tampa Bay History Center',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Demolition',
        },
        {
          type: 'paragraph',
          content: 'The demolitions began in the mid-1970s. Families were given notice that their homes would be acquired through eminent domain. The compensation was based on assessed property values — values that had been systematically depressed by decades of disinvestment in Black neighborhoods. Families who had lived in Dobyville for generations received checks that weren\'t enough to buy equivalent homes anywhere else in Tampa.',
        },
        {
          type: 'paragraph',
          content: 'Some fought. Community meetings were held. Protests were organized. But the machinery of urban renewal was powerful, and the political will to stop it was absent. One by one, the houses came down. The churches closed or relocated. Harmon Elementary School was demolished. The corner stores shut their doors.',
        },
        {
          type: 'paragraph',
          content: 'The residents scattered. Some moved to other Black neighborhoods in Tampa — East Tampa, Progress Village, areas that would face their own challenges in the decades to come. Some left the city entirely. The community that had held together for sixty years simply dissolved.',
        },
        {
          type: 'paragraph',
          content: 'In its place rose the Crosstown Expressway — elevated lanes carrying traffic over the land where Dobyville used to be. The highway opened in sections through the 1970s and 80s. By the time it was complete, there was nothing left of the neighborhood but memories.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The National Pattern',
          content: 'Dobyville was not unique. Across America, interstate highways destroyed hundreds of Black neighborhoods. In Miami, I-95 demolished Overtown. In Birmingham, I-59 split the Black business district. In Minneapolis, I-94 went through Rondo. The pattern was so consistent that historian Deborah Archer has called highway construction "a key instrument of urban apartheid."',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'What Was Lost',
        },
        {
          type: 'paragraph',
          content: 'When you demolish a neighborhood, you don\'t just destroy buildings. You destroy wealth — the accumulated equity of homeowners, passed down through generations, the primary mechanism by which American families build financial security. The residents of Dobyville who were bought out in the 1970s lost not just their homes but their inheritance. The wealth that should have passed to their children and grandchildren was erased.',
        },
        {
          type: 'paragraph',
          content: 'You also destroy social capital — the networks of relationships that make a community function. The neighbors who watched each other\'s children. The church ladies who organized meals when someone was sick. The informal systems of mutual aid that helped families survive hard times. When Dobyville\'s residents scattered across Tampa, those networks were severed. They could never be rebuilt.',
        },
        {
          type: 'paragraph',
          content: 'And you destroy history — the physical evidence that a community existed. The houses are gone. The school is gone. The churches are gone. There is no Dobyville anymore, just an expressway and some parking lots. Future generations have no place to visit, no buildings to point to, no tangible connection to what their ancestors built.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Silence',
        },
        {
          type: 'paragraph',
          content: 'Drive the Selmon Expressway today and you\'ll see nothing to indicate Dobyville ever existed. There is no historical marker. There is no memorial. The Tampa Bay History Center has some photographs and oral histories, but they\'re not visible from the road. The neighborhood has been erased not just physically but from public memory.',
        },
        {
          type: 'paragraph',
          content: 'In recent years, some historians and community activists have worked to recover Dobyville\'s story. There have been academic papers, local news segments, community events. But the broader public remains largely unaware. Most Tampa residents have never heard of Dobyville. They drive over it every day without knowing what\'s beneath them.',
        },
        {
          type: 'paragraph',
          content: 'The Lee Roy Selmon Expressway was renamed in 1999 for the Tampa Bay Buccaneers legend, a Black athlete who became a civic icon. There\'s an irony there — a highway that destroyed a Black neighborhood now bears the name of a Black hero. The expressway is celebrated. The neighborhood it replaced is forgotten.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'Dobyville existed for over sixty years. Three generations of families lived there. Children were born there, grew up there, raised their own children there. People fell in love, got married, grew old, and died in those houses. It was a real place, a living community, home.',
        },
        {
          type: 'paragraph',
          content: 'Then the city decided it needed a highway, and Dobyville was in the way. The homes were demolished. The families were scattered. The land was paved. Now cars drive over it at sixty miles per hour, and the drivers don\'t know — most of them will never know — what used to be here.',
        },
        {
          type: 'paragraph',
          content: 'That\'s how neighborhoods disappear. Not with a bang but with a bulldozer. Not with malice but with paperwork. The highway planners didn\'t hate Dobyville. They just didn\'t see it. They looked at the map and saw an obstacle. They saw cheap land and poor people and nobody with the political power to stop them. So they drew their lines, and the bulldozers came, and now there\'s nothing left.',
        },
        {
          type: 'paragraph',
          content: 'The people who lived in Dobyville built the homes of Hyde Park\'s elite. They raised Tampa\'s children, cooked Tampa\'s meals, tended Tampa\'s gardens. And when Tampa needed their land, it took it. That\'s the story of urban America in the twentieth century. Dobyville just happened to be in the way.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Finding Dobyville',
          content: 'The former site of Dobyville is roughly bounded by the Selmon Expressway, Howard Avenue, and the area north of Hyde Park. No historical markers currently exist. The Tampa Bay History Center maintains archives related to the neighborhood. Tampa\'s Black Heritage Trail includes stops related to other historic African American communities in the area.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'Dobyville was one of Tampa\'s oldest Black neighborhoods. In the 1970s, the city demolished it to build the Selmon Expressway. Now there\'s nothing left but an off-ramp.',
  },
}
