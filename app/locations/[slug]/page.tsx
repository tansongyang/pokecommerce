import { Metadata } from 'next'
import Image from 'next/image'

import { fetchItems, fetchLocation } from '@/app/lib/data'

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

export default async function Location({ params }: Props) {
  const [location, items] = await Promise.all([
    fetchLocation(params.slug),
    fetchItems(),
  ])

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">{location.name}</h1>
      <ul className="grid grid-cols-2 gap-4 p-4">
        {items.map((i) => (
          <li key={i.id} className="card flex items-center gap-x-2">
            <Image
              src={i.sprite}
              width={30}
              height={30}
              alt={`Image of ${i.name}`}
            />
            <div className="flex flex-col justify-between">
              <p className="font-bold">{i.name}</p>
              <p>¥${i.cost}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
