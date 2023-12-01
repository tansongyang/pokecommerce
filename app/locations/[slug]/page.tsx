import { Metadata } from 'next'
import Image from 'next/image'

import { fetchAllPokemon, fetchLocation } from '@/app/lib/data'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug

  const location = await fetchLocation(slug)

  return {
    title: `Pokécommerce | ${location.name}`,
  }
}

export default async function Locations({ params }: Props) {
  const [location, pokemon] = await Promise.all([
    fetchLocation(params.slug),
    fetchAllPokemon(),
  ])

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">{location.name}</h1>
      <ul className="flex flex-col gap-y-4 p-4">
        {pokemon.map((p) => (
          <li key={p.id} className="card flex gap-x-4">
            <Image
              src={p.sprite}
              width={100}
              height={100}
              alt={`Image of ${p.name}`}
            />
            <div className="flex flex-col justify-between">
              <p className="font-bold">{p.name}</p>
              <p>${p.price}.00</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
