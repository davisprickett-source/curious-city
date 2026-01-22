import type { Article } from '@/types/article'

export const maxwellStreet: Article = {
  slug: 'maxwell-street-blues',
  citySlug: 'chicago',
  title: 'Maxwell Street: The Birthplace of Chicago Blues That the City Demolished',
  subtitle: 'Muddy Waters played here. Howlin\' Wolf played here. The sound that changed world music was born in an open-air market where Jewish merchants gave Black musicians electricity. Then the University of Illinois bulldozed it for parking lots.',
  excerpt: 'Maxwell Street Market was where Chicago blues was born — where Muddy Waters, Howlin\' Wolf, and Little Walter first plugged in and played electric. Jewish merchants gave them extension cords. The music changed the world. Then, in the 1990s, the University of Illinois demolished the whole thing for student housing. The birthplace of American music became a Jamba Juice.',
  author: {
    name: 'Marcus Reid',
    bio: 'Music and nightlife historian tracking the evolution of urban entertainment districts and underground scenes.',
  },
  publishedAt: '2025-01-22T12:00:00Z',
  featuredImage: {
    src: '/chicago/articles/maxwell-street.png',
    alt: 'Maxwell Street Market in its heyday, 1960s',
    credit: 'Maxwell Street Foundation',
  },
  category: 'history',
  tags: ['chicago', 'music-history', 'blues', 'urban-renewal', 'displacement', 'gentrification'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'There\'s a Jamba Juice on South Halsted Street where Muddy Waters used to play. Across the street, where Howlin\' Wolf first plugged in an electric guitar and created a sound that would reshape American music, there\'s now a Caribou Coffee. A few blocks over, where Little Walter bent his harmonica notes through an amplifier and invented a style copied by every blues harp player since, there are townhouses priced at $450,000.',
        },
        {
          type: 'paragraph',
          content: 'This is what remains of Maxwell Street Market — the birthplace of Chicago blues, demolished in the name of progress. For over a century, it was where America came to reinvent itself: Jewish immigrants fleeing pogroms, Black migrants escaping Jim Crow, musicians transforming Delta blues into something electric and urban and revolutionary. Then the University of Illinois decided it needed the land. The market was declared blighted. The buildings came down. And the sound that changed the world became a memory buried under student housing.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Street Before the Market',
        },
        {
          type: 'paragraph',
          content: 'Maxwell Street first appeared on a Chicago map in 1847, named for Philip Maxwell, an Army surgeon at Fort Dearborn who later became Illinois State Treasurer. It was a wooden plank road running from the Chicago River west to Blue Island Avenue. For three decades, it was just a street.',
        },
        {
          type: 'paragraph',
          content: 'The market came later, around 1880, when Eastern European Jews fleeing pogroms in Russia, Poland, and Romania started setting up pushcarts and selling whatever they could get their hands on. At first, it was informal — just immigrants trying to survive. By 1912, the city made it official, passing an ordinance that recognized Maxwell Street as Chicago\'s open-air market.',
        },
        {
          type: 'paragraph',
          content: 'The market operated on Sundays, perfect timing for Jewish vendors who observed their Sabbath on Saturday. At its peak, the Maxwell Street area was home to 50,000 Jews — virtually all from Eastern Europe. They brought with them kosher meat markets, matzah bakeries, tailor shops, and the entrepreneurial hustle that turned a nine-block radius into Chicago\'s third-largest retail district.',
        },
        {
          type: 'quote',
          content: 'The favorite occupation, probably on account of the small capital required, is fruit and vegetable peddling.',
          attribution: 'Chicago Tribune',
          role: '1891 observation',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Great Migration',
        },
        {
          type: 'paragraph',
          content: 'After 1920, the demographics shifted. Black Americans from the South began arriving in Chicago in staggering numbers — 700,000 in the 1910s, another 800,000 in the 1920s. They came for work, for safety, for escape from the violent enforcement of Jim Crow. Chicago\'s Black population increased fivefold by 1930, and Maxwell Street became one of the few places where they could live, work, and be heard.',
        },
        {
          type: 'paragraph',
          content: 'They brought their music with them — Delta blues, acoustic and raw, the sound of Mississippi cotton fields and juke joints. But Maxwell Street changed it. The market was loud. Vendors shouted. Crowds haggled. To be heard above the din, musicians needed amplification.',
        },
        {
          type: 'paragraph',
          content: 'And the Jewish merchants helped. They ran extension cords from their storefronts. They encouraged musicians to set up nearby, knowing that a good blues player attracted crowds, and crowds bought things. It was a partnership born of economics and geography, but it created something neither group could have predicted: a new sound.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Innovation',
          content: 'Electric blues wasn\'t invented in a studio or a club. It was invented on a street corner, where musicians realized they needed to compete with the noise of commerce. They plugged in, turned up the volume, and distorted their sound into something that had never existed before: Chicago blues.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Sound',
        },
        {
          type: 'paragraph',
          content: 'The names that played Maxwell Street read like a history of American music. Muddy Waters, who transformed Mississippi Delta blues into something electric and urban. Howlin\' Wolf, whose raw power defined the Chicago sound. Little Walter, who turned the harmonica into a lead instrument by playing it through a guitar amplifier.',
        },
        {
          type: 'paragraph',
          content: 'Bo Diddley performed there with slide guitarist Earl Hooker. Elmore James bent strings that would influence every rock guitarist who came after. Big Bill Broonzy mentored the new arrivals from the South. Willie Dixon wrote songs that became rock and roll standards. Maxwell Street Jimmy Davis played the same corner for forty years.',
        },
        {
          type: 'paragraph',
          content: 'These musicians played for spare change from passersby. They were street performers, buskers, creating art in an open-air market where people came to buy used tools and week-old produce. And from those street corners, they graduated to the clubs — and from the clubs to Chess Records.',
        },
        {
          type: 'paragraph',
          content: 'Chess Records, run by Leonard and Phil Chess, two Jewish immigrant brothers from Poland, became the most important blues label in America. They recorded Muddy Waters, Howlin\' Wolf, Little Walter, and dozens of others who\'d cut their teeth on Maxwell Street. The pipeline was direct: play the street, get noticed, get recorded, change music history.',
        },
        {
          type: 'quote',
          content: 'The blues is the facts of life.',
          attribution: 'Willie Dixon',
          role: 'Chess Records producer and songwriter',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Economics',
        },
        {
          type: 'paragraph',
          content: 'Maxwell Street wasn\'t just culturally important — it was economically vital. At its peak, before 1920, it was Chicago\'s third-largest retail district after the Loop and Halsted/63rd. By the mid-20th century, it supported 850 vendors who generated $3.2 million in annual net income. On summer Sundays, 20,000 people crowded the market.',
        },
        {
          type: 'paragraph',
          content: 'The low barriers to entry made it a ladder for upward mobility. You needed a pushcart and merchandise — maybe $50 total. You paid ten cents a day for a permit. If you worked hard and were lucky, you could save enough to open a storefront. From there, maybe a small chain. The market produced successful businesses: Mages, Keeshins, Fluky\'s. Rags to riches wasn\'t guaranteed, but it was possible.',
        },
        {
          type: 'paragraph',
          content: 'This mattered because most of the city was closed to both Jewish and Black entrepreneurs. Restrictive covenants, discriminatory lending, and outright racism meant Maxwell Street was often the only option. The market wasn\'t integrated by choice — it was integrated by necessity. And in that necessity, something remarkable emerged.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Slow Demolition',
        },
        {
          type: 'paragraph',
          content: 'The University of Illinois at Chicago had been expanding since its founding in 1965. By the 1980s, it wanted Maxwell Street. The strategy was patient: buy land quietly, let buildings decay, wait for the neighborhood to empty. There were rumors — never confirmed but widely believed — that UIC circulated speculation about exercising eminent domain. Property values dropped. People moved out.',
        },
        {
          type: 'paragraph',
          content: 'In 1994, the city moved the market from Maxwell Street to Canal Street, reducing licensed vendors from 800 to 450 and limiting operations to Sundays only. The annual permit fee jumped from $25 to $35 per day. Many vendors couldn\'t afford it. Those who could found the new location isolated and poorly attended.',
        },
        {
          type: 'paragraph',
          content: 'Preservationists fought back. In 1994 and again in 2000, the community petitioned to list the Maxwell Street Market area on the National Register of Historic Places. Both petitions were rejected. The 2000 petition covered 43 contributing buildings and had support from the Illinois Historic Sites Advisory Council. But the Illinois Historic Preservation Agency opposed it — too much fabric had already been removed. The city of Chicago recommended against nomination, citing the area\'s "blighted condition."',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Who Decides What\'s Blight?',
          content: 'The area was declared blighted after years of deliberately withholding services and allowing decay. The condition used to justify demolition was created by the institution doing the demolishing. This is textbook urban renewal: create the blight, declare it unsalvageable, tear it down.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Protests',
        },
        {
          type: 'paragraph',
          content: 'In 2000, as demolition loomed, Johnnie Mae Dunson Smith — known as the Queen of Maxwell Street — emerged from obscurity at age 79 to become the face of resistance. She\'d come to Chicago in 1943, become a fixture of the Maxwell Street music scene, and written songs for Jimmy Reed and Muddy Waters. She sang blues protest songs at community meetings and in preservation coalition videos.',
        },
        {
          type: 'paragraph',
          content: 'Jimmie Lee Robinson, a blues musician who\'d played Maxwell Street for decades, mounted an 81-day hunger strike to protest UIC\'s expansion. He wrote "Maxwell Street Teardown Blues" and performed it on the street as wrecking balls knocked apart brick facades behind him. He sang as the buildings fell.',
        },
        {
          type: 'paragraph',
          content: 'It didn\'t matter. In November 2000, the Chicago City Council approved UIC\'s $525 million South Campus Development Project (final cost: $700 million). The plan called for student housing, academic buildings, and retail space. By 2002, the final buildings were demolished. By 2003, townhouses and dorms had replaced the market.',
        },
        {
          type: 'paragraph',
          content: 'Where Nate\'s Deli had served customers for 70 years, there was now a Caribou Coffee. Where Jim\'s Original had invented the Maxwell Street Polish sausage in 1943, there was now a sports bar. Where Muddy Waters had first plugged in an electric guitar, there were condos.',
        },
        {
          type: 'quote',
          content: 'I just kept playing. What else could I do? The wrecking ball was literally swinging behind me, and I was singing the blues about it. That\'s all we ever had — our music.',
          attribution: 'Jimmie Lee Robinson',
          role: 'Blues musician and activist',
        },
        {
          type: 'heading',
          level: 2,
          content: 'What Was Lost',
        },
        {
          type: 'paragraph',
          content: '850 vendors displaced. $3.2 million in annual economic activity eliminated. 20,000 Sunday shoppers with nowhere to go. About 200 vendors who lived within three miles of the market — for whom the walk to work was part of daily life — suddenly had no livelihood.',
        },
        {
          type: 'paragraph',
          content: 'But the real loss was cultural. Maxwell Street was where immigrants became Americans, where Black musicians transformed rural folk music into urban blues, where economic desperation created entrepreneurial hustle, where Jewish merchants and Black artists formed an unlikely partnership that changed music history.',
        },
        {
          type: 'paragraph',
          content: 'It was messy and chaotic and sometimes dangerous. It was also irreplaceable. The sterile "University Village" development that replaced it has townhouses and coffee shops and grass. What it doesn\'t have is soul.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Afterlife',
        },
        {
          type: 'paragraph',
          content: 'The market didn\'t die entirely — it just became a ghost of itself. After being moved to Canal Street in 1994, it was moved again to Des Plaines Avenue in 2008. In 2024, thirty years after being displaced, the market returned to Maxwell Street for the first time — but only one Sunday a month, May through October.',
        },
        {
          type: 'paragraph',
          content: 'The comparison is brutal. In the 1990s: 1,200 vendors, weekly operations, $3.2 million in annual business. In 2024: fewer than 50 vendors, six days a year, a shadow of what existed. The name is the same. Everything else is gone.',
        },
        {
          type: 'paragraph',
          content: 'Jim\'s Original, the stand that invented the Maxwell Street Polish sausage, survived by relocating twice — first in 2001, then in 2005 to its current location at 1250 South Union Avenue. It remains the most tangible connection to the market\'s past, serving the same sandwich that\'s been synonymous with Chicago street food since 1943.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Blues Brothers',
          content: 'In 1980, John Lee Hooker appeared in The Blues Brothers as "Street Slim," performing "Boom Boom" outside Nate\'s Deli on Maxwell Street. Unlike most musical numbers in the film, this was recorded live. It\'s one of the only video documents of what Maxwell Street actually looked, sounded, and felt like.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Pattern',
        },
        {
          type: 'paragraph',
          content: 'Maxwell Street\'s story is not unique. It\'s a template that\'s been repeated across America: a vibrant community of color is declared blighted, services are withdrawn, property values drop, institutions claim they\'re saving the neighborhood by demolishing it. What replaces it is cleaner, safer, more expensive, and culturally sterile.',
        },
        {
          type: 'paragraph',
          content: 'Urban renewal was supposed to eliminate slums. What it actually eliminated was communities. The Maxwell Street area wasn\'t failing — it was supporting 850 vendors and generating millions in annual revenue. It was declared a failure by people who wanted the land for something else.',
        },
        {
          type: 'paragraph',
          content: 'And when it was gone, the story was rewritten. The official narrative became: Maxwell Street was a relic, it had to go, progress required sacrifice. What doesn\'t get mentioned is who made the profit and who made the sacrifice.',
        },
        {
          type: 'quote',
          content: 'They called it urban renewal. We called it Negro removal.',
          attribution: 'James Baldwin',
          role: 'Writer and civil rights activist',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'Walk through University Village today and try to imagine Muddy Waters setting up his amplifier, Howlin\' Wolf bending his guitar strings, crowds gathering to hear something they\'d never heard before. Try to imagine the pushcarts, the haggling in five languages, the smell of grilled sausages and used leather, the electricity — literal and figurative — that powered the place.',
        },
        {
          type: 'paragraph',
          content: 'You can\'t. It\'s gone. Buried under townhouses and coffee shops and the sanitized memory of what Chicago was before it decided to become something cleaner and whiter and less interesting.',
        },
        {
          type: 'paragraph',
          content: 'The blues that were born there — that electric, amplified, distorted sound that would become rock and roll — survived. It spread worldwide. But the place where it was invented is now a parking lot. Progress, they called it. The bulldozers came anyway.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Finding What Remains',
          content: 'Jim\'s Original (1250 South Union Avenue) still serves the Maxwell Street Polish sausage. The Maxwell Street Market returns to its original location one Sunday per month, May-October, between South Halsted and South Union. The Maxwell Street Foundation preserves oral histories, photographs, and documents at maxwellstreetfoundation.org.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'Maxwell Street Market was where Chicago blues was born. Muddy Waters, Howlin\' Wolf, and Little Walter played there. Then the University of Illinois demolished it for student housing.',
  },
}
