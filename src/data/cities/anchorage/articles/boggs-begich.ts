import type { Article } from '@/types/article'

export const boggsBegich: Article = {
  slug: 'plane-that-vanished',
  citySlug: 'anchorage',
  title: 'The Plane That Vanished',
  subtitle: 'In 1972, House Majority Leader Hale Boggs and Alaska Congressman Nick Begich disappeared on a flight from Anchorage to Juneau. The largest search in Alaska history found nothing. Begich\'s name stayed on the ballot. He won the election. A dead man was elected to Congress, and fifty years later, nobody knows what happened.',
  excerpt: 'On October 16, 1972, a small plane carrying two U.S. congressmen took off from Anchorage and vanished. Hale Boggs was the House Majority Leader, second in line for the presidency. Nick Begich was Alaska\'s only congressman. Despite a 39-day search covering 32,000 square miles, no trace of the plane was ever found. Begich won re-election a month later — posthumously. The disappearance spawned conspiracy theories involving the Mafia, the FBI, and Watergate. The truth remains unknown.',
  author: {
    name: 'The Curious City',
    bio: 'Stories of the unexplained',
  },
  publishedAt: '2025-01-11T12:00:00Z',
  featuredImage: {
    src: '/anchorage/articles/boggs-begich.png',
    alt: 'Hale Boggs and Nick Begich campaign photo, 1972',
    credit: 'U.S. House of Representatives Archives',
  },
  category: 'history',
  tags: ['anchorage', 'mystery', 'politics', 'disappearance', '1972', 'unsolved', 'aviation'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'On the morning of October 16, 1972, four men boarded a twin-engine Cessna 310 at Anchorage International Airport. Their destination was Juneau, 570 miles away, where Congressman Nick Begich was scheduled to headline a campaign fundraiser. With him was House Majority Leader Hale Boggs, the second-most powerful Democrat in America, who had flown up from Louisiana to campaign for his colleague. The pilot was Don Jonz, an experienced Alaska aviator. Begich\'s aide Russell Brown rounded out the passenger list.',
        },
        {
          type: 'paragraph',
          content: 'The plane took off at 9:09 AM and flew into low clouds. It was never seen again.',
        },
        {
          type: 'paragraph',
          content: 'The disappearance of Boggs and Begich triggered the largest search and rescue operation in Alaska history — 39 days, 3,600 flight hours, 325,000 square miles surveyed. Military aircraft, civilian planes, Coast Guard cutters, and ground teams scoured the route between Anchorage and Juneau. They found nothing. No wreckage. No bodies. No emergency beacon signal. The plane had simply vanished.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Men',
        },
        {
          type: 'paragraph',
          content: 'Hale Boggs was a political giant. The Louisiana congressman had served in the House since 1947, rising to become Majority Leader — the second-ranking Democrat in Congress, behind only Speaker Carl Albert. He was a confidant of presidents, a master of legislative politics, and one of the most powerful men in Washington. He had served on the Warren Commission that investigated JFK\'s assassination.',
        },
        {
          type: 'image',
          src: '/anchorage/articles/boggs-begich-hale-boggs.jpg',
          alt: 'Official congressional portrait of Hale Boggs, House Majority Leader from Louisiana',
          caption: 'House Majority Leader Hale Boggs, circa 1957. At the time of his disappearance, he was the second-most powerful Democrat in America.',
          credit: 'Collection of the U.S. House of Representatives',
        },
        {
          type: 'paragraph',
          content: 'Nick Begich was Alaska\'s rising star. Elected in 1970, the young Democrat had quickly made a name for himself as an advocate for Alaska Native rights and resource development. He was popular at home and respected in Washington. At 40 years old, he seemed destined for a long career. October 1972 found him running for re-election in a campaign he was expected to win easily.',
        },
        {
          type: 'image',
          src: '/anchorage/articles/boggs-begich-nick-begich.jpg',
          alt: 'Official congressional portrait of Nick Begich, at-large Representative from Alaska',
          caption: 'Congressman Nick Begich of Alaska, circa 1971. He was 40 years old when he vanished — and would win re-election posthumously.',
          credit: 'Library of Congress',
        },
        {
          type: 'paragraph',
          content: 'Boggs had come to Alaska to campaign for Begich — a routine trip for a party leader stumping for a colleague. They had appeared together in Anchorage on October 15, attending events and rallies. The next morning, they were scheduled to fly to Juneau for more campaign stops. It was supposed to be a short flight.',
        },
        {
          type: 'quote',
          content: 'Nick was so excited to have Boggs up here. He said it showed how much the national party valued Alaska. They had big plans for the next few days. I never imagined I wouldn\'t see him again.',
          attribution: 'Pegge Begich',
          role: 'Nick Begich\'s widow, 1972',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Flight',
        },
        {
          type: 'paragraph',
          content: 'The Cessna 310C, registration number N1812H, was a reliable aircraft piloted by Don Jonz, a 38-year-old with over 17,000 hours of flight experience. Jonz had flown in Alaska for years and knew the route to Juneau well. The flight was routine — 570 miles across some of the most rugged terrain in North America.',
        },
        {
          type: 'paragraph',
          content: 'Weather conditions were poor but not unusual for October in Alaska. Low clouds, rain, and limited visibility were forecast along the route. Jonz filed an instrument flight plan, meaning he intended to fly through the clouds using the aircraft\'s navigation equipment. For an experienced pilot in a well-equipped plane, this was standard procedure.',
        },
        {
          type: 'paragraph',
          content: 'The plane took off at 9:09 AM. Jonz reported reaching his cruising altitude of 9,000 feet. Then contact was lost. The next scheduled radio check never came. When the plane failed to arrive in Juneau that afternoon, the alarm was raised.',
        },
        {
          type: 'paragraph',
          content: 'The flight path crossed the Chugach Mountains, Prince William Sound, and the Gulf of Alaska before reaching Juneau. Much of the route was over water or roadless wilderness. If the plane went down anywhere along this corridor, finding it would be extraordinarily difficult.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Route',
          content: 'The flight from Anchorage to Juneau crosses some of the most remote terrain in North America. The direct route passes over the Chugach Mountains (peaks exceeding 13,000 feet), Prince William Sound (waters up to 2,400 feet deep), and hundreds of miles of roadless wilderness. Much of the area is covered by glaciers, dense forest, or open ocean.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Search',
        },
        {
          type: 'paragraph',
          content: 'The search for the missing congressmen was unprecedented. The Air Force, Coast Guard, Civil Air Patrol, and dozens of civilian aircraft mobilized within hours. President Nixon personally ordered maximum effort. For the next 39 days, searchers combed the route between Anchorage and Juneau.',
        },
        {
          type: 'paragraph',
          content: 'The numbers were staggering: over 3,600 flight hours, 325,000 square miles searched, hundreds of aircraft and vessels involved. Military reconnaissance planes flew grid patterns. Helicopters probed mountain valleys. Boats crisscrossed Prince William Sound. Ground teams searched wherever terrain allowed access. It was the most intensive search operation in Alaska history.',
        },
        {
          type: 'paragraph',
          content: 'They found nothing. No wreckage. No debris. No oil slicks. No emergency locator beacon signal. The plane had simply vanished — swallowed by the vastness of Alaska without leaving a trace.',
        },
        {
          type: 'paragraph',
          content: 'The search was officially called off on November 24, 1972. Investigators concluded that the plane had likely crashed somewhere along the route, probably into mountains or water, but the exact location would never be known. Boggs, Begich, Jonz, and Brown were declared legally dead.',
        },
        {
          type: 'quote',
          content: 'We searched everywhere a plane could possibly have gone. The terrain defeated us. Alaska is so vast, so rugged, that you could hide a hundred planes out there and never find them.',
          attribution: 'Coast Guard spokesman',
          role: 'November 1972',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Election',
        },
        {
          type: 'paragraph',
          content: 'Nick Begich\'s name remained on the ballot for the November 7 election. Alaska law didn\'t allow removing a candidate after ballots were printed, and there wasn\'t time to reprint them. So voters faced a strange choice: vote for a man who was almost certainly dead, or vote for his opponent.',
        },
        {
          type: 'paragraph',
          content: 'They voted for the dead man. Begich won re-election with 56% of the vote, defeating Republican Don Young. It was one of the strangest electoral outcomes in American history — a congressman winning an election three weeks after his disappearance, when everyone knew he would never serve.',
        },
        {
          type: 'paragraph',
          content: 'The victory was symbolic, a tribute to a popular politician taken too soon. But it created a legal problem: Alaska now had a congressional seat with no one to fill it. Governor William Egan called a special election for March 1973. Don Young won that election and has held the seat ever since — becoming the longest-serving Republican in House history, all because his predecessor\'s plane vanished.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Posthumous Victory',
          content: 'Nick Begich remains one of very few candidates in American history to win an election after their death. His 56% victory margin suggested he would have won easily had he survived. The election became a memorial — Alaska voters choosing to honor their missing congressman one final time.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Conspiracy Theories',
        },
        {
          type: 'paragraph',
          content: 'The disappearance of two congressmen — one of them a national political figure who had investigated JFK\'s assassination — inevitably spawned conspiracy theories. The absence of any wreckage only fueled speculation. What if the plane hadn\'t crashed? What if someone wanted Boggs and Begich dead?',
        },
        {
          type: 'paragraph',
          content: 'The most persistent theory involves the Mafia. Decades after the disappearance, an alleged organized crime figure claimed he had delivered a locked briefcase to Anchorage in October 1972, under instructions to give it to someone who would place it on a specific plane. The implication was that the briefcase contained a bomb.',
        },
        {
          type: 'paragraph',
          content: 'Why would the mob kill Hale Boggs? Theorists point to his role on the Warren Commission and his growing criticism of FBI Director J. Edgar Hoover. In 1971, Boggs had publicly accused Hoover of illegal wiretapping and called for his resignation. Some speculate that Hoover — or others with reason to fear Boggs — arranged his elimination.',
        },
        {
          type: 'paragraph',
          content: 'The timing has also raised eyebrows. The disappearance occurred less than a month before the 1972 presidential election, in the midst of what would become the Watergate scandal. Some theorists see connections to Nixon, to the CIA, to the wider web of political crimes that would eventually bring down the administration. These theories remain unproven.',
        },
        {
          type: 'quote',
          content: 'The most likely explanation is the simplest one: pilot error or mechanical failure in bad weather, over terrain where the wreckage would never be found. But the complete absence of evidence leaves the door open to other possibilities.',
          attribution: 'Aviation investigator',
          role: 'NTSB review, 1973',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Searches Since',
        },
        {
          type: 'paragraph',
          content: 'Over the decades, various individuals and groups have attempted to locate the missing plane. Technology that didn\'t exist in 1972 — satellite imagery, advanced sonar, drone aircraft — has been applied to the search. Amateur investigators have combed through records, reanalyzed flight data, and proposed new search areas.',
        },
        {
          type: 'paragraph',
          content: 'In 2022, on the 50th anniversary of the disappearance, renewed attention focused on the case. Descendants of the missing men called for new search efforts using modern technology. Documentary filmmakers investigated the conspiracy theories. The Anchorage Daily News ran retrospectives. But the plane remained missing.',
        },
        {
          type: 'paragraph',
          content: 'The challenge is the terrain. If the plane went into the ocean, it lies in waters up to 2,400 feet deep, likely buried in sediment. If it crashed in the mountains, it could be covered by glacial ice, hidden in dense forest, or scattered across a landscape so vast that searchers might pass within yards without seeing it. Alaska keeps its secrets.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'What Probably Happened',
        },
        {
          type: 'paragraph',
          content: 'The most likely explanation is the mundane one: the plane encountered severe weather, possibly icing conditions, and crashed somewhere along the route. Don Jonz was an experienced pilot, but Alaska has killed many experienced pilots. The combination of mountains, weather, and limited navigation aids in 1972 made the Anchorage-Juneau route genuinely dangerous.',
        },
        {
          type: 'paragraph',
          content: 'The absence of wreckage, while unusual, isn\'t unprecedented. Alaska is littered with crashed planes that have never been found. The wilderness is simply too vast, too rugged, too thoroughly hostile to human search efforts. A plane that goes down in the backcountry can disappear forever.',
        },
        {
          type: 'paragraph',
          content: 'But certainty remains elusive. Without wreckage, there can be no definitive conclusion. The conspiracy theories persist because they can\'t be disproven. The truth about what happened to Hale Boggs and Nick Begich on October 16, 1972, vanished with them.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'On October 16, 1972, two United States congressmen boarded a small plane in Anchorage and flew into the clouds. They never came out. The largest search in Alaska history found nothing — no wreckage, no bodies, no answers. A dead man won an election. Conspiracy theories bloomed in the absence of evidence. Fifty years later, the plane is still missing.',
        },
        {
          type: 'paragraph',
          content: 'Nick Begich\'s son, Mark Begich, went on to become a U.S. Senator from Alaska, carrying on his father\'s legacy. Don Young, who lost to a dead man in 1972, served 49 years in Congress before his own death in 2022. The ripples from that October morning continue to spread.',
        },
        {
          type: 'paragraph',
          content: 'Somewhere in Alaska — in the mountains, in the ocean, in the vast wilderness between Anchorage and Juneau — lies a small plane with four men inside. They\'ve been there for over fifty years now, hidden in terrain that refuses to give them up. The plane that vanished has never been found. It probably never will be.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'The Legacy',
          content: 'Nick Begich\'s son Mark served as Mayor of Anchorage (2003-2009) and U.S. Senator from Alaska (2009-2015). Hale Boggs\' wife Lindy Boggs succeeded him in Congress, serving Louisiana from 1973 to 1991. Their daughter Cokie Roberts became a prominent journalist. The families turned tragedy into continuing public service.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'In 1972, two congressmen vanished on a flight from Anchorage to Juneau. The largest search in Alaska history found nothing. One of them won re-election — posthumously.',
  },
}
