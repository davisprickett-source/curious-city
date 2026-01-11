import type { Article } from '@/types/article'
import { denainaFlu } from './denaina-flu'
import { boggsBegich } from './boggs-begich'
import { bootleggersCove } from './bootleggers-cove'

export const goodFridayEarthquake: Article = {
  slug: 'good-friday-earthquake',
  citySlug: 'anchorage',
  title: 'When the Ground Turned to Liquid: The 1964 Alaska Earthquake',
  subtitle: 'For four and a half minutes, Anchorage shook at 9.2 magnitude — the most powerful earthquake in North American history. The ground didn\'t just crack. It liquefied.',
  excerpt: 'On March 27, 1964, the most powerful earthquake ever recorded in North America struck Alaska. At 9.2 magnitude, it shook for four and a half minutes. Entire neighborhoods liquefied and slid into the sea. The landscape was permanently altered. You can still walk through the scars.',
  author: {
    name: 'The Curious City',
    bio: 'Documenting natural forces',
  },
  publishedAt: '2025-01-09T12:00:00Z',
  featuredImage: {
    src: '/anchorage/articles/good-friday-earthquake.png',
    alt: 'Devastation from the 1964 Alaska earthquake in Anchorage',
    credit: 'USGS Archives',
  },
  category: 'history',
  tags: ['anchorage', 'earthquake', 'disaster', '1964', 'natural-disaster', 'geology'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'At 5:36 PM on March 27, 1964 — Good Friday — the Pacific plate lurched beneath the North American plate along 600 miles of fault line. The energy released was equivalent to 480 million tons of TNT, or roughly 10 million Hiroshima bombs. The ground shook for four and a half minutes.',
        },
        {
          type: 'paragraph',
          content: 'In Anchorage, the most powerful earthquake ever recorded in North America felt like the end of the world. The ground didn\'t just shake — it liquefied. Buildings didn\'t just fall — they sank. Entire neighborhoods slid toward the ocean on rivers of mud. By the time the shaking stopped, Alaska was permanently rearranged.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Shaking',
        },
        {
          type: 'paragraph',
          content: 'Four and a half minutes is an impossibly long time for an earthquake. Most major quakes last seconds. The 1906 San Francisco earthquake — the benchmark American disaster — lasted less than a minute. The 1964 Alaska earthquake lasted long enough that survivors remember thinking it would never stop.',
        },
        {
          type: 'paragraph',
          content: 'The shaking was violent and chaotic. Buildings swayed so far from vertical that people inside were thrown against walls. Furniture slid across rooms. Windows shattered. The sound was described as a roar — not just the noise of destruction, but the earth itself screaming.',
        },
        {
          type: 'quote',
          content: 'It just kept going. Every time you thought it was over, it would start again. People were on the ground, clutching anything they could hold onto. Four minutes feels like forever when the world is falling apart.',
          attribution: 'Survivor testimony',
          role: 'Anchorage resident',
        },
        {
          type: 'paragraph',
          content: 'The magnitude — 9.2 on the modern moment magnitude scale — is almost beyond comprehension. Only four earthquakes in recorded history have been stronger. The ground motion was felt across the western hemisphere, from Alaska to Florida. Seismographs worldwide registered the event.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Liquefaction',
        },
        {
          type: 'paragraph',
          content: 'What made the Alaska earthquake particularly destructive was a phenomenon called liquefaction. When saturated soil is shaken violently, the water pressure between soil particles can equalize, turning solid ground into something with the consistency of quicksand. Buildings don\'t just fall over — they sink.',
        },
        {
          type: 'paragraph',
          content: 'In Anchorage\'s Turnagain Heights neighborhood, the effects were catastrophic. The bluff overlooking Cook Inlet was saturated clay, perfect conditions for liquefaction. When the shaking started, the entire neighborhood began to move — not collapse, but slide, flowing toward the water on a river of liquefied earth.',
        },
        {
          type: 'paragraph',
          content: 'Seventy-five homes were destroyed, not by falling but by sliding. Some traveled hundreds of feet before stopping. Others broke apart as the ground beneath them moved in different directions. The bluff face dropped 35 feet in some places. What had been solid land became a jumbled mess of tilted lots, shattered houses, and exposed clay.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Physics of Liquefaction',
          content: 'Liquefaction occurs when saturated, loose soil loses strength due to earthquake shaking. The soil particles temporarily lose contact with each other, and the ground behaves like a liquid. Heavy objects sink. Light objects rise. The effect can persist for minutes after shaking stops.',
        },
        {
          type: 'paragraph',
          content: 'Fourth Avenue, Anchorage\'s main commercial street, experienced spectacular damage. One side of the street dropped 11 feet relative to the other, creating a step that ran for blocks. Cars parked at meters were suddenly 11 feet below street level. Buildings that had faced the street now faced gaping chasms.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Tsunami',
        },
        {
          type: 'paragraph',
          content: 'The earthquake\'s devastation extended far beyond the shaking. The seafloor displacement triggered a massive tsunami that radiated across the Pacific. In Alaska, the waves struck almost immediately — some coastal communities had only minutes of warning.',
        },
        {
          type: 'paragraph',
          content: 'Valdez was nearly destroyed. A massive underwater landslide — triggered by the shaking — generated a local wave that swept through the harbor, killing 32 people. The town was later relocated to safer ground; the original townsite was abandoned.',
        },
        {
          type: 'paragraph',
          content: 'Seward lost its waterfront. Chenega village lost 23 of its 68 residents. In Kodiak, the fishing fleet was devastated. The tsunami waves propagated south, causing deaths as far away as Crescent City, California, where 11 people drowned.',
        },
        {
          type: 'quote',
          content: 'The wave came without warning. One moment the water was going out — farther than anyone had ever seen it go — and then it came back. You couldn\'t outrun it. You could only climb.',
          attribution: 'Valdez survivor',
          role: 'Oral history archives',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Toll',
        },
        {
          type: 'paragraph',
          content: 'The official death toll was 131 — remarkably low for an earthquake of this magnitude. The timing helped: Good Friday at 5:36 PM meant schools were closed and many offices had let out early. Had the earthquake struck on a workday afternoon, the casualties would have been far higher.',
        },
        {
          type: 'paragraph',
          content: 'But the physical damage was staggering. In Anchorage alone, 30 blocks of buildings were destroyed or damaged beyond repair. The economic cost, in 1964 dollars, exceeded $300 million — billions in today\'s terms. Infrastructure was devastated: roads cracked, bridges collapsed, ports were wrecked, and the railroad was severed in multiple places.',
        },
        {
          type: 'paragraph',
          content: 'The landscape itself was permanently altered. Some areas rose as much as 38 feet. Others sank 8 feet. Forests that had been above tideline were suddenly flooded with salt water, killing the trees. Ghost forests of dead spruce still mark the areas where the land dropped below sea level.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Lasting Changes',
          content: 'The earthquake permanently raised parts of Montague Island by 38 feet — the largest tectonic uplift ever recorded. Parts of the Kenai Peninsula sank below sea level. The altered landscape remains visible today.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Science',
        },
        {
          type: 'paragraph',
          content: 'The 1964 Alaska earthquake was a pivotal moment in earth science. It provided crucial evidence for the then-controversial theory of plate tectonics. The pattern of uplift and subsidence confirmed that the Pacific plate was diving beneath the North American plate — a process called subduction.',
        },
        {
          type: 'paragraph',
          content: 'Scientists descended on Alaska to study the aftermath. Their work helped establish earthquake preparedness protocols worldwide. The Tsunami Warning System was expanded and improved based on lessons learned. Building codes were revised. Alaska became, essentially, a giant laboratory for understanding earthquakes.',
        },
        {
          type: 'paragraph',
          content: 'The U.S. Geological Survey maintains detailed records of the earthquake to this day. The event remains one of the most studied seismic events in history, yielding insights that have saved lives in subsequent earthquakes around the world.',
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
          content: 'In Anchorage today, the scars are still visible if you know where to look. Earthquake Park, on the western edge of town, preserves a section of the Turnagain Heights landslide. The hummocky terrain — tilted blocks of land, depressed areas, chaotic topography — looks exactly like what it is: a neighborhood that flowed toward the ocean.',
        },
        {
          type: 'paragraph',
          content: 'Walking through the park, you pass interpretive signs explaining what happened. Here, a house once stood. There, the bluff edge used to be. The devastation is quiet now, overgrown with birch and spruce, but the landscape hasn\'t forgotten. It never will.',
        },
        {
          type: 'paragraph',
          content: 'Anchorage rebuilt. The city is now home to 300,000 people, and earthquakes remain part of daily life — small tremors are felt regularly, a constant reminder that the plates are still moving, still building tension, still capable of releasing it catastrophically. The next big one is not a question of if, but when.',
        },
        {
          type: 'quote',
          content: 'Alaskans live with earthquakes the way Floridians live with hurricanes. You prepare, you pay attention, and you respect the forces involved. The 1964 earthquake taught us what can happen when we don\'t.',
          attribution: 'Alaska Earthquake Center',
          role: 'Educational materials',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'On clear days, from Earthquake Park, you can see the mountains across Cook Inlet and the Alaska Range beyond. It\'s beautiful — impossibly, wildly beautiful. But the beauty comes with a warning. The ground here moved once, and it will move again. The earthquake didn\'t destroy Alaska. It just reminded Alaskans who\'s really in charge.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Visit Earthquake Park',
          content: 'Earthquake Park is located off Northern Lights Boulevard in West Anchorage. The walking trails wind through the landslide area with interpretive signs explaining the 1964 disaster. Entry is free. Best visited in summer when trails are clear.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'The 1964 Alaska earthquake was the most powerful in North American history. At 9.2 magnitude, it shook for four minutes. Neighborhoods liquefied. You can still walk through the scars.',
  },
}

export const articles: Article[] = [goodFridayEarthquake, denainaFlu, boggsBegich, bootleggersCove]
