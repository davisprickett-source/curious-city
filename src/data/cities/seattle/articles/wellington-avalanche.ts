import type { Article } from '@/types/article'

export const wellingtonAvalanche: Article = {
  slug: 'wellington-avalanche',
  citySlug: 'seattle',
  title: 'The Avalanche That Buried a Train',
  subtitle: 'In 1910, two trains waited out a blizzard in a remote Cascade Mountain pass. Then lightning struck, and a ten-foot wall of snow swept 96 people to their deaths. It remains the deadliest avalanche in American history.',
  excerpt: 'For six days, two trains sat trapped by snow at Wellington Station in the Cascade Mountains. The passengers waited. The railroad tried to dig them out. Then, at 1:42 AM on March 1, 1910, lightning ignited a massive avalanche that swept both trains off the mountain. Ninety-six people died. The Great Northern Railway was so ashamed they renamed the station and let it disappear from memory. Most Washingtonians have never heard of it.',
  author: {
    name: 'The Curious City',
    bio: 'Forgotten disasters',
  },
  publishedAt: '2025-01-11T12:00:00Z',
  featuredImage: {
    src: '/seattle/articles/wellington-avalanche.png',
    alt: 'Rescue workers at the Wellington avalanche site, March 1910',
    credit: 'University of Washington Special Collections',
  },
  category: 'history',
  tags: ['seattle', 'disaster', 'avalanche', 'railroad', 'cascades', 'forgotten-history', 'tragedy'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'The telegram arrived in Seattle on the morning of March 1, 1910. It was brief and devastating: "Avalanche at Wellington. Two trains swept from tracks. Many dead." What followed was chaos — relatives flooding the railroad offices, rescue parties scrambling into the mountains, and the slow, horrifying realization that an entire community of travelers had been buried under a half-mile of snow.',
        },
        {
          type: 'paragraph',
          content: 'Ninety-six people died that night in the Cascade Mountains. It remains the deadliest avalanche in American history, and the deadliest railroad disaster in the Pacific Northwest. Yet most Washingtonians have never heard of it. The Great Northern Railway was so traumatized that they renamed the station and systematically erased the disaster from their corporate history. The town of Wellington ceased to exist. The dead were forgotten.',
        },
        {
          type: 'paragraph',
          content: 'This is the story of those six days on the mountain — how two trains became trapped, why the railroad couldn\'t save them, and how a bolt of lightning in the middle of the night turned a snowstorm into a mass grave.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Trains',
        },
        {
          type: 'paragraph',
          content: 'On February 22, 1910, two trains left Spokane heading west through the Cascade Range toward Seattle. The first was the No. 25 Spokane Local, a passenger train carrying about 70 travelers. The second was the Fast Mail No. 27, hauling mail and a few additional passengers. Together, they carried roughly 100 people — businessmen, families, railroad workers, and mail clerks.',
        },
        {
          type: 'paragraph',
          content: 'The route crossed Stevens Pass, one of the most treacherous stretches of railroad in the country. The Great Northern Railway had blasted tunnels through the Cascades and built a line that climbed nearly 4,000 feet in elevation. In winter, the pass was notorious for snow — sometimes 30 feet of it. The railroad employed hundreds of workers just to keep the tracks clear.',
        },
        {
          type: 'paragraph',
          content: 'The weather that February was extraordinary even by Cascade standards. It had been snowing almost continuously for two weeks. Avalanches had already closed parts of the line. The trains that left Spokane on February 22 were heading into one of the worst winters in Washington history.',
        },
        {
          type: 'quote',
          content: 'The snow came down so thick you couldn\'t see ten feet ahead. We\'d dig out a hundred yards of track, and by the time we finished, it was buried again. The mountain was trying to kill us.',
          attribution: 'Railroad worker',
          role: 'Testimony, 1910 inquest',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Trap',
        },
        {
          type: 'paragraph',
          content: 'The trains made it through the 2.6-mile Cascade Tunnel without incident, emerging on the western slope at a tiny railroad stop called Wellington. Here, at 3,100 feet elevation, they stopped. Ahead, the tracks were buried. An avalanche had swept away a section of the line near Windy Point. Behind them, more slides had closed the route they\'d just traveled. The trains were trapped.',
        },
        {
          type: 'paragraph',
          content: 'Wellington was not really a town — it was a railroad yard carved into the mountainside, with a hotel, a bunkhouse for workers, and a few support buildings. The station sat on a narrow ledge beneath Windy Mountain, with steep slopes rising above and a thousand-foot drop into the Tye River canyon below. In summer, it was merely isolated. In winter, it was a natural trap.',
        },
        {
          type: 'paragraph',
          content: 'The passengers were told the delay would be brief. Crews were already digging out the track ahead. They might be moving again in a day or two. The passengers settled in to wait. Some stayed on the trains. Others took rooms in the small Wellington hotel. The railroad assured them everything was under control.',
        },
        {
          type: 'paragraph',
          content: 'The snow kept falling.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'Six Days',
        },
        {
          type: 'paragraph',
          content: 'For six days, the trains sat on the tracks at Wellington while the blizzard raged. The railroad threw everything it had at the problem. Rotary snowplows — massive machines with spinning blades that could chew through packed snow — worked around the clock. Hundreds of laborers dug by hand. Telegraph lines went down and had to be repaired. Supply trains tried to reach Wellington from both directions and couldn\'t get through.',
        },
        {
          type: 'paragraph',
          content: 'The passengers grew increasingly anxious. They could hear avalanches roaring down the slopes around them — distant thunder that never quite reached the tracks. Some demanded to hike out on foot. Railroad officials refused to allow it; the danger from slides was too great. Others begged to have the trains moved back into the Cascade Tunnel, where they would be protected from avalanches. The railroad said no — there was too much risk of the trains being trapped by slides at both tunnel entrances, with no ventilation for the coal-fired engines.',
        },
        {
          type: 'paragraph',
          content: 'The decision would haunt the Great Northern Railway forever. The passengers stayed on the tracks, exposed to the mountain.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Fatal Position',
          content: 'The trains sat on a sidetrack directly beneath Windy Mountain — a slope that had already avalanched several times that winter. Railroad officials knew the location was dangerous but calculated that moving the trains posed greater risks. They were wrong.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Night',
        },
        {
          type: 'paragraph',
          content: 'On the evening of February 28, the weather changed. The snow turned to rain. The temperature rose. After six days of blizzard, the storm was finally breaking. Many passengers went to bed that night relieved, believing they would finally be free in the morning.',
        },
        {
          type: 'paragraph',
          content: 'They didn\'t understand what warm rain does to a snowpack. The water seeps into the accumulated snow, lubricating the layers, adding weight, destabilizing slopes that had been holding for weeks. The rain wasn\'t salvation. It was a trigger.',
        },
        {
          type: 'paragraph',
          content: 'At 1:42 AM on March 1, 1910, lightning struck Windy Mountain. The sound was described as a "dull, thundering roar" — not an explosion but a rumble, like the mountain itself was waking up. A slab of snow a half-mile wide, ten feet deep, and thousands of tons in weight broke free from the slope above Wellington Station.',
        },
        {
          type: 'paragraph',
          content: 'The avalanche hit the trains at roughly 60 miles per hour. It swept both trains off the tracks, over the ledge, and 150 feet down into the Tye River canyon. Locomotives, passenger cars, mail cars, baggage cars — everything went over. The wooden passenger cars disintegrated on impact. Bodies were scattered across the debris field, buried under snow, timber, and twisted steel.',
        },
        {
          type: 'paragraph',
          content: 'The entire catastrophe took less than thirty seconds.',
        },
        {
          type: 'quote',
          content: 'There was a sound like thunder and then everything was moving. The car turned over and over. When it stopped, I was upside down in the dark, buried in snow. I could hear people screaming somewhere below me.',
          attribution: 'Survivor',
          role: 'Testimony, 1910',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Rescue',
        },
        {
          type: 'paragraph',
          content: 'The survivors were the lucky ones — people who had been thrown clear, or whose sections of car landed on top of the debris rather than underneath it. Of the roughly 100 people on the trains, only 23 survived the initial impact.',
        },
        {
          type: 'paragraph',
          content: 'Railroad workers who had been sleeping in the Wellington bunkhouse heard the avalanche and rushed to help. They dug through the night with shovels and their bare hands, pulling survivors from the wreckage. One of the first recovered was a baby girl, still alive, handed up through a hole in a shattered passenger car. Her mother was dead beside her.',
        },
        {
          type: 'paragraph',
          content: 'The rescue effort continued for days. Workers tunneled into the debris, following the sounds of tapping and cries. They found survivors buried twenty feet under the snow, kept alive by air pockets. They found bodies frozen in the postures of their final moments — a woman clutching her child, a man reaching for a door handle, a mail clerk still sorting letters.',
        },
        {
          type: 'paragraph',
          content: 'The final death toll was 96 — passengers, railroad workers, mail clerks, and the engine crews who had stayed with their locomotives. It was the single deadliest avalanche in American history, a record it still holds.',
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
          content: 'The Great Northern Railway was devastated — not just by the death toll but by the public relations catastrophe. Lawsuits poured in. Newspapers demanded to know why the trains hadn\'t been moved to safety. Investigators questioned why passengers had been kept on an exposed track beneath an avalanche-prone slope for six days.',
        },
        {
          type: 'paragraph',
          content: 'The railroad\'s response was to make Wellington disappear. Within months, the station was renamed "Tye" — a neutral word with no association with the disaster. Railroad maps were updated. Company literature stopped mentioning Wellington. The railroad systematically erased the name from every document it controlled.',
        },
        {
          type: 'paragraph',
          content: 'More practically, the Great Northern committed to building a new, longer tunnel that would bypass the dangerous western slopes entirely. The 7.8-mile Cascade Tunnel — the longest railroad tunnel in North America at the time — opened in 1929. It eliminated the Wellington route, rendering the avalanche site permanently inaccessible by train.',
        },
        {
          type: 'paragraph',
          content: 'The town of Wellington was abandoned. The buildings were torn down or left to rot. The forest reclaimed the railroad yard. Within a generation, Wellington ceased to exist in any meaningful sense.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The New Tunnel',
          content: 'The 7.8-mile Cascade Tunnel, completed in 1929, was specifically built to avoid the avalanche-prone slopes around Wellington. It reduced the line\'s maximum elevation by 500 feet and eliminated the dangerous curves above the Tye River canyon. The tunnel is still in use today.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Forgotten',
        },
        {
          type: 'paragraph',
          content: 'For decades, the Wellington disaster faded from public memory. The railroad didn\'t talk about it. Local histories mentioned it briefly or not at all. The bodies were buried in cemeteries across Washington, their gravestones saying nothing about how they died. A few survivors gave interviews over the years, but they grew old and died themselves. The story slipped away.',
        },
        {
          type: 'paragraph',
          content: 'In recent decades, historians and railfans have worked to recover the memory of Wellington. The avalanche site, accessible only by foot, has become a destination for hikers interested in industrial archaeology. Rusted machinery, rotting timbers, and fragments of rail still litter the mountainside. The old Cascade Tunnel, abandoned when the new tunnel opened, is now a hiking trail through absolute darkness.',
        },
        {
          type: 'paragraph',
          content: 'A memorial was finally erected at the site in 2010, exactly 100 years after the disaster. It lists the names of the 96 victims — the first public acknowledgment many of them ever received. The railroad that tried so hard to forget them has been absorbed by other companies. The passengers who died waiting for rescue finally have a monument.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'The Wellington disaster is a story about the limits of human engineering in the face of nature. The Great Northern Railway was one of the most powerful corporations in America, with virtually unlimited resources. They threw hundreds of workers, the latest technology, and millions of dollars at the Cascade Range. And in the end, a single bolt of lightning undid everything. The mountain won.',
        },
        {
          type: 'paragraph',
          content: 'It\'s also a story about how we choose what to remember. The railroad erased Wellington because the name carried shame. They renamed the station, abandoned the route, and let the forest grow over the evidence. For a corporation, forgetting was easier than accountability.',
        },
        {
          type: 'paragraph',
          content: 'But the mountain keeps its secrets. The debris field is still there, under the trees, scattered down the slope into the Tye River canyon. Every few years, a hiker finds another artifact — a twisted rail, a fragment of locomotive, a corroded telegraph key. The train is still buried up there, and so is the memory of 96 people who went to sleep expecting to wake up in Seattle.',
        },
        {
          type: 'paragraph',
          content: 'They never made it down the mountain.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Visiting the Site',
          content: 'The Wellington avalanche site is accessible via the Iron Goat Trail, which follows the abandoned Great Northern Railway route near Stevens Pass. The old Cascade Tunnel (2.6 miles, completely dark) can be hiked as part of the trail. The site is remote and requires moderate hiking. A memorial marker was installed in 2010. The area is managed by the U.S. Forest Service.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'In 1910, an avalanche swept two trapped trains off a mountain in Washington\'s Cascades, killing 96 people. The railroad erased the disaster from history. Most Washingtonians have never heard of it.',
  },
}
