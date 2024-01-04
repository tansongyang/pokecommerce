'use client'

import { useIsJsEnabled } from '@/app/hooks/useIsJsEnabled'
import CartButtonClient from '@/app/ui/cart/button-client'
import CartButtonServer from '@/app/ui/cart/button-server'

type Props = {
  CartContents: React.ReactNode
}

export default function CartButton({ CartContents }: Props) {
  const js = useIsJsEnabled()

  return js ? (
    <CartButtonClient CartContents={CartContents}></CartButtonClient>
  ) : (
    <CartButtonServer />
  )
}
