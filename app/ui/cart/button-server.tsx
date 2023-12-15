import Link from 'next/link'

import CartIcon from '@/app/ui/cart/icon'

export default function CartButtonServer() {
  return (
    <Link href={'/cart'}>
      <CartIcon />
      <span className="sr-only">View cart</span>
    </Link>
  )
}
