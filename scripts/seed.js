// @ts-check

const { db } = require('@vercel/postgres')
const { locations } = require('../app/lib/placeholder-data.js')

async function seedLocations(client) {
  try {
    // Create the "locations" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS locations (
        id INT PRIMARY KEY,
        name TEXT NOT NULL,
        region INT NOT NULL,
        description TEXT NOT NULL
      );
    `

    console.log(`Created "locations" table`)

    // Insert data into the "locations" table
    const insertedLocations = await Promise.all(
      locations.map(async (location) => {
        return client.sql`
          INSERT INTO locations (id, name, region, description)
          VALUES (${location.id}, ${location.name}, ${location.region}, ${location.description})
          ON CONFLICT (id) DO NOTHING;
      `
      }),
    )

    console.log(`Seeded ${insertedLocations.length} locations`)

    return {
      createTable,
      locations: insertedLocations,
    }
  } catch (error) {
    console.error('Error seeding locations:', error)
    throw error
  }
}

async function main() {
  const client = await db.connect()

  await seedLocations(client)

  // @ts-ignore
  await client.end()
}

main().catch((err) => {
  console.error('An error occurred while attempting to seed the database:', err)
})
