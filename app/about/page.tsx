import { Metadata } from 'next'

import ExternalLink from '@/app/ui/external-link'

export const metadata: Metadata = {
  title: 'Pokécommerce | About',
}

export default function Home() {
  return (
    <div className="mx-auto max-w-[30ch]">
      <h1 className="heading-1">About</h1>
      <p>
        Pokécommerce is a Pokémon themed ecommerce app built by{' '}
        <ExternalLink href="https://github.com/tansongyang">
          Frank Tan
        </ExternalLink>{' '}
        to learn <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>
        .
      </p>
    </div>
  )
}
