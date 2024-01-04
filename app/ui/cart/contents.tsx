import { cookies } from 'next/headers'
import Link from 'next/link'

import { fetchCart } from '@/app/lib/data'
import { Cart } from '@/app/lib/definitions'
import Cost from '@/app/ui/cost'

export default async function CartContents() {
  const cartId = Number(cookies().get('cartId')?.value)

  let cart: Cart | undefined
  if (cartId) {
    cart = await fetchCart(cartId)
  }

  if (!cart) {
    return <p className="p-8 text-center">Your cart is empty.</p>
  }

  const handoff = cart.handoff[0].toUpperCase() + cart.handoff.slice(1)

  return (
    <div className="flex flex-col gap-y-4 p-4">
      <p>
        <strong>{handoff}</strong> from <strong>{cart.location.name}</strong>
      </p>
      <ul className="flex flex-col gap-y-4">
        {cart.items.map((l, i) => (
          <li key={i} className="flex justify-between">
            <span>{l.name}</span>
            <span>
              <Cost amount={l.cost} />
            </span>
          </li>
        ))}
      </ul>
      <Link href="/checkout" className="button text-center">
        Checkout
      </Link>
    </div>
  )
}
