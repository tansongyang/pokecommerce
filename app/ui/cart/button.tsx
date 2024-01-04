'use client'

import { useIsJsEnabled } from '@/app/hooks/useIsJsEnabled'
import { Cart } from '@/app/lib/definitions'
import CartButtonClient from '@/app/ui/cart/button-client'
import CartButtonServer from '@/app/ui/cart/button-server'

type Props = {
  CartContents: React.ReactNode
  cart?: Cart
}

export default function CartButton({ CartContents, cart }: Props) {
  const isJsEnabled = useIsJsEnabled()

  return isJsEnabled ? (
    <CartButtonClient CartContents={CartContents} cart={cart} />
  ) : (
    <CartButtonServer />
  )
}
