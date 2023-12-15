'use client'

import { useState } from 'react'

import CartIcon from '@/app/ui/cart/icon'
import Modal from '@/app/ui/modal'

type Props = {
  CartContents: React.ReactNode
}

export default function CartButtonClient({ CartContents }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <CartIcon />
        <span className="sr-only">Open cart</span>
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {CartContents}
      </Modal>
    </>
  )
}
