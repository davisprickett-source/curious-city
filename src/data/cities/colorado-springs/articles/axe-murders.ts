import type { Article } from '@/types/article'

export const axeMurders: Article = {
  slug: 'axe-murders-1911',
  citySlug: 'colorado-springs',
  title: 'The Night of the Axeman',
  subtitle: 'On September 17, 1911, six people were murdered with an axe in Colorado Springs — two families, three children, all killed in their sleep. The murderer was never caught. A century later, historians believe he was a serial killer who struck across the Midwest, riding the rails and leaving bodies behind.',
  excerpt: 'They called it the worst crime in Colorado Springs history. On a September night in 1911, someone entered two homes and killed six people with the blunt end of an axe — a man, his wife, their toddler, and a woman with her two children. Every victim\'s face was covered with a sheet. Every mirror in the houses was draped. The killer vanished and was never found. A century later, researchers believe the murders were the work of a serial killer who rode the railroads across America, leaving a trail of axe murders from Colorado to Iowa.',
  author: {
    name: 'The Curious City',
    bio: 'True crime history',
  },
  publishedAt: '2025-01-11T12:00:00Z',
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
          content: 'The morning of September 18, 1911, began like any other in Colorado Springs. Milkmen made their rounds. Children walked to school. Then someone knocked on the door of 325 West Dale Street and got no answer. The house was silent. The blinds were drawn. And inside, arranged in their beds with sheets covering their faces, were three bodies — a man, a woman, and an eighteen-month-old child, their skulls crushed by an axe.',
        },
        {
          type: 'paragraph',
          content: 'Three blocks away, at 606 South Weber Street, police found three more victims: a woman and her two children, killed the same way. The axe that murdered them lay on the floor, wiped clean but still bearing traces of blood. Every victim had been struck with the blunt end while they slept. Every victim\'s face had been covered with a sheet or cloth. Every mirror in both houses had been draped.',
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
          content: 'The first family was the Waynes. Henry F. Wayne, 31, worked as a clerk at the Denver & Rio Grande railroad. His wife Blanche, 27, kept house. Their daughter Lula May was eighteen months old. They had lived at 325 West Dale Street for only a few months, having recently moved from Denver. They had no known enemies. They had done nothing to attract the attention of a killer.',
        },
        {
          type: 'paragraph',
          content: 'The second household was more complicated. May Alice Burnham, 35, lived at 606 South Weber Street with her two children: John, 10, and Nettie, 7. May Alice\'s husband was not present — the couple was separated, and he was living elsewhere. A boarder named A.J. Burnham (no relation) rented a room in the house but was out of town that night. May Alice and her children were alone when the killer came.',
        },
        {
          type: 'paragraph',
          content: 'The two families had no obvious connection. They lived three blocks apart but didn\'t know each other. The only thing linking them was proximity — and the railroad. Both houses were within easy walking distance of the tracks.',
        },
        {
          type: 'quote',
          content: 'We have never seen anything like this. The violence, the planning, the way the bodies were arranged — this was not a crime of passion. This was something else entirely.',
          attribution: 'Police Chief H.S. Birdsall',
          role: 'Colorado Springs, September 1911',
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
          content: 'We have exhausted every lead. The murderer came from somewhere else and went somewhere else. He left nothing behind but the bodies.',
          attribution: 'Pinkerton investigator',
          role: 'Final report, 1912',
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
          content: 'The house at 325 West Dale Street still stands in Colorado Springs. It\'s a private residence now, in a quiet neighborhood that shows no sign of its terrible history. The house at 606 South Weber Street is also still there, similarly unremarkable. Nothing marks either site as a crime scene.',
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
