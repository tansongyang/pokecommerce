'use client'

import { useEffect, useState } from 'react'

import CartButtonClient from '@/app/ui/cart/button-client'
import CartButtonServer from '@/app/ui/cart/button-server'

type Props = {
  CartContents: React.ReactNode
}

export default function CartButton({ CartContents }: Props) {
  const [hasJs, setHasJs] = useState(false)

  useEffect(() => {
    setHasJs(true)
  }, [])

  return hasJs ? (
    <CartButtonClient CartContents={CartContents}></CartButtonClient>
  ) : (
    <CartButtonServer />
  )
}
