import Link from 'next/link'

import CartIcon from '@/app/ui/cart/_icon'

export default function CartButtonJsDisabled() {
  return (
    <Link href={'/cart'}>
      <CartIcon />
      <span className="sr-only">View cart</span>
    </Link>
  )
}
