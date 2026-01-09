import type { Article } from '@/types/article'

export const dbCooper: Article = {
  slug: 'db-cooper',
  citySlug: 'seattle',
  title: 'D.B. Cooper: The Man Who Vanished',
  subtitle: 'In 1971, a man hijacked a plane, collected $200,000, and parachuted into the night. He was never found. The Pacific Northwest has been obsessed ever since.',
  excerpt: 'On November 24, 1971, a man calling himself Dan Cooper hijacked Northwest Orient Flight 305, collected $200,000 in ransom, and parachuted into the Washington wilderness. He was never found. The FBI officially closed the case in 2016. The Pacific Northwest never stopped looking.',
  author: {
    name: 'The Curious City',
    bio: 'Investigating the unexplained',
  },
  publishedAt: '2025-01-09T12:00:00Z',
  featuredImage: {
    src: '/seattle/articles/db-cooper.png',
    alt: 'FBI sketch of D.B. Cooper',
    credit: 'FBI Archives',
  },
  category: 'history',
  tags: ['seattle', 'mystery', 'true-crime', 'aviation', '1970s', 'unsolved'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'The man in seat 18C was unremarkable. Mid-forties, dark suit, white shirt, thin black tie, mother-of-pearl tie clip. He ordered a bourbon and soda, paid for it, lit a cigarette. It was November 24, 1971, the day before Thanksgiving, and Northwest Orient Flight 305 was only half-full on its route from Portland to Seattle. Nobody noticed him.',
        },
        {
          type: 'paragraph',
          content: 'Then he passed a note to the flight attendant. Florence Schaffner assumed it was a phone number — men did that sometimes — and slipped it into her purse without reading it. The man leaned forward. "Miss, you\'d better look at that note," he said. "I have a bomb."',
        },
        {
          type: 'paragraph',
          content: 'What followed was the only unsolved airplane hijacking in American history. A ransom, a parachute jump into the wilderness, and a vanishing so complete that fifty years of investigation have produced nothing but theories. The man gave the name Dan Cooper. A reporter\'s error transformed it to "D.B. Cooper." The legend was born.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Hijacking',
        },
        {
          type: 'paragraph',
          content: 'The note was straightforward: the man claimed to have a bomb in his briefcase. He wanted $200,000 in "negotiable American currency," four parachutes, and a fuel truck waiting in Seattle. If his demands weren\'t met, he would blow up the plane.',
        },
        {
          type: 'paragraph',
          content: 'Schaffner walked to the back of the plane. The man opened his briefcase just enough to show her a mass of wires and red sticks. It looked like a bomb. She believed him. The captain was notified. Northwest Orient headquarters was contacted. The FBI was called.',
        },
        {
          type: 'paragraph',
          content: 'For two hours, Flight 305 circled Puget Sound while authorities assembled the ransom. The passengers were told there was a "minor mechanical difficulty." Most had no idea anything was wrong. The man in 18C remained calm throughout, ordering another bourbon, chatting amiably with the flight attendants. He seemed polite. Reasonable. Almost friendly.',
        },
        {
          type: 'quote',
          content: 'He wasn\'t nervous at all. He seemed like a nice guy, actually. Professional. Like this was just another day at work for him.',
          attribution: 'Tina Mucklow',
          role: 'Flight attendant, Northwest Orient',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Ransom',
        },
        {
          type: 'paragraph',
          content: 'At 5:39 PM, Flight 305 landed at Seattle-Tacoma International Airport. The passengers were released, believing the landing was due to mechanical trouble. Most never knew they\'d been on a hijacked plane.',
        },
        {
          type: 'paragraph',
          content: 'A Northwest Orient employee approached with a knapsack containing the ransom: 10,000 twenty-dollar bills, totaling $200,000. The serial numbers had been recorded and photographed — a laborious process in 1971, done by hand in just two hours. Four parachutes were delivered as requested: two primary chutes and two reserves.',
        },
        {
          type: 'paragraph',
          content: 'The hijacker examined the money and the parachutes. He was satisfied. The plane was refueled. At his instruction, a skeleton crew remained: two pilots, a flight engineer, and flight attendant Tina Mucklow. The destination: Mexico City. The conditions: fly low, below 10,000 feet; keep the landing gear down; don\'t pressurize the cabin. He was planning to jump.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Money',
          content: '$200,000 in 1971 dollars is equivalent to roughly $1.5 million today. The ransom was assembled from multiple Seattle banks in unmarked twenty-dollar bills. Every serial number was photographed before delivery — a list that would become crucial to the investigation.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Jump',
        },
        {
          type: 'paragraph',
          content: 'At 7:40 PM, Flight 305 took off again, heading south. Two F-106 fighter jets scrambled from McChord Air Force Base to shadow the aircraft — but at the low altitude and slow speed the hijacker demanded, they couldn\'t keep up without stalling. They lost visual contact.',
        },
        {
          type: 'paragraph',
          content: 'Somewhere over southwestern Washington, the hijacker lowered the aft staircase of the Boeing 727 — a unique feature of the aircraft that allowed stairs to be deployed during flight. At approximately 8:13 PM, the crew felt a sudden change in air pressure. The plane\'s tail shifted upward briefly, then leveled. In the cockpit, a warning light indicated the rear stairs were open.',
        },
        {
          type: 'paragraph',
          content: 'The man in the dark suit was gone.',
        },
        {
          type: 'paragraph',
          content: 'He had jumped into freezing rain, 200-mile-per-hour winds, and the pitch-black wilderness of the Pacific Northwest. The temperature was 7 degrees below zero with wind chill. He was wearing a business suit and loafers. He was carrying $200,000 in a bank bag. And he was never seen again.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Search',
        },
        {
          type: 'paragraph',
          content: 'The FBI launched one of the most extensive manhunts in American history. Hundreds of agents fanned out across the dense forests of southwestern Washington. Army soldiers joined the search. Helicopters scoured the wilderness. The estimated drop zone — somewhere along the Lewis River between Ariel and Lake Merwin — was searched inch by inch.',
        },
        {
          type: 'paragraph',
          content: 'They found nothing. No parachute. No body. No money. No sign that anyone had ever landed there. The man had stepped out of an airplane into the night and simply ceased to exist.',
        },
        {
          type: 'paragraph',
          content: 'Theories proliferated. Had he died on impact? The jump conditions were nearly impossible — even experienced skydivers would have struggled to survive. Had he made it to the ground and frozen to death? The November weather was brutal. Had he escaped entirely? If so, why hadn\'t any of the ransom money surfaced?',
        },
        {
          type: 'quote',
          content: 'We were searching for a needle in a haystack, except the needle might have been 300 feet up in a tree, buried under snow, or washed downstream. We had no idea where he landed. We still don\'t.',
          attribution: 'FBI Special Agent Ralph Himmelsbach',
          role: 'Lead investigator',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Money',
        },
        {
          type: 'paragraph',
          content: 'For eight years, nothing. Not a single bill from the ransom appeared anywhere in the world. The serial numbers were checked against every deposit, every transaction, every suspicious twenty-dollar bill. Nothing matched.',
        },
        {
          type: 'paragraph',
          content: 'Then, on February 10, 1980, an eight-year-old boy named Brian Ingram was digging a fire pit on the banks of the Columbia River near Vancouver, Washington. He unearthed three bundles of twenty-dollar bills — 294 bills in total, worth $5,800. The serial numbers matched the Cooper ransom.',
        },
        {
          type: 'paragraph',
          content: 'This was the first and last physical evidence ever recovered from the hijacking. How did the money get there? The bills were degraded but still bundled in the original bank rubber bands. They had been underwater for years. Investigators speculated they had washed downstream from the original drop zone — but the Columbia River doesn\'t flow from that area. The money\'s journey remains unexplained.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Missing $194,200',
          content: 'Only $5,800 of the ransom was ever found. If Cooper survived, where\'s the rest of the money? If he died, why wasn\'t more recovered? Neither the man nor 97% of the ransom has ever been accounted for.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Suspects',
        },
        {
          type: 'paragraph',
          content: 'Over the decades, the FBI investigated over a thousand suspects. Some were plausible. Some were absurd. A few became famous.',
        },
        {
          type: 'paragraph',
          content: 'Richard Floyd McCoy, a Vietnam helicopter pilot and explosives expert, hijacked a plane in 1972 using a nearly identical method and parachuted out with $500,000. He was caught within days and sentenced to 45 years. The FBI insists McCoy wasn\'t Cooper — he didn\'t match witness descriptions. True crime investigators aren\'t so sure.',
        },
        {
          type: 'paragraph',
          content: 'Robert Rackstraw, an Army veteran with paratrooper training, was investigated for years. He loved the attention, neither confirming nor denying involvement. He died in 2019 without ever being charged.',
        },
        {
          type: 'paragraph',
          content: 'Sheridan Peterson, a smoke jumper and Boeing employee who had inside knowledge of the 727, was considered a strong suspect until the FBI determined he was working that evening.',
        },
        {
          type: 'paragraph',
          content: 'The list goes on. Every few years, someone claims to have identified Cooper — a dying confession, a deathbed letter, a relative\'s suspicious behavior. None have been proven.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Legend',
        },
        {
          type: 'paragraph',
          content: 'D.B. Cooper became something unusual: a folk hero. Unlike most hijackers, he didn\'t hurt anyone. He was polite to the flight attendants, reportedly leaving them tips. He didn\'t grandstand or make political demands. He just wanted money, and he got it, and he disappeared.',
        },
        {
          type: 'paragraph',
          content: 'In the Pacific Northwest, Cooper became a kind of Robin Hood figure — even though he didn\'t give the money to anyone but himself. The mystique was irresistible: a lone man defeating the FBI, the airlines, and physics itself. He outsmarted everyone and got away with it. Maybe.',
        },
        {
          type: 'paragraph',
          content: 'Ariel, Washington — the town nearest the presumed drop zone — holds an annual "D.B. Cooper Days" celebration. There\'s a D.B. Cooper merchandise industry. Books, documentaries, podcasts, and movies have kept the case alive for generations. Cooper became bigger than the crime.',
        },
        {
          type: 'quote',
          content: 'People love Cooper because he was competent. He had a plan, he executed it, and he vanished. In a world where everybody gets caught, there\'s something appealing about someone who didn\'t.',
          attribution: 'Geoffrey Gray',
          role: 'Author, "Skyjack: The Hunt for D.B. Cooper"',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Closing',
        },
        {
          type: 'paragraph',
          content: 'On July 12, 2016, the FBI officially suspended active investigation of the D.B. Cooper case. After forty-five years, the Bureau had run out of leads. The case file — sixty volumes, thousands of pages — was effectively closed.',
        },
        {
          type: 'paragraph',
          content: 'The FBI\'s final assessment: Cooper probably didn\'t survive the jump. The conditions were too severe, his equipment too minimal, his landing zone too remote. He likely died in the wilderness, his body consumed by animals and weather, his ransom money scattered or buried beneath decades of fallen trees.',
        },
        {
          type: 'paragraph',
          content: 'But the FBI also admitted they don\'t actually know. They never found a body. They never found a parachute. They never found anyone who saw Cooper land. The case is closed, but the mystery isn\'t solved.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'Somewhere in the forested hills between Portland and Seattle, the answer might still exist — a body, a parachute, a bag of deteriorating twenty-dollar bills. Or maybe Cooper made it out. Maybe he spent the money. Maybe he\'s been watching the documentaries and laughing.',
        },
        {
          type: 'paragraph',
          content: 'The man in seat 18C stepped out of an airplane and into legend. Whether he survived to enjoy it, only he knows. And after fifty years, he\'s not talking.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Visit the Drop Zone',
          content: 'The presumed drop zone is near Ariel, Washington, about 40 miles northeast of Portland. D.B. Cooper Days is held annually on the Saturday before Thanksgiving. The area is remote, forested, and largely unchanged since 1971.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'In 1971, D.B. Cooper hijacked a plane, collected $200,000, and parachuted into the Pacific Northwest wilderness. He was never found. The FBI officially closed the case in 2016.',
  },
}

export const articles: Article[] = [dbCooper]
