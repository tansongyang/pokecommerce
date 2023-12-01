import { sql } from '@vercel/postgres'

import { Location, LocationRaw } from '@/app/lib/definitions'

export async function fetchLocations(zip: string): Promise<Array<Location>> {
  const region = zip < '50000' ? 1 : 2

  const data = await sql<LocationRaw>`
    SELECT id, name, region, description
    FROM locations
    WHERE region = ${region}
  `

  const locations = data.rows.map((location, i) => {
    const distance = Math.round(2 ** (i / 2))
    return { ...location, distance }
  })

  return locations
}
