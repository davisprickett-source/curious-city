import type { Article } from '@/types/article'
import { mysteryCastle } from './mystery-castle'
import { winnieRuthJudd } from './winnie-ruth-judd'

export const phoenixLights: Article = {
  slug: 'phoenix-lights',
  citySlug: 'phoenix',
  title: 'The Phoenix Lights: What Thousands of People Saw',
  subtitle: 'On March 13, 1997, something massive and silent crossed the Arizona sky. Thousands witnessed it. The Air Force said it was flares. Witnesses say that doesn\'t explain what they saw.',
  excerpt: 'On March 13, 1997, thousands of Arizona residents witnessed a massive V-shaped formation of lights moving silently across the sky. Pilots, police officers, and the Governor all reported seeing it. The Air Force blamed flares. Twenty-five years later, the Phoenix Lights remain one of the most witnessed and documented UFO events in history.',
  author: {
    name: 'The Curious City',
    bio: 'Investigating the unexplained',
  },
  publishedAt: '2025-01-09T12:00:00Z',
  featuredImage: {
    src: '/phoenix/articles/phoenix-lights.png',
    alt: 'Recreation of the Phoenix Lights V-formation',
    credit: 'Phoenix Lights documentary',
  },
  category: 'feature',
  tags: ['phoenix', 'ufo', 'unexplained', '1997', 'mystery', 'aviation'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'The calls started coming in around 7:30 PM. Residents in Henderson, Nevada reported a huge V-shaped object moving slowly southeast. By 8:00 PM, calls were flooding into police departments across Arizona. Something was crossing the state — something enormous, silent, and impossible to explain.',
        },
        {
          type: 'paragraph',
          content: 'The date was March 13, 1997. By the time the night was over, thousands of people in two states had witnessed what would become known as the Phoenix Lights — one of the most widely observed and best-documented UFO sightings in history. A quarter century later, nobody has satisfactorily explained what everyone saw.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Sighting',
        },
        {
          type: 'paragraph',
          content: 'Witnesses described two distinct events that night. The first, between approximately 7:30 and 8:30 PM, was a triangular or V-shaped formation of lights moving slowly from Nevada, through Arizona, and eventually over the Mexican border. Estimates of its size varied wildly — from 300 feet to over a mile wide — but nearly everyone agreed: it was massive.',
        },
        {
          type: 'paragraph',
          content: 'The object moved at perhaps 30 to 40 miles per hour, far too slow for a conventional aircraft. It was silent or nearly so — some witnesses reported a faint hum. It blocked out stars as it passed overhead. Whatever it was, it wasn\'t behaving like anything in the American aviation inventory.',
        },
        {
          type: 'quote',
          content: 'I was a pilot for forty years. I know what aircraft look like. This was not an aircraft. It was a solid object, blocking out the stars, moving without any sound. I have no idea what I saw.',
          attribution: 'Witness testimony',
          role: 'Commercial airline pilot',
        },
        {
          type: 'paragraph',
          content: 'The second event came later — around 10:00 PM — when a series of bright lights appeared over Phoenix and hovered for several minutes before fading. This was the image captured on video and broadcast worldwide: a string of orbs hanging motionless above the Estrella Mountains.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Witnesses',
        },
        {
          type: 'paragraph',
          content: 'What made the Phoenix Lights exceptional wasn\'t just the sighting — it was the witnesses. This wasn\'t a lone farmer claiming to see something in a cornfield. Thousands of people across two states reported the same thing, at the same time, with remarkable consistency.',
        },
        {
          type: 'paragraph',
          content: 'Among them: police officers, military personnel, doctors, lawyers, and pilots. People with nothing to gain and reputations to lose reported seeing something unexplainable. Phone lines at Luke Air Force Base were jammed with calls from witnesses asking what had just flown over.',
        },
        {
          type: 'paragraph',
          content: 'Most notably, Governor Fife Symington initially mocked the sightings at a press conference, presenting his chief of staff in an alien costume. But years later, Symington admitted he\'d seen the object himself that night — and had dismissed it publicly because he didn\'t want to cause panic.',
        },
        {
          type: 'quote',
          content: 'I\'m a pilot and I know just about every machine that flies. It was bigger than anything that I\'ve ever seen. It was enormous. It just felt otherworldly. I was never happy with the Air Force\'s answers.',
          attribution: 'Fife Symington',
          role: 'Governor of Arizona, 1991-1997',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Witness Demographics',
          content: 'Researchers have documented over 700 firsthand witness accounts of the Phoenix Lights. Witnesses included law enforcement officers, emergency dispatchers, pilots, air traffic controllers, and medical professionals. The consistency across accounts is unusual for mass sightings.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Official Explanation',
        },
        {
          type: 'paragraph',
          content: 'The Air Force eventually offered an explanation: flares. Specifically, long-burning LUU-2B/B illumination flares dropped during a training exercise at the Barry M. Goldwater Range southwest of Phoenix. Case closed.',
        },
        {
          type: 'paragraph',
          content: 'There\'s just one problem: the flare explanation only addresses the 10:00 PM sighting — the lights that hovered over Phoenix. It doesn\'t address the earlier event, the massive V-shaped object that traveled across the entire state. The Air Force has never offered an explanation for that.',
        },
        {
          type: 'paragraph',
          content: 'Witnesses who saw both events insist they were different phenomena. The 10:00 PM lights may well have been flares. But the earlier object? That remains unexplained.',
        },
        {
          type: 'paragraph',
          content: 'Furthermore, the flare explanation has its own problems. Flares drift. They descend. The lights over Phoenix appeared to hover in formation, maintaining position relative to each other. Witnesses who knew what military flares looked like said these didn\'t behave like flares.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Theories',
        },
        {
          type: 'paragraph',
          content: 'So what was it? Theories have proliferated over the years, ranging from the mundane to the extraordinary.',
        },
        {
          type: 'paragraph',
          content: 'The skeptical explanation: misidentified aircraft. A formation of planes flying in close formation, with bright lights, at night, could appear as a single massive object. The mind connects the dots. This theory has trouble explaining the silence and the enormous apparent size.',
        },
        {
          type: 'paragraph',
          content: 'The military theory: a secret aircraft being tested. The timing — late \'90s, height of stealth technology development — is suggestive. But no known aircraft matches the descriptions, and the military has never acknowledged testing anything in the area that night.',
        },
        {
          type: 'paragraph',
          content: 'The extraterrestrial theory: visitors. This is what many witnesses believe. Something not from Earth, demonstrating capabilities beyond human technology, making itself visible to a major American city. Proponents note the impossibility of a hoax at this scale — you can\'t fake thousands of independent witnesses.',
        },
        {
          type: 'quote',
          content: 'I\'ve studied this case for twenty years. The flare explanation is insufficient. The misidentification theories don\'t hold up. Something was there, and we still don\'t know what it was.',
          attribution: 'Dr. Lynne Kitei',
          role: 'Phoenix Lights researcher and witness',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Aftermath',
        },
        {
          type: 'paragraph',
          content: 'The Phoenix Lights marked a turning point in UFO culture. Before 1997, UFO sightings were easy to dismiss — lone witnesses, grainy photos, implausible claims. But thousands of credible people witnessing the same event simultaneously? That was harder to ignore.',
        },
        {
          type: 'paragraph',
          content: 'The event energized the UFO research community and eventually contributed to increased mainstream attention on unexplained aerial phenomena. When the Pentagon released videos of naval encounters with unidentified objects in 2017, the Phoenix Lights were frequently cited as precedent. Something shifted in 1997.',
        },
        {
          type: 'paragraph',
          content: 'In Phoenix itself, the lights became part of local identity. Annual commemorations are held every March 13. Books, documentaries, and podcasts keep the story alive. A new generation discovers the footage and the witness testimonies and asks the same questions the first witnesses asked: What was that? Where did it come from? Why haven\'t we figured it out?',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Mystery Remains',
        },
        {
          type: 'paragraph',
          content: 'Twenty-five years on, the Phoenix Lights remain unexplained. Not unidentified in the trivial sense — "we don\'t have enough information" — but genuinely mysterious. The witnesses were credible. The sighting was documented. The official explanation is inadequate. And nobody has ever come forward to claim responsibility for a hoax.',
        },
        {
          type: 'paragraph',
          content: 'Either something extraordinary happened over Arizona that night, or our understanding of atmospheric optics, witness psychology, and military secrecy is badly wrong. Neither option is particularly comfortable.',
        },
        {
          type: 'paragraph',
          content: 'What we know for certain: on the night of March 13, 1997, thousands of people in Arizona looked up and saw something they couldn\'t explain. They reported it. They documented it. They\'ve spent decades being asked to doubt what they saw. Most of them haven\'t.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'The desert sky over Phoenix is vast and dark, clear enough to see for miles. On most nights, the stars are the only show. But once, in 1997, something else crossed that sky — something massive and silent and still unexplained. The witnesses are still alive. The questions remain unanswered. And on clear nights, Arizonans still look up and wonder.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Phoenix Lights Anniversary',
          content: 'The Phoenix Lights are commemorated annually on March 13. Events include screenings, witness panels, and gatherings at viewing sites. The Estrella Mountains, where the second-wave lights appeared, offer dark skies for stargazing year-round.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'On March 13, 1997, thousands witnessed a massive V-shaped object cross the Arizona sky. The Air Force called it flares. Witnesses disagree. The Phoenix Lights remain unexplained.',
  },
}

export const articles: Article[] = [phoenixLights, mysteryCastle, winnieRuthJudd]
