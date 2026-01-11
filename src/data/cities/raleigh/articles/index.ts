import type { Article } from '@/types/article'
import { dorotheaDixCemetery } from './dorothea-dix-cemetery'
import { raleighSpeedway } from './raleigh-speedway'

export const villageUnderground: Article = {
  slug: 'village-underground',
  citySlug: 'raleigh',
  title: 'Punk Rock in a Bomb Shelter: The Village Underground',
  subtitle: 'Beneath a Fresh Market in Raleigh lies a sealed 20,000-square-foot bomb shelter that once hosted The Ramones, Iggy Pop, and The Police. David Sedaris thought it was what New York looked like. Now it\'s just a parking lot.',
  excerpt: 'From 1971 to 1984, a Cold War bomb shelter beneath Raleigh\'s Village District hosted The Ramones, Iggy Pop, The Police, Sonic Youth, and David Sedaris\'s high school imagination. The entrance was designed to look like a NYC subway station. Now it\'s sealed beneath a grocery store. Your organic kale sits directly above where punk happened.',
  author: {
    name: 'The Curious City',
    bio: 'Uncovering hidden history',
  },
  publishedAt: '2025-01-09T12:00:00Z',
  featuredImage: {
    src: '/raleigh/articles/village-underground.png',
    alt: 'The Village Underground entrance in Raleigh, 1970s',
    credit: 'Raleigh Historical Society',
  },
  category: 'history',
  tags: ['raleigh', 'music', 'punk', 'history', 'underground', 'cold-war'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'Beneath The Fresh Market in Raleigh\'s Village District — beneath the organic produce and artisanal cheeses and cold-pressed juices — lies something unexpected. A 20,000-square-foot Cold War bomb shelter, now sealed and abandoned, where punk rock found a Southern home. The Ramones played here. Iggy Pop played here. David Sedaris, as a Raleigh high schooler, walked down those stairs and thought he\'d found New York City.',
        },
        {
          type: 'paragraph',
          content: 'The Village Underground was never supposed to exist. A bomb shelter became a shopping complex became a legendary music venue became a memory buried under asphalt and refrigeration units. Its story spans Cold War paranoia, Southern entrepreneurship, and the strange alchemy that turns a bunker into a cultural landmark.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Shelter',
        },
        {
          type: 'paragraph',
          content: 'In the early 1960s, Cold War anxiety drove Americans underground — sometimes literally. Fallout shelters sprouted across the country. Some were backyard affairs; others were elaborate community bunkers. In Raleigh, a developer named J.W. York decided to build one beneath his new shopping center at Cameron Village.',
        },
        {
          type: 'paragraph',
          content: 'The underground space was massive: 20,000 square feet of reinforced concrete, designed to withstand nuclear fallout. It had thick walls, filtered air systems, and the brutalist utilitarian aesthetic of Cold War architecture. The Cuban Missile Crisis made such shelters feel necessary. The detente that followed made them feel absurd.',
        },
        {
          type: 'paragraph',
          content: 'By the early 1970s, nobody was thinking about nuclear war anymore. The bomb shelter sat empty beneath Cameron Village, an expensive piece of paranoid infrastructure with no purpose. Until someone had an idea.',
        },
        {
          type: 'quote',
          content: 'It was just sitting there, this huge underground space. The nuclear war never came. We figured we might as well do something fun with it.',
          attribution: 'Village Underground developer',
          role: 'Raleigh News & Observer, 1975',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Subway',
        },
        {
          type: 'paragraph',
          content: 'In 1971, the Village Underground opened. The entrance was designed to look like a New York City subway station — complete with painted murals of trains, turnstiles, and underground tile work. Visitors descending the stairs felt like they were entering another world, a piece of Manhattan transplanted to the North Carolina piedmont.',
        },
        {
          type: 'paragraph',
          content: 'The space housed roughly 30 shops, restaurants, and clubs. There were record stores, head shops, boutiques — the eclectic mix of 1970s counterculture commerce. But the main attraction was the live music venues. The Underground brought national touring acts to Raleigh, giving Southern kids access to artists they\'d otherwise have to travel hours to see.',
        },
        {
          type: 'paragraph',
          content: 'And the acts came. The Police played the Village Underground before they were The Police. The Ramones brought New York punk to the South. Iggy Pop, Pat Benatar, Steve Martin, George Carlin — the list of performers who played this subterranean Raleigh venue reads like a who\'s-who of 1970s and early 1980s entertainment.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Roster',
          content: 'Confirmed performances at the Village Underground include The Ramones, Iggy Pop, The Police, Sonic Youth, Pat Benatar, Steve Martin, George Carlin, and dozens of other national acts. For a brief period, Raleigh\'s bomb shelter was one of the South\'s premier live music destinations.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Scene',
        },
        {
          type: 'paragraph',
          content: 'For Raleigh teenagers in the late 1970s, the Village Underground was a portal. Above ground was the suburban South — conservative, predictable, boring. Below ground was something else entirely.',
        },
        {
          type: 'paragraph',
          content: 'David Sedaris, who spent his high school years in Raleigh, later wrote about the Underground. The fake subway entrance convinced teenage Sedaris that he\'d discovered what New York was really like — an underground world of clubs and music and possibility. It was fake New York, built from painted murals and wishful thinking, but it felt real enough.',
        },
        {
          type: 'paragraph',
          content: 'The Underground became a gathering place for Raleigh\'s creative misfits. Musicians, artists, weirdos of all stripes — the kind of people who didn\'t fit the Raleigh mold found each other in a bomb shelter designed for nuclear war. The space spawned bands, relationships, and art scenes that shaped Raleigh for years afterward.',
        },
        {
          type: 'quote',
          content: 'We\'d walk down those subway stairs and feel like we\'d left Raleigh entirely. It didn\'t matter that the subway was painted on. It felt like escape. That was enough.',
          attribution: 'Former Underground regular',
          role: 'Oral history interview',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Closing',
        },
        {
          type: 'paragraph',
          content: 'The Village Underground closed in 1984. The official reason was fire code violations — the underground space lacked adequate emergency exits for the crowds it was attracting. There may have been other factors: changing tastes, rising rents, the difficulty of maintaining a subterranean shopping complex.',
        },
        {
          type: 'paragraph',
          content: 'When it closed, the space was sealed. The shops were cleared out, the murals presumably left in place, the whole complex locked away. Above ground, the shopping center continued to evolve. Cameron Village became The Village District. The Fresh Market moved in where the Underground entrance once stood.',
        },
        {
          type: 'paragraph',
          content: 'The Underground is still there — all 20,000 square feet of it — sealed beneath the modern retail development. Nobody goes down there anymore. The painted subway murals, if they survive, sit in darkness. The stage where The Ramones played is now a storage void.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Sealed Away',
          content: 'The Village Underground was never demolished — it was simply sealed. The space remains beneath the current retail development, inaccessible and unused. Occasional proposals to reopen it have never moved forward.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Legacy',
        },
        {
          type: 'paragraph',
          content: 'Raleigh\'s music scene didn\'t die with the Underground, but it changed. The acts that played there moved on to bigger venues or smaller clubs. The kids who grew up there became adults. The counterculture moment passed.',
        },
        {
          type: 'paragraph',
          content: 'But the Underground left a mark. It proved that Raleigh could sustain a real live music scene, that Southern audiences wanted more than country and beach music. The clubs and venues that followed — Cat\'s Cradle in Chapel Hill, The Ritz in Raleigh — built on what the Underground started.',
        },
        {
          type: 'paragraph',
          content: 'There\'s something fitting about the Underground\'s fate. A bomb shelter built for apocalypse became a temple of youth culture, then a sealed memory beneath organic groceries. Cold War paranoia to punk rock to cold-pressed juice: that\'s a distinctly American trajectory, and a distinctly Raleigh one.',
        },
        {
          type: 'quote',
          content: 'Every time I shop at Fresh Market, I think about what\'s underneath. The Ramones played there. Iggy Pop played there. And now it\'s just sitting empty, twenty feet below the cheese section.',
          attribution: 'Raleigh music historian',
          role: 'Local podcast interview',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'Walk through The Village District today and you\'ll find no trace of the Underground. The entrance is gone. The murals are buried. The stages where national acts once played are now whatever you store beneath a supermarket.',
        },
        {
          type: 'paragraph',
          content: 'But the Underground was real. For thirteen years, Raleigh had a punk rock bomb shelter, a fake subway to nowhere, a portal to somewhere else. The organic kale at Fresh Market sits directly above where The Ramones played. The past isn\'t always visible, but it\'s always there.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Finding the Site',
          content: 'The Fresh Market at 2036 Cameron Street sits on the approximate site of the Village Underground entrance. There is no marker or commemoration. The space remains sealed beneath the current development, visible only in photographs and memories.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'From 1971 to 1984, a Cold War bomb shelter beneath Raleigh hosted The Ramones, Iggy Pop, and The Police. The Village Underground is now sealed beneath The Fresh Market.',
  },
}

export const articles: Article[] = [villageUnderground, dorotheaDixCemetery, raleighSpeedway]
