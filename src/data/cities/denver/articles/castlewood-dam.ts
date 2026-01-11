import type { Article } from '@/types/article'

export const castlewoodDam: Article = {
  slug: 'castlewood-dam',
  citySlug: 'denver',
  title: 'The Night the Dam Broke',
  subtitle: 'For 43 years, the Castlewood Dam leaked. Engineers warned it would fail. Nobody fixed it. Then, at 1:20 AM on August 3, 1933, an eleven-foot wall of water roared toward Denver. The ruins still stand in the canyon — a monument to ignored warnings.',
  excerpt: 'The Castlewood Dam was cracked from the day it was built in 1890. Water seeped through the structure. Engineers issued warnings. Nobody did anything. Then, during a thunderstorm in 1933, the dam finally gave way. An eleven-foot wall of water raced down Cherry Creek toward Denver at 18 miles per hour. Two people died. The damage, in the depths of the Depression, was catastrophic. Today, the ruins stand in a state park, a reminder of what happens when warnings are ignored.',
  author: {
    name: 'The Curious City',
    bio: 'Stories of infrastructure failure',
  },
  publishedAt: '2025-01-11T12:00:00Z',
  featuredImage: {
    src: '/denver/articles/castlewood-dam.png',
    alt: 'The ruins of Castlewood Dam after the 1933 collapse',
    credit: 'Denver Public Library Western History Collection',
  },
  category: 'history',
  tags: ['denver', 'dam', 'disaster', 'infrastructure', 'forgotten-history', 'flood', 'engineering'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'At 1:20 in the morning on August 3, 1933, farmer Frank Brantner heard a sound like continuous thunder coming from the canyon above his property. He ran outside and saw, in the darkness, something impossible: a wall of water, eleven feet high, roaring down Cherry Creek toward Denver. The Castlewood Dam had finally failed.',
        },
        {
          type: 'paragraph',
          content: 'For forty-three years, the dam had been slowly dying. Water seeped through cracks in the structure. Engineers warned it would collapse. Inspectors documented the deterioration. Nobody fixed it. The dam just sat there, holding back a reservoir of water twenty miles upstream from Denver, waiting for the storm that would finally break it.',
        },
        {
          type: 'paragraph',
          content: 'When that storm came, the wall of water swept through the creek valley at eighteen miles per hour, destroying everything in its path. Two people died. Thousands lost their homes. The damage, during the worst of the Great Depression, was nearly $1 million — a crushing blow to a city already struggling to survive.',
        },
        {
          type: 'paragraph',
          content: 'The ruins of Castlewood Dam still stand in a state park today. Hikers walk past them without knowing the story. It\'s a monument to ignored warnings — and to the disaster that finally made Denver take flood control seriously.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Dam',
        },
        {
          type: 'paragraph',
          content: 'Castlewood Dam was built in 1890 to supply water to the agricultural communities along Cherry Creek southeast of Denver. It was an ambitious project for its time: a stone masonry dam 630 feet long and 70 feet high, creating a reservoir capable of holding 3,430 acre-feet of water. The dam was supposed to transform the dry prairie into productive farmland.',
        },
        {
          type: 'paragraph',
          content: 'The problems started almost immediately. The dam was built on porous rock, and water began seeping through the foundation as soon as the reservoir filled. Cracks appeared in the masonry. The structure settled unevenly. Within a decade of construction, engineers were warning that the dam was unstable.',
        },
        {
          type: 'paragraph',
          content: 'Over the next forty years, the warnings multiplied. State inspectors documented deterioration. Water flowed through cracks that should have been sealed. The dam\'s spillway was inadequate for large storms. Report after report recommended repairs that were never made. The dam\'s owners — a succession of irrigation companies, many of them underfunded — lacked the resources or will to fix it.',
        },
        {
          type: 'quote',
          content: 'The dam is in poor condition and constitutes a menace to life and property downstream. Immediate repairs are necessary to prevent catastrophic failure.',
          attribution: 'State engineer\'s report',
          role: '1925',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Storm',
        },
        {
          type: 'paragraph',
          content: 'August 2, 1933, was hot and dry — typical summer weather for the Front Range. That afternoon, thunderstorms began building over the mountains west of Denver. By evening, the storms had organized into a massive system moving east along Cherry Creek\'s drainage basin.',
        },
        {
          type: 'paragraph',
          content: 'The rain was extraordinary. In the hills above Castlewood Dam, over four inches fell in just a few hours. Water poured into the reservoir faster than the dam\'s inadequate spillway could release it. By midnight, the reservoir was at capacity. By 1:00 AM, water was flowing over the top of the dam itself.',
        },
        {
          type: 'paragraph',
          content: 'At 1:20 AM, the dam gave way. The failure was catastrophic and complete. A section of the dam simply collapsed, releasing the entire reservoir in minutes. An estimated 400 million gallons of water poured through the breach, picking up speed as it funneled into the narrow Cherry Creek canyon.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Wall of Water',
          content: 'The flood wave reached eleven feet in height and traveled at eighteen miles per hour. It covered the twenty miles to Denver in about an hour. Residents downstream had no warning — no sirens, no alerts, no telephone calls. The first indication that something was wrong was the sound of the water itself.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Flood',
        },
        {
          type: 'paragraph',
          content: 'The wall of water tore through the Cherry Creek valley, destroying everything in its path. Farms were washed away. Houses were swept off their foundations. Bridges collapsed. Roads became rivers. The flood picked up debris as it moved — trees, fences, buildings, vehicles — becoming a churning mass of water and wreckage.',
        },
        {
          type: 'paragraph',
          content: 'Frank Brantner, the farmer who heard the flood coming, barely escaped with his family. They ran to high ground as the water swept through their property, destroying their home and everything they owned. Other families weren\'t as lucky. Two people drowned that night — a remarkably low death toll given the scale of the disaster, attributable mostly to the early hour and the rural nature of the land immediately below the dam.',
        },
        {
          type: 'paragraph',
          content: 'By dawn, the flood had reached Denver. The water spread across the lowlands around Cherry Creek, inundating neighborhoods, flooding businesses, and causing millions of dollars in damage. The city\'s storm drains couldn\'t handle the volume. Streets became canals. The destruction continued for miles downstream.',
        },
        {
          type: 'paragraph',
          content: 'When the water finally receded, the scope of the disaster became clear. Over 1,000 people were homeless. Dozens of buildings had been destroyed. The damage was estimated at nearly $1 million — a staggering sum in 1933, when the average annual income was under $2,000 and the country was in the depths of the Depression.',
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
          content: 'The Castlewood Dam failure forced Denver to confront a problem it had ignored for decades: the city was vulnerable to flooding, and its infrastructure wasn\'t adequate to protect it. Cherry Creek, which flowed directly through downtown Denver, was a disaster waiting to happen.',
        },
        {
          type: 'paragraph',
          content: 'The federal government, through New Deal programs, eventually funded a solution. Cherry Creek Dam, completed in 1950, was built specifically to protect Denver from the kind of catastrophic flooding that Castlewood had unleashed. The new dam was designed to modern standards, with adequate spillways and proper engineering oversight.',
        },
        {
          type: 'paragraph',
          content: 'The ruins of Castlewood Dam were left in place — a reminder of what happens when warnings are ignored. The canyon around the dam became Castlewood Canyon State Park in 1964. Hikers can still walk among the ruins, examining the crumbling masonry, imagining the wall of water that burst through on that August night.',
        },
        {
          type: 'quote',
          content: 'The dam stood for forty years as a monument to neglect. Every engineer who looked at it knew what would happen. It was just a matter of time.',
          attribution: 'Dam safety historian',
          role: 'Colorado State Archives',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Lessons',
        },
        {
          type: 'paragraph',
          content: 'The Castlewood Dam failure became a case study in infrastructure neglect. Everything about the disaster was predictable. The dam was built on unsuitable geology. It showed signs of distress almost immediately. Experts warned of failure for decades. The warnings were documented, filed, and ignored.',
        },
        {
          type: 'paragraph',
          content: 'The reasons for the neglect were mundane: money and politics. Repairing the dam would have been expensive, and the irrigation companies that owned it were perpetually underfunded. State regulators had authority to order repairs but lacked the political will to enforce their decisions. Everyone assumed someone else would solve the problem.',
        },
        {
          type: 'paragraph',
          content: 'The Castlewood failure helped inspire the dam safety movement in the United States. It demonstrated that dams require ongoing inspection and maintenance, that private ownership doesn\'t guarantee responsible stewardship, and that the consequences of failure extend far beyond the dam\'s immediate owners. These lessons seem obvious now. They weren\'t in 1933.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Dam Safety Today',
          content: 'Colorado now has over 2,000 regulated dams, overseen by the State Engineer\'s Office. After the Castlewood failure and similar disasters nationwide, the federal government established dam safety programs and inspection requirements. The goal is to prevent the kind of predictable, preventable failure that destroyed Castlewood.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Ruins',
        },
        {
          type: 'paragraph',
          content: 'Visit Castlewood Canyon State Park today and you\'ll find one of the most dramatic dam failure sites in the country. The ruins are substantial — massive stone walls rising from the canyon floor, with a gaping breach in the center where the dam gave way. You can see the spillway, inadequate even now. You can see the cracks that engineers warned about for decades.',
        },
        {
          type: 'paragraph',
          content: 'The park is popular with hikers and rock climbers who may not know the history. The interpretive signs explain what happened, but many visitors just see scenic canyon walls and picturesque ruins. The violence of the flood — the wall of water, the destroyed homes, the two dead — is hard to imagine on a sunny afternoon.',
        },
        {
          type: 'paragraph',
          content: 'But the ruins remember. They stand as a monument to forty years of warnings ignored, inspections filed, recommendations rejected. Everything that happened on August 3, 1933, was predicted. Everyone knew the dam would fail. And nobody did anything about it until it was too late.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'The Castlewood Dam failure was a disaster that didn\'t have to happen. For over four decades, engineers warned that the dam was dangerous. Their reports were clear, their language urgent, their predictions accurate. The dam failed exactly as they said it would, killing two people and causing catastrophic damage to a city already devastated by the Depression.',
        },
        {
          type: 'paragraph',
          content: 'Today, the ruins stand in the canyon, slowly crumbling, surrounded by hikers who may not know what they\'re looking at. It\'s a monument to infrastructure neglect — to the gap between knowing something is dangerous and actually doing something about it. The engineers knew. The inspectors knew. Everyone knew.',
        },
        {
          type: 'paragraph',
          content: 'And on August 3, 1933, at 1:20 in the morning, the dam finally proved them right.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Visiting the Ruins',
          content: 'Castlewood Canyon State Park is located about 30 miles southeast of Denver, near Franktown. The dam ruins are accessible via several trails, including the Canyon Point Trail and the Rimrock Trail. The park charges a day-use fee. Interpretive signs explain the dam\'s history and failure. The ruins are most dramatic from the canyon floor, but be prepared for a steep hike.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'For 43 years, engineers warned that Castlewood Dam would fail. In 1933, it did — sending a wall of water toward Denver. The ruins still stand in a state park, a monument to ignored warnings.',
  },
}
