// Re-export everything from the modular essays structure
// This file is kept for backwards compatibility with existing imports

export {
  essays,
  getEssay,
  getEssaysForCity,
  getAllEssays,
} from './essays/index'

// Re-export individual essay collections for direct access
export {
  minneapolis_essays,
  fargo_essays,
  raleigh_essays,
  chicago_essays,
  salt_lake_city_essays,
  colorado_springs_essays,
  dallas_essays,
  anchorage_essays,
  denver_essays,
  tampa_essays,
  phoenix_essays,
  portland_essays,
} from './essays/index'
