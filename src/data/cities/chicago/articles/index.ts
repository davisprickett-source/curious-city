import type { Article } from '@/types/article'

export const eastlandDisaster: Article = {
  slug: 'eastland-disaster',
  citySlug: 'chicago',
  title: 'The Eastland Disaster: Chicago\'s Forgotten Titanic',
  subtitle: 'In 1915, a ship rolled over while still tied to the dock. 844 people died twenty feet from shore. Almost nobody remembers.',
  excerpt: 'On July 24, 1915, the SS Eastland capsized in the Chicago River while passengers were still boarding for a company picnic. 844 people died — more than the Titanic\'s American death toll. The ship never left the wharf. It remains the deadliest single-vessel disaster in Great Lakes history, and somehow, it\'s been almost completely forgotten.',
  author: {
    name: 'The Curious City',
    bio: 'Uncovering forgotten history',
  },
  publishedAt: '2025-01-09T12:00:00Z',
  featuredImage: {
    src: '/chicago/articles/eastland-disaster.png',
    alt: 'The SS Eastland capsized in the Chicago River, 1915',
    credit: 'Chicago History Museum',
  },
  category: 'history',
  tags: ['chicago-history', 'disaster', 'forgotten-history', 'great-lakes', '1915', 'tragedy'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'Everyone knows the Titanic. The iceberg. The lifeboats. The band playing as the ship went down. Ask anyone to name a maritime disaster and they\'ll say "Titanic" before you finish the question.',
        },
        {
          type: 'paragraph',
          content: 'But on July 24, 1915 — three years after the Titanic sank — a ship called the SS Eastland rolled over in the Chicago River and killed 844 people. More Americans died on the Eastland than on the Titanic. The passengers weren\'t aristocrats in evening wear; they were factory workers and their families, dressed in their Sunday best, headed to a company picnic. The ship wasn\'t in the middle of the Atlantic. It was twenty feet from the dock, in twenty feet of water, in the middle of Chicago.',
        },
        {
          type: 'paragraph',
          content: 'And almost nobody has heard of it.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Company Picnic',
        },
        {
          type: 'paragraph',
          content: 'Western Electric\'s Hawthorne Works was one of Chicago\'s largest employers, with over 40,000 workers producing telephone equipment in a massive complex in Cicero. Every summer, the company organized an employee picnic across Lake Michigan in Michigan City, Indiana. In 1915, approximately 7,000 employees and their families signed up — enough to charter five steamships.',
        },
        {
          type: 'paragraph',
          content: 'The SS Eastland was the first ship scheduled to depart. She was a passenger steamer, 275 feet long, designed to carry 2,500 people on Lake Michigan excursions. The Eastland had a reputation: she was fast, sleek, and notoriously top-heavy. Sailors called her "tender" — prone to listing dangerously even in calm water. She\'d had stability problems for years. Modifications kept being made. Warnings kept being ignored.',
        },
        {
          type: 'quote',
          content: 'The Eastland was known to be unstable. Everyone in Great Lakes shipping knew it. They sailed her anyway.',
          attribution: 'George Hilton',
          role: 'Maritime historian',
        },
        {
          type: 'paragraph',
          content: 'That morning, passengers began boarding at 6:30 AM. Families streamed up the gangways in their best clothes — men in straw boaters, women in long summer dresses, children in sailor suits. A small orchestra played on the main deck. People jostled for good spots along the rails. It was going to be a perfect day.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The List',
        },
        {
          type: 'paragraph',
          content: 'At 7:10 AM, with approximately 2,500 passengers aboard, the Eastland began to list to port — toward the river side. This was not unusual; the ship often listed as passengers moved around. Crew members opened the ballast tanks to compensate. The ship righted herself.',
        },
        {
          type: 'paragraph',
          content: 'Then she listed again, this time to starboard, toward the dock. Water sloshed in the ballast tanks. Passengers on deck laughed nervously as they stumbled. Someone made a joke about the boat rocking. On shore, spectators watched with mild concern.',
        },
        {
          type: 'paragraph',
          content: 'At 7:28 AM, the Eastland began listing to port again. This time she didn\'t stop. In a matter of seconds, the list became a roll. Passengers screamed. Objects began sliding across decks. People fell. And then, with a sound witnesses described as a roar, the SS Eastland rolled completely onto her side in the Chicago River.',
        },
        {
          type: 'paragraph',
          content: 'The entire catastrophe took less than two minutes.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Timeline',
          content: 'At 7:28 AM, the Eastland was upright. By 7:30 AM, she was lying on her side with 844 people trapped beneath the waterline. The ship never moved from the dock. Passengers on the upper decks fell into the river. Passengers between decks drowned in darkness.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'Twenty Feet From Shore',
        },
        {
          type: 'paragraph',
          content: 'What made the Eastland disaster so grotesque was its proximity to safety. The ship lay in twenty feet of water, with her starboard side rising above the surface like a beached whale. Rescue workers stood on the exposed hull. Spectators watched from the dock, close enough to hear the screaming.',
        },
        {
          type: 'paragraph',
          content: 'Below, in the flooded compartments between decks, people were drowning in pitch darkness. Families who had boarded together died together, pressed against sealed doors and portholes. The water was oily and black with coal dust. Furniture and debris churned in the flooded spaces. Some people survived by finding air pockets. Most didn\'t.',
        },
        {
          type: 'paragraph',
          content: 'Rescue crews cut holes in the hull with acetylene torches, pulling survivors out one by one. The sounds of tapping — passengers signaling for help — echoed through the steel plates. Then, gradually, the tapping stopped.',
        },
        {
          type: 'quote',
          content: 'I can still hear the screaming. Women. Children. Men calling for their families. And I was standing right there on the dock. There was nothing I could do. Nothing anyone could do.',
          attribution: 'Witness account',
          role: 'From Chicago Tribune, July 25, 1915',
        },
        {
          type: 'paragraph',
          content: 'Bodies were carried to a makeshift morgue in the nearby 2nd Regiment Armory — the same building that is now Harpo Studios, where Oprah Winfrey filmed her show for 25 years. Row after row of covered forms on the wooden floor. Families wandering between them, looking for their dead.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Victims',
        },
        {
          type: 'paragraph',
          content: 'The 844 dead were mostly working-class Chicagoans — Czech, Polish, German, and Scandinavian immigrants who worked in Western Electric\'s factories. Entire families were wiped out. In some cases, nobody was left to identify the bodies.',
        },
        {
          type: 'paragraph',
          content: 'Twenty-two families lost three or more members. The Sindelar family lost six. Whole neighborhoods on Chicago\'s West Side were devastated. Churches held mass funerals. Some coffins were so small they barely reached the carriers\' waists.',
        },
        {
          type: 'paragraph',
          content: 'The youngest victim was three months old. The oldest was seventy. Many of the dead were children — the company picnic was a family event, and parents had brought everyone.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'By the Numbers',
          content: '844 people died on the Eastland. By comparison, approximately 829 passengers died on the Titanic (though accounts vary). The Eastland killed more people in two minutes than the Titanic killed in two hours.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Trials',
        },
        {
          type: 'paragraph',
          content: 'Nobody was ever held responsible. The Eastland\'s captain, Harry Pedersen, was indicted for manslaughter but acquitted. The ship\'s owners blamed passengers for moving to one side of the deck. Engineers blamed faulty ballast tanks. The company that chartered the ship blamed the ship. Everyone pointed fingers. Nobody went to prison.',
        },
        {
          type: 'paragraph',
          content: 'In a cruel irony, the Seamen\'s Act of 1915 — passed after the Titanic disaster to require more lifeboats on passenger vessels — may have contributed to the Eastland\'s instability. Additional lifeboats and rafts added to the ship\'s already top-heavy design made her even more prone to capsizing. Good intentions, lethal consequences.',
        },
        {
          type: 'paragraph',
          content: 'The SS Eastland was eventually righted, refurbished, and rechristened as a naval training ship called the USS Wilmette. She served the Navy for decades before being scrapped in 1947. The ship that killed 844 people got a second life. The dead stayed dead.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Forgetting',
        },
        {
          type: 'paragraph',
          content: 'So why doesn\'t anyone remember the Eastland? It killed more Americans than the Titanic. It happened in one of America\'s largest cities, in broad daylight, with thousands of witnesses. It should be infamous.',
        },
        {
          type: 'paragraph',
          content: 'Part of it is timing. The Eastland sank in 1915, with World War I raging in Europe and America debating entry into the conflict. Within two years, American boys were dying in the trenches. A riverboat disaster in Chicago faded against the backdrop of global catastrophe.',
        },
        {
          type: 'paragraph',
          content: 'Part of it is class. The Titanic\'s victims included millionaires — Astors, Guggenheims, names that still ring. The Eastland\'s victims were factory workers, immigrants, people whose names meant nothing outside their neighborhoods. Their deaths mattered less to the newspapers that shape history.',
        },
        {
          type: 'quote',
          content: 'The Titanic was a tragedy for the wealthy. The Eastland was a tragedy for the working class. History remembers who writes it.',
          attribution: 'Jay Bonansinga',
          role: 'Author, "The Sinking of the Eastland"',
        },
        {
          type: 'paragraph',
          content: 'And part of it is narrative. The Titanic has a story: hubris, iceberg, heroism, the band playing on. The Eastland has no villain except bad engineering. No romance. No Jack and Rose. Just people boarding a boat for a picnic and drowning before they left the dock.',
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
          content: 'Today, a small plaque marks the site on the Chicago River between Clark and LaSalle Streets. It was installed in 1989 — seventy-four years after the disaster. Most Chicagoans walk past without noticing. Tour boats cruise the river, their guides pointing out architecture. The Eastland usually isn\'t mentioned.',
        },
        {
          type: 'paragraph',
          content: 'There is no museum. No major memorial. No annual remembrance that makes the evening news. The descendants of victims have organized commemorations, but the city itself has never quite known what to do with this tragedy. It doesn\'t fit the Chicago narrative of resilience and reinvention. It\'s just sad.',
        },
        {
          type: 'paragraph',
          content: 'In 2015, on the 100th anniversary, the city finally dedicated an official memorial: a small garden along the Riverwalk, with names inscribed on the railing. It\'s easy to miss. People do.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'The Eastland teaches an uncomfortable lesson: that tragedy isn\'t equally remembered. That who dies matters as much as how many. That a factory worker drowning twenty feet from shore doesn\'t make the history books the way a millionaire drowning in the North Atlantic does.',
        },
        {
          type: 'paragraph',
          content: 'But the names are still there, on the railing by the river. 844 people who woke up on a summer morning, put on their best clothes, and went to a company picnic. They deserved better than this. They deserve to be remembered.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Finding the Memorial',
          content: 'The Eastland Disaster Memorial is located along the Chicago Riverwalk between Clark and LaSalle Streets, near the site where the ship capsized. Look for the railing inscribed with victims\' names. Take a moment.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'In 1915, the SS Eastland capsized in the Chicago River, killing 844 people. More died than on the Titanic. The ship never left the dock. Here\'s the forgotten story.',
  },
}

export const articles: Article[] = [eastlandDisaster]
