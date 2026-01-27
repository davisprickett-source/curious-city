import type { Article } from '@/types/article'

export const winnieRuthJudd: Article = {
  slug: 'winnie-ruth-judd',
  citySlug: 'phoenix',
  title: 'The Trunk Murderess: Phoenix\'s Most Infamous Crime',
  subtitle: 'In 1931, Winnie Ruth Judd killed two friends, dismembered one body, and took a train to LA with them packed in luggage. Then she escaped the asylum seven times. She died at 93.',
  excerpt: 'On October 16, 1931, a medical secretary named Winnie Ruth Judd killed her two friends in Phoenix, dismembered one of them, packed the bodies in trunks, and boarded a train to Los Angeles. She was caught when the baggage handler noticed the smell. The trial made national headlines. She was sentenced to hang, declared insane, and spent decades in an asylum — from which she escaped seven times, once living undetected for six years. This is Phoenix\'s most infamous true crime story.',
  author: {
    name: 'The Curious City',
    bio: 'Investigating the past',
  },
  publishedAt: '2025-01-10T12:00:00Z',
  featuredImage: {
    src: '/phoenix/articles/judd-portrait.jpg',
    alt: 'Portrait photograph of Winnie Ruth Judd, the Trunk Murderess',
    credit: 'Los Angeles Public Library / Herald Examiner Collection',
  },
  category: 'history',
  tags: ['phoenix', 'true-crime', 'history', '1930s', 'trial', 'mystery'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'The baggage handler knew something was wrong before the train even reached Los Angeles. Two large trunks, checked by a young blonde woman in Phoenix, were leaking. The smell was unmistakable. When he confronted the woman at Union Station, she fled. When police opened the trunks, they found two bodies — one intact, one dismembered.',
        },
        {
          type: 'paragraph',
          content: 'It was October 1931. The woman was Winnie Ruth Judd, a 26-year-old medical secretary. The victims were her friends, Agnes LeRoi and Hedvig "Sammy" Samuelson. And what followed — the trial, the sentence, the escapes, the cover-ups — would become Phoenix\'s most notorious crime story, a mystery that still hasn\'t been fully solved.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Girls',
        },
        {
          type: 'paragraph',
          content: 'Winnie Ruth Judd arrived in Phoenix in 1930, following her husband, a doctor who\'d come west hoping the desert air would cure his morphine addiction. She was young, pretty, and alone — her husband was often away, and she found herself adrift in a strange city.',
        },
        {
          type: 'paragraph',
          content: 'She met Agnes LeRoi and Hedvig Samuelson through work. The three women became inseparable — partying together, sharing secrets, navigating Depression-era Phoenix as single women in a man\'s world. They had another thing in common: all three were involved with the same man.',
        },
        {
          type: 'image',
          src: '/phoenix/articles/judd-county-jail-hospital.jpg',
          alt: 'Winnie Ruth Judd in county jail hospital with her husband Dr. William C. Judd, 1931',
          caption: 'Winnie Ruth Judd whispers to her husband, Dr. William C. Judd, as she lies on a cot in the county jail hospital after her capture. Police found a letter in which she confessed to killing Samuelson and LeRoi.',
          credit: 'Los Angeles Public Library / Herald Examiner Collection',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Trunks',
        },
        {
          type: 'paragraph',
          content: 'Judd stuffed LeRoi\'s body intact into a large black trunk. But Samuelson was taller — she wouldn\'t fit. So Judd, using surgical skills she\'d learned as a medical secretary, dismembered the body. The torso and head went into a second trunk. The legs went into a valise and hatbox.',
        },
        {
          type: 'image',
          src: '/phoenix/articles/phoenix-union-station.jpg',
          alt: 'Phoenix Union Station, where Winnie Ruth Judd departed with the trunks',
          caption: 'Phoenix Union Station, where Judd boarded the Golden State Limited train to Los Angeles with the trunks containing the bodies. The historic station is now a museum.',
          credit: 'Wikimedia Commons / CC BY-SA 3.0',
        },
        {
          type: 'paragraph',
          content: 'Two days later, on Sunday evening, Judd — her hand still bandaged from the gunshot wound — boarded the Golden State Limited train from Phoenix to Los Angeles. She checked the trunks as baggage.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Trial',
        },
        {
          type: 'image',
          src: '/phoenix/articles/judd-trial-1931.png',
          alt: 'Courtroom scene at the beginning of the Winnie Ruth Judd murder trial, 1931',
          caption: 'Courtroom scene at the beginning of the trial. At the counsel table, left to right: Herman Lewkowitz, Paul Schenck, and Joe Zaversack, attorneys for Mrs. Judd, with Judd at far right.',
          credit: 'Los Angeles Public Library / Herald Examiner Collection',
        },
        {
          type: 'paragraph',
          content: 'The trial was a sensation. Newspapers called Judd the "Tiger Woman," the "Blonde Butcher," and the "Trunk Murderess." The prosecution painted her as a cold-blooded killer driven by jealousy. The all-male jury found her guilty in just four hours.',
        },
        {
          type: 'paragraph',
          content: 'Judd was sentenced to hang. But questions remained. She had a gunshot wound to her hand — evidence of a struggle she claimed was self-defense. And there were whispers about Jack Halloran, the prominent Phoenix businessman all three women had been involved with. He was indicted as an accomplice, then mysteriously released.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Asylum',
        },
        {
          type: 'image',
          src: '/phoenix/articles/arizona-state-hospital.jpg',
          alt: 'Arizona State Hospital main building, where Winnie Ruth Judd was confined',
          caption: 'The Arizona State Hospital (formerly the Arizona State Asylum for the Insane), where Winnie Ruth Judd spent decades after being declared insane. She escaped from the institution seven times over the years.',
          credit: 'Wikimedia Commons / CC BY-SA 3.0',
        },
        {
          type: 'paragraph',
          content: 'Days before her scheduled execution, Judd was declared insane and transferred from death row to the Arizona State Mental Hospital. She would spend the next thirty-eight years there — but not continuously.',
        },
        {
          type: 'paragraph',
          content: 'Winnie Ruth Judd escaped from the asylum seven times.',
        },
        {
          type: 'paragraph',
          content: 'The first escapes were brief — a few days of freedom before recapture. But the seventh escape, in 1962, was different. Judd vanished completely. She assumed the name Marian Lane, moved to Northern California, and found work as a live-in housekeeper for a wealthy family. She was good at her job. Her employers adored her. For six and a half years, she lived a completely normal life.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Six Years Free',
          content: 'From 1962 to 1969, Winnie Ruth Judd — convicted murderer, escaped mental patient — lived openly in California under an assumed name. She was only caught when a private investigator, following up on an old tip, traced her to her employer\'s home.',
        },
        {
          type: 'paragraph',
          content: 'She was returned to the asylum. But by then, attitudes had shifted. In December 1971, Governor Jack Williams signed her pardon. Winnie Ruth Judd walked out of the Arizona State Mental Hospital a free woman, forty years after the murders.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Mystery',
        },
        {
          type: 'image',
          src: '/phoenix/articles/judd-surrender-1931.jpg',
          alt: 'Winnie Ruth Judd surrenders to police in Los Angeles, October 1931',
          caption: 'Winnie Ruth Judd surrenders to authorities at a Los Angeles funeral home on October 23, 1931, flanked by defense council members and detectives. Her husband Dr. W.C. Judd is visible behind her.',
          credit: 'UCLA Library Special Collections / Los Angeles Times Photographic Archives',
        },
        {
          type: 'paragraph',
          content: 'What actually happened in that bungalow on October 16, 1931? The full truth has never emerged. Judd maintained until her death that she acted in self-defense, that the other women attacked her first, that powerful people had covered up their role in the crime.',
        },
        {
          type: 'paragraph',
          content: 'Investigative journalist Jana Bommersbach spent years reexamining the case for a series of articles in the Phoenix New Times. She interviewed Judd herself, reviewed trial transcripts and police records, and concluded that the prosecution\'s case was deeply flawed. Key evidence was suppressed. Witnesses were intimidated. Jack Halloran\'s involvement was deliberately obscured.',
        },
        {
          type: 'paragraph',
          content: 'Was Judd guilty? Almost certainly — she killed two women and dismembered one of them. Was she the cold-blooded predator the newspapers made her out to be? Probably not. The truth, as Bommersbach\'s reporting suggests, is more complicated: a woman caught in an impossible situation, treated brutally by a system that had already decided she was a monster.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The End',
        },
        {
          type: 'paragraph',
          content: 'Winnie Ruth Judd lived quietly after her release, working at a bakery and avoiding publicity. She died in her sleep on October 23, 1998, at the age of ninety-three. Her obituary ran in newspapers across the country — sixty-seven years after the murders, she was still famous.',
        },
        {
          type: 'paragraph',
          content: 'In 1933, President Franklin Roosevelt pardoned her and other wartime sedition convicts — a symbolic gesture, since she\'d already been transferred to the asylum. The pardon acknowledged what many had long suspected: that her trial had been unfair, her sentence excessive, her story more complicated than the headlines allowed.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'Phoenix has changed beyond recognition since 1931. The bungalow where the murders happened is long gone. The train station where Judd began her doomed journey is now a museum. The asylum where she spent forty years has been demolished. But the story endures — Phoenix\'s most notorious crime, still debated, still mysterious, still unsettling.',
        },
        {
          type: 'paragraph',
          content: 'Winnie Ruth Judd killed two women. That much is certain. Everything else — why, how, who else was involved — remains in shadow. She took her secrets to the grave. Phoenix has never quite figured out what to do with her memory.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Further Reading',
          content: 'Jana Bommersbach\'s book "The Trunk Murderess: Winnie Ruth Judd" (Simon & Schuster, 1992) is the definitive investigation of the case. The Phoenix New Times archives contain her original investigative series. Arizona Historical Society maintains documents from the trial.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'In 1931, Winnie Ruth Judd killed two friends and packed their bodies in trunks. She escaped the asylum seven times. Phoenix\'s most infamous true crime story.',
  },
}
