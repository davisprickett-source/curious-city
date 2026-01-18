import { CityData } from '@/types/content'

export const denver: CityData = {
  slug: 'denver',
  name: 'Denver',
  tagline: 'Mile high ambition and mountain access',
  content: [
    {
      id: 'intro-text',
      type: 'text',
      content: 'Welcome to Denver — a city that sells its altitude while sitting an hour from the actual mountains.',
    },
    {
      id: 'featured-card',
      type: 'card',
      title: 'Mile High Hustle',
      description: 'How a gateway to the mountains became a destination in its own right.',
      meta: 'Essay',
      variant: 'featured',
      href: '/denver/essay/mile-high-hustle',
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
          title: 'Beating I-70 Traffic: Ski Day Strategy',
          description: 'Local tactics for avoiding the powder day parking lot.',
          meta: 'Guide',
          href: '/denver/ski-traffic',
        },
        {
          title: 'The RiNo Art District Evolution',
          description: 'From industrial zone to Instagram backdrop.',
          meta: 'Feature',
          href: '/denver/rino',
        },
        {
          title: 'Best Breweries by Neighborhood',
          description: 'There are hundreds. Here\'s where to start.',
          meta: 'List',
          variant: 'compact',
          href: '/denver/breweries',
        },
      ],
    },
    {
      id: 'ad-2',
      type: 'ad',
      size: 'rectangle',
    },
    {
      id: 'den-curiosities',
      type: 'section',
      title: 'Denver\'s Strange & Remarkable',
      intro: 'Denver is a city that literally measured its own altitude wrong three times. From the demonic horse that killed its creator to the park built on top of thousands of forgotten corpses, the Queen City has plenty of secrets buried beneath the high plains.',
      items: [
        {
          id: 'den-curiosity-1',
          type: 'curiosity',
          featured: true,
          featuredOrder: 1,
          category: 'legend',
          articleSlug: 'blucifer-demon-horse',
          title: 'The demonic airport horse murdered its creator',
          body: 'The 32-foot, electric-blue mustang with glowing red eyes that greets every arrival at Denver International Airport is a nightmare made real. Locals call him "Blucifer," and for good reason: he murdered his creator. In 2006, a piece of the sculpture detached and severed a femoral artery in artist Luis Jiménez\'s leg, killing him in his New Mexico studio. Two years later, his sons finished the colossal, cursed beast from his meticulous plans. Jiménez had designed the blue as a nod to lowrider culture and the fiery eyes as a tribute to his father\'s neon sign shop. But the unsettling origin story, those malevolent eyes, and its sheer demonic scale perfectly fuel DIA’s already robust conspiracy theories. The airport, in a move of either genius marketing or pure evil, now sells Blucifer merchandise. His estate, naturally, wishes you wouldn\'t call it that. Welcome to Denver.',
          image: {
            src: '/denver/curiosities/bluecifer.png',
            alt: 'Blucifer - the blue mustang sculpture with glowing red eyes at Denver International Airport',
          },
          location: {
            name: 'Denver International Airport',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true,
          },
          sources: [
            {
              title: 'Everything You Ever Wanted To Know About Blucifer',
              publisher: 'Colorado Public Radio',
              url: 'https://www.cpr.org/2019/11/04/everything-you-ever-wanted-to-know-about-blucifer-the-demon-horse-of-dia/',
            },
            {
              title: 'The Tragic Story Behind Blucifer',
              publisher: 'Uncover Colorado',
              url: 'https://www.uncovercolorado.com/landmarks/blue-mustang-sculpture-dia/',
            },
          ],
        },
        {
          id: 'den-curiosity-17',
          type: 'curiosity',
          category: 'history',
          title: 'Denver invented outdoor Christmas lights to cheer up a sick kid',
          body: 'In 1914, Denver electrician D.D. Sturgeon wanted to cheer up his four-year-old son who was bedridden. So he hand-painted light bulbs in red and green and hung them on a pine tree outside his son\'s hospital window. The first outdoor Christmas lights in history weren\'t about religion or tradition—they were about a father trying to make his sick kid smile. The idea spread through Denver, then across Colorado, and eventually became a global phenomenon. Every suburban dad cursing at tangled lights owes it to D.D. Sturgeon and his dying son.',
          image: {
            src: '/denver/curiosities/denver-cur-christmas-lights.png',
            alt: 'Denver outdoor Christmas lights history',
          },
          sources: [
            {
              title: 'The History of Outdoor Christmas Lights',
              publisher: 'History Colorado',
              url: 'https://www.historycolorado.org/story/holidays/2019/12/11/denver-birthplace-outdoor-christmas-lights',
            }
          ],
          location: {
            name: 'Sturgeon Home (Original Site)',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: false,
          }
        },
        {
          id: 'den-curiosity-ad-1',
          type: 'ad',
          size: 'banner',
        },
        {
          id: 'den-curiosity-6',
          type: 'curiosity',
          category: 'science',
          title: 'Denver measured its own altitude wrong three times',
          body: 'Denver\'s entire identity is built on being the "Mile High City"—it\'s on license plates, business names, and every weed dispensary pun. So you\'d think they could measure 5,280 feet correctly. They could not. In 1909, a brass marker was proudly embedded on the 13th step of the State Capitol, declaring "One Mile Above Sea Level." For decades, tourists posed, postcards sold. Then, in 1969, a group of engineering students re-measured and found the marker was three steps too low. The legislature, with great fanfare, moved the "official" marker to the 18th step. Problem solved? Not quite. In 2003, the National Geodetic Survey, armed with GPS, found the 18th step was actually three feet *too high*. A third, more accurate marker was placed on the 15th step. Today, all three markers remain, a testament to Denver\'s stubborn pride and its inability to get its most famous statistic quite right. The state just lives with the competing truths.',
          image: {
            src: '/denver/curiosities/curious-mile-high-marker.png',
            alt: 'Mile High marker on Colorado State Capitol steps',
          },
          sources: [
            {
              title: 'The Mile High Markers',
              publisher: 'Colorado Encyclopedia',
              url: 'https://coloradoencyclopedia.org/article/colorado-state-capitol',
            }
          ],
          location: {
            name: 'Colorado State Capitol',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true,
          },
        },
        {
          id: 'den-curiosity-4',
          type: 'curiosity',
          category: 'law',
          title: 'Denver legally claimed the cheeseburger (Pasadena disagrees)',
          body: 'In 1935, Louis Ballast of Denver\'s Humpty Dumpty Drive-In legally trademarked the word "cheeseburger," staking an official claim to inventing the iconic American staple. Pasadena, California, has a competing claim from the same year, citing Lionel Sternberger\'s "cheese-hamburger" at The Rite Spot. The arguments are petty, passionate, and will never be resolved. While Denver\'s trademark has long since expired and the Humpty Dumpty is demolished, the city still clings to its culinary pride, much to Pasadena\'s eternal consternation. Both cities insist they invented it. The world just eats them.',
          images: [
            {
              src: '/denver/curiosities/cheeseburger-1.png',
              alt: 'Historic cheeseburger and Humpty Dumpty Drive-In',
              credit: 'Historical Photo',
            },
            {
              src: '/denver/curiosities/cheeseburger-2.png',
              alt: 'Vintage cheeseburger advertisement',
              credit: 'Historical Photo',
            },
          ],
          sources: [
            {
              title: 'Who Invented the Cheeseburger?',
              publisher: 'Denver Public Library',
              url: 'https://en.wikipedia.org/wiki/Cheeseburger#History',
            },
          ],
          location: {
            name: 'Humpty Dumpty Drive-In (Site)',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: false,
          },
        },
        {
          id: 'den-curiosity-ad-2',
          type: 'ad',
          size: 'rectangle',
        },
        {
          id: 'den-curiosity-19',
          type: 'curiosity',
          category: 'history',
          title: 'Coors Field was built on a triceratops graveyard',
          body: 'In March 1995, construction crews excavating the foundation for Coors Field hit something unexpected: a seven-foot-long rib bone. Then another. Then a partial skull. Paleontologists from the Denver Museum of Nature & Science were called in, and what they found stopped construction for weeks: the remains of a triceratops that died 68 million years ago, during the Late Cretaceous, right where home plate would eventually sit. The fossil was remarkably well-preserved, having survived millions of years only to be nearly pulverized by a Caterpillar. Workers dubbed the creature "Dinger" after the Rockies\' mascot, though the actual mascot came first. The bones were carefully excavated, catalogued, and donated to the museum, where they remain part of the permanent collection. But here\'s the thing: the site also yielded a treasure trove of other prehistoric specimens, including 1,000 pounds of Cretaceous-era vegetation fossils and smaller dinosaur fragments. Coors Field, it turns out, sits on what was once a prehistoric flood plain, teeming with life that died, sank into the mud, and waited 68 million years for someone to try building a stadium. The Rockies now play baseball on ground that once hosted three-ton herbivores with horns the size of baseball bats. Every home run that clears the outfield wall lands on an ancient graveyard.',
          image: {
            src: '/denver/curiosities/denver-cur-coors.png',
            alt: 'Coors Field triceratops fossil discovery',
          },
          sources: [
            {
              title: 'Dinosaur Discovery at Coors Field',
              publisher: 'MLB.com',
              url: 'https://www.mlb.com/news/coors-field-dinosaur-discovery-history',
            }
          ],
          location: {
            name: 'Coors Field',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true,
          },
        },
        {
          id: 'den-curiosity-20',
          type: 'curiosity',
          category: 'architecture',
          title: 'The Capitol used the world\'s entire supply of a rare stone',
          body: 'When builders were finishing the interior of the Colorado State Capitol in the early 1900s, they sourced Colorado Rose Onyx from a single quarry near Beulah, about 180 miles south of Denver. The stone is stunning: a translucent, pinkish-rose marble that glows when backlit, with swirling patterns that look like frozen sunsets. It lines the wainscoting throughout the first floor, covers the Grand Staircase, and frames doorways in the rotunda. The problem is that they used all of it. Every ounce of Colorado Rose Onyx that existed on Earth went into this building. The quarry is exhausted. Geologists have searched for additional deposits without success. If a piece is damaged, there is no replacement. The stone cannot be matched, approximated, or synthesized. When the Capitol underwent renovations in the 2010s, preservationists treated every inch of Rose Onyx like the irreplaceable artifact it is. Today, if you want to see Colorado Rose Onyx, you have exactly one option: stand inside the Colorado State Capitol. It is the rarest building material in the Western Hemisphere, and Denver just decided to put all of it in one room. Bold choice.',
          images: [
            {
              src: '/denver/curiosities/denver-cur-onyx-1.png',
              alt: 'Colorado Rose Onyx inside the Capitol',
            },
            {
              src: '/denver/curiosities/denver-cur-onyx-2.png',
              alt: 'Capitol interior stone details',
            }
          ],
          sources: [
            {
              title: 'State Capitol Virtual Tour',
              publisher: 'Colorado General Assembly',
              url: 'https://leg.colorado.gov/content/virtual-tour-onyx',
            }
          ],
          location: {
            name: 'Colorado State Capitol',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true,
          },
        },
        {
          id: 'den-curiosity-9',
          type: 'curiosity',
          category: 'history',
          title: 'The city almost died before it started',
          body: 'Denver shouldn\'t exist. In November 1858, prospectors from Kansas founded "Denver City" at the confluence of Cherry Creek and the South Platte River. They found a little gold—enough to spark a rush. By early 1859, the deposits were exhausted. The "Pikes Peak or Bust" gold rush became a bust. Thousands arrived, found nothing, and turned around. Newspapers back East declared it a hoax. Denver\'s population collapsed. The town was weeks from abandonment when prospectors struck real gold at Gregory Gulch near Central City. Suddenly Denver had a purpose: supply hub, banking center, railhead for the mountain camps. The city survived because someone found gold in exactly the right place at the right time. A few months earlier, a few miles elsewhere, and Denver would be another ghost town footnote.',
          images: [
            {
              src: '/denver/curiosities/almost-died-1.png',
              alt: 'Early Denver City during the gold rush',
              credit: 'Colorado Historical Society',
            },
            {
              src: '/denver/curiosities/almost-died-2.png',
              alt: 'Pikes Peak or Bust prospectors',
              credit: 'Historical Photo',
            },
            {
              src: '/denver/curiosities/almost-died-3.png',
              alt: 'Cherry Creek gold rush camp',
              credit: 'Historical Photo',
            },
          ],
          sources: [
            {
              title: 'The Founding of Denver',
              publisher: 'History Colorado',
              url: 'https://www.historycolorado.org/founding-denver',
            }
          ],
          location: {
            name: 'Confluence Park',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true,
          }
        },
        {
          id: 'den-curiosity-18',
          type: 'curiosity',
          category: 'law',
          title: 'Kissing was banned at Union Station because it slowed down the trains',
          body: 'In 1902, Denver Union Station had a problem: too much kissing. Couples saying goodbye would linger on the platforms, blocking passengers and delaying departures. The solution? Ban all kissing at the station. The rule was officially enforced, with railway staff breaking up smooches to keep the trains on schedule. It remained technically illegal for decades. Today, nobody enforces it. The trains are no longer slowed by romance. They\'re slowed by everything else.',
          image: {
            src: '/denver/curiosities/denver-cur-kiss.png',
            alt: 'Denver Union Station kissing ban history',
          },
          sources: [
            {
              title: 'Fun Facts About Denver Union Station',
              publisher: 'Secret Denver',
              url: 'https://secretdenver.com/union-station-denver-facts/',
            }
          ],
          location: {
            name: 'Denver Union Station',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true,
          },
        },
        {
          id: 'den-curiosity-7',
          type: 'curiosity',
          category: 'science',
          title: 'Denver has more sun than San Diego (and worse sunburns)',
          body: 'Denver averages 300 days of sunshine annually, which means more clear skies than Miami, San Diego, or Los Angeles. The city\'s marketing materials love this statistic. What they mention less often: at 5,280 feet, UV exposure is roughly 25% more intense than at sea level. The atmosphere is thinner. There\'s less air between you and the nuclear furnace that powers our solar system. Visitors from coastal cities consistently underestimate how quickly they\'ll burn. Twenty minutes on a rooftop patio in July can leave you looking like a boiled lobster. The altitude also means alcohol hits harder, dehydration happens faster, and the combination produces hangovers of legendary severity. Newcomers learn this the hard way, usually on their first weekend. The locals have adapted: SPF 50 is standard equipment, water bottles are carried everywhere, and anyone who\'s lived here more than a few years has developed the kind of permanent tan lines and crow\'s feet that suggest a lifetime outdoors. Denver runs on vitamin D and Ibuprofen. It is genuinely one of the sunniest cities in America. It will also cook you if you\'re not careful.',
          image: {
            src: '/denver/curiosities/denver-sunshine.png',
            alt: 'Denver skyline under bright sunshine',
            credit: 'Photo',
          },
          sources: [
            {
              title: 'Climate of Denver',
              publisher: 'National Weather Service',
              url: 'https://www.weather.gov/bou/denver_climate',
            }
          ]
        },
        {
          id: 'den-curiosity-8',
          type: 'curiosity',
          category: 'culture',
          title: 'South Park\'s creators bought Casa Bonita and fixed it',
          body: 'The Mexican restaurant with cliff divers, caves, and sopapillas—immortalized in South Park—closed during COVID. In 2021, show creators Matt Stone and Trey Parker bought it. They spent millions on renovations while preserving every absurd detail: the waterfall, Black Bart\'s Hideout, the puppet show, the mariachi bands. The food is now allegedly good. It reopened in 2023. You still need reservations months in advance to eat mediocre enchiladas in a fake cave.',
          image: {
            src: '/denver/curiosities/casa-bonita.png',
            alt: 'Casa Bonita Mexican restaurant with cliff divers and pink tower',
          },
          sources: [
            {
              title: 'Inside the New Casa Bonita',
              publisher: 'The New York Times',
              url: 'https://www.nytimes.com/2023/06/06/dining/casa-bonita-denver-south-park.html',
            }
          ],
          location: {
            name: 'Casa Bonita',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true,
          },
        },
        {
          id: 'den-curiosity-13',
          type: 'curiosity',
          category: 'science',
          title: 'Denver isn\'t actually in the mountains (don\'t tell Denver)',
          body: 'Despite every postcard, every marketing campaign, and every ski bum\'s delusion, Denver sits squarely on the high plains—an hour\'s drive from the nearest foothills. While the city proudly boasts its "Mile High" elevation (most of the time), the majestic Rockies loom 9,000 feet higher and an hour west. Denver offers stunning views of the mountains, but it is not *in* them. It\'s a plains city with mountain aspirations, perpetually gazing westward like a wistful teenager. The city is essentially a glorified base camp, a gateway to the actual wilderness, perfectly content to bask in the reflected glory of peaks it only occasionally visits.',
          image: {
            src: '/denver/curiosities/denver-plain.png',
            alt: 'Denver skyline on the plains with Rocky Mountains in the distance',
          },
          sources: [
            {
              title: 'Geography of Denver',
              publisher: 'USGS',
              url: 'https://www.usgs.gov/centers/geosciences-and-environmental-change-science-center/science/geography-denver',
            }
          ]
        },
        {
          id: 'den-curiosity-16',
          type: 'curiosity',
          category: 'nature',
          title: 'Red Rocks is 300 million years of perfect acoustics',
          body: 'Red Rocks Amphitheatre isn\'t a venue—it\'s a geological accident that happens to host concerts. The two massive sandstone formations (Ship Rock and Creation Rock) rose from a prehistoric ocean floor 300 million years ago, were tilted vertical during mountain-building, and created what acousticians call "the only naturally perfect amphitheater in the world." The rocks amplify sound naturally. No stadium comes close. In 1911, opera singer Mary Garden declared she\'d never heard better acoustics at any opera house in the world. In 2021, it was the highest-grossing venue on Earth. The Beatles played here in 1964. U2 filmed "Under a Blood Red Sky" here in 1983. Every artist wants this on their resume. The rocks don\'t care. They\'ll be here 300 million years after the last encore.',
          images: [
            {
              src: '/denver/curiosities/curious-red-rocks-1.png',
              alt: 'Red Rocks Amphitheatre natural rock formations',
            },
            {
              src: '/denver/curiosities/curious-red-rocks-2.png',
              alt: 'Red Rocks concert with dramatic rock walls',
            },
            {
              src: '/denver/curiosities/curious-red-rocks-3.png',
              alt: 'Red Rocks Amphitheatre scenic view',
            },
          ],
          sources: [
            {
              title: 'The Geology of Red Rocks',
              publisher: 'Colorado Geological Survey',
              url: 'https://coloradogeologicalsurvey.org/geology/red-rocks/',
            }
          ],
          location: {
            name: 'Red Rocks Amphitheatre',
            url: 'https://maps.app.goo.gl/R5eYx5wYm5E8W1V7',
            stillExists: true,
          },
        },
        {
          id: 'den-curiosity-3',
          type: 'curiosity',
          category: 'underground',
          title: 'Secret tunnels connect downtown to mysterious destinations',
          body: 'Beneath downtown Denver lies a network of tunnels that officially don\'t extend beyond their boring, utilitarian purposes, and that unofficially connect half the buildings in the city center. The documented history is straightforward: starting in the late 1800s, steam heating companies built underground passages to deliver heat from central plants to office buildings. The undocumented history is considerably more interesting. During Prohibition, the tunnels reportedly connected speakeasies and allowed discreet movement of alcohol. The Brown Palace Hotel, which has hosted every president since Teddy Roosevelt, has confirmed tunnel access to its basement, though the hotel remains coy about where those tunnels lead. Some historians claim the network extends to the Navarre building across the street, where a former bordello operated during Denver\'s more colorful era. Urban explorers who\'ve ventured into the system describe passages that extend far beyond official maps, with locked doors, bricked-up sections, and corridors that simply end. The city neither confirms nor denies the full extent. Building owners mostly decline comment. What\'s certain is that Denver was built during an era when underground networks served multiple purposes, and not all of those purposes were meant for public record. The tunnels remain, sealed behind locked doors and forgotten entrances, holding whatever secrets they\'ve accumulated over 130 years.',
          image: {
            src: '/denver/curiosities/denver-tunnels.png',
            alt: 'Underground tunnels beneath downtown Denver',
            credit: 'Historical Photo',
          },
          sources: [
            {
              title: 'The Tunnels of Downtown Denver',
              publisher: 'Denver Public Library',
              url: 'https://leg.colorado.gov/content/capitol-complex-tunnels',
            },
          ],
          location: {
            name: 'Downtown Denver Tunnels',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true,
          }
        },
        {
          id: 'den-curiosity-15',
          type: 'curiosity',
          category: 'architecture',
          title: 'The Brown Palace never closed in 130 years',
          body: 'Henry Cordes Brown arrived in Denver in 1860 with $750 to his name. By the time he died in 1906, he\'d given the city its most enduring landmark. The Brown Palace Hotel opened August 12, 1892, built from Arizona red granite and Colorado sandstone, with an eight-story atrium lobby topped by a stained glass ceiling that filters Denver sunlight into something almost religious. The hotel has operated continuously ever since. Not "almost continuously." Not "with occasional closures." Every single day for over 130 years. Through the 1893 silver crash that devastated Denver\'s economy. Through the Spanish Flu pandemic that killed thousands in Colorado. Through two World Wars, the Great Depression, and COVID-19. Every president since Teddy Roosevelt has stayed here. The Unsinkable Molly Brown lived here. The Beatles stayed here in 1964. Underground tunnels still connect the hotel to surrounding buildings, originally built for discreet exits and rumored Prohibition-era purposes. The Brown Palace operates with a simple philosophy: the building is the attraction, and the attraction never closes. It is the constant in Denver\'s skyline, outlasting booms and busts, owners and eras. The hotel has seen everything and forgotten nothing.',
          image: {
            src: '/denver/curiosities/curious-brownpalace-1.png',
            alt: 'The Brown Palace Hotel atrium and historic architecture',
          },
          sources: [
            {
              title: 'History of the Brown Palace',
              publisher: 'Brown Palace Hotel',
              url: 'https://www.brownpalace.com/our-hotel/history/',
            }
          ],
          location: {
            name: 'Brown Palace Hotel',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true,
          },
        },
        {
          id: 'den-curiosity-11',
          type: 'curiosity',
          category: 'culture',
          title: 'Denver has more breweries than any American city',
          body: 'The Denver metro area has over 150 craft breweries, more per capita than any other American city. This isn\'t a recent trend. Adolf Coors founded his brewery in nearby Golden in 1873, choosing the location specifically for the Rocky Mountain water supply. Today, the Coors facility in Golden is the world\'s largest single-site brewery, churning out millions of barrels annually. But the craft scene exploded in the 1990s and never stopped. Wynkoop Brewing, founded by John Hickenlooper (who later became mayor, then governor, then senator), opened in 1988 and helped establish LoDo as a destination. Great Divide, Breckenridge, Odell, and dozens of others followed. The Great American Beer Festival, the largest ticketed beer festival in the country, happens in Denver every October, with 60,000+ attendees and 800+ breweries competing for medals. Denver International Airport has craft beer taps past security, which is either a public service or an enablement strategy depending on your flight time. The city has become so saturated that brewery openings barely make the news anymore. You cannot walk three blocks in RiNo without passing a taproom. The hops are inescapable. Resistance is futile.',
          image: {
            src: '/denver/curiosities/breweries-2.png',
            alt: 'Denver craft brewery scene',
            credit: 'Photo',
          },
          sources: [
            {
              title: 'The State of Craft Beer',
              publisher: 'Colorado Brewers Guild',
              url: 'https://coloradobeer.org/',
            }
          ],
          location: {
            name: 'Denver Metro',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true,
          },
        },
        {
          id: 'den-curiosity-14',
          type: 'curiosity',
          category: 'law',
          title: 'Colorado legalized weed first, then corporatized it',
          body: 'On November 6, 2012, Colorado voters passed Amendment 64 with 55% of the vote, making the state (along with Washington) the first to legalize recreational cannabis. It was a genuine cultural earthquake. International media descended. Prohibitionists predicted societal collapse. Enthusiasts predicted a new era of freedom. The first dispensaries opened January 1, 2014, to lines around the block and news helicopters overhead. People waited hours to legally purchase a plant that could have landed them in prison the year before. A decade later, the reality is more mundane than anyone imagined. Cannabis dispensaries are now as common as coffee shops. Corporate chains dominate the market. The industry has lobbyists, tax accountants, and investor relations departments. Annual sales hover around $1.5 billion, with over $400 million going to state tax revenue. The money funds schools, roads, and public health programs. The rebellion has become bureaucracy. Every gram is tracked seed-to-sale. Compliance officers outnumber budtenders. What started as a grassroots legalization movement now operates with the corporate efficiency of a CVS. Denver remains ground zero for the great American cannabis experiment. It\'s just that the experiment now involves quarterly earnings reports.',
          image: {
            src: '/denver/curiosities/cannabis.png',
            alt: 'Colorado cannabis dispensary',
            credit: 'Photo',
          },
          sources: [
            {
              title: 'Amendment 64',
              publisher: 'Colorado Department of Revenue',
              url: 'https://sbg.colorado.gov/med/amendment-64',
            }
          ],
          location: {
            name: 'State of Colorado',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true,
          },
        },
        {
          id: 'den-curiosity-olympics',
          type: 'curiosity',
          category: 'history',
          title: 'Denver is the only city to ever turn down the Olympics',
          body: 'In 1970, the International Olympic Committee awarded Denver the 1976 Winter Olympics. It would have been a huge moment for a city trying to prove itself on the world stage. Then Colorado voters said no. In November 1972, they rejected a $5 million bond issue to fund the games by a margin of 60-40. Environmentalists worried about damage to the mountains. Taxpayers balked at the cost projections. Some just didn\'t want the crowds. Denver became the first (and only) city in Olympic history to turn down hosting the games after being awarded them. The IOC scrambled and moved the 1976 Winter Olympics to Innsbruck, Austria, which had hosted before and could reuse existing facilities. Denver\'s rejection launched a new era of Olympic skepticism that would echo for decades. It also cemented a certain Colorado attitude: we\'d rather have our mountains than your prestige.',
          sources: [
            {
              title: 'When Denver Said No to the Olympics',
              publisher: 'History Colorado',
              url: 'https://www.historycolorado.org/story/2018/02/02/when-denver-said-no-olympics',
            }
          ]
        },
      ],
    },
    {
      id: 'den-iconic-spots',
      type: 'section',
      title: 'Mile High Landmarks',
      intro: 'These are the anchors of Denver identity—the places that define why people move here and why they catch the light of the Colorado sun. From the Union Station clock to the acoustics of Red Rocks, these are the essentials.',
      items: [
        {
          id: 'iconic-1',
          type: 'iconic-spot',
          name: 'Red Rocks Amphitheatre',
          category: 'Venue',
          description: 'The Civilian Conservation Corps and Works Progress Administration built Red Rocks between 1936 and 1941—800 tons of quarried stone, 30,000 pounds of reinforced steel, five years of labor. Denver architect Burnham F. Hoyt designed it. Formally dedicated June 15, 1941. Scottish soprano Mary Garden declared she had "Never in any opera house the world over have I found more perfect acoustic properties." The Beatles played here in 1964. The venue sits 10 miles southwest of Denver between two 300-foot red sandstone monoliths. Naturally-occurring, acoustically perfect. Sunrise yoga happens on the venue steps. The amphitheater is free to visit during the day—hike the trails, run the stairs, sit where Stevie Nicks and Willie Nelson performed.',
          images: [
            {
              src: '/denver/hidden-gems/red-rocks.png',
              alt: 'Red Rocks Amphitheatre at sunset',
            },
          ],
          address: '18300 W Alameda Pkwy, Morrison, CO 80465',
          coordinates: { lat: 39.6654, lng: -105.2057 },
          hours: 'Park open daily 5am-11pm',
          price: 'Free during day; concerts vary',
          website: 'https://redrocksonline.com',
          tip: 'Sunrise yoga classes happen on the venue steps',
        },
        {
          id: 'iconic-2',
          type: 'iconic-spot',
          name: 'Union Station',
          category: 'Landmark',
          description: 'In 1912, the Denver Union Terminal Railway Company decided to demolish and rebuild the central portion to handle increasing passenger traffic. Denver architects Gove & Walsh designed the new building in Beaux-Arts style. Carved granite. Opened in 1914—ushering in Denver\'s golden age of rail travel. The building closed December 1, 2012 for a $500 million renovation. Reopened July 26, 2014, exactly one hundred years after the original opening. The derelict third and fourth floors became The Crawford Hotel—112 rooms, named after preservationist Dana Crawford. The 12,000-square-foot Great Hall serves as hotel lobby, public space, and train waiting room. Terminal Bar occupies the restored ticketing office off the Great Hall—signature cocktails, local craft beers, views of travelers and locals waiting for nothing in particular.',
          images: [
            {
              src: '/denver/hidden-gems/union-station.png',
              alt: 'Denver Union Station interior',
            },
          ],
          address: '1701 Wynkoop St, Denver, CO 80202',
          coordinates: { lat: 39.7529, lng: -105.0000 },
          hours: 'Building open 24 hours; businesses vary',
          price: 'Free to visit',
          website: 'https://unionstationindenver.com',
          tip: 'The Cooper Lounge upstairs is the classy option',
        },
        {
          id: 'iconic-ad-1',
          type: 'ad',
          size: 'banner',
        },
        {
          id: 'iconic-3',
          type: 'iconic-spot',
          name: 'Denver Art Museum',
          category: 'Museum',
          description: 'Studio Daniel Libeskind and Denver\'s Davis Partnership Architects designed the Frederic C. Hamilton Building. Opened October 7, 2006. Libeskind\'s first completed building in the United States. He said: "I was inspired by the light and geology of the Rockies, but most of all by the wide-open faces of the people of Denver." Construction took from July 2003 to March 2007. The building is 146,000 square feet, covered in 9,000 titanium panels that reflect Colorado sunshine. Design recalls the peaks of the Rockies and geometric rock crystals found in the foothills. Doubled the museum\'s size. Houses Modern and Contemporary Art, African Art, Oceanic Art, Western American art, special exhibitions. Frederic C. Hamilton bequeathed 22 Impressionist works in 2014—including a van Gogh, four Monets. The architecture is as much a draw as the collection. First Saturday each month is free for Colorado residents.',
          images: [
            {
              src: '/denver/hidden-gems/art-museum.png',
              alt: 'Denver Art Museum exterior',
            },
          ],
          address: '100 W 14th Ave Pkwy, Denver, CO 80204',
          coordinates: { lat: 39.7372, lng: -104.9893 },
          hours: 'Sun-Thu 10am-5pm, Fri-Sat 10am-8pm',
          price: '$15 adults; free for kids under 18',
          website: 'https://denverartmuseum.org',
          tip: 'First Saturday of each month is free for Colorado residents',
        },
        {
          id: 'iconic-4',
          type: 'iconic-spot',
          name: 'Meow Wolf Denver',
          category: 'Experience',
          description: 'Meow Wolf announced Denver plans in 2018. Three years of work. Budget around $60 million. Opened September 17, 2021—Meow Wolf\'s third permanent exhibition. The largest: 90,000 square feet across four stories. Features 79 artworks by 120 local Colorado artists and 200 in-house creatives. 51% identify as female, 20% identify as LGBTQ+, 38% are people of color. The story: Convergence Station is a transit hub operated by the Quantum Department of Transportation (QDOT). Four alien worlds collided in a rare cosmic event. When they converged, everyone\'s memories got jumbled. Now memories are currency. Visitors access C Street, Eemia, Numina, and the Ossuary through portals. Almost 80 unique installations and rooms. Interactive storytelling throughout. Tributes to Denver\'s history woven in. Part haunted house, part art museum, part acid trip. Set aside at least 3 hours. Go weekdays to avoid crowds.',
          images: [
            {
              src: '/denver/hidden-gems/meow-wolf.png',
              alt: 'Meow Wolf Denver installation room',
            },
          ],
          address: '1338 1st St, Denver, CO 80204',
          coordinates: { lat: 39.7411, lng: -105.0156 },
          hours: 'Wed-Mon 10am-10pm, closed Tues',
          price: '$45 adults',
          website: 'https://meowwolf.com/visit/denver',
          tip: 'Go on a weekday to avoid crowds',
        },
        {
          id: 'iconic-5',
          type: 'iconic-spot',
          name: 'Larimer Square',
          category: 'Neighborhood',
          description: 'William E. Larimer laid out this block in November 1858—Denver\'s oldest commercial corridor. During the Pike\'s Peak gold rush, the street hosted hotels, saloons, retail stores, professional offices. The buildings date from the 1870s to 1890s. By the 1950s-60s, Larimer Square was blighted, threatened by Denver Urban Renewal Authority demolition. In 1965, preservationist Dana Crawford saved the block between 14th and 15th Streets—turned late nineteenth-century buildings into a model of adaptive reuse. Became Denver\'s first historic district in 1971. Now: upscale restaurants, boutiques, string lights that have launched a thousand Instagram posts. The history is real even if the vibe is curated. Rioja for Spanish-influenced food, Tamayo for rooftop Mexican.',
          images: [
            {
              src: '/denver/hidden-gems/larimer-square.png',
              alt: 'Larimer Square string lights at night',
            },
          ],
          address: 'Larimer St between 14th and 15th, Denver, CO 80202',
          coordinates: { lat: 39.7475, lng: -104.9995 },
          hours: 'Businesses vary',
          price: 'Free to walk',
          website: 'https://larimersquare.com',
          tip: 'Rioja for Spanish-influenced food, Tamayo for rooftop Mexican',
        },
        {
          id: 'iconic-6',
          type: 'iconic-spot',
          name: 'Little Man Ice Cream',
          category: 'Sweets',
          description: 'Paul Tamburello opened Little Man Ice Cream on July 4, 2008 in a 28-foot-tall, 14,000-pound steel milk can. Inspired by "California Crazy"—a book documenting old roadside stores built as giant objects. The shop pays homage to Paul\'s father Peter, nicknamed "Little Man" due to his small stature. Paul is a former youth minister. Built the business on the belief that business exists to make a difference. The Scoop for Scoop Program donates a portion of every sale to charity. The replica 1950s-era milk can houses one of Denver\'s most beloved ice cream parlors. Unofficial capital of LoHi (Lower Highland). The line is long. The ice cream is good. Locals tolerate the wait.',
          images: [
            {
              src: '/denver/iconic/little-man.png',
              alt: 'Giant milk can shaped ice cream shop in Denver',
            },
          ],
          address: '2620 16th St, Denver, CO 80211',
          coordinates: { lat: 39.7592, lng: -105.0105 },
          hours: 'Daily 11am-11pm',
          price: '$',
          website: 'https://littlemanicecream.com',
          tip: 'The line is long, but they have a "Scoop for Scoop" program that donates a portion of every sale to charity.',
        },
      ],
    },
    {
      id: 'den-hidden-gems',
      type: 'section',
      title: 'Beyond the Pedestrian Mall',
      intro: 'Denver’s real soul isn’t found on the tourist drags; it’s hidden in Capitol Hill mansions, speakeasies behind pawn shops, and the secret tunnels that connect downtown to mysterious destinations.',
      items: [
        {
          id: 'gem-underground-2',
          type: 'hidden-gem',
          name: 'Colorado State Capitol Underground Tunnels',
          category: 'Underground',
          description: 'Beneath the Colorado State Capitol lies a network of tunnels that most Coloradans have no idea exists. The system connects nine buildings throughout the Capitol complex, running entire city blocks underground. You\'ll find old ore cart tracks from when the tunnels were used to transport coal, heavy vault doors once used by the state treasurer to move cash and gold certificates, and stretches of bare rock that feel more cave than corridor. The tunnels date to the Capitol\'s 1894 construction and were expanded over decades. During the Cold War, they were designated as fallout shelters. Today they\'re used by legislators and staff who prefer not to face Denver winters between buildings. Special tours occasionally open them to the public, usually during Doors Open Denver or by special legislative arrangement.',
          images: [
            {
              src: '/denver/hidden-gems/tunnels.png',
              alt: 'Colorado State Capitol underground tunnels',
            },
          ],
          address: '200 E Colfax Ave, Denver, CO 80203',
          coordinates: { lat: 39.7392, lng: -104.9847 },
          hours: 'Occasionally accessible on special tours',
          price: 'Special tour only',
          accessibility: 'Sealed - special tours occasionally',
          sources: [
            {
              title: 'Capitol Complex Tunnels',
              publisher: 'Colorado General Assembly',
              url: 'https://leg.colorado.gov/content/capitol-complex-tunnels',
            }
          ]
        },
        {
          id: 'gem-ad-1',
          type: 'ad',
          size: 'banner',
        },
        {
          id: 'gem-history-1',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 2,
          name: 'Cheesman Park - The Forgotten Graves',
          category: 'Historic Mystery',
          description: 'This 80-acre park is one of Denver\'s most popular green spaces: joggers circling the paths, couples picnicking on the lawns, yoga classes at sunset. It\'s also a mass grave. The land was Mount Prospect Cemetery from 1858 to 1890, filled with paupers, criminals, and smallpox victims. When the city decided to convert it to parkland, families got 90 days to claim their dead. Most went unclaimed. The city hired undertaker E.P. McGovern to relocate 5,000+ corpses at $1.90 each. McGovern found a shortcut: hack bodies apart, stuff them into child-sized coffins. The Denver Republican exposed "The Work Of Ghouls!" The city fired McGovern but never hired anyone else. An estimated 2,000-3,000 bodies remain beneath the grass. Construction crews still unearth bones regularly. Four well-preserved skeletons surfaced as recently as 2010. The Cheesman Park Pavilion, built in 1908, is said to be haunted. The park supposedly inspired elements of "Poltergeist." You\'ve probably picnicked on a corpse.',
          images: [
            {
              src: '/denver/hidden-gems/cheesman-1.png',
              alt: 'Cheesman Park Denver',
            },
            {
              src: '/denver/hidden-gems/cheesman-2.png',
              alt: 'Cheesman Park pavilion',
            },
          ],
          address: '1599 E 13th Ave, Denver, CO 80218',
          coordinates: { lat: 39.7339, lng: -104.9611 },
          hours: '5am-11pm daily',
          price: 'Free',
          sources: [
            {
              title: 'Cheesman Park\'s Past Life...as a Cemetery',
              publisher: 'Denver Public Library',
              url: 'https://history.denverlibrary.org/news/denver/cheesman-parks-past-lifeas-cemetery',
            },
          ],
          tip: 'Most park-goers have no idea they\'re walking over a cemetery',
        },
        {
          id: 'gem-history-2',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 6,
          name: 'Denver Tramway Powerhouse',
          category: 'Hidden History',
          description: 'At the turn of the 20th century, the Denver Tramway Company needed serious power to run its growing streetcar network. So between 1901 and 1904, they built a massive powerhouse on the banks of the South Platte River for $1 million. The building could generate 9,500 kilowatts of electricity, enough to run 160+ miles of streetcar lines that crisscrossed the city. The architecture was industrial cathedral: soaring ceilings, massive steel trusses, brick walls thick enough to contain the roar of the generators. Denver\'s streetcar system was one of the largest in the country, and this building was its beating heart. Then came the car. By 1950, ridership had collapsed. The last streetcar ran in 1950. The powerhouse sat abandoned for decades until REI bought the building in 2000 and turned it into their Denver flagship store. Most shoppers browsing camping gear have no idea they\'re standing where turbines once powered an entire transit system. Look up: the original steel trusses are still there, the brick walls are original, and if you know what you\'re looking for, you can spot where the massive generators once sat. It\'s adaptive reuse at its finest, and a monument to a Denver that ran on rails.',
          images: [
            {
              src: '/denver/hidden-gems/powerhouse-1.png',
              alt: 'Denver Tramway Powerhouse (now REI)',
            },
            {
              src: '/denver/hidden-gems/powerhouse-2.png',
              alt: 'Denver Tramway Powerhouse interior',
            },
          ],
          address: '1416 Platte St, Denver, CO 80202',
          coordinates: { lat: 39.7567, lng: -105.0092 },
          hours: 'REI store hours',
          price: 'Free to visit',
          website: 'https://www.rei.com/stores/denver-flagship.html',
          sources: [
            {
              title: 'The History of the REI Denver Flagship Building',
              publisher: 'REI',
              url: 'https://www.rei.com/blog/camp/the-history-of-the-rei-denver-flagship-building',
            }
          ],
          tip: 'Look for preserved original architecture inside REI',
        },
        {
          id: 'gem-museums-1',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 8,
          name: 'The National Wildlife Property Repository: Where confiscated weirdness goes to die',
          category: 'Unusual Museum',
          description: 'Ten miles from downtown Denver, hidden on a national wildlife refuge, sits a warehouse containing 1.3 million illegal wildlife products. This isn\'t your typical museum; it\'s the last stop for every piece of contraband seized at the border or from poachers. Think mounted tigers, rhino horns, vast collections of carved ivory, and the truly bizarre: zebra hoof lamps, elephant foot furniture, and bins overflowing with dried seahorse fetuses and bear gallbladders. It\'s a grotesque, fascinating, and deeply disturbing inventory of humanity\'s impact on the natural world, a global black market rendered inert. Most Denver residents have no idea this massive, macabre treasury of illegal taxidermy and poached goods even exists. It\'s a sobering, surreal experience—and a potent reminder of the cost of greed.',
          images: [
            {
              src: '/denver/hidden-gems/taxxidermy.png',
              alt: 'National Wildlife Property Repository specimens',
            },
            {
              src: '/denver/hidden-gems/taxidermy-2.png',
              alt: 'Wildlife specimens collection',
            },
            {
              src: '/denver/hidden-gems/taxidermy-3.png',
              alt: 'Confiscated illegal wildlife products display',
            },
          ],
          address: '6550 Gateway Rd, Commerce City, CO 80022',
          coordinates: { lat: 39.8133, lng: -104.8506 },
          hours: 'Field trips and educational programs only',
          price: 'Educational programs',
          accessibility: 'Limited - educational visits only',
          sources: [
            {
              title: 'National Wildlife Property Repository',
              publisher: 'U.S. Fish and Wildlife Service',
              url: 'https://www.fws.gov/program/national-wildlife-property-repository',
            }
          ]
        },
        {
          id: 'gem-museums-2',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 3,
          name: 'Hidden Elves at Denver Museum of Nature & Science',
          category: 'Secret Art',
          description: 'In the 1970s, artist Kent Pendleton was commissioned to paint the background murals for the museum\'s wildlife dioramas. Somewhere along the way, he started hiding tiny mythical creatures in his work: elves, gnomes, fairies tucked into forests and mountain scenes, only a few inches tall and masterfully camouflaged. The museum discovered them years later and decided to keep them. Now there are hidden creatures on every floor and in nearly every gallery. The official scavenger hunt sheet at the information desk lists nine, but longtime staffers say there are about double that. Kids go crazy for the hunt. Adults who grew up here remember searching for them as children. It\'s the kind of secret that makes a museum feel alive.',
          images: [
            {
              src: '/denver/hidden-gems/gnomes.png',
              alt: 'Denver Museum of Nature & Science',
            },
            {
              src: '/denver/hidden-gems/gnomes-2.png',
              alt: 'Hidden elves in museum dioramas',
            },
          ],
          address: '2001 Colorado Blvd, Denver, CO 80205',
          coordinates: { lat: 39.7476, lng: -104.9428 },
          hours: 'Daily 9am-5pm',
          price: 'Museum admission required',
          website: 'https://www.dmns.org',
          sources: [
            {
              title: 'The Hidden Elves of DMNS',
              publisher: '5280 Magazine',
              url: 'https://www.5280.com/how-to-find-the-hidden-elves-at-the-denver-museum-of-nature-science/',
            }
          ],
          tip: 'Ask for scavenger hunt sheet at information desk',
        },
        {
          id: 'gem-ad-2',
          type: 'ad',
          size: 'rectangle',
        },
        {
          id: 'gem-museums-3',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 4,
          name: 'Fifty-Two 80\'s - Saturday Morning Cartoon Museum',
          category: 'Niche Museum',
          description: 'A 900-square-foot shrine to Reagan-era childhood on South Broadway. Owner Derek Berry has crammed 6,000+ items into every corner: 303 types of nonsports trading cards, original Smurfs figurines, vintage Pepsi cans with Star Wars promotional art, Pac-Man cabinets, Care Bears, and more Teenage Mutant Ninja Turtles merchandise than you thought existed. The walls are floor-to-ceiling nostalgia. The real move is showing up Saturday morning when they play actual 80s cartoons on screens throughout the shop. Adults who grew up on Saturday morning cartoons and Fruit Loops find themselves transported. Kids discover what their parents were into. It\'s part museum, part shop, part time machine.',
          images: [
            {
              src: '/denver/hidden-gems/80s-1.png',
              alt: 'Fifty-Two 80\'s Saturday Morning Cartoon Museum interior with vintage toys',
            },
            {
              src: '/denver/hidden-gems/80s-2.png',
              alt: 'Vintage 80s collectibles and nostalgia items',
            },
          ],
          address: '52 S Broadway, Denver, CO 80209',
          coordinates: { lat: 39.7192, lng: -104.9878 },
          hours: 'Wed-Sun noon-6pm (4pm Sunday)',
          price: 'Free to browse',
          sources: [
            {
              title: 'Fifty-Two 80\'s',
              publisher: 'Westword',
              url: 'https://www.westword.com/location/fifty-two-80s-5162241',
            }
          ],
          tip: 'Visit Saturday mornings for the full cartoon experience',
        },
        {
          id: 'gem-museums-4',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 5,
          name: 'Clyfford Still Museum',
          category: 'Overshadowed Museum',
          description: 'Clyfford Still was one of the most important American painters of the 20th century, a founder of Abstract Expressionism alongside Rothko, Pollock, and de Kooning. He was also famously reclusive, refusing to sell most of his work and demanding it be kept together. When he died in 1980, his will specified his entire estate (3,125 works, 93% of his lifetime output) go to an American city willing to build a museum dedicated solely to his art. Denver won. The result is a purpose-built museum that houses more work by a single artist than any other in North America. The building itself is stunning: clean-lined, filled with natural light, with galleries that let the massive canvases breathe. It sits next to the Denver Art Museum, which has higher profile, flashier architecture, and bigger crowds. The Still Museum is quieter, more contemplative, and arguably more powerful. Westword named it "Best Museum If You Only Have an Hour" in 2025.',
          images: [
            {
              src: '/denver/hidden-gems/art-museum-1.png',
              alt: 'Clyfford Still Museum exterior and modern architecture',
            },
            {
              src: '/denver/hidden-gems/art-mueum-2.png',
              alt: 'Clyfford Still abstract expressionist artwork',
            },
            {
              src: '/denver/hidden-gems/art-museum-3.png',
              alt: 'Museum interior gallery space',
            },
          ],
          address: '1250 Bannock St, Denver, CO 80204',
          coordinates: { lat: 39.7361, lng: -104.9903 },
          hours: 'Tue-Sun 10am-5pm',
          price: '$10 adults',
          website: 'https://clyffordstillmuseum.org',
          sources: [
            {
              title: 'About the Clyfford Still Museum',
              publisher: 'Clyfford Still Museum',
              url: 'https://clyffordstillmuseum.org/about/',
            }
          ],
          tip: 'Perfect refuge if you need a quiet hour',
        },
        {
          id: 'gem-quirky-1',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 1,
          name: 'International Church of Cannabis',
          category: 'Psychedelic Art',
          description: 'In 2017, the same year recreational cannabis became legal in Colorado, a group called the Elevationists bought a 113-year-old Lutheran church in a quiet Denver neighborhood and did something unprecedented: they turned it into a legal place of worship where cannabis is the sacrament. The neighbors were not thrilled. But the real revelation is the interior. The Elevationists commissioned Spanish artist Okuda San Miguel to transform the sanctuary, and he covered every surface with his signature geometric psychedelia: rainbow-colored deities, anthropomorphic birds, ancestral eagles, eyes filled with night stars, all rendered in Day-Glo colors that vibrate even when you\'re sober. The stained glass windows are now kaleidoscopic explosions. The altar is a portal. The effect is somewhere between a fever dream and a cathedral. The church hosts "BEYOND," an hourly 38-minute immersive laser light show with surround sound that visitors describe as transcendent whether or not they partake in the sacrament. You don\'t have to consume cannabis to visit (and you can\'t buy it there), but you might leave questioning a few things regardless.',
          images: [
            {
              src: '/denver/hidden-gems/cannabis-church-1.png',
              alt: 'International Church of Cannabis psychedelic interior with geometric neon artwork',
            },
            {
              src: '/denver/hidden-gems/cannabis-church-2.png',
              alt: 'Colorful geometric patterns and murals inside the church',
            },
          ],
          address: '400 S Logan St, Denver, CO 80209',
          coordinates: { lat: 39.7161, lng: -104.9831 },
          hours: 'Services and events vary',
          price: 'Varies by event',
          website: 'https://www.elevationists.org',
          sources: [
            {
              title: 'Inside the International Church of Cannabis',
              publisher: 'Westword',
              url: 'https://www.westword.com/news/denvers-international-church-of-cannabis-opens-doors-8991211',
            }
          ],
          tip: 'Experience the psychedelic interior and laser show',
        },
        {
          id: 'gem-ad-3',
          type: 'ad',
          size: 'banner',
        },
        {
          id: 'gem-nature-1',
          type: 'hidden-gem',
          featured: true,
          featuredOrder: 7,
          name: 'Bluff Lake Nature Center',
          category: 'Hidden Nature',
          description: 'Northeast Denver has a 123-acre wildlife refuge that most residents have never heard of. Bluff Lake Nature Center sits along Sand Creek, a ribbon of wetlands, prairie, and cottonwood forest that feels impossibly far from the city despite being minutes from the airport. The land was a gravel quarry until the 1980s, then sat abandoned until a group of neighbors transformed it into an urban nature preserve. Now it\'s home to great blue herons, red-tailed hawks, muskrats, and over 200 species of birds documented on the property. The trails loop through wetlands and along the bluffs that give the place its name. On weekday mornings, you might be the only person there. It\'s the antidote to Washington Park crowds: no volleyball leagues, no lap swimmers, just prairie grass and birdsong. The nature center runs educational programs for local schools, but the trails are open to anyone willing to find them.',
          images: [
            {
              src: '/denver/hidden-gems/bluff-lake-1.png',
              alt: 'Bluff Lake Nature Center tranquil wetlands and walking paths',
            },
            {
              src: '/denver/hidden-gems/bluff-lake-2.png',
              alt: 'Wildlife and natural scenery at Bluff Lake',
            },
            {
              src: '/denver/hidden-gems/bluff-lake-3.png',
              alt: 'Peaceful lake views and surrounding nature',
            },
          ],
          address: '3400 Havana Way, Denver, CO 80239',
          coordinates: { lat: 39.7697, lng: -104.8714 },
          hours: 'Daily dawn-dusk',
          price: 'Free',
          website: 'https://blufflake.org',
          sources: [
            {
              title: 'Bluff Lake Nature Center History',
              publisher: 'Bluff Lake Nature Center',
              url: 'https://blufflake.org/about/history/',
            }
          ],
          tip: 'Alternative to Washington Park crowds',
        },
      ],
    },
    {
      id: 'den-best-bars',
      type: 'best-of',
      category: 'bars',
      title: 'Altitude Adjustment',
      intro: 'Denver drinks early and often, and the altitude makes everything hit harder—which is either a warning or an invitation depending on your tolerance for regret. The cocktail scene has evolved from "brewery patios with macro lagers" to something genuinely impressive: speakeasies hidden behind bookcases, legendary NYC cocktail bars opening their first-ever expansion, Art Deco time capsules that opened the day after Prohibition ended, and agave spirit bars named one of the best new cocktail destinations in America. You\'ll find 500-bottle back bars, hand-chipped ice for pre-Prohibition cocktails, neighborhood breweries that were here before RiNo became a real estate buzzword, and historic dive bars where Neal Cassady used to drink and ask friends to pay his tab. The drinking culture here operates with a distinctly Denver energy: serious craft without coastal pretension, historical preservation without museum vibes, and a patio culture that dominates six months of the year because nobody wants to be inside when it\'s 75° and sunny. From $3 pints to $33 cocktails (yes, really), these are the bars worth the altitude.',
      spots: [
        {
          name: 'Williams & Graham',
          neighborhood: 'LoHi',
          vibe: 'Hidden speakeasy behind a discreet bookstore facade in the Highlands, with 500+ spirits on the back bar.',
          order: 'Bespoke cocktails based on your preferences, or classic Manhattans. The bartenders are exceptionally skilled.',
          why: 'The secret entrance through the bookshop sets the mood—you literally walk through a bookcase like you\'re in a Nancy Drew novel—but the cocktails justify the theatrics and prevent it from being pure gimmick. With over 500 bottles behind the bar and 60+ classic cocktails plus original creations that change seasonally, Williams & Graham has been Denver\'s premier craft cocktail destination since 2011, which is basically ancient history in RiNo years. The bartenders are exceptionally skilled at reading your preferences and making something you didn\'t know you wanted, and the bespoke cocktail program means you can describe what you like and they\'ll craft something on the spot. Reservations are essential because it fills up quickly and the space is intentionally intimate (read: small), which is speakeasy-speak for "you\'re going to be very close to your neighbors."',
          address: '3160 Tejon St, Denver, CO 80211',
          coordinates: { lat: 39.7603, lng: -105.0131 },
          price: '$$$',
          hours: 'Daily 5pm-1am',
          website: 'https://williamsandgraham.com/',
          instagram: '@williamsandgraham',
          image: {
            src: '/denver/hidden-gems/speakeasy-2.png',
            alt: 'Williams & Graham intimate speakeasy bar with warm lighting and craft cocktails',
          },
        },
        {
          name: 'Death & Co Denver',
          neighborhood: 'RiNo',
          vibe: 'The first-ever expansion of the legendary NYC cocktail bar, housed in The Ramble Hotel lobby.',
          order: 'Cocktails from categories like "Fresh and Lively" or "Elegant and Timeless." Expect to pay up to $33 per drink, but they\'re worth it.',
          why: 'When one of the world\'s most famous and awarded cocktail bars opens its first-ever expansion outside of New York and chooses Denver, you pay attention—and also feel vindicated that Denver is finally getting the respect it deserves. Death & Co brought their meticulous attention to detail and craftsmanship from the East Village in 2018, and it immediately became one of Denver\'s most serious drinking destinations. The cocktails are expensive ($20-$33 per drink, yes you read that right) but worth it if you appreciate the craft: perfect dilution, balanced flavors, garnishes that aren\'t just decorative. The Garden rooftop functions as both a daytime cafe and evening bar, which is very Denver. The cocktails are helpfully categorized ("Fresh and Lively," "Elegant and Timeless," etc.) so you can find your style without having to decode a pretentious menu.',
          address: '1280 25th St, Denver, CO 80205',
          coordinates: { lat: 39.7553, lng: -104.9872 },
          price: '$$$',
          hours: 'Daily 5pm-12am',
          website: 'https://www.deathandcompany.com/',
          instagram: '@deathandcompany',
          image: {
            src: '',
            alt: 'Sophisticated cocktail bar interior with mood lighting',
          },
        },
        {
          name: 'Union Lodge No. 1',
          neighborhood: 'Downtown',
          vibe: 'Pre-Prohibition cocktail bar with hand-chipped ice, vintage glassware, and disciplined historical authenticity.',
          order: 'The Blue Blazer for drama (it involves fire), or classics like Sazerac, Vieux Carre, and Sherry Cobbler.',
          why: 'Everything predates Prohibition here — no Coke, no Pepsi, just 18 classic cocktails made exactly as they were in the late 19th century. The building itself was the original Oddfellows\' Lodge No. 1 from that era. For anyone interested in cocktail history, this is a pilgrimage.',
          address: '1543 Champa St, Denver, CO 80202',
          coordinates: { lat: 39.7469, lng: -104.9939 },
          price: '$$$',
          hours: 'Sun-Wed 5pm-11pm, Thu-Sat 5pm-1am',
          website: 'https://www.unionlodge1.com/',
          instagram: '@unionlodge1',
          image: {
            src: '',
            alt: 'Historic cocktail bar with vintage decor and classic drinks',
          },
        },
        {
          name: 'Ratio Beerworks',
          neighborhood: 'RiNo',
          vibe: 'The original RiNo brewery, with a massive patio and neighborhood loyalty that predates the gentrification.',
          order: 'Dear You French Saison if they have it. Their lagers are also excellent.',
          why: 'Ratio was here before RiNo became a real estate buzzword, and they\'ve maintained their neighborhood brewery identity despite the neighborhood changing around them. The big patio is perfect in summer, the beer is consistently solid, and the crowd is genuinely local.',
          address: '2920 Larimer St, Denver, CO 80205',
          coordinates: { lat: 39.7593, lng: -104.9798 },
          price: '$$',
          hours: 'Mon-Wed 12pm-11pm, Thu-Fri 12pm-12am, Sat 11am-12am, Sun 11am-11pm',
          website: 'https://ratiobeerworks.com/',
          instagram: '@ratiobeerworks',
          image: {
            src: '/denver/curiosities/breweries-1.png',
            alt: 'Ratio Beerworks craft brewery taproom with industrial RiNo decor',
          },
        },
        {
          name: 'Mezcaleria Alma',
          neighborhood: 'Highland',
          vibe: 'Lively agave spirits bar from the team behind Michelin-starred Alma Fonda Fina.',
          order: 'Agave spirits flights, thoughtful cocktails, and let the vintage Mexican records on the custom sound system set the mood.',
          why: 'Named one of the 5 best new cocktail bars in the U.S. in 2025, Mezcaleria sits next door to Johnny and Kasie Curiel\'s Michelin-starred restaurant. The focus on agave spirits is encyclopedic, the cocktails are innovative, and the atmosphere is genuinely fun. This is where Denver\'s cocktail scene is heading.',
          address: '2550 15th St, Denver, CO 80211',
          coordinates: { lat: 39.7597, lng: -105.0158 },
          price: '$$$',
          hours: 'Daily 4pm-12am',
          website: 'https://www.mezcaleriaalma.com/',
          instagram: '@mezcaleriaalma',
          image: {
            src: '',
            alt: 'Mezcal bar with agave spirits and warm lighting',
          },
        },
        {
          name: 'The Cruise Room',
          neighborhood: 'LoDo',
          vibe: 'Pure, unadulterated Art Deco perfection tucked inside the Oxford Hotel. It’s shaped like a wine bottle and modeled after a lounge on the Queen Mary.',
          order: 'A classic Martini. This is not the place for "innovative" infusions; drink what the ghosts are drinking.',
          why: 'Opened on December 6, 1933—the day after Prohibition was repealed—the Cruise Room has one of the best-preserved Art Deco interiors in the country, and walking in feels like stepping into a time machine that only goes to glamorous eras. Shaped like a wine bottle and modeled after a lounge on the Queen Mary, the space is pure unadulterated Art Deco perfection: pink neon glowing, chrome polished to a mirror finish, low-relief wall panels depicting "international toasts" that are genuinely beautiful and make you wish modern bars cared about details. It feels like a place where secrets are kept, schemes are hatched, and everyone looks good in the lighting. This is not the place for "innovative infusions" or craft cocktails with fifteen ingredients—drink a classic Martini and pretend you\'re in a film noir. It is the most cinematic drink in Denver, and that\'s saying something.',
          address: '1600 17th St, Denver, CO 80202',
          coordinates: { lat: 39.7516, lng: -104.9984 },
          price: '$$',
          hours: 'Daily 4pm-1am',
          website: 'https://TheCruiseRoom.com',
          instagram: '@thecruiseroom',
          images: [
            {
              src: '/denver/bars/denver-bars-cruise-1.png',
              alt: 'The Cruise Room Art Deco interior',
            },
            {
              src: '/denver/bars/denver-bars-cruise-2.png',
              alt: 'The Cruise Room Art Deco interior',
            },
            {
              src: '/denver/bars/denver-bars-cruise-3.png',
              alt: 'The Cruise Room Art Deco interior',
            },
            {
              src: '/denver/bars/denver-bars-cruise-4.png',
              alt: 'The Cruise Room Art Deco interior',
            },
            {
              src: '/denver/bars/cruise-room.png',
              alt: 'Pink neon Art Deco interior of The Cruise Room at the Oxford Hotel',
            },
          ],
        },
        {
          name: 'My Brother\'s Bar',
          neighborhood: 'LoDo/Highland',
          vibe: 'The oldest bar in Denver (operating since 1873) and famously Neal Cassady’s haunt. No TVs, no neon signs outside, just classical music and cheap, legendary burgers.',
          order: 'The JCB (Jalapeño Cream Cheese Burger) and a cheap pint. No questions.',
          why: 'There is a framed letter from Neal Cassady (the inspiration for Jack Kerouac\'s "On the Road") hanging on the wall where he asks a friend to pay his tab, which is peak Beat Generation energy and also peak deadbeat energy. Operating since 1873, My Brother\'s Bar is Denver\'s oldest bar and the antidote to the RiNo-ification of the city—no TVs, no neon signs outside, just classical music playing and cheap legendary burgers that will ruin other burgers for you. The JCB (Jalapeño Cream Cheese Burger) is a cult favorite that sounds like it shouldn\'t work but absolutely does. It looks and feels exactly as it has for decades: wood-paneled, dim-lit, and unpretentious in a way that can\'t be faked. It is the city\'s living room—if your living room was haunted by the ghosts of the Beat Generation, smelled faintly of beer and grilled onions, and served incredible $8 burgers. If this place ever closes, Denver loses a piece of its soul.',
          address: '2376 15th St, Denver, CO 80202',
          coordinates: { lat: 39.7578, lng: -105.0089 },
          price: '$',
          hours: 'Mon-Sat 11am-12am, closed Sun',
          website: 'https://mybrothersbar.com',
          instagram: '@mybrothersbardenver',
          images: [
            {
              src: '/denver/bars/denver-bars-mybro-1.png',
              alt: 'My Brother\'s Bar historic interior',
            },
            {
              src: '/denver/bars/denver-bars-mybro-2.png',
              alt: 'My Brother\'s Bar historic interior',
            },
            {
              src: '/denver/bars/denver-bars-mybro-3.png',
              alt: 'My Brother\'s Bar historic interior',
            },
            {
              src: '/denver/bars/brothers-bar.png',
              alt: 'Historic exterior of My Brother\'s Bar in Denver',
            },
          ],
        },
      ],
    },
    {
      id: 'den-best-restaurants',
      type: 'best-of',
      category: 'restaurants',
      title: 'High Country Tables',
      intro: 'The Denver food scene has matured from "brewery food and green chile on everything" to legitimate destination dining that even coastal food snobs grudgingly respect. MICHELIN arrived in 2024 and handed out stars like they were surprised to find this level of cooking at altitude. You\'ll find James Beard Award-winning Israeli cuisine in a converted warehouse, kung pao pastrami that honors Denver\'s forgotten Chinatown, two-Michelin-star omakase focused on foraged Colorado ingredients, and steakhouses with wine rooms the size of most apartments. The city\'s best restaurants operate with a distinctly Denver philosophy: serious food without the pretension, quality ingredients without the lecture, and menus that reflect Colorado\'s agricultural reality rather than whatever\'s trending on the coasts. From street tacos born in a food truck called "Pinche Tacos" (the liquor board made them change it) to $195 tasting menus that\'ll make you reconsider what "seasonal" means, this is eating at altitude done right.',
      spots: [
        {
          name: 'Safta',
          neighborhood: 'RiNo',
          vibe: 'Modern Israeli from a James Beard Award-winning chef, serving Colorado\'s best hummus in a stunning Source Hotel space.',
          order: 'Start with the legendary hummus and warm laffa bread, then the lamb shoulder and Turkish-style kebabs. The shakshuka for brunch is transformative.',
          why: 'Chef Alon Shaya\'s Denver outpost is legitimately world-class, which is the kind of thing people say lightly but in this case is actually true. Born in Israel, raised in Philadelphia, and a New Orleans icon before decamping to Denver, Shaya brings culinary influences from the Middle East, Europe, and North Africa to create a menu that somehow feels both familiar and revelatory. The hummus alone is worth the trip—silky, warm, impossibly smooth, and served with perfect laffa bread that you\'ll use to scrape every last molecule from the plate. It\'s the kind of hummus that ruins all future hummus, which is a gift and a curse. In 2024, Shaya opened Safta 1964 at Wynn Las Vegas, proving this Denver restaurant has become destination-worthy enough that Vegas came calling. The fact that world-class Israeli cuisine is happening in a converted RiNo warehouse is very Denver.',
          address: '3330 Brighton Blvd #201, Denver, CO 80216',
          coordinates: { lat: 39.7679, lng: -104.9749 },
          price: '$$$',
          hours: 'Mon-Fri 5pm-10pm, Sat-Sun 10:30am-2pm & 5pm-10pm',
          website: 'https://www.eatwithsafta.com/',
          instagram: '@eatwithsafta',
          images: [
            {
              src: '/denver/restaurants/safta-1.png',
              alt: 'Safta hummus and laffa bread',
            },
            {
              src: '/denver/restaurants/safta-2.png',
              alt: 'Safta Israeli mezze spread',
            },
            {
              src: '/denver/restaurants/safta-3.png',
              alt: 'Safta restaurant interior',
            },
            {
              src: '/denver/restaurants/safta-4.png',
              alt: 'Safta lamb shoulder',
            }
          ],
        },
        {
          name: 'Buckhorn Exchange',
          neighborhood: 'Lincoln Park',
          vibe: 'Denver\'s oldest restaurant (1893), where 575 taxidermied animals watch you eat game you probably shouldn\'t.',
          order: 'The rattlesnake appetizer is the requisite tourist move. The pot roast is the local one. If you\'re brave, there\'s yak, elk, and buffalo on the menu.',
          why: 'The Buckhorn Exchange isn\'t just Denver\'s oldest restaurant—it\'s Colorado liquor license #1, issued the day after Prohibition ended. The walls are a natural history museum of things that used to be alive: 575 taxidermied animals staring at you while you eat, including a two-headed calf and a jackalope. Buffalo Bill dined here. Teddy Roosevelt dined here. The mounted elk heads have watched over business deals, first dates, and tourists who came for the novelty and left converts to the pot roast. It\'s a time capsule of Old West nostalgia that somehow doesn\'t feel kitschy—maybe because it\'s been doing this since 1893, long before "Western theme" was a restaurant concept. The game menu (elk, quail, buffalo, alligator) treats exotic meat as a lifestyle choice, but the real regulars know the elk medallions and New York strip are where the kitchen shines.',
          address: '1000 Osage St, Denver, CO 80204',
          coordinates: { lat: 39.7286, lng: -105.0044 },
          price: '$$$',
          hours: 'Mon-Thu 5pm-9pm, Fri-Sat 5pm-10pm, Sun 5pm-9pm',
          website: 'https://www.buckhorn.com',
          images: [
            {
              src: '/denver/hidden-gems/steakhouse-1.png',
              alt: 'Buckhorn Exchange historic interior with extensive taxidermy collection',
            },
            {
              src: '/denver/hidden-gems/steakhouse-2.png',
              alt: 'More taxidermy displays and historic restaurant atmosphere',
            },
          ],
        },
        {
          name: 'Hop Alley',
          neighborhood: 'RiNo',
          vibe: 'Modern Chinese with punk rock attitude, honoring Denver\'s forgotten Chinatown with Sichuan-leaning dishes.',
          order: 'The kung pao pastrami is the signature—a genius Jewish-Chinese mashup. Dan dan noodles, mapo tofu, and whatever\'s on the rotating chef\'s counter menu.',
          why: 'Tommy Lee opened Hop Alley in 2015 when everyone else was doing farm-to-table earnestness, and it immediately became Denver\'s most exciting restaurant by refusing to play it safe. The name honors Denver\'s original Chinatown—burned down during anti-Chinese riots in the 1880s—which is the kind of historical reckoning most cities prefer to forget. The kung pao pastrami is a genius Jewish-Chinese mashup that shouldn\'t work but absolutely does, and has become the signature dish that food nerds travel for. Nearly a decade later, it\'s still essential: the 2024 addition of a six-seat chef\'s counter offers an eight-to-ten course journey through Asia that\'ll make you reconsider everything you thought you knew about Chinese food in America. Multiple MICHELIN Bib Gourmand awards, James Beard nominations, and 5280\'s #1 Restaurant in 2016—but the real endorsement is that it\'s always packed.',
          address: '3500 Larimer St, Denver, CO 80205',
          coordinates: { lat: 39.7634, lng: -104.9745 },
          price: '$$',
          hours: 'Mon-Sat 5pm-10pm, closed Sun',
          website: 'https://hopalleydenver.com/',
          instagram: '@hopalleydenver',
          images: [
            {
              src: '/denver/restaurants/hopalley-1.png',
              alt: 'Hop Alley kung pao pastrami',
            },
            {
              src: '/denver/restaurants/hopalley-2.png',
              alt: 'Hop Alley Sichuan dishes',
            },
            {
              src: '/denver/restaurants/hopalley-3.png',
              alt: 'Hop Alley restaurant interior',
            }
          ],
        },
        {
          name: 'Guard and Grace',
          neighborhood: 'Downtown',
          vibe: 'Chef Troy Guard\'s 9,000 square foot modern steakhouse with an oak-fired kitchen and floor-to-ceiling wine room.',
          order: 'Dry-aged ribeye is the move, but the seafood program is equally serious. Start with the beef tartare or tuna poke, and don\'t skip the sides.',
          why: 'This is Denver\'s serious steakhouse—voted best in the city repeatedly, which matters when you\'re competing with a state that takes beef very seriously. Located at the base of the 56-floor Brookfield Building in downtown, the space itself is stunning in that "expense account dinner" way: oak fire roaring in the open kitchen like a controlled inferno, a wine room that commands attention and probably costs more than your car, and one of Denver\'s largest patios for catching that mountain sunset while eating dry-aged ribeye. Chef Troy Guard has built an empire (TAG Restaurant Group with multiple concepts), but this remains his flagship for good reason—the beef is impeccable, the seafood program is equally serious, and the sides are actually worth ordering. Dress code leans "casual elegance," which means no athletic wear or printed tees (sorry, this is not a brewery).',
          address: '1801 California St, Denver, CO 80202',
          coordinates: { lat: 39.7478, lng: -104.9917 },
          price: '$$$$',
          tier: 'fine-dining',
          hours: 'Mon 4pm-10pm, Tue-Thu 11am-2pm & 4pm-10pm, Fri-Sat 4pm-11pm, Sun 4pm-10pm',
          website: 'https://www.guardandgrace.com/',
          instagram: '@guardandgracesteakhouse',
          images: [
            {
              src: '/denver/restaurants/guardgrace-1.png',
              alt: 'Guard and Grace dry-aged ribeye',
            },
            {
              src: '/denver/restaurants/guardgrace-2.png',
              alt: 'Guard and Grace restaurant interior',
            },
            {
              src: '/denver/restaurants/guardgrace-3.png',
              alt: 'Guard and Grace wine room',
            },
            {
              src: '/denver/restaurants/guardgrace-4.png',
              alt: 'Guard and Grace oak-fired kitchen',
            },
            {
              src: '/denver/restaurants/guardgrace-5.png',
              alt: 'Guard and Grace seafood',
            }
          ],
        },
        {
          name: 'The Wolf\'s Tailor',
          neighborhood: 'Sunnyside',
          vibe: 'Two Michelin stars and a Green Star. Omakase-style tasting menu celebrating Colorado\'s wild, foraged, and fermented.',
          order: 'There\'s no à la carte—only the seasonal tasting menu ($195). The wine pairing ($110) or zero-proof pairing ($65) are worth adding.',
          why: 'This is Denver\'s most ambitious restaurant. The innovative multi-course tasting experience revolves around two seasons: summer spotlights garden-fresh produce, winter features imaginative spins on grains and fermentation. Every dish is intentional—wild game, preservation techniques, house-milled grains, and produce from their own garden. The pasta courses are consistently transcendent. Note: they add a 22% fair labor fee instead of tips, so budget accordingly. Reserve 60 days out; they save some tables for walk-ins.',
          address: '4058 Tejon St, Denver, CO 80211',
          coordinates: { lat: 39.7720, lng: -105.0139 },
          price: '$$$$',
          tier: 'fine-dining',
          hours: 'Tue-Thu 5pm-8pm, Fri-Sun 5pm-8:30pm, closed Mon',
          website: 'https://www.thewolfstailor.com/',
          instagram: '@thewolfstailor',
          images: [
            {
              src: '/denver/restaurants/wolfs-1.png',
              alt: 'Wolf\'s Tailor tasting menu dish',
            },
            {
              src: '/denver/restaurants/wolfs-2.png',
              alt: 'Wolf\'s Tailor seasonal course',
            },
            {
              src: '/denver/restaurants/wolfs-3.png',
              alt: 'Wolf\'s Tailor pasta course',
            }
          ],
        },
        {
          name: 'Tacos Tequila Whiskey',
          neighborhood: 'Highlands',
          vibe: 'Award-winning street tacos with a serious agave spirits program, born from a food truck called Pinche Tacos.',
          order: 'Al pastor is the classic. The carnitas and brisket tacos are equally legitimate. Pair with a mezcal flight or one of their award-winning cocktails.',
          why: 'Started as a food truck in 2010 under the name "Pinche Tacos" until the state liquor board suggested they reconsider. The pivot worked—Bon Appetit named them one of the top 50 new restaurants in the nation. They believe in local products and authentic regional recipes, and each location curates a unique mezcal and sotol collection. The Highlands location is the original sit-down; there\'s also one at DIA if your flight allows.',
          address: '3300 West 32nd Ave, Denver, CO 80211',
          coordinates: { lat: 39.7583, lng: -105.0344 },
          price: '$$',
          hours: 'Mon-Thu 4pm-9pm, Fri-Sun 11am-9pm',
          website: 'https://www.tacostequilawhiskey.com/',
          instagram: '@ttw_denver',
          images: [
            {
              src: '/denver/restaurants/tacostequila-1.png',
              alt: 'Tacos Tequila Whiskey al pastor tacos',
            },
            {
              src: '/denver/restaurants/tacostequila-2.png',
              alt: 'Tacos Tequila Whiskey mezcal selection',
            },
            {
              src: '/denver/restaurants/tacostequila-3.png',
              alt: 'Tacos Tequila Whiskey restaurant',
            }
          ],
        },
      ],
    },
    {
      id: 'den-best-coffee-shops',
      type: 'best-of',
      category: 'coffee-shops',
      title: 'High-Altitude Extractions',
      intro: 'Denver was a specialty coffee city before craft beer took over its identity. Corvus started doing experimental processing in 2010. Huckleberry brought Scandinavian-style roasting to RiNo before RiNo was cool. The altitude actually matters—water boils at 202°F here instead of 212°F, which changes extraction entirely. The city\'s best roasters adjusted their techniques accordingly, and the result is a coffee scene with its own character: slightly brighter, more tea-like, distinct from what you\'d get in Seattle or Portland. The beer gets the press. The coffee is just as good.',
      spots: [
        {
          name: 'Corvus Coffee Roasters',
          neighborhood: 'Baker',
          vibe: 'One of Denver\'s specialty coffee pioneers since 2010. Laboratory-like space where they introduced many Denverites to cuppings and experimental processing.',
          order: 'Ask what\'s on rotation for pour-over. Their single-origins are why you came.',
          why: 'Founder Phil Goodlaxson was roasting specialty coffee in Denver before it was a thing. The Broadway café feels like a coffee lab — which it basically is. They host public cuppings and their experimental processing techniques have influenced the local scene. If you want to understand Denver\'s coffee evolution, start here.',
          address: '1740 S Broadway, Denver, CO 80210',
          coordinates: { lat: 39.6872, lng: -104.9879 },
          hours: '7am-5pm daily',
          price: '$$',
          website: 'https://www.corvuscoffee.com',
          instagram: '@corvuscoffee',
          image: {
            src: '',
            alt: 'Specialty coffee pour-over setup with precision equipment',
          },
        },
        {
          name: 'Little Owl Coffee',
          neighborhood: 'Downtown / Multiple',
          vibe: 'Small-batch, single-origin beans brewed with precision. Four downtown locations including the stunning new Populus Hotel.',
          order: 'Individual pour-over of whatever single-origin they\'re featuring. Each cup brewed specifically for you.',
          why: 'Little Owl treats every cup like it matters. Their four downtown locations make them accessible, but the quality never feels mass-produced. The Populus Hotel location is the newest and most architecturally stunning — a proper coffee experience in one of Denver\'s most innovative buildings.',
          address: '1555 Blake St #100, Denver, CO 80202',
          coordinates: { lat: 39.7497, lng: -104.9968 },
          hours: '7am-4pm daily',
          price: '$$',
          website: 'https://littleowlcoffee.com',
          instagram: '@littleowlcoffee',
          image: {
            src: '',
            alt: 'Precision pour-over coffee brewing',
          },
        },
        {
          name: 'Crema Coffee House',
          neighborhood: 'RiNo',
          vibe: 'The café that revolutionized Denver coffee expectations. Bright, minimalist space with multi-roaster offerings since 2009.',
          order: 'Rotate through their guest roasters via pour-over. The espresso drinks are equally dialed.',
          why: 'Before Crema opened in 2009, Denver didn\'t really have "specialty coffee" — just coffee. Their bright, minimalist RiNo space created a new template for what a Denver café could be. They were multi-roaster before it was cool, featuring guest roasters alongside their own. The space itself influenced a generation of coffee shops that followed.',
          address: '2862 Larimer St, Denver, CO 80205',
          coordinates: { lat: 39.7595, lng: -104.9789 },
          hours: '7am-6pm daily',
          price: '$$',
          website: 'https://cremacoffeehouse.net',
          instagram: '@cremacoffeehouse',
          image: {
            src: '',
            alt: 'Bright minimalist coffee shop with natural light and clean lines',
          },
        },
        {
          name: 'Sweet Bloom Coffee Roasters',
          neighborhood: 'Lakewood',
          vibe: 'Two-time US Brewers Cup champion founder. Scientifically approached roasting that accounts for Colorado\'s elevation.',
          order: 'Whatever they\'re brewing on the bar. Andy knows what he\'s doing.',
          why: 'Founder Andy Sprenger won the US Brewers Cup twice, and his approach to coffee is scientific. He\'s figured out how to adjust brewing parameters specifically for Colorado\'s high elevation — where water boils at a lower temperature and extraction behaves differently. The Lakewood café is worth the drive from downtown if you care about the craft.',
          address: '1619 Reed St, Lakewood, CO 80214',
          coordinates: { lat: 39.7265, lng: -105.0758 },
          hours: '7am-3pm daily',
          price: '$$',
          website: 'https://sweetbloomcoffee.com',
          instagram: '@sweetbloomcoffee',
          image: {
            src: '',
            alt: 'Scientific coffee roasting with precision equipment',
          },
        },
        {
          name: 'Jubilee Roasting',
          neighborhood: 'Aurora',
          vibe: 'One of Denver\'s best roasters, hidden in a warehouse converted to artist studios. Complex, balanced flavors from thoughtfully sourced beans.',
          order: 'Whatever single-origin they\'re excited about. Trust the roasters.',
          why: 'Technically in North Aurora, but claimed by Denver\'s coffee scene. The roasters here have a gift for bringing out complex, balanced flavors without over-roasting. Their cafe is buttressed by a warehouse converted into art studios for local creatives — the kind of place that rewards the drive. Less scene, more substance.',
          address: '6215 E 52nd Ave, Commerce City, CO 80022',
          coordinates: { lat: 39.7909, lng: -104.9318 },
          hours: '8am-2pm Wed-Sun',
          price: '$$',
          website: 'https://www.jubileeroasting.com',
          instagram: '@jubileeroasting',
          image: {
            src: '',
            alt: 'Artisan roastery with creative warehouse space',
          },
        },
        {
          name: 'Dandy Lion Coffee',
          neighborhood: 'Park Hill',
          vibe: 'Coffee shop meets plant shop. Perfect cortados, floral lavender lattes, and Kyoto-style slow-dripped iced coffee.',
          order: 'The lavender latte or a cortado. Don\'t leave without browsing the plants.',
          why: 'Co-owner Duc Huynh sources from local Huckleberry Roasters and executes beautifully. The Kyoto-style slow-dripped iced coffee is worth the wait. The plant shop integration isn\'t a gimmick — both the coffee and the greenery are taken seriously. A neighborhood gem tucked in Park Hill.',
          address: '4950 E Colfax Ave, Denver, CO 80220',
          coordinates: { lat: 39.7400, lng: -104.9230 },
          hours: '7am-4pm daily',
          price: '$$',
          website: 'https://www.dandylioncoffee.com/',
          instagram: '@dandylioncoffee',
          image: {
            src: '',
            alt: 'Cozy coffee shop filled with plants and natural light',
          },
        },
      ],
    },
    {
      id: 'denver-dark-history',
      type: 'section',
      title: 'Denver\'s Dark History',
      teaser: 'Massacre, murder, and the bodies beneath the parks',
      intro: 'Denver sells itself as sunshine and craft beer, but the Mile High City sits atop a foundation of massacre, racial violence, and unsolved murder. From bodies left beneath public parks to a demonic horse that killed its creator, Denver\'s dark side is woven into the very geography—hidden in plain sight, just one layer below the Instagram-friendly surface.',
      items: [
        {
          id: 'den-dark-3',
          type: 'dark-history',
          featured: true,
          featuredOrder: 1,
          category: 'macabre',
          year: '1893',
          title: 'The Bodies Beneath Cheesman Park',
          body: 'Cheesman Park is one of Denver\'s most beloved green spaces—80 acres of manicured lawns where joggers run and couples picnic. It\'s also a mass grave. The land was Mount Prospect Cemetery from 1858 to 1890, filled with paupers, criminals, and smallpox victims. When the city decided to convert it to a park, families got 90 days to claim their dead. Most went unclaimed. The city hired undertaker E.P. McGovern to relocate 5,000+ corpses at $1.90 each. McGovern found a shortcut: hack bodies apart, stuff them into child-sized coffins, sometimes using three caskets for one adult. When the Denver Republican exposed "The Work Of Ghouls!" the city fired McGovern—but never hired anyone else. To this day, an estimated 2,000-3,000 bodies remain beneath the park. Construction crews still unearth bones regularly. Four well-preserved skeletons surfaced as recently as 2010. You\'ve probably picnicked on a corpse.',
          verdict: 'Bodies still found during construction. Inspired elements of "Poltergeist." You\'re welcome.',
          image: {
            src: '/denver/dark-history/cheesman.png',
            alt: 'Historic photograph of Cheesman Park pavilion and grounds, built atop Denver cemetery',
          },
          location: {
            name: 'Cheesman Park, Capitol Hill',
      url: 'https://www.google.com/maps/search/?api=1&query=Cheesman%20Park%2C%20Capitol%20Hill%20Denver',
            stillExists: true,
          },
          sources: [
            {
              type: 'article',
              title: 'Cheesman Park\'s Past Life as a Cemetery',
              publisher: 'Denver Public Library',
              url: 'https://history.denverlibrary.org/news/denver/cheesman-parks-past-lifeas-cemetery',
            },
            {
              type: 'article',
              title: 'The macabre history of Denver\'s Cheesman Park',
              publisher: 'CNN',
              url: 'https://www.cnn.com/travel/article/cheesman-park-denver-cemetery/index.html',
            },
            {
              type: 'article',
              title: 'Cheesman Park',
              publisher: 'Atlas Obscura',
              url: 'https://www.atlasobscura.com/places/cheesman-park',
            },
            {
              type: 'book',
              title: 'The Graveyard Book: Stories of Cheesman Park',
              author: 'Todd Matthews',
              isbn: '9781634990714',
              url: 'https://www.amazon.com/Graveyard-Book-Stories-Cheesman-Park/dp/1634990714',
            },
          ],
        },
        {
          id: 'den-dark-1',
          type: 'dark-history',
          featured: true,
          featuredOrder: 2,
          category: 'disaster',
                    title: 'The Sand Creek Massacre',
          body: 'On November 29, 1864, Colonel John Chivington led 675 Colorado militia against a peaceful Cheyenne and Arapaho village at Sand Creek. Chief Black Kettle flew both an American flag and a white flag of surrender above his lodge. It didn\'t matter. The soldiers killed at least 230 people—mostly women, children, and the elderly—then mutilated the bodies and paraded trophies through Denver streets to cheering crowds. A Congressional investigation later condemned it as a "foul and dastardly massacre," but Chivington was never prosecuted. He testified before Congress wearing the same bloodstained uniform. The violence at Sand Creek triggered decades of warfare across the Great Plains and shattered any remaining trust between indigenous peoples and the federal government. Denver celebrated it as a victory.',
          verdict: 'The deadliest day in Colorado history. A National Historic Site now marks where it happened.',
          images: [
            {
              src: '/denver/dark-history/massacre-1.png',
              alt: 'Sand Creek Massacre National Historic Site memorial with prairie landscape',
            },
            {
              src: '/denver/dark-history/massacre-2.png',
              alt: 'Sand Creek Massacre historical marker',
            },
          ],
          location: {
            name: 'Sand Creek, 170 miles southeast of Denver',
      url: 'https://www.google.com/maps/search/?api=1&query=Sand%20Creek%2C%20170%20miles%20southeast%20of%20Denver%20Denver',
            stillExists: true,
          },
          sources: [
            {
              type: 'article',
              title: 'Sand Creek Massacre National Historic Site',
              publisher: 'National Park Service',
              url: 'https://www.nps.gov/sand/index.htm',
            },
            {
              type: 'documentary',
              title: 'The Sand Creek Massacre',
              platform: 'PBS',
              url: 'https://www.pbs.org/wgbh/americanexperience/films/massacre/',
            },
            {
              type: 'book',
              title: 'The Sand Creek Massacre',
              author: 'Ari Kelman',
              isbn: '9780674023499',
              url: 'https://www.amazon.com/Sand-Creek-Massacre-Ari-Kelman/dp/0674023498',
            },
            {
              type: 'article',
              title: 'Sand Creek Massacre',
              publisher: 'History Colorado',
              url: 'https://www.historycolorado.org/sand-creek-massacre',
            },
          ],
        },
        {
          id: 'den-dark-ad-1',
          type: 'ad',
          size: 'banner',
        },
        {
          id: 'den-dark-7',
          type: 'dark-history',
          featured: true,
          featuredOrder: 5,
          category: 'unsolved',
                    title: 'The Lumber Baron Inn Murders',
          body: 'By 1970, the grand 1890 mansion that lumber baron John Mouat built had decayed into a 23-unit rooming house for the desperate. On October 11, 1970, 16-year-old runaway Cara Lee Knoche celebrated her 17th birthday at her parents\' house and announced she\'d return to high school. Two days later, she was found strangled under her bed at the rooming house. Her friend Marianne Weaver, 18, walked in at the worst moment—she witnessed the rape and murder, then was shot herself. The killer was never found. Today the building has been restored as the Lumber Baron Inn, a bed-and-breakfast that leans hard into its haunted reputation. Guests report gentle knocking, apparitions, and whispers. Netflix\'s "28 Days Haunted" featured the inn. The case remains open after 50+ years.',
          verdict: 'Still unsolved. Now a haunted B&B. Sleep well.',
          images: [
            {
              src: '/denver/dark-history/baron-inn.png',
              alt: 'Historic Victorian mansion in Denver, now the Lumber Baron Inn, site of unsolved 1970 murders',
            },
            {
              src: '/denver/dark-history/baron-inn-2.png',
              alt: 'Lumber Baron Inn exterior view',
            },
          ],
          location: {
            name: 'Lumber Baron Inn, 2555 W 37th Ave',
      url: 'https://www.google.com/maps/search/?api=1&query=Lumber%20Baron%20Inn%2C%202555%20W%2037th%20Ave%20Denver',
            stillExists: true,
          },
          sources: [
            {
              title: 'The Lumber Baron Inn',
              publisher: 'Denver Public Art & History',
              url: 'https://www.lumberbaron.com/history',
            },
          ],
        },
        {
          id: 'den-dark-13',
          type: 'dark-history',
          featured: true,
          featuredOrder: 3,
          category: 'crime',
                    title: 'Alferd Packer: The Colorado Cannibal',
          body: 'In November 1873, prospector Alferd Packer left Utah leading 21 men toward the Breckenridge gold fields. By February 1874, Packer stumbled out of the mountains alone—with a pocket full of cash, the other men\'s belongings, and a story that kept changing. First he said the men had died and he\'d eaten them to survive. Then he blamed Shannon Bell for killing everyone before Packer shot him in self-defense. Five hatchet-marked bodies were eventually found. Packer escaped jail and spent eight years on the run before being captured. He was sentenced to death (later reduced to 40 years) and became a morbid celebrity. The Denver Post championed his innocence, and after his 1901 parole, he worked as a guard at the Post. He died peacefully in Littleton in 1907. The truth died with him.',
          verdict: 'Convicted cannibal who became a Denver celebrity. University of Colorado named a cafeteria after him.',
          image: {
            src: '/denver/dark-history/cannibal.png',
            alt: 'Historic photograph of Colorado Rocky Mountains where Alferd Packer cannibalism occurred',
          },
          location: {
            name: 'Trial in Lake City; buried in Littleton Cemetery',
      url: 'https://www.google.com/maps/search/?api=1&query=Trial%20in%20Lake%20City%3B%20buried%20in%20Littleton%20Cemetery%20Denver',
            stillExists: true,
          },
          sources: [
            {
              title: 'Alferd Packer: The Truth is Out There',
              publisher: 'Denver Public Library',
              url: 'https://www.historycolorado.org/story/western-history/2017/08/31/alferd-packer-man-eater',
            },
            {
              type: 'article',
              title: 'Flesh for Fantasy: The Story of Alferd Packer',
              publisher: 'History Colorado',
              url: 'https://www.historycolorado.org/lost-highways/2022/01/04/flesh-fantasy',
            },
            {
              type: 'book',
              title: 'Man-Eater: The Life and Legend of an American Cannibal',
              author: 'Harold Schechter',
              isbn: '9780061098840',
              url: 'https://www.amazon.com/Man-Eater-Legend-American-Cannibal/dp/0061098841',
            },
            {
              type: 'documentary',
              title: 'Cannibal! The Musical',
              director: 'Trey Parker',
              year: '1993',
              url: 'https://www.imdb.com/title/tt0115819/',
            },
            {
              type: 'podcast',
              title: 'Alferd Packer: The Colorado Cannibal',
              show: 'True Crime Garage',
              platform: 'Spotify',
              url: 'https://open.spotify.com/episode/alferd-packer',
            },
          ],
        },
        {
          id: 'den-dark-2',
          type: 'dark-history',
          featured: true,
          featuredOrder: 8,
          category: 'disaster',
          articleSlug: 'hop-alley',
          title: 'The Hop Alley Riot',
          body: 'On Halloween night 1880, a pool game argument at John Asmussen\'s saloon on Wazee Street became the pretext for Denver\'s first race riot. A mob of 3,000 descended on Hop Alley—the Chinese neighborhood near present-day Coors Field—beating residents and destroying every business. Look Young, a 28-year-old who had lived in Denver for just six months, was dragged from Sing Lee\'s laundry, had his queue cut off, was beaten and tortured, then hanged from a lamppost. He died of his injuries. The rioters caused $53,655 in damage (over $1.5 million today). No one was ever convicted. The Chinese consul\'s request for reparations was denied. Chinatown never recovered. In 2022—142 years later—Denver formally apologized. The site is now a parking lot near the ballpark.',
          verdict: 'One dead. Entire neighborhood destroyed. City apologized 142 years later. Now it\'s parking.',
          image: {
            src: '/denver/dark-history/hop-alley.png',
            alt: 'Historic Denver street scene from the era of Chinatown and Hop Alley',
          },
          location: {
            name: 'Hop Alley (Former Site)',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: false,
          },
          sources: [
            {
              title: 'On Halloween Nearly 150 Years Ago, An Anti-Chinese Riot Broke Out In Denver',
              publisher: 'Colorado Public Radio',
              url: 'https://www.cpr.org/2019/09/02/on-halloween-nearly-150-years-ago-an-anti-chinese-riot-broke-out-in-denver/',
            },
            {
              title: 'Denver apologizes for 1880 anti-Chinese riot',
              publisher: 'Denver Post',
              url: 'https://www.denverpost.com/2022/10/31/denver-apologizes-anti-chinese-riot-1880/',
            },
          ],
        },
        {
          id: 'den-dark-ad-2',
          type: 'ad',
          size: 'rectangle',
        },
        {
          id: 'den-dark-8',
          type: 'dark-history',
          featured: true,
          featuredOrder: 7,
          category: 'unsolved',
          title: 'The Father\'s Day Bank Massacre',
          body: 'On Sunday, June 16, 1991, a man posing as a bank vice president entered the United Bank Tower downtown. Over the next hour, he executed four unarmed security guards—Phillip Mankoff, Scott McCarthy, William McCullum Jr., and Todd Wilson—then stole $200,000 from the vault. The killer was meticulous: he collected all 18 shell casings, wiped away fingerprints, and took the surveillance tapes. Seventeen of his eighteen shots hit their targets, suggesting professional training. Three weeks later, police arrested retired Denver police sergeant James King, who had worked as a guard at the bank and had substantial debt. The nationally televised trial ended in acquittal after nine days of jury deliberation. King died of dementia in 2023 at 77. The money was never found. No one else was ever charged. Colorado\'s largest mass killing before Columbine.',
          verdict: 'Four guards executed. Prime suspect acquitted. Cold case. No justice.',
          image: {
            src: '/denver/dark-history/bank-massacre.png',
            alt: 'Downtown Denver high-rise building, former United Bank Tower where 1991 massacre occurred',
          },
          location: {
            name: 'Wells Fargo Center (Former United Bank Tower)',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true,
          },
          sources: [
            {
              title: 'Denver United Bank murders: 30-year anniversary',
              publisher: '9NEWS',
              url: 'https://www.9news.com/article/news/investigations/denver-united-bank-murders-30-year-anniversary/73-188dabda-7411-4420-a1a5-f90d5b15959a',
            },
            {
              title: 'Father\'s Day Bank Massacre',
              publisher: 'Denver Post',
              url: 'https://www.denverpost.com/2021/06/16/fathers-day-bank-massacre-denver/',
            },
          ],
        },
        {
          id: 'den-dark-4',
          type: 'dark-history',
          featured: true,
          featuredOrder: 9,
          category: 'crime',
          title: 'Murder at the Brown Palace',
          body: 'The Brown Palace Hotel opened in 1892 and quickly became Denver\'s grandest address—every president since Teddy Roosevelt has stayed there. On May 24, 1911, it became the scene of high-society murder. Frank Henwood shot Sylvester "Tony" von Phul three times in the Marble Bar, killing him and accidentally killing bystander George Copeland. The trigger: socialite Isabel Springer, who lived at the hotel with her millionaire husband while carrying on affairs with both men. Von Phul had been blackmailing her with love letters; Henwood intervened. The scandal dominated Denver newspapers for months. Henwood became a celebrity in jail, receiving flowers from admirers and dining on specially prepared meals in "Millionaire\'s Row." He was eventually convicted, but the trial revealed the rot beneath Denver\'s gilded surface. The bar where it happened is still open.',
          verdict: 'High society murder in Denver\'s fanciest hotel. The bar is now Ship Tavern.',
          image: {
            src: '/denver/dark-history/brown-palace.png',
            alt: 'Historic interior of the Brown Palace Hotel in Denver, site of the 1911 murder',
          },
          location: {
            name: 'Brown Palace Hotel',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true,
          },
          sources: [
            {
              title: 'Murder at the Brown Palace',
              publisher: '5280 Magazine',
              url: 'https://www.5280.com/2011/05/murder-at-the-brown-palace/',
            },
          ],
        },
        {
          id: 'den-dark-5',
          type: 'dark-history',
          featured: true,
          featuredOrder: 11,
          category: 'disaster',
          title: 'The Ludlow Massacre',
          body: 'On April 20, 1914, Colorado National Guard soldiers and private guards from John D. Rockefeller\'s Colorado Fuel and Iron Company attacked a tent colony of striking miners and their families in Ludlow, 180 miles south of Denver. The miners had been on strike since September 1913, evicted from company towns and living in UMWA-provided tents. That day, soldiers soaked the tents in kerosene and set them ablaze. Eleven children and two women were found burned and suffocated in a cellar they\'d dug to escape the gunfire. In total, approximately 21 people died. The massacre triggered a ten-day armed uprising across a 225-mile front. Five thousand people demonstrated on the State Capitol lawn demanding the guardsmen be tried for murder. The Rocky Mountain News coined the term "Ludlow Massacre." No soldiers were ever convicted. Rockefeller\'s money paid no price.',
          verdict: 'Called "the deadliest strike in U.S. history." Monument stands at the site. Justice never came.',
          image: {
            src: '/denver/dark-history/ludlow.png',
            alt: 'Historic winter landscape of Colorado mining country where Ludlow Massacre occurred',
          },
          location: {
            name: 'Ludlow Massacre Memorial',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true,
          },
          sources: [
            {
              title: 'The Ludlow Massacre',
              publisher: 'History Colorado',
              url: 'https://www.historycolorado.org/ludlow-massacre',
            },
            {
              title: 'Ludlow Massacre Site',
              publisher: 'National Park Service',
              url: 'https://www.nps.gov/places/ludlow-massacre-site.htm',
            },
          ],
        },
        {
          id: 'den-dark-6',
          type: 'dark-history',
          featured: true,
          featuredOrder: 10,
          category: 'crime',
          title: 'The Denver Mint Heist',
          body: 'At 10:30 a.m. on December 18, 1922, a Federal Reserve truck was loading $200,000 in $5 bills outside the U.S. Mint on West Colfax Avenue when a black Buick touring car pulled up. Two men jumped out firing sawed-off shotguns while a third grabbed the money bags. Federal Reserve guard Charles T. Linton was killed—the only Fed guard ever to die in a bank robbery. Fifty Mint Police inside the building returned fire, hitting one robber in the jaw. The gang escaped in 90 seconds. An abandoned garage on Gilpin Street later yielded the getaway car and the body of Nicholas Trainor, killed by his own crew. The case remained unsolved for 12 years until police identified five suspects—all had since been killed in separate incidents. No one was ever charged. The money was never fully recovered. The first successful U.S. Mint robbery in history.',
          verdict: 'One guard dead. First successful U.S. Mint robbery. No one ever charged.',
          image: {
            src: '/denver/dark-history/denver-mint.png',
            alt: 'Historic photograph of the Denver Mint building where the 1922 heist occurred',
          },
          location: {
            name: 'U.S. Mint Denver',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true,
          },
          sources: [
            {
              title: 'The Denver Mint Robbery',
              publisher: 'Denver Post',
              url: 'https://www.denverpost.com/2013/12/15/the-denver-mint-robbery/',
            },
            {
              title: '1922 Denver Mint Robbery',
              publisher: 'History Colorado',
              url: 'https://www.historycolorado.org/denver-mint-robbery',
            },
          ],
        },
        {
          id: 'den-dark-11',
          type: 'dark-history',
          featured: true,
          featuredOrder: 6,
          category: 'haunting',
          title: 'The Patterson Inn: Where Dogs Jumped to Their Deaths',
          body: 'The Croke-Patterson-Campbell Mansion was built in 1891 by Thomas Croke. He lived there for six months, then sold it for reasons he never explained—his mother had died there shortly after his wife. By the 1970s it was an office building that couldn\'t keep tenants: typewriters typed by themselves at night, party noises came from empty closets, babies cried from the third floor. During 1970s renovations, construction crews grew so frustrated with arriving to find their work undone that they brought in guard dogs. The next morning, both Dobermans were found dead on the sidewalk—they had apparently leapt from a third-floor window. The mansion is now a bed-and-breakfast called the Patterson Inn. Guests still report phantom dog barks from the upper floors. The dogs chose death over staying another night.',
          verdict: 'The dogs are documented. They jumped. Now it\'s a boutique hotel.',
          image: {
            src: '/denver/dark-history/dogs-inn.png',
            alt: 'Historic Patterson Inn mansion in Denver, site of paranormal activity and mysterious dog deaths',
          },
          location: {
            name: 'Patterson Inn',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true,
          },
          sources: [
            {
              title: 'The Haunted History of Patterson Inn',
              publisher: 'Westword',
              url: 'https://www.westword.com/news/the-haunted-history-of-patterson-inn-5836822',
            },
            {
              title: 'Patterson Inn History',
              publisher: 'Patterson Inn',
              url: 'https://www.pattersoninn.com/history',
            }
          ],
        },
        {
          id: 'den-dark-12',
          type: 'dark-history',
          featured: true,
          featuredOrder: 12,
          category: 'mystery',
          title: 'Riverdale Road: Colorado\'s Gates of Hell',
          body: 'An 11-mile stretch between Thornton and Brighton has collected more paranormal legends than any road in Colorado. The "Gates of Hell" refer to iron gates marking where the Wolpert Mansion once stood—according to legend, a man burned it down with his family inside after becoming possessed. (The mansion was real; the fire happened in the 1970s when it was already abandoned.) Jogger\'s Hill near 120th Avenue is haunted by a phantom runner killed in a hit-and-run—locals say if you let him approach your driver\'s side window, you\'ll die. Drivers report a spectral Camaro that challenges them to race. An old dairy supposedly has a tree where accused witches were hanged. Warning signs have allegedly appeared reading "Hitchhikers May Be Demons." Ghost hunters report cold spots, strange feelings, and equipment malfunctions. Drive it if you dare.',
          verdict: 'Multiple documented legends. Phantom runner. Demon hitchhikers. Your move.',
          image: {
            src: '/denver/dark-history/haunted-road.png',
            alt: 'Rural Colorado road landscape near Denver, representing Riverdale Road area',
          },
          location: {
            name: 'Riverdale Road',
            url: 'https://maps.app.goo.gl/9Zp7q4WvjA9h8wP6A',
            stillExists: true,
          },
          sources: [
            {
              title: 'Is Riverdale Road Haunted?',
              publisher: '9NEWS',
              url: 'https://www.9news.com/article/life/holidays/halloween/riverdale-road-thornton-brighton/73-2619a367-b69a-483e-aa45-3f590eeec24a',
            },
            {
              title: 'Colorado\'s Most Haunted Road',
              publisher: 'Denver Gazette',
              url: 'https://denvergazette.com/outtherecolorado/adventures/colorados-most-haunted-road-known-for-gates-of-hell-and-twisted-past/article_9dd294ce-9bfb-4085-8c63-1d23f71fc4f1.html',
            },
          ],
        },
        {
          id: 'den-dark-10',
          type: 'dark-history',
          featured: true,
          featuredOrder: 4,
          category: 'mystery',
          year: 'Ongoing',
          title: 'DIA: The Airport of Conspiracies',
          body: 'Denver International Airport opened in 1995, $2 billion over budget and 16 months late. The delays were blamed on the failed automated baggage system—or, depending on who you ask, construction of secret underground bunkers for the global elite. The Masonic dedication capstone dated March 19, 1994 mentions the "New World Airport Commission." The murals by Leo Tanguma depict soldiers in gas masks, burning forests, and dead children. The gargoyles in baggage claim emerge from actual suitcases. There are at least six underground levels. The airport sits on 53 square miles—twice the size of Manhattan—with runways arranged in a shape some call a swastika. All of this is true. What\'s not confirmed: Illuminati headquarters, lizard people, apocalypse bunkers, or tunnels connecting to NORAD. The airport leans in, posting signs during construction: "Apologies for the noise. It takes really big drills to get to the underworld."',
          verdict: 'The airport officially embraces the theories. They sell conspiracy merchandise. Make of that what you will.',
          images: [
            {
              src: '/denver/dark-history/dia-1.png',
              alt: 'Denver International Airport distinctive tent-like terminal structure',
            },
            {
              src: '/denver/dark-history/dia-2.png',
              alt: 'DIA terminal interior view',
            },
          ],
          location: {
            name: 'Denver International Airport',
      url: 'https://www.google.com/maps/search/?api=1&query=Denver%20International%20Airport%20Denver',
            stillExists: true,
          },
          sources: [
            {
              type: 'article',
              title: 'Conspiracy Theories Uncovered',
              publisher: 'Denver International Airport',
              url: 'https://www.flydenver.com/art-exhibits/conspiracy-theories-uncovered/',
            },
            {
              type: 'documentary',
              title: 'Secrets of the Denver Airport',
              platform: 'Travel Channel',
              year: '2020',
              url: 'https://www.travelchannel.com/shows/mysteries-at-the-museum/episodes/denver-airport-conspiracies',
            },
            {
              type: 'article',
              title: 'The wild conspiracy theories behind Denver\'s airport',
              publisher: 'Denver Post',
              url: 'https://www.denverpost.com/2016/10/31/denver-airport-construction-conspiracy-humor/',
            },
            {
              type: 'podcast',
              title: 'Denver International Airport Conspiracy Theories',
              show: 'Conspiracy Theories Podcast',
              platform: 'Spotify',
              url: 'https://open.spotify.com/episode/DIA-conspiracies',
            },
          ],
        },
        {
          id: 'den-dark-14',
          type: 'dark-history',
          featured: true,
          featuredOrder: 13,
          category: 'crime',
          year: '1980s-2000',
          title: 'The Internet\'s First Serial Killer Operated from Capitol Hill',
          body: 'Before the dark web, there was John Edward Robinson: a seemingly respectable married businessman and self-styled philanthropist who became America\'s first known serial killer to use the nascent internet. From the late 1980s through the 1990s, Robinson trolled early chat rooms and online forums, luring women with promises of jobs, housing, and relationships. He often met his victims at Denver\'s historic Colburn Hotel on Capitol Hill, a mundane backdrop for his horrific plans.\n\nHe didn\'t just kill; he processed. At least eight women are confirmed dead, their bodies found dismembered and stuffed into barrels on his Kansas farm and in a self-storage unit. Investigators suspect many more. He would forge letters from victims to families, convincing them their loved ones were alive and well. He collected their Social Security checks for years.\n\nThe Colburn is now apartments, and real estate agents are not required to disclose that one of America\'s most prolific online predators once operated from its rooms. The digital age began with a dark, chilling premonition.',
          verdict: 'Robinson was convicted of three murders and sentenced to death in Kansas. He remains on death row. True victim count unknown.',
          sources: [
            {
              type: 'book',
              title: 'Internet Slavemaster: The True Story of John Robinson',
              author: 'John Glatt',
              year: '2002',
            },
            {
              type: 'article',
              title: 'John Edward Robinson',
              publisher: 'Wikipedia',
              url: 'https://en.wikipedia.org/wiki/John_Edward_Robinson',
            },
            {
              type: 'documentary',
              title: 'The Slavemaster',
              platform: 'Investigation Discovery',
              year: '2016',
            }
          ],
          location: {
            name: 'Colburn Hotel (now apartments), Capitol Hill',
      url: 'https://www.google.com/maps/search/?api=1&query=Colburn%20Hotel%20(now%20apartments)%2C%20Capitol%20Hill%20Denver',
            coordinates: { lat: 39.7362, lng: -104.9786 },
            stillExists: true,
          },
        },
      ],
    },
    {
      id: 'denver-lost-and-loved',
      type: 'section',
      title: 'Lost Denver',
      teaser: 'Pete\'s Kitchen, El Chapultepec, and the places where Denver used to gather',
      intro: 'Denver reinvented itself from cow town to craft beer capital in a generation, and the transformation wasn\'t gentle. These were the all-night diners, jazz clubs, and neighborhood joints that gave the city its soul before the condos came. The Mile High City climbs fast. Not everything makes it to the top.',
      items: [
        {
          id: 'denver-lost-4',
          type: 'lost-and-loved',
          category: 'restaurant',
          name: 'Pete\'s Kitchen',
          neighborhood: 'Capitol Hill',
          yearsOpen: '1942–2023',
          description: 'The 24-hour Greek diner with turquoise booths, disco fries, and a crowd that ranged from post-show drunks to pre-dawn construction workers. For 81 years, Pete\'s was democracy at 3am—everyone sat at the same counter, everyone got the same gruff service, everyone left full. It closed in 2023, and Denver lost the one place that never judged you.',
          whyMissed: 'The gyro plate at 3am, the fact that it never closed, and the radical egalitarianism of a place where tech bros sat next to drag queens sat next to electricians. Pete\'s didn\'t care who you were. It just fed you.',
          communityVoice: '"Pete\'s Kitchen was where Denver went when nowhere else was open—and when nowhere else would have you." — Westword',
          lastAddress: '1962 E Colfax Ave, Denver',
          source: 'Denver Post, Westword',
        },
        {
          id: 'denver-lost-6',
          type: 'lost-and-loved',
          category: 'bar',
          name: 'The Church Nightclub',
          neighborhood: 'Capitol Hill',
          yearsOpen: '1996–2018',
          description: 'A goth/industrial nightclub in a converted 1889 church, complete with multiple dance floors, a sushi bar in the basement, and the kind of blasphemous energy that made your parents nervous. For 22 years, it was where Denver\'s freaks, misfits, and Nine Inch Nails devotees found sanctuary. The building sold, the music stopped, and Denver got a little more normal.',
          whyMissed: 'The sheer audacity of dancing to Ministry in a former house of worship, the goth nights that felt like high mass, and the fact that Denver had a venue weird enough to put a sushi bar in a church basement. The Church was proof that Denver could be strange.',
          communityVoice: '"The Church was where Denver\'s weirdos felt holy." — Westword',
          lastAddress: '1160 Lincoln St, Denver',
          source: 'Westword, Denver Post',
        },
        {
          id: 'denver-lost-8',
          type: 'lost-and-loved',
          category: 'restaurant',
          name: 'El Chapultepec',
          neighborhood: 'LoDo',
          yearsOpen: '1933–2021',
          description: 'The Mexican restaurant and jazz club where Sinatra stopped by, where Ella Fitzgerald sang, where Tony Bennett ate enchiladas between sets. For 88 years, "The Pec" served cheap Mexican food and world-class jazz in a tiny room plastered with photos of everyone who ever mattered. When it closed in 2021, Denver lost its entire jazz memory.',
          whyMissed: 'Live jazz seven nights a week, $5 margaritas, and walls covered in black-and-white proof that greatness happened here. The Pec didn\'t pretend to be fancy. It just was.',
          communityVoice: '"El Chapultepec was where Denver swung—and where legends came to sit in." — Westword',
          images: [
            {
              src: '/denver/lost-loved/elchap-1.png',
              alt: 'El Chapultepec jazz club exterior in LoDo Denver',
            },
            {
              src: '/denver/lost-loved/elchap-2.png',
              alt: 'El Chapultepec interior with historic jazz memorabilia',
            },
          ],
          lastAddress: '1962 Market St, Denver',
          source: 'Denver Post, DownBeat Magazine',
        },
        {
          id: 'denver-lost-ad-1',
          type: 'ad',
          size: 'banner',
        },
        {
          id: 'denver-lost-5',
          type: 'lost-and-loved',
          category: 'bookstore',
          name: 'Tattered Cover (Colfax location)',
          neighborhood: 'Capitol Hill',
          yearsOpen: '1971–2020',
          description: 'Before it expanded and went corporate, Tattered Cover was a single cramped bookstore on Colfax with overstuffed shelves and a owner who fought the FBI over customer privacy. Joyce Meskis made Tattered Cover a First Amendment landmark. The original Colfax location closed in 2020. Other locations remain, but they don\'t carry the same weight.',
          whyMissed: 'The original intimacy, the stacks that felt like a maze, and Joyce Meskis standing up to the government because she believed bookstores were sacred. The Colfax Tattered Cover wasn\'t just a store—it was a cause.',
          communityVoice: '"Tattered Cover on Colfax was where Denver learned that bookstores could be battlegrounds." — 5280 Magazine',
          image: {
            src: '/denver/lost-loved/tattered-1.png',
            alt: 'Tattered Cover bookstore on Colfax Avenue',
          },
          lastAddress: '2526 E Colfax Ave, Denver',
          source: 'Denver Post, Publisher\'s Weekly',
        },
        {
          id: 'denver-lost-1',
          type: 'lost-and-loved',
          category: 'bar',
          name: 'The Satire Lounge',
          neighborhood: 'Capitol Hill',
          yearsOpen: '1962–2020',
          description: 'The dark, cash-only dive bar where drinks were cheap, the jukebox leaned Sinatra and Patsy Cline, and regulars treated their barstools like church pews. For 58 years, the Satire was where Capitol Hill drank without apology. The pandemic closed it for good, and Denver lost proof that old dive bars could survive gentrification. Turns out they couldn\'t.',
          whyMissed: '$3 whiskey that tasted like $3 whiskey, a jukebox with actual taste, and the radical idea that Capitol Hill still had corners the developers hadn\'t ruined. The Satire was the last holdout.',
          communityVoice: '"The Satire was the last real dive bar in Capitol Hill. Now there are none." — Westword',
          image: {
            src: 'https://tile.loc.gov/storage-services/service/pnp/mrg/01500/01571v.jpg',
            alt: 'Satire Lounge neon sign on Colfax Avenue in Denver',
          },
          lastAddress: '1920 E Colfax Ave, Denver',
          source: 'Westword, Denver Post',
        },
        // Reference: https://www.loc.gov/item/2017703685/
        {
          id: 'denver-lost-7',
          type: 'lost-and-loved',
          category: 'cafe',
          name: 'Paris on the Platte',
          neighborhood: 'Platte Valley',
          yearsOpen: '1992–2019',
          description: 'A French café in a converted house near the Platte River, serving Nutella crepes, strong coffee, and the fantasy that Denver could pull off European sophistication. For 27 years, it did. Paris on the Platte was where Denver brunched before brunch became a cliché, where the patio felt like a postcard. It closed when the owner retired, because good things end quietly.',
          whyMissed: 'The crepes that were actually good, the patio that overlooked the river, and the fact that it pulled off "French café in Denver" without being insufferable. It was charming without trying, which made it rare.',
          communityVoice: '"Paris on the Platte was Denver\'s best-kept brunch secret—and somehow stayed that way." — 5280 Magazine',
          images: [
            {
              src: '/denver/lost-loved/paris-1.png',
              alt: 'Paris on the Platte cafe exterior along the Platte River',
            },
            {
              src: '/denver/lost-loved/paris-2.png',
              alt: 'Paris on the Platte charming patio and French ambiance',
            },
          ],
          lastAddress: '1553 Platte St, Denver',
          source: 'Denver Post, Westword',
        },
        {
          id: 'denver-lost-ad-2',
          type: 'ad',
          size: 'rectangle',
        },
        {
          id: 'denver-lost-2',
          type: 'lost-and-loved',
          category: 'restaurant',
          name: 'Bastien\'s',
          neighborhood: 'Northeast Denver',
          yearsOpen: '1936–2020',
          description: 'The old-school steakhouse with red leather booths, tableside Caesar salads mixed with theatrical flair, and whiskey drinks strong enough to make you forget the altitude. For 84 years, Bastien\'s was where Denver celebrated—birthdays, anniversaries, promotions, the moments that mattered. The pandemic killed it, and Denver lost the last place that felt like your grandparents\' idea of a night out.',
          whyMissed: 'The prime rib, the tableside Caesar ritual, and the feeling that putting on a sport coat still meant something. Bastien\'s remembered when Denver dressed up for dinner.',
          communityVoice: '"Bastien\'s was Denver\'s last real supper club—and we didn\'t know it until it was gone." — 5280 Magazine',
          image: {
            src: 'https://tile.loc.gov/storage-services/service/pnp/highsm/33600/33601v.jpg',
            alt: 'Bastien\'s restaurant exterior featuring cocktails and sugar steak in Denver',
          },
          lastAddress: '3503 E Colfax Ave, Denver',
          source: 'Denver Post, 5280 Magazine',
        },
        // Reference: https://www.loc.gov/item/2015633616/
        {
          id: 'denver-lost-3',
          type: 'lost-and-loved',
          category: 'music-venue',
          name: 'The Fillmore Auditorium (original)',
          neighborhood: 'Capitol Hill',
          yearsOpen: '1907–1968',
          description: 'Before it became a chain venue in a different building, the original Fillmore was Denver\'s grand ballroom—where big bands played, where soldiers danced before shipping out, where swing culture had its last gasps. It closed in 1968 as tastes changed. The building was demolished in 1969. The Fillmore name got revived in 1999, but old-timers know the difference.',
          whyMissed: 'The architectural grandeur, the history soaked into the floorboards, and the fantasy that Denver once had a music scene that could compete with the coasts. The original Fillmore was proof.',
          communityVoice: '"The original Fillmore was where Denver danced during the war—and never quite danced like that again." — Denver Public Library',
          lastAddress: 'Clarkson St & Colfax Ave, Denver',
          source: 'Denver Post, Colorado History',
        },
      ],
    },
  ],
}
