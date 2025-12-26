// Re-export everything from the modular history structure
// This file is kept for backwards compatibility with existing imports

export {
  history,
  getHistory,
  getHistoryForCity,
  getAllHistory,
} from './history/index'

// Re-export individual history collections for direct access
export {
  minneapolis_history,
  fargo_history,
  raleigh_history,
  chicago_history,
  salt_lake_city_history,
  colorado_springs_history,
  dallas_history,
  anchorage_history,
  denver_history,
  tampa_history,
  phoenix_history,
  portland_history,
} from './history/index'
