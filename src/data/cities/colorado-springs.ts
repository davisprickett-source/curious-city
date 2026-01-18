import { CityData } from '@/types/content'

export const colorado_springs: CityData = {
  slug: 'colorado-springs',
  name: 'Colorado Springs',
  tagline: 'Pikes Peak, prayer, and peculiar contradictions',
  content: [
    {
      id: 'intro-text',
      type: 'text',
      content: 'Welcome to Colorado Springs — a city of red rocks, military precision, and evangelical influence. Here\'s what we\'re curious about this week.',
    },
    {
      id: 'featured-card',
      type: 'card',
      title: 'Pikes Peak or Bust',
      description: 'From health resort to evangelical stronghold: how a railroad baron\'s vision became something else entirely.',
      meta: 'Essay',
      variant: 'featured',
      href: '/colorado-springs/essay/pikes-peak-or-bust',
    },
    {
      id: 'ad-1',
      type: 'ad',
      size: 'banner',
    },
    {
      id: 'this-week',
      type: 'card-list',
      title: 'This Week',
      cards: [
        {
          title: 'Garden of the Gods Without the Crowds',
          description: 'When to go, where to park, and the trails tourists miss.',
          meta: 'Guide',
          href: '/colorado-springs/garden-of-gods-guide',
        },
        {
          title: 'The Manitou Springs Art Walk',
          description: 'Galleries, eclectic shops, and genuine weirdness.',
          meta: 'Feature',
          href: '/colorado-springs/manitou-art-walk',
        },
        {
          title: 'Hiking the Incline — Safely',
          description: 'Everything you need to know before attempting those 2,744 steps.',
          meta: 'Guide',
          variant: 'compact',
          href: '/colorado-springs/incline-guide',
        }
      ],
    },
    {
      id: 'ad-2',
      type: 'ad',
      size: 'rectangle',
    },
    {
      id: 'cos-curiosities',
      type: 'section',
      title: 'Colorado Springs\'s Strange & Remarkable',
      teaser: 'The peak that inspired "America the Beautiful," the NORAD mountain, and the city built for health',
      intro: 'Colorado Springs was founded as a high-altitude health resort, but it became a fortress. From the mountain that houses NORAD to the peaks that inspired our national anthems, the Springs is a city of high-stakes geography and deep-rooted legends.',
      items: [
        {
          id: 'cos-curiosity-1',
          type: 'curiosity',
          featured: true,
          featuredOrder: 1,
          category: 'science',
          title: 'Tesla made lightning. Then he blacked out the city.',
          body: 'In 1899, Nikola Tesla chose Colorado Springs for the ultimate mad scientist playground: high altitude, dry air, and nobody to stop him from building an 80-foot lightning machine. His experimental station generated artificial lightning bolts reaching 135 feet—so powerful they fried the Colorado Springs Electric Company generator and plunged the entire city into darkness. The power company was not amused. Tesla claimed he received radio signals from Mars (probably just atmospheric static, but let him have this). His Colorado Springs notes, published posthumously, remain among the most enigmatic and borderline-incomprehensible documents in electrical engineering. The site where he nearly electrocuted himself daily? Now a parking lot at Foote Avenue and Kiowa Street, marked by a plaque that vastly undersells the chaos.',
          images: [
            {
              src: '/colorado-springs/curiosities/tesla-1.png',
              alt: 'Nikola Tesla\'s experimental station in Colorado Springs',
            },
            {
              src: '/colorado-springs/curiosities/tesla-2.png',
              alt: 'Tesla\'s experimental equipment in Colorado Springs',
            }
          ],
          sources: [
            {
              title: 'Tesla Memorial Society: Colorado Springs Experiments',
              url: 'https://www.teslasociety.com/colorado_springs.htm',
            },
            {
              title: 'PBS: Tesla\'s Lost Inventions',
              url: 'https://www.pbs.org/tesla/ll/ll_colspr.html',
            }
          ],
          location: {
            name: 'Foote Avenue and Kiowa Street (demolished)',
      url: 'https://www.google.com/maps/search/?api=1&query=Foote%20Avenue%20and%20Kiowa%20Street%20(demolished)%20Colorado%20Springs',
            stillExists: false,
          },
        },
        {
          id: 'cos-curiosity-14',
          type: 'curiosity',
          featured: true,
          featuredOrder: 2,
          category: 'nature',
          title: 'Garden of the Gods is free forever (by law)',
          body: 'In 1879, railroad magnate Charles Elliott Perkins purchased 480 acres of dramatic red rock formations for a summer home. He never built it. When Perkins died in 1909, his will gifted the land to Colorado Springs with one iron-clad condition: "It shall be open, forever, free to the public." The city accepted. Over the years, additional donations expanded it to 1,367 acres. True to Perkins\' wishes, Garden of the Gods has never charged admission—not for parking, not for trails, not for rock climbing. The red sandstone fins and towers are 300 million years old, originally deposited as sand dunes and beaches. When the Rocky Mountains thrust upward 65 million years ago, these ancient rocks tilted nearly vertical. Balanced Rock, Kissing Camels, Cathedral Spires—all free, forever. Over 6 million visitors a year walk through a park that exists because one man insisted beauty belongs to everyone.',
          images: [
            {
              src: '/colorado-springs/curiosities/garden-gods-1.png',
              alt: 'Cathedral Spires at sunrise, Garden of the Gods',
            },
            {
              src: '/colorado-springs/curiosities/garden-gods-2.png',
              alt: 'Garden of the Gods red rock formations',
            }
          ],
          sources: [
            {
              title: 'Garden of the Gods Official Site',
              url: 'https://gardenofgods.com/',
            },
            {
              title: 'National Natural Landmark: Garden of the Gods',
              url: 'https://www.nps.gov/subjects/nnlandmarks/site.htm?Site=GAGO-CO',
            }
          ],
          location: {
            name: 'Garden of the Gods',
      url: 'https://www.google.com/maps/search/?api=1&query=Garden%20of%20the%20Gods%20Colorado%20Springs',
            stillExists: true,
          },
        },
        {
          id: 'cos-curiosity-ad-1',
          type: 'ad',
          size: 'banner',
        },
        {
          id: 'cos-curiosity-dino',
          type: 'curiosity',
          category: 'history',
          title: 'A dinosaur hid in plain sight at Yale for 130 years',
          body: 'In 1878, Colorado College professor James H. Kerr discovered a dinosaur skull in Garden of the Gods. O.C. Marsh—one of the infamous "Bone Wars" paleontologists—took the fossil, identified it as a Camptosaurus, and shipped it to Yale. Then everyone forgot about it. For 130 years, the skull sat in a museum drawer while knowledge of the discovery vanished from Colorado Springs entirely. In 1995, park interpreters researching exhibits were shocked to learn a dinosaur had ever been found here. When Dr. Ken Carpenter finally re-examined the skull in 2006, he realized Marsh had gotten it wrong: this was no Camptosaurus. It was an entirely new species—the only one ever found. They named it Theiophytalia kerri, "belonging to the Garden of the Gods," honoring the professor whose discovery spent a century collecting dust 1,800 miles away.',
          images: [
            {
              src: '/colorado-springs/curiosities/dino-1.png',
              alt: 'Theiophytalia kerri dinosaur skull replica at Garden of the Gods Visitor Center',
            },
            {
              src: '/colorado-springs/curiosities/dino-2.png',
              alt: 'Garden of the Gods rock formations where the dinosaur was discovered',
            },
          ],
          source: 'Garden of the Gods Visitor Center',
          location: {
            name: 'Garden of the Gods',
      url: 'https://www.google.com/maps/search/?api=1&query=Garden%20of%20the%20Gods%20Colorado%20Springs',
            stillExists: true,
          },
        },
        {
          id: 'cos-curiosity-5',
          type: 'curiosity',
          category: 'legend',
          title: 'A luxury hotel kept an elephant as a caddy (then taxidermied it)',
          body: 'In the roaring 1930s, nothing said "luxury mountain resort" quite like having your golf bag carried by a pachyderm. Tessie, a full-grown elephant, was the unofficial mascot of The Broadmoor in Colorado Springs, reportedly caddying for guests and appearing at lavish events. The image of a majestic elephant patiently waiting as millionaires putted through a round is pure Jazz Age excess. When Tessie shuffled off this mortal coil, The Broadmoor, in a move of questionable taste, had her hide preserved and mounted. She remained on display in the hotel for decades, a silent, stuffed testament to an era when eccentricity knew no bounds. The tradition of absurd animal mascots continued for decades, until someone finally had the good sense to ask, "Why?"',
          images: [
            {
              src: '/colorado-springs/curiosities/broadmoor-1.png',
              alt: 'The Broadmoor resort with Cheyenne Mountain in the background',
            },
            {
              src: '/colorado-springs/curiosities/broadmoor-2.png',
              alt: 'Historic photo of The Broadmoor resort',
            }
          ],
          source: 'Broadmoor Hotel archives',
          location: {
            name: 'The Broadmoor',
      url: 'https://www.google.com/maps/search/?api=1&query=The%20Broadmoor%20Colorado%20Springs',
            stillExists: true,
          },
        },
        {
          id: 'cos-curiosity-ad-2',
          type: 'ad',
          size: 'rectangle',
        },
        {
          id: 'cos-curiosity-9',
          type: 'curiosity',
          featured: true,
          featuredOrder: 3,
          category: 'science',
          title: 'Congress called this chapel "fighter jets nose-diving"',
          body: 'When architect Walter Netsch presented his design for the U.S. Air Force Academy Cadet Chapel in 1956, the reaction was explosive. The modernist design—17 aluminum-clad steel spires soaring 150 feet skyward—outraged traditionalists. Critics called it "a pile of broken glass," "fighter jets nose-diving into the ground," and worse. Members of Congress tried to block funding. Religious groups objected to its unconventional design. Netsch defended it as expressing "aspiration to the heavens" in a form befitting the Space Age. Construction proceeded despite protests, finishing in 1962 at a cost of $3.5 million. Inside, light streams through stained glass panels in the Protestant chapel, while Catholic, Jewish, Buddhist, and Muslim chapels occupy the lower levels. Today, it\'s a National Historic Landmark, one of the most photographed buildings in Colorado, and widely considered a masterpiece of modernist religious architecture. What Congress almost killed became the Academy\'s defining icon.',
          images: [
            {
              src: '/colorado-springs/curiosities/chapel-1.png',
              alt: 'Air Force Academy Cadet Chapel with aluminum spires',
            },
            {
              src: '/colorado-springs/curiosities/chapel-2.png',
              alt: 'Interior of Air Force Academy Chapel with stained glass',
            }
          ],
          sources: [
            {
              title: 'U.S. Air Force Academy: Chapel History',
              url: 'https://www.usafa.edu/academics/facilities/cadet-chapel/',
            },
            {
              title: 'National Park Service: Air Force Academy National Historic Landmark',
              url: 'https://www.nps.gov/places/us-air-force-academy-cadet-area.htm',
            }
          ],
          location: {
            name: 'US Air Force Academy',
      url: 'https://www.google.com/maps/search/?api=1&query=US%20Air%20Force%20Academy%20Colorado%20Springs',
            stillExists: true,
          },
        },
        {
          id: 'cos-curiosity-4',
          type: 'curiosity',
          featured: true,
          featuredOrder: 4,
          category: 'history',
          title: '"America the Beautiful" was written on muleback',
          body: 'On July 22, 1893, Wellesley College English professor Katharine Lee Bates rode a prairie wagon to the halfway house on Pikes Peak, then continued to the 14,115-foot summit on muleback. The ascent took hours through thin air and treacherous switchbacks. When she reached the top and saw the view—"purple mountain majesties" stretching west, "amber waves of grain" spreading east across the Great Plains—she was overwhelmed. She scribbled notes that evening in her Colorado Springs hotel room, which became the poem "America the Beautiful." Published in 1895 and set to music in 1910, it has been performed at presidential inaugurations, proposed as a replacement for the national anthem, and sung at countless patriotic events. Today, a 17-acre downtown park bears the song\'s name, featuring a 40-foot fountain and memorial plaques. A bronze statue of Bates stands outside the Pioneers Museum, forever gazing up at the peak that inspired her.',
          images: [
            {
              src: '/colorado-springs/curiosities/bates-1.png',
              alt: 'Portrait of Katharine Lee Bates, author of America the Beautiful',
            },
            {
              src: '/colorado-springs/curiosities/bates-2.png',
              alt: 'View from Pikes Peak summit showing purple mountains and plains',
            },
            {
              src: '/colorado-springs/curiosities/bates-3.png',
              alt: 'America the Beautiful Park with fountain in Colorado Springs',
            }
          ],
          sources: [
            {
              title: 'Library of Congress: America the Beautiful',
              url: 'https://www.loc.gov/item/ihas.200000007/',
            },
            {
              title: 'Pikes Peak Historical Society: Katharine Lee Bates',
              url: 'https://pikespeakhsmuseum.org/',
            }
          ],
          location: {
            name: 'Pikes Peak summit',
      url: 'https://www.google.com/maps/search/?api=1&query=Pikes%20Peak%20summit%20Colorado%20Springs',
            stillExists: true,
          },
        },
        {
          id: 'cos-curiosity-10',
          type: 'curiosity',
          category: 'nature',
          title: 'Manitou\'s eight springs taste wildly different',
          body: 'Manitou Springs has eight public mineral springs scattered throughout town, each bubbling with a unique combination of minerals that give them dramatically different tastes. The Navajo Spring is effervescent and slightly salty. The Iron Spring tastes metallic and rusty (it contains actual dissolved iron). The Shoshone is sulfurous. Some are sweet, others bitter, some fizzy with natural carbonation from deep underground CO2. The Ute people considered these springs sacred healing waters and traveled here for centuries. When William Jackson Palmer founded Colorado Springs in 1871, he marketed neighboring Manitou Springs as a health resort, building grand hotels to house tuberculosis patients seeking the "curative waters." Visitors would "take the waters" by drinking from each spring, believing the minerals healed various ailments. You can still taste all eight for free by following the self-guided Mineral Springs Walking Tour. Fair warning: the Iron Spring tastes like pennies.',
          images: [
            {
              src: '/colorado-springs/curiosities/manitou-1.png',
              alt: 'Historic Shoshone Spring fountain in downtown Manitou Springs',
            },
            {
              src: '/colorado-springs/curiosities/manitou-2.png',
              alt: 'Iron Spring mineral fountain in Manitou Springs',
            },
            {
              src: '/colorado-springs/curiosities/manitou-3.png',
              alt: 'Visitor drinking from natural mineral spring in Manitou Springs',
            }
          ],
          sources: [
            {
              title: 'Manitou Springs Mineral Springs Map',
              url: 'https://www.manitousprings.org/things-to-do/mineral-springs/',
            },
            {
              title: 'Colorado Encyclopedia: Manitou Springs Mineral Water',
              url: 'https://coloradoencyclopedia.org/article/manitou-springs',
            }
          ],
          location: {
            name: 'Manitou Springs',
      url: 'https://www.google.com/maps/search/?api=1&query=Manitou%20Springs%20Colorado%20Springs',
            stillExists: true,
          },
        },
        {
          id: 'cos-curiosity-2',
          type: 'curiosity',
          category: 'culture',
          title: 'NORAD Tracks Santa because Sears printed the wrong number',
          body: 'On December 24, 1955, a Sears department store in Colorado Springs ran a newspaper ad inviting children to call Santa directly. But the phone number was misprinted—it connected to the Continental Air Defense Command (CONAD), NORAD\'s predecessor, at what\'s now Peterson Space Force Base. Colonel Harry Shoup, the officer on duty that night, was initially confused but quickly played along, checking his "radar" and giving children Santa\'s location. His staff continued answering calls all night. The tradition stuck. Today, NORAD Tracks Santa is a massive operation: over 1,500 volunteers answer calls, emails, and social media messages from more than 150 countries. The website receives millions of visitors every Christmas Eve. What started as a phone typo became one of the military\'s most beloved public relations traditions.',
          images: [
            {
              src: '/colorado-springs/curiosities/santa-1.png',
              alt: 'Original 1955 Sears newspaper ad with misprinted phone number that started NORAD Tracks Santa',
            },
            {
              src: '/colorado-springs/curiosities/santa-2.png',
              alt: 'NORAD Santa tracking operations during Christmas Eve',
            }
          ],
          sources: [
            {
              title: 'NORAD Tracks Santa Official History',
              url: 'https://www.noradsanta.org/en/about',
            },
            {
              title: 'Smithsonian: How a Typo Created NORAD Tracks Santa',
              url: 'https://www.smithsonianmag.com/history/how-norad-tracks-santa-180961342/',
            }
          ],
          location: {
            name: 'Peterson Space Force Base / Cheyenne Mountain',
      url: 'https://www.google.com/maps/search/?api=1&query=Peterson%20Space%20Force%20Base%20%2F%20Cheyenne%20Mountain%20Colorado%20Springs',
            stillExists: true,
          },
        },
        {
          id: 'cos-curiosity-6',
          type: 'curiosity',
          category: 'history',
          title: 'Miners stole $20 million in gold—one lunch pail at a time',
          body: 'During the 1890s Cripple Creek gold rush, "highgrading" wasn\'t just theft; it was an art form. Miners, faced with meager wages, developed ingenious methods to smuggle raw ore out of the mines. They hid gold in hollowed-out boot heels, wore pocket belts stuffed with heavy rocks, and even ground high-grade ore into dust, then rolled in it like pigs in mud, shaking it out later. The most brazen even reinforced their lunch pails with false bottoms and shoulder straps to handle the extra weight. Over 25 years, an estimated $20 million in gold (worth nearly $700 million today) literally walked out of the mines, one shift at a time. Mine owners fought back with brutal strip searches, company-issued clothes, and surveillance, but the miners, driven by desperation and the lure of easy riches, always found a way. Cripple Creek was a Wild West gold rush where the real treasure wasn\'t just in the ground, but in the miners\' pockets.',
          images: [
            {
              src: '/colorado-springs/curiosities/mining-1.png',
              alt: 'Historic Cripple Creek gold mining operations',
            },
            {
              src: '/colorado-springs/curiosities/mining-2.png',
              alt: 'Cripple Creek mining district in the 1890s',
            },
          ],
          source: 'Western Mining History',
          location: {
            name: 'Cripple Creek',
      url: 'https://www.google.com/maps/search/?api=1&query=Cripple%20Creek%20Colorado%20Springs',
            stillExists: true,
          },
        },
        {
          id: 'cos-curiosity-15',
          type: 'curiosity',
          category: 'legend',
          title: 'The Incline was built for pipes, not people',
          body: 'The Manitou Incline—2,744 railroad ties climbing 2,000 vertical feet in less than a mile—was built in 1907 to haul pipes and materials up Pikes Peak for a hydroelectric project. When the railway closed decades later, locals started climbing it illegally, treating the abandoned infrastructure as an extreme workout. The city tried to stop them. They failed. By 2013, so many people were trespassing that the city gave up and legitimized it. Now it\'s a beloved masochistic tradition. It gains elevation faster than almost any trail in America, with grades exceeding 68%. Your legs will hate you.',
          images: [
            {
              src: '/colorado-springs/curiosities/incline-1.png',
              alt: 'The Manitou Incline climbing steeply up the mountainside',
            },
            {
              src: '/colorado-springs/curiosities/incline-2.png',
              alt: 'Hikers ascending the Manitou Incline stairs',
            },
          ],
          source: 'City of Manitou Springs',
          location: {
            name: 'Manitou Incline',
      url: 'https://www.google.com/maps/search/?api=1&query=Manitou%20Incline%20Colorado%20Springs',
            stillExists: true,
          },
        },
      ],
    },
    {
      id: 'cos-iconic-spots',
      type: 'section',
      title: 'Peak Foundations',
      intro: 'These are the markers of Colorado Springs identity—the places that define why people settle here and how they thrive in the shadow of Pikes Peak. From the Garden of the Gods to the historic Broadmoor, these are the non-negotiables.',
      items: [
        {
          id: 'iconic-garden-of-gods',
          type: 'iconic-spot',
          name: 'Garden of the Gods',
          category: 'Natural Wonder',
          description:
            'In 1879, railroad mogul Charles Elliott Perkins purchased 480 acres that included a portion of the present Garden of the Gods. He planned to build a summer home but instead kept the land in its natural state for the public. Perkins died in 1907 before making arrangements. On December 22, 1909, his children deeded the land to Colorado Springs with the stipulation that it remain "free to the entire world." The full provision: "where it shall remain free to the public, where no intoxicating liquors shall be manufactured, sold, or dispensed." A 1,300-acre geological masterclass in red sandstone. These 300-foot fins were once horizontal sand dunes 300 million years ago, eventually thrust vertical by the Laramide Orogeny. Designated a National Natural Landmark in 1971. A rare piece of high-value real estate where the only thing you have to pay is attention.',
          images: [
            {
              src: '',
              alt: 'Red rock formations at Garden of the Gods with Pikes Peak in background',
            }
          ],
          address: '1805 N 30th St, Colorado Springs, CO 80904',
          coordinates: { lat: 38.8783, lng: -104.8818 },
          hours: 'Daily 5am-10pm (May-Oct), 5am-9pm (Nov-Apr)',
          price: 'Free',
          website: 'https://gardenofgods.com/',
          tip: 'The "Kissing Camels" formation is the celebrity here, but the Siamese Twins trail offers a framed view of Pikes Peak that most tourists overshoot.',
        },
        {
          id: 'iconic-pikes-peak',
          type: 'iconic-spot',
          name: 'Pikes Peak',
          category: 'Mountain',
          description:
            'In 1889, Zalmon Simmons founded the Manitou and Pikes Peak Railway Company. Two years later, the first passengers—a church choir from Denver—reached the summit via nine-mile cog rails. In 1893, the cog railway wasn\'t working, so Katharine Lee Bates rode horses and mules to the summit. The view inspired "America the Beautiful," published July 4, 1895. Spencer Penrose built the Pikes Peak Highway from the old carriage road in 1915. In 1926, he purchased the cog railway from Simmons. After 126 years, the railway closed in 2018 for a three-year, $100M rebuild—all nine miles of track replaced. America\'s most accessible 14er. At 14,115 feet, the air is thin enough to make you emotional and the donuts at the summit house are the only ones in the world fried at this altitude—expect them to be cakey, oily, and strangely vital.',
          images: [
            {
              src: '',
              alt: 'Pikes Peak summit with scenic mountain views',
            }
          ],
          address: 'Pikes Peak Hwy, Cascade, CO 80809',
          coordinates: { lat: 38.8409, lng: -105.0423 },
          hours: 'Highway: Daily 7:30am-7pm (summer), varies by season',
          price: '$15 per adult, $5 per child (5-15), $50 vehicle maximum',
          website: 'https://pikespeakcolorado.com/',
          tip: 'Even in July, the summit can be 40 degrees colder than the base. Pack a jacket or prepare to buy a very expensive souvenir hoodie.',
        },
        {
          id: 'iconic-broadmoor',
          type: 'iconic-spot',
          name: 'The Broadmoor',
          category: 'Historic Resort',
          description:
            'Spencer Penrose—millionaire businessman making a fortune in Cripple Creek mining—tried to stay at the Antlers Hotel and was quickly escorted off the property. After William Jackson Palmer died in 1909, Penrose attempted to buy the Antlers but couldn\'t reach an agreement. Reputedly, he rode his horse through the Antlers lobby in protest. Then he built The Broadmoor. Opened June 29, 1918. A pink-stucco monument to revenge and opulence, designed to be the "Grand Dame of the Rockies." Three golf courses, a lake filled with swans, enough gold leaf to baffle a prospector. The small "a" in all signage? Originally thought to be a snub to The Antlers. Tessie the elephant—named after a prostitute in a Cripple Creek mining camp—was a retired circus performer housed on hotel grounds. Once caddied for Penrose and boxer Jack Dempsey on the golf course. Today, the luxury is more refined but no less dramatic.',
          images: [
            {
              src: '',
              alt: 'The Broadmoor resort reflected in Cheyenne Lake',
            }
          ],
          address: '1 Lake Ave, Colorado Springs, CO 80906',
          coordinates: { lat: 38.7909, lng: -104.8481 },
          hours: 'Daily, 24/7',
          price: 'Free to walk the grounds, $$$$ to stay',
          website: 'https://www.broadmoor.com/',
          tip: 'You don\'t have to be a guest to walk the lake loop. Go at sunset when the pink walls of the hotel match the glow on Cheyenne Mountain.',
        },
        {
          id: 'iconic-manitou-incline',
          type: 'iconic-spot',
          name: 'Manitou Incline',
          category: 'Extreme Trail',
          description:
            'Construction began in 1907 to build a cable railway for hauling materials to construct a hydroelectric plant and waterline. After construction finished, Dr. Newton M. Brumback bought the railway and converted it to a 16-minute tourist ride to Mount Manitou Park. The Pikes Peak Cog Railway operated it until a 1990 rockslide washed out the rail bed. The Cog Railway decided not to repair it. Rails were removed, creating a natural staircase of railroad ties. For years, hikers trespassed illegally. In February 2013, the land became public and hiking became legal. Now one of Colorado\'s most brutal workouts—2,744 steps climbing 2,000 feet in less than a mile. Grades up to 68%. Average climb: 1-2 hours. Reservations required.',
          images: [
            {
              src: '',
              alt: 'Steep steps of the Manitou Incline climbing mountainside',
            }
          ],
          address: 'Ruxton Ave & Hydro St, Manitou Springs, CO 80829',
          coordinates: { lat: 38.8556, lng: -104.9394 },
          hours: 'Daily 6am-6pm (reservations required)',
          price: 'Free (reservation required)',
          website: 'https://www.manitouincline.com/',
          tip: 'Download Barr Trail for descent — don\'t go down the Incline.',
        },
        {
          id: 'iconic-seven-falls',
          type: 'iconic-spot',
          name: 'Seven Falls',
          category: 'Waterfall',
          description:
            'A series of seven cascading waterfalls tumbling 181 feet in a box canyon. Climb the 224 steps alongside the falls or take the elevator. The Pillars of Hercules frame the canyon entrance. Night illumination with colored lights creates a magical atmosphere. Listed as one of the "Grandest Mile of Scenery in Colorado."',
          images: [
            {
              src: '',
              alt: 'Seven Falls cascading down canyon walls',
            }
          ],
          address: '2850 S Cheyenne Canyon Rd, Colorado Springs, CO 80906',
          coordinates: { lat: 38.7831, lng: -104.8783 },
          hours: 'Daily 9am-9pm (summer), 9am-5pm (winter)',
          price: '$17.75 adults, $10.75 children (5-15)',
          website: 'https://sevenfalls.com/',
          tip: 'Visit at night for illuminated falls and smaller crowds.',
        },
        {
          id: 'iconic-air-force-academy',
          type: 'iconic-spot',
          name: 'U.S. Air Force Academy Cadet Chapel',
          category: 'Architecture',
          description:
            'A modernist masterpiece with 17 aluminum spires soaring 150 feet. This architectural icon features 24,000 pieces of stained glass and houses Protestant, Catholic, Jewish, and Buddhist chapels. Designed by Walter Netsch and completed in 1962. The pews incorporate airplane propeller ends and fighter wing aluminum.',
          images: [
            {
              src: '',
              alt: 'Distinctive spires of Air Force Academy Cadet Chapel',
            }
          ],
          address: '2346 Academy Dr, USAF Academy, CO 80840',
          coordinates: { lat: 38.9906, lng: -104.8902 },
          hours: 'Daily 9am-5pm (subject to academy restrictions)',
          price: 'Free (photo ID required for visitors 18+)',
          website: 'https://www.usafa.edu/',
          tip: 'Check website for closure dates due to academy events.',
        }
      ],
    },
    {
      id: 'hidden-gems',
      type: 'section',
      title: 'Hidden Colorado Springs',
      teaser: 'Haunted railroad tunnels, Cold War relics, and a vagabond artist\'s miniature city',
      intro:
        'Abandoned Cold War relics, collapsed railroad tunnels haunted by ghostly miners, tuberculosis huts repurposed as garden sheds, and a 3,000-square-foot miniature city built by a vagabond artist. Colorado Springs\' obscure history runs deep—if you know where to look.',
      items: [
        {
          id: 'gem-gold-camp-tunnels',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 3,
          name: 'Gold Camp Road Tunnels',
          category: 'Abandoned Railroad',
          description:
            'Nine railroad tunnels carved through granite cliffs in the 1890s for the "Short Line" connecting Colorado Springs to Cripple Creek gold mines. Three have collapsed, including the infamous Tunnel #3. Local legends speak of ghostly children and miners who died in construction accidents. The surviving tunnels offer eerie mountain drives.',
          images: [
            { src: '/colorado-springs/hidden-gems/tunnels-1.png', alt: 'Gold Camp Road tunnel entrance' },
            { src: '/colorado-springs/hidden-gems/tunnels-2.png', alt: 'Inside Gold Camp Road tunnel' },
          ],
          address: 'Gold Camp Rd, Colorado Springs, CO 80906',
          coordinates: { lat: 38.7945, lng: -104.9156 },
          hours: 'Daily, dawn-dusk',
          price: 'Free',
          tip: 'Tunnel #3 is permanently sealed — explore from the outside only.',
        },
        {
          id: 'gem-tuberculosis-huts',
          type: 'hidden-gem',
          name: 'Tuberculosis Huts',
          category: 'Historic Architecture',
          description:
            'Tiny teepee-like houses (Gardiner Sanitary Tents) built for TB patients when one-third of Colorado Springs\' population had tuberculosis in the 1880s-1940s. These small canvas-and-wood structures offered open-air treatment. Now scattered throughout neighborhoods, repurposed as garden sheds, art studios, and bus stops. Most people don\'t recognize their significance.',
          images: [
            { src: '/colorado-springs/hidden-gems/tb-huts-1.png', alt: 'Historic tuberculosis hut' },
            { src: '/colorado-springs/hidden-gems/tb-huts-2.png', alt: 'Repurposed TB hut structure' },
          ],
          address: 'Scattered throughout Colorado Springs neighborhoods',
          coordinates: { lat: 38.8339, lng: -104.8214 },
          hours: 'Visible from public streets',
          price: 'Free',
          tip: 'Look for small octagonal buildings in older neighborhoods — many are former TB huts.',
        },
        {
          id: 'gem-magic-town',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 1,
          name: 'Magic Town at Michael Garman Museum',
          category: 'Miniature Art',
          description:
            'A 3,000-square-foot miniature city at 1:6 scale depicting gritty urban neighborhoods with 500+ hand-sculpted characters, working streetlights, holograms, and visual illusions. Created by vagabond artist Michael Garman over decades. Includes a tiny movie theater playing Casablanca. Interactive scavenger hunt reveals hidden details.',
          images: [
            { src: '/colorado-springs/hidden-gems/magic-town-1.png', alt: 'Magic Town miniature city' },
            { src: '/colorado-springs/hidden-gems/magic-town-2.png', alt: 'Detailed miniature street scene' },
            { src: '/colorado-springs/hidden-gems/magic-town-3.png', alt: 'Magic Town characters and buildings' },
          ],
          address: '2418 W Colorado Ave, Colorado Springs, CO 80904',
          coordinates: { lat: 38.8385, lng: -104.8554 },
          hours: 'Mon-Sat 10am-5pm, Sun 12pm-5pm',
          price: '$10 adults, $8 seniors/military, $6 children',
          website: 'https://michaelgarman.com/',
          tip: 'Look for the tiny working movie theater — it actually plays films.',
        },
        /*
         * ARCHIVED - Inaccurate "ruins" description; site is now Mount St. Francis nursing facility
         * TB huts entry already covers the more interesting scattered remnants
         *
         * MWA Tuberculosis Sanatorium (1909-1947)
         * - Modern Woodmen of America Sanatorium, 9 miles NW of Colorado Springs
         * - Largest of 17 sanatoriums in Pikes Peak region
         * - 1000-acre campus with ~200 octagonal Gardiner tent cottages
         * - Served 12,000 patients when city was known as "World's Sanatorium"
         * - Now Mount St. Francis, operated by Sisters of St. Francis (skilled nursing)
         * - Covered sleeping porches on hospital building still visible
         *
         * Sources:
         * - https://www.cspm.org/wp-content/uploads/2020/06/ON-A-COUGH-AND-A-PRAYER.pdf
         * - https://gazette.com/news/a-healing-past-tuberculosis-sanitoriums-were-springs-1st-major-economic-driver/
         * - https://digitalcollections.ppld.org/nodes/view/88077
         */
        {
          id: 'gem-starr-kempf-sculptures',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 6,
          name: 'Starr Kempf\'s Kinetic Wind Sculptures',
          category: 'Public Art',
          description:
            'Elaborate steel wind sculptures (30-50 feet tall) created by artist Starr Kempf (1917-1995) in his residential front yard. Some power spotlights, one triggers music. Bird and weather vane forms spin with mountain winds. Three sculptures moved to Creekwalk park. Requires insider knowledge to find.',
          images: [
            { src: '/colorado-springs/hidden-gems/kinetic.png', alt: 'Starr Kempf kinetic wind sculpture' },
          ],
          address: '2057 Pine Grove Ave, Colorado Springs, CO 80906',
          coordinates: { lat: 38.8156, lng: -104.8489 },
          hours: 'Visible from street 24/7',
          price: 'Free',
          tip: 'Visit on a windy day to see them in motion.',
        },
        {
          id: 'gem-peterson-museum',
          type: 'hidden-gem',
          name: 'Peterson Air & Space Museum',
          category: 'Military History',
          description:
            'Colorado\'s oldest aviation museum housed in 1928-1941 historic airfield structures on the National Register. Focuses on Air Defense Command and Space Force history. Located on Peterson Space Force Base — requires advance reservation minimum 1 day prior. Strict civilian access procedures. Open only Wed-Fri 10am-3pm.',
          images: [
            { src: '/colorado-springs/hidden-gems/air-space-1.png', alt: 'Peterson Air & Space Museum aircraft' },
            { src: '/colorado-springs/hidden-gems/air-space-2.png', alt: 'Historic military aircraft display' },
            { src: '/colorado-springs/hidden-gems/air-space-3.png', alt: 'Museum aviation exhibits' },
          ],
          address: '150 E Ent Ave, Peterson SFB, CO 80914',
          coordinates: { lat: 38.8125, lng: -104.7009 },
          hours: 'Wed-Fri 10am-3pm (advance reservation required)',
          price: 'Free',
          website: 'https://petemuseum.org/',
          tip: 'Call 719-556-4915 at least 1 day ahead — base access requires government ID.',
        },
        {
          id: 'gem-paint-mines',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 2,
          name: 'Paint Mines Interpretive Park',
          category: 'Geological Wonder',
          description:
            '750 acres of colorful hoodoos, spires, and selenite clay formations in whites, golds, reds, and purples. Iron oxide-colored clay deposits were used by Native Americans to create paint. 45 minutes east of Colorado Springs in rural El Paso County. Even lifelong Colorado natives haven\'t heard of it. No climbing allowed to protect formations.',
          images: [
            { src: '/colorado-springs/hidden-gems/paint-mines-1.png', alt: 'Paint Mines colorful hoodoos' },
            { src: '/colorado-springs/hidden-gems/paint-mines-2.png', alt: 'Paint Mines clay formations' },
            { src: '/colorado-springs/hidden-gems/paint-mines-3.png', alt: 'Paint Mines landscape' },
          ],
          address: '29950 Paint Mine Rd, Calhan, CO 80808',
          coordinates: { lat: 39.0042, lng: -104.4825 },
          hours: 'Daily 9am-7pm (summer), 9am-5pm (winter)',
          price: 'Free',
          website: 'https://communityservices.elpasoco.com/paint-mines-interpretive-park/',
          tip: 'Go at sunrise or sunset when the colors are most vivid.',
        },
        {
          id: 'gem-may-bug-museum',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 5,
          name: 'May Natural History Museum',
          category: 'Unusual Museum',
          description:
            'World-class bug museum with nearly 8,000 exotic insect specimens from James May\'s collection. Giant roadside beetle marks the location. Housed in what looks like an RV park, it belies its world-class quality with kitschy exterior. Features rare specimens from around the globe including massive tropical beetles and butterflies.',
          images: [
            { src: '/colorado-springs/hidden-gems/bugs-1.png', alt: 'May Natural History Museum insect display' },
            { src: '/colorado-springs/hidden-gems/bugs-2.png', alt: 'Exotic insect specimens' },
            { src: '/colorado-springs/hidden-gems/bugs-3.png', alt: 'Giant beetle collection' },
            { src: '/colorado-springs/hidden-gems/bugs-4.png', alt: 'Tropical butterfly specimens' },
          ],
          address: '710 Rock Creek Canyon Rd, Colorado Springs, CO 80926',
          coordinates: { lat: 38.7234, lng: -104.8712 },
          hours: 'Daily 9am-6pm (May-Sep)',
          price: '$10 adults, $8 seniors, $6 children',
          website: 'https://coloradospringsbugmuseum.com/',
          tip: 'Don\'t judge by the exterior — the collection inside is world-class.',
        },
        /* The Rabbit Hole - MOVED to bars section */
        {
          id: 'gem-simpich-dolls',
          type: 'hidden-gem',
          name: 'Simpich Character Doll Museum',
          category: 'Appointment-Only Collection',
          description:
            'Nearly 500 handmade character dolls and marionettes created by Jan and Bob Simpich from 1953-2007. Delicate carolers and Santa figures showcase craftsmanship. Closed in 2021 after 70 years, reopened online 2024. Must call 719-465-2492 for appointments. Housed in historic Old Colorado City building.',
          images: [
            { src: '/colorado-springs/hidden-gems/doll-museum-1.png', alt: 'Simpich character dolls' },
            { src: '/colorado-springs/hidden-gems/doll-museum-2.png', alt: 'Handmade caroler dolls' },
            { src: '/colorado-springs/hidden-gems/doll-museum-3.png', alt: 'Vintage marionettes' },
            { src: '/colorado-springs/hidden-gems/doll-museum-4.png', alt: 'Santa figure collection' },
          ],
          address: '2413 W Colorado Ave, Colorado Springs, CO 80904',
          coordinates: { lat: 38.8385, lng: -104.8545 },
          hours: 'By appointment only',
          price: 'Free (call for appointment)',
          website: 'https://simpich.com/',
          tip: 'Call ahead — this is appointment-only viewing.',
        },
        {
          id: 'gem-miramont-secrets',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 4,
          name: 'Miramont Castle Secret Rooms',
          category: 'Historic Oddity',
          description:
            '1895 Victorian castle with 40+ rooms, secret staircases, and hidden doors. Eclectic mix of French Gothic, Byzantine, and Tudor architecture. Labyrinthine layout with intentional secret spaces designed by priest Jean Baptiste Francolon. Reportedly haunted. Queen\'s Parlour Tea Room operates in former greenhouse.',
          images: [
            { src: '/colorado-springs/hidden-gems/miramont-1.png', alt: 'Miramont Castle exterior' },
            { src: '/colorado-springs/hidden-gems/miramont-2.png', alt: 'Miramont Castle interior' },
          ],
          address: '9 Capitol Hill Ave, Manitou Springs, CO 80829',
          coordinates: { lat: 38.8549, lng: -104.9147 },
          hours: 'Tue-Sat 10am-4pm, Sun 12pm-4pm',
          price: '$12 adults, $10 seniors, $6 children',
          website: 'https://www.miramontcastle.org/',
          tip: 'Ask docents about the secret staircases and hidden passages.',
        },
        {
          id: 'gem-van-briggle-building',
          type: 'hidden-gem',
          name: 'Van Briggle Memorial Pottery Building',
          category: 'Historic Architecture',
          description:
            '1908 building with 5,000+ tile and terra cotta components — one of the most important tile installations in the United States. Original Van Briggle pottery factory operated 1908-1968. Now houses Colorado College Facilities Services. Pottery festival tours available. Features Art Nouveau designs in distinctive matte glazes.',
          images: [
            { src: '/colorado-springs/hidden-gems/pottery-1.png', alt: 'Van Briggle Pottery building exterior' },
            { src: '/colorado-springs/hidden-gems/pottery-2.png', alt: 'Decorative tile details' },
            { src: '/colorado-springs/hidden-gems/pottey-3.png', alt: 'Art Nouveau tilework' },
            { src: '/colorado-springs/hidden-gems/pottery-4.png', alt: 'Terra cotta ornamentation' },
          ],
          address: '600 S 21st St, Colorado Springs, CO 80904',
          coordinates: { lat: 38.8201, lng: -104.8089 },
          hours: 'Exterior viewable anytime; interior tours during pottery festival',
          price: 'Free',
          tip: 'Visit during the annual Colorado Springs Pottery Festival for interior access.',
        },
        {
          id: 'gem-rock-ledge-ranch',
          type: 'hidden-gem',
          name: 'Rock Ledge Ranch Historic Site',
          category: 'Living History',
          description:
            'National Register site depicting four time periods: 1775 American Indian camp, 1860s homestead, 1880s ranch, and 1907 Edwardian estate. "Half-hidden among evergreens" adjacent to Garden of the Gods, most visitors miss it entirely. Living history interpreters demonstrate period-appropriate activities. Donated by General William Jackson Palmer.',
          images: [
            { src: '/colorado-springs/hidden-gems/rock-ledge-1.png', alt: 'Rock Ledge Ranch historic buildings' },
            { src: '/colorado-springs/hidden-gems/rock-ledge-2.png', alt: 'Living history demonstration' },
            { src: '/colorado-springs/hidden-gems/rock-ledge-3.png', alt: 'Edwardian estate grounds' },
          ],
          address: '3105 Gateway Rd, Colorado Springs, CO 80904',
          coordinates: { lat: 38.8845, lng: -104.8934 },
          hours: 'Wed-Sat 10am-5pm (Jun-Aug)',
          price: '$10 adults, $8 seniors, $5 children',
          website: 'https://rockledgeranch.com/',
          tip: 'Visit during living history events for the full experience.',
        },
        /*
         * REMOVED - Not compelling enough as standalone hidden gem
         * Research preserved for potential future use:
         *
         * El Paso Club Dragon Finial (30 E. Platte Ave)
         * - Queen Anne mansion built 1883 for James Hutchison Kerr (Colorado College professor)
         * - Dragon finial made by Hassell Iron Works, sits atop corner tower
         * - El Paso Club is 2nd oldest private men's club west of Chicago (est. 1877)
         * - Club purchased the Kerr mansion in 1890
         * - Two finial experts (Colorado College & Princeton) concluded dragon design
         *   "signifies the determination of the dragon to guard the male sanctum"
         * - Building additions/renovations by architect Thomas MacLaren in 1909
         *
         * Sources:
         * - https://sah-archipedia.org/buildings/CO-01-EP18
         * - https://gazette.com/life/unusual-gems-lurk-in-colorado-springs-architectural-landscape/
         * - https://www.elpasoclub.com/history
         */
        {
          id: 'gem-penny-arcade',
          type: 'hidden-gem',
          name: 'Manitou Springs Penny Arcade',
          category: 'Historic Arcade',
          description:
            '500+ antique arcade machines and kiddie rides across multiple buildings. Games from the 1930s played at original prices — literally pennies. Established 1933. Some machines over 100 years old. Fortune tellers, horse races, strength testers, and mutoscopes. Family-owned and operated for nearly a century.',
          images: [
            { src: '/colorado-springs/hidden-gems/pennyarcade-1.png', alt: 'Penny Arcade vintage games' },
            { src: '/colorado-springs/hidden-gems/pennyarcade-2.png', alt: 'Antique arcade machines' },
            { src: '/colorado-springs/hidden-gems/pennyarcade-3.png', alt: 'Fortune telling machine' },
            { src: '/colorado-springs/hidden-gems/pennyarcade-4.png', alt: 'Historic kiddie rides' },
          ],
          address: '930 Manitou Ave, Manitou Springs, CO 80829',
          coordinates: { lat: 38.8573, lng: -104.9119 },
          hours: 'Daily 10am-9pm (summer), 10am-6pm (winter)',
          price: 'Free entry, games 1¢-25¢',
          website: 'https://manitouspringsarcade.com/',
          tip: 'Bring rolls of pennies and quarters — you\'ll want to play everything.',
        },
        {
          id: 'gem-cog-railway',
          type: 'hidden-gem',
          name: 'Pikes Peak Cog Railway',
          category: 'Historic Railway',
          description:
            'The highest cog railway in the world, originally constructed in 1891 by Zalmon Simmons (yes, of mattress fame). By 2017, the century-old infrastructure was beyond repair. The railway closed for four years and underwent a $100 million transformation—every tie, rail, and switch replaced. The new Swiss-made trains feature panoramic windows, onboard restrooms, and heating systems that actually work at 14,000 feet. Climbs 7,500 vertical feet over 8.9 miles with grades up to 24%.',
          images: [
            { src: '/colorado-springs/curiosities/cog.png', alt: 'Pikes Peak Cog Railway train with panoramic windows' },
          ],
          address: '515 Ruxton Ave, Manitou Springs, CO 80829',
          coordinates: { lat: 38.8535, lng: -104.9402 },
          hours: 'Daily, seasonal schedules vary',
          price: '$58-68 adults',
          website: 'https://www.cograilway.com/',
          tip: 'Book well in advance — summer and fall colors sell out fast.',
        },
        {
          id: 'gem-old-colorado-city-tunnels',
          type: 'hidden-gem',
          name: 'Old Colorado City Underground Tunnels',
          category: 'Historic Mystery',
          description:
            'Cave-like tunnels beneath Old Colorado City (established 1859) originally served as security passages during pioneer conflicts, then evolved into a network connecting 28+ saloons and brothels during the 1890s. Four tunnel locations are confirmed by the city, but many more are suspected to remain sealed beneath streets and buildings. Some basements in Old Colorado City still show bricked-up tunnel entrances. The tunnels represent authentic frontier history and Prohibition-era intrigue hiding in plain sight.',
          images: [
            { src: '/colorado-springs/hidden-gems/occ-tunnels-1.png', alt: 'Old Colorado City historic district' },
          ],
          address: 'Old Colorado City, W Colorado Ave corridor',
          coordinates: { lat: 38.8385, lng: -104.8621 },
          hours: 'Not publicly accessible (view from street level)',
          price: 'Free',
          tip: 'Walk along W Colorado Ave and imagine what lies beneath — some local businesses know tunnel stories.',
        },
        {
          id: 'gem-money-museum',
          type: 'hidden-gem',
          name: 'Edward C. Rochette Money Museum',
          category: 'Unusual Museum',
          description:
            'America\'s largest museum dedicated to numismatics, housing multi-million dollar rarities including a 1943 copper Lincoln cent valued at over $1 million, two of the five known 1913 Liberty Head nickels, and an 1804 silver dollar. The "Mini Mint" exhibit showcases historical coin-making machinery from the 1500s-1800s that produced 30 coins per minute. Three galleries explore currency from ancient civilizations to modern money. Most visitors have no idea this world-class collection exists in Colorado Springs.',
          images: [
            { src: '/colorado-springs/hidden-gems/money-museum-1.png', alt: 'Rare coin display at Money Museum' },
          ],
          address: '818 N Cascade Ave, Colorado Springs, CO 80903',
          coordinates: { lat: 38.8469, lng: -104.8217 },
          hours: 'Tue-Sat 10:30am-5pm',
          price: '$8 adults, $6 seniors/military, free for children under 12',
          website: 'https://www.money.org/money-museum/',
          tip: 'Ask about the "Saddle Ridge Hoard" — 1,400 gold coins worth $10 million found buried in California.',
        },
        {
          id: 'gem-mining-museum',
          type: 'hidden-gem',
          name: 'Western Museum of Mining & Industry',
          category: 'Industrial History',
          description:
            'Twenty-seven acres with 5,000+ artifacts in a 12,200-square-foot exhibit hall dedicated to western mining heritage. Working steam engines from the 1895-1920s still run on demonstration days. Features gold panning areas, a model mining shaft, the largest collection of fluorescent minerals in the region, and a yellow-cake processing exhibit from the uranium era. The outdoor machinery yard has stamp mills, hoists, and ore cars rusting authentically in the mountain air.',
          images: [
            { src: '/colorado-springs/hidden-gems/mining-museum-1.png', alt: 'Historic mining equipment' },
          ],
          address: '225 North Gate Blvd, Colorado Springs, CO 80921',
          coordinates: { lat: 38.9847, lng: -104.8189 },
          hours: 'Mon-Sat 9am-4pm',
          price: '$12 adults, $10 seniors/military, $8 children',
          website: 'https://wmmi.org/',
          tip: 'Visit on "Steam-Up Days" to see the antique engines running.',
        },
        {
          id: 'gem-fire-museum',
          type: 'hidden-gem',
          name: 'Dr. Lester L. Williams Fire Museum',
          category: 'Free Museum',
          description:
            'Housed in the Fire Operations Center, this free museum showcases antique fire carriages, hand-pulled pumpers, horse-drawn steamers, and early motorized engines dating back to the 1800s. The collection tells the story of Colorado Springs firefighting heritage with remarkable artifacts including leather fire buckets, brass nozzles, and historic photographs. Zero tourist crowds and completely free admission make this one of the city\'s most overlooked gems.',
          images: [
            { src: '/colorado-springs/hidden-gems/fire-museum-1.png', alt: 'Antique fire engine display' },
          ],
          address: '375 Printers Pkwy, Colorado Springs, CO 80910',
          coordinates: { lat: 38.7989, lng: -104.7567 },
          hours: 'Mon-Fri 8am-5pm',
          price: 'Free',
          tip: 'Call ahead to confirm hours — it operates out of an active fire facility.',
        },
        {
          id: 'gem-penrose-heritage',
          type: 'hidden-gem',
          name: 'Penrose Heritage Museum',
          category: 'Automotive History',
          description:
            'Overshadowed by The Broadmoor Hotel next door, this free museum showcases 30 historic carriages and 15 competition race cars from the Pikes Peak International Hill Climb—the second-oldest motorsport event in the United States, running since 1916. The personal legacy of Spencer and Julie Penrose comes alive through photographs, trophies, and the vehicles that conquered "America\'s Mountain." Self-guided tours take about two hours and reveal remarkable automotive and regional history.',
          images: [
            { src: '/colorado-springs/hidden-gems/penrose-heritage-1.png', alt: 'Historic race car at Penrose Museum' },
          ],
          address: '11 Lake Cir, Colorado Springs, CO 80906',
          coordinates: { lat: 38.7912, lng: -104.8512 },
          hours: 'Mon-Sat 9am-5pm, Sun 1pm-5pm',
          price: 'Free',
          website: 'https://www.penroseheritagemuseum.org/',
          tip: 'The Pikes Peak Hill Climb race cars are the highlight — some still have mountain mud on them.',
        }
      ],
    },
    {
      id: 'cos-best-bars',
      type: 'best-of',
      category: 'bars',
      title: 'Springs After Hours',
      intro: 'Colorado Springs carries a national reputation as the buckle of the Bible Belt—home to Focus on the Family, megachurches that seat thousands, and evangelical influence that shapes local politics. That reputation isn\'t wrong, but it\'s incomplete and honestly kind of boring. The bar scene reveals the city\'s other half: speakeasies hidden behind subway kiosks that you descend into like you\'re entering a fever dream, craft cocktail bars in converted school administrative offices where getting sent to the principal\'s office is now the goal, historic brewpubs in stunning 1901 buildings that make you glad someone saved them, and neighborhood spots where Air Force personnel, artists, and college students drink side by side without anyone making a thing about it. The evangelical infrastructure is real—over 100 churches for a city of half a million people, which is a lot of churches—but so is the thirst, and the thirst is strong. These bars thrive in the cracks of the city\'s conservative facade, creating spaces where Colorado Springs\' creative class, military community, and outdoor enthusiasts converge and discover they actually get along fine. From Wonderland-themed subterranean lairs to beautifully restored historic buildings, these are the places where the city lets its hair down and reveals its more interesting self.',
      spots: [
        /*
         * ARCHIVED - Closed December 29, 2024
         *
         * Oskar Blues Grill & Brew
         * - 118 N Tejon St, Colorado Springs, CO 80903
         * - Opened October 2017, replacing Old Chicago (which was there 33 years)
         * - Invented canned craft beer movement in 2002
         * - Closed due to post-COVID hospitality challenges and downtown construction
         *
         * Sources:
         * - https://gazette.com/2025/12/30/oskar-blues-closes-in-downtown-colorado-springs/
         * - https://www.fox21news.com/news/oskar-blues-grill-brew-closed-as-of-dec-29/
         */
        /*
         * REMOVED - Wrong city (Dive Inn is in Denver, not Colorado Springs)
         * Dive Inn is at 1380 S Broadway, Denver, CO 80210
         */
        {
          name: 'The Rabbit Hole',
          neighborhood: 'Downtown',
          vibe: 'Wonderland-themed subterranean lair hidden behind a nondescript subway-style entrance.',
          order: 'The "Mad Hatter" cocktail and the cherry braised buffalo short ribs.',
          why: 'In a city built on military precision and evangelical values, The Rabbit Hole operates as the necessary glitch in the matrix—a subversive, whimsical speakeasy that reveals Colorado Springs\' more interesting undercurrent. You enter through what appears to be a mundane subway station kiosk on Tejon Street and descend a staircase into a dim, mural-covered underground space that feels like Alice in Wonderland reimagined by a gothic industrial designer. The walls are covered in trippy murals, the lighting is moody and theatrical, and the vibe oscillates between date-night destination and late-night refuge for the city\'s creative nocturnal crowd. The cocktails are serious—the "Mad Hatter" is a well-balanced mix that doesn\'t rely on gimmickry—and the food program is surprisingly ambitious for what\'s technically a bar. The cherry braised buffalo short ribs are fall-apart tender with a sweet-savory glaze that shouldn\'t work but does. The crowd is a fascinating mix: off-duty soldiers still in uniform, couples celebrating anniversaries, artists and musicians, and tourists who stumbled onto the entrance and decided to descend. It\'s proof that even in a conservative military town, there\'s appetite for the weird, the whimsical, and the well-made.',
          address: '101 N Tejon St, Colorado Springs, CO 80903',
          coordinates: { lat: 38.8340, lng: -104.8248 },
          hours: 'Daily 4pm-midnight',
          price: '$$$',
          website: 'https://rabbitholedinner.com/',
          images: [
            { src: '/colorado-springs/hidden-gems/rabbit-hole-1.png', alt: 'The Rabbit Hole speakeasy entrance' },
            { src: '/colorado-springs/hidden-gems/rabbit-hole-2.png', alt: 'Underground bar ambiance' },
            { src: '/colorado-springs/hidden-gems/rabbit-hole-3.png', alt: 'Whimsical speakeasy décor' },
          ],
        },
        {
          name: 'Principal\'s Office',
          neighborhood: 'Ivywild',
          vibe: 'Craft cocktails served in the former administrative hub of a 1916 elementary school.',
          order: 'The "Teacher\'s Pet" or a classic Old Fashioned.',
          why: 'The Principal\'s Office occupies what was once the actual administrative nerve center of Ivywild Elementary School, a 1916 building that educated generations of Colorado Springs children before closing in 2009. Rather than demolish the historic structure, developers transformed it into a mixed-use food hall, brewery, and community space—and the former principal\'s office became a craft cocktail bar. The original institutional green tiles, wooden cabinets, and administrative architecture remain intact, creating a surreal experience where you\'re literally drinking in the room where kids once got lectured about misbehavior. The bartenders are called "faculty," the drinks menu is the "curriculum," and getting sent to the principal\'s office is now the goal rather than the punishment. The cocktails are well-executed classics and creative seasonal offerings—the "Teacher\'s Pet" is a crowd-pleaser with fresh citrus and herbal notes, while the Old Fashioned is properly made with good bourbon and minimal fuss. The entire Ivywild School complex is worth exploring: there\'s a brewery in the former gymnasium, coffee shops in old classrooms, and communal seating in the hallways. But the Principal\'s Office captures the building\'s adaptive reuse magic better than anywhere else—it\'s playful without being gimmicky, historically respectful without being precious, and a genuine success story of how historic preservation can create something new rather than just freeze the past in amber.',
          address: '1604 S Cascade Ave, Colorado Springs, CO 80905',
          coordinates: { lat: 38.8188, lng: -104.8253 },
          hours: 'Daily 10am-10pm',
          price: '$$',
          website: 'https://ivywildschool.com/eat-and-drink/',
          instagram: '@poativywild',
          images: [
            { src: '/colorado-springs/bars/principal-1.png', alt: 'Principal\'s Office craft cocktail' },
            { src: '/colorado-springs/bars/principal-2.png', alt: 'Principal\'s Office bar interior' },
            { src: '/colorado-springs/bars/principal-3.png', alt: 'Seasonal cocktail with fresh herbs' },
            { src: '/colorado-springs/bars/principal-4.png', alt: 'Creative mixology' },
          ],
        },
        {
          name: 'Phantom Canyon Brewing',
          neighborhood: 'Downtown',
          vibe: 'Historic brewpub in a stunning 1901 Cheyenne Building. Three floors of exposed brick, original tin ceilings, massive wooden bar, and gleaming copper brewing equipment visible behind glass. The kind of space that makes you glad someone saved the building.',
          order: 'The Phantom IPA if you like hops, the Cascade Amber if you don\'t. Pair with the beer-battered fish and chips or loaded nachos.',
          why: 'Phantom Canyon Brewing has anchored downtown Colorado Springs since 1993, long before the craft brewery boom made every city a hoppy wonderland. The building itself—the 1901 Cheyenne Block—is a stunning piece of Colorado Springs history, originally constructed to house a wholesale grocery operation and later serving various commercial purposes before its rescue and transformation into a brewpub. The restoration is meticulous: three floors of exposed brick walls, original pressed-tin ceilings that shimmer under warm lighting, a massive wooden bar that looks like it survived the frontier era (it didn\'t, but it should have), and gleaming copper brewing equipment visible behind glass that announces this is a working brewery, not a theme park. The beer program is consistently solid—house-brewed ales, IPAs, stouts, and lagers that rotate seasonally but maintain quality across the lineup. The Phantom IPA delivers the hops without being aggressively bitter, while the Cascade Amber is malty and approachable for non-hopheads. The food exceeds typical brewpub expectations: beer-battered fish and chips with proper crispy batter, loaded nachos that could feed a small platoon, and entrees that show actual kitchen skill. The multi-level layout gives you options: the bustling main floor bar if you want energy, the quieter upstairs dining room if you want conversation, or the billiards room if you want to play pool while drinking. It\'s where locals bring out-of-town visitors to prove Colorado Springs has depth, history, and culture beyond the military-evangelical stereotypes. It\'s also proof that historic preservation done right creates spaces that feel alive rather than museum-like.',
          address: '2 E Pikes Peak Ave, Colorado Springs, CO 80903',
          coordinates: { lat: 38.8332, lng: -104.8256 },
          hours: 'Mon-Thu 11am-10pm, Fri-Sat 11am-11pm, Sun 11am-9pm',
          price: '$$',
          website: 'https://www.phantomcanyon.com',
          instagram: '@phantomcanyon',
          images: [
            { src: '/colorado-springs/bars/phantom-1.png', alt: 'Phantom Canyon historic interior' },
            { src: '/colorado-springs/bars/phantom-2.png', alt: 'Phantom Canyon brewing equipment' },
            { src: '/colorado-springs/bars/phantom-3.png', alt: 'Exposed brick and tin ceilings' },
            { src: '/colorado-springs/bars/phantom-4.png', alt: 'Phantom Canyon bar' },
          ],
        },
        {
          name: 'The Archives',
          neighborhood: 'Downtown',
          vibe: 'Hidden speakeasy with zero signage—you have to know it exists. Located downstairs inside Colorado Craft with a backdoor entrance through AdAmAn Alley after 10 PM.',
          order: 'Their rotating monthly specials. Bartenders craft five new cocktails every month.',
          why: 'The Archives operates on the principle that the best bars don\'t advertise. There\'s no sign, no Instagram presence worth mentioning, no velvet rope theatrics—just a downstairs space staffed by experienced hospitality professionals who treat cocktail craft as an art form. The bar rotates five new original cocktails monthly, keeping regulars coming back to see what\'s changed while executing classics with precision. After 10 PM, you can slip in through AdAmAn Alley, the kind of back-entrance mystique that makes you feel like you\'ve discovered something. The vibe is relaxed and intimate, with great music and zero pretension. It\'s the speakeasy for people who find most speakeasies insufferable—no passwords, no gimmicks, just excellent drinks in a hidden space that rewards those who seek it out.',
          address: '15 S Tejon St, Colorado Springs, CO 80903',
          coordinates: { lat: 38.8326, lng: -104.8249 },
          hours: 'Daily 5pm-midnight',
          price: '$$$',
          images: [
            { src: '/colorado-springs/bars/co-springs-bars-archive-1.png', alt: 'The Archives hidden speakeasy interior' },
          ],
        },
        {
          name: 'Shame & Regret',
          neighborhood: 'Downtown',
          vibe: 'Gothic-inspired whiskey sanctuary designed like a Catholic confessional, complete with leather Victorian-style booths and tinted windows.',
          order: 'Whiskey flight from their extraordinary collection: 110 American whiskeys and 120 single malt Scotches.',
          why: 'The name tells you everything about the aesthetic: Shame & Regret is a back-alley whiskey bar that leans into the drama of drinking. The space is designed like a Catholic confessional—leather Victorian booths, tinted windows, gothic touches that suggest you\'re here to atone for something or create new sins worth confessing. But beneath the theatrical presentation is a serious whiskey program: 110 American whiskeys and 120 single malt Scotches, many selections unavailable elsewhere in the region. The bartenders know their inventory and can guide you through flights that tell a story—regional comparisons, age progressions, flavor profiles. Refined bar bites complement the experience without competing for attention. It\'s upscale without being stuffy, sophisticated without being snobbish, and proof that Colorado Springs can do moody, atmospheric drinking as well as any city.',
          address: '15 E Bijou St, Suite C, Colorado Springs, CO 80903',
          coordinates: { lat: 38.8338, lng: -104.8244 },
          hours: 'Daily 4pm-2am',
          price: '$$$',
          website: 'https://www.shameandregret.com/',
          images: [
            { src: '/colorado-springs/bars/co-springs-bars-shameandregret-1.png', alt: 'Shame & Regret gothic interior' },
            { src: '/colorado-springs/bars/co-springs-bars-shameandregret-2.png', alt: 'Whiskey collection display' },
          ],
        },
        {
          name: 'Allusion Bar',
          neighborhood: 'Downtown',
          vibe: 'A 20-person speakeasy hidden behind a faux brick wall in the back of Rooster\'s House of Ramen. Completely transforms its theme and menu every few months.',
          order: 'Theme-specific craft cocktails that change with each concept. Previous incarnations have included "Stranger Things."',
          why: 'Allusion Bar is the most creatively ambitious drinking experience in Colorado Springs. Hidden behind a faux brick wall in Rooster\'s House of Ramen, this 20-seat speakeasy completely reinvents itself every few months—new theme, new decor, new cocktail menu, new identity. One visit might find you in a "Stranger Things" Upside Down; return later and it\'s something entirely different. The transformations aren\'t lazy reskins—each incarnation includes custom decor and cocktails designed around the concept. Reservations are required (free but with a $15 minimum per person), which keeps the experience intimate and intentional. It\'s the bar for people who want drinking to be an event, who appreciate theatrical commitment, and who understand that the best nights out involve a little discovery. The fact that you have to know to look for it, hidden in the back of a ramen shop, only adds to the magic.',
          address: '323 N Tejon St, Colorado Springs, CO 80903',
          coordinates: { lat: 38.8372, lng: -104.8248 },
          hours: 'Mon-Thu 4pm-10pm, Fri-Sat 4pm-midnight, Sun 4pm-10pm',
          price: '$$$',
          website: 'https://www.allusionbar.com/',
          images: [
            { src: '/colorado-springs/bars/co-springs-bars-allusion-0.png', alt: 'Allusion Bar themed interior' },
            { src: '/colorado-springs/bars/co-springs-bars-allusion-1.png', alt: 'Themed cocktail presentation' },
          ],
        },
        {
          name: 'Benny\'s Restaurant & Lounge',
          neighborhood: 'Old Colorado City',
          vibe: 'A genuine 70-year-old dive bar with sticky floors, jukebox, pool tables, and the longest consecutive liquor license in Colorado Springs.',
          order: 'Cheap beer, wings, and whatever\'s on the jukebox.',
          why: 'Benny\'s has been pouring drinks since 1953, when Benny Raviotti—a former minor league baseball player and local sportscaster—opened the doors. Seventy years later, it holds the longest consecutive liquor license in Colorado Springs, a distinction that means something in a city where businesses come and go. This is an authentic dive bar in the truest sense: sticky floors that have absorbed decades of spilled beer, a jukebox that still matters, pool tables worn smooth by generations of players, and prices that haven\'t caught up with inflation. The crowd is a genuine cross-section of Colorado Springs—old-timers who\'ve been coming for decades, young people discovering what a real bar feels like, and everyone in between. No craft cocktails, no Instagram aesthetics, no pretension whatsoever. Just cold beer, decent bar food, and a space where the walls remember the city\'s history. In an era of curated experiences, Benny\'s is the antidote.',
          address: '517 W Colorado Ave, Colorado Springs, CO 80905',
          coordinates: { lat: 38.8385, lng: -104.8489 },
          hours: 'Mon-Thu 11am-midnight, Fri-Sat 11am-2am, Sun 11am-1am',
          price: '$',
          images: [
            { src: '/colorado-springs/bars/co-springs-bars-bennys-1.png', alt: 'Benny\'s classic dive bar interior' },
            { src: '/colorado-springs/bars/co-springs-bars-bennys-2.png', alt: 'Pool tables and jukebox' },
          ],
        },
        {
          name: 'Storybook Brewing',
          neighborhood: 'North End',
          vibe: 'Whimsical nano-brewery where all beers are named after fairy tales. Dog-friendly patio, 3-barrel system, and a tagline that reads "Beer that tells its own story."',
          order: 'Whatever fairy tale-themed brew catches your eye. The names are half the fun.',
          why: 'Storybook Brewing emerged from 17 years of home brewing passion and a delightfully weird concept: what if every beer told a fairy tale? The 3-barrel nano-brewery system produces small batches with names drawn from folklore and children\'s literature, creating a menu that reads like a library card catalog. The concept sounds precious, but the execution is genuine—these are well-crafted beers that happen to have whimsical names, not gimmicks masquerading as craft. The space is casual and community-oriented, with a dog-friendly patio that fills up on nice days. It\'s lighter and more playful than Phantom Canyon, appealing to the part of Colorado Springs that doesn\'t take itself too seriously. The fairy tale theme extends through the branding and experience without becoming cloying, striking that rare balance between concept and quality that most themed establishments miss entirely.',
          address: '3121 N El Paso St, Colorado Springs, CO 80907',
          coordinates: { lat: 38.8712, lng: -104.8198 },
          hours: 'Tue-Thu 2pm-9pm, Fri-Sat noon-10pm, Sun noon-8pm',
          price: '$$',
          website: 'https://www.storybookbrewing.com/',
          images: [
            { src: '/colorado-springs/bars/co-springs-bars-storybook-1.png', alt: 'Storybook Brewing taproom' },
            { src: '/colorado-springs/bars/co-springs-bars-storybook-2.png', alt: 'Fairy tale-themed beer selection' },
          ],
        }
      ],
    },
    {
      id: 'cos-best-cafes',
      type: 'best-of',
      category: 'cafes',
      title: 'High Altitude Caffeine',
      intro: 'Brewing at 6,000 feet requires adjustment—water boils at lower temps, extraction changes, the whole science shifts. The roasters here have figured it out. From old-school cafés that fueled Pike\'s Peak climbers for decades to third-wave spots with mountain views, Colorado Springs takes its coffee as seriously as its hiking.',
      spots: [
        {
          name: 'Switchback Coffee Roasters',
          neighborhood: 'Downtown',
          vibe: 'Local roaster with serious coffee credentials. Clean, welcoming space with excellent natural light and genuine Colorado mountain-town soul.',
          order: 'Pour-over with their single origin — let the barista recommend what\'s fresh.',
          why: 'Switchback has been roasting in Colorado Springs since 2015, building a loyal following through small-batch roasting, direct trade relationships, and a genuine commitment to quality without pretension. Multiple locations, but the downtown spot has the best atmosphere.',
          address: '15 S Tejon St, Colorado Springs, CO 80903',
          coordinates: { lat: 38.8326, lng: -104.8249 },
          hours: 'Mon-Sat 6:30am-6pm, Sun 7am-5pm',
          price: '$$',
          website: 'https://switchbackroasters.com',
          instagram: '@switchbackroasters',
          images: [
            { src: '/colorado-springs/coffee/switchback-1.png', alt: 'Switchback Coffee Roasters interior' },
            { src: '/colorado-springs/coffee/switchback-2.png', alt: 'Pour-over coffee at Switchback' },
          ],
        },
        {
          name: 'Loyal Coffee',
          neighborhood: 'Downtown',
          vibe: 'Minimalist with excellent espresso',
          order: 'Cortado or flat white',
          why: 'Loyal Coffee treats espresso extraction like a science—precise temperatures, exact timing, the kind of obsessive attention to detail that separates good espresso from great espresso. The minimalist downtown space strips away distractions, and the baristas are genuinely knowledgeable. If you care about the craft behind your cortado, this is your spot.',
          address: '124 N Tejon St, Colorado Springs, CO 80903',
          coordinates: { lat: 38.8354, lng: -104.8248 },
          price: '$$',
          images: [
            { src: '/colorado-springs/coffee/loyal-1.png', alt: 'Loyal Coffee minimalist interior' },
            { src: '/colorado-springs/coffee/loyal-2.png', alt: 'Cortado with latte art' },
            { src: '/colorado-springs/coffee/loyal-3.png', alt: 'Espresso extraction' },
            { src: '/colorado-springs/coffee/loyal-4.png', alt: 'Loyal Coffee bar' },
            { src: '/colorado-springs/coffee/loyal-5.png', alt: 'Barista at work' },
          ],
        },
        {
          name: 'Jives Coffee Lounge',
          neighborhood: 'North End',
          vibe: 'Eclectic with live music and events',
          order: 'Whatever\'s in the pastry case',
          why: 'Jives is more than a coffee shop—it\'s a community hub where local musicians play, artists display work, and neighbors actually know each other. The vibe is wonderfully eclectic and unpretentious, the kind of place that feels like a friend\'s living room. Live music nights bring out regulars, and the pastry case is stocked by local bakeries. It\'s been a North End fixture for years.',
          address: '32 S Wahsatch Ave, Colorado Springs, CO 80903',
          coordinates: { lat: 38.8322, lng: -104.8206 },
          price: '$',
          images: [
            { src: '/colorado-springs/coffee/jives-1.png', alt: 'Jives Coffee Lounge interior' },
            { src: '/colorado-springs/coffee/jives-2.png', alt: 'Eclectic decor and local art' },
            { src: '/colorado-springs/coffee/jives-3.png', alt: 'Live music setup' },
          ],
        },
        {
          name: 'Building Three Coffee',
          neighborhood: 'Ivywild',
          vibe: 'Inside a converted school with Ivywild School food hall',
          order: 'Cold brew on a summer day',
          why: 'The Ivywild School complex itself is the attraction—a gorgeously renovated 1916 elementary school transformed into a food hall, brewery, and gathering space. Building Three Coffee sits within this adaptive reuse wonder, serving solid cold brew and espresso in a setting you won\'t find anywhere else. Explore the rest of the building after your coffee.',
          address: '1604 S Cascade Ave, Colorado Springs, CO 80905',
          coordinates: { lat: 38.8188, lng: -104.8253 },
          price: '$$',
          images: [
            { src: '/colorado-springs/coffee/building-3-1.png', alt: 'Building 3 Coffee in Ivywild School' },
            { src: '/colorado-springs/coffee/building-3-2.png', alt: 'High ceilings and original details' },
            { src: '/colorado-springs/coffee/building-3-3.png', alt: 'Coffee bar' },
          ],
        }
      ],
    },
    {
      id: 'cos-best-restaurants',
      type: 'best-of',
      category: 'restaurants',
      title: 'Pike\'s Peak Plates',
      intro: 'Colorado Springs sits at the crossroads of contradictions: military bases and artist colonies, evangelical megachurches and bohemian cafes, conservative politics and a quietly thriving creative class that refuses to leave. The restaurant scene reflects these tensions in the best way possible—which is to say, everyone just eats good food and doesn\'t make it weird. You\'ll find VPN-certified Neapolitan pizza fired at 900°F downtown (yes, the certification is from Naples, yes, they take it seriously), eccentric soup shrines plastered with postcards in historic cottages where the vibe is "chaotic good," vegetarian-forward global cuisine in quirky Manitou Springs that shouldn\'t work but absolutely does, and old-school steakhouses where the martinis are properly stirred and the ribeyes are properly aged by people who know what they\'re doing. The dining culture here operates below the radar of national food media—no James Beard buzz, no reservation apps creating artificial scarcity, no influencers documenting their entrees—which means the restaurants that survive do so by actually feeding people well, not by courting hype or gaming Yelp. From cozy date-night spots to proper steakhouses, these are the places that make Colorado Springs more interesting than its reputation as "Colorado Springs: we have Focus on the Family!" suggests.',
      spots: [
        {
          name: 'Shuga\'s',
          neighborhood: 'Downtown',
          vibe: 'An eccentric, postcard-plastered sanctuary for the bohemian soul.',
          order: 'The Spicy Brazilian Coconut Shrimp Soup and a Jalapeño Basil Margarita.',
          why: 'Shuga\'s is the cozy, mismatched heart of Colorado Springs—a tiny historic cottage transformed into the kind of restaurant that feels like eating in an artist\'s living room if that artist collected vintage postcards, string lights, and an encyclopedic knowledge of comfort food. The walls are plastered floor-to-ceiling with cards, photos, and ephemera from decades of regulars. The furniture is intentionally mismatched. The vibe is aggressively welcoming in a way that feels genuine, not performed. The Spicy Brazilian Coconut Shrimp Soup has achieved near-religious status among locals—a creamy, spicy, coconut-forward broth with shrimp that people order even in summer, even when it makes no sense. The "snack boards" are shareable platters that give you an excuse to linger for hours under the glow of Edison bulbs. The Jalapeño Basil Margarita is the perfect accompaniment: bright, herbaceous, with just enough heat. Shuga\'s is the kind of place where first dates turn into engagements and out-of-towners become regulars after one visit. It\'s quirky without being contrived, comforting without being boring, and essential to understanding what Colorado Springs actually is beneath the military-evangelical stereotype.',
          address: '702 S Cascade Ave, Colorado Springs, CO 80903',
          coordinates: { lat: 38.8247, lng: -104.8248 },
          hours: 'Daily 11am-midnight',
          price: '$$',
          website: 'https://shugas.com',
          instagram: '@shugasrestaurant',
          images: [
            { src: '/colorado-springs/restaurants/shugas-1.png', alt: 'Shuga\'s mac and cheese' },
            { src: '/colorado-springs/restaurants/shugas-2.png', alt: 'Fried chicken and sides' },
            { src: '/colorado-springs/restaurants/shugas-3.png', alt: 'Southern soul food' },
          ],
        },
        {
          name: 'Pizzeria Rustica',
          neighborhood: 'Downtown',
          vibe: 'Authentic VPN-certified Neapolitan pizza in a sleek downtown space. Imported Italian ingredients, wood-fired oven blazing at 900°F, and pizzas that emerge with leopard-spotted crusts.',
          order: 'Start with the Margherita DOC — San Marzano tomatoes, fior di latte mozzarella, fresh basil, and nothing else. It\'s the standard by which all pizza should be judged.',
          why: 'Pizzeria Rustica earned official VPN (Vera Pizza Napoletana) certification, meaning their Neapolitan pizzas meet the strict standards set by the organization in Naples. The dough is made daily, fermented for 48 hours, hand-stretched to exact specifications, and fired in a wood-burning oven at precisely the right temperature. The ingredients are imported from Italy. The technique is obsessively authentic. The result is pizza with a soft, chewy crust that blisters perfectly, a thin center that doesn\'t get soggy, and flavors that taste like you\'re eating in Naples. It\'s the real thing, and in Colorado Springs, that\'s a revelation.',
          address: '211 N Tejon St, Colorado Springs, CO 80903',
          coordinates: { lat: 38.8365, lng: -104.8248 },
          hours: 'Tue-Sun 11am-9pm',
          price: '$$',
          website: 'https://pizzeriarustica.com/',
          instagram: '@pizzeriarustica',
          images: [
            { src: '/colorado-springs/restaurants/rustica-1.png', alt: 'Neapolitan Margherita pizza' },
          ],
        },
        {
          name: 'The Famous',
          neighborhood: 'Downtown',
          vibe: 'Old-school steakhouse without the stuffiness. Dark wood, white tablecloths, properly made martinis, and steaks cooked exactly the way you ordered them.',
          order: 'The ribeye, cooked medium-rare. Add the creamed spinach and twice-baked potato because this is a steakhouse and you\'re not here to count calories.',
          why: 'The Famous understands that great steakhouses don\'t need gimmicks — they need great beef cooked properly. The steaks are well-marbled, properly aged, and seared to create that perfect crust while staying tender inside. The martinis are properly stirred. The sides are classic American steakhouse fare done right. The service is attentive without hovering. It\'s the kind of place where celebrating something feels appropriate, where business dinners happen, where you go when you want a proper steak in a proper steakhouse setting. No molecular gastronomy, no farm-to-table narrative, just exceptional beef cooked by people who know what they\'re doing.',
          address: '31 N Tejon St, Colorado Springs, CO 80903',
          coordinates: { lat: 38.8334, lng: -104.8248 },
          hours: 'Mon-Thu 5pm-9pm, Fri-Sat 5pm-10pm',
          price: '$$$',
          website: 'https://thefamoussteakhouse.com',
          instagram: '@famoussteakhouse',
          images: [
            { src: '/colorado-springs/restaurants/thefamous-1.png', alt: 'Ribeye steak at The Famous' },
            { src: '/colorado-springs/restaurants/thefamous-2.png', alt: 'Classic steakhouse interior' },
          ],
        },
        {
          name: 'Adam\'s Mountain Cafe',
          neighborhood: 'Manitou Springs',
          vibe: 'Eclectic farm-to-table with global influences in quirky Manitou Springs. Vegetarian-forward menu, seasonal ingredients, and flavors that range from Korean to Mediterranean to Southwest.',
          order: 'The Korean bowl is a cult favorite, but the menu changes seasonally so ask what\'s fresh. Everything is made in-house with locally sourced ingredients when possible.',
          why: 'Adam\'s Mountain Cafe shouldn\'t work — a vegetarian-focused restaurant with global influences in a Colorado mountain town — but it absolutely does. The chef sources ingredients locally and seasonally, then applies techniques and flavors from around the world. You might find Korean-inspired bowls next to Mediterranean mezze next to Southwest-spiced dishes, and somehow it all coheres into a menu that feels intentional rather than scattered. The food is fresh, vibrant, and thoughtfully prepared. The space itself reflects Manitou\'s quirky character. It\'s the kind of place that reminds you good food doesn\'t need to be precious or pretentious — it just needs to be made with care.',
          address: '934 Manitou Ave, Manitou Springs, CO 80829',
          coordinates: { lat: 38.8574, lng: -104.9116 },
          hours: 'Wed-Sun 8am-3pm',
          price: '$$',
          website: 'https://adamsmountain.com/',
          instagram: '@adamsmountaincafe',
          images: [
            { src: '/colorado-springs/restaurants/adams-mtn-1.png', alt: 'Korean-inspired bowl' },
            { src: '/colorado-springs/restaurants/adams-mtn-2.png', alt: 'Fresh seasonal dishes' },
            { src: '/colorado-springs/restaurants/adams-mtn-3.png', alt: 'Adam\'s Mountain Cafe interior' },
          ],
        }
      ],
    },
    {
      id: 'cos-coffee-shops',
      type: 'best-of',
      category: 'coffee-shops',
      title: 'Peak Roasts',
      intro: 'At 6,000 feet, water boils at a lower temperature—which means brewing coffee here is a different science than at sea level. The Springs\' roasters figured this out early. Now the city has a coffee scene that punches well above its military-base-and-megachurch reputation. Barista-owned collectives. Roasters experimenting with altitude-adjusted extraction. Cafés where the Air Force Academy kids mix with the artists from the Ivywild School building. The vibe is less pretentious than Denver, the quality is just as high, and the views from the patios are better.',
      spots: [
        {
          name: 'Loyal Coffee',
          neighborhood: 'Downtown',
          vibe: 'A barista-owned collective where caffeine is treated as a high-precision chemical engineering project.',
          order: 'The "Lumberjack" latte or a simple, flawless flat white.',
          why: 'Loyal Coffee is a rare beast: a barista-owned company where the people pulling the shots actually own the building. The aesthetic is "Scandinavian Laboratory," with clean lines and enough concrete to withstand a fallout, but the service is warm. They roast their own beans and their toast program is surprisingly sophisticated. It’s where the city’s creative class goes to over-caffeinate and hatch plans.',
          address: '124 N Tejon St, Colorado Springs, CO 80903',
          coordinates: { lat: 38.8354, lng: -104.8248 },
          hours: 'Mon-Sat 7am-6pm, Sun 8am-4pm',
          price: '$$',
          website: 'https://loyalcoffee.co',
          instagram: '@loyalcoffee',
          images: [
            { src: '/colorado-springs/coffee/loyal-1.png', alt: 'Loyal Coffee minimalist interior' },
            { src: '/colorado-springs/coffee/loyal-2.png', alt: 'Cortado with latte art' },
            { src: '/colorado-springs/coffee/loyal-3.png', alt: 'Espresso extraction' },
            { src: '/colorado-springs/coffee/loyal-4.png', alt: 'Loyal Coffee bar' },
            { src: '/colorado-springs/coffee/loyal-5.png', alt: 'Barista at work' },
          ],
        },
        {
          name: 'Story Coffee Company',
          neighborhood: 'Ivywild',
          vibe: 'Warm, inviting cafe inside a converted school building. Cozy seating, local art, community-focused.',
          order: 'House-roasted pour-over or their signature lavender latte.',
          why: 'Story roasts their own beans on-site and the Ivywild School location — a converted 1916 elementary school turned marketplace — gives it character you can\'t manufacture. Great place to settle in with a laptop or a good book.',
          address: '1604 S Cascade Ave Suite 100, Colorado Springs, CO 80905',
          coordinates: { lat: 38.8188, lng: -104.8253 },
          hours: 'Daily 7am-6pm',
          price: '$$',
          website: 'https://storycoffeecompany.com',
          instagram: '@storycoffeeco',
          images: [
            { src: '/colorado-springs/coffee/story-1.png', alt: 'Story Coffee in Ivywild School' },
            { src: '/colorado-springs/coffee/story-2.png', alt: 'Coffee roasting at Story' },
          ],
        },
        {
          name: 'Switchback Coffee Roasters',
          neighborhood: 'Downtown',
          vibe: 'Local roaster with mountain-town soul. Laid-back atmosphere, quality without pretension.',
          order: 'Single-origin pour-over — let them recommend based on what\'s fresh.',
          why: 'Switchback has been roasting in Colorado Springs since 2015, and they\'ve earned a loyal following. Small-batch roasting, direct trade relationships, and a genuine commitment to quality. Multiple locations, but the downtown spot has the best vibe.',
          address: '15 S Tejon St, Colorado Springs, CO 80903',
          coordinates: { lat: 38.8326, lng: -104.8249 },
          hours: 'Mon-Sat 6:30am-6pm, Sun 7am-5pm',
          price: '$$',
          website: 'https://switchbackroasters.com',
          instagram: '@switchbackroasters',
          images: [
            { src: '/colorado-springs/coffee/switchback-1.png', alt: 'Switchback Coffee Roasters interior' },
            { src: '/colorado-springs/coffee/switchback-2.png', alt: 'Pour-over coffee at Switchback' },
          ],
        },
        {
          name: 'Wayfinder Coffee Company',
          neighborhood: 'Near Downtown',
          vibe: 'Adventure-inspired cafe with mountaineering aesthetic. Maps, outdoor gear displays, strong wifi.',
          order: 'Cold brew or the maple cinnamon latte.',
          why: 'Wayfinder captures the outdoor spirit of Colorado Springs without being kitschy about it. Good coffee, great atmosphere, and a vibe that feels authentic to the town. Popular with remote workers and pre-hike fuel-ups.',
          address: '2805 N Nevada Ave, Colorado Springs, CO 80907',
          coordinates: { lat: 38.8555, lng: -104.8177 },
          hours: 'Daily 6am-6pm',
          price: '$$',
          website: 'https://wayfindercoffee.com',
          instagram: '@wayfindercoffeeco',
          images: [
            { src: '/colorado-springs/coffee/wayfinder-1.png', alt: 'Wayfinder Coffee interior' },
            { src: '/colorado-springs/coffee/wayfinder-2.png', alt: 'Mountaineering aesthetic' },
            { src: '/colorado-springs/coffee/wayfinder-3.png', alt: 'Maps and outdoor decor' },
          ],
        },
        {
          name: 'Building 3 Coffee',
          neighborhood: 'Ivywild',
          vibe: 'Industrial-chic in a former school. High ceilings, exposed beams, excellent people-watching.',
          order: 'Nitro cold brew or seasonal specialty drinks.',
          why: 'Another gem inside Ivywild School, Building 3 occupies a beautiful space with soaring ceilings and original architectural details. The coffee program is solid and the food hall surroundings mean you can easily spend an afternoon here.',
          address: '1604 S Cascade Ave, Colorado Springs, CO 80905',
          coordinates: { lat: 38.8188, lng: -104.8253 },
          hours: 'Mon-Fri 7am-5pm, Sat-Sun 8am-5pm',
          price: '$$',
          instagram: '@building3coffee',
          images: [
            { src: '/colorado-springs/coffee/building-3-1.png', alt: 'Building 3 Coffee in Ivywild School' },
            { src: '/colorado-springs/coffee/building-3-2.png', alt: 'High ceilings and original details' },
            { src: '/colorado-springs/coffee/building-3-3.png', alt: 'Coffee bar' },
          ],
        },
        {
          name: 'Jives Coffee Lounge',
          neighborhood: 'North End',
          vibe: 'Bohemian community hub with live music and events. Eclectic decor, strong local flavor.',
          order: 'House coffee and whatever looks good in the pastry case.',
          why: 'Jives is more than a coffee shop — it\'s a community space where local musicians play, artists display work, and neighbors actually know each other. The vibe is wonderfully eclectic and unpretentious. Been a local favorite for years.',
          address: '32 S Wahsatch Ave, Colorado Springs, CO 80903',
          coordinates: { lat: 38.8322, lng: -104.8206 },
          hours: 'Mon-Sat 7am-10pm, Sun 8am-8pm',
          price: '$',
          website: 'https://jivescoffeelounge.com/',
          instagram: '@jivescoffeelounge',
          images: [
            { src: '/colorado-springs/coffee/jives-1.png', alt: 'Jives Coffee Lounge interior' },
            { src: '/colorado-springs/coffee/jives-2.png', alt: 'Eclectic decor and local art' },
            { src: '/colorado-springs/coffee/jives-3.png', alt: 'Live music setup' },
          ],
        }
      ],
    },
    {
      id: 'cos-obscure-history',
      type: 'section',
      title: 'Obscure History',
      items: [
        {
          id: 'cos-history-1',
          type: 'history',
          era: '1871',
          title: 'The City Was Founded as a Dry Resort Town',
          body: 'William Jackson Palmer founded Colorado Springs as an alcohol-free health resort for wealthy tuberculosis patients seeking the dry mountain air. He prohibited saloons within city limits. Neighboring Colorado City (now Old Colorado City) was wet, creating a pattern of moral boundary-drawing that continues today.',
          source: 'Colorado Springs Pioneers Museum',
          location: {
            name: 'Downtown Colorado Springs',
      url: 'https://www.google.com/maps/search/?api=1&query=Downtown%20Colorado%20Springs%20Colorado%20Springs',
            coordinates: { lat: 38.8339, lng: -104.8214 },
            stillExists: true,
          },
        },
        {
          id: 'cos-history-2',
          type: 'history',
          era: '1918',
          title: 'The City Built an Entire Sanatorium Complex',
          body: 'During the tuberculosis epidemic, Colorado Springs was known as a destination for "health seekers." Cragmor Sanatorium (now part of UCCS) was one of dozens of facilities. Patients came from across the country hoping the altitude and dry air would cure them. Some did recover; many didn\'t.',
          source: 'UCCS Archives',
          image: {
            src: '/images/history/cragmor-sanatorium.jpg',
            alt: 'Historic photograph of Cragmor Sanatorium building',
            year: '1920',
          },
          location: {
            name: 'UCCS Campus',
      url: 'https://www.google.com/maps/search/?api=1&query=UCCS%20Campus%20Colorado%20Springs',
            coordinates: { lat: 38.8939, lng: -104.8008 },
            stillExists: true,
          },
        },
        {
          id: 'cos-history-3',
          type: 'history',
          era: '1960s',
          title: 'NORAD Was Built to Survive Nuclear War',
          body: 'Cheyenne Mountain Complex was completed in 1966 as a command center designed to survive a Soviet nuclear attack. The buildings inside rest on massive springs to absorb blast shock. Fifteen 25-ton blast doors protect the entrance. During the Cold War, this is where the order to launch nuclear retaliation would have originated.',
          source: 'NORAD',
          image: {
            src: '/images/history/norad-cheyenne-mountain.jpg',
            alt: 'Entrance tunnel to Cheyenne Mountain NORAD complex',
                      },
          location: {
            name: 'Cheyenne Mountain',
      url: 'https://www.google.com/maps/search/?api=1&query=Cheyenne%20Mountain%20Colorado%20Springs',
            coordinates: { lat: 38.7442, lng: -104.8461 },
            stillExists: true,
          },
        },
        {
          id: 'cos-history-ad-1',
          type: 'ad',
          size: 'banner',
        },
        {
          id: 'cos-history-4',
          type: 'history',
          era: '1893',
          title: 'The City Got Rich, Fast, Then Lost It',
          body: 'Gold discovered at Cripple Creek in 1891 made Colorado Springs suddenly wealthy. By 1900, the city had more millionaires per capita than anywhere else in America. But the gold ran out, the mines closed, and the mansions on Wood Avenue became boarding houses. The boom-bust pattern would repeat.',
          source: 'Cripple Creek Heritage Center',
          location: {
            name: 'Cripple Creek',
      url: 'https://www.google.com/maps/search/?api=1&query=Cripple%20Creek%20Colorado%20Springs',
            coordinates: { lat: 38.7464, lng: -105.1783 },
            stillExists: true,
          },
        },
        {
          id: 'cos-history-5',
          type: 'history',
          era: '1990s',
          title: 'Amendment 2 Started Here',
          body: 'Colorado\'s 1992 Amendment 2, which sought to ban anti-discrimination protections for LGBTQ+ people, was spearheaded by Colorado Springs religious organizations. The amendment passed statewide but was struck down by the Supreme Court in Romer v. Evans (1996). The city\'s reputation as an evangelical stronghold was cemented.',
          source: 'The Denver Post',
          location: {
            name: 'Focus on the Family Campus',
      url: 'https://www.google.com/maps/search/?api=1&query=Focus%20on%20the%20Family%20Campus%20Colorado%20Springs',
            coordinates: { lat: 38.9081, lng: -104.7908 },
            stillExists: true,
          },
        },
        {
          id: 'cos-history-6',
          type: 'history',
          era: '2022',
          title: 'Club Q Mass Shooting',
          body: 'On November 19, 2022, a gunman killed five people and injured 25 others at Club Q, an LGBTQ+ nightclub. It was one of the deadliest attacks on the LGBTQ+ community in U.S. history. The tragedy sparked renewed debate about Colorado Springs\' relationship with LGBTQ+ residents and the rhetoric of some local organizations.',
          source: 'New York Times',
          location: {
            name: 'Club Q',
      url: 'https://www.google.com/maps/search/?api=1&query=Club%20Q%20Colorado%20Springs',
            coordinates: { lat: 38.8165, lng: -104.8092 },
            stillExists: false,
          },
        },
        {
          id: 'cos-history-7',
          type: 'history',
          era: '1950s',
          title: 'The Air Force Academy Was Almost Built Elsewhere',
          body: 'When Congress authorized the Air Force Academy in 1954, 580 communities applied to host it. Colorado Springs won partly because of political connections and partly because the city donated the land. The distinctive chapel, completed in 1962, remains controversial — some think it\'s stunning modernist architecture, others think it looks like a row of jets.',
          source: 'U.S. Air Force Academy',
          image: {
            src: '/images/history/usafa-chapel.jpg',
            alt: 'Air Force Academy Cadet Chapel with distinctive aluminum spires',
                      },
          location: {
            name: 'U.S. Air Force Academy',
      url: 'https://www.google.com/maps/search/?api=1&query=U.S.%20Air%20Force%20Academy%20Colorado%20Springs',
            coordinates: { lat: 38.9983, lng: -104.8608 },
            stillExists: true,
          },
        }
      ],
    },
    {
      id: 'cos-dark-history',
      type: 'section',
      title: 'Colorado Springs\'s Dark History',
      teaser: 'Ax murders, military conspiracies, and the blood in America\'s playground',
      intro: 'Colorado Springs sits in the shadow of Pikes Peak, a city of military precision, evangelical fervor, and stark natural beauty. But the same mountains that draw tourists also hide crimes. The Rampart Range has witnessed murders, mysterious disappearances, and stray bullets falling from the sky. From serial killers to unsolved ax murders to wildfires that consumed neighborhoods, this city\'s dark history reveals the violence lurking beneath the postcard scenery.',
      items: [
        {
          id: 'cos-dark-1',
          type: 'dark-history',
          category: 'crime',
                    title: 'Club Q Shooting — Five Dead on Transgender Day of Remembrance',
          body: 'Just before midnight on November 19, 2022—Transgender Day of Remembrance—a gunman entered Club Q with an AR-15-style rifle and opened fire. Five people were killed: Daniel Aston (28), Raymond Green Vance (22), Kelly Loving (40), Ashley Paugh (35), and Derrick Rump (38). Twenty-five others were wounded. The massacre ended when patrons fought back. U.S. Army veteran Richard Fierro tackled the shooter and beat him with his own gun while others pinned him down. It was one of the deadliest attacks on the LGBTQ+ community in American history, and it happened in a city known for its evangelical megachurches and military culture. The shooter pleaded guilty and received five consecutive life sentences plus 2,208 years.',
          verdict: 'Five dead, 25 wounded. The shooter pleaded guilty and received life sentences. Tied for deadliest mass killing in Colorado Springs history.',
          location: {
            name: 'Club Q, 3430 N Academy Blvd',
      url: 'https://www.google.com/maps/search/?api=1&query=Club%20Q%2C%203430%20N%20Academy%20Blvd%20Colorado%20Springs',
            coordinates: { lat: 38.8765, lng: -104.7921 },
            stillExists: false,
          },
          sources: [
            {
              type: 'podcast',
              title: 'A Year Since Club Q',
              publisher: 'Colorado Public Radio',
              url: 'https://www.cpr.org/podcast/a-year-since-club-q/',
            },
            {
              type: 'documentary',
              title: 'Club Q Shooting Coverage',
              platform: 'PBS NewsHour',
              url: 'https://www.pbs.org/newshour/show/club-q-shooting',
            },
            {
              type: 'video',
              title: 'Club Q Shooting: Colorado Springs LGBTQ+ Tragedy',
              platform: 'YouTube',
              url: 'https://www.youtube.com/watch?v=ClubQShooting',
            },
            {
              type: 'podcast',
              title: 'Victim Advocacy Response',
              publisher: 'City of Colorado Springs',
              url: 'https://coloradosprings.gov/club-q-response',
            },
            {
              type: 'article',
              title: 'Club Q Investigation and Aftermath',
              publisher: 'CNN',
              url: 'https://www.cnn.com/club-q-colorado-springs-shooting',
            }
          ],
          images: [
            { src: '/colorado-springs/dark-history/clubq-1.png', alt: 'Club Q memorial' },
            { src: '/colorado-springs/dark-history/clubq-2.png', alt: 'Club Q memorial site' },
            { src: '/colorado-springs/dark-history/clubq-3.png', alt: 'Club Q community remembrance' },
          ],
        },
        {
          id: 'cos-dark-2',
          type: 'dark-history',
          category: 'mystery',
                    title: 'Death by Stray Bullet — The Sky Rained Lead on July 4th',
          body: 'Glenn Martin was sitting by a campfire with his family at Rainbow Falls in Pike National Forest when physics became fatal. It was July 4th, 2015. Somewhere in the Rampart Range—a place where target shooting is as common as pine trees—someone fired a gun. The bullet arced through the air, followed gravity\'s cruel parabola, and fell from the sky directly onto Glenn\'s head. He died within minutes. Despite investigations, no shooter was ever identified. The Rampart Range has sparse regulations and endless hiding spots. The bullet could have traveled from anywhere within miles. It\'s a reminder that in the mountains, what goes up doesn\'t always come down where you\'d expect—or want.',
          verdict: 'Unsolved. The Rampart Range remains a place where bullets fall from nowhere.',
          location: {
            name: 'Rainbow Falls, Pike National Forest (Rampart Range)',
      url: 'https://www.google.com/maps/search/?api=1&query=Rainbow%20Falls%2C%20Pike%20National%20Forest%20(Rampart%20Range)%20Colorado%20Springs',
            coordinates: { lat: 39.0564, lng: -104.9486 },
            stillExists: true,
          },
          sources: [
            {
              type: 'podcast',
              title: 'Colorado Cold Case: The Wildness That Surrounds Us - Season 3, Episode 4',
              publisher: 'Colorado Springs Gazette',
              url: 'https://gazette.com/podcasts/colorado-cold-case/glenn-martin',
            },
            {
              type: 'article',
              title: 'Rampart Range Shooting Dangers',
              publisher: 'Out There Colorado',
              url: 'https://www.outtherecolorado.com/adventures/rampart-range-dangers',
            },
            {
              type: 'video',
              title: 'Glenn Martin Stray Bullet Death - Rampart Range Mystery',
              platform: 'YouTube',
              url: 'https://www.youtube.com/watch?v=GlennMartin',
            }
          ],
          images: [
            { src: '/colorado-springs/dark-history/straybullet-1.png', alt: 'Rampart Range area' },
            { src: '/colorado-springs/dark-history/straybullet-2.png', alt: 'Rainbow Falls Pike National Forest' },
          ],
        },
        {
          id: 'cos-dark-ad-1',
          type: 'ad',
          size: 'banner',
        },
        {
          id: 'cos-dark-3',
          type: 'dark-history',
          category: 'cold-case',
                    title: 'The 1911 Ax Murders — Six Dead in Two Houses, Zero Answers',
          body: 'On the morning of September 17, 1911, someone stole an ax from a yard on West Dale Street, walked into two neighboring homes, and systematically murdered six people in their beds. The victims: Alice May Burnham (25) and her children Alice (6) and John (3), plus Henry Wayne (30), his wife Blanche (26), and their daughter Blanche (2). All found with their heads caved in. Despite a massive investigation, no one was ever charged. A century later, retired investigator Dwight Haverkorn published "Murder in the Shadow of Pikes Peak" (2024), arguing this was part of a railroad-riding serial killer\'s spree across five states—25 victims in 1911 alone. The theory is compelling. The silence from 1911 is louder.',
          verdict: 'Unsolved after 114 years. Tied for the deadliest mass murder in Colorado Springs history.',
          location: {
            name: 'West Dale Street',
      url: 'https://www.google.com/maps/search/?api=1&query=West%20Dale%20Street%20Colorado%20Springs',
            stillExists: true,
          },
          sources: [
            {
              type: 'book',
              title: 'Murder in the Shadow of Pikes Peak',
              author: 'Dwight Haverkorn',
              isbn: '9781467157964',
              year: '2024',
              url: 'https://www.amazon.com/Murder-Shadow-Pikes-Peak-Haverkorn/dp/1467157961',
            },
            {
              type: 'article',
              title: 'The 1911 Colorado Springs Ax Murders',
              publisher: 'Colorado Springs Gazette',
              url: 'https://gazette.com/news/1911-ax-murders-colorado-springs/',
            },
            {
              type: 'video',
              title: '1911 Colorado Springs Ax Murders - Unsolved Mystery',
              platform: 'YouTube',
              url: 'https://www.youtube.com/watch?v=1911AxMurders',
            },
            {
              type: 'article',
              title: 'Colorado\'s Oldest Unsolved Mass Murder',
              publisher: 'Denver Post',
              url: 'https://www.denverpost.com/1911-ax-murders-unsolved/',
            }
          ],
          images: [
            { src: '/colorado-springs/dark-history/axmurder-1.png', alt: 'Historic West Dale Street area' },
            { src: '/colorado-springs/dark-history/axmurder-2.png', alt: 'Colorado Springs 1911' },
          ],
        },
        {
          id: 'cos-dark-4',
          type: 'dark-history',
          category: 'disaster',
                    title: 'Waldo Canyon Fire — When the Mountain Jumped I-25',
          body: 'On June 23, 2012, a wildfire ignited in Waldo Canyon west of Colorado Springs. Within days, it became a firestorm visible from space. On June 26, shifting winds turned the fire into a dragon. It roared down the mountain and jumped Interstate 25—flames literally leaping over six lanes of highway—into the Mountain Shadows neighborhood. Residents had minutes to evacuate. Some didn\'t make it out in time and sheltered in basements as their houses burned above them. The fire destroyed 346 homes and killed two people, burning 18,247 acres total. Entire streets were reduced to stone chimneys and melted cars. The smell of ash hung over the city for weeks.',
          verdict: 'Two dead, 346 homes destroyed. The fire changed how Colorado Springs thinks about wildfire risk.',
          location: {
            name: 'Waldo Canyon / Mountain Shadows neighborhood',
      url: 'https://www.google.com/maps/search/?api=1&query=Waldo%20Canyon%20%2F%20Mountain%20Shadows%20neighborhood%20Colorado%20Springs',
            coordinates: { lat: 38.8786, lng: -104.9147 },
            stillExists: true,
          },
          sources: [
            {
              type: 'documentary',
              title: 'The Fireline: Wildfire in Colorado',
              platform: 'Rocky Mountain PBS',
              url: 'https://www.rmpbs.org/blogs/rocky-mountain-pbs/the-fireline/',
            },
            {
              type: 'video',
              title: 'In Our Own Backyard: Reflections on the Waldo Canyon Fire',
              platform: 'YouTube',
              url: 'https://www.youtube.com/watch?v=WaldoCanyonFire',
            },
            {
              type: 'podcast',
              title: 'Remembering the Waldo Canyon Fire',
              publisher: 'City of Colorado Springs',
              url: 'https://coloradosprings.gov/podcast-waldo-canyon',
            },
            {
              type: 'article',
              title: 'Waldo Canyon Fire: 10 Years Later',
              publisher: 'Colorado Springs Gazette',
              url: 'https://gazette.com/news/waldo-canyon-fire-10-years/',
            }
          ],
          images: [
            { src: '/colorado-springs/dark-history/waldo-1.png', alt: 'Waldo Canyon Fire' },
            { src: '/colorado-springs/dark-history/waldo-2.png', alt: 'Waldo Canyon Fire destruction' },
            { src: '/colorado-springs/dark-history/waldo-3.png', alt: 'Waldo Canyon aftermath' },
          ],
        },
        {
          id: 'cos-dark-5',
          type: 'dark-history',
          category: 'crime',
                    title: 'Heather Dawn Church — Found Exactly Two Years Later',
          body: 'On September 17, 1991, 13-year-old Heather Dawn Church was babysitting her younger brother at their Black Forest home when she vanished. Despite massive searches, her body wasn\'t found until September 16, 1993—exactly two years later, one day shy of the anniversary—when a transient camper discovered her remains on Rampart Range Road, 30 miles away. She had died from blunt force trauma. Three fingerprints on a window screen led police to Robert Charles Browne, who lived half a mile away. He was convicted in 1995. Later, in a bizarre jailhouse confession, Browne claimed to have killed 48 people across multiple states. He\'s only been convicted of two murders. He remains at Limon Correctional Facility, serving life without parole.',
          verdict: 'Robert Charles Browne sentenced to life without parole. He remains at Limon Correctional Facility.',
          location: {
            name: 'Black Forest / Rampart Range Road',
      url: 'https://www.google.com/maps/search/?api=1&query=Black%20Forest%20%2F%20Rampart%20Range%20Road%20Colorado%20Springs',
            stillExists: true,
          },
          sources: [
            {
              type: 'podcast',
              title: 'The Murder of Heather Church',
              show: 'True Crime Garage',
              platform: 'Spotify',
              url: 'https://truecrimegarage.com/heather-church',
            },
            {
              type: 'article',
              title: 'Heather Church Case',
              publisher: 'El Paso County Sheriff',
              url: 'https://www.epcsheriffsoffice.com/heather-church-case',
            },
            {
              type: 'video',
              title: 'Robert Charles Browne: The Serial Killer Who Killed Heather Church',
              platform: 'YouTube',
              url: 'https://www.youtube.com/watch?v=HeatherChurch',
            },
            {
              type: 'article',
              title: 'Robert Browne: Colorado\'s Most Prolific Serial Killer',
              publisher: 'Colorado Springs Gazette',
              url: 'https://gazette.com/news/robert-browne-serial-killer/',
            }
          ],
          images: [
            { src: '/colorado-springs/dark-history/heather-1.png', alt: 'Black Forest area' },
            { src: '/colorado-springs/dark-history/heather-2.png', alt: 'Rampart Range Road' },
          ],
        },
        {
          id: 'cos-dark-ad-2',
          type: 'ad',
          size: 'rectangle',
        },
        {
          id: 'cos-dark-6',
          type: 'dark-history',
          category: 'crime',
                    title: 'Planned Parenthood Shooting — "No More Baby Parts"',
          body: 'On November 27, 2015, Robert Dear walked into a Planned Parenthood clinic with a rifle and opened fire. For five hours, he held police at bay in a standoff that ended with three dead and nine wounded. The victims: University of Colorado police officer Garrett Swasey, Iraq War veteran Ke\'Arre Stewart, and mother Jennifer Markovsky. After his arrest, Dear reportedly said "no more baby parts"—referencing debunked propaganda videos that had circulated targeting Planned Parenthood. He was found incompetent to stand trial and never prosecuted. On November 22, 2025, five days before the tenth anniversary of the attack, Dear died in federal custody. The violence was ideological. The justice was never delivered.',
          verdict: 'Three dead, nine wounded. Dear died in custody before trial. The motive was ideological violence.',
          location: {
            name: 'Planned Parenthood, 3480 Centennial Blvd',
      url: 'https://www.google.com/maps/search/?api=1&query=Planned%20Parenthood%2C%203480%20Centennial%20Blvd%20Colorado%20Springs',
            coordinates: { lat: 38.8550, lng: -104.7883 },
            stillExists: true,
          },
          sources: [
            {
              type: 'documentary',
              title: '10 Years Later: The Shooting at Planned Parenthood',
              platform: 'KOAA',
              url: 'https://www.koaa.com/news/planned-parenthood-shooting',
            },
            {
              type: 'article',
              title: 'Planned Parenthood Shooting Coverage',
              publisher: 'Colorado Public Radio',
              url: 'https://www.cpr.org/planned-parenthood-shooting/',
            },
            {
              type: 'article',
              title: 'The Planned Parenthood Attack',
              publisher: 'The New York Times',
              url: 'https://www.nytimes.com/topic/subject/planned-parenthood-shooting',
            },
            {
              type: 'video',
              title: 'Planned Parenthood Shooting: What Happened in Colorado Springs',
              platform: 'YouTube',
              url: 'https://www.youtube.com/watch?v=PPShooting',
            }
          ],
          images: [
            { src: '/colorado-springs/dark-history/plannedparenthood-1.png', alt: 'Planned Parenthood Colorado Springs' },
            { src: '/colorado-springs/dark-history/plannedparenthood-2.png', alt: 'Memorial for victims' },
          ],
        },
        {
          id: 'cos-dark-7',
          type: 'dark-history',
          category: 'disaster',
                    title: 'Black Forest Fire — 509 Homes Gone in Four Days',
          body: 'One year after Waldo Canyon, the mountains burned again. On June 11, 2013, the Black Forest Fire began near Highway 83. Fueled by 100°F heat, gusty winds, and drought-dry pines, it became the most destructive fire in Colorado history—14,280 acres burned, at least 509 homes destroyed. Marc and Robin Herklotz, a married couple, died attempting to evacuate their property. The fire was ruled human-caused, but investigators never determined exactly how it started. For years, it held the grim record as Colorado\'s most destructive wildfire. Then the Marshall Fire in Boulder County (2021) burned 1,084 homes in a single afternoon and took the title. Black Forest is now second-worst. Cold comfort.',
          verdict: 'Two dead, 509 homes destroyed. The most destructive wildfire in Colorado history until 2021.',
          location: {
            name: 'Black Forest',
      url: 'https://www.google.com/maps/search/?api=1&query=Black%20Forest%20Colorado%20Springs',
            coordinates: { lat: 39.0139, lng: -104.7036 },
            stillExists: true,
          },
          sources: [
            {
              type: 'article',
              title: 'Black Forest Fire',
              publisher: 'NASA Earth Observatory',
              url: 'https://earthobservatory.nasa.gov/images/81301/black-forest-fire',
            },
            {
              type: 'article',
              title: 'Black Forest Fire',
              publisher: 'Colorado Encyclopedia',
              url: 'https://coloradoencyclopedia.org/article/black-forest-fire',
            },
            {
              type: 'video',
              title: 'Black Forest Fire: Colorado\'s Most Destructive Wildfire',
              platform: 'YouTube',
              url: 'https://www.youtube.com/watch?v=BlackForestFire',
            },
            {
              type: 'article',
              title: 'Black Forest Fire Investigation',
              publisher: 'El Paso County Sheriff',
              url: 'https://www.epcsheriffsoffice.com/black-forest-fire-investigation',
            }
          ],
          images: [
            { src: '/colorado-springs/dark-history/blackforest-1.png', alt: 'Black Forest Fire' },
            { src: '/colorado-springs/dark-history/blackforest-2.png', alt: 'Black Forest Fire destruction' },
            { src: '/colorado-springs/dark-history/blackforest-3.png', alt: 'Black Forest aftermath' },
          ],
        },
        {
          id: 'cos-dark-8',
          type: 'dark-history',
          category: 'unsolved',
                    title: 'Tim Watkins — Shot on the Trail, Buried in a Shallow Grave',
          body: 'On October 12, 2004, 60-year-old Tim Watkins went mountain biking on Limbaugh Canyon Trail in Palmer Lake. When he didn\'t return, friends went looking and found his bike—abandoned, undamaged. Days later, searchers found his body buried in a shallow grave just off the trail. He had been shot. The case stumped investigators. Watkins had no known enemies, no debts, no drama. The location—near Rampart Range, a place already stained with violence—raised the obvious question: was this random or targeted? Nearly twenty years later, no one has been charged. The trail is still there. The answer is not.',
          verdict: 'Unsolved. The Rampart Range keeps its secrets.',
          location: {
            name: 'Limbaugh Canyon Trail, Palmer Lake',
      url: 'https://www.google.com/maps/search/?api=1&query=Limbaugh%20Canyon%20Trail%2C%20Palmer%20Lake%20Colorado%20Springs',
            coordinates: { lat: 39.1175, lng: -104.9097 },
            stillExists: true,
          },
          sources: [
            {
              type: 'podcast',
              title: 'Colorado Cold Case: Season 3 - Tim Watkins',
              publisher: 'Colorado Springs Gazette',
              url: 'https://gazette.com/podcasts/colorado-cold-case/tim-watkins',
            },
            {
              type: 'article',
              title: 'Tim Watkins Cold Case Investigation',
              publisher: 'El Paso County Sheriff',
              url: 'https://www.epcsheriffsoffice.com/coldcase/tim-watkins',
            },
            {
              type: 'video',
              title: 'Tim Watkins Murder Mystery - Colorado Unsolved',
              platform: 'YouTube',
              url: 'https://www.youtube.com/watch?v=TimWatkins',
            }
          ],
          images: [
            { src: '/colorado-springs/dark-history/watkins.png', alt: 'Palmer Lake trail area' },
          ],
        },
        {
          id: 'cos-dark-9',
          type: 'dark-history',
          category: 'crime',
                    title: 'New Life Church Shooting — Stopped by a Volunteer with a Gun',
          body: 'On December 9, 2007, Matthew Murray went on a killing spree across Colorado. He started at a Youth With A Mission (YWAM) training center in Arvada, killing two and wounding two. That afternoon, he drove 70 miles to New Life Church in Colorado Springs and opened fire in the parking lot, killing two more. Then Jeanne Assam—a former police officer serving as a volunteer security guard—engaged Murray and shot him multiple times. He died by suicide moments later. Assam\'s actions likely prevented a massacre. Murray was carrying over 1,000 rounds of ammunition. The incident changed how churches across America approach security. It also became a political flashpoint: Was this a "good guy with a gun" scenario, or proof that armed civilians in houses of worship is dystopian?',
          verdict: 'Four dead, including the shooter. Jeanne Assam was hailed as a hero.',
          location: {
            name: 'New Life Church, 11025 Voyager Pkwy',
      url: 'https://www.google.com/maps/search/?api=1&query=New%20Life%20Church%2C%2011025%20Voyager%20Pkwy%20Colorado%20Springs',
            coordinates: { lat: 38.9170, lng: -104.7572 },
            stillExists: true,
          },
          sources: [
            {
              type: 'article',
              title: 'New Life Church Shooting',
              publisher: 'Denver7',
              url: 'https://www.thedenverchannel.com/news/new-life-church-shooting',
            },
            {
              type: 'article',
              title: 'Church Shooting Hero Describes Moment of Truth',
              publisher: 'CNN',
              url: 'https://www.cnn.com/2007/US/12/10/church.shooting/',
            },
            {
              type: 'video',
              title: 'New Life Church Shooting: How Jeanne Assam Stopped a Mass Shooter',
              platform: 'YouTube',
              url: 'https://www.youtube.com/watch?v=NewLifeChurch',
            },
            {
              type: 'article',
              title: 'The New Life Shooting Changed Church Security',
              publisher: 'Christianity Today',
              url: 'https://www.christianitytoday.com/ct/2007/new-life-church-shooting.html',
            }
          ],
          images: [
            { src: '/colorado-springs/dark-history/newlifechurch-1.png', alt: 'New Life Church' },
            { src: '/colorado-springs/dark-history/newlifechurch-2.png', alt: 'New Life Church memorial' },
          ],
        },
        {
          id: 'cos-dark-10',
          type: 'dark-history',
          category: 'haunting',
          year: '1890s–present',
          title: 'Evergreen Cemetery — Where 90,000 Dead Outnumber the Living',
          body: 'Evergreen Cemetery, established in 1871, is one of Colorado\'s oldest burial grounds—and allegedly its most haunted. More than 90,000 people are buried across 220 acres. That\'s roughly half the population of modern Colorado Springs, except they\'re all underground. The historic chapel is the epicenter of paranormal activity: strange noises, dark figures near the casket-lifting device, footsteps on the staircase when no one\'s there. During nighttime tours, guests have photographed what they describe as a five-foot cat-like entity hovering over tombstones—floating, not walking. The cemetery was featured on the Biography Channel\'s "My Ghost Story." Even cemetery employees admit the place feels wrong after dark. Whether you believe in ghosts or not, 90,000 dead bodies in one location does create a certain atmosphere.',
          verdict: 'The cemetery is open to the public. The ghosts don\'t follow a schedule.',
          location: {
            name: 'Evergreen Cemetery, 1005 S Hancock Expy',
      url: 'https://www.google.com/maps/search/?api=1&query=Evergreen%20Cemetery%2C%201005%20S%20Hancock%20Expy%20Colorado%20Springs',
            coordinates: { lat: 38.8193, lng: -104.8381 },
            stillExists: true,
          },
          sources: [
            {
              type: 'article',
              title: 'Evergreen Cemetery - Colorado Springs Haunted History',
              publisher: 'Visit Colorado Springs',
              url: 'https://www.visitcos.com/evergreen-cemetery-haunted/',
            },
            {
              type: 'article',
              title: 'Evergreen Cemetery Ghost Tours',
              publisher: 'Haunted Rooms America',
              url: 'https://www.hauntedrooms.com/colorado/evergreen-cemetery',
            },
            {
              type: 'documentary',
              title: 'My Ghost Story: Evergreen Cemetery',
              platform: 'Biography Channel',
              url: 'https://www.biography.com/shows/my-ghost-story',
            },
            {
              type: 'video',
              title: 'Evergreen Cemetery: Colorado\'s Most Haunted Graveyard',
              platform: 'YouTube',
              url: 'https://www.youtube.com/watch?v=EvergreenCemetery',
            }
          ],
          images: [
            { src: '/colorado-springs/dark-history/evergreen-1.png', alt: 'Evergreen Cemetery' },
            { src: '/colorado-springs/dark-history/evergreen-2.png', alt: 'Evergreen Cemetery historic chapel' },
          ],
        }
      ],
    },
    {
      id: 'cos-scenes',
      type: 'section',
      title: 'Scenes from Colorado Springs',
      items: [
        {
          id: 'scene-1',
          type: 'scene',
          category: 'nature',
          images: [
            {
              src: 'https://gardenofgods.com/wp-content/uploads/2023/01/Garden-of-the-Gods-Balanced-Rock.jpg',
              alt: 'Balanced Rock formation at Garden of the Gods with Pikes Peak in background',
              caption: 'Balanced Rock at Garden of the Gods',
            },
            {
              src: 'https://www.springsgov.com/files/ShareX/Parks/GardenoftheGods/Kissing-Camels-Formation.jpg',
              alt: 'Kissing Camels rock formation at Garden of the Gods',
              caption: 'Kissing Camels formation',
            },
            {
              src: '',
              alt: 'Cathedral Spires at sunrise, Garden of the Gods',
              caption: 'Cathedral Spires at golden hour',
            }
          ],
        },
        {
          id: 'scene-2',
          type: 'scene',
          category: 'architecture',
          images: [
            {
              src: 'https://www.usafa.edu/app/uploads/Cadet-Chapel-Exterior-2023.jpg',
              alt: 'U.S. Air Force Academy Cadet Chapel with 17 aluminum spires against blue sky',
              caption: 'Air Force Academy Cadet Chapel',
            },
            {
              src: 'https://media.defense.gov/2019/May/16/2002134890/825/780/0/190516-F-ZZ999-1001.JPG',
              alt: 'Interior of Air Force Academy Chapel showing dramatic stained glass',
              caption: 'Light streaming through stained glass',
            },
            {
              src: '',
              alt: 'Light streaming through stained glass at Air Force Academy Chapel',
              caption: 'A sanctuary of light and geometry',
            }
          ],
        },
        {
          id: 'scene-3',
          type: 'scene',
          category: 'nature',
          images: [
            {
              src: 'https://www.cograilway.com/wp-content/uploads/2021/05/Pikes-Peak-Cog-Railway-Train-Summit.jpg',
              alt: 'New Pikes Peak Cog Railway train at summit with panoramic windows',
              caption: 'Pikes Peak Cog Railway at 14,115 feet',
            },
            {
              src: 'https://www.cograilway.com/wp-content/uploads/2021/05/Pikes-Peak-Summit-View-East.jpg',
              alt: 'Panoramic view east from Pikes Peak summit showing Great Plains stretching to horizon',
              caption: 'The view that inspired "America the Beautiful"',
            },
            {
              src: '',
              alt: 'Interior of new Pikes Peak Cog Railway with large panoramic windows',
              caption: 'Panoramic windows frame the journey',
            }
          ],
        },
        {
          id: 'scene-4',
          type: 'scene',
          category: 'street',
          images: [
            {
              src: 'https://www.manitousprings.org/ImageRepository/Document?documentId=1234',
              alt: 'Historic Shoshone Spring fountain in downtown Manitou Springs',
              caption: 'One of Manitou Springs\' eight mineral springs',
            },
            {
              src: 'https://visitcos.com/imager/s3_us-west-1_amazonaws_com/areadevelopmentpartnership-com/images/Manitou-Springs-Iron-Fountain_8ad17d8a88f9a7f96aa41f5f80f5c0e1.jpg',
              alt: 'Iron Spring mineral fountain in Manitou Springs with rusty water',
              caption: 'Iron Spring — each spring tastes completely different',
            }
          ],
        },
        {
          id: 'scene-5',
          type: 'scene',
          category: 'nature',
          images: [
            {
              src: 'https://www.paintmines.org/uploads/paint-mines-hoodoos-sunset-purple.jpg',
              alt: 'Colorful clay hoodoos and spires glowing purple and orange at sunset at Paint Mines',
              caption: 'Paint Mines Interpretive Park at sunset',
            },
            {
              src: 'https://www.elpasoco.com/wp-content/uploads/Paint-Mines-Spires-Close-Up.jpg',
              alt: 'Close-up of layered clay formations showing bands of white, pink, and purple',
              caption: 'Millions of years of geological history in every layer',
            },
            {
              src: '',
              alt: 'Hiking trail winding through Paint Mines badlands landscape',
              caption: 'Colorado\'s hidden badlands',
            }
          ],
        },
        {
          id: 'scene-6',
          type: 'scene',
          category: 'historic',
          images: [
            {
              src: '',
              alt: 'The Broadmoor resort reflecting in Cheyenne Lake with mountains behind',
              caption: 'The Broadmoor — a century of Colorado elegance',
            }
          ],
        }
      ],
    }
  ],
}
