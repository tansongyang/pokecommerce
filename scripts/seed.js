// @ts-check

const { db } = require('@vercel/postgres')
const { locations, items } = require('../app/lib/placeholder-data.js')

async function seedLocations(client) {
  try {
    // Create the "locations" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS locations (
        id INT PRIMARY KEY,
        slug TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL UNIQUE,
        region TEXT NOT NULL,
        description TEXT NOT NULL
      );
    `

    console.log(`Created table "locations"`)

    const createIndex = await client.sql`
      CREATE UNIQUE INDEX IF NOT EXISTS slug_idx ON locations (slug)
    `

    console.log(`Created index on "locations" (slug)`)

    // Insert data into the "locations" table
    const insertedLocations = await Promise.all(
      locations.map(async (location) => {
        return client.sql`
          INSERT INTO locations (id, slug, name, region, description)
          VALUES (
            ${location.id}, ${location.slug}, ${location.name},
            ${location.region}, ${location.description}
          )
          ON CONFLICT (id) DO NOTHING;
        `
      }),
    )

    console.log(`Seeded ${insertedLocations.length} locations`)

    return {
      createTable,
      createIndex,
      locations: insertedLocations,
    }
  } catch (error) {
    console.error('Error seeding locations:', error)
    throw error
  }
}

async function seedItems(client) {
  try {
    // Create the "items" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS items (
        id INT PRIMARY KEY,
        slug TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL UNIQUE,
        sprite TEXT NOT NULL,
        cost INT NOT NULL
      );
    `

    console.log(`Created table "items"`)

    const createIndex = await client.sql`
      CREATE UNIQUE INDEX IF NOT EXISTS slug_idx ON items (slug)
    `

    console.log(`Created index on "items" (slug)`)

    // Insert data into the "items" table
    const insertedItems = await Promise.all(
      items.map(async (i) => {
        return client.sql`
          INSERT INTO items (id, slug, name, sprite, cost)
          VALUES (${i.id}, ${i.slug}, ${i.name}, ${i.sprite}, ${i.cost})
          ON CONFLICT (id) DO NOTHING;
        `
      }),
    )

    console.log(`Seeded ${insertedItems.length} items`)

    return {
      createTable,
      createIndex,
      items: insertedItems,
    }
  } catch (error) {
    console.error('Error seeding items:', error)
    throw error
  }
}

async function createCarts(client) {
  try {
    // Create the "carts" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS carts (
        id SERIAL PRIMARY KEY,
        items JSONB NOT NULL,
        location_slug TEXT NOT NULL,
        handoff TEXT NOT NULL
      );
    `

    console.log(`Created table "carts"`)
    return {
      createTable,
    }
  } catch (error) {
    console.error('Error creating table "carts":', error)
    throw error
  }
}

async function createOrders(client) {
  try {
    // Create the "orders" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        cart_id INT
      );
    `

    console.log(`Created table "orders"`)
    return {
      createTable,
    }
  } catch (error) {
    console.error('Error creating table "orders":', error)
    throw error
  }
}

async function main() {
  const client = await db.connect()

  await seedLocations(client)
  await seedItems(client)
  await createCarts(client)
  await createOrders(client)

  // @ts-ignore
  await client.end()
}

main().catch((err) => {
  console.error('An error occurred while attempting to seed the database:', err)
})
