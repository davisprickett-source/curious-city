import type { Article } from '@/types/article'

export const japanBalloonBombs: Article = {
  slug: 'japan-balloon-bombs-utah',
  citySlug: 'salt-lake-city',
  title: 'The Day Japanese Bombs Floated Over Utah',
  subtitle: 'In 1945, a Utah sheriff grabbed a Japanese weapon of war with his bare hands. The government swore him to silence for decades.',
  excerpt: 'During World War II, Japan launched 9,300 balloon bombs across the Pacific. At least one landed in Utah\'s Box Elder County, where a sheriff grabbed it by hand and held on for 45 minutes. The story was classified for decades.',
  author: {
    name: 'The Curious City',
    bio: 'Uncovering forgotten history',
  },
  publishedAt: '2025-01-08T12:00:00Z',
  featuredImage: {
    src: '/Salt-Lake-City/articles/balloon-bomb.png',
    alt: 'Japanese Fu-Go balloon bomb during WWII',
    credit: 'National Archives',
  },
  category: 'history',
  tags: ['wwii', 'utah-history', 'military', 'box-elder-county', 'secrets', 'japan'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'On a winter day in early 1945, rancher Floyd Stohl was checking his property in Blue Creek Valley, about 80 miles north of Salt Lake City, when he saw something impossible: a massive balloon, roughly 33 feet in diameter, drifting silently across the Utah sky.',
        },
        {
          type: 'paragraph',
          content: 'Stohl rode to town and returned with Box Elder County Sheriff Warren Hyde. What they found on the ground would turn out to be one of the most audacious weapons programs of World War II—and Hyde\'s actions that day would remain classified for decades.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'Operation Fu-Go: Death by Jet Stream',
        },
        {
          type: 'paragraph',
          content: 'The balloon was a Fu-Go—short for "fusen bakudan" (balloon bomb)—one of approximately 9,300 launched by Japan between November 1944 and April 1945. The concept was deceptively simple: use the newly discovered jet stream, a river of wind flowing west to east at high altitude, to carry weapons across the Pacific Ocean.',
        },
        {
          type: 'paragraph',
          content: 'Each balloon was made of washi paper, crafted from mulberry bark by Japanese schoolgirls who had no idea what they were building. They carried incendiary devices and anti-personnel bombs, designed to set American forests ablaze and terrorize the population. The balloons were engineered to maintain altitude automatically: when they dropped too low, sandbags would release; when they rose too high, hydrogen would vent.',
        },
        {
          type: 'quote',
          content: 'The balloon bomb was the first intercontinental weapon system ever deployed. Japan was trying to accomplish in 1944 what would later require ICBMs.',
          attribution: 'Military historian',
        },
        {
          type: 'paragraph',
          content: 'The journey took three to five days. Most fell into the Pacific or landed in empty wilderness. But roughly 300 reached North American soil, scattered from Alaska to Mexico, from Hawaii to Michigan. At least one landed in Utah.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'A Sheriff\'s Bare-Handed Bravery',
        },
        {
          type: 'paragraph',
          content: 'When Sheriff Hyde approached the downed balloon in Blue Creek Valley, he didn\'t know what he was dealing with. The object was enormous, with sandbags and strange metal components hanging beneath the deflating envelope. Rather than wait for experts, Hyde did what seemed logical: he grabbed hold of it.',
        },
        {
          type: 'paragraph',
          content: 'For approximately 45 minutes, while Stohl rode back to summon help, Sheriff Hyde held onto the balloon in the freezing wind. His hands went raw from the cold and the rope. He had no way of knowing that similar devices had been designed to explode.',
        },
        {
          type: 'paragraph',
          content: 'FBI agents arrived from Salt Lake City and took custody of the balloon. They collected everything—including the sandbags. Those sandbags would prove crucial: analysis of the sand, conducted by geologists at the U.S. Geological Survey, helped identify the beaches in Japan where the balloons were being launched. That intelligence led to bombing raids that destroyed two of the three hydrogen plants fueling the program.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Sand That Changed the War',
          content: 'Geologists analyzed minerals in the ballast sand and matched them to specific beaches on Honshu\'s Pacific coast. Within months, American bombers destroyed the facilities, effectively ending the balloon bomb program.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Blackout That Cost Lives',
        },
        {
          type: 'paragraph',
          content: 'Sheriff Hyde was sworn to secrecy. So was everyone else who encountered a balloon. The U.S. government imposed a complete media blackout on the Fu-Go program, fearing that reports of successful attacks would encourage Japan to increase production. Newspapers were forbidden from printing any mention of the balloons.',
        },
        {
          type: 'paragraph',
          content: 'The silence worked—Japan never learned that any balloons reached America and eventually abandoned the program. But the blackout had a tragic cost.',
        },
        {
          type: 'paragraph',
          content: 'On May 5, 1945, Elsie Mitchell, a pregnant Sunday school teacher, took five children on a picnic near Bly, Oregon. They found a balloon tangled in the trees. When they tried to move it, the bomb detonated. All six died—the only deaths from enemy action on the U.S. mainland during World War II.',
        },
        {
          type: 'quote',
          content: 'If people had been warned about what to look for—if the blackout hadn\'t been total—those six people might have walked away instead of pulling on a strange device in the woods.',
          attribution: 'Historian',
        },
        {
          type: 'paragraph',
          content: 'The Mitchell Monument in Oregon marks the site today, a reminder of the price of secrets.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'Echoes in 2023',
        },
        {
          type: 'paragraph',
          content: 'In February 2023, Americans watched as a Chinese surveillance balloon drifted across the continental United States, from Alaska to South Carolina, where it was finally shot down by an F-22. The incident sparked diplomatic crisis and endless cable news coverage.',
        },
        {
          type: 'paragraph',
          content: 'For those who knew the history, there was a sense of déjà vu. Eighty years earlier, balloons had crossed the same skies—not for surveillance, but for destruction. The jet stream that carried China\'s spy balloon was the same current that delivered Japan\'s fire balloons.',
        },
        {
          type: 'paragraph',
          content: 'The difference was transparency. In 1945, the government chose silence. In 2023, everyone with a smartphone could track the balloon\'s path in real time.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'What Remains',
        },
        {
          type: 'paragraph',
          content: 'Sheriff Warren Hyde never talked publicly about what he\'d done. The story emerged only after classification expired, pieced together from military records and local historians. Hyde had performed an act of strange, improvised heroism—holding onto an enemy weapon for 45 minutes in the Utah winter—and been told to forget about it.',
        },
        {
          type: 'paragraph',
          content: 'The Blue Creek Valley is still remote, still empty. No marker commemorates the landing site. Most Utahns have never heard the story. But for a few months in 1945, Japanese weapons floated silently over the American West, and a county sheriff with frozen hands helped end the threat by simply refusing to let go.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Want to Learn More?',
          content: 'The Smithsonian National Air and Space Museum has a restored Fu-Go balloon on display. Several partially intact balloons have been found in remote areas of the American West as recently as 2014.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'The balloon bomb program remains one of the war\'s strangest chapters—a weapon that crossed an ocean on the wind, built by schoolgirls who couldn\'t know its purpose, stopped by geologists studying sand. And in Utah\'s Box Elder County, an ordinary sheriff who grabbed the future with his bare hands and held on.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'In 1945, Japanese balloon bombs reached Utah. A sheriff grabbed one with bare hands and held on for 45 minutes. The story was classified for decades.',
  },
}

export const articles: Article[] = [japanBalloonBombs]
export default articles
