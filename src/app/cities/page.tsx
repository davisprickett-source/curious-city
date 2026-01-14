import { getAllCities } from '@/data/cities'

export default async function CitiesPage() {
  const cities = await getAllCities()

  return (
    <div>
      <h1>Cities Page (Debug Mode)</h1>
      {cities.map(city => (
        <p key={city.slug}>{city.name}</p>
      ))}
    </div>
  )
}
