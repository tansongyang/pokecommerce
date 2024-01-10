'use client'

import { useIsJsEnabled } from '@/app/hooks/useIsJsEnabled'
import { Cart } from '@/app/lib/definitions'
import CartButtonJsDisabled from '@/app/ui/cart/button-js-disabled'
import CartButtonJsEnabled from '@/app/ui/cart/button-js-enabled'

type Props = {
  CartContents: React.ReactNode
  cart?: Cart
}

export default function CartButton({ CartContents, cart }: Props) {
  const isJsEnabled = useIsJsEnabled()

  return isJsEnabled ? (
    <CartButtonJsEnabled CartContents={CartContents} cart={cart} />
  ) : (
    <CartButtonJsDisabled />
  )
}
