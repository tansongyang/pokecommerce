import { sql } from '@vercel/postgres'

import { Cart, Item, Location } from '@/app/lib/definitions'

export async function createCart(): Promise<Cart> {
  const data = await sql<Cart>`
    INSERT INTO carts (items)
    VALUES ('[]')
    RETURNING id, items
  `

  return data.rows[0]
}

export async function fetchCart(id: number): Promise<Cart> {
  const data = await sql<Cart>`
    SELECT id, items
    FROM carts
    WHERE id = ${id}
  `

  return data.rows[0]
}

export async function updateCart(cart: Cart): Promise<void> {
  await sql`
    UPDATE carts
    SET items = ${JSON.stringify(cart.items)}
    WHERE id = ${cart.id}
  `
}

export async function fetchItem(id: number): Promise<Item> {
  const data = await sql<Item>`
    SELECT id, slug, name, sprite, cost
    FROM items
    WHERE id = ${id}
  `

  return data.rows[0]
}

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
