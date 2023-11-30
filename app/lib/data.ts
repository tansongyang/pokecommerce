type Language = {
  name: string
}

type Location = {
  id: string
  names: Array<{ language: Language; name: string }>
}

// Order comes from https://nintendo.fandom.com/wiki/Kanto
const KANTO_CITY_IDS = [86, 154, 231, 68, 151, 232, 67, 76, 234, 71]
// Order comes from https://nintendo.fandom.com/wiki/Johto
const JOHTO_CITY_IDS = [84, 69, 153, 228, 229, 75, 85, 70, 230, 65]
const EASTERN_IDS = [...KANTO_CITY_IDS, ...JOHTO_CITY_IDS]
const WESTERN_IDS = [...JOHTO_CITY_IDS, ...KANTO_CITY_IDS]

export async function fetchLocations(zip: string) {
  const ids = zip < '50000' ? EASTERN_IDS : WESTERN_IDS

  const page = ids.slice(0, 10)

  const results = await Promise.allSettled<Location>(
    page.map((id) =>
      fetch(`https://pokeapi.co/api/v2/location/${id}/`).then((r) => r.json()),
    ),
  )

  const locations = results
    .filter((r) => r.status === 'fulfilled')
    .map((r, i) => {
      const fulfilled = r as PromiseFulfilledResult<Location>
      const location = fulfilled.value

      const name = location.names.find((n) => n.language.name === 'en')!.name

      const distance = Math.round(2 ** (i / 2))

      return { id: location.id, name, distance }
    })

  return locations
}
