import type { Article } from '@/types/article'
import { marieEqui } from './marie-equi'
import { millEndsPark } from './mill-ends-park'

export const vanportFlood: Article = {
  slug: 'vanport-flood',
  citySlug: 'portland',
  title: 'The Vanport Flood: A City Erased in 35 Minutes',
  subtitle: 'In 1948, Oregon\'s second-largest city was destroyed by a flood. Officials had promised residents they were safe. The city was never rebuilt. The demographics of Portland changed forever.',
  excerpt: 'Vanport was Oregon\'s second-largest city by 1948, home to 18,500 people — including most of Portland\'s Black population. On May 30, 1948, officials assured residents the dikes would hold. At 4:17 PM, they didn\'t. The city was underwater in 35 minutes. It was never rebuilt. The flood permanently reshaped Portland.',
  author: {
    name: 'The Curious City',
    bio: 'Uncovering buried history',
  },
  publishedAt: '2025-01-09T12:00:00Z',
  featuredImage: {
    src: '/portland/articles/vanport-flood.png',
    alt: 'Aerial view of Vanport flooding, 1948',
    credit: 'Oregon Historical Society',
  },
  category: 'history',
  tags: ['portland', 'disaster', 'history', 'civil-rights', 'housing', 'forgotten-history'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'There\'s a place in North Portland where you can stand on what used to be Oregon\'s second-largest city. It doesn\'t look like much now — just Delta Park, with its soccer fields and parking lots and the Portland International Raceway. But in 1948, 18,500 people lived here, in a city called Vanport. On May 30 of that year, the city ceased to exist.',
        },
        {
          type: 'paragraph',
          content: 'The story of Vanport is a story about race, about displacement, about the way disasters aren\'t just natural — they\'re political. It\'s a story about who gets protected and who gets left behind. And it\'s a story Portland has spent decades trying to forget.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Instant City',
        },
        {
          type: 'paragraph',
          content: 'Vanport was born from war. In 1942, Henry Kaiser\'s shipyards in Portland desperately needed workers to build ships for the war effort. Workers flooded into the city — tens of thousands of them — and there was nowhere to put them. Housing was scarce. Racism made it scarcer for the Black workers recruited from the South.',
        },
        {
          type: 'paragraph',
          content: 'The solution was Vanport. Built in just 110 days on the Columbia River floodplain, it became the largest wartime housing project in America — 10,000 apartments and row houses, complete with schools, theaters, a hospital, and a shopping center. By 1944, 40,000 people lived there. It was, briefly, Oregon\'s second-largest city.',
        },
        {
          type: 'paragraph',
          content: 'The city was integrated by necessity, not choice. Black families lived alongside white families because there was nowhere else for them to go — Portland\'s restrictive covenants and discriminatory housing practices made the rest of the city off-limits. Vanport became, by default, the center of Black life in Oregon.',
        },
        {
          type: 'quote',
          content: 'Vanport was segregated in practice but not on paper. Black families were concentrated in certain sections. We knew where we were and weren\'t welcome. But at least we had somewhere to live.',
          attribution: 'Vanport resident',
          role: 'Oral history interview',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Floodplain',
        },
        {
          type: 'paragraph',
          content: 'Everyone knew Vanport was built in a dangerous place. The city sat on reclaimed marshland at the confluence of the Columbia and Willamette Rivers, surrounded by railroad dikes that kept the water at bay. During the war, the housing was meant to be temporary — the danger was accepted because the need was urgent.',
        },
        {
          type: 'paragraph',
          content: 'But the war ended, and Vanport remained. Many residents had nowhere else to go. For Black families especially, Vanport was often the only option in a region where redlining and discrimination blocked access to conventional housing. By 1948, the population had declined but stabilized around 18,500.',
        },
        {
          type: 'paragraph',
          content: 'That spring, the Columbia River swelled with snowmelt from a particularly heavy winter. By late May, the river was running 15 feet above normal. Local officials monitored the dikes. They were concerned but not alarmed.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Assurance',
          content: 'On May 30, 1948 — Memorial Day — the Housing Authority of Portland distributed leaflets to Vanport residents: "REMEMBER: DIKES ARE SAFE AT PRESENT. YOU WILL BE WARNED IF NECESSARY. YOU WILL HAVE TIME TO LEAVE. DON\'T GET EXCITED."',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Break',
        },
        {
          type: 'paragraph',
          content: 'At 4:17 PM on May 30, 1948, a 200-foot section of the Smith Lake railroad dike gave way. The breach happened without warning — no sirens, no time. Water from Smith Lake, backed up by the flooding Columbia, poured through the gap.',
        },
        {
          type: 'paragraph',
          content: 'Within ten minutes, the water was chest-deep. Within thirty minutes, Vanport was gone.',
        },
        {
          type: 'paragraph',
          content: 'The flood was unlike anything witnesses had seen. The water didn\'t rise gradually — it surged. Buildings were lifted off their foundations and carried away. Cars floated like toys. People scrambled for higher ground, for rooftops, for anything that would keep them above the rising tide.',
        },
        {
          type: 'quote',
          content: 'The water came so fast you couldn\'t believe it. One moment you\'re standing in your living room, the next moment there\'s water up to your chest and the furniture is floating. We had no warning. None.',
          attribution: 'Survivor testimony',
          role: 'Oregon Historical Society archives',
        },
        {
          type: 'paragraph',
          content: 'Rescue efforts were improvised and chaotic. Boats appeared from nearby. Residents formed human chains. Some people were plucked from rooftops; others were carried away by the current. By nightfall, the entire city was underwater — some areas submerged under 15 feet of muddy floodwater.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Dead',
        },
        {
          type: 'paragraph',
          content: 'The official death toll was 15. Nobody believes that number.',
        },
        {
          type: 'paragraph',
          content: 'Survivors and historians have long argued the actual number was much higher — possibly hundreds. The city\'s transient population made accurate counts difficult. Many residents were single men with no local family. Record-keeping was poor. Bodies were never recovered from the mud and debris.',
        },
        {
          type: 'paragraph',
          content: 'In the days after the flood, reports circulated of bodies being buried without identification, of residents who simply disappeared, of families searching Red Cross lists for relatives who never appeared. The Housing Authority had every incentive to minimize casualties. Investigations were cursory.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Disputed Count',
          content: 'The official death toll of 15 has been contested for decades. Historian Manly Maben wrote that "as many as 200" may have died. Former residents have described seeing many more bodies. The true toll will likely never be known.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Aftermath',
        },
        {
          type: 'paragraph',
          content: 'Vanport was never rebuilt. The city was erased, its land eventually converted to parks and industrial use. The 18,500 people who lived there — including most of Portland\'s Black population — were scattered.',
        },
        {
          type: 'paragraph',
          content: 'Most displaced residents had to find housing in a city that didn\'t want them. Portland\'s restrictive covenants remained in force. Real estate agents refused to show houses in white neighborhoods to Black families. The Albina district — one of the few areas where Black families could buy property — absorbed many Vanport survivors, setting the stage for generations of concentrated poverty and, later, gentrification.',
        },
        {
          type: 'paragraph',
          content: 'The flood, in other words, didn\'t just destroy a city. It shaped Portland\'s racial geography for the next seventy years.',
        },
        {
          type: 'quote',
          content: 'Vanport created a Black community in Portland. The flood displaced it. What happened afterward — Albina, the I-5 corridor, urban renewal — you can\'t understand any of it without understanding Vanport.',
          attribution: 'Karen Gibson',
          role: 'Urban historian, Portland State University',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Blame',
        },
        {
          type: 'paragraph',
          content: 'Who was responsible? The official story: an act of God. The dikes were designed to hold, but the river was too high, the pressure too great. Nobody could have predicted the failure. Nobody was at fault.',
        },
        {
          type: 'paragraph',
          content: 'That narrative has not aged well.',
        },
        {
          type: 'paragraph',
          content: 'Critics have noted that the dikes were old railroad levees, never designed for permanent residential protection. The Housing Authority knew the risks — internal documents showed concern about flooding dating back years. The Memorial Day leaflet assuring residents they\'d have time to evacuate was distributed just hours before the breach.',
        },
        {
          type: 'paragraph',
          content: 'Whether through negligence, miscalculation, or deliberate indifference to a population that was poor and Black, the authorities failed. The people of Vanport died not because the flood was unforeseeable, but because nobody with power cared enough to protect them.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Memory',
        },
        {
          type: 'paragraph',
          content: 'For decades, Vanport was barely remembered. The city became Delta Park. The history was buried. Oregon\'s textbooks rarely mentioned it. Portland told a different story about itself — one that didn\'t include the second-largest city in the state drowning on Memorial Day.',
        },
        {
          type: 'paragraph',
          content: 'That has changed slowly. The Oregon Historical Society has documented survivor testimonies. Local scholars have written about the disaster\'s racial dimensions. A memorial was finally erected at the site. But the forgetting lasted a long time, and the scars remain.',
        },
        {
          type: 'paragraph',
          content: 'Vanport matters because it reveals something true about the Pacific Northwest\'s racial history — a history that contradicts the region\'s self-image as progressive and tolerant. Oregon wasn\'t progressive for the Black families who lived at Vanport. It was a place where you could drown in 35 minutes because nobody thought your neighborhood was worth protecting.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'Today, you can walk across Delta Park and try to imagine a city. It\'s not easy. The land is flat, unremarkable, given over to recreation and commerce. Nothing remains of the buildings, the streets, the lives that were lived here.',
        },
        {
          type: 'paragraph',
          content: 'But if you look closely, you can find a small memorial near the park entrance. It marks the spot where Oregon\'s second-largest city stood, for a few years, before the water came and swept it away. The names of the dead are listed — the official 15, anyway. The others, the uncounted, remain unmarked.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Finding the Memorial',
          content: 'The Vanport Memorial is located near the entrance to Delta Park, off N. Victory Boulevard. A small plaque and interpretive markers explain the history. The site is free and open during park hours.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'In 1948, the Vanport Flood destroyed Oregon\'s second-largest city in 35 minutes. Officials had promised residents they were safe. The city was never rebuilt. Here\'s the story Portland forgot.',
  },
}

export const articles: Article[] = [vanportFlood, marieEqui, millEndsPark]
