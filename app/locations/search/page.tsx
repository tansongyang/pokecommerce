import { Metadata } from 'next'
import Link from 'next/link'

import { readLocations } from '@/app/lib/data'
import LocationsSearchResult from '@/app/locations/search/result'

type Props = {
  searchParams: {
    handoff: string
    zip: string
  }
}

export const metadata: Metadata = {
  title: 'Pokécommerce | Find a location',
}

export default async function LocationsSearch({ searchParams }: Props) {
  const locations = await readLocations(searchParams.zip)

  return (
    <ul className="mx-auto flex max-w-sm flex-col gap-y-4 p-4">
      {locations.map((l) => (
        <li key={l.id}>
          <LocationsSearchResult location={l} handoff={searchParams.handoff} />
        </li>
      ))}
    </ul>
  )
}
