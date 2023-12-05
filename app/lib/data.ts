import { sql } from '@vercel/postgres'

import { Item, Location } from '@/app/lib/definitions'

export async function fetchItems(): Promise<Item[]> {
  const data = await sql<Item>`
    SELECT id, slug, name, sprite, cost
    FROM items
  `

  return data.rows
}

export async function fetchLocation(slug: string): Promise<Location> {
  const data = await sql<Location>`
    SELECT id, slug, name, region, description
    FROM locations
    WHERE slug = ${slug}
  `

  return data.rows[0]
}

export async function fetchLocations(zip: string): Promise<Location[]> {
  const region = zip < '50000' ? 'kanto' : 'johto'

  const data = await sql<Location>`
    SELECT id, slug, name, region, description
    FROM locations
    WHERE region = ${region}
  `

  return data.rows
}
