import { sql } from '@vercel/postgres'

import { Location, Pokemon, PokemonRaw } from '@/app/lib/definitions'

export async function fetchLocation(slug: string): Promise<Location> {
  const data = await sql<Location>`
    SELECT id, slug, name, region, description
    FROM locations
    WHERE slug = ${slug}
  `

  return data.rows[0]
}

export async function fetchLocations(zip: string): Promise<Array<Location>> {
  const region = zip < '50000' ? 'kanto' : 'johto'

  const data = await sql<Location>`
    SELECT id, slug, name, region, description
    FROM locations
    WHERE region = ${region}
  `

  return data.rows
}

export async function fetchAllPokemon(): Promise<Array<Pokemon>> {
  const data = await sql<PokemonRaw>`
    SELECT
      id, slug, name, sprite, type1, type2, hp, attack, defense, specialattack,
      specialdefense, speed
    FROM pokemon
  `

  const pokemon = data.rows.map((p) => ({
    ...p,
    price:
      p.hp +
      p.attack +
      p.defense +
      p.specialattack +
      p.specialdefense +
      p.speed,
  }))

  return pokemon
}
