import Link from 'next/link'

import { fetchCart } from '@/app/lib/cart'
import Cost from '@/app/ui/cost'

type Props = {
  hideAddMoreButton?: boolean
  hideCheckoutButton?: boolean
}

export default async function CartContents({
  hideAddMoreButton,
  hideCheckoutButton,
}: Props) {
  const cart = await fetchCart()

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
      {hideAddMoreButton ? null : (
        <Link
          href={`/locations/${cart.location.slug}`}
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
