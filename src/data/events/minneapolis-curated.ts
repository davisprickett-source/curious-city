/**
 * Minneapolis - Manually Curated Events
 *
 * This file contains events that APIs don't know about:
 * - Warehouse parties
 * - Pop-ups announced on Instagram
 * - Local newsletter discoveries
 * - Word-of-mouth recommendations
 *
 * These events automatically get a +25 score boost for being manually curated.
 *
 * HOW TO ADD AN EVENT:
 * 1. Copy the template below
 * 2. Fill in the details
 * 3. Set featured: true if it's especially cool
 * 4. Add your name to addedBy so we know who found it
 */

import type { CuratedEvent } from './types'

export const minneapolisCuratedEvents: CuratedEvent[] = [
  // === TEMPLATE (copy this for new events) ===
  // {
  //   title: 'Event Title',
  //   description: 'Why this is cool, in 2-3 sentences.',
  //   startDate: '2026-01-20T20:00:00',
  //   endDate: '2026-01-20T23:00:00',
  //   location: 'Venue Name, Neighborhood',
  //   category: 'concerts', // concerts | nightlife | food-drink | art | comedy | sports | theater | markets
  //   tags: ['music', 'local'],
  //   href: 'https://link-to-event-or-venue.com',
  //   featured: true,
  //   source: 'manual',
  //   addedBy: 'your-name',
  //   addedAt: '2026-01-09T12:00:00',
  //   curatorNotes: 'Found via @venue_instagram',
  // },

  // === EXAMPLE CURATED EVENTS ===
  {
    title: 'Vinyl Dungeon: Rare Records Pop-Up',
    description: 'A secret basement sale of rare Minneapolis punk and funk vinyl. Cash only, first come first served. The kind of thing that doesn\'t get posted on Eventbrite.',
    startDate: '2026-01-18T14:00:00',
    endDate: '2026-01-18T18:00:00',
    location: 'Secret Location (DM @vinyldungeonmpls for address)',
    category: 'markets',
    tags: ['music', 'vinyl', 'local', 'underground'],
    featured: true,
    source: 'manual',
    addedBy: 'dav',
    addedAt: '2026-01-09T10:00:00',
    curatorNotes: 'Found via @vinyldungeonmpls Instagram story. Limited to 50 people.',
  },
  {
    title: 'Northeast Warehouse Rave: New Year Continuation',
    description: 'The New Year party that never ended. Three rooms of house, techno, and ambient. BYOB, no phones on the dance floor.',
    startDate: '2026-01-11T22:00:00',
    endDate: '2026-01-12T06:00:00',
    location: 'TBA Northeast (RSVP for address)',
    category: 'nightlife',
    tags: ['electronic', 'underground', 'rave', 'local'],
    href: 'https://ra.co/events/minneapolis',
    featured: true,
    source: 'manual',
    addedBy: 'dav',
    addedAt: '2026-01-09T10:00:00',
    curatorNotes: 'From RA Minneapolis listings. Legit underground crew.',
  },
  {
    title: 'Chef Yia Vang Private Dinner: Hmong New Year',
    description: 'The James Beard-nominated chef hosts an intimate 20-person dinner celebrating Hmong New Year. Seven courses, wine pairings, stories from his family\'s journey.',
    startDate: '2026-01-25T18:30:00',
    endDate: '2026-01-25T22:00:00',
    location: 'Union Hmong Kitchen, Northeast',
    category: 'food-drink',
    tags: ['food', 'fine-dining', 'hmong', 'local'],
    href: 'https://www.exploretock.com/unionhmongkitchen',
    featured: true,
    source: 'manual',
    addedBy: 'dav',
    addedAt: '2026-01-09T10:00:00',
    curatorNotes: 'Announced on his newsletter. Will sell out fast.',
  },
]

/**
 * Events to hide from Minneapolis listings
 * Add event titles or IDs here to suppress them
 */
export const minneapolisHiddenEvents: string[] = [
  // 'Corporate Networking Mixer at Downtown Marriott',
  // 'ticketmaster-event-id-12345',
]
