import { Metadata } from 'next'

import CartContents from '@/app/ui/cart/contents'

export const metadata: Metadata = {
  title: 'Pokécommerce | Cart',
}

export default function Cart() {
  return (
    <div className="mx-auto max-w-[30ch]">
      <h1 className="heading-1 text-center">Your Cart</h1>
      <CartContents />
    </div>
  )
}
