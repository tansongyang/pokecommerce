import Link from 'next/link'

import Cart from '@/app/ui/cart'

export default async function Header() {
  return (
    <header className="grid grid-cols-5 gap-4 p-4 text-pokemonblue dark:text-pokemonyellow">
      <div></div>
      <Link
        href="/"
        className="col-span-3 text-center text-2xl font-bold tracking-widest"
      >
        pokécommerce
      </Link>
      <Cart />
    </header>
  )
}
