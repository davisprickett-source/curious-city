// Re-export everything from the modular cities structure
// This file is kept for backwards compatibility with existing imports

export {
  cities,
  getCity,
  getAllCitySlugs,
  getAllCities,
  getAllHiddenGems,
  getAllBestOf,
  getAllDarkHistory,
  getCityCuriosities,
  getCityHiddenGems,
  getCityBestOf,
  getCityDarkHistory,
  getCityEvents,
  getCityScenes,
  getCityLostAndLoved,
  getAllLostAndLoved,
} from './cities/index'

// Re-export individual cities for direct access
export {
  minneapolis,
  raleigh,
  chicago,
  salt_lake_city,
  colorado_springs,
  dallas,
  anchorage,
  fargo,
  denver,
  tampa,
  phoenix,
  portland,
} from './cities/index'
