// @ts-check

const { db } = require('@vercel/postgres')
const { locations, pokemon } = require('../app/lib/placeholder-data.js')

async function seedLocations(client) {
  try {
    // Create the "locations" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS locations (
        id INT PRIMARY KEY,
        slug TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL UNIQUE,
        region INT NOT NULL,
        description TEXT NOT NULL
      );
    `

    console.log(`Created table "locations"`)

    const createIndex = await client.sql`
      CREATE UNIQUE INDEX IF NOT EXISTS slug_idx ON locations (slug)
    `

    console.log(`Created index on "locations (slug)"`)

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

async function seedPokemon(client) {
  try {
    // Create the "pokemon" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS pokemon (
        id INT PRIMARY KEY,
        slug TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL UNIQUE,
        sprite TEXT NOT NULL,
        type1 TEXT NOT NULL,
        type2 TEXT,
        hp INT NOT NULL,
        attack INT NOT NULL,
        defense INT NOT NULL,
        specialattack INT NOT NULL,
        specialdefense INT NOT NULL,
        speed INT NOT NULL
      );
    `

    console.log(`Created table "pokemon"`)

    const createIndex = await client.sql`
      CREATE UNIQUE INDEX IF NOT EXISTS slug_idx ON pokemon (slug)
    `

    console.log(`Created index on "pokemon (slug)"`)

    // Insert data into the "pokemon" table
    const insertedPokemon = await Promise.all(
      pokemon.map(async (p) => {
        return client.sql`
          INSERT INTO pokemon (
            id, slug, name, sprite, type1, type2, hp, attack, defense,
            specialattack, specialdefense, speed
          )
          VALUES (
            ${p.id}, ${p.slug}, ${p.name}, ${p.sprite}, ${p.type1}, ${p.type2},
            ${p.hp}, ${p.attack}, ${p.defense}, ${p.specialattack},
            ${p.specialdefense}, ${p.speed}
          )
          ON CONFLICT (id) DO NOTHING;
        `
      }),
    )

    console.log(`Seeded ${insertedPokemon.length} pokemon`)

    return {
      createTable,
      createIndex,
      pokemon: insertedPokemon,
    }
  } catch (error) {
    console.error('Error seeding pokemon:', error)
    throw error
  }
}

async function main() {
  const client = await db.connect()

  await seedLocations(client)
  await seedPokemon(client)

  // @ts-ignore
  await client.end()
}

main().catch((err) => {
  console.error('An error occurred while attempting to seed the database:', err)
})
