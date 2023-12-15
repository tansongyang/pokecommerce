import { cookies } from 'next/headers'

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
    return null
  }

  return (
    <div>
      <ul className="flex flex-col gap-y-4 p-4">
        {cart.items.map((l, i) => (
          <li key={i} className="flex justify-between">
            <span>{l.name}</span>
            <span>
              <Cost amount={l.cost} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
