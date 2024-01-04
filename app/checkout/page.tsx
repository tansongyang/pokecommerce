import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pokécommerce | Checkout',
}

export default async function Checkout() {
  return (
    <div>
      <h1 className="heading-1">Checkout</h1>
    </div>
  )
}
