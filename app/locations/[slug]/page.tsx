import { Metadata } from 'next'

import { fetchCart } from '@/app/lib/cart'
import { readItems, readLocation } from '@/app/lib/data'
import LocationItem from '@/app/ui/locations/item'

type Props = {
  params: { slug: string }
  searchParams: { handoff: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug

  const location = await readLocation(slug)

  return {
    title: `Pokécommerce | ${location.name}`,
  }
}

export default async function Location({ params, searchParams }: Props) {
  const [location, items] = await Promise.all([
    readLocation(params.slug),
    readItems(),
  ])

  const cart = await fetchCart()

  return (
    <div className="mx-auto max-w-lg">
      <h1 className="heading-1 text-center">{location.name}</h1>
      <ul className="grid grid-cols-2 gap-4 p-4">
        {items.map((i) => (
          <li key={i.id}>
            <LocationItem
              item={i}
              locationSlug={location.slug}
              handoff={cart?.handoff ?? searchParams.handoff}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
