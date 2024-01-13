'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import { usePathnameChangeListener } from '@/app/hooks/usePathnameChangeListener'
import { Cart } from '@/app/lib/definitions'
import CartIcon from '@/app/ui/cart/_icon'
import Modal from '@/app/ui/modal'

type Props = {
  cart?: Cart
  children?: React.ReactNode
}

export default function CartButton({ cart, children }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  usePathnameChangeListener(
    useCallback(() => {
      setIsOpen(false)
    }, []),
  )

  const itemCountRef = useRef(cart?.items.length)
  useEffect(() => {
    const itemCount = cart?.items.length
    if (itemCount && itemCount !== itemCountRef.current) {
      setIsOpen(true)
    }
    itemCountRef.current = itemCount
  }, [cart?.items.length])

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <CartIcon />
        <span className="sr-only">Open cart</span>
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Your Cart">
        {children}
      </Modal>
    </>
  )
}
