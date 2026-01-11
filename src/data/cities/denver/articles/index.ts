import type { Article } from '@/types/article'
import { castlewoodDam } from './castlewood-dam'
import { flight629 } from './flight-629'
import { hopAlley } from './hop-alley'

export const blucifer: Article = {
  slug: 'blucifer-demon-horse',
  citySlug: 'denver',
  title: 'Blucifer: The Demon Horse That Murdered Its Creator',
  subtitle: 'A 32-foot blue stallion with glowing red eyes guards Denver\'s airport. It killed the artist who made it. Locals call it Blucifer. The airport is fine with this.',
  excerpt: 'Denver International Airport is greeted by a 32-foot blue mustang with veins bulging and eyes glowing hellfire red. The sculpture killed its creator when a piece fell on him, severing an artery. Locals call it Blucifer. The airport sells merchandise about it. Welcome to Denver.',
  author: {
    name: 'The Curious City',
    bio: 'Investigating civic oddities',
  },
  publishedAt: '2025-01-09T12:00:00Z',
  featuredImage: {
    src: '/denver/articles/blucifer.png',
    alt: 'Blue Mustang sculpture at Denver International Airport with glowing red eyes',
    credit: 'Denver International Airport',
  },
  category: 'feature',
  tags: ['denver', 'public-art', 'airport', 'urban-legends', 'sculpture', 'weird'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'If you\'ve ever flown into Denver International Airport, you\'ve seen it. Rising from the plains like a fever dream, a 32-foot blue mustang rears against the Colorado sky, veins bulging across its electric-blue haunches, eyes burning an arterial red. At night, those eyes glow. They\'re LEDs, illuminated from within, and they stare directly at approaching traffic as if daring you to enter.',
        },
        {
          type: 'paragraph',
          content: 'The sculpture\'s official name is "Blue Mustang." Absolutely nobody calls it that. To Denverites, it\'s Blucifer — the demon horse — and its story is even stranger than it looks.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Artist',
        },
        {
          type: 'paragraph',
          content: 'Luis Jiménez was a Mexican-American sculptor from El Paso, known for large-scale fiberglass works depicting themes of the American West. His pieces stood in the Smithsonian and the National Museum of American Art. He\'d spent his career creating monumental public sculptures — horses, cowboys, vaqueros — works that celebrated Chicano culture and Western iconography.',
        },
        {
          type: 'paragraph',
          content: 'In 1993, the Denver Airport Art Program commissioned Jiménez to create a sculpture for their new airport. He proposed a massive blue stallion — a symbol of the wild West, of freedom, of the untamed spirit that Denver imagines itself to embody. The design was approved. The work began.',
        },
        {
          type: 'paragraph',
          content: 'It would take Jiménez years to complete. Blue Mustang would be his largest sculpture yet: 32 feet tall, weighing 9,000 pounds, constructed of steel armature and fiberglass with an automotive paint finish. The blue color was intentional, representing the night sky of the American West. The glowing red eyes were meant to reference the wild mustangs of legend.',
        },
        {
          type: 'quote',
          content: 'I wanted to create an icon for the West — something powerful and mythic. The horse represents freedom and the untamed spirit of the frontier.',
          attribution: 'Luis Jiménez',
          role: 'Artist',
        },
        {
          type: 'paragraph',
          content: 'He couldn\'t have known that his masterpiece would kill him.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Death',
        },
        {
          type: 'paragraph',
          content: 'On June 13, 2006, Luis Jiménez was working in his studio in Hondo, New Mexico, preparing Blue Mustang\'s final pieces for transport to Denver. The sculpture was being constructed in sections, each massive fiberglass component requiring careful handling.',
        },
        {
          type: 'paragraph',
          content: 'That afternoon, a section of the sculpture came loose from a hoist. The piece — part of the horse\'s massive body — swung down and struck Jiménez in the leg, severing his femoral artery. He bled to death in his studio, surrounded by the work that had consumed the last years of his life.',
        },
        {
          type: 'paragraph',
          content: 'He was sixty-five years old. Blue Mustang was still not complete.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Irony',
          content: 'Luis Jiménez was killed by the sculpture he\'d spent over a decade creating. The horse that was meant to symbolize freedom and the wild spirit of the West took its creator\'s life before it was finished.',
        },
        {
          type: 'paragraph',
          content: 'Jiménez\'s family made a decision: they would complete Blue Mustang. His sons, Adan and Orion, along with studio assistants who\'d worked with Luis for years, finished the sculpture according to his designs. The horse that killed the father was completed by the sons.',
        },
        {
          type: 'paragraph',
          content: 'Blue Mustang was finally installed at Denver International Airport on February 11, 2008 — nearly fifteen years after the commission. The ceremony was bittersweet. Luis Jiménez wasn\'t there to see his vision realized. His family stood in his place.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Reaction',
        },
        {
          type: 'paragraph',
          content: 'Denver did not love Blucifer. Not at first, anyway.',
        },
        {
          type: 'paragraph',
          content: 'The sculpture\'s appearance sparked immediate controversy. Letters to the editor called it "terrifying," "demonic," and "inappropriate for children." The glowing red eyes, which lit up at dusk, were particularly unsettling. Parents complained that their kids were scared. Residents called for its removal. An online petition gathered thousands of signatures demanding the horse be taken down.',
        },
        {
          type: 'quote',
          content: 'That thing is terrifying. It looks like it\'s about to come alive and trample you. And then you find out it killed the artist? That\'s not a feature, that\'s a warning.',
          attribution: 'Denver Post letter to the editor',
          role: '2008',
        },
        {
          type: 'paragraph',
          content: 'But the airport didn\'t budge. Blue Mustang had been commissioned, completed, and installed according to plan. It wasn\'t going anywhere. City officials noted that the sculpture was public art, meant to provoke reaction. They suggested that Denver would grow to appreciate it.',
        },
        {
          type: 'paragraph',
          content: 'And slowly, weirdly, Denver did.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Conspiracy Theories',
        },
        {
          type: 'paragraph',
          content: 'Denver International Airport is a magnet for conspiracy theories. The airport opened in 1995 — over budget, behind schedule, and with a baggage system that didn\'t work. Conspiracy theorists immediately noticed oddities: runways laid out in a swastika shape (they\'re not), murals depicting apocalyptic scenes (they do exist, and they\'re strange), and plaques from the "New World Airport Commission" (a made-up name, for reasons nobody can explain).',
        },
        {
          type: 'paragraph',
          content: 'Theories proliferated: the airport was built over a secret underground bunker for the global elite. The Illuminati were involved. Lizard people had somehow factored in. Then Blucifer arrived, and the conspiracy theories reached a new fever pitch.',
        },
        {
          type: 'paragraph',
          content: 'The demon horse, with its glowing eyes and terrifying visage, became Exhibit A for those convinced DIA was an occult operation. The fact that it killed its creator only added to the mystique. A horse that murders artists? Clearly supernatural. Obviously demonic. Definitely part of the plan.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'DIA Conspiracy Lore',
          content: 'Denver International Airport has embraced its reputation so thoroughly that it now sells conspiracy theory merchandise in its gift shops. T-shirts, mugs, and posters reference secret bunkers, lizard people, and yes, Blucifer. The airport has learned to monetize the absurd.',
        },
        {
          type: 'paragraph',
          content: 'The airport eventually leaned into it. In 2018, DIA installed a talking gargoyle in the Great Hall who joked with passengers about conspiracy theories and "the lizard people." The gift shops sell "Blucifer" merchandise. The airport\'s social media accounts regularly reference the demon horse with obvious affection. What was once a liability became a brand.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Symbolism',
        },
        {
          type: 'paragraph',
          content: 'What did Luis Jiménez actually intend? The artist\'s own explanations were straightforward: the blue color represented the night sky of the American West. The wild, rearing pose captured the spirit of the mustangs that once roamed the plains. The veins represented the horse\'s power and vitality. The red eyes... well, he wanted them to be striking.',
        },
        {
          type: 'paragraph',
          content: 'Jiménez came from a tradition of Chicano art that celebrated working-class stories and Western iconography. His other works — vaqueros, Southwest Man, fiesta dancers — shared similar bold colors and muscular forms. Blue Mustang was consistent with his artistic vision, just executed on a much larger scale.',
        },
        {
          type: 'paragraph',
          content: 'The "demonic" interpretation was never intentional. But Jiménez died, and the sculpture arrived in Denver without him to explain it. The horse became a Rorschach test: whatever meaning people found in it, that meaning stuck.',
        },
        {
          type: 'quote',
          content: 'My father would have been amused by all the controversy. He wanted his art to make people feel something. I think Blucifer accomplishes that, even if the feeling is terror.',
          attribution: 'Adan Jiménez',
          role: 'Son of the artist',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Strange Affection',
        },
        {
          type: 'paragraph',
          content: 'Something odd happened over the years: Denver started to love Blucifer. Not despite the weirdness, but because of it.',
        },
        {
          type: 'paragraph',
          content: 'The sculpture became a mascot. A meme. A symbol of Denver\'s willingness to be strange. When friends visit, locals make sure they see "the demon horse." When sports teams need a good luck charm, Blucifer gets invoked. When Denver wants to prove it\'s not a boring flyover city, Blucifer is exhibit A.',
        },
        {
          type: 'paragraph',
          content: 'The nickname itself — Blucifer — reflects this transformation. It\'s affectionate. It\'s a little bit proud. It acknowledges the sculpture\'s unsettling nature while claiming it as uniquely Denver. Other cities have bland public art. Denver has a demon horse that killed its creator. Beat that.',
        },
        {
          type: 'paragraph',
          content: 'There\'s even been pushback when anyone suggests removing it. The same residents who once signed petitions against Blue Mustang now defend it fiercely. It\'s weird, but it\'s our weird. It\'s terrifying, but it\'s ours.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Legacy',
        },
        {
          type: 'paragraph',
          content: 'Luis Jiménez spent his career creating public art meant to challenge and inspire. He probably didn\'t imagine that his most famous work would be known for its demonic appearance and for killing him. But in a strange way, Blue Mustang accomplished what great public art should: it provokes reaction. It demands attention. It refuses to be ignored.',
        },
        {
          type: 'paragraph',
          content: 'Every day, tens of thousands of travelers pass Blucifer on their way to and from Denver International Airport. Some are terrified. Some laugh. Some snap photos for Instagram. None forget it.',
        },
        {
          type: 'paragraph',
          content: 'And somewhere in that electric-blue form, in those glowing red eyes, Luis Jiménez\'s vision lives on — more famous, more notorious, and more beloved than he ever could have predicted. The horse that killed him became his immortality.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'Next time you fly into Denver, look for the blue glow on the horizon. It\'s Blucifer, still rearing against the Colorado sky, still scaring children, still watching. The demon horse guards the airport. And whether you love it or hate it, you\'ll never forget it.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Getting the Best View',
          content: 'Blucifer is located at the entrance to DIA, visible from Peña Boulevard as you approach the terminal. The eyes glow brightest after dark. For the full experience, arrive at dusk.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'Denver\'s Blue Mustang sculpture — known as Blucifer — killed its creator when a piece fell on him. Now the demonic 32-foot horse with glowing eyes is a beloved Denver icon.',
  },
}

export const articles: Article[] = [blucifer, hopAlley, castlewoodDam, flight629]
