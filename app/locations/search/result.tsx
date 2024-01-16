import Link from 'next/link'

import { Location } from '@/app/lib/definitions'

type Props = {
  location: Location
  handoff: string
}
export default function LocationsSearchResult({ location, handoff }: Props) {
  return (
    <div className="card flex flex-col gap-y-4">
      <p className="font-bold">{location.name}</p>
      <p>{location.description}</p>
      <Link
        href={`/locations/${location.slug}?handoff=${handoff}`}
        className="button text-center"
      >
        Order now
      </Link>
    </div>
  )
}
