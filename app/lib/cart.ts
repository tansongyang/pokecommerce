import { cookies } from 'next/headers'

import { readCart } from '@/app/lib/data'
import { Cart } from '@/app/lib/definitions'

export function getCartId(): number | undefined {
  const cartId = cookies().get('cartId')?.value
  return cartId ? Number(cartId) : undefined
}

export async function fetchCart(): Promise<Cart | undefined> {
  const cartId = getCartId()

  let cart: Cart | undefined
  if (cartId) {
    cart = await readCart(cartId)
  }

  return cart
}
