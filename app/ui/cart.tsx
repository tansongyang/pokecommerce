import { cookies } from 'next/headers'

import { fetchCart } from '@/app/lib/data'
import { Cart as CartData } from '@/app/lib/definitions'

export default async function Cart() {
  const cartId = Number(cookies().get('cartId')?.value)
  let cart: CartData | undefined

  if (cartId) {
    cart = await fetchCart(cartId)
  }

  return <button>{cart?.items?.length ?? 'Cart'}</button>
}
