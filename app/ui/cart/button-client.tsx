'use client'

import { useCallback, useState } from 'react'

import { usePathnameChangeListener } from '@/app/hooks/usePathnameChangeListener'
import CartIcon from '@/app/ui/cart/_icon'
import Modal from '@/app/ui/modal'

type Props = {
  CartContents: React.ReactNode
}

export default function CartButtonClient({ CartContents }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  usePathnameChangeListener(
    useCallback(() => {
      setIsOpen(false)
    }, []),
  )

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <CartIcon />
        <span className="sr-only">Open cart</span>
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Your Cart">
        {CartContents}
      </Modal>
    </>
  )
}
