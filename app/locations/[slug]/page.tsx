import { Metadata } from 'next'

import { fetchLocation } from '@/app/lib/data'

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
  const location = await fetchLocation(params.slug)

  return <h1 className="text-center text-2xl font-bold">{location.name}</h1>
}
