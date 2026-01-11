import type { Article } from '@/types/article'

export const iroquoisTheater: Article = {
  slug: 'iroquois-theater-fire',
  citySlug: 'chicago',
  title: 'The Iroquois Theater Fire: Chicago\'s Forgotten Inferno',
  subtitle: 'On December 30, 1903, 602 people died in a Chicago theater — more than perished in the Great Chicago Fire. The exits were locked. The fire curtain was fake. Almost nobody remembers.',
  excerpt: 'The Iroquois Theater was "absolutely fireproof." That\'s what the advertisements said. On December 30, 1903, a spark from a stage light ignited a curtain, and 602 people died in fifteen minutes — women, children, families packed in for a holiday matinee. The exits were locked to prevent gate-crashers. The "asbestos" fire curtain was made of wood pulp. It remains the deadliest single-building fire in American history.',
  author: {
    name: 'The Curious City',
    bio: 'Uncovering buried history',
  },
  publishedAt: '2025-01-10T12:00:00Z',
  featuredImage: {
    src: '/chicago/articles/iroquois-theater.png',
    alt: 'The Iroquois Theater after the fire, December 1903',
    credit: 'Chicago History Museum',
  },
  category: 'history',
  tags: ['chicago-history', 'disaster', 'forgotten-history', '1903', 'tragedy', 'fire-safety'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'Everyone in Chicago knows about the Great Fire of 1871. Mrs. O\'Leary\'s cow. The flames that consumed the city. The rebuilding that followed. It\'s the foundational myth of modern Chicago — the disaster that made the city what it is today.',
        },
        {
          type: 'paragraph',
          content: 'But on December 30, 1903, another fire killed more people than the Great Fire ever did. In fifteen minutes, 602 Chicagoans died in a theater on Randolph Street — mothers, children, families who\'d come to see a holiday show. The exits were locked. The "fireproof" curtain failed. People burned, suffocated, and trampled each other in the dark.',
        },
        {
          type: 'paragraph',
          content: 'The Great Chicago Fire killed roughly 300 people. The Iroquois Theater fire killed twice that. And almost nobody remembers it.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Fireproof Theater',
        },
        {
          type: 'paragraph',
          content: 'The Iroquois Theater opened on November 23, 1903, just five weeks before the fire. It was Chicago\'s newest, grandest playhouse — a $1 million palace of marble, mahogany, and gilt. The owners advertised it as "absolutely fireproof," the safest theater in America.',
        },
        {
          type: 'paragraph',
          content: 'The claim was a lie. In a rush to open for the lucrative holiday season, the owners had cut corners everywhere. There was no fire alarm. No sprinklers. The emergency vents above the stage — designed to vent smoke and flame — were nailed shut. The asbestos fire curtain wasn\'t asbestos at all; a later analysis showed it was mostly wood pulp with trace amounts of mineral fiber. It would have burned like paper.',
        },
        {
          type: 'paragraph',
          content: 'Worst of all: the exit doors opened inward, and many were locked. The owners didn\'t want gate-crashers sneaking in for free shows. They didn\'t want people in the cheap seats slipping down to the expensive ones during intermission. So they bolted the doors shut.',
        },
        {
          type: 'quote',
          content: 'The management was more concerned about someone sneaking into the theater for a free show than they were about people getting out alive.',
          attribution: 'Nat Brandt',
          role: 'Author, "Chicago Death Trap"',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'Mr. Bluebeard',
        },
        {
          type: 'paragraph',
          content: 'December 30, 1903, was a Wednesday — a school holiday during Christmas week. The Iroquois was running Mr. Bluebeard, a lavish musical comedy with hundreds of performers, elaborate sets, and the famous vaudeville star Eddie Foy in the lead role. The matinee had drawn a crowd of over 2,000, mostly women and children.',
        },
        {
          type: 'paragraph',
          content: 'The theater was packed beyond capacity. Every seat was taken. Standees lined the back walls. The audience was in a festive mood — holiday laughter, children bouncing in their seats, families celebrating the season together.',
        },
        {
          type: 'paragraph',
          content: 'At 3:15 PM, during the second act, a spark from an arc light ignited a muslin curtain near the stage. The stagehands tried to beat it out with their hands. It spread.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Fire',
        },
        {
          type: 'paragraph',
          content: 'What happened next took perhaps fifteen minutes. In that time, 602 people died.',
        },
        {
          type: 'paragraph',
          content: 'The fire jumped from the curtain to the oil-painted canvas backdrops hanging in the rafters. Within seconds, the entire fly space above the stage was ablaze. Flaming debris began falling onto the performers. The audience, which had initially stayed calm — the theater was fireproof, after all — began to panic.',
        },
        {
          type: 'paragraph',
          content: 'Eddie Foy, still in costume (he was dressed in drag for the scene), ran onstage and begged the audience to stay calm. He ordered the orchestra to keep playing. Stagehands tried to lower the fire curtain, but it snagged on a wire that carried acrobats over the stage. It came down partway, then stopped — leaving a gap at the bottom through which flames and superheated air could pour into the auditorium.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Backdraft',
          content: 'When a stagehand opened a rear door to escape, the sudden rush of air created a backdraft that turned the half-lowered curtain into a blowtorch. A jet of flame shot into the auditorium "like a horizontal blast from a huge blow torch," witnesses said. People in the first rows were incinerated in their seats.',
        },
        {
          type: 'paragraph',
          content: 'The lights went out. The theater filled with smoke and flame. And 2,000 people tried to escape through doors that opened inward, or were locked, or were hidden behind heavy curtains that the management had installed so the exits wouldn\'t spoil the décor.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Exits',
        },
        {
          type: 'paragraph',
          content: 'The worst deaths happened at the doors. People crushed forward, desperate to escape, but the doors opened inward — the pressure of the crowd made them impossible to open. Bodies piled up ten deep in the stairwells. People climbed over the dead and dying, trying to reach air.',
        },
        {
          type: 'paragraph',
          content: 'At one exit, audience members finally broke through, only to find themselves on an unfinished fire escape four stories above an alley. There was no ladder, no stairs — just a platform and a drop. Some jumped. Some were pushed by the crowd behind them. Some tried to climb down on each other\'s bodies. The alley below became known as "Death Alley." Over 150 bodies were eventually recovered there.',
        },
        {
          type: 'paragraph',
          content: 'Other exits were blocked by accordion gates — metal barriers the management had installed to keep upper-level patrons from sneaking down to better seats. The gates were locked. People died gripping the bars.',
        },
        {
          type: 'quote',
          content: 'I can close my eyes and see them now — mothers with babies in their arms, fighting to get through doors that wouldn\'t open. The screaming. The smoke. The flames coming at us. And then silence.',
          attribution: 'Survivor testimony',
          role: 'From the coroner\'s inquest, 1904',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Dead',
        },
        {
          type: 'paragraph',
          content: 'When the fire finally burned itself out, the death toll was staggering. 575 people died on the day of the fire. Another 27 died later from their injuries. The final count: 602 dead.',
        },
        {
          type: 'paragraph',
          content: 'Most of the victims were women and children. Entire families were wiped out. In some cases, everyone who could have identified the bodies was dead too. The city opened the First Regiment Armory as a morgue; for days, Chicagoans wandered between rows of shrouded forms, searching for their families.',
        },
        {
          type: 'paragraph',
          content: 'Some victims were burned beyond recognition. Others had no visible injuries at all — they\'d suffocated in the smoke, or been crushed in the stampede, or simply died of fright. Children were found still clutching their mothers\' hands.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Deadlier Than the Great Fire',
          content: 'The Great Chicago Fire of 1871 killed approximately 300 people. The Iroquois Theater fire killed 602 — twice as many. It remains the deadliest single-building fire in U.S. history, surpassed only by the September 11, 2001 attacks on the World Trade Center.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Blame',
        },
        {
          type: 'paragraph',
          content: 'A grand jury indicted the theater owners, managers, and city officials who had approved the building. The public demanded justice. Newspapers printed daily accounts of the inquest, the finger-pointing, the outrage.',
        },
        {
          type: 'paragraph',
          content: 'Nobody went to prison. The owners blamed the stagehands. The stagehands blamed the owners. The city blamed everyone and no one. After years of legal maneuvering, every charge was dropped or dismissed. The people who locked the doors, who nailed the vents shut, who installed a fire curtain made of wood pulp — all of them walked free.',
        },
        {
          type: 'paragraph',
          content: 'The building itself was repaired and reopened as the Colonial Theatre, then the Erlanger, then the Woods Theatre. Today, the site is occupied by the Oriental Theatre — part of the restored Chicago Theatre District. A small plaque on the building\'s façade is the only marker of what happened there.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Legacy',
        },
        {
          type: 'paragraph',
          content: 'The Iroquois fire did change things — just not in Chicago. Cities across America rewrote their fire codes. Theaters were required to have outward-opening doors, clearly marked exits, fire curtains that actually worked. The "panic bar" — that horizontal bar you push to open emergency exits — was invented by a hardware salesman who\'d been planning to attend Mr. Bluebeard on the day of the fire.',
        },
        {
          type: 'paragraph',
          content: 'Every time you push a crash bar to exit a building, you\'re using technology that exists because 602 people died in Chicago on December 30, 1903. Every clearly-lit EXIT sign, every fire door that opens outward, every automatic sprinkler — all of them trace back to the Iroquois.',
        },
        {
          type: 'paragraph',
          content: 'The fire saved countless lives in other cities, in other theaters, in other disasters. Just not in Chicago. In Chicago, it\'s barely remembered.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'The Great Chicago Fire has Mrs. O\'Leary\'s cow. It has a narrative — destruction and rebirth, the city that rose from the ashes. The Iroquois has no narrative, just horror. Locked doors. Fake fire curtains. Children burning in their seats on a holiday afternoon. It\'s not a story Chicago wants to tell.',
        },
        {
          type: 'paragraph',
          content: 'But 602 people died there — more than in the Great Fire, in fifteen minutes instead of two days. They deserve to be remembered. The next time you pass the Oriental Theatre on Randolph Street, look for the plaque. Take a moment. Remember what "absolutely fireproof" cost.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Finding the Site',
          content: 'The Iroquois Theater fire occurred at what is now the James M. Nederlander Theatre (formerly the Oriental Theatre), 24 W. Randolph Street in Chicago\'s Loop. A small memorial plaque is located on the building\'s exterior. "Death Alley" — the alley behind the theater where many victims fell from fire escapes — is now called Couch Place.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'On December 30, 1903, the Iroquois Theater fire killed 602 people in Chicago — more than the Great Chicago Fire. The exits were locked. The fire curtain was fake. Almost nobody remembers.',
  },
}
