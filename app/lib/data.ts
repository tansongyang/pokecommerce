import { sql } from '@vercel/postgres'

import { Cart, Item, Location } from '@/app/lib/definitions'

type CartData = Omit<Cart, 'locationSlug'> & {
  location_slug: string
}

async function mapCart(data?: CartData): Promise<Cart | undefined> {
  if (!data) {
    return undefined
  }

  return {
    id: data.id,
    items: data.items,
    total: data.items.reduce((sum, item) => sum + item.cost, 0),
    location: await fetchLocation(data.location_slug),
    handoff: data.handoff,
  }
}

export async function createCart(
  locationSlug: string,
  handoff: string,
): Promise<Cart> {
  const data = await sql<CartData>`
    INSERT INTO carts (items, location_slug, handoff)
    VALUES ('[]', ${locationSlug}, ${handoff})
    RETURNING id, items, location_slug, handoff
  `

  const cart = await mapCart(data.rows[0])

  return cart!
}

export async function fetchCart(id: number): Promise<Cart | undefined> {
  const data = await sql<CartData>`
    SELECT id, items, location_slug, handoff
    FROM carts
    WHERE id = ${id}
  `

  const cart = await mapCart(data.rows[0])

  return cart
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
