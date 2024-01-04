import { Metadata } from 'next'

import { readOrder } from '@/app/lib/data'
import CartContents from '@/app/ui/cart/contents'

type Props = {
  params: { id: string }
}

export const metadata: Metadata = {
  title: 'Pokécommerce | Thank You!',
}

export default async function Order({ params }: Props) {
  const order = await readOrder(Number(params.id))

  return (
    <div className="mx-auto max-w-[30ch]">
      <h1 className="heading-1 text-center">Thank you for your order!</h1>
      <CartContents
        cart={order.cart}
        hideAddMoreButton={true}
        hideCheckoutButton={true}
      />
    </div>
  )
}
