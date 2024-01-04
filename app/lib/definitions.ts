export type Cart = {
  id: number
  items: Array<Pick<Item, 'slug' | 'name' | 'cost'>>
  locationSlug: string
  handoff: string
}

export type Item = {
  id: number
  slug: string
  name: string
  sprite: string
  cost: number
}

export type Location = {
  id: number
  slug: string
  name: string
  region: string
  description: string
}
