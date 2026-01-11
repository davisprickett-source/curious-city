import type { Article } from '@/types/article'
import { divorceCapital } from './divorce-capital'
import { tornadoScience } from './tornado-science'
import { poorFarm } from './poor-farm'

export const lakeAgassiz: Article = {
  slug: 'lake-agassiz',
  citySlug: 'fargo',
  title: 'On the Bed of a Vanished Sea',
  subtitle: 'Fargo sits on the silted floor of glacial Lake Agassiz — a prehistoric sea larger than all five Great Lakes combined. When it drained, it may have triggered a global cooling event. The flatness isn\'t boring. It\'s apocalyptic.',
  excerpt: 'That perfectly flat horizon in Fargo? It\'s the silted floor of glacial Lake Agassiz, which covered 110,000 square miles 10,000 years ago — larger than all five Great Lakes combined. When the ice dam broke, it drained catastrophically. The flatness isn\'t boring. It\'s the aftermath of an ancient apocalypse.',
  author: {
    name: 'The Curious City',
    bio: 'Exploring deep history',
  },
  publishedAt: '2025-01-09T12:00:00Z',
  featuredImage: {
    src: '/fargo/articles/lake-agassiz.png',
    alt: 'Aerial view of the flat Red River Valley, former bed of Lake Agassiz',
    credit: 'USGS',
  },
  category: 'feature',
  tags: ['fargo', 'geology', 'history', 'ice-age', 'red-river', 'landscape'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'People joke about how flat Fargo is. The horizon stretches forever in every direction, unbroken by hills or mountains. Driving across North Dakota feels like crossing a table. The flatness is the first thing outsiders notice, and they usually find it boring.',
        },
        {
          type: 'paragraph',
          content: 'They\'re wrong. The flatness isn\'t boring. It\'s the scar of one of the largest catastrophes in North American geological history — the draining of a prehistoric lake so vast it makes the Great Lakes look like puddles. Fargo sits on the silted floor of a vanished sea, and the evidence is everywhere if you know how to look.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Lake That Drowned a Continent',
        },
        {
          type: 'paragraph',
          content: 'Twelve thousand years ago, as the last ice age ended, a wall of ice miles thick covered Canada and the northern United States. As the climate warmed, the glaciers began to melt — and the meltwater had nowhere to go. Ice to the north blocked drainage to Hudson Bay. The Rocky Mountains blocked the west. And so the water pooled, year after year, century after century, until it formed a lake that defied imagination.',
        },
        {
          type: 'paragraph',
          content: 'Glacial Lake Agassiz, named for the 19th-century scientist who first recognized its existence, covered approximately 110,000 square miles at its maximum extent. That\'s larger than all five Great Lakes combined. It stretched from modern-day Saskatchewan to Minnesota, from the Dakotas into Manitoba. Its deepest point may have exceeded 700 feet.',
        },
        {
          type: 'paragraph',
          content: 'The lake existed for roughly 4,000 years. During that time, it grew and shrank as climate fluctuated and ice dams formed and broke. Its surface level rose and fell hundreds of feet. Its shores migrated miles in either direction. It was not a static body of water but a dynamic, powerful force reshaping everything around it.',
        },
        {
          type: 'quote',
          content: 'Lake Agassiz was not merely large. It was a different category of lake — a continental feature that influenced climate, ecology, and eventually human settlement across the entire central continent.',
          attribution: 'Dr. James Teller',
          role: 'University of Manitoba geologist',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Sediment',
        },
        {
          type: 'paragraph',
          content: 'When a lake that large sits still for that long, things settle to the bottom. Fine clay particles, carried by glacial meltwater, slowly drifted down and accumulated on the lake bed. Over millennia, these sediments built up into a layer of extraordinarily fertile, extraordinarily flat soil.',
        },
        {
          type: 'paragraph',
          content: 'That sediment is why the Red River Valley is one of the most productive agricultural regions on Earth. The soil is black, rich, and deep — in some places over 100 feet of accumulated lake-bottom deposits. Sugar beets, wheat, soybeans, and sunflowers grow with remarkable abundance. The "Golden Valley" nickname refers to wheat, but it could just as easily describe the economic value of dirt that spent 4,000 years settling on a lake floor.',
        },
        {
          type: 'paragraph',
          content: 'It\'s also why the land is so flat. Lake bottoms are level by definition — water finds its own equilibrium. What you see when you look across the Red River Valley is a former lake bed, smoothed by water, preserved in sediment, barely altered since the lake drained.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Numbers',
          content: 'The Red River Valley drops only about 6 feet over 150 miles from Fargo to the Canadian border. That\'s a grade of roughly 0.0004%. A billiard table, by comparison, has more variation. The valley is, functionally, horizontal.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The River That Flows Wrong',
        },
        {
          type: 'paragraph',
          content: 'The Red River of the North flows north — one of only a handful of major rivers in North America to do so. This isn\'t a geographic quirk; it\'s a direct consequence of Lake Agassiz. The river follows the deepest channel of the former lake bed, draining toward Hudson Bay along the path carved by the lake\'s outflow.',
        },
        {
          type: 'paragraph',
          content: 'This northward flow creates a peculiar problem: spring floods. When snow melts in spring, the southern reaches of the Red River thaw first. Water begins flowing north into still-frozen sections, where ice jams form and backing up occurs. The result is catastrophic flooding that happens with depressing regularity.',
        },
        {
          type: 'paragraph',
          content: 'Fargo has flooded in 1897, 1943, 1950, 1966, 1969, 1989, 1993, 1997, 2001, 2006, 2009, 2010, 2011, 2013, and 2019. The 1997 flood devastated Grand Forks, 75 miles north. The 2009 flood required evacuating 150,000 people. This isn\'t bad luck — it\'s geology. The river runs the wrong direction through a perfectly flat valley, and ice ensures catastrophe.',
        },
        {
          type: 'quote',
          content: 'We don\'t ask if the Red River will flood. We ask when, and how bad. The geography makes flooding inevitable. We\'ve just learned to live with it.',
          attribution: 'Fargo resident',
          role: 'After the 2009 flood',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Draining',
        },
        {
          type: 'paragraph',
          content: 'Lake Agassiz didn\'t disappear gradually. It drained catastrophically — multiple times — in events that may have reshaped global climate.',
        },
        {
          type: 'paragraph',
          content: 'The most dramatic drainage occurred around 8,200 years ago. The glacial ice dam blocking the lake\'s northeastern outlet finally collapsed, releasing a staggering volume of water into Hudson Bay. Estimates suggest the flood discharged water at a rate exceeding the combined flow of every river on Earth.',
        },
        {
          type: 'paragraph',
          content: 'This freshwater pulse had consequences far beyond North America. The sudden influx of cold, fresh water into the North Atlantic may have disrupted thermohaline circulation — the global ocean current system that moderates climate. Climate records from the period show a sharp, sudden cooling lasting several centuries, known as the "8.2 kiloyear event." Greenland ice cores, European pollen records, and cave deposits worldwide all register this abrupt climate shift.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Global Impact',
          content: 'The drainage of Lake Agassiz may have triggered a global cooling event lasting 400 years. Agriculture in the Near East faltered. Populations migrated. The event shows up in records from China to South America. A lake in North Dakota draining into Hudson Bay altered climate worldwide.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Evidence',
        },
        {
          type: 'paragraph',
          content: 'Drive out of Fargo in almost any direction and you\'ll eventually hit the old shorelines. These "beaches" — technically wave-cut scarps and beach ridges — mark where Lake Agassiz\'s waters once lapped against the land. They\'re subtle features, just slight rises in elevation, but they\'re unmistakable once you know what to look for.',
        },
        {
          type: 'paragraph',
          content: 'The Campbell Beach, the highest and oldest visible shoreline, sits roughly 50 miles west of Fargo at an elevation about 200 feet above the valley floor. The Herman Beach, marking a later, lower lake level, runs through western Minnesota. These ancient shorelines are now farmland, highways, and towns — but they trace the outline of a vanished sea.',
        },
        {
          type: 'paragraph',
          content: 'You can find the sediment evidence anywhere in the valley. Dig a hole and you\'ll hit blue-gray clay — lake bottom deposits laid down 10,000 years ago. This clay causes its own problems: it\'s impermeable, so water doesn\'t drain; it expands when wet and contracts when dry, cracking foundations and buckling roads. Living on a former lake bed has consequences.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'Living with the Past',
        },
        {
          type: 'paragraph',
          content: 'Fargo exists because of Lake Agassiz. The flat, fertile land enables agriculture. The river — even flowing the wrong way — provides water. The level terrain makes construction easy. Everything about the region\'s prosperity traces back to 4,000 years of lake sediment.',
        },
        {
          type: 'paragraph',
          content: 'But Fargo also struggles because of Lake Agassiz. The flooding will never stop — the geography ensures it. The clay soil causes endless infrastructure headaches. The flatness that enables farming also enables wind that scours the landscape bare.',
        },
        {
          type: 'paragraph',
          content: 'When you stand in Fargo and look at that relentlessly flat horizon, you\'re not seeing empty space. You\'re seeing the bottom of a vanished sea, a landscape shaped by water that hasn\'t existed for 8,000 years, a scar from an ancient catastrophe that altered the climate of the entire planet. The flatness isn\'t boring. It\'s a memorial to forces beyond human scale.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'Next time someone jokes about North Dakota being flat and boring, you can tell them the truth: they\'re standing on the floor of a prehistoric sea. When it drained, it may have triggered a global ice age. The Red River flows north because a glacier carved its path. And every spring, when the floods come again, the lake — vanished for 8,000 years — briefly returns to reclaim its bed.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'See the Shorelines',
          content: 'Drive west from Fargo on I-94 toward Jamestown. Around the Casselton area, you\'ll climb the subtle escarpment of an old Lake Agassiz shoreline. The change in elevation is only about 200 feet, but it marks the edge of the ancient lake.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'Fargo sits on the floor of glacial Lake Agassiz — a prehistoric lake larger than all five Great Lakes combined. When it drained, it may have triggered a global cooling event.',
  },
}

export const articles: Article[] = [lakeAgassiz, divorceCapital, tornadoScience, poorFarm]
