import type { Article } from '@/types/article'

export const maxHeadroom: Article = {
  slug: 'max-headroom-incident',
  citySlug: 'chicago',
  title: 'The Max Headroom Incident: TV\'s Only Unsolved Hijacking',
  subtitle: 'On November 22, 1987, someone in a rubber mask hijacked two Chicago TV stations, ranted about Clutch Cargo, got spanked with a flyswatter, and was never caught. The FBI gave up.',
  excerpt: 'On November 22, 1987, someone wearing a Max Headroom mask hijacked the signals of two Chicago television stations. For 90 seconds, viewers watched a distorted figure make bizarre statements, moan, and get spanked with a flyswatter. The FBI investigated for years. Nobody was ever caught. It remains the only unsolved broadcast signal intrusion in American history — and one of the creepiest unsolved mysteries of the analog TV era.',
  author: {
    name: 'The Curious City',
    bio: 'Investigating the unexplained',
  },
  publishedAt: '2025-01-10T12:00:00Z',
  featuredImage: {
    src: '/chicago/articles/max-headroom.png',
    alt: 'Still frame from the Max Headroom broadcast intrusion, 1987',
    credit: 'Television screenshot',
  },
  category: 'history',
  tags: ['chicago-history', 'mystery', 'unsolved', '1980s', 'technology', 'weird-history'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'At 9:14 PM on November 22, 1987, Chicago sportscaster Dan Roan was wrapping up the sports segment on WGN-TV\'s 9 o\'clock news. He was talking about the Bears. Then his face disappeared.',
        },
        {
          type: 'paragraph',
          content: 'For about 25 seconds, viewers saw something else: a figure in a rubber mask, swaying back and forth against a spinning corrugated metal background. The mask was unmistakable — it was Max Headroom, the computer-generated TV character who\'d become a pop culture phenomenon. There was no sound, just a harsh electronic buzzing. Then, as suddenly as it appeared, the image vanished and Dan Roan was back, looking confused.',
        },
        {
          type: 'paragraph',
          content: '"Well, if you\'re wondering what\'s happened," Roan said, "so am I."',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Mask',
        },
        {
          type: 'paragraph',
          content: 'Max Headroom was everywhere in 1987. The character — a supposedly computer-generated TV host played by actor Matt Frewer — had started as a British music video presenter, spawned a dystopian TV movie, and then an American TV series. He appeared in Coca-Cola commercials. He was on magazine covers. His stuttering, glitching delivery and sharp-angled face were instantly recognizable.',
        },
        {
          type: 'paragraph',
          content: 'So when someone wearing a Max Headroom mask appeared on Chicago television that night, viewers knew immediately what they were seeing. What they didn\'t know — what nobody knows to this day — is who was behind the mask, or why.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Second Intrusion',
        },
        {
          type: 'paragraph',
          content: 'The WGN incident might have been dismissed as a technical glitch. But two hours later, it happened again — this time on WTTW, Chicago\'s PBS station, during a broadcast of the British science fiction show Doctor Who.',
        },
        {
          type: 'paragraph',
          content: 'This time, there was sound. And what viewers heard was deeply strange.',
        },
        {
          type: 'paragraph',
          content: 'The figure in the Max Headroom mask appeared against the same corrugated metal background, but now they were talking — or trying to. The audio was distorted, like it was being run through a synthesizer. The voice droned and slurred. The figure swayed erratically, making bizarre statements that seemed to mean nothing.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'What They Said',
          content: 'The figure\'s statements included references to WGN sportscaster Chuck Swirsky ("I just made a giant masterpiece for all the greatest world newspaper nerds"), the cartoon Clutch Cargo ("My brother is wearing the other one"), and the Coca-Cola slogan "Catch the Wave." Near the end, the figure moaned, bent over, and was spanked with a flyswatter by an unseen accomplice. Then the transmission ended.',
        },
        {
          type: 'paragraph',
          content: 'The whole thing lasted about 90 seconds. Then Doctor Who resumed as if nothing had happened. But something had happened — something that would obsess investigators, broadcasters, and internet sleuths for decades.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'How They Did It',
        },
        {
          type: 'paragraph',
          content: 'What the hijackers accomplished was technically impressive. In 1987, TV signals traveled from studios to broadcast towers via microwave links. To override a broadcast, you had to aim a more powerful microwave signal at the tower than the station was sending — and you had to do it from somewhere in the tower\'s line of sight.',
        },
        {
          type: 'paragraph',
          content: 'The equipment required was substantial: a high-powered microwave transmitter, a properly tuned antenna, and extensive knowledge of broadcast frequencies and FCC regulations. This wasn\'t something you could do with off-the-shelf electronics. The hijackers either had professional broadcasting experience or access to someone who did.',
        },
        {
          type: 'paragraph',
          content: 'WGN\'s engineers managed to retake their signal after about 25 seconds by switching to a backup transmission link. But WTTW had no engineers on duty at their transmitter that night — they couldn\'t respond. The hijackers had ninety uninterrupted seconds to do whatever they were doing.',
        },
        {
          type: 'quote',
          content: 'Whoever did this knew exactly what they were doing. This wasn\'t amateurs. This was someone with serious technical expertise and expensive equipment.',
          attribution: 'Broadcast engineer',
          role: 'Speaking to investigators, 1987',
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
          content: 'The FCC and FBI launched an immediate investigation. Broadcasting without a license was a federal crime. Hijacking someone else\'s signal was worse. If caught, the perpetrators faced serious prison time.',
        },
        {
          type: 'paragraph',
          content: 'WTTW offered a reward for information. Investigators interviewed broadcast engineers across the Chicago area. They examined the footage frame by frame, looking for clues in the background, in the audio, in anything that might identify the location or the people involved.',
        },
        {
          type: 'paragraph',
          content: 'They found nothing. The corrugated metal background revealed nothing about the location. The distorted voice couldn\'t be matched to anyone. The cultural references — Chuck Swirsky, Clutch Cargo, Coke commercials — seemed random. The investigation went cold.',
        },
        {
          type: 'paragraph',
          content: 'Nobody ever came forward. Nobody claimed credit. The FBI eventually closed the case, unsolved.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Theories',
        },
        {
          type: 'paragraph',
          content: 'In the decades since, amateur investigators have proposed countless theories. Disgruntled TV engineers. Phreakers — phone hackers — showing off their skills. College students from Northwestern or UIC pulling an elaborate prank. Performance artists making a statement about media manipulation.',
        },
        {
          type: 'paragraph',
          content: 'In 2010, a Reddit user claimed to know who did it — supposedly members of a Chicago hacker community in the 1980s. The claim was never verified. Other leads have surfaced over the years, all of them inconclusive.',
        },
        {
          type: 'paragraph',
          content: 'The most likely explanation is the most mundane: someone with broadcast engineering skills and a grudge against WGN (the references to Chuck Swirsky suggest the hijackers had specific beefs with the station) decided to make a point. They succeeded beyond their wildest dreams — and were smart enough to never get caught.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Why It Matters',
          content: 'The Max Headroom incident is the only broadcast signal intrusion in American history that remains completely unsolved. It\'s also almost impossible to replicate today — the switch from analog to digital broadcasting in 2009 made the technique used in 1987 obsolete. It was a crime uniquely suited to its moment in technological history.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Creep Factor',
        },
        {
          type: 'paragraph',
          content: 'What makes the Max Headroom incident so enduring isn\'t the technical achievement — it\'s the footage itself. There\'s something deeply unsettling about it. The swaying figure. The distorted voice. The rubber mask with its frozen grin. The spanking at the end, childish and inexplicable.',
        },
        {
          type: 'paragraph',
          content: 'It feels like a transmission from somewhere else — like the hijackers were trying to communicate something, but whatever they wanted to say got lost in translation. Or maybe there was no message. Maybe the incoherence was the point.',
        },
        {
          type: 'paragraph',
          content: 'The footage circulates endlessly online, rediscovered by each new generation. It\'s been analyzed, parodied, and memed. It shows up in "creepy unsolved mysteries" compilations. Something about it refuses to become ordinary, no matter how many times you watch it.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'On November 22, 1987, somebody hijacked Chicago television. They wore a rubber mask. They made no sense. They got away with it. The FBI gave up. The statute of limitations has long since expired. Whoever did it could confess tomorrow and face no legal consequences.',
        },
        {
          type: 'paragraph',
          content: 'But they never have. For almost forty years, they\'ve kept their secret. Maybe they\'re dead. Maybe they forgot. Or maybe they\'re still out there, watching the footage go viral again and again, knowing they pulled off something nobody else ever managed: a crime that became a legend, committed by ghosts who were never caught.',
        },
        {
          type: 'paragraph',
          content: 'Catch the wave.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Watching the Footage',
          content: 'The complete footage of both broadcast intrusions is widely available on YouTube and internet archives. Search for "Max Headroom incident" or "Max Headroom broadcast intrusion." Warning: many viewers find the footage genuinely disturbing.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'In 1987, someone in a Max Headroom mask hijacked two Chicago TV stations for 90 bizarre seconds. The FBI investigated for years. Nobody was ever caught.',
  },
}
