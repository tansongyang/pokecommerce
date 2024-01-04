import { cookies } from 'next/headers'

import { fetchCart as readCart } from '@/app/lib/data'
import { Cart } from '@/app/lib/definitions'

export async function fetchCart(): Promise<Cart | undefined> {
  const cartId = Number(cookies().get('cartId')?.value)

  let cart: Cart | undefined
  if (cartId) {
    cart = await readCart(cartId)
  }

  return cart
}
