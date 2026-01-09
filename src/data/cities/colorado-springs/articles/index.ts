import type { Article } from '@/types/article'

export const teslaLab: Article = {
  slug: 'tesla-colorado-springs-lab',
  citySlug: 'colorado-springs',
  title: 'When Tesla Blacked Out Colorado Springs',
  subtitle: 'In 1899, Nikola Tesla built an 80-foot lightning machine in Colorado Springs. His experiments fried the city\'s power grid. He claimed to receive signals from Mars. The site is now a parking lot.',
  excerpt: 'In 1899, Nikola Tesla chose Colorado Springs for the ultimate mad scientist experiment: generating artificial lightning. His 80-foot tower produced 135-foot electrical discharges — so powerful they fried the local power company\'s generator and plunged the city into darkness. The site of his laboratory is now a parking lot with a small plaque.',
  author: {
    name: 'The Curious City',
    bio: 'Investigating scientific history',
  },
  publishedAt: '2025-01-09T12:00:00Z',
  featuredImage: {
    src: '/colorado-springs/articles/tesla-lab.png',
    alt: 'Nikola Tesla in his Colorado Springs laboratory',
    credit: 'Tesla Science Center archives',
  },
  category: 'history',
  tags: ['colorado-springs', 'tesla', 'science', 'history', 'electricity', 'invention'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'In 1899, the greatest electrical engineer in history built a secret laboratory in Colorado Springs. His experiments would generate artificial lightning, burn out the city\'s power grid, terrify horses for miles around, and convince him he\'d received messages from extraterrestrials. The site of this scientific madness is now an unremarkable parking lot on the east side of town.',
        },
        {
          type: 'paragraph',
          content: 'Nikola Tesla\'s Colorado Springs laboratory was the most ambitious electrical experiment ever attempted — and quite possibly the strangest. For eight months, Tesla pushed the boundaries of electrical science, created phenomena nobody had seen before, and nearly electrocuted himself repeatedly. What he learned there shaped the future of electrical power. What he claimed to experience there has never been explained.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'Why Colorado Springs',
        },
        {
          type: 'paragraph',
          content: 'By 1899, Tesla was famous. His alternating current system had won the "War of Currents" against Edison\'s direct current. His patents powered the Niagara Falls generating station. He was celebrated as the wizard of electricity, the man who could harness lightning itself.',
        },
        {
          type: 'paragraph',
          content: 'But Tesla had bigger ambitions. He wanted to transmit electricity wirelessly — to broadcast power the way radio broadcasts sound. To do that, he needed to experiment with extremely high voltages in a location where the experiments wouldn\'t interfere with other electrical systems. He needed open space, dry air, and room to build big.',
        },
        {
          type: 'paragraph',
          content: 'Colorado Springs offered all of that. The city sat at 6,000 feet elevation, with thin, dry air ideal for electrical experiments. There was abundant open land on the outskirts of town. And the local power company, eager to attract the famous inventor, offered Tesla free electricity.',
        },
        {
          type: 'quote',
          content: 'The conditions here are ideal for my experiments. The atmosphere is dry, the location isolated, and the power company has been most accommodating. I expect to achieve results impossible anywhere else.',
          attribution: 'Nikola Tesla',
          role: 'Letter, 1899',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Laboratory',
        },
        {
          type: 'paragraph',
          content: 'Tesla arrived in Colorado Springs in May 1899 and immediately began constructing his laboratory on the prairie east of town. The building itself was unremarkable — a wooden barn-like structure about 50 by 60 feet. What made it extraordinary was the tower that rose from its roof.',
        },
        {
          type: 'paragraph',
          content: 'The tower was 80 feet tall, topped by a 142-foot metal mast with a copper ball at the apex. Inside the building, Tesla constructed a "magnifying transmitter" — a massive Tesla coil capable of generating millions of volts. The primary coil was 51 feet in diameter, wrapped with thick copper wire. The equipment filled most of the building.',
        },
        {
          type: 'paragraph',
          content: 'The laboratory was electrified in a way no building had ever been. Tesla had installed windows that could be opened to let ozone escape. The equipment required special high-voltage feeds from the power company. Warning signs surrounded the property. Local residents knew to stay away.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Safety Precautions',
          content: 'Tesla wore cork-soled shoes and rubber gloves when operating the equipment. He knew the dangers — his experiments regularly produced lethal voltages. Even so, he was badly shocked multiple times. His assistant, Fritz Lowenstein, refused to enter the laboratory when experiments were running.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Experiments',
        },
        {
          type: 'paragraph',
          content: 'Tesla\'s experiments in Colorado Springs were unprecedented. He generated artificial lightning bolts reaching 135 feet in length — discharges so powerful they could be heard 15 miles away. Thunder from the laboratory rolled across the plains. Blue flames of corona discharge crawled across the equipment. The air smelled of ozone.',
        },
        {
          type: 'paragraph',
          content: 'On one occasion, Tesla claimed to have achieved "resonance" with the Earth itself — using the planet\'s natural electrical frequency to transmit power. He reported lighting 200 lamps from 25 miles away with no wires connecting them. These claims have never been independently verified, but Tesla documented them extensively in his notes.',
        },
        {
          type: 'paragraph',
          content: 'The most famous incident came when Tesla pushed his equipment too hard. The magnifying transmitter drew so much power that it overloaded the Colorado Springs Electric Company\'s generator. The lights went out across the entire city. The power company was not amused; Tesla was forced to repair their generator before they\'d restore his electricity.',
        },
        {
          type: 'quote',
          content: 'The apparatus was set to resonate with the Earth\'s charge. When I activated the coil, lightning began to leap from the tower — first 30 feet, then 50, then over 100 feet. The thunder could be heard across the city. And then the power company\'s generator caught fire.',
          attribution: 'Nikola Tesla',
          role: 'Colorado Springs Notes',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Signals',
        },
        {
          type: 'paragraph',
          content: 'Tesla\'s Colorado Springs notes include one of the strangest claims in scientific history. On the night of July 3, 1899, while monitoring his equipment, Tesla claimed to receive organized, regular signals of extraterrestrial origin.',
        },
        {
          type: 'paragraph',
          content: 'The signals, Tesla reported, came in groups of three — distinct pulses that couldn\'t be explained by natural electrical phenomena. He became convinced they were attempts at communication, possibly from Mars. For the rest of his life, Tesla maintained that he had detected signals from an intelligent source beyond Earth.',
        },
        {
          type: 'paragraph',
          content: 'Modern analysis suggests Tesla probably detected natural radio emissions — possibly from Jupiter\'s magnetosphere, which produces regular pulsed radio signals. But in 1899, nobody knew planets could emit radio waves. Tesla had no framework for understanding what he heard. His interpretation was wrong, but his observation was real.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Mars Signals',
          content: 'Tesla believed he received intelligent signals from space. He was almost certainly wrong about their origin — but the signals themselves were real. Scientists now think he detected natural radio emissions from Jupiter. Tesla was, in effect, the first person to detect radio astronomy signals, decades before the field existed.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Legacy',
        },
        {
          type: 'paragraph',
          content: 'Tesla left Colorado Springs in January 1900, his experiments complete. He returned to New York with pages of notes and plans for a global wireless power system. He would spend the next decade trying to build that system at Wardenclyffe on Long Island — a project that ultimately failed due to lack of funding.',
        },
        {
          type: 'paragraph',
          content: 'The Colorado Springs laboratory was demolished in 1904. Tesla had left unpaid bills — including one to the power company — and the building was torn down to recover what could be salvaged. Nothing remains of the original structure.',
        },
        {
          type: 'paragraph',
          content: 'Today, the site at Foote Avenue and Kiowa Street is a parking lot. A small plaque, installed in 1990, marks the approximate location of the laboratory. Most visitors miss it entirely. There is no museum, no reconstruction, no monument befitting the significance of what happened there.',
        },
        {
          type: 'paragraph',
          content: 'Tesla\'s Colorado Springs Notes — detailed journals of his experiments — were published decades after his death. They remain controversial. Some scientists consider them evidence of Tesla\'s brilliance; others see exaggeration and delusion. The truth is probably somewhere in between: Tesla achieved extraordinary things in Colorado Springs, but his grandiose claims exceeded what he could prove.',
        },
        {
          type: 'quote',
          content: 'Tesla\'s work in Colorado Springs pushed the boundaries of electrical engineering farther than anyone had imagined possible. That some of his claims were exaggerated doesn\'t diminish the genuine achievements. He created phenomena nobody had seen before.',
          attribution: 'W. Bernard Carlson',
          role: 'Tesla biographer',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'The parking lot at Foote and Kiowa gives no indication of its history. Cars come and go. Shoppers walk past. Nothing suggests that this spot once held the most advanced electrical laboratory on Earth, where a Serbian genius created artificial lightning, blacked out a city, and believed he\'d heard voices from space. Tesla\'s Colorado Springs experiment lasted only eight months. Its implications are still being understood.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Finding the Site',
          content: 'The Tesla Experimental Station site is at the corner of Foote Avenue and Kiowa Street in Colorado Springs. A small commemorative plaque marks the approximate location. There is no visitor center or museum — just a parking lot and a plaque that vastly undersells the chaos that happened here.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'In 1899, Nikola Tesla built a laboratory in Colorado Springs and created 135-foot lightning bolts. His experiments fried the city\'s power grid. He claimed to receive signals from Mars.',
  },
}

export const articles: Article[] = [teslaLab]
