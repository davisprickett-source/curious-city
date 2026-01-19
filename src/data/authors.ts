/**
 * Author profiles for Curious City
 *
 * Each author has their own expertise and writing style.
 * These profiles add legitimacy and allow for content specialization.
 */

export interface Author {
  id: string
  name: string
  bio: string
  avatar?: string
  expertise: string[]
  location?: string
  social?: {
    twitter?: string
    linkedin?: string
  }
}

export const authors: Record<string, Author> = {
  'curious-city': {
    id: 'curious-city',
    name: 'The Curious City',
    bio: 'Uncovering the untold stories of American cities',
    expertise: ['urban-history', 'curiosities', 'hidden-gems'],
  },

  'rachel-morrison': {
    id: 'rachel-morrison',
    name: 'Rachel Morrison',
    bio: 'Urban historian and former museum curator specializing in forgotten communities and displacement. MA in Public History from NYU.',
    expertise: ['dark-history', 'social-history', 'urban-renewal', 'forgotten-communities'],
    location: 'Chicago, IL',
  },

  'james-chen': {
    id: 'james-chen',
    name: 'James Chen',
    bio: 'Architecture writer and photographer documenting disappearing buildings and urban design. Former architect turned storyteller.',
    expertise: ['architecture', 'urban-design', 'historic-preservation', 'neighborhoods'],
    location: 'Portland, OR',
  },

  'maria-gonzalez': {
    id: 'maria-gonzalez',
    name: 'Maria Gonzalez',
    bio: 'Food historian and James Beard Award nominee. Traces the origins of regional dishes and immigrant food culture.',
    expertise: ['food-history', 'culinary-culture', 'restaurants', 'immigrant-stories'],
    location: 'Minneapolis, MN',
  },

  'david-winters': {
    id: 'david-winters',
    name: 'David Winters',
    bio: 'Investigative journalist covering unsolved mysteries, cold cases, and forgotten crimes. Former crime reporter for major metro dailies.',
    expertise: ['true-crime', 'mysteries', 'investigations', 'cold-cases'],
    location: 'Denver, CO',
  },

  'sarah-kim': {
    id: 'sarah-kim',
    name: 'Sarah Kim',
    bio: 'Cultural anthropologist and travel writer exploring the weird, wonderful, and unexpected in American cities.',
    expertise: ['curiosities', 'weird-history', 'urban-legends', 'folk-culture'],
    location: 'Seattle, WA',
  },

  'thomas-blackwell': {
    id: 'thomas-blackwell',
    name: 'Thomas Blackwell',
    bio: 'Industrial historian and disaster researcher. Examines how catastrophes shaped modern safety regulations.',
    expertise: ['disasters', 'industrial-history', 'engineering', 'safety-regulations'],
    location: 'Raleigh, NC',
  },

  'elena-vasquez': {
    id: 'elena-vasquez',
    name: 'Elena Vasquez',
    bio: 'Immigration historian and oral history specialist. Documents the stories of diaspora communities in American cities.',
    expertise: ['immigration', 'diaspora', 'oral-history', 'cultural-preservation'],
    location: 'Phoenix, AZ',
  },

  'marcus-reid': {
    id: 'marcus-reid',
    name: 'Marcus Reid',
    bio: 'Music and nightlife historian tracking the evolution of urban entertainment districts and underground scenes.',
    expertise: ['music-history', 'nightlife', 'entertainment', 'cultural-scenes'],
    location: 'Dallas, TX',
  },

  'jennifer-wu': {
    id: 'jennifer-wu',
    name: 'Jennifer Wu',
    bio: 'Local business journalist and neighborhood expert. Covers hidden gems, small businesses, and community anchors.',
    expertise: ['local-business', 'neighborhoods', 'hidden-gems', 'community'],
    location: 'Chicago, IL',
  },
}

// Helper function to get author by ID
export function getAuthor(authorId: string): Author {
  return authors[authorId] || authors['curious-city']
}

// Helper function to get authors by expertise
export function getAuthorsByExpertise(expertise: string): Author[] {
  return Object.values(authors).filter(author =>
    author.expertise.includes(expertise)
  )
}
