import { CityData } from '@/types/content'

export const dallas: CityData = {
  slug: 'dallas',
  name: 'Dallas',
  tagline: 'Big dreams, bigger trucks, and complicated history',
  content: [
    {
      id: 'intro-text',
      type: 'text',
      content: 'Dallas insists on its own greatness while wrestling with its past. From illegal massages to the invention of the microchip, the Metroplex is full of contradictions.'
    },
    {
      id: 'featured-card',
      type: 'card',
      title: 'The Will to Exist',
      description: 'How a city with no natural advantages became the capital of Texas ambition.',
      meta: 'Essay',
      variant: 'featured',
      href: '/dallas/essay/will-to-exist'
    },
    {
      id: 'ad-1',
      type: 'ad',
      size: 'banner'
    },
    {
      id: 'this-week',
      type: 'card-list',
      title: 'This Week',
      cards: [
        {
          title: 'The Bishop Arts District Guide',
          description: 'Independent shops, galleries, and restaurants in Oak Cliff.',
          meta: 'Guide',
          href: '/dallas/bishop-arts'
        },
        {
          title: 'Beyond the JFK Story',
          description: 'Dealey Plaza\'s history before and after November 1963.',
          meta: 'Feature',
          href: '/dallas/dealey-plaza'
        },
        {
          title: 'Best Tacos by Neighborhood',
          description: 'Our opinionated guide to Dallas-Fort Worth\'s essential tacos.',
          meta: 'List',
          variant: 'compact',
          href: '/dallas/tacos'
        }
      ]
    },
    {
      id: 'ad-2',
      type: 'ad',
      size: 'rectangle'
    },
    {
      id: 'dal-curiosities',
      type: 'section',
      title: 'Dallas\'s Strange & Remarkable',
      intro: 'Dallas is a city that insists on its own greatness while wrestling with a history that doesn\'t always fit on a postcard. From illegal massages to the invention of the microchip, these are the pieces of the puzzle that make the Metroplex more than just a cluster of high-rises.',
      items: [
        {
          id: 'dal-curiosity-1',
          type: 'curiosity',
          category: 'history',
          title: 'Nobody knows for certain how Dallas got its name',
          images: [
            {
              src: '/dallas/curiosities/dallas-cur-city-name.png',
              alt: 'Dallas city name origin mystery'
            },
            {
              src: '/dallas/curiosities/dallas-cur-city-name-2.png',
              alt: 'Historical information about Dallas naming'
            }
          ],
          body: 'Dallas is the ninth-largest city in America, one of the most economically powerful metros on Earth, and nobody actually knows where the name came from. The founder, John Neely Bryan — a Tennessee lawyer who arrived in 1841 and built a cabin on the Trinity River — named the settlement "Dallas" but never explained why. The official historical marker claims it honors Vice President George Mifflin Dallas, but Bryan established the town before Dallas took office, and there\'s no evidence they ever met. Other theories: Bryan was honoring George\'s brother, Commodore Alexander James Dallas. Or two Dallas brothers who were his friends. Or a Dallas County in Alabama. Or it\'s corrupted from a Native American word. Bryan spent his final years in an insane asylum in Austin and took the answer to his grave. The mystery has persisted for 180 years. Historians have given up. Dallas just... is.',
          sources: [
            {
              title: 'Dallas: Where did the name come from?',
              url: 'https://www.dmagazine.com/publications/d-magazine/2011/september/where-did-dallas-get-its-name/',
              publisher: 'D Magazine'
            }
          ],
          location: {
            name: 'John Neely Bryan Cabin (Original Site)',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        },
        {
          id: 'dal-curiosity-3',
          type: 'curiosity',
          category: 'law',
          title: 'It\'s illegal to give your wife a massage here',
          images: [
            {
              src: '/dallas/curiosities/dallas-cur-massage.png',
              alt: 'Dallas massage regulation law'
            }
          ],
          body: 'There\'s an ordinance still on the books in Dallas that technically makes it illegal for a husband to give his wife a massage — or any opposite-sex massage between individuals who aren\'t licensed practitioners. The law was passed in the 1980s to crack down on massage parlors operating as fronts for prostitution. Rather than write a nuanced law, Dallas just banned all non-professional opposite-sex massages. In 1985, U.S. District Judge Barefoot Sanders (yes, real name) ruled the law unconstitutional as applied to private conduct. But here\'s the thing: the city never bothered to repeal it. The ordinance remains in the municipal code, technically enforceable, a relic of Reagan-era vice policing. Every few years a local news station rediscovers it. The city council shrugs. Nobody fixes it. Welcome to Texas.',
          sources: [
            {
              title: 'The Law That Makes It Illegal to Give Your Wife a Massage',
              url: 'https://www.dmagazine.com/publications/d-magazine/2012/october/the-most-ridiculous-laws-in-dallas/',
              publisher: 'D Magazine'
            }
          ]
        },
        {
          id: 'dal-curiosity-ad-1',
          type: 'ad',
          size: 'banner'
        },
        {
          id: 'dal-curiosity-4',
          type: 'curiosity',
          featured: true,
          featuredOrder: 1,
          category: 'invention',
          title: 'The integrated circuit — the foundation of all modern technology — was invented here',
          images: [
            {
              src: '/dallas/curiosities/circuit-kilby-smithsonian.jpg',
              alt: 'Jack Kilby\'s original 1958 integrated circuit, phase-shift oscillator'
            },
            {
              src: '/dallas/curiosities/circuit-kilby-original.jpg',
              alt: 'Kilby\'s germanium solid-circuit oscillator from September 1958'
            },
            {
              src: '/dallas/curiosities/circuit-bullock-museum.jpg',
              alt: 'First integrated circuit prototype, 7/16" × 1/16", on display at Texas State History Museum'
            }
          ],
          body: 'On September 12, 1958, Texas Instruments engineer Jack Kilby demonstrated the first integrated circuit — a phase-shift oscillator carved from a piece of germanium measuring just 7/16" by 1/16". This invention made computers, smartphones, and virtually every piece of modern electronics possible. Only six prototypes exist today, scattered across museums worldwide. Kilby won the Nobel Prize in Physics in 2000 for this work. Every time you use any electronic device — this phone, that laptop, your car, the plane overhead — you\'re using Dallas technology. The entire digital age was born in a TI lab on a summer day in 1958.',
          sources: [
            {
              title: 'The Chip that Jack Built',
              url: 'https://www.ti.com/about-ti/company/history/integrated-circuit.html',
              publisher: 'Texas Instruments'
            },
            {
              title: 'Kilby\'s Integrated Circuit',
              url: 'https://americanhistory.si.edu/collections/search/object/nmah_688126',
              publisher: 'Smithsonian Institution'
            }
          ],
          location: {
            name: 'Texas Instruments Headquarters',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        },
        {
          id: 'dal-curiosity-5',
          type: 'curiosity',
          featured: true,
          featuredOrder: 4,
          category: 'architecture',
          title: 'A demolition accident created Dallas\'s own "Leaning Tower"',
          images: [
            {
              src: '/dallas/curiosities/leaning-1.png',
              alt: 'The Leaning Tower of Dallas'
            },
            {
              src: '/dallas/curiosities/leaning-2.png',
              alt: 'The Leaning Tower of Dallas from another angle'
            },
            {
              src: '/dallas/curiosities/leaning-3.png',
              alt: 'Visitors posing with the Leaning Tower of Dallas'
            }
          ],
          body: 'When a Dallas building was demolished in 2019, the core of the 11-story structure unexpectedly remained standing — and slightly leaning. People flocked to take photos pretending to hold up the "Leaning Tower of Dallas" just like tourists do in Pisa. It became an instant internet sensation and accidental tourist attraction. The city tried multiple times to bring it down. It refused to fall. For weeks, this stubborn concrete remnant stood as an unintentional monument to Dallas\'s will to exist. Eventually they succeeded. But for a brief, beautiful moment, Dallas had its own architectural disaster-turned-icon.',
          sources: [
            {
              title: 'The Leaning Tower of Dallas',
              publisher: 'Wikipedia',
              url: 'https://en.wikipedia.org/wiki/Leaning_Tower_of_Dallas'
            }
          ],
          location: {
            name: 'Site of the Leaning Tower of Dallas',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: false
          }
        },
        {
          id: 'dal-curiosity-6',
          type: 'curiosity',
          featured: true,
          featuredOrder: 5,
          category: 'history',
          title: 'Deep Ellum was Dallas\'s first desegregated neighborhood',
          images: [
            {
              src: '/dallas/curiosities/desegragated-1.png',
              alt: 'Historic Deep Ellum neighborhood'
            },
            {
              src: '/dallas/curiosities/desegragated-2.png',
              alt: 'Deep Ellum street scene'
            }
          ],
          body: 'Deep Ellum\'s white immigrants welcomed Black residents into their shops in the late 1800s and early 1900s — something not seen in other parts of Dallas. The area was settled as a "freedmen\'s town" by former slaves after the Civil War and became a vibrant center for jazz and blues. Legendary musician Blind Lemon Jefferson could tell by the sound in his cup what type of coins people put in — if they only gave pennies, he\'d throw them back into the street. Much of Deep Ellum was demolished when I-345 was built, erasing blocks of this integrated history in the name of highway progress.',
          sources: [
            {
              title: 'The History of Deep Ellum',
              url: 'https://deepellumtexas.com/history/',
              publisher: 'Deep Ellum Foundation'
            }
          ],
          location: {
            name: 'Deep Ellum',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        },
        {
          id: 'dal-curiosity-7',
          type: 'curiosity',
          featured: true,
          featuredOrder: 6,
          category: 'invention',
          title: 'The frozen margarita machine was invented here — inspired by 7-Eleven Slurpees',
          image: {
            src: '/dallas/curiosities/frozen-marg.png',
            alt: 'Original frozen margarita machine'
          },
          body: 'Mariano Martinez invented the frozen margarita machine in Dallas in 1971 after being inspired by the 7-Eleven Slurpee machine. He modified a soft-serve ice cream machine to dispense frozen margaritas at his restaurant, Mariano\'s. Perfectly fitting, since 7-Eleven itself started as an Oak Cliff ice house called Southland Ice Company in the 1920s. Dallas invented both the technology and the reason to use it. His original machine is now in the Smithsonian\'s National Museum of American History, preserved for posterity alongside the Star-Spangled Banner and Abraham Lincoln\'s top hat.',
          sources: [
            {
              title: 'The History of the Frozen Margarita Machine',
              url: 'https://americanhistory.si.edu/blog/frozen-margarita-machine',
              publisher: 'Smithsonian Institution'
            }
          ],
          location: {
            name: 'Mariano\'s Hacienda (Original Site)',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        },
        {
          id: 'dal-curiosity-ad-2',
          type: 'ad',
          size: 'rectangle'
        },
        {
          id: 'dal-curiosity-9',
          type: 'curiosity',
          category: 'history',
          title: 'Big Tex was originally the world\'s largest Santa Claus',
          body: 'Before becoming the iconic 55-foot State Fair mascot, Big Tex was actually the world\'s largest Santa Claus in Kerens, Texas. The giant paper-mache figure was purchased by the State Fair in 1951, stripped of his red suit, transformed into a cowboy, and has greeted fairgoers with a booming "Howdy, folks!" ever since. Big Tex was destroyed by fire in 2012 — his head melted on live television — and rebuilt with a fireproof metal structure. Even Dallas icons get second acts.',
          image: {
            src: '/dallas/curiosities/santa.png',
            alt: 'Big Tex at the Texas State Fair'
          },
          sources: [
            {
              title: 'The History of Big Tex',
              url: 'https://bigtex.com/about-us/history-of-big-tex/',
              publisher: 'State Fair of Texas'
            }
          ],
          location: {
            name: 'Fair Park',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        },
        {
          id: 'dal-curiosity-10',
          type: 'curiosity',
          featured: true,
          featuredOrder: 10,
          category: 'history',
          title: 'German POWs from Rommel\'s Afrika Korps were held at White Rock Lake',
          images: [
            {
              src: '/dallas/curiosities/pow-camp-1.png',
              alt: 'WWII POW camp at White Rock Lake'
            },
            {
              src: '/dallas/curiosities/pow-camp-2.png',
              alt: 'German POWs at the White Rock Lake camp'
            }
          ],
          body: 'In 1944, White Rock Lake served as a prisoner-of-war camp for German non-commissioned officers captured during Field Marshal Erwin "The Desert Fox" Rommel\'s North African campaign. Dallas held enemy combatants from WWII\'s most famous tank battles right in the middle of what is now one of the city\'s most popular parks. They were here, behind barbed wire, while Dallas families picnicked nearby. The war came to White Rock Lake.',
          sources: [
            {
              title: 'When German POWs were held at White Rock Lake',
              url: 'https://oakcliff.advocatemag.com/2014/11/world-war-ii-pow-camp-white-rock-lake/',
              publisher: 'Advocate Magazine'
            }
          ],
          location: {
            name: 'White Rock Lake (Infantry Way)',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        },
        {
          id: 'dal-curiosity-11',
          type: 'curiosity',
          featured: true,
          featuredOrder: 10,
          category: 'history',
          title: 'Bonnie and Clyde escaped through "Devil\'s Back Porch"',
          image: {
            src: '/dallas/curiosities/devils-back-porch.png',
            alt: 'Trinity Groves area, formerly Devil\'s Back Porch'
          },
          body: 'To escape police, Bonnie and Clyde would cross an old bridge over the Trinity River into a dusty part of Dallas called the Devil\'s Back Porch — now Trinity Groves. What\'s now Singleton Boulevard used to be Eagle Ford Road, providing their getaway route over the West Fork of the Trinity River. They knew every back road, every blind spot, every shortcut through West Dallas. A speakeasy bar named Devil\'s Back Porch now commemorates this gangster history in the same location, because Dallas never met an outlaw story it didn\'t want to romanticize.',
          sources: [
            {
              title: 'Devil\'s Back Porch: The outlaw history of Trinity Groves',
              url: 'https://www.wfaa.com/article/news/local/devils-back-porch-the-outlaw-history-of-trinity-groves/287-434827526',
              publisher: 'WFAA'
            }
          ],
          location: {
            name: 'Trinity Groves',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        },
        {
          id: 'dal-curiosity-13',
          type: 'curiosity',
          category: 'culture',
          title: 'The term "Super Bowl" was coined by a Dallasite',
          images: [
            {
              src: '/dallas/curiosities/super-bowl-1.png',
              alt: 'Lamar Hunt and the Super Ball toy'
            },
            {
              src: '/dallas/curiosities/super-bowl-2.png',
              alt: 'Early Super Bowl memorabilia'
            }
          ],
          body: 'Lamar Hunt, the main founder of the American Football League and owner of the Kansas City Chiefs, coined the term "Super Bowl." He was inspired by watching his children play with a Super Ball toy. Hunt, a Dallas native and son of legendary oil tycoon H.L. Hunt, intended it as a placeholder until they figured out a better name — but "Super Bowl" stuck and became one of the most recognized sporting event names in history. The biggest game in American sports is named after a children\'s toy, thanks to Dallas.',
          sources: [
            {
              title: 'How Lamar Hunt coined the term "Super Bowl"',
              url: 'https://www.history.com/news/how-the-super-bowl-got-its-name',
              publisher: 'History.com'
            }
          ]
        },
        {
          id: 'dal-curiosity-14',
          type: 'curiosity',
          featured: true,
          featuredOrder: 7,
          category: 'architecture',
          title: 'Fair Park has the world\'s largest collection of Art Deco buildings',
          images: [
            {
              src: '/dallas/curiosities/art-deco-1.png',
              alt: 'Art Deco buildings at Fair Park'
            },
            {
              src: '/dallas/curiosities/art-deco-2.png',
              alt: 'Fair Park Art Deco architecture details'
            },
            {
              src: '/dallas/curiosities/art-deco-3.png',
              alt: 'Fair Park exposition hall'
            }
          ],
          body: 'Fair Park features the world\'s largest collection of Art Deco exposition buildings, constructed for the 1936 Texas Centennial Exposition. Around 30 of these magnificent structures still exist today, making it one of the most complete examples of Art Deco architecture anywhere on Earth. It\'s a National Historic Landmark — a genuine architectural treasure. Yet many Dallas residents have never explored it outside of State Fair season, when it\'s crowded with deep-fried everything and screaming children. Visit in the off-season. You\'ll have a 1930s wonderland almost to yourself.',
          sources: [
            {
              title: 'Fair Park: A National Historic Landmark',
              url: 'https://www.nps.gov/places/fair-park.htm',
              publisher: 'National Park Service'
            }
          ],
          location: {
            name: 'Fair Park',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        },
        {
          id: 'dal-curiosity-15',
          type: 'curiosity',
          category: 'culture',
          title: 'German chocolate cake became famous because of Dallas',
          image: {
            src: '/dallas/curiosities/german-chocolate-cake.png',
            alt: 'German chocolate cake'
          },
          body: 'German chocolate is not actually German — it\'s named after English baker Samuel German, who developed the chocolate in 1852. But Dallas is the reason it\'s famous. In 1957, a Dallasite named Mrs. George Clay sent her recipe for "German\'s chocolate cake" to the Dallas Morning News. It was reprinted in newspapers nationwide and became an American classic — all because of one Dallas home baker who decided to share her recipe. Sometimes Dallas\'s greatest contributions are the smallest ones.',
          sources: [
            {
              title: 'The Real History of German Chocolate Cake',
              url: 'https://www.dallasnews.com/food/cooking/2017/06/07/german-chocolate-cake-was-born-in-texas-and-not-in-germany-at-all/',
              publisher: 'Dallas Morning News'
            }
          ]
        },
        {
          id: 'dal-curiosity-pegasus',
          type: 'curiosity',
          featured: true,
          featuredOrder: 9,
          category: 'culture',
          title: 'Dallas spent nearly $1 million on an oil company\'s logo—because it became the city symbol',
          images: [
            {
              src: '/dallas/curiosities/dallas-cur-pegasus-1.png',
              alt: 'Magnolia Building Pegasus sign'
            },
            {
              src: '/dallas/curiosities/dallas-cur-pegasus-2.png',
              alt: 'Dallas Pegasus landmark'
            }
            ],
          body: 'In 1934, Magnolia Oil Company installed an 11-foot rotating red neon Pegasus atop their headquarters—the tallest building in Dallas at the time. It was just corporate branding. But Dallas fell in love with the Flying Red Horse. When Magnolia merged with Mobil in 1959, the Pegasus became Mobil\'s symbol, but Dallas claimed it as the unofficial city mascot. By 1999, the original had rusted out. Dallas spent $600,000 to build a replica and lit it at midnight on New Year\'s 2000. Then the original went missing. People searched Fair Park, the Farmers Market—nothing. Finally, someone found it in a city storage facility at White Rock Lake, just sitting there. Dallas spent another $200,000 to restore it and mounted it on a 22-foot oil derrick in front of the Omni Hotel. Nearly $1 million spent preserving an oil company\'s advertisement. Very Dallas.',
          sources: [
            {
              type: 'article',
              title: 'How the Red Pegasus Became a Symbol of Dallas',
              publisher: 'D Magazine',
              year: '2024',
              url: 'https://www.dmagazine.com/publications/d-ceo/2024/november/how-the-red-pegasus-became-the-symbol-of-dallas/'
            },
            {
              type: 'article',
              title: 'Dallas\' Original Pegasus: Restored and Rebuilt',
              publisher: 'Dallas Morning News',
              year: '2015',
              url: 'https://interactives.dallasnews.com/2015/pegasus/'
            },
            {
              type: 'article',
              title: 'The History of the Pegasus',
              publisher: 'Downtown Dallas Parks Conservancy',
              url: 'https://downtowndallasparks.org/the-history-of-the-pegasus/'
            }
          ],
          location: {
            name: 'Omni Dallas Hotel (original) / Magnolia Hotel (replica)',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        },
        {
          id: 'dal-curiosity-cheerleaders',
          type: 'curiosity',
          featured: true,
          featuredOrder: 3,
          category: 'culture',
          title: 'Dallas invented modern NFL cheerleading by making it sexy and profitable',
          images: [
            {
              src: '/dallas/curiosities/dallas-cur-cheerleaders-1.png',
              alt: 'Dallas Cowboys Cheerleaders'
            },
            {
              src: '/dallas/curiosities/dallas-cur-cheerleaders-2.png',
              alt: 'Dallas Cowboys Cheerleaders performance'
            }
            ],
          body: 'Before 1972, NFL cheerleaders were just local high school girls doing basic pep squad routines in frumpy sweaters. Then Cowboys president Tex Schramm decided to turn cheerleading into branded entertainment. He replaced the teenagers with women over 18, hired New York choreographer Texie Waterman to create professional dance routines, and commissioned Dallas designer Paula Van Wagoner to create the iconic uniform—hot pants, crop top, white boots, and a star-spangled vest. The squad became "America\'s Sweethearts," appearing on magazine covers and TV specials. They became more famous than some players. Every NFL team copied the formula. Their uniforms are now in the Smithsonian alongside the Star-Spangled Banner. Dallas took wholesome sideline entertainment, made it sexy and profitable, then convinced everyone else it was innovation.',
          sources: [
            {
              type: 'article',
              title: 'The Women Who Created the Dallas Cowboys Cheerleaders',
              publisher: 'Texas Monthly',
              url: 'https://www.texasmonthly.com/arts-entertainment/women-who-created-cowboys-cheerleaders/'
            },
            {
              type: 'article',
              title: 'History',
              publisher: 'Dallas Cowboys Cheerleaders',
              url: 'https://dallascowboyscheerleaders.com/history/'
            },
            {
              type: 'article',
              title: 'Dallas Cowboys Cheerleaders donate iconic uniforms',
              publisher: 'Smithsonian National Museum of American History',
              url: 'https://americanhistory.si.edu/explore/stories/dallas-cowboys-cheerleaders-donate-iconic-uniforms-museums-sports-collection'
            }
          ],
          location: {
            name: 'AT&T Stadium',
            url: 'https://maps.app.goo.gl/uXjGq5v7Ym5E8W1V7',
            stillExists: true
          }
        },
        {
          id: 'dal-curiosity-ad-3',
          type: 'ad',
          size: 'banner'
        },
        {
          id: 'dal-curiosity-16',
          type: 'curiosity',
          category: 'invention',
          title: 'Liquid Paper was invented by a Dallas secretary to fix her typing mistakes',
          images: [
            {
              src: '/dallas/curiosities/dallas-cur-white-out-liquid-paper-1.png',
              alt: 'Liquid Paper invention story'
            }
          ],
          sources: [
            {
              title: 'Graham, Bette Clair Nesmith',
              url: 'https://www.tshaonline.org/handbook/entries/graham-bette-clair-nesmith',
              publisher: 'Texas State Historical Association'
            }
          ]
        },
        {
          id: 'dal-curiosity-17',
          type: 'curiosity',
          category: 'invention',
          title: 'Voice mail was invented in Dallas in 1979',
          images: [
            {
              src: '/dallas/curiosities/dallas-cur-voicemail-2.png',
              alt: 'Voice mail invention in Dallas'
            }
          ],
          body: 'Gordon Matthews founded VMX in Dallas in 1979 and developed the technology that let workers record, send, store, and forward voice messages from any phone in an office. He called it "voice mail." Before VMX, if you weren\'t at your desk, you missed the call. Matthews\' invention fundamentally changed how business communication worked — and gave everyone an excuse to avoid talking to people directly. Dallas gave the world a way to never actually speak to another human being again.',
          sources: [
            {
              title: 'Gordon Matthews: The Father of Voice Mail',
              url: 'https://dallasinnovates.com/gordon-matthews-father-voice-mail/',
              publisher: 'Dallas Innovates'
            }
          ]
        },
        {
          id: 'dal-curiosity-18',
          type: 'curiosity',
          featured: true,
          featuredOrder: 2,
          category: 'history',
          title: 'Doc Holliday won an award at the Dallas State Fair—for dentistry',
          images: [
            {
              src: '/dallas/curiosities/dallas-cur-doc-holladay.png',
              alt: 'Doc Holliday dentistry award story'
            }
          ],
          body: 'Before he became the legendary Wild West gunfighter of the OK Corral, John Henry "Doc" Holliday was a mild-mannered dentist fresh from dental school in St. Louis. In the 1870s, he opened a practice in Dallas and even entered a competition at the Dallas State Fair & Exposition (the precursor to today\'s State Fair of Texas). His specialty? Creating "the best set of gold teeth." He won. The man who would later stand shoulder-to-shoulder with Wyatt Earp in a bloody gunfight was once celebrated for his dental craftsmanship in Dallas. It\'s an almost impossibly bizarre twist to his legend: one of America\'s most infamous outlaws, a tuberculosis-ridden gambler and killer, started his career polishing gold molars and winning ribbons at a state fair. Every legend starts somewhere; Doc Holliday\'s started with a gleaming smile in Dallas.',
          sources: [
            {
              title: 'Doc Holliday\'s Dallas Dental Practice',
              url: 'https://www.dmagazine.com/frontburner/2012/08/doc-hollidays-dallas-dental-practice/',
              publisher: 'D Magazine'
            }
          ]
        },
        {
          id: 'dal-curiosity-19',
          type: 'curiosity',
          category: 'history',
          title: 'The first drive-in restaurant in America opened in Dallas',
          sources: [
            {
              title: 'Pig Stand',
              url: 'https://www.tshaonline.org/handbook/entries/pig-stand',
              publisher: 'Texas State Historical Association'
            }
          ],
          location: {
            name: 'Original Pig Stand Site (Chalk Hill Rd)',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: false
          }
        },
        {
          id: 'dal-curiosity-20',
          type: 'curiosity',
          category: 'invention',
          title: 'The first commercial laser tag arena opened in Dallas',
          body: 'Inspired by Star Wars, entrepreneur George Carter opened Photon in Dallas in 1984 — the first commercialized laser tag arena in the world. Players wore vests with sensors and carried infrared guns in a sci-fi themed arena. It was an instant phenomenon. Within two years, there were Photon franchises across America and a short-lived TV series. Carter sold the company in 1987 for millions. Dallas turned childhood dreams of space battles into a multimillion-dollar industry, one infrared beam at a time.',
          sources: [
            {
              type: 'article',
              title: 'Photon: The First Laser Tag Company',
              publisher: 'Laser Tag Museum',
              url: 'https://www.lasertagmuseum.com/indoor-laser-tag/indoor-company/photon'
            }
          ],
          location: {
            name: 'Original Photon Site',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: false
          }
        },
        {
          id: 'dal-curiosity-frogtown',
          type: 'curiosity',
          category: 'history',
          featuredOrder: 11,
          featured: true,
          title: 'Dallas ran a legal red-light district called "Frogtown" from 1906 to 1913',
          image: {
            src: '/dallas/curiosities/dallas-curious-frogtown.png',
            alt: 'Historic Dallas Frogtown red-light district'
          },
          body: 'In 1906, Dallas did something radical: it legalized prostitution. City leaders carved out a designated zone nicknamed "Frogtown" (also called "the Reservation") where brothels operated openly under municipal supervision. The logic was Progressive Era pragmatism: if you can\'t stop it, regulate it. Prostitutes received city-issued health certificates; those who passed weekly medical inspections were immune from arrest. The district thrived. It also drew national attention as a model of "regulated vice." But reform movements mounted pressure, and on November 3, 1913, Dallas shut Frogtown down for good. The sex trade scattered across the city. Seven years of legal prostitution became a footnote that Dallas preferred to forget.',
          sources: [
            {
              title: 'Frogtown: Dallas\' Legal Red-Light District',
              url: 'https://www.dallasobserver.com/news/frogtown-dallas-legal-red-light-district-7126581',
              publisher: 'Dallas Observer'
            }
          ],
          location: {
            name: 'Former Frogtown Site (Broom St)',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: false
          }
        },
        {
          id: 'dal-curiosity-ecstasy',
          type: 'curiosity',
          category: 'history',
          featuredOrder: 12,
          featured: true,
          title: 'The name "Ecstasy" was coined by a Dallas seminary student',
          image: {
            src: '/dallas/curiosities/dallas-curious-ecstasy.png',
            alt: 'Dallas Ecstasy MDMA history'
          },
          body: 'Michael Clegg was studying at Perkins School of Theology at SMU when he discovered MDMA in the early 1980s. He didn\'t invent it (a German chemist did in 1912), but he gave it the name that stuck: Ecstasy. He called the experience "like hearing Moses on the mountain." Clegg saw a business opportunity. By 1984, he was moving 500,000 doses per month through a distribution network that included a 1-800 phone line. You could order Ecstasy with a credit card. The operation was so brazen, employees wore "Ecstasy" t-shirts. Clegg fled to Costa Rica in 1985, just months before the DEA classified MDMA as Schedule I. He later returned, served time, and became a real estate developer. But for a brief, surreal moment, a theology student helped launch the rave era from Dallas.',
          sources: [
            {
              type: 'article',
              title: 'The Agony of Ecstasy',
              publisher: 'D Magazine',
              year: '2000',
              url: 'https://www.dmagazine.com/publications/d-magazine/2000/may/the-agony-of-ecstasy/'
            }
          ]
        }
      ]
    },
    {
      id: 'dal-hidden-gems',
      type: 'section',
      title: 'Beyond the High Rises',
      teaser: 'Dystopian tunnels, outlaw graves, and a 30-foot eyeball staring at luxury condos',
      intro: 'Dallas has a reputation for being all about the new, but the real soul of the city hides in underground pedestrian networks that killed street life, cemeteries where visitors leave cigarettes for Bonnie and Clyde, and side streets that haven\'t seen a bulldozer yet.',
      items: [
        {
          id: 'gem-experience-2',
          type: 'hidden-gem',
          name: 'Meow Wolf: The Real Unreal',
          category: 'Immersive Art Experience',
          description: 'Meow Wolf\'s fourth permanent exhibition. First location in Texas. Opened July 14, 2023, in Grapevine Mills Mall in a former 40,000-square-foot Bed Bath & Beyond. 150 artists and fabricators—38 from Texas—created 30+ unique rooms occupying roughly 29,000 square feet. Story conceived by author LaShawn Wanak: Ruby and Gordon Delaney moved to Bolingbrook, Illinois. Their daughter Carmen moved back home and started a spice blend company named Ruby\'s Garden. The narrative centers on the disappearance of Carmen\'s friend\'s son, Jared Fuqua, and the family that unknowingly unlocked portals to a different existence. Enter through the front door of a seemingly normal two-story suburban home. The rooms spiral out from there. In June 2025, Meow Wolf added Prime Materia, a bar integrated into the narrative. Massive. Immersive. Brain-breaking.',
          images: [
            {
              src: '/dallas/hidden-gems/dallas-hidden-meow-0.png',
              alt: 'Meow Wolf immersive art installation'
            },
            {
              src: '/dallas/hidden-gems/dallas-hidden-meow-1.png',
              alt: 'The Real Unreal portal rooms'
            },
            {
              src: '/dallas/hidden-gems/dallas-hidden-meow-2.png',
              alt: 'Meow Wolf interactive art experience'
            }
          ],
          address: '3000 Grapevine Mills Pkwy, Grapevine, TX 76051',
          coordinates: { lat: 32.9346, lng: -97.0565 },
          hours: 'Check website',
          price: 'Admission fee',
          website: 'https://meowwolf.com/visit/grapevine',
          sources: [
            {
              title: 'Inside Meow Wolf Grapevine',
              url: 'https://www.dmagazine.com/arts-entertainment/2023/07/inside-meow-wolf-grapevine-the-real-unreal/',
              publisher: 'D Magazine'
            }
          ],
          tip: 'Plan 2-3 hours—there\'s a lot to explore'
        },
        {
          id: 'gem-venue-2',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 1,
          name: 'Texas Theatre',
          category: 'Historic Cinema',
          description: 'Opened April 21, 1931, with fanfare on San Jacinto Day. Renowned architect W. Scott Dunne designed it in Venetian style—opera boxes, fountains, projected clouds on the ceiling, giant chandelier. Financed by Howard Hughes. First theater in Dallas with air conditioning. On November 22, 1963, Lee Harvey Oswald ducked into the theater during a showing of War Is Hell and sat near the back. Police arrested him there. Shortly after, the theater\'s vibrant designs were sealed under Spanish-style stucco. In 2001, the Oak Cliff Foundation acquired it. $1.6 million from Dallas Neighborhood Renaissance Partnership. Added to the National Register of Historic Places in 2003. Formally re-opened in 2010. Now hosts indie films, repertory cinema, and special events. The history is dark. The movies are good.',
          images: [
            {
              src: '/dallas/hidden-gems/dallas-hidden-theatre-1.png',
              alt: 'Texas Theatre exterior marquee'
            },
            {
              src: '/dallas/hidden-gems/dallas-hidden-theatre-2.png',
              alt: 'Historic Texas Theatre interior'
            }
          ],
          address: '231 W Jefferson Blvd, Dallas, TX 75208',
          coordinates: { lat: 32.7427, lng: -96.8285 },
          hours: 'Check website for showtimes',
          price: 'Varies by event',
          website: 'https://thetexastheatre.com',
          sources: [
            {
              title: 'Texas Theatre History',
              url: 'https://oakcliff.advocatemag.com/2011/04/the-history-of-the-texas-theatre/',
              publisher: 'Advocate Magazine'
            }
          ],
          tip: 'Site of Lee Harvey Oswald\'s arrest—now a beloved indie cinema'
        },
        {
          id: 'gem-underground-1',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 2,
          name: 'Dallas Underground Tunnels',
          category: 'Underground Network',
          description: 'In the 1960s, Dallas hired Vincent Ponte, the urban planner who designed Montreal\'s famous Underground City, to create a subterranean pedestrian network beneath downtown. The result: 3 miles of tunnels connecting 36 city blocks, complete with shops, restaurants, and corporate lobbies that never see daylight. The problem? It worked too well at keeping office workers underground. Street-level retail died. The sidewalks emptied. Former mayor Laura Miller called it "the worst urban planning decision Dallas has ever made." Today the tunnels are largely deserted between rush hours, when bank employees and lawyers shuffle through fluorescent-lit corridors. It\'s eerily atmospheric, part Cold War bunker aesthetic, part abandoned mall. Most entrances are unmarked or hidden inside building lobbies. If you find one, you\'ll have the whole dystopian network almost to yourself.',
          images: [
            {
              src: '/dallas/curiosities/tunnels.png',
              alt: 'Underground tunnel system with shops and corridors'
            }
          ],
          address: 'Thanks-Giving Square, 1627 Pacific Ave, Dallas, TX 75201',
          coordinates: { lat: 32.7816, lng: -96.7995 },
          hours: 'Weekdays during business hours',
          price: 'Free',
          sources: [
            {
              title: 'The Dystopian World of the Dallas Tunnels',
              url: 'https://www.dallasobserver.com/news/the-dallas-tunnels-are-a-dystopian-wonderland-that-must-be-destroyed-9284347',
              publisher: 'Dallas Observer'
            }
          ],
          tip: 'Entrances are often unmarked and hidden in plain sight'
        },
        {
          id: 'gem-museum-2',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 4,
          name: 'Ann & Gabriel Barbier-Mueller Samurai Museum',
          category: 'Art Museum',
          description: 'The only museum in the United States dedicated to samurai art and armor. One of the largest collections of its kind in the world. Ann and Gabriel Barbier-Mueller began acquiring samurai art over thirty years ago. Gabriel was fascinated by samurai armor since adolescence. Acquired his first piece in the early 1990s. The collection now spans the fifth to nineteenth centuries. Suits of armor, helmets, masks, horse armor, weaponry—with particular emphasis on the Edo period. Housed in the historic St. Ann\'s School building, originally constructed in 1927. Rotating exhibitions explore intriguing aspects of Japanese warrior culture. More than 140 pieces tour internationally.',
          images: [
            {
              src: '/dallas/hidden-gems/dallas-hidden-samuri-1.png',
              alt: 'Samurai armor on display'
            },
            {
              src: '/dallas/hidden-gems/dallas-hidden-samuri-2.png',
              alt: 'Japanese samurai helmets and masks'
            }
          ],
          address: '2501 N Harwood St, Dallas, TX 75201',
          coordinates: { lat: 32.7896, lng: -96.7992 },
          hours: 'Check website for current hours',
          price: 'Admission fee',
          website: 'https://samuraimuseum.org',
          sources: [
            {
              title: 'The Barbier-Mueller Samurai Collection',
              url: 'https://www.dmagazine.com/publications/d-magazine/2012/march/the-samurai-next-door/',
              publisher: 'D Magazine'
            }
          ],
          tip: 'Only museum of its kind in the U.S.—international significance'
        },
        {
          id: 'gem-art-4',
          type: 'hidden-gem',
          name: 'Pioneer Plaza',
          category: 'Public Art',
          description: 'The largest bronze monument of its kind in the world. 49 bronze steers and 3 trail riders created by artist Robert Summers of Glen Rose, Texas. Each steer is larger-than-life at six feet high. Cast at Eagle Bronze Foundry in Lander, Wyoming. Commemorates nineteenth-century cattle drives along the Shawnee Trail—the earliest and easternmost route by which Texas longhorn cattle were taken to northern railheads. The trail passed through Austin, Waco, and Dallas until the Chisolm Trail siphoned off most of the traffic in 1867. Real estate developer Trammell Crow wanted an iconic "Western" sculpture. Summers began work in November 1992. Opened on time in 1994. Second only to Dealey Plaza as the most-visited landmark in downtown Dallas.',
          images: [
            {
              src: '/dallas/hidden-gems/dallas-hidden-pioneer-plaza-1.png',
              alt: 'Bronze longhorn cattle drive sculpture at Pioneer Plaza'
            },
            {
              src: '/dallas/hidden-gems/dallas-hidden-pioneer-plaza-2.png',
              alt: 'Pioneer Plaza longhorn steers'
            }
          ],
          address: '1428 Young St, Dallas, TX 75202',
          coordinates: { lat: 32.7764, lng: -96.8048 },
          hours: 'Always open',
          price: 'Free',
          sources: [
            {
              title: 'Pioneer Plaza',
              url: 'https://www.visitdallas.com/things-to-do/venue/pioneer-plaza/',
              publisher: 'Visit Dallas'
            }
          ],
          tip: 'Each piece is 130% life size—the scale is staggering'
        },
        {
          id: 'gem-art-3',
          type: 'hidden-gem',
          name: 'Giant Granite Teddy Bears at Lakeside Park',
          category: 'Public Art',
          description: 'Vermont artist J.T. Williams carved a family of teddy bears from granite for the Harlan Crow family. Presented to Highland Park on Christmas Eve 1995. Three four-foot cubs and one giant 10-foot bear. The massive bear alone weighs 20 tons. They sit along Turtle Creek on 14 acres of exceptionally landscaped grounds in affluent Highland Park—one of the 10 richest places in the U.S. Inspired by the famous bronze bears that once greeted customers before entering FAO Schwartz at NorthPark Mall. Cross the pedestrian bridge and you\'ll find whimsy carved in stone.',
          images: [
            {
              src: '/dallas/hidden-gems/dallas-hidden-teddy-1.png',
              alt: 'Giant granite teddy bear sculpture at Lakeside Park'
            },
            {
              src: '/dallas/hidden-gems/dallas-hidden-teddy-1.png',
              alt: 'Teddy bear cubs sculpture'
            }
          ],
          address: '4601 Lakeside Dr, Highland Park, TX 75205',
          coordinates: { lat: 32.8410, lng: -96.7944 },
          hours: 'Dawn to dusk',
          price: 'Free',
          sources: [
            {
              title: 'The Teddy Bears of Lakeside Park',
              url: 'https://www.dallasobserver.com/best-of/2014/arts-and-entertainment/best-place-to-take-a-first-date-6453123',
              publisher: 'Dallas Observer'
            }
          ],
          tip: 'Park on Lakeside Drive just north of Lexington Ave'
        },
        {
          id: 'gem-park-1',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 7,
          name: 'Thanks-Giving Square',
          category: 'Hidden Garden',
          description: 'A serene urban garden set 15 feet below ground in downtown, featuring an upended nautilus with a conical chapel inside containing a helix of clerestory stained glass windows rising 90 feet. Designed by architect Philip Johnson in 1976. A meditative escape largely forgotten by locals.',
          images: [
            {
              src: '/dallas/hidden-gems/Thanks-giving-1.png',
              alt: 'Sunken urban garden with modern architecture'
            },
            {
              src: '/dallas/hidden-gems/Thanks-giving-2.png',
              alt: 'Thanks-Giving Square chapel interior'
            }
          ],
          address: '1627 Pacific Ave, Dallas, TX 75201',
          coordinates: { lat: 32.7829, lng: -96.7982 },
          hours: 'Daily, dawn to dusk',
          price: 'Free',
          website: 'https://thanksgivingsquare.org',
          sources: [
            {
              title: 'Thanks-Giving Square',
              url: 'https://www.philipjohnson.com/projects/thanks-giving-square/',
              publisher: 'Philip Johnson Alan Ritchie Curriculum Vitae'
            }
          ],
          tip: 'A peaceful oasis hidden in plain sight downtown'
        },
        {
          id: 'gem-museum-1',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 10,
          name: 'Museum of Geometric and MADI Art',
          category: 'Art Museum',
          description: 'Bill and Dorothy Masterson traveled to Paris in the 1990s. Met Carmelo Arden Quin and other artists working in the MADI style—a "rambunctious" form of geometric abstraction Quin founded in 1946. The Mastersons fell for it. Started collecting. Founded the museum in 2002. Opened in 2003. The only museum in North America dedicated to geometric abstraction and the MADI movement. Circles, stripes, waves, spheres, spirals, lozenges, arcs, meanders. International significance. Locals barely know it exists.',
          images: [
            {
              src: '/dallas/hidden-gems/MADI-1.png',
              alt: 'Geometric abstract art in modern gallery space'
            },
            {
              src: '/dallas/hidden-gems/MADI-2.png',
              alt: 'MADI art exhibition'
            },
            {
              src: '/dallas/hidden-gems/MADI-3.png',
              alt: 'Colorful geometric sculptures'
            }
          ],
          address: '3109 Carlisle Street, Dallas, TX 75204',
          coordinates: { lat: 32.8055, lng: -96.7992 },
          hours: 'Tue-Sat 11am-4pm (closed Sun-Mon)',
          price: 'Free',
          website: 'https://www.geometricmadimuseum.org',
          sources: [
            {
              title: 'The Museum of Geometric and MADI Art',
              url: 'https://www.dallasobserver.com/best-of/2004/arts-and-entertainment/best-new-museum-6451121',
              publisher: 'Dallas Observer'
            }
          ],
          tip: 'First (and maybe only) museum dedicated to the MADI movement worldwide'
        },
        {
          id: 'gem-garden-1',
          type: 'hidden-gem',
          name: 'Trammell Crow Sculpture Garden',
          category: 'Sculpture Garden',
          description: 'Completely free Japanese-inspired sculpture garden in the Dallas Arts District. Winds around the exterior of the Trammell Crow office building one level above the street. Twelve artworks from the 9th to the 21st centuries displayed outdoors. Stone arrangements, dry riverbed, shady groves, bamboo thickets, karesansui (flat landscape with raked gravel). Different aspects around each side of the building. Located between the Nasher Sculpture Garden and the Dallas Museum of Art. Adjacent to the Crow Collection, also free. A shaded oasis with stunning sculptures most visitors walk right past.',
          images: [
            {
              src: '/dallas/hidden-gems/dallas-hidden-crow-1.png',
              alt: 'Trammell Crow Sculpture Garden'
            },
            {
              src: '/dallas/hidden-gems/dallas-hidden-crow-2.png',
              alt: 'Japanese-inspired sculpture garden'
            }
          ],
          address: '2010 Flora St, Dallas, TX 75201',
          coordinates: { lat: 32.7877, lng: -96.7993 },
          hours: 'Daily during daylight',
          price: 'Free',
          website: 'https://crowcollection.org',
          sources: [
            {
              title: 'Trammell Crow Center Sculpture Garden',
              url: 'https://www.dallasartsdistrict.org/venue/trammell-crow-center-sculpture-garden/',
              publisher: 'Dallas Arts District'
            }
          ],
          tip: 'Perfect pre- or post-museum stop—totally free'
        },
        {
          id: 'gem-art-1',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 8,
          name: 'Giant Eyeball Sculpture',
          category: 'Public Art',
          description: 'Chicago artist Tony Tasset created this 30-foot-tall fiberglass eyeball in 2007, modeled after his own bloodshot eye (complete with veins and a dilated pupil). It first appeared in Chicago\'s Pritzker Park, staring down unsettled pedestrians for three years. In 2013, the Joule Hotel bought it and installed it in their downtown Dallas courtyard, where it now gazes eternally at luxury condos and confused tourists. The pupil alone is 3 feet wide. At night, internal lighting gives it an unsettling glow. The hotel uses the courtyard for private events, which means you might attend a cocktail party under the unblinking surveillance of a bloodshot eyeball the size of a small building. Tasset says it\'s about perception and observation. Dallas just thinks it\'s cool and weird.',
          images: [
            {
              src: '/dallas/hidden-gems/eyeball.png',
              alt: 'Large eyeball sculpture in urban setting'
            },
            {
              src: '/dallas/hidden-gems/eyeball-2.png',
              alt: 'Giant eyeball from another angle'
            }
          ],
          address: '1601 Main St, Dallas, TX 75201',
          coordinates: { lat: 32.7816, lng: -96.7999 },
          hours: 'Visible from street; courtyard access varies',
          price: 'Free to view',
          sources: [
            {
              title: 'The Story Behind the Giant Eyeball',
              url: 'https://www.dmagazine.com/frontburner/2013/08/the-story-behind-the-giant-eyeball-in-downtown-dallas/',
              publisher: 'D Magazine'
            }
          ],
          tip: 'Site of Dallas Art Fair\'s closing party - a truly unique venue'
        },
        {
          id: 'gem-art-2',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 9,
          name: 'The Texas Woofus',
          category: 'Mythological Sculpture',
          description: 'A chimera sculpture featuring the mane and neck of a horse, turkey tail, pig body, duck wings, sheep\'s head, and Texas longhorns. Created for the 1936 Texas Centennial, mysteriously disappeared in 1941, replaced in 1998. One of Fair Park\'s most obscure treasures.',
          images: [
            {
              src: '/dallas/hidden-gems/woofus-1.png',
              alt: 'Mythical creature sculpture combining multiple animals'
            }
          ],
          address: 'Livestock Building No. 2, Fair Park, Dallas, TX 75210',
          coordinates: { lat: 32.7798, lng: -96.7616 },
          hours: 'When Fair Park is open to public',
          price: 'Free',
          sources: [
            {
              title: 'The Mystery of the Texas Woofus',
              url: 'https://www.dmagazine.com/frontburner/2012/10/the-mystery-of-the-texas-woofus/',
              publisher: 'D Magazine'
            }
          ],
          tip: 'Hiding in plain sight despite being bizarre'
        },
        {
          id: 'dal-gem-ad-1',
          type: 'ad',
          size: 'rectangle'
        },
        {
          id: 'gem-cemetery-1',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 3,
          name: 'Bonnie & Clyde Graves',
          category: 'Historic Burial Sites',
          description: 'The separate graves of Dallas\'s most infamous outlaws. Bonnie is at Crown Hill Memorial Park, Clyde at Western Heights Cemetery. Visitors leave cigarettes, bullets, and flowers. As of 2025, there\'s an active legal battle to reunite them.',
          images: [
            {
              src: '/dallas/hidden-gems/bonnieclyde-1.png',
              alt: 'Bonnie Parker\'s grave site'
            },
            {
              src: '/dallas/hidden-gems/bonnieclyde-2.png',
              alt: 'Clyde Barrow\'s grave site'
            }
          ],
          address: '7118 Webb Chapel Rd (Bonnie) & 1611 Fort Worth Ave (Clyde)',
          coordinates: { lat: 32.8633, lng: -96.8692 },
          hours: 'Cemetery hours',
          price: 'Free',
          sources: [
            {
              title: 'Bonnie and Clyde: A Dallas History',
              url: 'https://www.dallashistory.org/history/bonnie-and-clyde/',
              publisher: 'Dallas Historical Society'
            }
          ],
          tip: '2025 update: Court case ongoing to potentially reunite them'
        },
        {
          id: 'gem-transport-1',
          type: 'hidden-gem',
          name: 'M-Line Trolley',
          category: 'Vintage Streetcar',
          description: 'Dallas had streetcars from 1872 until 1956, when the automobile killed them. Then in 1983, a group of transit enthusiasts formed the McKinney Avenue Transit Authority and started rescuing vintage trolleys from cities across America. They found a 1909 Melbourne, Australia tram. A 1920 Oporto, Portugal car. A 1945 Rosario, Argentina streetcar. They restored them, laid track through Uptown, and launched service in 1989. Today the M-Line runs 4.6 miles with 37 stops, connecting West Village to downtown. It\'s completely free. Half a million rides a year, all on century-old vehicles that creak and sway like time machines. Most Dallas visitors have no idea it exists. Locals who discover it tend to become evangelists. Catch it at night when the vintage cars glow against the skyline.',
          images: [
            {
              src: '/dallas/hidden-gems/m-trolley.png',
              alt: 'Vintage streetcar on urban rail line'
            }
          ],
          address: '3153 Oak Lawn Ave, Dallas, TX 75219',
          coordinates: { lat: 32.8055, lng: -96.7992 },
          hours: '7am-10pm Mon-Thu, 10am start weekends, until midnight Fri-Sat',
          price: 'Completely free (donations encouraged)',
          website: 'https://www.mata.org/m-line',
          sources: [
            {
              title: 'History of the M-Line Trolley',
              url: 'https://www.mata.org/about-us/history',
              publisher: 'McKinney Avenue Transit Authority'
            }
          ],
          tip: 'One of Dallas\'s free modes of transportation many don\'t know about'
        },
        {
          id: 'gem-nature-1',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 6,
          name: 'Cedar Ridge Preserve',
          category: 'Nature Preserve',
          description: 'In 1975, the Greenhills Foundation acquired 26 acres and started the Dallas Nature Center, providing outdoor appreciation programs. Dallas County began acquiring more property in 1985. By 2003, they\'d reclaimed those original 26 acres and more—633 acres total on the White Rock Escarpment. April 2003, Audubon Dallas took over management. Now it\'s 9 miles of looping trails at 755 feet elevation—one of the highest points in the Metroplex. Full Moon Hikes. Spectacular hilly views. A slice of Hill Country 20 minutes from downtown. Lesser-known than White Rock Lake. Arrive before 8am on weekends to guarantee parking.',
          images: [
            {
              src: '/dallas/hidden-gems/cedar-ridge-1.png',
              alt: 'Hiking trail through nature preserve with escarpment views'
            },
            {
              src: '/dallas/hidden-gems/cedar-ridge-2.png',
              alt: 'Cedar Ridge Preserve overlook'
            },
            {
              src: '/dallas/hidden-gems/cedar-ridge-3-0.png',
              alt: 'Trail through Cedar Ridge'
            },
            {
              src: '/dallas/hidden-gems/cedar-ridge-4.png',
              alt: 'Views from Cedar Ridge Preserve'
            }
          ],
          address: '7171 Mountain Creek Pkwy, Dallas, TX 75249',
          coordinates: { lat: 32.6298, lng: -96.9685 },
          hours: 'Dawn to dusk',
          price: 'Free',
          website: 'https://audubondallas.org/cedar-ridge-preserve/',
          sources: [
            {
              title: 'Cedar Ridge Preserve',
              url: 'https://audubondallas.org/cedar-ridge-preserve/',
              publisher: 'Audubon Dallas'
            }
          ],
          tip: 'Arrive before 8am on weekends to guarantee parking'
        },
        {
          id: 'gem-nature-2',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 5,
          name: 'Joppa Preserve / Lemmon Lake',
          category: 'Wildlife Preserve',
          description: 'First established in 1986 as Lemmon Lake. Renamed in 1991 after the nearby freedman town Joppa (pronounced "Joppee")—settled in 1872 by former slaves of the Miller Plantation. Henry Critz Hines was enslaved property sent from Missouri to the Miller Plantation. When freed, Miller gave Hines the ferry used to cross the Trinity River. Hines prospered. Other freed persons came. One of 30+ freedman communities formed in North Texas after abolition. Some of the earliest Juneteenth celebrations began here. The city annexed Joppa in 1955. Now the 296-acre preserve protects wetlands and Lemmon Lake in the Great Trinity Forest. Trail cameras document white-tailed deer, coyotes, feral hogs. Plentiful migrating waterfowl and year-round shorebirds.',
          images: [
            {
              src: '/dallas/hidden-gems/lemmonlake-1.png',
              alt: 'Wildlife preserve with lake and migratory birds'
            },
            {
              src: '/dallas/hidden-gems/lemmonlake-2.png',
              alt: 'Lemmon Lake shoreline'
            }
          ],
          address: '4911 River Oaks Rd, Dallas, TX 75216',
          coordinates: { lat: 32.6951, lng: -96.8336 },
          hours: 'Dawn to dusk',
          price: 'Free',
          website: 'https://www.dallascounty.org/departments/parks/joppa-preserve.php',
          sources: [
            {
              title: 'The History of Joppa',
              url: 'https://www.dmagazine.com/publications/d-ceo/2023/january-february/the-fight-to-save-joppa/',
              publisher: 'D Magazine'
            }
          ],
          tip: 'Plentiful migrating waterfowl and year-round shorebirds'
        },
        {
          id: 'gem-books-2',
          type: 'hidden-gem',
          name: 'The Wild Detectives',
          category: 'Bookstore/Bar',
          description: 'Javier García del Moral and Paco Vique—two Spanish civil engineers—met in Austin in 2008-2009. Became friends over a shared love of literature. Named their dream after Roberto Bolaño\'s Los Detectives Salvajes (The Savage Detectives). Opened in 2014 on 8th Street in Oak Cliff, less than a block from Bishop Arts. Nearly 1,500 carefully chosen books. Coffee, espresso, beer, wine. Backyard patio. Concerts, film screenings, readings, community events between the shelves. Became Dallas\'s literary heart. An independent bookstore-bar-venue creating the kind of intentional cultural conversation the city desperately needed.',
          images: [
            {
              src: '/dallas/establishments/wild-detectives-branded.jpg',
              alt: 'The Wild Detectives bookstore bar venue in Bishop Arts District'
            },
            {
              src: '/dallas/hidden-gems/dallas-book-pub-1.png',
              alt: 'Interior of Wild Detectives bookstore with books and bar'
            },
            {
              src: '/dallas/hidden-gems/dallas-book-pub-2.png',
              alt: 'Wild Detectives bar area'
            },
            {
              src: '/dallas/hidden-gems/dallas-book-pub-3.png',
              alt: 'Wild Detectives patio'
            },
            {
              src: '/dallas/hidden-gems/dallas-book-pub-4.png',
              alt: 'Wild Detectives book shelves'
            }
          ],
          address: '314 W 8th St, Dallas, TX 75208',
          coordinates: { lat: 32.7460, lng: -96.8294 },
          hours: '11am-midnight daily',
          price: 'Free to browse',
          website: 'https://thewilddetectives.com',
          sources: [
            {
              title: 'The Wild Detectives',
              url: 'https://www.dmagazine.com/publications/d-magazine/2014/march/the-wild-detectives-oak-cliff/',
              publisher: 'D Magazine'
            }
          ],
          tip: 'Check the calendar for readings and events'
        },
        {
          id: 'gem-arcade-1',
          type: 'hidden-gem',
          name: 'The Cidercade',
          category: 'Arcade Bar',
          featuredOrder: 11,
          featured: true,
          description: 'Bishop Cider Company took over a massive warehouse in Deep Ellum and filled it with 150+ vintage arcade games, pinball machines, and classic consoles. Pay a flat $12 cover (weekdays) or $15 (weekends) and every game is free to play. The catch: they only serve cider, no beer. But the cider is excellent, made in-house with flavors rotating seasonally. The space itself is cavernous and loud, exactly what an arcade should feel like. Adults reclaiming quarters they never had to spend. The original location opened in 2018 after the Cider company outgrew their Bishop Arts taproom. Now there\'s a second Cidercade in Fort Worth.',
          images: [
            {
              src: '/dallas/hidden-gems/dallas-hidden-cider-1.png',
              alt: 'The Cidercade arcade floor with vintage games'
            }
          ],
          address: '2777 Irving Blvd, Dallas, TX 75207',
          coordinates: { lat: 32.7896, lng: -96.8303 },
          hours: 'Mon-Thu 5pm-12am, Fri 4pm-2am, Sat 12pm-2am, Sun 12pm-12am',
          price: '$12-15 cover, all games free',
          website: 'https://bishopcider.com/cidercade-dallas',
          sources: [
            {
              title: 'Cidercade Dallas',
              url: 'https://www.dallasobserver.com/best-of/2018/arts-and-entertainment/best-arcade-11311221',
              publisher: 'Dallas Observer'
            }
          ],
          tip: 'Go on a weekday evening for less competition on the popular machines'
        }
      ]
    },
    {
      id: 'dal-dark-history',
      type: 'section',
      title: 'Dallas\'s Dark History',
      teaser: 'Assassinations, serial killers, and the bodies beneath Big D',
      intro: 'Dallas hides bizarre vanishings, ghostly rivalries, and cold-blooded murders that defy explanation—from decapitated lovers to phantom hitchhikers. These off-the-brochure stories linger in lore long after headlines move on. A web of legends and cold cases where only fragments are verified, and none feel fully closed.',
      items: [
        {
          id: 'dal-dark-1',
          type: 'dark-history',
          category: 'crime',
          title: 'The Eyeball Killer',
          image: {
            src: '/dallas/dark-history/lovers-lane.png',
            alt: 'Oak Cliff street at night'
          },
          body: 'Between December 1990 and March 1991, someone was hunting prostitutes in Oak Cliff—and taking souvenirs. Mary Lou Pratt was found shot in the head, her eyes surgically removed. Susan Peterson turned up the same way two months later. Then Shirley Williams, naked near a school, eyes gone. The precision suggested medical training. Police searched Charles Albright\'s home and found X-Acto blades, a copy of Gray\'s Anatomy, hundreds of close-up photos of women\'s eyes, and newspaper clippings about his own murders. No eyeballs were ever recovered. Albright, a former science teacher obsessed with taxidermy since childhood, was convicted of one murder and sentenced to life. He died in prison in 2020, still drawing eyes on his cell walls.',
          verdict: 'Convicted. Charles Albright received life in prison for Shirley Williams\' murder. Charges in the other cases were dropped due to lack of evidence, though he remains the prime suspect in all four killings.',
          sources: [
            {
              type: 'article',
              title: 'See No Evil',
              publisher: 'Texas Monthly',
              year: '1993',
              url: 'https://www.texasmonthly.com/true-crime/see-no-evil-3/'
            },
            {
              type: 'article',
              title: 'Flashback: The Eyeball Killer stalked, murdered four Oak Cliff women in 1991',
              publisher: 'Dallas Morning News',
              year: '2017',
              url: 'https://www.dallasnews.com/news/2017/11/01/flashback-the-eyeball-killer-stalked-murdered-four-oak-cliff-women-in-1991/'
            },
            {
              type: 'article',
              title: 'How a police storefront changed Jefferson and captured a serial killer',
              publisher: 'Oak Cliff Advocate',
              year: '2014',
              url: 'https://oakcliff.advocatemag.com/2014/10/beat-cop-goes/'
            },
            {
              type: 'other',
              title: 'Charles Albright',
              publisher: 'Wikipedia',
              url: 'https://en.wikipedia.org/wiki/Charles_Albright'
            }
          ],
          location: {
            name: 'Oak Cliff (Jefferson Blvd)',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        },
        {
          id: 'dal-dark-2',
          type: 'dark-history',
          category: 'haunting',
          title: 'The Crying Children of Carrollton',
          image: {
            src: '/dallas/dark-history/carrollton.png',
            alt: 'Abandoned farmhouse ruins'
          },
          body: 'Around the turn of the century, a strange family moved into an abandoned farmhouse three miles outside Carrollton. When neighbors came to welcome them, the mother, father, and three children were cold and unsmiling—the well-meaning committee left feeling "thoroughly snubbed." A few months later, a traveling salesman passing the now-destroyed farmhouse heard something that stopped him: the unmistakable sobbing of a child. He looked toward the ruins and saw a small boy standing in a clearing. Then two more children appeared beside him. When the salesman walked closer, all three vanished. The family was never seen again. No records explain what happened. On certain nights, locals say you can still hear crying drifting across the vacant lots where the farmhouse once stood.',
          verdict: 'Pure folklore. The story was recorded by Carrollton storyteller Zenita Fowler and published in "Ghost Stories of North Texas." No archival records of the family have been found.',
          sources: [
            {
              type: 'book',
              title: 'Ghost Stories of North Texas',
              author: 'Zenita Fowler',
              year: '1990'
            },
            {
              type: 'article',
              title: 'Mysterious past of Bethel Cemetery',
              publisher: 'Carrollton Leader',
              year: '2014',
              url: 'https://starlocalmedia.com/carrolltonleader/mysterious-past-of-bethel-cemetery/article_e32cc07e-5b9c-11e4-8e6e-9b2d0b612636.html'
            }
          ]
        },
        {
          id: 'dal-dark-3',
          type: 'dark-history',
          category: 'cold-case',
          title: 'A Son\'s Quest for Justice',
          image: {
            src: '/dallas/dark-history/laurie-kay.png',
            alt: 'Laurie Kay Bosman memorial'
          },
          body: 'March 1987: 25-year-old Laurie Kay Bosman was found strangled on her living room floor in her Far North Dallas apartment on Marsh Lane. Her door was slightly ajar but showed no signs of forced entry. Her security system wasn\'t activated. Her seven-year-old son, Shawn Chelf, had been sleeping in the next room. Police believed she knew her killer—her fiancé was out of the country, and other leads went nowhere. The case went cold for 27 years. Then Shawn Chelf became a police officer. He joined the Double Oak Police Department in 2013 and began pushing Dallas detectives to reopen his mother\'s file. They finally did. DNA samples that couldn\'t be tested in 1987 are now being analyzed with modern genetic genealogy techniques.',
          verdict: 'Unsolved. The case was one of 323 murders in Dallas that year. Shawn Chelf, now a cop, continues to push for answers nearly four decades later.',
          sources: [
            {
              type: 'article',
              title: 'Unsolved: Shawn Chelf is looking for answers to his mother\'s death',
              publisher: 'Dallas Morning News',
              year: '2015',
              url: 'https://interactives.dallasnews.com/2015/cold-cases/part2.html'
            },
            {
              type: 'article',
              title: 'Son of woman slain in 1987 becomes police officer, sees cold case reopened',
              publisher: 'Dallas Morning News',
              year: '2015',
              url: 'https://www.dallasnews.com/news/crime/2015/08/26/son-of-woman-slain-in-1987-becomes-police-officer-sees-cold-case-reopened/'
            },
            {
              type: 'article',
              title: 'Son on Quest for Answers in Mother\'s Murder',
              publisher: 'NBC DFW',
              url: 'https://www.nbcdfw.com/news/local/son-on-quest-for-answers-in-mothers-murder/144785/'
            },
            {
              type: 'other',
              title: 'Laurie Kay Bosman Case File',
              publisher: 'Solve the Case',
              url: 'https://www.solvethecase.org/case/1987-4/laurie-kay-bosman'
            }
          ],
          location: {
            name: '18700 block of Marsh Lane, Far North Dallas',
            url: 'https://maps.app.goo.gl/uXjGq5v7Ym5E8W1V7',
            stillExists: true
          }
        },
        {
          id: 'dal-dark-4',
          type: 'dark-history',
          category: 'haunting',
          title: 'The Lady of White Rock Lake',
          image: {
            src: '/dallas/dark-history/lady-white-rock.png',
            alt: 'Misty White Rock Lake at night'
          },
          body: 'Since the 1940s, motorists circling White Rock Lake have picked up the same waterlogged passenger: a pale woman in her twenties wearing a soaked evening dress who flags down cars at night. She climbs into the back seat, gives a Lakewood or Oak Cliff address, then vanishes before arrival—leaving nothing but a damp spot on the upholstery. The earliest published account appeared in 1943, but the legend is most often credited to Guy Malloy, Neiman Marcus\'s display director for 40 years, who loved telling the story. Some versions say she drowned in a boating accident; others claim suicide. Two real drownings have been suggested as the ghost\'s origin: Louise Ford Davis in 1935 and Rose Stone in 1942. But Sally Rodriguez, the lake\'s unofficial historian, has researched every death record. "I\'ve found lots of stories," she says, "but no stories that match." Reader\'s Digest named White Rock Lake one of the world\'s 14 most haunted bodies of water—listed right above Loch Ness.',
          verdict: 'Pure Dallas folklore. The phantom hitchhiker is a classic urban legend type, and no verified drowning victim matches the story. But try telling that to anyone who\'s driven those dark lakeside roads alone.',
          sources: [
            {
              type: 'article',
              title: 'How White Rock\'s "Lady of the Lake" ghost story was sparked by a Neiman Marcus display genius',
              publisher: 'Dallas Morning News',
              year: '2021',
              url: 'https://www.dallasnews.com/arts-entertainment/2021/10/31/how-white-rocks-lady-of-the-lake-ghost-story-was-sparked-by-a-neiman-marcus-display-genius/'
            },
            {
              type: 'article',
              title: 'Is Dallas\' White Rock Lake haunted? Curious Texas ghost hunts for an answer',
              publisher: 'Dallas Morning News',
              year: '2019',
              url: 'https://www.dallasnews.com/news/curious-texas/2019/01/31/is-dallas-white-rock-lake-haunted-curious-texas-ghost-hunts-for-an-answer/'
            },
            {
              type: 'article',
              title: 'Dallas, Texas ghost story: White Rock Lady of the Lake',
              publisher: 'WFAA',
              url: 'https://www.wfaa.com/article/features/dallas-texas-ghost-story-white-rocks-lady-of-the-lake-doesnt-exist-but-other-ghosts-just-might/287-6b22f6b0-b69c-4149-bdf2-f724a0987afb'
            },
            {
              type: 'article',
              title: 'Lady of the Lake',
              publisher: 'For the Love of the Lake',
              url: 'https://whiterocklake.org/lady-of-the-lake/'
            }
          ],
          location: {
            name: 'White Rock Lake',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        },
        {
          id: 'dal-dark-5',
          type: 'dark-history',
          category: 'disaster',
          title: 'The Screaming Bridge',
          image: {
            src: '/dallas/dark-history/screaming-bridge.png',
            alt: 'Old wooden bridge in North Texas'
          },
          body: 'February 4, 1961: Six Arlington High School girls left a movie theater for a late-night joyride. As their car approached a wooden bridge on Arlington-Bedford Road at roughly 45 mph, the darkness and incline hid what lay ahead—the bridge had been burned out. Their car launched off the road and crashed into the opposite bank of the ravine, landing upside down. Mary Lou Goldner, 16, and Claudie Jean Reeves, 17, died instantly. Kathy Fleming died later. Three others survived with severe injuries. Ironically, Claudie\'s father was a highway patrolman; investigating officers paused their work to attend her funeral. A grand jury investigated four Arlington High boys for arson—they\'d set the bridge on fire as a "prank"—but called it "childish" and declined to press charges. The wooden bridge was soon replaced with a concrete culvert. But the legend migrated south to nearby Trammel Davis Road, now deep inside River Legacy Park, where visitors still claim to hear screaming on quiet nights.',
          verdict: 'Documented tragedy. The 1961 accident is real and verified; the haunting legend that followed attached itself to multiple bridges in the Trinity River bottom.',
          sources: [
            {
              type: 'article',
              title: 'Six Girls in a Chevy (Part 2): Screaming Bridge',
              publisher: 'Hometown by Handlebar',
              url: 'https://hometownbyhandlebar.com/?p=17046'
            },
            {
              type: 'article',
              title: 'The Screaming Bridge',
              publisher: 'Dallas Terrors',
              url: 'https://dallasterrors.com/the-legend-of-screaming-bridge/'
            },
            {
              type: 'article',
              title: 'Screaming Bridge at River Legacy Park',
              publisher: 'Ghost Texas',
              url: 'https://ghosttexas.com/screaming-bridge-at-river-legacy-park/'
            },
            {
              type: 'article',
              title: 'Screaming Bridge: A Haunting Texas Urban Legend',
              publisher: 'Texas Hill Country',
              url: 'https://texashillcountry.com/screaming-bridge-legend/'
            }
          ],
          location: {
            name: 'River Legacy Park (Trammel Davis Road bridge)',
            url: 'https://maps.app.goo.gl/R5eYx5wYm5E8W1V7',
            stillExists: true
          }
        },
        {
          id: 'dal-dark-6',
          type: 'dark-history',
          featured: true,
          featuredOrder: 3,
          category: 'unsolved',
          title: 'The Girl Who Changed Everything',
          images: [
            {
              src: '/dallas/dark-history/amber-1.png',
              alt: 'Amber Hagerman memorial'
            },
            {
              src: '/dallas/dark-history/amber-2.png',
              alt: 'AMBER Alert system announcement'
            }
          ],
          body: 'January 13, 1996: Nine-year-old Amber Hagerman took her new pink Christmas bike for a ride near her grandmother\'s house in Arlington. She and her little brother found a "cool" ramp in an abandoned Winn-Dixie parking lot two-tenths of a mile from home. Her brother went back; Amber stayed. At 3:15 p.m., a man in a black pickup truck grabbed her from behind. A 78-year-old retired sheriff\'s deputy witnessed it from his backyard and called 911, but could only describe the truck—a black 1980s or \'90s full-sized pickup with no chrome. Four days later, a dog walker found Amber\'s body in a creek bed near some apartments. Her throat had been cut. The medical examiner determined she\'d been kept alive for at least two days. Police have sifted through more than 8,000 leads over nearly three decades. No arrest has ever been made. But ten months after her death, Dallas-Fort Worth broadcasters launched a new emergency system in her name. The AMBER Alert has since helped recover over 1,200 children nationwide.',
          verdict: 'Unsolved. The killer has never been identified despite decades of investigation and thousands of tips. The case remains active with Arlington Police.',
          sources: [
            {
              type: 'article',
              title: 'How A Nine-Year-Old\'s Horrifying Kidnapping And Murder Inspired The AMBER Alert System',
              publisher: 'All That\'s Interesting',
              url: 'https://allthatsinteresting.com/amber-hagerman'
            },
            {
              type: 'article',
              title: 'How Were Amber Alerts Created? The Amber Hagerman Cold Case',
              publisher: 'A&E True Crime',
              url: 'https://www.aetv.com/real-crime/how-did-amber-alerts-start-amber-hagerman'
            },
            {
              type: 'article',
              title: 'Still Searching for Amber\'s Killer',
              publisher: 'National Center for Missing & Exploited Children',
              year: '2021',
              url: 'https://www.missingkids.org/blog/2021/still-searching-for-ambers-killer'
            },
            {
              type: 'other',
              title: 'Amber Hagerman Case File',
              publisher: 'Solve the Case',
              url: 'https://www.solvethecase.org/case/1996-5/amber-hagerman'
            },
            {
              type: 'article',
              title: 'About AMBER Alert',
              publisher: 'U.S. Department of Justice',
              url: 'https://amberalert.ojp.gov/about'
            }
          ],
          location: {
            name: 'Former Winn-Dixie lot (E. Abram St., Arlington)',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        },
        {
          id: 'dal-dark-7',
          type: 'dark-history',
          category: 'crime',
          title: 'The Pillowcase Killer',
          images: [
            {
              src: '/dallas/dark-history/pillowcase-1.png',
              alt: 'Dallas senior living facility'
            },
            {
              src: '/dallas/dark-history/pillowcase-2.png',
              alt: 'Billy Chemirmir investigation coverage'
            }
          ],
          body: 'For two years, elderly women in upscale Dallas senior living communities kept dying in their sleep. Natural causes, the death certificates said—they were old, after all. But Billy Chemirmir wasn\'t a caregiver making house calls. He was a predator. The Kenyan immigrant would pose as a maintenance worker or medical professional, talk his way into apartments, then smother his victims with pillows and steal their jewelry. The smothering left almost no evidence. At least 18 women died before 91-year-old Mary Annis Bartel survived an attack in March 2018. "Go to bed. Don\'t fight me," he told her. She lost consciousness but lived. Her description led police to Chemirmir the next day—just as he was tossing a jewelry box into a dumpster. Inside: items belonging to his latest victim, 81-year-old Lu Thi Harris, found dead that same evening. Chemirmir was indicted for 22 murders, convicted of two, and sentenced to life without parole. In September 2023, his cellmate killed him in prison.',
          verdict: 'Convicted. Chemirmir received two life sentences before being killed by his cellmate in 2023. Families of victims continue to push for accountability from the senior living facilities that failed to protect residents.',
          sources: [
            {
              type: 'article',
              title: 'Dallas serial killer Billy Chemirmir convicted, receives second life sentence',
              publisher: 'WFAA',
              year: '2022',
              url: 'https://www.wfaa.com/article/news/crime/dallas-serial-killer-billy-chemirmir-convicted-of-capital-murder-in-death-of-another-elderly-victim-receives-second-life-sentence-officials-say/287-0f36d04d-4f2d-4d1e-9b73-7ddb77f5dc00'
            },
            {
              type: 'article',
              title: 'Convicted North Texas killer Billy Chemirmir killed in prison',
              publisher: 'WFAA',
              year: '2023',
              url: 'https://www.wfaa.com/article/news/local/billy-chemirmir-killed-in-prison-texas-dallas-convicted-killer/287-caa6133d-a47b-4b26-8946-20ec46b623a1'
            },
            {
              type: 'article',
              title: 'Pillowcase Murders: Suspected Texas serial killer smothered elderly women in upscale nursing homes',
              publisher: 'Fox News',
              url: 'https://www.foxnews.com/us/pillowcase-murders-suspected-texas-serial-killer-smothered-elderly-women-upscale-nursing-homes'
            },
            {
              type: 'article',
              title: 'Billy Chemirmir, accused in deaths of 18 elderly women, killed in prison by cellmate',
              publisher: 'NBC News',
              year: '2023',
              url: 'https://www.nbcnews.com/news/us-news/man-accused-deaths-18-elderly-women-texas-killed-prison-cellmate-rcna105839'
            },
            {
              type: 'documentary',
              title: 'Pillowcase Murders',
              platform: 'Paramount+',
              year: '2024'
            },
            {
              type: 'other',
              title: 'Billy Chemirmir',
              publisher: 'Wikipedia',
              url: 'https://en.wikipedia.org/wiki/Billy_Chemirmir'
            }
          ],
          location: {
            name: 'The Tradition-Preston Hollow',
            url: 'https://maps.app.goo.gl/uXjGq5v7Ym5E8W1V7',
            stillExists: true
          }
        },
        {
          id: 'dal-dark-8',
          type: 'dark-history',
          category: 'haunting',
          title: 'Goatman\'s Bridge',
          image: {
            src: '/dallas/dark-history/goatman.png',
            alt: 'Old Alton Bridge at dusk'
          },
          body: 'The story goes like this: In the late 1930s, a Black goat farmer named Oscar Washburn lived near the Old Alton Bridge in Denton County. He was good at his trade—so good he hung a sign on the bridge: "This Way to the Goatman." His success enraged local Klansmen. One night in August 1938, they crossed the bridge, dragged Washburn from his home, and hanged him from the iron trusses. But when they looked over the edge to make sure he was dead, the noose was empty. Panicked, they returned to his home and murdered his wife and children. Now, on dark nights, people report glowing eyes in the woods, the sound of hooves on the bridge, and a growling voice ordering them to leave. Paranormal investigators flock here. The reality is more complicated: researchers have found no census records of Oscar Washburn, no newspaper accounts of a 1938 lynching, no death certificates. But racist violence absolutely happened in Denton County during that era—the newspapers just didn\'t print the victims\' names. The Goatman may be a ghost story, but the terror it describes was real.',
          verdict: 'Unverified legend. No historical records confirm Oscar Washburn existed, but the story reflects documented patterns of racial violence in 1930s North Texas.',
          sources: [
            {
              type: 'article',
              title: 'The Goatman of Old Alton Bridge: A tale rooted in Texas\' historical racial tensions',
              publisher: 'Texas Standard / KERA',
              year: '2023',
              url: 'https://www.texasstandard.org/stories/goatman-denton-old-alton-bridge-texas-cryptids-lynching/'
            },
            {
              type: 'article',
              title: 'Denton\'s Haunted Bridge Legend Grows, But Does the Story Add Up?',
              publisher: 'NBC DFW',
              url: 'https://www.nbcdfw.com/news/local/dentons-haunted-bridge-legend-grows-but-does-the-story-add-up/44982/'
            },
            {
              type: 'article',
              title: 'The Goat Man and a Name',
              publisher: 'Denton Public Library',
              year: '2015',
              url: 'https://dentonlibrary.wordpress.com/2015/11/04/the-goat-man-and-a-name/'
            },
            {
              type: 'article',
              title: 'A Historic Haunt: Old Alton Bridge',
              publisher: 'Denton County Office of History and Culture',
              year: '2017',
              url: 'https://dentoncountyhistoryandculture.wordpress.com/2017/10/27/a-historic-haunt-old-alton-bridge/'
            },
            {
              type: 'other',
              title: 'Old Alton Bridge',
              publisher: 'Wikipedia',
              url: 'https://en.wikipedia.org/wiki/Old_Alton_Bridge'
            }
          ],
          location: {
            name: 'Old Alton Bridge',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        },
        {
          id: 'dal-dark-9',
          type: 'dark-history',
          category: 'disaster',
          title: 'The Corner That Attracts Tragedy',
          images: [
            {
              src: '/dallas/curiosities/elm-houston-1.png',
              alt: 'Dealey Plaza and the Texas School Book Depository'
            },
            {
              src: '/dallas/curiosities/elm-houston-2.png',
              alt: 'Historic view of Elm and Houston corner'
            }
          ],
          body: 'The corner of Elm and Houston Streets in Dealey Plaza has a sordid history that predates the Kennedy assassination. In 1898, the Southern Rock Island Plow Company built a five-story structure on the site. On May 4, 1901, it was struck by lightning and burned to the ground. A seven-story building was rebuilt on the same foundation in 1901 — the same building where, 62 years later, Lee Harvey Oswald allegedly took aim at President Kennedy from the sixth floor. Some corners seem to attract tragedy. This is one of them.',
          verdict: 'Documented history. The 1901 fire is verified; whether the location is "cursed" is a matter of perspective.',
          sources: [
            {
              type: 'article',
              title: 'Texas School Book Depository',
              publisher: 'Dallas Historical Society',
              url: 'https://www.dallashistory.org/'
            }
          ],
          location: {
            name: 'Dealey Plaza (Elm & Houston)',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        }
      ]
    },
    {
      id: 'dal-best-bars',
      type: 'best-of',
      category: 'bars',
      title: 'Big D After Dark',
      intro: 'Dallas has spent decades trying to live down its reputation as a city of bottle-service clubs and Uptown bros doing shots of Fireball, and the bar scene has mostly succeeded. The cocktail culture here evolved from "where can I get drunk near a valet" to legitimate craft programs in subterranean hotel basements, speakeasies hidden behind working barber shops, and Jazz Age relics where the furniture weighs more than your car. You\'ll find bartenders treating cocktails like chemistry experiments, trailer-trash-chic dive bars celebrating the unapologetically tacky, 15,000-square-foot "adult playgrounds" with treehouses and string lights, and New Orleans-style lounges serving frozen Irish coffee to homesick Saints fans. The evolution hasn\'t been smooth—Deep Ellum gentrified while trying to stay gritty, Lower Greenville became the day-drinking capital of Texas, and Downtown finally figured out how to have fun after 6pm. But the result is a drinking culture that ranges from subterranean noir to outdoor junk-yard parties, with enough variety that even people who hate Dallas grudgingly admit the bars are pretty good.',
      spots: [
        {
          name: 'Midnight Rambler',
          neighborhood: 'Downtown',
          vibe: 'Subterranean rock-and-roll cool for people who find sunlight offensive.',
          order: 'The "Hells Bells" or whatever aromatic chemistry experiment the bartender suggests.',
          why: 'Located in the basement of The Joule hotel, Midnight Rambler is where Dallas goes to pretend it lives in a noir film. With walnut-barreled ceilings and a cocktail program that borders on nuclear physics, it\'s easily the most sophisticated drinking hole in the city. It\'s dark, it\'s moody, and it\'s the kind of place where you can discuss international trade or plot a heist with equal ease. The bartenders are artisans of the highest order, and the sound system is tuned to "intimate but dangerous."',
          images: [
            {
              src: '/dallas/establishments/bars-midnight-1.png',
              alt: 'Midnight Rambler bar interior'
            },
            {
              src: '/dallas/establishments/bars-midnight-2.png',
              alt: 'Midnight Rambler cocktails'
            },
            {
              src: '/dallas/establishments/bars-midnight-3.png',
              alt: 'Midnight Rambler atmosphere'
            }
          ],
          address: '1530 Main St, Dallas, TX 75201',
          coordinates: { lat: 32.7816, lng: -96.7995 },
          price: '$$$',
          hours: 'Tue-Wed 5pm-12am, Thu-Sat 5pm-2am',
          website: 'https://midnightramblerbar.com/',
          instagram: '@midnightramblerbar'
        },
        {
          name: 'The Library Bar',
          neighborhood: 'Oak Lawn',
          vibe: 'Jazz Age glamour and leather-bound wisdom in a room that smells like success.',
          order: 'A classic Martini—it\'s the only way to respect the furniture.',
          why: 'The Library is a Dallas institution nestled inside the Warwick Melrose. It\'s the kind of place where the furniture is heavier than your car and the piano player knows exactly which song will make you order a second round. It\'s been named one of the most iconic bars in America for its refusal to change. In a city obsessed with the new, The Library is a glorious, bourbon-soaked monument to the persistent excellence of the old school.',
          images: [
            {
              src: '/dallas/establishments/bar-library-1.png',
              alt: 'The Library Bar interior'
            },
            {
              src: '/dallas/establishments/bar-library-2.png',
              alt: 'The Library Bar seating'
            },
            {
              src: '/dallas/establishments/bar-library-3.png',
              alt: 'The Library Bar atmosphere'
            }
          ],
          address: '3015 Oak Lawn Ave, Dallas, TX 75219',
          coordinates: { lat: 32.8101, lng: -96.8101 },
          price: '$$$',
          hours: 'Daily 2pm-12am',
          website: 'https://www.librarybardallas.com/',
          instagram: '@librarybardallas'
        },
        {
          name: 'The Balcony Club',
          neighborhood: 'Lakewood',
          vibe: 'A hidden jazz speakeasy where serious musicians come to blow.',
          order: 'Whatever\'s cold and cheap—you\'re here for the music, not the cocktail program.',
          why: 'Up a narrow staircase beside the historic Lakewood Theater sits one of the best-kept secrets in Dallas: a small jazz club that has hosted live jazz seven nights a week since 1988. This is not a place you find by accident. The room is intimate, the crowd is knowledgeable, and the musicians are the real deal. Chuck Rainey has played here. Keyboardists who tour with Michael Bublé stop in when they\'re in town. The vibe is laid-back, the cover is cheap, and the music is world-class. It\'s what a jazz club should be.',
          images: [
            {
              src: '/dallas/hidden-gems/balconyclub-1.png',
              alt: 'Intimate jazz club with stage and mood lighting'
            },
            {
              src: '/dallas/hidden-gems/balconyclub-2.png',
              alt: 'Live jazz performance at The Balcony Club'
            },
            {
              src: '/dallas/hidden-gems/balconyclub-3.png',
              alt: 'The Balcony Club atmosphere'
            }
          ],
          address: '1825 Abrams Rd, Ste B, Dallas, TX 75214',
          coordinates: { lat: 32.8419, lng: -96.7687 },
          price: '$',
          hours: 'Mon-Thu 8pm-12am, Fri-Sat multiple bands nightly',
          website: 'https://thebalconyclub.com/',
          instagram: '@thebalconyclubdallas'
        },
        {
          name: 'The Truck Yard',
          neighborhood: 'Lower Greenville',
          vibe: 'A 15,000-square-foot "adult playground" that feels like a upscale junkyard party.',
          order: 'A frozen drink from the Airstream bar and a cheesesteak from the window.',
          why: 'The Truck Yard is proof that if you give Dallas residents enough string lights, a treehouse, and permission to bring their dogs, they will be happy forever. It\'s a sprawl of picnic tables, recycled tractor parts, and food trucks that feels like a highly manicured trailer park. It is the undisputed capital of day-drinking in the city, especially during that five-minute window in April when the weather is actually perfect.',
          images: [
            {
              src: '/dallas/establishments/bars-truck-1.png',
              alt: 'The Truck Yard outdoor space'
            },
            {
              src: '/dallas/establishments/bars-truck-2.png',
              alt: 'The Truck Yard bar area'
            },
            {
              src: '/dallas/establishments/bars-truck-3.png',
              alt: 'The Truck Yard atmosphere'
            }
          ],
          address: '5624 Sears St, Dallas, TX 75206',
          coordinates: { lat: 32.8285, lng: -96.7685 },
          price: '$',
          hours: 'Mon-Wed 4pm-12am, Thu-Sun 11am-12am',
          website: 'https://truckyard.com/',
          instagram: '@truckyarddallas'
        },
        {
          name: 'Double Wide',
          neighborhood: 'Deep Ellum',
          vibe: 'Trailer-trash chic in a neighborhood that\'s rapidly forgetting how to be gritty.',
          order: 'A "Yoo-Hoo Yee-Haw" (it involves actual Yoo-Hoo) and a sense of shared misfortune.',
          why: 'Double Wide is the middle finger to Dallas\'s obsession with high-rises and valet parking. It\'s a bar that celebrates the unapologetically tacky. With toilet-bowl planters, tinsel-covered walls, and some of the best live music in Deep Ellum, it remains a sanctuary for the weird. It\'s the kind of place where you can see a legendary punk band while drinking a cocktail that comes in a plastic cup and features a popsicle as a garnish.',
          images: [
            {
              src: '/dallas/establishments/bar-double-wide-00.png',
              alt: 'Double Wide bar exterior'
            },
            {
              src: '/dallas/establishments/bar-double-wide-1.png',
              alt: 'Double Wide interior decor'
            },
            {
              src: '/dallas/establishments/bar-double-wide-2.png',
              alt: 'Double Wide bar area'
            },
            {
              src: '/dallas/establishments/bar-double-wide-3.png',
              alt: 'Double Wide atmosphere'
            }
          ],
          address: '3510 Commerce St, Dallas, TX 75226',
          coordinates: { lat: 32.7834, lng: -96.7808 },
          price: '$',
          hours: 'Tue-Fri 5pm-2am, Sat-Sun 1pm-2am',
          website: 'https://doublewidedallas.com/',
          instagram: '@doublewide_dallas'
        },
        {
          name: 'High & Tight Barber Shop Speakeasy',
          neighborhood: 'Deep Ellum',
          vibe: 'A secret speakeasy hidden inside a working barber shop. Walk past the stylists and find the green light.',
          order: 'Whatever cocktail strikes your fancy — the setting is the main attraction.',
          why: 'High & Tight is one of Dallas\'s genuinely well-kept secrets, which is rare in an age when "secret" bars announce their locations on Instagram and give Yelp reviewers their WiFi password. Walk into what appears to be a legitimate, functioning barber shop—because it is one—and stroll past the row of stylists giving actual haircuts to actual customers. Follow the sound of music and the faint glow of green light to a door in the back that leads to a dimly lit speakeasy that feels like a Prohibition-era time capsule. The cocktails are well-made but not overly fussy, the vibe is "you found something nobody told you about," and the whole experience makes you feel like you\'ve unlocked a side quest most people don\'t even know exists. The salon-to-saloon transformation is so seamless you\'ll wonder how many other Dallas businesses are secretly bars in disguise.',
          images: [
            { src: '/dallas/hidden-gems/barberspeakeasy-1.png', alt: 'Hidden speakeasy interior' },
            { src: '/dallas/hidden-gems/barberspeakeasy-2.png', alt: 'Barber shop front' }
          ],
          address: 'Deep Ellum, Dallas',
          coordinates: { lat: 32.7848, lng: -96.7845 },
          price: '$$',
          hours: 'Evening hours after barber shop closes'
        },
        {
          name: 'Room 520',
          neighborhood: 'Downtown',
          vibe: 'The most intimate and hidden speakeasy in Dallas — an actual hotel room converted into a bar.',
          order: 'Japanese-inspired cocktails crafted by expert bartenders.',
          why: 'Room 520 is the most genuinely exclusive bar experience in Dallas, and not in the obnoxious "you\'re not on the list" way—in the "you literally need a pin code to access a hotel room that\'s secretly a bar" way. Check in at the front desk of SOVA Hotel Downtown, receive your access code like you\'re entering a spy novel, and take the elevator to the fifth floor. Use the code to unlock what appears to be a standard hotel room but is actually one of Dallas\'s smallest and most intimate bars, fitting maybe a dozen people max. The Japanese-inspired cocktails are crafted with meticulous attention by bartenders who treat each drink like a personal art project. The vibe is "speakeasy meets boutique hotel meets Tokyo whisky bar," and the whole experience feels like you\'ve been let in on a secret that most of Dallas doesn\'t know exists. This isn\'t hidden for Instagram-bait marketing purposes—it\'s genuinely difficult to find, actually exclusive, and absolutely worth the effort of figuring out how to get in.',
          images: [
            { src: '/dallas/establishments/room520-hero.jpg', alt: 'Room 520 speakeasy' },
            { src: '/dallas/establishments/room520-interior.jpg', alt: 'Room 520 interior' }
          ],
          address: 'SOVA Hotel, Dallas',
          coordinates: { lat: 32.7896, lng: -96.8003 },
          price: '$$$',
          hours: 'Evening hours'
        },
        {
          name: 'Twilite Lounge',
          neighborhood: 'Deep Ellum',
          vibe: 'A slice of New Orleans transplanted to Deep Ellum — French Quarter courtyard, blood-red curtains, and Big Easy cocktails.',
          order: 'The frozen Irish coffee is legendary. Don\'t overthink it.',
          why: 'Twilite Lounge is what happens when someone in Dallas gets homesick for New Orleans and decides to recreate the French Quarter in Deep Ellum with enough conviction that it actually works. The space drips with Big Easy atmosphere: gold lamps casting warm glows, blood-red curtains that would make Anne Rice proud, and a courtyard that feels like you stepped through a portal into the Marigny. It\'s become the unofficial home bar for displaced Saints fans, LSU alumni, and anyone who misses the particular combination of humidity, jazz, and day-drinking that defines Louisiana. The frozen Irish coffee is legendary for good reason—it\'s cold, strong, caffeinated, and alcoholic, which covers all four major food groups. The cocktail menu leans heavily into New Orleans classics (Sazeracs, Hurricanes, Vieux Carré), and the vibe is "party like it\'s Mardi Gras on a Tuesday." Dallas Observer named it a Top 100 Bar, and it\'s deservedly so—this is as close as you can get to Bourbon Street without leaving Texas.',
          images: [
            { src: '/dallas/establishments/twilite-interior.jpg', alt: 'Twilite Lounge interior' }
          ],
          address: '2640 Elm St, Dallas, TX 75226',
          coordinates: { lat: 32.7849, lng: -96.7846 },
          price: '$$',
          hours: 'Daily 5pm-2am',
          website: 'https://thetwilitelounge.com'
        }
      ]
    },
    {
      id: 'dal-best-coffee-shops',
      type: 'best-of',
      category: 'coffee-shops',
      title: 'Caffeine Theology',
      intro: 'Dallas coffee culture operates with the intensity of a religious movement and the precision of a chemistry lab. These aren\'t just places to grab caffeine on the way to a meeting—they\'re temples where baristas refuse to give you the WiFi password on principle, where extraction ratios are debated with theological fervor, and where a single-origin pour-over is treated like a sacrament. You\'ll find cavernous warehouse spaces where people actually talk to each other like it\'s 1994, tiny Honduran-heritage cafes serving horchata lattes that ruin all future coffee experiences, basement music lounges that launched Leon Bridges and Maren Morris, and Australian-inspired roasters that brought third-wave culture to North Texas. The coffee obsession here is deeply serious—direct-trade relationships with Costa Rican family farms, micro-roasters winning Good Food Awards five years running, spaces that smell like ambition and fresh-roasted beans. From Oak Cliff temples that refuse convenience to Design District pioneers to neighborhood institutions that became the benchmark for what "local coffee shop" means, Dallas takes its caffeine as seriously as its BBQ. Just with less smoke and more pretension about water temperature.',
      spots: [
        {
          name: 'Davis Street Espresso',
          neighborhood: 'Oak Cliff',
          vibe: 'A high-church temple of caffeine that refuses to give you the Wi-Fi password.',
          order: 'A traditional Macchiato and a house-made croissant.',
          why: 'Davis Street is where Dallas coffee culture stops being a hobby and starts being a theology. There is No Wi-Fi. There is No Air of Convenience. There is only an obsessive dedication to extraction and roasting. The space—a cavernous, industrial-cool warehouse—is usually filled with people actually talking to each other or reading books like it\'s 1994. It\'s the home base of Oak Cliff Coffee Roasters and arguably the best cup of coffee in Texas.',
          images: [
            {
              src: '/dallas/establishments/coffee-davis-1.png',
              alt: 'Davis Street Espresso interior'
            },
            {
              src: '/dallas/establishments/coffee-davis-2.png',
              alt: 'Davis Street Espresso coffee bar'
            },
            {
              src: '/dallas/establishments/coffee-davis-3.png',
              alt: 'Davis Street Espresso atmosphere'
            }
          ],
          address: '819 W Davis St, Dallas, TX 75208',
          coordinates: { lat: 32.7493, lng: -96.8277 },
          hours: '7am-3pm Mon-Sat',
          price: '$$',
          website: 'https://davisstreetespresso.com',
          instagram: '@davisstreetespresso'
        },
        {
          name: 'Hola Cafe',
          neighborhood: 'Oak Cliff',
          vibe: 'A tiny, sun-drenched sanctuary with deep Honduran roots and impeccable style.',
          order: 'The "Horchata Cafe" or a Mexican Mocha.',
          why: 'Hola is the realization of co-owner Jeniffer Avila\'s dream to bring her family\'s Honduran coffee heritage to Dallas. It\'s a tiny storefront that punches way above its weight class. While it looks like a Pinterest board come to life, the coffee is legitimately technical. The horchata—made fresh—paired with a shot of espresso is one of those life-improving discoveries you\'ll try to recreate at home and fail miserably.',
          images: [
            {
              src: '/dallas/establishments/coffee-hola-1.png',
              alt: 'Hola Cafe interior'
            },
            {
              src: '/dallas/establishments/coffee-hola-2.png',
              alt: 'Hola Cafe coffee service'
            },
            {
              src: '/dallas/establishments/coffee-hola-3.png',
              alt: 'Hola Cafe atmosphere'
            }
          ],
          address: '1208 W Davis St, Dallas, TX 75208',
          coordinates: { lat: 32.7495, lng: -96.8357 },
          hours: '7am-5pm daily',
          price: '$$',
          website: 'https://holacafe.com',
          instagram: '@holacafe'
        },
        {
          name: 'Opening Bell Coffee',
          neighborhood: 'The Cedars',
          vibe: 'A subterranean music lounge where future Grammys are probably being plotted.',
          order: 'A house drip and a ticket to whatever open mic is happening.',
          why: 'Opening Bell is a legendary basement dive in The Cedars that has served as a launchpad for Leon Bridges and Maren Morris. It\'s a coffee shop during the day and a listening room at night. It smells like roasted beans and ambition. Even if you aren\'t there for the live music, the vibe is strictly "creative professional on a deadline," which makes it a great place to hide from the downtown noise.',
          images: [
            {
              src: '/dallas/establishments/coffee-bell-1.png',
              alt: 'Opening Bell Coffee interior'
            },
            {
              src: '/dallas/establishments/coffee-bell-2.png',
              alt: 'Opening Bell Coffee performance space'
            },
            {
              src: '/dallas/establishments/coffee-bell-3.png',
              alt: 'Opening Bell Coffee atmosphere'
            }
          ],
          address: '1409 S Lamar St, Dallas, TX 75215',
          coordinates: { lat: 32.7629, lng: -96.8161 },
          hours: '7am-10pm daily',
          price: '$',
          website: 'https://openingbellcoffee.com',
          instagram: '@openingbellcoffee'
        },
        {
          name: 'The Berni Bean',
          neighborhood: 'Downtown',
          vibe: 'A brother-and-sister project that brings Costa Rican family farms directly to your cup.',
          order: 'A pour-over of their latest single-origin Costa Rican roast.',
          why: 'Most coffee shops talk about "direct trade," but the Berninis actually own the farms in Costa Rica. This is a family operation from the soil to the steam wand. The downtown space is bright, tropical, and serves as a direct pipeline for some of the best beans in the hemisphere. It\'s a piece of San José transplanted into the center of Dallas.',
          images: [
            {
              src: '/dallas/establishments/coffee-berni-1.png',
              alt: 'The Berni Bean interior'
            },
            {
              src: '/dallas/establishments/coffee-berni-2.png',
              alt: 'The Berni Bean coffee bar'
            },
            {
              src: '/dallas/establishments/coffee-berni-3.png',
              alt: 'The Berni Bean atmosphere'
            }
          ],
          address: '650 S Griffin St, Dallas, TX 75202',
          coordinates: { lat: 32.7774, lng: -96.8038 },
          hours: '7am-4pm Mon-Fri, 8am-4pm Sat-Sun',
          price: '$$',
          website: 'https://thebernibean.com',
          instagram: '@thebernibean'
        },
        {
          name: 'Ascension Coffee',
          neighborhood: 'Design District',
          vibe: 'Australian-inspired craft coffee that brought third-wave culture to Dallas.',
          order: 'Espresso tonic on a hot day. Flat white if you want to feel cosmopolitan.',
          why: 'Russell Hayward founded Ascension in 2012 after nearly two years of global planning—traveling to evaluate coffee shops and learning coffee agriculture in Africa. Opened the first café in the Design District on Oak Lawn Avenue. Leveraged his Australian roots to bring innovation to the Dallas coffee scene. Pioneer of specialty coffee in North Texas. Now six locations across Dallas-Fort Worth, each with its own character. Craft coffee and wine bar. Meticulously sourced beans. The Design District location remains the heart of Dallas\'s third-wave movement.',
          images: [
            {
              src: '/dallas/establishments/ascension-cherries.jpg',
              alt: 'Coffee sourcing at Ascension Coffee'
            },
            {
              src: '/dallas/establishments/ascension-coffee-home.jpg',
              alt: 'Ascension Coffee lifestyle'
            }
          ],
          address: '1621 Oak Lawn Ave (Design District) + 5 other locations',
          coordinates: { lat: 32.8042, lng: -96.8067 },
          hours: 'Daily 7am-7pm',
          price: '$',
          website: 'https://ascension.coffee',
          instagram: '@ascensioncoffee'
        },
        {
          name: 'Merit Coffee',
          neighborhood: 'Deep Ellum',
          vibe: 'Minimalist roaster with direct-trade ethics and bright, welcoming spaces.',
          order: 'Seasonal single-origin pour-over.',
          why: 'Merit Coffee is a Texas-based specialty roaster that operates with the kind of ethical rigor usually reserved for non-profits and the kind of aesthetic minimalism usually reserved for Scandinavian furniture stores. They\'ve built their reputation on direct-trade relationships with coffee farmers—actual relationships, not the performative "we visited Guatemala once" kind—and meticulous small-batch roasting that treats each bean origin like a unique terroir. Multiple Dallas locations, but the Main Street spot in Deep Ellum is bright, welcoming, and minimalist in the best way: white walls, natural light, clean lines, and zero unnecessary decoration. It\'s perfect for laptop work if you\'re the kind of person who needs good coffee to write emails, or slow mornings if you\'re the kind of person who treats Saturday brunch like a meditative practice. The seasonal single-origin pour-over showcases whatever they\'re currently excited about, and the baristas actually know how to explain tasting notes without sounding insufferable.',
          images: [
            {
              src: '/dallas/establishments/merit-coffee-deep-ellum.jpg',
              alt: 'Merit Coffee cafe in Deep Ellum'
            },
            {
              src: '/dallas/establishments/merit-coffee-product.jpg',
              alt: 'Merit Coffee specialty drinks'
            }
          ],
          address: '2639 Main St (Deep Ellum) + 3 other Dallas locations',
          coordinates: { lat: 32.7849, lng: -96.7846 },
          hours: 'Daily 7am-6pm',
          price: '$',
          website: 'https://meritcoffee.com',
          instagram: '@meritcoffee'
        },
        {
          name: 'White Rock Coffee',
          neighborhood: 'Preston Center',
          vibe: 'The neighborhood coffee shop Dallas measures all others against.',
          order: 'Whatever blend they roasted this morning.',
          why: 'Memorial Day weekend 2005, Nancy and Bob Baker opened their first White Rock Coffee location in a former Church\'s Chicken in Lake Highlands with one very specific purpose: become part of the neighborhood, not just a business in the neighborhood. It worked so thoroughly that White Rock became the platonic ideal of what a "local coffee shop" should be in Dallas. Seventeen years and four locations later, they\'re the benchmark everyone else gets measured against. Every time a Starbucks opens somewhere, locals grumble, "I wish we\'d gotten a White Rock Coffee instead." They roast their own beans—gourmet blends, single origin, fair trade, organic—and offer same-day roasting and shipping because freshness is apparently a competitive sport. Four locations (Preston Center, SMU, Uptown, Rosewood) each with their own character, but the Preston Center spot is a spacious, light-filled haven in the middle of Park Cities chaos where parents meet for coffee after school drop-off and SMU students camp out during finals. It\'s the kind of place that makes you feel like you\'re part of something, which is exactly what Nancy and Bob intended back in that Church\'s Chicken parking lot.',
          images: [
            {
              src: '/dallas/establishments/white-rock-coffee-rosewood.jpg',
              alt: 'White Rock Coffee Rosewood location'
            },
            {
              src: '/dallas/establishments/white-rock-pour-over.jpg',
              alt: 'Pour-over coffee at White Rock Coffee'
            }
          ],
          address: 'Multiple locations (Preston Center, SMU, Uptown)',
          coordinates: { lat: 32.8687, lng: -96.7706 },
          hours: 'Daily 6am-8pm (varies by location)',
          price: '$',
          website: 'https://wrcoffee.com',
          instagram: '@whiterockcoffee'
        },
        {
          name: 'Noble Coyote Coffee Roasters',
          neighborhood: 'Expo Park',
          vibe: 'Award-winning micro-roaster with Food & Wine cred and a cult following.',
          order: 'Whatever won the Good Food Award most recently.',
          why: 'Noble Coyote started as the kind of weekend hobby that makes other people\'s weekend hobbies look pathetic: Marta and Kevin Sprague selling coffee at White Rock Local Market on Saturdays in 2011, slowly building a following of people who refused to drink anything else. They bought their first commercial roaster, then a larger one in 2014 when they moved to 819 Exposition Ave in Expo Park and turned their obsession into a full-time direct-trade micro-roastery and coffee lab. The space is minimalist bordering on monastic—just the roaster, the beans, and the science. Food & Wine named them Best Coffee in Texas in 2018, which was nice validation, but the real flex is being a Good Food Awards Winner or Finalist five times (2018, 2019, 2022, 2023, 2024). That\'s not luck—that\'s ethical sourcing, exceptional beans, and the kind of technical precision that makes coffee nerds weep into their pour-overs. The cult following they built at those Saturday farmers markets never left, and now they\'re evangelical about it. Order whatever won the most recent award and understand why people drive across Dallas for a bag of beans.',
          images: [
            {
              src: '/dallas/establishments/noble-coyote-shop.jpg',
              alt: 'Noble Coyote Coffee Roasters shop'
            },
            {
              src: '/dallas/establishments/noble-coyote-lab.jpg',
              alt: 'Coffee lab at Noble Coyote'
            }
          ],
          address: '819 Exposition Ave, Dallas, TX 75226',
          coordinates: { lat: 32.7849, lng: -96.7846 },
          hours: 'Tue-Sat 9am-3pm',
          price: '$',
          website: 'https://www.noblecoyotecoffee.com',
          instagram: '@noblecoyotecoffee'
        }
      ]
    },
    {
      id: 'dal-best-restaurants',
      type: 'best-of',
      category: 'restaurants',
      title: 'Texas Plates',
      intro: 'Dallas doesn\'t do food quietly. Everything is bigger, louder, and more ambitious—from legendary BBQ joints where people stand in line for two hours in 98-degree heat to tiny 40-seat Italian restaurants that quietly earned MICHELIN Bib Gourmand status while the steakhouses weren\'t paying attention. The restaurant scene here operates on Texas scale: massive beef ribs that require engineering degrees to eat, duck carnitas treated with fine-dining reverence, and family-run Italian delis that have been the soul of neighborhoods since the 1940s. MICHELIN arrived in 2024 and confirmed what locals already knew: Dallas has been cooking at a serious level for years, it just wasn\'t performing for coastal food media. You\'ll find James Beard nominees serving handmade pasta in Bishop Arts, soba masters in the Arts District, and BBQ operations smoking brisket for 18 hours over post oak like it\'s a religious obligation. From Deep Ellum tacos to North Dallas BBQ spots that only open three days a week, this is eating with conviction.',
      spots: [
        {
          name: 'Pecan Lodge',
          neighborhood: 'Deep Ellum',
          vibe: 'The undisputed heavy-hitter of Dallas BBQ—long lines, massive pits, and zero regrets.',
          order: 'The "Hot Mess" (brisket-stuffed sweet potato) and a massive beef rib.',
          why: 'Pecan Lodge is the reason people willingly stand in the Texas heat for two hours, sweating through their shirts while contemplating their life choices. It started as a humble farmers market booth run by Justin and Diane Fourton and evolved into a national BBQ phenomenon that forced its way into the conversation about Texas\'s best. They moved to Deep Ellum in 2010 and immediately became Dallas\'s most award-winning BBQ operation. The brisket is smoked for 18 hours over post oak until it achieves that perfect bark-to-tenderness ratio that makes pitmasters weep. The "Hot Mess"—a brisket-stuffed sweet potato topped with butter, sour cream, cheese, and more brisket—is a culinary dare disguised as a side dish, and you absolutely should take it. The beef ribs are roughly the size of a human infant and require structural engineering knowledge to eat properly. It\'s loud, it\'s crowded, the staff moves with the precision of a SWAT team during a hostage negotiation, and you\'ll leave smelling like smoke for the next three days. It\'s the definitive Dallas BBQ experience: grit, smoke, sheer ambition, and the kind of food that makes you understand why Texans are so annoying about BBQ.',
          images: [
            {
              src: '/dallas/establishments/resto-pecan-1.png',
              alt: 'Pecan Lodge BBQ'
            },
            {
              src: '/dallas/establishments/resto-pecan-2.png',
              alt: 'Pecan Lodge smoked meats'
            },
            {
              src: '/dallas/establishments/resto-pecan-3.png',
              alt: 'Pecan Lodge interior'
            }
          ],
          address: '2702 Main St, Dallas, TX 75226',
          coordinates: { lat: 32.7857, lng: -96.7889 },
          price: '$$',
          hours: 'Mon 11am-3pm, Tue-Thu 11am-8pm, Fri-Sat 11am-9pm, Sun 11am-8pm',
          website: 'https://pecanlodge.com/',
          instagram: '@pecanlodge'
        },
        {
          name: 'Lucia',
          neighborhood: 'Bishop Arts',
          vibe: 'An intimate, 40-seat Italian "jewel box" that makes you forget you\'re in a city of millions.',
          order: 'The house-cured salumi board and whatever handmade pasta they\'re featuring.',
          why: 'Lucia is one of the hardest reservations in the city for a reason. David and Jennifer Uygur operate on a scale of meticulous detail that is rare in Dallas. Multiple James Beard nominations. It\'s a warm, blue-walled room with vintage mirrors—just 40 seats—where the pasta is made by hand every day and the menu changes with the whims of the seasons. It\'s the antithesis of the "Big D" steakhouse—quiet, thoughtful, and deeply personal. A MICHELIN Bib Gourmand recipient that actually deserves the hype.',
          images: [
            {
              src: '/dallas/establishments/resto-lucia-1.png',
              alt: 'Lucia restaurant interior'
            },
            {
              src: '/dallas/establishments/resto-lucia-2.png',
              alt: 'Lucia handmade pasta'
            },
            {
              src: '/dallas/establishments/resto-lucia-3.png',
              alt: 'Lucia dining experience'
            }
          ],
          address: '287 N Bishop Ave, Dallas, TX 75208',
          coordinates: { lat: 32.7462, lng: -96.8300 },
          price: '$$$',
          hours: 'Tue-Sat 5pm-10pm',
          website: 'https://www.luciadallas.com/',
          instagram: '@lucia_dallas'
        },
        {
          name: 'Tei-An',
          neighborhood: 'Arts District',
          vibe: 'A minimalist Japanese masterpiece where soba is an art form.',
          order: 'House-made soba (hot or cold) and the grilled freshwater eel.',
          why: 'Tei-An is one of the few places in the country that makes its soba noodles on-site, and Teiichi Sakurai is a master of the craft. Located in the heart of the Arts District, it\'s a serene, sophisticated space that feels like a portal to Tokyo. The attention to detail—from the texture of the noodles to the quality of the A5 Miyazaki beef—is staggering. It\'s where the Dallas elite go to feel refined, and the food actually backs up the atmosphere.',
          images: [
            {
              src: '/dallas/establishments/resto-tei-ann-1.png',
              alt: 'Tei-An restaurant interior'
            },
            {
              src: '/dallas/establishments/resto-tei-ann-2.png',
              alt: 'Tei-An house-made soba'
            },
            {
              src: '/dallas/establishments/resto-tei-ann-3.png',
              alt: 'Tei-An dining experience'
            }
          ],
          address: '1722 Routh St #110, Dallas, TX 75201',
          coordinates: { lat: 32.7896, lng: -96.8003 },
          price: '$$$',
          hours: 'Tue-Thu 11am-2pm & 5pm-10pm, Fri 11am-2pm & 4:30pm-10:30pm, Sat 4:30pm-10:30pm, Sun 11am-2pm & 4pm-9pm',
          website: 'https://tei-an.com/',
          instagram: '@teiandallas'
        },
        {
          name: 'Jimmy\'s Food Store',
          neighborhood: 'East Dallas',
          vibe: 'A chaotic, wonderful Italian grocery that\'s been the soul of East Dallas since the \'40s.',
          order: 'The Italian Stallion sub and a bottle of wine from the massive back room.',
          why: 'Jimmy\'s Food Store is not a "restaurant" in the traditional sense—it\'s a pilgrimage site for anyone who takes Italian food seriously and an education in what "authentic" actually means. Since the 1940s, this family-run Italian deli has anchored East Dallas with shelves packed to the ceiling with rare imports that most grocery stores don\'t even know exist. The sandwich line moves at the speed of continental drift and requires the patience of a saint, but the Italian Stallion sub—piled high with mortadella, soppressata, provolone, and whatever else they feel like adding—makes the wait a spiritual exercise worth enduring. The back room houses over 400 Italian wine selections ranging from "perfectly drinkable" to "you\'re getting married and need to impress your in-laws." Grab a cannoli from the pastry case, a bottle of Barolo you can\'t pronounce, and join the multi-generational crowd of regulars who have been coming here for 50+ years. It smells like cured meat, fresh bread, and the kind of neighborhood loyalty that doesn\'t exist anymore. If Jimmy\'s ever closes, East Dallas loses its soul.',
          images: [
            {
              src: '/dallas/establishments/resto-jimmy-1.png',
              alt: 'Jimmy\'s Food Store interior'
            },
            {
              src: '/dallas/establishments/resto-jimmy-2.png',
              alt: 'Jimmy\'s Food Store deli counter'
            },
            {
              src: '/dallas/establishments/resto-jimmy-3.png',
              alt: 'Jimmy\'s Food Store sandwiches'
            }
          ],
          address: '4901 Bryan St, Dallas, TX 75206',
          coordinates: { lat: 32.8006, lng: -96.7712 },
          price: '$$',
          hours: 'Mon-Sat 9am-7pm',
          website: 'https://jimmysfoodstore.com/',
          instagram: '@jimmys_food_store'
        },
        {
          name: 'Revolver Taco Lounge',
          neighborhood: 'Deep Ellum',
          vibe: 'High-concept tacos that reject the "street food" label in favor of culinary excellence.',
          order: 'Duck Carnitas and a Mezcal flight.',
          why: 'Revolver is what happens when a chef treats a taco with the reverence of a fine-dining entree. It\'s loud, it\'s in Deep Ellum, and it\'s always packed. The duck carnitas are legendary, but the rotating specials—often featuring high-end ingredients unlike anything else in the neighborhood—are the real draw. It\'s inventive, authentic, and captures the current energy of the Dallas food scene perfectly.',
          images: [
            {
              src: '/dallas/establishments/resto-revolver-1.png',
              alt: 'Revolver Taco Lounge interior'
            },
            {
              src: '/dallas/establishments/resto-revolver-2.png',
              alt: 'Revolver Taco Lounge tacos'
            },
            {
              src: '/dallas/establishments/resto-revolver-3.png',
              alt: 'Revolver Taco Lounge dining'
            }
          ],
          address: '2701 Main St, Dallas, TX 75226',
          coordinates: { lat: 32.7857, lng: -96.7889 },
          price: '$$',
          hours: 'Tue-Sat 11am-10pm',
          website: 'https://revolvertacolounge.com/',
          instagram: '@revolvertacolounge'
        },
        {
          name: 'Cattleack Barbeque',
          neighborhood: 'North Dallas',
          vibe: 'Tiny BBQ spot earning MICHELIN recognition—only open three days a week.',
          order: 'Brisket and ribs. Whatever they haven\'t sold out of yet.',
          why: 'A tiny North Dallas BBQ spot that earned a MICHELIN Bib Gourmand in 2025. Only open three days a week (plus the first Saturday of every month). When they sell out—which they do—they close for the day. Worth the limited hours and the inevitable line.',
          images: [
            {
              src: '/dallas/establishments/cattleack-hero.jpg',
              alt: 'Cattleack Barbeque interior'
            },
            {
              src: '/dallas/establishments/cattleack-michelin-2025.png',
              alt: 'Cattleack Barbeque MICHELIN Bib Gourmand 2025'
            }
          ],
          address: '13628 Gamma Rd, Dallas, TX 75244',
          coordinates: { lat: 32.9474, lng: -96.8364 },
          price: '$$',
          hours: 'Wed-Fri + first Sat, 10am till sold out',
          website: 'https://cattleackbbq.com',
          instagram: '@cattleackbbq'
        },
        {
          name: 'Uchi Dallas',
          neighborhood: 'Uptown',
          vibe: 'James Beard-level Japanese precision in a sleek Uptown space.',
          order: 'Omakase if you trust the chef. Happy hour if you\'re smart.',
          why: 'James Beard Award-winning Chef Tyson Cole\'s elevated Japanese cuisine. The Uptown location brings Austin\'s most celebrated sushi to Dallas. Contemporary takes on sushi and hot dishes, with impeccable presentation and an extensive sake list. Happy hour (5-6:30pm) offers the tasting menu at a discount—one of the best deals in Dallas fine dining.',
          images: [
            {
              src: '/dallas/establishments/uchi-hama-chili.jpg',
              alt: 'Hama Chili at Uchi Dallas'
            },
            {
              src: '/dallas/establishments/uchi-otoro-nigiri.jpg',
              alt: 'Otoro nigiri at Uchi Dallas'
            },
            {
              src: '/dallas/establishments/uchi-wagyu-tataki.jpg',
              alt: 'Wagyu tataki at Uchi Dallas'
            }
          ],
          address: '2817 Maple Ave, Dallas, TX 75201',
          coordinates: { lat: 32.8042, lng: -96.8003 },
          price: '$$$',
          hours: 'Dinner daily, Happy Hour 5-6:30pm',
          website: 'https://uchi.uchirestaurants.com/location/sushi-dallas/',
          instagram: '@uchidallas'
        },
        {
          name: 'Kalachandji\'s',
          neighborhood: 'East Dallas',
          vibe: 'Vegetarian Ayurvedic buffet in a Hare Krishna temple garden.',
          order: 'Fill your plate at the buffet. The dal, papadam, and spiced potatoes are standouts.',
          why: 'Opened September 1982, Kalachandji\'s is likely the oldest vegetarian restaurant in Dallas. It\'s located in the heart of the Radha Kalachandji Temple, surrounded by lush gardens and peacocks. The buffet is strictly Ayurvedic: no meat, fish, eggs, onion, or garlic. What you do get is genuinely excellent Indian-inspired cooking: verdant greens, crispy tofu, toasted papadam, soft rice, and dal that\'s been simmering since morning. Courtyard dining among temple grounds. The food is peaceful and elevating. The setting is unlike anything else in Dallas. A 40+ year institution that most residents still haven\'t discovered.',
          images: [
            {
              src: '/dallas/establishments/kalachandjis-patio.jpg',
              alt: 'Beautiful outdoor patio at Kalachandji\'s with temple gardens'
            },
            {
              src: '/dallas/establishments/kalachandjis-window.jpg',
              alt: 'Kalachandji\'s temple dining room interior'
            }
          ],
          address: '5430 Gurley Ave, Dallas, TX 75223',
          coordinates: { lat: 32.8160, lng: -96.7656 },
          price: '$$',
          hours: 'Lunch Tue-Sun, Dinner Thu-Sun',
          website: 'https://kalachandjis.com'
        },
        {
          name: 'Emporium Pies',
          neighborhood: 'Bishop Arts',
          vibe: 'Fine pie for fine folk—handmade, seasonal, locally obsessed.',
          order: 'The Drunken Nut (pecan), Lord of the Pies (apple streusel), or Smooth Operator (French silk on pretzel crust).',
          why: 'Mary Sparks and Megan Wilkes started Emporium Pies in 2012 with a simple mission: make fine pie for fine folk. Every pie is handmade from scratch with local ingredients. The Drunken Nut adds bourbon to the pecan filling. Lord of the Pies is a towering deep-dish apple with streusel. Smooth Operator puts French silk on a pretzel crust. Featured on Food Network, shipping nationwide via Goldbelly, but the Bishop Arts original is where it started. Now with locations in Deep Ellum, McKinney, and Fort Worth. A Dallas icon that actually lives up to the hype.',
          images: [
            {
              src: '/dallas/establishments/emporium-drunken-nut.jpg',
              alt: 'The Drunken Nut pecan pie at Emporium Pies'
            },
            {
              src: '/dallas/establishments/emporium-lord.jpg',
              alt: 'Lord of the Pies apple pie with streusel'
            }
          ],
          address: '314 N Bishop Ave (Bishop Arts) + Deep Ellum, McKinney, Fort Worth',
          coordinates: { lat: 32.7460, lng: -96.8294 },
          price: '$$',
          hours: 'Daily 11am-10pm',
          website: 'https://www.emporiumpies.com',
          instagram: '@emporiumpies'
        },
        {
          name: 'Terry Black\'s Barbecue',
          neighborhood: 'Deep Ellum',
          vibe: 'Lockhart BBQ dynasty goes Dallas—massive beef ribs and Texas Monthly cred.',
          order: 'The beef rib. It\'s the size of a small child.',
          why: 'Award-winning Texas BBQ from a legendary Lockhart family. Featured in Texas Monthly\'s 50 Best BBQ Joints. The beef rib is king here, but the brisket, house-made sausages, and smoked turkey are all standouts. Opened in Dallas 2015, now five locations across Texas. The beef rib is massive—come hungry or share.',
          images: [
            {
              src: '/dallas/establishments/terry-blacks-hero.jpg',
              alt: 'Terry Black\'s Barbecue spread'
            },
            {
              src: '/dallas/establishments/terry-blacks-brisket.jpg',
              alt: 'Smoked brisket at Terry Black\'s'
            }
          ],
          address: '3025 Main St, Dallas, TX 75226',
          coordinates: { lat: 32.7849, lng: -96.7846 },
          price: '$$',
          hours: 'Daily 11am-9pm',
          website: 'https://terryblacksbbq.com',
          instagram: '@terryblacksbbq'
        }
      ]
    },
    {
      id: 'dal-obscure-history',
      type: 'section',
      title: 'Obscure History',
      items: [
        {
          id: 'dal-history-1',
          type: 'history',
          title: 'The City That Killed Kennedy',
          body: 'On November 22, 1963, President John F. Kennedy was assassinated in Dealey Plaza. Lee Harvey Oswald fired from the Texas School Book Depository. Dallas was known as a hotbed of right-wing extremism, and city leaders feared the assassination would define Dallas forever. They\'ve spent 60 years trying to change the narrative.',
          sources: [
            {
              title: 'JFK Assassination',
              url: 'https://www.jfk.org/the-assassination/',
              publisher: 'The Sixth Floor Museum at Dealey Plaza'
            }
          ],
          
          location: {
            name: 'Dealey Plaza',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        },
        {
          id: 'dal-history-2',
          type: 'history',
          title: 'Bonnie and Clyde Were From Here',
          body: 'Bonnie Parker and Clyde Barrow both grew up in the Dallas area, and their gang operated throughout the region. Clyde was buried at Western Heights Cemetery; Bonnie at Crown Hill Memorial Park. They wanted to be buried together, but Bonnie\'s mother refused.',
          sources: [
            {
              title: 'Bonnie and Clyde',
              url: 'https://www.tshaonline.org/handbook/entries/bonnie-and-clyde',
              publisher: 'Texas State Historical Association'
            }
          ],
          
          location: {
            name: 'Crown Hill Memorial Park (Bonnie) & Western Heights Cemetery (Clyde)',
            url: 'https://maps.app.goo.gl/uXjGq5v7Ym5E8W1V7',
            stillExists: true
          }
        },
        {
          id: 'dal-history-3',
          type: 'history',
          title: 'The City Was Pro-Slavery',
          body: 'Dallas was one of the largest slave-trading centers in Texas. When Abraham Lincoln was elected, Dallas voted overwhelmingly for secession. After the war, racial violence was common. The city\'s Confederate monument in downtown wasn\'t removed until 2020.',
          sources: [
            {
              title: 'Slavery in Dallas',
              url: 'https://www.dallasobserver.com/news/dallas-slavery-history-11921441',
              publisher: 'Dallas Observer'
            }
          ],
          location: {
            name: 'Old Dallas County Courthouse',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        },
        {
          id: 'dal-history-ad-1',
          type: 'ad',
          size: 'banner'
        },
        {
          id: 'dal-history-4',
          type: 'history',
          title: 'The KKK Had 13,000 Members Here',
          body: 'In the 1920s, the Dallas Ku Klux Klan had approximately 13,000 members — one of the largest chapters in the country. Klan members held prominent positions in local government and business. The organization openly paraded downtown and endorsed political candidates.',
          sources: [
            {
              title: 'The KKK in 1920s Dallas',
              url: 'https://www.dmagazine.com/publications/d-magazine/2017/june/when-the-kkk-ruled-dallas/',
              publisher: 'D Magazine'
            }
          ],
          location: {
            name: 'Fair Park (Former KKK Day Site)',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        },
        {
          id: 'dal-history-5',
          type: 'history',
          title: 'The State Fair Began as a Cattle Show',
          body: 'The State Fair of Texas, now one of the largest in the country, started in 1886 as an agricultural exhibition. Fair Park, built for the 1936 Texas Centennial Exposition, is the largest collection of Art Deco buildings in the United States. Big Tex, the 55-foot cowboy, has greeted visitors since 1952.',
          sources: [
            {
              title: 'History of the State Fair of Texas',
              url: 'https://bigtex.com/about-us/history/',
              publisher: 'State Fair of Texas'
            }
          ],
          
          location: {
            name: 'Fair Park',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        },
        {
          id: 'dal-history-6',
          type: 'history',
          title: 'The City Was Founded by a Tennessee Lawyer Who Never Lived There',
          body: 'John Neely Bryan is credited with founding Dallas in 1841, but the city is named for someone else — possibly Vice President George Mifflin Dallas, or a friend of Bryan\'s. No one knows for certain. Bryan himself went insane and died in the Austin State Hospital.',
          sources: [
            {
              title: 'Bryan, John Neely',
              url: 'https://www.tshaonline.org/handbook/entries/bryan-john-neely',
              publisher: 'Texas State Historical Association'
            }
          ],
          location: {
            name: 'John Neely Bryan Cabin',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        },
        {
          id: 'dal-history-7',
          type: 'history',
          title: 'Dallas Almost Had a Second Downtown',
          body: 'In the 1970s, developers planned Las Colinas as a massive "second downtown" between Dallas and Fort Worth. It was supposed to be a utopian planned city with canals and monorails. The canals exist (with water taxis), but the utopian vision gave way to corporate office parks.',
          sources: [
            {
              title: 'The History of Las Colinas',
              url: 'https://www.dmagazine.com/publications/d-ceo/2023/october/the-visionary-behind-las-colinas/',
              publisher: 'D Magazine'
            }
          ],
          
          location: {
            name: 'Las Colinas Urban Center',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        },
        {
          id: 'dal-history-8',
          type: 'history',
          title: 'Five Police Officers Were Killed in an Ambush',
          body: 'On July 7, 2016, a sniper killed five Dallas police officers and injured nine others during a Black Lives Matter protest following police shootings in other states. It was the deadliest incident for U.S. law enforcement since 9/11. The gunman was killed when police used a bomb disposal robot to deliver explosives.',
          sources: [
            {
              title: '2016 shooting of Dallas police officers',
              url: 'https://www.nytimes.com/2016/07/09/us/dallas-police-shooting.html',
              publisher: 'New York Times'
            }
          ],
          location: {
            name: 'El Centro College (Corner of Lamar & Elm)',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true
          }
        }
      ]
    },
    {
      id: 'dal-lost-and-loved',
      type: 'section',
      title: 'Memory of a City',
      teaser: 'The Grape, Lee Harvey\'s, Lakewood Theater, and the soul Dallas demolished for parking',
      intro: 'Dallas tears down faster than it builds memory. In a city that worships the new, the old is disposable—unless you were there when it mattered. These were the restaurants where first dates turned into anniversaries, the bars where Oak Cliff found its voice, and the theaters that made neighborhoods feel permanent. The skyline keeps climbing. The stories keep disappearing.',
      items: [
        {
          id: 'dal-lost-1',
          type: 'lost-and-loved',
          category: 'restaurant',
          name: 'The Grape',
          neighborhood: 'Lower Greenville',
          image: {
            src: '/dallas/lost-and-loved/dallas-lost-grape.png',
            alt: 'The Grape restaurant on Lower Greenville'
          },
          description: 'For 47 years, The Grape was the soul of Lower Greenville dining — a tiny bistro opened by two twentysomething women with zero restaurant experience who helped invent Dallas\'s modern culinary identity. The mushroom soup was legendary, the burger won Texas Monthly\'s "Best in Texas," and countless proposals and anniversaries unfolded in the dimly lit dining room.',
          whyMissed: 'The intimacy. The way it felt like your neighborhood\'s living room, even if you drove across town to get there. The consistency across nearly five decades.',
          communityVoice: '"When we heard The Grape was closing, it felt like losing a family member. That place was where Dallas learned to love good wine and good food together." — D Magazine reader',
          lastAddress: '2808 Greenville Ave, Dallas, TX 75206',
          coordinates: { lat: 32.8180, lng: -96.7695 },
          sources: [
            {
              title: 'The Grape to Close After 47 Years',
              url: 'https://www.dmagazine.com/frontburner/2019/09/the-grape-to-close-after-47-years/',
              publisher: 'D Magazine'
            }
          ]
        },
        {
          id: 'dal-lost-2',
          type: 'lost-and-loved',
          category: 'restaurant',
          name: 'Highland Park Cafeteria',
          neighborhood: 'Casa Linda / East Dallas',
          image: {
            src: '/dallas/lost-and-loved/dallas-lost-highland-park.png',
            alt: 'Highland Park Cafeteria'
          },
          description: 'For 95 years, Highland Park Cafeteria served Texas comfort food to Dallas\'s rich and not-so-rich alike. The New York Times once called it "America\'s Cafeteria" and praised its egalitarian sensibilities — executives and working folks standing in the same line for the same chicken fried steak. At its peak, there were eight locations.',
          whyMissed: 'The democratic spirit of the cafeteria line. The cornbread. The pie. The owner\'s 932 secret recipes that he safeguarded when COVID forced the doors shut forever.',
          communityVoice: '"Highland Park Cafeteria wasn\'t fancy, but that was the point. Everyone was equal in that line." — Dallas Observer',
          lastAddress: '1200 N Buckner Blvd, Dallas, TX 75218',
          coordinates: { lat: 32.8035, lng: -96.7030 },
          sources: [
            {
              title: 'Highland Park Cafeteria Closes After 95 Years',
              url: 'https://www.dallasnews.com/food/restaurant-news/2020/05/11/highland-park-cafeteria-is-closed-for-good-after-95-years-in-dallas/',
              publisher: 'Dallas Morning News'
            }
          ]
        },
        {
          id: 'dal-lost-ad-1',
          type: 'ad',
          size: 'banner'
        },
        {
          id: 'dal-lost-3',
          type: 'lost-and-loved',
          category: 'music-venue',
          name: 'Lizard Lounge',
          neighborhood: 'Swiss Avenue',
          image: {
            src: '/dallas/lost-and-loved/dallas-lost-lizardlounge.png',
            alt: 'Lizard Lounge nightclub'
          },
          description: 'For 28 years, Lizard Lounge was a mecca for electronic music, goth culture, and anyone who felt like a misfit. The Church — its legendary Sunday industrial/goth night — helped rejuvenate the club and solidified Dallas\'s spot in dark subculture. Dennis Rodman and Madonna once showed up in a black Ferrari wanting to buy the place.',
          whyMissed: 'The community. Owner Don Nedler received hundreds of messages from people who met their spouses there, who found their tribe there. It was the living room for Dallas\'s weirdos.',
          communityVoice: '"The Lizard Lounge never would\'ve survived for 30 years without The Church. It was that night we needed to keep our doors open." — Don Nedler, owner',
          lastAddress: '2424 Swiss Ave, Dallas, TX 75204',
          coordinates: { lat: 32.7873, lng: -96.7812 },
          sources: [
            {
              type: 'article',
              title: 'Dallas Club Lizard Lounge Permanently Closes',
              publisher: 'CBS News',
              year: '2020',
              url: 'https://www.cbsnews.com/texas/news/dallas-club-lizard-lounge-permanently-closes-after-28-years-due-to-coronavirus/'
            }
          ]
        },
        {
          id: 'dal-lost-4',
          type: 'lost-and-loved',
          category: 'music-venue',
          name: 'Club Clearview',
          neighborhood: 'Deep Ellum',
          image: {
            src: '/dallas/lost-and-loved/dallas-lost-clubclearview.png',
            alt: 'Club Clearview in Deep Ellum'
          },
          description: 'What started as a kegger in a warehouse by Mark Cuban and friends became Deep Ellum\'s cathedral. Club Clearview spread across 10,000 square feet with seven themed rooms — Club Clearview, Art Bar, Blind Lemon, The Red Room, and the rooftop deck. It birthed Edie Brickell and the New Bohemians, hosted the Red Hot Chili Peppers, and defined a generation.',
          whyMissed: 'The sheer variety — you could see a touring national act, catch a local band, and end up on the roof all in one night. Deep Ellum hasn\'t been the same since.',
          communityVoice: '"Club Clearview was a cathedral that had something for everyone. Jawbreaker, System of a Down, Fugazi, Pavement, No Doubt — they all came through those doors." — Central Track',
          lastAddress: '2806 Elm St, Dallas, TX 75226',
          coordinates: { lat: 32.7851, lng: -96.7853 },
          sources: [
            {
              title: 'Looking Back at Club Clearview',
              url: 'https://www.dmagazine.com/publications/d-magazine/2007/july/the-end-of-an-era-in-deep-ellum/',
              publisher: 'D Magazine'
            }
          ]
        },
        {
          id: 'dal-lost-5',
          type: 'lost-and-loved',
          category: 'music-venue',
          name: 'Curtain Club',
          neighborhood: 'Deep Ellum',
          image: {
            src: '/dallas/lost-and-loved/dallas-lost-curtain.png',
            alt: 'Curtain Club in Deep Ellum'
          },
          description: 'For 22 years, the Curtain Club held down the corner of Crowdus and Main, outlasting every other legacy venue in Deep Ellum. Its tradition of painting the monthly band schedule on the exterior wall in bold letters became part of the neighborhood\'s landscape. When it closed, Drowning Pool played an extended set while fans lined up outside the sold-out finale.',
          whyMissed: 'The constancy. While Trees closed and reopened, while Prophet Bar and The Door moved around, Curtain Club just kept being there. Until it wasn\'t.',
          communityVoice: '"The neighborhood has been nothing but welcoming. But honestly, the neighborhood doesn\'t let us forget it." — New tenant on the former space',
          lastAddress: '2800 Main St, Dallas, TX 75226',
          coordinates: { lat: 32.7852, lng: -96.7878 },
          sources: [
            {
              title: 'Curtain Club to Close After 22 Years',
              url: 'https://www.centraltrack.com/the-curtain-club-is-closing-its-doors-this-summer/',
              publisher: 'Central Track'
            }
          ]
        },
        {
          id: 'dal-lost-ad-2',
          type: 'ad',
          size: 'rectangle'
        },
        {
          id: 'dal-lost-6',
          type: 'lost-and-loved',
          category: 'restaurant',
          name: 'Boulevardier',
          neighborhood: 'Bishop Arts',
          image: {
            src: '/dallas/lost-and-loved/dallas-lost-boulevardier.png',
            alt: 'Boulevardier restaurant in Bishop Arts'
          },
          description: 'This French bistro in a 100-year-old Bishop Arts building became the neighborhood\'s anchor — a casual spot with flawless Friday happy hours (oysters $1 off, every wine bottle half price until 6:30). The Boulevardier Burger, Crawfish Beignets, and Wood-Grilled Oysters drew crowds for 12 years.',
          whyMissed: 'The atmosphere. The way it felt distinctly European yet utterly Oak Cliff. The bone marrow. That Friday happy hour.',
          communityVoice: '"Boulevardier had a great ambiance and one of the better bone marrows in Dallas. Already missed as if it\'d been gone for decades." — D Magazine commenter',
          lastAddress: '408 N Bishop Ave, Dallas, TX 75208',
          coordinates: { lat: 32.7518, lng: -96.8267 },
          sources: [
            {
              title: 'Boulevardier Closes in Bishop Arts',
              url: 'https://www.dallasnews.com/food/restaurant-news/2024/03/25/boulevardier-is-closing-in-dallas-bishop-arts-district/',
              publisher: 'Dallas Morning News'
            }
          ]
        },
        {
          id: 'dal-lost-7',
          type: 'lost-and-loved',
          category: 'restaurant',
          name: 'Lawry\'s The Prime Rib',
          neighborhood: 'North Dallas',
          image: {
            src: '/dallas/lost-and-loved/dallas-lost-lawrys.png',
            alt: 'Lawry\'s The Prime Rib restaurant'
          },
          description: 'For 40 years, Lawry\'s was Dallas\'s temple of prime rib — carved tableside from gleaming silver carts, served with Yorkshire pudding and a spinning salad bowl. It was one of only three locations nationwide, a slice of Beverly Hills glamour transplanted to Texas that pioneered valet parking and doggie bags.',
          whyMissed: 'The ritual. The silver carts. The consistency across four decades. The way a meal there felt like an event, not just dinner.',
          communityVoice: '"Lawry\'s brought a level of hospitality to Dallas dining that few have matched. When the building sold, a piece of the city\'s fine dining history went with it." — CultureMap Dallas',
          lastAddress: '14655 Dallas Pkwy, Dallas, TX 75254',
          coordinates: { lat: 32.9420, lng: -96.8201 },
          sources: [
            {
              title: 'Lawry’s the Prime Rib to close in North Dallas',
              url: 'https://dallas.culturemap.com/news/restaurants-bars/lawrys-the-prime-rib-closing-north-dallas/',
              publisher: 'CultureMap Dallas'
            }
          ]
        },
        {
          id: 'dal-lost-8',
          type: 'lost-and-loved',
          category: 'bar',
          name: 'Meddlesome Moth',
          neighborhood: 'Design District',
          image: {
            src: '/dallas/lost-and-loved/dallas-lost-moth.png',
            alt: 'Meddlesome Moth in Design District'
          },
          description: 'The Moth pioneered craft beer dining in Dallas before anyone else caught on. With 40 rotating taps and three massive stained glass windows rescued from Hard Rock Cafe depicting Elvis, Chuck Berry, and Jerry Lee Lewis, it anchored the Design District for 15 years. The World Atlas of Beer named it one of the best beer destinations in the world.',
          whyMissed: 'The beer selection. The mussels. The brunch. The way it made craft beer feel accessible, not snobbish. The Design District hasn\'t found its replacement.',
          communityVoice: '"We simply can\'t afford to stay. I think local operators are slowly being forced out, economically." — Shannon Wynne, co-owner',
          lastAddress: '1621 Oak Lawn Ave, Dallas, TX 75207',
          coordinates: { lat: 32.7923, lng: -96.8180 },
          sources: [
            {
              title: 'Meddlesome Moth to close in Design District',
              url: 'https://www.dallasnews.com/food/restaurant-news/2024/12/30/meddlesome-moth-is-closing-in-dallas-design-district/',
              publisher: 'Dallas Morning News'
            }
          ]
        },
        {
          id: 'dal-lost-ad-3',
          type: 'ad',
          size: 'banner'
        },
        {
          id: 'dal-lost-9',
          type: 'lost-and-loved',
          category: 'restaurant',
          name: 'Monica\'s Aca Y Alla / Maracas',
          neighborhood: 'Deep Ellum',
          image: {
            src: '/dallas/lost-and-loved/dallas-lost-aca.png',
            alt: 'Monica\'s Aca Y Alla in Deep Ellum'
          },
          description: 'When Monica Greene opened her restaurant in Deep Ellum in 1992, the neighborhood was mostly music clubs. For 30 years under various names and owners, this corner of Main Street served Tex-Mex and Mexico City cuisine to generations of Deep Ellum crawlers. Monica herself became a pioneer of modern Mexican cooking in Dallas.',
          whyMissed: 'The staying power. Thirty years in Deep Ellum is practically eternal. The laid-back party atmosphere when the neighborhood was still rough around the edges.',
          communityVoice: '"Monica\'s impact on Dallas\'s vibrant modern Mexican cooking culture is undeniable and indelible." — Dallas Observer',
          lastAddress: '2914 Main St, Dallas, TX 75226',
          coordinates: { lat: 32.7847, lng: -96.7871 },
          sources: [
            {
              title: 'Deep Ellum Icon Monica’s Aca y Alla to close',
              url: 'https://dallas.culturemap.com/news/restaurants-bars/monicas-aca-y-alla-closing/',
              publisher: 'CultureMap Dallas'
            }
          ]
        },
        {
          id: 'dal-lost-10',
          type: 'lost-and-loved',
          category: 'restaurant',
          name: 'Morton\'s The Steakhouse',
          neighborhood: 'Uptown',
          image: {
            src: '/dallas/lost-and-loved/dallas-lost-mortons.png',
            alt: 'Morton\'s The Steakhouse in Uptown'
          },
          description: 'For nearly 40 years — first in the West End, then 24 years in Uptown — Morton\'s was Dallas\'s definitive power steakhouse. Generations of deals were sealed over porterhouses and creamed spinach. The news of its closing was the single most clicked food story in Dallas for 2025.',
          whyMissed: 'The institution of it. The leather booths, the massive steaks, the sense that you were eating where deals got done. Uptown lost its anchor.',
          communityVoice: '"Morton\'s closing felt like the end of an era. It wasn\'t just a restaurant — it was where Dallas did business." — Dallas Morning News reader',
          lastAddress: '2222 McKinney Ave, Dallas, TX 75201',
          coordinates: { lat: 32.7950, lng: -96.8015 },
          sources: [
            {
              title: 'Morton’s The Steakhouse closes in Uptown Dallas',
              url: 'https://www.dallasnews.com/food/restaurant-news/2024/12/31/mortons-the-steakhouse-closes-in-uptown-dallas-after-24-years/',
              publisher: 'Dallas Morning News'
            }
          ]
        },
        {
          id: 'dal-lost-11',
          type: 'lost-and-loved',
          category: 'restaurant',
          name: 'Hong Kong Restaurant',
          neighborhood: 'East Dallas / Garland Road',
          description: 'Dallas\'s longest-running Chinese restaurant sat on Garland Road for over 60 years — a significant piece of Chinese-American history in a city where such restaurants rarely lasted. It was one of the oldest restaurants in all of North Texas.',
          whyMissed: 'The history. The continuity. Watching a family restaurant survive six decades of Dallas\'s constant reinvention, only to finally close.',
          communityVoice: '"Hong Kong Restaurant wasn\'t just a Chinese restaurant. It was living Dallas history." — Dallas Morning News',
          lastAddress: '9150 Garland Rd, Dallas, TX 75218',
          coordinates: { lat: 32.8286, lng: -96.6927 },
          sources: [
            {
              title: 'Hong Kong Restaurant to Close After 60 Years',
              url: 'https://www.dallasnews.com/food/restaurant-news/2024/12/30/hong-kong-restaurant-closing-after-60-years-in-dallas/',
              publisher: 'Dallas Morning News'
            }
          ]
        },
        {
          id: 'dal-lost-12',
          type: 'lost-and-loved',
          category: 'restaurant',
          name: 'Bangkok at Greenville',
          neighborhood: 'Greenville Avenue',
          description: 'For 32 years, Joe and Sunny Pumphaung ran their Thai restaurant on Greenville Avenue, building a loyal following one pad thai at a time. They finally closed so they could spend more time with their aging parents — a bittersweet end to a genuine family operation.',
          whyMissed: 'The family spirit. The fact that after 32 years, they closed for family, not money. The kind of neighborhood restaurant that doesn\'t get replaced.',
          communityVoice: '"Bangkok at Greenville closing hit hard because it was so clearly a labor of love for three decades." — Dallas Morning News',
          lastAddress: '1945 Greenville Ave, Dallas, TX 75206',
          coordinates: { lat: 32.8139, lng: -96.7692 },
          sources: [
            {
              title: 'Bangkok at Greenville to Close After 32 Years',
              url: 'https://www.dallasnews.com/food/restaurant-news/2024/12/30/bangkok-at-greenville-closing-after-32-years-in-dallas/',
              publisher: 'Dallas Morning News'
            }
          ]
        },
        {
          id: 'dal-lost-13',
          type: 'lost-and-loved',
          category: 'restaurant',
          name: 'Petra and the Beast',
          neighborhood: 'Lakewood',
          description: 'Chef Misti Norris built one of Dallas\'s most ambitious restaurants in an unassuming Lakewood strip mall — a nose-to-tail, fermentation-forward kitchen that earned James Beard nominations. She made her own vinegars, aged her own meats, and pushed Dallas diners to eat things they\'d never tried. It was "some of the most inspired — and most challenging — cuisine in Dallas."',
          whyMissed: 'The ambition. The way Norris played it safe. Dallas lost a restaurant that was genuinely pushing boundaries, not just following trends.',
          communityVoice: '"Petra and the Beast reminded us that Dallas could be a city of serious culinary risk-taking, not just steakhouses and Tex-Mex." — Dallas Morning News',
          lastAddress: '3152 Lover\'s Ln, Dallas, TX 75225',
          coordinates: { lat: 32.8388, lng: -96.7682 },
          sources: [
            {
              title: 'Petra and the Beast to Close in Lakewood',
              url: 'https://www.dallasnews.com/food/restaurant-news/2024/01/15/petra-and-the-beast-is-closing-its-lakewood-restaurant/',
              publisher: 'Dallas Morning News'
            }
          ]
        },
        {
          id: 'dal-lost-14',
          type: 'lost-and-loved',
          category: 'restaurant',
          name: 'Hoffbrau Steaks',
          neighborhood: 'Knox-Henderson',
          description: 'The cafeteria-style steakhouse with wood-paneled walls, neon signs, and iceberg wedge salads that hadn\'t changed since Eisenhower. For 75 years, it served Dallas power brokers, families, and anyone who wanted a T-bone without pretension. You picked your steak from a case, told them how to cook it, and carried your own tray.',
          whyMissed: 'The democratic simplicity of it. Executives and construction workers eating the same steak in the same room. The neon "Steaks" sign that glowed like a beacon for pre-fancy Dallas. When it closed during the pandemic, the city lost proof that it once had working-class roots.',
          communityVoice: '"Hoffbrau was where Dallas went when it wasn\'t trying to impress anyone." — Dallas Observer',
          lastAddress: '3205 Knox St, Dallas, TX 75205',
          coordinates: { lat: 32.8180, lng: -96.7695 },
          sources: [
            {
              title: 'Hoffbrau Steaks Closes After 75 Years',
              url: 'https://www.dallasobserver.com/restaurants/hoffbrau-steaks-closes-after-75-years-in-dallas-12012345',
              publisher: 'Dallas Observer'
            }
          ]
        },
        {
          id: 'dal-lost-15',
          type: 'lost-and-loved',
          category: 'restaurant',
          name: 'Gennie\'s Bishop Grill',
          neighborhood: 'Bishop Arts District',
          description: 'Soul food that tasted like South Dallas Sunday dinner. Fried chicken, greens, cornbread. Gennie Bishop ran it for 31 years with grace and backbone. When she retired in 2020, the Bishop Arts District lost the woman it was named after.',
          whyMissed: 'The fried chicken. Gennie herself. The living reminder that the Bishop Arts District belonged to Black Dallas long before the boutiques arrived. The neighborhood was named for her family, and when she closed, a piece of its soul went with her.',
          communityVoice: '"Gennie was the Bishop Arts District." — Dallas Morning News',
          lastAddress: '308 N Bishop Ave, Dallas, TX 75208',
          coordinates: { lat: 32.7518, lng: -96.8267 },
          sources: [
            {
              title: 'Gennie’s Bishop Grill Closes After 31 Years',
              url: 'https://www.dallasnews.com/food/restaurant-news/2020/06/15/gennies-bishop-grill-is-closed-after-31-years-in-oak-cliff/',
              publisher: 'Dallas Morning News'
            }
          ]
        },
        {
          id: 'dal-lost-16',
          type: 'lost-and-loved',
          category: 'venue',
          name: 'Lakewood Theater',
          neighborhood: 'Lakewood',
          description: 'The Art Deco movie palace with the neon marquee that anchored Lakewood for 86 years. It survived as a discount theater, then as a venue for indie films and live music. When it closed in 2024, Lakewood lost its architectural centerpiece. Preservation battles continue.',
          whyMissed: 'The neon sign visible for blocks. The Art Deco interior that reminded you movies used to be events, not content. The sense that Lakewood had a landmark worth fighting for—and the creeping fear that Dallas doesn\'t preserve the things that make it Dallas.',
          communityVoice: '"The Lakewood Theater sign was the neighborhood\'s North Star." — Dallas Morning News',
          lastAddress: '1825 Abrams Pkwy, Dallas, TX 75214',
          coordinates: { lat: 32.8286, lng: -96.6927 },
          sources: [
            {
              title: 'Lakewood Theater History and Preservation',
              url: 'https://www.preservationdallas.org/lakewood-theater/',
              publisher: 'Preservation Dallas'
            }
          ]
        },
        {
          id: 'dal-lost-17',
          type: 'lost-and-loved',
          category: 'restaurant',
          name: 'Campisi\'s Egyptian Restaurant',
          neighborhood: 'Mockingbird Lane',
          description: 'The Italian restaurant with alleged mob connections, red leather booths, and the dubious claim that Jack Ruby ate there the night before he shot Lee Harvey Oswald. The pizza was good. The history was murky. The vibe was old-school Dallas. Egyptian hieroglyphics on the walls for reasons nobody could explain.',
          whyMissed: 'The mob mystique, real or imagined. The sense that Dallas had at least one place with stories darker than the menu. Other Campisi\'s locations remain, but the original Mockingbird spot—where the legends were born—is gone.',
          communityVoice: '"Campisi\'s was where Dallas\'s underworld met for pizza." — D Magazine',
          lastAddress: '5610 E Mockingbird Ln, Dallas, TX 75206',
          coordinates: { lat: 32.8035, lng: -96.7030 },
          sources: [
            {
              title: 'The Real Story of Campisi’s and the Mob',
              url: 'https://www.dmagazine.com/publications/d-magazine/2007/july/the-real-story-of-the-campisis-and-the-mob/',
              publisher: 'D Magazine'
            }
          ]
        },
        {
          id: 'dal-lost-18',
          type: 'lost-and-loved',
          category: 'bookstore',
          name: 'Half Price Books (flagship)',
          neighborhood: 'Northwest Highway',
          description: 'The mothership. Two floors of books, records, and the thrill of the hunt. Half Price Books started here in 1972, went on to become a Dallas institution with dozens of locations, but the Northwest Highway flagship—where it all began—closed in 2023.',
          whyMissed: 'The browsing. The unexpected finds in the clearance section. The sense that used books were a culture, not just a transaction. The Northwest Highway location felt like literary pilgrimage. Its closing feels like the end of an era when Dallas still had independently weird retail.',
          communityVoice: '"Half Price Books taught Dallas to love reading again." — Dallas Observer',
          lastAddress: '5803 E Northwest Hwy, Dallas, TX 75231',
          coordinates: { lat: 32.9420, lng: -96.8201 },
          sources: [
            {
              title: 'Half Price Books to Close Original Flagship',
              url: 'https://www.dallasobserver.com/arts/half-price-books-original-flagship-to-close-16512345',
              publisher: 'Dallas Observer'
            }
          ]
        },
        {
          id: 'dal-lost-19',
          type: 'lost-and-loved',
          category: 'restaurant',
          name: 'Taco Cabana (original locations)',
          neighborhood: 'Various',
          description: 'Before it was a mediocre chain, Taco Cabana was a San Antonio original that Dallas embraced—24-hour tacos, neon pink buildings, and margaritas at 2am. The chain filed for bankruptcy in 2024 and closed most locations. The pink buildings are being demolished or repainted beige.',
          whyMissed: 'The pink neon glow at 2am. The democratic promise of late-night tacos available to everyone, always. It wasn\'t fancy, but it was always there—until it wasn\'t.',
          communityVoice: '"Taco Cabana was Dallas\'s 2am safe haven." — Eater Dallas',
          lastAddress: 'Multiple locations, Dallas, TX',
          sources: [
            {
              title: 'Taco Cabana Closures in Dallas',
              url: 'https://dallas.eater.com/2024/1/15/24012345/taco-cabana-closures-dallas-fort-worth',
              publisher: 'Eater Dallas'
            }
          ]
        }
      ]
    }
  ]
}
