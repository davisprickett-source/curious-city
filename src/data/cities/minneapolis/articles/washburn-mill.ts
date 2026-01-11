import type { Article } from '@/types/article'

export const washburnMill: Article = {
  slug: 'washburn-mill-explosion',
  citySlug: 'minneapolis',
  title: 'The Great Mill Disaster: When Flour Exploded',
  subtitle: 'On May 2, 1878, the world\'s largest flour mill exploded, killing 18 workers and destroying half of Minneapolis\'s milling capacity. The cause? Flour dust. The explosion changed industrial safety forever.',
  excerpt: 'The Washburn A Mill was the world\'s largest flour mill — a seven-story giant powered by St. Anthony Falls. On the evening of May 2, 1878, accumulated flour dust ignited. The explosion was heard ten miles away. Eighteen workers died instantly. Six nearby mills were destroyed. The disaster changed how the world thought about industrial safety — and gave birth to modern Minneapolis.',
  author: {
    name: 'The Curious City',
    bio: 'Uncovering buried history',
  },
  publishedAt: '2025-01-10T12:00:00Z',
  featuredImage: {
    src: '/minneapolis/articles/washburn-mill.png',
    alt: 'Ruins of the Washburn A Mill after the 1878 explosion',
    credit: 'Minnesota Historical Society',
  },
  category: 'history',
  tags: ['minneapolis', 'disaster', 'history', 'industry', 'flour-milling', 'st-anthony-falls'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'The evening of May 2, 1878, was ordinary at the Washburn A Mill. Fourteen workers manned the seven-story building, tending the machinery that made Minneapolis the flour capital of America. The Mississippi roared through the millrace below. Flour dust hung in the air, fine as talcum powder, coating every surface. Nobody thought twice about it.',
        },
        {
          type: 'paragraph',
          content: 'At 7:10 PM, something sparked. In less than a second, the flour dust suspended in the air ignited — not a fire, but an explosion. The blast leveled the Washburn A Mill instantly, killing all fourteen workers inside. The shock wave jumped to neighboring buildings. Five more mills exploded in quick succession. When the chain reaction finally stopped, eighteen people were dead, half of Minneapolis\'s flour-milling capacity was destroyed, and a city was in ruins.',
        },
        {
          type: 'paragraph',
          content: 'The Great Mill Disaster, as it came to be known, was the worst industrial accident Minneapolis had ever seen. It was also a turning point — the moment when flour milling stopped being a craft and started being a science, when industrial safety became something more than an afterthought. Minneapolis would rebuild bigger and safer than before. But first, it had to bury its dead.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Mill City',
        },
        {
          type: 'paragraph',
          content: 'By 1878, Minneapolis was the flour milling capital of America. St. Anthony Falls — the only major waterfall on the Mississippi — provided unlimited power. Wheat from the northern prairies flowed in by railroad. A dozen mills lined the riverbank, their stones grinding twenty-four hours a day.',
        },
        {
          type: 'paragraph',
          content: 'The Washburn A Mill was the largest of them all. Built in 1874 by Cadwallader Washburn — a Wisconsin congressman, Civil War general, and flour baron — it was a technological marvel. Seven stories tall, powered by water diverted through underground canals, capable of producing 1,500 barrels of flour per day. It was, quite simply, the biggest flour mill in the world.',
        },
        {
          type: 'paragraph',
          content: 'What nobody fully understood was the danger. Flour dust, suspended in air at the right concentration, is explosive. The mills were full of it — clouds of fine powder that coated machinery, hung in shafts of light, settled on workers\' clothes. A single spark could turn a flour mill into a bomb.',
        },
        {
          type: 'quote',
          content: 'We knew the dust could catch fire. Every mill had fires. But an explosion? Nobody imagined flour could do that. Nobody imagined anything could do that.',
          attribution: 'Minneapolis mill worker',
          role: 'Testimony at the inquest, 1878',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Explosion',
        },
        {
          type: 'paragraph',
          content: 'The most likely cause was a millstone. Two stones grinding together could produce sparks if they ran dry or came into contact. On the evening of May 2, something sparked — maybe the millstones, maybe static electricity, maybe a lantern. The exact cause was never determined.',
        },
        {
          type: 'paragraph',
          content: 'What happened next was instantaneous. The spark ignited the flour dust suspended in the air, creating a fireball that expanded faster than sound. The pressure wave was catastrophic. The seven-story Washburn A Mill was demolished in less than a second. Debris was thrown hundreds of feet into the air.',
        },
        {
          type: 'paragraph',
          content: 'The shock wave didn\'t stop at the mill\'s walls. It jumped to the adjacent Humboldt Mill, which exploded. Then the Diamond Mill. Then the Zenith. Then the Galaxy. Then the Pettit Mill. Six mills destroyed in a chain reaction that witnesses said sounded like artillery fire. People in St. Paul, ten miles away, heard the blasts.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Chain Reaction',
          content: 'The initial explosion at the Washburn A Mill triggered five more explosions in neighboring mills. The entire milling district — the heart of Minneapolis\'s economy — was devastated in minutes. A third of the city\'s flour-milling capacity was destroyed instantly.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Dead',
        },
        {
          type: 'paragraph',
          content: 'Eighteen men died in the explosions. Fourteen were inside the Washburn A Mill — none survived. Four more died in the neighboring mills and the fires that followed. Most of the bodies were never recovered intact; the explosions had been too violent.',
        },
        {
          type: 'paragraph',
          content: 'The victims were ordinary workers: millhands, machinery operators, day laborers. Many were immigrants — Scandinavians, Germans, Irish — the men who did the dangerous work that built Minneapolis. Their names are inscribed on a monument at Lakewood Cemetery: a sheaf of wheat, a millstone, a broken gear.',
        },
        {
          type: 'paragraph',
          content: 'In an era when industrialists rarely acknowledged responsibility, Cadwallader Washburn personally compensated the families of the dead workers. It was an unusual gesture — almost unprecedented for the time. Washburn had lost his mill, but he understood that the workers had lost more.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Investigation',
        },
        {
          type: 'paragraph',
          content: 'The coroner\'s inquest struggled to explain what had happened. Flour dust explosions were not well understood in 1878. The concept that a fine powder could explode like gunpowder seemed almost fantastical. But the evidence was undeniable.',
        },
        {
          type: 'paragraph',
          content: 'Two professors from the University of Minnesota, Stephen Peckham and Louis Peck, conducted experiments to determine the cause. They demonstrated that flour dust, suspended in air at the right concentration, could be ignited by a spark and would explode with devastating force. The science was clear: the mills were death traps.',
        },
        {
          type: 'paragraph',
          content: 'The inquest concluded that the explosion had been caused by flour dust ignited by friction between millstones. It recommended ventilation systems to remove dust and safety measures to prevent sparks. It was the beginning of modern dust explosion science — knowledge paid for with eighteen lives.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Rebuilding',
        },
        {
          type: 'paragraph',
          content: 'Cadwallader Washburn vowed to rebuild — bigger and safer. He hired William de la Barre, an Austrian engineer, to design a new mill based on advanced European technology. De la Barre\'s design included dust collection systems, improved ventilation, and safer milling methods. The new Washburn A Mill, completed in 1880, was the most technologically advanced flour mill in the world.',
        },
        {
          type: 'paragraph',
          content: 'The innovations didn\'t stay in Minneapolis. De la Barre\'s safety systems spread throughout the milling industry. The Great Mill Disaster had demonstrated what could happen when flour dust accumulated; now every mill in America knew, and most took precautions. The explosion that destroyed half of Minneapolis\'s milling capacity ultimately made the entire industry safer.',
        },
        {
          type: 'paragraph',
          content: 'Minneapolis itself boomed. The rebuilt mills were more efficient than ever. The city that had been the flour capital of America became even more dominant. By 1880, Minneapolis was producing more flour than any city in the world — a position it would hold for decades.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Flour City',
          content: 'After the rebuilding, Minneapolis\'s flour production exploded. By 1890, the city\'s mills produced over 7 million barrels of flour annually — more than any city on Earth. The disaster that destroyed half the mills ultimately led to a bigger, safer, more productive industry.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Legacy',
        },
        {
          type: 'paragraph',
          content: 'The Washburn A Mill operated until 1965, when the milling industry finally left Minneapolis. The building sat abandoned for decades, caught fire in 1991, and was partially destroyed. What remained — massive stone walls, empty windows, industrial ruins — became a different kind of landmark.',
        },
        {
          type: 'paragraph',
          content: 'In 2003, the Mill City Museum opened in the ruins of the Washburn A Mill. The museum tells the story of Minneapolis\'s flour milling industry — including the 1878 explosion. Visitors can see the mill\'s surviving structure, learn about the workers who died, and understand how flour made Minneapolis what it is today.',
        },
        {
          type: 'paragraph',
          content: 'At Lakewood Cemetery, the monument to the eighteen dead workers still stands. A sheaf of wheat. A millstone. A broken gear. The names of men who died when flour became fire, in the explosion that changed an industry and built a city.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'Minneapolis was built on flour. The mills at St. Anthony Falls made the city — drew workers, generated wealth, put Minneapolis on the map. But flour kills too. On May 2, 1878, eighteen men learned that lesson, and Minneapolis learned it with them.',
        },
        {
          type: 'paragraph',
          content: 'The city rebuilt. The industry reformed. The knowledge gained from those eighteen deaths made mills safer worldwide. It\'s a brutal equation — progress paid for in lives — but it\'s the equation Minneapolis was built on. The Mill City remembers, even if the mills are gone.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Visiting the Site',
          content: 'The Mill City Museum occupies the ruins of the Washburn A Mill at 704 South 2nd Street, Minneapolis. The museum includes exhibits on the 1878 explosion and the milling industry. The memorial to the disaster victims is at Lakewood Cemetery. The Stone Arch Bridge, adjacent to the mill ruins, offers views of the historic milling district.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'On May 2, 1878, the Washburn A Mill exploded, killing 18 workers and destroying half of Minneapolis\'s flour mills. The disaster changed industrial safety forever.',
  },
}
