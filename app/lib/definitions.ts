export type Location = LocationRaw & {
  distance: number
}

export type LocationRaw = {
  id: string
  slug: string
  name: string
  region: number
  description: string
}
