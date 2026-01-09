import { History } from '@/types/content'

export const anchorage_premium_history: Record<string, History> = {
  'the-last-frontier-city-premium': {
    slug: 'the-last-frontier-city-premium',
    citySlug: 'anchorage',
    title: 'The Last Frontier City',
    subtitle: 'Strip malls, moose calving in backyards, and the strange normalcy of living at 61 degrees north',
    author: 'Curious City',
    publishedAt: '2024-12-22',
    heroImage: {
      src: '/sequences/anchorage/anchorage-1/frame_0001.jpg',
      alt: 'Anchorage with the Chugach Mountains',
      position: 'center',
    },
    premium: {
      isPremium: true,
      estimatedReadTime: '10 min',
    },
    blocks: [
      // Video 1: Intro - strip malls and wilderness contradiction
      {
        id: 'video1',
        type: 'video-sequence',
        videoPath: '/sequences/anchorage/anchorage-1',
        scrollHeight: 220,
        textBlocks: [
          {
            id: 'p1',
            type: 'paragraph',
            dropcap: true,
            content: 'Anchorage is not what people imagine when they imagine Alaska. They imagine glaciers and grizzlies and vast emptiness, and Anchorage has all that within a few hours\' drive, but the city itself is strip malls and chain restaurants and traffic on the Glenn Highway during rush hour. It looks like any mid-sized Western city transplanted to an impossible latitude, dropped between the Chugach Mountains and the Cook Inlet, surrounded by wilderness but functioning like it could be anywhere. This is the contradiction at the heart of Alaska\'s largest city: it exists to service the frontier while being nothing like the frontier itself.',
          },
        ],
      },
      // Video 2: Mountains backdrop - bears, moose
      {
        id: 'video2',
        type: 'video-sequence',
        videoPath: '/sequences/anchorage/anchorage-2',
        scrollHeight: 180,
        textBlocks: [
          {
            id: 'p2',
            type: 'paragraph',
            content: 'The mountains are always there, rising directly behind the city, snow-covered most of the year, so close they seem like a backdrop on a stage. You can be sitting in traffic on Northern Lights Boulevard, staring at a Walmart, and turn your head to see peaks that rival anything in the Lower 48. The juxtaposition never stops being strange. Bears wander through neighborhoods in the fall, moose calve in backyards in the spring, and the local news treats these encounters with the casualness of weather reports. This is what it means to live at the edge of the wild.',
          },
          {
            id: 'quote1',
            type: 'pullquote',
            content: 'This is the contradiction at the heart of Alaska\'s largest city: it exists to service the frontier while being nothing like the frontier itself.',
          },
        ],
      },
      // Video 3: Oil and pipeline
      {
        id: 'video3',
        type: 'video-sequence',
        videoPath: '/sequences/anchorage/anchorage-3',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'sub1',
            type: 'subheading',
            content: 'The Check Everyone Gets',
          },
          {
            id: 'p3',
            type: 'paragraph',
            content: 'Anchorage barely existed before oil. The city was founded in 1914 as a construction port for the Alaska Railroad, but it remained a frontier outpost until Prudhoe Bay changed everything. When oil started flowing through the Trans-Alaska Pipeline in 1977, the money transformed Anchorage from a town of 48,000 into a city of nearly 300,000. The oil companies built their headquarters here, the state government distributed petroleum revenues through the Permanent Fund Dividend, and Anchorage became the improbable metropolis that Alaska\'s wealth required.',
          },
        ],
      },
      // Video 4: PFD checks
      {
        id: 'video4',
        type: 'video-sequence',
        videoPath: '/sequences/anchorage/anchorage-4',
        scrollHeight: 180,
        textBlocks: [
          {
            id: 'p4',
            type: 'paragraph',
            content: 'Every fall, every Alaskan receives a check from the state — their share of the oil wealth, typically between $1,000 and $3,000 depending on the year. The PFD, as it\'s called, is sacred in Alaska politics, untouchable, the reason the state has no income tax and no sales tax and a government that lurches between surplus and crisis depending on oil prices. Anchorage runs on this money, directly and indirectly, and the city\'s fortunes rise and fall with the price of a barrel of crude.',
          },
        ],
      },
      // Video 5: Light - midnight sun (combined with video 6 for same paragraph)
      {
        id: 'video5',
        type: 'video-sequence',
        videoPath: '/sequences/anchorage/anchorage-5',
        scrollHeight: 160,
        textBlocks: [
          {
            id: 'sub2',
            type: 'subheading',
            content: 'The Light and the Dark',
          },
          {
            id: 'p5a',
            type: 'paragraph',
            content: 'The light in Alaska is legendary and disorienting. In June, the sun barely sets — a few hours of twilight around midnight before it rises again. The city stays up late, everyone outside grilling and biking and hiking at 10 pm because sleep feels like a waste of light.',
          },
        ],
      },
      // Video 6: Dark - winter (continuation of same paragraph)
      {
        id: 'video6',
        type: 'video-sequence',
        videoPath: '/sequences/anchorage/anchorage-6',
        scrollHeight: 180,
        textBlocks: [
          {
            id: 'p5b',
            type: 'paragraph',
            content: 'Conversely, December brings only five hours of daylight, the sun scraping along the southern horizon before disappearing again. The dark does things to people. Seasonal affective disorder is endemic, and the state\'s rates of alcoholism and suicide are among the highest in the nation. Living here requires adjusting to rhythms that humans did not evolve for.',
          },
          {
            id: 'quote2',
            type: 'pullquote',
            content: 'Living here requires adjusting to rhythms that humans did not evolve for.',
          },
        ],
      },
      // Video 7: Military and transient population
      {
        id: 'video7',
        type: 'video-sequence',
        videoPath: '/sequences/anchorage/anchorage-7',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p6',
            type: 'paragraph',
            content: 'The population is transient in ways that mark the culture. Military families rotate through Joint Base Elmendorf-Richardson, oil workers cycle in and out of the North Slope, young people come for adventure and leave when they want career advancement. The ones who stay are a particular breed — people who have calculated the tradeoffs of isolation and darkness and decided the wilderness access and the PFD checks and the freedom of frontier life are worth it. Alaskans are proud of their toughness in ways that can seem performative from outside and feel essential from inside.',
          },
        ],
      },
      // Video 8: Native and indigenous presence
      {
        id: 'video8',
        type: 'video-sequence',
        videoPath: '/sequences/anchorage/anchorage-8',
        scrollHeight: 150,
        textBlocks: [
          {
            id: 'p7',
            type: 'paragraph',
            content: 'The indigenous presence is more visible here than in most American cities. Anchorage sits on Dena\'ina Athabascan land, and Alaska Natives make up about eight percent of the city\'s population. The Alaska Native Medical Center serves indigenous people from across the state, and Native corporations — created by the Alaska Native Claims Settlement Act of 1971 — are major economic players. This history is complicated and ongoing, the relationship between indigenous sovereignty and state government and federal policy a negotiation that never quite resolves.',
          },
        ],
      },
      // Video 9: Outdoor culture / hiking
      {
        id: 'video9',
        type: 'video-sequence',
        videoPath: '/sequences/anchorage/anchorage-9',
        scrollHeight: 180,
        textBlocks: [
          {
            id: 'p8',
            type: 'paragraph',
            content: 'The outdoor culture is absolute and classless. Millionaire oil executives and minimum-wage workers fish the same rivers, ski the same mountains, pick berries from the same bushes. The wilderness is the great equalizer, and access to it is what Alaskans mean when they talk about freedom. You can be forty minutes from downtown and see no other humans, standing in a landscape that looks like the Pleistocene, and this accessibility is what makes the strip malls tolerable. The city is a base camp, not a destination.',
          },
        ],
      },
      // Video 10: Climate change
      {
        id: 'video10',
        type: 'video-sequence',
        videoPath: '/sequences/anchorage/anchorage-10',
        scrollHeight: 180,
        textBlocks: [
          {
            id: 'p9',
            type: 'paragraph',
            content: 'Climate change is more visible here than almost anywhere in America. Glaciers that tourists came to see are retreating visibly, year over year. Permafrost is melting, buckling roads and collapsing buildings in villages across the state. The winters are warmer and shorter, the salmon runs are changing, the boreal forest is shifting north. Alaska is warming twice as fast as the global average, and Anchorage sits at the center of this transformation, its economy built on fossil fuels even as those fuels alter the landscape that makes Alaska Alaska.',
          },
        ],
      },
      // Video 11: Final conclusion (REVERSED)
      // Extra scrollHeight to ensure video plays fully before document ends
      {
        id: 'video11',
        type: 'video-sequence',
        videoPath: '/sequences/anchorage/anchorage-11',
        scrollHeight: 350,
        textBlocks: [
          {
            id: 'p10',
            type: 'paragraph',
            content: 'To live in Anchorage is to live with contradiction. It\'s a city that exists because of oil but is being transformed by what oil has done. It\'s a gateway to wilderness that looks like suburban sprawl. It\'s part of America but reachable only by plane or boat or a very long drive through Canada. The mountains rise behind the city, permanent and indifferent, and the inlet stretches toward volcanoes across the water, and the moose wander through the neighborhoods eating ornamental plants, and somehow three hundred thousand people have decided this improbable place is home.',
          },
        ],
      },
    ],
  },
}
