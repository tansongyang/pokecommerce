import { Metadata } from 'next'
import Image from 'next/image'

import { addItem } from '@/app/lib/actions'
import { fetchItems, fetchLocation } from '@/app/lib/data'
import Cost from '@/app/ui/cost'
import SubmitButton from '@/app/ui/submit-button'

type Props = {
  params: { slug: string }
  searchParams: { handoff: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug

  const location = await fetchLocation(slug)

  return {
    title: `Pokécommerce | ${location.name}`,
  }
}

export default async function Location({ params, searchParams }: Props) {
  const [location, items] = await Promise.all([
    fetchLocation(params.slug),
    fetchItems(),
  ])

  return (
    <div>
      <h1 className="heading-1 text-center">{location.name}</h1>
      <ul className="grid grid-cols-2 gap-4 p-4">
        {items.map((i) => (
          <li key={i.id} className="card flex items-center gap-x-2">
            <Image
              src={i.sprite}
              width={30}
              height={30}
              alt={`Image of ${i.name}`}
            />
            <form action={addItem} className="flex grow flex-col gap-y-4">
              <p className="font-bold">{i.name}</p>
              <p>
                <Cost amount={i.cost} />
              </p>
              <input name="itemId" value={i.id} readOnly hidden />
              <input name="locationSlug" value={params.slug} readOnly hidden />
              <input
                name="handoff"
                value={searchParams.handoff}
                readOnly
                hidden
              />
              <SubmitButton text="Add" />
            </form>
          </li>
        ))}
      </ul>
    </div>
  )
}
