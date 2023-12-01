import { Metadata } from 'next'

import { fetchLocations } from '@/app/lib/data'

export const metadata: Metadata = {
  title: 'Pokécommerce | Find a location',
}

export default async function Search({
  searchParams,
}: {
  searchParams: { zip: string }
}) {
  const locations = await fetchLocations(searchParams.zip)
  return (
    <ul className="flex flex-col gap-y-4 p-4">
      {locations.map((l) => (
        <li
          key={l.id}
          className="flex justify-between rounded-3xl border-2 border-primary p-4"
        >
          <p>{l.name}</p>
          <p>{`${l.distance} mi`} </p>
        </li>
      ))}
    </ul>
  )
}
