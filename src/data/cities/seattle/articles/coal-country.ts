import type { Article } from '@/types/article'

export const coalCountry: Article = {
  slug: 'coal-country',
  citySlug: 'seattle',
  title: 'When Seattle Was Coal Country',
  subtitle: 'Before Boeing, before Amazon, before coffee — Seattle ran on coal. Mines honeycomb the hills east of the city. Thousands of workers, many of them Chinese and Indigenous, died underground. Then the industry vanished, and Seattle forgot it ever happened.',
  excerpt: 'For fifty years, King County was one of the largest coal-producing regions west of the Mississippi. Mines in Newcastle, Renton, and Black Diamond employed thousands. Chinese workers did the most dangerous jobs. Indigenous Duwamish people were displaced to make way for the mines. Then oil replaced coal, the mines closed, and Seattle became the tech-and-coffee city it is today. Most Seattleites have no idea their city was built on coal — or that abandoned mine shafts still run beneath their suburbs.',
  author: {
    name: 'Benjamin Lee',
    bio: 'Forgotten industries',
  },
  publishedAt: '2025-11-04T12:00:00Z',
  featuredImage: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Child_coal_miners_%281908%29.jpg',
    alt: 'Child coal miners with mules in a mine, 1908',
    credit: 'Lewis Wickes Hine / Library of Congress',
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
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Newcastle_Washington_Mining_Town_1885.jpg/1280px-Newcastle_Washington_Mining_Town_1885.jpg',
          alt: 'The mining town of Newcastle, Washington, in 1885',
          caption: 'Newcastle in 1885. The town was a major industrial center, with houses and church buildings spread across the hillside above the mines.',
          credit: 'Wikimedia Commons',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Coal_train_leaving_mine%2C_Scranton%2C_Pa._LCCN2016648177.jpg',
          alt: 'A coal train leaving a mine in Scranton, Pennsylvania, circa 1912',
          caption: 'A coal train leaving a mine, circa 1912. Scenes like this were common across King County, where rail lines connected mines to Seattle\'s waterfront for shipping.',
          credit: 'George Grantham Bain Collection / Library of Congress',
        },
        {
          type: 'paragraph',
          content: 'The coal barons got rich. The workers — not so much.',
        },
        {
          type: 'quote',
          content: 'Coal was the catalyst. It was the first export that wasn\'t lumber. It made Seattle a city.',
          attribution: 'Murray Morgan',
          role: 'Historian, "Skid Road"',
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
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Coal_Miners_on_Electric_Train_Newcastle_1909.jpg/1280px-Coal_Miners_on_Electric_Train_Newcastle_1909.jpg',
          alt: 'Coal miners on a small electric mining train, Newcastle, 1909',
          caption: 'Miners on an electric mining train outside a Newcastle mine in 1909. The work was grueling and dangerous, with few safety protections.',
          credit: 'Wikimedia Commons',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Chinese_railroad_workers_in_snow.jpg',
          alt: 'Chinese railroad workers in the snow during construction of the transcontinental railroad, circa 1860s',
          caption: 'Chinese workers building the transcontinental railroad, circa 1860s. After the railroad was completed, many Chinese laborers moved to Washington Territory to work in the coal mines, where they faced similar dangers and discrimination.',
          credit: 'Wikimedia Commons / Public Domain',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Lewis_Hine%2C_Jim_McNulty%2C_15_years_old%2C_miner%2C_North_Pittston%2C_Pennsylvania%2C_1911.jpg',
          alt: 'Jim McNulty, a 15-year-old coal miner in Pennsylvania, 1911',
          caption: 'Jim McNulty, 15 years old, a miner in Pennsylvania, 1911. Young workers like McNulty were common in mines across America, including King County, where boys as young as 10 worked underground.',
          credit: 'Lewis Wickes Hine / Library of Congress',
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
          type: 'heading',
          level: 2,
          content: 'The Displaced',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Chief_Seattle_1864.jpg/1280px-Chief_Seattle_1864.jpg',
          alt: 'The only known photograph of Chief Seattle, taken in 1864',
          caption: 'Chief Seattle (Si\'ahl), leader of the Suquamish and Duwamish tribes. The city that bears his name was built on land taken from his people to fuel the coal and timber industries.',
          credit: 'Wikimedia Commons',
        },
        {
          type: 'paragraph',
          content: 'Before the coal mines, the land belonged to the Duwamish people. They had lived along the rivers and shores of Puget Sound for thousands of years, fishing, hunting, and trading. The arrival of white settlers in the 1850s began a process of displacement that the coal industry accelerated.',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Princess_Angeline_ca_1892.jpg/1280px-Princess_Angeline_ca_1892.jpg',
          alt: 'Princess Angeline, daughter of Chief Seattle, circa 1892',
          caption: 'Princess Angeline (Kikisoblu), Chief Seattle\'s daughter, who refused to leave her ancestral lands even as the city and its industries expanded around her.',
          credit: 'Wikimedia Commons',
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
          content: 'The miners at the Seattle mine [at Newcastle] drove all the Chinamen away from there Saturday last.',
          attribution: 'Coal miner',
          role: 'Letter to the editor, 1876',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Disasters',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Group_of_breaker_boys_in_-9_breaker.jpg',
          alt: 'Group of breaker boys at a Pennsylvania coal mine, 1911',
          caption: 'Breaker boys at a Pennsylvania coal breaker, 1911. These young workers sorted coal from slate in dangerous conditions. Similar child labor was common in King County mines until labor reforms in the early 1900s.',
          credit: 'Lewis Wickes Hine / Library of Congress',
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
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Mine_portal_with_ponies._S._C._Streams_Black_Diamond_Mine%2C_Creekside%2C_Indiana_County%2C_Pennsylvania._-_NARA_-_541530.jpg',
          alt: 'Mine portal entrance with ponies at the Black Diamond Mine, 1946',
          caption: 'A mine portal entrance with ponies, Black Diamond Mine, 1946. By the time this photo was taken, coal mining in King County had already ended, but scenes like this were once common at Newcastle, Franklin, and Black Diamond, Washington.',
          credit: 'Russell Lee / National Archives',
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
