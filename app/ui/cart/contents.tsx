import Link from 'next/link'

import { fetchCart } from '@/app/lib/cart'
import { Cart } from '@/app/lib/definitions'
import Cost from '@/app/ui/cost'

type Props = {
  cart?: Cart
  hideAddMoreButton?: boolean
  hideCheckoutButton?: boolean
}

export default async function CartContents({
  cart,
  hideAddMoreButton,
  hideCheckoutButton,
}: Props) {
  const _cart = cart ?? (await fetchCart())

  if (!_cart) {
    return <p className="p-8 text-center">Your cart is empty.</p>
  }

  const handoff = _cart.handoff[0].toUpperCase() + _cart.handoff.slice(1)

  return (
    <div className="flex flex-col gap-y-4 p-4">
      <p>
        <strong>{handoff}</strong> from <strong>{_cart.location.name}</strong>
      </p>
      <ul className="flex flex-col gap-y-4">
        {_cart.items.map((l, i) => (
          <li key={i} className="flex justify-between">
            <span>{l.name}</span>
            <span>
              <Cost amount={l.cost} />
            </span>
          </li>
        ))}
        <li key="total" className="flex justify-between font-bold">
          <span>Total</span>
          <span>
            <Cost amount={_cart.total} />
          </span>
        </li>
      </ul>
      {hideAddMoreButton ? null : (
        <Link
          href={`/locations/${_cart.location.slug}`}
          className="button text-center"
        >
          Add More
        </Link>
      )}
      {hideCheckoutButton ? null : (
        <Link href="/checkout" className="button text-center">
          Checkout
        </Link>
      )}
    </div>
  )
}
