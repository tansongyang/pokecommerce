import Link from 'next/link'

import { fetchCart } from '@/app/lib/cart'
import CartButton from '@/app/ui/cart/button'
import CartContents from '@/app/ui/cart/contents'

export default async function Header() {
  const cart = await fetchCart()

  return (
    <header className="grid grid-cols-5 gap-4 p-4 text-pokemonblue dark:text-pokemonyellow">
      <div></div>
      <Link
        href="/"
        className="col-span-3 text-center text-2xl font-bold tracking-widest"
      >
        pokécommerce
      </Link>
      <div className="flex justify-end">
        <CartButton
          CartContents={<CartContents cart={cart} hideAddMoreButton={true} />}
          cart={cart}
        />
      </div>
    </header>
  )
}
