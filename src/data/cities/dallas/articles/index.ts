import type { Article } from '@/types/article'

export const integratedCircuit: Article = {
  slug: 'integrated-circuit-invention',
  citySlug: 'dallas',
  title: 'The Day Dallas Invented the Future',
  subtitle: 'In 1958, a Texas Instruments engineer created the integrated circuit — the foundation of every computer, smartphone, and digital device on Earth. Dallas changed everything.',
  excerpt: 'Every smartphone, every computer, every digital device traces back to a lab in Dallas. In 1958, Jack Kilby invented the integrated circuit at Texas Instruments. He won the Nobel Prize for it. You\'re using his invention right now.',
  author: {
    name: 'The Curious City',
    bio: 'Tracing technological origins',
  },
  publishedAt: '2025-01-09T12:00:00Z',
  featuredImage: {
    src: '/dallas/articles/integrated-circuit.png',
    alt: 'Jack Kilby\'s original integrated circuit prototype',
    credit: 'Texas Instruments Archives',
  },
  category: 'history',
  tags: ['dallas', 'technology', 'invention', 'texas-instruments', 'history', 'computing'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'You\'re reading this on a device that exists because of what happened in Dallas in the summer of 1958. The phone in your pocket, the computer on your desk, the car you drive, the appliances in your kitchen, the satellites overhead — all of it traces back to a single invention, created by a single engineer, in a single North Dallas laboratory.',
        },
        {
          type: 'paragraph',
          content: 'Jack Kilby didn\'t set out to change the world. He was just trying to solve a wiring problem. But what he built — the integrated circuit, the microchip — became the foundation of the digital age. Everything that followed, from the moon landing to the internet to the device in your hand, was made possible by what happened in that Dallas lab.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Tyranny of Numbers',
        },
        {
          type: 'paragraph',
          content: 'By the late 1950s, electronics had a problem. Computers existed — room-sized machines with thousands of components — but they were reaching a fundamental limit. Each new advancement required more transistors, more capacitors, more wires. And every wire was a potential failure point.',
        },
        {
          type: 'paragraph',
          content: 'Engineers called it the "tyranny of numbers." To make computers more powerful, you needed more components. More components meant more connections. More connections meant more failures. The complexity was becoming unmanageable. The math said you\'d eventually need so many components that the machine would fail before you could finish building it.',
        },
        {
          type: 'paragraph',
          content: 'The industry was stuck. Unless someone figured out how to put all those components on a single piece of material — eliminating the wires entirely — progress would hit a wall.',
        },
        {
          type: 'quote',
          content: 'The problem was clear: we needed to miniaturize. But nobody knew how. The components existed. Making them smaller wasn\'t the issue. It was connecting them without creating an unreliable mess of wires.',
          attribution: 'Jack Kilby',
          role: 'Nobel Prize lecture, 2000',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The New Guy',
        },
        {
          type: 'paragraph',
          content: 'Jack Kilby arrived at Texas Instruments in Dallas in May 1958. He was 34 years old, a Kansas native with a master\'s degree from the University of Wisconsin. He\'d spent a decade at Centralab in Milwaukee, working on electronic components. TI hired him to work on miniaturization problems.',
        },
        {
          type: 'paragraph',
          content: 'There was one issue: Kilby had been hired too recently to earn vacation time. When most of TI shut down for a two-week summer break in July, Kilby was one of the few employees left in the building. He had access to the labs, the equipment, and uninterrupted time to think.',
        },
        {
          type: 'paragraph',
          content: 'It was during that quiet period, in an emptied building in North Dallas, that Kilby had his insight. What if you made all the components — transistors, resistors, capacitors — from the same semiconductor material? What if, instead of connecting separate components with wires, you built everything on a single piece of germanium?',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Insight',
          content: 'Kilby\'s breakthrough was conceptual: all electronic components could be fabricated from the same semiconductor material. Instead of connecting separate parts with wires, you could integrate them onto a single chip of semiconductor. This was the "integrated circuit" — all the parts, integrated together.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Demonstration',
        },
        {
          type: 'paragraph',
          content: 'On July 24, 1958, Kilby recorded his idea in his laboratory notebook: "The following circuit elements could be made on a single slice: resistors, capacitor, distributed capacitor, transistor." The entry was witnessed and dated — crucial documentation that would later prove essential in patent disputes.',
        },
        {
          type: 'paragraph',
          content: 'He spent the following weeks building a prototype. The device was crude by modern standards: a sliver of germanium about half an inch long, with gold wires attaching it to a circuit board. It looked like nothing much. But on September 12, 1958, Kilby demonstrated it to Texas Instruments executives.',
        },
        {
          type: 'paragraph',
          content: 'The chip was an oscillator — a simple circuit that produces a repeating signal. When Kilby connected his device to an oscilloscope, the screen showed a perfect sine wave. The circuit worked. All the components, on a single piece of semiconductor, functioning together.',
        },
        {
          type: 'quote',
          content: 'There was some skepticism in the room. It was such a different approach that people weren\'t sure it would scale. But when we saw that sine wave, we knew we had something.',
          attribution: 'Jack Kilby',
          role: 'Interview, 2000',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Race',
        },
        {
          type: 'paragraph',
          content: 'Kilby wasn\'t alone. Six months after his demonstration, Robert Noyce at Fairchild Semiconductor in California independently developed his own integrated circuit using silicon rather than germanium. Noyce\'s approach was arguably more practical — it used planar process techniques that made mass production easier.',
        },
        {
          type: 'paragraph',
          content: 'The patent dispute lasted a decade. Who invented the integrated circuit? Was it Kilby, who demonstrated it first? Or Noyce, whose design was more manufacturable? Courts eventually concluded that both men deserved credit. The integrated circuit, it turned out, was inevitable — the problem was so pressing that two engineers, working independently, found the same solution within months of each other.',
        },
        {
          type: 'paragraph',
          content: 'History has largely given both men their due. Noyce went on to co-found Intel and became a Silicon Valley legend. Kilby stayed at Texas Instruments, continuing to innovate. In 2000, Kilby was awarded the Nobel Prize in Physics for his role in inventing the integrated circuit. (Noyce had died in 1990, and Nobel Prizes aren\'t awarded posthumously.)',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Nobel Recognition',
          content: 'Jack Kilby won the 2000 Nobel Prize in Physics "for his part in the invention of the integrated circuit." He was 76 years old. In his acceptance speech, he noted that the integrated circuit had exceeded his wildest expectations — he\'d originally thought it might be useful for hearing aids.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Implications',
        },
        {
          type: 'paragraph',
          content: 'It\'s difficult to overstate what the integrated circuit made possible. Before Kilby\'s invention, computers were room-sized machines used by governments and corporations. Within a decade, integrated circuits had made computers small enough for desktops. Within two decades, they\'d shrunk to fit in pockets.',
        },
        {
          type: 'paragraph',
          content: 'Moore\'s Law — the observation that the number of transistors on a chip doubles roughly every two years — has held for six decades. Kilby\'s original prototype had a single transistor. A modern smartphone processor has over 15 billion. The technology Kilby demonstrated in Dallas in 1958 has scaled by a factor of 15 billion.',
        },
        {
          type: 'paragraph',
          content: 'The list of things that exist because of integrated circuits includes: personal computers, smartphones, the internet, GPS navigation, digital cameras, video games, modern automobiles, medical imaging equipment, space exploration, global communications, and essentially all of modern life. There is no industry, no activity, no aspect of contemporary existence that hasn\'t been transformed by what happened in that Dallas laboratory.',
        },
        {
          type: 'quote',
          content: 'What we didn\'t realize in 1958 was that this was the beginning of something that would change every aspect of human civilization. We thought we were solving a wiring problem. We were actually inventing the future.',
          attribution: 'Jack Kilby',
          role: 'Reflecting on the invention, 1988',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'Dallas and the Digital Age',
        },
        {
          type: 'paragraph',
          content: 'The integrated circuit didn\'t make Dallas the center of the tech industry — that honor went to Silicon Valley, largely due to Noyce and Fairchild\'s early lead in manufacturing. But Texas Instruments remained a major force, and the Dallas area developed its own tech ecosystem. The "Texas Instruments Corridor" along North Central Expressway became home to dozens of tech companies.',
        },
        {
          type: 'paragraph',
          content: 'Today, Dallas-Fort Worth is one of the largest tech employment centers in America. The region\'s roots in semiconductor technology trace directly back to Kilby\'s 1958 invention. Every engineer working in a North Texas chip fab is, in some sense, continuing what Kilby started.',
        },
        {
          type: 'paragraph',
          content: 'Texas Instruments still operates headquarters in Dallas. The company has pivoted over the decades — from calculators to digital signal processors to analog chips — but semiconductors remain at its core. The building where Kilby worked is still standing, though the lab itself has been reconfigured many times.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Legacy',
        },
        {
          type: 'paragraph',
          content: 'Jack Kilby died in Dallas in 2005, at age 81. He\'d spent most of his career at Texas Instruments, eventually holding over 60 patents. He was inducted into the National Inventors Hall of Fame, received the National Medal of Science, and won the Nobel Prize. Not bad for a guy who just wanted to solve a wiring problem.',
        },
        {
          type: 'paragraph',
          content: 'His original integrated circuit — that crude germanium chip with the gold wires — is preserved at the Smithsonian Institution. It looks primitive now, almost unrecognizably simple compared to the chips that power modern devices. But every chip in every device traces its lineage back to that prototype.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'The next time you pick up your phone, consider: that device exists because a Kansas engineer took a job in Dallas, got left behind during summer vacation, and had a good idea. The digital age started in Texas. Everything since has been a footnote.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'See the Original',
          content: 'Kilby\'s original integrated circuit prototype is on permanent display at the Smithsonian National Museum of American History in Washington, D.C. Replicas are displayed at Texas Instruments headquarters in Dallas.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'In 1958, Jack Kilby invented the integrated circuit at Texas Instruments in Dallas. Every computer, smartphone, and digital device exists because of what happened in that lab.',
  },
}

export const articles: Article[] = [integratedCircuit]
