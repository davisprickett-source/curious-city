import type { Article } from '@/types/article'

export const plumAlley: Article = {
  slug: 'plum-alley',
  citySlug: 'salt-lake-city',
  title: 'The Chinatown That Became a Parking Lot',
  subtitle: 'For nearly a century, Salt Lake City had a thriving Chinese community called Plum Alley. Then the city demolished it and paved it over. Now there\'s nothing left but asphalt and the occasional ghost story.',
  excerpt: 'From the 1870s until 1952, Salt Lake City\'s Plum Alley was a vibrant Chinese neighborhood — restaurants, laundries, groceries, gambling halls, and temples crammed into a narrow block downtown. The men who built the railroads lived there. Families raised children there. Then urban renewal came, and Plum Alley was erased. Today, a parking structure sits where a community once thrived. Most Salt Lakers don\'t know it ever existed.',
  author: {
    name: 'The Curious City',
    bio: 'Stories of erased communities',
  },
  publishedAt: '2025-01-11T12:00:00Z',
  featuredImage: {
    src: '/salt-lake-city/articles/plum-alley.png',
    alt: 'Plum Alley in Salt Lake City, circa 1910',
    credit: 'Utah State Historical Society',
  },
  category: 'history',
  tags: ['salt-lake-city', 'chinatown', 'immigration', 'chinese-american', 'urban-renewal', 'forgotten-history', 'erasure'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'If you walk down Commercial Street in Salt Lake City today, you\'ll find parking lots, a few office buildings, and not much else. It\'s the kind of anonymous downtown block that exists in every American city — functional, forgettable, empty of history. There is no marker. There is no memorial. There is nothing to indicate that for nearly a century, this was Plum Alley: Salt Lake City\'s Chinatown, home to hundreds of Chinese immigrants, a community erased so thoroughly that most residents don\'t know it ever existed.',
        },
        {
          type: 'paragraph',
          content: 'The men who built the transcontinental railroad lived here. They came from Guangdong Province, survived the brutal labor camps of the Sierra Nevada, and settled in Utah when the work was done. They opened laundries and restaurants. They raised families. They built a neighborhood. And then, in 1952, the city demolished it all to make room for a parking structure.',
        },
        {
          type: 'paragraph',
          content: 'This is the story of Plum Alley — how it was built, how it survived decades of persecution, and how it disappeared.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Railroad Men',
        },
        {
          type: 'paragraph',
          content: 'The Chinese came to Utah to build. In the 1860s, the Central Pacific Railroad was racing eastward from California, trying to lay more track than the Union Pacific and claim a larger share of the government bounty paid per mile. The work was brutal — blasting tunnels through granite, laying rail in desert heat, surviving Sierra winters. White workers wouldn\'t do it, or wouldn\'t do it cheap enough. So the railroad recruited Chinese laborers, eventually employing over 10,000.',
        },
        {
          type: 'paragraph',
          content: 'They were paid less than white workers, given the most dangerous jobs, and housed in separate camps. They died in avalanches, explosions, and accidents that nobody bothered to count accurately. But they built the railroad — including the section that crossed Utah and linked up with the Union Pacific at Promontory Summit in May 1869.',
        },
        {
          type: 'paragraph',
          content: 'When the golden spike was driven, thousands of Chinese workers were suddenly unemployed in the middle of the Utah desert. Some returned to California. Some went to the mining camps. And some walked south to Salt Lake City, where they found a narrow alley between Commercial Street and Regent Street and began to build a community.',
        },
        {
          type: 'quote',
          content: 'They came with nothing. They had been paid almost nothing. But they had skills, they had each other, and they had survived the railroad. That was enough to start.',
          attribution: 'Utah historian',
          role: 'Chinese American Historical Society',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'Plum Alley',
        },
        {
          type: 'paragraph',
          content: 'The neighborhood that emerged was called Plum Alley — a narrow street, really, running between Second South and Third South. By the 1880s, it had become a self-contained world: Chinese groceries sold dried fish and preserved vegetables imported from San Francisco. Laundries served the broader city, since washing clothes was one of the few businesses white Salt Lakers would tolerate. Restaurants fed workers who couldn\'t cook for themselves. Gambling halls and opium dens operated semi-openly, tolerated by police who collected regular bribes.',
        },
        {
          type: 'paragraph',
          content: 'There was also a temple, tucked into an upper floor, where the residents practiced a mix of Buddhism, Taoism, and ancestor worship that confused and alarmed the Mormon majority. The Joss House, as it was called, was one of the few places the men of Plum Alley could gather to observe traditional holidays and remember the villages they\'d left behind.',
        },
        {
          type: 'paragraph',
          content: 'The population fluctuated. Census records show roughly 300 Chinese in Salt Lake City in 1880, rising to over 500 by 1900. Almost all were men — the Chinese Exclusion Act of 1882 prohibited the immigration of laborers\' wives and children, creating a bachelor society that would persist for generations. The men of Plum Alley grew old alone, sending money home to families they would never see again.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Exclusion Act',
          content: 'The Chinese Exclusion Act of 1882 was the first law in American history to ban immigration based on race and nationality. It prohibited Chinese laborers from entering the country and made Chinese immigrants ineligible for citizenship. The law wasn\'t fully repealed until 1943.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Persecution',
        },
        {
          type: 'paragraph',
          content: 'Plum Alley survived because it had to. The Chinese were not welcome anywhere else in Salt Lake City. They faced housing discrimination, employment discrimination, and periodic violence. In 1886, a mob of white workers attacked Chinese-owned businesses throughout downtown, smashing windows and beating anyone who didn\'t flee fast enough. The police did nothing.',
        },
        {
          type: 'paragraph',
          content: 'The Salt Lake Tribune ran editorials calling for Chinese expulsion. Local politicians campaigned on anti-Chinese platforms. Laws were passed requiring Chinese businesses to pay special taxes. The message was clear: stay in your alley, stay quiet, stay invisible.',
        },
        {
          type: 'paragraph',
          content: 'And so they did. Plum Alley became a refuge — the one place in the city where Chinese families could live without daily harassment. The neighborhood developed its own economy, its own social structures, its own way of coping with a hostile world. They didn\'t bother the white city. They just tried to survive.',
        },
        {
          type: 'quote',
          content: 'The Chinese learned to be invisible. That was how you survived in America. You made yourself small, you stayed in your place, and you hoped nobody noticed you.',
          attribution: 'Plum Alley descendant',
          role: 'Oral history interview, 1980s',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Slow Death',
        },
        {
          type: 'paragraph',
          content: 'The Chinese Exclusion Act didn\'t just prevent new immigration — it ensured that Plum Alley would slowly die. Without women, there were few families. Without families, there were few children. Without children, there was no next generation to inherit the businesses, maintain the temple, remember the language.',
        },
        {
          type: 'paragraph',
          content: 'By the 1920s, Plum Alley was aging. The railroad workers who had founded it were old men now, or dead. The laundries and restaurants still operated, but they were struggling. The Great Depression hit the neighborhood hard — the customers who once paid for laundry service couldn\'t afford it anymore. One by one, businesses closed.',
        },
        {
          type: 'paragraph',
          content: 'World War II brought a brief reprieve. China was suddenly an American ally, and Chinese Americans experienced a slight warming in public attitudes. The Exclusion Act was finally repealed in 1943, though with a laughably small quota of 105 immigrants per year. It was too little, too late. By the end of the war, Plum Alley was a shadow of what it had been — a few dozen elderly men, a handful of businesses, buildings falling into disrepair.',
        },
        {
          type: 'paragraph',
          content: 'The city began to notice the valuable real estate they were occupying.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Demolition',
        },
        {
          type: 'paragraph',
          content: 'In the early 1950s, Salt Lake City embarked on an urban renewal program. The goal, as in cities across America, was to clear "blighted" neighborhoods and replace them with modern development. Plum Alley was targeted. The buildings were old. The residents were poor. The land was valuable. It was an easy decision.',
        },
        {
          type: 'paragraph',
          content: 'By 1952, the demolition was complete. The laundries, the restaurants, the gambling halls, the Joss House — all of it reduced to rubble. The remaining Chinese residents were scattered across the city. Some moved to the west side. Some left Utah entirely. The community that had existed for nearly a century simply ceased to exist.',
        },
        {
          type: 'paragraph',
          content: 'In its place, the city built a parking structure. Later, more parking lots. Office buildings. The block became what it is today: anonymous, functional, empty of memory.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Urban Renewal\'s Toll',
          content: 'Plum Alley was not unique. Across America, urban renewal programs destroyed Chinese, Japanese, Black, and other minority neighborhoods, displacing hundreds of thousands of people. The policy has been called "negro removal" and "slum clearance," but the effect was the same: the erasure of communities that were inconvenient to power.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Ghosts',
        },
        {
          type: 'paragraph',
          content: 'There\'s a strange coda to the Plum Alley story. In the decades since the demolition, people working in the buildings and parking structures that replaced it have reported unusual experiences. Cold spots in basements. The smell of incense in empty rooms. Footsteps in hallways where no one is walking.',
        },
        {
          type: 'paragraph',
          content: 'The Rio Grande Depot, which stands nearby, is said to be haunted by a "Purple Lady" — though some historians believe that ghost story was actually invented to distract from darker legends about the Chinese workers who died in the neighborhood. A few paranormal investigators have claimed to pick up Chinese language fragments on recording devices, though such evidence is, of course, unverifiable.',
        },
        {
          type: 'paragraph',
          content: 'It\'s easy to dismiss ghost stories. But there\'s something fitting about the idea that Plum Alley refuses to stay buried. The city erased the buildings. They erased the records. They erased the memory. But the land remembers. Maybe the ghosts are just the neighborhood\'s way of insisting it existed — that people lived and worked and died here, and that their erasure was a choice, not an inevitability.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'What Remains',
        },
        {
          type: 'paragraph',
          content: 'If you want to find traces of Salt Lake City\'s Chinese history, you have to look carefully. The Chinese American community that exists today is descended mostly from later immigrants, not from Plum Alley. The old neighborhood left few physical artifacts — some photographs in the Utah State Historical Society archives, some artifacts in storage, some oral histories recorded before the last survivors died.',
        },
        {
          type: 'paragraph',
          content: 'There is no Chinatown in Salt Lake City today. Unlike San Francisco or New York, there was no critical mass of residents to rebuild elsewhere when Plum Alley was destroyed. The community was too small, too old, too scattered. It simply dissolved.',
        },
        {
          type: 'paragraph',
          content: 'In recent years, historians and community members have worked to recover the memory of Plum Alley. BYU\'s Intermountain Histories project has documented the neighborhood. The Utah Division of State History has digitized photographs. There\'s talk of a historical marker, though nothing has been installed yet. It\'s better than nothing, but it\'s not the same as a living community.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'Walk down Commercial Street in Salt Lake City and you\'ll see nothing. Parking lots. Office buildings. The ordinary infrastructure of a modern downtown. There\'s no sign that hundreds of people once made their lives here, that the men who connected the nation by railroad spent their final years in these buildings, that a temple once stood where you\'re now walking.',
        },
        {
          type: 'paragraph',
          content: 'Plum Alley lasted almost a hundred years. It survived the Exclusion Act, the mob violence, the Depression, the slow demographic death of a bachelor society. What it couldn\'t survive was urban renewal — the decision by city planners that this block would be more valuable as parking than as a neighborhood.',
        },
        {
          type: 'paragraph',
          content: 'The Chinese came to Utah to build. They built the railroad that connected the nation. They built a community in a hostile city. And when the city decided it needed their land, they watched it all come down.',
        },
        {
          type: 'paragraph',
          content: 'Now there\'s a parking lot where Plum Alley used to be. You can park there for $8 an hour. There\'s no discount for knowing the history.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Finding Plum Alley',
          content: 'The site of Plum Alley is roughly bounded by Commercial Street, Regent Street, 100 South, and 200 South in downtown Salt Lake City. No historical markers currently exist at the site. The Utah State Historical Society and the Intermountain Histories project (intermountainhistories.org) have documentation about the neighborhood. The Chinese American community hosts occasional walking tours of historical sites.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'For nearly a century, Salt Lake City had a Chinatown called Plum Alley. In 1952, the city demolished it for a parking lot. Now nothing remains but ghost stories.',
  },
}
