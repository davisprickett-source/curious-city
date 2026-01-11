import type { Article } from '@/types/article'

export const coalCountry: Article = {
  slug: 'coal-country',
  citySlug: 'seattle',
  title: 'When Seattle Was Coal Country',
  subtitle: 'Before Boeing, before Amazon, before coffee — Seattle ran on coal. Mines honeycomb the hills east of the city. Thousands of workers, many of them Chinese and Indigenous, died underground. Then the industry vanished, and Seattle forgot it ever happened.',
  excerpt: 'For fifty years, King County was one of the largest coal-producing regions west of the Mississippi. Mines in Newcastle, Renton, and Black Diamond employed thousands. Chinese workers did the most dangerous jobs. Indigenous Duwamish people were displaced to make way for the mines. Then oil replaced coal, the mines closed, and Seattle became the tech-and-coffee city it is today. Most Seattleites have no idea their city was built on coal — or that abandoned mine shafts still run beneath their suburbs.',
  author: {
    name: 'The Curious City',
    bio: 'Forgotten industries',
  },
  publishedAt: '2025-01-11T12:00:00Z',
  featuredImage: {
    src: '/seattle/articles/coal-country.png',
    alt: 'Coal miners at Newcastle Mine near Seattle, circa 1890',
    credit: 'University of Washington Special Collections',
  },
  category: 'history',
  tags: ['seattle', 'coal', 'mining', 'labor', 'chinese-american', 'industry', 'forgotten-history'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'When you think of Seattle, you think of rain, coffee, tech giants, grunge music. You think of Pike Place Market and the Space Needle and endless gray skies. You do not think of coal mines. You do not imagine tunnels burrowing hundreds of feet into the hills, cage elevators dropping workers into darkness, mule-drawn carts hauling black rock to the surface. You do not picture Seattle as what it once was: West Virginia on Puget Sound.',
        },
        {
          type: 'paragraph',
          content: 'But for half a century — from the 1860s to the 1920s — King County was one of the major coal-producing regions of the American West. Mines in Newcastle, Renton, Black Diamond, and Franklin employed thousands of workers. The coal they extracted powered steamships, heated homes, and fueled Seattle\'s transformation from frontier outpost to major city. Coal built Seattle. Then Seattle forgot.',
        },
        {
          type: 'paragraph',
          content: 'This is the story of Seattle\'s coal era — the fortunes it created, the lives it destroyed, and why nobody remembers it anymore.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Discovery',
        },
        {
          type: 'paragraph',
          content: 'Coal was discovered in King County in the 1850s, almost as soon as white settlers arrived. The geology was favorable — thick seams of bituminous coal ran through the foothills of the Cascades, close to the surface and relatively easy to extract. The location was perfect — Puget Sound provided water access to San Francisco, the booming gold rush city that needed fuel.',
        },
        {
          type: 'paragraph',
          content: 'The first commercial mine opened at Coal Creek (now part of Bellevue) in 1863. Within a decade, there were mines throughout the region. Newcastle, named after the famous English coal city, became the largest operation. At its peak in the 1880s, Newcastle was producing over 200,000 tons of coal per year. It was, by some measures, the largest coal mine west of the Mississippi.',
        },
        {
          type: 'paragraph',
          content: 'The coal barons got rich. The workers — not so much.',
        },
        {
          type: 'quote',
          content: 'Seattle was built on coal money. The Burkes, the Villards, the railroad men — they made their fortunes pulling black rock out of the ground. Nobody remembers that now. They remember the railroads and the ships. They don\'t remember what made those things run.',
          attribution: 'Local historian',
          role: 'King County Historical Society',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Workers',
        },
        {
          type: 'paragraph',
          content: 'Coal mining was brutal work. Miners descended into tunnels that could flood, collapse, or fill with explosive gas at any moment. They worked by candlelight or oil lamp, breathing coal dust that would eventually kill them even if the mine didn\'t. They were paid by the ton, which incentivized speed over safety. Accidents were constant. Deaths were common.',
        },
        {
          type: 'paragraph',
          content: 'The workforce was stratified by race. White miners — many of them immigrants from Wales, Scotland, and England, where coal mining was a generational trade — got the skilled positions: cutting coal faces, managing crews, operating equipment. Chinese workers, recruited in large numbers after the transcontinental railroad was completed, got the most dangerous jobs: working in poorly ventilated tunnels, handling explosives, doing the labor that white workers refused.',
        },
        {
          type: 'paragraph',
          content: 'By the 1870s, Chinese workers made up a significant portion of King County\'s mining workforce. They lived in segregated camps, were paid less than white workers, and were blamed when anything went wrong. When the mines had layoffs, Chinese workers were fired first. When there was an explosion, Chinese workers were more likely to be underground.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Segregated Mines',
          content: 'King County mines operated under strict racial hierarchies. White miners earned $2.50-3.00 per day. Chinese miners earned $1.00-1.50 for the same work. Housing, dining, and work assignments were segregated. During the anti-Chinese violence of the 1880s, many Chinese miners were driven out entirely.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Displaced',
        },
        {
          type: 'paragraph',
          content: 'Before the coal mines, the land belonged to the Duwamish people. They had lived along the rivers and shores of Puget Sound for thousands of years, fishing, hunting, and trading. The arrival of white settlers in the 1850s began a process of displacement that the coal industry accelerated.',
        },
        {
          type: 'paragraph',
          content: 'Mining required not just the land where the mines were dug but also the surrounding forests (for timber to shore up tunnels), the rivers (for transport and power), and the watersheds (which were polluted by mining operations). As the coal industry expanded, Duwamish villages were pushed out, fishing grounds were destroyed, and the landscape was transformed beyond recognition.',
        },
        {
          type: 'paragraph',
          content: 'The Duwamish were never compensated. They were never even officially recognized as a tribe by the federal government — a status they\'re still fighting for today. The coal that built Seattle was extracted from land taken from people who are still waiting for acknowledgment.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Violence',
        },
        {
          type: 'paragraph',
          content: 'The 1880s brought the anti-Chinese movement to Washington Territory. White workers, facing economic competition and stoked by racist politicians, turned on their Chinese neighbors. In 1885 and 1886, mobs drove Chinese residents out of Tacoma and Seattle. In the coal towns, the violence was especially intense.',
        },
        {
          type: 'paragraph',
          content: 'At Newcastle, white miners organized to expel Chinese workers. At Franklin, a mob burned the Chinese workers\' housing. Throughout King County, Chinese miners were given a choice: leave voluntarily or be driven out violently. Most left. Those who stayed faced constant harassment and occasional murder.',
        },
        {
          type: 'paragraph',
          content: 'The mine owners were caught in a bind. Chinese workers were cheaper and more willing to do dangerous work. But using them risked violence from white workers. Some companies gave in to the mobs and hired only white workers. Others brought in new groups — Black miners from the South, immigrants from Southern and Eastern Europe — who could be played against each other to keep wages low.',
        },
        {
          type: 'quote',
          content: 'The Chinese were driven out by violence, but the violence was about economics. White miners didn\'t want competition. The owners didn\'t want to pay fair wages. The Chinese were caught in between, and they paid the price.',
          attribution: 'Labor historian',
          role: 'University of Washington',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Disasters',
        },
        {
          type: 'paragraph',
          content: 'Coal mining is inherently dangerous. The King County mines were no exception. Explosions, cave-ins, floods, and fires killed workers throughout the industry\'s history. Some disasters made headlines. Most were recorded as single-line entries in company ledgers and forgotten.',
        },
        {
          type: 'paragraph',
          content: 'The worst disaster came in 1894 at the Franklin Mine, about 30 miles southeast of Seattle. An explosion tore through the underground tunnels, killing 37 miners instantly. Rescue workers who entered the mine found bodies scattered through the passages, some burned beyond recognition. It was the deadliest industrial accident in Washington Territory history.',
        },
        {
          type: 'paragraph',
          content: 'The Franklin disaster led to some safety reforms, but accidents continued. Miners died from cave-ins, from fires, from gas poisoning. Their names were recorded — when they were recorded — in company files that were later lost or destroyed. We don\'t know how many people died in King County\'s coal mines. Hundreds, certainly. Perhaps more.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Franklin Mine Disaster',
          content: 'On August 24, 1894, an explosion at the Franklin Mine killed 37 workers. The cause was never definitively determined — likely a spark igniting coal dust or methane gas. Many victims were immigrants whose families couldn\'t afford to ship bodies home. They were buried in a mass grave near the mine.',
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
          content: 'King County\'s coal industry peaked around 1900 and declined steadily thereafter. The reasons were multiple: the best seams were exhausted, making extraction more expensive. Oil emerged as a cleaner, more efficient fuel. Hydroelectric power — abundant in the Pacific Northwest — offered an alternative for electricity generation. One by one, the mines closed.',
        },
        {
          type: 'paragraph',
          content: 'Newcastle shut down in 1929. Black Diamond held on until 1937. The smaller operations disappeared even earlier. By World War II, commercial coal mining in King County was essentially finished. The mine shafts were sealed, the equipment was sold for scrap, and the coal towns were abandoned or absorbed into Seattle\'s expanding suburbs.',
        },
        {
          type: 'paragraph',
          content: 'The transition happened fast enough that living memory barely spans it. People who grew up in coal towns in the 1920s watched those towns become bedroom communities by the 1950s. The mines were sealed, the slag heaps were landscaped, and the history was forgotten. Seattle reinvented itself as a modern, clean, technology-oriented city. Coal didn\'t fit the brand.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'What Remains',
        },
        {
          type: 'paragraph',
          content: 'Drive through the suburbs east of Seattle today and you\'ll find traces if you know where to look. Newcastle is now a wealthy residential community; the only hint of its past is the name and a few historical markers. Black Diamond has a museum dedicated to its coal heritage. The Coal Creek Trail follows the route of an old mining railroad through what is now a forested park.',
        },
        {
          type: 'paragraph',
          content: 'The mines themselves are still there — sealed, but present. Abandoned shafts run beneath suburban developments. Occasionally, sinkholes open when old tunnels collapse. In 2020, a home in the Newcastle area was damaged when a forgotten mine shaft beneath it partially caved in. The ground remembers what the people have forgotten.',
        },
        {
          type: 'paragraph',
          content: 'There are also graves. The Franklin Mine disaster victims are buried near the site of the explosion, though the cemetery is overgrown and hard to find. Chinese workers who died in the mines were often buried in unmarked graves or had their remains shipped back to China — a practice that has made it nearly impossible to account for how many died.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'Seattle doesn\'t think of itself as a coal city. It thinks of itself as a tech city, a coffee city, a progressive city. The Space Needle is the symbol, not the mine shaft. Amazon and Microsoft are the economic engines, not tunnels full of black rock. The transformation has been so complete that most Seattleites are genuinely surprised to learn their city was ever anything else.',
        },
        {
          type: 'paragraph',
          content: 'But the coal era shaped Seattle in ways that persist. The fortunes made in coal funded the railroads and shipping lines that made Seattle a major port. The labor conflicts in the mines established patterns of union organizing that influenced the city\'s politics for generations. The displacement of Indigenous peoples and the exploitation of Chinese workers left legacies that are still being addressed — or ignored.',
        },
        {
          type: 'paragraph',
          content: 'Beneath the suburbs, the mine shafts remain. Beneath the tech campuses and the coffee shops and the farmers\' markets, there are tunnels where workers died a century ago. Seattle was built on coal. The coal is gone, but the tunnels are still there, running through the dark beneath a city that has forgotten they exist.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Exploring Coal Country',
          content: 'The Black Diamond Museum (32627 Railroad Avenue) preserves artifacts and stories from the coal era. Newcastle Beach Park is built on the site of the former Newcastle Mine. The Coal Creek Trail in Bellevue follows an old mining railroad route. The Franklin townsite, accessible via hiking trails, includes ruins of mine buildings and a memorial to disaster victims.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'Before tech and coffee, Seattle was coal country. For fifty years, mines in King County employed thousands. Then the industry vanished, and Seattle forgot it happened.',
  },
}
