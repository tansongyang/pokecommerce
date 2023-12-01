import { sql } from '@vercel/postgres'

import { Location } from '@/app/lib/definitions'

export async function fetchLocation(slug: string): Promise<Location> {
  const data = await sql<Location>`
    SELECT id, slug, name, region, description
    FROM locations
    WHERE slug = ${slug}
  `

  return data.rows[0]
}

export async function fetchLocations(zip: string): Promise<Array<Location>> {
  const region = zip < '50000' ? 1 : 2

  const data = await sql<Location>`
    SELECT id, slug, name, region, description
    FROM locations
    WHERE region = ${region}
  `

  return data.rows
}
