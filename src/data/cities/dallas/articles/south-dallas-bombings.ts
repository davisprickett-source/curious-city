import type { Article } from '@/types/article'

export const southDallasBombings: Article = {
  slug: 'south-dallas-bombings',
  citySlug: 'dallas',
  title: 'The Bombing Campaign Dallas Forgot',
  subtitle: 'Between 1950 and 1951, at least eighteen bombs exploded in South Dallas — all targeting Black families who had moved into white neighborhoods. Not a single person was convicted. The city that called itself "too busy to hate" was busy doing something else.',
  excerpt: 'In the early 1950s, a systematic campaign of racial terror swept through South Dallas. Black families who dared to buy homes in previously white neighborhoods found dynamite on their porches, bombs in their yards, their houses destroyed while they slept. At least eighteen bombs exploded. The police did nothing — or worse. Grand juries were convened and mysteriously disbanded. No one was ever convicted. Dallas erased the whole thing from its official history.',
  author: {
    name: 'The Curious City',
    bio: 'Stories of buried history',
  },
  publishedAt: '2025-01-11T12:00:00Z',
  featuredImage: {
    src: '/dallas/articles/south-dallas-bombings.png',
    alt: 'Bomb damage to a home in South Dallas, 1951',
    credit: 'Dallas Morning News Archives',
  },
  category: 'history',
  tags: ['dallas', 'civil-rights', 'racial-violence', 'bombings', 'forgotten-history', 'south-dallas', 'segregation'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'On the night of February 8, 1950, a bomb exploded at 4500 Exline Street in South Dallas. The house belonged to a Black family who had recently moved into what had been a white neighborhood. Nobody was killed, but the message was clear: you are not welcome here. Get out, or next time will be worse.',
        },
        {
          type: 'paragraph',
          content: 'It was the first bomb. It would not be the last. Over the next two years, at least seventeen more explosions rocked South Dallas — all targeting Black families, all concentrated in neighborhoods undergoing racial transition. The bombs grew larger. The attacks grew bolder. And despite dozens of witnesses, mountains of evidence, and the obvious coordination of the attacks, not a single person was ever convicted.',
        },
        {
          type: 'paragraph',
          content: 'This is the story of Dallas\'s forgotten terror campaign — a systematic effort to maintain segregation through explosives, carried out with the apparent complicity of the police, and erased from the city\'s official history. Dallas liked to call itself "the city too busy to hate." The bombs told a different story.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Pressure',
        },
        {
          type: 'paragraph',
          content: 'After World War II, Black Dallas was growing. The war had created jobs and savings. The GI Bill gave Black veterans access to mortgages. For the first time, thousands of Black families had the money to buy homes — real homes, not the crowded, substandard housing in the historic Black neighborhoods of South Dallas.',
        },
        {
          type: 'paragraph',
          content: 'The problem was where to buy. Dallas was rigidly segregated. Black residents were confined to specific neighborhoods, their boundaries enforced by restrictive covenants, bank policies, and the unwritten rules of Jim Crow. As the Black population grew, these neighborhoods became impossibly crowded. Families doubled up. Rents soared. Something had to give.',
        },
        {
          type: 'paragraph',
          content: 'The pressure point was the edges — blocks where Black and white neighborhoods met, where racial boundaries could potentially shift. In these transitional zones, a single Black family buying a house could set off white flight, opening the neighborhood to more Black families. White residents understood this. They were determined to hold the line.',
        },
        {
          type: 'quote',
          content: 'The housing situation for Negroes in Dallas is critical. There is simply nowhere for families to go. The only option is to expand into adjacent areas, and that is where the resistance is most violent.',
          attribution: 'NAACP report',
          role: 'Dallas, 1950',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Bombings',
        },
        {
          type: 'paragraph',
          content: 'The first bomb was just the beginning. Through the spring and summer of 1950, explosions continued — at least seven that year, probably more that went unreported. The targets were always the same: Black families who had bought or rented homes in transitional neighborhoods. The method was consistent: dynamite, placed at night, often on porches or near bedrooms.',
        },
        {
          type: 'paragraph',
          content: 'The attacks escalated in 1951. By June, four Black-owned businesses had been bombed. The explosions were larger, the damage more severe. One bomb was powerful enough to destroy the front of a house entirely. Another left a crater in a yard. Miraculously, no one was killed — but it wasn\'t for lack of trying.',
        },
        {
          type: 'paragraph',
          content: 'The bombers operated with impunity. They struck at night, when families were home, often asleep. They didn\'t bother to hide their cars or their faces. Neighbors saw them. Witnesses came forward. And nothing happened. The police would take reports, promise investigations, and produce no arrests.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Toll',
          content: 'Between February 1950 and mid-1951, at least eighteen bombs exploded in South Dallas, all targeting Black families or businesses. Contemporary accounts suggest the real number may have been higher — some bombings were never reported to police, since victims knew reporting would accomplish nothing.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Cover-Up',
        },
        {
          type: 'paragraph',
          content: 'The Dallas Police Department\'s response to the bombings was, at best, negligent. At worst, it was complicit. Officers took reports but conducted no serious investigations. Witnesses were interviewed and their statements disappeared. Physical evidence — bomb fragments, tire tracks, shell casings — was collected and then lost.',
        },
        {
          type: 'paragraph',
          content: 'Grand juries were convened to investigate the bombings. One grand jury reportedly got close to indictments — then suddenly asked to be disbanded. The jurors were replaced. The investigation restarted from scratch. No indictments emerged. The pattern repeated. Every time investigators got too close, something intervened.',
        },
        {
          type: 'paragraph',
          content: 'Journalist Jim Schutze, who documented the era in his book "The Accommodation," found evidence that prominent white citizens — businessmen, civic leaders, people who served on the very grand juries investigating the crimes — were connected to the bombing campaign. The same community that publicly deplored the violence was privately enabling it.',
        },
        {
          type: 'quote',
          content: 'The bombings weren\'t random acts of violence. They were organized terrorism, carried out by respectable white citizens who believed they were defending their neighborhoods. And the city let them get away with it.',
          attribution: 'Jim Schutze',
          role: 'Author, "The Accommodation"',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Accommodation',
        },
        {
          type: 'paragraph',
          content: 'Dallas\'s response to the bombings wasn\'t prosecution — it was negotiation. In 1951, faced with ongoing violence and mounting national embarrassment, the city\'s white power structure struck a deal with Black civic leaders. The bombings would stop. In exchange, Black expansion would be contained to certain designated areas. Integration would proceed slowly, on white terms, in ways that preserved the fundamental structure of segregation.',
        },
        {
          type: 'paragraph',
          content: 'This was "the accommodation" that gave Schutze\'s book its title. Dallas would maintain its image as a progressive Southern city — "too busy to hate" — while actually perpetuating segregation through quieter means. The bombs were crude and embarrassing. Zoning, bank policies, and quiet pressure were more effective and less likely to make national news.',
        },
        {
          type: 'paragraph',
          content: 'The accommodation worked, from a certain perspective. The bombings largely stopped after 1951. Black families did gain access to some previously white neighborhoods. But the integration happened on white terms, at white pace, with white control. And the bombers — every single one of them — got away with it.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Erasure',
        },
        {
          type: 'paragraph',
          content: 'Dallas spent decades erasing the bombing campaign from its history. Official accounts of the civil rights era emphasized the city\'s peaceful integration, its business-first pragmatism, its contrast with the violent resistance of other Southern cities. The bombings didn\'t fit this narrative, so they simply weren\'t mentioned.',
        },
        {
          type: 'paragraph',
          content: 'School curricula didn\'t include them. Local histories glossed over them. The Dallas Morning News, which had covered the bombings as they happened, rarely revisited them afterward. For generations, most Dallas residents — white and Black — had no idea the campaign had ever occurred.',
        },
        {
          type: 'paragraph',
          content: 'The erasure was so complete that when Schutze published "The Accommodation" in 1986, many readers were shocked. They had grown up in Dallas, attended Dallas schools, read Dallas newspapers, and never heard of the bombings. The city that prided itself on its history had simply deleted an entire chapter.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Myth',
          content: 'Dallas cultivated an image as "the city too busy to hate" — a business-focused metropolis that avoided the racial violence of other Southern cities. The bombing campaign directly contradicts this image, which may explain why it was so thoroughly erased from official history.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Legacy',
        },
        {
          type: 'paragraph',
          content: 'The bombing campaign had consequences that outlasted the explosions. The neighborhoods targeted in 1950-51 remained segregated for decades. The fear instilled in Black families didn\'t disappear when the bombs stopped. The patterns of residential segregation established in that era — where Black families could live, where they couldn\'t — persisted into the present.',
        },
        {
          type: 'paragraph',
          content: 'South Dallas today remains predominantly Black and significantly poorer than the rest of the city. The neighborhoods that white bombers fought to "protect" eventually became Black anyway, but only after decades of disinvestment had reduced their value. The violence achieved nothing except suffering — but the suffering was real, and its effects endured.',
        },
        {
          type: 'paragraph',
          content: 'No one was ever held accountable. The bombers, whoever they were, lived out their lives as respectable Dallas citizens. Some probably served on juries, attended churches, ran businesses. They carried their secret — if it was even a secret — to their graves. The victims never got justice. Dallas never had a reckoning.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'In the early 1950s, Dallas conducted a campaign of racial terrorism against its own citizens. At least eighteen bombs exploded in South Dallas, all targeting Black families, all designed to maintain segregation through fear. The police did nothing. The courts did nothing. The city erased the whole thing from memory and went back to calling itself "too busy to hate."',
        },
        {
          type: 'paragraph',
          content: 'The bombs are forgotten now. The victims are forgotten. The perpetrators got away with it and died in their beds. But the history happened. The explosions happened. The fear happened. And somewhere in Dallas, there are families who remember — whose grandparents told them about the night the bomb went off, about the terror of living in a city that wanted them gone, about the silence that followed when they asked for justice.',
        },
        {
          type: 'paragraph',
          content: 'Dallas wasn\'t too busy to hate. It was just too good at hiding it.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Further Reading',
          content: '"The Accommodation: The Politics of Race in an American City" by Jim Schutze (1986) provides the most comprehensive account of the bombing campaign and its aftermath. The book was controversial when published and remains essential reading for understanding Dallas\'s racial history.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'Between 1950-1951, at least 18 bombs targeted Black families in Dallas. Nobody was convicted. The city erased it from history. This is the story Dallas forgot.',
  },
}
