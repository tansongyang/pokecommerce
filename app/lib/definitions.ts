export type Location = {
  id: number
  slug: string
  name: string
  region: string
  description: string
}

export type PokemonRaw = {
  id: number
  slug: string
  name: string
  sprite: string
  type1: string
  type2: string
  hp: number
  attack: number
  defense: number
  specialattack: number
  specialdefense: number
  speed: number
}

export type Pokemon = PokemonRaw & {
  price: number
}
