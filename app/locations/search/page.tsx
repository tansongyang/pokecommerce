import { Metadata } from 'next'
import Link from 'next/link'

import { readLocations } from '@/app/lib/data'

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
        <li key={l.id} className="card flex flex-col gap-y-4">
          <p className="font-bold">{l.name}</p>
          <p>{l.description}</p>
          <Link
            href={`/locations/${l.slug}?handoff=${searchParams.handoff}`}
            className="button text-center"
          >
            Order now
          </Link>
        </li>
      ))}
    </ul>
  )
}
