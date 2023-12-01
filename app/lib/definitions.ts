export type Location = LocationRaw & {
  distance: number
}

export type LocationRaw = {
  id: string
  name: string
  region: number
  description: string
}
