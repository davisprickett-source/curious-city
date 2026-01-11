import type { Article } from '@/types/article'

export const bohemianFlats: Article = {
  slug: 'bohemian-flats',
  citySlug: 'minneapolis',
  title: 'Bohemian Flats: The Immigrant Village Minneapolis Erased',
  subtitle: 'For sixty years, a thousand immigrants lived in shanties beneath the Washington Avenue Bridge. They scavenged from the river, climbed 79 stairs to work each morning, and were evicted to make room for a coal terminal. Now it\'s a park.',
  excerpt: 'From the 1870s to the 1930s, Bohemian Flats was a village beneath the bluffs of Minneapolis — a thousand Slovaks, Czechs, Swedes, and Irish living in small houses along the Mississippi, climbing 79 wooden stairs to work in the mills each day. The city called it a slum. Residents called it home. Minneapolis demolished it for a coal terminal. Today, no physical trace remains.',
  author: {
    name: 'The Curious City',
    bio: 'Uncovering buried history',
  },
  publishedAt: '2025-01-10T12:00:00Z',
  featuredImage: {
    src: '/minneapolis/articles/bohemian-flats.png',
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
          type: 'paragraph',
          content: 'Every morning, the men of Bohemian Flats climbed 79 wooden stairs cut into the bluff to reach the city above. They worked in the flour mills at St. Anthony Falls, on railroad crews, as day laborers — whatever work immigrants could find. Every evening, they descended back to the river.',
        },
        {
          type: 'quote',
          content: 'We had our own little world down there. The city was up above, but we lived by the river. We knew every family, every house, every goat. It wasn\'t much, but it was ours.',
          attribution: 'Former Bohemian Flats resident',
          role: 'Oral history, Minnesota Historical Society',
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
