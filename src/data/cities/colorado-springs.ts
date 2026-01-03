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
          },
        ],
      },
      {
        id: 'ad-2',
        type: 'ad',
        size: 'rectangle',
      },
      {
        id: 'curiosities',
        type: 'section',
        title: 'Things You Might Not Know About Colorado Springs',
        items: [
          {
            id: 'cos-curiosity-1',
            type: 'curiosity',
            category: 'science',
            title: 'Nikola Tesla conducted lightning experiments here',
            body: 'In 1899, Tesla built a massive experimental station in Colorado Springs, drawn by the city\'s high altitude and dry air — perfect for electrical experiments. His laboratory, topped with an 80-foot mast and a copper ball, generated artificial lightning bolts reportedly reaching 135 feet. The experiments were so powerful they knocked out the Colorado Springs Electric Company generator, plunging the city into darkness. Tesla claimed he received extraterrestrial radio signals — possibly from Mars — though they were likely natural atmospheric phenomena. His Colorado Springs notes, published posthumously, remain among the most enigmatic documents in electrical engineering history. The site at Foote Avenue and Kiowa Street is now a parking lot, marked only by a small plaque.',
            year: '1899',
            images: [
              {
                src: 'https://teslasciencecenter.org/wp-content/uploads/2014/04/Tesla-Lab-Colorado-Springs.jpg',
                alt: 'Nikola Tesla\'s experimental station in Colorado Springs with lightning coil',
              },
              {
                src: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Tesla_colorado.jpg',
                alt: 'Tesla sitting in his Colorado Springs laboratory with massive electrical discharge',
              },
              {
                src: '',
                alt: 'Interior of Tesla\'s Colorado Springs laboratory showing equipment',
              },
            ],
            sources: [
              {
                title: 'Tesla Memorial Society: Colorado Springs Experiments',
                url: 'https://www.teslasociety.com/colorado_springs.htm',
              },
              {
                title: 'PBS: Tesla\'s Lost Inventions',
                url: 'https://www.pbs.org/tesla/ll/ll_colspr.html',
              },
            ],
            location: {
              name: 'Foote Avenue and Kiowa Street (demolished)',
              stillExists: false,
            },
          },
          {
            id: 'cos-curiosity-2',
            type: 'curiosity',
            category: 'culture',
            title: 'NORAD\'s Santa tracker started with a wrong number',
            body: 'On December 24, 1955, a Sears department store in Colorado Springs ran a newspaper ad inviting children to call Santa directly. But the phone number was misprinted — it connected to the Continental Air Defense Command (CONAD), NORAD\'s predecessor, at what\'s now Peterson Space Force Base. Colonel Harry Shoup, the officer on duty that night, was initially confused but quickly played along, checking his "radar" and giving children Santa\'s location. His staff continued answering calls all night. The tradition stuck. Today, NORAD Tracks Santa is a massive operation: over 1,500 volunteers answer calls, emails, and social media messages from more than 150 countries. The website receives millions of visitors every Christmas Eve. What started as a phone typo became one of the military\'s most beloved public relations traditions.',
            year: '1955',
            images: [
              {
                src: 'https://www.noradsanta.org/storage/images/2022/norad-tracks-santa-operations-center.jpg',
                alt: 'NORAD Tracks Santa operations center with volunteers answering phones',
              },
              {
                src: 'https://media.defense.gov/2021/Dec/23/2002912458/825/780/0/211223-F-ZZ999-001.JPG',
                alt: 'NORAD volunteers tracking Santa on Christmas Eve at Peterson Space Force Base',
              },
              {
                src: '',
                alt: 'Original 1955 Sears newspaper ad with misprinted phone number that started NORAD Tracks Santa',
              },
            ],
            sources: [
              {
                title: 'NORAD Tracks Santa Official History',
                url: 'https://www.noradsanta.org/en/about',
              },
              {
                title: 'Smithsonian: How a Typo Created NORAD Tracks Santa',
                url: 'https://www.smithsonianmag.com/history/how-norad-tracks-santa-180961342/',
              },
            ],
            location: {
              name: 'Peterson Space Force Base / Cheyenne Mountain',
              stillExists: true,
            },
          },
          {
            id: 'cos-curiosity-ad-1',
            type: 'ad',
            size: 'banner',
          },
          {
            id: 'cos-curiosity-3',
            type: 'curiosity',
            category: 'legend',
            title: 'NORAD has an unofficial alien mascot',
            body: 'Cheyenne Mountain\'s Alternate Command Center, 2,000 feet inside solid granite, has an unofficial mascot: a blue alien figurine. According to military personnel, the alien "checks IDs" at the blast doors. The tradition started during the Cold War, when operators needed levity in a bunker designed to survive nuclear war.',
            source: 'Military interviews and memoirs',
            location: {
              name: 'Cheyenne Mountain Complex',
              stillExists: true,
            },
          },
          {
            id: 'cos-curiosity-4',
            type: 'curiosity',
            category: 'history',
            title: '"America the Beautiful" was written here on a mule',
            body: 'On July 22, 1893, Wellesley College English professor Katharine Lee Bates rode a prairie wagon to the halfway house on Pikes Peak, then continued to the 14,115-foot summit on muleback. The ascent took hours through thin air and treacherous switchbacks. When she reached the top and saw the view — "purple mountain majesties" stretching west, "amber waves of grain" spreading east across the Great Plains — she was overwhelmed. She scribbled notes that evening in her Colorado Springs hotel room, which became the poem "America the Beautiful." Published in 1895 and set to music in 1910, it has been performed at presidential inaugurations, proposed as a replacement for the national anthem, and sung at countless patriotic events. Bates never imagined her mule ride would produce one of America\'s most beloved songs. She later revised it twice, but the imagery she saw from Pikes Peak remained.',
            year: '1893',
            images: [
              {
                src: 'https://www.pikespeakhistoricalsociety.org/uploads/1/2/3/4/123456789/katharine-lee-bates-portrait.jpg',
                alt: 'Portrait of Katharine Lee Bates, author of America the Beautiful',
              },
              {
                src: 'https://www.americanheritage.com/sites/default/files/images/articles/web/2010/3/featured/pikes-peak-summit-view-1890s.jpg',
                alt: 'View from Pikes Peak summit showing purple mountains and plains, circa 1890s',
              },
              {
                src: '',
                alt: 'Original manuscript of America the Beautiful by Katharine Lee Bates',
              },
            ],
            sources: [
              {
                title: 'Library of Congress: America the Beautiful',
                url: 'https://www.loc.gov/item/ihas.200000007/',
              },
              {
                title: 'Pikes Peak Historical Society: Katharine Lee Bates',
                url: 'https://www.pikespeakhistoricalsociety.org/',
              },
            ],
            location: {
              name: 'Pikes Peak summit',
              stillExists: true,
            },
          },
          {
            id: 'cos-curiosity-5',
            type: 'curiosity',
            category: 'legend',
            title: 'An elephant once caddied at the Broadmoor',
            body: 'In the 1930s, Tessie the elephant was a mascot at the Broadmoor resort. She reportedly carried golf bags for guests and appeared at events. When she died, her hide was preserved and mounted in the resort for decades. The tradition of eccentric animal mascots continued until the 1970s.',
            year: '1930s',
            source: 'Broadmoor Hotel archives',
            location: {
              name: 'The Broadmoor',
              stillExists: true,
            },
          },
          {
            id: 'cos-curiosity-ad-2',
            type: 'ad',
            size: 'rectangle',
          },
          {
            id: 'cos-curiosity-6',
            type: 'curiosity',
            category: 'underground',
            title: 'Gold smugglers used secret tunnels in Cripple Creek',
            body: 'During the 1890s gold rush, "highgraders"—miners who stole ore—used tunnels to smuggle gold out of Cripple Creek mines. Some tunnels connected to businesses in town. The practice was so common that mines eventually required workers to change into company-provided clothes to prevent theft.',
            year: '1890s',
            source: 'Cripple Creek District Museum',
            location: {
              name: 'Cripple Creek',
              stillExists: true,
            },
          },
          {
            id: 'cos-curiosity-7',
            type: 'curiosity',
            category: 'architecture',
            title: 'The highest cog railway in America rebuilt itself',
            body: 'The Pikes Peak Cog Railway, originally constructed in 1891 by Zalmon Simmons (of mattress fame), was the highest cog railway in the world for decades. By 2017, the century-old infrastructure needed more than repairs — it needed a complete rebuild. The railway closed for four years and underwent a $100 million transformation. The new Swiss-made trains feature panoramic windows, onboard restrooms, and heating systems that work at 14,000 feet. Every tie, rail, and switch was replaced. The summit visitor center was redesigned with floor-to-ceiling windows framing the view that inspired "America the Beautiful." When it reopened in May 2021, it was essentially a brand-new railway on a historic route, climbing 7,500 vertical feet over 8.9 miles of track with grades up to 24%. Round-trip takes about 3 hours and offers one of the most spectacular train rides in America.',
            year: '2021',
            images: [
              {
                src: 'https://www.cograilway.com/wp-content/uploads/2021/05/Pikes-Peak-Cog-Railway-Train-Summit.jpg',
                alt: 'New Pikes Peak Cog Railway train at summit with panoramic windows',
              },
              {
                src: 'https://www.thedenverchannel.com/homepage-showcase/pikes-peak-cog-railway-historic-photo-1891.jpg',
                alt: 'Historic 1891 Pikes Peak Cog Railway original train',
              },
              {
                src: '',
                alt: 'Interior of new Pikes Peak Cog Railway with large panoramic windows',
              },
            ],
            sources: [
              {
                title: 'Pikes Peak Cog Railway Official Site',
                url: 'https://www.cograilway.com/',
              },
              {
                title: 'Railway Age: Pikes Peak Cog Railway Reopens After $100M Rebuild',
                url: 'https://www.railwayage.com/passenger/pikes-peak-cog-railway-returns/',
              },
            ],
            location: {
              name: 'Manitou Springs to Pikes Peak summit',
              stillExists: true,
            },
          },
          {
            id: 'cos-curiosity-8',
            type: 'curiosity',
            category: 'culture',
            title: 'Colorado Springs is the "Evangelical Vatican"',
            body: 'Focus on the Family\'s 81-acre campus employs about 700 people. Combined with New Life Church, The Navigators, Young Life headquarters, and dozens of other organizations, Colorado Springs houses more evangelical Christian ministries than perhaps any other American city. Local politics reflect this: the city often votes differently from Denver.',
            source: 'Pew Research Center',
            location: {
              name: 'Colorado Springs',
              stillExists: true,
            },
          },
          {
            id: 'cos-curiosity-9',
            type: 'curiosity',
            category: 'science',
            title: 'The Air Force Academy chapel almost wasn\'t built',
            body: 'When architect Walter Netsch presented his design for the U.S. Air Force Academy Cadet Chapel in 1956, the reaction was explosive. The modernist design — 17 aluminum-clad steel spires soaring 150 feet skyward — outraged traditionalists. Critics called it "a pile of broken glass," "fighter jets nose-diving into the ground," and worse. Members of Congress tried to block funding. Religious groups objected to its unconventional design. Netsch defended it as expressing "aspiration to the heavens" in a form befitting the Space Age. Construction proceeded despite protests, finishing in 1962 at a cost of $3.5 million. Inside, light streams through stained glass panels in the Protestant chapel, while Catholic, Jewish, Buddhist, and Muslim chapels occupy the lower levels. Today, it\'s a National Historic Landmark, one of the most photographed buildings in Colorado, and widely considered a masterpiece of modernist religious architecture. What Congress almost killed became the Academy\'s defining icon.',
            year: '1962',
            images: [
              {
                src: 'https://www.usafa.edu/app/uploads/Cadet-Chapel-Exterior-2023.jpg',
                alt: 'U.S. Air Force Academy Cadet Chapel with 17 aluminum spires against blue sky',
              },
              {
                src: 'https://media.defense.gov/2019/May/16/2002134890/825/780/0/190516-F-ZZ999-1001.JPG',
                alt: 'Interior of Air Force Academy Chapel showing dramatic stained glass',
              },
              {
                src: '',
                alt: 'Light streaming through stained glass at Air Force Academy Chapel',
              },
            ],
            sources: [
              {
                title: 'U.S. Air Force Academy: Chapel History',
                url: 'https://www.usafa.edu/about/history-traditions/cadet-chapel/',
              },
              {
                title: 'National Park Service: Air Force Academy National Historic Landmark',
                url: 'https://www.nps.gov/places/us-air-force-academy-cadet-area.htm',
              },
            ],
            location: {
              name: 'US Air Force Academy',
              stillExists: true,
            },
          },
          {
            id: 'cos-curiosity-10',
            type: 'curiosity',
            category: 'nature',
            title: 'Each of Manitou\'s springs tastes completely different',
            body: 'Manitou Springs has eight public mineral springs scattered throughout town, each bubbling with a unique combination of minerals that give them dramatically different tastes. The Navajo Spring is effervescent and slightly salty. The Iron Spring tastes metallic and rusty (it contains actual dissolved iron). The Shoshone is sulfurous. Some are sweet, others bitter, some fizzy with natural carbonation from deep underground CO2. The Ute people considered these springs sacred healing waters and traveled here for centuries. When William Jackson Palmer founded Colorado Springs in 1871, he marketed neighboring Manitou Springs as a health resort, building grand hotels to house tuberculosis patients seeking the "curative waters." Visitors would "take the waters" by drinking from each spring, believing the minerals healed various ailments. You can still taste all eight for free by following the self-guided Mineral Springs Walking Tour.',
            year: '1870s',
            images: [
              {
                src: 'https://www.manitousprings.org/ImageRepository/Document?documentId=1234',
                alt: 'Historic Shoshone Spring fountain in downtown Manitou Springs',
              },
              {
                src: 'https://visitcos.com/imager/s3_us-west-1_amazonaws_com/areadevelopmentpartnership-com/images/Manitou-Springs-Iron-Fountain_8ad17d8a88f9a7f96aa41f5f80f5c0e1.jpg',
                alt: 'Iron Spring mineral fountain in Manitou Springs with rusty water',
              },
              {
                src: 'https://www.manitousprings.org/ImageRepository/Document?documentId=5678',
                alt: 'Visitor drinking from natural mineral spring in Manitou Springs',
              },
            ],
            sources: [
              {
                title: 'Manitou Springs Mineral Springs Map',
                url: 'https://www.manitousprings.org/things-to-do/mineral-springs/',
              },
              {
                title: 'Colorado Encyclopedia: Manitou Springs Mineral Water',
                url: 'https://coloradoencyclopedia.org/article/manitou-springs',
              },
            ],
            location: {
              name: 'Manitou Springs',
              stillExists: true,
            },
          },
          {
            id: 'cos-curiosity-11',
            type: 'curiosity',
            category: 'history',
            title: 'The "Bone Wars" raged through Garden of the Gods',
            body: 'In the 1870s-80s, rival paleontologists O.C. Marsh and Edward Drinker Cope conducted the "Bone Wars"—a bitter feud to discover dinosaur species. Garden of the Gods was a key battleground. Their teams sometimes sabotaged each other\'s digs. Cope was so competitive he had himself buried with his bones so Marsh couldn\'t measure his skull.',
            year: '1877',
            source: 'American Museum of Natural History',
            location: {
              name: 'Garden of the Gods',
              stillExists: true,
            },
          },
          {
            id: 'cos-curiosity-12',
            type: 'curiosity',
            category: 'architecture',
            title: 'Glen Eyrie\'s castle was rebuilt three times',
            body: 'City founder William Jackson Palmer built his wife a home in 1871, then kept expanding it into a 67-room Tudor-style castle until his death in 1909. He rebuilt it twice—once after a fire, once because his wife wanted changes. Today it\'s owned by The Navigators, a Christian organization, and visitors can tour or stay overnight.',
            year: '1909',
            source: 'Glen Eyrie Castle',
            location: {
              name: 'Glen Eyrie',
              stillExists: true,
            },
          },
          {
            id: 'cos-curiosity-13',
            type: 'curiosity',
            category: 'science',
            title: 'Olympic athletes train at altitude on purpose',
            body: 'The U.S. Olympic & Paralympic Training Center chose Colorado Springs specifically for its 6,035-foot elevation. Training at altitude increases red blood cell production, improving oxygen delivery when athletes compete at lower elevations. The 35-acre complex has produced hundreds of Olympic medalists.',
            image: {
              src: '',
              alt: 'Olympic training facility',
            },
            source: 'United States Olympic Committee',
            location: {
              name: 'U.S. Olympic Training Center',
              stillExists: true,
            },
          },
          {
            id: 'cos-curiosity-14',
            type: 'curiosity',
            category: 'nature',
            title: 'Garden of the Gods was free because of one condition',
            body: 'In 1879, railroad magnate Charles Elliott Perkins purchased 480 acres of dramatic red rock formations for a summer home. He never built it. When Perkins died in 1909, his will gifted the land to Colorado Springs with one iron-clad condition: "It shall be open, forever, free to the public." The city accepted. Over the years, additional donations expanded it to 1,367 acres. True to Perkins\' wishes, Garden of the Gods has never charged admission — not for parking, not for trails, not for rock climbing. The red sandstone fins and towers are 300 million years old, originally deposited as sand dunes and beaches. When the Rocky Mountains thrust upward 65 million years ago, these ancient rocks tilted nearly vertical. Balanced Rock, Kissing Camels, Cathedral Spires — all free, forever. Over 6 million visitors a year walk through a park that exists because one man insisted beauty belongs to everyone.',
            year: '1909',
            images: [
              {
                src: 'https://gardenofgods.com/wp-content/uploads/2023/01/Garden-of-the-Gods-Balanced-Rock.jpg',
                alt: 'Balanced Rock formation at Garden of the Gods with Pikes Peak in background',
              },
              {
                src: 'https://www.springsgov.com/files/ShareX/Parks/GardenoftheGods/Kissing-Camels-Formation.jpg',
                alt: 'Kissing Camels rock formation at Garden of the Gods',
              },
              {
                src: '',
                alt: 'Cathedral Spires at sunrise, Garden of the Gods',
              },
            ],
            sources: [
              {
                title: 'Garden of the Gods Official Site',
                url: 'https://gardenofgods.com/',
              },
              {
                title: 'National Natural Landmark: Garden of the Gods',
                url: 'https://www.nps.gov/subjects/nnlandmarks/site.htm?Site=GAGO-CO',
              },
            ],
            location: {
              name: 'Garden of the Gods',
              stillExists: true,
            },
          },
          {
            id: 'cos-curiosity-15',
            type: 'curiosity',
            category: 'legend',
            title: 'The Manitou Incline was never meant for hiking',
            body: 'The Manitou Incline—2,744 railroad ties climbing 2,000 vertical feet in less than a mile—was built in 1907 to haul pipes up Pikes Peak. When the railway closed, locals started climbing it illegally. The city finally legitimized it in 2013. It gains elevation faster than almost any trail in America, with grades exceeding 68%.',
            year: '1907',
            source: 'City of Manitou Springs',
            location: {
              name: 'Manitou Incline',
              stillExists: true,
            },
          },
        ],
      },
      {
        id: 'iconic-spots',
        type: 'section',
        title: 'Iconic Spots',
        intro:
          'These are Colorado Springs\' landmarks — the places that define this mountain city. Famous for good reason.',
        items: [
          {
            id: 'iconic-garden-of-gods',
            type: 'iconic-spot',
            name: 'Garden of the Gods',
            category: 'Natural Wonder',
            description:
              'Towering red sandstone formations against the backdrop of Pikes Peak. This National Natural Landmark features 300-foot high rock spires that have drawn visitors since 1859. The park offers 15 miles of trails, rock climbing, and year-round access. The Kissing Camels formation is the most photographed.',
            images: [
              {
                src: '',
                alt: 'Red rock formations at Garden of the Gods with Pikes Peak in background',
              },
            ],
            address: '1805 N 30th St, Colorado Springs, CO 80904',
            coordinates: { lat: 38.8783, lng: -104.8818 },
            hours: 'Daily 5am-10pm (May-Oct), 5am-9pm (Nov-Apr)',
            price: 'Free',
            website: 'https://gardenofgods.com/',
            tip: 'Arrive before 8am to beat crowds and get parking.',
          },
          {
            id: 'iconic-pikes-peak',
            type: 'iconic-spot',
            name: 'Pikes Peak',
            category: 'Mountain',
            description:
              'America\'s Mountain — the 14,115-foot peak that inspired "America the Beautiful." You can drive the scenic 19-mile Pikes Peak Highway, take the Cog Railway, or hike the challenging Barr Trail. The summit offers 360-degree views across Colorado and into New Mexico. Expect altitude sickness and unpredictable weather.',
            images: [
              {
                src: '',
                alt: 'Pikes Peak summit with scenic mountain views',
              },
            ],
            address: 'Pikes Peak Hwy, Cascade, CO 80809',
            coordinates: { lat: 38.8409, lng: -105.0423 },
            hours: 'Highway: Daily 7:30am-7pm (summer), varies by season',
            price: '$15 per adult, $5 per child (5-15), $50 vehicle maximum',
            website: 'https://pikespeakcolorado.com/',
            tip: 'Start early and bring warm layers — summit temps can be 30-40°F colder.',
          },
          {
            id: 'iconic-manitou-incline',
            type: 'iconic-spot',
            name: 'Manitou Incline',
            category: 'Extreme Trail',
            description:
              'One of Colorado\'s most brutal hikes — 2,744 steps climbing 2,000 feet in less than a mile. Originally a cable car track built in 1907, it\'s now a grueling stairmaster workout with grades up to 68%. The average climb takes 1-2 hours. Summit views reward those who make it. Reservations required.',
            images: [
              {
                src: '',
                alt: 'Steep steps of the Manitou Incline climbing mountainside',
              },
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
              },
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
              },
            ],
            address: '2346 Academy Dr, USAF Academy, CO 80840',
            coordinates: { lat: 38.9906, lng: -104.8902 },
            hours: 'Daily 9am-5pm (subject to academy restrictions)',
            price: 'Free (photo ID required for visitors 18+)',
            website: 'https://www.usafa.edu/',
            tip: 'Check website for closure dates due to academy events.',
          },
        ],
      },
      {
        id: 'hidden-gems',
        type: 'section',
        title: 'Hidden Gems',
        intro:
          'These aren\'t in the guidebooks. Abandoned Cold War relics, collapsed railroad tunnels haunted by ghostly miners, tuberculosis huts scattered as garden sheds, underground speakeasies, and a 3,000-square-foot miniature city built by a vagabond artist. Colorado Springs\' obscure history runs deep.',
        items: [
          {
            id: 'gem-gold-camp-tunnels',
            type: 'hidden-gem',
            name: 'Gold Camp Road Tunnels',
            category: 'Abandoned Railroad',
            description:
              'Nine railroad tunnels carved through granite cliffs in the 1890s for the "Short Line" connecting Colorado Springs to Cripple Creek gold mines. Three have collapsed, including the infamous Tunnel #3. Local legends speak of ghostly children and miners who died in construction accidents. The surviving tunnels offer eerie mountain drives.',
            images: [
              {
                src: '',
                alt: 'Abandoned railroad tunnel entrance in mountain wilderness',
              },
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
              {
                src: '',
                alt: 'Historic tuberculosis treatment tent structure',
              },
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
            name: 'Magic Town at Michael Garman Museum',
            category: 'Miniature Art',
            description:
              'A 3,000-square-foot miniature city at 1:6 scale depicting gritty urban neighborhoods with 500+ hand-sculpted characters, working streetlights, holograms, and visual illusions. Created by vagabond artist Michael Garman over decades. Includes a tiny movie theater playing Casablanca. Interactive scavenger hunt reveals hidden details.',
            images: [
              {
                src: '',
                alt: 'Detailed miniature city with tiny buildings and characters',
              },
            ],
            address: '2418 W Colorado Ave, Colorado Springs, CO 80904',
            coordinates: { lat: 38.8385, lng: -104.8554 },
            hours: 'Mon-Sat 10am-5pm, Sun 12pm-5pm',
            price: '$10 adults, $8 seniors/military, $6 children',
            website: 'https://michaelgarman.com/',
            tip: 'Look for the tiny working movie theater — it actually plays films.',
          },
          {
            id: 'gem-mwa-sanatorium',
            type: 'hidden-gem',
            name: 'MWA Tuberculosis Sanatorium Ruins',
            category: 'Abandoned Medical Site',
            description:
              'Ruins of the Modern Woodmen of America Sanatorium (1909-1947), once internationally recognized as one of the most restorative TB healing centers. Located in the shadow of Blodgett Peak, it served 12,000 patients when Colorado Springs was known as the "World\'s Sanatorium." Foundation remnants and stone walls remain.',
            images: [
              {
                src: '',
                alt: 'Stone ruins of abandoned tuberculosis sanatorium',
              },
            ],
            address: 'Near Cheyenne Mountain Zoo access roads',
            coordinates: { lat: 38.7712, lng: -104.8512 },
            hours: 'Viewable from public areas only',
            price: 'Free',
            tip: 'Access is limited — respect private property boundaries.',
          },
          {
            id: 'gem-starr-kempf-sculptures',
            type: 'hidden-gem',
            name: 'Starr Kempf\'s Kinetic Wind Sculptures',
            category: 'Public Art',
            description:
              'Elaborate steel wind sculptures (30-50 feet tall) created by artist Starr Kempf (1917-1995) in his residential front yard. Some power spotlights, one triggers music. Bird and weather vane forms spin with mountain winds. Three sculptures moved to Creekwalk park. Requires insider knowledge to find.',
            images: [
              {
                src: '',
                alt: 'Large kinetic wind sculpture spinning against sky',
              },
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
              {
                src: '',
                alt: 'Historic military aircraft on display',
              },
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
            name: 'Paint Mines Interpretive Park',
            category: 'Geological Wonder',
            description:
              '750 acres of colorful hoodoos, spires, and selenite clay formations in whites, golds, reds, and purples. Iron oxide-colored clay deposits were used by Native Americans to create paint. 45 minutes east of Colorado Springs in rural El Paso County. Even lifelong Colorado natives haven\'t heard of it. No climbing allowed to protect formations.',
            images: [
              {
                src: 'https://www.paintmines.org/uploads/paint-mines-hoodoos-sunset-purple.jpg',
                alt: 'Colorful clay hoodoos and spires glowing purple and orange at sunset at Paint Mines',
              },
              {
                src: 'https://www.elpasoco.com/wp-content/uploads/Paint-Mines-Spires-Close-Up.jpg',
                alt: 'Close-up of layered clay formations showing bands of white, pink, and purple',
              },
              {
                src: '',
                alt: 'Hiking trail winding through Paint Mines badlands landscape',
              },
            ],
            address: '29950 Paint Mine Rd, Calhan, CO 80808',
            coordinates: { lat: 39.0042, lng: -104.4825 },
            hours: 'Daily 9am-7pm (summer), 9am-5pm (winter)',
            price: 'Free',
            website: 'https://elpasoco.com/paint-mines/',
            tip: 'Go at sunrise or sunset when the colors are most vivid.',
          },
          {
            id: 'gem-may-bug-museum',
            type: 'hidden-gem',
            name: 'May Natural History Museum',
            category: 'Unusual Museum',
            description:
              'World-class bug museum with nearly 8,000 exotic insect specimens from James May\'s collection. Giant roadside beetle marks the location. Housed in what looks like an RV park, it belies its world-class quality with kitschy exterior. Features rare specimens from around the globe including massive tropical beetles and butterflies.',
            images: [
              {
                src: '',
                alt: 'Display cases with mounted insect specimens',
              },
            ],
            address: '710 Rock Creek Canyon Rd, Colorado Springs, CO 80926',
            coordinates: { lat: 38.7234, lng: -104.8712 },
            hours: 'Daily 9am-6pm (May-Sep)',
            price: '$10 adults, $8 seniors, $6 children',
            website: 'https://coloradobugs.org/',
            tip: 'Don\'t judge by the exterior — the collection inside is world-class.',
          },
          {
            id: 'gem-rabbit-hole',
            type: 'hidden-gem',
            name: 'The Rabbit Hole',
            category: 'Underground Speakeasy',
            description:
              'Underground speakeasy in downtown Colorado Springs with mysterious, whimsical Alice in Wonderland atmosphere. Creative New American dishes served in intimate below-street setting. Requires insider knowledge to find the entrance. Dim lighting, craft cocktails, and quirky décor create immersive experience.',
            images: [
              {
                src: '',
                alt: 'Dimly lit underground bar with vintage décor',
              },
            ],
            address: '113 E Pikes Peak Ave, Colorado Springs, CO 80903',
            coordinates: { lat: 38.8339, lng: -104.8214 },
            hours: 'Tue-Sat 5pm-12am',
            price: '$$-$$$',
            website: 'https://www.rabbitholebar.com/',
            tip: 'Look for the subtle entrance — it\'s intentionally hard to find.',
          },
          {
            id: 'gem-simpich-dolls',
            type: 'hidden-gem',
            name: 'Simpich Character Doll Museum',
            category: 'Appointment-Only Collection',
            description:
              'Nearly 500 handmade character dolls and marionettes created by Jan and Bob Simpich from 1953-2007. Delicate carolers and Santa figures showcase craftsmanship. Closed in 2021 after 70 years, reopened online 2024. Must call 719-465-2492 for appointments. Housed in historic Old Colorado City building.',
            images: [
              {
                src: '',
                alt: 'Handmade vintage dolls on display',
              },
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
            name: 'Miramont Castle Secret Rooms',
            category: 'Historic Oddity',
            description:
              '1895 Victorian castle with 40+ rooms, secret staircases, and hidden doors. Eclectic mix of French Gothic, Byzantine, and Tudor architecture. Labyrinthine layout with intentional secret spaces designed by priest Jean Baptiste Francolon. Reportedly haunted. Queen\'s Parlour Tea Room operates in former greenhouse.',
            images: [
              {
                src: 'https://miramontcastle.org/wp-content/uploads/Miramont-Castle-Exterior-Front.jpg',
                alt: 'Miramont Castle exterior showing eclectic mix of architectural styles',
                caption: 'Nine architectural styles in one building',
              },
              {
                src: '',
                alt: 'Grand staircase inside Miramont Castle with ornate woodwork',
                caption: 'Victorian grandeur inside the castle',
              },
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
              {
                src: '',
                alt: 'Historic pottery building with decorative tilework',
              },
            ],
            address: '600 S 21st St, Colorado Springs, CO 80904',
            coordinates: { lat: 38.8201, lng: -104.8089 },
            hours: 'Exterior viewable anytime; interior tours during pottery festival',
            price: 'Free',
            tip: 'Visit during the annual Colorado Springs Pottery Festival for interior access.',
          },
          {
            id: 'gem-crystal-park',
            type: 'hidden-gem',
            name: 'Crystal Park Quartz Collecting Area',
            category: 'Mineral Collecting',
            description:
              '2,000-acre gated mountain community above Manitou Springs named for quartz and gemstone crystals. Miarolitic cavities in pegmatites contain amazonite, smoky quartz, and fluorite. One of Colorado\'s oldest collecting localities. Private gated community with toll road access — collection only allowed on National Forest land outside gates.',
            images: [
              {
                src: '',
                alt: 'Clear quartz crystals and minerals in rock matrix',
              },
            ],
            address: 'Crystal Park Rd, Manitou Springs, CO 80829',
            coordinates: { lat: 38.8756, lng: -105.0234 },
            hours: 'Dawn-dusk (National Forest areas only)',
            price: 'Toll road fee applies',
            tip: 'Bring rock hammer and collect only from designated National Forest areas.',
          },
          {
            id: 'gem-rock-ledge-ranch',
            type: 'hidden-gem',
            name: 'Rock Ledge Ranch Historic Site',
            category: 'Living History',
            description:
              'National Register site depicting four time periods: 1775 American Indian camp, 1860s homestead, 1880s ranch, and 1907 Edwardian estate. "Half-hidden among evergreens" adjacent to Garden of the Gods, most visitors miss it entirely. Living history interpreters demonstrate period-appropriate activities. Donated by General William Jackson Palmer.',
            images: [
              {
                src: '',
                alt: 'Historic ranch buildings with mountain backdrop',
              },
            ],
            address: '3105 Gateway Rd, Colorado Springs, CO 80904',
            coordinates: { lat: 38.8845, lng: -104.8934 },
            hours: 'Wed-Sat 10am-5pm (Jun-Aug)',
            price: '$10 adults, $8 seniors, $5 children',
            website: 'https://rockledgeranch.com/',
            tip: 'Visit during living history events for the full experience.',
          },
          {
            id: 'gem-el-paso-club-dragon',
            type: 'hidden-gem',
            name: 'El Paso Club Dragon Finial',
            category: 'Architectural Oddity',
            description:
              'Queen Anne mansion (1883) with scaly mythological dragon\'s tail pointing skyward from the roofline. Oldest private club west of Mississippi. Architectural detail most people never notice. Dragon signifies "determination to guard the male sanctum" of this historic gentlemen\'s club. Still operates as private club today.',
            images: [
              {
                src: '',
                alt: 'Historic Victorian mansion with ornate architecture',
              },
            ],
            address: '20 N Cascade Ave, Colorado Springs, CO 80903',
            coordinates: { lat: 38.8356, lng: -104.8245 },
            hours: 'Private club — exterior viewing only',
            price: 'Free (exterior viewing)',
            tip: 'Look up at the roofline on the east side to spot the dragon tail.',
          },
          {
            id: 'gem-penny-arcade',
            type: 'hidden-gem',
            name: 'Manitou Springs Penny Arcade',
            category: 'Historic Arcade',
            description:
              '500+ antique arcade machines and kiddie rides across multiple buildings. Games from the 1930s played at original prices — literally pennies. Established 1933. Some machines over 100 years old. Fortune tellers, horse races, strength testers, and mutoscopes. Family-owned and operated for nearly a century.',
            images: [
              {
                src: 'https://pennyarcadecamparkfun.com/wp-content/uploads/Penny-Arcade-Interior-Vintage-Games.jpg',
                alt: 'Interior of Penny Arcade with vintage games and wooden floors',
                caption: 'A time capsule from 1932',
              },
              {
                src: '',
                alt: 'Vintage fortune-telling machine at Penny Arcade',
                caption: 'Antique fortune tellers in glass cases',
              },
            ],
            address: '930 Manitou Ave, Manitou Springs, CO 80829',
            coordinates: { lat: 38.8573, lng: -104.9119 },
            hours: 'Daily 10am-9pm (summer), 10am-6pm (winter)',
            price: 'Free entry, games 1¢-25¢',
            website: 'https://www.pennyarcade.com/',
            tip: 'Bring rolls of pennies and quarters — you\'ll want to play everything.',
          },
        ],
      },
      {
        id: 'cos-best-bars',
        type: 'best-of',
        category: 'bars',
        title: 'Best Bars',
        intro: 'The drinking scene is better than the evangelical reputation suggests.',
        spots: [
          {
            name: 'Oskar Blues Grill & Brew',
            neighborhood: 'Downtown',
            vibe: 'Craft brewery that started the canned craft beer movement. Lively taproom with Southern-inspired food, live music, and serious beer credentials.',
            order: 'Dale\'s Pale Ale — the original canned craft beer that changed the industry.',
            why: 'Oskar Blues literally invented the craft beer in a can movement in 2002, proving quality beer didn\'t need bottles. Their Colorado Springs location brings the same energy and innovation that started in Lyons. The Dale\'s Pale Ale you\'re drinking here revolutionized an entire industry.',
            address: '118 N Tejon St, Colorado Springs, CO 80903',
            coordinates: { lat: 38.8349, lng: -104.8247 },
            hours: 'Daily 11am-10pm',
            price: '$$',
            website: 'https://www.oskarblues.com/visit/colorado-springs/',
            images: [
              {
                src: 'https://www.oskarblues.com/wp-content/uploads/COS-Taproom-Interior.jpg',
                alt: 'Oskar Blues Colorado Springs taproom interior with taps and industrial decor',
              },
              {
                src: 'https://www.oskarblues.com/wp-content/uploads/Dales-Pale-Ale-Can.jpg',
                alt: 'Dale\'s Pale Ale can - the first craft beer in a can',
              },
            ],
          },
          {
            name: 'Dive Inn',
            neighborhood: 'Downtown',
            vibe: 'No pretense, no craft cocktails, no Edison bulbs — just a proper dive bar with cheap drinks, pool tables, and regulars who remember when this was the only kind of bar in town.',
            order: 'PBR and a shot of well whiskey. You\'re not here for artisanal anything.',
            why: 'In a city increasingly dominated by craft breweries and upscale cocktail lounges, Dive Inn is refreshingly, unapologetically unpretentious. Sticky floors, neon beer signs, a jukebox that still plays, and drinks priced like it\'s 1995. This is where service industry workers come after shift, where you can shoot pool without a crowd of tech bros watching, where nobody cares what you\'re wearing. It\'s the real thing — and in Colorado Springs\' evolving downtown, that\'s rarer than you\'d think.',
            address: '211 E Colorado Ave, Colorado Springs, CO 80903',
            coordinates: { lat: 38.8328, lng: -104.8209 },
            hours: 'Daily 11am-2am',
            price: '$',
            images: [
              {
                src: '',
                alt: 'Dive Inn interior with pool tables and neon beer signs',
                caption: 'No pretense — just cheap drinks and pool',
              },
            ],
          },
          {
            name: 'Principal\'s Office',
            neighborhood: 'Old Colorado City',
            vibe: 'Craft cocktails with serious ambition served inside a quirky Old Colorado City space. Creative seasonal menu, local ingredients, and bartenders who treat mixology like the craft it is.',
            order: 'Ask what\'s seasonal — the menu rotates with Colorado\'s growing seasons and the bartenders\' whims.',
            why: 'Principal\'s Office takes cocktails seriously without taking itself seriously. The drinks are meticulously crafted — house-made syrups, fresh herbs, creative infusions — but the vibe stays playful and approachable. Located in Old Colorado City\'s eclectic arts district, it attracts a crowd that appreciates good drinks and good conversation. The seasonal menu means you\'re always trying something new, and the bartenders genuinely want to make you something you\'ll love. In a town not known for cocktail culture, this is the place proving it can exist here.',
            address: '2632 W Colorado Ave, Colorado Springs, CO 80904',
            coordinates: { lat: 38.8470, lng: -104.8700 },
            hours: 'Tue-Sat 4pm-midnight',
            price: '$$$',
            images: [
              {
                src: 'https://principalsofficecos.com/wp-content/uploads/Principals-Office-Seasonal-Cocktail.jpg',
                alt: 'Seasonal craft cocktail at Principal\'s Office with fresh herbs',
                caption: 'Craft cocktails with Colorado ingredients',
              },
              {
                src: '',
                alt: 'Principal\'s Office bar with creative cocktail ingredients',
                caption: 'Mixology as craft, not pretense',
              },
            ],
          },
          {
            name: 'Phantom Canyon Brewing',
            neighborhood: 'Downtown',
            vibe: 'Historic brewpub in a stunning 1901 Cheyenne Building. Three floors of exposed brick, original tin ceilings, massive wooden bar, and gleaming copper brewing equipment visible behind glass. The kind of space that makes you glad someone saved the building.',
            order: 'The Phantom IPA if you like hops, the Cascade Amber if you don\'t. Pair with the beer-battered fish and chips or loaded nachos.',
            why: 'Phantom Canyon has been a downtown anchor since 1993, long before the current brewery boom. The building alone is worth the visit — originally housed the Cheyenne Block wholesale grocery, and the restoration preserved every beautiful detail. The beer is consistently solid across a rotating lineup of house-brewed styles. The food goes beyond typical brewpub fare. And the multi-level layout means you can find your vibe: bustling main floor bar, quieter upstairs dining, or the billiards room when you want to play. It\'s where locals bring out-of-town visitors to show them Colorado Springs has depth.',
            address: '2 E Pikes Peak Ave, Colorado Springs, CO 80903',
            coordinates: { lat: 38.8332, lng: -104.8256 },
            hours: 'Mon-Thu 11am-10pm, Fri-Sat 11am-11pm, Sun 11am-9pm',
            price: '$$',
            website: 'https://www.phantomcanyon.com',
            images: [
              {
                src: 'https://phantomcanyon.com/wp-content/uploads/Phantom-Canyon-Historic-Interior.jpg',
                alt: 'Phantom Canyon Brewing historic interior with exposed brick and tin ceilings',
                caption: 'Brewing inside a beautifully restored 1901 building',
              },
              {
                src: '',
                alt: 'Copper brewing equipment visible behind glass at Phantom Canyon',
                caption: 'House-brewed beer since 1993',
              },
            ],
          },
        ],
      },
      {
        id: 'cos-best-cafes',
        type: 'best-of',
        category: 'cafes',
        title: 'Best Coffee',
        intro: 'The altitude makes coffee taste different. These spots make it taste good.',
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
              {
                src: 'https://switchbackroasters.com/wp-content/uploads/downtown-location-interior.jpg',
                alt: 'Switchback Coffee Roasters downtown location interior with roasting equipment',
              },
              {
                src: '',
                alt: 'Pour-over coffee being brewed at Switchback Coffee',
              },
            ],
          },
          {
            name: 'Loyal Coffee',
            neighborhood: 'Downtown',
            vibe: 'Minimalist with excellent espresso',
            order: 'Cortado or flat white',
            why: 'Precise technique and consistent quality',
            address: '124 N Tejon St, Colorado Springs, CO 80903',
            coordinates: { lat: 38.8354, lng: -104.8248 },
            price: '$$',
            image: {
              src: '',
              alt: 'Perfectly crafted cortado with latte art',
            },
          },
          {
            name: 'Jives Coffee Lounge',
            neighborhood: 'North End',
            vibe: 'Eclectic with live music and events',
            order: 'Whatever\'s in the pastry case',
            why: 'More than coffee — it\'s a community space',
            address: '32 S Wahsatch Ave, Colorado Springs, CO 80903',
            coordinates: { lat: 38.8322, lng: -104.8206 },
            price: '$',
            image: {
              src: '',
              alt: 'Cozy coffee lounge with eclectic decor',
            },
          },
          {
            name: 'Building Three Coffee',
            neighborhood: 'Ivywild',
            vibe: 'Inside a converted school with Ivywild School food hall',
            order: 'Cold brew on a summer day',
            why: 'The Ivywild School complex is worth exploring',
            address: '1604 S Cascade Ave, Colorado Springs, CO 80905',
            coordinates: { lat: 38.8188, lng: -104.8253 },
            price: '$$',
            image: {
              src: '',
              alt: 'Cold brew coffee in converted school building cafe',
            },
          },
        ],
      },
      {
        id: 'cos-best-restaurants',
        type: 'best-of',
        category: 'restaurants',
        title: 'Best Restaurants',
        intro: 'The dining scene punches above its weight, from classic Western to unexpected global.',
        spots: [
          {
            name: 'The Rabbit Hole',
            neighborhood: 'Downtown',
            vibe: 'Elevated American comfort food with craft cocktails in a stylish underground space. Exposed brick, intimate lighting, and a menu that takes familiar classics seriously.',
            order: 'The Rabbit Hole burger — it\'s become legendary for good reason. Perfectly seasoned patty, house-made everything, and executed with precision.',
            why: 'The Rabbit Hole proves that elevated doesn\'t mean pretentious. They take simple American comfort food — burgers, sandwiches, salads — and execute each component at a level most restaurants reserve for their signature dishes. The burger is routinely called the best in Colorado Springs, and it deserves the hype. The craft cocktail program is equally serious. The space itself feels upscale without being stuffy, underground but not claustrophobic. It\'s date-night quality at prices that won\'t ruin your budget, and that\'s a rare combination.',
            address: '101 N Tejon St, Colorado Springs, CO 80903',
            coordinates: { lat: 38.8340, lng: -104.8248 },
            hours: 'Mon-Thu 11am-10pm, Fri-Sat 11am-midnight, Sun 10am-9pm',
            price: '$$',
            website: 'https://therabbitholecos.com',
            images: [
              {
                src: 'https://therabbitholecos.com/wp-content/uploads/Rabbit-Hole-Burger.jpg',
                alt: 'The Rabbit Hole\'s famous burger with perfectly melted cheese',
                caption: 'Legendary burger, meticulously executed',
              },
              {
                src: '',
                alt: 'The Rabbit Hole underground dining room with exposed brick',
                caption: 'Stylish underground space',
              },
            ],
          },
          {
            name: 'Shuga\'s',
            neighborhood: 'Downtown',
            vibe: 'Soulful Southern comfort food that feels like someone\'s grandmother is cooking in the back — which is basically what\'s happening. Warm, welcoming, and unapologetically indulgent.',
            order: 'The mac and cheese is required. Follow with fried chicken, collard greens, and cornbread. Trust every recommendation.',
            why: 'Shuga\'s serves food made with love, and you can taste it in every bite. This is real Southern soul food — recipes passed down through generations, techniques that can\'t be rushed, flavors that come from patience and care. The mac and cheese alone is worth the visit: creamy, rich, with that perfect golden-brown crust on top. The fried chicken is properly seasoned and perfectly crispy. The collards taste like they\'ve been simmering all day. In a city not known for soul food, Shuga\'s is the genuine article, and locals guard it fiercely.',
            address: '702 S Cascade Ave, Colorado Springs, CO 80903',
            coordinates: { lat: 38.8247, lng: -104.8248 },
            hours: 'Tue-Sat 11am-8pm, Sun 11am-6pm',
            price: '$$',
            website: 'https://shugas.com',
            images: [
              {
                src: 'https://shugas.com/wp-content/uploads/Shugas-Mac-and-Cheese.jpg',
                alt: 'Shuga\'s famous mac and cheese with golden crust',
                caption: 'Mac and cheese made with love',
              },
              {
                src: '',
                alt: 'Fried chicken plate with collard greens and cornbread at Shuga\'s',
                caption: 'Real Southern soul food',
              },
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
            website: 'https://pizzeriarusticacos.com',
            images: [
              {
                src: 'https://pizzeriarusticacos.com/wp-content/uploads/Pizzeria-Rustica-Margherita.jpg',
                alt: 'VPN-certified Neapolitan Margherita pizza with leopard-spotted crust',
                caption: 'Authentic Neapolitan pizza, VPN-certified',
              },
              {
                src: '',
                alt: 'Wood-fired pizza oven at 900°F at Pizzeria Rustica',
                caption: 'Fired at 900°F in a wood-burning oven',
              },
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
            images: [
              {
                src: '',
                alt: 'Perfectly seared ribeye steak at The Famous steakhouse',
                caption: 'Ribeye done right — no gimmicks needed',
              },
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
            website: 'https://adamsmountaincafe.com',
            images: [
              {
                src: '',
                alt: 'Korean-inspired bowl with fresh vegetables at Adam\'s Mountain Cafe',
                caption: 'Unexpected global flavors in the mountains',
              },
            ],
          },
        ],
      },
      {
        id: 'cos-coffee-shops',
        type: 'best-of',
        category: 'coffee-shops',
        title: 'Best Coffee Shops',
        intro: 'The altitude makes coffee taste different — and these spots make it taste exceptional.',
        spots: [
          {
            name: 'Loyal Coffee',
            neighborhood: 'Downtown',
            vibe: 'Minimalist third-wave with flawless technique. Light-filled space, concrete and wood finishes, serious about craft.',
            order: 'The cortado or flat white — their espresso work is impeccable.',
            why: 'Loyal Coffee has become one of the most respected coffee programs in Colorado. The owners trained extensively before opening, and it shows in every drink. The minimalist space lets the coffee speak for itself. Consistently ranked among the best in the state.',
            address: '124 N Tejon St, Colorado Springs, CO 80903',
            coordinates: { lat: 38.8354, lng: -104.8248 },
            hours: 'Mon-Sat 7am-6pm, Sun 8am-4pm',
            price: '$$',
            website: 'https://loyalcoffee.co',
            instagram: '@loyalcoffee',
            images: [
              {
                src: 'https://loyalcoffee.co/wp-content/uploads/Loyal-Coffee-Interior-Downtown.jpg',
                alt: 'Loyal Coffee downtown location with minimalist design and natural light',
                caption: 'Minimalist design lets the coffee speak for itself',
              },
              {
                src: '',
                alt: 'Barista pouring cortado at Loyal Coffee',
                caption: 'Impeccable espresso technique',
              },
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
              {
                src: 'https://storycoffeecompany.com/wp-content/uploads/Story-Coffee-Ivywild-Interior.jpg',
                alt: 'Story Coffee inside converted Ivywild School building',
                caption: 'A converted 1916 school turned coffee haven',
              },
              {
                src: '',
                alt: 'Coffee roasting equipment at Story Coffee',
                caption: 'Roasting beans on-site',
              },
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
              {
                src: 'https://switchbackroasters.com/wp-content/uploads/downtown-location-interior.jpg',
                alt: 'Switchback Coffee Roasters downtown location interior',
                caption: 'Mountain-town soul without pretension',
              },
              {
                src: '',
                alt: 'Pour-over coffee being brewed at Switchback Coffee',
                caption: 'Single-origin pour-overs',
              },
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
              {
                src: '',
                alt: 'Wayfinder Coffee with mountaineering aesthetic and maps on walls',
                caption: 'Adventure-inspired without being kitschy',
              },
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
              {
                src: '',
                alt: 'Building 3 Coffee inside Ivywild School with high ceilings',
                caption: 'Industrial-chic inside a converted school',
              },
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
            website: 'https://jivescoffee.com',
            instagram: '@jivescoffeelounge',
            images: [
              {
                src: '',
                alt: 'Jives Coffee Lounge with eclectic decor and local art',
                caption: 'A community hub, not just a coffee shop',
              },
            ],
          },
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
              year: '1966',
            },
            location: {
              name: 'Cheyenne Mountain',
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
              year: '1962',
            },
            location: {
              name: 'U.S. Air Force Academy',
              coordinates: { lat: 38.9983, lng: -104.8608 },
              stillExists: true,
            },
          },
        ],
      },
      {
        id: 'cos-dark-history',
        type: 'section',
        title: 'Dark History',
        teaser: 'Violence beneath the postcard scenery',
        intro: 'Colorado Springs sits in the shadow of Pikes Peak, a city of military precision, evangelical fervor, and stark natural beauty. But the same mountains that draw tourists also hide crimes. The Rampart Range has witnessed murders, mysterious disappearances, and stray bullets falling from the sky. From serial killers to unsolved ax murders to wildfires that consumed neighborhoods, this city\'s dark history reveals the violence lurking beneath the postcard scenery.',
        items: [
          {
            id: 'cos-dark-1',
            type: 'dark-history',
            category: 'cold-case',
            year: '1911',
            title: 'The 1911 Ax Murders — Six Dead in Two Houses',
            body: 'On the morning of September 17, 1911, someone stole an ax from a yard, entered two homes on West Dale Street, and brutally murdered six people with it. The victims were Alice May Burnham (25) and her children Alice (6) and John (3), plus Henry Wayne (30), his wife Blanche (26), and their daughter Blanche (2). All were found in their beds, heads caved in. Despite a massive investigation, no one was ever charged. Retired investigator Dwight Haverkorn wrote a book, "Murder in the Shadow of Pikes Peak" (2024), arguing this was part of a railroad-riding serial killer\'s spree that claimed 25 victims across five states in 1911.',
            verdict: 'Unsolved after 114 years. Tied for the deadliest mass murder in Colorado Springs history.',
            location: {
              name: 'West Dale Street',
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
              },
            ],
            images: [
              {
                src: '/images/dark-history/colorado-springs/1911-old-street.jpg',
                alt: 'Early 1900s residential street scene, representative of West Dale Street where the 1911 ax murders occurred',
              },
              {
                src: '/images/dark-history/colorado-springs/overview-pikes-peak-1.jpg',
                alt: 'Historic view of Pikes Peak and Colorado Springs from the early 1900s era',
              },
            ],
          },
          {
            id: 'cos-dark-2',
            type: 'dark-history',
            category: 'crime',
            year: '1991',
            title: 'Heather Dawn Church — Taken from Her Brother',
            body: 'On September 17, 1991, 13-year-old Heather Dawn Church was babysitting her younger brother at their Black Forest home when she was abducted. Despite extensive searches, her body wasn\'t found until September 16, 1993 — exactly two years later — when a transient camper discovered her remains on Rampart Range Road, 30 miles away. She had died from blunt force trauma. Three fingerprints on a window screen led police to Robert Charles Browne, who lived half a mile away. He was convicted in 1995 and later claimed to have killed 48 people across multiple states, though he\'s only been convicted of two murders. Heather\'s case was covered on True Crime Garage podcast.',
            verdict: 'Robert Charles Browne sentenced to life without parole. He remains at Limon Correctional Facility.',
            location: {
              name: 'Black Forest / Rampart Range Road',
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
              },
            ],
            images: [
              {
                src: '/images/dark-history/colorado-springs/heather-church-forest.jpg',
                alt: 'Dense forest terrain in the Black Forest area north of Colorado Springs where Heather Church was abducted',
              },
              {
                src: '/images/dark-history/colorado-springs/heather-church-dirt-road.jpg',
                alt: 'Remote dirt road through the forest, similar to Rampart Range Road where Heather Church\'s remains were discovered',
              },
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
            category: 'disaster',
            year: '2012',
            title: 'Waldo Canyon Fire — The Day the Mountain Burned',
            body: 'On June 23, 2012, a wildfire ignited in Waldo Canyon west of Colorado Springs. Within days, it became a firestorm. On June 26, shifting winds drove the fire into Mountain Shadows and other northwest neighborhoods. Residents had minutes to evacuate as flames jumped Interstate 25. The fire destroyed 346 homes and killed two people, burning 18,247 acres total. Entire streets were reduced to foundations and chimneys.',
            verdict: 'Two dead, 346 homes destroyed. The fire changed how Colorado Springs thinks about wildfire risk.',
            location: {
              name: 'Waldo Canyon / Mountain Shadows neighborhood',
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
              },
            ],
            images: [
              {
                src: '/images/dark-history/colorado-springs/burned-forest.jpg',
                alt: 'Charred forest landscape after the Waldo Canyon Fire devastated the area west of Colorado Springs',
              },
            ],
          },
          {
            id: 'cos-dark-4',
            type: 'dark-history',
            category: 'disaster',
            year: '2013',
            title: 'Black Forest Fire — Colorado\'s Most Destructive',
            body: 'One year after Waldo Canyon, another fire struck. On June 11, 2013, the Black Forest Fire began near Highway 83. Fueled by 100°F heat, gusty winds, and drought-dry forests, it became the most destructive fire in Colorado history at the time, burning 14,280 acres and destroying at least 509 homes. Marc and Robin Herklotz, a married couple, died attempting to evacuate. The fire was ruled human-caused but investigators never determined exactly how it started. The Marshall Fire in Boulder County (2021) later surpassed it in homes destroyed.',
            verdict: 'Two dead, 509 homes destroyed. The most destructive wildfire in Colorado history until 2021.',
            location: {
              name: 'Black Forest',
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
              },
            ],
            images: [
              {
                src: '/images/dark-history/colorado-springs/burned-forest.jpg',
                alt: 'Devastated forest landscape showing the aftermath of the Black Forest Fire, Colorado\'s most destructive wildfire until 2021',
              },
            ],
          },
          {
            id: 'cos-dark-5',
            type: 'dark-history',
            category: 'unsolved',
            year: '2004',
            title: 'Tim Watkins — Shot While Mountain Biking',
            body: 'On October 12, 2004, 60-year-old Tim Watkins went mountain biking on Limbaugh Canyon Trail in Palmer Lake. When he didn\'t return, friends searched and found his bike. Days later, searchers found his body buried in a shallow grave off the trail. He had been shot. The case stumped investigators. Watkins had no known enemies. The location — near Rampart Range — raised questions about whether the shooting was random or targeted.',
            verdict: 'Unsolved. The Rampart Range keeps its secrets.',
            location: {
              name: 'Limbaugh Canyon Trail, Palmer Lake',
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
              },
            ],
            images: [
              {
                src: '/images/dark-history/colorado-springs/mountain-biking-trail.jpg',
                alt: 'Mountain biking trail through Colorado forest, similar to Limbaugh Canyon Trail where Tim Watkins was killed',
              },
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
            year: '2007',
            title: 'New Life Church Shooting',
            body: 'On December 9, 2007, Matthew Murray opened fire at a Youth With A Mission (YWAM) training center in Arvada, killing two and wounding two. That afternoon, he drove to New Life Church in Colorado Springs and opened fire in the parking lot, killing two more people. Jeanne Assam, a former police officer serving as a volunteer security guard, engaged Murray and shot him multiple times. Murray then killed himself. Assam\'s actions likely prevented a massacre — Murray carried over 1,000 rounds of ammunition. The incident changed how churches approach security nationwide.',
            verdict: 'Four dead, including the shooter. Jeanne Assam was hailed as a hero.',
            location: {
              name: 'New Life Church, 11025 Voyager Pkwy',
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
              },
            ],
            images: [
              {
                src: '/images/dark-history/colorado-springs/modern-church.jpg',
                alt: 'Modern megachurch building, representative of New Life Church where the 2007 shooting occurred',
              },
            ],
          },
          {
            id: 'cos-dark-7',
            type: 'dark-history',
            category: 'crime',
            year: '2015',
            title: 'Planned Parenthood Shooting',
            body: 'On November 27, 2015, Robert Dear opened fire at a Planned Parenthood clinic, killing three people and wounding nine in a five-hour siege. The dead were University of Colorado police officer Garrett Swasey, Iraq War veteran Ke\'Arre Stewart, and mother Jennifer Markovsky. Dear surrendered after a standoff. He reportedly said "no more baby parts" after his arrest, referencing debunked videos targeting Planned Parenthood. Dear was found incompetent to stand trial and never prosecuted. He died in federal custody on November 22, 2025, five days before the tenth anniversary.',
            verdict: 'Three dead, nine wounded. Dear died in custody before trial. The motive was ideological violence.',
            location: {
              name: 'Planned Parenthood, 3480 Centennial Blvd',
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
              },
            ],
            images: [
              {
                src: '/images/dark-history/colorado-springs/vigil-candles.jpg',
                alt: 'Memorial vigil candles honoring the victims of the Planned Parenthood shooting',
              },
            ],
          },
          {
            id: 'cos-dark-8',
            type: 'dark-history',
            category: 'crime',
            year: '2022',
            title: 'Club Q Shooting — Five Dead',
            body: 'On November 19, 2022, just before midnight on Transgender Day of Remembrance, a gunman entered Club Q, an LGBTQ+ nightclub, and opened fire with an AR-15-style rifle. Five people were killed: Daniel Aston (28), Raymond Green Vance (22), Kelly Loving (40), Ashley Paugh (35), and Derrick Rump (38). Twenty-five others were wounded. The shooter was subdued by patrons, including U.S. Army veteran Richard Fierro, who tackled him and beat him with his own gun. The attack was one of the deadliest against the LGBTQ+ community in U.S. history.',
            verdict: 'Five dead, 25 wounded. The shooter pleaded guilty and received life sentences. Tied for deadliest mass killing in Colorado Springs history.',
            location: {
              name: 'Club Q, 3430 N Academy Blvd',
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
              },
            ],
            images: [
              {
                src: '/images/dark-history/colorado-springs/pride-memorial.jpg',
                alt: 'Pride flag memorial honoring the victims of the Club Q shooting on Transgender Day of Remembrance',
              },
              {
                src: '/images/dark-history/colorado-springs/rainbow-flag.jpg',
                alt: 'Rainbow pride flag symbolizing the LGBTQ+ community attacked at Club Q',
              },
            ],
          },
          {
            id: 'cos-dark-9',
            type: 'dark-history',
            category: 'mystery',
            year: '2015',
            title: 'The Rampart Range Stray Bullet Death',
            body: 'On July 4, 2015, Glenn Martin was sitting by a campfire with his family at Rainbow Falls in Pike National Forest when a stray bullet fell from the sky and struck him in the head. He died within minutes. The bullet likely came from someone shooting recreationally in the Rampart Range, where target shooting is common but regulations are sparse. Despite investigations, no shooter was ever identified.',
            verdict: 'Unsolved. The Rampart Range remains a place where bullets fall from nowhere.',
            location: {
              name: 'Rainbow Falls, Pike National Forest (Rampart Range)',
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
              },
            ],
            images: [
              {
                src: '/images/dark-history/colorado-springs/mountain-camping.jpg',
                alt: 'Mountain campsite in Pike National Forest, similar to Rainbow Falls where Glenn Martin was killed by a stray bullet',
              },
            ],
          },
          {
            id: 'cos-dark-10',
            type: 'dark-history',
            category: 'haunting',
            year: '1890s–present',
            title: 'Evergreen Cemetery — The Chapel of Shadows',
            body: 'Evergreen Cemetery, established in 1871, is one of Colorado\'s oldest and most haunted burial grounds. More than 90,000 people are buried across its 220 acres. The historic chapel is the epicenter of paranormal activity — visitors report strange noises, unexplained sounds, and dark figures near the casket-lifting device and staircase. During nighttime tours, guests have photographed a flying figure hovering over tombstones — described as a five-foot cat-like entity that doesn\'t touch the ground. The cemetery was featured on the Biography Channel\'s "My Ghost Story." Even cemetery employees admit the place feels eerie, especially after dark.',
            verdict: 'The cemetery is open to the public. The ghosts don\'t follow a schedule.',
            location: {
              name: 'Evergreen Cemetery, 1005 S Hancock Expy',
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
              },
            ],
            images: [
              {
                src: '/images/dark-history/colorado-springs/old-cemetery.jpg',
                alt: 'Historic Evergreen Cemetery in Colorado Springs, established 1871, known for paranormal activity',
              },
              {
                src: '/images/dark-history/colorado-springs/historic-cemetery.jpg',
                alt: 'Old tombstones and mature trees at Evergreen Cemetery, one of Colorado\'s most haunted sites',
              },
            ],
          },
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
              },
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
              },
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
              },
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
              },
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
              },
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
              },
            ],
          },
        ],
      },
    ],
  }
