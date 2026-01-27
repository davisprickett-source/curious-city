import type { Article } from '@/types/article'

export const axeMurders: Article = {
  slug: 'axe-murders-1911',
  citySlug: 'colorado-springs',
  title: 'The Night of the Axeman',
  subtitle: 'On September 17, 1911, six people were murdered with an axe in Colorado Springs — two families, three children, all killed in their sleep. The murderer was never caught. A century later, historians believe he was a serial killer who struck across the Midwest, riding the rails and leaving bodies behind.',
  excerpt: 'They called it the worst crime in Colorado Springs history. On a September night in 1911, someone entered two homes and killed six people with the blunt end of an axe — a man, his wife, their toddler, and a woman with her two children. Every victim\'s face was covered with a sheet. Every mirror in the houses was draped. The killer vanished and was never found. A century later, researchers believe the murders were the work of a serial killer who rode the railroads across America, leaving a trail of axe murders from Colorado to Iowa.',
  author: {
    name: 'Maya Santos',
    bio: 'True crime history',
  },
  publishedAt: '2024-11-05T12:00:00Z',
  featuredImage: {
    src: '/colorado-springs/articles/axe-murders.png',
    alt: 'Newspaper headline about the 1911 Colorado Springs axe murders',
    credit: 'Colorado Springs Gazette archives',
  },
  category: 'history',
  tags: ['colorado-springs', 'true-crime', 'unsolved', 'serial-killer', '1911', 'history', 'mystery'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'The morning of September 18, 1911, began like any other in Colorado Springs. Milkmen made their rounds. Children walked to school. Then someone knocked on the door of 321 West Dale Street and got no answer. The house was silent. The blinds were drawn. And inside, arranged in their beds with sheets covering their faces, were three bodies — May Alice Burnham and her two children, their skulls crushed by an axe.',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Victorian_house_in_Colorado_Springs.jpg/1280px-Victorian_house_in_Colorado_Springs.jpg',
          alt: 'Victorian era house in Colorado Springs',
          caption: 'Many of the homes in the West Dale and Weber Street neighborhoods were modest Victorian structures. On that September morning, two of them became scenes of unimaginable horror.',
          credit: 'Wikimedia Commons',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Tejon_Street%2C_Colorado_Springs%2C_circa_1910-1920.jpg/1280px-Tejon_Street%2C_Colorado_Springs%2C_circa_1910-1920.jpg',
          alt: 'Tejon Street in Colorado Springs, early 20th century',
          caption: 'Tejon Street in Colorado Springs, circa 1910. The city was a growing resort town, but the axe murders shattered its idyllic image.',
          credit: 'Wikimedia Commons',
        },
        {
          type: 'paragraph',
          content: 'Just a few steps away, at 743 Harrison Place, police found three more victims: Henry Wayne, his wife Blanche, and their infant daughter, killed the same way. The axe that murdered them lay on the floor, wiped clean but still bearing traces of blood. Every victim had been struck with the blunt end while they slept. Every victim\'s face had been covered with a sheet or cloth. Every mirror in both houses had been draped.',
        },
        {
          type: 'paragraph',
          content: 'It was the worst crime in Colorado Springs history. Six people dead in one night, killed with a brutality that shocked even hardened detectives. The murderer had come in silence, killed without waking anyone, and vanished before dawn. He was never caught. For over a century, the case went cold. Then researchers began connecting the Colorado Springs murders to a pattern that stretched across the American Midwest — and realized the killer may have struck dozens of times.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Victims',
        },
        {
          type: 'paragraph',
          content: 'The first household was the Burnhams. May Alice Burnham, 35, lived at 321 West Dale Street with her two children: John, 2, and Nellie, 7. May Alice\'s husband was not present — the couple was separated, and he was living elsewhere. They were alone when the killer came.',
        },
        {
          type: 'paragraph',
          content: 'The second family was the Waynes, who lived just behind the Burnhams at 743 Harrison Place. Henry F. Wayne, 24, worked as a clerk at the Denver & Rio Grande railroad. His wife Blanche, 22, kept house. Their daughter Lula was eighteen months old. They had recently moved from Denver. They had no known enemies. They had done nothing to attract the attention of a killer.',
        },
        {
          type: 'paragraph',
          content: 'The two families were neighbors, their backyards separated only by a small distance. The only thing linking them besides proximity was the railroad. Both houses were within easy walking distance of the tracks, a common theme in axe murders of the era.',
        },
        {
          type: 'quote',
          content: 'The crime is the most cold-blooded and revolting in the history of the city. The murderer came in silence and vanished before dawn.',
          attribution: 'Colorado Springs Gazette',
          role: 'September 1911',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Crime',
        },
        {
          type: 'paragraph',
          content: 'The killer\'s method was consistent across both houses. He entered through unlocked doors or windows in the middle of the night. He found the bedrooms where the victims slept. He struck each victim in the skull with the blunt end of an axe — not the blade, the poll — delivering killing blows while they lay in bed. None of the victims showed signs of struggle. They were killed in their sleep.',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Splitting_axe.jpg/800px-Splitting_axe.jpg',
          alt: 'A typical splitting axe with a wooden handle and metal head',
          caption: 'The murder weapon in the Colorado Springs axe murders was described as a standard splitting axe, used for chopping firewood. The killer used the blunt end of the poll.',
          credit: 'Wikimedia Commons',
        },
        {
          type: 'paragraph',
          content: 'After the murders, the killer engaged in strange rituals. He covered each victim\'s face with a sheet or piece of cloth. He draped the mirrors in each house. He may have washed in the kitchen sink — water was found spilled on the floor. He wiped the axe handle but left the weapon behind. Then he walked out into the night and disappeared.',
        },
        {
          type: 'paragraph',
          content: 'The murders were discovered around 8:30 AM when neighbors noticed that the Wayne family hadn\'t emerged for the day. A milkman found bottles from the previous morning still on the porch. Someone knocked, got no answer, and looked through a window. The police were called. The bodies were found.',
        },
        {
          type: 'paragraph',
          content: 'The Burnham household was discovered an hour later, when police began canvassing the neighborhood. The scene was identical: three bodies, faces covered, mirrors draped, axe left behind. Two families, six victims, one killer. And no witnesses.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Ritual',
          content: 'Covering the victims\' faces and draping the mirrors were consistent across both crime scenes. This "signature" — actions unnecessary to the murder but important to the killer — would later help researchers connect the Colorado Springs murders to a series of similar crimes across the Midwest.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Investigation',
        },
        {
          type: 'paragraph',
          content: 'Colorado Springs threw everything it had at the case. The police department brought in outside help — the Pinkerton Detective Agency and the Burns Agency both sent investigators. Hundreds of people were questioned. Every transient in the rail yards was rounded up and interrogated. A $2,500 reward was posted for information leading to the killer\'s capture.',
        },
        {
          type: 'paragraph',
          content: 'Suspects emerged and were ruled out. The separated husband of May Alice Burnham was investigated and cleared — he had an alibi for the night of the murders. A man seen near the Wayne house that evening was tracked down and eliminated as a suspect. Various drifters and "suspicious characters" were arrested, questioned, and released.',
        },
        {
          type: 'paragraph',
          content: 'The investigation went on for months, then years. Tips came in from across the country — people who knew someone who might be the killer, or had seen something suspicious, or just wanted the reward money. None led anywhere. The case grew cold. By 1915, the investigation had effectively ended. The killer had gotten away.',
        },
        {
          type: 'quote',
          content: 'The killer seemed to ride the rails, striking in towns along major routes, then vanishing before morning. Local police investigated local suspects. Nobody connected the cases.',
          attribution: 'Bill James',
          role: 'Author, "The Man from the Train"',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Pattern',
        },
        {
          type: 'paragraph',
          content: 'For a century, the Colorado Springs axe murders remained an isolated mystery — a terrible crime that happened once and was never explained. Then, in the 2010s, researchers began comparing the case to similar crimes across the American Midwest. What they found suggested that the Colorado Springs killer had struck many times before — and many times after.',
        },
        {
          type: 'paragraph',
          content: 'The pattern was consistent across dozens of cases between 1898 and 1912: families killed with axes, struck with the blunt end while sleeping. Faces covered with cloth. Mirrors draped or turned to the wall. Homes located near railroad tracks. The killer seemed to ride the rails, striking in towns along major routes, then vanishing before morning.',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Steam_locomotive_on_railroad_tracks%2C_USA%2C_early_1900s.jpg/1280px-Steam_locomotive_on_railroad_tracks%2C_USA%2C_early_1900s.jpg',
          alt: 'Steam locomotive on railroad tracks, early 1900s',
          caption: 'The killer is believed to have ridden the rails, traveling from town to town by freight train and striking in homes located near the tracks.',
          credit: 'Wikimedia Commons',
        },
        {
          type: 'paragraph',
          content: 'The most famous case in the series was the Villisca, Iowa, axe murders of June 1912 — eight people killed in their sleep, faces covered, mirrors draped. That case attracted national attention and has been studied extensively. But researchers now believe Villisca was just one of many — and that the Colorado Springs murders were part of the same series.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Man from the Train',
          content: 'True crime researchers Bill James and Rachel McCarthy James documented the pattern in their 2017 book "The Man from the Train." They identified dozens of potential victims across the Midwest and South, all killed with similar methods, all near railroad lines. They believe a single serial killer was responsible — and that he was never caught.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Theory',
        },
        {
          type: 'paragraph',
          content: 'The working theory is that the killer was a railroad worker or transient who rode freight trains from town to town. He would arrive in a community, identify a target — typically a family in a house near the tracks — and strike in the middle of the night. By morning, he was on a train heading elsewhere. Local police investigated local suspects. Nobody connected the cases across jurisdictions.',
        },
        {
          type: 'paragraph',
          content: 'The ritual elements — covering faces, draping mirrors — suggest psychological compulsions that the killer couldn\'t resist. These "signatures" served no practical purpose but were important enough that he repeated them at every scene. Modern profilers would recognize them as signs of a specific type of serial offender, but the term "serial killer" wouldn\'t exist for another sixty years.',
        },
        {
          type: 'paragraph',
          content: 'If the theory is correct, the Colorado Springs murders were neither the first nor the last in the series. The killer may have struck as many as 100 times between 1898 and 1912, killing entire families across the American heartland. He was never identified. He may have died, moved on, or simply stopped. The trail goes cold after Villisca in June 1912.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'What Remains',
        },
        {
          type: 'paragraph',
          content: 'The original houses at 321 West Dale Street and 743 Harrison Place no longer stand. They were torn down in early 1912, just months after the murders, by a community eager to erase the physical memory of the tragedy. Today, newer structures occupy the lots, and the quiet neighborhood shows no sign of its terrible history.',
        },
        {
          type: 'paragraph',
          content: 'The victims are buried in Evergreen Cemetery on the outskirts of town. The Wayne family has a modest marker. The Burnham children lie nearby. The graves are rarely visited. Most Colorado Springs residents have never heard of the murders — the worst crime in the city\'s history, forgotten within a generation.',
        },
        {
          type: 'paragraph',
          content: 'The case officially remains open. No one was ever charged. No one was ever convicted. The killer\'s identity remains unknown, though researchers continue to propose suspects. After more than a century, the axe murders of September 1911 remain what they were the morning the bodies were discovered: a mystery without an answer.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'On the night of September 17, 1911, someone walked through Colorado Springs with an axe. He entered two houses, killed six people — including three children — and vanished without a trace. He covered the victims\' faces. He draped the mirrors. He left the axe behind and walked back to the railroad tracks, where a freight train would carry him to the next town, the next target, the next family sleeping in their beds.',
        },
        {
          type: 'paragraph',
          content: 'We will probably never know his name. We will never know why he killed, or how many victims he claimed, or where he finally stopped. The Colorado Springs axe murders are just one chapter in a story that spans a decade and thousands of miles — a serial killer who rode the rails through America, leaving bodies in his wake, and was never caught.',
        },
        {
          type: 'paragraph',
          content: 'The houses still stand. The victims are still buried. And somewhere, in the historical record, the killer\'s trail goes cold. It\'s been cold for over a hundred years. It will probably stay cold forever.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Learning More',
          content: '"The Man from the Train" by Bill James and Rachel McCarthy James (2017) provides the most comprehensive analysis of the axe murder series, including the Colorado Springs case. Local newspaper archives from 1911 contain extensive contemporary coverage. The houses on West Dale Street and South Weber Street are private residences and should not be disturbed.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'In 1911, six people were murdered with an axe in Colorado Springs. The killer was never caught. A century later, researchers believe he was a serial killer who rode the rails across America.',
  },
}
