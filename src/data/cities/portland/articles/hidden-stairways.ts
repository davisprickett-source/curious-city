import type { Article } from '@/types/article'

export const hiddenStairways: Article = {
  slug: 'portland-hidden-stairways',
  citySlug: 'portland',
  title: 'Portland\'s Secret Stairways: A City Built for Walking, Then Abandoned for Driving',
  subtitle: 'Portland has 200 public stairways hidden throughout the city — staircases that connect neighborhoods, climb hills, and tell the story of what the city was before everyone had cars. Most residents have no idea they exist.',
  excerpt: 'In the early 1900s, Portland built 400 public stairways to connect streetcar lines to hillside neighborhoods. Workers used them to walk to factories. Kids used them to get to school. Then cars arrived, the streetcars died, and the stairways were forgotten. Today, about 200 remain — hidden urban infrastructure from an era when cities were designed for feet, not wheels.',
  author: {
    name: 'Sarah Kim',
    bio: 'Cultural historian tracking urban legends, curiosities, and movements that reshape cities.',
  },
  publishedAt: '2024-12-15T18:00:00Z',
  featuredImage: {
    src: '/portland/articles/hidden-stairways.png',
    alt: 'Hidden public stairway in Portland neighborhood',
    credit: 'OPB / Oregon Field Guide',
  },
  category: 'history',
  tags: ['portland', 'urban-history', 'infrastructure', 'walking', 'hidden-gems', 'curiosities'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'There\'s a street in Portland that isn\'t a street — it\'s a staircase. NE 107th Avenue, to be precise. You can\'t drive it. You can\'t bike it. You can only walk it, one step at a time, up the hillside it was built to climb. And unless you live nearby, you\'ve probably never heard of it.',
        },
        {
          type: 'paragraph',
          content: 'NE 107th isn\'t unique. Portland has approximately 200 public stairways scattered throughout the city — remnants of an era when the city was designed for pedestrians, not cars. They connect neighborhoods to streetcar lines that no longer exist. They climb hills too steep for modern development. They sit forgotten between houses, overgrown with ivy, cracked by tree roots, slowly being reclaimed by the forest.',
        },
        {
          type: 'paragraph',
          content: 'At their peak in the 1920s, Portland had 400 public stairways. Workers in Linnton could "pop out and be at work in five minutes" at the lumber mills via staircases. Kids in the Alphabet District used them to walk to school. These weren\'t recreational infrastructure. They were essential urban transit — the connective tissue that made hillside Portland livable before everyone owned a car.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Streetcar City',
        },
        {
          type: 'paragraph',
          content: 'Portland\'s stairways were built to solve a specific problem: how do you connect hilly neighborhoods to the streetcar network that runs through flat valleys? The answer was simple — build stairs.',
        },
        {
          type: 'paragraph',
          content: 'Between 1912 and 1920, Portland embarked on a stairway construction boom. The Warren Construction Company built massive concrete staircases on Alameda Ridge — 11 staircases with 844 total steps. The city built stairs in the West Hills, in Linnton, in Sellwood, anywhere a streetcar line ended and a hillside neighborhood began.',
        },
        {
          type: 'paragraph',
          content: 'These weren\'t crude wooden steps. They were engineered infrastructure. Concrete treads with proper drainage. Iron railings. Some were built into the hillside so precisely that they\'ve lasted over a century with minimal maintenance. The city treated stairways like streets — because functionally, they were.',
        },
        {
          type: 'quote',
          content: 'In 1912, when Warren Construction built the Alameda stairs, they weren\'t building a curiosity. They were building essential transportation infrastructure. Those stairs were how people got to work.',
          attribution: 'Laura O. Foster',
          role: 'Author, "Portland City Walks"',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The WPA Stairways',
        },
        {
          type: 'paragraph',
          content: 'The most beautiful stairways in Portland weren\'t built during the 1912-1920 construction boom. They came later, during the Great Depression, when the Works Progress Administration employed thousands of workers to build public infrastructure.',
        },
        {
          type: 'paragraph',
          content: 'Between 1934 and 1939, WPA crews built hand-hewn stone stairways throughout Portland. The 72-step staircase in Joseph Wood Hill Park is a WPA project — massive stones fitted together without mortar, designed to last centuries. Rocky Butte\'s scenic stairways were WPA-built, as were several staircases in Washington Park.',
        },
        {
          type: 'paragraph',
          content: 'These stairways weren\'t just functional. They were art. Stone masons carved steps from basalt and sandstone. Landscape architects designed them to complement natural terrain. The WPA stairways were make-work projects, yes, but they were also expressions of civic pride — the idea that public infrastructure should be beautiful, not just utilitarian.',
        },
        {
          type: 'paragraph',
          content: 'Many WPA stairways are still in use today. The stone is weathered but intact. The railings have been replaced, but the steps remain. They\'re monuments to an era when the federal government employed people to build things that would outlast them.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Numbers',
          content: 'Portland built approximately 400 public stairways between 1900 and 1940. About 200 remain today. The Alameda Ridge alone has 11 stairways totaling 844 steps. Mt. Tabor has a 282-step staircase. Washington Park\'s cliff stairway has 203 steps. Pioneer Courthouse has 115 steps to its cupola.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Forgetting',
        },
        {
          type: 'paragraph',
          content: 'What happened to the other 200 stairways? Cars.',
        },
        {
          type: 'paragraph',
          content: 'As automobile ownership increased in the 1920s and accelerated after World War II, cities redesigned themselves for driving. Streetcar lines were torn up and replaced with bus routes. Hillside neighborhoods built roads instead of relying on stairways. The infrastructure that connected pedestrians to transit became obsolete.',
        },
        {
          type: 'paragraph',
          content: 'Some stairways were demolished during urban renewal. In the 1950s-1970s, Portland\'s Albina neighborhood saw over 1,100 homes destroyed to make way for highways and commercial development. Many stairways disappeared with the neighborhoods they served. Others were simply abandoned — no longer maintained, gradually consumed by vegetation, forgotten.',
        },
        {
          type: 'paragraph',
          content: 'In Linnton, Highway 30 bulldozed downtown in the 1960s. The stairways that once connected workers to lumber mills became relics. Some survived, leading to places that no longer exist. Others were buried under asphalt. The city that built 400 stairways as essential infrastructure stopped counting them as streets.',
        },
        {
          type: 'quote',
          content: 'One stairway fell into such disrepair that a tree seedling grew in the cracks. Now the tree is full-grown, and the stairway is unusable. The city forgot it existed.',
          attribution: 'Oregon Field Guide',
          role: 'PBS documentary on Portland stairways',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Hidden Network',
        },
        {
          type: 'paragraph',
          content: 'The stairways that remain are scattered across Portland like an incomplete map. Some are obvious — the Cathedral Park stairway, Portland\'s "most photographed staircase," leads dramatically down to the St. Johns Bridge. Others are invisible unless you know where to look.',
        },
        {
          type: 'paragraph',
          content: 'The Alphabet District has a stairway at the end of almost every street from G to Q (except Hoyt). NW Flanders ends in stairs. NW Glisan ends in stairs. NW Irving, Johnson, Kearney, Lovejoy, Marshall, Northrup, Overton, and Pettygrove all end in stairways. Residents use them daily. Visitors drive past without noticing.',
        },
        {
          type: 'paragraph',
          content: 'Alameda Ridge is stairway central — 11 staircases connecting the ridge to the neighborhoods below. Locals know which stairway is fastest for getting to the bus. Runners use them for interval training. Dog walkers take them for the views. But there are no signs, no official maps, no city recognition that these are public infrastructure.',
        },
        {
          type: 'paragraph',
          content: 'And then there are the secret stairways — the ones only locals know about. The stairway behind someone\'s house that technically has an easement for public use. The stairway that connects two dead-end streets but isn\'t on any city map. The stairway that appears on 1920 city plans but has been overgrown for decades.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Finding the Stairways',
          content: 'Laura O. Foster has documented 142+ Portland stairways in guidebooks and walking tours. Oregon Field Guide created a documentary exploring hidden stairways. The best way to find them? Walk. Most aren\'t marked, signed, or acknowledged — they\'re just there, waiting to be discovered.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'Who Uses Them Now?',
        },
        {
          type: 'paragraph',
          content: 'The stairways aren\'t abandoned. They\'re used daily — just not for their original purpose. Workers in Linnton no longer walk down stairways to the lumber mills (the mills are gone). But runners climb them for fitness. Dog walkers use them for exercise. Photographers seek them out for urban exploration shots.',
        },
        {
          type: 'paragraph',
          content: 'Some stairways have become destination workouts. Mt. Tabor\'s 282 steps are a brutal cardio challenge. The Washington Park cliff stairway (203 steps) attracts fitness enthusiasts. The Alameda Ridge stairways are popular with runners doing hill repeats. The stairways built for daily commuting now serve recreational athletes.',
        },
        {
          type: 'paragraph',
          content: 'Others remain purely functional. Residents in hillside neighborhoods still use stairways to walk to bus stops, corner stores, or friends\' houses. For them, the stairways aren\'t historical curiosities — they\'re shortcuts, necessities, the fastest way from point A to point B when point B is 100 feet higher in elevation.',
        },
        {
          type: 'paragraph',
          content: 'And some stairways are just... there. Forgotten, unused, slowly deteriorating. A 1920s concrete staircase leading nowhere, overgrown with blackberry bushes, visited by nobody except the occasional urban explorer who stumbles across it and wonders why it exists.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'What They Tell Us',
        },
        {
          type: 'paragraph',
          content: 'Portland\'s stairways are monuments to a city that no longer exists — a city built for walking, designed around public transit, where hillside neighborhoods were connected to streetcar networks by staircases instead of roads.',
        },
        {
          type: 'paragraph',
          content: 'That city is gone. The streetcars were torn up. The neighborhoods were redesigned for cars. The infrastructure that made pedestrian life possible was abandoned. But the stairways remain, physical evidence of a different way of organizing urban space.',
        },
        {
          type: 'paragraph',
          content: 'They\'re also a reminder of what was lost. Portland today prides itself on walkability, bike lanes, and public transit. But the city was more walkable in 1920 than it is now. A worker in Linnton could walk to the mill in five minutes via stairways. A kid in the Alphabet District could walk to school without crossing a major road. The car-centric redesign of American cities wasn\'t progress — it was a choice, and it came with costs.',
        },
        {
          type: 'quote',
          content: 'The stairways are proof that we used to design cities for people who walked. We stopped. We could start again.',
          attribution: 'Laura O. Foster',
          role: 'Urban walking advocate',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Rediscovery',
        },
        {
          type: 'paragraph',
          content: 'In recent years, Portland\'s stairways have gained cult status. Laura O. Foster published walking guides documenting stairways across the city. Oregon Field Guide produced a documentary. Local media outlets run features on hidden staircases. Social media accounts post photos of scenic stairways.',
        },
        {
          type: 'paragraph',
          content: 'This isn\'t nostalgia. It\'s recognition that the stairways offer something valuable — connection to place, exercise, beauty, and an alternative to driving. In a city increasingly choked by traffic, the stairways represent a different way of moving through space.',
        },
        {
          type: 'paragraph',
          content: 'Some stairways have been restored. The city has repaired dangerous railings, replaced broken steps, and cleared vegetation. But most maintenance happens informally — neighbors who sweep leaves, pull weeds, and report damage because they use the stairway daily and want it to survive.',
        },
        {
          type: 'paragraph',
          content: 'The stairways that disappeared won\'t be rebuilt. But the 200 that remain are increasingly valued as historic infrastructure, public space, and urban curiosities worth preserving.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'Next time you\'re in Portland, look for the stairways. They\'re at the end of dead-end streets, tucked between houses, climbing hills too steep for roads. Some are obvious. Some are hidden. All of them are public — built a century ago when the city believed that infrastructure should serve people, not just cars.',
        },
        {
          type: 'paragraph',
          content: 'Climb one. Feel the wear on the concrete steps. Notice how the railings have been replaced but the original stonework remains. Think about the thousands of workers, students, and residents who climbed these same steps before cars made them obsolete.',
        },
        {
          type: 'paragraph',
          content: 'Portland\'s stairways are infrastructure from a different era — when cities were built for walking, when hillsides were accessible on foot, when public spaces connected people to transit instead of isolating them in cars. The city that built 400 stairways doesn\'t exist anymore. But the stairways do. Hidden, forgotten, and still climbable — waiting for the city to remember what it once was.',
        },
        {
          type: 'callout',
          variant: 'success',
          title: 'Stairways to Explore',
          content: 'Start with the Cathedral Park stairs (most photographed), the Alameda Ridge network (11 stairways, 844 steps), or the Alphabet District\'s end-of-street stairways. Download Laura O. Foster\'s walking guides or just wander — some of the best stairways are the ones you discover yourself.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'Portland built 400 public stairways in the early 1900s to connect streetcar lines to hillside neighborhoods. About 200 remain, hidden throughout the city. Here\'s their story.',
  },
}
