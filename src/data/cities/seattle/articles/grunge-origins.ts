import type { Article } from '@/types/article'

export const grungeOrigins: Article = {
  slug: 'grunge-origins',
  citySlug: 'seattle',
  title: 'How Seattle Accidentally Invented Grunge and Changed Rock Forever',
  subtitle: 'In the mid-1980s, a few broke musicians in flannel started playing loud, angry music in tiny Seattle bars. By 1991, they had killed hair metal and dominated global radio. Then the city priced them out.',
  excerpt: 'Grunge wasn\'t a marketing strategy — it was what happened when punk rock collided with heavy metal in Seattle\'s cheap rent districts and dive bars. Nirvana, Pearl Jam, Soundgarden, and Alice in Chains turned a regional sound into a global phenomenon. Then Kurt Cobain died, the venues closed, and the city that created grunge became too expensive for the next generation of musicians to afford.',
  author: {
    name: 'Marcus Reid',
    bio: 'Music and nightlife historian tracking the evolution of urban entertainment districts and underground scenes.',
  },
  publishedAt: '2025-01-22T15:00:00Z',
  featuredImage: {
    src: '/seattle/articles/grunge.png',
    alt: 'Seattle grunge scene, early 1990s',
    credit: 'Sub Pop Records',
  },
  category: 'history',
  tags: ['seattle', 'music-history', 'grunge', '1990s', 'nirvana', 'sub-pop', 'counterculture'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'In September 1991, a scruffy three-piece band from Aberdeen, Washington released an album called Nevermind. The lead single was "Smells Like Teen Spirit." Within weeks, it was on MTV. Within months, it knocked Michael Jackson off the top of the Billboard charts. Hair metal died overnight. Grunge — a word nobody in Seattle actually used — became the sound of a generation.',
        },
        {
          type: 'paragraph',
          content: 'But grunge didn\'t start in 1991. It started in 1985, in dive bars with beer-soaked floors, where bands played to thirty people and got paid in drink tickets. It was the sound of cheap rent, rainy weather, and musicians who couldn\'t afford to look polished even if they wanted to. Seattle didn\'t plan to become the center of rock music. It just had space, time, and enough bored kids with guitars.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Scene Before the Scene',
        },
        {
          type: 'paragraph',
          content: 'In the early 1980s, Seattle had a punk scene, but it was small. The Metropolis, Showbox, and Gorilla Gardens hosted hardcore bands. The audience was tiny, dedicated, and uninterested in mainstream success. This was music for outcasts, played in basements and all-ages venues that smelled like sweat and stale beer.',
        },
        {
          type: 'paragraph',
          content: 'Then something shifted. Bands started mixing punk\'s speed and attitude with Black Sabbath-style heaviness. Green River, the Melvins, and Soundgarden played slower, heavier, angrier. The sound was sludgy and distorted — what one journalist would later call "grunge."',
        },
        {
          type: 'paragraph',
          content: 'The term was originally an insult. Sub Pop Records co-founder Bruce Pavitt used it in a 1987 article to describe the raw, unpolished sound coming out of Seattle. The bands hated it. But the name stuck, and eventually, it defined them.',
        },
        {
          type: 'quote',
          content: 'We never called it grunge. We called it rock. Loud, shitty rock played by people who couldn\'t really play that well but made it work anyway.',
          attribution: 'Mark Arm',
          role: 'Green River, Mudhoney',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Venues',
        },
        {
          type: 'paragraph',
          content: 'If grunge had a physical address, it was the Central Saloon in Pioneer Square. Opened in 1892, it\'s Seattle\'s oldest bar, and in the mid-1980s, it became ground zero for the emerging scene. Soundgarden, Nirvana, Alice in Chains, and Pearl Jam all played there when nobody knew who they were.',
        },
        {
          type: 'paragraph',
          content: 'The Comet Tavern on Capitol Hill was another hub — grimier, cheaper, louder. Bands set up in the corner. The stage was a plywood platform. The sound system was terrible. None of it mattered. The Comet was where you went if you wanted to see the next big thing before anyone else did.',
        },
        {
          type: 'paragraph',
          content: 'For bigger shows, there was the Moore Theatre, a 1,400-seat venue that hosted Nirvana\'s first major Seattle headlining show in 1992. The Crocodile Cafe, opened in 1991, became the professional tier — still small, still gritty, but with better sound and actual backstage areas.',
        },
        {
          type: 'paragraph',
          content: 'These venues shared one thing: cheap rent. Seattle in the 1980s was affordable. Musicians could work part-time, live in shared apartments, and still afford to tour. The economic conditions that enabled grunge were temporary. By the late 1990s, tech money had flooded the city. Rents doubled. Venues closed. The next generation of Seattle bands couldn\'t afford to struggle the way Nirvana did.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Rent Problem',
          content: 'In 1990, median rent in Seattle was $530/month. By 2000, it was $824. Today, it\'s over $2,000. The economic conditions that allowed musicians to live cheaply and focus on music no longer exist. Grunge was partly a product of affordability — and that window closed.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'Sub Pop Records',
        },
        {
          type: 'paragraph',
          content: 'Sub Pop Records didn\'t invent grunge, but it packaged and sold it. Founded in 1986 by Bruce Pavitt and Jonathan Poneman, Sub Pop was Seattle\'s first successful indie label. They signed Soundgarden, Mudhoney, and Nirvana. They marketed Seattle as a scene — a regional identity that could be sold to the world.',
        },
        {
          type: 'paragraph',
          content: 'Sub Pop\'s strategy was brilliant: make Seattle sound dangerous and authentic. They sent journalists to Seattle, gave them a tour of the grittiest venues, and positioned the city as the anti-Los Angeles — no glam, no posturing, just real musicians playing real music. It worked.',
        },
        {
          type: 'paragraph',
          content: 'The label\'s aesthetic became grunge\'s aesthetic: low-budget album art, grainy photos, flannel and torn jeans. It wasn\'t a costume — most Seattle musicians actually dressed that way because they were broke. But Sub Pop turned necessity into branding.',
        },
        {
          type: 'paragraph',
          content: 'Nirvana signed with Sub Pop in 1988 and released Bleach in 1989 for $606.17. The album sold 40,000 copies — huge for an indie release. Then, in 1990, Nirvana left Sub Pop for DGC Records, a major label. Sub Pop was furious. But the move proved grunge could go mainstream.',
        },
        {
          type: 'quote',
          content: 'Sub Pop created the myth of Seattle. But Nirvana made it real.',
          attribution: 'Charles R. Cross',
          role: 'Author, "Heavier Than Heaven"',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'Nevermind',
        },
        {
          type: 'paragraph',
          content: 'On September 24, 1991, Nirvana released Nevermind on DGC Records. The label expected it to sell maybe 250,000 copies. It sold 300,000 in the first week. By January 1992, it had knocked Michael Jackson\'s Dangerous off the top of the Billboard 200. Grunge had gone from Seattle dive bars to global domination in six years.',
        },
        {
          type: 'paragraph',
          content: 'The album\'s success was a shock — even to Nirvana. Kurt Cobain had written "Smells Like Teen Spirit" as a Pixies-influenced punk song. MTV put it into heavy rotation. Suddenly, teenagers everywhere were moshing in flannel shirts and ripped jeans. Grunge became a fashion trend, a marketing category, a cultural moment.',
        },
        {
          type: 'paragraph',
          content: 'Other Seattle bands followed. Pearl Jam\'s Ten (1991) sold over 13 million copies. Soundgarden\'s Badmotorfinger (1991) went platinum. Alice in Chains\' Dirt (1992) reached number six on the Billboard 200. Major labels descended on Seattle, signing every band they could find. Some were good. Most weren\'t. The scene was being strip-mined.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Big Four',
          content: 'Nirvana, Pearl Jam, Soundgarden, and Alice in Chains are considered grunge\'s "Big Four." Together, they sold over 85 million albums. All four bands formed in Seattle or the surrounding area between 1987 and 1990. All four had members who played in earlier Seattle punk and metal bands.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Backlash',
        },
        {
          type: 'paragraph',
          content: 'By 1992, grunge was everywhere. Vogue ran a fashion spread on "grunge style." Marc Jacobs sent $1,200 flannel shirts down the runway. Bands that sounded nothing like Nirvana were marketed as grunge. The word lost all meaning.',
        },
        {
          type: 'paragraph',
          content: 'Seattle musicians were disgusted. They hadn\'t created grunge to become a trend. They\'d played raw, angry music because that\'s what they felt. Watching it get commodified — turned into a costume and a marketing gimmick — felt like a betrayal.',
        },
        {
          type: 'paragraph',
          content: 'Kurt Cobain struggled with the contradiction. He wanted Nirvana to succeed, but he hated being famous. He was uncomfortable being the voice of a generation. He was addicted to heroin. He was depressed. And on April 5, 1994, he died by suicide in his Seattle home. He was 27 years old.',
        },
        {
          type: 'paragraph',
          content: 'Cobain\'s death didn\'t kill grunge — the genre was already dying. By 1995, pop-punk and nu-metal were replacing it. But Cobain\'s death symbolized the end. The band that had defined the movement was gone. The scene that birthed it was being priced out. Grunge\'s moment was over.',
        },
        {
          type: 'quote',
          content: 'Kurt didn\'t want to be a spokesperson. He just wanted to play music. But the world needed him to be something bigger, and he couldn\'t handle it.',
          attribution: 'Krist Novoselic',
          role: 'Nirvana bassist',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Aftermath',
        },
        {
          type: 'paragraph',
          content: 'Grunge\'s commercial peak lasted about four years — 1991 to 1995. By the late 1990s, the surviving bands had either broken up or evolved. Pearl Jam kept touring but retreated from the spotlight. Soundgarden disbanded in 1997 (they reunited in 2010). Alice in Chains went on hiatus after Layne Staley\'s death in 2002.',
        },
        {
          type: 'paragraph',
          content: 'The venues that birthed grunge mostly survived, but the scene didn\'t. The Central Saloon is still open, but it doesn\'t host the kind of scrappy unknown bands it once did. The Comet Tavern closed in 2020. The Crocodile closed in 2007, reopened in 2009 under new ownership, and now functions as a mid-tier venue for touring acts.',
        },
        {
          type: 'paragraph',
          content: 'What killed the scene wasn\'t a lack of talent. It was economics. Seattle became expensive. Amazon, Microsoft, and the tech industry flooded the city with high-paid workers. Rents skyrocketed. Struggling musicians couldn\'t afford to live in the neighborhoods where grunge was born. The next generation of Seattle bands moved to Tacoma, Olympia, or Portland — or gave up entirely.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Gentrification Cycle',
          content: 'Artists move to cheap neighborhoods. They create culture. The culture attracts wealthier residents. Rents rise. Artists get priced out. The cycle repeats. Grunge emerged in Seattle when Capitol Hill, Belltown, and Pioneer Square were affordable. Those neighborhoods are now among the most expensive in the city.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'What Grunge Left Behind',
        },
        {
          type: 'paragraph',
          content: 'Grunge killed hair metal. That\'s the obvious legacy — Mötley Crüe and Poison were over the moment Nirvana hit MTV. But grunge also changed what mainstream rock could sound like. After Nevermind, you didn\'t need to be polished. You didn\'t need expensive production. You could be raw, angry, and real. That permission mattered.',
        },
        {
          type: 'paragraph',
          content: 'Grunge also proved that regional scenes could go global. Before Seattle, most successful rock bands moved to Los Angeles or New York. After Seattle, bands stayed local and built national careers. Portland, Austin, and Detroit all followed Seattle\'s model: develop a distinctive local sound, attract media attention, export it.',
        },
        {
          type: 'paragraph',
          content: 'But the most important legacy might be the least celebrated: grunge showed that working-class kids could make art that mattered. Nirvana\'s members weren\'t rich. They weren\'t connected. They played music because it was the only thing they knew how to do. And for a brief window, that was enough.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'Walk through Seattle today and you\'ll see plenty of grunge nostalgia. The Museum of Pop Culture has a Nirvana exhibit. Tourist shops sell "Seattle: Home of Grunge" T-shirts. You can take a grunge tour of the city, visiting the locations where Kurt Cobain lived, where Soundgarden recorded, where Pearl Jam first played.',
        },
        {
          type: 'paragraph',
          content: 'But the economic conditions that created grunge are gone. The cheap rent, the divey venues, the sense that you could fail for years and still afford to keep trying — all of it vanished. Grunge was born in a Seattle that no longer exists. What remains is the music, the myth, and the question of whether a scene like that could ever happen again.',
        },
        {
          type: 'paragraph',
          content: 'Probably not in Seattle. The next grunge will come from wherever rent is cheap, jobs are scarce, and bored kids have guitars. That\'s the formula. The city just got too expensive to repeat it.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Visiting Grunge History',
          content: 'The Central Saloon (207 1st Ave S) still hosts live music. The Museum of Pop Culture has extensive grunge exhibits. Viretta Park, near Kurt Cobain\'s former home, has a memorial bench where fans leave tributes. Sub Pop\'s store (2013 4th Ave) sells music and memorabilia.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'Grunge emerged from Seattle\'s dive bars in the 1980s, dominated global rock in the early 1990s, then faded as the city became too expensive for struggling musicians. Here\'s how it happened.',
  },
}
