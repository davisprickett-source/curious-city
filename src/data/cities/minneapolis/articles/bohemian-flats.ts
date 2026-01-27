import type { Article } from '@/types/article'

export const bohemianFlats: Article = {
  slug: 'bohemian-flats',
  citySlug: 'minneapolis',
  title: 'Bohemian Flats: Minneapolis\'s Forgotten Immigrant Village Under a Bridge',
  subtitle: 'For 60 years, 1,000 immigrants lived in houses beneath the Washington Avenue Bridge, climbing 79 wooden stairs to the mills above. The city called it a slum and bulldozed it for a coal yard. Now it\'s a park.',
  excerpt: 'From the 1870s to the 1930s, Bohemian Flats was a secret village at the bottom of Minneapolis — a thousand Slovaks, Czechs, Swedes, and Irish living in small houses along the Mississippi floodplain, climbing 79 creaking wooden stairs to work in the flour mills each morning. The city called it unsanitary. Residents called it home. Minneapolis demolished every last house for a coal terminal that never came. Today, the parkway where joggers run has no marker remembering the community that lived here.',
  author: {
    name: 'Rachel Morrison',
    bio: 'Urban historian and former museum curator specializing in forgotten communities and displacement. MA in Public History from NYU.',
  },
  publishedAt: '2024-03-19T08:30:00Z',
  updatedAt: '2024-12-18T11:20:00Z',
  featuredImage: {
    src: '/minneapolis/articles/bohemian-flats-historic.jpg',
    alt: 'Bohemian Flats settlement along the Mississippi River, circa 1910',
    credit: 'Minnesota Historical Society',
  },
  category: 'history',
  tags: ['minneapolis', 'immigration', 'history', 'displacement', 'forgotten-history', 'river'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'Beneath the Washington Avenue Bridge, where joggers now run along the West River Parkway, there used to be a village. Not a neighborhood — a village. Small wooden houses clinging to the riverbank. Vegetable gardens. Chickens and goats. A thousand people living in the shadow of the Mississippi bluffs, invisible to the city above.',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Bohemian_Flats_and_the_West_Bank_-_DPLA_-_5c97e4b945c6cb3caacd20b899ec48cf.jpg',
          alt: 'Panoramic view of Bohemian Flats and Minneapolis West Bank, showing settlement below with Minneapolis Gas Light storage tank and Foshay Tower construction in background',
          caption: 'A panoramic view of Bohemian Flats, Minneapolis, circa 1910. The immigrant village sat directly on the banks of the Mississippi River, beneath the bluffs.',
          credit: 'John H. Kammerdiener, Hennepin County Library/DPLA',
        },
        {
          type: 'paragraph',
          content: 'They called it Bohemian Flats, though the residents came from everywhere: Slovakia, Czech lands, Sweden, Norway, Ireland, Poland. For sixty years, this was one of the most distinctive communities in Minneapolis — and one of the most precarious. The city tolerated it, then ignored it, then bulldozed it. Today, no physical trace remains.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Flats',
        },
        {
          type: 'paragraph',
          content: 'The settlement began in the 1870s, when European immigrants seeking work in Minneapolis\'s flour mills discovered a strip of flat land along the Mississippi, just below the university campus. The bluffs rose steeply above them; the river flowed past their doorsteps. Rent was cheap or nonexistent. For people with nothing, it was enough.',
        },
        {
          type: 'paragraph',
          content: 'They built what they could afford: small frame houses, some barely more than shacks, clustered along unpaved streets with names like Wood Street and Mill Street. At its peak around 1900, roughly a thousand people lived on the Flats — enough to sustain their own churches, their own social clubs, their own way of life.',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/House_in_Bohemian_Flats_-_DPLA_-_35316935f4245cce52b595bcbeb23bce.jpg',
          alt: 'Close-up of a wooden house in Bohemian Flats showing typical immigrant housing construction',
          caption: 'A typical Bohemian Flats home — modest wooden construction built from whatever materials residents could afford or salvage.',
          credit: 'A.E. Kairies, Hennepin County Library/DPLA',
        },
        {
          type: 'paragraph',
          content: 'Every morning, the men of Bohemian Flats climbed 79 wooden stairs cut into the bluff to reach the city above. They worked in the flour mills at St. Anthony Falls, on railroad crews, as day laborers — whatever work immigrants could find. Every evening, they descended back to the river.',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Bohemian_Flats_Street_Scene_-_DPLA_-_8fe158651d1ffc3619c61a5542b0287a.jpg',
          alt: 'Street scene in Bohemian Flats showing the tight-knit immigrant community along an unpaved road',
          caption: 'A street in Bohemian Flats. Every morning, residents climbed 79 wooden stairs cut into the bluff to reach the city above for work in the flour mills.',
          credit: 'Hennepin County Library/DPLA',
        },
        {
          type: 'quote',
          content: 'I bought that little house in May 1884... I move in the spring because the river rolls over my floor. I raised my family there.',
          attribution: 'John Medvec',
          role: 'Bohemian Flats resident, 1923',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'River Life',
        },
        {
          type: 'paragraph',
          content: 'The Mississippi wasn\'t just a backdrop — it was the center of Flats life. Women and children scavenged the river daily, pulling driftwood, lumber, and construction materials from the current. Everything the city threw away, the Flats could use.',
        },
        {
          type: 'paragraph',
          content: 'This scavenging economy sustained the community. Houses were built from river salvage. Firewood came from the current. Even food appeared: when flooding destroyed crops upstream, vegetables and sometimes livestock floated down to waiting residents. The river provided, even when the city wouldn\'t.',
        },
        {
          type: 'paragraph',
          content: 'But the river also took. Every spring brought flooding, sometimes catastrophic. Houses were swept away. Possessions vanished. In bad years, people drowned. Living on the Flats meant accepting that the water that sustained you could also destroy you.',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Bohemian_Flats_-_DPLA_-_51f97df45f08d6edd128fae5b372fc3c.jpg',
          alt: 'Bohemian Flats during springtime flood, showing houses surrounded by floodwaters from the Mississippi River',
          caption: 'Spring flooding was a constant threat. Houses stood surrounded by floodwaters, and residents learned to live with the river\'s unpredictable moods.',
          credit: 'Deft Studios, Hennepin County Library/DPLA',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Women_Gathering_Driftwood_From_the_River_on_the_Bohemian_Flats_-_DPLA_-_cdd73b0bb542e264bbd196891933f49c.jpg',
          alt: 'Women and children from Bohemian Flats gathering driftwood from the Mississippi River',
          caption: 'Women and children scavenging driftwood from the Mississippi. The river provided lumber, firewood, and building materials for the community.',
          credit: 'Hennepin County Library/DPLA',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Scavenging Economy',
          content: 'Bohemian Flats residents systematically harvested the Mississippi. They recovered lumber from logging operations upstream, firewood from forests being cleared, and building materials from construction sites along the river. One historian estimated that the Flats economy was worth thousands of dollars annually — all of it pulled from the water.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Slum',
        },
        {
          type: 'paragraph',
          content: 'To Minneapolis\'s respectable citizens, Bohemian Flats was an embarrassment. Here was a European peasant village in the middle of a modern American city — immigrant shacks visible from the university campus, poverty on display for anyone crossing the Washington Avenue Bridge.',
        },
        {
          type: 'paragraph',
          content: 'The city refused to extend services to the Flats. There was no sewer system; residents used outhouses that frequently contaminated the water supply. There was no reliable water service; disease was common. Diphtheria and typhoid swept through the community repeatedly. City health officials documented the problems but did nothing to solve them.',
        },
        {
          type: 'paragraph',
          content: 'The message was clear: Bohemian Flats was tolerated, not accepted. The city wouldn\'t evict the residents outright — not yet — but it wouldn\'t help them either. They were on their own, living in a place the city pretended didn\'t exist.',
        },
        {
          type: 'quote',
          content: 'The Board of Health knows what conditions exist there. The city knows. Everyone knows. But the Flats are out of sight, and the people who live there don\'t vote in elections that matter. So nothing changes.',
          attribution: 'Minneapolis Tribune editorial',
          role: '1905',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Evictions',
        },
        {
          type: 'paragraph',
          content: 'In 1915, Minneapolis began using eminent domain to seize land on the Flats for a barge terminal. This was the beginning of the end. Over the next fifteen years, the city would systematically evict residents to make room for industrial development.',
        },
        {
          type: 'paragraph',
          content: 'The final push came in 1929. The city condemned most of the remaining houses, declaring them unfit for habitation — the same conditions it had ignored for decades. Residents were given eviction notices. Some fought back; most had no choice but to leave.',
        },
        {
          type: 'paragraph',
          content: 'By 1931, nearly everyone was gone. The houses were demolished. The streets were erased. What had been a community for sixty years became, briefly, a coal terminal — the industrial use that had justified the evictions. Then even that faded.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Justification',
          content: 'City officials argued that Bohemian Flats was unsanitary, dangerous, and economically worthless. They neglected to mention that the city itself had refused to provide sanitation, that the danger came from poverty the city had ignored, and that the land became valuable only when the city wanted it for something else.',
        },
        {
          type: 'paragraph',
          content: 'A handful of houses remained into the 1960s, holdouts from a vanished community. The final structure was demolished in 1963. Bohemian Flats was gone.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Forgetting',
        },
        {
          type: 'paragraph',
          content: 'Today, Bohemian Flats is a park. The West River Parkway runs where Mill Street once stood. Dog walkers, joggers, and cyclists pass through daily. The view of the river is beautiful. There is no marker, no memorial, no indication that anyone ever lived here.',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Bohemian_Flats_Park._%28May_23%2C_2019%29.jpg',
          alt: 'Bohemian Flats Park in 2019, now a grassy riverfront park along the Mississippi River in Minneapolis',
          caption: 'Bohemian Flats Park today. A serene green space along the Mississippi River, with no overt indication of the vibrant immigrant community that once thrived here.',
          credit: 'Czbik/Wikimedia Commons (CC0)',
        },
        {
          type: 'paragraph',
          content: 'The Minnesota Historical Society has preserved photographs and oral histories. Academic studies have documented what was lost. But in the physical landscape of Minneapolis, Bohemian Flats has been completely erased — as if a thousand people never climbed those 79 stairs, never scavenged the river, never built lives in the shadow of a city that didn\'t want them.',
        },
        {
          type: 'paragraph',
          content: 'The story fits a pattern. Minneapolis, like most American cities, has a history of displacing the poor to make room for "progress." Bohemian Flats was early; the Gateway District demolition in the 1960s would be larger; I-35W would later displace Black and Mexican neighborhoods. The city keeps building over the people who came before.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'The Mississippi still flows past the site of Bohemian Flats. The bluffs still rise. The 79 stairs are long gone, replaced by modern paths. But if you stand on the riverbank and look up at the Washington Avenue Bridge, you can almost imagine what it was like — a village of immigrants, living by the water, climbing to work each morning, invisible to the city that would eventually erase them.',
        },
        {
          type: 'paragraph',
          content: 'They called it home for sixty years. Minneapolis called it a slum, then a coal terminal, then a park. The river keeps flowing. The memories keep fading. Another neighborhood, another erasure, another park where something used to be.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Finding the Site',
          content: 'Bohemian Flats Park is located along the West River Parkway, between the Washington Avenue Bridge and the Franklin Avenue Bridge, on the west bank of the Mississippi. The Minnesota Historical Society\'s collections include photographs and oral histories from former residents. The book "Bohemian Flats" by Mary and Thaddeus Rybak documents the community\'s history.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'For sixty years, a thousand immigrants lived in Bohemian Flats beneath the Minneapolis bluffs. The city demolished it for a coal terminal. No trace remains.',
  },
}
