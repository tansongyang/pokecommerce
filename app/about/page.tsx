import { Metadata } from 'next'

import ExternalLink from '@/app/ui/external-link'

export const metadata: Metadata = {
  title: 'Pokécommerce | About',
}

export default function Home() {
  return (
    <p className="m-auto w-[30ch]">
      Welcome to Pokécommerce, a Pokémon themed ecommerce app built by{' '}
      <ExternalLink href="https://github.com/tansongyang">
        Frank Tan
      </ExternalLink>
      . This project&apos;s goal is to help me learn{' '}
      <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>.
    </p>
  )
}
