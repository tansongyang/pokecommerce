import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { placeOrder } from '@/app/lib/actions'
import { fetchCart } from '@/app/lib/cart'
import CartContents from '@/app/ui/cart/contents'
import Cost from '@/app/ui/cost'
import SubmitButton from '@/app/ui/submit-button'

export const metadata: Metadata = {
  title: 'Pokécommerce | Checkout',
}

export default async function Checkout() {
  const cart = await fetchCart()

  if (!cart) {
    redirect('/')
  }

  return (
    <form
      action={placeOrder}
      className="mx-auto flex max-w-sm flex-col gap-y-8"
    >
      <h1 className="heading-1 text-center">Checkout</h1>

      <div>
        <h2 className="text-lg font-bold">Your Cart</h2>
        <CartContents hideCheckoutButton={true} />
      </div>

      <div>
        <h2 className="mb-4 text-lg font-bold">Payment</h2>
        <p>We are currently only accepting cash payments.</p>
      </div>

      <SubmitButton>
        Pay <Cost amount={cart.total} />
      </SubmitButton>
    </form>
  )
}
